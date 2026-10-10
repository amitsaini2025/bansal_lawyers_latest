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
  title: "Divorce Lawyer Melbourne | Separation & Family Law Advice",
  description:
    "Bansal Lawyers assists with divorce applications, separation advice, parenting issues, property settlement, consent orders and family law matters in Melbourne.",
  path: "/family-lawyers-melbourne/divorce-lawyer-melbourne",
  keywords: [
    "Divorce Lawyer Melbourne",
    "Divorce Lawyers Melbourne",
    "Family Lawyer Melbourne",
    "Separation Lawyer Melbourne",
    "Divorce Application Lawyer",
    "Family Law Firm Melbourne",
    "Divorce Advice Melbourne",
  ],
});

const divorceMatters = [
  "Divorce applications",
  "Separation advice",
  "Sole divorce applications",
  "Joint divorce applications",
  "Divorce document review",
  "Parenting arrangements",
  "Property settlement advice",
  "Consent orders",
  "Binding financial agreements",
  "Family violence-related concerns",
  "Spousal maintenance issues",
  "General family law advice",
];

const propertyMatters = [
  "The family home",
  "Bank accounts",
  "Loans and debts",
  "Vehicles",
  "Superannuation",
  "Business interests",
  "Investments",
  "Personal assets",
  "Financial contributions",
  "Non-financial contributions",
];

const whyChoosePoints = [
  "Clear advice on divorce and separation",
  "Guidance on documents and process",
  "Support with parenting and property-related concerns",
  "Assistance with consent orders and settlement issues",
  "Practical advice in sensitive family situations",
  "Professional handling of confidential family matters",
];

const divorceFaqs = [
  {
    question: "Can Bansal Lawyers help with divorce applications?",
    answer:
      "Yes. Bansal Lawyers assists with divorce applications, document review, separation advice, and related family law matters.",
  },
  {
    question: "Does divorce automatically divide property?",
    answer:
      "No. Divorce and property settlement are separate legal issues. Property settlement should be addressed separately after separation.",
  },
  {
    question: "Can I apply for divorce if we are still living in the same house?",
    answer:
      "In some situations, separation under the same roof may be relevant. The facts and documents should be reviewed before applying.",
  },
  {
    question: "Do parenting arrangements get decided during divorce?",
    answer:
      "Divorce does not automatically decide parenting arrangements. Parenting matters may need to be handled separately through agreement, consent orders, or court-related steps.",
  },
  {
    question: "Should I get legal advice before applying for divorce?",
    answer:
      "Yes. Legal advice can help you understand the process, documents, children’s arrangements, property issues, and any time limits that may apply.",
  },
  {
    question: "Can you help if there are family violence concerns?",
    answer:
      "Yes. Bansal Lawyers assists with family violence-related family law concerns, intervention orders, parenting issues, and related legal advice.",
  },
];

