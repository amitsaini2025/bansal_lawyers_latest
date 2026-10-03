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
  title: "Civil Lawyers Melbourne | Civil Disputes & Legal Notices",
  description:
    "Civil lawyers in Melbourne for contract and debt disputes, legal notices, negotiation and court-related steps. Book a consultation with Bansal Lawyers.",
  path: "/civil-lawyers-melbourne",
  keywords: [
    "Civil Lawyers Melbourne",
    "Dispute Resolution Lawyers Melbourne",
    "Contract Dispute Lawyers Melbourne",
    "Debt Dispute Lawyers Melbourne",
    "Legal Notice Lawyers Melbourne",
    "Civil Litigation Melbourne",
    "VCAT Lawyers Melbourne",
    "Civil Procedure Act Victoria",
  ],
});

const civilMatters = [
  {
    title: "Civil disputes",
    href: "#notices-and-negotiation",
  },
  {
    title: "Contract disputes",
    href: "#contract-and-debt-disputes",
  },
  {
    title: "Debt disputes",
    href: "#contract-and-debt-disputes",
  },
  {
    title: "Legal notices",
    href: "#notices-and-negotiation",
  },
  {
    title: "Negotiation support",
    href: "#notices-and-negotiation",
  },
  {
    title: "Document preparation",
    href: "#court-matters",
  },
  {
    title: "Compensation-related matters",
    href: "/contact/",
  },
  {
    title: "Property-related disputes",
    href: "/property-lawyers-melbourne/",
  },
  {
    title: "Business-related disputes",
    href: "/commercial-lawyers-melbourne/",
  },
  {
    title: "Court document preparation",
    href: "#court-matters",
  },
  {
    title: "General civil litigation advice",
    href: "/contact/",
  },
];

const approachPoints = [
  "Review of facts, documents and evidence",
  "Clear explanation of legal options",
  "Assistance with legal notices and responses",
  "Practical advice on dispute resolution",
  "Support with negotiation and preparation",
  "Professional handling of court-related steps",
];

const civilFaqs = [
  {
    question: "What is a civil law matter?",
    answer:
      "A civil law matter is a non-criminal dispute between individuals, businesses or other parties, usually about money, contracts, property or legal rights. Common examples include contract disputes, debt disputes and property disputes. The usual aim is a resolution or compensation, not punishment.",
  },
  {
    question: "Can Bansal Lawyers help with legal notices?",
    answer:
      "Yes. We prepare, review and respond to legal notices. A notice can set deadlines and have real consequences, so it's worth getting advice before you send or respond to one.",
  },
  {
    question: "Do you help with contract disputes?",
    answer:
      "Yes. We assist with contract disputes, document review, negotiation and court-related steps where required. We start by checking what the contract actually says and what evidence you have.",
  },
  {
    question: "Can you help with debt disputes?",
    answer:
      "Yes. We assist with debt disputes, unpaid amounts, legal notices, negotiation and recovery-related advice, whether you're owed money or disputing a claim for payment.",
  },
  {
    question: "When should I contact a civil lawyer?",
    answer:
      "When a dispute starts, before you send a legal notice, before you respond to a claim, and before you take any court-related step.",
  },
];

