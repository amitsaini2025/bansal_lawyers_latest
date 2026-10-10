import { randomBytes } from "node:crypto";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import Stripe from "stripe";
import { getDbPool } from "@/lib/db";
import { CANCELLED_APPOINTMENT_STATUS, formatAud, isoToDdMmYyyy, parsePriceAud, slotDuration } from "@/lib/booking/services";
import { CONFIRMED_FREE_APPOINTMENT_STATUS, PENDING_PAYMENT_APPOINTMENT_STATUS, melbourneNow } from "@/lib/booking/create";
import { syncAppointmentToCrm } from "@/lib/booking/crm";
import { sendBookingEmails } from "@/lib/booking/emails";
import { siteUrl } from "@/lib/site";

/** Stripe requires Checkout Sessions to stay open for at least 30 minutes. */
const CHECKOUT_TTL_SECONDS = 35 * 60;

let stripeClient: Stripe | null | undefined;

function getStripe(): Stripe | null {
  if (stripeClient === undefined) {
    const secret = process.env.STRIPE_SECRET?.trim();
    stripeClient = secret ? new Stripe(secret) : null;
  }
  return stripeClient;
}

/** Paid bookings are taken online when a Stripe secret key is set, unless BOOKING_ONLINE_PAYMENT=false. */
export function isOnlinePaymentEnabled(): boolean {
  return Boolean(process.env.STRIPE_SECRET?.trim()) && !/^(0|false|no|off)$/i.test(process.env.BOOKING_ONLINE_PAYMENT?.trim() ?? "");
}

export function newPaidOrderHash(): string {
  return `booking_${Date.now()}_${randomBytes(8).toString("hex")}`;
}

interface PaymentNotes {
  checkoutSessionId?: string;
  promoCode: string | null;
  listPrice: number;
}

export function encodePaymentNotes(notes: PaymentNotes): string {
  return JSON.stringify(notes);
}

function parsePaymentNotes(raw: unknown): PaymentNotes {
  try {
    const parsed = JSON.parse(String(raw ?? ""));
    return {
      checkoutSessionId: typeof parsed.checkoutSessionId === "string" ? parsed.checkoutSessionId : undefined,
      promoCode: typeof parsed.promoCode === "string" ? parsed.promoCode : null,
      listPrice: Number(parsed.listPrice) || 0,
    };
  } catch {
    return { promoCode: null, listPrice: 0 };
  }
}

function baseUrl(): string {
  return siteUrl.replace(/\/+$/, "");
}

export interface CheckoutRequest {
  appointmentId: number;
  orderHash: string;
  amount: number;
  email: string;
  fullName: string;
  serviceTitle: string;
  isoDate: string;
  timeLabel: string;
  notes: PaymentNotes;
}

/** Opens a Stripe Checkout Session for a pending booking and remembers its id on the payment record. */
export async function createCheckoutSession(input: CheckoutRequest): Promise<string> {
  const stripe = getStripe();
  const db = getDbPool();
  if (!stripe || !db) throw new Error("Online payment is not configured.");

  const metadata = { appointment_id: String(input.appointmentId), order_hash: input.orderHash };
  const session = await stripe.checkout.sessions.create(
    {
      mode: "payment",
      customer_email: input.email,
      client_reference_id: String(input.appointmentId),
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "aud",
            unit_amount: Math.round(input.amount * 100),
            product_data: {
              name: `${input.serviceTitle} - Bansal Lawyers`,
              description: `${isoToDdMmYyyy(input.isoDate)} at ${input.timeLabel} (Melbourne time)`,
            },
          },
        },
      ],
      metadata,
      payment_intent_data: {
        description: `Appointment Payment - Bansal Lawyers - ${input.fullName}`,
        metadata,
      },
      success_url: `${baseUrl()}/book-an-appointment/payment-complete?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl()}/book-an-appointment/payment-cancelled?ref=${encodeURIComponent(input.orderHash)}`,
      expires_at: Math.floor(Date.now() / 1000) + CHECKOUT_TTL_SECONDS,
    },
    { idempotencyKey: `checkout_${input.orderHash}` }
  );

  await db.query("UPDATE tbl_paid_appointment_payment SET notes = ?, order_date = order_date WHERE order_hash = ?", [
    encodePaymentNotes({ ...input.notes, checkoutSessionId: session.id }),
    input.orderHash,
  ]);

  if (!session.url) throw new Error("Stripe did not return a checkout URL.");
  return session.url;
}

