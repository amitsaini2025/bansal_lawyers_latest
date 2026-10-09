import { NextRequest, NextResponse, after } from "next/server";
import { validateEnquiry, type ContactEnquiry } from "@/lib/contact";
import { saveEnquiryToDatabase } from "@/lib/db";
import { sendEnquiryNotificationToFirm, sendClientAcknowledgement } from "@/lib/mail";

export const runtime = "nodejs";

// Rate limiting in-memory bucket (max 10 requests per minute per IP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  entry.count += 1;
  return entry.count > 10;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  // 1. Verify Content-Type
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
  }

  // 2. IP & Rate Limiting
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
  const userAgent = request.headers.get("user-agent") || "unknown";

  if (isRateLimited(ipAddress)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few moments or call 0422 905 860." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  // 3. Read Body & Validate Payload
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const enquiry: ContactEnquiry | null = validateEnquiry(body);
  if (!enquiry) {
    return NextResponse.json(
      { error: "Please verify all required fields and ensure contact details are accurate." },
      { status: 400 }
    );
  }

  // 4. Save to MySQL Database
  let savedId: number | undefined;
  let dbSaved = false;
  let dbError: string | undefined;
  try {
    const dbResult = await saveEnquiryToDatabase(enquiry, { ipAddress, userAgent });
    if (dbResult.success && dbResult.id) {
      savedId = dbResult.id;
      dbSaved = true;
      console.info(`[API Contact] Enquiry saved to MySQL. enquiryId=${savedId}`);
    } else {
      dbError = dbResult.error ?? "Unknown database error";
      console.error("[API Contact] Database save failed:", dbError);
    }
  } catch (error) {
    dbError = error instanceof Error ? error.message : "Unknown database error";
    console.error("[API Contact] Error saving enquiry to MySQL:", dbError, error);
    // Don't fail the client if DB write encounters an issue; proceed with email
  }

  // 5. Send Notification Email to Law Firm & Confirmation to Client
  // SMTP can take longer than the form's client-side timeout, so send after responding.
  after(async () => {
    try {
      const [firm, client] = await Promise.allSettled([
        sendEnquiryNotificationToFirm(enquiry, savedId),
        sendClientAcknowledgement(enquiry),
      ]);
      console.info(
        `[API Contact] Emails dispatched. firm=${firm.status === "fulfilled" && firm.value.success} client=${client.status === "fulfilled" && client.value.success}`
      );
    } catch (error) {
      console.error("[API Contact] Email dispatch error:", error);
    }
  });

  // 6. Optional Legacy Webhook support if configured
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  if (webhookUrl && webhookUrl.startsWith("https://")) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.CONTACT_FORM_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.CONTACT_FORM_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify({ ...enquiry, id: savedId, ipAddress }),
        signal: AbortSignal.timeout(5000),
      });
    } catch {
      // Ignore background webhook timeout
    }
  }

  // 7. Return Success Response
  return NextResponse.json(
    {
      ok: true,
      message: "Thank you. Your enquiry has been received by Bansal Lawyers Melbourne.",
      enquiryId: savedId ?? null,
      dbSaved,
      ...(dbSaved ? {} : { dbError }),
    },
    {
      status: 200,
      headers: { "Cache-Control": "no-store, max-age=0" },
    }
  );
}