export default function CivilLawyersMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(civilFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Civil Lawyers in Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Civil Lawyers in Melbourne"
        intro={
          <>
            <p>
              Civil disputes can arise between individuals, businesses, landlords, tenants, service providers, customers, partners or other parties. They tend to get stressful when communication breaks down, especially where money, contracts, property or personal rights are at stake.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers is a Melbourne civil law firm. We assist clients with dispute resolution, legal notices, negotiation, document preparation and court-related steps where required.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call Our Civil Law Team",
          href: "tel:+61422905860",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "VCAT & Victorian Courts Practice",
          "Negotiation & Genuine Steps Guidance",
          "Prompt Matter Assessment",
        ]}
      />

      {/* 2. Practical Advice for Civil Disputes [H2] */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Dispute Assessment</span>
            <h2>Practical Advice for Civil Disputes</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A civil dispute is easier to deal with when you get proper advice from the start. The right approach depends on the facts, the documents, the evidence, your legal position and the outcome you want.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              As dispute resolution lawyers in Melbourne, we help you understand how strong your position is, what the risks are and what your options are, including whether the matter is worth pursuing given the likely time and cost.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Civil Law Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Civil Law Matters We Assist With"
            intro="As civil lawyers in Melbourne, Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {civilMatters.map((matter) => (
              <Link
                key={matter.title}
                href={matter.href}
                className="matter-item"
                title={`Explore ${matter.title}`}
              >
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
                <span>{matter.title}</span>
                <svg
                  className="matter-item__arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Contract and Debt Disputes [H2] */}
      <Section tone="white" id="contract-and-debt-disputes">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Agreements & Unpaid Monies</span>
            <h2>Contract and Debt Disputes</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Disputes often start when one party doesn&apos;t follow an agreement, won&apos;t pay, delays action or disagrees about what the terms mean.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              As contract dispute lawyers in Melbourne, we review the agreement and the evidence, work out where each side stands and advise on the next step. Our debt dispute lawyers help whether you&apos;re owed money or you&apos;re being asked to pay a debt you don&apos;t think you owe. That includes unpaid amounts, legal notices, negotiation and court-related steps where required.
            </p>

            <div className="deadline-alert-box">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <strong>Statutory Limitation Periods in Victoria</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  Time limits apply. In Victoria, it&apos;s generally six years for a breach of contract, so it&apos;s worth getting advice before too much time passes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Legal Notices and Negotiation [H2] */}
      <Section tone="warm" id="notices-and-negotiation">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Pre-Litigation Strategy</span>
            <h2>Legal Notices and Negotiation</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In many civil matters, a properly prepared legal notice or a sensible negotiation strategy can clarify the issue and open a path to resolution.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              As legal notice lawyers in Melbourne, we review the dispute, prepare correspondence, respond to claims and advise on practical options. A badly worded notice can weaken your position, and ignoring one can too, so get advice before you send or respond to one.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Court-Related Civil Matters [H2] */}
      <Section tone="white" id="court-matters">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Tribunal & Court Representation</span>
            <h2>Court-Related Civil Matters</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some disputes can&apos;t be resolved through negotiation. Where court steps are needed, our civil litigation lawyers in Melbourne advise on the process, review the evidence and prepare the documents.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Depending on the claim, a matter may be heard in VCAT, the Magistrates&apos; Court of Victoria, the County Court or the Supreme Court. Before starting most court proceedings in Victoria, parties are expected to take genuine steps to resolve the dispute under the Civil Procedure Act 2010, and we help with that step. We also assist with compensation-related claims, including where a breach of contract has caused financial loss.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Why Choose Bansal Lawyers for Civil Law? [H2] */}
      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Decision-Making</span>
            <h2>Why Choose Bansal Lawyers for Civil Law?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Civil disputes need clear advice, strong documentation and practical decision-making.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {approachPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 8. Speak With Civil Lawyers in Melbourne [H2] */}
      <CtaSection
        title="Speak With Civil Lawyers in Melbourne"
        text="If you're involved in a civil dispute or need advice before sending or responding to a legal notice, Bansal Lawyers can help you understand your options."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Civil Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Civil Litigation Solicitor"
        badges={["Letters of demand & dispute negotiation", "VCAT & Magistrates Court representation", "Melbourne CBD & virtual consultations"]}
      />

      {/* 9. FAQs [H2] */}
      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>FAQs</h2>
            <Faq items={civilFaqs} />
            <div
              style={{
                marginTop: "2.5rem",
                textAlign: "center",
                padding: "2rem",
                background: "var(--white)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <p style={{ margin: "0 0 1rem", color: "var(--ink-secondary)", fontSize: "0.98rem" }}>
                Received a legal notice or facing an escalating dispute?
              </p>
              <ButtonLink href="/contact" variant="primary">
                Book a Dispute Assessment
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
