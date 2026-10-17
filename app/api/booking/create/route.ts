import { NextResponse, type NextRequest } from "next/server";
import { clientIp, createRateLimiter } from "@/lib/booking/rate-limit";
import { submitBooking } from "@/lib/booking/submit";
import { verifyTurnstile } from "@/lib/booking/turnstile";

export const runtime = "nodejs";

const isRateLimited = createRateLimiter(5);

function reply(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return reply(429, { success: false, message: "Too many booking attempts. Please wait a moment before trying again." });
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return reply(400, { success: false, message: "Invalid request." });
  }

  // Honeypot: bots get a fake success and no signal.
  if (typeof body.website_url === "string" && body.website_url.trim() !== "") {
    return reply(200, { success: true, message: "Appointment booked successfully." });
  }

  if (!(await verifyTurnstile(typeof body.turnstileToken === "string" ? body.turnstileToken : "", ip))) {
    return reply(422, { success: false, code: "TURNSTILE", message: "Security verification failed. Please try again." });
  }

  const result = await submitBooking(body);
  return reply(result.status, result.body);
}
