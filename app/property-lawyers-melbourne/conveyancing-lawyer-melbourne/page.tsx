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
  title: "Conveyancing Lawyer Melbourne | Property Transfer Legal Support",
  description:
    "Bansal Lawyers provides conveyancing-related legal support for property contracts, transfers, settlement issues and property document concerns in Melbourne.",
  path: "/property-lawyers-melbourne/conveyancing-lawyer-melbourne",
  keywords: [
    "Conveyancing Lawyer Melbourne",
    "Conveyancing Lawyers Melbourne",
    "Property Lawyer Melbourne",
    "Conveyancing Legal Support Melbourne",
    "Property Transfer Lawyer Melbourne",
    "Property Settlement Lawyer Melbourne",
  ],
});

const conveyancingMatters = [
  "Reviewing the contract of sale before it is signed",
  "Reviewing the section 32 vendor statement",
  "Advising buyers and sellers on their obligations",
  "Checking title and ownership details",
  "Reviewing the plan and any registered interests",
  "Advising on settlement adjustments for rates and outgoings",
  "Preparing and reviewing transfer documents",
  "Advising on issues that arise before settlement",
  "Reviewing correspondence between the parties and their representatives",
  "Advising where a settlement is delayed or becomes disputed",
];

const processSteps = [
  "Review the contract and disclosure documents and explain the terms",
  "Confirm the conditions and the dates that apply to each party",
  "Identify any issue that needs to be resolved before settlement",
  "Prepare or review the documents required for the transfer",
  "Confirm the settlement adjustments and the amount payable",
  "Address any matter raised before completion",
  "Confirm completion has occurred and the transfer is registered",
];

const conveyancingFaqs = [
  {
    question: "What does conveyancing-related legal support involve?",
    answer:
      "It covers the legal side of transferring property ownership: reviewing the contract and disclosure documents, advising on obligations and deadlines, preparing and reviewing transfer documents, and dealing with issues that arise before settlement. The exact scope depends on the transaction and what you need assistance with.",
  },
  {
    question: "Do I need a lawyer for a property transaction?",
    answer:
      "Property contracts carry significant obligations, and the documents need to be prepared and reviewed correctly. Legal advice helps you understand what you are committing to and identify issues before they affect the transaction. The level of assistance required depends on the property and the circumstances.",
  },
  {
    question: "What is the difference between conveyancing and legal advice?",
    answer:
      "Conveyancing describes the practical process of transferring ownership. Legal advice is the analysis of the contract, the disclosure documents and the parties' obligations, and the guidance on what to do when an issue arises. In practice the two often overlap, which is why we describe our work as conveyancing-related legal support.",
  },
  {
    question: "What documents are needed for a property transfer?",
    answer:
      "The contract of sale, the section 32 statement, title and plan details, and the transfer document itself, along with any documents required by the parties' lenders. If the property is subject to a mortgage, discharge arrangements are also needed. What is required depends on the transaction.",
  },
  {
    question: "What happens if a settlement is delayed?",
    answer:
      "The contract usually sets out the consequences, including any notice requirements and default provisions. Delays can arise from finance, documents or a party not being ready to complete. Advice should be sought promptly, because the steps available depend on the contract and how close the settlement date is.",
  },
  {
    question: "How long does a property transaction usually take?",
    answer:
      "It depends on the contract. A standard settlement period in Victoria is often around 30 to 60 days from signing, but it can be longer or shorter depending on what the parties agree. The timeframe affects when finance, inspections and documents need to be finalised.",
  },
];

export default function ConveyancingLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Conveyancing Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(conveyancingFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Conveyancing Lawyer Melbourne"
        intro={
          <>
            <p>
              Transferring property involves contracts, documents and deadlines that need to be handled
              correctly before ownership changes.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides conveyancing-related legal support to buyers and sellers in
              Melbourne, including contract review, transfer documents and settlement issues.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Conveyancing Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Buyer and Seller Support",
          "Contract and Document Review",
          "Settlement Issues Addressed",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Property Transactions</span>
            <h2>Conveyancing-Related Legal Support in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A property transaction involves a sequence of steps: reviewing the contract, confirming the
              conditions, checking the title, preparing the transfer documents and completing settlement.
              Each step has a deadline attached, and a missed step can delay or disrupt the transaction.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We provide legal advice connected to that process. That includes reviewing the contract and
              the section 32 documents, explaining the obligations on each party, and advising on the
              documents required to transfer ownership.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We will discuss the scope of assistance needed for your matter at the outset, so you know
              what we will handle and what remains with you. What is required depends on the property, the
              contract and your circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Conveyancing Matters We Assist With"
            intro="Our property team provides legal support across the transaction, including:"
          />
          <div className="matters-grid">
            {conveyancingMatters.map((item) => (
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
            <h2>Steps in a Property Transaction</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The steps vary with the transaction, but a standard sale or purchase usually involves:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {processSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Title and ownership details are an important part of the process. A title search shows who
              owns the property and whether any interest, such as an easement, mortgage or caveat, is
              registered against it. Those details affect what you are buying or selling, and they should
              be reviewed before settlement rather than afterwards.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>Where the Process Can Go Wrong</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Most transactions complete without difficulty, but problems do arise. A condition may not be
              satisfied by its date, a document may be prepared incorrectly, or a party may not be ready
              to complete on time. An error in a transfer document can cause delays at the registry and
              may require corrections after settlement.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Settlement adjustments are another common source of confusion. Rates, land tax, owners
              corporation fees and other outgoings are apportioned between the parties as at the
              settlement date, and the calculation needs to be checked.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a transaction runs into difficulty, we can also assist with property settlement issues,
              notices and disputes.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={conveyancingFaqs} />
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
                Buying or selling? Talk to us about the documents and the process.
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
