import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  CtaSection,
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
  title: "Commercial Lawyers Melbourne | Contracts & Business Disputes",
  description:
    "Commercial lawyers in Melbourne for contracts, loan agreements, business sales, disputes and debt recovery. Book a consultation with Bansal Lawyers.",
  path: "/commercial-lawyers-melbourne",
  keywords: [
    "Commercial Lawyers Melbourne",
    "Business Lawyers Melbourne",
    "Contract Lawyers Melbourne",
    "Commercial Dispute Lawyers Melbourne",
    "Debt Recovery Lawyers Melbourne",
    "Shareholder Agreements Melbourne",
    "Business Sale and Purchase Melbourne",
    "Loan Agreements Melbourne",
  ],
});

const commercialMatters = [
  {
    title: "Business contracts",
    href: "#contracts-and-agreements",
  },
  {
    title: "Contract review",
    href: "#contracts-and-agreements",
  },
  {
    title: "Commercial agreements",
    href: "#contracts-and-agreements",
  },
  {
    title: "Loan agreements",
    href: "#contracts-and-agreements",
  },
  {
    title: "Shareholder agreements",
    href: "#contracts-and-agreements",
  },
  {
    title: "Partnership agreements",
    href: "#contracts-and-agreements",
  },
  {
    title: "Business sale and purchase matters",
    href: "#business-sales",
  },
  {
    title: "Commercial disputes",
    href: "#disputes-and-debt-recovery",
  },
  {
    title: "Debt recovery",
    href: "#disputes-and-debt-recovery",
  },
  {
    title: "Business legal advice",
    href: "/contact/",
  },
  {
    title: "Negotiations and settlements",
    href: "#disputes-and-debt-recovery",
  },
  {
    title: "Legal notices",
    href: "/civil-lawyers-melbourne/",
  },
];

const approachPoints = [
  "Careful review of commercial documents",
  "Practical advice based on business risk",
  "Clear explanation of contract terms",
  "Support with disputes and negotiations",
  "Assistance with business sale and purchase matters",
  "Legal guidance for business owners and companies",
];

const commercialFaqs = [
  {
    question: "Can a lawyer review a business contract before I sign it?",
    answer:
      "Yes. We review, draft and advise on business contracts and commercial agreements. Having a contract checked before you sign is usually easier and cheaper than trying to fix problems afterwards.",
  },
  {
    question: "Do you help with commercial disputes?",
    answer:
      "Yes. We assist with commercial disputes, contract disputes, unpaid debts, legal notices, negotiations and court steps. The earlier you get advice, the more options you usually have.",
  },
  {
    question: "Can you help with loan agreements?",
    answer:
      "Yes. We assist with loan agreements and business lending documents, including repayment terms, security and guarantees, and give related commercial legal advice.",
  },
  {
    question: "Do you assist with buying or selling a business?",
    answer:
      "Yes. We assist with business sale and purchase matters, contract review, negotiations and the legal steps leading up to settlement.",
  },
  {
    question: "When should a business contact a commercial lawyer?",
    answer:
      "Before signing a contract, entering an agreement or buying or selling a business, and as soon as a dispute or unpaid debt appears.",
  },
];

export default function CommercialLawyersMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(commercialFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Commercial Lawyers in Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Commercial Lawyers in Melbourne"
        intro={
          <>
            <p>
              A lot of business problems trace back to paperwork nobody checked properly. An unclear contract, a weak agreement, an unpaid invoice or a dispute left to grow can put a business at serious risk. It&apos;s much easier to deal with these things before they turn into a crisis.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers is a Melbourne commercial law firm. We give practical legal advice to business owners, companies, professionals, investors and other commercial clients.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call Our Commercial Law Team",
          href: "tel:+61422905860",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Contract Review & Dispute Resolution",
          "Commercially Practical Guidance",
          "Prompt Matter Assessment",
        ]}
      />

      {/* 2. Practical Legal Advice for Business Matters [H2] */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Commercial Support</span>
            <h2>Practical Legal Advice for Business Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Whether you&apos;re starting a business, reviewing a contract, signing an agreement, resolving a dispute or chasing a debt, good advice early on protects your position.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We start by understanding the commercial issue. Then we go through the documents, explain the risks in plain terms and help you decide what to do next. As business lawyers in Melbourne, we look at the legal risk and the commercial reality together.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Commercial Law Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Commercial Law Matters We Assist With"
            intro="As a commercial law firm in Melbourne, Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {commercialMatters.map((matter) => (
              <Link
                key={matter.title}
                href={matter.href}
                className="matter-item"
                title={`Explore ${matter.title}`}
              >
                <svg
                  className="matter-item__icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{matter.title}</span>
                <svg
                  className="matter-item__arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Contract Review and Commercial Agreements [H2] */}
      <Section tone="white" id="contracts-and-agreements">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Contractual Terms</span>
            <h2>Contract Review and Commercial Agreements</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A contract only works if everyone reads it the same way. Vague wording, missing terms and one-sided clauses are behind a lot of disputes.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our contract lawyers in Melbourne review, draft and advise on business contracts, service agreements, shareholder agreements, partnership agreements and other commercial documents. For shareholder and partnership agreements, that means looking at how decisions are made, how shares can be transferred, and what happens if someone wants out or the owners can&apos;t agree.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We also help with loan agreements and business lending documents, including repayment terms, security and guarantees, so both sides know exactly what they&apos;re committing to.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Business Sale and Purchase Matters [H2] */}
      <Section tone="warm" id="business-sales">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Transactions & Due Diligence</span>
            <h2>Business Sale and Purchase Matters</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Buying or selling a business is a big decision. Contracts, lease terms, assets, liabilities, employee entitlements and settlement conditions all need a careful look before you commit.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We help with the sale contract, reviewing the documents (often called due diligence), negotiations and legal guidance right up to completion.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Commercial Disputes and Debt Recovery [H2] */}
      <Section tone="white" id="disputes-and-debt-recovery">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Dispute Resolution & Enforcement</span>
            <h2>Commercial Disputes and Debt Recovery</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Business disputes hit cash flow, operations, relationships and reputation, and they get more expensive the longer they run. Acting early usually gives you more options.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our commercial dispute lawyers in Melbourne help with contract disputes, negotiation, settlement and court steps where they&apos;re needed. As debt recovery lawyers, we can send a letter of demand, prepare legal notices and, for company debts, prepare a statutory demand under the Corporations Act, which gives the company 21 days to pay or apply to have it set aside.
            </p>

            <div className="deadline-alert-box">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <strong>Statutory Limitation Periods for Commercial Claims</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  Time limits apply to claims. In Victoria, it&apos;s generally six years for a breach of contract, so don&apos;t leave it too long.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Why Choose Bansal Lawyers for Commercial Law? [H2] */}
      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Business-Focused Advocacy</span>
            <h2>Why Choose Bansal Lawyers for Commercial Law?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Business clients need advice that&apos;s clear, practical and commercially sensible.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {approachPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 8. Speak With Commercial Lawyers in Melbourne [H2] */}
      <CtaSection
        title="Speak With Commercial Lawyers in Melbourne"
        text="If you need help with a contract, agreement, business transaction, dispute or debt recovery matter, Bansal Lawyers can give you practical advice on where you stand and what to do next."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Commercial Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Commercial Solicitor"
        badges={["Commercial contract & agreement reviews", "Prompt response for business transactions", "Melbourne CBD & virtual consultations"]}
      />

      {/* 9. FAQs [H2] */}
      <Section tone="warm" id="faqs">
        <Faq items={commercialFaqs} />
      </Section>
    </>
  );
}
