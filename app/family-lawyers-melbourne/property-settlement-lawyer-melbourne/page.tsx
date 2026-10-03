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
  title:
    "Property Settlement Lawyer Melbourne | Family Property & Asset Division",
  description:
    "Bansal Lawyers assists with property settlement, asset division, financial agreements, superannuation, debts and family law property matters in Melbourne.",
  path: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne",
  keywords: [
    "Property Settlement Lawyer Melbourne",
    "Property Settlement Lawyers Melbourne",
    "Family Property Settlement Lawyer",
    "Divorce Property Settlement Melbourne",
    "Asset Division Lawyer Melbourne",
    "Family Lawyer Melbourne",
    "Financial Settlement Lawyer Melbourne",
  ],
});

const propertyMattersList = [
  "Property settlement after separation",
  "Divorce-related property matters",
  "Asset and debt division",
  "Family home disputes",
  "Superannuation splitting matters",
  "Business and company interests",
  "Investment property matters",
  "Financial disclosure issues",
  "Consent orders",
  "Binding financial agreements",
  "Negotiations and settlement discussions",
  "Court-related family property matters",
];

const includedItems = [
  "Family home",
  "Land or investment properties",
  "Bank accounts",
  "Loans and mortgages",
  "Credit card debts",
  "Vehicles",
  "Superannuation",
  "Business interests",
  "Company shares",
  "Trust interests",
  "Personal belongings",
  "Inheritance-related issues",
  "Other assets and liabilities",
];

const financialDocuments = [
  "Bank statements",
  "Mortgage documents",
  "Superannuation statements",
  "Property valuations",
  "Business records",
  "Tax returns",
  "Payslips",
  "Loan documents",
  "Credit card statements",
  "Investment records",
  "Company or trust documents",
  "Evidence of financial contributions",
];

const whyChoosePoints = [
  "Clear advice about property settlement options",
  "Review of assets, debts, and financial documents",
  "Guidance on financial disclosure",
  "Support with negotiations and settlement discussions",
  "Assistance with consent orders and financial agreements",
  "Practical advice for disputed property matters",
  "Professional handling of sensitive family law issues",
];

const propertyFaqs = [
  {
    question:
      "Can Bansal Lawyers help with property settlement after separation?",
    answer:
      "Yes. Bansal Lawyers assists with property settlement after separation, including asset division, debt issues, superannuation, consent orders, and financial agreement advice.",
  },
  {
    question: "Does divorce automatically divide property?",
    answer:
      "No. Divorce and property settlement are separate legal issues. Property settlement should be handled separately and properly documented.",
  },
  {
    question: "What assets are included in property settlement?",
    answer:
      "Assets may include the family home, investment properties, bank accounts, superannuation, vehicles, business interests, shares, personal assets, and debts.",
  },
  {
    question: "Do I need to disclose financial documents?",
    answer:
      "In many property settlement matters, financial disclosure is important. Both parties may need to provide documents showing assets, debts, income, and financial interests.",
  },
  {
    question: "Can you help if my former partner is not cooperating?",
    answer:
      "Yes. We assist with disputed property settlement matters, negotiation, document requests, legal advice, and court-related steps where required.",
  },
  {
    question: "Should a property settlement agreement be formalised?",
    answer:
      "Yes. Informal agreements can cause problems later. Consent orders or a financial agreement may help document the agreement properly.",
  },
];

