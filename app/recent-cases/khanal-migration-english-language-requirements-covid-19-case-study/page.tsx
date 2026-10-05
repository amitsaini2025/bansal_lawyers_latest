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
  title: "Khanal Migration Case Study: English Language Requirements & COVID-19 Flexibility",
  description:
    "Case study of Khanal (Migration) [2025] ARTA 104 examining Subclass 485 Temporary Graduate English requirements, Department pandemic flexibility, and ART merits review.",
  path: "/recent-cases/khanal-migration-english-language-requirements-covid-19-case-study",
  keywords: [
    "Khanal Migration Case Study",
    "Subclass 485 English Requirement",
    "Administrative Review Tribunal ART 2025",
    "ARTA 104",
    "COVID-19 Visa Policy Flexibility",
    "Temporary Graduate Visa Appeal",
    "PTE English Test Australian Visa",
    "Immigration Lawyer Melbourne",
  ],
});

const relatedServices = [
  {
    title: "Skilled Migration Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/",
    description: "Graduate, skilled, and provisional visa pathways including Subclass 485 and 189/190/491.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description: "Merits review representation before the Administrative Review Tribunal (ART).",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description: "Decision record analysis, criteria satisfaction review, and statutory appeal deadlines.",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description: "Comprehensive Australian immigration law counsel and strategic visa advice.",
  },
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description: "Subclass 500 visa applications, study completion, and graduate transition advice.",
  },
  {
    title: "Immigration Document Review Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/",
    description: "Pre-lodgement evidence review, English test timelines, and compliance auditing.",
  },
];

