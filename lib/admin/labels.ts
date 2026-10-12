/** Status numbers used by the previous admin appointment list. */
export const APPOINTMENT_STATUSES: { value: number; label: string; tone: string }[] = [
  { value: 0, label: "Pending", tone: "pending" },
  { value: 1, label: "Approved", tone: "approved" },
  { value: 2, label: "Completed", tone: "approved" },
  { value: 3, label: "Rejected", tone: "rejected" },
  { value: 4, label: "N/P", tone: "progress" },
  { value: 5, label: "In Progress", tone: "progress" },
  { value: 6, label: "Did Not Come", tone: "cancelled" },
  { value: 7, label: "Cancelled", tone: "cancelled" },
  { value: 8, label: "Missed", tone: "cancelled" },
  { value: 9, label: "Payment Pending", tone: "pending" },
  { value: 10, label: "Payment Success", tone: "approved" },
  { value: 11, label: "Payment Failed", tone: "rejected" },
];

export const CONTACT_STATUSES = ["unread", "read", "forwarded", "resolved", "archived"] as const;

export function appointmentStatus(value: number | null | undefined) {
  return APPOINTMENT_STATUSES.find((status) => status.value === Number(value)) ?? {
    value: Number(value),
    label: "Unknown",
    tone: "pending",
  };
}

export function publishLabel(status: number | null | undefined) {
  return Number(status) === 1 ? "Published" : "Draft";
}

export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180);
}

export function pageNumber(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
}

export function searchTerm(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return (raw ?? "").trim().slice(0, 100);
}

export function positiveId(value: string): number | null {
  if (!/^\d+$/.test(value)) return null;
  const parsed = Number(value);
  return parsed > 0 ? parsed : null;
}

export function likePattern(term: string): string {
  return `%${term.replace(/[\\%_]/g, (char) => `\\${char}`)}%`;
}

export function melbourneToday(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Melbourne",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function formatWhen(value: unknown): string {
  if (!value) return "—";
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function formatDate(value: unknown): string {
  if (!value) return "—";
  const raw = String(value).slice(0, 10);
  const date = new Date(`${raw}T00:00:00`);
  if (Number.isNaN(date.getTime())) return raw;
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Australia/Melbourne",
  }).format(date);
}
