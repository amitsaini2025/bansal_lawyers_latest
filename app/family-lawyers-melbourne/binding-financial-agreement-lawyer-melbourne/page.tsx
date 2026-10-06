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
    "Binding Financial Agreement Lawyer Melbourne | BFA & Family Law Advice",
  description:
    "Bansal Lawyers assists with binding financial agreements, prenups, separation agreements, property settlement, financial disclosure and family law advice in Melbourne.",
  path: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne",
  keywords: [
    "Binding Financial Agreement Lawyer Melbourne",
    "Binding Financial Agreement Lawyers Melbourne",
    "BFA Lawyer Melbourne",
    "Financial Agreement Lawyer Melbourne",
    "Prenup Lawyer Melbourne",
    "Family Lawyer Melbourne",
    "Property Settlement Lawyer Melbourne",
  ],
});

const beforeSigningChecks = [
  "What property and debts are being included",
  "Whether both parties have made proper financial disclosure",
  "Whether superannuation is involved",
  "Whether the agreement is fair and practical",
  "Whether the wording is clear",
  "Whether the agreement may create future disputes",
  "Whether independent legal advice is required",
  "What happens if circumstances change later",
];

const bfaMatters = [
  "Binding financial agreements",
  "Prenuptial-style agreements",
  "Financial agreements during a relationship",
  "Financial agreements after separation",
  "Financial agreements after divorce",
  "Property settlement agreements",
  "Superannuation-related financial matters",
  "Debt and liability arrangements",
  "Review of proposed agreements",
  "Independent legal advice",
  "Financial disclosure issues",
  "Separation and divorce-related financial documents",
];

const whenUsedStages = [
  "Before marriage",
  "During marriage",
  "Before or during a de facto relationship",
  "After separation",
  "After divorce",
  "When parties want to document financial arrangements",
  "When property settlement needs to be handled privately",
  "When parties want more certainty about financial matters",
];

const whatIncludedItems = [
  "The family home",
  "Investment properties",
  "Bank accounts",
  "Loans and mortgages",
  "Credit card debts",
  "Vehicles",
  "Business interests",
  "Shares and investments",
  "Superannuation",
  "Personal assets",
  "Payment arrangements",
  "Responsibility for debts",
  "Financial support arrangements",
];

const poorlyPreparedProblems = [
  "Unclear wording",
  "Missing assets or debts",
  "Poor financial disclosure",
  "Unfair or unrealistic terms",
  "Lack of proper legal advice",
  "Confusion about superannuation",
  "No clear process for future changes",
  "Disagreement about what the agreement means",
  "Terms that do not match the parties’ actual situation",
];

const whyChoosePoints = [
  "Clear advice before signing",
  "Review of property, debts, and financial terms",
  "Guidance on financial disclosure",
  "Explanation of risks and legal effect",
  "Support with separation and divorce-related agreements",
  "Advice on consent orders and alternative options",
  "Professional handling of sensitive financial matters",
];

const bfaFaqs = [
  {
    question: "Can Bansal Lawyers help with binding financial agreements?",
    answer:
      "Yes. Bansal Lawyers assists with binding financial agreements, agreement review, independent legal advice, financial disclosure issues, and related family law advice.",
  },
  {
    question: "What is a binding financial agreement?",
    answer:
      "A binding financial agreement is a legal agreement that can record how property, finances, debts, and other financial matters will be handled between parties.",
  },
  {
    question: "Can a financial agreement be made before marriage?",
    answer:
      "Yes. Some couples use financial agreements before marriage or during a relationship to record financial arrangements.",
  },
  {
    question: "Can a binding financial agreement be made after separation?",
    answer:
      "Yes. A binding financial agreement may be used after separation to record financial arrangements, depending on the circumstances.",
  },
  {
    question: "Is a binding financial agreement the same as consent orders?",
    answer:
      "No. They are different legal documents. Consent orders are made through the court process, while a binding financial agreement is a private agreement that must meet legal requirements.",
  },
  {
    question: "Should I get legal advice before signing a financial agreement?",
    answer:
      "Yes. You should get legal advice before signing because the agreement can affect your property rights, debts, financial responsibilities, and future claims.",
  },
];

