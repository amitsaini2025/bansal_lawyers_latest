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
  title: "Visa Refusal Lawyer Melbourne | ART Appeals & Review Rights",
  description:
    "Visa refusal lawyer in Melbourne. Bansal Lawyers helps with visa refusal letters, ART appeals, evidence preparation and migration reviews. Book a consultation.",
  path: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne",
  keywords: [
    "Visa Refusal Lawyer Melbourne",
    "ART Appeal Lawyer Melbourne",
    "Administrative Review Tribunal Visa Appeal",
    "Visa Cancellation Lawyer Melbourne",
    "Immigration Appeal Melbourne",
    "Partner Visa Refusal Melbourne",
    "Student Visa Refusal Appeal",
    "Visa Refusal Rights Australia",
  ],
});

const commonRefusalReasons = [
  "Insufficient supporting evidence",
  "Concerns about relationship genuineness",
  "Genuine Student requirement issues",
  "Financial document concerns",
  "Character or health-related concerns",
  "Incorrect or incomplete information",
  "Failure to meet visa criteria",
  "Concerns about work, study, or migration history",
  "Missed requests for further information",
  "Problems with sponsor or employer documents",
];

const howWeHelpPoints = [
  "Reviewing the visa refusal letter",
  "Explaining the reasons for refusal",
  "Checking appeal rights and deadlines",
  "Advising on ART review options",
  "Preparing supporting evidence",
  "Drafting submissions where required",
  "Reviewing previous visa documents",
  "Advising on fresh visa application options",
  "Helping clients understand risks and next steps",
];

const refusalMatters = [
  "Partner visa refusals",
  "Student visa refusals",
  "Visitor visa refusals",
  "Skilled visa refusals",
  "Employer-sponsored visa refusals",
  "Family visa refusals",
  "Permanent residency refusals",
  "Citizenship-related concerns",
  "Visa cancellation-related issues",
  "ART appeal matters",
];

const whyChoosePoints = [
  "Clear advice based on your refusal letter",
  "Review of documents and visa history",
  "Explanation of appeal options and deadlines",
  "Practical guidance on evidence preparation",
  "Support with ART appeal matters",
  "Careful handling of sensitive immigration issues",
];

const refusalFaqs = [
  {
    question: "What should I do if my visa is refused?",
    answer:
      "You should read the refusal letter carefully and get legal advice as soon as possible. The letter may explain the reasons for refusal and whether you have review rights.",
  },
  {
    question: "Can I appeal a visa refusal in Australia?",
    answer:
      "Some visa refusals can be reviewed through the Administrative Review Tribunal, but not every refusal has the same review rights. It depends on the visa type and your situation.",
  },
  {
    question: "How long do I have to appeal a visa refusal?",
    answer:
      "The deadline depends on the type of visa and the decision. You should get advice quickly because appeal deadlines can be strict.",
  },
  {
    question: "Can Bansal Lawyers help with ART appeals?",
    answer:
      "Yes. Bansal Lawyers assists with ART appeal matters, evidence preparation, submissions, and guidance through the review process.",
  },
  {
    question: "Can I apply again after a visa refusal?",
    answer:
      "In some cases, a fresh application may be possible. In other cases, an appeal or review may be more suitable. The right option depends on the refusal reason and your circumstances.",
  },
];

