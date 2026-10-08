import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  CtaSection,
  Faq,
  Hero,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title:
    "Immigration Document Review Lawyer Melbourne | Visa Document Advice",
  description:
    "Bansal Lawyers assists with immigration document review, visa evidence checks, application review and migration advice before submission.",
  path: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne",
  keywords: [
    "Immigration Document Review Lawyer Melbourne",
    "Visa Document Review Melbourne",
    "Migration Document Review",
    "Immigration Lawyer Melbourne",
    "Visa Lawyer Melbourne",
    "Immigration Advice Melbourne",
  ],
});

const reviewScopeItems = [
  "Visa application documents",
  "Partner visa evidence",
  "Student visa documents",
  "Skilled migration documents",
  "Employer sponsored visa documents",
  "Financial records",
  "Relationship evidence",
  "Employment documents",
  "Sponsor documents",
  "Identity documents",
  "Department requests",
  "Refusal or cancellation letters",
];

const commonDocIssues = [
  "Missing documents",
  "Inconsistent names or dates",
  "Poor relationship evidence",
  "Weak financial records",
  "Unsupported employment history",
  "Incorrect document format",
  "Missing translations",
  "Incomplete sponsor documents",
  "Unclear personal statements",
  "Documents that do not answer the Department’s concern",
];

const whenReviewUsefulItems = [
  "Lodging a visa application",
  "Responding to a Request for Further Information",
  "Appealing a visa refusal",
  "Responding to a cancellation notice",
  "Preparing a partner visa application",
  "Submitting skilled migration documents",
  "Providing employer sponsored visa evidence",
  "Applying for permanent residency or citizenship",
];

const docReviewFaqs = [
  {
    question: "Can Bansal Lawyers review my visa documents?",
    answer:
      "Yes. We assist with immigration document review for visa applications, Department requests, refusals, appeals, and cancellation matters.",
  },
  {
    question: "Why is document review important?",
    answer:
      "Weak or missing documents can lead to delays, requests for more information, or refusal.",
  },
  {
    question: "Can you review partner visa evidence?",
    answer:
      "Yes. We can review relationship evidence and advise on possible gaps.",
  },
  {
    question: "Can you review documents before I submit a visa application?",
    answer:
      "Yes. We can review documents before lodgement and explain possible issues.",
  },
];

export default function ImmigrationDocumentReviewLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Immigration Document Review Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(docReviewFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Immigration Document Review Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Immigration Document Review Lawyer Melbourne"
        intro={
          <>
            <p>
              Immigration applications depend heavily on documents. Even a
              strong case can become difficult if documents are missing,
              unclear, inconsistent, or not properly explained.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with immigration document review in
              Melbourne and across Australia. We review documents before
              submission and help clients understand possible gaps, risks, and
              next steps. As trusted{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , our thorough audits protect your application before Department
              scrutiny.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With an Immigration Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Australia-Wide Document Audits",
          "Comprehensive Evidentiary Review Before Lodgement",
          "Partner, Skilled, Employer & Student Visa Checks",
          "Identification of Gaps, Inconsistencies & PIC 4020 Risks",
        ]}
      />

      {/* 2. Review Your Documents Before Submission [H2] */}
      <Section tone="white" id="review-before-submission">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Thorough Scrutiny</span>
            <h2>Review Your Documents Before Submission</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Many visa problems start with weak documentation. A document
              review can help identify issues before the application is
              submitted or before a response is sent.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              We can review:
            </p>
            <ul className="points-list">
              {reviewScopeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              The goal is to check whether the documents support the matter
              clearly.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Common Document Issues [H2] */}
      <Section tone="warm" id="common-issues">
        <Container>
          <SectionHeader
            eyebrow="Preventing Refusals"
            title="Common Document Issues"
            intro="Immigration document problems may include:"
          />
          <div className="matters-grid">
            {commonDocIssues.map((item) => (
              <div key={item} className="matter-item">
                <svg
                  className="matter-item__icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p style={{ fontSize: "1.05rem", color: "var(--navy-950)", fontWeight: 600 }}>
              Bansal Lawyers can review the documents and explain what may need attention.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. When Document Review Is Useful [H2] */}
      <Section tone="white" id="when-useful">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Timing</span>
            <h2>When Document Review Is Useful</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Document review may be useful before:
            </p>
            <ul className="points-list">
              {whenReviewUsefulItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Getting documents reviewed early can help avoid unnecessary risk.
              If you are preparing a new filing, consult our{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-application-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Visa Application Lawyer Melbourne
              </Link>{" "}
              solicitors, or speak with our{" "}
              <Link
                href="/immigration-lawyers-melbourne/request-for-further-information-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Request for Further Information Lawyer Melbourne
              </Link>{" "}
              team if you must submit evidence in response to a Department letter.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Speak With an Immigration Document Review Lawyer [H2] */}
      <CtaSection
        title="Speak With an Immigration Document Review Lawyer"
        text="If you are unsure whether your visa documents are complete, clear, or strong enough, Bansal Lawyers can help review them before you move forward."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Immigration Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Thorough review before Department submission", "Gap analysis & consistency check", "Melbourne CBD & virtual consultations"]}
      />

      {/* 6. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Faq items={docReviewFaqs} subtitle="Common questions regarding immigration document audits, evidence requirements, and legal review." />
      </Section>
    </>
  );
}
