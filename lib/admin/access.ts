import { ADMIN_OTP_EMAIL, CONTENT_WRITER_EMAIL } from "@/lib/admin/otp";

export type StaffRole = "admin" | "writer";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseWriterEmails(raw: string | undefined, adminEmail = ADMIN_OTP_EMAIL): string[] {
  const admin = adminEmail.trim().toLowerCase();
  const seen = new Set<string>();
  for (const part of (raw ?? "").split(",")) {
    const email = part.trim().toLowerCase();
    if (!EMAIL.test(email) || email === admin) continue;
    seen.add(email);
  }
  return [...seen];
}

export function writerEmails(): string[] {
  return parseWriterEmails(`${CONTENT_WRITER_EMAIL},${process.env.CONTENT_WRITER_EMAILS ?? ""}`);
}

export function roleForEmail(email: string, writers: readonly string[] = writerEmails()): StaffRole | null {
  const normalized = email.trim().toLowerCase();
  if (!EMAIL.test(normalized)) return null;
  if (normalized === ADMIN_OTP_EMAIL.toLowerCase()) return "admin";
  if (writers.includes(normalized)) return "writer";
  return null;
}

export function homeForRole(role: StaffRole): string {
  return role === "writer" ? "/admin/blogs" : "/admin/dashboard";
}

export function writerMayManage(table: string): boolean {
  return table === "blogs" || table === "recent_cases";
}
