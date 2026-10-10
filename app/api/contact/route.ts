import { NextRequest, NextResponse, after } from "next/server";
import { validateEnquiry, type ContactEnquiry } from "@/lib/contact";
import { verifyTurnstile } from "@/lib/booking/turnstile";
import { saveEnquiryToDatabase } from "@/lib/db";
import { sendEnquiryNotificationToFirm } from "@/lib/mail";
// import { sendClientAcknowledgement } from "@/lib/mail";

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

  const turnstileToken =
    body && typeof body === "object" && !Array.isArray(body) && typeof (body as Record<string, unknown>).turnstileToken === "string"
      ? (body as Record<string, unknown>).turnstileToken as string
      : "";

  if (!(await verifyTurnstile(turnstileToken, ipAddress))) {
    return NextResponse.json(
      { error: "Security verification failed. Please complete the check and try again." },
      { status: 422, headers: { "Cache-Control": "no-store, max-age=0" } }
    );
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

  // 5. Send notification email to the law firm (client auto-reply disabled; see sendClientAcknowledgement in lib/mail.ts)
  // SMTP can take longer than the form's client-side timeout, so send after responding.
  after(async () => {
    try {
      const firm = await sendEnquiryNotificationToFirm(enquiry, savedId);
      console.info(`[API Contact] Firm notification dispatched. success=${firm.success}`);
      // await sendClientAcknowledgement(enquiry);
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
