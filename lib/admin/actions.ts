"use server";

import { redirect } from "next/navigation";
import { beginLoginCode, clearLoginCode, currentLoginCode, endAdminSession, findOtpAdmin, hashPassword, requireAdmin, startAdminSession } from "@/lib/admin/auth";
import {
  ADMIN_OTP_EMAIL,
  ADMIN_OTP_MAX_ATTEMPTS,
  ADMIN_OTP_SECONDS,
  createLoginCode,
  hashLoginCode,
  loginCodeMatches,
  loginCodeSendBlocked,
  noteLoginCodeSent,
} from "@/lib/admin/otp";
import {
  addBlock,
  deleteBlock,
  deleteContact,
  deleteRecord,
  emailTaken,
  getContact,
  getStaff,
  markContactForwarded,
  saveRecord,
  setAppointmentStatus,
  setContactStatus,
  slugTaken,
} from "@/lib/admin/data";
import { AdminDatabaseError } from "@/lib/admin/db";
import { APPOINTMENT_STATUSES, CONTACT_STATUSES, positiveId, slugify } from "@/lib/admin/labels";
import { getMailConfig, getMailTransporter } from "@/lib/mail";

function text(formData: FormData, name: string, max = 500) {
  return String(formData.get(name) ?? "").trim().slice(0, max);
}

function bounce(path: string, message: string): never {
  redirect(`${path}${path.includes("?") ? "&" : "?"}error=${encodeURIComponent(message)}`);
}

function done(path: string, message: string): never {
  redirect(`${path}${path.includes("?") ? "&" : "?"}notice=${encodeURIComponent(message)}`);
}

function failure(error: unknown, path: string): never {
  if (isNextRedirect(error)) throw error;
  if (error instanceof AdminDatabaseError) bounce(path, error.message);
  console.error("[Admin]", error);
  bounce(path, "That change could not be saved.");
}

function isNextRedirect(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "digest" in error &&
    String((error as { digest?: unknown }).digest).startsWith("NEXT_REDIRECT")
  );
}

function databaseUnreachable(error: unknown) {
  const code = typeof error === "object" && error !== null && "code" in error ? String((error as { code?: unknown }).code) : "";
  return code === "ECONNREFUSED" || code === "ECONNRESET" || code === "PROTOCOL_CONNECTION_LOST";
}

export async function sendLoginCodeAction() {
  const blocked = loginCodeSendBlocked(ADMIN_OTP_EMAIL);
  if (blocked === "wait") bounce("/admin/login", "A code was just sent. Wait a minute before requesting another.");
  if (blocked === "limited") bounce("/admin/login", "Too many codes have been sent. Wait a few minutes and try again.");

  try {
    const staff = await findOtpAdmin();
    if (!staff) bounce("/admin/login", "Sign-in is unavailable because that staff account is not active.");

    const code = createLoginCode();
    const exp = Math.floor(Date.now() / 1000) + ADMIN_OTP_SECONDS;
    await beginLoginCode({ id: staff.id, codeHash: hashLoginCode(staff.id, code), exp, attempts: 0 });

    const config = getMailConfig();
    const mailer = getMailTransporter();
    if (!config || !mailer) {
      await clearLoginCode();
      bounce("/admin/login", "Email is not configured, so the sign-in code could not be sent.");
    }

    try {
      await mailer.sendMail({
        from: config.fromEmail,
        to: ADMIN_OTP_EMAIL,
        subject: "Your Bansal Lawyers admin sign-in code",
        text: `Your admin sign-in code is ${code}. It expires in 10 minutes. If you did not request this code, you can ignore this email.`,
        html: `<p>Your admin sign-in code is <strong style="letter-spacing:0.2em;font-size:20px">${code}</strong>.</p><p>It expires in 10 minutes. If you did not request this code, you can ignore this email.</p>`,
      });
    } catch (error) {
      console.error("[Admin] Sign-in code email failed", error);
      await clearLoginCode();
      bounce("/admin/login", "The sign-in code could not be sent. Try again in a moment.");
    }
    noteLoginCodeSent(ADMIN_OTP_EMAIL);
  } catch (error) {
    if (isNextRedirect(error)) throw error;
    await clearLoginCode();
    if (error instanceof AdminDatabaseError) bounce("/admin/login", error.message);
    if (databaseUnreachable(error)) {
      bounce("/admin/login", "The staff database could not be reached, so the sign-in code was not sent.");
    }
    console.error("[Admin]", error);
    bounce("/admin/login", "The sign-in code could not be sent. Try again in a moment.");
  }
  done("/admin/login", `A sign-in code was sent to ${ADMIN_OTP_EMAIL}.`);
}

