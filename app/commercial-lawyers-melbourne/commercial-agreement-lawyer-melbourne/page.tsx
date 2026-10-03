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
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Commercial Agreement Lawyer Melbourne | Business Agreements & Advice",
  description:
    "Bansal Lawyers drafts and reviews commercial agreements in Melbourne. Service agreements, supplier terms, contractor contracts, and bespoke business documentation.",
  path: "/commercial-lawyers-melbourne/commercial-agreement-lawyer-melbourne",
  keywords: [
    "Commercial Agreement Lawyer Melbourne",
    "Commercial Agreements Melbourne",
    "Business Agreement Lawyer Melbourne",
    "Service Agreement Lawyer Melbourne",
    "Supplier Agreement Lawyer Melbourne",
    "Contractor Agreement Lawyer Melbourne",
  ],
});

const agreementTypes = [
  "Client and customer service agreements",
  "Supplier and procurement contracts",
  "Independent contractor and consultancy agreements",
  "Distribution, agency, and reseller agreements",
  "Master Services Agreements (MSAs) and Statements of Work (SOWs)",
  "Confidentiality and Non-Disclosure Agreements (NDAs)",
  "Equipment hire and plant leasing agreements",
  "Joint venture and strategic commercial alliance deeds",
];

const commercialConsiderations = [
  "Customized terms reflecting your specific operational workflow and pricing model",
  "Full compliance with Australian Consumer Law (ACL) and unfair contract term laws",
  "Clear risk-allocation clauses, liability caps, and insurance requirements",
  "Enforceable payment terms, milestone billing, and debt-recovery remedies",
  "Intellectual property assignment, protection, and licensing terms",
  "Pragmatic dispute escalation and mediation processes",
];

const commercialAgreementFaqs = [
  {
    question: "What is the difference between a business contract and a commercial agreement?",
    answer:
      "In practical legal terms, the terms are often used interchangeably. 'Commercial agreement' usually refers to agreements regulating recurring business operations—such as supply contracts, service terms, contractor arrangements, or licensing frameworks.",
  },
  {
    question: "Why should I avoid using free online contract templates?",
    answer:
      "Generic internet templates often originate from foreign jurisdictions (such as the US or UK), use outdated legal terminology, and fail to comply with Australian Consumer Law or Victorian statutory requirements, leaving you with an unenforceable agreement when a dispute arises.",
  },
  {
    question: "Can Bansal Lawyers update our existing standard service terms?",
    answer:
      "Yes. We frequently review and update existing business terms to reflect recent changes in unfair contract terms legislation and modern commercial practices.",
  },
  {
    question: "How do you protect intellectual property in commercial agreements?",
    answer:
      "We include explicit intellectual property clauses that clearly state who owns pre-existing IP, who owns newly created materials or deliverables, and whether any license is conditional on full payment.",
  },
  {
    question: "How do I get started with drafting a new commercial agreement?",
    answer:
      "Contact our Melbourne office. We will discuss your commercial objectives, understand your operational processes, and provide a clear scope of work and quote for drafting your agreement.",
  },
];

export default function CommercialAgreementLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Commercial Agreement Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(commercialAgreementFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Commercial Agreement Lawyer Melbourne"
        intro={
          <>
            <p>
              Commercial agreements form the bedrock of day-to-day business. Having clear, practical, and enforceable agreements safeguards your operations and financial security.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers prepares, reviews, and refines commercial agreements tailored to your specific industry, commercial objectives, and risk profile.
            </p>
          </>
        }
        primaryAction={{ label: "Discuss Your Agreement", href: "/contact" }}
        secondaryAction={{ label: "Call Our Team", href: "tel:+61422905860" }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Bespoke Commercial Drafting",
          "Australian Consumer Law Compliant",
          "Practical Business Focus",
        ]}
      />

      {/* Practical Foundation */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Operational Protection</span>
            <h2>Tailored Commercial Agreements for Melbourne Businesses</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Every commercial transaction requires documentation that aligns with how your business actually functions. Off-the-shelf templates rarely address industry-specific risks, unique billing schedules, or complex service deliverables.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, we work directly with business owners, directors, and managers to draft agreements that provide legal clarity while maintaining good commercial relationships with clients, contractors, and suppliers.
            </p>
          </div>
        </Container>
      </Section>

      {/* Agreement Types */}
      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Types of Agreements"
            title="Commercial Agreements We Draft and Advise On"
            intro="We assist with comprehensive documentation across your operational supply chain:"
          />
          <div className="matters-grid">
            {agreementTypes.map((item) => (
              <div key={item} className="matter-item">
                <svg className="matter-item__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Strategic Considerations */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Best Practice</span>
            <h2>What Makes an Effective Commercial Agreement?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Our commercial lawyers ensure every document balances strong legal protections with commercial practicality:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {commercialConsiderations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={commercialAgreementFaqs} />
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
                Ready to establish or update your commercial agreements?
              </p>
              <ButtonLink href="/contact" variant="primary">
                Book a Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
