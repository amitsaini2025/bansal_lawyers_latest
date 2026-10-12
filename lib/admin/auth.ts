import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { RowDataPacket } from "mysql2/promise";
import { adminRows } from "@/lib/admin/db";
import { ADMIN_COOKIE, ADMIN_SESSION_SECONDS, readAdminSession, signAdminSession } from "@/lib/admin/session";

export interface StaffUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const attempts = new Map<string, { count: number; resetAt: number }>();

function loginLimited(email: string): boolean {
  const now = Date.now();
  const entry = attempts.get(email);
  if (!entry || now > entry.resetAt) {
    attempts.set(email, { count: 1, resetAt: now + 10 * 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 8;
}

export async function passwordMatches(plain: string, hash: string): Promise<boolean> {
  if (!plain || !hash.startsWith("$2")) return false;
  const normalized = hash.replace(/^\$2y\$/, "$2a$");
  try {
    return await bcrypt.compare(plain, normalized);
  } catch {
    return false;
  }
}

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 10);
}

async function loadStaff(id: number): Promise<StaffUser | null> {
  const rows = await adminRows<RowDataPacket>(
    `SELECT id, first_name, last_name, email, phone, status, password
     FROM admins WHERE id = ? LIMIT 1`,
    [id]
  );
  const row = rows[0];
  if (!row || !String(row.password ?? "").startsWith("$2")) return null;
  if (row.status != null && Number(row.status) !== 1) return null;
  return {
    id: Number(row.id),
    firstName: String(row.first_name ?? ""),
    lastName: String(row.last_name ?? ""),
    email: String(row.email ?? ""),
    phone: String(row.phone ?? ""),
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

export async function authenticateStaff(email: string, password: string): Promise<StaffUser | "limited" | null> {
  const key = email.toLowerCase();
  if (loginLimited(key)) return "limited";

  const rows = await adminRows<RowDataPacket>(
    `SELECT id, first_name, last_name, email, phone, status, password
     FROM admins WHERE email = ? LIMIT 1`,
    [email]
  );
  const row = rows[0];
  if (!row || !(await passwordMatches(password, String(row.password ?? "")))) return null;
  if (row.status != null && Number(row.status) !== 1) return null;
  attempts.delete(key);
  return {
    id: Number(row.id),
    firstName: String(row.first_name ?? ""),
    lastName: String(row.last_name ?? ""),
    email: String(row.email ?? ""),
    phone: String(row.phone ?? ""),
  };
}

export async function startAdminSession(id: number) {
  const exp = Math.floor(Date.now() / 1000) + ADMIN_SESSION_SECONDS;
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, signAdminSession(id, exp), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: ADMIN_SESSION_SECONDS,
  });
}

export async function endAdminSession() {
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 0,
  });
}