export async function verifyLoginCodeAction(formData: FormData) {
  const submitted = text(formData, "code", 12);
  const challenge = await currentLoginCode();
  if (!challenge) bounce("/admin/login", "Request a new sign-in code.");

  if (!loginCodeMatches(challenge.id, submitted, challenge.codeHash)) {
    const attempts = challenge.attempts + 1;
    if (attempts >= ADMIN_OTP_MAX_ATTEMPTS) {
      await clearLoginCode();
      bounce("/admin/login", "Too many attempts. Request a new sign-in code.");
    }
    await beginLoginCode({ ...challenge, attempts });
    bounce("/admin/login", "That code is not valid.");
  }

  try {
    const staff = await findOtpAdmin();
    if (!staff || staff.id !== challenge.id) {
      await clearLoginCode();
      bounce("/admin/login", "Sign-in is unavailable because that staff account is not active.");
    }
    await startAdminSession(staff.id);
  } catch (error) {
    if (isNextRedirect(error)) throw error;
    if (error instanceof AdminDatabaseError) bounce("/admin/login", error.message);
    if (databaseUnreachable(error)) bounce("/admin/login", "The staff database could not be reached.");
    console.error("[Admin]", error);
    bounce("/admin/login", "Sign-in could not be completed. Try again.");
  }
  redirect("/admin/dashboard");
}

export async function logoutAction() {
  await endAdminSession();
  redirect("/admin/login");
}

export async function updateAppointmentStatusAction(formData: FormData) {
  await requireAdmin();
  const id = positiveId(text(formData, "id", 12));
  const status = Number(text(formData, "status", 2));
  const path = id ? `/admin/appointments/${id}` : "/admin/appointments";
  if (!id || !APPOINTMENT_STATUSES.some((item) => item.value === status)) bounce(path, "Choose a valid status.");
  try {
    await setAppointmentStatus(id, status);
  } catch (error) {
    failure(error, path);
  }
  done(path, "Appointment status updated.");
}

export async function createBlockAction(formData: FormData) {
  await requireAdmin();
  const date = text(formData, "date", 10);
  const fullDay = formData.get("full_day") === "1";
  const start = text(formData, "start_time", 5);
  const end = text(formData, "end_time", 5);
  const clock = /^([01]\d|2[0-3]):[0-5]\d$/;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) bounce("/admin/booking-blocks", "Choose a valid date.");
  if (!fullDay && (!clock.test(start) || !clock.test(end) || start >= end)) {
    bounce("/admin/booking-blocks", "Enter a start time that is earlier than the end time, or block the full day.");
  }
  try {
    await addBlock(date, fullDay, start, end);
  } catch (error) {
    failure(error, "/admin/booking-blocks");
  }
  done("/admin/booking-blocks", "Time slot blocked.");
}

export async function deleteBlockAction(formData: FormData) {
  await requireAdmin();
  const id = positiveId(text(formData, "id", 12));
  if (!id) bounce("/admin/booking-blocks", "That block could not be found.");
  try {
    await deleteBlock(id);
  } catch (error) {
    failure(error, "/admin/booking-blocks");
  }
  done("/admin/booking-blocks", "Block removed. That time can be booked again.");
}

