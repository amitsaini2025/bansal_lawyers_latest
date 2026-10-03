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
  title: "Contract Dispute Lawyer Melbourne | Breach of Contract Advice",
  description:
    "Bansal Lawyers assists with contract disputes, breach of agreement matters, unpaid obligations, legal notices, negotiations and court-related steps.",
  path: "/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne",
  keywords: [
    "Contract Dispute Lawyer Melbourne",
    "Contract Dispute Lawyers Melbourne",
    "Civil Lawyers Melbourne",
    "Breach of Contract Lawyer Melbourne",
    "Agreement Dispute Lawyer Melbourne",
    "Civil Litigation Lawyer Melbourne",
  ],
});

const contractDisputeMatters = [
  "Alleged breaches of commercial contracts and service agreements",
  "Failure to perform work or supply goods to agreed specifications",
  "Non-payment, disputed progress payments, and withholding of funds",
  "Disputes concerning verbal agreements and implied contractual terms",
  "Interpretation of ambiguous contract clauses, warranties, and conditions",
  "Contested contract terminations, repudiation, and notice periods",
  "Claims regarding limitation of liability, indemnities, and exclusion clauses",
  "Contractor, consultant, and subcontractor performance disputes",
  "Vendor, supplier, and customer contractual disagreements",
  "Drafting and responding to formal breach of contract notices",
  "Negotiating Deeds of Settlement and Release out of court",
  "Filing and defending contract claims in Victorian courts and VCAT",
];

const contractDisputeAspects = [
  "Examining the written contract, schedules, variations, and email trails",
  "Establishing whether terms are legally binding, enforceable, or ambiguous",
  "Identifying whether a repudiatory or fundamental breach has occurred",
  "Assessing valid termination rights versus unlawful termination risks",
  "Calculating direct contractual loss, consequential damages, and mitigation efforts",
  "Drafting precise notices of default, remedy notices, and letters of demand",
  "Structuring confidential settlement conferences and commercial negotiations",
  "Preparing pleadings, affidavits, and court documents if litigation is unavoidable",
];

const contractDisputeFaqs = [
  {
    question: "What constitutes a breach of contract under Victorian law?",
    answer:
      "A breach of contract occurs when a party fails or refuses to perform one or more obligations without lawful excuse. This can include non-payment, delivering defective goods or services, missing contractual milestones, or attempting to terminate without adhering to agreed notice terms. Breaches are categorized as minor warranties or substantial breaches of essential conditions that may give rise to termination rights.",
  },
  {
    question: "Are verbal agreements legally binding in Victoria?",
    answer:
      "Yes, verbal agreements can be legally binding in Victoria provided the essential elements of a contract exist: an offer, acceptance, consideration, and an intention to create legal relations. However, verbal agreements are significantly harder to prove. Courts examine contemporaneous emails, text messages, bank transfers, invoices, and the conduct of the parties to reconstruct the terms agreed upon.",
  },
  {
    question: "Why is it important to seek advice before issuing a breach notice?",
    answer:
      "Issuing a breach notice incorrectly or terminating a contract without valid legal grounds can constitute 'repudiation' of the contract. This can inadvertently expose you to substantial damages claims from the other party. Independent legal advice ensures that any notice strictly complies with the contract's dispute mechanisms, cure periods, and formal service requirements.",
  },
  {
    question: "Can contract disputes be resolved without going to court?",
    answer:
      "Yes. Most contract disputes are resolved through informal discussions, formal solicitor correspondence, or structured mediation. Many modern contracts contain dispute resolution clauses that mandate negotiation or mediation prior to commencing litigation. Resolving matters via a formal Deed of Settlement saves substantial legal costs, management time, and business disruption.",
  },
  {
    question: "What remedies are available for breach of contract?",
    answer:
      "The primary remedy in civil contract disputes is compensatory damages, designed to place the innocent party in the position they would have occupied had the contract been properly performed. In certain specific circumstances, courts or tribunals may order specific performance, restitution, injunctions, or rescission of the agreement.",
  },
  {
    question: "How long do I have to bring a breach of contract claim in Victoria?",
    answer:
      "Under the Limitation of Actions Act 1958 (Vic), the statutory limitation period for bringing a breach of contract action is generally six years from the date the breach occurred. However, contractual dispute clauses often impose much shorter notification deadlines, so early advice is critical.",
  },
];

export default function ContractDisputeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Contract Dispute Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(contractDisputeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Contract Dispute Lawyer Melbourne"
        intro={
          <>
            <p>
              When an agreement breaks down or obligations are not met, clear legal advice is vital
              to protect your commercial interests and enforce your rights.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides practical legal advice on breach of contract matters, contested
              agreements, legal notices, dispute negotiation, and civil litigation across Melbourne.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Contract Dispute Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Advice",
          "Thorough Contract & Evidence Audits",
          "Pragmatic Commercial Negotiation",
          "VCAT & Victorian Court Representation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Breach of Contract Advice</span>
            <h2>Resolving Commercial and Private Contract Disputes</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Contracts form the foundation of commercial trade, professional services, property deals,
              and private agreements. However, disagreements often arise when expectations diverge,
              deliverables fail to meet standards, invoices are unpaid, or ambiguous terms lead to
              conflicting interpretations.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Whether dealing with a formal written deed, purchase terms, or an informal verbal arrangement,
              taking strategic steps early is essential. At Bansal Lawyers, we review the documentation,
              audit the surrounding communications, and provide frank advice on the strengths, weaknesses,
              and financial risks of your legal position.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For general dispute advice, visit our main{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> and{" "}
              <Link href="/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/">
                Civil Dispute Lawyer Melbourne
              </Link>{" "}
              pages. For broader business documentation, see our dedicated{" "}
              <Link href="/commercial-lawyers-melbourne/">Commercial Lawyers Melbourne</Link> practice.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Contractual Matters"
            title="Contract Disputes We Assist With"
            intro="We assist businesses, professionals, and individuals with a wide spectrum of contractual disagreements:"
          />
          <div className="matters-grid">
            {contractDisputeMatters.map((item) => (
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
            Every contractual matter is evaluated on its specific facts, supporting documents, relevant
            contractual clauses, and individual commercial objectives.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Review</span>
            <h2>Key Elements in Resolving Contractual Disputes</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              An effective response to a contract dispute requires careful forensic review of the agreement
              and party conduct. We focus on:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {contractDisputeAspects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Before issuing formal demands, consult our{" "}
              <Link href="/civil-lawyers-melbourne/legal-notice-lawyer-melbourne/">
                Legal Notice Lawyer Melbourne
              </Link>{" "}
              guidance to ensure compliance with contractual notice requirements. If formal proceedings are
              unavoidable, our{" "}
              <Link href="/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/">
                Court Document Preparation Lawyer Melbourne
              </Link>{" "}
              team ensures pleadings and affidavits are drafted to high court standards.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Why Legal Advice Matters Before Taking Action</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Rushing to terminate a contract, withholding payments without a clear legal right, or sending
              an unsupported letter of demand can escalate a solvable problem into a costly counter-claim.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients in determining whether a breach warrants immediate termination or whether a
              structured commercial negotiation or mediation is more advantageous. When a settlement is
              reached, we draft airtight settlement agreements that prevent future legal exposure.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To discuss your agreement or dispute with our legal team, visit our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page to book an appointment.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={contractDisputeFaqs} />
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
                Facing a contractual dispute or need advice on breach of contract in Melbourne?
              </p>
              <ButtonLink href="/contact/" variant="primary">
                Book a Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
