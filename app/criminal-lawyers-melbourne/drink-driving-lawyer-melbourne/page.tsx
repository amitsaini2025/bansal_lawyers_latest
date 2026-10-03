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
  title: "Drink Driving Lawyer Melbourne | DUI & Traffic Law Advice",
  description:
    "Bansal Lawyers assists with drink driving matters, DUI charges, licence concerns, court notices, traffic offences and court representation in Melbourne.",
  path: "/criminal-lawyers-melbourne/drink-driving-lawyer-melbourne",
  keywords: [
    "Drink Driving Lawyer Melbourne",
    "Drink Driving Lawyers Melbourne",
    "DUI Lawyer Melbourne",
    "Drink Driving Charge Lawyer Melbourne",
    "Traffic Lawyer Melbourne",
    "Criminal Lawyer Melbourne",
  ],
});

const drinkDrivingMatters = [
  "Exceeding the prescribed concentration of alcohol (PCA) under Section 49(1)(b) and (f) of the Road Safety Act 1986",
  "Driving under the influence (DUI) of intoxicating liquor or drugs under Section 49(1)(a)",
  "Refusing or failing to provide a breath or blood sample under Section 49(1)(c) and (e)",
  "Novice, probationary, and heavy vehicle drivers subject to zero-blood alcohol concentration (0.00 BAC) rules",
  "Immediate notices of licence suspension issued roadside by Victoria Police",
  "Mandatory minimum licence cancellation and disqualification periods",
  "Mandatory alcohol interlock condition requirements and behaviour change programs",
  "Technical defences challenging the 3-hour breath analysis rule and breath machine calibration records",
  "Blood test analysis discrepancies and hospital-administered sample challenges",
  "First-time offender guidance vs repeat offender escalating penalties",
  "Magistrates' Court plea hearings in mitigation to minimise disqualification terms and penalties",
  "Licence restoration applications and interlock removal hearings",
];

const defenceApproach = [
  "Checking the exact timing of vehicle operation against the statutory 3-hour breath test window",
  "Scrutinising operator certification and calibration records for the Dräger evidentiary breath instrument",
  "Evaluating compliance with statutory warnings given prior to breath or blood sample refusal",
  "Advising on mandatory minimum disqualification periods set by Victorian Parliament",
  "Preparing comprehensive plea materials detailing personal hardship, employment impact, and good character",
  "Enrolling clients in approved VicRoads Behaviour Change Programs ahead of court hearings",
  "Negotiating with police prosecutors regarding charge accuracy and factual summaries",
  "Providing persuasive oral representation before the Magistrates' Court of Victoria",
];

const drinkDrivingFaqs = [
  {
    question: "What are the legal BAC limits in Victoria?",
    answer:
      "For fully licenced Victorian drivers, the legal blood alcohol concentration (BAC) limit is under 0.05. However, a strict zero BAC (0.00) requirement applies to learner drivers, probationary drivers (P1 and P2), heavy vehicle drivers, bus and commercial passenger vehicle drivers, and those with an interlock condition on their licence.",
  },
  {
    question: "Can the court waive the licence suspension for drink driving in Victoria?",
    answer:
      "No. Under Victorian legislation (Section 50 of the Road Safety Act 1986), minimum licence cancellation periods are strictly mandatory. If you are found guilty or plead guilty to exceeding the prescribed concentration of alcohol, the magistrate has no legal discretion to reduce the disqualification period below the statutory minimum, even if you will lose your job.",
  },
  {
    question: "What is an alcohol interlock condition?",
    answer:
      "An alcohol interlock is an electronic breath-testing device wired to a vehicle's ignition system that prevents the vehicle from starting if alcohol is detected. In Victoria, almost all drink driving convictions require an interlock condition to be placed on the driver licence for a minimum period (often 6 months to several years) upon licence restoration.",
  },
  {
    question: "What is the penalty for refusing a breath test in Victoria?",
    answer:
      "Refusing or failing to provide a breath or blood sample without a valid medical reason is treated as severely as a high-range drink driving offence. Under Section 49(1)(e) of the Road Safety Act 1986, refusal carries a mandatory minimum licence cancellation of at least 2 years for a first offence (and 4 years for a repeat offence), substantial fines, and potential imprisonment for repeat offenders.",
  },
  {
    question: "Can a drink driving charge be contested on technical grounds?",
    answer:
      "Yes, in certain circumstances. Technical defences may arise if police failed to conduct the evidentiary breath test within 3 hours of the alleged driving, if police did not provide the required statutory cautions, if the breath analysis machine had not been properly calibrated, or if post-accident alcohol consumption occurred before the test.",
  },
  {
    question: "Will a drink driving conviction appear on my criminal record?",
    answer:
      "Yes. If your drink driving charge proceeds to court and a magistrate records a conviction, it will appear on your Victorian and National Police Certificate as a criminal traffic conviction. However, an experienced lawyer can make submissions urging the court to find the charge proven without recording a conviction where the law permits.",
  },
];

