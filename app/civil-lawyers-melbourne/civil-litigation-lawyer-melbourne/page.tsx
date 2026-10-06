import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  Faq,
  Hero,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createFaqSchema, createLegalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Civil Litigation Lawyer Melbourne | Civil Disputes & Court Advice",
  description:
    "Bansal Lawyers assists with civil litigation advice, court-related civil disputes, legal notices, document preparation and dispute resolution in Melbourne.",
  path: "/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne",
  keywords: [
    "Civil Litigation Lawyer Melbourne",
    "Civil Litigation Lawyers Melbourne",
    "Civil Lawyers Melbourne",
    "Civil Court Lawyer Melbourne",
    "Civil Dispute Lawyer Melbourne",
    "Litigation Lawyer Melbourne",
  ],
});

const litigationMatters = [
  "Magistrates' Court of Victoria civil claims (up to $100,000)",
  "County Court of Victoria commercial and general civil proceedings",
  "Supreme Court of Victoria complex civil and commercial litigation",
  "VCAT Civil Claims, Building and Property, and Tenancy List hearings",
  "Breach of contract, commercial trade, and financial debt litigation",
  "Commercial lease, landlord, tenant, and property recovery proceedings",
  "Partnership, director duty, and shareholder dispute litigation",
  "Urgent interlocutory court injunctions and asset-freezing orders",
  "Court-ordered mediation representation and settlement conferences",
  "Drafting Statements of Claim, Defences, and Counterclaims",
  "Evidence compilation, discovery management, and witness affidavits",
  "Post-judgment enforcement, warrants of seizure, and attachment of earnings",
];

const litigationStages = [
  "Conducting pre-litigation dispute assessments and evidence evaluations",
  "Issuing compliant letters of demand and exploring early ADR options",
  "Formulating case strategy, litigation budgets, and procedural roadmaps",
  "Drafting and filing originating claims, pleadings, and court summonses",
  "Managing documentary discovery, witness subpoenas, and expert reports",
  "Representing clients at court-ordered mediations and directions hearings",
  "Instructing counsel and conducting courtroom advocacy at trial",
  "Enforcing court orders or negotiating binding Deeds of Settlement",
];

const civilLitigationFaqs = [
  {
    question: "What is civil litigation in Victoria?",
    answer:
      "Civil litigation is the legal process of resolving non-criminal disputes through the court or tribunal system. It typically involves one party (the plaintiff or applicant) seeking a legal remedy—such as financial damages, specific performance, or an injunction—against another party (the defendant or respondent) for a breach of contract, unpaid debt, property issue, or other civil wrong.",
  },
  {
    question: "Why should litigation be considered a last resort?",
    answer:
      "Civil litigation involves significant financial costs, management distraction, emotional stress, and strict court timetables. Furthermore, Victorian courts under the Civil Procedure Act 2010 mandate that parties must attempt genuine dispute resolution before entering trial. Litigation is generally pursued when negotiated settlements or mediation fail to deliver a reasonable outcome.",
  },
  {
    question: "How do legal costs work in Victorian civil litigation?",
    answer:
      "In Victorian courts, the general rule is that 'costs follow the event'—meaning the unsuccessful party is usually ordered to pay a portion of the successful party's legal costs (typically on an ordinary basis, which covers approximately 60% to 75% of actual costs). In VCAT, however, the default starting rule is that each party bears their own costs, subject to specific statutory exceptions.",
  },
  {
    question: "What are the timeframes for a civil court case in Melbourne?",
    answer:
      "Timeframes vary depending on the jurisdiction and complexity. VCAT matters can take anywhere from a few months to over a year. Magistrates' Court civil claims often take 6 to 12 months to reach a hearing. County Court and Supreme Court litigation typically takes 12 to 24 months, encompassing pleadings, discovery, mediation, and trial preparation.",
  },
  {
    question: "Can a case be settled after court proceedings have already started?",
    answer:
      "Yes. Most litigated cases settle before trial, often during court-ordered mediation or after the exchange of witness evidence. Settlements reached during litigation are formally recorded in Consent Orders or Deeds of Settlement and Release, discontinuing the court action and avoiding the uncertainty of a judicial ruling.",
  },
  {
    question: "What is the Overarching Obligations requirement under Victorian civil law?",
    answer:
      "Under the Civil Procedure Act 2010 (Vic), litigants and lawyers owe overarching statutory duties to the court. These include obligations to act honestly, maintain claims with a proper basis, narrow the issues in dispute, cooperate, and take reasonable steps to resolve the matter early to minimise delay and costs.",
  },
];

