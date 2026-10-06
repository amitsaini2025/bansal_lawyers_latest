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
  title: "Citizenship Lawyer Australia | Citizenship Application Advice",
  description:
    "Bansal Lawyers assists with Australian citizenship advice, application review, document preparation, eligibility concerns, refusals and next-step immigration guidance.",
  path: "/immigration-lawyers-melbourne/citizenship-lawyer-australia",
  keywords: [
    "Citizenship Lawyer Australia",
    "Australian Citizenship Lawyer",
    "Citizenship Lawyer Melbourne",
    "Citizenship Application Lawyer",
    "Australian Citizenship Advice",
    "Citizenship Refusal Lawyer",
    "Migration Lawyer Melbourne",
  ],
});

const citizenshipMatters = [
  "Australian citizenship advice",
  "Citizenship application review",
  "Eligibility concerns",
  "Residence history review",
  "Document preparation",
  "Identity document concerns",
  "Character-related concerns",
  "Requests for further information",
  "Citizenship refusal matters",
  "Review and appeal options",
  "Immigration history review",
  "Long-term migration advice",
];

const eligibilityConcerns = [
  "Unclear residence history",
  "Long periods outside Australia",
  "Previous visa refusals or cancellations",
  "Character-related issues",
  "Missing identity documents",
  "Name differences across documents",
  "Incorrect or inconsistent information",
  "Difficulty proving important dates",
  "Requests for additional evidence",
];

const citizenshipDocuments = [
  "Passport and identity documents",
  "Permanent residency evidence",
  "Travel history details",
  "Address history",
  "Employment or study records",
  "Police clearance documents, where required",
  "Name change documents, if applicable",
  "Family documents, where relevant",
  "Supporting explanations for complex issues",
];

const refusalIssues = [
  "Eligibility concerns",
  "Residence requirement issues",
  "Character concerns",
  "Missing or unclear documents",
  "Identity concerns",
  "Inconsistent information",
  "Failure to respond properly to requests",
  "Previous immigration history concerns",
];

const whyChoosePoints = [
  "Clear advice on citizenship eligibility",
  "Review of documents and immigration history",
  "Guidance on residence and travel history concerns",
  "Assistance with requests for further information",
  "Advice on citizenship refusal and review options",
  "Practical support based on your circumstances",
];

const citizenshipFaqs = [
  {
    question: "Can Bansal Lawyers help with Australian citizenship applications?",
    answer:
      "Yes. Bansal Lawyers assists with citizenship application advice, document review, eligibility concerns, and next-step guidance.",
  },
  {
    question: "Should I get advice before applying for citizenship?",
    answer:
      "Yes, especially if you have travel history concerns, previous visa issues, character concerns, missing documents, or uncertainty about eligibility.",
  },
  {
    question: "Can you help if my citizenship application is refused?",
    answer:
      "Yes. We can review the refusal decision, explain possible options, and assist with next-step advice where available.",
  },
  {
    question: "What documents are needed for a citizenship application?",
    answer:
      "Documents may include identity documents, passport details, permanent residency evidence, travel history, address history, police clearance documents where required, and other supporting records depending on your situation.",
  },
  {
    question: "Can travel history affect a citizenship application?",
    answer:
      "Travel history may be relevant because residence requirements can depend on time spent in and outside Australia. It is better to review this before applying.",
  },
  {
    question: "Can previous visa issues affect citizenship?",
    answer:
      "Previous visa refusals, cancellations, or immigration concerns may need to be reviewed before applying. The impact depends on the facts of the matter.",
  },
];

export default function CitizenshipLawyerAustraliaPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Citizenship Lawyer Australia" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(citizenshipFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Citizenship Lawyer Australia [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD & Nationwide"
        title="Citizenship Lawyer Australia"
        intro={
          <>
            <p>
              Applying for Australian citizenship is an important step for many
              permanent residents who want to make Australia their long-term
              home. The process may look simple, but eligibility, documents,
              residence history, character concerns, and previous immigration
              issues can affect the application.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with Australian citizenship advice,
              application review, document preparation, eligibility concerns, and
              citizenship refusal matters. We help you understand the
              requirements and prepare the next step based on your situation. As
              experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we support clients through the final stage of their migration
              journey.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Citizenship Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Nationwide Consultations",
          "Residence Calculator & Travel History Audits",
          "Good Character Requirement & Police History Review",
          "AAT / ART Citizenship Refusal Appeals",
        ]}
      />

      {/* 2. Citizenship Advice Before You Apply [H2] */}
      <Section tone="white" id="advice-before-applying">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Assessment</span>
            <h2>Citizenship Advice Before You Apply</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Before applying for Australian citizenship, it is important to check
              whether you meet the relevant eligibility requirements. Some
              applicants may have straightforward matters, while others may need
              advice because of travel history, character concerns, previous visa
              issues, or document problems.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Getting advice early can help you understand:
            </p>
            <ul className="points-list">
              <li>Whether you may be eligible to apply</li>
              <li>What documents may be required</li>
              <li>Whether your residence history needs review</li>
              <li>Whether previous visa issues may affect the application</li>
              <li>Whether character concerns need to be addressed</li>
              <li>Whether identity or document issues may create problems</li>
              <li>What to do if you receive a request for more information</li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your circumstances and explain the next
              step in plain language.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Citizenship Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Citizenship Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {citizenshipMatters.map((matter) => (
              <div key={matter} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{matter}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--navy-950)", fontWeight: 600 }}>
            Each citizenship matter should be reviewed based on the
            applicant&apos;s personal history, visa background, documents, and
            legal position. If you have questions regarding your underlying PR
            status, our{" "}
            <Link
              href="/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
            >
              Permanent Residency Lawyer Melbourne
            </Link>{" "}
            can review your visa validity.
          </p>
        </Container>
      </Section>

      {/* 4. Citizenship Eligibility Concerns [H2] */}
      <Section tone="white" id="eligibility-concerns">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Statutory Criteria</span>
            <h2>Citizenship Eligibility Concerns</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Citizenship eligibility can depend on several factors. Some
              applicants may need to review their time spent in Australia,
              permanent residency status, travel history, or previous immigration
              record before applying.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common concerns may include:
            </p>
            <ul className="points-list">
              {eligibilityConcerns.map((concern) => (
                <li key={concern}>{concern}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If you are unsure whether your application is ready, it is better
              to get advice before submitting it. If you have past compliance
              notices, our{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Cancellation Lawyer Melbourne
              </Link>{" "}
              can assess potential character issues.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Document Review for Citizenship Applications [H2] */}
      <Section tone="warm" id="document-review">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Evidentiary Rigour</span>
            <h2>Document Review for Citizenship Applications</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Citizenship applications usually require accurate and consistent
              documents. Small document issues can create delays or further
              questions.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Depending on your circumstances, documents may include:
            </p>
            <ul className="points-list">
              {citizenshipDocuments.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your documents and help identify
              possible gaps before the application is submitted.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Requests for Further Information [H2] */}
      <Section tone="white" id="rfi-requests">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Departmental Inquiries</span>
            <h2>Requests for Further Information</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In some cases, the Department may ask for more information before
              making a decision. These requests should be handled carefully
              because the response may affect the outcome.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients by reviewing the request, identifying what needs
              to be addressed, preparing supporting documents, and helping explain
              the situation clearly.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Citizenship Refusals [H2] */}
      <Section tone="warm" id="refusals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Appeals & Review</span>
            <h2>Citizenship Refusals</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A citizenship refusal can be stressful, especially after living in
              Australia for many years. The next step depends on the reason for
              refusal and whether review options are available. If you have
              received an adverse decision, consulting a{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              ensures you understand your Administrative Review Tribunal (ART)
              appeal rights and deadlines.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common citizenship refusal issues may involve:
            </p>
            <ul className="points-list">
              {refusalIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If your citizenship application has been refused, the decision
              should be reviewed carefully before deciding what to do next.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Citizenship Matters? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Melbourne Immigration Solicitors</span>
            <h2>Why Choose Bansal Lawyers for Citizenship Matters?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Citizenship matters need careful review, especially when there are
              eligibility, document, travel history, or character concerns. A
              rushed application can lead to delays, requests, or refusal.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {whyChoosePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We help clients understand the process clearly before taking the
              next step.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With a Citizenship Lawyer [H2] */}
      <CtaSection
        title="Speak With a Citizenship Lawyer"
        text="If you are preparing to apply for Australian citizenship, responding to a request for information, or dealing with a citizenship refusal, Bansal Lawyers can help you understand your options."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Citizenship Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Character requirement & residence checks", "Citizenship test & appeal support", "Melbourne CBD & virtual consultations"]}
      />

      {/* Topic Cluster Quick Links */}
      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practice Network</span>
            <h2 style={{ marginBottom: "1.5rem" }}>
              Related Immigration Legal Services
            </h2>
            <div className="practice-areas-grid">
              <Link
                href="/immigration-lawyers-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Immigration Lawyers Melbourne</h3>
                <p>
                  Comprehensive migration and administrative law representation
                  across Australia.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Permanent Residency Lawyer Melbourne</h3>
                <p>
                  PR pathway advice, eligibility criteria audits, and permanent
                  stage visa applications.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Visa Refusal Lawyer Melbourne</h3>
                <p>
                  Refusal analysis, evidence review, and statutory appeal advice
                  before the tribunal.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Visa Cancellation Lawyer Melbourne</h3>
                <p>
                  Urgent advice for cancellation notices, Section 501 character
                  matters, and NOICCs.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={citizenshipFaqs} />
      </Section>
    </>
  );
}
