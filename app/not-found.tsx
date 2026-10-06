import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found (404) | Bansal Lawyers Melbourne",
  description:
    "The page you requested could not be found. Explore our legal practice areas or contact our Melbourne team directly.",
  robots: {
    index: false,
    follow: false,
  },
};

const practiceShortcuts = [
  {
    title: "Immigration & Visas",
    href: "/immigration-lawyers-melbourne/",
    desc: "Visa applications, refusals, cancellations, AAT/ART appeals, PR & citizenship.",
  },
  {
    title: "Family Law & Divorce",
    href: "/family-lawyers-melbourne/",
    desc: "Divorce, child custody, property settlement, consent orders & binding agreements.",
  },
  {
    title: "Criminal Law Defence",
    href: "/criminal-lawyers-melbourne/",
    desc: "Court representation, traffic offences, police interviews, bail & assault defence.",
  },
  {
    title: "Commercial & Business Law",
    href: "/commercial-lawyers-melbourne/",
    desc: "Business contracts, commercial agreements, shareholder disputes & debt recovery.",
  },
  {
    title: "Property & Conveyancing",
    href: "/property-lawyers-melbourne/",
    desc: "Residential & commercial conveyancing, contract reviews, leases & property disputes.",
  },
  {
    title: "Civil Litigation & Disputes",
    href: "/civil-lawyers-melbourne/",
    desc: "Letters of demand, VCAT hearings, contract disputes & court claims.",
  },
];

export default function NotFound() {
  return (
    <main className="not-found-page">
      {/* 1. Hero 404 Banner */}
      <section
        style={{
          background: "linear-gradient(145deg, #071324 0%, #0d223f 50%, #153765 100%)",
          color: "#ffffff",
          paddingBlock: "clamp(4.5rem, 8vw, 7rem)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <div style={{ maxWidth: "44rem", marginInline: "auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.85rem",
                borderRadius: "9999px",
                background: "rgba(59, 130, 246, 0.15)",
                border: "1px solid rgba(147, 197, 253, 0.3)",
                color: "#93c5fd",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Error 404 — Page Not Found
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
                color: "#ffffff",
              }}
            >
              We Couldn’t Find That Page
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
                lineHeight: 1.65,
                marginBottom: "2.25rem",
              }}
            >
              The link you followed may have been updated, mistyped, or the page has been moved. Let us help guide you to the right legal service.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <ButtonLink href="/" variant="light">
                Return to Homepage
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary">
                Book a Consultation
              </ButtonLink>
              <a
                href="tel:+61422905860"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.35rem",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call 0422 905 860
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Practice Area Navigation Pathways */}
      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "48rem", marginInline: "auto", textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--brand-blue)",
                display: "inline-block",
                marginBottom: "0.5rem",
              }}
            >
              Explore Our Legal Services
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.35rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 0.85rem" }}>
              Key Practice Areas in Melbourne
            </h2>
            <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              Select a practice area below to learn how Bansal Lawyers can assist with your matter.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {practiceShortcuts.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.75rem",
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.03)",
                  transition: "all 0.2s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{item.title}</span>
                  <span style={{ color: "var(--brand-blue)", fontSize: "1.2rem" }} aria-hidden="true">
                    →
                  </span>
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>

          {/* Direct Support Card */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem", color: "#0f172a", fontSize: "1.15rem" }}>
              Need Direct Assistance?
            </h3>
            <p style={{ color: "#64748b", margin: "0 0 1.25rem", fontSize: "0.95rem" }}>
              Our chambers are located at <strong>Level 1, 530 Little Collins Street, Melbourne VIC 3000</strong>.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <ButtonLink href="/about" variant="secondary">
                About Our Firm
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary">
                Contact Office
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