export default function CivilLitigationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Civil Litigation Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(civilLitigationFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Civil Litigation Lawyer Melbourne"
        intro={
          <>
            <p>
              Navigating Victorian courts or tribunals requires rigorous legal preparation, strategic evidence
              management, and realistic risk assessment.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides robust representation and strategic counsel for individuals and businesses
              involved in civil disputes, court proceedings, and VCAT hearings across Melbourne.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Civil Litigation Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Consultations",
          "VCAT, Magistrates', County & Supreme Court",
          "Strategic Pre-Court Case Assessment",
          "Experienced Courtroom Representation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Court Dispute Counsel</span>
            <h2>Strategic Civil Litigation Services in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              When commercial negotiations break down, informal attempts fail, or you are served with formal
              court process, engaging experienced litigation counsel is critical. Civil litigation is governed
              by complex court rules, strict procedural timetables, and significant cost rules.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, we combine assertive courtroom representation with clear-eyed commercial advice.
              We ensure our clients understand their prospects of success, potential cost liabilities, and
              practical alternatives at every stage of the dispute.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Explore our core practice overview at our{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> page, or learn about
              pre-litigation dispute strategies at our{" "}
              <Link href="/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/">
                Civil Dispute Lawyer Melbourne
              </Link>{" "}
              section.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Litigation Jurisdictions"
            title="Civil Litigation Matters We Handle"
            intro="We represent plaintiffs and defendants across Victorian civil tribunals and courts:"
          />
          <div className="matters-grid">
            {litigationMatters.map((item) => (
              <div key={item} className="matter-item">
                <svg className="matter-item__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ maxWidth: "52rem", margin: "2rem auto 0", lineHeight: "1.75", color: "var(--ink-secondary)" }}>
            Every litigation matter is assessed against the evidentiary record, legal causes of action, court
            costs guidelines, and commercial viability.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Litigation Roadmap</span>
            <h2>Our Process in Managing Civil Court Proceedings</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Litigation requires disciplined case management from initial filing through to final judgment.
              Our approach encompasses:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {litigationStages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              For complex contractual claims, our{" "}
              <Link href="/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne/">
                Contract Dispute Lawyer Melbourne
              </Link>{" "}
              team delivers deep contractual forensic analysis. To ensure court pleadings and affidavits are
              impeccably drafted, see our{" "}
              <Link href="/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/">
                Court Document Preparation Lawyer Melbourne
              </Link>{" "}
              service.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk Assessment</span>
            <h2>Why Litigation Demands Careful Risk and Cost Evaluation</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Initiating court action should never be an emotional decision. Litigation carries financial
              exposure, time commitments, and the risk of adverse cost orders if claims or defences fail.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients by conducting honest, realistic cost-benefit analyses before filing. Where viable,
              we pursue structured mediation or negotiation through our{" "}
              <Link href="/civil-lawyers-melbourne/negotiation-support-lawyer-melbourne/">
                Negotiation Support Lawyer Melbourne
              </Link>{" "}
              service. When court action is necessary, we pursue your rights with thorough preparation and
              resolute advocacy.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you are involved in a litigated dispute or have been served with court process, visit our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page to book an urgent consultation.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={civilLitigationFaqs} />
      </Section>
    </>
  );
}
