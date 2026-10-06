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
  title: "Business Contract Lawyer Melbourne | Commercial Contract Advice",
  description:
    "Bansal Lawyers assists with business contracts, commercial agreements, contract review, negotiation, legal risks and business contract advice in Melbourne.",
  path: "/commercial-lawyers-melbourne/business-contract-lawyer-melbourne",
  keywords: [
    "Business Contract Lawyer Melbourne",
    "Business Contract Lawyers Melbourne",
    "Contract Lawyer Melbourne",
    "Commercial Contract Lawyer Melbourne",
    "Business Lawyer Melbourne",
    "Commercial Lawyers Melbourne",
  ],
});

const contractMatters = [
  "Supplier and vendor agreements",
  "Customer and client agreements",
  "Service agreements",
  "Contractor and subcontractor agreements",
  "Standard terms and conditions of trade",
  "Payment terms, invoicing and late payment provisions",
  "Scope of work and deliverable descriptions",
  "Delivery obligations and timeframes",
  "Termination, expiry and notice provisions",
  "Liability, indemnity and limitation of liability clauses",
  "Confidentiality and intellectual property terms",
  "Dispute resolution, governing law and jurisdiction clauses",
];

const keyTerms = [
  "Who the parties are, including the correct company or business entity",
  "Exactly what is being supplied, delivered or performed",
  "The price, how it is calculated and when it becomes payable",
  "What happens if payment is late or disputed",
  "Who carries risk, and at what point risk passes between the parties",
  "Whether liability is capped, excluded or left open",
  "How either party can bring the arrangement to an end",
  "What survives termination, such as confidentiality or restraint obligations",
  "How a disagreement is handled before anyone goes to court",
];

const contractFaqs = [
  {
    question: "Why does a business need a written contract?",
    answer:
      "A written contract records what each side has agreed to do. It reduces the chance of a misunderstanding about price, timing or scope, and it gives both parties something concrete to refer to if a disagreement arises later. Verbal arrangements can still be binding, but they are far harder to prove.",
  },
  {
    question: "Can you prepare standard terms of trade for my business?",
    answer:
      "Yes. We prepare terms and conditions of trade for suppliers, service providers and retailers, covering payment terms, risk, liability and dispute steps. We also check the terms against the unfair contract terms provisions in the Australian Consumer Law where they may apply.",
  },
  {
    question: "What should I do if the other party breaches the contract?",
    answer:
      "Start by checking what the contract says about breaches, notice requirements and dispute resolution. There is often a required process before stronger steps can be taken. We can review the position and advise on a notice, a negotiated outcome or another option.",
  },
  {
    question: "Can an existing contract be varied?",
    answer:
      "Usually yes, if both parties agree and the contract itself does not set out a specific process for changes. It is important the variation is recorded in writing and signed, so there is no argument later about what was actually agreed.",
  },
  {
    question: "Do I need a lawyer to review a short or simple contract?",
    answer:
      "Short contracts can still carry significant obligations, particularly around liability, indemnity and termination. Whether a review is worthwhile depends on the value of the deal, the risk involved and what you are being asked to accept. We can tell you quickly if the document raises a concern.",
  },
  {
    question: "How long does it take to prepare or review a business contract?",
    answer:
      "It depends on the length and complexity of the document. Standard commercial agreements can often be reviewed within a few business days. Where a deadline is approaching, tell us at the outset so the work can be prioritised.",
  },
];

export default function BusinessContractLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Business Contract Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(contractFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Business Contract Lawyer Melbourne"
        intro={
          <>
            <p>
              A clear business contract records what each party has agreed to do, and what happens if
              something goes wrong.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne business owners, companies, contractors and sole traders
              with preparing, reviewing and negotiating business contracts.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Business Contract Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Advice",
          "Plain-Language Contract Explanations",
          "Advice Before You Sign",
          "Practical Commercial Focus",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Commercial Certainty</span>
            <h2>Business Contract Advice for Melbourne Businesses</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Most business relationships rest on an agreement of some kind. It may be a formal contract,
              a set of standard terms, an accepted quote, or an exchange of emails that was never written
              up properly. When those terms are unclear, both sides can walk away with a very different
              understanding of what was promised.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We advise business owners, directors, contractors and sole traders on the agreements they
              rely on day to day. That includes preparing new contracts, reviewing documents drafted by
              the other side, and explaining what a clause actually means in practice before you commit
              to it.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Every matter depends on its own facts, documents and commercial context. Our role is to
              identify the risks in the document and explain your options, so the decision about how to
              proceed stays with you.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Business Contract Matters We Assist With"
            intro="We prepare, review and advise on a wide range of commercial agreements, including:"
          />
          <div className="matters-grid">
            {contractMatters.map((item) => (
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
            Each agreement is assessed against the contract itself, the commercial relationship, the
            deadlines involved and the risks particular to your business.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Key Terms</span>
            <h2>What a Clear Business Contract Should Cover</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A workable contract does not leave important commercial outcomes open to interpretation.
              When we prepare or review an agreement, we check whether the following points are dealt
              with clearly:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {keyTerms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Liability and indemnity clauses deserve particular attention. An indemnity can require you
              to cover the other party&apos;s losses in situations that may not be your fault, and a poorly
              drafted limitation clause may offer far less protection than it appears to. Confidentiality,
              restraint and dispute resolution clauses also carry consequences long after the work itself
              has finished.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>The Risk of Signing an Unclear Business Contract</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A contract that is vague about scope, price, timing or termination is difficult to enforce
              and easy to argue about. Problems that could have been settled with a short conversation
              often become disputes because neither party can point to a clear term.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Signing without advice can also mean accepting obligations you did not intend to take on:
              unlimited liability, an open-ended confidentiality obligation, a restraint that limits where
              you can work, or payment terms that place your cash flow under pressure.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A review before signing is usually quicker and less costly than dealing with the
              consequences afterwards. Where a matter does escalate, we can also assist with commercial
              disputes and legal notices.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={contractFaqs} />
      </Section>
    </>
  );
}
