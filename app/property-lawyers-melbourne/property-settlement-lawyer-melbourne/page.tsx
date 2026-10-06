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
  title: "Property Settlement Lawyer Melbourne | Settlement Issues & Advice",
  description:
    "Bansal Lawyers assists with property settlement issues, missed settlement dates, document concerns, transfer problems and property transaction advice.",
  path: "/property-lawyers-melbourne/property-settlement-lawyer-melbourne",
  keywords: [
    "Property Settlement Lawyer Melbourne",
    "Property Settlement Lawyers Melbourne",
    "Settlement Issue Lawyer Melbourne",
    "Property Lawyer Melbourne",
    "Conveyancing Lawyer Melbourne",
    "Buying Property Lawyer Melbourne",
  ],
});

const settlementMatters = [
  "Settlement dates and what each party must do by then",
  "Missed settlement dates and the notice requirements that follow",
  "Finance delays affecting a buyer's ability to complete",
  "Transfer document issues and corrections",
  "Contract conditions that have not been satisfied",
  "Adjustments for rates, land tax and outgoings",
  "Mortgage discharge arrangements for a seller",
  "Disputes about the amount payable at settlement",
  "Communication between the parties and their representatives",
  "Default provisions and the consequences of not completing",
  "Document review before settlement takes place",
  "Advice where settlement has been delayed or disputed",
];

const settlementSteps = [
  "Review the contract and confirm the settlement date",
  "Check which conditions must be satisfied before completion",
  "Confirm the finance position and the lender's requirements",
  "Review the transfer and settlement documents",
  "Check the adjustments for outgoings and rates",
  "Identify any issue that could delay completion",
  "Deal with correspondence between the parties promptly",
  "Confirm completion and the registration of the transfer",
];

const settlementFaqs = [
  {
    question: "What is property settlement?",
    answer:
      "In a property transaction, settlement is the point at which ownership transfers and the balance of the purchase price is paid. On the settlement date, the transfer documents are finalised, the buyer takes possession in accordance with the contract, and outgoings are adjusted between the parties.",
  },
  {
    question: "Does this page cover family law property settlement?",
    answer:
      "No. This page deals with settlement of a property sale or purchase, meaning the completion of a property transaction. If you are looking for advice about dividing property after separation or a divorce, that is a different area of law and is handled separately.",
  },
  {
    question: "What happens if settlement is delayed?",
    answer:
      "The contract usually sets out the position. It may allow the party who is ready to give notice requiring the other to complete, and it may provide for default interest or other consequences. The steps available depend on the contract terms and how the delay arose.",
  },
  {
    question: "Can settlement be delayed because of finance?",
    answer:
      "Yes, and it is a common cause of delay. A lender may need more time to finalise documents, or a valuation may raise an issue. Where finance is delayed, the contract and any finance condition determine what can be done and by when.",
  },
  {
    question: "What are settlement adjustments?",
    answer:
      "Adjustments apportion rates, land tax, owners corporation fees, water charges and other outgoings between the buyer and the seller as at the settlement date. The calculation is set out in the statement of adjustments, and it should be checked before completion.",
  },
  {
    question: "What should I do if the other party will not settle?",
    answer:
      "Take advice promptly. The contract will set out the notice requirements and the consequences of not completing, and the deadline matters. A written position issued in the right terms is usually more effective than correspondence sent without advice.",
  },
];

export default function PropertySettlementLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Property Settlement Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(settlementFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Property Settlement Lawyer Melbourne"
        intro={
          <>
            <p>
              Settlement is the point at which a property transaction completes. Documents, finance and
              adjustments all need to be in order before that date.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists buyers and sellers in Melbourne with settlement issues, delayed
              completion, transfer documents and contract conditions.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Property Settlement Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Property Transaction Settlement",
          "Missed Dates and Delays",
          "Document and Adjustment Review",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Settlement of a Property Transaction</span>
            <h2>Settlement Issues in Property Sales and Purchases</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              This page deals with settlement of a property transaction: the completion of a sale or
              purchase. It is not about family law property settlement, which is a separate area and
              concerns the division of property between separating parties.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Settlement is the step that completes the transaction. By that date, the finance must be
              ready, the transfer documents must be prepared, any conditions must have been satisfied, and
              the adjustments for outgoings must be calculated. Where any of those elements is not in
              place, completion can be delayed.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We review the position and explain what the contract requires, so you know where the risk
              lies and what needs to happen next. Every transaction depends on its own documents and
              deadlines.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Settlement Matters We Assist With"
            intro="Our property team advises on a range of settlement issues, including:"
          />
          <div className="matters-grid">
            {settlementMatters.map((item) => (
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
            <span className="eyebrow">The Process</span>
            <h2>What Needs to Happen Before Settlement</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The steps vary with the transaction, but completion usually depends on the following being
              in order:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {settlementSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Settlement adjustments are frequently queried. Rates, land tax, owners corporation fees and
              water charges are apportioned between the parties as at the settlement date, and the
              statement of adjustments should be reviewed before completion rather than after. A small
              calculation error can otherwise become a dispute once the transaction has finished.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Delays and Default</span>
            <h2>When Settlement Is Delayed or Disputed</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A missed settlement date is a serious matter. The contract usually sets out what the party
              who is ready to complete can do, including giving a notice requiring the other party to
              complete within a set period. There may also be provisions for interest or other
              consequences.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The right response depends on why the delay occurred. A short finance delay is often resolved
              by agreement, while a refusal to complete or a dispute about a condition requires a
              different approach. Where a matter has become disputed, it may need to be handled as a
              property dispute.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Because the deadlines are fixed, advice should be sought as soon as a problem becomes
              apparent rather than after the settlement date has passed.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={settlementFaqs} />
      </Section>
    </>
  );
}
