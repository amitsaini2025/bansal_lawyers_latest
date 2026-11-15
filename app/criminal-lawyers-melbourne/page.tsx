import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CriminalLawyersMelbourneSections } from "@/components/criminal/CriminalLawyersMelbourneSections";
import { ClientTestimonialsCarousel } from "@/components/sections/ClientTestimonialsCarousel";
import { GoogleReviewSummaryBadge } from "@/components/sections/GoogleReviewSummaryBadge";
import { OfficeMapEmbed } from "@/components/sections/OfficeMapEmbed";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
  Section,
  TrustBar,
} from "@/components/ui";
import { criminalLawyersMelbourneFaqs } from "@/lib/criminal-lawyers-melbourne-faqs";
import { criminalLawyersMelbourneTestimonials } from "@/lib/criminal-lawyers-melbourne-testimonials";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { createMetadata } from "@/lib/metadata";
import {
  CRIMINAL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  CRIMINAL_LAWYERS_MELBOURNE_PAGE_TITLE,
  createCriminalLawyersMelbournePageGraphSchema,
} from "@/lib/schema";
import { businessDetails } from "@/lib/site";

const lawyers = [
  {
    name: "Ajay Bansal",
    role: "Director & Principal Lawyer",
    email: businessDetails.email,
    phoneHref: businessDetails.phoneTel,
    profileHref: "/about/ajay-bansal",
    image: "/images/team/ajay-bansal-director.webp",
    alt: "Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne",
  },
  {
    name: "Michael Saleh",
    role: "Solicitor",
    email: businessDetails.email,
    phoneHref: businessDetails.phoneTel,
    profileHref: "/about/michael-saleh",
    image: "/images/team/michael-saleh-solicitor.png",
    alt: "Michael Saleh - Solicitor at Bansal Lawyers Melbourne",
  },
];

export const metadata: Metadata = createMetadata({
  title: CRIMINAL_LAWYERS_MELBOURNE_PAGE_TITLE,
  description: CRIMINAL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  path: "/criminal-lawyers-melbourne",
  keywords: [
    "Indian Criminal Lawyers Melbourne",
    "Criminal Lawyers Melbourne",
    "Criminal Defence Lawyer Melbourne",
    "Magistrates Court Lawyer Melbourne",
    "Intervention Order Breach Lawyer",
    "Traffic Lawyer Melbourne",
    "Hindi Punjabi Criminal Lawyer Melbourne",
  ],
});

