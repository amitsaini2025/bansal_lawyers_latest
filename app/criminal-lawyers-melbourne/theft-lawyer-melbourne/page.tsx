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
  title: "Theft Lawyer Melbourne | Theft Charges & Criminal Defence",
  description:
    "Bansal Lawyers assists with theft charges, stealing offences, police interviews, court documents, criminal defence advice and court representation.",
  path: "/criminal-lawyers-melbourne/theft-lawyer-melbourne",
  keywords: [
    "Theft Lawyer Melbourne",
    "Theft Lawyers Melbourne",
    "Criminal Lawyer Melbourne",
    "Theft Charge Lawyer Melbourne",
    "Stealing Offence Lawyer Melbourne",
    "Criminal Defence Lawyer Melbourne",
  ],
});

const theftMatters = [
  "Theft charges under Section 72 and Section 74 of the Crimes Act 1958 (Vic)",
  "Shop theft and retail stealing allegations",
  "Workplace theft, employee misappropriation, and stock discrepancies",
  "Handling stolen goods and receiving stolen property charges",
  "Theft of motor vehicles or joyriding allegations",
  "Theft of personal, commercial, or intellectual property",
  "Dishonesty elements and honest claim of right defences",
  "Police interviews, cautions, search warrants, and station attendances",
  "Reviewing prosecution briefs, CCTV footage, and till or transaction logs",
  "Magistrates' Court Criminal Diversion Program applications for eligible matters",
  "Charge withdrawal negotiations and case conferencing with Victoria Police prosecutors",
  "Court representation for contest mentions, trials, and plea hearings in mitigation",
];

const defenceApproach = [
  "Scrutinising whether the prosecution can prove all statutory elements of theft beyond reasonable doubt",
  "Evaluating the mental element of dishonesty and whether an honest claim of right existed",
  "Reviewing physical and electronic evidence, including store surveillance and digital audit trails",
  "Advising on your right to silence and legal posture prior to any police record of interview",
  "Assessing eligibility for the Magistrates' Court Criminal Diversion Program to avoid a criminal record",
  "Engaging in proactive prosecution negotiations to discontinue charges or narrow factual summaries",
  "Gathering character references, restitution evidence, and rehabilitation materials where appropriate",
  "Providing disciplined court advocacy across mention hearings, contested hearings, and pleas",
];

const theftFaqs = [
  {
    question: "What constitutes theft under Victorian criminal law?",
    answer:
      "Under Section 72 of the Crimes Act 1958 (Vic), a person steals if they dishonestly appropriate property belonging to another with the intention of permanently depriving the other of it. To secure a conviction, the prosecution must establish all three core elements beyond reasonable doubt: appropriation, dishonesty, and the intention to permanently deprive.",
  },
  {
    question: "What is an 'honest claim of right' in a theft matter?",
    answer:
      "Under Victorian law, a person is not deemed dishonest if they appropriated property believing that they had the legal right to deprive the other of it, or believing they would have the owner's consent if the owner knew of the circumstances. An honest belief in a legal entitlement, even if mistaken, can form a valid legal defence against a charge of theft.",
  },
  {
    question: "Can I avoid a criminal conviction for a first-time theft charge?",
    answer:
      "For first-time or minor theft allegations, an accused person may be eligible for the Magistrates' Court Criminal Diversion Program. If the police prosecutor consents and the presiding magistrate approves the application, the matter can be resolved through specific conditions (such as a donation, apology, or good behaviour bond) without a criminal conviction being recorded.",
  },
  {
    question: "How does an employee theft allegation differ from standard theft?",
    answer:
      "Workplace theft or theft by an employee is often treated more seriously by the courts because it involves a breach of trust between employer and employee. Such cases frequently involve detailed accounting records, inventory audits, and digital surveillance. Obtaining early legal advice before answering workplace queries or attending police interviews is critical.",
  },
  {
    question: "Will a theft conviction affect my employment or background checks?",
    answer:
      "Yes. Dishonesty offences such as theft can severely impact current and prospective employment, particularly in banking, accounting, retail management, legal services, and positions requiring security clearances or Working with Children Checks. It can also create barriers for overseas travel visas and immigration citizenship applications.",
  },
  {
    question: "Should I speak to police if they call me in for a theft interview?",
    answer:
      "You should contact a criminal defence lawyer before speaking to Victoria Police or attending the station. You are legally required to confirm your name and address, but you are not obligated to answer questions regarding the alleged theft. Seeking advice early ensures you do not inadvertently make statements that harm your defence.",
  },
];

export default function TheftLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Theft Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(theftFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Theft Lawyer Melbourne"
        intro={
          <>
            <p>
              Being accused of theft or a dishonesty offence can jeopardise your career, reputation, and
              future prospects in a matter of days.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers delivers calm, rigorous, and discreet criminal defence legal advice for
              individuals facing theft charges, workplace stealing allegations, and court proceedings in Melbourne.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Theft Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Discreet Counsel",
          "Police Interview & Station Support",
          "Magistrates' Court Diversion Advice",
          "Thorough Documentary & Audit Review",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Dishonesty Defence</span>
            <h2>Practical Legal Support for Theft & Stealing Allegations</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Theft allegations in Melbourne encompass a broad spectrum of circumstances, from retail shop
              theft and property disputes to complex employee misappropriation and commercial stock losses.
              Regardless of the scale, any dishonesty allegation requires careful legal analysis to ensure your
              rights are protected from the outset.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The legal definition of theft requires the prosecution to prove beyond reasonable doubt that the
              appropriation was dishonest and accompanied by an intention to permanently deprive the owner.
              Examining the factual background, intent, and evidentiary records is vital to determining the
              proper legal strategy.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For broader criminal law representation, visit our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or learn about
              defending financial allegations on our{" "}
              <Link href="/criminal-lawyers-melbourne/fraud-lawyer-melbourne/">Fraud Lawyer Melbourne</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Matters We Handle"
            title="Theft Charges & Property Offences We Assist With"
            intro="We represent clients across Victoria facing various summary and indictable theft allegations:"
          />
          <div className="matters-grid">
            {theftMatters.map((item) => (
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
            Every matter is assessed individually against the specific prosecution brief, CCTV evidence, witness
            statements, and personal background of the accused person.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Build Your Defence Strategy</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Building an effective defence against a theft charge requires thorough scrutiny of the evidence
              and an understanding of Victorian criminal procedure:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {defenceApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If police investigators request an interview, consult our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              team before attending. When your matter is listed for hearing, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne/">
                Criminal Defence Lawyer Melbourne
              </Link>{" "}
              practitioners provide steadfast representation in court.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Protecting Your Future, Employment, and Criminal Record</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The long-term repercussions of a theft finding can far outweigh the immediate court penalty.
              Employers and professional bodies place high importance on honesty and probity. Our primary focus
              is on protecting your record wherever legally achievable, whether through contesting unsustainable
              charges, applying for diversion, or making persuasive submissions for a non-conviction outcome.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We take the time to listen to your side of the story, examine whether procedural fairness was
              respected during police investigations, and deliver transparent advice on the legal costs,
              timelines, and risks involved.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To arrange a confidential discussion regarding a theft allegation or court notice, visit our{" "}
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
            <Faq items={theftFaqs} />
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
                Confronting a theft charge, store notice, or police enquiry in Melbourne?
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
