import { NextRequest, NextResponse } from "next/server";
import { checkDatabaseHealth, initDatabase } from "@/lib/db";
import { checkMailerHealth } from "@/lib/mail";

export const runtime = "nodejs";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const shouldInit = searchParams.get("init") === "true";

  let initResult = null;
  if (shouldInit) {
    initResult = await initDatabase();
  }

  const [dbHealth, mailHealth] = await Promise.all([
    checkDatabaseHealth(),
    checkMailerHealth(),
  ]);

  const memoryUsage = process.memoryUsage();
  const formatMb = (bytes: number) => `${Math.round((bytes / 1024 / 1024) * 100) / 100} MB`;

  const status = {
    service: "Bansal Lawyers Melbourne Backend API",
    status: "online",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || "development",
    nodeVersion: process.version,
    platform: process.platform,
    memory: {
      rss: formatMb(memoryUsage.rss),
      heapTotal: formatMb(memoryUsage.heapTotal),
      heapUsed: formatMb(memoryUsage.heapUsed),
    },
    database: {
      engine: "MySQL",
      ...dbHealth,
    },
    mailer: {
      service: "SMTP / Nodemailer",
      ...mailHealth,
    },
    ...(initResult ? { schemaInit: initResult } : {}),
  };

  return NextResponse.json(status, {
    status: 200,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
