import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "bl_admin";
export const ADMIN_SESSION_SECONDS = 60 * 60 * 12;

const DEV_SECRET = "bansal-lawyers-dev-admin-session";

export function adminSessionSecret(): string {
  const configured = process.env.ADMIN_SESSION_SECRET?.trim();
  if (configured && configured.length >= 16) return configured;
  if (process.env.NODE_ENV !== "production") return DEV_SECRET;
  throw new Error("Set ADMIN_SESSION_SECRET before using the admin in production.");
}

export interface AdminSession {
  id: number;
  exp: number;
}

export function signAdminSession(id: number, exp: number, secret = adminSessionSecret()): string {
  const payload = Buffer.from(JSON.stringify({ id, exp })).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function readAdminSession(token: string | undefined, now = Date.now(), secret = adminSessionSecret()): AdminSession | null {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payload, signature] = parts;
  if (!payload || !signature) return null;

  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  const left = Buffer.from(signature);
  const right = Buffer.from(expected);
  if (left.length !== right.length || !timingSafeEqual(left, right)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { id?: unknown; exp?: unknown };
    const id = Number(parsed.id);
    const exp = Number(parsed.exp);
    if (!Number.isInteger(id) || id <= 0 || !Number.isFinite(exp) || exp * 1000 <= now) return null;
    return { id, exp };
  } catch {
    return null;
  }
}
