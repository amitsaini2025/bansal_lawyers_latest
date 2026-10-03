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
  title: "Court Document Preparation Lawyer Melbourne | Civil Court Documents",
  description:
    "Bansal Lawyers assists with court document preparation, civil litigation documents, supporting evidence, responses and court-related legal advice.",
  path: "/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne",
  keywords: [
    "Court Document Preparation Lawyer Melbourne",
    "Court Document Lawyer Melbourne",
    "Civil Court Documents Melbourne",
    "Civil Litigation Documents Melbourne",
    "Civil Lawyers Melbourne",
    "Legal Document Preparation Melbourne",
  ],
});

const courtDocumentTypes = [
  "Magistrates' Court Complaints and Statements of Claim",
  "Notices of Defence and formal responses to civil claims",
  "Counterclaims, set-offs, and third-party notices",
  "VCAT application forms, points of claim, and points of defence",
  "Affidavits of evidence-in-chief, reply affidavits, and exhibit bundles",
  "Interlocutory court applications, summonses, and supporting affidavits",
  "Discovery lists, notices to produce, and answers to interrogatories",
  "Subpoenas for documents and evidence to third parties",
  "Formal Offers of Compromise under court rules",
  "Consent orders, terms of settlement, and default judgment applications",
];

const courtPreparationStandards = [
  "Complying strictly with the Civil Procedure Act 2010 (Vic) and overarching obligations",
  "Formulating material facts clearly without pleading evidence or conclusions of law prematurely",
  "Ensuring each legal element of the cause of action or statutory defence is properly pleaded",
  "Organising and paginating supporting documentary exhibits according to court practice notes",
  "Drafting affidavits in direct, objective first-person testimony verified by oath or affirmation",
  "Conducting strict deadline checks for filing, service, and appearance requirements",
  "Ensuring factual consistency between prior correspondence, demand letters, and pleadings",
];

const courtDocFaqs = [
  {
    question: "What are pleadings in a Victorian civil court action?",
    answer:
      "Pleadings are formal legal documents exchanged between parties in court proceedings—such as a Statement of Claim, Defence, Counterclaim, and Reply. They define the precise factual issues in dispute, outline the legal basis of claims and defences, and determine what evidence will be admissible at trial. Inadequate pleadings can be struck out by the court.",
  },
  {
    question: "What is the Overarching Obligations certification under the Civil Procedure Act 2010 (Vic)?",
    answer:
      "In Victoria, litigants and their lawyers must sign and file an Overarching Obligations Certification when filing court documents. This certifies compliance with statutory duties, including acting honestly, having a proper basis for claims and defences, taking reasonable steps to resolve the dispute, and cooperating to minimise delay and costs.",
  },
  {
    question: "What are the risks of filing incomplete or inaccurate court documents?",
    answer:
      "Filing poorly prepared court documents can have severe consequences: claims may be dismissed or struck out; you may face personal adverse costs orders; deadlines may be forfeited; and admissions inadvertently made in unvetted pleadings can be binding and fatal to your case at trial.",
  },
  {
    question: "How does drafting a court affidavit differ from a standard witness statement?",
    answer:
      "An Affidavit is formal sworn evidence. It must be structured into numbered paragraphs, contain only admissible evidence within the direct knowledge of the deponent (avoiding hearsay, speculation, and legal argument), have properly certified and tabbed exhibits, and be witnessed by an authorised affidavit taker under Victorian law.",
  },
  {
    question: "What should I do if I am served with a court complaint or VCAT notice?",
    answer:
      "Act immediately. Victorian courts enforce strict deadlines for filing a Notice of Defence or response (often 21 days from service). Failing to file within the prescribed window can result in the plaintiff obtaining default judgment against you, which can lead to immediate enforcement, bank garnishing, or asset seizure.",
  },
  {
    question: "Can a lawyer help me prepare court documents if I plan to represent myself?",
    answer:
      "Yes. Legal practitioners can provide unbundled legal drafting assistance—preparing compliant Statements of Claim, Defences, or Affidavits that meet procedural court standards—while allowing you to manage self-representation at hearings if you choose.",
  },
];

export default function CourtDocumentPreparationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Court Document Preparation Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(courtDocFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Court Document Preparation Lawyer Melbourne"
        intro={
          <>
            <p>
              Court proceedings demand rigorous procedural compliance, precise legal pleadings,
              and meticulously structured evidence.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers prepares civil litigation documents, statements of claim, defences, affidavits,
              and tribunal filings for clients across Melbourne courts and VCAT.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Court Document Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Assistance",
          "Victorian Court & VCAT Compliant Pleadings",
          "Evidence Verification & Affidavit Drafting",
          "Overarching Obligations Adherence",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Litigation Drafting</span>
            <h2>Court Document Preparation for Victorian Civil Proceedings</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              When a civil dispute enters formal litigation, standard correspondence is replaced by strict
              court rules, statutory pleadings, and formal evidentiary standards. Every statement of claim,
              defence, and affidavit filed with the court sets the boundary of what can be argued at trial.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, we draft court documents that are factually accurate, legally rigorous,
              and fully compliant with the Civil Procedure Act 2010 (Vic) and court practice notes.
              Whether initiating proceedings or responding to a served claim, we ensure your case is presented
              with maximum clarity.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For broader litigation counsel, explore our{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> and{" "}
              <Link href="/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/">
                Civil Litigation Lawyer Melbourne
              </Link>{" "}
              services, or review general drafting support at our{" "}
              <Link href="/civil-lawyers-melbourne/document-preparation-lawyer-melbourne/">
                Document Preparation Lawyer Melbourne
              </Link>{" "}
              page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Court Documents"
            title="Litigation Documents We Prepare and Advise On"
            intro="We prepare and review court documentation across Victorian civil jurisdictions:"
          />
          <div className="matters-grid">
            {courtDocumentTypes.map((item) => (
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
            Each document is drafted to comply with the specific procedural rules of VCAT, the Magistrates&apos; Court,
            the County Court, or the Supreme Court of Victoria.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Procedural Standards</span>
            <h2>Our Standards for Drafting Compliant Court Pleadings</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Court pleadings are scrutinized closely by judicial officers and opposing counsel. Our drafting
              standards ensure:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {courtPreparationStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Before court action commences, our{" "}
              <Link href="/civil-lawyers-melbourne/legal-notice-lawyer-melbourne/">
                Legal Notice Lawyer Melbourne
              </Link>{" "}
              team ensures that all pre-litigation correspondence and genuine settlement steps satisfy
              court expectations.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk Management</span>
            <h2>The Importance of Legal Review Before Filing in Court</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Filing documents with Victorian courts is an irreversible formal step. Pleadings that contain
              contradictory statements, plead unsupportable causes of action, or disclose privileged communications
              can permanently compromise your proceedings and attract cost penalties.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We provide careful pre-filing reviews and robust drafting to ensure that your claim or defence
              stands on solid legal ground, respects statutory timelines, and presents your case compellingly.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you have been served with court documents or need formal pleadings drafted, visit our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page to arrange a consultation.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={courtDocFaqs} />
      </Section>
    </>
  );
}
