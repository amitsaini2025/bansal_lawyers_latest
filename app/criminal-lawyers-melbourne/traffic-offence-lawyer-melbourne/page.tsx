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
  title: "Traffic Offence Lawyer Melbourne | Driving & Licence Matters",
  description:
    "Bansal Lawyers assists with traffic offences, licence issues, driving charges, court representation and traffic law advice in Melbourne.",
  path: "/criminal-lawyers-melbourne/traffic-offence-lawyer-melbourne",
  keywords: [
    "Traffic Offence Lawyer Melbourne",
    "Traffic Offence Lawyers Melbourne",
    "Traffic Lawyer Melbourne",
    "Driving Offence Lawyer Melbourne",
    "Criminal Lawyer Melbourne",
    "Licence Suspension Lawyer Melbourne",
  ],
});

const trafficMatters = [
  "Careless driving and dangerous driving charges under the Road Safety Act 1986 (Vic)",
  "Driving while licence suspended, disqualified, or cancelled",
  "Driving unlicenced or failing to hold an appropriate vehicle class licence",
  "Excessive speeding offences carrying mandatory minimum licence suspension periods",
  "Demerit point threshold breaches and 12-month option (golden point) advice",
  "Failing to stop or render assistance after an accident allegations",
  "Reckless conduct endangering serious injury or life involving motor vehicles",
  "Heavy vehicle driver compliance, logbook infringements, and fatigue offences",
  "Challenging road safety camera infringements and speed detection device certificates",
  "Applications to review Victoria Police or Fines Victoria infringement notices",
  "Magistrates' Court appearances for contested traffic hearings and special hardship submissions",
  "Plea hearings in mitigation seeking to avoid conviction or minimise disqualification terms",
];

const defenceApproach = [
  "Reviewing the charge sheet, police narrative, and statutory offence provisions under the Road Safety Act",
  "Checking calibration and compliance certificates for speed measuring or laser devices",
  "Examining camera imagery, dashcam footage, and roadway signage visibility",
  "Evaluating legal defences, including honest and reasonable mistake of fact or sudden emergency",
  "Advising on demerit point implications and mandatory licence loss thresholds",
  "Preparing structured plea submissions detailing employment necessity and family hardship",
  "Negotiating with police prosecutors to withdraw contested charges or substitute minor summary offences",
  "Providing robust advocacy before the Magistrates' Court of Victoria",
];

const trafficFaqs = [
  {
    question: "What is the difference between careless driving and dangerous driving?",
    answer:
      "Careless driving (Section 65 of the Road Safety Act 1986) involves driving without due care and attention, falling below the standard of a reasonable and prudent driver. Dangerous driving (Section 64) is a significantly more serious offence requiring the prosecution to prove that the driving was at a speed or in a manner that was dangerous to the public having regard to all circumstances. Dangerous driving carries mandatory minimum licence cancellation periods and potential imprisonment.",
  },
  {
    question: "What happens if I am caught driving while suspended or disqualified in Victoria?",
    answer:
      "Driving while disqualified or suspended is viewed very seriously by Victorian courts under Section 30 of the Road Safety Act 1986. For repeat offences, the court may impose heavy fines, extended licence disqualification periods, vehicle immobilisation or impoundment, and even term of imprisonment. Early legal advice is crucial to mitigate penalties.",
  },
  {
    question: "Can the court grant a 'work licence' or probationary permit in Victoria?",
    answer:
      "No. Unlike some other Australian states, Victoria does not have hardship licences, work licences, or conditional permits. If a mandatory licence cancellation or suspension period applies under Victorian legislation, neither the magistrate nor VicRoads has the legal discretion to grant an exemption for employment or medical reasons. This makes it vital to explore whether charges can be defended or negotiated before penalties are imposed.",
  },
  {
    question: "What are the rules regarding excessive speeding in Victoria?",
    answer:
      "In Victoria, exceeding the speed limit by 25 km/h or more (or driving at 130 km/h or more regardless of the limit) triggers mandatory licence suspension under the Road Safety Act. The suspension periods range from 3 months to 12 months or longer depending on how far above the limit the vehicle was travelling. In addition, immediate notices of suspension can be issued roadside by Victoria Police.",
  },
  {
    question: "How do demerit points work if I receive a notice of suspension from VicRoads?",
    answer:
      "If you accumulate 12 or more demerit points within a 3-year period (or 5 points for probationary drivers), VicRoads will issue a Notice of Demerit Point Suspension. You generally have the option to accept the suspension or elect the '12-month good behaviour bond' (golden point). If you incur any demerit points during the 12-month period, your licence will be suspended for double the original term.",
  },
  {
    question: "Can a traffic offence result in a criminal record?",
    answer:
      "Yes. While routine traffic infringements paid via penalty notice do not result in a criminal record, traffic charges that proceed to the Magistrates' Court—such as dangerous driving, driving disqualified, or reckless driving—can result in a formal criminal conviction being recorded unless the magistrate exercises discretion to impose a non-conviction disposition.",
  },
];