export default function VisaRefusalLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne/",
    },
    { label: "Visa Refusal Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(refusalFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Visa Refusal Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Visa Refusal Lawyer Melbourne"
        intro={
          <>
            <p>
              Receiving a visa refusal can be stressful, especially when your family, work, study, or future in Australia is affected. The next step depends on the type of visa, the reason for refusal, and whether you have review rights.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with visa refusal matters in Melbourne and across Australia. As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we help you understand the refusal decision, review your options, prepare supporting evidence, and take the next step within the required time frame.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact/" }}
        secondaryAction={{
          label: "Speak With a Visa Refusal Lawyer",
          href: "tel:+61422905860",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Administrative Review Tribunal (ART) Practice",
          "Urgent Refusal Letter Review",
          "Prompt Matter Assessment",
        ]}
      />

      {/* 2. Get Advice Before the Deadline Passes [H2] */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Statutory Time Limits</span>
            <h2>Get Advice Before the Deadline Passes</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Visa refusal matters often have strict deadlines. If you miss the deadline to appeal or respond, your options may become limited.
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
                <strong>Urgent Appeal Deadlines Apply</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  Most ART merits review applications must be lodged within strictly enforced statutory time limits from the date of the Department&apos;s decision letter. Extensions of time are rarely granted.
                </p>
              </div>
            </div>

            <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.75rem", marginBottom: "0.75rem" }}>
              Before taking action, it is important to understand:
            </p>
            <ul className="points-list">
              <li>Why the visa was refused</li>
              <li>Whether you have a right to appeal</li>
              <li>What evidence may be needed</li>
              <li>What mistakes need to be addressed</li>
              <li>What deadline applies to your matter</li>
              <li>Whether a fresh application or review is more suitable</li>
            </ul>

            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your refusal letter and explain the available legal options based on your situation.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Common Reasons for Visa Refusal [H2] */}
      <Section tone="warm" id="reasons">
        <Container>
          <SectionHeader
            eyebrow="Key Factors"
            title="Common Reasons for Visa Refusal"
            intro="A visa may be refused for many reasons. Some refusals happen because documents were missing. Others may involve eligibility concerns, relationship evidence, financial documents, character issues, study intentions, or information provided to the Department."
          />
          <div className="matters-grid">
            {commonRefusalReasons.map((reason) => (
              <div key={reason} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{reason}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--ink-secondary)", fontSize: "1rem" }}>
            The reason for refusal matters because it decides how the response or appeal should be prepared.
          </p>
        </Container>
      </Section>

      {/* 4. How Bansal Lawyers Can Help [H2] */}
      <Section tone="white" id="how-we-help">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Legal Support</span>
            <h2>How Bansal Lawyers Can Help</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              We assist clients by reviewing the refusal decision, explaining the legal issues, and helping prepare the next step.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Our visa refusal support may include:
            </p>
            <ul className="points-list">
              {howWeHelpPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Every refusal matter is different, so the advice should be based on the facts and documents of your case.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. ART Appeals for Visa Refusals [H2] */}
      <Section tone="warm" id="art-appeals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Merits Review</span>
            <h2>ART Appeals for Visa Refusals</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In some visa refusal matters, you may be able to apply for review through the Administrative Review Tribunal. If your matter is eligible for review, consulting an experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART Appeal Lawyer Melbourne
              </Link>{" "}
              ensures your appeal is lodged before strict cutoff deadlines.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If an ART appeal is available, preparation is important. You may need strong documents, clear explanations, and proper evidence to address the reasons for refusal.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with ART appeal preparation, supporting documents, written submissions, and legal guidance through the review process.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Visa Refusal Matters We Assist With [H2] */}
      <Section tone="white" id="matters-assisted">
        <Container>
          <SectionHeader
            eyebrow="Visa Categories"
            title="Visa Refusal Matters We Assist With"
            intro="Bansal Lawyers can assist with refusal matters involving:"
          />
          <div className="matters-grid">
            {refusalMatters.map((matter) => (
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
            Whether dealing with a spouse visa challenge alongside a{" "}
            <Link
              href="/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
            >
              Partner Visa Lawyer Melbourne
            </Link>
            , or addressing Genuine Student criteria with a{" "}
            <Link
              href="/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
            >
              Student Visa Lawyer Melbourne
            </Link>
            , get advice before deciding what to do next.
          </p>
        </Container>
      </Section>

      {/* 7. Why Choose Bansal Lawyers for Visa Refusal Matters? [H2] */}
      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Dedicated Representation</span>
            <h2>Why Choose Bansal Lawyers for Visa Refusal Matters?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Visa refusal matters need careful review and timely action. A general response is not enough. The reasons for refusal must be addressed properly with relevant evidence.
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
              We focus on helping you understand your position clearly before taking the next step.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Speak With a Visa Refusal Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Visa Refusal Lawyer in Melbourne"
        text="If your visa has been refused, do not wait until the deadline is close. Early advice can help you understand whether you can appeal, what documents may be needed, and what risks should be addressed."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Visa Refusal Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Urgent refusal notice assessment", "Review rights & ART appeal preparation", "Melbourne CBD & virtual consultations"]}
      />

      {/* 9. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Faq items={refusalFaqs} />
      </Section>
    </>
  );
}
