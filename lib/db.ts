import mysql, { Pool, PoolConnection } from "mysql2/promise";
import type { ContactEnquiry } from "@/lib/contact";

// Global MySQL connection pool instance
let pool: Pool | null = null;

export interface DatabaseConfig {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
  ssl?: boolean | object;
}

/** Resolves the configured schema name (same rules as `getDbPool`). */
function getConfiguredDatabaseName(): string | undefined {
  if (process.env.MYSQL_DATABASE || process.env.DB_NAME) {
    return process.env.MYSQL_DATABASE || process.env.DB_NAME;
  }
  if (process.env.DATABASE_URL) {
    try {
      const parsed = new URL(process.env.DATABASE_URL);
      const path = decodeURIComponent(parsed.pathname.replace(/^\/+/, ""));
      if (path) return path;
    } catch {
      /* ignore malformed DATABASE_URL */
    }
    return undefined;
  }
  const user = process.env.MYSQL_USER || process.env.DB_USER;
  if (user) return "bansal_lawyers_db";
  return undefined;
}

/**
 * Initializes and returns a cached MySQL Connection Pool.
 * If credentials are not configured in environment variables, returns null.
 */
export function getDbPool(): Pool | null {
  if (pool) return pool;

  const host = process.env.MYSQL_HOST || process.env.DB_HOST || "127.0.0.1";
  const port = Number(process.env.MYSQL_PORT || process.env.DB_PORT || 3306);
  const user = process.env.MYSQL_USER || process.env.DB_USER;
  const password = process.env.MYSQL_PASSWORD || process.env.DB_PASSWORD || "";
  const database = process.env.MYSQL_DATABASE || process.env.DB_NAME || "bansal_lawyers_db";

  // If user is not specified, MySQL is considered unconfigured in this environment
  if (!user && !process.env.DATABASE_URL) {
    return null;
  }

  try {
    if (process.env.DATABASE_URL) {
      pool = mysql.createPool({
        uri: process.env.DATABASE_URL,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 5,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 10000,
      });
    } else {
      pool = mysql.createPool({
        host,
        port,
        user,
        password,
        database,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 5,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 10000,
        ssl: process.env.MYSQL_SSL === "true" ? { rejectUnauthorized: false } : undefined,
      });
    }

    return pool;
  } catch (error) {
    console.error("[Database] Failed to create MySQL pool:", error);
    return null;
  }
}

/**
 * Verifies the MySQL connection. Contact and booking use existing CRM tables
 * (`contacts`, `appointments`, etc.), so no schema is created here.
 */
export async function initDatabase(): Promise<{ success: boolean; message: string }> {
  const db = getDbPool();
  if (!db) {
    return {
      success: false,
      message: "MySQL not configured. Set MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE in .env.local",
    };
  }

  let connection: PoolConnection | null = null;
  try {
    connection = await db.getConnection();
    await connection.query("SELECT 1");
    return { success: true, message: "MySQL connection verified." };
  } catch (error) {
    console.error("[Database] Error during schema initialization:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown database error",
    };
  } finally {
    if (connection) connection.release();
  }
}

const MATTER_TYPE_LABELS: Record<string, string> = {
  migration: "Immigration & Visas",
  "family-law": "Family Law & Divorce",
  "criminal-law": "Criminal Law Defence",
  "commercial-law": "Commercial & Business Law",
  "property-law": "Property & Conveyancing",
  "civil-law": "Civil Litigation & Disputes",
  other: "General Legal Enquiry",
};

function formatMatterType(type: string): string {
  return MATTER_TYPE_LABELS[type] || type;
}

/**
 * Saves a validated contact enquiry to the CRM `contacts` table.
 */
export async function saveEnquiryToDatabase(
  enquiry: ContactEnquiry,
  metadata?: { ipAddress?: string; userAgent?: string }
): Promise<{ success: boolean; id?: number; error?: string }> {
  const db = getDbPool();
  if (!db) {
    // Return graceful notice when DB is not yet connected
    return {
      success: false,
      error: "DATABASE_NOT_CONFIGURED",
    };
  }

  let connection: PoolConnection | null = null;
  try {
    connection = await db.getConnection();
    const [result] = await connection.query(
      `INSERT INTO contacts
        (name, contact_email, contact_phone, department, subject, message, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, 'unread', NOW(), NOW())`,
      [
        enquiry.name.slice(0, 255),
        enquiry.email.slice(0, 255),
        enquiry.phone.slice(0, 255),
        formatMatterType(enquiry.matterType).slice(0, 250),
        enquiry.subject.slice(0, 250),
        metadata?.ipAddress
          ? `${enquiry.message}\n\n[Website enquiry | IP: ${metadata.ipAddress}]`
          : enquiry.message,
      ]
    );

    const insertId = (result as { insertId?: number }).insertId;
    return { success: true, id: insertId };
  } catch (error) {
    console.error("[Database] Failed to insert enquiry into MySQL:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to insert into database",
    };
  } finally {
    if (connection) connection.release();
  }
}

/**
 * Checks MySQL database connectivity and latency.
 */
export async function checkDatabaseHealth(): Promise<{
  connected: boolean;
  configured: boolean;
  name?: string;
  latencyMs?: number;
  message?: string;
}> {
  const configuredName = getConfiguredDatabaseName();
  const db = getDbPool();
  if (!db) {
    return {
      connected: false,
      configured: false,
      ...(configuredName ? { name: configuredName } : {}),
      message: "MySQL environment variables not configured yet.",
    };
  }

  const start = Date.now();
  let connection: PoolConnection | null = null;
  try {
    connection = await db.getConnection();
    const [rows] = await connection.query("SELECT 1 AS health, DATABASE() AS name");
    const row = (rows as { name?: string | null }[])[0];
    const activeName = row?.name ?? configuredName;
    const latencyMs = Date.now() - start;
    return {
      connected: true,
      configured: true,
      ...(activeName ? { name: activeName } : {}),
      latencyMs,
      message: `MySQL connected (${latencyMs}ms)`,
    };
  } catch (error) {
    return {
      connected: false,
      configured: true,
      ...(configuredName ? { name: configuredName } : {}),
      message: error instanceof Error ? error.message : "Database connection failed",
    };
  } finally {
    if (connection) connection.release();
  }
}
