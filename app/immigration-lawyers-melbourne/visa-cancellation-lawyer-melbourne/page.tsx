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
  title: "Visa Cancellation Lawyer Melbourne | Appeals & Immigration Advice",
  description:
    "Bansal Lawyers assists with visa cancellation matters, cancellation notices, ART appeals, supporting evidence and immigration advice in Melbourne.",
  path: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne",
  keywords: [
    "Visa Cancellation Lawyer Melbourne",
    "Visa Cancellation Lawyers Melbourne",
    "Visa Cancellation Appeal Lawyer",
    "Migration Lawyer Melbourne",
    "Immigration Lawyer Melbourne",
    "Visa Cancellation Australia",
    "ART Appeal Lawyer Melbourne",
  ],
});

const cancellationMatters = [
  "Visa cancellation notices",
  "Visa cancellation decisions",
  "Responses to Department concerns",
  "ART appeal advice",
  "Character-related visa cancellation matters",
  "Student visa cancellation issues",
  "Partner visa cancellation concerns",
  "Work visa cancellation matters",
  "Breach of visa condition concerns",
  "Supporting evidence preparation",
  "Written submissions where required",
  "Immigration document review",
];

const cancellationReasons = [
  "Breach of visa conditions",
  "Character-related concerns",
  "Providing incorrect or misleading information",
  "Failure to meet ongoing visa requirements",
  "Study-related issues",
  "Sponsorship or employer-related issues",
  "Relationship breakdown in some visa matters",
  "Criminal charges or convictions",
  "Failure to respond to requests",
  "Concerns about genuine circumstances",
];

const evidenceList = [
  "Identity documents",
  "Visa history",
  "Employment records",
  "Study records",
  "Character references",
  "Police or court documents",
  "Medical or family evidence",
  "Relationship evidence",
  "Financial documents",
  "Community ties in Australia",
  "Personal statement or explanation",
  "Supporting letters",
];

const whyChoosePoints = [
  "Review of the cancellation notice or decision",
  "Clear explanation of your options",
  "Advice on deadlines and next steps",
  "Guidance on supporting evidence",
  "Assistance with written responses where required",
  "Support with ART appeal matters",
  "Professional handling of sensitive immigration issues",
];

const cancellationFaqs = [
  {
    question: "What should I do if I receive a visa cancellation notice?",
    answer:
      "You should get legal advice as soon as possible. The notice may have a deadline for response, and your reply should address the concerns raised.",
  },
  {
    question: "Can I appeal a visa cancellation?",
    answer:
      "Some visa cancellation decisions may be reviewed, but this depends on the type of cancellation and your circumstances. You should check the decision letter and get advice quickly.",
  },
  {
    question: "What happens if my visa is cancelled?",
    answer:
      "A visa cancellation may affect your right to stay in Australia and your future visa options. The next step depends on the decision, your visa status, and whether review rights are available.",
  },
  {
    question: "Can Bansal Lawyers help with ART appeals for visa cancellation?",
    answer:
      "Yes. Bansal Lawyers assists with ART appeal matters involving visa cancellations, evidence preparation, and review options.",
  },
  {
    question: "What evidence is needed for a visa cancellation response?",
    answer:
      "The evidence depends on the reason for cancellation. It may include visa history, employment documents, study records, character references, family evidence, personal statements, and other supporting documents.",
  },
  {
    question: "When should I contact a visa cancellation lawyer?",
    answer:
      "You should contact a lawyer as soon as you receive a cancellation notice, decision letter, request for information, or any communication from the Department about possible cancellation.",
  },
];