export default function DivorceLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Divorce Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(divorceFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Divorce Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Divorce Lawyer Melbourne"
        intro={
          <>
            <p>
              Divorce can be a difficult step, especially when children,
              property, finances, or future arrangements are involved. Even when
              both people agree to separate, it is important to understand the
              legal process and what other family law issues may need attention.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with divorce applications, separation
              advice, parenting arrangements, property settlement, consent orders,
              and related family law matters in Melbourne. As experienced{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we help you understand what needs to be done, what documents may
              be required, and what steps may follow after separation or divorce.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Divorce Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Level 1, 530 Little Collins St Melbourne & Remote Consultations",
          "Sole & Joint Divorce Applications in the FCFCOA",
          "Separation Under One Roof Evidence & Affidavits",
          "Coordinated Parenting & Property Settlement Support",
        ]}
      />

      {/* 2. Legal Advice Before Applying for Divorce [H2] */}
      <Section tone="white" id="advice-before-applying">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Clarity</span>
            <h2>Legal Advice Before Applying for Divorce</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A divorce application legally ends a marriage, but it does not
              automatically resolve parenting arrangements, property settlement,
              financial matters, or child support issues.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before applying for divorce, it is important to understand:
            </p>
            <ul className="points-list">
              <li>Whether you meet the separation requirements</li>
              <li>What documents may be needed</li>
              <li>Whether children&apos;s arrangements need to be addressed</li>
              <li>Whether property settlement still needs attention</li>
              <li>Whether consent orders may be required</li>
              <li>Whether there are time limits after divorce</li>
              <li>Whether a sole or joint application is more suitable</li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your situation and explain the process
              in clear language.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Divorce and Separation Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Divorce and Separation Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {divorceMatters.map((matter) => (
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
            Each matter should be reviewed based on the client&apos;s family
            situation, documents, children&apos;s needs, and financial
            circumstances.
          </p>
        </Container>
      </Section>

      {/* 4. Separation and Divorce [H2] */}
      <Section tone="white" id="separation-and-divorce">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Legal Requirements</span>
            <h2>Separation and Divorce</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Separation is often the first step before divorce. In some matters,
              both parties clearly agree on the separation date. In other
              matters, there may be disagreement or confusion, especially where
              the couple continued living in the same home for some time.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients by reviewing the facts, explaining the divorce
              process, and helping prepare the required documents where needed.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Divorce When Children Are Involved [H2] */}
      <Section tone="warm" id="children">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Children&apos;s Best Interests</span>
            <h2>Divorce When Children Are Involved</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              When children are involved, the court may need to know that proper
              arrangements have been considered for their care, living situation,
              schooling, health, and general welfare.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Divorce itself does not decide parenting arrangements. If parenting
              issues are unresolved, separate family law advice may be needed.
              Our dedicated{" "}
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Child Custody Lawyer Melbourne
              </Link>{" "}
              assists clients with parenting plans, custody agreements, and
              court applications.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with parenting arrangements, consent
              orders, child custody concerns, and related family law issues.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Property Settlement After Separation [H2] */}
      <Section tone="white" id="property-settlement">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Asset Division & Timing</span>
            <h2>Property Settlement After Separation</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Many people think divorce automatically divides property. It does
              not. Property settlement is a separate family law issue. Working
              with an experienced{" "}
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Property Settlement Lawyer Melbourne
              </Link>{" "}
              ensures your financial rights are protected and strict 12-month
              post-divorce court limitation dates are not missed.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Property matters may involve:
            </p>
            <ul className="points-list">
              {propertyMatters.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If property settlement has not been resolved, it is better to get
              legal advice early.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Consent Orders and Financial Agreements [H2] */}
      <Section tone="warm" id="consent-orders">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Formalising Agreements</span>
            <h2>Consent Orders and Financial Agreements</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some clients reach agreement after separation but need the
              agreement properly documented. Informal agreements can create
              problems later if they are unclear or not legally formalised.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our knowledgeable{" "}
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Consent Orders Lawyer Melbourne
              </Link>{" "}
              drafts binding court orders that formalise your property and
              parenting arrangements without the stress and expense of contested
              trials.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist with consent orders, property settlement documents,
              parenting arrangements, and binding financial agreement-related
              advice where required.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Family Violence and Urgent Family Law Concerns [H2] */}
      <Section tone="white" id="family-violence">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Safety & Protection</span>
            <h2>Family Violence and Urgent Family Law Concerns</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some divorce and separation matters involve family violence, safety
              concerns, intervention orders, or urgent parenting issues.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              These matters need careful handling. If safety, children, police
              involvement, or court orders are involved, legal advice should be
              taken as early as possible.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Why Choose Bansal Lawyers for Divorce Matters? [H2] */}
      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Compassionate & Strategic</span>
            <h2>Why Choose Bansal Lawyers for Divorce Matters?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Divorce and separation can be emotional, but the legal process
              should be handled with clarity and proper preparation.
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
              We help clients understand the legal position before making
              important decisions.
            </p>
          </div>
        </Container>
      </Section>

      {/* 10. Speak With a Divorce Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Divorce Lawyer in Melbourne"
        text="If you are separated, planning to apply for divorce, or dealing with parenting or property issues after separation, Bansal Lawyers can help you understand your next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Divorce Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Strictly confidential family legal advice", "Prompt response to urgent matters", "Melbourne CBD & virtual consultations"]}
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
                  Comprehensive family law advice for divorce, property,
                  parenting, and family violence matters.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Child Custody Lawyer Melbourne</h3>
                <p>
                  Parenting plans, child care arrangements, and resolving
                  parental responsibility disputes.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Property Settlement Lawyer Melbourne</h3>
                <p>
                  Division of assets, superannuation splitting, debts, and
                  financial agreements post-separation.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Consent Orders Lawyer Melbourne</h3>
                <p>
                  Court-approved consent orders formalising parenting and
                  financial agreements without trial.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 11. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={divorceFaqs} />
      </Section>
    </>
  );
}
