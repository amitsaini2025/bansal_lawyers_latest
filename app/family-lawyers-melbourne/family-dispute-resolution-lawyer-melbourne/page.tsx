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
    "Family Dispute Resolution Lawyer Melbourne | Mediation & Negotiation",
  description:
    "Bansal Lawyers assists with family dispute resolution, mediation preparation, parenting disputes, property negotiations and family law settlement advice.",
  path: "/family-lawyers-melbourne/family-dispute-resolution-lawyer-melbourne",
  keywords: [
    "Family Dispute Resolution Lawyer Melbourne",
    "Family Law Negotiation Lawyer Melbourne",
    "Family Mediation Lawyer Melbourne",
    "Family Lawyer Melbourne",
    "Parenting Dispute Lawyer Melbourne",
    "Property Settlement Negotiation Lawyer",
  ],
});

const beforeNegotiationChecks = [
  "Your legal rights and responsibilities",
  "What documents may be needed",
  "What issues need to be resolved",
  "What terms may be practical",
  "Whether parenting or property matters are involved",
  "Whether safety concerns affect the process",
  "Whether any agreement should be formalised",
];

const disputeMatters = [
  "Family law negotiations",
  "Family dispute resolution advice",
  "Mediation preparation",
  "Parenting disputes",
  "Property settlement negotiations",
  "Consent order discussions",
  "Separation-related disputes",
  "Communication between parties",
  "Settlement document review",
  "Court-related next-step advice",
];

const disputeFaqs = [
  {
    question: "Can Bansal Lawyers help before family mediation?",
    answer:
      "Yes. We assist clients with legal advice before mediation or family dispute resolution.",
  },
  {
    question: "Do all family disputes need to go to court?",
    answer:
      "No. Some matters can be resolved through negotiation, mediation, or agreement, depending on the situation.",
  },
  {
    question: "Can you help with parenting disputes?",
    answer:
      "Yes. We assist with parenting disputes, parenting arrangements, and related family law advice.",
  },
  {
    question: "Can you help formalise an agreement?",
    answer:
      "Yes. If an agreement is reached, we can assist with consent orders or related legal documentation where suitable.",
  },
];

export default function FamilyDisputeResolutionLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Family Dispute Resolution Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(disputeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Family Dispute Resolution Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Family Dispute Resolution Lawyer Melbourne"
        intro={
          <>
            <p>
              Family disputes do not always need to start in court. Many family
              law matters can be discussed through negotiation, mediation, or
              family dispute resolution before stronger legal steps are
              considered.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with family dispute resolution
              advice in Melbourne, including parenting disputes, property
              settlement discussions, consent orders, mediation preparation, and
              family law negotiations. As dedicated{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we help you approach resolution meetings with composure and a
              clear legal strategy.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Family Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Mediation Preparation & Section 60I Certificate Advice",
          "Constructive Parenting & Property Negotiations",
          "Cost-Effective Out-of-Court Dispute Resolution",
          "Melbourne CBD Office & Remote Consultations",
        ]}
      />

      {/* 2. Legal Advice Before Negotiation or Mediation [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Preparation & Strategy</span>
            <h2>Legal Advice Before Negotiation or Mediation</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Before attending mediation or discussing settlement, it is
              important to understand your legal position. Going into discussions
              without advice can lead to unclear or unfair agreements.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before negotiation, you should understand:
            </p>
            <ul className="points-list">
              {beforeNegotiationChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              Bansal Lawyers can help you prepare before negotiations or
              mediation.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Family Dispute Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Family Dispute Matters We Assist With"
            intro="We assist with:"
          />
          <div className="matters-grid">
            {disputeMatters.map((item) => (
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
              Each matter should be reviewed based on the dispute, documents,
              and client’s goals.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Parenting and Property Negotiations [H2] */}
      <Section tone="white" id="negotiations">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Focused Resolution</span>
            <h2>Parenting and Property Negotiations</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Family law negotiations often involve children, property, finances,
              or both. Clear advice helps clients avoid agreeing to terms they do
              not fully understand.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              We assist clients with preparing for discussions and reviewing
              proposed agreements before they are signed or formalised. For
              specialized legal counsel, explore our{" "}
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Child Custody Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Property Settlement Lawyer Melbourne
              </Link>{" "}
              services.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Formalising Agreements [H2] */}
      <Section tone="warm" id="formalising-agreements">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Legally Binding Outcomes</span>
            <h2>Formalising Agreements</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              If an agreement is reached, it may need to be documented properly
              through consent orders or another suitable legal pathway.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Informal agreements can create confusion later if the terms are
              not clear. Our team can formalise your agreement through
              court-approved{" "}
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Consent Orders Lawyer Melbourne
              </Link>{" "}
              or an enforceable private agreement with our{" "}
              <Link
                href="/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
              >
                Binding Financial Agreement Lawyer Melbourne
              </Link>{" "}
              team.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Speak With a Family Dispute Resolution Lawyer [H2] */}
      <CtaSection
        title="Speak With a Family Dispute Resolution Lawyer"
        text="If you are preparing for mediation, negotiation, or settlement discussions, Bansal Lawyers can help you understand your position before making decisions."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Pre-court mediation preparation", "Clear negotiation & formalisation", "Melbourne CBD & virtual consultations"]}
      />

      {/* 7. Frequently Asked Questions [H2] */}
      <Section tone="warm" id="faqs">
        <Container>
          <SectionHeader
            eyebrow="Helpful Answers"
            title="Frequently Asked Questions"
            intro="Common questions regarding family dispute resolution (FDR), mediation, and out-of-court settlements in Melbourne."
          />
          <Faq items={disputeFaqs} />
        </Container>
      </Section>
    </>
  );
}
