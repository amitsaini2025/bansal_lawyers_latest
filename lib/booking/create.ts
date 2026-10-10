import type { PoolConnection, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { getDbPool } from "@/lib/db";
import { getLocalBusyIntervals, overlapsBusy } from "@/lib/booking/availability";
import {
  BOOKING_TIMEZONE,
  CANCELLED_APPOINTMENT_STATUS,
  CONSULTATION_TYPES,
  SERVICE_IDS,
  isIsoDate,
  normalizeSlotLabel,
  parseTimeToMinutes,
  type ConsultationType,
} from "@/lib/booking/services";

/** "Pending appointment with payment success" in the shared appointments table. */
export const CONFIRMED_FREE_APPOINTMENT_STATUS = 10;

const NAME_PATTERN = /^[a-zA-Z\s]+$/;
const PHONE_PATTERN = /^[\d\s\-+()]+$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SLOT_LOCK_TIMEOUT_SECONDS = 10;

export interface BookingRequest {
  serviceId: number;
  noeId: number;
  fullname: string;
  email: string;
  phone: string;
  isoDate: string;
  timeLabel: string;
  time24: string;
  description: string;
  consultationType: ConsultationType;
  promoCode: string;
  freeConsultAcknowledged: boolean;
}

export type ValidationResult =
  | { ok: true; data: BookingRequest }
  | { ok: false; errors: Record<string, string> };

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateBookingRequest(body: Record<string, unknown>): ValidationResult {
  const errors: Record<string, string> = {};

  const serviceId = Number(body.serviceId);
  if (!Number.isInteger(serviceId) || serviceId <= 0) errors.serviceId = "Please select a consultation duration";

  const consultationType = CONSULTATION_TYPES.find((t) => t.value === text(body.consultationType))?.value;
  if (!consultationType) errors.consultationType = "Please select a consultation type";

  const isoDate = text(body.date);
  if (!isIsoDate(isoDate)) errors.date = "Please select a valid date";

  const minutes = parseTimeToMinutes(text(body.time));
  if (minutes === null) errors.time = "Please select a valid time";

  const noeId = Number(body.noeId);
  if (!Number.isInteger(noeId) || noeId <= 0) errors.noeId = "Please select a type of legal matter";

  const fullname = text(body.fullname).replace(/\s+/g, " ");
  if (!fullname) errors.fullname = "Full name is required";
  else if (!NAME_PATTERN.test(fullname)) errors.fullname = "Full name may only contain letters and spaces";
  else if (fullname.length > 200) errors.fullname = "Full name is too long";

  const email = text(body.email);
  if (!email || email.length > 200 || !EMAIL_PATTERN.test(email)) errors.email = "Valid email is required";

  const phone = text(body.phone);
  if (!phone) errors.phone = "Phone number is required";
  else if (phone.length > 20 || !PHONE_PATTERN.test(phone) || phone.replace(/\D/g, "").length < 6)
    errors.phone = "Enter a valid phone number";

  const description = text(body.description);
  if (!description) errors.description = "Details of enquiry are required";
  else if (description.length > 1000) errors.description = "Please keep details under 1000 characters";

  const promoCode = text(body.promoCode);
  if (promoCode.length > 50) errors.promoCode = "Invalid promo code";

  if (Object.keys(errors).length > 0 || !consultationType || minutes === null) return { ok: false, errors };

  const hours = Math.floor(minutes / 60);
  return {
    ok: true,
    data: {
      serviceId,
      noeId,
      fullname,
      email,
      phone,
      isoDate,
      timeLabel: normalizeSlotLabel(text(body.time)),
      time24: `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`,
      description,
      consultationType,
      promoCode,
      freeConsultAcknowledged: body.freeConsultAcknowledged === true,
    },
  };
}

/** Current Melbourne wall-clock time, matching how the legacy site writes timestamps. */
function melbourneNow(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: BOOKING_TIMEZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((part) => [part.type, part.value])
  );
  const hour12 = String(Number(parts.hour) % 12 === 0 ? 12 : Number(parts.hour) % 12).padStart(2, "0");
  return {
    dateTime: `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`,
    clientCodeSuffix: `${hour12}${parts.minute}${parts.second}`,
  };
}

function clientCodeFor(fullname: string, suffix: string): string {
  const prefix = fullname.length >= 4 ? fullname.slice(0, 4).trim() : fullname.trim();
  return `${prefix.toUpperCase()}${suffix}`;
}

export async function hasUsedFreeConsultation(email: string, phone: string): Promise<boolean> {
  const db = getDbPool();
  if (!db) return false;
  const [rows] = await db.query<RowDataPacket[]>(
    `SELECT id FROM appointments
     WHERE service_id = ? AND status != ? AND (email = ? OR phone = ?)
     LIMIT 1`,
    [SERVICE_IDS.FREE_10, CANCELLED_APPOINTMENT_STATUS, email, phone]
  );
  return rows.length > 0;
}

export interface FreeBookingInput {
  request: BookingRequest;
  paymentType: "free_consultation" | "promo_free";
  durationMinutes: number;
}

