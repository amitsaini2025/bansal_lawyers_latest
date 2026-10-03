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
  title: "Court Representation Lawyer Melbourne | Criminal Court Advice",
  description:
    "Bansal Lawyers assists with criminal court representation, court appearances, preparation, criminal charges and defence advice in Melbourne.",
  path: "/criminal-lawyers-melbourne/court-representation-lawyer-melbourne",
  keywords: [
    "Court Representation Lawyer Melbourne",
    "Court Representation Lawyers Melbourne",
    "Criminal Court Lawyer Melbourne",
    "Criminal Lawyer Melbourne",
    "Court Appearance Lawyer Melbourne",
    "Criminal Defence Lawyer Melbourne",
  ],
});

const courtMatters = [
  "Appearing across all Victorian Magistrates' Courts (Melbourne CBD, Moorabbin, Dandenong, Ringwood, Broadmeadows, Sunshine)",
  "Representation in the County Court of Victoria for trials, committals, and sentence appeals",
  "Supreme Court of Victoria bail applications and complex appellate hearings",
  "First mention hearings, filing Notices of Appearance, and managing court list procedures",
  "Summary Case Conferences with Victoria Police prosecutors to negotiate charge withdrawals",
  "Contest Mentions to identify factual disputes, evidentiary issues, and hearing estimates",
  "Full Contested Hearings involving witness cross-examination and legal admissibility arguments",
  "Committal mentions and committal hearings for indictable criminal offences",
  "Plea hearings in mitigation seeking non-custodial or non-conviction sentencing dispositions",
  "Bail applications, condition variations, and responding to police bail revocation applications",
  "Traffic and driving offence hearings under the Road Safety Act 1986",
  "Representing clients facing assault, theft, fraud, drug, and family violence criminal charges",
];

const preparationSteps = [
  "Obtaining and thoroughly examining the full prosecution brief of evidence",
  "Analyzing statutory offence elements against available witness and forensic proof",
  "Formulating a clear court strategy: entering a plea of not guilty vs negotiating a summary plea",
  "Filing official court documents, Notices of Appearance, and requests for prosecution disclosure",
  "Conducting proactive case conferences with prosecutors to eliminate unprovable charges",
  "Gathering compelling mitigating evidence: character references, employer letters, and clinical reports",
  "Preparing the client for the court appearance, including court etiquette, expectations, and procedure",
  "Delivering disciplined, persuasive oral advocacy before the presiding magistrate or trial judge",
];

const courtFaqs = [
  {
    question: "What happens at my first court appearance (mention hearing)?",
    answer:
      "A first mention hearing is the administrative starting point in the Magistrates' Court. It is not a trial. Your lawyer will appear on your behalf, confirm receipt of the preliminary brief, and inform the magistrate whether the matter will proceed to a Summary Case Conference, Contest Mention, Diversion hearing, or a Plea of Guilty. In many instances, your lawyer can seek an adjournment to allow sufficient time to review the evidence.",
  },
  {
    question: "Do I have to appear in person for every court date?",
    answer:
      "Under Victorian court practice, your lawyer can often appear on your behalf or arrange an online appearance via Webex for administrative mentions, provided you are on bail or summons. However, for contested hearings, committals, and final plea hearings, your physical attendance in court is generally mandatory unless the court grants a specific exemption.",
  },
  {
    question: "What is a Summary Case Conference and Contest Mention?",
    answer:
      "A Summary Case Conference is a structured discussion between your defence lawyer and the police prosecutor to explore whether charges can be withdrawn, amended, or resolved on an agreed summary of facts. If the matter cannot be resolved, it proceeds to a Contest Mention, where the magistrate evaluates the issues in dispute and estimates the required hearing time.",
  },
  {
    question: "How should I prepare for attending a criminal court hearing in Melbourne?",
    answer:
      "Dress conservatively in neat business attire, arrive at court at least 30 to 45 minutes prior to the scheduled list time (usually 9:30 am in the Magistrates' Court), and meet your lawyer before entering the courtroom. Switch off your mobile phone, remain quiet while proceedings are underway, and address the magistrate as 'Your Honour'.",
  },
  {
    question: "Can an experienced lawyer help negotiate charges before a trial?",
    answer:
      "Yes. A significant proportion of criminal charges are resolved before trial through skilled negotiation. By pointing out evidentiary gaps, legal defences, or inconsistencies in witness statements during case conferencing, your lawyer can persuade prosecutors to discontinue weak charges or accept a plea to a less serious summary offence.",
  },
  {
    question: "What is a plea in mitigation?",
    answer:
      "A plea in mitigation occurs when an accused person enters a plea of guilty, and their lawyer makes structured legal and personal submissions to the court to minimise the sentence. The lawyer presents character references, medical reports, evidence of remorse, and explains the background circumstances to persuade the magistrate or judge to impose the lowest appropriate penalty, such as a fine, diversion, or Community Correction Order without recording a conviction.",
  },
];