export interface PaidBooking {
  appointmentId: number;
  orderHash: string;
  fullName: string;
  email: string;
  phone: string;
  isoDate: string;
  time24: string;
  timeLabel: string;
  noeId: number;
  natureOfEnquiry: string;
  serviceId: number;
  serviceTitle: string;
  durationMinutes: number;
  consultationType: string;
  description: string;
  listPrice: number;
  amountPaid: number;
  promoCode: string | null;
  paidAt: string;
}

export type FinalizeResult =
  | { ok: true; booking: PaidBooking; newlyConfirmed: boolean }
  | { ok: false; reason: "not_found" | "unpaid" | "amount_mismatch" | "unavailable" };

async function loadPaidBooking(appointmentId: number, orderHash: string) {
  const db = getDbPool();
  if (!db) return null;
  const [rows] = await db.query<RowDataPacket[]>(
    `SELECT a.id, a.full_name, a.email, a.phone, DATE_FORMAT(a.date, '%Y-%m-%d') AS iso_date,
            TIME_FORMAT(a.time, '%H:%i') AS time24, a.timeslot_full, a.noe_id, a.service_id, a.description,
            a.appointment_details, a.status, s.title AS service_title, s.duration, s.price, n.title AS noe_title,
            p.id AS payment_id, p.amount, p.payment_status, p.notes
     FROM appointments a
     INNER JOIN tbl_paid_appointment_payment p ON p.order_hash = a.order_hash
     LEFT JOIN book_services s ON s.id = a.service_id
     LEFT JOIN nature_of_enquiry n ON n.id = a.noe_id
     WHERE a.id = ? AND a.order_hash = ?
     LIMIT 1`,
    [appointmentId, orderHash]
  );
  return rows[0] ?? null;
}

function toPaidBooking(row: RowDataPacket, orderHash: string, paidAt: string): PaidBooking {
  const notes = parsePaymentNotes(row.notes);
  return {
    appointmentId: Number(row.id),
    orderHash,
    fullName: String(row.full_name ?? ""),
    email: String(row.email ?? ""),
    phone: String(row.phone ?? ""),
    isoDate: String(row.iso_date ?? ""),
    time24: String(row.time24 ?? ""),
    timeLabel: String(row.timeslot_full ?? row.time24 ?? ""),
    noeId: Number(row.noe_id),
    natureOfEnquiry: String(row.noe_title ?? ""),
    serviceId: Number(row.service_id),
    serviceTitle: String(row.service_title ?? "Consultation"),
    durationMinutes: slotDuration(Number(row.duration)),
    consultationType: String(row.appointment_details ?? ""),
    description: String(row.description ?? ""),
    listPrice: notes.listPrice || parsePriceAud(row.price),
    amountPaid: Number(row.amount) || 0,
    promoCode: notes.promoCode,
    paidAt,
  };
}

/**
 * Marks a booking paid once Stripe reports the Checkout Session as paid. Safe to call repeatedly
 * (success page and webhook): only the first call reports `newlyConfirmed`, which should trigger notifications.
 */
