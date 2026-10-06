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
  title: "Intervention Order Lawyer Melbourne | IVO & Family Violence Advice",
  description:
    "Bansal Lawyers assists with intervention orders, family violence matters, IVO applications, responses, conditions and related family law advice.",
  path: "/family-lawyers-melbourne/intervention-order-lawyer-melbourne",
  keywords: [
    "Intervention Order Lawyer Melbourne",
    "Intervention Order Lawyers Melbourne",
    "IVO Lawyer Melbourne",
    "Family Violence Intervention Order Lawyer",
    "Domestic Violence Lawyer Melbourne",
    "Family Lawyer Melbourne",
  ],
});

const beforeCourtDateChecks = [
  "What the order is asking for",
  "What conditions may apply",
  "Whether children are included",
  "Whether parenting arrangements are affected",
  "Whether police are involved",
  "Whether there are related criminal law concerns",
  "What happens if an order is breached",
];

const ivoMatters = [
  "Family violence intervention orders",
  "IVO applications",
  "Responding to intervention order applications",
  "Understanding order conditions",
  "Parenting issues linked to intervention orders",
  "Breach concerns",
  "Court preparation",
  "Negotiation where appropriate",
  "Related family law advice",
];

const ivoFaqs = [
  {
    question: "Can Bansal Lawyers help with intervention orders?",
    answer:
      "Yes. We assist with intervention order applications, responses, conditions, court documents, and related family law matters.",
  },
  {
    question: "What should I do if I receive an intervention order application?",
    answer:
      "Read the documents carefully, check the court date, and get legal advice before responding.",
  },
  {
    question: "Can an intervention order affect parenting?",
    answer:
      "Yes. It may affect communication, changeovers, children’s arrangements, and contact between parties.",
  },
  {
    question: "Can you help with breach concerns?",
    answer:
      "Yes. Breach concerns should be handled quickly because they may have serious consequences.",
  },
];

export default function InterventionOrderLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Intervention Order Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(ivoFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Intervention Order Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Intervention Order Lawyer Melbourne"
        intro={
          <>
            <p>
              Intervention order matters can affect safety, family
              arrangements, parenting, communication, housing, work, and court
              obligations. Whether you are applying for an order or responding to
              one, it is important to understand the conditions and legal
              process.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with intervention order matters in
              Melbourne, including family violence intervention orders,
              responses, court documents, parenting concerns, and related
              family law issues. As experienced{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we provide calm, authoritative, and practical guidance in the
              Magistrates&apos; Court and Family Court.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With an Intervention Order Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Magistrates' Court & Family Court Representation",
          "Urgent IVO Applications & Response Strategies",
          "Parenting Exception Drafting & Safety Coordination",
          "Strictly Confidential Melbourne CBD Consultations",
        ]}
      />

      {/* 2. Legal Advice Before the Court Date [H2] */}
      <Section tone="white" id="before-court-date">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Urgent Legal Steps</span>
            <h2>Legal Advice Before the Court Date</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              If you have received intervention order documents, do not ignore
              them. Court dates and order conditions should be taken seriously.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before responding, it is important to understand:
            </p>
            <ul className="points-list">
              {beforeCourtDateChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Bansal Lawyers can review the documents and explain the next step.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Intervention Order Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Representation"
            title="Intervention Order Matters We Assist With"
            intro="We assist with:"
          />
          <div className="matters-grid">
            {ivoMatters.map((item) => (
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
              Each matter should be reviewed based on the documents, facts,
              safety concerns, and court process.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Intervention Orders and Parenting [H2] */}
      <Section tone="white" id="parenting-impact">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Children & Family Arrangements</span>
            <h2>Intervention Orders and Parenting</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Intervention orders can affect communication between parents,
              child handovers, time with children, and parenting arrangements.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              If children are involved, legal advice is important before agreeing
              to conditions that may affect parenting or communication. For
              dedicated advice on parenting orders and safety exceptions, consult our{" "}
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Child Custody Lawyer Melbourne
              </Link>{" "}
              specialists, or learn more about our broader{" "}
              <Link
                href="/family-lawyers-melbourne/family-violence-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Family Violence Lawyer Melbourne
              </Link>{" "}
              services.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Speak With an Intervention Order Lawyer [H2] */}
      <CtaSection
        title="Speak With an Intervention Order Lawyer"
        text="If you are involved in an intervention order matter, Bansal Lawyers can help you understand the documents, conditions, risks, and next steps."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Urgent intervention order guidance", "Court representation & variations", "Melbourne CBD & virtual consultations"]}
      />

      {/* 6. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Faq items={ivoFaqs} subtitle="Common questions regarding intervention order applications, Magistrates" />
      </Section>
    </>
  );
}
