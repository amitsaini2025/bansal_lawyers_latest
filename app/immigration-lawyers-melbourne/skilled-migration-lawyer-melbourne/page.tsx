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
  title: "Skilled Migration Lawyer Melbourne | Skilled Visa & PR Advice",
  description:
    "Bansal Lawyers assists with skilled migration advice, skilled visa pathways, PR options, skills assessment concerns, visa refusals and migration planning.",
  path: "/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne",
  keywords: [
    "Skilled Migration Lawyer Melbourne",
    "Skilled Visa Lawyer Melbourne",
    "Skilled Migration Australia",
    "PR Lawyer Melbourne",
    "Skilled Visa Australia",
    "Migration Lawyer Melbourne",
    "Points Tested Visa Lawyer",
    "Skills Assessment Lawyer",
  ],
});

const skilledMatters = [
  "Skilled visa advice",
  "Skilled migration planning",
  "Points-tested visa guidance",
  "Skills assessment concerns",
  "Occupation and experience review",
  "English requirement concerns",
  "State nomination advice",
  "Permanent residency pathway advice",
  "Graduate visa-related migration planning",
  "Skilled visa refusal matters",
  "Requests for further information",
  "Immigration document review",
];

const skillsAssessmentIssues = [
  "Unclear job duties",
  "Weak employment documents",
  "Qualification mismatch",
  "Limited experience evidence",
  "Incorrect occupation selection",
  "Gaps in employment history",
  "Inconsistent documents",
  "Missing employer letters or payslips",
];

const refusalIssues = [
  "Incorrect or unsupported points claims",
  "Skills assessment concerns",
  "Employment evidence issues",
  "English requirement concerns",
  "Health or character concerns",
  "Incomplete documents",
  "State nomination-related concerns",
  "Inconsistent information",
  "Failure to respond properly to a request",
];

const whyChoosePoints = [
  "Clear advice on skilled migration options",
  "Review of qualifications, occupation, and work history",
  "Guidance on skills assessment concerns",
  "Practical advice on points and evidence",
  "Support with requests for further information",
  "Advice on skilled visa refusal and appeal options",
  "Migration planning based on your circumstances",
];

const skilledFaqs = [
  {
    question: "Can Bansal Lawyers help with skilled migration advice?",
    answer:
      "Yes. Bansal Lawyers assists with skilled migration advice, skilled visa planning, skills assessment concerns, points-related issues, document review, and visa refusal matters.",
  },
  {
    question: "What is a skills assessment?",
    answer:
      "A skills assessment is a review by a relevant assessing authority to check whether your qualifications and work experience meet the requirements for a nominated occupation.",
  },
  {
    question: "Do all skilled visa applicants need a skills assessment?",
    answer:
      "Many skilled migration pathways require a skills assessment, but the requirement depends on the visa type, occupation, and applicant’s situation.",
  },
  {
    question: "Can you help with skilled visa refusals?",
    answer:
      "Yes. We can review the refusal letter, explain possible options, and assist with appeal or next-step advice where available.",
  },
  {
    question: "Can skilled migration lead to permanent residency?",
    answer:
      "Some skilled migration pathways may lead to permanent residency, depending on the visa type, eligibility, occupation, nomination options, and personal circumstances.",
  },
  {
    question: "Should I get legal advice before applying for a skilled visa?",
    answer:
      "Yes. Legal advice can help identify document gaps, eligibility concerns, unsupported points claims, and possible risks before lodging an application.",
  },
];

