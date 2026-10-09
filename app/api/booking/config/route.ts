import { NextResponse, type NextRequest } from "next/server";
import { getAvailabilityConfig } from "@/lib/booking/availability";
import { clientIp, createRateLimiter } from "@/lib/booking/rate-limit";

export const runtime = "nodejs";

const isRateLimited = createRateLimiter(60);

export async function GET(request: NextRequest): Promise<NextResponse> {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please wait a moment." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  try {
    const config = await getAvailabilityConfig();
    if (!config) {
      return NextResponse.json(
        { success: false, message: "Booking calendar is temporarily unavailable." },
        { status: 503, headers: { "Cache-Control": "no-store" } }
      );
    }
    return NextResponse.json({ success: true, ...config }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("[API Booking Config] Failed:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
