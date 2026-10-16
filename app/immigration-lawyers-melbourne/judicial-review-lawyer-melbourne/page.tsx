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
  title: "Judicial Review Lawyer Melbourne | Migration Court Challenges",
  description:
    "Bansal Lawyers acts in judicial review of migration decisions in the Federal Circuit and Family Court and the Federal Court, including jurisdictional error after an ART decision.",
  path: "/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne",
  keywords: [
    "Judicial Review Lawyer Melbourne",
    "Migration Judicial Review",
    "Federal Circuit and Family Court Immigration",
    "Jurisdictional Error Visa Refusal",
    "ART Decision Court Challenge",
    "Immigration Lawyer Melbourne",
  ],
});

const reviewMatters = [
  "Judicial review of an ART migration decision",
  "Challenges to visa refusals and cancellations after tribunal review",
  "Jurisdictional error, including a failure to consider a claim or evidence",
  "Procedural fairness and apprehended bias",
  "Unreasonableness and legal error in the tribunal's reasons",
  "Urgent applications where a person faces removal",
  "Appeals from the Federal Circuit and Family Court to the Federal Court",
  "Advice on whether a court challenge is available after merits review",
];

const judicialFaqs = [
  {
    question: "What is judicial review of a migration decision?",
    answer:
      "Judicial review asks a court whether the decision was made lawfully. The court does not rehear the visa case or substitute its own view of the facts. It looks for legal error, such as jurisdictional error or a denial of procedural fairness.",
  },
  {
    question: "When can a tribunal decision be taken to court?",
    answer:
      "A person can usually apply to the Federal Circuit and Family Court of Australia after the Administrative Review Tribunal has decided a migration or protection review. The time limit is short, often 35 days from the tribunal decision, so the decision record should be checked quickly.",
  },
  {
    question: "Does a successful judicial review grant the visa?",
    answer:
      "No. If the court finds legal error, it usually sets the decision aside and sends the matter back to be decided again according to law. The visa can still be refused or cancelled on a lawful reconsideration.",
  },
  {
    question: "Can Bansal Lawyers act if the ART has already affirmed the refusal?",
    answer:
      "Yes. Once merits review is finished, the remaining question is whether the tribunal's decision is affected by jurisdictional error. We review the reasons, the hearing, and the material that was before the tribunal.",
  },
];

export default function JudicialReviewLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Immigration Lawyers Melbourne", href: "/immigration-lawyers-melbourne" },
    { label: "Judicial Review Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(judicialFaqs)} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Federal Court · Melbourne CBD"
        title="Judicial Review Lawyer Melbourne"
        intro={
          <>
            <p>
              When the Administrative Review Tribunal has decided a visa
              refusal or cancellation, the next step is not another merits
              hearing. It is a court challenge based on legal error.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers acts in judicial review of migration decisions in
              the Federal Circuit and Family Court of Australia and, where
              appropriate, the Federal Court. We read the decision, identify
              whether there is jurisdictional error, and advise on the time
              limit before an application is filed.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Judicial Review Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Federal Circuit and Family Court",
          "Jurisdictional error review",
          "35-day court time limits",
          "Melbourne CBD and remote conferences",
        ]}
      />

      <Section tone="white" id="when-court">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">After the tribunal</span>
            <h2>When a migration decision can go to court</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The court does not decide whether you should have been granted the
              visa. It decides whether the decision-maker acted within the law.
              That includes whether the tribunal considered the claims that were
              made, gave a fair hearing, and applied the correct legal test.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If the tribunal has not yet decided the matter, the usual path is
              an{" "}
              <Link href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/" style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}>
                ART appeal
              </Link>
              . Judicial review is the step after that decision, or where the
              statute sends the person to court rather than the tribunal.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Court work"
            title="Judicial review matters we act in"
            intro="Bansal Lawyers can advise on:"
          />
          <div className="matters-grid">
            {reviewMatters.map((matter) => (
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
        title="Ask whether the decision can be challenged"
        text="Bring the tribunal or Department decision and the date you were notified. We will tell you whether a court application is realistic and what the deadline is."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call the firm", href: "tel:+61422905860" }}
        phone="1300 226 725"
        phoneLabel="Immigration solicitors"
        badges={["Decision record review", "Court time limits", "Melbourne CBD consultations"]}
      />

      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Related work</span>
            <h2 style={{ marginBottom: "1.5rem" }}>Related immigration legal services</h2>
            <div className="practice-areas-grid">
              <Link href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/" className="practice-card" style={{ textDecoration: "none" }}>
                <h3>ART Appeals</h3>
                <p>Merits review in the Administrative Review Tribunal before a court challenge is considered.</p>
              </Link>
              <Link href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/" className="practice-card" style={{ textDecoration: "none" }}>
                <h3>Visa Refusals</h3>
                <p>Advice on the refusal decision, review rights, and the next lawful step.</p>
              </Link>
              <Link href="/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne/" className="practice-card" style={{ textDecoration: "none" }}>
                <h3>Ministerial Intervention</h3>
                <p>Requests to the Minister after tribunal and court options have been considered.</p>
              </Link>
              <Link href="/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne/" className="practice-card" style={{ textDecoration: "none" }}>
                <h3>Detention and Removal</h3>
                <p>Urgent advice where a person is detained or facing removal from Australia.</p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="faqs">
        <Faq items={judicialFaqs} />
      </Section>
    </>
  );
}
