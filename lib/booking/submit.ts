import { after } from "next/server";
import type { RowDataPacket } from "mysql2/promise";
import { getDbPool } from "@/lib/db";
import {
  getAvailabilityConfig,
  getBookableService,
  getCrmUnavailableSlots,
  slotLabelsToIntervals,
  unavailableSlotLabels,
} from "@/lib/booking/availability";
import { createFreeBooking, validateBookingRequest } from "@/lib/booking/create";
import { syncAppointmentToCrm } from "@/lib/booking/crm";
import { sendBookingEmails } from "@/lib/booking/emails";
import {
  cancelPendingBooking,
  createCheckoutSession,
  encodePaymentNotes,
  isOnlinePaymentEnabled,
  newPaidOrderHash,
} from "@/lib/booking/payment";
import {
  allowsPromoCode,
  formatAud,
  isFreeTier,
  isWebsiteServiceId,
  isoToDdMmYyyy,
  promoDiscountPercentage,
  slotDuration,
  timeSlotLabels,
} from "@/lib/booking/services";

export interface SubmitBookingResult {
  status: number;
  body: Record<string, unknown>;
}

function weekdayOf(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

/**
 * Creates a consultation from an already-checked booking payload.
 * Callers must apply their own rate limit, honeypot, and Turnstile check first.
 */
export async function submitBooking(body: Record<string, unknown>): Promise<SubmitBookingResult> {
  const validation = validateBookingRequest(body);
  if (!validation.ok) {
    return { status: 400, body: { success: false, message: "Please check the highlighted fields.", errors: validation.errors } };
  }
  const booking = validation.data;

  const db = getDbPool();
  if (!db) {
    return { status: 503, body: { success: false, message: "Online booking is temporarily unavailable. Please call us to book." } };
  }

  if (!isWebsiteServiceId(booking.serviceId)) {
    return { status: 400, body: { success: false, message: "Invalid consultation type selected." } };
  }

  try {
    const service = await getBookableService(booking.serviceId);
    if (!service) {
      return { status: 400, body: { success: false, message: "Selected consultation is not available." } };
    }

    if (isFreeTier(booking.serviceId) && !booking.freeConsultAcknowledged) {
      return { status: 400, body: { success: false, message: "Please acknowledge the free consultation terms before continuing." } };
    }

    let discountAmount = 0;
    if (booking.promoCode) {
      if (!allowsPromoCode(booking.serviceId)) {
        return { status: 400, body: { success: false, message: "Promo codes are not available for this consultation type." } };
      }
      const percentage = promoDiscountPercentage(booking.promoCode);
      if (percentage === null) {
        return { status: 400, body: { success: false, message: "Invalid promo code." } };
      }
      discountAmount = Math.round(service.priceAud * percentage) / 100;
    }
    const listPrice = service.priceAud;
    const finalAmount = Math.max(0, Math.round((listPrice - discountAmount) * 100) / 100);

    const requiresPayment = finalAmount > 0;
    if (requiresPayment && !isOnlinePaymentEnabled()) {
      return {
        status: 400,
        body: {
          success: false,
          code: "PAYMENT_UNAVAILABLE",
          message: "Online payment is not available yet. Please call 0422 905 860 to book a paid consultation.",
        },
      };
    }

    const [noeRows] = await db.query<RowDataPacket[]>(
      "SELECT title FROM nature_of_enquiry WHERE id = ? AND status = 1 LIMIT 1",
      [booking.noeId]
    );
    if (noeRows.length === 0) {
      return { status: 400, body: { success: false, message: "Please select a valid type of legal matter." } };
    }
    const natureOfEnquiry = String(noeRows[0].title);

    const availability = await getAvailabilityConfig();
    if (
      !availability ||
      booking.isoDate <= availability.today ||
      availability.disabledWeekdays.includes(weekdayOf(booking.isoDate)) ||
      availability.disabledDates.includes(booking.isoDate)
    ) {
      return {
        status: 400,
        body: { success: false, code: "DATE_UNAVAILABLE", message: "The selected date is not available. Please choose another date." },
      };
    }
    const duration = slotDuration(service.duration);
    if (!timeSlotLabels(availability.startTime, availability.endTime, duration).includes(booking.timeLabel)) {
      return { status: 400, body: { success: false, message: "Please select a valid time slot." } };
    }

    const crmBusy = slotLabelsToIntervals(await getCrmUnavailableSlots(booking.isoDate));
    if (unavailableSlotLabels([booking.timeLabel], duration, crmBusy).length > 0) {
      return {
        status: 409,
        body: {
          success: false,
          code: "SLOT_TAKEN",
          message: "This appointment time slot is already booked. Please select a different time slot.",
        },
      };
    }

    if (requiresPayment) {
      const orderHash = newPaidOrderHash();
      const notes = { promoCode: booking.promoCode ? booking.promoCode.toUpperCase() : null, listPrice };
      const pending = await createFreeBooking({
        request: booking,
        paymentType: "stripe",
        durationMinutes: duration,
        pendingPayment: { amount: finalAmount, orderHash, notes: encodePaymentNotes(notes) },
      });
      if (!pending.ok) {
        return { status: pending.status, body: { success: false, code: pending.code, message: pending.message } };
      }

      try {
        const checkoutUrl = await createCheckoutSession({
          appointmentId: pending.appointmentId,
          orderHash,
          amount: finalAmount,
          email: booking.email,
          fullName: booking.fullname,
          serviceTitle: service.title,
          isoDate: booking.isoDate,
          timeLabel: booking.timeLabel,
          notes,
        });
        console.info(`[Booking] Appointment ${pending.appointmentId} awaiting payment for ${booking.isoDate} ${booking.timeLabel}`);
        return {
          status: 200,
          body: {
            success: true,
            requiresPayment: true,
            checkoutUrl,
            paymentRef: orderHash,
            appointmentId: pending.appointmentId,
            message: "Redirecting you to our secure payment page...",
          },
        };
      } catch (error) {
        console.error(`[Booking] Could not start payment for appointment ${pending.appointmentId}:`, error);
        await cancelPendingBooking(orderHash).catch(() => {});
        return {
          status: 502,
          body: { success: false, message: "We couldn't start the online payment. Please try again or call 0422 905 860." },
        };
      }
    }

    const paymentType = isFreeTier(booking.serviceId) ? "free_consultation" : "promo_free";
    const result = await createFreeBooking({ request: booking, paymentType, durationMinutes: duration });
    if (!result.ok) {
      return { status: result.status, body: { success: false, code: result.code, message: result.message } };
    }

    const displayDate = isoToDdMmYyyy(booking.isoDate);
    const promoCode = booking.promoCode ? booking.promoCode.toUpperCase() : null;

    after(async () => {
      const [mail] = await Promise.allSettled([
        sendBookingEmails({
          appointmentId: result.appointmentId,
          fullName: booking.fullname,
          email: booking.email,
          phone: booking.phone,
          date: displayDate,
          time: booking.timeLabel,
          serviceTitle: service.title,
          natureOfEnquiry,
          consultationType: booking.consultationType,
          description: booking.description,
          amountLabel: listPrice > 0 ? `${formatAud(0)} (${promoCode} promo applied)` : "Free",
        }),
        syncAppointmentToCrm(
          {
            id: result.appointmentId,
            orderHash: result.orderHash,
            fullName: booking.fullname,
            email: booking.email,
            phone: booking.phone,
            isoDate: booking.isoDate,
            time24: booking.time24,
            timeslotFull: booking.timeLabel,
            timezone: "Australia/Melbourne",
            noeId: booking.noeId,
            serviceId: booking.serviceId,
            durationMinutes: service.duration,
            consultationType: booking.consultationType,
            description: booking.description,
          },
          {
            isPaid: false,
            amount: listPrice,
            discountAmount: Math.round((listPrice - finalAmount) * 100) / 100,
            finalAmount,
            promoCode,
            paymentStatus: "completed",
            paymentMethod: paymentType,
            paidAt: result.createdAt,
            confirmedAt: result.createdAt,
            status: "10",
          }
        ),
      ]);
      if (mail.status === "fulfilled") {
        console.info(
          `[Booking] Appointment ${result.appointmentId} emails: firm=${mail.value.firmSent} client=${mail.value.clientSent}`
        );
      }
    });

    console.info(`[Booking] Appointment ${result.appointmentId} created for ${booking.isoDate} ${booking.timeLabel}`);
    return {
      status: 200,
      body: {
        success: true,
        message: `Your appointment is booked for ${displayDate} at ${booking.timeLabel}.`,
        appointmentId: result.appointmentId,
      },
    };
  } catch (error) {
    console.error("[Booking] Failed to create appointment:", error);
    return {
      status: 500,
      body: { success: false, message: "We couldn't complete your booking. Please try again or call 0422 905 860." },
    };
  }
}
