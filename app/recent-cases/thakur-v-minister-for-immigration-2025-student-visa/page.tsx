import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  Section,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createCaseUpdateSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Thakur v Minister for Immigration 2025 | Student Visa Judicial Review",
  description:
    "Case summary of Thakur v Minister for Immigration and Citizenship 2025 involving Student Visa Subclass 500 refusal, GTE concerns, AAT review and jurisdictional error.",
  path: "/recent-cases/thakur-v-minister-for-immigration-2025-student-visa",
  keywords: [
    "Thakur v Minister for Immigration 2025",
    "Student Visa Judicial Review",
    "Student Visa Refusal Australia",
    "GTE Requirement Student Visa",
    "Subclass 500 Refusal",
    "Immigration Judicial Review Australia",
    "Jurisdictional Error Migration Decision",
  ],
});

const relatedServices = [
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description: "Subclass 500 visa applications, genuine student criteria, and compliance advice.",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description: "Decision record review, refusal grounds assessment, and statutory appeal deadlines.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description: "Merits review representation before the Administrative Review Tribunal (ART).",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description: "Comprehensive Australian immigration law counsel and strategic visa advice.",
  },
  {
    title: "Immigration Document Review Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/",
    description: "Pre-lodgement statement scrutiny, GTE audit, and evidence verification.",
  },
  {
    title: "Request for Further Information Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/request-for-further-information-lawyer-melbourne/",
    description: "Responding to s56 RFIs and Natural Justice notifications from the Department.",
  },
];

const relatedRecentCasesPlaceholders = [
  {
    title: "More immigration case updates coming soon",
    category: "Immigration Law",
    status: "Upcoming Analysis",
  },
  {
    title: "Student visa refusal updates",
    category: "Student Visas (Subclass 500)",
    status: "Upcoming Analysis",
  },
  {
    title: "Visa cancellation case updates",
    category: "Section 501 / 116 Cancellations",
    status: "Upcoming Analysis",
  },
  {
    title: "ART appeal updates",
    category: "Administrative Review Tribunal",
    status: "Upcoming Analysis",
  },
  {
    title: "Judicial review updates",
    category: "Federal Circuit & Family Court",
    status: "Upcoming Analysis",
  },
];

