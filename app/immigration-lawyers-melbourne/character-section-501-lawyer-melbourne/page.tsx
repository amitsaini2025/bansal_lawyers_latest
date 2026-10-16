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
  title: "Section 501 Character Lawyer Melbourne | Visa Refusal & Cancellation",
  description:
    "Bansal Lawyers advises on section 501 character refusals and cancellations, including mandatory cancellation and applications to revoke a cancellation.",
  path: "/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne",
  keywords: [
    "Section 501 Lawyer Melbourne",
    "Character Cancellation Lawyer",
    "Mandatory Visa Cancellation",
    "Revocation of Visa Cancellation",
    "Character Refusal Immigration",
    "Immigration Lawyer Melbourne",
  ],
});

const characterMatters = [
  "Notice of intention to consider refusal or cancellation on character grounds",
  "Section 501 visa refusals",
  "Section 501 visa cancellations",
  "Mandatory cancellation under section 501(3A)",
  "Applications to revoke a mandatory cancellation under section 501CA",
  "Direction 110 character considerations, including protection of the Australian community and family ties",
  "ART review of a character decision, where review is available",
  "Judicial review of a character decision affected by legal error",
];

const characterFaqs = [
  {
    question: "What is a section 501 character cancellation?",
    answer:
      "Section 501 of the Migration Act lets the Minister or a delegate refuse or cancel a visa if the person does not pass the character test. A substantial criminal record, including a sentence of 12 months or more, is a common reason the character test is not passed.",
  },
  {
    question: "What is mandatory cancellation?",
    answer:
      "Some visas must be cancelled when the person is serving a full-time sentence and has a substantial criminal record of the kind set out in section 501(3A). The person can then ask for that cancellation to be revoked. The request has a strict time limit.",
  },
  {
    question: "How long do I have to respond?",
    answer:
      "The notice states the deadline. Character matters often allow less time than an ordinary visa review, and some reviews must be lodged within 9 days. Read the notice the day you receive it and get advice before the date passes.",
  },
  {
    question: "Can the decision be reviewed?",
    answer:
      "Some character decisions can be reviewed by the Administrative Review Tribunal. Decisions made personally by the Minister are often not reviewable on the merits and may only be challengeable in court for legal error. The notice tells you which path applies.",
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
        title="Character and Section 501 Lawyer Melbourne"
        intro={
          <>
            <p>
              A character refusal or cancellation can end a visa even where the
              person has lived in Australia for many years. The notice is often
              short, and the response has to deal with risk, family, and the
              person&apos;s ties to Australia.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers advises on section 501 refusals, cancellations, and
              requests to revoke a mandatory cancellation. We also act where the
              decision can be reviewed by the tribunal or challenged in court.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Character Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Section 501 refusals and cancellations",
          "Revocation of mandatory cancellation",
          "Direction 110 submissions",
          "Tribunal and court review",
        ]}
      />

      <Section tone="white" id="what-the-notice-means">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">The notice</span>
            <h2>What a character notice requires</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The Department or the Minister must be answered on the issues in
              the notice. A general explanation of the offending is not enough.
              The response needs the sentencing remarks, evidence of
              rehabilitation, and the effect of removal on family members in
              Australia.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If the visa has already been cancelled for another reason, start
              with our{" "}
              <Link href="/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/" style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}>
                visa cancellation lawyers
              </Link>
              . Section 501 is the specific path for character.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader eyebrow="Character work" title="Character matters we act in" intro="Bansal Lawyers can advise on:" />
          <div className="matters-grid">
            {characterMatters.map((matter) => (
              <div key={matter} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{matter}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection
        title="If you have a character notice, act on the date in the letter"
        text="Send the notice, the sentencing remarks, and the date you were notified. We will tell you whether the next step is a submission, a revocation request, a tribunal review, or a court challenge."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call the firm", href: "tel:+61422905860" }}
        phone="1300 226 725"
        phoneLabel="Immigration solicitors"
        badges={["Section 501", "Revocation requests", "Melbourne CBD consultations"]}
      />

      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Related work</span>
            <h2 style={{ marginBottom: "1.5rem" }}>Related immigration legal services</h2>
            <div className="practice-areas-grid">
              <Link href="/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/" className="practice-card" style={{ textDecoration: "none" }}>
                <h3>Visa Cancellations</h3>
                <p>NOICC responses and cancellations that are not made on character grounds.</p>
              </Link>
              <Link href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/" className="practice-card" style={{ textDecoration: "none" }}>
                <h3>ART Appeals</h3>
                <p>Merits review where the character decision can be taken to the tribunal.</p>
              </Link>
              <Link href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/" className="practice-card" style={{ textDecoration: "none" }}>
                <h3>Judicial Review</h3>
                <p>Court challenges where the character decision is affected by legal error.</p>
              </Link>
              <Link href="/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne/" className="practice-card" style={{ textDecoration: "none" }}>
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