export default function BindingFinancialAgreementLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Binding Financial Agreement Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(bfaFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Binding Financial Agreement Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Binding Financial Agreement Lawyer Melbourne"
        intro={
          <>
            <p>
              A binding financial agreement can help couples record how
              property, finances, debts, superannuation, or other financial
              matters will be handled during a relationship, after separation,
              or after divorce.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              These agreements need to be prepared carefully. Poor wording,
              missing information, or lack of proper legal advice can create
              problems later.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with binding financial agreements,
              separation agreements, property settlement documents, and related
              family law advice in Melbourne. We help clients understand their
              position before signing or finalising an agreement. As experienced{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we ensure your financial interests are protected with rigorous,
              independent legal guidance.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a BFA Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Melbourne Consultations",
          "Independent Legal Advice & S90G/90UJ Certificates",
          "Prenuptial, Postnuptial & Separation Agreements",
          "Protection for Property, Businesses & Superannuation",
        ]}
      />

      {/* 2. Legal Advice Before Signing a Financial Agreement [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Thorough Preparation</span>
            <h2>Legal Advice Before Signing a Financial Agreement</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A binding financial agreement is an important legal document. It can
              affect your property rights, financial responsibilities, and
              future claims.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before signing, it is important to understand:
            </p>
            <ul className="points-list">
              {beforeSigningChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Bansal Lawyers can review your situation and explain the agreement
              in plain language before you make a decision.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Financial Agreement Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Financial Agreement Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {bfaMatters.map((item) => (
              <div key={item} className="matter-item">
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
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p style={{ fontSize: "1.05rem", color: "var(--navy-950)", fontWeight: 600 }}>
              Each agreement should be reviewed carefully based on the financial
              position, relationship circumstances, and long-term effect of the
              terms.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. When Can a Binding Financial Agreement Be Used? [H2] */}
      <Section tone="white" id="when-used">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Timing & Circumstances</span>
            <h2>When Can a Binding Financial Agreement Be Used?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A binding financial agreement may be used at different stages of a
              relationship.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              It may be considered:
            </p>
            <ul className="points-list">
              {whenUsedStages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              The right structure depends on the timing, the relationship, and
              the type of financial issues involved.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. What Can Be Included in a Binding Financial Agreement? [H2] */}
      <Section tone="warm" id="what-included">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Asset & Liability Scope</span>
            <h2>What Can Be Included in a Binding Financial Agreement?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A binding financial agreement may deal with property, money,
              debts, and other financial matters.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Depending on the situation, it may include:
            </p>
            <ul className="points-list">
              {whatIncludedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              The agreement should be clear enough to reduce confusion and
              future disputes.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Binding Financial Agreements After Separation [H2] */}
      <Section tone="white" id="after-separation">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Separation Settlements</span>
            <h2>Binding Financial Agreements After Separation</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              After separation, some couples use a binding financial agreement
              to record how their property and financial matters will be
              resolved.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "0.75rem" }}>
              This may be useful where both parties have reached an agreement
              and want to document the terms properly. However, the agreement
              should be reviewed carefully before signing.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "0.75rem" }}>
              Bansal Lawyers assists with reviewing proposed agreements,
              advising on risks, and helping clients understand whether the terms
              reflect their position. If you require comprehensive property division
              advice alongside your agreement, our{" "}
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Property Settlement Lawyer Melbourne
              </Link>{" "}
              team can guide you through every step. For clients dissolving their marriage,
              our{" "}
              <Link
                href="/family-lawyers-melbourne/divorce-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Divorce Lawyer Melbourne
              </Link>{" "}
              team is also available to coordinate your divorce application.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Binding Financial Agreement or Consent Orders? [H2] */}
      <Section tone="warm" id="bfa-vs-consent-orders">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Choosing the Right Legal Vehicle</span>
            <h2>Binding Financial Agreement or Consent Orders?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Binding financial agreements and consent orders are different
              legal documents. The right option depends on the situation, the
              type of agreement, and what the parties want to achieve.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "0.75rem" }}>
              Consent orders are commonly used to formalise family law property or
              parenting agreements through the court process. A binding
              financial agreement is a private financial agreement between
              parties, but it must meet strict legal requirements under the
              Family Law Act.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "0.75rem" }}>
              Bansal Lawyers can explain both options and help you understand
              which pathway may be suitable based on your matter. For court-approved
              settlements without ongoing contracts, explore our{" "}
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Consent Orders Lawyer Melbourne
              </Link>{" "}
              services.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Independent Legal Advice Matters [H2] */}
      <Section tone="white" id="independent-legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Statutory Requirement</span>
            <h2>Why Independent Legal Advice Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Independent legal advice is an important part of binding
              financial agreement matters. Each party should understand the
              effect of the agreement, the advantages, disadvantages, and
              possible risks before signing.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "0.75rem" }}>
              Signing without proper advice can create problems later. In fact,
              under Australian family law, a financial agreement is not binding
              unless each party has received independent legal advice from their
              own Australian legal practitioner and obtained a signed statement
              confirming this.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "0.75rem" }}>
              We assist clients by reviewing the agreement, explaining the terms,
              identifying possible concerns, and advising before documents are
              signed.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Problems With Poorly Prepared Agreements [H2] */}
      <Section tone="warm" id="poorly-prepared-risks">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Avoiding Costly Disputes</span>
            <h2>Problems With Poorly Prepared Agreements</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A financial agreement should not be rushed or copied from a
              template. Weak drafting can create uncertainty and disputes later.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common problems include:
            </p>
            <ul className="points-list">
              {poorlyPreparedProblems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              A properly reviewed agreement can reduce the risk of future conflict.
            </p>
          </div>
        </Container>
      </Section>

      {/* 10. Why Choose Bansal Lawyers for Binding Financial Agreements? [H2] */}
      <Section tone="white" id="why-choose-us">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Experience & Strategic Advice</span>
            <h2>Why Choose Bansal Lawyers for Binding Financial Agreements?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Binding financial agreements need careful review, clear advice, and
              proper documentation. The agreement can affect major financial
              decisions, so it should not be treated as a simple form.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {whyChoosePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              We help clients understand the agreement before they commit to it.
            </p>
          </div>
        </Container>
      </Section>

      {/* 11. Speak With a Binding Financial Agreement Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Binding Financial Agreement Lawyer in Melbourne"
        text="If you are considering a binding financial agreement, reviewing a proposed agreement, or dealing with financial matters after separation, Bansal Lawyers can help you understand your next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Pre-nuptial, post-nuptial & separation deeds", "Independent legal advice certificates", "Melbourne CBD & virtual consultations"]}
      />

      {/* 12. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Faq items={bfaFaqs} subtitle="Common questions regarding binding financial agreements, prenups, and separation settlements in Victoria." />
      </Section>
    </>
  );
}
