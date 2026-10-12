import type { RowDataPacket } from "mysql2/promise";
import { adminExecute, adminRows, columnsOf, tableReady } from "@/lib/admin/db";
import { likePattern, melbourneToday } from "@/lib/admin/labels";

const PAGE_SIZE = 20;

export interface PageResult<T> {
  rows: T[];
  total: number;
  page: number;
  pages: number;
  error?: string;
}

function paged<T>(rows: T[], total: number, page: number, error?: string): PageResult<T> {
  return { rows, total, page, pages: Math.max(1, Math.ceil(total / PAGE_SIZE)), error };
}

function offset(page: number) {
  return (page - 1) * PAGE_SIZE;
}

export async function dashboardSnapshot() {
  const today = melbourneToday();
  const [appointments, contacts, blogs, blocks, recentAppointments, recentContacts] = await Promise.all([
    adminRows<RowDataPacket>(
      `SELECT
         COUNT(*) AS total,
         SUM(date = ?) AS today_count,
         SUM(date >= ? AND status <> 7) AS upcoming
       FROM appointments`,
      [today, today]
    ),
    adminRows<RowDataPacket>(
      `SELECT
         COUNT(*) AS total,
         SUM(status IS NULL OR status = 'unread') AS unread_count,
         SUM(DATE(created_at) = ?) AS today_count
       FROM contacts`,
      [today]
    ),
    adminRows<RowDataPacket>("SELECT COUNT(*) AS total, SUM(status = 1) AS published FROM blogs"),
    adminRows<RowDataPacket>(
      "SELECT COUNT(*) AS total FROM book_service_disable_slots WHERE DATE(disabledates) >= ?",
      [today]
    ),
    adminRows<RowDataPacket>(
      `SELECT id, full_name, email, DATE_FORMAT(date, '%Y-%m-%d') AS appt_date,
              TIME_FORMAT(time, '%H:%i') AS appt_time, status
       FROM appointments ORDER BY created_at DESC LIMIT 6`
    ),
    adminRows<RowDataPacket>(
      `SELECT id, name, contact_email, subject, status, created_at
       FROM contacts ORDER BY created_at DESC LIMIT 6`
    ),
  ]);

  return {
    appointments: {
      total: Number(appointments[0]?.total ?? 0),
      today: Number(appointments[0]?.today_count ?? 0),
      upcoming: Number(appointments[0]?.upcoming ?? 0),
    },
    contacts: {
      total: Number(contacts[0]?.total ?? 0),
      unread: Number(contacts[0]?.unread_count ?? 0),
      today: Number(contacts[0]?.today_count ?? 0),
    },
    blogs: {
      total: Number(blogs[0]?.total ?? 0),
      published: Number(blogs[0]?.published ?? 0),
    },
    blocks: Number(blocks[0]?.total ?? 0),
    recentAppointments,
    recentContacts,
  };
}

export async function listAppointments(search: string, page: number): Promise<PageResult<RowDataPacket>> {
  const where = search
    ? `WHERE a.full_name LIKE ? ESCAPE '\\\\' OR a.email LIKE ? ESCAPE '\\\\'
        OR a.phone LIKE ? ESCAPE '\\\\' OR a.client_unique_id LIKE ? ESCAPE '\\\\'
        OR a.description LIKE ? ESCAPE '\\\\'`
    : "";
  const pattern = likePattern(search);
  const params = search ? [pattern, pattern, pattern, pattern, pattern] : [];
  const totalRows = await adminRows<RowDataPacket>(`SELECT COUNT(*) AS total FROM appointments a ${where}`, params);
  const rows = await adminRows<RowDataPacket>(
    `SELECT a.id, a.full_name, a.email, a.phone, a.client_unique_id, a.status, a.appointment_details,
            DATE_FORMAT(a.date, '%Y-%m-%d') AS appt_date, TIME_FORMAT(a.time, '%H:%i') AS appt_time,
            a.timeslot_full, s.title AS service_title, n.title AS matter_title, p.payment_status, p.amount
     FROM appointments a
     LEFT JOIN book_services s ON s.id = a.service_id
     LEFT JOIN nature_of_enquiry n ON n.id = a.noe_id
     LEFT JOIN tbl_paid_appointment_payment p ON p.order_hash = a.order_hash
     ${where}
     ORDER BY a.created_at DESC
     LIMIT ? OFFSET ?`,
    [...params, PAGE_SIZE, offset(page)]
  );
  return paged(rows, Number(totalRows[0]?.total ?? 0), page);
}

