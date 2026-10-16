import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  Container,
  CtaSection,
  Faq,
  Hero,
  ProcessSteps,
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
  title: "Judicial Review of Visa Decisions: 35-Day Deadline, Process and Costs",
  description:
    "Challenging an ART or Department decision in the Federal Circuit Court or Federal Court? Understand the 35-day deadline, jurisdictional error, process, filing fees and costs risks. Advice from Bansal Lawyers.",
  path: "/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne",
  keywords: [
    "Judicial Review Visa Decisions",
    "Judicial Review Lawyer Melbourne",
    "35 day migration judicial review",
    "Jurisdictional Error Visa Refusal",
    "Federal Circuit Court Immigration",
    "Immigration Lawyer Melbourne",
  ],
});

const processSteps = [
  {
    title: "Obtain the decision",
    description:
      "Obtain the written decision and reasons promptly.",
  },
  {
    title: "Assess jurisdictional error",
    description:
      "Assess whether arguable jurisdictional error exists.",
  },
  {
    title: "File the application",
    description:
      "File an Originating Application (Migration Act) and supporting affidavit attaching the decision.",
  },
  {
    title: "Serve and appear",
    description:
      "Serve the documents on the Minister, attend directions hearings, file submissions and appear at the final hearing.",
  },
];

const judicialFaqs = [
  {
    question: "What is the deadline for judicial review of a migration decision?",
    answer:
      "35 days from the date of the decision. Extensions are possible but difficult to obtain.",
  },
  {
    question: "Does the court look at whether the decision was fair?",
    answer:
      "No. The court only examines legal (jurisdictional) error, not the merits of the case.",
  },
  {
    question: "What happens if I win judicial review?",
    answer:
      "The decision is usually set aside and remitted for reconsideration according to law.",
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
        title="Judicial Review of Migration Decisions in Australia"
        intro={
          <>
            <p>
              <strong>Judicial review</strong> is a challenge in the Federal
              Circuit and Family Court of Australia (Division 2) or the Federal
              Court of Australia to a migration decision on the ground of{" "}
              <strong>jurisdictional error</strong>. It is not a re-hearing of
              the merits. The court examines whether the decision-maker acted
              lawfully.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Common grounds include failure to consider a mandatory relevant
              consideration, denial of procedural fairness, legal
              unreasonableness, or asking the wrong question. If successful, the
              court usually quashes the decision and remits it for
              reconsideration. The court does not grant the visa itself.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Judicial Review Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Federal Circuit and Family Court",
          "35-day court time limits",
          "Jurisdictional error review",
          "Filing fees and costs advice",
        ]}
      />

      <Section tone="white" id="which-court">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Forum</span>
            <h2>Which Court Hears the Application?</h2>
            <ul className="points-list" style={{ marginTop: "1.25rem" }}>
              <li>
                Most cases are filed in the{" "}
                <strong>
                  Federal Circuit and Family Court of Australia (Division 2)
                </strong>
                .
              </li>
              <li>
                Certain personal decisions of the Minister (especially under{" "}
                <Link
                  href="/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne/"
                  style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
                >
                  section 501
                </Link>
                ) are heard in the <strong>Federal Court of Australia</strong>.
              </li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If the tribunal has not yet decided the matter, the usual path is
              an{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART appeal
              </Link>
              . Judicial review is the step after that decision, or where the
              statute sends the person to court rather than the tribunal.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="deadline">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Time limit</span>
            <h2>The Critical 35-Day Deadline</h2>
            <div className="deadline-alert-box" style={{ marginTop: "1.25rem" }}>
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <strong>35 days from the date of the migration decision</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  An application must be filed within <strong>35 days</strong> of
                  the date of the migration decision (section 477 of the Migration
                  Act and equivalent provisions). This is a strict jurisdictional
                  limit.
                </p>
              </div>
            </div>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              An extension of time is possible only if the court is satisfied it
              is necessary in the interests of the administration of justice. The
              applicant must explain the delay in the application. Extensions are
              not routinely granted.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="process">
        <Container>
          <SectionHeader
            eyebrow="How it works"
            title="Judicial Review Process"
            intro="Bansal Lawyers assesses grounds early and gives a clear costs estimate before any filing."
          />
          <ProcessSteps items={processSteps} />
          <p style={{ textAlign: "center", marginTop: "1.5rem", color: "var(--ink-secondary)", fontSize: "0.98rem" }}>
            After filing and hearing, await judgment. If successful, the decision
            is usually set aside and remitted for reconsideration according to
            law.
          </p>
        </Container>
      </Section>

      <Section tone="warm" id="costs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Fees & risk</span>
            <h2>Costs and Fees (as of 1 July 2026)</h2>
            <ul className="points-list" style={{ marginTop: "1.25rem" }}>
              <li>
                Filing fee: approximately <strong>$4,180</strong> (full) or{" "}
                <strong>$2,090</strong> (reduced fee on financial hardship
                grounds).
              </li>
              <li>Additional setting-down and hearing fees may apply.</li>
              <li>
                Fee waivers or reductions are available in cases of financial
                hardship or for persons in detention.
              </li>
              <li>
                If unsuccessful, the court will ordinarily order the applicant to
                pay a substantial portion of the Minister&apos;s legal costs.
              </li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Professional fees are separate and vary with complexity. Bansal
              Lawyers provides an early assessment of grounds and a clear costs
              estimate before any filing. Where tribunal and court options are
              finished,{" "}
              <Link
                href="/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Ministerial Intervention
              </Link>{" "}
              may still need to be considered.
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
        badges={["35-day deadline", "Decision record review", "Melbourne CBD consultations"]}
      />

      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Related work</span>
            <h2 style={{ marginBottom: "1.5rem" }}>Related immigration legal services</h2>
            <div className="practice-areas-grid">
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>ART Review</h3>
                <p>Merits review in the Administrative Review Tribunal before a court challenge.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Section 501 Character</h3>
                <p>Character refusals and cancellations that may proceed to Federal Court review.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Ministerial Intervention</h3>
                <p>Requests to the Minister after tribunal and court options have been considered.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
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