export async function updateContactStatusAction(formData: FormData) {
  await requireAdmin();
  const id = positiveId(text(formData, "id", 12));
  const status = text(formData, "status", 20);
  const path = id ? `/admin/contacts/${id}` : "/admin/contacts";
  if (!id || !CONTACT_STATUSES.includes(status as (typeof CONTACT_STATUSES)[number])) {
    bounce(path, "Choose a valid status.");
  }
  try {
    await setContactStatus(id, status);
  } catch (error) {
    failure(error, path);
  }
  done(path, "Contact status updated.");
}

export async function deleteContactAction(formData: FormData) {
  await requireAdmin();
  const id = positiveId(text(formData, "id", 12));
  if (!id) bounce("/admin/contacts", "That enquiry could not be found.");
  try {
    await deleteContact(id);
  } catch (error) {
    failure(error, "/admin/contacts");
  }
  done("/admin/contacts", "Enquiry deleted.");
}

export async function forwardContactAction(formData: FormData) {
  await requireAdmin();
  const id = positiveId(text(formData, "id", 12));
  const path = id ? `/admin/contacts/${id}` : "/admin/contacts";
  if (!id) bounce(path, "That enquiry could not be found.");
  try {
    const contact = await getContact(id);
    if (!contact) bounce(path, "That enquiry could not be found.");
    const config = getMailConfig();
    const mailer = getMailTransporter();
    if (!config || !mailer) bounce(path, "Email is not configured, so this enquiry could not be forwarded.");
    const inbox = config.receiverEmail;
    const replyTo = String(contact.contact_email ?? "").replace(/[\r\n]/g, "").trim();
    const subject = `Contact enquiry: ${String(contact.subject ?? "No subject").replace(/[\r\n]/g, " ")} — ${String(contact.name ?? "").replace(/[\r\n]/g, " ")}`.slice(0, 180);
    await mailer.sendMail({
      from: config.fromEmail,
      to: inbox,
      ...(replyTo.includes("@") ? { replyTo } : {}),
      subject,
      text: [
        `Name: ${contact.name ?? ""}`,
        `Email: ${contact.contact_email ?? ""}`,
        `Phone: ${contact.contact_phone ?? ""}`,
        `Department: ${contact.department ?? ""}`,
        `Subject: ${contact.subject ?? ""}`,
        "",
        String(contact.message ?? ""),
      ].join("\n"),
    });
    await markContactForwarded(id, inbox);
  } catch (error) {
    failure(error, path);
  }
  done(path, "Enquiry forwarded to the firm inbox.");
}

const CONTENT = {
  blogs: { slug: "slug", list: "/admin/blogs" },
  blog_categories: { slug: "slug", list: "/admin/blog-categories" },
  cms_pages: { slug: "slug", list: "/admin/pages" },
  recent_cases: { slug: "slug", list: "/admin/cases" },
} as const;

type ContentTable = keyof typeof CONTENT;

function contentTable(value: string): ContentTable | null {
  return value in CONTENT ? (value as ContentTable) : null;
}

