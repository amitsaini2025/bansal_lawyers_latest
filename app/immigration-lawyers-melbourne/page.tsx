import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
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
    title: "ART reviews",
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
  "Explaining your immigration options in plain language",
  "Reviewing your visa history and documents",
  "Helping with refusals and cancellations",
  "Supporting review applications and evidence preparation",
  "Giving practical advice based on your deadlines and risks",
  "Handling sensitive immigration matters with care",
];

const immigrationFaqs = [
  {
    question: "Can you help with a visa refusal?",
    answer:
      "Yes. We review the refusal decision and explain your options. We help gather supporting evidence and advise on review rights where they're available.",
  },
  {
    question: "Do you assist with ART appeals?",
    answer:
      "Yes. We assist with ART reviews, often called appeals, for visa refusals and cancellations. We also help with other migration-related decisions that can be reviewed.",
  },
  {
    question: "Can you help with partner visa applications?",
    answer:
      "Yes. We prepare partner visa applications (often called spouse visas), including de facto relationship evidence and supporting documents.",
  },
  {
    question: "Do you help with student visa matters?",
    answer:
      "Yes. We help with student visa applications, refusals and requests from the Department, including the Genuine Student requirement.",
  },
  {
    question: "When should I contact an immigration lawyer?",
    answer:
      "As early as you can. That's especially true if you've received a refusal, a cancellation notice or a request for information, or if a review deadline is coming up.",
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

      {/* 1. Hero Section: Immigration Lawyers Melbourne [H1] */}
      <Hero
        title="Immigration Lawyers Melbourne"
        intro={
          <>
            <p>
              Immigration decisions can affect your family, your work, your studies, your business and your future in Australia. When a visa application, refusal, cancellation or review is involved, you need solid legal advice.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              At Bansal Lawyers, we&apos;re immigration lawyers in Melbourne. We help clients with immigration and migration law matters across Australia. We&apos;ll talk through your options, help you prepare the right documents and plan your next steps.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="immigration" />}
      />

      <TrustBar
        items={[
          "Collins St office and remote consultations",
          "Merits review and Administrative Review Tribunal (ART) experience",
          "Plain-English legal advice",
          "Prompt matter assessment",
          "Legal strategy built around your situation",
        ]}
      />

      {/* 2. Immigration Advice Based on Your Situation [H2] */}
      <Section tone="white">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Immigration Advice Based on Your Situation</h2>
          <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Every immigration matter is different. You might need help with a visa application. You might have had a refusal or a cancellation. Or you might have an ART review deadline or a request for information coming up.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our visa lawyers in Melbourne look at your background, documents, visa history and deadlines. Then we give you practical legal advice on your options.
          </p>
        </div>
      </Section>

      {/* 3. Immigration Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <SectionHeader
          title="Immigration Matters We Assist With"
          intro="As migration lawyers in Melbourne, we can help with:"
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
      </Section>

      {/* 4. Visa Refusals and Appeals [H2] */}
      <Section tone="white" id="refusals-and-appeals">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Merits Review & Tribunal Deadlines</span>
          <h2>Visa Refusals and Appeals</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A visa refusal is stressful, especially when you don&apos;t have long to respond or ask for a review. What you do next depends on the visa type, the reason for the refusal and whether you have review rights.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            As{" "}
            <Link
              href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              visa refusal lawyers in Melbourne
            </Link>
            , we help you go through the decision and the reasons the Department of Home Affairs (the Department) gave. We help you gather supporting evidence and respond through the right legal process. That includes asking the ART to review the decision, often called an appeal, where review is available. If you need someone to represent you at the tribunal, talk to one of our{" "}
            <Link
              href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              ART appeal lawyers in Melbourne
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
              <strong>Don&apos;t wait if your visa has been refused. Time limits for review can be strict.</strong>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                Most ART review applications have strict time limits set by law. They run from the date you&apos;re notified of the Department&apos;s decision.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Partner Visa and Family Migration [H2] */}
      <Section tone="warm" id="partner-visas">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Family Unity & Relationship Evidence</span>
          <h2>Partner Visa and Family Migration</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Partner visa matters need strong evidence and careful preparation. A weak application or missing information can cause delays or a refusal.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our{" "}
            <Link
              href="/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              partner visa lawyers in Melbourne
            </Link>{" "}
            help with partner visa applications (often called spouse visas), de facto relationship evidence, document preparation and responses to immigration concerns.
          </p>
        </div>
      </Section>

      {/* 6. Student Visa and Skilled Migration [H2] */}
      <Section tone="white" id="student-and-skilled">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Education & Career Pathways</span>
          <h2>Student Visa and Skilled Migration</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Students and skilled workers often need help with eligibility, documents, the Genuine Student requirement, work-related evidence, sponsorship pathways and long-term visa planning.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            As{" "}
            <Link
              href="/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              student visa lawyers
            </Link>{" "}
            and{" "}
            <Link
              href="/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              skilled migration lawyers in Melbourne
            </Link>
            , we help you understand the process before you submit or respond to a visa matter.
          </p>
        </div>
      </Section>

      {/* 7. Why Choose Our Immigration Lawyers? [H2] */}
      <Section tone="warm" id="why-choose">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Why Choose Our Immigration Lawyers?</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Immigration law is complicated, and small mistakes can cause big problems. We give you straightforward advice, check your documents carefully, and keep our guidance practical at every stage.
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
      </Section>

      {/* 8. Speak With Immigration Lawyers in Melbourne [H2] */}
      <CtaSection
        title="Speak With Immigration Lawyers in Melbourne"
        text="Need help with a visa application, refusal, cancellation, review or immigration advice? Our team can talk you through the next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        phone="0422 905 860"
        phoneLabel="Speak With Our Immigration Team"
        badges={[
          "Ready to talk about your visa matter? Get in touch today.",
          "Strictly confidential consultation",
          "Melbourne CBD & remote consultations",
        ]}
      />

      {/* 9. FAQs [H2] */}
      <Section tone="warm" id="faqs">
        <Faq
          items={immigrationFaqs}
          title="Frequently Asked Questions"
          subtitle="Quick answers to what people usually ask before they book."
          contactTitle="Need advice about your visa or a letter from the Department?"
          contactButtonLabel="Book a Confidential Consultation"
          contactHref="/contact"
        />
      </Section>
    </>
  );
}
