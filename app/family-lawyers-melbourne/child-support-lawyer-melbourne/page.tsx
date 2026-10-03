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
  title: "Child Support Lawyer Melbourne | Parenting & Family Law Advice",
  description:
    "Bansal Lawyers assists with child support advice, parenting-related financial matters, child support agreements and family law guidance in Melbourne.",
  path: "/family-lawyers-melbourne/child-support-lawyer-melbourne",
  keywords: [
    "Child Support Lawyer Melbourne",
    "Child Support Lawyers Melbourne",
    "Family Lawyer Melbourne",
    "Child Support Advice Melbourne",
    "Parenting Lawyer Melbourne",
    "Child Maintenance Lawyer Melbourne",
  ],
});

const beforeDecisionsChecks = [
  "How parenting arrangements may affect child support",
  "Whether a child support assessment exists",
  "Whether private agreement options are suitable",
  "Whether income or care arrangements are disputed",
  "Whether school, medical, or special expenses are involved",
  "Whether child support connects with property settlement or parenting orders",
];

const supportMatters = [
  "Child support advice",
  "Child support disputes",
  "Private child support agreements",
  "Parenting arrangements linked to child support",
  "School and medical expense issues",
  "Child support and care percentage concerns",
  "Negotiation between parents",
  "Related family law advice",
  "Consent orders and parenting matters where relevant",
];

const childSupportFaqs = [
  {
    question: "Can Bansal Lawyers help with child support issues?",
    answer:
      "Yes. We assist with child support advice, disputes, private agreements, and related parenting and family law matters.",
  },
  {
    question: "Is child support connected to parenting arrangements?",
    answer:
      "Yes. Parenting arrangements and care percentages may affect child support issues.",
  },
  {
    question: "Can parents make private child support agreements?",
    answer:
      "In some situations, parents may make private arrangements. Legal advice is recommended before agreeing to terms.",
  },
  {
    question: "Can child support include school or medical expenses?",
    answer:
      "Some arrangements may deal with school fees, medical costs, and other child-related expenses depending on the situation.",
  },
];

export default function ChildSupportLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Child Support Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(childSupportFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Child Support Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Child Support Lawyer Melbourne"
        intro={
          <>
            <p>
              Child support matters can affect both parents and children after
              separation. These matters may involve financial support, care
              arrangements, income, expenses, private agreements, and disputes
              about payment responsibilities.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with child support advice in
              Melbourne. We help parents understand their options and how child
              support may connect with parenting arrangements and family law
              matters. As trusted{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we provide pragmatic guidance that prioritises children’s wellbeing
              and financial fairness.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Child Support Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Binding & Limited Child Support Agreements",
          "Care Percentage & Assessment Dispute Guidance",
          "Private School Fee & Medical Expense Structuring",
          "Integration with Parenting Orders & Property Settlements",
        ]}
      />

      {/* 2. Legal Advice for Child Support Matters [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Financial Pathways</span>
            <h2>Legal Advice for Child Support Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Child support can become complicated when parents disagree about
              income, care percentage, private payments, expenses, or special
              needs of the child.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before making decisions, it is important to understand:
            </p>
            <ul className="points-list">
              {beforeDecisionsChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Bansal Lawyers can review your situation and explain your options.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Child Support Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Advice"
            title="Child Support Matters We Assist With"
            intro="We assist with:"
          />
          <div className="matters-grid">
            {supportMatters.map((item) => (
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
              Each matter should be reviewed based on the child’s needs, care
              arrangements, and financial position.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Child Support and Parenting Arrangements [H2] */}
      <Section tone="white" id="parenting-connections">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Care Percentages & Living Arrangements</span>
            <h2>Child Support and Parenting Arrangements</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Child support and parenting arrangements are often connected. The
              time a child spends with each parent can affect financial
              arrangements and practical responsibilities.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              We assist clients with understanding how parenting arrangements and
              child support issues may interact. For tailored guidance on
              parenting plans and custody orders, our{" "}
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Child Custody Lawyer Melbourne
              </Link>{" "}
              team is here to help.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Private Child Support Agreements [H2] */}
      <Section tone="warm" id="private-agreements">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Custom Financial Agreements</span>
            <h2>Private Child Support Agreements</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some parents may wish to make private arrangements about child
              support, school fees, medical expenses, or other child-related
              costs.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Before agreeing to private terms, it is important to understand
              the practical and legal effect of the agreement. Our lawyers
              assist with Limited and Binding Child Support Agreements, as well as
              coordinating terms alongside court-approved{" "}
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Consent Orders Lawyer Melbourne
              </Link>{" "}
              or broader{" "}
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Property Settlement Lawyer Melbourne
              </Link>{" "}
              matters.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Speak With a Child Support Lawyer [H2] */}
      <CtaSection
        title="Speak With a Child Support Lawyer"
        text="If you need help understanding child support, private agreements, or financial issues related to children after separation, Bansal Lawyers can guide you through the next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Child support agreements & assessment advice", "Confidential legal consultations", "Melbourne CBD & virtual appointments"]}
      />

      {/* 7. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Container>
          <SectionHeader
            eyebrow="Helpful Answers"
            title="Frequently Asked Questions"
            intro="Common questions regarding child support assessments, private agreements, and Services Australia reviews in Victoria."
          />
          <Faq items={childSupportFaqs} />
        </Container>
      </Section>
    </>
  );
}
