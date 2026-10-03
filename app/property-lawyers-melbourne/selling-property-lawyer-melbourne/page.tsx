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
  title: "Selling Property Lawyer Melbourne | Property Sale Legal Advice",
  description:
    "Bansal Lawyers assists sellers with property sale documents, contract review, disclosure issues, settlement conditions and property transfer concerns.",
  path: "/property-lawyers-melbourne/selling-property-lawyer-melbourne",
  keywords: [
    "Selling Property Lawyer Melbourne",
    "Selling Property Lawyers Melbourne",
    "Property Lawyer Melbourne",
    "Property Sale Lawyer Melbourne",
    "Property Contract Lawyer Melbourne",
    "Conveyancing Lawyer Melbourne",
  ],
});

const sellerMatters = [
  "Advice before you appoint an agent or list the property",
  "Preparing and reviewing the contract of sale",
  "The section 32 vendor statement and disclosure requirements",
  "Title, plan and ownership details",
  "Special conditions proposed by a buyer",
  "Finance and inspection conditions and the dates attached to them",
  "Deposit arrangements and how the deposit is held",
  "Settlement date and what you must do before it",
  "Outgoings, rates and adjustments at settlement",
  "Mortgage discharge arrangements where applicable",
  "Buyer requests for changes before settlement",
  "Advice where a sale is delayed or becomes disputed",
];

const disclosurePoints = [
  "The title details and any registered interests on the property",
  "Easements, covenants and restrictions affecting the land",
  "Planning information, zoning and any proposed developments",
  "Building permits, owner-builder warranties and unapproved works",
  "Owners corporation details, fees and any current issues",
  "Rates, land tax and other outgoings that will be adjusted",
  "Whether the property is affected by bushfire, flooding or other overlays",
  "Any notices, orders or agreements that affect the land",
  "Services connected to the property, such as power, water and sewerage",
];

const sellingFaqs = [
  {
    question: "What is a section 32 vendor statement?",
    answer:
      "In Victoria, a vendor must prepare a statement under section 32 of the Sale of Land Act before a contract is signed by a buyer. It discloses matters affecting the property, such as title details, easements, planning information and outgoings. The statement needs to be accurate, and it should be prepared before the property is marketed.",
  },
  {
    question: "When should I speak to a lawyer about selling?",
    answer:
      "Before the property goes on the market, if possible. The contract and disclosure documents need to be ready, and early advice gives you time to deal with any issue that the documents reveal. Reviewing a buyer's proposed changes is also easier before the contract is signed.",
  },
  {
    question: "Can a buyer change the contract after making an offer?",
    answer:
      "A buyer may propose special conditions or amendments, and you can decide whether to accept them. Changes should be reviewed before you agree, because a condition can affect your obligations, the settlement timing or your exposure if the buyer does not proceed.",
  },
  {
    question: "What happens if the buyer cannot settle on time?",
    answer:
      "The contract sets out the position. It usually allows a party to give notice requiring the other to complete, and it may provide for default interest or other consequences. If a buyer is not ready to settle, it is worth taking advice promptly, because the steps available depend on the contract terms.",
  },
  {
    question: "Do I need to disclose problems with the property?",
    answer:
      "Disclosure obligations depend on the legislation, the contract and what is being sold. Some matters must be disclosed in the section 32 statement, and a failure to disclose accurately can have serious consequences for a sale. If you are unsure whether something should be disclosed, it is best to seek advice before the contract is prepared.",
  },
  {
    question: "What if the buyer raises an issue just before settlement?",
    answer:
      "That depends on the issue and the contract. If it concerns a condition that has not been met, or a matter the buyer says should have been disclosed, the position needs to be reviewed. Advice at that point can help clarify your obligations and what options are available before the settlement date.",
  },
];

export default function SellingPropertyLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Selling Property Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(sellingFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Selling Property Lawyer Melbourne"
        intro={
          <>
            <p>
              Selling a property involves documents that must be prepared and disclosed correctly before
              a contract is signed.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists sellers in Melbourne with sale documents, contract review, disclosure
              questions and settlement obligations.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Selling Property Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Sale Documents Prepared Before Listing",
          "Disclosure Review",
          "Contract Conditions Explained",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Selling Property</span>
            <h2>Legal Advice for Property Sellers in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              When a property is sold, the seller carries obligations that start before the property is
              advertised. The contract and the disclosure documents must be prepared properly, and the
              information they contain needs to be accurate.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Most sales proceed smoothly. Problems tend to arise where a matter was not disclosed, where
              a condition was drafted loosely, or where a settlement obligation was not understood. Those
              issues are easier to prevent than to resolve.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist sellers with the documents, the contract terms and the questions that come up
              during a sale. What is required depends on the property, the proposed contract and the
              circumstances of the sale.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Selling Matters We Assist With"
            intro="We advise sellers on the legal steps through a sale, including:"
          />
          <div className="matters-grid">
            {sellerMatters.map((item) => (
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
            <span className="eyebrow">Disclosure</span>
            <h2>What Sellers Need to Disclose</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Disclosure is one of the areas where sellers most often run into difficulty. The section 32
              statement should deal with matters such as:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {disclosurePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Beyond the statement itself, the contract needs to reflect the deal you have agreed. Special
              conditions proposed by a buyer, the settlement date and the deposit arrangements all need to
              be reviewed before you sign. A buyer&apos;s condition can change your obligations in ways
              that are not obvious from a quick read.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>Where Sales Run Into Trouble</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A sale can be disrupted by a buyer whose finance is not approved, an inspection that raises
              an issue, or a condition that is not satisfied by the required date. It can also be
              disrupted by a disclosure problem: something about the property that should have been
              disclosed was omitted or described inaccurately.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Settlement obligations matter too. Rates, land tax and other outgoings are adjusted at
              settlement, and where the property is subject to a mortgage, the discharge needs to be
              arranged so that completion is not delayed.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a sale becomes disputed, we can assist with settlement issues, property notices and
              the steps available to resolve the matter.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={sellingFaqs} />
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
                Preparing to sell, or reviewing a contract a buyer has proposed?
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