export async function finalizeCheckoutSession(session: Stripe.Checkout.Session): Promise<FinalizeResult> {
  const db = getDbPool();
  if (!db) return { ok: false, reason: "unavailable" };

  const orderHash = session.metadata?.order_hash ?? "";
  const appointmentId = Number(session.metadata?.appointment_id);
  if (!orderHash || !Number.isInteger(appointmentId)) return { ok: false, reason: "not_found" };

  const row = await loadPaidBooking(appointmentId, orderHash);
  if (!row) return { ok: false, reason: "not_found" };
  if (session.payment_status !== "paid") return { ok: false, reason: "unpaid" };
  if (Math.round(Number(row.amount) * 100) !== session.amount_total) {
    console.error(
      `[Booking Payment] Amount mismatch for appointment ${appointmentId}: expected ${row.amount}, Stripe ${session.amount_total}`
    );
    return { ok: false, reason: "amount_mismatch" };
  }

  const paidAt = melbourneNow().dateTime;
  const paymentIntentId =
    typeof session.payment_intent === "string" ? session.payment_intent : (session.payment_intent?.id ?? session.id);

  const connection = await db.getConnection();
  let newlyConfirmed = false;
  try {
    await connection.beginTransaction();
    const [updated] = await connection.query<ResultSetHeader>(
      `UPDATE tbl_paid_appointment_payment
       SET stripe_payment_intent_id = ?, payment_status = 'Paid', order_status = 'Completed',
           stripe_payment_status = 'succeeded', stripe_payment_response = ?, order_date = order_date
       WHERE id = ? AND payment_status <> 'Paid'`,
      [
        paymentIntentId,
        JSON.stringify({
          checkout_session: session.id,
          payment_intent: paymentIntentId,
          amount_total: session.amount_total,
          currency: session.currency,
          payment_status: session.payment_status,
        }),
        row.payment_id,
      ]
    );
    newlyConfirmed = updated.affectedRows === 1;
    if (newlyConfirmed) {
      if (Number(row.status) === CANCELLED_APPOINTMENT_STATUS) {
        console.warn(`[Booking Payment] Appointment ${appointmentId} was cancelled before payment completed; restoring it.`);
      }
      await connection.query("UPDATE appointments SET status = ?, updated_at = ? WHERE id = ?", [
        CONFIRMED_FREE_APPOINTMENT_STATUS,
        paidAt,
        appointmentId,
      ]);
    }
    await connection.commit();
  } catch (error) {
    await connection.rollback().catch(() => {});
    throw error;
  } finally {
    connection.release();
  }

  return { ok: true, booking: toPaidBooking(row, orderHash, paidAt), newlyConfirmed };
}

