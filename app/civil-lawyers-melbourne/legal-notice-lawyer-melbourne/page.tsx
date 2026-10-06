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
  title: "Legal Notice Lawyer Melbourne | Demand Letters & Civil Notices",
  description:
    "Bansal Lawyers assists with legal notices, demand letters, civil dispute notices, responses to notices, document review and negotiation advice.",
  path: "/civil-lawyers-melbourne/legal-notice-lawyer-melbourne",
  keywords: [
    "Legal Notice Lawyer Melbourne",
    "Legal Notice Lawyers Melbourne",
    "Civil Legal Notice Melbourne",
    "Demand Letter Lawyer Melbourne",
    "Letter of Demand Lawyer Melbourne",
    "Civil Dispute Lawyer Melbourne",
  ],
});

const noticeTypes = [
  "Formal Letters of Demand for unpaid debts and contractual amounts",
  "Breach of contract notices specifying required cure periods",
  "Notices of default and termination under commercial agreements",
  "Landlord and commercial tenant notices, including notices of default and re-entry",
  "Property contract default notices and notices to complete under contracts of sale",
  "Business dispute notices between co-directors, shareholders, and partners",
  "Cease and desist letters concerning commercial interference or intellectual property",
  "Formal legal responses to letters of demand and dispute allegations",
  "Without-prejudice settlement proposals accompanying formal notices",
  "Notices under Victorian legislation such as the Fences Act or Building Act",
];

const noticePrinciples = [
  "Auditing underlying contracts, invoices, and factual records before sending",
  "Ensuring strict compliance with contractual notice clauses and service rules",
  "Setting out the factual narrative and legal basis clearly without emotional language",
  "Providing a reasonable and legally compliant timeframe for remedy or payment",
  "Avoiding aggressive, misleading, or unsupportable threats of legal action",
  "Preserving the client's rights without accidentally waiving breaches or repudiating",
  "Opening a structured pathway for sensible commercial negotiation and settlement",
];

const legalNoticeFaqs = [
  {
    question: "What is the legal purpose of a formal Letter of Demand?",
    answer:
      "A formal Letter of Demand puts the recipient on clear notice that a legal obligation (such as an unpaid debt or contractual breach) is outstanding. It details the exact factual and legal grounds of the claim, specifies the remedy required, establishes a strict deadline for compliance, and demonstrates to courts or tribunals that genuine pre-litigation steps were taken to resolve the matter.",
  },
  {
    question: "Can I write and send a legal notice myself?",
    answer:
      "While individuals can send demand letters, doing so without legal advice carries significant risks. Lay correspondence often includes inflammatory language, makes unsupported claims, or misstates contractual terms. Sending an incorrect notice can waive your legal rights, compromise future litigation, or inadvertently constitute 'repudiation' of the contract.",
  },
  {
    question: "What should I do if I receive a lawyer's letter of demand?",
    answer:
      "Do not ignore the letter. Note the deadline provided, do not engage in heated direct phone calls, preserve all relevant documents and communications, and seek independent legal advice immediately. A lawyer can evaluate whether the claims are substantiated, identify procedural defects in the notice, and prepare a calm, legally structured response.",
  },
  {
    question: "What does 'Without Prejudice' mean on legal correspondence?",
    answer:
      "Marking correspondence 'Without Prejudice' means that the communications, when made in a genuine attempt to settle an existing dispute, cannot generally be admitted as evidence of admissions or liability in court proceedings. It allows parties to explore realistic settlement concessions freely without prejudicing their legal positions if negotiations fail.",
  },
  {
    question: "Does receiving a legal notice mean I am being sued immediately?",
    answer:
      "Not necessarily. A legal notice or letter of demand is typically a pre-litigation step designed to resolve the conflict before court proceedings are initiated. Under the Civil Procedure Act 2010 (Vic), parties are expected to exchange information and attempt negotiation before issuing formal court claims.",
  },
  {
    question: "What happens if the recipient fails to respond to a legal notice?",
    answer:
      "If the recipient ignores a formal notice or refuses to comply within the specified deadline, the issuing party can proceed to next steps. Depending on the nature of the claim, this may involve initiating proceedings in the Victorian Civil and Administrative Tribunal (VCAT) or filing a complaint in the Magistrates' Court or higher Victorian courts.",
  },
];

export default function LegalNoticeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Legal Notice Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(legalNoticeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Legal Notice Lawyer Melbourne"
        intro={
          <>
            <p>
              A carefully drafted legal notice sets out your rights, clarifies your demands, and establishes
              a professional foundation for resolution or formal proceedings.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne individuals, businesses, and property owners with drafting,
              reviewing, and responding to letters of demand, breach notices, and civil dispute correspondence.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Legal Notice Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Consultations",
          "Evidence-Backed Legal Demands",
          "Procedural & Contractual Notice Compliance",
          "Strategic Pre-Court Responses",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Civil Legal Notices</span>
            <h2>Professional Legal Notices and Letters of Demand in Victoria</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In civil and commercial disputes, formal correspondence is often the decisive first step.
              A well-constructed legal notice signals serious commercial intent, articulates the legal
              grounds of your position, and gives the opposing party a clear opportunity to remedy the
              situation before litigation becomes necessary.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Conversely, sending an aggressive, vague, or legally flawed notice can backfire—waiving
              contractual rights, triggering premature counter-claims, or damaging your credibility if the
              matter proceeds to a court or tribunal.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our core dispute services at our{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> and{" "}
              <Link href="/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/">
                Civil Dispute Lawyer Melbourne
              </Link>{" "}
              pages, or explore specific assistance for{" "}
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
            eyebrow="Notice Categories"
            title="Types of Legal Notices We Prepare and Advise On"
            intro="We draft, review, and respond to formal notices across a wide spectrum of Victorian civil matters:"
          />
          <div className="matters-grid">
            {noticeTypes.map((item) => (
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
            Every notice must strictly adhere to contractual service provisions, statutory requirements, and
            evidentiary standards.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Principles</span>
            <h2>Key Requirements for an Effective Legal Notice</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              To carry weight and withstand scrutiny, a legal notice must be drafted with precision. Our
              preparation involves:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {noticePrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If a notice does not yield a resolution and formal proceedings are initiated, our{" "}
              <Link href="/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/">
                Court Document Preparation Lawyer Melbourne
              </Link>{" "}
              team ensures that statements of claim and formal pleadings align seamlessly with prior demands.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Responding to Demands</span>
            <h2>What to Do When You Receive a Formal Legal Notice</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Receiving a letter of demand from a law firm can feel intimidating. However, many notices contain
              exaggerated claims, misinterpret the contract, or overlook valid counter-claims.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist recipients by reviewing the allegations objectively, auditing the documentary records,
              and preparing a structured formal reply. A measured, legally informed response often clarifies
              misunderstandings, narrows the dispute, or discourages the other side from pursuing unmeritorious action.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you need a notice prepared or have received a demand requiring a response, contact our Melbourne
              CBD office via our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={legalNoticeFaqs} />
      </Section>
    </>
  );
}