export default function DrinkDrivingLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Drink Driving Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(drinkDrivingFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Drink Driving Lawyer Melbourne"
        intro={
          <>
            <p>
              Facing a drink driving charge or roadside licence suspension can immediately disrupt your
              employment, independence, and daily routine.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides serious, informed legal advice and court representation for DUI charges,
              high-range BAC offences, interlock requirements, and licence restoration in Melbourne.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Drink Driving Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Rapid Advice",
          "Technical Roadside Test & Breath Analysis Review",
          "Magistrates' Court Plea & Mitigation Counsel",
          "Interlock & Behaviour Change Guidance",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">DUI & Road Safety</span>
            <h2>Experienced Legal Guidance for Drink Driving Matters in Victoria</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Drink driving laws in Victoria are governed by the Road Safety Act 1986 and are among the most
              strictly enforced in Australia. Offences involving driving under the influence (DUI) or exceeding
              the prescribed concentration of alcohol carry mandatory licence cancellations, interlock device
              conditions, and significant financial penalties.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Because Victorian magistrates cannot grant work licences or special hardship exemptions,
              understanding your exact legal rights and examining the technical validity of the police breath
              test is critical. Where charges cannot be contested, thorough preparation for your court hearing
              is vital to ensure that minimum mandatory terms are not extended and mitigating circumstances are
              clearly presented.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For general road safety offences, explore our{" "}
              <Link href="/criminal-lawyers-melbourne/traffic-offence-lawyer-melbourne/">
                Traffic Offence Lawyer Melbourne
              </Link>{" "}
              page, or return to our core{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> practice overview.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Matters We Handle"
            title="Drink Driving & Alcohol-Related Charges We Assist With"
            intro="We represent motorists and professional drivers facing drink driving allegations across Melbourne:"
          />
          <div className="matters-grid">
            {drinkDrivingMatters.map((item) => (
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
            Outcomes in drink driving matters depend on the recorded alcohol reading, whether an accident
            occurred, prior traffic record, and the specific procedures followed by police during testing.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Defend Drink Driving Matters</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Successfully defending or mitigating a drink driving charge requires systematic preparation:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {defenceApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              When attending court, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne/">
                Criminal Defence Lawyer Melbourne
              </Link>{" "}
              practitioners ensure your plea is structured, persuasive, and legally sound.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Protecting Your Future Mobility and Employment</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              For many clients, a loss of licence puts their employment directly at risk. While Victorian
              statutes prevent the court from waiving mandatory minimum cancellations, skilled legal
              representation can make an enormous difference in avoiding convictions, reducing fine amounts, and
              ensuring additional discretionary suspension months are not imposed.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist you through every phase—from responding to immediate roadside suspension notices and
              completing required Behaviour Change Programs to applying for licence restoration once the
              disqualification period concludes.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To arrange a confidential consultation regarding a drink driving charge or court notice, visit our{" "}
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
            <Faq items={drinkDrivingFaqs} />
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
                Received a drink driving charge sheet or notice of immediate suspension in Melbourne?
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