export async function getAppointment(id: number) {
  const rows = await adminRows<RowDataPacket>(
    `SELECT a.*, DATE_FORMAT(a.date, '%Y-%m-%d') AS appt_date, TIME_FORMAT(a.time, '%H:%i') AS appt_time,
            s.title AS service_title, s.duration, n.title AS matter_title,
            p.payment_status, p.amount, p.payment_type, p.order_status
     FROM appointments a
     LEFT JOIN book_services s ON s.id = a.service_id
     LEFT JOIN nature_of_enquiry n ON n.id = a.noe_id
     LEFT JOIN tbl_paid_appointment_payment p ON p.order_hash = a.order_hash
     WHERE a.id = ? LIMIT 1`,
    [id]
  );
  return rows[0] ?? null;
}

export async function setAppointmentStatus(id: number, status: number) {
  await adminExecute("UPDATE appointments SET status = ?, updated_at = NOW() WHERE id = ?", [status, id]);
}

export async function monthAppointments(month: string) {
  return adminRows<RowDataPacket>(
    `SELECT id, full_name, status, DATE_FORMAT(date, '%Y-%m-%d') AS appt_date, TIME_FORMAT(time, '%H:%i') AS appt_time
     FROM appointments
     WHERE DATE_FORMAT(date, '%Y-%m') = ?
     ORDER BY date, time`,
    [month]
  );
}

export async function listBlocks() {
  const problem = await tableReady("book_service_disable_slots", ["id", "disabledates"]);
  if (problem) return { error: problem, rows: [] as RowDataPacket[] };
  const rows = await adminRows<RowDataPacket>(
    `SELECT id, DATE_FORMAT(disabledates, '%Y-%m-%d') AS blocked_date, slots, block_all
     FROM book_service_disable_slots
     WHERE book_service_slot_per_person_id = 1
     ORDER BY disabledates DESC, id DESC
     LIMIT 300`
  );
  return { error: null as string | null, rows };
}

export async function addBlock(date: string, fullDay: boolean, start: string, end: string) {
  await adminExecute(
    `INSERT INTO book_service_disable_slots
       (book_service_slot_per_person_id, disabledates, slots, block_all, created_at, updated_at)
     VALUES (1, ?, ?, ?, NOW(), NOW())`,
    [date, fullDay ? "" : `${start}-${end}`, fullDay ? 1 : 0]
  );
}

export async function deleteBlock(id: number) {
  await adminExecute(
    "DELETE FROM book_service_disable_slots WHERE id = ? AND book_service_slot_per_person_id = 1",
    [id]
  );
}

export async function exportContacts(search: string, status: string) {
  const clauses: string[] = [];
  const params: unknown[] = [];
  if (search) {
    const pattern = likePattern(search);
    clauses.push(
      `(name LIKE ? ESCAPE '\\\\' OR contact_email LIKE ? ESCAPE '\\\\' OR contact_phone LIKE ? ESCAPE '\\\\' OR subject LIKE ? ESCAPE '\\\\')`
    );
    params.push(pattern, pattern, pattern, pattern);
  }
  if (status === "unread") clauses.push("(status IS NULL OR status = 'unread')");
  else if (status) {
    clauses.push("status = ?");
    params.push(status);
  }
  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  return adminRows<RowDataPacket>(
    `SELECT name, contact_email, contact_phone, department, subject, status, created_at
     FROM contacts ${where} ORDER BY created_at DESC LIMIT 5000`,
    params
  );
}

