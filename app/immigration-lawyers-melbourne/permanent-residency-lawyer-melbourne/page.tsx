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
  title: "Permanent Residency Lawyer Melbourne | PR Visa & Migration Advice",
  description:
    "Bansal Lawyers assists with permanent residency advice, PR visa pathways, skilled PR, partner PR, employer sponsored PR, document review and refusal matters.",
  path: "/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne",
  keywords: [
    "Permanent Residency Lawyer Melbourne",
    "PR Lawyer Melbourne",
    "Permanent Residency Australia",
    "PR Visa Lawyer Melbourne",
    "Skilled PR Lawyer Melbourne",
    "Partner Visa PR Lawyer",
    "Employer Sponsored PR Lawyer",
    "Migration Lawyer Melbourne",
  ],
});

const prMatters = [
  "Permanent residency advice",
  "PR pathway review",
  "Skilled migration PR options",
  "Employer sponsored PR options",
  "Partner visa PR matters",
  "Family migration-related PR matters",
  "Document review",
  "Eligibility concerns",
  "Requests for further information",
  "Visa refusal matters",
  "Migration history review",
  "Long-term immigration planning",
];

const skilledPrIssues = [
  "Unsupported points claims",
  "Skills assessment concerns",
  "Employment evidence gaps",
  "Occupation selection issues",
  "English requirement concerns",
  "State nomination questions",
  "Previous visa history issues",
];

const prRefusalIssues = [
  "Missing or weak documents",
  "Eligibility concerns",
  "Skills assessment issues",
  "Employment evidence concerns",
  "Relationship evidence concerns",
  "Character or health concerns",
  "Inconsistent information",
  "Failure to respond properly to Department requests",
  "Previous visa history concerns",
];

const documentList = [
  "Identity documents",
  "Current and previous visa details",
  "Skills assessment documents",
  "Qualification documents",
  "Employment records",
  "Payslips and tax documents",
  "English test results",
  "Relationship evidence",
  "Sponsor or employer documents",
  "Police checks",
  "Health-related documents",
  "Personal statements or explanations",
];

const whyChoosePoints = [
  "Clear advice on PR options",
  "Review of current visa status and immigration history",
  "Guidance on documents and eligibility",
  "Support with skilled, employer sponsored, partner, and family-related PR matters",
  "Assistance with requests for further information",
  "Advice on PR refusal and appeal options",
  "Long-term immigration planning based on your situation",
];

const prFaqs = [
  {
    question: "Can Bansal Lawyers help with permanent residency advice?",
    answer:
      "Yes. Bansal Lawyers assists with permanent residency advice, PR pathway review, document preparation, eligibility concerns, and refusal matters.",
  },
  {
    question: "What are common pathways to permanent residency in Australia?",
    answer:
      "Common PR pathways may include skilled migration, employer sponsored migration, partner visas, and certain family migration pathways, depending on the person’s circumstances.",
  },
  {
    question: "Can skilled migration lead to permanent residency?",
    answer:
      "Some skilled migration pathways may lead to permanent residency if eligibility requirements are met. This depends on occupation, skills assessment, points, nomination options, and visa criteria.",
  },
  {
    question: "Can an employer sponsored visa lead to PR?",
    answer:
      "Some employer sponsored pathways may support permanent residency options, depending on the role, employer, occupation, work history, and eligibility requirements.",
  },
  {
    question: "Can you help if my PR application is refused?",
    answer:
      "Yes. We can review the refusal decision, explain possible options, and assist with appeal or next-step advice where available.",
  },
  {
    question: "Should I get legal advice before applying for PR?",
    answer:
      "Yes. PR applications involve important documents and eligibility requirements. Legal advice can help identify issues before the application is submitted.",
  },
];

