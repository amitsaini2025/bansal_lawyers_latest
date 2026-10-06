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
  title: "ART Appeal Lawyer Melbourne | Immigration & Visa Appeal Lawyers",
  description:
    "Bansal Lawyers assists with ART appeals for visa refusals, cancellations and immigration decisions. Get clear advice before your appeal deadline passes.",
  path: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne",
  keywords: [
    "ART Appeal Lawyer Melbourne",
    "Immigration Appeal Lawyer Melbourne",
    "Visa Appeal Lawyer Melbourne",
    "Visa Refusal Appeal Lawyer",
    "Migration Appeal Lawyer Melbourne",
    "Administrative Review Tribunal Lawyer",
    "ART Migration Appeal Lawyer",
  ],
});

const appealDecisions = [
  "Visa refusals",
  "Visa cancellations",
  "Partner visa refusals",
  "Student visa refusals",
  "Visitor visa refusals",
  "Skilled visa refusals",
  "Employer-sponsored visa refusals",
  "Family visa refusals",
  "Permanent residency refusals",
  "Character-related visa issues",
  "Migration decision reviews",
];

const howWeHelpPoints = [
  "Reviewing the refusal or cancellation decision",
  "Checking appeal rights and deadlines",
  "Explaining the issues raised by the Department",
  "Reviewing previous visa documents",
  "Identifying missing or weak evidence",
  "Preparing supporting documents",
  "Drafting written submissions where required",
  "Helping clients prepare for the tribunal process",
  "Advising on risks and possible next steps",
];

const evidenceTypes = [
  "Relationship documents",
  "Financial records",
  "Study-related documents",
  "Employment documents",
  "Sponsor documents",
  "Personal statements",
  "Character-related documents",
  "Medical or family evidence",
  "Previous immigration history",
  "Supporting letters or records",
];

const commonRefusalIssues = [
  "Missing documents",
  "Weak relationship evidence",
  "Genuine Student concerns",
  "Financial concerns",
  "Character or health concerns",
  "Sponsor-related issues",
  "Inconsistent information",
  "Failure to meet visa criteria",
  "Poor explanation of personal circumstances",
];

const whyChoosePoints = [
  "Careful review of the decision letter",
  "Clear explanation of appeal options",
  "Practical advice on evidence and documents",
  "Support with visa refusal and cancellation matters",
  "Preparation for tribunal-related steps",
  "Honest guidance about risks and next steps",
];

const artFaqs = [
  {
    question: "What is an ART appeal?",
    answer:
      "An ART appeal is a request for the Administrative Review Tribunal to review certain government decisions, including some migration and visa decisions.",
  },
  {
    question: "Can I appeal a visa refusal?",
    answer:
      "Some visa refusals can be reviewed, but it depends on the type of decision and your circumstances. You should get advice quickly after receiving a refusal letter.",
  },
  {
    question: "How long do I have to lodge an ART appeal?",
    answer:
      "The deadline depends on the type of decision. Appeal deadlines can be strict, so it is important to check the decision letter and get advice as early as possible.",
  },
  {
    question: "Can Bansal Lawyers help prepare evidence for an ART appeal?",
    answer:
      "Yes. We assist with reviewing the decision, identifying evidence gaps, preparing documents, and advising on the appeal process.",
  },
  {
    question: "Is an ART appeal the same as applying for a new visa?",
    answer:
      "No. An appeal is a review of a decision. A fresh visa application is a separate process. The right option depends on your matter.",
  },
  {
    question: "Should I get legal advice before lodging an ART appeal?",
    answer:
      "Yes. Getting advice early can help you understand whether an appeal is available, what deadline applies, and what evidence may be needed.",
  },
];

