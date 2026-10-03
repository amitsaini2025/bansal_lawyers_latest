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
  title: "Immigration Lawyers Melbourne | Visa Refusals, Appeals & Migration Law",
  description:
    "Immigration Lawyers Melbourne for visa refusals, cancellations, ART appeals, partner, student and skilled visas. Book a consultation with Bansal Lawyers.",
  path: "/immigration-lawyers-melbourne",
  keywords: [
    "Immigration Lawyers Melbourne",
    "Migration Lawyers Melbourne",
    "Visa Lawyer Melbourne",
    "Visa Refusal Lawyer Melbourne",
    "ART Appeal Lawyer Melbourne",
    "Partner Visa Lawyer Melbourne",
    "Student Visa Lawyer Melbourne",
    "Skilled Migration Lawyer Melbourne",
  ],
});

const immigrationMatters = [
  {
    title: "Visa applications",
    href: "/immigration-lawyers-melbourne/visa-application-lawyer-melbourne/",
  },
  {
    title: "Visa refusals",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
  },
  {
    title: "Visa cancellations",
    href: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/",
  },
  {
    title: "ART appeals",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
  },
  {
    title: "Partner visas",
    href: "/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/",
  },
  {
    title: "Student visas",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
  },
  {
    title: "Skilled migration",
    href: "/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/",
  },
  {
    title: "Employer-sponsored visas",
    href: "/immigration-lawyers-melbourne/employer-sponsored-visa-lawyer-melbourne/",
  },
  {
    title: "Permanent residency",
    href: "/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/",
  },
  {
    title: "Citizenship matters",
    href: "/immigration-lawyers-melbourne/citizenship-lawyer-australia/",
  },
  {
    title: "Requests for further information",
    href: "/immigration-lawyers-melbourne/request-for-further-information-lawyer-melbourne/",
  },
  {
    title: "Immigration document review",
    href: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/",
  },
];

const approachPoints = [
  "Plain-language explanation of your immigration options",
  "Review of visa history and documents",
  "Assistance with refusal and cancellation matters",
  "Support with appeals and evidence preparation",
  "Practical advice based on deadlines and risk",
  "Professional handling of sensitive immigration matters",
];

const immigrationFaqs = [
  {
    question: "Can Bansal Lawyers help with a visa refusal?",
    answer:
      "Yes. We review the refusal decision, explain your options, help gather supporting evidence, and advise on appeal rights where they are available.",
  },
  {
    question: "Do you assist with ART appeals?",
    answer:
      "Yes. We assist with ART appeals for visa refusals and cancellations, and with other migration-related decisions that can be reviewed.",
  },
  {
    question: "Can you help with partner visa applications?",
    answer:
      "Yes. We prepare partner and spouse visa applications, including de facto relationship evidence and supporting documents.",
  },
  {
    question: "Do you help with student visa matters?",
    answer:
      "Yes. We assist with student visa applications, refusals, and requests from the Department, including the Genuine Student requirement.",
  },
  {
    question: "When should I contact an immigration lawyer?",
    answer:
      "As early as possible, especially if you have received a refusal, a cancellation notice, or a request for information, or if an appeal deadline is coming up.",
  },
];

