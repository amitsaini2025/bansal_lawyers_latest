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
 * Automatically initializes database tables if they do not exist.
 * Safe to run on every startup or health check.
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

    // 1. Contact Enquiries Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        subject VARCHAR(200) NOT NULL,
        matter_type VARCHAR(60) NOT NULL,
        message TEXT NOT NULL,
        ip_address VARCHAR(45) DEFAULT NULL,
        user_agent VARCHAR(255) DEFAULT NULL,
        status ENUM('new', 'in_review', 'contacted', 'closed') DEFAULT 'new',
        notes TEXT DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_created_at (created_at),
        INDEX idx_status (status),
        INDEX idx_matter_type (matter_type),
        INDEX idx_email (email)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 2. Consultation Bookings Table (for future calendar/booking workflows)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS consultation_bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        enquiry_id INT DEFAULT NULL,
        client_name VARCHAR(120) NOT NULL,
        client_email VARCHAR(255) NOT NULL,
        client_phone VARCHAR(50) NOT NULL,
        matter_category VARCHAR(60) NOT NULL,
        preferred_date DATE DEFAULT NULL,
        preferred_time VARCHAR(30) DEFAULT NULL,
        appointment_type ENUM('in_person', 'phone', 'video') DEFAULT 'in_person',
        status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (enquiry_id) REFERENCES contact_enquiries(id) ON DELETE SET NULL,
        INDEX idx_booking_date (preferred_date),
        INDEX idx_booking_status (status)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    return { success: true, message: "MySQL database tables verified and initialized successfully." };
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

/**
 * Saves a validated contact enquiry to the MySQL database.
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
      `INSERT INTO contact_enquiries 
        (name, email, phone, subject, matter_type, message, ip_address, user_agent, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')`,
      [
        enquiry.name,
        enquiry.email,
        enquiry.phone,
        enquiry.subject,
        enquiry.matterType,
        enquiry.message,
        metadata?.ipAddress?.slice(0, 45) || null,
        metadata?.userAgent?.slice(0, 255) || null,
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
  latencyMs?: number;
  message?: string;
}> {
  const db = getDbPool();
  if (!db) {
    return {
      connected: false,
      configured: false,
      message: "MySQL environment variables not configured yet.",
    };
  }

  const start = Date.now();
  let connection: PoolConnection | null = null;
  try {
    connection = await db.getConnection();
    await connection.query("SELECT 1 AS health");
    const latencyMs = Date.now() - start;
    return {
      connected: true,
      configured: true,
      latencyMs,
      message: `MySQL connected (${latencyMs}ms)`,
    };
  } catch (error) {
    return {
      connected: false,
      configured: true,
      message: error instanceof Error ? error.message : "Database connection failed",
    };
  } finally {
    if (connection) connection.release();
  }
}