export default function SkilledMigrationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Skilled Migration Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(skilledFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Skilled Migration Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Skilled Migration Lawyer Melbourne"
        intro={
          <>
            <p>
              Skilled migration can be an important pathway for professionals who
              want to work, live, and build their future in Australia. The process
              can involve occupation lists, skills assessments, points, English
              requirements, work experience, state nomination, and visa
              eligibility.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists skilled workers, professionals, graduates,
              and visa applicants with skilled migration advice in Melbourne and
              across Australia. We help clients understand their options, review
              their documents, and plan the next step based on their
              circumstances. As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we guide clients through complex migration legislation.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Skilled Migration Lawyer",
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
          "Skills Assessment & Points Test Reviews",
          "GSM Subclass 189, 190 & 491 Advice",
          "Employer & State Nomination Strategic Pathways",
        ]}
      />

      {/* 2. Skilled Migration Advice Before You Apply [H2] */}
      <Section tone="white" id="advice-before-applying">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Migration Planning</span>
            <h2>Skilled Migration Advice Before You Apply</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A skilled visa application should be planned carefully before
              documents are submitted. Small mistakes in occupation selection,
              skills assessment, points claims, employment evidence, or visa
              history can affect the outcome.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before applying, it is important to understand:
            </p>
            <ul className="points-list">
              <li>Whether your occupation may be suitable</li>
              <li>Whether you need a skills assessment</li>
              <li>What documents may be required</li>
              <li>Whether your points claim is supported by evidence</li>
              <li>Whether state nomination may be relevant</li>
              <li>Whether previous visa issues could affect the application</li>
              <li>Whether another visa pathway may be more suitable</li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your background and help you understand
              the migration options available to you.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Skilled Migration Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Skilled Migration Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {skilledMatters.map((matter) => (
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
            Every skilled migration matter should be reviewed based on the
            applicant&apos;s qualifications, occupation, work history, English
            ability, visa history, and long-term goals.
          </p>
        </Container>
      </Section>

      {/* 4. Skills Assessment and Occupation Review [H2] */}
      <Section tone="white" id="skills-assessment">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Occupational Criteria</span>
            <h2>Skills Assessment and Occupation Review</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Many skilled migration pathways require a skills assessment from the
              relevant assessing authority. The requirements can vary depending
              on the occupation, qualifications, and work experience.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients by reviewing their background, identifying
              possible concerns, and advising on documents that may be needed
              for migration planning.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common issues may include:
            </p>
            <ul className="points-list">
              {skillsAssessmentIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              A skills assessment issue can affect the wider visa strategy, so it
              should be reviewed early.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Points-Tested Visa Concerns [H2] */}
      <Section tone="warm" id="points-tested">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Eligibility Matrix</span>
            <h2>Points-Tested Visa Concerns</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some skilled migration pathways involve a points-tested process.
              Points may be affected by age, English, qualifications, work
              experience, partner factors, nomination, and other requirements.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              It is important that every points claim is supported by proper
              evidence. A points claim that cannot be proven may create problems
              during the visa process.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers can review your documents and help you understand
              whether your claimed points appear properly supported.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Skilled Visa Refusals [H2] */}
      <Section tone="white" id="refusals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Overcoming Adverse Outcomes</span>
            <h2>Skilled Visa Refusals</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A skilled visa refusal can be stressful, especially when you have
              invested time and money into your migration pathway. Working with a{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              can help you evaluate the grounds and understand whether an appeal
              before the Administrative Review Tribunal with an{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART Appeal Lawyer Melbourne
              </Link>{" "}
              is viable.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common skilled visa refusal issues may involve:
            </p>
            <ul className="points-list">
              {refusalIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If your skilled visa has been refused, the refusal letter should be
              reviewed carefully before deciding whether to appeal, reapply, or
              consider another option.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Permanent Residency Planning [H2] */}
      <Section tone="warm" id="pr-planning">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Long-Term Settlement Pathways</span>
            <h2>Permanent Residency Planning</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Many skilled workers want a clear pathway to permanent residency.
              The right pathway depends on your occupation, qualifications, work
              experience, location, points score, employer options, and visa
              history.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For strategic long-term roadmap planning, consulting a dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Permanent Residency Lawyer Melbourne
              </Link>{" "}
              helps identify the most secure pathway toward permanent status.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients with skilled migration planning and help them
              understand which options may be worth considering based on their
              situation.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Skilled Migration Matters? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Rigorous Legal Scrutiny</span>
            <h2>Why Choose Bansal Lawyers for Skilled Migration Matters?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Skilled migration is document-heavy and detail-focused. The
              application should be prepared with proper evidence and a clear
              understanding of eligibility.
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
              We help clients understand what needs attention before taking the
              next step.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With a Skilled Migration Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Skilled Migration Lawyer in Melbourne"
        text="If you are planning a skilled visa application, reviewing PR options, preparing documents, or dealing with a skilled visa refusal, Bansal Lawyers can help you understand your options."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Skilled Migration Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Points test & skills assessment advice", "Subclass 189, 190 & 491 guidance", "Melbourne CBD & virtual consultations"]}
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
                  Comprehensive migration law advice for skilled individuals,
                  families, and businesses across Australia.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Visa Refusal Lawyer Melbourne</h3>
                <p>
                  Strategic advice for addressing application refusals and
                  preserving your legal status.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>ART Appeal Lawyer Melbourne</h3>
                <p>
                  Administrative Review Tribunal appeal representation for
                  refused skilled and employer visas.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Permanent Residency Lawyer Melbourne</h3>
                <p>
                  Comprehensive PR roadmap planning, eligibility audits, and
                  permanent visa lodgement.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={skilledFaqs} />
      </Section>
    </>
  );
}