export default function KhanalCaseDetailPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Recent Cases", href: "/recent-cases" },
    { label: "Khanal (Migration) [2025]" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData
        data={createCaseUpdateSchema({
          headline:
            "Khanal Migration Case Study: English Language Requirements and Flexibility During COVID-19",
          description:
            "Case summary of Khanal (Migration) [2025] ARTA 104 examining English language requirements and administrative flexibility during COVID-19 under Subclass 485.",
          path: "/recent-cases/khanal-migration-english-language-requirements-covid-19-case-study",
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
                Case Study &amp; Tribunal Analysis
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
              Khanal Migration Case Study: English Language Requirements and Flexibility During COVID-19
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
                <strong>Citation:</strong> [2025] ARTA 104
              </span>
              <span>
                <strong>Decision Date:</strong> 17 January 2025
              </span>
              <span>
                <strong>Tribunal:</strong> Administrative Review Tribunal (ART)
              </span>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Administrative Review Tribunal Decision",
          "Temporary Graduate Visa (Subclass 485)",
          "English Language Requirement Flexibility",
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
                alt="Administrative Review Tribunal Case Review - Khanal Migration Case Study"
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
                  CASE STUDY: Khanal (Migration) - English Language Requirements During the COVID-19 Pandemic
                </h2>
                <p style={{ color: "var(--ink-secondary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                  Apr 11,2025
                </p>
                <p style={{ fontStyle: "italic", color: "var(--ink-secondary)", fontSize: "1rem", marginBottom: "1.5rem" }}>
                  Khanal (Migration) [2025] ARTA 104 (17 January 2025)
                </p>
              </div>

              {/* Introduction */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Introduction
                </h3>
                <p>
                  This case illustrates how the Administrative Review Tribunal (ART) handled a visa refusal where the applicant was unable to provide evidence of English language proficiency at the time of application due to COVID-19 related difficulties. It provides important insights into how tribunals may apply regulatory requirements with reasonable flexibility during exceptional circumstances.
                </p>
              </section>

              {/* The Applicants and Visa Application */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Applicants and Visa Application
                </h3>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Primary Applicant:</strong> Mrs. Rubina Khanal
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Secondary Applicant:</strong> Mr. Saroj Adhikari (spouse)
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Visa Applied For:</strong> Skilled (Provisional) (Class VC) Subclass 485 (Temporary Graduate) visa
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Date of Application:</strong> April 7, 2022
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Date of Refusal:</strong> November 16, 2022
                  </li>
                </ul>
              </section>

              {/* Detailed Timeline of Events */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Detailed Timeline of Events
                </h3>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
                  December 9, 2021:
                </h4>
                <p>
                  Mrs. Khanal&apos;s migration agent wrote to the Department&apos;s 485 visa team asking: &quot;Can we lodge a 485 visa with the evidence of English and provide the result at a later stage?&quot;
                </p>
                <p>
                  This inquiry specifically sought clarification on the Department&apos;s position regarding English language testing requirements for 485 visa applicants in New South Wales during the pandemic period.
                </p>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
                  January 9, 2022:
                </h4>
                <p>
                  The Department responded: &quot;We are aware that applicants have been affected by the recent lockdowns. Therefore please proceed with the application and attach this email, along with evidence of the new test booking and result once they become available.&quot;
                </p>
                <p>
                  This confirmed the Department&apos;s flexible policy for English test requirements during COVID-19 restrictions.
                </p>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
                  March 15, 2022:
                </h4>
                <p>
                  Mrs. Khanal attended her scheduled Pearson Test of English (PTE) but was denied the opportunity to take the test.
                </p>
                <p>
                  The testing centre refused to allow her to sit the test because of an identity verification issue related to her name &quot;Khanal.&quot;
                </p>
                <p>
                  She was required to re-book for a later date.
                </p>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
                  April 7, 2022:
                </h4>
                <p>
                  Mrs. Khanal&apos;s existing visa was due to expire on April 14, 2022.
                </p>
                <p>
                  She lodged her Subclass 485 visa application before the expiry.
                </p>
                <p>With her application, she provided:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0" }}>
                  <li>Evidence of her PTE test booking for April 14, 2022</li>
                  <li>The Department&apos;s email from January 9, 2022, confirming flexibility with English test results</li>
                </ul>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
                  April 14, 2022:
                </h4>
                <p>
                  Mrs. Khanal successfully completed her PTE test on her first attempt.
                </p>
                <p>
                  She achieved an overall score of 61 (required minimum: 50).
                </p>
                <p>Her component scores were:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0" }}>
                  <li>Listening: 66 (required minimum: 36)</li>
                  <li>Reading: 56 (required minimum: 36)</li>
                  <li>Speaking: 69 (required minimum: 36)</li>
                  <li>Writing: 59 (required minimum: 36)</li>
                </ul>
                <p>
                  All scores significantly exceeded the minimum requirements.
                </p>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
                  November 16, 2022:
                </h4>
                <p>
                  The Department refused the visa applications because Mrs. Khanal had not submitted evidence of meeting the English language proficiency requirement at the time of application.
                </p>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
                  November 23, 2022:
                </h4>
                <p>
                  Mrs. Khanal applied to the Administrative Appeals Tribunal (AAT) for review of the decision.
                </p>

                <h4 style={{ fontSize: "1.1rem", color: "var(--brand-blue)", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
                  January 17, 2025:
                </h4>
                <p>
                  The case was heard by the Administrative Review Tribunal (which replaced the AAT from October 14, 2024).
                </p>
              </section>

              {/* The Legal Requirements in Detail */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Legal Requirements in Detail
                </h3>
                <p>
                  The critical visa criterion at issue was clause 485.212(1) of Schedule 2 to the Migration Regulations 1994, which required that a visa application be &quot;accompanied by evidence&quot; that:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li>The applicant had undertaken a language test specified in an instrument and achieved the required score within the specified period (cl 485.212(1)(a)); or</li>
                  <li>The applicant held a passport of a type specified by the Minister (cl 485.212(1)(b)).</li>
                </ul>
                <p>The relevant instrument (IMMI15/062) specified that:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li>Applicants must provide evidence on lodgement of their visa application</li>
                  <li>The English language test must have been undertaken within 3 years before the application</li>
                </ul>
                <p>For PTE tests, applicants needed:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li>A minimum overall score of 50</li>
                  <li>A minimum score of 36 for each component (Listening, Reading, Speaking, and Writing)</li>
                </ul>
                <p>
                  There was no factual dispute that Mrs. Khanal had not provided evidence of a successful English language test with her application on April 7, 2022. The test results were obtained one week after lodgement.
                </p>
              </section>

              {/* Why Mrs. Khanal Couldn't Meet the Requirement on Time */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Why Mrs. Khanal Couldn&apos;t Meet the Requirement on Time
                </h3>
                <p>The Tribunal accepted Mrs. Khanal&apos;s evidence that:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Initial Testing Attempt:</strong> She had proactively booked a PTE test for March 15, 2022 (before her visa application), but was unable to take the test due to identity verification issues at the testing centre.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>COVID-19 Restrictions:</strong> Rebooking was difficult because PTE was still operating under COVID-19 protocols, which limited test availability and scheduling options.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Timing Constraints:</strong> Her existing visa was expiring on April 14, 2022, creating urgency to lodge her new application before this date to maintain lawful status.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Department Guidance:</strong> She had relied on the Department&apos;s specific written advice that applicants affected by lockdowns could proceed with applications and provide test results later.
                  </li>
                </ul>
              </section>

              {/* The Department's COVID-19 Policy */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Department&apos;s COVID-19 Policy
                </h3>
                <p>
                  A crucial aspect of this case was the Department&apos;s temporary policy during the pandemic. During COVID-19 restrictions, the Department acknowledged that:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>Test bookings were difficult to secure due to lockdowns and reduced capacity at testing centres</li>
                  <li style={{ marginBottom: "0.5rem" }}>Flexibility was needed in processing applications during this exceptional period</li>
                  <li style={{ marginBottom: "0.5rem" }}>Applicants could provide evidence of test bookings with their applications</li>
                  <li style={{ marginBottom: "0.5rem" }}>Test results could be provided after lodgement</li>
                </ul>
                <p>
                  This policy recognized the practical challenges faced by visa applicants during the pandemic and aimed to ensure they weren&apos;t unfairly disadvantaged by circumstances beyond their control.
                </p>
              </section>

              {/* Arguments Presented by Mrs. Khanal's Representative */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Arguments Presented by Mrs. Khanal&apos;s Representative
                </h3>
                <p>Mrs. Khanal&apos;s migration agent made three key arguments:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Flexibility in Guidelines:</strong> The guidelines for Subclass 485 visas provided flexibility regarding English test results, with no specific deadline stipulated for post-lodgement submission. The Department&apos;s own communication supported this interpretation.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Genuine Efforts to Comply:</strong> Mrs. Khanal had made genuine attempts to fulfill the requirement. The administrative issue at the test center was entirely beyond her control, and once resolved, she promptly achieved the required English proficiency score.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Procedural Fairness:</strong> Schedule 1 criteria, when interpreted alongside the Department&apos;s communication, suggested that English test requirements could be satisfied after lodgement if genuine attempts to comply were demonstrated.
                  </li>
                </ul>
                <p>
                  The agent also referenced three previous AAT decisions in similar cases where applicants were found to meet language testing criteria despite late or no lodgement of results before the decision.
                </p>
              </section>

              {/* The Tribunal's Analysis and Reasoning */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Tribunal&apos;s Analysis and Reasoning
                </h3>
                <p>The Tribunal carefully considered:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Strict Regulatory Requirements:</strong> The Tribunal acknowledged it had &quot;no ability to waive the formal requirement,&quot; recognizing that the legislation required evidence of English proficiency to accompany the application.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Department&apos;s Pandemic Policy:</strong> The Tribunal considered the &quot;processing policy at the time which the Department conceded was appropriate and applied, owing to the exceptional circumstances occasioned by pandemic-inspired lockdowns.&quot;
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Consistency in Decision-Making:</strong> While not bound by previous decisions, the Tribunal noted it &quot;attempts to ensure consistency in decision-making in comparable fact situations&quot; and considered several similar AAT cases.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Circumstances Beyond Control:</strong> The Tribunal recognized that Mrs. Khanal&apos;s inability to complete the test before application was &quot;beyond her control.&quot;
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Substantive Compliance:</strong> Mrs. Khanal had successfully completed her English test just one week after lodging her application, with scores well above the requirements.
                  </li>
                </ul>
                <blockquote
                  style={{
                    margin: "1.25rem 0",
                    padding: "1rem 1.25rem",
                    background: "var(--sand-50)",
                    borderLeft: "4px solid var(--brand-blue)",
                    borderRadius: "var(--radius-sm)",
                    fontStyle: "italic",
                  }}
                >
                  <p style={{ margin: 0 }}>
                    &quot;given the reasonable latitude allowed by the Department at the time for &apos;accompanying&apos; evidence during processing applications, which was entirely appropriate, and given the circumstances as outlined by the applicant in her case which was beyond her control, the Tribunal finds that there is no reason not to apply that flexible policy to the applicant, as was done by the Department for others.&quot;
                  </p>
                </blockquote>
              </section>

              {/* The Secondary Applicant Issue */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Secondary Applicant Issue
                </h3>
                <p>
                  An additional complexity in this case concerned Mrs. Khanal&apos;s spouse, Mr. Saroj Adhikari:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Mr. Adhikari remained in Nepal and had never entered Australia
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Under section 338(2) of the Migration Act 1958, the Tribunal only has jurisdiction to review decisions for applicants who are physically present in Australia (in the &quot;migration zone&quot;)
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Because Mr. Adhikari was offshore, the Tribunal determined it had no jurisdiction to review his application
                  </li>
                </ul>
                <p>
                  This aspect of the case highlights the important distinction between review rights for onshore versus offshore applicants.
                </p>
              </section>

              {/* The Tribunal's Decision */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Tribunal&apos;s Decision
                </h3>
                <p>Based on its analysis, the Tribunal:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Found that Mrs. Khanal met the English language testing requirement in clause 485.212(1)(a)
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Remitted her application to the Department for reconsideration of the remaining visa criteria
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Determined it had no jurisdiction regarding Mr. Adhikari&apos;s application
                  </li>
                </ul>
              </section>

              {/* Key Principles and Practical Lessons */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Key Principles and Practical Lessons
                </h3>
                <p>This case establishes several important principles for migration matters:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Policy Flexibility During Exceptional Circumstances:</strong> Temporary policies implemented during exceptional situations (like the COVID-19 pandemic) should be applied consistently and fairly.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Substantive vs. Technical Compliance:</strong> While technical compliance with time-based requirements is usually strict, substantive compliance (actually meeting the English language standard) can sometimes be given greater weight during exceptional circumstances.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Importance of Written Departmental Advice:</strong> The email from the Department confirming flexibility was crucial evidence. Obtaining written confirmation of policy positions can be vital in review proceedings.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Documentation of Genuine Attempts:</strong> Evidence of genuine attempts to comply with requirements (in this case, the earlier test booking) can significantly strengthen a case.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Consistency in Administrative Decision-Making:</strong> Tribunals aim for consistency in similar cases, making previous decisions relevant (though not binding).
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Jurisdictional Limits for Offshore Applicants:</strong> The Tribunal cannot review decisions for applicants who are physically outside Australia, highlighting the differing procedural rights for onshore and offshore applicants.
                  </li>
                </ul>
              </section>

              {/* Conclusion */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Conclusion
                </h3>
                <p>
                  The Khanal case demonstrates how regulatory requirements can be interpreted with reasonable flexibility during exceptional circumstances, while still ensuring the substantive requirements are ultimately met. It shows that administrative decision-makers can take a practical and fair approach when applicants face obstacles beyond their control, particularly during unprecedented situations like a global pandemic.
                </p>
                <p>
                  This decision creates a valuable precedent for cases where applicants have made genuine attempts to comply with visa requirements but faced external barriers. It emphasizes that while the letter of the law is important, so too is its spirit, especially when extraordinary circumstances impact normal processes.
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
                  <strong>Note:</strong> This case study is provided for informational purposes to highlight important developments in migration law. It was not handled by Bansal Lawyers, but illustrates the kinds of procedural and evidential issues our firm expertly navigates for clients in skilled migration matters.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <li>
                    <a
                      href="https://www.bansallawyers.com.au/breaking-australia-national-innovation-visa-set-to-revolutionize-immigration-in-2024"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Australia National Innovation Visa set to revolutionize immigration in 2024 →
                    </a>
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
              Explore our specialized legal services for Australian graduate visas, skilled migration, and
              tribunal appeals:
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
              Need Advice After a Visa Refusal or Appeal?
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
              If you have received a visa refusal, requirement notice, or tribunal appeal deadline, getting
              experienced legal guidance early is essential.
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
              Bansal Lawyers can examine your documents, assess tribunal merits review options, and help you take
              the right next step.
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