export default function ArtAppealLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne/",
    },
    { label: "ART Appeal Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(artFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: ART Appeal Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="ART Appeal Lawyer Melbourne"
        intro={
          <>
            <p>
              If your visa has been refused or cancelled, you may have the option to ask for a review through the Administrative Review Tribunal. This process can be stressful, especially when your stay, family, work, study, or future in Australia is affected.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with ART appeal matters in Melbourne and across Australia. As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we help you understand the decision, check your review options, prepare supporting documents, and take the right steps before the deadline passes.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact/" }}
        secondaryAction={{
          label: "Speak With an ART Appeal Lawyer",
          href: "tel:+61422905860",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Merits Review & Tribunal Submissions",
          "Urgent Decision Letter Assessment",
          "Direct Solicitor Representation",
        ]}
      />

      {/* 2. Get Advice Before You File an Appeal [H2] */}
      <Section tone="white" id="advice-before-filing">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Case Review</span>
            <h2>Get Advice Before You File an Appeal</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              An ART appeal should not be treated like a simple form submission. The tribunal will look at the decision, your circumstances, and the evidence provided. If the appeal is not prepared properly, important issues may be missed.
            </p>

            <div className="deadline-alert-box">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <strong>Strict Statutory Time Limits Apply</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  Most ART appeal applications must be lodged within 21 to 28 days of receiving the Department&apos;s decision letter. If a deadline passes, the tribunal cannot extend the time.
                </p>
              </div>
            </div>

            <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.75rem", marginBottom: "0.75rem" }}>
              Before taking action, it is important to understand:
            </p>
            <ul className="points-list">
              <li>Whether your decision can be reviewed</li>
              <li>What deadline applies to your matter</li>
              <li>Why the visa was refused or cancelled</li>
              <li>What evidence is needed</li>
              <li>Whether previous documents were weak or incomplete</li>
              <li>What needs to be explained clearly in the appeal</li>
            </ul>

            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your decision letter and explain the next step in plain language.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Immigration Decisions That May Involve an ART Appeal [H2] */}
      <Section tone="warm" id="decisions-involved">
        <Container>
          <SectionHeader
            eyebrow="Review Jurisdiction"
            title="Immigration Decisions That May Involve an ART Appeal"
            intro="The type of appeal depends on the decision made and your situation. Some matters may be reviewed by the tribunal, while others may need a different legal pathway."
          />
          <div className="matters-grid">
            {appealDecisions.map((matter) => (
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
            Each matter needs to be reviewed carefully before deciding the best way forward.
          </p>
        </Container>
      </Section>

      {/* 4. How Bansal Lawyers Can Help With ART Appeals [H2] */}
      <Section tone="white" id="how-we-help">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Legal Support</span>
            <h2>How Bansal Lawyers Can Help With ART Appeals</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              An appeal needs proper preparation. The reasons for refusal or cancellation must be addressed with relevant documents, clear explanations, and supporting evidence.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Our ART appeal support may include:
            </p>
            <ul className="points-list">
              {howWeHelpPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We focus on helping clients understand their position before moving forward.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Why Evidence Matters in an ART Appeal [H2] */}
      <Section tone="warm" id="why-evidence-matters">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Substantiating Your Case</span>
            <h2>Why Evidence Matters in an ART Appeal</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Evidence is one of the most important parts of an immigration appeal. A general explanation is usually not enough. The documents should respond to the actual reasons mentioned in the refusal or cancellation decision.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Depending on the matter, evidence may include:
            </p>
            <div className="matters-grid" style={{ marginTop: "1rem" }}>
              {evidenceTypes.map((evidence) => (
                <div key={evidence} className="matter-item">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{evidence}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.5rem" }}>
              The right evidence depends on your case. That is why the decision letter should be reviewed carefully before preparing the appeal.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Visa Refusal and ART Appeal Support [H2] */}
      <Section tone="white" id="refusal-support">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Overcoming Refusal Grounds</span>
            <h2>Visa Refusal and ART Appeal Support</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Many ART appeal matters start with a visa refusal. If you have received an adverse decision, a dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              at Bansal Lawyers can review the delegate&apos;s findings and explain why the Department was not satisfied with the application.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Common issues may include:
            </p>
            <ul className="points-list">
              {commonRefusalIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Whether addressing relationship genuineness with our{" "}
              <Link
                href="/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Partner Visa Lawyer Melbourne
              </Link>{" "}
              team, or resolving study pathway concerns with our{" "}
              <Link
                href="/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Student Visa Lawyer Melbourne
              </Link>{" "}
              practitioners, Bansal Lawyers can help review the refusal reasons and advise on what may be needed for the appeal.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Visa Cancellation Appeals [H2] */}
      <Section tone="warm" id="cancellations">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Urgent Cancellation Defences</span>
            <h2>Visa Cancellation Appeals</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A visa cancellation can create serious stress because it may affect your ability to stay in Australia. These matters should be handled quickly and carefully.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients with visa cancellation-related appeal matters, including review of the cancellation decision, supporting documents, and preparation for the next legal step.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for ART Appeals? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Advocacy</span>
            <h2>Why Choose Bansal Lawyers for ART Appeals?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              ART appeal matters need clear advice, strong preparation, and attention to deadlines. A weak appeal can affect your future options, so it is important to understand the process before taking action.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {whyChoosePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We do not overcomplicate the process. We explain what matters and what needs to be done.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With an ART Appeal Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With an ART Appeal Lawyer in Melbourne"
        text="If you have received a visa refusal or cancellation decision, do not wait until the deadline is close. Early advice can help you understand your review options and prepare properly."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Appeals Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Strict tribunal deadline compliance", "Evidence & witness preparation for ART hearings", "Melbourne CBD & virtual consultations"]}
      />

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={artFaqs} />
      </Section>
    </>
  );
}