export async function retrieveCheckoutSession(sessionId: string): Promise<Stripe.Checkout.Session | null> {
  const stripe = getStripe();
  if (!stripe || !/^cs_[A-Za-z0-9_]+$/.test(sessionId)) return null;
  try {
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch (error) {
    console.error("[Booking Payment] Could not retrieve checkout session:", error);
    return null;
  }
}

/** Sends the confirmation emails and pushes the paid booking to the CRM. Never throws. */
export async function notifyPaidBooking(booking: PaidBooking): Promise<void> {
  const discount = Math.round(Math.max(0, booking.listPrice - booking.amountPaid) * 100) / 100;
  const amountLabel = `${formatAud(booking.amountPaid)} paid online${booking.promoCode ? ` (${booking.promoCode} promo applied)` : ""}`;

  const [mail] = await Promise.allSettled([
    sendBookingEmails({
      appointmentId: booking.appointmentId,
      fullName: booking.fullName,
      email: booking.email,
      phone: booking.phone,
      date: isoToDdMmYyyy(booking.isoDate),
      time: booking.timeLabel,
      serviceTitle: booking.serviceTitle,
      natureOfEnquiry: booking.natureOfEnquiry,
      consultationType: booking.consultationType,
      description: booking.description,
      amountLabel,
    }),
    syncAppointmentToCrm(
      {
        id: booking.appointmentId,
        orderHash: booking.orderHash,
        fullName: booking.fullName,
        email: booking.email,
        phone: booking.phone,
        isoDate: booking.isoDate,
        time24: booking.time24,
        timeslotFull: booking.timeLabel,
        timezone: "Australia/Melbourne",
        noeId: booking.noeId,
        serviceId: booking.serviceId,
        durationMinutes: booking.durationMinutes,
        consultationType: booking.consultationType,
        description: booking.description,
      },
      {
        isPaid: true,
        amount: booking.listPrice,
        discountAmount: discount,
        finalAmount: booking.amountPaid,
        promoCode: booking.promoCode,
        paymentStatus: "completed",
        paymentMethod: "stripe",
        paidAt: booking.paidAt,
        confirmedAt: booking.paidAt,
        status: String(CONFIRMED_FREE_APPOINTMENT_STATUS),
      }
    ),
  ]);
  if (mail.status === "fulfilled") {
    console.info(
      `[Booking] Paid appointment ${booking.appointmentId} emails: firm=${mail.value.firmSent} client=${mail.value.clientSent}`
    );
  }
}

async function markPendingBookingCancelled(orderHash: string): Promise<boolean> {
  const db = getDbPool();
  if (!db) return false;
  const [payment] = await db.query<ResultSetHeader>(
    `UPDATE tbl_paid_appointment_payment
     SET payment_status = 'Cancelled', order_status = 'Cancelled', order_date = order_date
     WHERE order_hash = ? AND payment_status = 'Pending'`,
    [orderHash]
  );
  await db.query("UPDATE appointments SET status = ?, updated_at = ? WHERE order_hash = ? AND status = ?", [
    CANCELLED_APPOINTMENT_STATUS,
    melbourneNow().dateTime,
    orderHash,
    PENDING_PAYMENT_APPOINTMENT_STATUS,
  ]);
  return payment.affectedRows > 0;
}

export type CancelResult =
  | { kind: "cancelled" }
  | { kind: "paid"; session: Stripe.Checkout.Session }
  | { kind: "not_found" };

/**
 * Releases the slot held by an unpaid booking (client cancelled at Stripe, or the session expired).
 * If Stripe shows the session as paid after all, returns it so the caller can confirm the booking instead.
 */
export async function cancelPendingBooking(orderHash: string): Promise<CancelResult> {
  const db = getDbPool();
  if (!db || !/^booking_\d+_[a-f0-9]+$/.test(orderHash)) return { kind: "not_found" };

  const [rows] = await db.query<RowDataPacket[]>(
    "SELECT payment_status, notes FROM tbl_paid_appointment_payment WHERE order_hash = ? LIMIT 1",
    [orderHash]
  );
  const row = rows[0];
  if (!row) return { kind: "not_found" };

  const sessionId = parsePaymentNotes(row.notes).checkoutSessionId;
  const stripe = getStripe();
  if (sessionId && stripe) {
    let session = await retrieveCheckoutSession(sessionId);
    if (session?.status === "open") {
      session = await stripe.checkout.sessions.expire(sessionId).catch(() => retrieveCheckoutSession(sessionId));
    }
    if (session?.payment_status === "paid") return { kind: "paid", session };
    if (session?.status === "open") return { kind: "not_found" };
  }

  if (row.payment_status === "Pending") await markPendingBookingCancelled(orderHash);
  return { kind: "cancelled" };
}

/** Verifies a Stripe webhook payload; returns null when webhooks are not configured or the signature is invalid. */
export function constructWebhookEvent(payload: string, signature: string | null): Stripe.Event | null {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!stripe || !secret || !signature) return null;
  try {
    return stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (error) {
    console.warn("[Booking Payment] Invalid webhook signature:", error instanceof Error ? error.message : error);
    return null;
  }
}

export function isWebhookConfigured(): boolean {
  return Boolean(process.env.STRIPE_WEBHOOK_SECRET?.trim());
}

/** Unpaid online bookings older than this no longer have an open Stripe session and can release their slot. */
const STALE_PENDING_MS = (CHECKOUT_TTL_SECONDS + 5 * 60) * 1000;

/**
 * Releases slots held by abandoned online payments (e.g. the client closed the tab at Stripe), confirming any
 * that turn out to be paid. Only touches bookings created by this site. Never throws.
 */
export async function releaseStalePendingBookings(limit = 5): Promise<void> {
  const db = getDbPool();
  if (!db || !getStripe()) return;
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT order_hash FROM tbl_paid_appointment_payment
       WHERE payment_type = 'stripe' AND payment_status = 'Pending' AND order_hash LIKE 'booking\\_%\\_%'
       ORDER BY id LIMIT 50`
    );
    const cutoff = Date.now() - STALE_PENDING_MS;
    const stale = rows
      .map((row) => String(row.order_hash))
      .filter((hash) => Number(hash.split("_")[1]) < cutoff)
      .slice(0, limit);

    for (const orderHash of stale) {
      const outcome = await cancelPendingBooking(orderHash);
      if (outcome.kind === "paid") {
        const result = await finalizeCheckoutSession(outcome.session);
        if (result.ok && result.newlyConfirmed) await notifyPaidBooking(result.booking);
      }
    }
  } catch (error) {
    console.error("[Booking Payment] Could not release stale pending bookings:", error);
  }
}

export async function cancelExpiredSession(session: Stripe.Checkout.Session): Promise<void> {
  const orderHash = session.metadata?.order_hash;
  if (orderHash && session.payment_status !== "paid") await markPendingBookingCancelled(orderHash);
}
