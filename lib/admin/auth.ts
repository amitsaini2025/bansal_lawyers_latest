import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { RowDataPacket } from "mysql2/promise";
import { homeForRole, roleForEmail, type StaffRole, writerEmails } from "@/lib/admin/access";
import { adminExecute, adminRows, columnsOf } from "@/lib/admin/db";
import {
  ADMIN_OTP_COOKIE,
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
  role: StaffRole;
}

function staffFromRow(row: RowDataPacket | undefined): StaffUser | null {
  if (!row) return null;
  if (row.status != null && Number(row.status) !== 1) return null;
  const email = String(row.email ?? "");
  const role = roleForEmail(email);
  if (!role) return null;
  return {
    id: Number(row.id),
    firstName: String(row.first_name ?? ""),
    lastName: String(row.last_name ?? ""),
    email,
    phone: String(row.phone ?? ""),
    role,
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

async function staffByEmail(email: string): Promise<StaffUser | null> {
  const rows = await adminRows<RowDataPacket>(
    `SELECT id, first_name, last_name, email, phone, status
     FROM admins WHERE LOWER(email) = ? ORDER BY id LIMIT 1`,
    [email]
  );
  return staffFromRow(rows[0]);
}

async function createWriter(email: string): Promise<StaffUser | null> {
  const columns = await columnsOf("admins");
  const local = email.split("@")[0]?.slice(0, 80) || "Writer";
  const values: Record<string, string | number> = {};
  const put = (column: string, value: string | number) => {
    if (columns.has(column)) values[column] = value;
  };
  put("first_name", local);
  put("last_name", "");
  put("email", email);
  put("password", "");
  put("phone", "");
  put("status", 1);
  put("client_id", `cw${Date.now()}`.slice(0, 40));
  const keys = Object.keys(values);
  if (!keys.includes("email")) return null;
  const timestamps = ["created_at", "updated_at"].filter((column) => columns.has(column));
  const names = [...keys, ...timestamps];
  const placeholders = [...keys.map(() => "?"), ...timestamps.map(() => "NOW()")];
  try {
    const result = await adminExecute(
      `INSERT INTO admins (${names.join(", ")}) VALUES (${placeholders.join(", ")})`,
      keys.map((key) => values[key])
    );
    return {
      id: Number(result.insertId),
      firstName: local,
      lastName: "",
      email,
      phone: "",
      role: "writer",
    };
  } catch (error) {
    const code = typeof error === "object" && error !== null && "code" in error ? String((error as { code?: unknown }).code) : "";
    if (code !== "ER_DUP_ENTRY") throw error;
    return staffByEmail(email);
  }
}

export async function findActiveStaff(id: number): Promise<StaffUser | null> {
  return loadStaff(id);
}

export async function findStaffForLogin(email: string): Promise<StaffUser | null> {
  const normalized = email.trim().toLowerCase();
  const role = roleForEmail(normalized, writerEmails());
  if (!role) return null;
  const existing = await staffByEmail(normalized);
  if (existing) return existing;
  if (role !== "writer") return null;
  const rows = await adminRows<RowDataPacket>(
    "SELECT id FROM admins WHERE LOWER(email) = ? ORDER BY id LIMIT 1",
    [normalized]
  );
  if (rows[0]) return null;
  return createWriter(normalized);
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

export async function requireFullAdmin(): Promise<StaffUser> {
  const admin = await requireAdmin();
  if (admin.role !== "admin") redirect(homeForRole(admin.role));
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
