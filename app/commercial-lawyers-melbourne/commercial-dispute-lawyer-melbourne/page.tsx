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
  title: "Commercial Dispute Lawyer Melbourne | Business & Contract Disputes",
  description:
    "Bansal Lawyers assists with commercial disputes, business disputes, contract issues, unpaid debts, negotiations, legal notices and court-related steps.",
  path: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne",
  keywords: [
    "Commercial Dispute Lawyer Melbourne",
    "Commercial Dispute Lawyers Melbourne",
    "Business Dispute Lawyer Melbourne",
    "Contract Dispute Lawyer Melbourne",
    "Commercial Litigation Lawyer Melbourne",
    "Business Lawyer Melbourne",
  ],
});

const disputeTypes = [
  "Breach of contract claims",
  "Disputes about the scope of work or deliverables",
  "Business partner and shareholder disputes",
  "Supplier and customer disputes",
  "Disputes about payment, invoices and pricing",
  "Service delivery and quality disputes",
  "Disputes about a business sale or purchase",
  "Lease and premises disputes connected to a business",
  "Confidentiality and restraint of trade disputes",
  "Debt and recovery disputes",
  "Responding to a legal notice or demand letter",
  "Advice on whether a matter should be negotiated or pursued further",
];

const disputeSteps = [
  "Review the contract, correspondence and available evidence",
  "Identify the legal issue and the strength of each party's position",
  "Set out the commercial outcome the client actually wants",
  "Consider a negotiated resolution before stronger steps are taken",
  "Issue a formal notice where the contract or circumstances require it",
  "Attempt settlement discussions or mediation where appropriate",
  "Prepare for court or tribunal steps if the dispute cannot be resolved",
  "Keep the cost and risk of each stage in view before proceeding",
];

const disputeFaqs = [
  {
    question: "What is a commercial dispute?",
    answer:
      "A commercial dispute is a disagreement between businesses, or between a business and another party, arising out of a commercial relationship. Common examples include unpaid invoices, breach of contract, disputed work, partnership disagreements and lease issues. The appropriate response depends on the contract and the facts.",
  },
  {
    question: "Should I send a legal notice before taking further steps?",
    answer:
      "Often yes. Many contracts require a notice of breach before other steps can be taken, and a clear written notice can prompt a resolution without further cost. However, a notice should be prepared carefully, because the wording and any admissions in it can affect your position later.",
  },
  {
    question: "Do all commercial disputes end up in court?",
    answer:
      "No. Most commercial disputes are resolved through negotiation, a demand for payment or mediation. Court and tribunal proceedings are an option where those steps do not produce a result, but the cost, time and risk involved should be weighed against the likely recovery.",
  },
  {
    question: "How important is the written contract in a dispute?",
    answer:
      "It is usually central. The contract sets out the obligations, the notice requirements and often the dispute resolution process that must be followed. Where the contract is unclear or incomplete, the surrounding correspondence and conduct of the parties become more significant.",
  },
  {
    question: "What evidence should I keep if a dispute starts?",
    answer:
      "Keep the contract and any variations, quotes, purchase orders, invoices, delivery records, emails and file notes. A clear record of what was agreed and what was actually done is often the difference between a strong position and a weak one. Avoid deleting correspondence, even if it is unhelpful.",
  },
  {
    question: "Is it worth pursuing a small commercial claim?",
    answer:
      "That depends on the amount involved, the strength of your position and the cost of pursuing it. In some cases a negotiated outcome or a well-drafted demand produces a better result than proceedings. We give a practical assessment rather than assuming litigation is the answer.",
  },
];

export default function CommercialDisputeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Commercial Dispute Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(disputeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Commercial Dispute Lawyer Melbourne"
        intro={
          <>
            <p>
              Commercial disputes can affect cash flow, business relationships and the day-to-day
              operation of a business.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne businesses with contract disputes, payment disputes,
              partnership disagreements, negotiations and legal notices.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Commercial Dispute Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Early Advice Before Disputes Escalate",
          "Negotiation and Settlement Focus",
          "Notices and Formal Steps",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Commercial Disputes</span>
            <h2>Resolving Business Disputes in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Most commercial disputes start with something small: an invoice that is not paid, a
              deliverable that does not match the brief, or an obligation that one party believes was
              never part of the deal. Left alone, those issues tend to harden, and positions become more
              difficult to move.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Early advice usually produces a better outcome than waiting. It allows the contract and the
              correspondence to be reviewed while the facts are fresh, and it gives time to consider
              negotiation before a dispute becomes entrenched.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We also take a practical view of cost. Pursuing a point to its end is not always the best
              commercial outcome, particularly where the cost of doing so outweighs what might be
              recovered. Every dispute depends on its own facts, documents and commercial context.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Commercial Disputes We Assist With"
            intro="We advise on a wide range of commercial disagreements, including:"
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
            <h2>How We Approach a Commercial Dispute</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The right steps depend on the contract and the circumstances, but the process usually
              involves the following stages:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {disputeSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Many commercial contracts require the parties to attempt negotiation or mediation before
              proceedings are commenced. Following that process is not simply a formality; ignoring it can
              create difficulties later, and in some cases it produces a resolution at a fraction of the
              cost of a hearing.
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
              Delay can work against you. Time limits may apply, evidence can become harder to gather, and
              the other party may take steps of their own in the meantime. Correspondence sent without
              advice can also complicate a position that was otherwise straightforward.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you have received a legal notice or a demand letter, it should be reviewed before you
              respond. A reply written in the wrong terms can limit your options, particularly if it
              contains an admission or a concession you did not intend to make.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where money is owed, we can also assist with debt recovery and, where appropriate, with
              formal notices.
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
                Facing a business dispute, or considering your options?
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
