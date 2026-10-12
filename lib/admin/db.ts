import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { getDbPool } from "@/lib/db";

const columnCache = new Map<string, Set<string>>();

export class AdminDatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AdminDatabaseError";
  }
}

export function adminPool() {
  const pool = getDbPool();
  if (!pool) {
    throw new AdminDatabaseError(
      "MySQL is not configured. Set MYSQL_USER, MYSQL_PASSWORD and MYSQL_DATABASE, then restart the site."
    );
  }
  return pool;
}

function raise(error: unknown): never {
  const sqlMessage =
    typeof error === "object" && error !== null && "sqlMessage" in error
      ? String((error as { sqlMessage?: unknown }).sqlMessage ?? "")
      : "";
  const missing = sqlMessage.match(/Table '[^.]+\.([^']+)' doesn't exist/);
  if (missing) {
    throw new AdminDatabaseError(
      `The ${missing[1]} table is not in the configured MySQL database. Use the existing Bansal Lawyers database.`
    );
  }
  throw error;
}

export async function adminRows<T extends RowDataPacket>(sql: string, params: unknown[] = []): Promise<T[]> {
  try {
    const [rows] = await adminPool().query<T[]>(sql, params);
    return rows;
  } catch (error) {
    raise(error);
  }
}

export async function adminExecute(sql: string, params: unknown[] = []): Promise<ResultSetHeader> {
  try {
    const [result] = await adminPool().query<ResultSetHeader>(sql, params);
    return result;
  } catch (error) {
    raise(error);
  }
}

export async function columnsOf(table: string): Promise<Set<string>> {
  const cached = columnCache.get(table);
  if (cached) return cached;
  const rows = await adminRows<RowDataPacket & { COLUMN_NAME: string }>(
    `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
    [table]
  );
  const columns = new Set(rows.map((row) => String(row.COLUMN_NAME)));
  columnCache.set(table, columns);
  return columns;
}

export async function tableReady(table: string, required: string[]): Promise<string | null> {
  const columns = await columnsOf(table);
  if (columns.size === 0) return `The ${table} table is not in this database.`;
  const missing = required.filter((column) => !columns.has(column));
  if (missing.length > 0) return `The ${table} table is missing: ${missing.join(", ")}.`;
  return null;
}
