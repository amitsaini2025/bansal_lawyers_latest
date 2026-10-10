import type { Metadata } from "next";
import { after } from "next/server";
import { BookingResult } from "@/components/booking/BookingResult";
import {
  finalizeCheckoutSession,
  notifyPaidBooking,
  retrieveCheckoutSession,
  type FinalizeResult,
} from "@/lib/booking/payment";
import { formatAud, isoToDdMmYyyy } from "@/lib/booking/services";
import { businessDetails } from "@/lib/site";
import "../booking.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Booking Payment",
  robots: { index: false, follow: false },
};

export default async function PaymentCompletePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { session_id: rawSessionId } = await searchParams;
  const sessionId = typeof rawSessionId === "string" ? rawSessionId : "";
  const session = sessionId ? await retrieveCheckoutSession(sessionId) : null;

  let result: FinalizeResult | null = null;
  if (session) {
    try {
      result = await finalizeCheckoutSession(session);
    } catch (error) {
      console.error("[Booking Payment] Could not confirm paid booking:", error);
    }
  }

  if (result?.ok && result.newlyConfirmed) {
    const booking = result.booking;
    after(() => notifyPaidBooking(booking));
    console.info(`[Booking] Appointment ${booking.appointmentId} payment confirmed`);
  }

  const contact = (
    <>
      Call <a href={businessDetails.phoneTel}>{businessDetails.phone}</a> or email{" "}
      <a href={businessDetails.emailMailto}>{businessDetails.email}</a>
    </>
  );

  let content;
  if (result?.ok) {
    const { booking } = result;
    content = (
      <BookingResult
        tone="success"
        title="Payment Received - Your Appointment Is Booked"
        message={`Thank you, ${booking.fullName}. Your consultation is confirmed for ${isoToDdMmYyyy(booking.isoDate)} at ${booking.timeLabel}.`}
        rows={[
          ["Reference", `#${booking.appointmentId}`],
          ["Consultation", booking.serviceTitle],
          ["Type", booking.consultationType],
          ["Date", isoToDdMmYyyy(booking.isoDate)],
          ["Time", `${booking.timeLabel} (Melbourne time)`],
          ["Amount Paid", formatAud(booking.amountPaid)],
          ["Email", booking.email],
        ]}
        footer={<>A confirmation email is on its way to {booking.email}. Need to change anything? {contact}.</>}
        action={{ href: "/", label: "Back to Home" }}
      />
    );
  } else if (result && !result.ok && result.reason === "unpaid") {
    content = (
      <BookingResult
        tone="warning"
        title="Payment Not Completed"
        message="We haven't received your payment yet, so your appointment is not confirmed."
        footer={<>If you were charged, please don&apos;t book again. {contact} and we&apos;ll confirm it for you.</>}
        action={{ href: "/book-an-appointment", label: "Back to Booking" }}
      />
    );
  } else {
    content = (
      <BookingResult
        tone="warning"
        title="We Couldn't Confirm Your Payment"
        message="Something went wrong while confirming your payment."
        footer={<>If you were charged, your booking is safe. {contact} and we&apos;ll confirm it for you.</>}
        action={{ href: "/book-an-appointment", label: "Back to Booking" }}
      />
    );
  }

  return (
    <>
      <section className="appt-hero">
        <div className="appt-hero__inner">
          <span className="eyebrow eyebrow--light">Online Booking</span>
          <h1>Book Your Legal Consultation</h1>
        </div>
      </section>
      <div className="appt-shell">{content}</div>
    </>
  );
}
