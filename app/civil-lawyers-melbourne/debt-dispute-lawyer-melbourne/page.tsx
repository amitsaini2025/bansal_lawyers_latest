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
  title: "Debt Dispute Lawyer Melbourne | Payment & Debt Dispute Advice",
  description:
    "Bansal Lawyers assists with debt disputes, unpaid amounts, payment disagreements, legal notices, negotiations and civil dispute advice in Melbourne.",
  path: "/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne",
  keywords: [
    "Debt Dispute Lawyer Melbourne",
    "Debt Dispute Lawyers Melbourne",
    "Civil Lawyers Melbourne",
    "Debt Recovery Dispute Lawyer Melbourne",
    "Unpaid Debt Lawyer Melbourne",
    "Payment Dispute Lawyer Melbourne",
  ],
});

const debtDisputeMatters = [
  "Unpaid business invoices, trade debts, and professional fees",
  "Commercial loan disagreements and private lending repayment disputes",
  "Disputed contractor, subcontractor, and trades milestone payments",
  "Consumer payment claims, refunds, and contested service charges",
  "Landlord and tenant disputes over rental arrears and outgoings",
  "Disputed goods sold and delivered where quality or delivery is contested",
  "Partnership and joint venture capital contribution disputes",
  "Defending disputed debt claims and contesting improper default notices",
  "Drafting and responding to formal Letters of Demand",
  "Negotiating installment repayment plans and structured settlement deeds",
  "VCAT civil claims for debts under tribunal jurisdiction",
  "Magistrates' Court civil complaints and statutory enforcement steps",
];

const debtDisputeEvidence = [
  "Written contracts, agreements, quotes, purchase orders, or work authorizations",
  "Itemised invoices, payment schedules, and statement of accounts",
  "Proof of delivery, sign-off sheets, completion certificates, and handover notes",
  "Email trails, SMS messages, and contemporaneous records of payment promises",
  "Bank statements showing partial payments or returned direct debits",
  "Prior letters of demand, formal dispute notices, and written responses",
  "Documentation of any genuine defects, offsets, or counter-claims raised",
];

const debtDisputeFaqs = [
  {
    question: "What is the difference between debt recovery and a debt dispute?",
    answer:
      "A straightforward debt recovery matter involves an undisputed amount that the debtor simply has not paid due to liquidity issues. A debt dispute arises when the debtor actively contests their liability—for example, alleging that services were defective, goods were delivered late, pricing was incorrect, or that an offset or counter-claim applies. Disputed debts require a thorough legal assessment rather than routine debt collection.",
  },
  {
    question: "What should be included in a formal Letter of Demand for a debt?",
    answer:
      "A formal Letter of Demand must accurately identify the debtor entity, specify the exact amount claimed and the basis of the obligation (citing contracts or invoices), attach supporting evidence, provide a reasonable deadline for payment (typically 7 to 14 days), and clearly state the legal steps that will follow non-compliance, such as court proceedings or interest claims under the Penalty Interest Rates Act 1983 (Vic).",
  },
  {
    question: "What are the risks of delaying action on an unpaid debt?",
    answer:
      "Delaying recovery action increases the risk that the debtor may become insolvent, transfer assets, or close their business. Over time, evidence weakens, memories fade, and key witnesses move on. Additionally, under the Limitation of Actions Act 1958 (Vic), debts generally become statute-barred and legally unenforceable after six years from the date the cause of action accrued.",
  },
  {
    question: "How should I respond if someone issues an unfair debt claim against me?",
    answer:
      "Do not ignore the claim. Promptly review the invoices and contracts to identify any valid defences—such as unperformed work, failure of consideration, defective delivery, or lack of prior agreement on price. Seek legal advice to prepare a formal response denying liability on substantiated grounds, which can deter unfounded court action.",
  },
  {
    question: "Can debt disputes be settled on repayment terms out of court?",
    answer:
      "Yes. Negotiated settlements often involve agreed lump-sum discounts or structured instalment payment plans. To protect the creditor, such arrangements must be documented in a binding Deed of Settlement, often backed by a consent judgment or personal guarantee to ensure that the full original debt becomes instantly enforceable if a single payment milestone is missed.",
  },
  {
    question: "Which Victorian court or tribunal handles debt disputes?",
    answer:
      "Debts involving consumer transactions, goods, or services up to VCAT's jurisdictional limits can often be heard in the Victorian Civil and Administrative Tribunal. Debt claims up to $100,000 are heard in the Magistrates' Court of Victoria, while larger amounts proceed to the County Court or Supreme Court.",
  },
];

