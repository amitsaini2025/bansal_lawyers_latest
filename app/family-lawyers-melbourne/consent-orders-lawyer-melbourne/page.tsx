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
  title: "Consent Orders Lawyer Melbourne | Parenting & Property Agreements",
  description:
    "Bansal Lawyers assists with consent orders for parenting arrangements, property settlement, financial agreements and family law matters in Melbourne.",
  path: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne",
  keywords: [
    "Consent Orders Lawyer Melbourne",
    "Consent Orders Lawyers Melbourne",
    "Family Law Consent Orders",
    "Parenting Consent Orders Melbourne",
    "Property Consent Orders Melbourne",
    "Family Lawyer Melbourne",
    "Divorce Settlement Lawyer Melbourne",
  ],
});

const beforeFinalisingChecks = [
  "What parenting arrangements need to be included",
  "What property and debts need to be addressed",
  "Whether financial disclosure is required",
  "Whether the agreement is practical for both parties",
  "Whether children’s arrangements are clear",
  "Whether superannuation or business interests are involved",
  "Whether the agreement may create future issues",
  "Whether legal advice is needed before signing",
];

const consentMatters = [
  "Parenting consent orders",
  "Property consent orders",
  "Financial consent orders",
  "Divorce-related agreements",
  "Separation agreements",
  "Property settlement documents",
  "Children’s living arrangements",
  "Time spent with each parent",
  "Communication arrangements",
  "Superannuation-related settlement issues",
  "Family home and debt division",
  "Review of proposed consent orders",
];

const parentingItems = [
  "Where the children live",
  "Time spent with each parent",
  "School holidays",
  "Birthdays and special occasions",
  "Changeover arrangements",
  "Phone or video communication",
  "Schooling and medical decisions",
  "Travel arrangements",
  "Communication between parents",
];

const propertyItems = [
  "The family home",
  "Investment properties",
  "Bank accounts",
  "Loans and debts",
  "Vehicles",
  "Superannuation",
  "Business interests",
  "Shares and investments",
  "Personal assets",
  "Payment arrangements",
  "Transfer of property",
  "Sale of property",
];

const informalRisks = [
  "Confusion about children’s arrangements",
  "Disputes about holidays or special occasions",
  "Unclear property division",
  "One party not transferring money or assets",
  "Debt responsibilities not properly documented",
  "Future disagreement about what was agreed",
  "Difficulty proving the terms of the agreement",
];

const whyChoosePoints = [
  "Clear advice about parenting and property agreements",
  "Careful review of the proposed terms",
  "Support with consent order preparation",
  "Guidance on documents and financial information",
  "Practical advice before signing",
  "Assistance with separation and divorce-related agreements",
  "Professional handling of sensitive family law matters",
];

const consentOrdersFaqs = [
  {
    question: "Can Bansal Lawyers help prepare consent orders?",
    answer:
      "Yes. Bansal Lawyers assists with consent orders for parenting arrangements, property settlement, financial matters, and related family law issues.",
  },
  {
    question: "What can consent orders cover?",
    answer:
      "Consent orders can cover parenting arrangements, children’s living arrangements, time with each parent, property settlement, debts, superannuation, and other agreed family law matters.",
  },
  {
    question: "Do I need consent orders if we already agree?",
    answer:
      "It is still worth getting legal advice. Informal agreements can cause problems later if the terms are unclear or not properly documented.",
  },
  {
    question: "Can consent orders cover property settlement?",
    answer:
      "Yes. Consent orders can be used to formalise property settlement agreements, including assets, debts, superannuation, and payment arrangements.",
  },
  {
    question: "Can consent orders cover parenting arrangements?",
    answer:
      "Yes. Parenting consent orders can set out where children live, time with each parent, holidays, communication, travel, and other parenting arrangements.",
  },
  {
    question: "Should I get legal advice before signing consent orders?",
    answer:
      "Yes. You should understand the terms, risks, and long-term impact before signing or submitting consent order documents.",
  },
];

