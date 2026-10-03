import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
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
  title: "Negotiations and Settlements Lawyer Melbourne | Commercial Dispute Resolutions",
  description:
    "Bansal Lawyers assists with commercial dispute negotiation, settlement discussions, deeds of settlement, and release documentation in Melbourne.",
  path: "/commercial-lawyers-melbourne/negotiations-settlements-lawyer-melbourne",
  keywords: [
    "Negotiations and Settlements Lawyer Melbourne",
    "Commercial Settlement Lawyer Melbourne",
    "Deed of Settlement Lawyer Melbourne",
    "Dispute Negotiation Lawyer Melbourne",
    "Commercial Dispute Resolution Melbourne",
    "Out of Court Settlement Melbourne",
  ],
});

const negotiationServices = [
  "Formulating strategic, reality-tested commercial negotiation strategies",
  "Conducting direct without-prejudice discussions with opposing counsel",
  "Representation in formal commercial mediation and conciliation conferences",
  "Evaluating commercial settlement offers against litigation costs and exposure",
  "Drafting binding Deeds of Settlement and Release to extinguish all claims",
  "Structuring enforceable installment plans and security arrangements",
  "Mutual releases, non-disparagement, and strict confidentiality terms",
  "Consent orders in court or VCAT to finalize active proceedings",
];

const deedComponents = [
  "Precise definition of the underlying dispute and scope of settled claims",
  "Full and final mutual release preventing any future claims arising from the dispute",
  "Clear payment milestones, bank account details, and default provisions",
  "Strict confidentiality clauses protecting reputation and settlement terms",
  "Non-disparagement clauses prohibiting public criticism on social media or in trade",
  "Consequences of default (e.g., immediate entry of consent judgment for full debt)",
];

const settlementFaqs = [
  {
    question: "Why is a formal Deed of Settlement necessary instead of an email agreement?",
    answer:
      "An informal email agreement often fails to legally extinguish all potential causes of action, leaves terms ambiguous, and lacks enforceable default remedies. A formal Deed of Settlement and Release provides conclusive legal finality under Australian law.",
  },
  {
    question: "What does 'without prejudice' mean in settlement discussions?",
    answer:
      "'Without prejudice' communication allows parties to make concessions and explore compromise during negotiations without those statements being used against them as admissions in court if settlement talks fail.",
  },
  {
    question: "What happens if the other party defaults on agreed settlement payments?",
    answer:
      "A properly drafted Deed of Settlement includes an acceleration clause and default judgment consent. If the debtor misses an installment, the full balance (often without the negotiated discount) becomes immediately due and payable.",
  },
  {
    question: "Can a settlement be kept strictly confidential?",
    answer:
      "Yes. Most Deeds of Settlement contain robust confidentiality and non-disparagement clauses that prohibit either party from disclosing the terms or circumstances to third parties, protecting commercial reputation.",
  },
  {
    question: "Can Bansal Lawyers negotiate on my behalf without me attending meetings?",
    answer:
      "Yes. We frequently act as the direct representative in negotiations with opposing lawyers, keeping you informed at every stage and obtaining your instructions before any binding commitment is made.",
  },
];

export default function NegotiationsSettlementsLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Negotiations and Settlements Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(settlementFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Negotiations and Settlements Lawyer Melbourne"
        intro={
          <>
            <p>
              Not every commercial dispute should end in a courtroom. Principled negotiation and structured settlement often deliver faster, more cost-effective outcomes.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers represents Melbourne businesses and individuals in commercial negotiations, mediation, and drafting enforceable Deeds of Settlement and Release.
            </p>
          </>
        }
        primaryAction={{ label: "Discuss a Settlement", href: "/contact" }}
        secondaryAction={{ label: "Call Our Team", href: "tel:+61422905860" }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Binding Deeds of Settlement & Release",
          "Principled Commercial Negotiation",
          "Confidentiality & Reputation Safeguards",
        ]}
      />

      {/* Practical Strategic Resolution */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Pragmatic Outcomes</span>
            <h2>Achieving Certainty Through Commercial Negotiation</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Prolonged litigation creates distraction, substantial legal costs, and commercial uncertainty. In most business conflicts, reaching an agreed commercial settlement allows parties to regain control of their time and resources.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, we combine assertive advocacy with pragmatic negotiation skills. We focus on securing outcomes that meet your commercial objectives while ensuring that all legal risks are conclusively terminated.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Negotiation Practice"
            title="How We Assist With Commercial Negotiations and Settlements"
            intro="We manage the complete settlement process from initial discussions to binding execution:"
          />
          <div className="matters-grid">
            {negotiationServices.map((item) => (
              <div key={item} className="matter-item">
                <svg className="matter-item__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Deed Components */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Binding Deeds</span>
            <h2>What Must Be Included in a Deed of Settlement and Release</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A settlement agreement is only as good as its drafting. We ensure every deed contains comprehensive protections:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {deedComponents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section tone="warm" id="faqs">
        <Faq items={settlementFaqs} />
      </Section>
    </>
  );
}
