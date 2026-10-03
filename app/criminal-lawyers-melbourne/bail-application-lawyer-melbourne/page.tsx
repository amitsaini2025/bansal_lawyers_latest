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
  title: "Bail Application Lawyer Melbourne | Bail & Court Representation",
  description:
    "Bansal Lawyers assists with bail applications, court preparation, criminal charges, supporting documents and urgent criminal law advice in Melbourne.",
  path: "/criminal-lawyers-melbourne/bail-application-lawyer-melbourne",
  keywords: [
    "Bail Application Lawyer Melbourne",
    "Bail Application Lawyers Melbourne",
    "Bail Lawyer Melbourne",
    "Criminal Lawyer Melbourne",
    "Urgent Criminal Lawyer Melbourne",
    "Court Representation Lawyer Melbourne",
  ],
});

const bailMatters = [
  "Urgent bail applications in the Magistrates' Court of Victoria and the Bail and Remand Court (BARC)",
  "Appearing before Weekend Online Remand Court (WORC) and after-hours bail hearings",
  "Supreme Court of Victoria bail applications and appeals against bail refusals",
  "Overcoming the 'unacceptable risk' test raised by Victoria Police prosecutors",
  "Navigating reverse-onus statutory thresholds ('show compelling reason' and 'exceptional circumstances')",
  "Applications to vary or remove existing bail conditions (curfews, reporting, travel restrictions)",
  "Structuring viable bail proposals with stable residential accommodation and surety guarantees",
  "Organising drug, alcohol, or mental health treatment intake assessments for bail support",
  "Bail applications involving serious offences (armed robbery, serious assault, commercial drug charges)",
  "Bail applications in sensitive family violence matters subject to strict statutory requirements",
  "Responding to police allegations of bail breaches or fail to answer bail charges",
  "Securing the release of young adults, vulnerable persons, or first-time accused individuals",
];

const bailPreparationSteps = [
  "Reviewing the police remand summary, charge sheet, and grounds for police bail refusal",
  "Determining the applicable legal test under the Bail Act 1977 (unacceptable risk, compelling reason, exceptional circumstances)",
  "Verifying a stable, acceptable residential address and obtaining written confirmation from the homeowner or head tenant",
  "Identifying and interviewing suitable sureties who can provide financial guarantees and supervision",
  "Gathering evidence of ongoing employment, educational commitments, or critical family care responsibilities",
  "Arranging urgent intake letters from medical practitioners, psychologists, or rehabilitation services",
  "Structuring pragmatic proposed bail conditions (curfews, police reporting, non-association terms)",
  "Delivering rigorous, persuasive legal advocacy before the presiding magistrate or judge",
];

const bailFaqs = [
  {
    question: "What is the legal test for bail in Victoria?",
    answer:
      "Under the Bail Act 1977 (Vic), the court must decide whether the accused person presents an 'unacceptable risk' of endangering the safety of any person, committing further offences, interfering with witnesses, or failing to attend court. For certain serious offences or repeat allegations, the law places the burden on the accused person to establish 'compelling reasons' or 'exceptional circumstances' why detention is not justified.",
  },
  {
    question: "What is a surety and is one always required?",
    answer:
      "A surety is a responsible person (often a family member, employer, or friend) who undertakes to pay a specified sum of money if the accused person fails to attend court or breaches bail. While a surety is not legally required for every bail application, offering a substantial and credible surety significantly strengthens an application where police allege a flight risk or risk of reoffending.",
  },
  {
    question: "What happens if police refuse bail at the police station?",
    answer:
      "If Victoria Police refuse bail, they must bring the accused person before the Magistrates' Court or an authorised bail justice as soon as practicable. If the arrest occurs outside normal court hours or on a weekend, the matter is heard either before a bail justice or via the centralized Weekend Online Remand Court (WORC).",
  },
  {
    question: "Can I apply for bail again if my initial court application is refused?",
    answer:
      "If a magistrate refuses bail, you cannot simply re-apply to the Magistrates' Court unless you can demonstrate a 'new fact or circumstance' that has arisen since the previous refusal. Alternatively, you may file a formal bail application in the Supreme Court of Victoria, which hears the matter afresh. Careful preparation of the first application is therefore paramount.",
  },
  {
    question: "What are common conditions attached to a grant of bail?",
    answer:
      "Common bail conditions include residing at a specified address, adhering to a nightly curfew, reporting regularly to a local police station, surrendering your passport, abstaining from alcohol or illicit drugs, and having no direct or indirect contact with prosecution witnesses or complainants.",
  },
  {
    question: "How quickly can Bansal Lawyers assist with an urgent bail application?",
    answer:
      "Because liberty is at stake, our criminal defence team acts urgently. We can obtain the police remand brief, contact family members, verify accommodation and surety details, and appear in the Magistrates' Court at short notice to ensure the application is presented in the most persuasive and structured manner.",
  },
];