export default function ConsentOrdersLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Consent Orders Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(consentOrdersFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Consent Orders Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Consent Orders Lawyer Melbourne"
        intro={
          <>
            <p>
              When separated couples reach an agreement about children,
              property, or financial matters, it is important to document that
              agreement properly. Verbal or informal agreements can create
              problems later if one person changes their mind or the terms are
              unclear.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with consent orders for parenting
              arrangements, property settlement, financial matters, and related
              family law issues in Melbourne. We help clients understand what
              should be included and how the agreement can be prepared clearly.
              As experienced{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we provide practical, professional guidance to achieve enforceable
              legal finality.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Consent Orders Lawyer",
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
          "Binding Parenting & Property Consent Orders",
          "No Court Appearance Required in Most Cases",
          "Legal Certainty Under the Family Law Act",
        ]}
      />

      {/* 2. Legal Advice Before Finalising an Agreement [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Formalising Agreements</span>
            <h2>Legal Advice Before Finalising an Agreement</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Consent orders can help separated couples formalise an agreement
              without unnecessary conflict. But the agreement should be clear,
              practical, and properly prepared.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before finalising consent orders, it is important to understand:
            </p>
            <ul className="points-list">
              {beforeFinalisingChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Bansal Lawyers can review your situation and help prepare documents
              based on the agreement reached.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Consent Order Matters We Assist With [H2] */}
      <Section tone="warm" id="matters-we-assist-with">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Support"
            title="Consent Order Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {consentMatters.map((item) => (
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
            <p style={{ fontSize: "1.05rem", color: "var(--ink-secondary)", fontStyle: "italic" }}>
              Each agreement should be reviewed carefully before it is signed or submitted.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Parenting Consent Orders [H2] */}
      <Section tone="white" id="parenting-consent-orders">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Children & Parenting</span>
            <h2>Parenting Consent Orders</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Parenting consent orders can help separated parents create clear
              arrangements for their children. This can reduce confusion and
              avoid future disputes.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Parenting consent orders may cover:
            </p>
            <ul className="points-list">
              {parentingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Clear parenting orders can help both parents understand their
              responsibilities and reduce unnecessary conflict. For tailored
              guidance on custody and parenting arrangements, our dedicated{" "}
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Child Custody Lawyer Melbourne
              </Link>{" "}
              team is here to help protect your children’s best interests.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Property Consent Orders [H2] */}
      <Section tone="warm" id="property-consent-orders">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Financial Settlement</span>
            <h2>Property Consent Orders</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Property consent orders can help formalise how assets, debts, and
              financial matters will be divided after separation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Property consent orders may cover:
            </p>
            <ul className="points-list">
              {propertyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              A properly prepared property settlement can help reduce future
              disputes and give both parties clearer certainty. For detailed advice
              on asset division, superannuation splits, and financial disclosure,
              speak with our{" "}
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Property Settlement Lawyer Melbourne
              </Link>{" "}
              team.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Consent Orders After Separation or Divorce [H2] */}
      <Section tone="white" id="separation-and-divorce">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Legal Finality</span>
            <h2>Consent Orders After Separation or Divorce</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Consent orders can be relevant after separation, during divorce, or
              after divorce. Divorce itself does not automatically settle
              parenting or property issues, so these matters may need to be
              handled separately.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              If you have reached an agreement with your former partner, getting
              legal advice before formalising it can help ensure the terms are
              clear and practical. Our experienced{" "}
              <Link
                href="/family-lawyers-melbourne/divorce-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Divorce Lawyer Melbourne
              </Link>{" "}
              can assist you in coordinating your divorce application alongside
              your consent orders.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              If you and your former partner prefer an out-of-court contractual
              agreement, a qualified{" "}
              <Link
                href="/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Binding Financial Agreement Lawyer Melbourne
              </Link>{" "}
              can advise you on whether a Binding Financial Agreement (BFA) or
              court-approved consent orders are best suited to your financial goals.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Informal Agreements Can Create Problems [H2] */}
      <Section tone="warm" id="informal-agreements-risks">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk Mitigation</span>
            <h2>Informal Agreements Can Create Problems</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Many people agree on parenting or property arrangements
              informally. This may work for a short time, but problems can happen
              later if the agreement is not clear or one person does not follow
              it.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common problems with informal agreements include:
            </p>
            <ul className="points-list">
              {informalRisks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Consent orders can help reduce these risks by recording the agreement properly.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Consent Orders? [H2] */}
      <Section tone="white" id="why-choose-us">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Trusted Melbourne Family Lawyers</span>
            <h2>Why Choose Bansal Lawyers for Consent Orders?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Consent orders need careful drafting. The wording should be clear,
              practical, and suitable for the client’s situation.
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
              We help clients document agreements properly so there is less
              confusion later.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With a Consent Orders Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Consent Orders Lawyer in Melbourne"
        text="If you have reached an agreement with your former partner about children, property, or financial matters, Bansal Lawyers can help you understand the next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Drafting consent orders with certainty", "Parenting & property division", "Melbourne CBD & virtual consultations"]}
      />

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Container>
          <SectionHeader
            eyebrow="Helpful Answers"
            title="Frequently Asked Questions"
            intro="Clear answers to common questions about consent orders, property settlements, and parenting agreements in Victoria."
          />
          <Faq items={consentOrdersFaqs} />
        </Container>
      </Section>
    </>
  );
}
