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
  title: "Fraud Lawyer Melbourne | Fraud Charges & Criminal Defence",
  description:
    "Bansal Lawyers assists with fraud charges, dishonesty offences, police interviews, document review, court representation and criminal defence advice.",
  path: "/criminal-lawyers-melbourne/fraud-lawyer-melbourne",
  keywords: [
    "Fraud Lawyer Melbourne",
    "Fraud Lawyers Melbourne",
    "Criminal Lawyer Melbourne",
    "Fraud Charge Lawyer Melbourne",
    "Dishonesty Offence Lawyer Melbourne",
    "Criminal Defence Lawyer Melbourne",
  ],
});

const fraudMatters = [
  "Obtaining financial advantage by deception under Section 82 of the Crimes Act 1958 (Vic)",
  "Obtaining property by deception under Section 81 of the Crimes Act 1958 (Vic)",
  "False accounting, falsification of documents, and book-keeping allegations",
  "Forgery, uttering forged documents, and identity fraud offences",
  "Corporate, commercial, and workplace fraud investigations",
  "Disputed loan applications, mortgage documents, or financing records",
  "Commonwealth fraud offences, Centrelink, or taxation-related charges",
  "Digital fraud, electronic fund transfers, and cyber dishonesty claims",
  "Police interviews, search warrants, and voluntary document disclosure notices",
  "Forensic accounting evidence, audit reviews, and spreadsheet analysis",
  "Magistrates' Court committal hearings and County Court trial representation",
  "Negotiating charge withdrawal, reduction, or agreed summaries of facts",
];

const defenceApproach = [
  "Scrutinising complex documentary and electronic trails to verify transactional accuracy",
  "Testing the legal element of deception and whether representations were intentionally false",
  "Advising on legal rights, professional obligations, and self-incrimination before attending police interviews",
  "Managing voluntary document production to prevent accidental disclosure of privileged communications",
  "Engaging independent forensic accountants or digital auditors where financial calculations are disputed",
  "Conducting structured prosecution negotiations to eliminate duplicative or unprovable charges",
  "Formulating strategic defence arguments for committal hearings or trial before a judge and jury",
  "Preparing comprehensive plea submissions in mitigation highlighting restitution and rehabilitation",
];

const fraudFaqs = [
  {
    question: "What constitutes fraud or deception under Victorian criminal law?",
    answer:
      "In Victoria, fraud is primarily prosecuted under the Crimes Act 1958 as 'obtaining financial advantage by deception' or 'obtaining property by deception'. To convict, the prosecution must prove that the accused person made a deliberate deception (by words or conduct), that the deception induced the transfer of property or financial benefit, and that the conduct was dishonest by the standards of ordinary, reasonable people.",
  },
  {
    question: "Should I hand over financial records or answer police questions voluntarily?",
    answer:
      "You should not provide voluntary statements or hand over personal or business records to police or investigators without prior legal advice. While investigators may present requests as routine fact-finding, documents surrendered voluntarily can form the core evidentiary basis for criminal charges. A fraud lawyer can determine which documents are legally required to be produced and which are protected by privilege.",
  },
  {
    question: "How does a fraud charge impact professional licences and employment?",
    answer:
      "Fraud charges carry severe professional implications. Regulatory bodies—such as ASIC, the Tax Practitioners Board, the Victorian Legal Services Board, and healthcare boards—often require immediate notification of dishonesty charges. A finding of guilt can lead to licence suspension, directorship disqualification, employment termination, and severe reputational damage.",
  },
  {
    question: "Can fraud charges be heard in the Magistrates' Court?",
    answer:
      "Many fraud charges can be heard summarily in the Magistrates' Court of Victoria if the financial amount falls within statutory jurisdictional limits and both the magistrate and accused consent. However, high-value, complex, or systemic fraud allegations are indictable offences that generally proceed by way of committal hearing to the County Court of Victoria.",
  },
  {
    question: "What is the role of restitution in resolving a fraud matter?",
    answer:
      "Restitution refers to repaying or restoring the financial loss suffered by the complainant. While offering restitution does not automatically result in charges being dismissed, early and genuine financial repayment is considered a significant mitigating factor by Victorian sentencing courts and may influence prosecution negotiations regarding the final charges.",
  },
  {
    question: "Can honest mistake or lack of intent be a defence to fraud?",
    answer:
      "Yes. The prosecution must prove beyond reasonable doubt that the accused acted dishonestly and intentionally deceived another. If the conduct arose from an honest mistake, poor business management, reliance on professional advice, or lack of knowledge, the requisite dishonest mental state may not be established.",
  },
];

export default function FraudLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Fraud Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(fraudFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Fraud Lawyer Melbourne"
        intro={
          <>
            <p>
              Fraud and dishonesty allegations involve intricate documentation, substantial financial
              exposure, and severe risks to professional status and personal liberty.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides meticulous, strategic criminal defence representation for corporate
              executives, business owners, employees, and individuals facing fraud allegations across Victoria.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Fraud Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Confidential Advice",
          "Complex Documentary & Financial Review",
          "Police Interview & Investigation Counsel",
          "Magistrates' & County Court Representation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Financial Defence</span>
            <h2>Rigorous Criminal Defence for Fraud & Dishonesty Allegations</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Fraud investigations in Melbourne typically originate from corporate audits, banking alerts,
              disputed commercial transactions, or police investigations into alleged deceptions. Unlike
              many other criminal matters, fraud cases often depend heavily on voluminous documentary records,
              spreadsheets, email correspondence, and complex financial analysis.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The central legal battleground in fraud proceedings is proving dishonesty and intent. Establishing
              whether a financial discrepancy was the result of a deliberate deception or instead attributable
              to commercial failure, accounting error, or shared misunderstandings is vital to preparing an
              effective defence.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our overarching criminal practice at our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or read about
              property-related offences on our{" "}
              <Link href="/criminal-lawyers-melbourne/theft-lawyer-melbourne/">Theft Lawyer Melbourne</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Matters We Handle"
            title="Fraud Allegations & Dishonesty Matters We Assist With"
            intro="We defend clients facing state and federal dishonesty investigations, including:"
          />
          <div className="matters-grid">
            {fraudMatters.map((item) => (
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
            Every matter requires individual assessment of the prosecution brief, electronic records, witness
            statements, and commercial context.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Defend Complex Fraud Matters</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Early intervention in fraud matters can significantly alter the direction of a case. We guide you
              through every phase of the investigation and court process:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {defenceApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If police seek to interview you, our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              practitioners will advise you on exercising your legal rights. For court hearings, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne/">
                Criminal Defence Lawyer Melbourne
              </Link>{" "}
              advocates ensure your position is forcefully put forward.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Protecting Your Professional Standing and Liberty</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A fraud investigation carries high personal stakes. Beyond the potential for custodial penalties,
              the collateral damage can include the loss of directorships, professional licences, corporate
              reputation, and banking relationships.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our role is to provide realistic, objective assessments of the evidence before decisions are made.
              We examine every financial calculation, identify evidentiary deficiencies in the prosecution’s
              case, and explore every avenue for summary resolution or full defence.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To consult with our criminal defence team regarding a fraud investigation or court summons, visit our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={fraudFaqs} />
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
                Under investigation for fraud or facing financial dishonesty charges in Victoria?
              </p>
              <ButtonLink href="/contact/" variant="primary">
                Book a Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
