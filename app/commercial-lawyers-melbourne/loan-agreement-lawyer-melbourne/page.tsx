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
  title: "Loan Agreement Lawyer Melbourne | Business & Private Loan Advice",
  description:
    "Bansal Lawyers assists with loan agreements, repayment terms, lender and borrower advice, security, guarantees, default clauses and loan disputes.",
  path: "/commercial-lawyers-melbourne/loan-agreement-lawyer-melbourne",
  keywords: [
    "Loan Agreement Lawyer Melbourne",
    "Loan Agreement Lawyers Melbourne",
    "Loan Contract Lawyer Melbourne",
    "Business Loan Agreement Lawyer Melbourne",
    "Private Loan Agreement Lawyer Melbourne",
    "Commercial Lawyer Melbourne",
  ],
});

const loanMatters = [
  "Business loan agreements between companies and lenders",
  "Private and family loan arrangements",
  "Director loans and shareholder loans",
  "Related party loans between connected businesses",
  "Repayment schedules and interest terms",
  "Default and enforcement clauses",
  "Security arrangements and charges",
  "Personal and corporate guarantees",
  "Variation and extension of existing loan terms",
  "Loan-related disputes and recovery steps",
];

const loanTerms = [
  "The exact amount advanced and how it is to be paid out",
  "The interest rate, how it is calculated and when it applies",
  "Repayment dates, instalment amounts and any interest-free period",
  "What happens if a payment is late, including default interest",
  "Whether the loan is secured, and by what",
  "Whether a personal or corporate guarantee is required",
  "The events that allow the lender to demand repayment early",
  "How the loan can be varied, extended or repaid ahead of schedule",
  "How disputes about the loan are to be resolved",
];

const loanFaqs = [
  {
    question: "Do I need a written loan agreement for a private loan?",
    answer:
      "A written agreement is strongly advisable, even between family members or business associates. Without one, it can be difficult to prove the amount lent, the agreed interest, the repayment terms, or whether the money was a loan or a gift. A written record protects both sides.",
  },
  {
    question: "What should a loan agreement include?",
    answer:
      "At a minimum it should record the amount, the interest terms, the repayment schedule, what happens on default, whether security or a guarantee is given, and how disputes are handled. The detail needed will depend on the size of the loan and the relationship between the parties.",
  },
  {
    question: "What is the difference between a secured and unsecured loan?",
    answer:
      "A secured loan is backed by an asset or another form of security that the lender can look to if the borrower does not repay. An unsecured loan relies on the borrower's promise to repay, which generally makes recovery more difficult if things go wrong.",
  },
  {
    question: "Should a lender obtain a personal guarantee?",
    answer:
      "A guarantee can give a lender additional avenues for recovery, but it is only as useful as the guarantor's ability to pay. Guarantees also carry serious consequences for the person giving them, so both sides should understand exactly what is being guaranteed and for how long.",
  },
  {
    question: "Can a loan agreement be changed after it is signed?",
    answer:
      "Yes, if both parties agree. Variations should be recorded in writing and signed, so that the current terms are clear. A verbal change to repayment terms or interest can create real difficulty later if there is a disagreement.",
  },
  {
    question: "What can be done if a loan is not repaid?",
    answer:
      "The first step is usually to review the agreement and the payment history, then consider a demand for payment or a negotiated repayment arrangement. Where those steps do not resolve the matter, further options may be available. What is appropriate depends on the documents, the amounts involved and the borrower's position.",
  },
];

export default function LoanAgreementLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Loan Agreement Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(loanFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Loan Agreement Lawyer Melbourne"
        intro={
          <>
            <p>
              A loan agreement should make the amount, the repayment terms and the consequences of
              default clear to both sides.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists lenders and borrowers in Melbourne with business loans, private
              loans, director and shareholder loans, security and guarantees.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Loan Agreement Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Advice for Lenders and Borrowers",
          "Documentation Prepared Before Money Moves",
          "Plain-Language Explanations",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Loan Documentation</span>
            <h2>Getting the Loan Agreement Right Before Money Changes Hands</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Loan arrangements between businesses, directors, family members and associates are often
              dealt with informally. Money is transferred, a repayment plan is discussed, and nothing is
              written down. That approach works well enough until a payment is missed or the parties
              disagree about what was agreed.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A properly prepared loan agreement records the terms while everyone is on good terms. It
              sets out how much is owed, when it is to be repaid, what interest applies and what happens
              if the borrower falls behind. It also gives the lender a clear basis for recovery if the
              loan is not repaid.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We act for both lenders and borrowers, so we understand the concerns on each side. Every
              loan depends on its own facts, the parties involved, the security available and the risks
              each party is willing to carry.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Loan Matters We Assist With"
            intro="We prepare, review and advise on a range of loan arrangements, including:"
          />
          <div className="matters-grid">
            {loanMatters.map((item) => (
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
            <span className="eyebrow">Key Terms</span>
            <h2>What a Loan Agreement Should Deal With</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The terms that matter most depend on the loan, but the following points should generally be
              addressed clearly:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {loanTerms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Guarantees deserve particular care. A guarantee can make a director or family member
              personally liable for a company debt, and the person giving it may not fully appreciate
              what that means until the lender calls on it. If you are asked to give a guarantee, it is
              worth understanding the extent of the obligation before signing.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>The Risks of an Informal Loan</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Where there is no written agreement, the parties often disagree later about basic facts: how
              much was lent, what interest applied, whether repayment was due on demand, or whether the
              payment was a loan at all. Those disputes are difficult and expensive to resolve because
              the evidence is limited to bank records and recollections.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Lenders can also find themselves without proper security or an enforceable guarantee. Where
              the borrower is a company, a lender who has not taken security may find recovery more
              limited if the company runs into difficulty.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Putting the agreement in writing at the outset is usually far simpler than trying to
              reconstruct it later. Where a loan has already gone wrong, we can also assist with debt
              recovery and related notices.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={loanFaqs} />
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
                Lending money, or being asked to guarantee a loan?
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
