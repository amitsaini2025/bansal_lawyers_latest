import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  Container,
  CtaSection,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Ajay Bansal | Director & Principal Lawyer | Bansal Lawyers Melbourne",
  description:
    "Profile of Ajay Bansal, founding Director & Principal Lawyer at Bansal Lawyers Melbourne. Over 15 years of legal experience in immigration, family, property, commercial, criminal and civil law.",
  path: "/about/ajay-bansal",
  keywords: [
    "Ajay Bansal",
    "Ajay Bansal Lawyer Melbourne",
    "Principal Lawyer Bansal Lawyers",
    "Immigration Lawyer Ajay Bansal",
    "Melbourne Solicitor Ajay Bansal",
    "Bansal Lawyers Director",
  ],
});

export default function AjayBansalProfilePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Ajay Bansal" },
  ];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      {/* Profile Hero Header */}
      <section
        style={{
          background: "linear-gradient(145deg, #071324 0%, #0d223f 50%, #153765 100%)",
          color: "#ffffff",
          paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "center",
            }}
          >
            {/* Image Column */}
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                maxWidth: "420px",
                marginInline: "auto",
                width: "100%",
                aspectRatio: "3 / 4",
                background: "#09172b",
              }}
            >
              <Image
                src="/images/team/ajay-bansal-director.webp"
                alt="Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(7, 19, 36, 0.85) 0%, rgba(7, 19, 36, 0.2) 50%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(255, 255, 255, 0.96)",
                  borderRadius: "16px",
                  padding: "1rem 1.25rem",
                  color: "#0f172a",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>Ajay Bansal</div>
                <div style={{ fontSize: "0.86rem", color: "#64748b", fontWeight: 600 }}>
                  Director &amp; Principal Lawyer
                </div>
              </div>
            </div>

            {/* Profile Intro Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "9999px",
                  background: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  color: "#93c5fd",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Leadership Profile
              </div>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  marginBottom: "0.75rem",
                  color: "#ffffff",
                }}
              >
                Ajay Bansal
              </h1>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--brand-blue-light)",
                  marginBottom: "1.5rem",
                }}
              >
                Director &amp; Principal Lawyer · Bansal Lawyers Melbourne
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "#cbd5e1",
                  maxWidth: "38rem",
                  marginBottom: "2rem",
                }}
              >
                Founding Director with over 15 years of comprehensive legal experience in Australia. Providing strategic advocacy, practical advice, and trusted representation across complex legal matters.
              </p>

              {/* Quick Details Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2.25rem",
                  maxWidth: "36rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700 }}>
                    Experience
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
                    15+ Years
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700 }}>
                    Location
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
                    Melbourne CBD
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700 }}>
                    Languages
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
                    English, Hindi, Punjabi
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="button button--primary"
                  style={{ minWidth: "13rem", justifyContent: "center" }}
                >
                  Book Consultation With Ajay
                </Link>
                <a
                  href="tel:+61422905860"
                  className="button button--secondary"
                  style={{ minWidth: "11rem", justifyContent: "center" }}
                >
                  Call 0422 905 860
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "15+ Years Legal Practice in Australia",
          "Victorian & Federal Court Advocacy",
          "Multidisciplinary Strategic Guidance",
          "Melbourne CBD & Virtual Consultations",
        ]}
      />

      {/* In-depth Biography Section */}
      <Section tone="white" id="biography">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <SectionHeader
              title="Professional Background & Practice Philosophy"
              intro="A career dedicated to straightforward legal advice, thorough case preparation, and decisive advocacy."
            />

            <div style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--ink)" }}>
              <p>
                Ajay Bansal is the founding Director of Bansal Lawyers. He brings over 15 years of legal experience to the firm and has worked with clients across a wide range of legal matters throughout Australia.
              </p>
              <p style={{ marginTop: "1rem" }}>
                His work covers immigration law, family law, property law, commercial law, criminal law, and civil matters. Over the years, he has assisted hundreds of clients with legal issues involving visas, family disputes, business transactions, property settlements, criminal charges, and other critical legal concerns.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Ajay’s approach is straightforward. He focuses on understanding the client’s situation, explaining the legal position clearly, and helping the client make informed decisions without ambiguity or delay.
              </p>
              <p style={{ marginTop: "1rem" }}>
                He believes clients should never be left confused by complex legal language or opaque court procedures. His focus is on practical advice, meticulous evidentiary preparation, and dedicated professional representation at every stage of the matter.
              </p>
            </div>

            {/* Core Practice Areas Grid */}
            <div style={{ marginTop: "3rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--navy-950)" }}>
                Key Areas of Legal Practice
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div style={{ padding: "1.25rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", borderLeft: "3.5px solid var(--brand-blue)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.4rem", color: "var(--navy-950)" }}>
                    Immigration &amp; Appeals
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", margin: 0, lineHeight: 1.55 }}>
                    Visa applications, complex refusals, cancellations, NOICC responses, and ART appeals.
                  </p>
                </div>

                <div style={{ padding: "1.25rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", borderLeft: "3.5px solid var(--brand-blue)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.4rem", color: "var(--navy-950)" }}>
                    Commercial &amp; Contracts
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", margin: 0, lineHeight: 1.55 }}>
                    Business contracts, shareholder agreements, dispute negotiation, and debt recovery.
                  </p>
                </div>

                <div style={{ padding: "1.25rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", borderLeft: "3.5px solid var(--brand-blue)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.4rem", color: "var(--navy-950)" }}>
                    Family Law &amp; Settlements
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", margin: 0, lineHeight: 1.55 }}>
                    Divorce, property settlement, parenting arrangements, BFAs, and consent orders.
                  </p>
                </div>

                <div style={{ padding: "1.25rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", borderLeft: "3.5px solid var(--brand-blue)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.4rem", color: "var(--navy-950)" }}>
                    Property &amp; Conveyancing
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", margin: 0, lineHeight: 1.55 }}>
                    Commercial and residential leases, property purchases, sales, and dispute notices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CtaSection
        title="Schedule a Consultation With Ajay Bansal"
        text="Whether you require strategic legal advice on a business dispute, immigration matter, family law concern, or property transaction, Ajay Bansal and the team are here to assist."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call 0422 905 860",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Practitioner Contact"
        badges={[
          "15+ Years Legal Practice",
          "Level 8, 278 Collins Street, Melbourne",
          "In-Person & Virtual Appointments",
        ]}
      />
    </>
  );
}
