import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  Container,
  CtaSection,
  Section,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createLawyerPersonSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title:
    "Ajay Bansal | Director & Principal Lawyer | Bansal Lawyers Melbourne",
  description:
    "Executive profile of Ajay Bansal, founding Director & Principal Lawyer at Bansal Lawyers Melbourne. Over 15 years of dedicated legal practice across immigration, family, commercial, property, criminal and civil law.",
  path: "/about/ajay-bansal",
  keywords: [
    "Ajay Bansal",
    "Ajay Bansal Lawyer Melbourne",
    "Principal Lawyer Bansal Lawyers",
    "Immigration Lawyer Ajay Bansal",
    "Family Lawyer Ajay Bansal Melbourne",
    "Commercial Litigation Solicitor Ajay Bansal",
    "Melbourne Solicitor Collins Street",
    "Bansal Lawyers Director",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Ajay Bansal — Director & Principal Lawyer" },
];

const credentials = [
  {
    institution: "Supreme Court of Victoria",
    detail: "Admitted as an Australian Legal Practitioner & Solicitor",
    status: "Active Full Practice",
  },
  {
    institution: "High Court of Australia",
    detail: "Entered on the Register of Practitioners of the High Court of Australia",
    status: "Federal & Appellate Jurisdiction",
  },
  {
    institution: "Victorian Legal Services Board (VLSB)",
    detail: "Practising Certificate Holder with Full Rights of Audience",
    status: "Regulated Practitioner",
  },
  {
    institution: "Law Institute of Victoria (LIV)",
    detail: "Member of the peak professional legal association for Victoria",
    status: "Professional Standing",
  },
];

const practiceFocusAreas = [
  {
    title: "Administrative Law & Immigration Appeals",
    tag: "Federal & Tribunal",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description:
      "Strategic advocacy before the Administrative Review Tribunal (ART) and Federal Circuit & Family Court of Australia (FCFCOA). Extensive experience handling complex visa refusals, character cancellations, Ministerial Directions (MD 107/111), and judicial review applications.",
  },
  {
    title: "Family Law & Property Settlements",
    tag: "Family Law Act 1975",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
    description:
      "Comprehensive representation in divorce, high-asset property divisions, corporate trust restructuring, Binding Financial Agreements (BFAs), spouse maintenance, and child-focused parenting orders.",
  },
  {
    title: "Commercial Litigation & Business Advisory",
    tag: "Corporate & Contracts",
    href: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/",
    description:
      "Strategic counsel for company directors, small-to-medium enterprises (SMEs), and shareholders. Resolving contractual breaches, partnership disputes, shareholder deadlocks, business acquisitions, and commercial debt recovery.",
  },
  {
    title: "Property Law & Commercial Leasing",
    tag: "Retail & Real Estate",
    href: "/property-lawyers-melbourne/commercial-lease-lawyer-melbourne/",
    description:
      "Drafting and negotiating commercial and retail leases, advising landlords and tenants, handling multi-million-dollar conveyancing transactions, Section 32 vendor disclosures, and caveat disputes.",
  },
  {
    title: "Criminal Defence & Regulatory Matters",
    tag: "Victorian Courts",
    href: "/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/",
    description:
      "Dedicated representation in the Magistrates' and County Courts of Victoria for bail applications, police interview protections, traffic and driving offences, white-collar fraud, and family violence intervention order (FVIO) proceedings.",
  },
  {
    title: "Civil Dispute Resolution & VCAT",
    tag: "Civil Litigation",
    href: "/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/",
    description:
      "Structured dispute management under the Civil Dispute Resolution Act 2011. Genuine steps negotiations, mediation representation, VCAT hearings, and deeds of release that protect client balance sheets.",
  },
];

