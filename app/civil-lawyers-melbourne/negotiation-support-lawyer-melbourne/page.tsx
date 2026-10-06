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
import { createBreadcrumbSchema, createFaqSchema, createLegalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Negotiation Support Lawyer Melbourne | Civil Dispute Settlement Advice",
  description:
    "Bansal Lawyers assists with negotiation support, civil dispute settlement advice, legal notices, document review and practical resolution options.",
  path: "/civil-lawyers-melbourne/negotiation-support-lawyer-melbourne",
  keywords: [
    "Negotiation Support Lawyer Melbourne",
    "Negotiation Lawyer Melbourne",
    "Dispute Negotiation Lawyer Melbourne",
    "Civil Dispute Lawyer Melbourne",
    "Settlement Lawyer Melbourne",
    "Dispute Resolution Lawyer Melbourne",
  ],
});

const negotiationAreas = [
  "Commercial and contract dispute settlement negotiations",
  "Unpaid debts, disputed invoices, and structured repayment plans",
  "Business partner, director, and shareholder separation negotiations",
  "Commercial lease disagreements, surrender terms, and make-good negotiations",
  "Property contract, off-the-plan, and settlement delay resolutions",
  "Consumer, trade, and service provider complaints and claims",
  "Without-prejudice dispute resolution and conciliation conferences",
  "Evaluating, drafting, and responding to Calderbank settlement offers",
  "Drafting binding Deeds of Settlement, Release, and Indemnity",
  "Pre-litigation alternative dispute resolution (ADR) under court protocols",
];

const negotiationSteps = [
  "Auditing contracts, financial records, and correspondence to assess real leverage",
  "Clarifying the client's absolute legal rights versus practical commercial outcomes",
  "Establishing bottom-line parameters, walk-away positions, and risk tolerances",
  "Formulating structured without-prejudice offers and counter-proposals",
  "Conducting direct negotiations with counterpart solicitors or mediators",
  "Evaluating the tax, enforceability, and operational consequences of proposed terms",
  "Ensuring settlement terms are not left as vague informal email handshakes",
  "Drafting comprehensive Deeds of Settlement and Release with mutual discharge terms",
];

const negotiationFaqs = [
  {
    question: "Why is legal negotiation support preferable to going straight to court?",
    answer:
      "Litigation in Victorian courts or tribunals is inevitably adversarial, costly, public, and time-consuming. Skilled legal negotiation allows parties to retain control over the outcome, explore flexible commercial remedies that courts cannot order, protect business relationships, and resolve disputes in weeks rather than months or years.",
  },
  {
    question: "What is the danger of reaching an informal settlement agreement?",
    answer:
      "Informal agreements reached via text message, phone calls, or vague email exchanges frequently result in secondary disputes. Without formal legal documentation, parties often disagree on payment deadlines, tax treatments, default remedies, and whether future related claims have been truly released. A poorly documented settlement often re-opens the original dispute.",
  },
  {
    question: "What is a Calderbank offer or an Offer of Compromise?",
    answer:
      "In Victorian civil disputes, a Calderbank offer (or formal statutory Offer of Compromise) is a without-prejudice settlement offer that carries potential cost consequences. If the opposing party unreasonably rejects a realistic offer and later achieves a less favorable result in court, the court may order them to pay indemnity costs from the date the offer was made.",
  },
  {
    question: "Can a lawyer negotiate on my behalf without me having to face the other party?",
    answer:
      "Yes. In many contested or emotional disputes, having a lawyer handle communications creates a constructive professional barrier. We represent your interests, present your legal arguments calmly, filter emotional rhetoric from the counterpart, and present concrete settlement options on your behalf.",
  },
  {
    question: "How is a negotiated settlement made legally binding?",
    answer:
      "A negotiated outcome is finalised by executing a formal Deed of Settlement and Release. This deed formally records the agreed payments, specific performance obligations, confidentiality terms, non-disparagement clauses, and unconditional mutual releases preventing either party from reviving claims in future.",
  },
  {
    question: "What if the opposing party refuses to negotiate in good faith?",
    answer:
      "If the other party remains unreasonable or refuses to participate in good-faith settlement discussions, our team will advise you on the next formal steps. This may include issuing a final legal notice, preparing court pleadings, or initiating proceedings in VCAT or the appropriate Victorian court.",
  },
];

export default function NegotiationSupportLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Negotiation Support Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(negotiationFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Negotiation Support Lawyer Melbourne"
        intro={
          <>
            <p>
              Resolving a civil dispute out of court requires clear legal leverage, objective risk analysis,
              and strategic negotiation.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides tactical negotiation support and settlement advice for individuals,
              business owners, and property parties across Melbourne, protecting your commercial interests.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Negotiation Support Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Advice",
          "Without-Prejudice Strategy & Representation",
          "Comprehensive Settlement Deed Drafting",
          "Commercial & Pragmatic Outcome Focus",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Settlement Advice</span>
            <h2>Strategic Legal Negotiation for Civil Disputes in Victoria</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Most civil disputes do not need to end in a courtroom. In fact, Victorian procedural rules
              under the Civil Procedure Act 2010 actively require parties to take genuine steps to resolve
              conflicts before entering litigation. However, effective negotiation is not about conceding
              ground—it is about understanding the legal strengths and commercial weaknesses of both sides.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, we provide experienced negotiation counsel. We evaluate your documents,
              model potential litigation costs, structure without-prejudice proposals, and represent you in
              settlement discussions to secure practical, enforceable outcomes.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For general litigation and dispute pathways, review our main{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> and{" "}
              <Link href="/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/">
                Civil Dispute Lawyer Melbourne
              </Link>{" "}
              services, or see how negotiation applies specifically to{" "}
              <Link href="/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne/">
                Contract Dispute Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne/">
                Debt Dispute Lawyer Melbourne
              </Link>{" "}
              matters.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Negotiation Contexts"
            title="Civil Matters Where We Provide Negotiation Support"
            intro="We assist clients across Victoria in structured negotiations covering diverse civil areas:"
          />
          <div className="matters-grid">
            {negotiationAreas.map((item) => (
              <div key={item} className="matter-item">
                <svg className="matter-item__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
          <p style={{ maxWidth: "52rem", margin: "2rem auto 0", lineHeight: "1.75", color: "var(--ink-secondary)" }}>
            Negotiation strategy is tailored to the financial stakes, party relationships, evidentiary strength,
            and immediate timing constraints of each individual case.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Process</span>
            <h2>How We Prepare and Conduct Dispute Negotiations</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Entering discussions without thorough preparation often results in suboptimal compromises. We ensure
              our clients enter negotiations from a position of clarity:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {negotiationSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              To ensure all settlement documentation and correspondence are formally drafted without ambiguity,
              our{" "}
              <Link href="/civil-lawyers-melbourne/document-preparation-lawyer-melbourne/">
                Document Preparation Lawyer Melbourne
              </Link>{" "}
              service provides comprehensive drafting support.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Enforceability</span>
            <h2>Avoiding the Pitfalls of Unclear Informal Agreements</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A settlement is only as good as the document that records it. Parties frequently reach a verbal
              understanding only to find that disagreements persist over release scopes, payment conditions,
              or indemnity obligations.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We draft robust, unambiguous Deeds of Settlement and Release that clearly articulate the exact
              remedies, establish strict default mechanisms, and provide mutual releases so that the dispute
              is closed once and for all.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you are engaged in an active dispute or need counsel before entering settlement talks, reach out
              to our team via our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={negotiationFaqs} />
      </Section>
    </>
  );
}
