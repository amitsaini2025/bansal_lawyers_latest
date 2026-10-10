import type { RowDataPacket } from "mysql2/promise";
import { getDbPool } from "@/lib/db";
import {
  CANCELLED_APPOINTMENT_STATUS,
  DEFAULT_SLOT_MINUTES,
  FALLBACK_NATURE_OF_ENQUIRY,
  FALLBACK_SERVICES,
  WEBSITE_SERVICE_IDS,
  buildService,
  isIsoDate,
  isoToDdMmYyyy,
  melbourneToday,
  normalizeSlotLabel,
  parseTimeToMinutes,
  slotDuration,
  timeSlotLabels,
  type ConsultationService,
  type NatureOfEnquiry,
} from "@/lib/booking/services";

// The firm's single bookable practitioner schedule (book_service_slot_per_persons).
const SCHEDULE_PERSON_ID = 1;
const SCHEDULE_SERVICE_TYPE = 1;
const CRM_CACHE_TTL_MS = 60_000;

const WEEKDAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export interface AvailabilityConfig {
  disabledWeekdays: number[];
  disabledDates: string[];
  startTime: string | null;
  endTime: string | null;
  today: string;
  timeSlotLabels: string[];
}

export async function getBookableServices(): Promise<ConsultationService[]> {
  const db = getDbPool();
  if (!db) return FALLBACK_SERVICES;
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT id, title, duration, price FROM book_services
       WHERE id IN (?) AND status = 1
       ORDER BY FIELD(id, 2, 1, 3)`,
      [WEBSITE_SERVICE_IDS]
    );
    return rows.map((row) =>
      buildService({ id: Number(row.id), title: String(row.title), duration: row.duration, price: row.price })
    );
  } catch (error) {
    console.error("[Booking] Failed to load services:", error);
    return FALLBACK_SERVICES;
  }
}

export async function getBookableService(id: number): Promise<ConsultationService | null> {
  const services = await getBookableServices();
  return services.find((service) => service.id === id) ?? null;
}

export async function getNatureOfEnquiryOptions(): Promise<NatureOfEnquiry[]> {
  const db = getDbPool();
  if (!db) return FALLBACK_NATURE_OF_ENQUIRY;
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT id, title FROM nature_of_enquiry WHERE status = 1 ORDER BY id"
    );
    return rows.map((row) => ({ id: Number(row.id), title: String(row.title) }));
  } catch (error) {
    console.error("[Booking] Failed to load nature of enquiry options:", error);
    return FALLBACK_NATURE_OF_ENQUIRY;
  }
}

function ddMmYyyyToIso(value: string): string | null {
  const match = value.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return null;
  const iso = `${match[3]}-${match[2].padStart(2, "0")}-${match[1].padStart(2, "0")}`;
  return isIsoDate(iso) ? iso : null;
}

async function loadSchedule(): Promise<RowDataPacket | null> {
  const db = getDbPool();
  if (!db) return null;
  const [schedules] = await db.query<RowDataPacket[]>(
    `SELECT id, weekend, disabledates,
            TIME_FORMAT(start_time, '%H:%i') AS start_time,
            TIME_FORMAT(end_time, '%H:%i') AS end_time
     FROM book_service_slot_per_persons
     WHERE person_id = ? AND service_type = ?
     LIMIT 1`,
    [SCHEDULE_PERSON_ID, SCHEDULE_SERVICE_TYPE]
  );
  return schedules[0] ?? null;
}

/** Bookable start times for a consultation length, from the schedule's start_time / end_time (or the defaults). */
export async function getScheduleTimeSlotLabels(durationMinutes?: number | null): Promise<string[]> {
  try {
    const schedule = await loadSchedule();
    return timeSlotLabels(schedule?.start_time, schedule?.end_time, durationMinutes);
  } catch (error) {
    console.error("[Booking] Failed to load schedule hours:", error);
    return timeSlotLabels(null, null, durationMinutes);
  }
}

/** Returns null when the database is unavailable so callers can fall back to defaults. */
export async function getAvailabilityConfig(): Promise<AvailabilityConfig | null> {
  const db = getDbPool();
  if (!db) return null;

  const today = melbourneToday();
  const schedule = await loadSchedule();
  if (!schedule) return null;

  const disabledWeekdays = String(schedule.weekend ?? "")
    .split(",")
    .map((day) => WEEKDAY_INDEX[day.trim()])
    .filter((day): day is number => day !== undefined);

  const disabled = new Set<string>();
  for (const value of String(schedule.disabledates ?? "").split(",")) {
    const iso = ddMmYyyyToIso(value);
    if (iso) disabled.add(iso);
  }

  const [blocked] = await db.query<RowDataPacket[]>(
    `SELECT DISTINCT DATE_FORMAT(disabledates, '%Y-%m-%d') AS blocked_date
     FROM book_service_disable_slots
     WHERE book_service_slot_per_person_id = ? AND block_all = 1 AND DATE(disabledates) >= ?`,
    [schedule.id, today]
  );
  for (const row of blocked) {
    if (row.blocked_date) disabled.add(String(row.blocked_date));
  }

  disabled.add(today);

  return {
    disabledWeekdays,
    disabledDates: [...disabled].filter((date) => date >= today).sort(),
    startTime: schedule.start_time ?? null,
    endTime: schedule.end_time ?? null,
    today,
    timeSlotLabels: timeSlotLabels(schedule.start_time, schedule.end_time),
  };
}

/** A busy period on one day, in minutes past midnight: [start, end). */
export interface BusyInterval {
  start: number;
  end: number;
}

const WHOLE_DAY: BusyInterval = { start: 0, end: 24 * 60 };

/** Single blocked or CRM-booked times (e.g. "11:00 AM") each cover one standard 30-minute slot. */
export function slotLabelsToIntervals(labels: string[]): BusyInterval[] {
  return labels.flatMap((label) => {
    const start = parseTimeToMinutes(label);
    return start === null ? [] : [{ start, end: start + DEFAULT_SLOT_MINUTES }];
  });
}

function blockedSlotsToIntervals(raw: string): BusyInterval[] {
  const value = raw.trim();
  if (!value) return [];

  if ((value.match(/-/g) ?? []).length === 1) {
    const [startRaw, endRaw] = value.split("-");
    const start = parseTimeToMinutes(startRaw);
    const end = parseTimeToMinutes(endRaw);
    if (start === null || end === null || start >= end) return [];
    return [{ start, end }];
  }

  return slotLabelsToIntervals(value.split(",").map((slot) => slot.trim()).filter(Boolean));
}

/** True when an appointment starting at `startMinutes` and lasting `durationMinutes` overlaps any busy interval. */
export function overlapsBusy(startMinutes: number, durationMinutes: number, busy: BusyInterval[]): boolean {
  const end = startMinutes + durationMinutes;
  return busy.some((interval) => startMinutes < interval.end && interval.start < end);
}

/** The labels from `slots` that cannot be booked for an appointment of `durationMinutes`. */
export function unavailableSlotLabels(slots: string[], durationMinutes: number, busy: BusyInterval[]): string[] {
  return slots.filter((label) => {
    const start = parseTimeToMinutes(label);
    return start !== null && overlapsBusy(start, durationMinutes, busy);
  });
}

/**
 * Periods already taken locally: existing appointments (for their full length) and admin-blocked slots.
 * Returns null if the DB is unavailable.
 */
export async function getLocalBusyIntervals(isoDate: string): Promise<BusyInterval[] | null> {
  const db = getDbPool();
  if (!db) return null;

  const [appointments] = await db.query<RowDataPacket[]>(
    `SELECT TIME_FORMAT(a.time, '%H:%i') AS slot_time, s.duration
     FROM appointments a
     INNER JOIN nature_of_enquiry n ON n.id = a.noe_id AND n.status = 1
     LEFT JOIN book_services s ON s.id = a.service_id
     WHERE a.status != ? AND a.date = ? AND a.service_id IN (?)`,
    [CANCELLED_APPOINTMENT_STATUS, isoDate, WEBSITE_SERVICE_IDS]
  );

  const busy: BusyInterval[] = [];
  for (const row of appointments) {
    const start = row.slot_time ? parseTimeToMinutes(String(row.slot_time)) : null;
    if (start !== null) busy.push({ start, end: start + slotDuration(Number(row.duration)) });
  }

  const [blockedRows] = await db.query<RowDataPacket[]>(
    `SELECT slots, block_all FROM book_service_disable_slots
     WHERE book_service_slot_per_person_id = ? AND DATE(disabledates) = ?`,
    [SCHEDULE_PERSON_ID, isoDate]
  );
  for (const row of blockedRows) {
    if (Number(row.block_all) === 1) {
      busy.push(WHOLE_DAY);
      continue;
    }
    busy.push(...blockedSlotsToIntervals(String(row.slots ?? "")));
  }

  return busy;
}

const crmCache = new Map<string, { slots: string[]; expiresAt: number }>();

/** Slots booked directly in the CRM. Failures are non-critical and return an empty list. */
export async function getCrmUnavailableSlots(isoDate: string, inpersonAddress = 2): Promise<string[]> {
  const url = process.env.CRM_DISABLED_TIME_SLOTS_URL?.trim();
  if (!url) return [];

  const address = inpersonAddress === 1 ? 1 : 2;
  const cacheKey = `${isoDate}_${address}`;
  const cached = crmCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.slots;

  const timeoutSeconds = Math.max(1, Number(process.env.CRM_DISABLED_TIME_SLOTS_TIMEOUT) || 5);
  const useToken = /^(1|true|yes|on)$/i.test(process.env.CRM_DISABLED_TIME_SLOTS_USE_TOKEN ?? "");
  const token = process.env.CRM_API_TOKEN?.trim();

  let slots: string[] = [];
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-store",
      signal: AbortSignal.timeout(timeoutSeconds * 1000),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(useToken && token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ date: isoToDdMmYyyy(isoDate), inperson_address: address }),
    });
    if (response.ok) {
      const json = (await response.json()) as {
        disabledtimeslotes?: unknown;
        data?: { disabledtimeslotes?: unknown };
      };
      const raw = Array.isArray(json?.data?.disabledtimeslotes)
        ? json.data.disabledtimeslotes
        : Array.isArray(json?.disabledtimeslotes)
          ? json.disabledtimeslotes
          : [];
      slots = [
        ...new Set(
          raw
            .filter((slot): slot is string | number => typeof slot === "string" || typeof slot === "number")
            .map((slot) => normalizeSlotLabel(String(slot)))
            .filter(Boolean)
        ),
      ];
    }
  } catch {
    slots = [];
  }

  crmCache.set(cacheKey, { slots, expiresAt: Date.now() + CRM_CACHE_TTL_MS });
  return slots;
}