const advocacyPillars = [
  {
    num: "01",
    title: "Candid Merits & Risk Assessment",
    description:
      "We provide clear, unvarnished advice from your very first conference. We do not make unrealistic promises; instead, we analyze statutory strengths, evidentiary vulnerabilities, and realistic court or tribunal outcomes.",
  },
  {
    num: "02",
    title: "Forensic Evidence & Case Building",
    description:
      "Legal outcomes are won on evidence, procedure, and strict statutory compliance. Ajay personally oversees document preparation, affidavits, financial disclosures, and written submissions to ensure nothing is left to chance.",
  },
  {
    num: "03",
    title: "Plain-English Clarity & Fixed Costs",
    description:
      "No client should ever be left confused by opaque legal terminology or unexpected fees. Ajay communicates progress promptly in straightforward language, offering transparent costs and fixed-fee options where applicable.",
  },
  {
    num: "04",
    title: "Decisive Courtroom & Negotiation Advocacy",
    description:
      "Whether negotiating across a conciliation table or making oral submissions before a judicial officer or tribunal member, Ajay advocates with composure, tenacity, and deep command of Australian jurisprudence.",
  },
];

export default function AjayBansalProfilePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createLawyerPersonSchema()} />
      <StructuredData data={createLegalServiceSchema()} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Executive Prestige Hero Header */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #112d53 0%, #08172c 55%, #050e1c 100%)",
          color: "#ffffff",
          paddingBlock: "clamp(3.5rem, 6.5vw, 5.5rem)",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Subtle decorative architectural background accents */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
            pointerEvents: "none",
          }}
        />

        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              gap: "clamp(2.5rem, 6vw, 4.5rem)",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Left Column: Portrait & Direct Contact Card */}
            <div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow:
                    "0 24px 50px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.15)",
                  maxWidth: "430px",
                  marginInline: "auto",
                  width: "100%",
                  aspectRatio: "3 / 4",
                  background: "#09172b",
                }}
              >
                <Image
                  src="/images/team/ajay-bansal-director.webp"
                  alt="Ajay Bansal - Founding Director & Principal Lawyer at Bansal Lawyers Melbourne"
                  fill
                  sizes="(max-width: 768px) 100vw, 430px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                />

                {/* Subtle gradient vignette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(5, 14, 28, 0.88) 0%, rgba(5, 14, 28, 0.1) 45%, transparent 100%)",
                  }}
                />

                {/* Verified Jurisdictional Pill on Portrait */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(15, 39, 70, 0.88)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "9999px",
                      padding: "0.35rem 0.85rem",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "#93c5fd",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        backgroundColor: "#38bdf8",
                        boxShadow: "0 0 8px #38bdf8",
                      }}
                    />
                    Principal Lawyer
                  </span>
                  <span
                    style={{
                      background: "rgba(15, 39, 70, 0.88)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "9999px",
                      padding: "0.35rem 0.75rem",
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "#e2e8f0",
                    }}
                  >
                    15+ Yrs Practice
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    background: "rgba(255, 255, 255, 0.98)",
                    borderRadius: "14px",
                    padding: "1rem 1.25rem",
                    color: "#0f172a",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      fontFamily: "var(--font-heading), Georgia, serif",
                      color: "#0f2746",
                    }}
                  >
                    Ajay Bansal
                  </div>
                  <div
                    style={{
                      fontSize: "0.84rem",
                      color: "#1b4c89",
                      fontWeight: 700,
                      marginTop: "0.15rem",
                    }}
                  >
                    Director &amp; Principal Legal Practitioner
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#64748b",
                      marginTop: "0.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Chambers: Level 8, 278 Collins St, Melbourne
                  </div>
                </div>
              </div>

              {/* Direct Practitioner Quick Actions */}
              <div
                style={{
                  maxWidth: "430px",
                  marginInline: "auto",
                  marginTop: "1.25rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                <a
                  href="tel:+61422905860"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  aria-label="Call Ajay Bansal directly on 0422 905 860"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0422 905 860
                </a>

                <a
                  href="mailto:info@bansallawyers.com.au"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  aria-label="Send an email to Ajay Bansal"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email Chambers
                </a>
              </div>
            </div>

            {/* Right Column: Executive Narrative & Key Credentials */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "9999px",
                  background: "rgba(59, 130, 246, 0.14)",
                  border: "1px solid rgba(59, 130, 246, 0.35)",
                  color: "#93c5fd",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                Executive Leadership Profile
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.4vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.14,
                  letterSpacing: "-0.025em",
                  marginBottom: "0.75rem",
                  color: "#ffffff",
                  fontFamily: "var(--font-heading), Georgia, serif",
                }}
              >
                Ajay Bansal
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#60a5fa",
                  marginBottom: "1.5rem",
                  lineHeight: 1.45,
                }}
              >
                Director &amp; Principal Lawyer · Australian Legal Practitioner
              </p>

              <p
                style={{
                  fontSize: "1.06rem",
                  lineHeight: 1.75,
                  color: "#cbd5e1",
                  maxWidth: "42rem",
                  marginBottom: "1.75rem",
                }}
              >
                Founding Director of Bansal Lawyers Melbourne, Ajay Bansal brings over 15 years of dedicated legal practice and strategic advocacy across Australia. Admitted to practice in the Supreme Court of Victoria and the High Court of Australia, he provides authoritative counsel and decisive representation in immigration appeals, family property disputes, commercial litigation, real estate transactions, and criminal defence.
              </p>

              {/* 4 Professional Credential Pillars Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                  gap: "0.85rem",
                  marginBottom: "2.25rem",
                  maxWidth: "42rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#94a3b8",
                      fontWeight: 700,
                    }}
                  >
                    Experience
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginTop: "0.25rem",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    15+ Years
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.15rem" }}>
                    Active Australian Practice
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#94a3b8",
                      fontWeight: 700,
                    }}
                  >
                    Admissions
                  </div>
                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginTop: "0.25rem",
                    }}
                  >
                    Supreme Court &amp; High Court
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.15rem" }}>
                    Victoria &amp; Australia
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#94a3b8",
                      fontWeight: 700,
                    }}
                  >
                    Languages
                  </div>
                  <div
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginTop: "0.25rem",
                    }}
                  >
                    English, Hindi, Punjabi
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.15rem" }}>
                    Fluent Legal Communication
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#94a3b8",
                      fontWeight: 700,
                    }}
                  >
                    Chambers
                  </div>
                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginTop: "0.25rem",
                    }}
                  >
                    Collins St CBD
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.15rem" }}>
                    Level 8, 278 Collins St
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="button button--primary"
                  style={{
                    minWidth: "15rem",
                    justifyContent: "center",
                    padding: "0.85rem 1.5rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Book Consultation With Ajay
                </Link>
                <a
                  href="tel:+61422905860"
                  className="button button--secondary"
                  style={{
                    minWidth: "12rem",
                    justifyContent: "center",
                    padding: "0.85rem 1.5rem",
                    fontSize: "0.95rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    borderColor: "rgba(255, 255, 255, 0.25)",
                  }}
                >
                  Call 0422 905 860
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Institutional Jurisdictions & Trust Bar */}
      <TrustBar
        items={[
          "Supreme Court of Victoria Admitted Practitioner",
          "High Court of Australia Registered Lawyer",
          "Law Institute of Victoria (LIV) Member",
          "Level 8 Collins Street Chambers Melbourne",
        ]}
      />

      {/* 3. Executive Pull Quote & Philosophy Banner */}
      <section
        style={{
          background: "#08172c",
          color: "#ffffff",
          padding: "3.5rem 0",
          borderBottom: "1px solid var(--line, #e2e8f0)",
          position: "relative",
        }}
      >
        <Container>
          <div
            style={{
              maxWidth: "52rem",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                lineHeight: "1",
                fontFamily: "var(--font-heading), Georgia, serif",
                color: "#38bdf8",
                opacity: 0.6,
                marginBottom: "0.5rem",
              }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(1.2rem, 2.3vw, 1.55rem)",
                lineHeight: 1.55,
                color: "#f1f5f9",
                fontStyle: "italic",
                margin: "0 0 1.25rem 0",
              }}
            >
              When a client walks into our chambers, they are often facing one of
              the most critical moments of their personal or commercial life. Our
              duty is never to hide behind impenetrable legal jargon — it is to
              provide clarity where there is confusion, forensic precision in
              evidence, and unwavering, strategic advocacy.
            </blockquote>
            <cite
              style={{
                display: "block",
                fontStyle: "normal",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#93c5fd",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              — Ajay Bansal · Founding Director &amp; Principal Lawyer
            </cite>
          </div>
        </Container>
      </section>

      {/* 4. In-depth Biography & Practice Admissions (Split Section) */}
      <Section tone="white" id="biography">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "clamp(2.5rem, 5vw, 4rem)",
              alignItems: "flex-start",
            }}
          >
            {/* Left Column: Narrative Background */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#1b4c89",
                  marginBottom: "0.5rem",
                }}
              >
                Professional Background
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.35rem)",
                  fontWeight: 700,
                  color: "var(--navy-900, #0f2746)",
                  lineHeight: 1.25,
                  marginBottom: "1.5rem",
                  fontFamily: "var(--font-heading), Georgia, serif",
                }}
              >
                A Career Built on Strategic Counsel, Discipline &amp; Decisive
                Advocacy
              </h2>

              <div
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "var(--ink, #1e293b)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <p>
                  Ajay Bansal is the founding Director and Principal Lawyer of
                  Bansal Lawyers. Over a career spanning more than 15 years, he
                  has provided trusted, multidisciplinary legal representation
                  to hundreds of individuals, families, expatriates, and
                  commercial enterprises across Victoria and Australia.
                </p>
                <p>
                  Having navigated complex, high-stakes matters before the
                  Administrative Review Tribunal (ART), the Federal Circuit and
                  Family Court of Australia (FCFCOA), the Magistrates&apos;
                  Court of Victoria, and County Court jurisdictions, Ajay is
                  widely recognised for his meticulous case preparation and
                  sharp strategic acumen.
                </p>
                <p>
                  Ajay established Bansal Lawyers on a firm core principle:{" "}
                  <strong>
                    clients deserve direct access to senior legal counsel who
                    personally understand their facts and drive their strategy
                  </strong>
                  . At Bansal Lawyers, files are not relegated to junior clerks
                  without supervision. Every legal strategy is crafted,
                  reviewed, and executed under Ajay&apos;s direct oversight.
                </p>
                <p>
                  His bilingual fluency in <strong>English, Hindi, and Punjabi</strong>{" "}
                  enables him to communicate complex Australian statutory
                  principles with absolute nuance, ensuring clients from diverse
                  cultural backgrounds navigate the Australian legal framework
                  with clarity, confidence, and peace of mind.
                </p>
              </div>
            </div>

            {/* Right Column: Formal Legal Credentials & Admissions Card */}
            <div>
              <div
                style={{
                  backgroundColor: "var(--surface-alt, #f8fafc)",
                  border: "1px solid var(--line, #e2e8f0)",
                  borderRadius: "16px",
                  padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  boxShadow: "0 10px 30px rgba(15, 39, 70, 0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "var(--navy-900, #0f2746)",
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-heading), Georgia, serif",
                  }}
                >
                  Admissions &amp; Professional Qualifications
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--ink-secondary, #475569)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Official standing across Australian State and Commonwealth legal
                  institutions.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1rem",
                        backgroundColor: "#ffffff",
                        border: "1px solid var(--line, #e2e8f0)",
                        borderRadius: "10px",
                        borderLeft: "4px solid #1b4c89",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.35rem",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "var(--navy-900, #0f2746)",
                            margin: 0,
                          }}
                        >
                          {cred.institution}
                        </h4>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#1b4c89",
                            backgroundColor: "#f0f6fc",
                            padding: "0.15rem 0.5rem",
                            borderRadius: "4px",
                            border: "1px solid #bcd5f5",
                          }}
                        >
                          {cred.status}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--ink-secondary, #475569)",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {cred.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Direct Consultation Box inside Card */}
                <div
                  style={{
                    marginTop: "1.75rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid var(--line, #e2e8f0)",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--navy-900, #0f2746)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Need to consult Ajay Bansal directly on a matter?
                  </p>
                  <Link
                    href="/contact"
                    className="button button--primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Request Confidential Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Key Practice Domains & Specialized Legal Counsel */}
      <Section tone="warm" id="practice-areas">
        <Container>
          <div style={{ maxWidth: "56rem", margin: "0 auto 3rem", textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1b4c89",
                marginBottom: "0.5rem",
              }}
            >
              Core Areas of Representation
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--navy-900, #0f2746)",
                lineHeight: 1.25,
                fontFamily: "var(--font-heading), Georgia, serif",
                marginBottom: "0.75rem",
              }}
            >
              Specialised Legal Representation Under Ajay Bansal
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-secondary, #475569)",
                maxWidth: "44rem",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Every practice area is underpinned by strategic early assessment,
              thorough case law research, and practical solutions tailored to each
              client&apos;s commercial or personal objectives.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {practiceFocusAreas.map((area, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--line, #e2e8f0)",
                  borderRadius: "14px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 12px rgba(15, 39, 70, 0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#1b4c89",
                        backgroundColor: "#f0f6fc",
                        border: "1px solid #bcd5f5",
                        borderRadius: "4px",
                        padding: "0.2rem 0.55rem",
                      }}
                    >
                      {area.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--navy-900, #0f2746)",
                      lineHeight: 1.35,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {area.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                      color: "var(--ink-secondary, #475569)",
                      margin: "0 0 1.25rem 0",
                    }}
                  >
                    {area.description}
                  </p>
                </div>

                <Link
                  href={area.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#1b4c89",
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  View Related Legal Practice &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. The Bansal Standard: 4 Pillars of Advocacy */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "56rem", margin: "0 auto 3.5rem", textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1b4c89",
                marginBottom: "0.5rem",
              }}
            >
              The Bansal Standard
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--navy-900, #0f2746)",
                lineHeight: 1.25,
                fontFamily: "var(--font-heading), Georgia, serif",
                marginBottom: "0.75rem",
              }}
            >
              How Ajay Bansal Approaches Every Legal Matter
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--ink-secondary, #475569)",
                maxWidth: "44rem",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              A disciplined, methodical process ensuring every client receives
              uncompromising representation from initial consultation through to
              final resolution.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {advocacyPillars.map((pillar) => (
              <div
                key={pillar.num}
                style={{
                  padding: "1.75rem",
                  backgroundColor: "var(--surface-alt, #f8fafc)",
                  border: "1px solid var(--line, #e2e8f0)",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#1b4c89",
                    fontFamily: "var(--font-heading), Georgia, serif",
                    marginBottom: "0.75rem",
                  }}
                >
                  {pillar.num}
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--navy-900, #0f2746)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.35,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--ink-secondary, #475569)",
                    margin: 0,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Melbourne CBD Chambers & Confidential Consultations */}
      <section
        style={{
          background: "linear-gradient(135deg, #091c36 0%, #0d284d 100%)",
          color: "#ffffff",
          padding: "clamp(3.5rem, 6vw, 4.5rem) 0",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#93c5fd",
                  marginBottom: "0.5rem",
                }}
              >
                Chambers Location
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: "#ffffff",
                  fontFamily: "var(--font-heading), Georgia, serif",
                  marginBottom: "1rem",
                }}
              >
                Centrally Located on Collins Street, Melbourne CBD
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "#cbd5e1",
                  marginBottom: "1.5rem",
                }}
              >
                Chambers are situated at Level 8, 278 Collins Street — situated in
                the heart of Melbourne&apos;s financial and legal district,
                conveniently accessible via trams 11, 12, 48, and 109, and just a
                short walk from Flinders Street Station.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  fontSize: "0.95rem",
                  color: "#e2e8f0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    Level 8, 278 Collins Street, Melbourne VIC 3000
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>
                    Monday to Friday: 8:30 AM – 5:30 PM (Urgent appointments available)
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>
                    In-Person Chambers Conferences &amp; Encrypted Video for Interstate/Overseas
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "16px",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "var(--font-heading), Georgia, serif",
                  marginBottom: "0.75rem",
                }}
              >
                Schedule a Consultation with Ajay Bansal
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#cbd5e1",
                  marginBottom: "1.75rem",
                }}
              >
                Take the first proactive step. Discuss your matter confidentially
                with an experienced Principal Lawyer who will examine your options
                and provide clear, actionable counsel.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <Link
                  href="/contact"
                  className="button button--primary"
                  style={{
                    justifyContent: "center",
                    padding: "0.85rem 1.5rem",
                  }}
                >
                  Book Private Consultation
                </Link>
                <a
                  href="tel:+61422905860"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.85rem 1.5rem",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Direct Telephone: 0422 905 860
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Global Brand CTA Section */}
      <CtaSection
        title="Speak Directly With Ajay Bansal"
        text="Whether you require strategic representation before the Administrative Review Tribunal, court advocacy in family or criminal proceedings, or high-value commercial advice, get in touch today."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call 0422 905 860",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Practitioner Line"
        badges={[
          "15+ Years Legal Practice",
          "Admitted to Supreme & High Court",
          "Level 8, 278 Collins Street, Melbourne",
        ]}
      />
    </>
  );
}