export default function DebtDisputeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Debt Dispute Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(debtDisputeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Debt Dispute Lawyer Melbourne"
        intro={
          <>
            <p>
              Unresolved payment disputes and unpaid debts disrupt cash flow, strain business relationships,
              and create commercial uncertainty.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists creditors and debtors across Melbourne with disputed invoices, loan
              repayments, formal demands, commercial negotiations, and civil court proceedings.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Debt Dispute Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Advice",
          "Evidence-Driven Debt Assessments",
          "Legally Compliant Demand Letters",
          "VCAT & Magistrates' Court Proceedings",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Payment Dispute Advice</span>
            <h2>Practical Legal Guidance for Disputed Debts in Victoria</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Payment disagreements arise across all areas of commerce and private affairs. A client
              refuses to pay an invoice citing quality concerns, a borrower stops meeting loan repayments,
              or a contractor claims variations that were never authorised.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              When an account is genuinely contested, simple debt collection techniques are rarely
              effective. Resolving the matter requires careful analysis of the contract terms, the evidence
              of performance, and the validity of any counter-claims raised.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our broader litigation practice at our{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> and{" "}
              <Link href="/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/">
                Civil Dispute Lawyer Melbourne
              </Link>{" "}
              pages. For uncontested commercial recoveries, review our{" "}
              <Link href="/commercial-lawyers-melbourne/debt-recovery-lawyer-melbourne/">
                Debt Recovery Lawyer Melbourne
              </Link>{" "}
              services within our{" "}
              <Link href="/commercial-lawyers-melbourne/">Commercial Lawyers Melbourne</Link> division.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Matters We Handle"
            title="Debt Disputes We Can Assist With"
            intro="We act for individuals, sole traders, companies, lenders, and borrowers in diverse payment disputes:"
          />
          <div className="matters-grid">
            {debtDisputeMatters.map((item) => (
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
            Each debt dispute is assessed on its specific contractual terms, accounting records, communications,
            and the solvency profile of the counterpart.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Evidence Requirements</span>
            <h2>Key Evidence Required in Debt Disputes</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Whether prosecuting a debt claim or defending an unsupported demand, solid documentation
              is essential. We assist clients in compiling and auditing:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {debtDisputeEvidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Before issuing formal legal correspondence, review our{" "}
              <Link href="/civil-lawyers-melbourne/legal-notice-lawyer-melbourne/">
                Legal Notice Lawyer Melbourne
              </Link>{" "}
              guidelines to ensure demands are formally compliant and legally sound.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Pragmatic Solutions</span>
            <h2>Negotiating Settlements and Avoiding Costly Litigation</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Court proceedings can quickly consume valuable commercial resources. Where viable, we prioritise
              structured negotiation, formal settlement conferences, and mediated repayment plans.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              When a settlement is negotiated, we prepare formal Deeds of Settlement and Release that clearly
              stipulate payment terms, default clauses, and final releases. When litigation is necessary, we
              prepare robust pleadings and evidence for VCAT or Magistrates&apos; Court proceedings.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To discuss an unpaid debt or defend a contested payment claim, visit our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page to arrange a consultation.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={debtDisputeFaqs} />
      </Section>
    </>
  );
}
