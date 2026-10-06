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
  title: "Civil Dispute Lawyer Melbourne | Dispute Resolution Advice",
  description:
    "Bansal Lawyers assists with civil disputes, legal notices, negotiation, document preparation and civil litigation advice in Melbourne.",
  path: "/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne",
  keywords: [
    "Civil Dispute Lawyer Melbourne",
    "Civil Dispute Lawyers Melbourne",
    "Civil Lawyers Melbourne",
    "Dispute Resolution Lawyer Melbourne",
    "Civil Law Firm Melbourne",
    "Civil Litigation Lawyer Melbourne",
  ],
});

const disputeMatters = [
  "Disputes between individuals, families, and neighbours",
  "Commercial and business-related disagreements",
  "Contractual disputes and alleged breaches of agreement",
  "Unpaid debts, disputed invoices, and payment claims",
  "Landlord, tenant, and leasing disagreements",
  "Vendor, purchaser, and property settlement issues",
  "Service provider and customer disputes",
  "Partnership, shareholder, and co-owner conflicts",
  "Drafting and responding to formal letters of demand",
  "Pre-litigation negotiation and dispute resolution conferences",
  "VCAT applications, responses, and hearing preparation",
  "Magistrates' Court civil claims and defence filings",
];

const resolutionSteps = [
  "Reviewing key agreements, written correspondence, invoices, and documentary records",
  "Assessing the factual background, legal strengths, and potential exposures",
  "Explaining the dispute resolution pathways available under Victorian civil law",
  "Identifying realistic outcomes, timeframes, and practical financial risks",
  "Drafting clear, factually accurate legal notices or formal response letters",
  "Conducting structured without-prejudice negotiations and settlement discussions",
  "Preparing binding Deeds of Settlement and Release to finalise disputes conclusively",
  "Preparing formal court or tribunal documentation where formal proceedings are required",
];

const civilDisputeFaqs = [
  {
    question: "What is a civil dispute in Victoria?",
    answer:
      "A civil dispute is a legal disagreement between private individuals, businesses, or organisations that does not involve criminal prosecution. In Victoria, civil disputes commonly arise over contracts, unpaid debts, property transactions, tenancy agreements, consumer services, and commercial dealings. The objective of civil law is generally to seek compensation, enforce an agreement, or resolve competing rights.",
  },
  {
    question: "Should I seek legal advice before a civil dispute escalates?",
    answer:
      "Yes. Early legal advice allows you to understand your legal position before positions harden or substantial costs are incurred. A lawyer can evaluate your documentary evidence, identify weaknesses in the opposing party's claims, and advise on cost-effective negotiation strategies. Taking informal steps without advice can inadvertently compromise your legal rights or limit your options later.",
  },
  {
    question: "Do all civil disputes end up in court or VCAT?",
    answer:
      "No. The vast majority of civil disputes in Melbourne are resolved out of court through negotiation, formal legal correspondence, or mediation. Under the Victorian Civil Procedure Act 2010, parties are encouraged to make genuine steps to resolve disputes before initiating court action. Formal litigation is generally treated as a last resort when negotiated outcomes are not achievable.",
  },
  {
    question: "What should I do if I receive a letter of demand or legal notice?",
    answer:
      "Do not ignore the notice, but avoid responding impulsively without advice. Note the deadline specified in the letter, preserve all relevant documents and communications, and seek independent legal advice. A lawyer can assess whether the claim has legal merit, determine your exposure, and prepare an appropriate formal response.",
  },
  {
    question: "How are civil settlements recorded to ensure finality?",
    answer:
      "Settlements should be formally documented in a binding Deed of Settlement and Release. This legal document clearly defines payment terms, agreed actions, confidentiality terms, and mutual releases preventing either party from reviving the dispute in future. Informal or verbal agreements often leave ambiguities that can trigger renewed conflict.",
  },
  {
    question: "What courts or tribunals handle civil disputes in Melbourne?",
    answer:
      "Depending on the nature and financial value of the dispute, matters in Melbourne are commonly dealt with by the Victorian Civil and Administrative Tribunal (VCAT) for consumer, residential tenancy, and building matters; the Magistrates' Court of Victoria for claims up to $100,000; the County Court of Victoria for intermediate civil claims; and the Supreme Court of Victoria for large commercial and complex disputes.",
  },
];

export default function CivilDisputeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Civil Dispute Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(civilDisputeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Civil Dispute Lawyer Melbourne"
        intro={
          <>
            <p>
              When a personal, commercial, or financial dispute arises, understanding your legal position
              early is critical to protecting your rights and avoiding costly escalation.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne individuals, businesses, landlords, and contractors with
              practical dispute resolution, legal notices, strategic negotiation, and civil representation.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Civil Dispute Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Consultations",
          "Objective Evidence & Risk Assessment",
          "Strategic Pre-Court Negotiation",
          "VCAT & Court Representation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Dispute Resolution Advice</span>
            <h2>Practical Legal Support for Civil Disputes in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Civil disagreements can arise across everyday commercial and personal dealings. A supplier
              fails to deliver contracted goods, an invoice remains unpaid despite repeated reminders, a
              business partner disputes profit distributions, or a property transaction encounters
              unexpected contractual friction.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Left unaddressed, civil disagreements can quickly escalate into stressful, expensive, and
              time-consuming legal battles. At Bansal Lawyers, our approach prioritises clear analysis,
              sound commercial judgment, and early dispute resolution. We review the facts, examine the
              underlying documentation, and advise you on practical options suited to your specific circumstances.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our broader practice at our main{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> page, or explore
              specialised guidance for{" "}
              <Link href="/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne/">
                Contract Dispute Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne/">
                Debt Dispute Lawyer Melbourne
              </Link>{" "}
              matters.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Matters We Handle"
            title="Civil Disputes We Can Assist With"
            intro="We assist clients across Victoria with a broad range of civil and commercial conflicts, including:"
          />
          <div className="matters-grid">
            {disputeMatters.map((item) => (
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
            Every matter is evaluated individually against the relevant contracts, written communications,
            statutory deadlines, and commercial stakes involved.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Approach Civil Dispute Resolution</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Navigating a civil dispute requires methodical preparation and strategic communication. We guide
              clients through every stage of the dispute resolution process:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {resolutionSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Where formal correspondence is required, our{" "}
              <Link href="/civil-lawyers-melbourne/legal-notice-lawyer-melbourne/">
                Legal Notice Lawyer Melbourne
              </Link>{" "}
              service ensures notices of demand and breach letters are prepared with precision. When matters
              proceed to court, our{" "}
              <Link href="/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/">
                Civil Litigation Lawyer Melbourne
              </Link>{" "}
              practice delivers rigorous representation.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Advice</span>
            <h2>Understanding the Risks and Practical Costs of Civil Disputes</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Pursuing or defending a civil claim involves commercial, financial, and emotional considerations.
              Legal proceedings carry potential cost liabilities, evidentiary requirements, and strict procedural
              rules under Victorian court regulations.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our role is to provide realistic, objective assessments of your prospects before substantial
              costs are incurred. We focus on cost-benefit analysis at every milestone, advising whether early
              settlement, structured mediation, or formal tribunal proceedings represent the most sensible path
              forward for you.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you are facing a potential dispute or have received formal correspondence, reach out to our
              Melbourne CBD office via our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page to schedule a confidential discussion.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={civilDisputeFaqs} />
      </Section>
    </>
  );
}
