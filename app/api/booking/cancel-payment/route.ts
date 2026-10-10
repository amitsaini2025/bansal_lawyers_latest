import { NextResponse, after, type NextRequest } from "next/server";
import { cancelPendingBooking, finalizeCheckoutSession, notifyPaidBooking } from "@/lib/booking/payment";
import { clientIp, createRateLimiter } from "@/lib/booking/rate-limit";

export const runtime = "nodejs";

const isRateLimited = createRateLimiter(10);

/** Releases the slot of an unpaid online booking when the client returns from Stripe without paying. */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const noStore = { "Cache-Control": "no-store" };
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json({ success: false }, { status: 429, headers: noStore });
  }

  let ref = "";
  try {
    const body = await request.json();
    ref = typeof body?.ref === "string" ? body.ref : "";
  } catch {
    // fall through with an empty ref
  }
  if (!ref) return NextResponse.json({ success: false }, { status: 400, headers: noStore });

  try {
    const outcome = await cancelPendingBooking(ref);
    if (outcome.kind === "paid") {
      const result = await finalizeCheckoutSession(outcome.session);
      if (result.ok && result.newlyConfirmed) {
        const booking = result.booking;
        after(() => notifyPaidBooking(booking));
      }
      return NextResponse.json({ success: true, status: "paid" }, { headers: noStore });
    }
    return NextResponse.json({ success: true, status: outcome.kind }, { headers: noStore });
  } catch (error) {
    console.error("[Booking Payment] Cancel request failed:", error);
    return NextResponse.json({ success: false }, { status: 500, headers: noStore });
  }
}
