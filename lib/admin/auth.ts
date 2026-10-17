import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { RowDataPacket } from "mysql2/promise";
import { adminRows } from "@/lib/admin/db";
import {
  ADMIN_OTP_COOKIE,
  ADMIN_OTP_EMAIL,
  ADMIN_OTP_SECONDS,
  type OtpChallenge,
  readOtpChallenge,
  signOtpChallenge,
} from "@/lib/admin/otp";
import { ADMIN_COOKIE, ADMIN_SESSION_SECONDS, readAdminSession, signAdminSession } from "@/lib/admin/session";

export interface StaffUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 10);
}

function staffFromRow(row: RowDataPacket | undefined): StaffUser | null {
  if (!row) return null;
  if (row.status != null && Number(row.status) !== 1) return null;
  return {
    id: Number(row.id),
    firstName: String(row.first_name ?? ""),
    lastName: String(row.last_name ?? ""),
    email: String(row.email ?? ""),
    phone: String(row.phone ?? ""),
  };
}

async function loadStaff(id: number): Promise<StaffUser | null> {
  const rows = await adminRows<RowDataPacket>(
    `SELECT id, first_name, last_name, email, phone, status
     FROM admins WHERE id = ? LIMIT 1`,
    [id]
  );
  return staffFromRow(rows[0]);
}

export async function findOtpAdmin(): Promise<StaffUser | null> {
  const rows = await adminRows<RowDataPacket>(
    `SELECT id, first_name, last_name, email, phone, status
     FROM admins WHERE LOWER(email) = ? LIMIT 1`,
    [ADMIN_OTP_EMAIL]
  );
  return staffFromRow(rows[0]);
}

function cookieOptions(maxAge: number, path: string) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path,
    maxAge,
  };
}

export async function getCurrentAdmin(): Promise<StaffUser | null> {
  try {
    const jar = await cookies();
    const session = readAdminSession(jar.get(ADMIN_COOKIE)?.value);
    if (!session) return null;
    return await loadStaff(session.id);
  } catch {
    return null;
  }
}

export async function requireAdmin(): Promise<StaffUser> {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}

export async function startAdminSession(id: number) {
  const exp = Math.floor(Date.now() / 1000) + ADMIN_SESSION_SECONDS;
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, signAdminSession(id, exp), cookieOptions(ADMIN_SESSION_SECONDS, "/admin"));
  jar.set(ADMIN_OTP_COOKIE, "", cookieOptions(0, "/admin"));
}

export async function endAdminSession() {
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, "", cookieOptions(0, "/admin"));
  jar.set(ADMIN_OTP_COOKIE, "", cookieOptions(0, "/admin"));
}

export async function beginLoginCode(challenge: OtpChallenge) {
  const jar = await cookies();
  const maxAge = Math.max(1, challenge.exp - Math.floor(Date.now() / 1000));
  jar.set(ADMIN_OTP_COOKIE, signOtpChallenge(challenge), cookieOptions(Math.min(maxAge, ADMIN_OTP_SECONDS), "/admin"));
}

export async function currentLoginCode(): Promise<OtpChallenge | null> {
  try {
    const jar = await cookies();
    return readOtpChallenge(jar.get(ADMIN_OTP_COOKIE)?.value);
  } catch {
    return null;
  }
}

export async function clearLoginCode() {
  const jar = await cookies();
  jar.set(ADMIN_OTP_COOKIE, "", cookieOptions(0, "/admin"));
}
