import type { RowDataPacket } from "mysql2/promise";
import { getDbPool } from "@/lib/db";
import {
  CANCELLED_APPOINTMENT_STATUS,
  FALLBACK_NATURE_OF_ENQUIRY,
  FALLBACK_SERVICES,
  WEBSITE_SERVICE_IDS,
  buildService,
  isIsoDate,
  isoToDdMmYyyy,
  melbourneToday,
  minutesToLabel,
  normalizeSlotLabel,
  parseTimeToMinutes,
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

/** Returns null when the database is unavailable so callers can fall back to defaults. */
export async function getAvailabilityConfig(): Promise<AvailabilityConfig | null> {
  const db = getDbPool();
  if (!db) return null;

  const today = melbourneToday();
  const [schedules] = await db.query<RowDataPacket[]>(
    `SELECT id, weekend, disabledates,
            TIME_FORMAT(start_time, '%H:%i') AS start_time,
            TIME_FORMAT(end_time, '%H:%i') AS end_time
     FROM book_service_slot_per_persons
     WHERE person_id = ? AND service_type = ?
     LIMIT 1`,
    [SCHEDULE_PERSON_ID, SCHEDULE_SERVICE_TYPE]
  );
  const schedule = schedules[0];
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
    timeSlotLabels: timeSlotLabels(),
  };
}

function expandBlockedSlots(raw: string): string[] {
  const value = raw.trim();
  if (!value) return [];

  if ((value.match(/-/g) ?? []).length === 1) {
    const [startRaw, endRaw] = value.split("-");
    const start = parseTimeToMinutes(startRaw);
    const end = parseTimeToMinutes(endRaw);
    if (start === null || end === null || start >= end) return [];
    const labels: string[] = [];
    for (let minutes = start; minutes < end; minutes += 30) {
      labels.push(minutesToLabel(minutes));
    }
    return labels;
  }

  return value
    .split(",")
    .map((slot) => slot.trim())
    .filter(Boolean)
    .map(normalizeSlotLabel);
}

/** Slots already taken locally (appointments + admin-blocked slots). Returns null if the DB is unavailable. */
export async function getLocalUnavailableSlots(isoDate: string): Promise<string[] | null> {
  const db = getDbPool();
  if (!db) return null;

  const [appointments] = await db.query<RowDataPacket[]>(
    `SELECT TIME_FORMAT(a.time, '%H:%i') AS slot_time
     FROM appointments a
     INNER JOIN nature_of_enquiry n ON n.id = a.noe_id AND n.status = 1
     WHERE a.status != ? AND a.date = ? AND a.service_id IN (?)`,
    [CANCELLED_APPOINTMENT_STATUS, isoDate, WEBSITE_SERVICE_IDS]
  );

  const unavailable = new Set<string>();
  for (const row of appointments) {
    if (row.slot_time) unavailable.add(normalizeSlotLabel(String(row.slot_time)));
  }

  const [blockedRows] = await db.query<RowDataPacket[]>(
    `SELECT slots, block_all FROM book_service_disable_slots
     WHERE book_service_slot_per_person_id = ? AND DATE(disabledates) = ?`,
    [SCHEDULE_PERSON_ID, isoDate]
  );
  for (const row of blockedRows) {
    if (Number(row.block_all) === 1) {
      timeSlotLabels().forEach((label) => unavailable.add(label));
      continue;
    }
    expandBlockedSlots(String(row.slots ?? "")).forEach((label) => unavailable.add(label));
  }

  return [...unavailable];
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
