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
  title: "Tribunal Decision Overturned for Copy and Paste Reasoning — Maazuddin v Minister 2024",
  description:
    "Case study of Maazuddin v Minister for Immigration [2024] FedCFamC2G 1349 examining Student Visa condition 8202 cancellation, copy-and-paste tribunal reasoning, and section 359A procedural fairness.",
  path: "/recent-cases/maazuddin-v-minister-2024-tribunal-decision-overturned",
  keywords: [
    "Maazuddin v Minister 2024",
    "Maazuddin v Minister for Immigration",
    "FedCFamC2G 1349",
    "Student Visa Condition 8202 Breach",
    "Tribunal Copy and Paste Jurisdictional Error",
    "Section 359A Procedural Fairness",
    "Visa Cancellation Judicial Review",
    "Immigration Lawyer Melbourne",
  ],
});

const relatedServices = [
  {
    title: "Visa Cancellation Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/",
    description: "Responding to Notices of Intention to Consider Cancellation (NOICC) and tribunal appeals.",
  },
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description: "Subclass 500 visa requirements, AQF level compliance, and condition 8202 disputes.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description: "Merits review representation before the Administrative Review Tribunal (ART).",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description: "Decision record review, refusal grounds assessment, and statutory appeal deadlines.",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description: "Comprehensive Australian immigration law counsel and strategic visa advice.",
  },
  {
    title: "Request for Further Information Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/request-for-further-information-lawyer-melbourne/",
    description: "Responding to s56 RFIs, s359A notifications, and procedural fairness letters.",
  },
];

export default function MaazuddinCaseDetailPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Recent Cases", href: "/recent-cases" },
    { label: "Maazuddin v Minister for Immigration [2024]" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData
        data={createCaseUpdateSchema({
          headline:
            "Tribunal Decision Overturned for \"Copy and Paste\" Reasoning — Maazuddin v Minister for Immigration 2024",
          description:
            "Case summary of Maazuddin v Minister for Immigration and Multicultural Affairs [2024] FedCFamC2G 1349 examining student visa cancellation, independent tribunal review, and procedural fairness.",
          path: "/recent-cases/maazuddin-v-minister-2024-tribunal-decision-overturned",
          datePublished: "2025-04-11",
          dateModified: "2025-04-11",
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
                Case Study &amp; Judicial Analysis
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
              Tribunal Decision Overturned for &quot;Copy and Paste&quot; Reasoning — Maazuddin v Minister for Immigration 2024
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
                <strong>Published:</strong> Apr 11, 2025
              </span>
              <span>
                <strong>Citation:</strong> [2024] FedCFamC2G 1349
              </span>
              <span>
                <strong>Decision Date:</strong> December 2024
              </span>
              <span>
                <strong>Jurisdiction:</strong> Federal Circuit and Family Court of Australia (Division 2)
              </span>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Federal Circuit & Family Court Decision",
          "Student Visa (Subclass 500) Cancellation",
          "Condition 8202 & Jurisdictional Error",
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
            <div
              style={{
                marginBottom: "2rem",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Image
                src="/images/cases/court-case-review.webp"
                alt="Federal Circuit Court Review - Maazuddin v Minister 2024"
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
                  CASE STUDY: Tribunal Decision Overturned for &quot;Copy and Paste&quot; Reasoning
                </h2>
                <p style={{ color: "var(--ink-secondary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                  Apr 11,2025
                </p>
                <p style={{ fontStyle: "italic", color: "var(--ink-secondary)", fontSize: "1rem", marginBottom: "1.5rem" }}>
                  Maazuddin v Minister for Immigration and Multicultural Affairs [2024] FedCFamC2G 1349
                </p>
              </div>

              {/* Case Summary */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Case Summary
                </h3>
                <p>
                  This December 2024 Federal Circuit and Family Court decision represents a significant development in migration law, particularly regarding administrative decision-making processes and procedural fairness obligations in visa cancellation reviews.
                </p>
              </section>

              {/* Background Facts */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Background Facts
                </h3>
                <p>
                  Mr. Mohammed Maazuddin, an Indian citizen, was granted a Student (Subclass 500) visa on June 4, 2018, to study a Bachelor of Community Services (AQF Level 7) in Australia. However, after experiencing academic difficulties, he changed his course to a Diploma of Automotive Technology (AQF Level 5).
                </p>
                <p>
                  On October 25, 2019, the Department notified Mr. Maazuddin of an intention to cancel his visa for breaching condition 8202(2)(b) of Schedule 8 to the Migration Regulations 1994, which requires students to maintain enrollment in a course at the same or higher AQF level as their original course.
                </p>
                <p>
                  Despite Mr. Maazuddin&apos;s explanation about his academic struggles and his planned pathway to eventually return to Bachelor-level studies, a delegate of the Minister cancelled his visa on December 3, 2019.
                </p>
              </section>

              {/* Administrative Appeals Tribunal Review */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Administrative Appeals Tribunal Review
                </h3>
                <p>
                  Mr. Maazuddin applied for review to the Administrative Appeals Tribunal (AAT). Following a telephone hearing on March 27, 2020 (conducted remotely due to COVID-19 restrictions), the Tribunal affirmed the visa cancellation decision on March 30, 2020.
                </p>
                <p>The Tribunal found that:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Mr. Maazuddin had breached condition 8202(2)(b) by enrolling in a lower-level qualification
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The requirement to maintain the correct AQF level was fundamental to the visa grant
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    While Mr. Maazuddin had otherwise complied with visa conditions and would face some hardship, these factors were given little weight
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The circumstances leading to the breach were not beyond Mr. Maazuddin&apos;s control
                  </li>
                </ul>
              </section>

              {/* Judicial Review Application */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Judicial Review Application
                </h3>
                <p>
                  Mr. Maazuddin filed an application for judicial review on May 7, 2020—three days after the 35-day statutory deadline. He sought an extension of time and argued the Tribunal had made jurisdictional errors.
                </p>
              </section>

              {/* The Extension of Time Issue */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Extension of Time Issue
                </h3>
                <p>The Court granted the extension of time for several reasons:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>The delay was minimal (only 3 days)</li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    There was an acceptable explanation (the applicant misunderstood that time ran from the date of notification rather than the date of decision)
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>There was minimal prejudice to the Minister</li>
                  <li style={{ marginBottom: "0.5rem" }}>The substantive application had merit</li>
                </ul>
              </section>

              {/* The Court's Analysis of Jurisdictional Error */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Court&apos;s Analysis of Jurisdictional Error
                </h3>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
                  Ground 1: Failure to Bring an Independent Mind to the Review
                </h4>
                <p>
                  The Court conducted a detailed comparative analysis of the Tribunal&apos;s and delegate&apos;s decisions, discovering extensive copying without attribution:
                </p>

                <p style={{ fontWeight: 600, marginTop: "0.75rem", marginBottom: "0.35rem" }}>
                  Verbatim or near-verbatim reproduction of findings and reasoning:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0 1rem" }}>
                  <li style={{ marginBottom: "0.4rem" }}>The Tribunal used identical language in describing the breach of visa conditions</li>
                  <li style={{ marginBottom: "0.4rem" }}>It adopted similar or identical findings across multiple discretionary factors</li>
                  <li style={{ marginBottom: "0.4rem" }}>It used the same structure and headings derived from the Department&apos;s Procedural Instruction</li>
                </ul>

                <p style={{ fontWeight: 600, marginTop: "0.75rem", marginBottom: "0.35rem" }}>
                  Similar weighting of factors:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0 1rem" }}>
                  <li style={{ marginBottom: "0.4rem" }}>Both decisions gave &quot;significant weight&quot; to factors favoring cancellation</li>
                  <li style={{ marginBottom: "0.4rem" }}>Both gave &quot;little weight&quot; to factors against cancellation</li>
                  <li style={{ marginBottom: "0.4rem" }}>Both concluded that cancellation grounds outweighed reasons not to cancel</li>
                </ul>

                <p style={{ fontWeight: 600, marginTop: "0.75rem", marginBottom: "0.35rem" }}>
                  Reproduction of apparent errors:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0 1rem" }}>
                  <li style={{ marginBottom: "0.4rem" }}>Both incorrectly analyzed certain legal consequences of cancellation</li>
                  <li style={{ marginBottom: "0.4rem" }}>Both appeared to misapply some aspects of the Departmental guidance</li>
                  <li style={{ marginBottom: "0.4rem" }}>Both departed from policy guidance to generally weigh matters in the visa holder&apos;s favor without explanation</li>
                </ul>

                <p>
                  The Court found that this extensive, unattributed copying indicated the Tribunal had failed to bring its independent mind to the review and had not discharged its statutory function to consider the matter afresh.
                </p>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
                  Ground 2: Denial of Procedural Fairness
                </h4>
                <p>
                  The Court also found a breach of section 359A(1)(a) of the Migration Act, which required the Tribunal to give the applicant &quot;clear particulars of any information that the Tribunal considers would be the reason, or a part of the reason, for affirming the decision.&quot;
                </p>
                <p>
                  Following the Full Federal Court&apos;s reasoning in <em>MZZZW v Minister for Immigration and Border Protection [2015] FCAFC 133</em>, the Court held that:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The Tribunal&apos;s intention to adopt substantial parts of the delegate&apos;s findings and reasoning was itself &quot;information&quot; that needed to be disclosed
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    By failing to inform Mr. Maazuddin of this intention, the Tribunal denied him the opportunity to address why the delegate&apos;s reasoning should not be adopted
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    This constituted a breach of procedural fairness amounting to jurisdictional error
                  </li>
                </ul>
              </section>

              {/* The Court's Decision */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Court&apos;s Decision
                </h3>
                <p>Judge Gostencnik:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Extended the time for filing the judicial review application to May 7, 2020
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Issued a writ of certiorari quashing the Tribunal&apos;s decision
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Issued a writ of mandamus requiring the Administrative Review Tribunal to determine the application according to law
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Ordered the Minister to pay the applicant&apos;s costs
                  </li>
                </ul>
              </section>

              {/* Legal Principles Established */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Legal Principles Established
                </h3>
                <p>This decision reinforces several important principles:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Independent decision-making:</strong> Tribunals must genuinely review matters afresh and cannot simply adopt a delegate&apos;s reasoning without independent consideration
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Attribution requirement:</strong> When relying on another decision-maker&apos;s findings or reasoning, tribunals should acknowledge the source and explain why they consider it appropriate to adopt that reasoning
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Procedural fairness obligations:</strong> The requirement to give &quot;clear particulars of information&quot; includes disclosing an intention to substantially adopt previous decision-maker&apos;s reasoning
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Extension of time considerations:</strong> Courts may grant short extensions of time where there is a reasonable explanation, minimal prejudice, and the substantive application has merit
                  </li>
                </ul>
              </section>

              {/* Practical Implications for Visa Holders */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Practical Implications for Visa Holders
                </h3>
                <p>This case highlights:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    The importance of legal representation in identifying procedural errors in tribunal decisions
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    The value of seeking judicial review even in cases where technical breaches of visa conditions are admitted
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    The courts&apos; willingness to scrutinize decision-making processes even when the substantive outcome might ultimately be the same
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    Time limit considerations for filing applications, while demonstrating that short delays with reasonable explanations may be excused
                  </li>
                </ul>
              </section>

              {/* Conclusion */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Conclusion
                </h3>
                <p>
                  Maazuddin v Minister for Immigration and Multicultural Affairs stands as an important reminder that administrative tribunals must conduct genuine, independent reviews and cannot merely rubber-stamp previous decisions. It demonstrates the courts&apos; commitment to ensuring procedural fairness in migration decisions, especially in visa cancellation cases where the consequences for the visa holder are significant.
                </p>
              </section>

              {/* Note / Disclaimer & Cross-Links */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.5rem",
                  background: "var(--sand-50)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.95rem",
                  color: "var(--ink-secondary)",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.7" }}>
                  <strong>Note:</strong> This case study is provided for informational purposes to highlight important developments in migration law. It was not handled by Bansal Lawyers, but demonstrates the kinds of procedural issues our firm expertly navigates for clients in migration matters. If you are facing visa cancellation or seeking review of a migration decision, our experienced team can provide tailored advice and representation.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <li>
                    <Link
                      href="/recent-cases/alsheri-v-minister-2025-importance-of-framing-legal-question"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Alsheri v Minister 2025 – Importance of Framing Legal Question →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases/khanal-migration-english-language-requirements-covid-19-case-study"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Khanal Migration Case Study: English Language Requirements and COVID-19 Flexibility →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases/chikweu-v-minister-2024-federal-court-visa-refusal-overturn"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      When Tribunal Errors Matter: Chikweu v Minister 2024 Immigration Case →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases/student-visa-refusal-bias-jaggi-v-minister-2024"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases/thakur-v-minister-for-immigration-2025-student-visa"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Thakur v Minister for Immigration 2025 — Student Visa Case →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      ← Back to All Recent Cases
                    </Link>
                  </li>
                </ul>
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
              Explore our specialized legal services for visa cancellation defence, student compliance, and
              tribunal merits review:
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

      {/* Need Advice After a Visa Cancellation? (CTA Section) */}
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
              Facing Visa Cancellation or an Unfavourable Tribunal Decision?
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
              If your visa has been cancelled or the Tribunal affirmed a cancellation without genuine independent
              consideration, strict statutory deadlines apply to seek legal remedy.
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
              Bansal Lawyers will carefully examine the decision record, identify potential jurisdictional errors,
              and advise you on your options for appeal.
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
    </>
  );
}
