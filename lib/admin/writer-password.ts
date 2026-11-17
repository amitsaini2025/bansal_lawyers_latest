import { scryptSync, timingSafeEqual } from "crypto";
import { CONTENT_WRITER_EMAIL } from "@/lib/admin/otp";

const SALT = "zSqqbspcZqkqmDx88MrXYA";
const HASH = "GkUy-88EyWRAxSVHJiLqJM2jn6QK9eQiwrs-RmhDDv8";
const WINDOW_MS = 10 * 60_000;
const MAX_ATTEMPTS = 5;

const attempts = new Map<string, { count: number; windowStart: number }>();

export function writerPasswordMatches(password: string): boolean {
  const actual = scryptSync(password, SALT, 32);
  const expected = Buffer.from(HASH, "base64url");
  if (actual.length !== expected.length) return false;
  return timingSafeEqual(actual, expected);
}

export function isContentWriterEmail(email: string): boolean {
  return email.trim().toLowerCase() === CONTENT_WRITER_EMAIL.toLowerCase();
}

export function writerPasswordBlocked(email: string, now = Date.now()): boolean {
  const entry = attempts.get(email.trim().toLowerCase());
  if (!entry || now - entry.windowStart > WINDOW_MS) return false;
  return entry.count >= MAX_ATTEMPTS;
}

export function noteWriterPasswordFailure(email: string, now = Date.now()) {
  const key = email.trim().toLowerCase();
  const entry = attempts.get(key);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    attempts.set(key, { count: 1, windowStart: now });
    return;
  }
  entry.count += 1;
}
