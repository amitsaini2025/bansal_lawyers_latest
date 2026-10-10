import { NextResponse, after, type NextRequest } from "next/server";
import type { RowDataPacket } from "mysql2/promise";
import { getDbPool } from "@/lib/db";
import {
  getAvailabilityConfig,
  getBookableService,
  getCrmUnavailableSlots,
} from "@/lib/booking/availability";
import { createFreeBooking, validateBookingRequest } from "@/lib/booking/create";
import { syncAppointmentToCrm } from "@/lib/booking/crm";
import { sendBookingEmails } from "@/lib/booking/emails";
import { clientIp, createRateLimiter } from "@/lib/booking/rate-limit";
import {
  allowsPromoCode,
  formatAud,
  isFreeTier,
  isWebsiteServiceId,
  isoToDdMmYyyy,
  promoDiscountPercentage,
  timeSlotLabels,
} from "@/lib/booking/services";
import { verifyTurnstile } from "@/lib/booking/turnstile";

export const runtime = "nodejs";

const isRateLimited = createRateLimiter(5);

function reply(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function weekdayOf(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return reply(429, { success: false, message: "Too many booking attempts. Please wait a moment before trying again." });
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return reply(400, { success: false, message: "Invalid request." });
  }

  // Honeypot: bots get a fake success and no signal.
  if (typeof body.website_url === "string" && body.website_url.trim() !== "") {
    return reply(200, { success: true, message: "Appointment booked successfully." });
  }

  if (!(await verifyTurnstile(typeof body.turnstileToken === "string" ? body.turnstileToken : "", ip))) {
    return reply(422, { success: false, code: "TURNSTILE", message: "Security verification failed. Please try again." });
  }

  const validation = validateBookingRequest(body);
  if (!validation.ok) {
    return reply(400, { success: false, message: "Please check the highlighted fields.", errors: validation.errors });
  }
  const booking = validation.data;

  const db = getDbPool();
  if (!db) {
    return reply(503, { success: false, message: "Online booking is temporarily unavailable. Please call us to book." });
  }

  if (!isWebsiteServiceId(booking.serviceId)) {
    return reply(400, { success: false, message: "Invalid consultation type selected." });
  }

  try {
    const service = await getBookableService(booking.serviceId);
    if (!service) {
      return reply(400, { success: false, message: "Selected consultation is not available." });
    }

    if (isFreeTier(booking.serviceId) && !booking.freeConsultAcknowledged) {
      return reply(400, { success: false, message: "Please acknowledge the free consultation terms before continuing." });
    }

    let discountAmount = 0;
    if (booking.promoCode) {
      if (!allowsPromoCode(booking.serviceId)) {
        return reply(400, { success: false, message: "Promo codes are not available for this consultation type." });
      }
      const percentage = promoDiscountPercentage(booking.promoCode);
      if (percentage === null) {
        return reply(400, { success: false, message: "Invalid promo code." });
      }
      discountAmount = Math.round(service.priceAud * percentage) / 100;
    }
    const listPrice = service.priceAud;
    const finalAmount = Math.max(0, Math.round((listPrice - discountAmount) * 100) / 100);

    if (finalAmount > 0) {
      return reply(400, {
        success: false,
        code: "PAYMENT_UNAVAILABLE",
        message: "Online payment is not available yet. Please call 0422 905 860 to book a paid consultation.",
      });
    }

    const [noeRows] = await db.query<RowDataPacket[]>(
      "SELECT title FROM nature_of_enquiry WHERE id = ? AND status = 1 LIMIT 1",
      [booking.noeId]
    );
    if (noeRows.length === 0) {
      return reply(400, { success: false, message: "Please select a valid type of legal matter." });
    }
    const natureOfEnquiry = String(noeRows[0].title);

    const availability = await getAvailabilityConfig();
    if (
      !availability ||
      booking.isoDate <= availability.today ||
      availability.disabledWeekdays.includes(weekdayOf(booking.isoDate)) ||
      availability.disabledDates.includes(booking.isoDate)
    ) {
      return reply(400, { success: false, code: "DATE_UNAVAILABLE", message: "The selected date is not available. Please choose another date." });
    }
    if (!timeSlotLabels().includes(booking.timeLabel)) {
      return reply(400, { success: false, message: "Please select a valid time slot." });
    }

    const crmTaken = await getCrmUnavailableSlots(booking.isoDate);
    if (crmTaken.includes(booking.timeLabel)) {
      return reply(409, {
        success: false,
        code: "SLOT_TAKEN",
        message: "This appointment time slot is already booked. Please select a different time slot.",
      });
    }

    const paymentType = isFreeTier(booking.serviceId) ? "free_consultation" : "promo_free";
    const result = await createFreeBooking({ request: booking, paymentType });
    if (!result.ok) {
      return reply(result.status, { success: false, code: result.code, message: result.message });
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
    return reply(200, {
      success: true,
      message: `Your appointment is booked for ${displayDate} at ${booking.timeLabel}.`,
      appointmentId: result.appointmentId,
    });
  } catch (error) {
    console.error("[Booking] Failed to create appointment:", error);
    return reply(500, {
      success: false,
      message: "We couldn't complete your booking. Please try again or call 0422 905 860.",
    });
  }
}
