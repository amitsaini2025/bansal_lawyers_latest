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
  title: "Debt Recovery Lawyer Melbourne | Unpaid Invoices & Business Debts",
  description:
    "Bansal Lawyers assists with debt recovery, unpaid invoices, business debts, demand letters, negotiations, payment disputes and legal recovery options.",
  path: "/commercial-lawyers-melbourne/debt-recovery-lawyer-melbourne",
  keywords: [
    "Debt Recovery Lawyer Melbourne",
    "Debt Recovery Lawyers Melbourne",
    "Business Debt Recovery Melbourne",
    "Unpaid Invoice Lawyer Melbourne",
    "Debt Collection Lawyer Melbourne",
    "Commercial Lawyer Melbourne",
  ],
});

const debtMatters = [
  "Unpaid invoices and overdue accounts",
  "Business-to-business debts",
  "Debts arising from a written contract",
  "Loans that have not been repaid",
  "Progress payments and milestone disputes",
  "Disputed invoices and set-off claims",
  "Demand letters and letters of demand",
  "Negotiated repayment arrangements",
  "Deeds of settlement recording a payment plan",
  "Advice on whether court action is worthwhile",
  "Recovery where the debtor is a company",
  "Recovery where the debtor is an individual",
];

const evidenceItems = [
  "The signed contract, terms of trade or purchase order",
  "Quotes, estimates and accepted proposals",
  "Invoices, statements of account and payment records",
  "Delivery dockets, work records or proof the service was provided",
  "Emails and messages about the debt or a promise to pay",
  "Details of the debtor, including the correct legal entity",
  "Any security, guarantee or personal guarantee in place",
  "Records of previous recovery attempts or arrangements",
  "Correspondence about any dispute the debtor has raised",
  "Time limits that may affect the claim",
];

const debtFaqs = [
  {
    question: "How long should I wait before pursuing an unpaid invoice?",
    answer:
      "It depends on the terms of trade and the relationship. Many businesses follow up shortly after the due date, then escalate. Delay generally works against a creditor, because the debtor may argue the debt was not owed or may face their own financial difficulties. Acting reasonably promptly is usually sensible.",
  },
  {
    question: "What is a letter of demand?",
    answer:
      "A letter of demand is a formal written request for payment, setting out the amount owed, the basis of the debt and a deadline for payment. It records the creditor's position clearly and is often the step that prompts payment. It should be prepared carefully, because the wording can matter if the matter proceeds further.",
  },
  {
    question: "What if the debtor disputes the debt?",
    answer:
      "A dispute changes the approach. The contract, the work records and the correspondence need to be reviewed to understand the basis of the claim and any defence raised. Depending on the facts, the matter may be better dealt with through negotiation or a formal dispute process rather than continued demands.",
  },
  {
    question: "When might court action be considered?",
    answer:
      "Court action may be considered where the debt is not disputed, the debtor has not responded to reasonable steps, and the amount justifies the cost. Before proceeding, it is worth considering whether the debtor has the capacity to pay, because a judgment that cannot be enforced achieves little.",
  },
  {
    question: "What documents help with debt recovery?",
    answer:
      "The strongest position comes from a clear written record: a signed contract or terms of trade, invoices, proof the goods or services were provided, and any written acknowledgment of the debt. If you are missing documents, it is still worth seeking advice, because other evidence may support the claim.",
  },
  {
    question: "Do I need a personal guarantee to recover a company debt?",
    answer:
      "Without a guarantee, recovery from a company is generally limited to the company's own assets. If a director or another person has given a personal guarantee, the creditor may have additional options. Whether a guarantee is enforceable depends on its terms and the circumstances in which it was given.",
  },
];

export default function DebtRecoveryLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Debt Recovery Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(debtFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Debt Recovery Lawyer Melbourne"
        intro={
          <>
            <p>
              Unpaid invoices and overdue accounts affect cash flow, and the longer they remain
              outstanding the harder they can be to recover.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne businesses with debt recovery, demand letters,
              negotiations and advice on the recovery options available.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Debt Recovery Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Business-to-Business Debts",
          "Demand Letters and Negotiated Payment Plans",
          "Practical Advice on Recovery Options",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Recovering What You Are Owed</span>
            <h2>Debt Recovery for Melbourne Businesses</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Most businesses have an unpaid invoice somewhere in the ledger. Often it is resolved with a
              reminder or a phone call. Sometimes it is not, and the amount continues to sit there while
              the cost of chasing it grows.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist creditors in recovering money owed, whether the debt arises from a contract, a
              loan, a sale of goods or services, or an informal arrangement. The first step is usually to
              review the documents and confirm the basis of the debt, then decide on an approach that fits
              the amount involved and the debtor&apos;s circumstances.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Not every debt justifies the cost of formal proceedings, and a realistic assessment early
              can save both time and expense. What is appropriate depends on the evidence, the debtor and
              the amount at stake.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Debt Recovery Matters We Assist With"
            intro="Our commercial team assists with a range of recovery matters, including:"
          />
          <div className="matters-grid">
            {debtMatters.map((item) => (
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
            <span className="eyebrow">Evidence</span>
            <h2>Documents That Support a Recovery</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A recovery is only as strong as the record behind it. Where the following documents exist,
              they should be gathered before any formal step is taken:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {evidenceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              It also helps to confirm the correct legal name of the debtor. A demand addressed to the
              wrong entity, or proceedings issued against the wrong party, can waste time and money. If
              the debtor is a company, its current registration status is worth checking before any
              further steps are taken.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Timing</span>
            <h2>Why Delaying Recovery Creates Risk</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Debt recovery is affected by time. The longer a debt remains unpaid, the more likely it is
              that the debtor&apos;s financial position has changed, that records have been lost, or that
              the debtor has moved or ceased trading. Evidence also becomes harder to assemble as staff
              change and correspondence is archived.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For the creditor, there is also a cash flow cost. Money tied up in overdue accounts is money
              that cannot be used in the business, and repeated chasing consumes management time.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where the debtor raises a genuine dispute, the matter may need to be handled as a commercial
              dispute rather than a straightforward recovery. We can advise on which path applies.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={debtFaqs} />
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
                Owed money and not sure what to do next?
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
