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
  title: "Business Sale and Purchase Lawyer Melbourne | Buying or Selling a Business",
  description:
    "Bansal Lawyers assists with buying or selling a business, contract review, due diligence, leases, assets, liabilities and settlement matters.",
  path: "/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne",
  keywords: [
    "Business Sale and Purchase Lawyer Melbourne",
    "Business Sale Lawyer Melbourne",
    "Business Purchase Lawyer Melbourne",
    "Buying a Business Lawyer Melbourne",
    "Selling a Business Lawyer Melbourne",
    "Commercial Lawyer Melbourne",
  ],
});

const transactionMatters = [
  "Buying a business as a going concern",
  "Selling a business to a private purchaser",
  "Reviewing the contract of sale before signing",
  "Legal due diligence on the business records",
  "Asset and liability identification",
  "Business name, goodwill and intellectual property",
  "Stock, plant and equipment",
  "Lease assignment and premises issues",
  "Employee and contractor entitlements",
  "Restraint of trade and vendor obligations",
  "Settlement conditions and completion steps",
  "Advice where a sale falls over or is disputed",
];

const dueDiligenceItems = [
  "Financial records and recent trading performance",
  "Existing contracts with suppliers, customers and contractors",
  "Lease terms, rent, outgoings and any make-good obligations",
  "Licences, permits and regulatory approvals",
  "Employee and contractor arrangements and entitlements",
  "Assets owned, leased or subject to finance",
  "Security interests registered against the business",
  "Outstanding debts, claims or disputes",
  "Intellectual property, business names and domain names",
  "Insurance policies and whether they transfer",
];

const saleFaqs = [
  {
    question: "When should I involve a lawyer in a business sale?",
    answer:
      "Ideally before you sign anything, including a heads of agreement or an offer document. Once a binding contract is signed, the terms are difficult to change. Early advice also gives time to carry out due diligence properly rather than under pressure.",
  },
  {
    question: "What is due diligence in a business purchase?",
    answer:
      "Due diligence is the process of checking the business before you commit. It involves reviewing financial records, contracts, leases, licences, employees, assets and any disputes. The purpose is to confirm what you are buying and to identify issues that should be dealt with in the contract.",
  },
  {
    question: "What is the difference between buying assets and buying shares?",
    answer:
      "When you buy the assets of a business, you generally take on the assets and specified liabilities. When you buy the shares in a company, you take on the company itself, including its history, obligations and liabilities. The two structures carry very different risks and need different contract terms.",
  },
  {
    question: "Can a vendor be restrained from competing after the sale?",
    answer:
      "A restraint clause is common in business sales, but it must be reasonable in scope, duration and area to be enforceable. We review restraint clauses carefully, both where they protect the purchaser and where they restrict a vendor who intends to keep working in the industry.",
  },
  {
    question: "What happens if a business sale does not settle?",
    answer:
      "It depends on the contract. A missed settlement date, an unfulfilled condition or a failure to complete a required step can trigger the default provisions. The contract may allow for an extension, a notice to complete, or in some cases termination. We review the position and advise on the available options.",
  },
  {
    question: "Do employees transfer with the business?",
    answer:
      "That depends on the structure of the sale and the arrangements in place. Employee entitlements are a significant issue in any business purchase and should be identified during due diligence and addressed in the contract. We work through the position with you and, where needed, with your accountant.",
  },
];

export default function BusinessSalePurchaseLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Business Sale and Purchase Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(saleFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Business Sale and Purchase Lawyer Melbourne"
        intro={
          <>
            <p>
              Buying or selling a business involves contracts, due diligence, leases, employees and
              settlement steps that all need attention before completion.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne buyers and sellers with business transactions from the
              first offer through to settlement.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Business Sale and Purchase Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Buyers and Sellers",
          "Contract Review and Due Diligence",
          "Lease and Employee Considerations",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Business Transactions</span>
            <h2>Buying or Selling a Business in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A business sale is rarely just a price. The transaction involves assets, liabilities,
              contracts, leases, employees, stock, goodwill and sometimes a restraint on the vendor&apos;s
              future activities. Each of those elements needs to be identified and dealt with clearly in
              the contract.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We act for both buyers and sellers. For buyers, that means reviewing the contract, checking
              the business records and making sure the terms reflect what is actually being acquired. For
              sellers, it means ensuring obligations are clearly defined, disclosure is handled properly
              and settlement is not delayed by an avoidable dispute.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              What is required depends on the structure of the transaction, the size of the business and
              the terms the parties have agreed. We will explain the process and the risks at each stage.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Business Sale and Purchase Matters We Assist With"
            intro="Our commercial team advises on the full transaction, including:"
          />
          <div className="matters-grid">
            {transactionMatters.map((item) => (
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
            <span className="eyebrow">Due Diligence</span>
            <h2>What Due Diligence Covers</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Due diligence is the checking process that sits behind any properly run business purchase.
              It gives the buyer a factual picture of what they are acquiring, and it produces the
              questions that should be answered in the contract. Typical areas of enquiry include:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {dueDiligenceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              The contract itself should address the key obligations on each side. That includes what is
              being sold, what is excluded, how stock is valued, when risk passes, what conditions must
              be met before settlement, and what happens if they are not. Restraint, confidentiality and
              vendor disclosure clauses all deserve close attention.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>Risks Before You Sign</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              For buyers, the main risks are paying for something that is not what it appeared to be:
              overstated figures, undeclared liabilities, a lease that cannot be transferred, or assets
              that are subject to finance or security interests. Those issues are best identified before
              the contract becomes binding.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For sellers, the risks tend to be about obligations: a disclosure that was incomplete, a
              condition that is not met by the buyer, or a settlement that is delayed while costs continue
              to run. Clear drafting and proper disclosure reduce the chance of a dispute after settlement.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a transaction does run into difficulty, we can also assist with commercial disputes
              and formal notices.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={saleFaqs} />
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
                Buying or selling a business? Get the documents reviewed first.
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
