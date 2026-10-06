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
  title: "Document Preparation Lawyer Melbourne | Civil Legal Documents",
  description:
    "Bansal Lawyers assists with civil legal document preparation, legal letters, dispute documents, responses, notices and supporting material in Melbourne.",
  path: "/civil-lawyers-melbourne/document-preparation-lawyer-melbourne",
  keywords: [
    "Document Preparation Lawyer Melbourne",
    "Legal Document Preparation Melbourne",
    "Civil Document Lawyer Melbourne",
    "Legal Letter Lawyer Melbourne",
    "Civil Lawyers Melbourne",
    "Legal Drafting Lawyer Melbourne",
  ],
});

const documentTypes = [
  "Formal letters of demand and dispute escalation letters",
  "Breach of contract notices and remedy requests",
  "Detailed written responses to opposing solicitor claims",
  "Deeds of Settlement, Release, and Indemnity",
  "Repayment agreements and formal payment plan deeds",
  "Affidavits, statutory declarations, and witness statements",
  "VCAT applications, points of claim, and points of defence",
  "Chronologies, document indices, and evidence bundles",
  "Commercial agreements, variations, and side letters",
  "General releases and mutual cancellation deeds",
];

const draftingStandards = [
  "Ensuring strict factual accuracy and consistency with contemporaneous records",
  "Using precise, plain-language drafting that eliminates ambiguous interpretations",
  "Structuring claims logically with clear references to supporting evidence",
  "Complying with Victorian statutory rules, court practice notes, and tribunal guidelines",
  "Ensuring that settlement documents provide full, irrevocable mutual releases",
  "Avoiding unnecessary inflammatory language that escalates friction unproductively",
  "Preserving all legal rights, causes of action, and potential cost entitlements",
];

const documentPrepFaqs = [
  {
    question: "Why should a lawyer prepare civil dispute documents instead of using templates?",
    answer:
      "Generic online templates fail to account for the unique factual nuances, contractual obligations, and statutory requirements of Victorian law. Poorly drafted documents often contain contradictory terms, fail to identify the correct legal entities, or inadvertently waive crucial rights. Tailored legal drafting ensures your documents are enforceable, legally sound, and directly targeted to your objectives.",
  },
  {
    question: "What is the difference between general document preparation and court document preparation?",
    answer:
      "General document preparation encompasses pre-litigation correspondence, letters of demand, settlement deeds, and non-court dispute material. Court document preparation specifically involves formal legal pleadings—such as Statements of Claim, Defences, Counterclaims, and Affidavits—which must strictly adhere to the Civil Procedure Act 2010 (Vic) and formal court rules.",
  },
  {
    question: "What is an Affidavit or Statutory Declaration in a civil matter?",
    answer:
      "An Affidavit is a formal written statement of facts verified by oath or solemn affirmation, used as sworn evidence in court proceedings. A Statutory Declaration is a formal statement made under Victorian or Commonwealth law for use outside of court or in certain tribunals. Both carry severe penalties for providing knowingly false or misleading statements.",
  },
  {
    question: "How does evidence organisation impact the strength of a dispute document?",
    answer:
      "Clear evidence organisation transforms a complex dispute into a compelling, coherent narrative. Document indices, chronologies, and organised exhibits make it straightforward for opposing parties, mediators, or tribunal members to verify facts quickly, significantly improving the prospects of early settlement.",
  },
  {
    question: "What makes a Deed of Settlement legally enforceable?",
    answer:
      "A Deed of Settlement is a formal legal instrument that does not require consideration to be binding. To be enforceable, it must be properly executed in accordance with statutory execution requirements (such as section 127 of the Corporations Act for companies), contain clear consideration or release terms, and define dispute boundaries without ambiguity.",
  },
  {
    question: "Can a lawyer review and revise documents I have already drafted?",
    answer:
      "Yes. If you have drafted a letter of demand, response, or statement of facts, a lawyer can review the draft, identify legal risks, excise harmful admissions, clarify ambiguous terminology, and strengthen the legal arguments before it is sent to the other party.",
  },
];

export default function DocumentPreparationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Document Preparation Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(documentPrepFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Document Preparation Lawyer Melbourne"
        intro={
          <>
            <p>
              In civil matters, the clarity, accuracy, and legal precision of your written documents
              directly impact the strength of your position.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne clients with preparing, reviewing, and structuring legal letters,
              dispute documentation, settlement deeds, statutory declarations, and formal responses.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Document Preparation Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Assistance",
          "Precise Plain-Language Legal Drafting",
          "Legally Enforceable Deeds & Releases",
          "Evidence Auditing & Chronology Building",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Civil Legal Drafting</span>
            <h2>Professional Legal Document Preparation in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Written documentation is the bedrock of every civil dispute. A single poorly phrased sentence
              in a demand letter can be construed as an admission of liability; a loosely worded settlement
              clause can leave you exposed to further litigation; and an incomplete chronology can weaken an
              otherwise meritorious claim.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, we draft and review civil legal documents with meticulous attention to detail.
              We ensure that your correspondence, notices, and agreements reflect the exact factual record,
              strictly comply with Victorian statutory standards, and advance your strategic objectives.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our general civil practice at our{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> page. For specialized
              notices, see our{" "}
              <Link href="/civil-lawyers-melbourne/legal-notice-lawyer-melbourne/">
                Legal Notice Lawyer Melbourne
              </Link>{" "}
              service, or consult our{" "}
              <Link href="/civil-lawyers-melbourne/negotiation-support-lawyer-melbourne/">
                Negotiation Support Lawyer Melbourne
              </Link>{" "}
              team for settlement deeds.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Documents We Prepare"
            title="Civil Legal Documents We Can Assist With"
            intro="We prepare and refine a comprehensive array of civil and commercial documents:"
          />
          <div className="matters-grid">
            {documentTypes.map((item) => (
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
            Every document is custom-drafted to match your exact legal position, relevant contractual clauses,
            and the specific forum in which it will be relied upon.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Drafting Standards</span>
            <h2>Our Standards for Accurate and Effective Legal Drafting</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              High-quality legal documents eliminate ambiguity and protect clients from unintended liabilities.
              Our drafting methodology focuses on:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {draftingStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If your matter requires formal court filings such as Statements of Claim, Defences, or Court Affidavits,
              our{" "}
              <Link href="/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/">
                Court Document Preparation Lawyer Melbourne
              </Link>{" "}
              practice provides dedicated litigation drafting.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk Prevention</span>
            <h2>The Hidden Risks of Poorly Drafted Legal Documents</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Using informal letters or unvetted internet templates often creates false confidence. Vague
              settlement agreements frequently leave loopholes that allow the opposing party to restart the
              dispute, while poorly structured letters of demand may reveal tactical weaknesses prematurely.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Having an experienced legal practitioner draft or review your material ensures that every document
              is legally compliant, strategically focused, and fully enforceable under Victorian law.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To arrange legal drafting or document review for your civil matter, visit our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={documentPrepFaqs} />
      </Section>
    </>
  );
}
