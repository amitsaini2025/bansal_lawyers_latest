import { NextResponse, type NextRequest } from "next/server";
import { confirmBookingChat, handleBookingChat, type ChatMessage } from "@/lib/chat/agent";
import { clientIp, createRateLimiter } from "@/lib/booking/rate-limit";

export const runtime = "nodejs";

const isChattingTooFast = createRateLimiter(30);
const isBookingTooFast = createRateLimiter(5);

function reply(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function messagesFrom(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const message = item as { role?: unknown; content?: unknown };
    if ((message.role !== "user" && message.role !== "assistant") || typeof message.content !== "string") return [];
    return [{ role: message.role, content: message.content }];
  });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip = clientIp(request);
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return reply(400, { success: false, message: "Invalid request." });
  }

  const turnstileToken = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
  const action = body.action === "confirm" ? "confirm" : "chat";

  if (action === "confirm") {
    if (isBookingTooFast(`book:${ip}`)) {
      return reply(429, { success: false, message: "Too many booking attempts. Please wait a moment." });
    }
    const result = await confirmBookingChat({ booking: body.booking, turnstileToken, ip });
    return reply(200, { success: true, ...result });
  }

  if (isChattingTooFast(`chat:${ip}`)) {
    return reply(429, { success: false, message: "Too many messages. Please wait a moment." });
  }

  const result = await handleBookingChat({
    messages: messagesFrom(body.messages),
    draft: body.draft,
    text: typeof body.text === "string" ? body.text : "",
    turnstileToken,
    ip,
  });
  return reply(200, { success: true, ...result });
}