export async function listContacts(search: string, status: string, page: number): Promise<PageResult<RowDataPacket>> {
  const clauses: string[] = [];
  const params: unknown[] = [];
  if (search) {
    const pattern = likePattern(search);
    clauses.push(
      `(name LIKE ? ESCAPE '\\\\' OR contact_email LIKE ? ESCAPE '\\\\' OR contact_phone LIKE ? ESCAPE '\\\\' OR subject LIKE ? ESCAPE '\\\\' OR message LIKE ? ESCAPE '\\\\')`
    );
    params.push(pattern, pattern, pattern, pattern, pattern);
  }
  if (status === "unread") clauses.push("(status IS NULL OR status = 'unread')");
  else if (status) {
    clauses.push("status = ?");
    params.push(status);
  }
  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const totalRows = await adminRows<RowDataPacket>(`SELECT COUNT(*) AS total FROM contacts ${where}`, params);
  const rows = await adminRows<RowDataPacket>(
    `SELECT id, name, contact_email, contact_phone, department, subject, status, created_at
     FROM contacts ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    [...params, PAGE_SIZE, offset(page)]
  );
  return paged(rows, Number(totalRows[0]?.total ?? 0), page);
}

export async function contactStats() {
  const today = melbourneToday();
  const rows = await adminRows<RowDataPacket>(
    `SELECT COUNT(*) AS total,
            SUM(status IS NULL OR status = 'unread') AS unread_count,
            SUM(status = 'forwarded') AS forwarded,
            SUM(DATE(created_at) = ?) AS today_count
     FROM contacts`,
    [today]
  );
  return {
    total: Number(rows[0]?.total ?? 0),
    unread: Number(rows[0]?.unread_count ?? 0),
    forwarded: Number(rows[0]?.forwarded ?? 0),
    today: Number(rows[0]?.today_count ?? 0),
  };
}

export async function getContact(id: number) {
  const rows = await adminRows<RowDataPacket>("SELECT * FROM contacts WHERE id = ? LIMIT 1", [id]);
  return rows[0] ?? null;
}

export async function markContactRead(id: number) {
  const columns = await columnsOf("contacts");
  if (!columns.has("status")) return;
  await adminExecute(
    "UPDATE contacts SET status = 'read', updated_at = NOW() WHERE id = ? AND (status IS NULL OR status = 'unread')",
    [id]
  );
}

export async function setContactStatus(id: number, status: string) {
  await adminExecute("UPDATE contacts SET status = ?, updated_at = NOW() WHERE id = ?", [status, id]);
}

export async function markContactForwarded(id: number, inbox: string) {
  const columns = await columnsOf("contacts");
  const sets = ["status = 'forwarded'", "updated_at = NOW()"];
  const params: unknown[] = [];
  if (columns.has("forwarded_at")) sets.push("forwarded_at = NOW()");
  if (columns.has("forwarded_to")) {
    sets.push("forwarded_to = ?");
    params.push(inbox);
  }
  params.push(id);
  await adminExecute(`UPDATE contacts SET ${sets.join(", ")} WHERE id = ?`, params);
}

export async function deleteContact(id: number) {
  await adminExecute("DELETE FROM contacts WHERE id = ?", [id]);
}

async function listContent(
  table: string,
  searchColumns: string[],
  preferred: string[],
  search: string,
  page: number
): Promise<PageResult<RowDataPacket>> {
  const columns = await columnsOf(table);
  if (!columns.has("id")) return paged([], 0, page, `The ${table} table is not in this database.`);
  const select = ["id", ...preferred.filter((column) => columns.has(column) && column !== "id")];
  const usable = searchColumns.filter((column) => columns.has(column));
  const params: unknown[] = [];
  let where = "";
  if (search && usable.length) {
    const pattern = likePattern(search);
    where = `WHERE ${usable.map((column) => `${column} LIKE ? ESCAPE '\\\\'`).join(" OR ")}`;
    params.push(...usable.map(() => pattern));
  }
  const order = columns.has("created_at") ? "created_at DESC" : "id DESC";
  const totalRows = await adminRows<RowDataPacket>(`SELECT COUNT(*) AS total FROM ${table} ${where}`, params);
  const rows = await adminRows<RowDataPacket>(
    `SELECT ${select.join(", ")} FROM ${table} ${where} ORDER BY ${order} LIMIT ? OFFSET ?`,
    [...params, PAGE_SIZE, offset(page)]
  );
  return paged(rows, Number(totalRows[0]?.total ?? 0), page);
}

export async function categoryOptions() {
  const problem = await tableReady("blog_categories", ["id", "name"]);
  if (problem) return [] as { id: number; name: string }[];
  const rows = await adminRows<RowDataPacket>("SELECT id, name FROM blog_categories ORDER BY name");
  return rows.map((row) => ({ id: Number(row.id), name: String(row.name ?? "") }));
}

export function listBlogs(search: string, page: number) {
  return listContent("blogs", ["title", "slug"], ["title", "slug", "status", "created_at", "updated_at"], search, page);
}

export function listCategories(search: string, page: number) {
  return listContent(
    "blog_categories",
    ["name", "slug"],
    ["name", "slug", "parent_id", "status", "created_at", "updated_at"],
    search,
    page
  );
}

export function listPages(search: string, page: number) {
  return listContent("cms_pages", ["title", "slug"], ["title", "slug", "status", "created_at", "updated_at"], search, page);
}

export function listCases(search: string, page: number) {
  return listContent("recent_cases", ["title", "alias"], ["title", "alias", "created_at", "updated_at"], search, page);
}

export async function getRecord(table: string, id: number) {
  const problem = await tableReady(table, ["id"]);
  if (problem) return { error: problem, row: null as RowDataPacket | null };
  const rows = await adminRows<RowDataPacket>(`SELECT * FROM ${table} WHERE id = ? LIMIT 1`, [id]);
  return { error: rows[0] ? null : "Record not found.", row: rows[0] ?? null };
}

export async function saveRecord(table: string, id: number | null, values: Record<string, string | number | null>) {
  const columns = await columnsOf(table);
  const entries: [string, string | number | Date | null][] = Object.entries(values).filter(([column]) => columns.has(column));
  if (entries.length === 0) throw new Error(`Nothing on ${table} can be saved.`);
  if (columns.has("updated_at")) entries.push(["updated_at", new Date()]);
  if (id) {
    const assignments = entries.map(([column]) => `${column} = ?`).join(", ");
    await adminExecute(`UPDATE ${table} SET ${assignments} WHERE id = ?`, [...entries.map(([, value]) => value), id]);
    return id;
  }
  if (columns.has("created_at")) entries.push(["created_at", new Date()]);
  const names = entries.map(([column]) => column).join(", ");
  const marks = entries.map(() => "?").join(", ");
  const result = await adminExecute(
    `INSERT INTO ${table} (${names}) VALUES (${marks})`,
    entries.map(([, value]) => value)
  );
  return result.insertId;
}

export async function deleteRecord(table: string, id: number) {
  await adminExecute(`DELETE FROM ${table} WHERE id = ?`, [id]);
}

export async function slugTaken(table: string, column: string, slug: string, exceptId: number | null) {
  const columns = await columnsOf(table);
  if (!columns.has(column)) return false;
  const rows = await adminRows<RowDataPacket>(
    `SELECT id FROM ${table} WHERE ${column} = ? ${exceptId ? "AND id <> ?" : ""} LIMIT 1`,
    exceptId ? [slug, exceptId] : [slug]
  );
  return rows.length > 0;
}

const STAFF_WHERE = "password LIKE '$2%'";

export async function listStaff(search: string, page: number): Promise<PageResult<RowDataPacket>> {
  const params: unknown[] = [];
  let where = `WHERE ${STAFF_WHERE}`;
  if (search) {
    const pattern = likePattern(search);
    where += ` AND (first_name LIKE ? ESCAPE '\\\\' OR last_name LIKE ? ESCAPE '\\\\' OR email LIKE ? ESCAPE '\\\\')`;
    params.push(pattern, pattern, pattern);
  }
  const totalRows = await adminRows<RowDataPacket>(`SELECT COUNT(*) AS total FROM admins ${where}`, params);
  const rows = await adminRows<RowDataPacket>(
    `SELECT id, first_name, last_name, email, phone, status, created_at
     FROM admins ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    [...params, PAGE_SIZE, offset(page)]
  );
  return paged(rows, Number(totalRows[0]?.total ?? 0), page);
}

export async function getStaff(id: number) {
  const rows = await adminRows<RowDataPacket>(
    `SELECT id, first_name, last_name, email, phone, company_name, status
     FROM admins WHERE id = ? AND ${STAFF_WHERE} LIMIT 1`,
    [id]
  );
  return rows[0] ?? null;
}

export async function emailTaken(email: string, exceptId: number | null) {
  const rows = await adminRows<RowDataPacket>(
    `SELECT id FROM admins WHERE email = ? ${exceptId ? "AND id <> ?" : ""} LIMIT 1`,
    exceptId ? [email, exceptId] : [email]
  );
  return rows.length > 0;
}
