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
  title: "Property Dispute Lawyer Melbourne | Lease, Contract & Settlement Disputes",
  description:
    "Bansal Lawyers assists with property disputes, contract disputes, lease disputes, settlement issues, landlord-tenant disputes and property legal notices.",
  path: "/property-lawyers-melbourne/property-dispute-lawyer-melbourne",
  keywords: [
    "Property Dispute Lawyer Melbourne",
    "Property Dispute Lawyers Melbourne",
    "Property Litigation Lawyer Melbourne",
    "Real Estate Dispute Lawyer Melbourne",
    "Lease Dispute Lawyer Melbourne",
    "Property Lawyer Melbourne",
  ],
});

const disputeTypes = [
  "Buyer and seller disputes over a property contract",
  "Disputes about a condition that was not satisfied",
  "Lease disputes between landlords and tenants",
  "Disputes about unpaid rent or outgoings",
  "Settlement disputes and delayed completion",
  "Disputes about the condition of a property",
  "Disputes about repairs, maintenance or make-good obligations",
  "Disputes about a deposit or bond",
  "Concerns about boundary or ownership where relevant",
  "Responding to a property legal notice",
  "Negotiation and settlement of a property dispute",
  "Court or tribunal-related steps where required",
];

const disputeSteps = [
  "Review the contract, lease, notices and correspondence",
  "Identify the legal issue and the strength of each party's position",
  "Confirm what outcome the client is seeking",
  "Consider negotiation before stronger steps are taken",
  "Attempt mediation or a structured settlement discussion where appropriate",
  "Issue or respond to a formal notice where the contract requires it",
  "Prepare for VCAT or court steps if the dispute cannot be resolved",
  "Keep the cost and risk of each stage under review",
];

const disputeFaqs = [
  {
    question: "What kinds of property disputes do you assist with?",
    answer:
      "Common matters include buyer and seller disputes over a contract or a condition, lease disputes between landlords and tenants, settlement delays, disputes about the condition of a property, and disagreements about rent, outgoings, repairs or bonds. What is available in each case depends on the contract, the notices and the evidence.",
  },
  {
    question: "Should I take legal advice before responding to a property notice?",
    answer:
      "Yes, if possible. A property notice often sets a deadline and may require a specific response. A reply written in the wrong terms can limit your options, particularly if it contains a concession. Reviewing the notice and the supporting documents first is the safer approach.",
  },
  {
    question: "Do property disputes always go to court?",
    answer:
      "No. Many property disputes are resolved through negotiation or mediation, and some are resolved by clarifying the contract terms. Where the matter does proceed to a hearing, the relevant forum depends on the type of dispute. Residential tenancy and some other property matters commonly go to VCAT.",
  },
  {
    question: "What evidence matters in a property dispute?",
    answer:
      "The contract or lease, the notices exchanged, correspondence between the parties and their representatives, records of the condition of the property, invoices and receipts. A clear written record of what was agreed and what occurred is usually the most useful evidence.",
  },
  {
    question: "Can a dispute be resolved without ending the transaction?",
    answer:
      "Often yes. Many property disputes are about a specific issue rather than the whole transaction, and a negotiated outcome allows the sale or lease to continue. Whether that is possible depends on the parties and the nature of the dispute.",
  },
  {
    question: "How important is acting quickly in a property dispute?",
    answer:
      "It matters. Property contracts and leases contain deadlines, and some steps must be taken within a set period. Delay can also make evidence harder to gather and may allow the other party to take steps that affect your position. Early advice generally produces more options.",
  },
];

export default function PropertyDisputeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Property Dispute Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(disputeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Property Dispute Lawyer Melbourne"
        intro={
          <>
            <p>
              Property disputes can involve contracts, leases, settlement, condition or payment, and they
              often carry a deadline.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists buyers, sellers, landlords, tenants and property owners in Melbourne
              with property disputes and the notices connected to them.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Property Dispute Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Contract, Lease and Settlement Disputes",
          "Negotiation Before Litigation",
          "Notices and Formal Steps",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Property Disputes</span>
            <h2>Resolving Property Disputes in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A property dispute usually begins with something specific: a condition that was not met, a
              settlement that did not happen on time, rent that was not paid, or work that was not done as
              agreed. Left unaddressed, the disagreement tends to widen, and the cost of resolving it
              grows.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The starting point is always the documents. The contract or lease sets out the obligations,
              the notice requirements and often the process that must be followed before further steps are
              taken. Correspondence and records fill in what actually happened.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We review the position, explain your options and advise on the most practical way forward.
              Every dispute depends on its own facts, documents and commercial or personal context.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Property Disputes We Assist With"
            intro="We advise on a range of property disagreements, including:"
          />
          <div className="matters-grid">
            {disputeTypes.map((item) => (
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
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Approach</span>
            <h2>How We Approach a Property Dispute</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The right steps depend on the documents and the circumstances, but the process usually
              involves the following:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {disputeSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Where a property contract or lease requires the parties to attempt negotiation or mediation
              first, following that process matters. It can also produce a resolution at far less cost than
              a hearing, particularly where both parties want the transaction or tenancy to continue.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Early Advice</span>
            <h2>Why Acting Early Matters</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Property matters are governed by dates. Settlement dates, notice periods and the time allowed
              to satisfy a condition all pass quickly, and steps that are available now may not be
              available later. Correspondence sent without advice can also affect your position, especially
              where it contains a concession or fails to raise a defence.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a dispute concerns a property notice you have received, the notice should be reviewed
              before you respond. Where a dispute concerns a lease, the lease terms and any notices
              exchanged determine what can be done.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We can also assist with the related areas of property contract review, lease advice and
              property notices.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={disputeFaqs} />
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
                Facing a property dispute? Talk to us about your options.
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
