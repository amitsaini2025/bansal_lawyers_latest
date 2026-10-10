import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { StructuredData } from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/ui";
import { getBookableServices, getNatureOfEnquiryOptions } from "@/lib/booking/availability";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/schema";
import { businessDetails } from "@/lib/site";
import "./booking.css";

// Services, prices and matter types come from the shared database at request time.
export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Book an Appointment | Schedule a Consultation with Bansal Lawyers Melbourne",
  description:
    "Book an appointment with Bansal Lawyers, one of the top law firms in Melbourne, Australia. Schedule a consultation for expert legal guidance in divorce, visa matters, property disputes, and more.",
  path: "/book-an-appointment",
  keywords: [
    "book lawyer appointment Melbourne",
    "legal consultation Melbourne",
    "Bansal Lawyers appointment",
    "free 10 minute legal consultation",
  ],
});

export default async function BookAppointmentPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Book an Appointment" },
  ];

  const [services, natureOfEnquiry] = await Promise.all([getBookableServices(), getNatureOfEnquiryOptions()]);
  const paidPrices = services.filter((s) => !s.isFree).map((s) => s.priceAud);
  const fromPrice = paidPrices.length ? Math.min(...paidPrices) : 150;

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="appt-hero">
        <div className="appt-hero__inner">
          <span className="eyebrow eyebrow--light">Online Booking</span>
          <h1>Book Your Legal Consultation</h1>
          <p>
            Expert legal advice from Melbourne&apos;s trusted law firm. Choose your consultation duration, preferred
            method, and a time that suits you.
          </p>
          <div className="appt-hero__price">
            <strong>From ${fromPrice.toFixed(0)} AUD</strong>
            <span>30-minute consultations • Free 10-min intro for new clients</span>
          </div>
        </div>
      </section>

      <div className="appt-shell">
        <BookingWizard services={services} natureOfEnquiry={natureOfEnquiry} turnstileSiteKey={getTurnstileSiteKey()} />
        <p className="appt-shell__help">
          Urgent deadline or court date? Call <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>.
        </p>
      </div>
    </>
  );
}
