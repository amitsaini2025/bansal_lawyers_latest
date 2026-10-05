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
import { createBreadcrumbSchema } from "@/lib/schema";
import { businessDetails } from "@/lib/site";

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

  // Schema for Ajay Bansal as Person and Legal Practitioner
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajay Bansal",
    jobTitle: "Director & Principal Lawyer",
    worksFor: {
      "@type": "LegalService",
      name: "Bansal Lawyers",
      url: "https://www.bansallawyers.com.au",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: businessDetails.streetAddress,
      addressLocality: businessDetails.addressLocality,
      addressRegion: businessDetails.addressRegion,
      postalCode: businessDetails.postalCode,
      addressCountry: "AU",
    },
    telephone: businessDetails.phone,
    email: businessDetails.email,
    knowsLanguage: ["English", "Hindi", "Punjabi"],
    description:
      "Founding Director with over 15 years of comprehensive legal experience in Australia across immigration, family, property, commercial, criminal and civil law.",
  };

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={personSchema} />

      <Breadcrumbs items={breadcrumbs} />

      {/* ========================================================================= */}
      {/* 1. EXECUTIVE HERO HEADER                                                 */}
      {/* ========================================================================= */}
      <section
        style={{
          background: "linear-gradient(140deg, #071527 0%, #0d2746 45%, #143a6b 100%)",
          color: "#ffffff",
          paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Subtle Architectural Glow Accent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-15%",
            right: "-5%",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              gap: "clamp(2.5rem, 5vw, 4.5rem)",
              alignItems: "center",
            }}
          >
            {/* Left: Executive Portrait & Direct Contact Card */}
            <div style={{ maxWidth: "420px", marginInline: "auto", width: "100%" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.15)",
                  aspectRatio: "3 / 3.8",
                  background: "#09172b",
                }}
              >
                <Image
                  src="/images/team/ajay-bansal-director.webp"
                  alt="Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                />

                {/* Subtle dark gradient overlay on bottom of image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(7, 21, 39, 0.9) 0%, rgba(7, 21, 39, 0.25) 45%, transparent 70%)",
                  }}
                />

                {/* Practitioner Badge overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    left: "1.25rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.4rem 0.85rem",
                    background: "rgba(10, 27, 50, 0.85)",
                    border: "1px solid rgba(147, 197, 253, 0.35)",
                    borderRadius: "9999px",
                    backdropFilter: "blur(8px)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "#93c5fd",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#34d399",
                      boxShadow: "0 0 8px #34d399",
                    }}
                  />
                  Principal Practitioner
                </div>

                {/* Bottom Overlay Title Plate */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    background: "rgba(255, 255, 255, 0.96)",
                    borderRadius: "14px",
                    padding: "1rem 1.25rem",
                    color: "#0f172a",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: "1.15rem",
                          color: "#0a1b32",
                          fontFamily: "var(--font-heading), Georgia, serif",
                        }}
                      >
                        Ajay Bansal
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#1b4c89",
                          fontWeight: 700,
                          marginTop: "0.15rem",
                        }}
                      >
                        Director &amp; Principal Lawyer
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "0.35rem 0.75rem",
                        backgroundColor: "#f0f6fc",
                        borderRadius: "6px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#1b4c89",
                        border: "1px solid #bcd5f5",
                      }}
                    >
                      15+ Yrs
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Reach Pill Bar */}
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.85rem 1.25rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.85rem",
                  color: "#cbd5e1",
                }}
              >
                <span>Chambers: <strong>278 Collins St</strong></span>
                <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>•</span>
                <a
                  href="tel:+61422905860"
                  style={{
                    color: "#93c5fd",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  0422 905 860
                </a>
              </div>
            </div>

            {/* Right: Leadership Profile Information */}
            <div>
              {/* Eyebrow Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "9999px",
                  background: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.35)",
                  color: "#93c5fd",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Leadership Profile
              </div>

              {/* H1 Name */}
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.8vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.025em",
                  margin: "0 0 0.85rem",
                  color: "#ffffff",
                  fontFamily: "var(--font-heading), Georgia, serif",
                }}
              >
                Ajay Bansal
              </h1>

              {/* Sub-headline */}
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#93c5fd",
                  margin: "0 0 1.25rem",
                  lineHeight: 1.4,
                }}
              >
                Director &amp; Principal Lawyer · Bansal Lawyers Melbourne
              </p>

              {/* Executive Summary Intro */}
              <p
                style={{
                  fontSize: "1.08rem",
                  lineHeight: 1.75,
                  color: "#cbd5e1",
                  maxWidth: "42rem",
                  margin: "0 0 2rem",
                }}
              >
                Founding Director with over 15 years of comprehensive legal experience in
                Australia. Providing strategic advocacy, practical advice, and trusted
                representation across complex legal matters.
              </p>

              {/* 3-Card Stat / Detail Matrix */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "0.85rem",
                  marginBottom: "2.25rem",
                  maxWidth: "40rem",
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
                    }}
                  >
                    15+ Years
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
                    Location
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginTop: "0.25rem",
                    }}
                  >
                    Melbourne CBD
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
                      fontWeight: 800,
                      color: "#ffffff",
                      marginTop: "0.25rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    English, Hindi, Punjabi
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Link
                  href="/contact"
                  className="button button--primary"
                  style={{
                    minWidth: "14.5rem",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "0.85rem 1.6rem",
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
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "0.85rem 1.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    borderColor: "rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: "0.35rem" }}
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call 0422 905 860
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. CREDENTIALS & TRUST BAR                                               */}
      {/* ========================================================================= */}
      <TrustBar
        items={[
          "15+ Years Legal Practice in Australia",
          "Victorian & Federal Court Advocacy",
          "Multidisciplinary Strategic Guidance",
          "Melbourne CBD & Virtual Consultations",
        ]}
      />

      {/* ========================================================================= */}
      {/* 3. IN-DEPTH BIOGRAPHY & PRACTICE OVERVIEW (EXECUTIVE TWO-COLUMN LAYOUT)  */}
      {/* ========================================================================= */}
      <Section tone="white" id="biography">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "start",
            }}
          >
            {/* Left / Main Column: Philosophy, Biography Prose, Core Practice Areas */}
            <div style={{ minWidth: 0 }}>
              {/* Section Eyebrow */}
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
                Professional Background &amp; Philosophy
              </span>

              {/* Main Heading */}
              <h2
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.2vw, 2.35rem)",
                  color: "var(--navy-950, #0a1b32)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  margin: "0 0 0.85rem",
                }}
              >
                Professional Background &amp; Practice Philosophy
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--ink-secondary, #475569)",
                  lineHeight: 1.65,
                  margin: "0 0 2rem",
                }}
              >
                A career dedicated to straightforward legal advice, thorough case preparation,
                and decisive advocacy.
              </p>

              {/* Executive Pull-Quote Box */}
              <div
                style={{
                  background: "linear-gradient(135deg, #f0f6fc 0%, #e8f1fb 100%)",
                  borderLeft: "4px solid #1b4c89",
                  borderRadius: "0 12px 12px 0",
                  padding: "1.5rem 1.75rem",
                  marginBottom: "2.25rem",
                  boxShadow: "0 4px 15px rgba(27, 76, 137, 0.05)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "#0f2746",
                    fontStyle: "italic",
                    margin: "0 0 0.75rem",
                    fontWeight: 500,
                  }}
                >
                  &ldquo;He believes clients should never be left confused by complex legal
                  language or opaque court procedures. His focus is on practical advice,
                  meticulous evidentiary preparation, and dedicated professional representation
                  at every stage of the matter.&rdquo;
                </p>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#1b4c89",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>— Ajay Bansal</span>
                  <span style={{ color: "#94a3b8" }}>•</span>
                  <span style={{ color: "#64748b", fontWeight: 600 }}>
                    Director &amp; Principal Lawyer
                  </span>
                </div>
              </div>

              {/* Detailed Biography Text (100% Original Content Verbatim) */}
              <div
                style={{
                  fontSize: "1.04rem",
                  lineHeight: 1.8,
                  color: "var(--ink, #1e293b)",
                  display: "grid",
                  gap: "1.25rem",
                }}
              >
                <p>
                  Ajay Bansal is the founding Director of Bansal Lawyers. He brings over 15
                  years of legal experience to the firm and has worked with clients across a
                  wide range of legal matters throughout Australia.
                </p>
                <p>
                  His work covers immigration law, family law, property law, commercial law,
                  criminal law, and civil matters. Over the years, he has assisted hundreds of
                  clients with legal issues involving visas, family disputes, business
                  transactions, property settlements, criminal charges, and other critical legal
                  concerns.
                </p>
                <p>
                  Ajay’s approach is straightforward. He focuses on understanding the
                  client’s situation, explaining the legal position clearly, and helping the
                  client make informed decisions without ambiguity or delay.
                </p>
                <p>
                  He believes clients should never be left confused by complex legal language
                  or opaque court procedures. His focus is on practical advice, meticulous
                  evidentiary preparation, and dedicated professional representation at every
                  stage of the matter.
                </p>
              </div>

              {/* Core Practice Areas Grid */}
              <div
                style={{
                  marginTop: "3.5rem",
                  paddingTop: "2.5rem",
                  borderTop: "1px solid var(--line, #e2e8f0)",
                }}
              >
                <div style={{ marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#1b4c89",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Multidisciplinary Expertise
                  </span>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--navy-950, #0a1b32)",
                      fontFamily: "var(--font-heading), Georgia, serif",
                      margin: 0,
                    }}
                  >
                    Key Areas of Legal Practice
                  </h3>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {/* Card 1: Immigration */}
                  <div
                    style={{
                      padding: "1.5rem",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      borderLeft: "4px solid #1b4c89",
                      boxShadow: "0 2px 8px rgba(10, 27, 50, 0.04)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "#f0f6fc",
                          color: "#1b4c89",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "0.85rem",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          margin: "0 0 0.5rem",
                          color: "var(--navy-950, #0a1b32)",
                        }}
                      >
                        Immigration &amp; Appeals
                      </h4>
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--ink-secondary, #475569)",
                          margin: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        Visa applications, complex refusals, cancellations, NOICC responses,
                        and ART appeals.
                      </p>
                    </div>
                    <Link
                      href="/immigration-lawyers-melbourne"
                      style={{
                        marginTop: "1.25rem",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#1b4c89",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      View Immigration Services &rarr;
                    </Link>
                  </div>

                  {/* Card 2: Commercial */}
                  <div
                    style={{
                      padding: "1.5rem",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      borderLeft: "4px solid #1b4c89",
                      boxShadow: "0 2px 8px rgba(10, 27, 50, 0.04)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "#f0f6fc",
                          color: "#1b4c89",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "0.85rem",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          margin: "0 0 0.5rem",
                          color: "var(--navy-950, #0a1b32)",
                        }}
                      >
                        Commercial &amp; Contracts
                      </h4>
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--ink-secondary, #475569)",
                          margin: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        Business contracts, shareholder agreements, dispute negotiation, and
                        debt recovery.
                      </p>
                    </div>
                    <Link
                      href="/commercial-lawyers-melbourne"
                      style={{
                        marginTop: "1.25rem",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#1b4c89",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      View Commercial Services &rarr;
                    </Link>
                  </div>

                  {/* Card 3: Family Law */}
                  <div
                    style={{
                      padding: "1.5rem",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      borderLeft: "4px solid #1b4c89",
                      boxShadow: "0 2px 8px rgba(10, 27, 50, 0.04)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "#f0f6fc",
                          color: "#1b4c89",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "0.85rem",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          margin: "0 0 0.5rem",
                          color: "var(--navy-950, #0a1b32)",
                        }}
                      >
                        Family Law &amp; Settlements
                      </h4>
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--ink-secondary, #475569)",
                          margin: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        Divorce, property settlement, parenting arrangements, BFAs, and consent
                        orders.
                      </p>
                    </div>
                    <Link
                      href="/family-lawyers-melbourne"
                      style={{
                        marginTop: "1.25rem",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#1b4c89",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      View Family Law Services &rarr;
                    </Link>
                  </div>

                  {/* Card 4: Property */}
                  <div
                    style={{
                      padding: "1.5rem",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      borderLeft: "4px solid #1b4c89",
                      boxShadow: "0 2px 8px rgba(10, 27, 50, 0.04)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "#f0f6fc",
                          color: "#1b4c89",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "0.85rem",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          margin: "0 0 0.5rem",
                          color: "var(--navy-950, #0a1b32)",
                        }}
                      >
                        Property &amp; Conveyancing
                      </h4>
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--ink-secondary, #475569)",
                          margin: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        Commercial and residential leases, property purchases, sales, and dispute
                        notices.
                      </p>
                    </div>
                    <Link
                      href="/property-lawyers-melbourne"
                      style={{
                        marginTop: "1.25rem",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#1b4c89",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      View Property Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right / Sidebar Column: Executive Practitioner Dossier & Quick Contact */}
            <aside style={{ maxWidth: "380px", width: "100%" }}>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  boxShadow: "0 10px 25px -5px rgba(10, 27, 50, 0.08)",
                  position: "sticky",
                  top: "6rem",
                }}
              >
                {/* Dossier Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid #e2e8f0",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      backgroundColor: "#0a1b32",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/team/ajay-bansal-director.webp"
                      alt="Ajay Bansal thumbnail"
                      fill
                      sizes="60px"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        margin: 0,
                        color: "#0a1b32",
                      }}
                    >
                      Ajay Bansal
                    </h4>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "#1b4c89",
                        fontWeight: 700,
                        margin: "0.15rem 0 0",
                      }}
                    >
                      Principal Lawyer &amp; Director
                    </p>
                  </div>
                </div>

                {/* Practitioner Spec List */}
                <div style={{ display: "grid", gap: "0.95rem", fontSize: "0.88rem" }}>
                  <div>
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      Practice Firm
                    </span>
                    <strong style={{ color: "#0f172a" }}>Bansal Lawyers Melbourne</strong>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      Chambers Location
                    </span>
                    <strong style={{ color: "#0f172a" }}>
                      Level 8, 278 Collins Street, Melbourne VIC 3000
                    </strong>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      Direct Practitioner Contact
                    </span>
                    <a
                      href="tel:+61422905860"
                      style={{
                        color: "#1b4c89",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontSize: "0.95rem",
                      }}
                    >
                      0422 905 860
                    </a>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      National Toll-Free Line
                    </span>
                    <a
                      href="tel:1300226725"
                      style={{
                        color: "#0f172a",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      1300 BANSAL (1300 226 725)
                    </a>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      Email Correspondence
                    </span>
                    <a
                      href="mailto:info@bansallawyers.com.au"
                      style={{
                        color: "#1b4c89",
                        fontWeight: 600,
                        textDecoration: "none",
                        wordBreak: "break-all",
                      }}
                    >
                      info@bansallawyers.com.au
                    </a>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      Fluent Languages
                    </span>
                    <strong style={{ color: "#0f172a" }}>English, Hindi, Punjabi</strong>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      Consultation Options
                    </span>
                    <strong style={{ color: "#0f172a" }}>
                      In-Person (Collins St) &amp; Virtual
                    </strong>
                  </div>
                </div>

                {/* Sidebar Call to Action Button */}
                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid #e2e8f0",
                  }}
                >
                  <Link
                    href="/contact"
                    className="button button--primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      fontWeight: 700,
                      padding: "0.75rem",
                    }}
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 4. EXECUTIVE CTA SECTION                                                 */}
      {/* ========================================================================= */}
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
