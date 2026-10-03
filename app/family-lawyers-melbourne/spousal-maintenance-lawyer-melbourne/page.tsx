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
    "Spousal Maintenance Lawyer Melbourne | Family Law Financial Support",
  description:
    "Bansal Lawyers assists with spousal maintenance advice, financial support after separation, divorce-related financial matters and family law disputes.",
  path: "/family-lawyers-melbourne/spousal-maintenance-lawyer-melbourne",
  keywords: [
    "Spousal Maintenance Lawyer Melbourne",
    "Spousal Maintenance Lawyers Melbourne",
    "Spousal Support Lawyer Melbourne",
    "Family Lawyer Melbourne",
    "Divorce Financial Support Melbourne",
    "Separation Financial Support Lawyer",
  ],
});

const beforeClaimChecks = [
  "Whether financial support may be relevant",
  "What income and expenses are involved",
  "Whether one party has capacity to pay",
  "Whether one party has financial need",
  "Whether children’s care affects work capacity",
  "Whether health or age affects earning capacity",
  "Whether property settlement is also involved",
];

const maintenanceMatters = [
  "Spousal maintenance advice",
  "Financial support after separation",
  "Divorce-related financial support",
  "Responding to maintenance claims",
  "Negotiation and settlement discussions",
  "Financial disclosure review",
  "Income and expense review",
  "Related property settlement matters",
  "Court-related family law advice",
];

const relevantDocs = [
  "Payslips",
  "Bank statements",
  "Tax returns",
  "Expense records",
  "Rent or mortgage documents",
  "Childcare expenses",
  "Medical expenses",
  "Centrelink or benefit documents",
  "Business income records",
  "Property settlement documents",
];

const spousalFaqs = [
  {
    question: "What is spousal maintenance?",
    answer:
      "Spousal maintenance is financial support that one party may provide to the other after separation or divorce in certain circumstances.",
  },
  {
    question: "Is spousal maintenance the same as child support?",
    answer:
      "No. Child support relates to children. Spousal maintenance relates to financial support for a former partner or spouse.",
  },
  {
    question: "Can Bansal Lawyers help with spousal maintenance claims?",
    answer:
      "Yes. We assist with advice, document review, negotiation, and related family law matters.",
  },
  {
    question: "What documents are needed?",
    answer:
      "Income, expenses, assets, debts, health, work capacity, and care arrangements may be relevant.",
  },
];

export default function SpousalMaintenanceLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Spousal Maintenance Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(spousalFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Spousal Maintenance Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Spousal Maintenance Lawyer Melbourne"
        intro={
          <>
            <p>
              After separation or divorce, one person may need financial support
              from the other in certain circumstances. Spousal maintenance
              matters can involve income, expenses, financial need, ability to
              pay, children’s care, health, work capacity, and living
              arrangements.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with spousal maintenance advice in
              Melbourne. We help clients understand their position and the
              options available under family law. As experienced{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we ensure your financial rights and future stability are
              protected with clear, strategic counsel.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Spousal Maintenance Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Financial Need & Capacity Assessment Under S72",
          "Lump Sum & Periodic Maintenance Negotiation",
          "Integration with Property Settlements & Consent Orders",
          "Melbourne CBD Office & Virtual Consultations",
        ]}
      />

      {/* 2. Legal Advice About Financial Support [H2] */}
      <Section tone="white" id="financial-support-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Financial Need & Ability to Pay</span>
            <h2>Legal Advice About Financial Support</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Spousal maintenance is different from child support and property
              settlement. It should be reviewed based on the financial
              circumstances of both parties.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before making or responding to a claim, it is important to
              understand:
            </p>
            <ul className="points-list">
              {beforeClaimChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Bansal Lawyers can review the financial position and explain
              possible next steps.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Spousal Maintenance Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Spousal Maintenance Matters We Assist With"
            intro="We assist with:"
          />
          <div className="matters-grid">
            {maintenanceMatters.map((item) => (
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
              Each matter depends on the financial facts and supporting documents.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Documents That May Be Relevant [H2] */}
      <Section tone="white" id="documents-relevant">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Financial Verification</span>
            <h2>Documents That May Be Relevant</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Spousal maintenance matters may require review of:
            </p>
            <ul className="points-list">
              {relevantDocs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Clear financial information helps assess the position properly.
              Spousal maintenance is frequently resolved alongside broader
              property division. Consult our{" "}
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Property Settlement Lawyer Melbourne
              </Link>{" "}
              team, or explore formal agreement pathways through our{" "}
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Consent Orders Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link
                href="/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Binding Financial Agreement Lawyer Melbourne
              </Link>{" "}
              services.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Speak With a Spousal Maintenance Lawyer [H2] */}
      <CtaSection
        title="Speak With a Spousal Maintenance Lawyer"
        text="If you need financial support after separation, or if you are responding to a spousal maintenance claim, Bansal Lawyers can help you understand your options."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Threshold & need assessment advice", "Lump sum & periodic payment agreements", "Melbourne CBD & virtual consultations"]}
      />

      {/* 6. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Faq items={spousalFaqs} subtitle="Key answers to questions about spousal maintenance eligibility, time limits, and financial disclosure under Australian family law." />
      </Section>
    </>
  );
}
