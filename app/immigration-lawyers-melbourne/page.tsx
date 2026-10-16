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
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Immigration Lawyers Melbourne | Visa Refusals, Appeals & Migration Law",
  description:
    "Immigration lawyers in Melbourne for visa refusals, cancellations, ART appeals, judicial review, character decisions, and citizenship refusals.",
  path: "/immigration-lawyers-melbourne",
  keywords: [
    "Immigration Lawyers Melbourne",
    "Migration Lawyers Melbourne",
    "Visa Lawyer Melbourne",
    "Visa Refusal Lawyer Melbourne",
    "ART Appeal Lawyer Melbourne",
    "Judicial Review Lawyer Melbourne",
    "Section 501 Character Lawyer",
    "Ministerial Intervention Lawyer Melbourne",
  ],
});

const immigrationMatters = [
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
    title: "Judicial review",
    href: "/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/",
  },
  {
    title: "Character and section 501",
    href: "/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne/",
  },
  {
    title: "Ministerial intervention",
    href: "/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne/",
  },
  {
    title: "Detention and removal",
    href: "/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne/",
  },
  {
    title: "Citizenship refusals",
    href: "/immigration-lawyers-melbourne/citizenship-lawyer-australia/",
  },
];

const approachPoints = [
  "Explaining refusal, cancellation, and review options in plain language",
  "Checking the decision record and the time limit",
  "ART appeals and judicial review",
  "Character refusals, section 501 cancellations, and revocation requests",
  "Ministerial intervention only after other remedies are assessed",
  "Urgent advice on detention and removal",
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
    question: "Do you lodge new visa applications?",
    answer:
      "No. New visa applications are handled separately. This practice acts when a decision has gone wrong: refusals, cancellations, tribunal appeals, court challenges, character matters, and citizenship refusals.",
  },
  {
    question: "Can you take a tribunal decision to court?",
    answer:
      "Yes. After the ART has decided a matter, we advise on judicial review in the Federal Circuit and Family Court, including whether there is jurisdictional error and what the filing deadline is.",
  },
  {
    question: "When should I contact an immigration lawyer?",
    answer:
      "As early as you can. That's especially true if you've received a refusal, a cancellation notice or a request for information, or if a review deadline is coming up.",
  },
];

export default function ImmigrationLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
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
              A visa refusal, cancellation, or tribunal decision can affect your family, your work, and your right to stay in Australia. When the decision has already been made, you need advice on review rights and court options.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers acts in visa refusals, cancellations, ART appeals, judicial review, character decisions, ministerial intervention, detention and removal, and citizenship refusals.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="immigration" turnstileSiteKey={turnstileSiteKey} />}
      />

      <TrustBar
        items={[
          "Collins Street office and remote consultations",
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
            The next step depends on the decision you have. It may be a refusal, a cancellation notice, an ART deadline, a character notice, or a tribunal decision that can only be challenged in court.
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

      <Section tone="warm" id="court-and-character">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Court and character</span>
          <h2>Judicial Review and Character Decisions</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Once the tribunal has decided a case, the remaining question is whether the decision was lawful. A court does not re-decide the visa. It looks for jurisdictional error.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our{" "}
            <Link
              href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              judicial review lawyers
            </Link>{" "}
            act in the Federal Circuit and Family Court. Character refusals and cancellations, including section 501, are handled by our{" "}
            <Link
              href="/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              section 501 lawyers
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section tone="white" id="intervention-and-detention">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">After the usual remedies</span>
          <h2>Ministerial Intervention, Detention and Removal</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A request to the Minister is considered only in limited circumstances, and usually after tribunal and court options have been assessed.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            If a person is detained or a removal date has been set, contact our{" "}
            <Link
              href="/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              detention and removal lawyers
            </Link>{" "}
            the same day. The ART time limit for a person in detention is 14 days, and the tribunal cannot extend it.
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
        text="If you have a refusal, a cancellation, a tribunal decision, or a detention notice, we can tell you what the deadline is and what can still be done."
        action={{ label: "Book a Consultation", href: "/contact" }}
        phone="1300 226 725"
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
