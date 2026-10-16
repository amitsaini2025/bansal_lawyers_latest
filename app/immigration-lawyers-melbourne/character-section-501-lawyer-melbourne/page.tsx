import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
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
  title: "Section 501 Character Cancellation: 28-Day Deadline, Process & Costs",
  description:
    "Visa cancelled or refused under section 501? Understand the character test, mandatory cancellation, 28-day revocation deadline, ART options and costs. Urgent advice from Bansal Lawyers.",
  path: "/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne",
  keywords: [
    "Section 501 Character Cancellation",
    "Section 501 Lawyer Melbourne",
    "Mandatory Visa Cancellation",
    "Revocation of Visa Cancellation",
    "28 day section 501CA deadline",
    "Immigration Lawyer Melbourne",
  ],
});

const documentsToInclude = [
  "Detailed written submissions",
  "Evidence of rehabilitation and programs completed",
  "Character references and employment evidence",
  "Family and community ties (especially Australian citizen or permanent resident partners and children)",
  "Medical or psychological reports",
  "Statutory declarations",
];

const characterFaqs = [
  {
    question:
      "How long do I have to respond to a mandatory section 501 cancellation?",
    answer:
      "Generally 28 days from notification for a revocation request under section 501CA.",
  },
  {
    question: "Can the 28-day deadline be extended?",
    answer:
      "No. It is fixed by the Regulations and is treated strictly.",
  },
  {
    question: "What happens if revocation is refused?",
    answer:
      "ART review may be available in some cases. Personal Ministerial decisions usually proceed to judicial review.",
  },
];

export default function CharacterSection501LawyerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Immigration Lawyers Melbourne", href: "/immigration-lawyers-melbourne" },
    { label: "Character and Section 501" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(characterFaqs)} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Character decisions · Melbourne CBD"
        title="Section 501 Character Test – Visa Cancellation and Refusal"
        intro={
          <>
            <p>
              Section 501 of the <em>Migration Act 1958</em> allows the refusal
              or cancellation of a visa where a person does not pass the{" "}
              <strong>character test</strong>. A person fails the character test
              if they have a substantial criminal record (including a sentence of
              12 months or more), a conviction for a sexually based offence
              involving a child, or meet other grounds such as association or
              risk of future offending.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers advises on section 501 refusals, cancellations, and
              section 501CA revocation requests under strict deadlines.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Character Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Section 501 refusals and cancellations",
          "28-day revocation deadline",
          "Direction submissions & evidence",
          "Tribunal and court review",
        ]}
      />

      <Section tone="white" id="mandatory-vs-discretionary">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Cancellation types</span>
            <h2>Mandatory vs Discretionary Cancellation</h2>
            <ul className="points-list" style={{ marginTop: "1.25rem" }}>
              <li>
                <strong>Mandatory cancellation (section 501(3A))</strong>: Applies
                when a person is serving a full-time custodial sentence and has a
                substantial criminal record (or a relevant child sex offence).
                There is no discretion at the cancellation stage.
              </li>
              <li>
                <strong>Discretionary cancellation or refusal</strong>: The
                Department usually issues a natural justice letter before making a
                decision.
              </li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If the visa has already been cancelled for another reason, start
              with our{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                visa cancellation lawyers
              </Link>
              . Section 501 is the specific path for character.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="revocation">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Section 501CA</span>
            <h2>Section 501CA Revocation Process (Mandatory Cancellation)</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              After mandatory cancellation, the person is invited to make
              representations seeking revocation under section 501CA.
              Representations must address whether the person passes the
              character test or whether there is another reason to revoke, having
              regard to the relevant Ministerial Direction.
            </p>
            <div className="deadline-alert-box" style={{ marginTop: "1.25rem" }}>
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <strong>Critical deadline: 28 days</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  Representations must generally be made within{" "}
                  <strong>28 days</strong> of the day the person is taken to have
                  received the notice (Migration Regulations reg 2.52). This
                  period is strict and cannot be extended by the Department.
                </p>
              </div>
            </div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Where ART review is available for onshore character decisions, the
              deadline is often only <strong>9 days</strong> from notification.
              See our{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART review
              </Link>{" "}
              page for tribunal time limits.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="documents">
        <Container>
          <SectionHeader
            eyebrow="Evidence"
            title="Documents to Include"
            intro="Strong representations typically include:"
          />
          <div className="matters-grid">
            {documentsToInclude.map((doc) => (
              <div key={doc} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="costs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Fees</span>
            <h2>Costs</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              There is no fee for a section 501CA revocation request. ART
              application fees for character matters are generally lower than
              ordinary migration reviews (confirm the current fee on the ART
              website). Professional fees are higher than standard visa work due
              to complexity and tight deadlines. Court fees apply if{" "}
              <Link
                href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                judicial review
              </Link>{" "}
              is required.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              After an adverse ART outcome in a character matter,{" "}
              <Link
                href="/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Ministerial Intervention under section 501J
              </Link>{" "}
              may also need to be assessed.
            </p>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Contact Bansal Lawyers"
        text="These pathways involve strict deadlines and technical legal requirements. Early advice significantly improves available options. Contact Bansal Lawyers for an assessment of your circumstances."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call the firm", href: "tel:+61422905860" }}
        phone="1300 226 725"
        phoneLabel="Immigration solicitors"
        badges={["Section 501", "28-day revocation", "Melbourne CBD consultations"]}
      />

      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Related work</span>
            <h2 style={{ marginBottom: "1.5rem" }}>Related immigration legal services</h2>
            <div className="practice-areas-grid">
              <Link
                href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Judicial Review</h3>
                <p>Court challenges where the character decision is affected by legal error.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Ministerial Intervention (s501J)</h3>
                <p>Requests to the Minister in character matters after an ART decision.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>ART Review</h3>
                <p>Merits review where the character decision can be taken to the tribunal.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Detention and Removal</h3>
                <p>Urgent advice if cancellation has led to detention or a removal pathway.</p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="faqs">
        <Faq items={characterFaqs} />
      </Section>
    </>
  );
}