export default function ThakurCaseDetailPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Recent Cases", href: "/recent-cases" },
    { label: "Thakur v Minister for Immigration and Citizenship 2025" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData
        data={createCaseUpdateSchema({
          headline:
            "Thakur v Minister for Immigration and Citizenship 2025 — Student Visa Judicial Review",
          description:
            "Case summary of Thakur v Minister for Immigration and Citizenship 2025 involving Student Visa Subclass 500 refusal, GTE concerns, AAT review and jurisdictional error.",
          path: "/recent-cases/thakur-v-minister-for-immigration-2025-student-visa",
          datePublished: "2025-08-23",
          dateModified: "2025-08-23",
          articleSection: "Immigration Law",
        })}
      />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Article Header */}
      <section
        style={{
          background: "var(--navy-900)",
          color: "var(--white)",
          padding: "clamp(2.5rem, 5vw, 4rem) 0 clamp(2rem, 4vw, 3rem)",
        }}
      >
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#93c5fd",
                  background: "rgba(147, 197, 253, 0.12)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "3px",
                  border: "1px solid rgba(147, 197, 253, 0.25)",
                }}
              >
                Immigration Law
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  letterSpacing: "0.04em",
                }}
              >
                Case Summary & Legal Update
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                lineHeight: "1.25",
                color: "var(--white)",
                margin: "0 0 1.25rem",
              }}
            >
              Thakur v Minister for Immigration and Citizenship 2025 — Student Visa Judicial Review
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "center",
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.8)",
                paddingTop: "0.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <span>
                <strong>Published:</strong> Aug 23, 2025
              </span>
              <span>
                <strong>Published Time:</strong> Not specified
              </span>
              <span>
                <strong>Jurisdiction:</strong> Federal Circuit and Family Court of Australia
              </span>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Federal Circuit & Family Court Decision",
          "Student Visa (Subclass 500) Judicial Review",
          "AAT Jurisdictional Error Analysis",
          "Independent Legal Commentary",
        ]}
      />

      {/* Main Article Content */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            {/* Short introductory note */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                background: "var(--blue-50)",
                borderLeft: "4px solid var(--brand-blue)",
                borderRadius: "var(--radius-sm)",
                marginBottom: "2.5rem",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.96rem",
                  lineHeight: "1.65",
                  color: "var(--ink)",
                  fontStyle: "italic",
                }}
              >
                This case update is provided for general information only and should not be treated as legal
                advice. The outcome of any immigration matter depends on the facts, documents, evidence,
                deadlines, and legal circumstances of that matter.
              </p>
            </div>

            {/* Featured Legal Brief Visual */}
            <div style={{ marginBottom: "2rem", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "var(--shadow)" }}>
              <Image
                src="/images/cases/court-case-review.webp"
                alt="Federal Court of Australia Legal Brief - Thakur v Minister for Immigration 2025"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 860px"
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* EXACT Case Content Provided — Preserved 100% Intact */}
            <article className="case-content" style={{ color: "var(--ink)", fontSize: "1.05rem", lineHeight: "1.8" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.5rem", color: "var(--brand-blue)", marginBottom: "0.5rem" }}>
                  Thakur v Minister for Immigration and Citizenship 2025 — Student Visa Judicial Review
                </h2>
                <p style={{ color: "var(--ink-secondary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                  Aug 23,2025
                </p>
                <p style={{ fontWeight: 600, color: "var(--ink)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                  Legal Update: Judicial Review in Student Visa Refusals
                </p>
              </div>

              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Case Summary
                </h3>
                <p>
                  On 12 June 2025, the Federal Circuit and Family Court of Australia (Division 2), presided over
                  by Judge Fary, delivered judgment in a judicial review application concerning refusal of a
                  Student Visa (Subclass 500). The case involved Ms Ritika Thakur, her husband Anand Singh
                  Cheema, and their child Viraaj Singh Cheema. The Department had refused the application under
                  clause 500.212 (GTE requirement), and the Administrative Appeals Tribunal (AAT) affirmed the
                  refusal. Ms Thakur sought review under section 476 of the Migration Act 1958.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  The Court considered whether the Tribunal had committed jurisdictional error, particularly by
                  recording her arrival date incorrectly and by failing to consider material evidence about her
                  ties to India and family circumstances.
                </p>
              </section>

              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Key Issues
                </h3>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Failure to properly assess Ms Thakur’s GTE statement and evidence of ties to India.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Excessive reliance on immigration history instead of present circumstances.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Procedural unfairness by not allowing her to address adverse concerns.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Failure to consider the best interests of the child (s.60CC Family Law Act 1975).
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Critical factual error: recording her arrival as 2008 instead of 2014.
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Applicant’s Arguments
                </h3>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Strong family, social and financial ties to India, including ancestral property and care responsibilities for her mother.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Course choice explained by family circumstances (death of brother, mother’s ill health).
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Hospitality course intended to support business plans in India.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Tribunal placed undue emphasis on past visa history without considering explanations.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Incorrect arrival date unfairly suggested 10+ years in Australia.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Impact on her young child overlooked.
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Minister’s Response
                </h3>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Tribunal considered all relevant evidence including immigration history.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Arrival date error not material to outcome.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Child welfare provisions under Family Law Act not applicable to migration review.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Procedural fairness requirements were met.
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Court’s Findings
                </h3>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Most complaints went to weight of evidence — not reviewable.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    A jurisdictional error was established because the Tribunal relied on the wrong arrival date (2008 vs 2014).
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    This error was material — it shaped reasoning about her length of stay in Australia.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Other grounds (Direction 69 misapplication, fairness, unreasonableness) dismissed.
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Decision and Orders
                </h3>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The Tribunal’s 2019 decision was set aside.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Matter remitted for reconsideration according to law.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    A writ of mandamus issued requiring the Tribunal to review afresh.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Minister ordered to pay applicants’ costs.
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Significance
                </h3>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Migration review decisions must rest on accurate factual findings.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Even “small” errors (arrival dates) may amount to jurisdictional error.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Courts do not reassess merits but ensure legal errors are corrected.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Applicants must clearly present and emphasise critical factual evidence before the Tribunal.
                  </li>
                </ul>
              </section>

              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.25rem",
                  background: "var(--sand-50)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.95rem",
                  color: "var(--ink-secondary)",
                }}
              >
                <p style={{ margin: 0 }}>
                  This case summary is for general information purposes only and is based on publicly available
                  court findings. It does not constitute legal advice. For tailored advice, please contact Bansal
                  Lawyers – best lawyers in Melbourne.
                </p>
                <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>
                  <Link
                    href="/recent-cases/student-visa-refusal-bias-jaggi-v-minister-2024"
                    style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}
                  >
                    Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained →
                  </Link>
                  <a
                    href="https://www.bansallawyers.com.au/recent-cases/thakur-v-minister-for-immigration-2025-student-visa"
                    style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                  >
                    Thakur v Minister for Immigration 2025 – Student Visa Case
                  </a>
                </p>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* Related Legal Services Section */}
      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Legal Support</span>
            <h2>Related Legal Services</h2>
            <p style={{ color: "var(--ink-secondary)", marginTop: "0.5rem", marginBottom: "2rem" }}>
              Explore our specialized legal services for Australian student visas, merits review, and
              immigration litigation:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 16rem), 1fr))",
                gap: "1.25rem",
              }}
            >
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  style={{
                    display: "block",
                    padding: "1.25rem",
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--brand-blue)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: "1.55",
                      color: "var(--ink-secondary)",
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Need Advice After a Visa Refusal? (CTA Section) */}
      <Section tone="white">
        <Container>
          <div
            style={{
              maxWidth: "54rem",
              margin: "0 auto",
              padding: "clamp(2rem, 4vw, 3rem)",
              background: "var(--navy-900)",
              color: "var(--white)",
              borderRadius: "var(--radius-md)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#93c5fd",
                marginBottom: "0.75rem",
              }}
            >
              Immigration Assistance
            </span>
            <h2 style={{ color: "var(--white)", marginBottom: "1rem" }}>
              Need Advice After a Visa Refusal?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.75",
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: "42rem",
                margin: "0 auto 1.75rem",
              }}
            >
              If you have received a student visa refusal, request for information, tribunal decision, or
              immigration-related notice, it is important to get advice based on your own facts and documents.
            </p>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: "1.7",
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: "42rem",
                margin: "0 auto 2rem",
              }}
            >
              Bansal Lawyers can review your decision letter, explain your options, and guide you on the next
              step.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <ButtonLink href="/contact/" variant="primary">
                Book a Consultation
              </ButtonLink>
              <ButtonLink
                href="tel:+61422905860"
                variant="white-outline"
              >
                Speak With Our Immigration Team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Recent Cases (Placeholder section) */}
      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <span className="eyebrow">Case Library</span>
                <h2>Related Recent Cases</h2>
              </div>
              <Link
                href="/recent-cases"
                style={{
                  color: "var(--brand-blue)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "underline",
                }}
              >
                View All Recent Cases →
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 15rem), 1fr))",
                gap: "1rem",
              }}
            >
              {relatedRecentCasesPlaceholders.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "1.25rem",
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--brand-blue)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.category}
                    </span>
                    <h3
                      style={{
                        fontSize: "0.98rem",
                        lineHeight: "1.4",
                        color: "var(--ink)",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <span
                    style={{
                      marginTop: "1rem",
                      fontSize: "0.78rem",
                      color: "var(--ink-secondary)",
                      fontStyle: "italic",
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