export type CreateBookingResult =
  | { ok: true; appointmentId: number; orderHash: string; createdAt: string; clientUniqueId: string }
  | { ok: false; status: number; code: "SLOT_TAKEN" | "FREE_ALREADY_USED" | "BUSY" | "DB_UNAVAILABLE"; message: string };

/**
 * Stores a booking that needs no payment (free tier or a 100% promo) in the shared tables:
 * a completed payment record, the client in `admins`, and the appointment itself.
 */
export async function createFreeBooking({
  request,
  paymentType,
  durationMinutes,
}: FreeBookingInput): Promise<CreateBookingResult> {
  const db = getDbPool();
  if (!db) {
    return { ok: false, status: 503, code: "DB_UNAVAILABLE", message: "Online booking is temporarily unavailable." };
  }

  // One lock per day: consultations of different lengths can overlap without sharing a start time.
  const lockName = `bansal_booking_${request.isoDate}`;
  let connection: PoolConnection | null = null;
  let lockHeld = false;

  try {
    connection = await db.getConnection();
    const [lockRows] = await connection.query<RowDataPacket[]>("SELECT GET_LOCK(?, ?) AS acquired", [
      lockName,
      SLOT_LOCK_TIMEOUT_SECONDS,
    ]);
    lockHeld = Number(lockRows[0]?.acquired) === 1;
    if (!lockHeld) {
      return { ok: false, status: 409, code: "BUSY", message: "This time slot is being booked right now. Please try again." };
    }

    const busy = await getLocalBusyIntervals(request.isoDate);
    const startMinutes = parseTimeToMinutes(request.time24);
    if (busy && startMinutes !== null && overlapsBusy(startMinutes, durationMinutes, busy)) {
      return {
        ok: false,
        status: 409,
        code: "SLOT_TAKEN",
        message: "This appointment time slot is already booked. Please select a different time slot.",
      };
    }

    if (request.serviceId === SERVICE_IDS.FREE_10 && (await hasUsedFreeConsultation(request.email, request.phone))) {
      return {
        ok: false,
        status: 400,
        code: "FREE_ALREADY_USED",
        message:
          "The free 10-minute consultation is available for first-time clients only. Please select a paid consultation option.",
      };
    }

    const now = melbourneNow();
    const orderHash = `booking_${Date.now()}`;

    await connection.beginTransaction();
    try {
      await connection.query(
        `INSERT INTO tbl_paid_appointment_payment
           (order_hash, payer_email, amount, currency, payment_type, order_date, name,
            stripe_payment_intent_id, payment_status, order_status)
         VALUES (?, ?, 0, 'aud', ?, ?, ?, ?, 'Paid', 'Completed')`,
        [
          orderHash,
          request.email.slice(0, 100),
          paymentType,
          now.dateTime,
          request.fullname.slice(0, 25),
          `promo_free_${Math.floor(Date.now() / 1000)}`,
        ]
      );

      const [existing] = await connection.query<RowDataPacket[]>(
        "SELECT id, client_id FROM admins WHERE email = ? OR phone = ? ORDER BY id LIMIT 1",
        [request.email, request.phone]
      );

      let clientId: number;
      let clientUniqueId: string;
      if (existing.length === 0) {
        clientUniqueId = clientCodeFor(request.fullname, now.clientCodeSuffix);
        const [inserted] = await connection.query<ResultSetHeader>(
          `INSERT INTO admins (client_id, first_name, last_name, email, password, phone, created_at, updated_at)
           VALUES (?, ?, '', ?, '', ?, ?, ?)`,
          [clientUniqueId, request.fullname, request.email.slice(0, 191), request.phone, now.dateTime, now.dateTime]
        );
        clientId = inserted.insertId;
      } else {
        clientId = Number(existing[0].id);
        clientUniqueId = existing[0].client_id ? String(existing[0].client_id) : "";
        if (!clientUniqueId) {
          clientUniqueId = clientCodeFor(request.fullname, now.clientCodeSuffix);
          await connection.query("UPDATE admins SET client_id = ?, updated_at = ? WHERE id = ?", [
            clientUniqueId,
            now.dateTime,
            clientId,
          ]);
        }
      }

      const [appointment] = await connection.query<ResultSetHeader>(
        `INSERT INTO appointments
           (client_id, client_unique_id, service_id, noe_id, full_name, description, email, phone,
            date, time, timeslot_full, invites, appointment_details, order_hash, status, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '0', ?, ?, ?, ?, ?)`,
        [
          clientId,
          clientUniqueId,
          request.serviceId,
          request.noeId,
          request.fullname,
          request.description,
          request.email,
          request.phone,
          request.isoDate,
          request.time24,
          request.timeLabel,
          request.consultationType,
          orderHash,
          CONFIRMED_FREE_APPOINTMENT_STATUS,
          now.dateTime,
          now.dateTime,
        ]
      );

      await connection.commit();
      return { ok: true, appointmentId: appointment.insertId, orderHash, createdAt: now.dateTime, clientUniqueId };
    } catch (error) {
      await connection.rollback().catch(() => {});
      throw error;
    }
  } finally {
    if (connection) {
      if (lockHeld) await connection.query("SELECT RELEASE_LOCK(?)", [lockName]).catch(() => {});
      connection.release();
    }
  }
}
