// Booking rules shared by the browser wizard and the server routes.
// IDs and status values must stay in sync with the shared MySQL tables used by the CRM.

export const SERVICE_IDS = {
  PAID_30: 1,
  FREE_10: 2,
  PAID_60: 3,
} as const;

export const WEBSITE_SERVICE_IDS: readonly number[] = [
  SERVICE_IDS.FREE_10,
  SERVICE_IDS.PAID_30,
  SERVICE_IDS.PAID_60,
];

export const CANCELLED_APPOINTMENT_STATUS = 7;

export const BOOKING_TIMEZONE = "Australia/Melbourne";

export interface ConsultationService {
  id: number;
  title: string;
  duration: number;
  durationLabel: string;
  priceAud: number;
  priceLabel: string;
  isFree: boolean;
  allowsPromo: boolean;
}

export interface NatureOfEnquiry {
  id: number;
  title: string;
}

export type ConsultationType = "In-person" | "Phone" | "Zoom / Google Meeting";

export const CONSULTATION_TYPES: { value: ConsultationType; title: string; badge: string; description: string }[] = [
  { value: "In-person", title: "In-Person Consultation", badge: "Most Popular", description: "Meet face-to-face at our Melbourne office." },
  { value: "Phone", title: "Phone Consultation", badge: "Quick & Easy", description: "Get expert advice from anywhere in Australia." },
  { value: "Zoom / Google Meeting", title: "Video Consultation", badge: "Modern Choice", description: "Secure video calls via Zoom or Google Meet." },
];

const PROMO_CODES: Record<string, number> = {
  FREE100: 100,
  HALF50: 50,
};

export function isWebsiteServiceId(id: number): boolean {
  return WEBSITE_SERVICE_IDS.includes(id);
}

export function isFreeTier(id: number): boolean {
  return id === SERVICE_IDS.FREE_10;
}

export function allowsPromoCode(id: number): boolean {
  return id === SERVICE_IDS.PAID_30;
}

export function promoDiscountPercentage(code: string): number | null {
  const pct = PROMO_CODES[code.trim().toUpperCase()];
  return pct === undefined ? null : pct;
}

export function parsePriceAud(raw: string | number | null | undefined): number {
  const value = Number(String(raw ?? "").replace(/aud|\$|\s/gi, ""));
  return Number.isFinite(value) ? value : 0;
}

export function durationLabel(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    if (remainder > 0) return `${hours} hr ${remainder} min`;
    return hours === 1 ? "1 hour" : `${hours} hours`;
  }
  return `${minutes} mins`;
}

export function formatAud(amount: number): string {
  return `$${(Number.isFinite(amount) ? amount : 0).toFixed(2)} AUD`;
}

export function buildService(row: { id: number; title: string; duration: string | number; price: string | number }): ConsultationService {
  const priceAud = parsePriceAud(row.price);
  const duration = Number(row.duration) || 0;
  return {
    id: row.id,
    title: row.title,
    duration,
    durationLabel: durationLabel(duration),
    priceAud,
    priceLabel: priceAud <= 0 ? "Free" : `$${priceAud.toFixed(0)} AUD`,
    isFree: priceAud <= 0,
    allowsPromo: allowsPromoCode(row.id),
  };
}

export const FALLBACK_SERVICES: ConsultationService[] = [
  buildService({ id: SERVICE_IDS.FREE_10, title: "10 Minute Free Consultation", duration: 10, price: 0 }),
  buildService({ id: SERVICE_IDS.PAID_30, title: "30 Minute Consultation", duration: 30, price: 150 }),
  buildService({ id: SERVICE_IDS.PAID_60, title: "1 Hour Consultation", duration: 60, price: 220 }),
];

export const FALLBACK_NATURE_OF_ENQUIRY: NatureOfEnquiry[] = [
  { id: 1, title: "Criminal Law" },
  { id: 2, title: "Family Law" },
  { id: 3, title: "Corporate Law" },
  { id: 4, title: "Personal Law" },
  { id: 5, title: "Immigration Law" },
  { id: 6, title: "Property Law" },
  { id: 7, title: "Commercial Law" },
];

/** Slot labels in "h:mm AM" form, 10:30 AM to 5:00 PM every 30 minutes. */
export function timeSlotLabels(): string[] {
  const labels: string[] = [];
  for (let minutes = 10 * 60 + 30; minutes <= 17 * 60; minutes += 30) {
    labels.push(minutesToLabel(minutes));
  }
  return labels;
}

export function minutesToLabel(totalMinutes: number): string {
  const hours24 = Math.floor(totalMinutes / 60) % 24;
  const minutes = totalMinutes % 60;
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;
}

/** Parses "10:30 AM", "10:30am", "14:00" or "14:00:00" into minutes past midnight. */
export function parseTimeToMinutes(value: string): number | null {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*([ap]\.?m\.?)?$/i);
  if (!match) return null;
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3]?.replace(/\./g, "").toLowerCase();
  if (minutes > 59) return null;
  if (period) {
    if (hours < 1 || hours > 12) return null;
    if (period === "pm" && hours !== 12) hours += 12;
    if (period === "am" && hours === 12) hours = 0;
  } else if (hours > 23) {
    return null;
  }
  return hours * 60 + minutes;
}

export function normalizeSlotLabel(value: string): string {
  const minutes = parseTimeToMinutes(value);
  return minutes === null ? value.trim().replace(/\s+/g, " ") : minutesToLabel(minutes);
}

/** Today's date (YYYY-MM-DD) in Melbourne, regardless of server or browser timezone. */
export function melbourneToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: BOOKING_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

/** "YYYY-MM-DD" to "DD/MM/YYYY" (the format the CRM and legacy emails use). */
export function isoToDdMmYyyy(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
