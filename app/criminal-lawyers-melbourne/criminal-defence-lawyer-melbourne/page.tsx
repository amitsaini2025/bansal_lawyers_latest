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
  title: "Criminal Defence Lawyer Melbourne | Criminal Charges & Court Advice",
  description:
    "Bansal Lawyers assists with criminal defence advice, police matters, court representation, bail applications, traffic offences and criminal charges in Melbourne.",
  path: "/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne",
  keywords: [
    "Criminal Defence Lawyer Melbourne",
    "Criminal Defence Lawyers Melbourne",
    "Criminal Lawyer Melbourne",
    "Defence Lawyer Melbourne",
    "Criminal Law Firm Melbourne",
    "Criminal Legal Advice Melbourne",
  ],
});

const defenceServices = [
  "Comprehensive criminal defence counsel across Victorian summary and indictable offences",
  "Urgent pre-interview legal advice and protecting your right to silence at police stations",
  "Urgent bail applications in the Magistrates' Court, Bail and Remand Court, and Supreme Court",
  "Assault, reckless conduct, and violent offence defence under the Crimes Act 1958",
  "Theft, receiving stolen goods, and commercial property misappropriation matters",
  "Fraud, corporate dishonesty, false accounting, and deception allegations",
  "Drug possession, cultivation, and illicit substance trafficking defence",
  "Traffic offences, dangerous driving, and drink/drug driving licence disqualifications",
  "Family violence criminal charges and intervention order breach prosecutions",
  "Reviewing prosecution briefs, forensic reports, CCTV footage, and witness credibility",
  "Summary Case Conferences and charge negotiations with Victoria Police and OPP prosecutors",
  "Representation across mentions, committals, contested hearings, and plea submissions",
];

const methodologySteps = [
  "Conducting an immediate assessment of the charge sheet, summons, and police narrative",
  "Advising on your procedural rights, bail requirements, and right to silence before police questioning",
  "Undertaking rigorous forensic review of all prosecution evidence and witness statements",
  "Identifying legal and factual defences, including self-defence, mistake of fact, or lack of intent",
  "Exploring pre-trial resolution avenues, including the Criminal Diversion Program where eligible",
  "Engaging in proactive prosecution negotiations to discontinue charges or narrow summaries of facts",
  "Assembling comprehensive subjective mitigation materials: character references and clinical reports",
  "Delivering strategic, disciplined, and persuasive advocacy in Victorian criminal courts",
];

const defenceFaqs = [
  {
    question: "What should I do immediately after being charged by police in Melbourne?",
    answer:
      "Carefully preserve all paperwork provided by police (the charge sheet, summons, or bail undertaking), refrain from discussing the matter on social media or with potential witnesses, exercise your right to silence if further questions are asked, and contact a criminal defence lawyer immediately. Early legal intervention allows you to understand the charges and establish a cohesive defence strategy before court deadlines expire.",
  },
  {
    question: "What is the difference between summary and indictable offences in Victoria?",
    answer:
      "Summary offences are less serious offences heard and determined exclusively by a magistrate in the Magistrates' Court (such as minor traffic offences, common assault, or low-level property damage). Indictable offences are more serious crimes (such as serious assault, major fraud, or commercial drug trafficking) that are usually commenced in the Magistrates' Court but may proceed to the County Court or Supreme Court for trial before a judge and jury.",
  },
  {
    question: "Can criminal charges be dropped before the case goes to trial?",
    answer:
      "Yes. Through a process called Summary Case Conferencing or pre-trial negotiations, a defence lawyer can identify evidentiary weaknesses, missing proof, or legal defences in the prosecution's brief and make formal representations to the police prosecutor or Office of Public Prosecutions to have charges withdrawn or amended to less serious offences.",
  },
  {
    question: "What is the Criminal Diversion Program?",
    answer:
      "The Magistrates' Court Criminal Diversion Program allows eligible accused persons (typically first-time offenders facing low-level summary offences) to acknowledge responsibility without a criminal conviction being recorded. If the police prosecutor recommends diversion and the magistrate approves, the accused person completes agreed conditions (such as a donation, counselling, or letter of apology), and the charge is formally discharged.",
  },
  {
    question: "How does a criminal conviction affect employment and international travel?",
    answer:
      "A recorded criminal conviction appears on standard National Police Checks, which can bar entry into licensed professions, government roles, education, finance, and security. Convictions also carry significant immigration consequences, including potential visa cancellations for non-citizens under the Migration Act character test, and travel restrictions to countries like the United States and Canada.",
  },
  {
    question: "Why should I choose Bansal Lawyers for my criminal defence in Melbourne?",
    answer:
      "Bansal Lawyers provides serious, calm, and meticulous criminal defence counsel. Located in Melbourne CBD, we focus on detailed evidence analysis, realistic risk assessments, and disciplined court advocacy across all Victorian court jurisdictions, ensuring your rights and future are protected at every stage.",
  },
];

