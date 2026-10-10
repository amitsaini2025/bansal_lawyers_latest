// Pushes confirmed website bookings to the Bansal CRM (same contract as the legacy site's CrmLeadSync).
// Every call is best-effort: CRM failures are logged and never fail a booking.

export interface CrmAppointment {
  id: number;
  orderHash: string;
  fullName: string;
  email: string;
  phone: string;
  isoDate: string;
  time24: string;
  timeslotFull: string;
  timezone: string;
  noeId: number;
  serviceId: number;
  durationMinutes: number;
  consultationType: string;
  description: string;
}

export interface CrmPayment {
  isPaid: boolean;
  amount: number;
  discountAmount: number;
  finalAmount: number;
  promoCode: string | null;
  paymentStatus: string;
  paymentMethod: string;
  paidAt: string;
  confirmedAt: string;
  status: string;
}

function env(name: string, fallback = ""): string {
  return process.env[name]?.trim() || fallback;
}

function authHeaders(): Record<string, string> {
  const token = env("CRM_API_TOKEN");
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

/** Splits a phone into [country code, national digits], matching the legacy CRM payload format. */
function splitCountryAndPhone(phone: string, defaultCountryCode: string): [string, string] {
  let digits = phone.replace(/\D+/g, "");
  const ccDigits = defaultCountryCode.replace(/\D+/g, "");
  if (ccDigits && digits.startsWith(ccDigits) && digits.length > ccDigits.length) {
    return [defaultCountryCode, digits.slice(ccDigits.length)];
  }
  if (digits.startsWith("0") && digits.length >= 9) digits = digits.slice(1);
  return [defaultCountryCode, digits];
}

function meetingTypeForCrm(consultationType: string): string {
  const fallback = env("CRM_BOOKING_MEETING_TYPE", "in_person");
  const lower = consultationType.trim().toLowerCase();
  if (!lower) return fallback;
  if (lower.includes("zoom") || lower.includes("google meeting")) return "video";
  if (lower.includes("phone")) return "phone";
  if (lower.includes("in-person") || lower.includes("in person")) return "in_person";
  return fallback;
}

function positiveInt(value: unknown): number | null {
  const n = typeof value === "string" && /^\d+$/.test(value.trim()) ? Number(value) : value;
  return typeof n === "number" && Number.isFinite(n) && Math.round(n) > 0 ? Math.round(n) : null;
}

async function createOrResolveLeadId(appointment: CrmAppointment): Promise<number | null> {
  const leadUrl = env("CRM_LEAD_POST_URL").replace(/\/+$/, "");
  if (!leadUrl) return null;

  const [countryCode, nationalPhone] = splitCountryAndPhone(appointment.phone, env("CRM_LEAD_COUNTRY_CODE", "+61"));
  try {
    const response = await fetch(leadUrl, {
      method: "POST",
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
      headers: authHeaders(),
      body: JSON.stringify({
        full_name: appointment.fullName,
        email: appointment.email,
        phone: nationalPhone,
        country_code: countryCode,
        source: env("CRM_LEAD_SOURCE", "Website form"),
        lead_status: env("CRM_LEAD_LEAD_STATUS", "new"),
      }),
    });
    if (!response.ok) {
      console.warn(`[Booking CRM] /api/leads returned ${response.status} for appointment ${appointment.id}`);
      return null;
    }
    const json = (await response.json().catch(() => null)) as
      | { lead_id?: unknown; data?: { lead_id?: unknown; id?: unknown } }
      | null;
    const leadId = positiveInt(json?.lead_id) ?? positiveInt(json?.data?.lead_id) ?? positiveInt(json?.data?.id);
    if (leadId === null) {
      console.warn(`[Booking CRM] lead_id missing in /api/leads response for appointment ${appointment.id}`);
    }
    return leadId;
  } catch (error) {
    console.error(`[Booking CRM] /api/leads request failed for appointment ${appointment.id}:`, error);
    return null;
  }
}

export async function syncAppointmentToCrm(appointment: CrmAppointment, payment: CrmPayment): Promise<void> {
  const leadId = await createOrResolveLeadId(appointment);
  const bookingUrl = env("CRM_BOOKING_POST_URL").replace(/\/+$/, "");
  if (leadId === null || !bookingUrl) return;

  const [countryCode, nationalPhone] = splitCountryAndPhone(appointment.phone, env("CRM_LEAD_COUNTRY_CODE", "+61"));
  const crmServiceId = positiveInt(env("CRM_BOOKING_CRM_SERVICE_ID"));
  const consultantId = positiveInt(env("CRM_BOOKING_CONSULTANT_ID"));
  const enquiryDetails = [appointment.description, appointment.consultationType].filter(Boolean).join("\n\n");

  const payload: Record<string, unknown> = {
    bansal_appointment_id: appointment.id,
    client_name: appointment.fullName,
    client_email: appointment.email,
    client_phone: `+${countryCode.replace(/\D+/g, "")}${nationalPhone}`,
    appointment_datetime: `${appointment.isoDate} ${appointment.time24}:00`,
    location: env("CRM_BOOKING_LOCATION", "melbourne"),
    timeslot_full: appointment.timeslotFull,
    duration: appointment.durationMinutes || Number(env("CRM_BOOKING_DEFAULT_DURATION", "30")),
    noe_id: appointment.noeId,
    timezone: appointment.timezone || env("CRM_BOOKING_TIMEZONE", "Australia/Sydney"),
    client_id: leadId,
    meeting_type: meetingTypeForCrm(appointment.consultationType),
    enquiry_details: enquiryDetails.trim(),
    status: payment.status,
    is_paid: payment.isPaid,
    amount: payment.amount,
    discount_amount: payment.discountAmount,
    final_amount: payment.finalAmount,
    promo_code: payment.promoCode,
    service_id: crmServiceId ?? appointment.serviceId,
    payment_status: payment.paymentStatus,
    payment_method: payment.paymentMethod,
    paid_at: payment.paidAt,
    confirmed_at: payment.confirmedAt,
  };
  if (appointment.orderHash) payload.order_hash = appointment.orderHash;
  if (consultantId !== null) payload.consultant_id = consultantId;

  try {
    const response = await fetch(bookingUrl, {
      method: "POST",
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
      headers: authHeaders(),
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.warn(`[Booking CRM] booking-appointments returned ${response.status} for appointment ${appointment.id}`);
      return;
    }
    console.info(`[Booking CRM] Booking synced. appointment=${appointment.id} lead=${leadId}`);
  } catch (error) {
    console.error(`[Booking CRM] booking-appointments request failed for appointment ${appointment.id}:`, error);
  }
}