export default function CriminalLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Indian Criminal Lawyers in Melbourne" },
  ];

  return (
    <>
      <StructuredData
        data={createCriminalLawyersMelbournePageGraphSchema(
          criminalLawyersMelbourneFaqs
        )}
      />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Indian Criminal Lawyers in Melbourne"
        intro={
          <>
            <p>
              Got a court date coming up, or a police interview you&apos;re dreading? The sooner you
              understand the charge, the more choices you usually have. Our criminal lawyers Melbourne team
              can look at your paperwork, explain it in plain English and talk you through your options.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers is a Melbourne CBD firm that advises people facing criminal charges, including
              Indian criminal lawyers Melbourne clients can speak to in Hindi or Punjabi. We can look at what
              you&apos;ve been given, explain the allegation in plain English and talk through your options.
              We assist with Magistrates&apos; Court matters, bail applications, police interviews, traffic
              offences and licence suspensions, assault and property offences, and breaches of intervention
              orders.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Get criminal lawyer Melbourne advice in person at Level 8, 278 Collins Street, or by phone or
              video. If we can&apos;t help with your type of charge, we&apos;ll tell you straight away.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        aside={
          <HeroBookingPlaceholder
            defaultPracticeArea="criminal"
            turnstileSiteKey={turnstileSiteKey}
          />
        }
      />

      <TrustBar
        items={[
          "Collins Street Office & Urgent Legal Consultations",
          "Magistrates' Court Representation across Victoria",
          "Police Interview & Bail Application Support",
          "English, Hindi and Punjabi Legal Assistance",
        ]}
      />

      <CriminalLawyersMelbourneSections />

      <Section tone="warm" id="our-team">
        <Container>
          <div className="team-clean-header">
            <div className="team-clean-eyebrow">
              <span className="team-clean-eyebrow__line" aria-hidden="true" />
              <span>LEGAL PRACTITIONERS</span>
              <span className="team-clean-eyebrow__line" aria-hidden="true" />
            </div>
            <h2 className="team-clean-title">
              Meet Our <span className="team-clean-title__serif">Legal Team</span>
            </h2>
            <p className="team-clean-intro">
              Ajay Bansal is the director and principal lawyer. Michael Saleh is a solicitor. Read each
              profile, then book a consultation.
            </p>
          </div>
          <div className="team-clean-grid">
            {lawyers.map((member) => (
              <article key={member.name} className="team-clean-card">
                <Link
                  href={member.profileHref}
                  className="team-clean-card__media-link"
                  title={`View ${member.name}'s profile`}
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 580px) 100vw, 420px"
                    className="team-clean-card__img"
                  />
                </Link>
                <div className="team-clean-card__content">
                  <h3 className="team-clean-card__name">
                    <Link href={member.profileHref}>{member.name}</Link>
                  </h3>
                  <a href={`mailto:${member.email}`} className="team-clean-card__email">
                    {member.email}
                  </a>
                  <p className="team-clean-card__role">{member.role}</p>
                  <div className="team-clean-card__socials">
                    <a
                      href={member.phoneHref}
                      className="team-clean-card__icon-link"
                      aria-label={`Call ${member.name}`}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>
                    <Link
                      href={member.profileHref}
                      className="team-clean-card__icon-link"
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <polyline points="17 11 19 13 23 9" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <section
        className="client-testimonials-section client-testimonials-section--corner-badge"
        id="client-reviews"
      >
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={criminalLawyersMelbourneTestimonials} />
          <GoogleReviewSummaryBadge />
        </Container>
      </section>

      <Section tone="white" id="office">
        <Container>
          <div className="location-grid">
            <div>
              <h2>Our Melbourne Office</h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "var(--ink)",
                  marginTop: "1rem",
                }}
              >
                The office is at Level 8, 278 Collins Street, Melbourne VIC 3000, between Swanston and
                Elizabeth Streets. Trams on Collins Street stop nearby.
              </p>
              <p style={{ color: "var(--ink-secondary)", lineHeight: "1.7", marginTop: "1rem" }}>
                Book a consultation to talk through a criminal charge, police interview, bail application or
                upcoming court date.
              </p>
              <address
                style={{
                  fontStyle: "normal",
                  margin: "1.5rem 0",
                  color: "var(--navy-950)",
                  fontWeight: 600,
                }}
              >
                {businessDetails.address}
              </address>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <ButtonLink href="/contact" variant="primary">
                  Book a Consultation
                </ButtonLink>
                <ButtonLink
                  href="https://www.google.com/maps/search/?api=1&query=Level+8,+278+Collins+Street+Melbourne+VIC+3000"
                  variant="secondary"
                >
                  Get Directions
                </ButtonLink>
              </div>
            </div>
            <OfficeMapEmbed />
          </div>
        </Container>
      </Section>

      <CtaSection
        id="speak-with-lawyer"
        title="Speak with a Criminal Lawyer in Melbourne"
        text={
          <>
            <p>
              If you&apos;d like to talk to one of our{" "}
              <strong>criminal lawyers in Melbourne</strong> about a charge, a summons or a police
              interview, get in touch. We&apos;ll listen, look at your paperwork and explain your options.
              Contact us before your court date if you can. When you book, we confirm the consultation fee
              before any work starts, and later costs depend on the matter.
            </p>
            <p className="cta-section__contact">
              <strong>{businessDetails.name}</strong>
              <br />
              {businessDetails.address}
              <br />
              Phone:{" "}
              <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLine}</a>
              <br />
              Mobile: <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>
              <br />
              Email: <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>
              <br />
              Hours: Mon–Fri, 9:30 AM–6 PM
            </p>
          </>
        }
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        phone="1300 226 725"
        phoneLabel="Call the office"
        badges={[
          "English, Hindi and Punjabi",
          "Collins Street and online consultations",
          "Magistrates' Court matters across Victoria",
        ]}
      />

      <Section tone="warm" id="faqs">
        <Faq
          items={criminalLawyersMelbourneFaqs}
          title="Frequently Asked Questions About Criminal Lawyers in Melbourne"
          subtitle="Quick answers to common questions about criminal charges and court in Victoria."
          contactTitle="Need advice about a charge, police interview or court date?"
          contactButtonLabel="Book a Consultation"
          contactHref="/contact"
        />
      </Section>
    </>
  );
}
