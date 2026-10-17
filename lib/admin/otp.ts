import { createHash, createHmac, randomInt, timingSafeEqual } from "crypto";
import { adminSessionSecret } from "@/lib/admin/session";

export const ADMIN_OTP_COOKIE = "bl_admin_otp";
export const ADMIN_OTP_EMAIL = "admin@bansallawyers.com.au";
export const ADMIN_OTP_SECONDS = 10 * 60;
export const ADMIN_OTP_MAX_ATTEMPTS = 5;

const sends = new Map<string, { count: number; windowStart: number; lastAt: number }>();

export interface OtpChallenge {
  id: number;
  codeHash: string;
  exp: number;
  attempts: number;
}

export function createLoginCode(): string {
  return String(randomInt(0, 1_000_000)).padStart(6, "0");
}

export function hashLoginCode(id: number, code: string, secret = adminSessionSecret()): string {
  return createHash("sha256").update(`${secret}:${id}:${code}`).digest("base64url");
}

export function loginCodeMatches(id: number, submitted: string, codeHash: string, secret = adminSessionSecret()): boolean {
  const normalized = submitted.replace(/\s+/g, "");
  const candidate = /^\d{6}$/.test(normalized) ? normalized : "000000";
  const actual = Buffer.from(hashLoginCode(id, candidate, secret));
  const expected = Buffer.from(codeHash);
  if (actual.length !== expected.length) return false;
  return timingSafeEqual(actual, expected) && /^\d{6}$/.test(normalized);
}

export function signOtpChallenge(challenge: OtpChallenge, secret = adminSessionSecret()): string {
  const payload = Buffer.from(JSON.stringify(challenge)).toString("base64url");
  const signature = createHmac("sha256", secret).update(`otp.${payload}`).digest("base64url");
  return `${payload}.${signature}`;
}

export function readOtpChallenge(token: string | undefined, now = Date.now(), secret = adminSessionSecret()): OtpChallenge | null {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payload, signature] = parts;
  if (!payload || !signature) return null;

  const expected = createHmac("sha256", secret).update(`otp.${payload}`).digest("base64url");
  const left = Buffer.from(signature);
  const right = Buffer.from(expected);
  if (left.length !== right.length || !timingSafeEqual(left, right)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as Partial<OtpChallenge>;
    const id = Number(parsed.id);
    const exp = Number(parsed.exp);
    const attempts = Number(parsed.attempts);
    const codeHash = String(parsed.codeHash ?? "");
    if (!Number.isInteger(id) || id <= 0 || !Number.isFinite(exp) || exp * 1000 <= now) return null;
    if (!Number.isInteger(attempts) || attempts < 0 || attempts > ADMIN_OTP_MAX_ATTEMPTS) return null;
    if (!codeHash) return null;
    return { id, codeHash, exp, attempts };
  } catch {
    return null;
  }
}

export function loginCodeSendBlocked(key: string, now = Date.now()): "ok" | "wait" | "limited" {
  const entry = sends.get(key);
  if (!entry || now - entry.windowStart > 10 * 60_000) return "ok";
  if (now - entry.lastAt < 60_000) return "wait";
  if (entry.count >= 5) return "limited";
  return "ok";
}

export function noteLoginCodeSent(key: string, now = Date.now()) {
  const entry = sends.get(key);
  if (!entry || now - entry.windowStart > 10 * 60_000) {
    sends.set(key, { count: 1, windowStart: now, lastAt: now });
    return;
  }
  entry.count += 1;
  entry.lastAt = now;
}