export default function TrafficOffenceLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Traffic Offence Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(trafficFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Traffic Offence Lawyer Melbourne"
        intro={
          <>
            <p>
              A driving charge or threat of licence disqualification can immediately impact your career,
              family commitments, and everyday independence.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides clear, strategic legal advice and court representation for individuals
              facing traffic charges, licence suspensions, and court summonses across Melbourne.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Traffic Offence Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Fast Consultation",
          "Magistrates' Court Traffic Advocacy",
          "Licence Protection & Penalty Mitigation",
          "Objective Road Safety Act Analysis",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Traffic Law Defence</span>
            <h2>Protecting Your Driver Licence and Reputation in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Traffic law in Victoria is governed by the Road Safety Act 1986 and associated road safety
              regulations. Victorian traffic legislation contains some of the strictest penalties in Australia,
              including mandatory minimum licence cancellation periods, substantial fines, vehicle impoundment,
              and potential custodial sentences for serious driving conduct.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Because Victoria does not offer hardship or work licences, losing your licence means an absolute
              prohibition on driving. Whether you are confronting charges of careless driving, driving while
              suspended, or excessive speeding, early legal advice is essential to determine whether the charge
              can be contested or if mitigating factors can reduce penalties.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our core criminal practice on our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or read about
              alcohol-related driving charges on our{" "}
              <Link href="/criminal-lawyers-melbourne/drink-driving-lawyer-melbourne/">
                Drink Driving Lawyer Melbourne
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
            title="Traffic Offences & Driving Charges We Assist With"
            intro="We represent motorists, commercial drivers, and motorcycle riders facing road safety charges across Victoria:"
          />
          <div className="matters-grid">
            {trafficMatters.map((item) => (
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
            Every matter depends on the specific speed recordings, roadway conditions, witness accounts,
            prior driving record, and court procedures involved.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Approach Your Traffic Defence</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Navigating Victorian traffic courts requires precise statutory knowledge and effective advocacy:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {defenceApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              When your matter is listed for hearing, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne/">
                Criminal Defence Lawyer Melbourne
              </Link>{" "}
              practitioners advocate persuasively on your behalf before the magistrate.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Minimising the Impact on Your Work and Family Life</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              For many professionals, tradespeople, courier drivers, and parents, driving is not a luxury—it
              is an absolute requirement for livelihood and family care. Understanding the exact statutory
              mechanisms available is vital.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist in preparing well-documented character references, evidence of professional driving
              courses, and proof of exceptional family or employment hardship. Where appropriate, we negotiate
              with police prosecutors to amend charge wording or support applications for the Criminal Diversion
              Program.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To discuss a traffic charge, court notice, or licence suspension, get in touch through our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={trafficFaqs} />
      </Section>
    </>
  );
}