export default function VisaCancellationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Visa Cancellation Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(cancellationFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Visa Cancellation Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Urgent Legal Intervention · Melbourne CBD"
        title="Visa Cancellation Lawyer Melbourne"
        intro={
          <>
            <p>
              A visa cancellation can be serious. It may affect your right to
              stay in Australia, your work, study, family, travel plans, and
              future visa options.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              If you have received a visa cancellation notice or your visa has
              already been cancelled, it is important to get legal advice
              quickly. The next step depends on the reason for cancellation, your
              visa type, your personal circumstances, and any deadlines that
              apply.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with visa cancellation matters in
              Melbourne and across Australia. We help you understand the
              decision, review your options, prepare supporting documents, and
              take the next step based on your situation. As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we provide clear legal support during critical time limits.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Visa Cancellation Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Urgent NOICC & Cancellation Response Review",
          "CBD Office & Immediate Virtual Appointments",
          "Section 501 Character & Section 116 Advocacy",
          "Administrative Review Tribunal (ART) Representation",
        ]}
      />

      {/* 2. Get Advice Before Responding [H2] */}
      <Section tone="white" id="advice-before-responding">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                borderRadius: "4px",
                background: "#fef2f2",
                color: "#991b1b",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Time-Critical Notice
            </div>
            <h2>Get Advice Before Responding</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A visa cancellation matter should not be handled casually. The
              response needs to address the exact concerns raised by the
              Department or the decision-maker.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before responding or appealing, it is important to understand:
            </p>
            <ul className="points-list">
              <li>Why the visa cancellation issue has been raised</li>
              <li>Whether your visa has already been cancelled</li>
              <li>Whether you have review or appeal options</li>
              <li>What deadline applies</li>
              <li>What documents and evidence may be needed</li>
              <li>What risks may affect your future visa options</li>
              <li>Whether you can remain in Australia while the matter is being reviewed</li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your cancellation notice or decision
              letter and explain the available options in plain language.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Visa Cancellation Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Visa Cancellation Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {cancellationMatters.map((matter) => (
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
            Each cancellation matter should be reviewed carefully before deciding
            the next step. If your matter relates to studying in Australia, our
            practice also provides tailored support from an experienced{" "}
            <Link
              href="/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
            >
              Student Visa Lawyer Melbourne
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* 4. Common Reasons for Visa Cancellation [H2] */}
      <Section tone="white" id="common-reasons">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Grounds & Assessment</span>
            <h2>Common Reasons for Visa Cancellation</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Visa cancellation matters can happen for different reasons. Some
              are related to visa conditions, while others may involve
              character, incorrect information, study issues, sponsorship
              problems, or changes in circumstances.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common reasons may include:
            </p>
            <ul className="points-list">
              {cancellationReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              The reason for cancellation matters because the response must
              directly address the issue raised. For clients who have also
              encountered an application refusal, our{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              provides immediate strategic review.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Notice of Intention to Consider Cancellation [H2] */}
      <Section tone="warm" id="noicc">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Pre-Cancellation Stage</span>
            <h2>Notice of Intention to Consider Cancellation</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In some cases, the Department may issue a notice before cancelling a
              visa. This gives the visa holder an opportunity to respond.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              This response is important. A weak or incomplete response may
              increase the risk of cancellation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients by reviewing the notice, identifying the issues,
              gathering documents, and preparing a response that addresses the
              concerns clearly.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Visa Cancellation Appeals [H2] */}
      <Section tone="white" id="appeals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Tribunal Advocacy</span>
            <h2>Visa Cancellation Appeals</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              If your visa has already been cancelled, you may have appeal or
              review options depending on the type of cancellation and your
              circumstances.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Some visa cancellation matters may be reviewed through the
              Administrative Review Tribunal. Deadlines can be strict, so it is
              important to act quickly. Consulting a dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART Appeal Lawyer Melbourne
              </Link>{" "}
              ensures your application for review is lodged within the mandatory
              timeframe.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers can review the cancellation decision and explain
              whether a review option may be available.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Evidence for Visa Cancellation Matters [H2] */}
      <Section tone="warm" id="evidence">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Documentation Strategy</span>
            <h2>Evidence for Visa Cancellation Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Evidence plays an important role in cancellation matters. The
              documents should respond to the specific reasons given in the
              notice or decision.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Depending on the issue, evidence may include:
            </p>
            <ul className="points-list">
              {evidenceList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              The right evidence depends on the facts of your matter.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Visa Cancellation Matters? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Dedicated Representation</span>
            <h2>Why Choose Bansal Lawyers for Visa Cancellation Matters?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Visa cancellation matters need quick action, careful review, and
              proper preparation. The response should not be generic. It should
              deal with the exact concerns raised.
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
              We help clients understand the situation clearly before taking
              action.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With a Visa Cancellation Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Visa Cancellation Lawyer in Melbourne"
        text="If you have received a visa cancellation notice or your visa has been cancelled, do not delay. Early advice can help you understand your position, your deadlines, and your possible next steps."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Cancellation Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Urgent NOICC response submissions", "Section 501 & 116 cancellation defence", "Melbourne CBD & virtual consultations"]}
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
                  Comprehensive migration law advice for individuals, families,
                  and businesses across Australia.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Visa Refusal Lawyer Melbourne</h3>
                <p>
                  Detailed analysis of refusal reasons, evidence review, and
                  strategic next-step advice.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>ART Appeal Lawyer Melbourne</h3>
                <p>
                  Tribunal appeals for visa cancellations and refusals before the
                  Administrative Review Tribunal.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Student Visa Lawyer Melbourne</h3>
                <p>
                  Student visa applications, Genuine Student requirements, and
                  Condition 8202 breach responses.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={cancellationFaqs} />
      </Section>
    </>
  );
}