export default function BailApplicationLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Bail Application Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(bailFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Bail Application Lawyer Melbourne"
        intro={
          <>
            <p>
              When a family member or loved one is remanded in custody, securing prompt release on bail is the
              single most critical priority.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers delivers rapid, structured, and persuasive bail representation in the Magistrates&apos;
              Court of Victoria, the Bail and Remand Court (BARC), and the Supreme Court.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Bail Application Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Urgent Response",
          "Magistrates' & Supreme Court Bail Advocacy",
          "Surety, Accommodation & Treatment Coordination",
          "Decisive Strategic Presentation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Urgent Liberty</span>
            <h2>Immediate, Disciplined Legal Representation for Bail Hearings</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Under Victorian criminal law, every person accused of a crime has a foundational right to liberty
              pending trial, subject to the Bail Act 1977. However, legislative amendments in recent years have
              made obtaining bail significantly more difficult, with numerous offences subject to reverse-onus
              tests where the accused must justify why they should not remain in prison until their court date.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A rushed, unprepared bail application that is refused severely complicates future attempts,
              because an accused cannot simply ask the same court again without proving a new fact or circumstance.
              Having experienced legal counsel compile supporting documentation, establish a robust bail
              proposal, and address the prosecutor&apos;s objections is vital to securing release.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Explore our broader criminal law counsel on our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or learn about
              our trial and hearing advocacy on our{" "}
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
            eyebrow="Matters We Handle"
            title="Bail Hearings & Custody Matters We Assist With"
            intro="We provide urgent bail advocacy across Victoria's court network for all classes of criminal charges:"
          />
          <div className="matters-grid">
            {bailMatters.map((item) => (
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
            In domestic matters subject to stringent bail hurdles, our{" "}
            <Link href="/criminal-lawyers-melbourne/family-violence-criminal-lawyer-melbourne/">
              Family Violence Criminal Lawyer Melbourne
            </Link>{" "}
            practice crafts protective bail solutions addressing both court safety concerns and personal stability.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Build a Compelling Bail Proposal</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Judges and magistrates decide bail based on concrete evidence, not general assurances. We methodically
              construct every bail application to eliminate unacceptable risk:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {bailPreparationSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Prior to any court appearance, our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              advisers assist suspects in avoiding critical evidentiary mistakes. When appearing in court, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              team advocates with clarity and determination.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Understanding the Risks and Court Expectations</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Being remanded in custody carries disastrous personal consequences. Within weeks, an individual
              can lose employment, fall behind on rent, forfeit custody or contact with children, and experience
              severe mental and physical strain. Preparing for trial from inside a custodial facility is
              exponentially more challenging.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our team works directly with families, sureties, medical providers, and community support agencies
              to assemble an airtight bail proposal. We address the prosecutor&apos;s risk allegations directly,
              offering strict, enforceable conditions that reassure the court that the accused will comply with
              all legal obligations.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For urgent bail representation or advice regarding an accused person in police custody, visit our{" "}
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
            <Faq items={bailFaqs} />
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
                Need urgent legal assistance for an upcoming bail hearing or remand appearance in Melbourne?
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
