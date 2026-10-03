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
  title: "Property Contract Review Lawyer Melbourne | Before You Sign",
  description:
    "Bansal Lawyers reviews property contracts, special conditions, settlement terms, finance clauses, obligations, risks and property documents in Melbourne.",
  path: "/property-lawyers-melbourne/property-contract-review-lawyer-melbourne",
  keywords: [
    "Property Contract Review Lawyer Melbourne",
    "Property Contract Review Melbourne",
    "Property Contract Lawyer Melbourne",
    "Property Lawyer Melbourne",
    "Buying Property Lawyer Melbourne",
    "Selling Property Lawyer Melbourne",
  ],
});

const reviewAreas = [
  "The parties named in the contract and their capacity to sell or buy",
  "The property description and the plan details",
  "Purchase price, deposit and how the deposit is held",
  "Finance clauses and the date finance must be approved",
  "Building and pest inspection conditions",
  "Settlement date and the period allowed for completion",
  "Special conditions added by either party",
  "Default clauses and the consequences of not completing",
  "Cooling-off rights where they apply to the sale",
  "Title, ownership and any registered interests",
  "Inclusions and exclusions, such as fixtures and appliances",
  "Vendor and purchaser obligations before settlement",
];

const riskClauses = [
  "A special condition that removes a right you would otherwise have",
  "A finance clause with a deadline that is too short for your lender",
  "An inspection condition that limits what can be inspected",
  "A settlement date that depends on something outside your control",
  "A clause allowing the seller to accept another offer before settlement",
  "Default provisions that impose interest or penalty amounts",
  "Adjustments for outgoings that may be calculated unfavourably",
  "A term dealing with an owners corporation or body corporate matter",
];

const reviewFaqs = [
  {
    question: "Why should a property contract be reviewed before signing?",
    answer:
      "Because once you sign, you are generally bound by the terms. A review before signing lets you ask questions about the conditions, deadlines and obligations, and it gives you the chance to negotiate a change while the other party is still willing to discuss it.",
  },
  {
    question: "What is the difference between a standard contract and a special condition?",
    answer:
      "The standard terms are the printed conditions used in most Victorian property sales. Special conditions are added to a particular sale and can change those standard terms significantly. Special conditions deserve close attention because they are specific to your transaction.",
  },
  {
    question: "Can I add conditions to the contract as a buyer?",
    answer:
      "You can propose conditions, and whether they are accepted depends on the seller and the market. Common examples include finance, building and pest inspection, and a condition relating to the sale of your own property. Raising them before signing is far easier than trying to change the contract later.",
  },
  {
    question: "What is a cooling-off period and does it always apply?",
    answer:
      "In Victoria, a cooling-off period generally applies to private residential sales, giving a buyer a short period after signing to reconsider. It does not apply in every situation, including at auction and in some cases where a buyer has obtained legal advice and signed the required certificate. The position depends on the circumstances of your purchase.",
  },
  {
    question: "What should I look for in the section 32 documents?",
    answer:
      "The statement discloses matters affecting the property, including title details, easements, planning information, outgoings and any notices or orders. It can reveal issues that affect value or future use, which is why it should be reviewed together with the contract rather than separately.",
  },
  {
    question: "Do you review contracts for both buyers and sellers?",
    answer:
      "Yes. For buyers, the focus is usually on the conditions, deadlines and the matters disclosed in the section 32 statement. For sellers, it is usually on the accuracy of the disclosure, the special conditions proposed by a buyer and the settlement obligations.",
  },
];

export default function PropertyContractReviewLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Property Contract Review Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(reviewFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Property Contract Review Lawyer Melbourne"
        intro={
          <>
            <p>
              A property contract review before signing helps you understand the conditions, deadlines
              and obligations set out in the document.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers reviews contracts of sale, section 32 documents and special conditions for
              buyers and sellers in Melbourne.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Property Contract Review Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Review Before You Sign",
          "Contract and Section 32 Documents",
          "Plain-Language Explanations",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Before You Sign</span>
            <h2>Reviewing a Property Contract</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A contract of sale is a long document, and most of it looks like standard wording. The parts
              that matter to your transaction are often in the details: a date, a condition, or a special
              clause added for this particular sale.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We read the contract and the section 32 documents in full and explain what they mean for you.
              That includes the conditions you have to satisfy, the deadlines attached to them, and the
              obligations that fall on each party before settlement.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              What matters most depends on whether you are buying or selling, the property, and the terms
              of the particular sale. We will tell you where the attention should go.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="What We Review"
            title="Parts of the Contract We Look At"
            intro="Every contract is different, but these are the areas we review closely:"
          />
          <div className="matters-grid">
            {reviewAreas.map((item) => (
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
            <span className="eyebrow">Clauses to Watch</span>
            <h2>Clauses That Can Change Your Position</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some clauses look unremarkable but have a significant effect on what you must do or what you
              can recover if the sale does not proceed. Examples include:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {riskClauses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Finance clauses and inspection conditions are worth particular attention. The wording
              determines what happens if your loan is not approved or if an inspection identifies a
              problem, and the deadline determines how much time you have. A condition that looks standard
              can still leave you exposed if the dates do not work.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>The Risk of Signing Without a Review</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Signing without a review means accepting the contract as written. If a condition is
              unsuitable, a deadline is unrealistic or a special clause shifts risk onto you, those issues
              are generally much harder to address once the contract is binding.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The section 32 documents carry their own risk. A matter disclosed in those documents, or one
              that should have been, can affect the value of the property or your plans for it. Reviewing
              them alongside the contract gives a fuller picture of what you are taking on.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a contract issue has already become a problem, we can also assist with settlement
              issues, property notices and disputes.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={reviewFaqs} />
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
                Been given a property contract to sign? Have it reviewed first.
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
