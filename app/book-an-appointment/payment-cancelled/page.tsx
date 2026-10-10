import type { Metadata } from "next";
import { after } from "next/server";
import { BookingResult } from "@/components/booking/BookingResult";
import {
  cancelPendingBooking,
  finalizeCheckoutSession,
  notifyPaidBooking,
  type PaidBooking,
} from "@/lib/booking/payment";
import { isoToDdMmYyyy } from "@/lib/booking/services";
import { businessDetails } from "@/lib/site";
import "../booking.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Payment Cancelled",
  robots: { index: false, follow: false },
};

export default async function PaymentCancelledPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { ref } = await searchParams;
  const orderHash = typeof ref === "string" ? ref : "";

  let paidBooking: PaidBooking | null = null;
  try {
    const outcome = orderHash ? await cancelPendingBooking(orderHash) : null;
    if (outcome?.kind === "paid") {
      const result = await finalizeCheckoutSession(outcome.session);
      if (result.ok) {
        const booking = result.booking;
        paidBooking = booking;
        if (result.newlyConfirmed) after(() => notifyPaidBooking(booking));
      }
    }
  } catch (error) {
    console.error("[Booking Payment] Could not cancel pending booking:", error);
  }

  const paidContent = paidBooking ? (
    <BookingResult
      tone="success"
      title="Your Appointment Is Booked"
      message={`Your payment went through, so your consultation is confirmed for ${isoToDdMmYyyy(paidBooking.isoDate)} at ${paidBooking.timeLabel}.`}
      rows={[
        ["Reference", `#${paidBooking.appointmentId}`],
        ["Consultation", paidBooking.serviceTitle],
        ["Email", paidBooking.email],
      ]}
      action={{ href: "/", label: "Back to Home" }}
    />
  ) : null;

  return (
    <>
      <section className="appt-hero">
        <div className="appt-hero__inner">
          <span className="eyebrow eyebrow--light">Online Booking</span>
          <h1>Book Your Legal Consultation</h1>
        </div>
      </section>
      <div className="appt-shell">
        {paidContent ?? (
          <BookingResult
            tone="warning"
            title="Payment Cancelled"
            message="Your payment was cancelled and no charge was made. The appointment has not been booked."
            footer={
              <>
                You can choose a time again whenever you&apos;re ready, or call{" "}
                <a href={businessDetails.phoneTel}>{businessDetails.phone}</a> and we&apos;ll book it for you.
              </>
            }
            action={{ href: "/book-an-appointment", label: "Book Again" }}
          />
        )}
      </div>
    </>
  );
}
