import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
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
  title: "Commercial Lawyers Melbourne | Contracts & Disputes",
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
    href: "/commercial-lawyers-melbourne/business-contract-lawyer-melbourne/",
  },
  {
    title: "Contract review",
    href: "/commercial-lawyers-melbourne/contract-review-lawyer-melbourne/",
  },
  {
    title: "Commercial agreements",
    href: "/commercial-lawyers-melbourne/commercial-agreement-lawyer-melbourne/",
  },
  {
    title: "Loan agreements",
    href: "/commercial-lawyers-melbourne/loan-agreement-lawyer-melbourne/",
  },
  {
    title: "Shareholder agreements",
    href: "/commercial-lawyers-melbourne/shareholder-agreement-lawyer-melbourne/",
  },
  {
    title: "Partnership agreements",
    href: "/commercial-lawyers-melbourne/partnership-agreement-lawyer-melbourne/",
  },
  {
    title: "Business sale and purchase matters",
    href: "/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne/",
  },
  {
    title: "Commercial disputes",
    href: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/",
  },
  {
    title: "Debt recovery",
    href: "/commercial-lawyers-melbourne/debt-recovery-lawyer-melbourne/",
  },
  {
    title: "Business legal advice",
    href: "/commercial-lawyers-melbourne/business-legal-advice-lawyer-melbourne/",
  },
  {
    title: "Negotiations and settlements",
    href: "/commercial-lawyers-melbourne/negotiations-settlements-lawyer-melbourne/",
  },
  {
    title: "Legal notices",
    href: "/commercial-lawyers-melbourne/legal-notice-lawyer-melbourne/",
  },
];

const approachPoints = [
  "Careful review of commercial documents",
  "Practical advice based on business risk",
  "Plain-English explanations of contract terms",
  "Support with disputes and negotiations",
  "Help with business sales and purchases",
  "Legal guidance for business owners and companies",
];

const commercialFaqs = [
  {
    question: "Can a lawyer review a business contract before I sign it?",
    answer:
      "Yes. We review, draft and advise on business contracts and commercial agreements. Getting a contract checked before you sign is usually simpler than fixing problems later.",
  },
  {
    question: "Do you help with commercial disputes?",
    answer:
      "Yes. We help with commercial and contract disputes, unpaid debts, legal notices, negotiations and court steps. The earlier you get advice, the more options you tend to have.",
  },
  {
    question: "Can you help with loan agreements?",
    answer:
      "Yes. We help with loan agreements and business lending documents, including repayment terms, security and guarantees, and advise on the commercial side of them.",
  },
  {
    question: "Do you assist with buying or selling a business?",
    answer:
      "Yes. We help with the contract, document review, negotiations and the legal steps up to settlement.",
  },
  {
    question: "When should a business contact a commercial lawyer?",
    answer:
      "Ideally before signing a contract, entering an agreement or buying or selling a business. Also as soon as a dispute or unpaid debt comes up.",
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
        title="Commercial Lawyers in Melbourne"
        intro={
          <>
            <p>
              Plenty of business problems start with paperwork nobody checked properly. A vague contract, a weak agreement, an unpaid invoice or a dispute left to sit can end up costing a lot more than it needed to. These things are far easier to sort out early.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers is a Melbourne commercial law firm. We advise business owners, companies, professionals and investors on contracts, disputes and transactions.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call Our Commercial Law Team",
          href: "tel:+61422905860",
        }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="commercial" />}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Contract Review & Dispute Resolution",
          "Commercially Practical Guidance",
          "Prompt Matter Assessment",
          "Strategic Commercial Support",
        ]}
      />

      {/* 2. Practical Legal Advice for Business Matters [H2] */}
      <Section tone="white">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Practical Legal Advice for Business Matters</h2>
          <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Starting a business, reviewing a contract, signing an agreement, resolving a dispute or chasing a debt: getting advice early puts you in a stronger position.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We begin by understanding what&apos;s going on commercially. Then we read the documents, explain the risks in plain language and help you decide your next step. We look at the legal risk and the commercial reality together.
          </p>
        </div>
      </Section>

      {/* 3. Commercial Law Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <SectionHeader
          title="Commercial Law Matters We Assist With"
          intro="We can help with:"
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
      </Section>

      {/* 4. Contract Review and Commercial Agreements [H2] */}
      <Section tone="white" id="contracts-and-agreements">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Contract Review and Commercial Agreements</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A contract only works if everyone reads it the same way. Many disputes come down to vague wording, missing terms or clauses that favour one side.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our contract lawyers review, draft and advise on business contracts, service agreements, shareholder agreements, partnership agreements and other commercial documents. With shareholder and partnership agreements, we look at how decisions get made, how shares can be transferred, and what happens if someone wants to leave or the owners can&apos;t agree.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We also help with loan agreements and business lending documents. That includes repayment terms, security and guarantees, so both sides know what they&apos;re agreeing to.
          </p>
        </div>
      </Section>

      {/* 5. Business Sale and Purchase Matters [H2] */}
      <Section tone="warm" id="business-sales">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Business Sale and Purchase Matters</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Buying or selling a business is a big decision. The contract, lease terms, assets, liabilities, employee entitlements and settlement conditions all need a close look before you commit.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We help with the sale contract, review the documents (often called due diligence), handle negotiations and guide you through to completion.
          </p>
        </div>
      </Section>

      {/* 6. Commercial Disputes and Debt Recovery [H2] */}
      <Section tone="white" id="disputes-and-debt-recovery">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Commercial Disputes and Debt Recovery</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Business disputes eat into cash flow, operations, relationships and reputation, and they usually cost more the longer they run. Acting early generally leaves you with more options.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our commercial dispute lawyers help with contract disputes, negotiation, settlement and court steps where they&apos;re needed. For unpaid debts, we can send a letter of demand and prepare legal notices. If a company owes you money, we can also prepare a statutory demand under the Corporations Act. The company then has 21 days to pay the debt or apply to the court to have the demand set aside.
          </p>

          <div className="deadline-alert-box" style={{ marginTop: "1.25rem" }}>
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
                Claims have time limits. In Victoria, the general limit for a breach of contract claim is six years from when the breach happened. Some situations differ, for example contracts signed as deeds. If you think you may have a claim, get advice sooner rather than later.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Why Choose Bansal Lawyers for Commercial Law? [H2] */}
      <Section tone="warm" id="why-choose">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Why Choose Bansal Lawyers for Commercial Law?</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Business clients need advice that&apos;s clear, practical and sensible commercially.
          </p>
          <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
            What you can expect:
          </p>
          <ul className="points-list">
            {approachPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 8. Speak With Commercial Lawyers in Melbourne [H2] */}
      <CtaSection
        title="Speak With Commercial Lawyers in Melbourne"
        text="If you need help with a contract, agreement, business transaction, dispute or unpaid debt, get in touch. We'll tell you where you stand and what to do next."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call Our Commercial Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Commercial Solicitor"
        badges={[
          "Commercial contract & agreement reviews",
          "Prompt response for business transactions",
          "Melbourne CBD & virtual consultations",
        ]}
      />

      {/* 9. FAQs [H2] */}
      <Section tone="warm" id="faqs">
        <Faq
          items={commercialFaqs}
          title="Frequently Asked Questions"
          subtitle="Quick answers to what people usually ask before they book."
          contactTitle="Need experienced commercial guidance before signing an agreement or taking action?"
          contactButtonLabel="Book a Commercial Consultation"
          contactHref="/contact"
        />
      </Section>
    </>
  );
}