export default function PermanentResidencyLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Permanent Residency Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(prFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Permanent Residency Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Permanent Residency Lawyer Melbourne"
        intro={
          <>
            <p>
              Permanent residency is an important goal for many people who want
              to build their future in Australia. The process can involve
              different visa pathways, eligibility requirements, documents,
              deadlines, and immigration history.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with permanent residency advice in
              Melbourne and across Australia. We help skilled workers, partners,
              families, professionals, employers, and visa holders understand
              their PR options and prepare the next step based on their
              situation. As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we provide comprehensive guidance across all pathways.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Permanent Residency Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "GSM, Employer Sponsored & Partner PR Pathways",
          "Comprehensive Eligibility & Document Audits",
          "Section 56 RFI & Adverse Decision Support",
        ]}
      />

      {/* 2. PR Advice Based on Your Situation [H2] */}
      <Section tone="white" id="pr-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Assessment</span>
            <h2>PR Advice Based on Your Situation</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              There is no single pathway to permanent residency for every person.
              The right option depends on your visa status, occupation,
              relationship, employer support, family situation, qualifications,
              work experience, English ability, and immigration history.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before applying, it is important to understand:
            </p>
            <ul className="points-list">
              <li>Which PR pathway may apply to you</li>
              <li>Whether you meet the main eligibility requirements</li>
              <li>What documents may be needed</li>
              <li>Whether previous visa refusals may affect your matter</li>
              <li>Whether your current visa has any limitations</li>
              <li>Whether employer sponsorship or skilled migration may be suitable</li>
              <li>Whether partner or family visa options apply</li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your situation and explain the available
              options in clear language.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Permanent Residency Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Permanent Residency Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {prMatters.map((matter) => (
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
            Every PR matter should be reviewed properly before documents are
            submitted.
          </p>
        </Container>
      </Section>

      {/* 4. Skilled Migration PR Pathways [H2] */}
      <Section tone="white" id="skilled-pr">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Points-Tested Visas</span>
            <h2>Skilled Migration PR Pathways</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Skilled migration can be a pathway to permanent residency for
              eligible professionals and skilled workers. These matters may
              involve occupation lists, skills assessments, points, English
              results, work experience, state nomination, and other requirements.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Skilled Migration Lawyer Melbourne
              </Link>{" "}
              assists clients with skilled PR advice, document review,
              eligibility concerns, and planning before an application is lodged.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common issues may include:
            </p>
            <ul className="points-list">
              {skilledPrIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              A careful review can help identify problems before they become
              bigger issues.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Employer Sponsored PR Pathways [H2] */}
      <Section tone="warm" id="employer-sponsored-pr">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Employer Nomination Scheme</span>
            <h2>Employer Sponsored PR Pathways</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some clients may be able to apply for permanent residency through
              an employer sponsored pathway. These matters often involve both the
              employer and the visa applicant.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The process may require review of business documents, nominated
              role details, employment history, occupation requirements, salary
              evidence, and applicant eligibility. Our experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/employer-sponsored-visa-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Employer Sponsored Visa Lawyer Melbourne
              </Link>{" "}
              assists employers and workers with Subclass 186 ENS advice, document
              review, nomination concerns, and next-step planning.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers assists employers and workers with employer sponsored
              PR advice, document review, nomination concerns, and next-step
              planning.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Partner Visa and Family PR Matters [H2] */}
      <Section tone="white" id="partner-family-pr">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Family & Spousal Pathways</span>
            <h2>Partner Visa and Family PR Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Partner visa and family-related migration matters can also lead to
              permanent residency where eligibility requirements are met. These
              applications usually require strong relationship or family evidence
              and careful document preparation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Partner Visa Lawyer Melbourne
              </Link>{" "}
              assists clients with partner visa PR matters, spouse visa-related
              concerns, relationship evidence, document review, and
              refusal-related advice where required.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. PR Refusals and Requests for Further Information [H2] */}
      <Section tone="warm" id="refusals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Adverse Outcomes & RFI</span>
            <h2>PR Refusals and Requests for Further Information</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A permanent residency refusal can affect future plans, work,
              family, and long-term stay in Australia. The next step depends on
              the reason for refusal and whether review options are available.
              Working with a{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              ensures prompt analysis of your statutory appeal window.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common PR refusal issues may include:
            </p>
            <ul className="points-list">
              {prRefusalIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If you have received a request for further information or a
              refusal decision, it is important to get advice before responding
              or reapplying.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Document Review for PR Applications [H2] */}
      <Section tone="white" id="document-review">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Evidentiary Rigour</span>
            <h2>Document Review for PR Applications</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Permanent residency applications are document-heavy. The documents
              should be accurate, consistent, and relevant to the visa pathway.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Depending on the matter, documents may include:
            </p>
            <ul className="points-list">
              {documentList.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              The exact documents depend on your PR pathway and personal
              circumstances.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Why Choose Bansal Lawyers for Permanent Residency Matters? [H2] */}
      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Experienced Melbourne Solicitors</span>
            <h2>Why Choose Bansal Lawyers for Permanent Residency Matters?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Permanent residency matters need careful review, realistic advice,
              and proper preparation. A weak application can lead to delays,
              requests for further information, or refusal.
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

      {/* 10. Speak With a Permanent Residency Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Permanent Residency Lawyer in Melbourne"
        text="If you are planning to apply for permanent residency, reviewing your PR options, responding to a request, or dealing with a refusal, Bansal Lawyers can help you understand your position."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Immigration Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["PR pathway assessment & criteria review", "Thorough document preparation", "Melbourne CBD & virtual consultations"]}
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
                  Full-scope migration and administrative law representation
                  across Australia.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Skilled Migration Lawyer Melbourne</h3>
                <p>
                  Subclass 189, 190, and 491 points-tested visas and skills
                  assessment advice.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/employer-sponsored-visa-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Employer Sponsored Visa Lawyer Melbourne</h3>
                <p>
                  Work sponsorship, nomination compliance, and Subclass 186 ENS
                  pathways.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Partner Visa Lawyer Melbourne</h3>
                <p>
                  De facto and spouse visa applications and permanent stage (Subclass 801/100) processing.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Visa Refusal Lawyer Melbourne</h3>
                <p>
                  Legal advice for addressing PR refusals and safeguarding your lawful status.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 11. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={prFaqs} />
      </Section>
    </>
  );
}
