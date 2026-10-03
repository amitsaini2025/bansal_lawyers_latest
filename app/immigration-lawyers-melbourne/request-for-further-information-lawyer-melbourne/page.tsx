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
    "Request for Further Information Lawyer Melbourne | Visa RFI Advice",
  description:
    "Bansal Lawyers assists with immigration requests for further information, visa response letters, document preparation and Department concerns.",
  path: "/immigration-lawyers-melbourne/request-for-further-information-lawyer-melbourne",
  keywords: [
    "Request for Further Information Lawyer Melbourne",
    "RFI Lawyer Melbourne",
    "Immigration RFI Lawyer",
    "Visa Request for Further Information",
    "Migration Lawyer Melbourne",
    "Visa Response Lawyer Melbourne",
  ],
});

const beforeRespondingChecks = [
  "What the Department is asking for",
  "Why the request was issued",
  "What documents are missing",
  "Whether the request raises concerns",
  "What deadline applies",
  "Whether a written explanation is needed",
  "Whether previous information needs clarification",
];

const rfiMatters = [
  "Partner visa evidence",
  "Student visa documents",
  "Genuine Student concerns",
  "Financial evidence",
  "Employment documents",
  "Sponsor documents",
  "Relationship evidence",
  "Health or character concerns",
  "Skilled migration documents",
  "Permanent residency documents",
  "Identity or travel history issues",
];

const commonRfiProblems = [
  "Sending unrelated documents",
  "Missing the deadline",
  "Providing weak explanations",
  "Ignoring the main concern",
  "Submitting inconsistent information",
  "Failing to explain document gaps",
  "Providing incomplete evidence",
];

const rfiFaqs = [
  {
    question: "What is a Request for Further Information?",
    answer:
      "It is a request from the Department asking for additional documents, explanations, or evidence before deciding a visa application.",
  },
  {
    question: "Should I respond quickly?",
    answer:
      "Yes. These requests usually have deadlines, and late or incomplete responses may affect the decision.",
  },
  {
    question: "Can Bansal Lawyers help prepare my response?",
    answer:
      "Yes. We assist with reviewing the request, identifying required documents, and preparing a clear response.",
  },
  {
    question: "What if I do not have the documents requested?",
    answer:
      "You should get advice. In some cases, an explanation or alternative evidence may need to be considered.",
  },
];

export default function RequestForFurtherInformationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Request for Further Information Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(rfiFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Request for Further Information Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Request for Further Information Lawyer Melbourne"
        intro={
          <>
            <p>
              Receiving a Request for Further Information can feel stressful,
              especially when your visa application is still pending. The
              Department may ask for more documents, explanations, or evidence
              before making a decision.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with immigration requests for
              further information in Melbourne and across Australia. We help
              you understand the request, identify what documents may be
              needed, and prepare a clear response. As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we ensure your response directly answers Department queries to
              safeguard your visa outcome.
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
          "Collins St Office & Australia-Wide Consultations",
          "Urgent RFI Deadline Management & Response Drafting",
          "Genuine Student, PIC 4020 & Sponsor Audit Support",
          "Clear Legal Submissions Directly Addressing Department Concerns",
        ]}
      />

      {/* 2. Do Not Ignore the Request [H2] */}
      <Section tone="white" id="urgent-action">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Time-Sensitive Process</span>
            <h2>Do Not Ignore the Request</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A Request for Further Information usually has a deadline. If the
              response is late, incomplete, or unclear, it may affect the visa
              decision.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before responding, it is important to understand:
            </p>
            <ul className="points-list">
              {beforeRespondingChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Bansal Lawyers can review the request and guide you on the next
              step.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. RFI Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Department Requests Handled"
            title="RFI Matters We Assist With"
            intro="We assist with requests involving:"
          />
          <div className="matters-grid">
            {rfiMatters.map((item) => (
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
              Each response should directly address the concerns raised in the request.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Why the Response Matters [H2] */}
      <Section tone="white" id="why-response-matters">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Avoiding Critical Mistakes</span>
            <h2>Why the Response Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A general response is not enough. The documents and explanation
              should be relevant, organised, and consistent with the visa
              application.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common problems include:
            </p>
            <ul className="points-list">
              {commonRfiProblems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              A properly prepared response can reduce confusion and help present
              the matter more clearly. To ensure your supporting evidence is
              flawless, take advantage of our{" "}
              <Link
                href="/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Immigration Document Review Lawyer Melbourne
              </Link>{" "}
              services before filing your response, or consult our{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              team if an adverse decision has already been threatened or made.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Speak With an RFI Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With an RFI Lawyer in Melbourne"
        text="If you have received a Request for Further Information, get advice before sending a response. Bansal Lawyers can review the request and help you understand what needs to be addressed."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Immigration Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Time-critical RFI response strategy", "Substantive legal submissions", "Melbourne CBD & virtual consultations"]}
      />

      {/* 6. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Faq items={rfiFaqs} subtitle="Key answers to questions regarding Department of Home Affairs requests for further information and s56 notices." />
      </Section>
    </>
  );
}
