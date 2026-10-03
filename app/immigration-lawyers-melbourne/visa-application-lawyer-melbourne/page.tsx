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
  title: "Visa Application Lawyer Melbourne | Immigration & Visa Advice",
  description:
    "Bansal Lawyers assists with visa applications, eligibility review, document preparation, immigration advice and visa application support in Melbourne.",
  path: "/immigration-lawyers-melbourne/visa-application-lawyer-melbourne",
  keywords: [
    "Visa Application Lawyer Melbourne",
    "Visa Application Lawyers Melbourne",
    "Migration Lawyer Melbourne",
    "Immigration Lawyer Melbourne",
    "Visa Lawyer Melbourne",
    "Visa Application Australia",
    "Immigration Advice Melbourne",
  ],
});

const beforeApplyChecks = [
  "Visa eligibility",
  "Required documents",
  "Previous visa history",
  "Immigration risks",
  "Sponsor or partner requirements",
  "Study or work history",
  "Financial evidence",
  "Character and health concerns",
  "Deadlines and process requirements",
];

const visaMatters = [
  "Partner visa applications",
  "Student visa applications",
  "Skilled visa applications",
  "Employer sponsored visa applications",
  "Visitor visa applications",
  "Permanent residency applications",
  "Family visa matters",
  "Citizenship-related immigration advice",
  "Supporting document review",
  "Requests for further information",
];

const documentIssues = [
  "Missing evidence",
  "Incorrect information",
  "Weak personal statements",
  "Inconsistent dates",
  "Poor financial documents",
  "Weak relationship evidence",
  "Unsupported work experience",
  "Incomplete sponsor documents",
  "Previous refusals not explained properly",
];

const visaApplicationFaqs = [
  {
    question: "Can Bansal Lawyers help with visa applications?",
    answer:
      "Yes. We assist with visa application advice, document review, eligibility concerns, and preparation guidance.",
  },
  {
    question: "Should I get legal advice before applying for a visa?",
    answer:
      "Yes, especially if your matter involves previous refusals, complex documents, sponsor issues, relationship evidence, or strict eligibility requirements.",
  },
  {
    question: "Can you review my documents before lodgement?",
    answer:
      "Yes. We assist with immigration document review before a visa application is submitted.",
  },
  {
    question: "What happens if documents are missing?",
    answer:
      "Missing or weak documents may lead to delays, requests for more information, or refusal depending on the visa type and issue.",
  },
];

export default function VisaApplicationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Visa Application Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(visaApplicationFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Visa Application Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Visa Application Lawyer Melbourne"
        intro={
          <>
            <p>
              Applying for a visa can be stressful when you are unsure about
              eligibility, documents, deadlines, or the right pathway. A weak or
              incomplete application can lead to delays, requests for more
              information, or refusal.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with visa application advice in
              Melbourne and across Australia. We help applicants understand the
              requirements, review their documents, and prepare the application
              based on their situation. As dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we provide clear legal strategy and practical guidance at every step.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Visa Application Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Australia-Wide Consultations",
          "Comprehensive Eligibility & Document Audits",
          "Partner, Skilled, Student & Work Visa Pathways",
          "Refusal Risk Mitigation & Lodgement Support",
        ]}
      />

      {/* 2. Legal Advice Before You Apply [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Assessment</span>
            <h2>Legal Advice Before You Apply</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Before submitting a visa application, it is important to understand
              whether the chosen visa pathway is suitable for your circumstances.
            </p>
            <div
              style={{
                marginTop: "2rem",
                padding: "2rem",
                background: "var(--surface-alt)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <p style={{ fontSize: "1.08rem", lineHeight: "1.6", color: "var(--navy-950)", fontWeight: 700, margin: 0 }}>
                We help clients review:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
                  gap: "0.85rem",
                  marginTop: "1.25rem",
                }}
              >
                {beforeApplyChecks.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "0.85rem 1rem",
                      background: "var(--white)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <svg
                      style={{ width: "1.2rem", height: "1.2rem", color: "var(--brand-blue)", flexShrink: 0, marginTop: "0.15rem" }}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span style={{ fontSize: "0.96rem", color: "var(--ink)", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "var(--ink-secondary)", marginTop: "1.5rem", marginBottom: 0 }}>
                Getting advice early can help avoid common mistakes before the
                application is submitted.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Visa Applications We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Our Practice Areas"
            title="Visa Applications We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {visaMatters.map((item) => (
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
              Each visa matter should be reviewed based on the applicant’s
              background, documents, visa history, and future plans.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Why Document Preparation Matters [H2] */}
      <Section tone="white" id="document-preparation">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Preventing Visa Delays & Refusals</span>
            <h2>Why Document Preparation Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Visa applications are document-heavy. The documents should be
              clear, accurate, consistent, and relevant to the visa requirements.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common document issues include:
            </p>
            <ul className="points-list">
              {documentIssues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Bansal Lawyers can review your documents and help identify
              possible gaps before lodgement. For detailed guidance on your supporting
              evidence, explore our{" "}
              <Link
                href="/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Immigration Document Review Lawyer Melbourne
              </Link>{" "}
              services, or learn how to respond if you have already received a{" "}
              <Link
                href="/immigration-lawyers-melbourne/request-for-further-information-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Request for Further Information Lawyer Melbourne
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Speak With a Visa Application Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Visa Application Lawyer in Melbourne"
        text="If you are planning to apply for a visa and want to understand your options before submitting documents, Bansal Lawyers can help."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Immigration Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["End-to-end visa filing support", "Strategic document & evidence checklist", "Melbourne CBD & virtual consultations"]}
      />

      {/* 6. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Faq items={visaApplicationFaqs} subtitle="Common questions regarding Australian visa applications, eligibility checks, and document requirements." />
      </Section>
    </>
  );
}