export default function PropertySettlementLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Property Settlement Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(propertyFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Property Settlement Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Property Settlement Lawyer Melbourne"
        intro={
          <>
            <p>
              Property settlement can be one of the most important parts of
              separation or divorce. It may involve the family home, savings,
              loans, superannuation, business interests, investments, vehicles,
              personal assets, and debts.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with family law property settlement
              matters in Melbourne. We help you understand your financial
              position, your options, and the steps needed to reach a clear and
              practical outcome. As experienced{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we safeguard your financial security and future interests.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Property Settlement Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Melbourne Office & Remote Consultations",
          "Comprehensive Asset Pool & Contribution Assessments",
          "Consent Orders & Binding Financial Agreements (BFAs)",
          "FCFCOA Complex Asset & Business Valuation Litigation",
        ]}
      />

      {/* 2. Legal Advice Before Dividing Property [H2] */}
      <Section tone="white" id="advice-before-dividing">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Financial Planning</span>
            <h2>Legal Advice Before Dividing Property</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Property settlement is not always simple. Even when both parties
              agree to separate, there may still be questions about who keeps
              the home, how debts are handled, what happens to superannuation,
              and how assets should be divided.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before making an agreement, it is important to understand:
            </p>
            <ul className="points-list">
              <li>What assets and debts are part of the property pool</li>
              <li>Whether superannuation needs to be considered</li>
              <li>Whether business interests are involved</li>
              <li>What financial and non-financial contributions may be relevant</li>
              <li>Whether future needs should be considered</li>
              <li>Whether the agreement should be formalised</li>
              <li>Whether consent orders or a financial agreement may be required</li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your situation and explain your options
              in plain language.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Property Settlement Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Property Settlement Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {propertyMattersList.map((matter) => (
              <div key={matter} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{matter}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--navy-950)", fontWeight: 600 }}>
            Each matter should be reviewed based on the financial facts,
            documents, relationship history, and client&apos;s personal
            circumstances.
          </p>
        </Container>
      </Section>

      {/* 4. What Can Be Included in a Property Settlement? [H2] */}
      <Section tone="white" id="property-pool">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">The Balance Sheet</span>
            <h2>What Can Be Included in a Property Settlement?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A property settlement may include more than just the family home.
              The full financial picture should be reviewed before any agreement
              is made.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common property settlement items may include:
            </p>
            <ul className="points-list">
              {includedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              The exact property pool depends on the facts of the relationship
              and the documents available.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Financial Disclosure and Documents [H2] */}
      <Section tone="warm" id="financial-disclosure">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Duty of Disclosure</span>
            <h2>Financial Disclosure and Documents</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Property settlement usually requires a clear understanding of both
              parties&apos; financial position. Missing, incomplete, or unclear
              financial documents can create disputes and delays.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Documents may include:
            </p>
            <ul className="points-list">
              {financialDocuments.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can help clients understand what documents may be
              relevant and how the financial position should be reviewed.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Property Settlement After Divorce [H2] */}
      <Section tone="white" id="divorce-timing">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">12-Month Limitation Period</span>
            <h2>Property Settlement After Divorce</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Divorce and property settlement are separate legal issues. A
              divorce does not automatically divide assets or debts. Working
              with an experienced{" "}
              <Link
                href="/family-lawyers-melbourne/divorce-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Divorce Lawyer Melbourne
              </Link>{" "}
              ensures you understand the strict 12-month statutory deadline
              following a divorce order to initiate property proceedings in
              court.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Some clients finalise property matters before divorce. Others deal
              with property settlement after separation or after divorce. The
              right timing depends on the situation, the level of agreement, and
              whether urgent financial issues are involved.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Getting advice early can help avoid confusion, missed time limits,
              and poorly documented informal arrangements. If there are children
              of the marriage, our{" "}
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Child Custody Lawyer Melbourne
              </Link>{" "}
              can concurrently coordinate parenting arrangements.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Consent Orders and Financial Agreements [H2] */}
      <Section tone="warm" id="consent-orders">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Legal Enforceability</span>
            <h2>Consent Orders and Financial Agreements</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              If both parties reach an agreement about property settlement, the
              agreement should be properly documented. Informal arrangements can
              create problems later if they are unclear or not legally
              enforceable.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our dedicated{" "}
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Consent Orders Lawyer Melbourne
              </Link>{" "}
              assists with drafting consent orders, financial agreement advice,
              and document preparation for family property matters.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A properly prepared document can help reduce future disputes and
              give both parties clearer certainty.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Disputed Property Settlement Matters [H2] */}
      <Section tone="white" id="disputed-matters">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Negotiation & Litigation</span>
            <h2>Disputed Property Settlement Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Not every property settlement is agreed easily. Disputes may
              happen when one party refuses to disclose documents, disagrees
              about asset values, wants to keep the home, or believes the
              proposed division is unfair.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients with negotiation, legal advice, document review,
              settlement discussions, and court-related steps where required.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Why Choose Bansal Lawyers for Property Settlement Matters? [H2] */}
      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Trusted Melbourne Solicitors</span>
            <h2>
              Why Choose Bansal Lawyers for Property Settlement Matters?
            </h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Property settlement needs careful review and practical legal
              advice. The outcome can affect your financial future, so decisions
              should not be rushed.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {whyChoosePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We help clients understand their position before making important
              financial decisions.
            </p>
          </div>
        </Container>
      </Section>

      {/* 10. Speak With a Property Settlement Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Property Settlement Lawyer in Melbourne"
        text="If you are separating, divorced, or dealing with unresolved property issues, Bansal Lawyers can help you understand your options."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Property Settlement Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Asset division & balance sheet clarity", "Binding financial agreements & consent orders", "Melbourne CBD & virtual consultations"]}
      />

      {/* Topic Cluster Quick Links */}
      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practice Network</span>
            <h2 style={{ marginBottom: "1.5rem" }}>
              Related Family Law Services
            </h2>
            <div className="practice-areas-grid">
              <Link
                href="/family-lawyers-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Family Lawyers Melbourne</h3>
                <p>
                  Comprehensive family law advice for separation, property,
                  children, and financial agreements.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/divorce-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Divorce Lawyer Melbourne</h3>
                <p>
                  Sole and joint divorce applications, marriage breakdown, and
                  12-month post-divorce limitation periods.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Child Custody Lawyer Melbourne</h3>
                <p>
                  Parenting arrangements, parental responsibility, and
                  protecting your children&apos;s best interests.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Consent Orders Lawyer Melbourne</h3>
                <p>
                  Court-approved consent orders formalising property and
                  parenting agreements without a trial.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 11. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={propertyFaqs} />
      </Section>
    </>
  );
}