export default function ImmigrationLawyersMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Immigration Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(immigrationFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Immigration Lawyers in Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Immigration Lawyers in Melbourne"
        intro={
          <>
            <p>
              Immigration matters can affect your family, work, study, business, and future in Australia. When a visa application, refusal, cancellation, or appeal is involved, clear legal advice is important.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers are immigration lawyers in Melbourne, assisting clients with a range of immigration and migration law matters across Australia. We help you understand your options, prepare the right documents, and take the next steps based on your situation.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With an Immigration Lawyer",
          href: "tel:+61422905860",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Merits Review & ART Experience",
          "Plain-English Legal Advice",
          "Prompt Matter Assessment",
        ]}
      />

      {/* 2. Immigration Advice Based on Your Situation [H2] */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Tailored Legal Strategy</span>
            <h2>Immigration Advice Based on Your Situation</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Every immigration matter is unique—whether you need visa assistance, face a refusal or cancellation, or have an upcoming appeal deadline or information request.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our visa lawyers in Melbourne review your background, documents, visa history, and deadlines to give you actionable legal advice tailored to your options.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Immigration Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Immigration Matters We Assist With"
            intro="As migration lawyers in Melbourne, Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {immigrationMatters.map((matter) => (
              <Link
                key={matter.title}
                href={matter.href}
                className="matter-item"
                title={`Explore ${matter.title}`}
              >
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
                <span>{matter.title}</span>
                <svg
                  className="matter-item__arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Visa Refusals and Appeals [H2] */}
      <Section tone="white" id="refusals-and-appeals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Merits Review & Tribunal Deadlines</span>
            <h2>Visa Refusals and Appeals</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A visa refusal can be stressful, especially when you have limited time to respond or appeal. The next step depends on the type of visa, the reason for refusal, and whether review rights are available.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              As{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>
              , we help clients review refusal decisions, understand the reasons given by the Department, prepare supporting evidence, and respond through the appropriate legal process, including ART appeals where review is available. If you need representation before the tribunal, consult an experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART Appeal Lawyer Melbourne
              </Link>
              .
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
                <strong>If your visa has been refused, do not delay. Appeal deadlines can be strict.</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  Most ART appeal applications must be lodged within strict statutory timeframes from the date of the Department&apos;s decision notification.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Partner Visa and Family Migration [H2] */}
      <Section tone="warm" id="partner-visas">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Family Unity & Relationship Evidence</span>
            <h2>Partner Visa and Family Migration</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Partner visa matters require strong evidence and careful preparation. A weak application or missing information can cause delays or refusal.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Partner Visa Lawyer Melbourne
              </Link>{" "}
              team assists clients with partner visa applications, spouse visa matters, de facto relationship evidence, document preparation, and responses to immigration concerns.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Student Visa and Skilled Migration [H2] */}
      <Section tone="white" id="student-and-skilled">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Education & Career Pathways</span>
            <h2>Student Visa and Skilled Migration</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Students and skilled workers often need guidance on eligibility, documents, Genuine Student requirements, work-related evidence, sponsorship pathways, and long-term visa planning.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Student Visa Lawyer Melbourne
              </Link>{" "}
              practitioners and skilled migration lawyers, we help clients understand the process clearly before submitting or responding to a visa matter.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Why Choose Bansal Lawyers for Immigration Matters? [H2] */}
      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Client Commitment</span>
            <h2>Why Choose Bansal Lawyers for Immigration Matters?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Immigration law can be complex, and small mistakes can create major issues. We provide straightforward advice, careful document review, and practical guidance at each stage of the matter.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {approachPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 8. Speak With Immigration Lawyers in Melbourne [H2] */}
      <CtaSection
        title="Speak With Immigration Lawyers in Melbourne"
        text="If you need help with a visa application, refusal, cancellation, appeal, or immigration advice, Bansal Lawyers can guide you through the next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Immigration Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={[
          "Strictly confidential visa advice",
          "Prompt response to urgent tribunal deadlines",
          "Melbourne CBD & virtual consultations",
        ]}
      />

      {/* 9. FAQs [H2] with [H3] question items */}
      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>FAQs</h2>
            <Faq items={immigrationFaqs} />
            <div
              style={{
                marginTop: "2.5rem",
                textAlign: "center",
                padding: "2rem",
                background: "var(--white)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <p style={{ margin: "0 0 1rem", color: "var(--ink-secondary)", fontSize: "0.98rem" }}>
                Need specific advice regarding your visa or Department correspondence?
              </p>
              <ButtonLink href="/contact" variant="primary">
                Book a Confidential Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