export async function saveContentAction(formData: FormData) {
  await requireAdmin();
  const table = contentTable(text(formData, "table", 40));
  if (!table) bounce("/admin/dashboard", "Unknown record.");
  const list = CONTENT[table].list;
  const rawId = text(formData, "id", 12);
  const id = rawId ? positiveId(rawId) : null;
  if (rawId && !id) bounce(list, "That record could not be found.");
  const title = text(formData, "title", 250) || text(formData, "name", 250);
  if (!title) bounce(id ? `${list}/${id}` : `${list}/new`, "A title is required.");
  const slugColumn = CONTENT[table].slug;
  const slug = slugify(text(formData, "slug", 180) || title);
  if (!slug) bounce(id ? `${list}/${id}` : `${list}/new`, "A slug is required.");

  const values: Record<string, string | number | null> = {
    title,
    name: title,
    [slugColumn]: slug,
  };
  if (formData.has("short_description")) values.short_description = text(formData, "short_description", 255);
  if (formData.has("body")) {
    const body = text(formData, "body", 500_000);
    if (table === "cms_pages") values.content = body;
    else values.description = body;
  }
  if (formData.has("meta_title")) values.meta_title = text(formData, "meta_title", 250);
  if (formData.has("meta_description")) values.meta_description = text(formData, "meta_description", 500);
  if (formData.has("status")) values.status = text(formData, "status", 1) === "1" ? 1 : 0;
  if (formData.has("parent_id")) values.parent_id = positiveId(text(formData, "parent_id", 12)) ?? 0;
  if (formData.has("parent_category")) values.parent_category = positiveId(text(formData, "parent_category", 12));

  try {
    if (await slugTaken(table, slugColumn, slug, id)) bounce(id ? `${list}/${id}` : `${list}/new`, "That slug is already used.");
    const saved = await saveRecord(table, id, values);
    done(`${list}/${saved}`, "Saved.");
  } catch (error) {
    failure(error, id ? `${list}/${id}` : `${list}/new`);
  }
}

export async function deleteContentAction(formData: FormData) {
  await requireAdmin();
  const table = contentTable(text(formData, "table", 40));
  const id = positiveId(text(formData, "id", 12));
  if (!table || !id) bounce("/admin/dashboard", "That record could not be found.");
  try {
    await deleteRecord(table, id);
  } catch (error) {
    failure(error, CONTENT[table].list);
  }
  done(CONTENT[table].list, "Deleted.");
}

export async function saveProfileAction(formData: FormData) {
  const admin = await requireAdmin();
  const firstName = text(formData, "first_name", 120);
  const lastName = text(formData, "last_name", 120);
  const phone = text(formData, "phone", 50);
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("password_confirmation") ?? "");
  if (!firstName) bounce("/admin/profile", "First name is required.");
  if (password && (password.length < 8 || password !== confirm)) {
    bounce("/admin/profile", "New password must be at least 8 characters and match the confirmation.");
  }
  try {
    const values: Record<string, string | number | null> = {
      first_name: firstName,
      last_name: lastName,
      phone,
    };
    if (password) values.password = await hashPassword(password);
    await saveRecord("admins", admin.id, values);
  } catch (error) {
    failure(error, "/admin/profile");
  }
  done("/admin/profile", password ? "Profile and password updated." : "Profile updated.");
}

export async function saveStaffAction(formData: FormData) {
  const admin = await requireAdmin();
  const rawId = text(formData, "id", 12);
  const id = rawId ? positiveId(rawId) : null;
  const path = id ? `/admin/staff/${id}` : "/admin/staff/new";
  const firstName = text(formData, "first_name", 120);
  const lastName = text(formData, "last_name", 120);
  const email = text(formData, "email", 191).toLowerCase();
  const phone = text(formData, "phone", 50);
  const company = text(formData, "company_name", 255);
  const status = text(formData, "status", 1) === "1" ? 1 : 0;
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("password_confirmation") ?? "");
  if (!firstName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) bounce(path, "First name and a valid email are required.");
  if (id === admin.id && status === 0) bounce(path, "You cannot disable the account you are signed in with.");
  if (!id && password.length < 8) bounce(path, "A new staff account needs a password of at least 8 characters.");
  if (password && (password.length < 8 || password !== confirm)) {
    bounce(path, "Password must be at least 8 characters and match the confirmation.");
  }
  try {
    if (id && !(await getStaff(id))) bounce(path, "That staff account could not be found.");
    if (await emailTaken(email, id)) bounce(path, "That email is already used.");
    const values: Record<string, string | number | null> = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      company_name: company,
      status,
      is_archived: 0,
    };
    if (password) values.password = await hashPassword(password);
    const saved = await saveRecord("admins", id, values);
    done(`/admin/staff/${saved}`, "Staff account saved.");
  } catch (error) {
    failure(error, path);
  }
}
