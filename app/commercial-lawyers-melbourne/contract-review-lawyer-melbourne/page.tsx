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
  title: "Contract Review Lawyer Melbourne | Business & Commercial Contracts",
  description:
    "Bansal Lawyers reviews business and commercial contracts, explains legal risks, unclear terms, payment clauses, obligations and dispute issues.",
  path: "/commercial-lawyers-melbourne/contract-review-lawyer-melbourne",
  keywords: [
    "Contract Review Lawyer Melbourne",
    "Contract Review Lawyers Melbourne",
    "Business Contract Review Melbourne",
    "Commercial Contract Review Melbourne",
    "Legal Contract Review Melbourne",
    "Business Lawyer Melbourne",
  ],
});

const reviewScope = [
  "Payment terms and what happens if an invoice is disputed",
  "Renewal, rollover and automatic extension clauses",
  "Termination rights, notice periods and exit conditions",
  "Liability clauses and any cap on damages",
  "Indemnities and what you may be asked to cover",
  "Personal guarantees and who is actually on the hook",
  "Confidentiality obligations and how long they last",
  "Restraint clauses, where they apply and what they restrict",
  "Intellectual property ownership and licensing",
  "Dispute resolution steps and the governing law",
];

const contractTypes = [
  "Supplier and distribution agreements",
  "Customer and client contracts",
  "Service agreements and statements of work",
  "Contractor and subcontractor agreements",
  "Heads of agreement and letters of intent",
  "Partnership and joint venture contracts",
  "Franchise and licensing agreements",
  "Terms and conditions of trade",
  "Deeds of variation and renewal documents",
  "Documents drafted by the other party's lawyers",
];

const reviewFaqs = [
  {
    question: "Why should a contract be reviewed before signing?",
    answer:
      "Once you sign, you are generally bound by the terms in the document, whether or not you read them carefully. A review before signing gives you the chance to understand the obligations you are taking on and to ask for changes while the other party still has an incentive to agree.",
  },
  {
    question: "What is the risk of a personal guarantee?",
    answer:
      "A personal guarantee can make you personally responsible for another party's debts or obligations, which may put your own assets at risk if the business cannot meet them. If a contract includes a guarantee, it is worth understanding the full extent of what you are being asked to guarantee and for how long.",
  },
  {
    question: "Can you explain the contract in plain language?",
    answer:
      "Yes. We go through the document and explain what each significant clause means in practice, rather than simply repeating the legal wording. You should be able to make a decision knowing what the terms actually require of you.",
  },
  {
    question: "Do you review contracts prepared by the other party?",
    answer:
      "Yes. Many of the contracts we review have been drafted by the other side, often with their interests in mind. We identify the terms that shift risk onto you and suggest amendments or points to negotiate.",
  },
  {
    question: "What if I have already signed the contract?",
    answer:
      "It is still worth understanding your position, particularly if a problem has started or a deadline is approaching. Depending on the circumstances, there may be room to negotiate a variation, or to rely on a particular clause. We can explain the options available on the facts.",
  },
  {
    question: "How quickly can a contract be reviewed?",
    answer:
      "It depends on the length and complexity of the document, but standard commercial contracts are often reviewed within a few business days. If you are working to a deadline, let us know when you make contact so the review can be scheduled accordingly.",
  },
];

export default function ContractReviewLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Contract Review Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(reviewFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Contract Review Lawyer Melbourne"
        intro={
          <>
            <p>
              A contract review before signing helps you understand what you are agreeing to, and where
              the risks sit in the document.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers reviews business and commercial contracts for Melbourne clients and explains
              the terms in plain language.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Contract Review Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Independent Review Before Signing",
          "Plain-Language Explanations",
          "Clause-by-Clause Risk Assessment",
          "Practical Amendment Suggestions",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Before You Sign</span>
            <h2>Reviewing a Contract Before You Commit</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Contracts are often presented with a short timeframe and an expectation of a quick answer.
              In that situation it is easy to focus on the commercial terms — the price and the work —
              and skip over the clauses that decide what happens if things do not go to plan.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A contract review gives you a clear picture before you are bound. We read the document in
              full, identify the terms that carry real risk, and explain what each one means for your
              business. Where a clause is unbalanced or unclear, we set out what could be changed and how
              to raise it with the other party.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              What matters most in a review depends on the contract, the parties, the value of the deal
              and your individual circumstances. We will tell you where we think the attention should go.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="What We Look At"
            title="Clauses We Review Closely"
            intro="Every contract is different, but these are the areas that most often create problems:"
          />
          <div className="matters-grid">
            {reviewScope.map((item) => (
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
            <span className="eyebrow">Documents We Review</span>
            <h2>Types of Contracts We Review</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              We review agreements across a broad range of commercial arrangements, including:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {contractTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Some clauses carry more weight than their length suggests. A renewal clause can lock you
              into another term. A restraint clause can limit where you work or who you deal with after
              the arrangement ends. An indemnity can require you to cover losses that have nothing to do
              with your own conduct. We point these out clearly rather than leaving you to work through
              the document alone.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Understanding Your Obligations</span>
            <h2>Knowing What You Are Agreeing To</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A review is not only about risk. It is also about understanding what you must do, by when,
              and what the other party owes you in return. That includes delivery dates, standards of
              work, reporting requirements, insurance obligations and who is responsible for approvals.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We explain the terms so that you can decide whether the arrangement is one you can properly
              perform. If the answer is no, it is better to know before signing than after.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={reviewFaqs} />
      </Section>
    </>
  );
}
