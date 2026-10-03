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
  title: "Buying Property Lawyer Melbourne | Property Contract Advice",
  description:
    "Bansal Lawyers assists buyers with property contract review, legal advice, settlement concerns, transfer issues and property purchase risks in Melbourne.",
  path: "/property-lawyers-melbourne/buying-property-lawyer-melbourne",
  keywords: [
    "Buying Property Lawyer Melbourne",
    "Buying Property Lawyers Melbourne",
    "Property Lawyer Melbourne",
    "Property Contract Review Melbourne",
    "Conveyancing Lawyer Melbourne",
    "Property Legal Advice Melbourne",
  ],
});

const buyerMatters = [
  "Legal advice before you sign a contract of sale",
  "Reviewing the contract, section 32 documents and any vendor statement",
  "Purchase price, deposit and payment terms",
  "Finance conditions and the dates that apply to them",
  "Building and pest inspection conditions",
  "Settlement date and what must happen before it",
  "Special conditions specific to your purchase",
  "Inclusions and exclusions, such as fixtures and fittings",
  "Title, ownership and any registered interests",
  "Cooling-off rights where they apply",
  "Concerns about the property or the transaction",
  "Advice if the seller or agent raises a new issue before settlement",
];

const contractPoints = [
  "The identity of the seller and whether they can properly sell",
  "The property description and what is included in the sale",
  "The deposit amount, when it is payable and how it is held",
  "Whether a finance condition applies, and the deadline for it",
  "Any building, pest or other inspection condition",
  "The settlement date and what each party must do by then",
  "Special conditions that change the standard terms",
  "Default provisions and what happens if either party does not complete",
  "Adjustments for rates, taxes and outgoings at settlement",
];

const buyingFaqs = [
  {
    question: "When should I have a property contract reviewed?",
    answer:
      "Before you sign. Once you have signed, you are generally bound by the terms, subject to any cooling-off rights that apply. A review before signing gives you the chance to ask questions, negotiate changes and understand the deadlines that apply to you.",
  },
  {
    question: "What is a cooling-off period?",
    answer:
      "In Victoria, a cooling-off period generally applies to private residential sales, giving a buyer a short time after signing to reconsider. There are exceptions, and the period does not apply in every situation, such as at auction or where a buyer has already obtained legal advice and signed the required certificate. The rules depend on the circumstances of your purchase.",
  },
  {
    question: "What is a finance condition and why does it matter?",
    answer:
      "A finance condition makes the contract conditional on you obtaining approval for your loan by a set date. Without it, you may be required to complete the purchase even if your finance is not approved. The wording and the deadline both matter, and lenders sometimes need more time than buyers expect.",
  },
  {
    question: "What should I check before signing a contract of sale?",
    answer:
      "At a minimum, the parties, the property description, the inclusions, the deposit, any conditions, the settlement date and the special conditions. The section 32 documents also need review, because they disclose matters affecting the property that may influence your decision.",
  },
  {
    question: "Can the contract be changed before I sign?",
    answer:
      "Often yes, particularly where a special condition needs to be added or amended. Whether the seller will agree depends on the market and the circumstances. Raising an issue before signing is far easier than trying to deal with it after the contract is binding.",
  },
  {
    question: "What happens if settlement is delayed?",
    answer:
      "The contract usually sets out what happens if a party cannot complete on the settlement date, including any notice requirements and consequences. Delays can arise from finance, document issues or a party not being ready. If a settlement problem arises, advice should be sought promptly because deadlines matter.",
  },
];

export default function BuyingPropertyLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Buying Property Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(buyingFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Buying Property Lawyer Melbourne"
        intro={
          <>
            <p>
              Before signing a contract of sale, it is worth understanding the conditions, the deadlines
              and the obligations you are taking on.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists buyers in Melbourne with contract review, legal advice on the
              purchase, and issues that arise before settlement.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Buying Property Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Advice Before You Sign",
          "Contract and Section 32 Review",
          "Settlement and Transfer Support",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Buying Property</span>
            <h2>Legal Advice for Property Buyers in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Buying property is one of the larger financial commitments most people make, and it is
              usually made under time pressure. The contract arrives, the agent wants a decision, and the
              conditions and deadlines are easy to skim past.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The contract of sale sets out what you are buying, what you must pay and by when, and what
              happens if a condition is not met. The section 32 documents disclose matters affecting the
              property, such as planning controls, easements and building permits. Together they determine
              what you are actually agreeing to.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We review those documents and explain them in plain language, so you can decide with a clear
              understanding of the risks. Every purchase depends on the property, the contract and your
              individual circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Buying Matters We Assist With"
            intro="We advise buyers on the legal issues that arise through a purchase, including:"
          />
          <div className="matters-grid">
            {buyerMatters.map((item) => (
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
            <span className="eyebrow">Contract Terms</span>
            <h2>What to Check in a Contract of Sale</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The terms that matter will depend on the property and the sale, but the following points
              should always be clear before you sign:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {contractPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Inclusions and exclusions are a common source of disagreement. If you are expecting the
              dishwasher, the air conditioning units or a particular fixture to stay, the contract should
              say so. It is also worth checking whether the property is affected by an owners corporation
              and, if so, what the fees and rules involve.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>Risks of Buying Without Legal Advice</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Without a review, it is easy to miss a condition that has to be satisfied by a particular
              date, or a special condition that shifts an obligation onto you. Missing a finance or
              inspection deadline can leave you bound to complete even if your circumstances change.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The section 32 documents can also raise issues that affect value or future use, such as
              proposed developments nearby, unapproved building work or an easement across the land. Those
              matters are easier to deal with before you are committed.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a problem does arise after signing, we can assist with settlement issues and, if
              necessary, with property notices and disputes.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={buyingFaqs} />
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
                Found a property and been given a contract to sign?
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
