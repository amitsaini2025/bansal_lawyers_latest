import { NextResponse, after, type NextRequest } from "next/server";
import {
  cancelExpiredSession,
  constructWebhookEvent,
  finalizeCheckoutSession,
  isWebhookConfigured,
  notifyPaidBooking,
} from "@/lib/booking/payment";

export const runtime = "nodejs";

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (!isWebhookConfigured()) {
    return NextResponse.json({ received: false, message: "Webhook not configured." }, { status: 404 });
  }

  const payload = await request.text();
  const event = constructWebhookEvent(payload, request.headers.get("stripe-signature"));
  if (!event) {
    return NextResponse.json({ received: false, message: "Invalid signature." }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
      const result = await finalizeCheckoutSession(event.data.object);
      if (result.ok && result.newlyConfirmed) {
        const booking = result.booking;
        after(() => notifyPaidBooking(booking));
        console.info(`[Booking] Appointment ${booking.appointmentId} payment confirmed by webhook`);
      }
    } else if (event.type === "checkout.session.expired") {
      await cancelExpiredSession(event.data.object);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(`[Booking Payment] Webhook ${event.type} failed:`, error);
    return NextResponse.json({ received: false }, { status: 500 });
  }
}