export default function CriminalDefenceLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Criminal Defence Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(defenceFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Criminal Defence Lawyer Melbourne"
        intro={
          <>
            <p>
              Facing criminal allegations can be one of the most challenging, urgent, and high-stakes
              experiences in an individual&apos;s life.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides serious, disciplined, and strategic criminal defence representation for
              individuals facing police investigations, criminal charges, and court proceedings across Victoria.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Criminal Defence Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Fast Consultation",
          "Magistrates', County & Supreme Court Advocacy",
          "Objective Evidence & Risk Assessment",
          "Disciplined, Strategic Representation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Defence Counsel</span>
            <h2>Dedicated Criminal Defence Legal Advice Across Victoria</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The criminal justice system in Victoria is adversarial, complex, and governed by strict evidentiary
              and procedural rules. When facing police questioning, charge sheets, or court summonses, the
              steps you take in the earliest stages often dictate the final outcome of your case.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, our approach prioritises meticulous evidentiary review, calm and objective
              analysis, and strategic negotiation with prosecution bodies. Whether your matter requires a
              forceful defence at a contested trial or structured advocacy during a plea hearing in mitigation,
              we ensure your rights are vigorously upheld.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our broader practice at our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or read about
              specialised representation for{" "}
              <Link href="/criminal-lawyers-melbourne/assault-lawyer-melbourne/">
                Assault Lawyer Melbourne
              </Link>{" "}
              matters.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Areas of Practice"
            title="Criminal Charges & Proceedings We Assist With"
            intro="We provide criminal defence advice and court representation across all major areas of Victorian criminal law:"
          />
          <div className="matters-grid">
            {defenceServices.map((item) => (
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
            For urgent custody matters where an individual has been remanded by police, our{" "}
            <Link href="/criminal-lawyers-melbourne/bail-application-lawyer-melbourne/">
              Bail Application Lawyer Melbourne
            </Link>{" "}
            team prepares rapid court applications.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Build Your Criminal Defence</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Mounting an effective criminal defence requires structured preparation and strategic decision-making:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {methodologySteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If police seek an interview, consult our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              team before answering questions. When your matter proceeds to court, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              advocates ensure your position is put forward with confidence.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Understanding the Stakes and Court Expectations</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A criminal charge can threaten your personal freedom, financial stability, professional accreditation,
              and future employment. Every decision—from whether to give an interview statement to selecting
              the appropriate plea—carries lasting ramifications.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We provide realistic, objective legal advice at every stage. We do not make false promises or
              unwarranted guarantees; instead, we examine the evidence thoroughly, identify legal defences, and
              execute a clear, practical strategy tailored to your circumstances.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To schedule a confidential consultation with our criminal defence team, visit our{" "}
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
            <Faq items={defenceFaqs} />
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
                Need experienced, strategic criminal defence representation in Melbourne?
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
