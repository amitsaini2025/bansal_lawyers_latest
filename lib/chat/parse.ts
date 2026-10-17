import { isIsoDate, minutesToLabel, parseTimeToMinutes } from "@/lib/booking/services";

const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;
const WEEKDAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS: Record<string, number> = {
  jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3, apr: 4, april: 4,
  may: 5, jun: 6, june: 6, jul: 7, july: 7, aug: 8, august: 8, sep: 9, sept: 9, september: 9,
  oct: 10, october: 10, nov: 11, november: 11, dec: 12, december: 12,
};

export function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function weekdayOf(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

export function formatChipDate(iso: string, todayIso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const month = new Date(Date.UTC(y, m - 1, d)).toLocaleString("en-AU", { month: "short", timeZone: "UTC" });
  const label = `${WEEKDAY_SHORT[weekdayOf(iso)]} ${d} ${month}`;
  return iso.slice(0, 4) === todayIso.slice(0, 4) ? label : `${label} ${y}`;
}

export function upcomingOpenDates(
  todayIso: string,
  disabledWeekdays: number[],
  disabledDates: string[],
  count = 6
): string[] {
  const blocked = new Set(disabledDates);
  const dates: string[] = [];
  for (let offset = 1; offset <= 60 && dates.length < count; offset += 1) {
    const iso = addDays(todayIso, offset);
    if (disabledWeekdays.includes(weekdayOf(iso)) || blocked.has(iso)) continue;
    dates.push(iso);
  }
  return dates;
}

function isoFromParts(year: number, month: number, day: number): string | null {
  const iso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  return isIsoDate(iso) ? iso : null;
}

/** Resolves a spoken or typed date against Melbourne "today". Returns null when nothing date-like is present. */
export function parseLooseDate(input: string, todayIso: string): string | null {
  const text = input.trim().toLowerCase().replace(/,/g, " ");
  if (!text) return null;

  const iso = text.match(/\b(\d{4}-\d{2}-\d{2})\b/);
  if (iso && isIsoDate(iso[1])) return iso[1];

  if (/\btomorrow\b/.test(text)) return addDays(todayIso, 1);
  if (/\btoday\b/.test(text)) return todayIso;

  const weekday = text.match(/\b(?:(next|this)\s+)?(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/);
  if (weekday) {
    const target = WEEKDAYS.indexOf(weekday[2] as (typeof WEEKDAYS)[number]);
    let delta = (target - weekdayOf(todayIso) + 7) % 7;
    if (delta === 0) delta = 7;
    return addDays(todayIso, delta);
  }

  const numeric = text.match(/\b(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?\b/);
  if (numeric) {
    const day = Number(numeric[1]);
    const month = Number(numeric[2]);
    let year = numeric[3] ? Number(numeric[3]) : Number(todayIso.slice(0, 4));
    if (year < 100) year += 2000;
    let resolved = isoFromParts(year, month, day);
    if (resolved && !numeric[3] && resolved <= todayIso) resolved = isoFromParts(year + 1, month, day);
    if (resolved) return resolved;
  }

  const monthName = Object.keys(MONTHS).sort((a, b) => b.length - a.length).join("|");
  const spoken = text.match(new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?\\s+(${monthName})(?:\\s+(\\d{4}))?\\b`));
  const spokenReverse = text.match(new RegExp(`\\b(${monthName})\\s+(\\d{1,2})(?:st|nd|rd|th)?(?:\\s+(\\d{4}))?\\b`));
  const match = spoken
    ? { day: Number(spoken[1]), month: MONTHS[spoken[2]], year: spoken[3] ? Number(spoken[3]) : null }
    : spokenReverse
      ? { day: Number(spokenReverse[2]), month: MONTHS[spokenReverse[1]], year: spokenReverse[3] ? Number(spokenReverse[3]) : null }
      : null;
  if (!match) return null;
  const year = match.year ?? Number(todayIso.slice(0, 4));
  let resolved = isoFromParts(year, match.month, match.day);
  if (resolved && match.year === null && resolved <= todayIso) resolved = isoFromParts(year + 1, match.month, match.day);
  return resolved;
}

/** Pulls the first clock time out of a message, in the same "h:mm AM" form the calendar uses. */
export function parseLooseTime(input: string): string | null {
  const match = input.match(/\b(\d{1,2})(?::(\d{2}))?\s*(a\.?m\.?|p\.?m\.?)\b/i)
    ?? input.match(/\b([01]?\d|2[0-3]):([0-5]\d)\b/);
  if (!match) return null;
  const raw = match[3] ? `${match[1]}:${match[2] ?? "00"} ${match[3]}` : `${match[1]}:${match[2]}`;
  const minutes = parseTimeToMinutes(raw);
  return minutes === null ? null : minutesToLabel(minutes);
}

export function isAffirmative(input: string): boolean {
  return /^(yes|yep|yeah|y|ok|okay|confirm|confirmed|book it|book|please book|that's right|thats right|correct|go ahead|i agree|i understand|i accept|accept)\b/i.test(
    input.trim()
  );
}

export function isNegative(input: string): boolean {
  return /^(no|nope|nah|change|wait|stop|cancel|not quite|incorrect)\b/i.test(input.trim());
}