export default function CourtRepresentationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Court Representation Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(courtFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Court Representation Lawyer Melbourne"
        intro={
          <>
            <p>
              Appearing in a criminal court can be daunting, confusing, and fraught with risk if you are
              unprepared or unrepresented.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides serious, disciplined, and persuasive court advocacy across all
              Victorian Magistrates&apos; Courts, the County Court, and the Supreme Court.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Court Representation Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Court Network Coverage",
          "Magistrates' & County Court Representation",
          "Summary Case Conference Negotiations",
          "Thorough Plea & Contest Preparation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Court Advocacy</span>
            <h2>Experienced Criminal Court Representation Across Victoria</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Navigating Victorian criminal proceedings requires strict adherence to court procedure, evidentiary
              rules, and the Criminal Procedure Act 2009. From the moment you receive a charge sheet and summons,
              the court imposes procedural milestones that determine how and when evidence is tested.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Entering a courtroom without legal representation places an accused person at a profound
              disadvantage against experienced Victoria Police or Office of Public Prosecutions (OPP) advocates.
              Our practitioners ensure your case is meticulously prepared, your procedural rights are asserted,
              and your voice is heard clearly before the bench.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our overarching criminal practice at our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or read about
              our broader defence advocacy on our{" "}
              <Link href="/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne/">
                Criminal Defence Lawyer Melbourne
              </Link>{" "}
              page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Courts & Lists"
            title="Court Appearances & Proceedings We Assist With"
            intro="We represent clients at every procedural stage across Victoria's criminal justice system:"
          />
          <div className="matters-grid">
            {courtMatters.map((item) => (
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
            For urgent custody matters where an accused person has been remanded, see our specialized{" "}
            <Link href="/criminal-lawyers-melbourne/bail-application-lawyer-melbourne/">
              Bail Application Lawyer Melbourne
            </Link>{" "}
            advocacy service.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Prepare for Your Court Appearance</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Effective court advocacy is the culmination of thorough pre-trial preparation:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {preparationSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If police have initiated contact prior to issuing court paperwork, our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              team ensures your rights are protected from the earliest investigative stage.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Understanding Sentencing Principles and Court Outcomes</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Sentencing under the Victorian Sentencing Act 1991 involves complex balancing of competing
              principles: just punishment, deterrence, denunciation, community protection, and rehabilitation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Whether your case requires aggressive contest of weak evidence or careful structuring of a plea
              in mitigation, having experienced counsel who understands local magistrates and prosecutor
              practices is invaluable. We work to achieve outcomes that preserve your employment, liberty, and
              long-term reputation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To arrange court representation for an upcoming hearing in Melbourne, get in touch through our{" "}
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
            <Faq items={courtFaqs} />
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
                Summoned to attend the Magistrates&apos; Court or County Court in Victoria?
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
