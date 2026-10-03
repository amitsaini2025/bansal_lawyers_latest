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
  title: "Assault Lawyer Melbourne | Assault Charges & Criminal Defence",
  description:
    "Bansal Lawyers assists with assault charges, violence-related offences, police matters, court representation and criminal defence advice in Melbourne.",
  path: "/criminal-lawyers-melbourne/assault-lawyer-melbourne",
  keywords: [
    "Assault Lawyer Melbourne",
    "Assault Lawyers Melbourne",
    "Criminal Lawyer Melbourne",
    "Criminal Defence Lawyer Melbourne",
    "Assault Charge Lawyer Melbourne",
    "Violence Offence Lawyer Melbourne",
  ],
});

const assaultMatters = [
  "Common assault and unlawful assault charges under the Summary Offences Act 1966",
  "Assault by kicking or assault with an instrument allegations",
  "Recklessly causing injury and intentionally causing injury under the Crimes Act 1958",
  "Serious assault charges, including assault emergency worker or police officer",
  "Affray, violent disorder, and unlawful assembly allegations",
  "Self-defence, defence of another person, or mutual combat considerations",
  "Police interviews, preliminary briefs, and full hand-up briefs of evidence",
  "Responding to formal charge sheets, summonses, and bail conditions",
  "Assault charges intersecting with personal safety or family violence intervention orders",
  "Negotiating charge modifications or case discontinuance with Victoria Police prosecutors",
  "Magistrates' Court committal mentions, contest mentions, and summary hearings",
  "Plea hearings in mitigation seeking non-custodial or non-conviction outcomes where appropriate",
];

const defenceSteps = [
  "Examining the police charge sheet, narrative statement, and summary of alleged facts",
  "Advising on your right to silence and legal rights prior to any police record of interview",
  "Reviewing prosecution evidence including witness statements, CCTV footage, and triple-zero recordings",
  "Scrutinising medical reports, photographic injury records, and forensic documentation",
  "Assessing statutory defences, including lawful self-defence, accident, or lack of intent",
  "Identifying whether parallel family violence or intervention order proceedings exist",
  "Conducting case conferences with prosecution to resolve factual disputes or withdraw unsustainable charges",
  "Preparing comprehensive submissions for contested hearings or plea hearings in mitigation",
];

const assaultFaqs = [
  {
    question: "What is the difference between unlawful assault and causing injury in Victoria?",
    answer:
      "Under Victorian law, unlawful assault (often heard under the Summary Offences Act) involves the application or threat of force without lawful justification, even if no physical injury occurs. More serious offences, such as recklessly causing injury or intentionally causing injury under the Crimes Act 1958 (Vic), carry significantly higher maximum penalties and require the prosecution to prove that actual bodily or psychological harm was sustained.",
  },
  {
    question: "Should I attend a police interview for an assault allegation without legal advice?",
    answer:
      "No. Anything you say in a formal police record of interview can be used as prosecution evidence in court. You have a fundamental common law and statutory right to silence, aside from providing your name, address, and identification details. Consulting an assault lawyer prior to attending the police station helps ensure your rights are protected and prevents unintended self-incrimination.",
  },
  {
    question: "Can an assault charge impact my employment and ability to travel?",
    answer:
      "Yes. An assault conviction recorded on a National Police Certificate can have serious consequences for employment, particularly in regulated professions, security, healthcare, and education. It can also restrict overseas travel visas and affect Working with Children Checks or professional licences. The exact outcome depends on whether a conviction is formally recorded by the court.",
  },
  {
    question: "What happens if an assault charge is connected to an intervention order?",
    answer:
      "If the alleged incident involves a family member, partner, or person protected by an Intervention Order (IVO), Victoria Police may initiate both criminal assault charges and criminal breach of intervention order proceedings. These matters often run concurrently in the Magistrates' Court and require coordinated defence strategies across both criminal and family law frameworks.",
  },
  {
    question: "Can an assault charge be withdrawn or resolved without a trial?",
    answer:
      "In certain circumstances, prosecution negotiations (case conferencing) may lead to charges being withdrawn, substituted with less serious summary offences, or recommended for the Criminal Diversion Program if eligibility criteria are met. Whether this is viable depends on the strength of the evidence, witness credibility, prior criminal history, and the specific facts of the allegation.",
  },
  {
    question: "Which court hears assault cases in Melbourne?",
    answer:
      "Most assault offences, including unlawful assault and reckless injury matters, are determined summarily in the Magistrates' Court of Victoria (such as Melbourne, Moorabbin, Broadmeadows, Ringwood, or Dandenong). More serious indictable charges, such as intentionally causing serious injury, may be committed to the County Court of Victoria.",
  },
];

export default function AssaultLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Assault Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(assaultFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Assault Lawyer Melbourne"
        intro={
          <>
            <p>
              Facing an assault or violence-related charge can be stressful, urgent, and disruptive to your
              reputation, family, and livelihood.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides serious, strategic criminal defence representation for individuals
              confronting assault charges, police questioning, and court proceedings across Victoria.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With an Assault Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Urgent Consultations",
          "Magistrates' & County Court Representation",
          "Thorough Evidence & Witness Review",
          "Clear, Practical Defence Guidance",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Criminal Defence</span>
            <h2>Strategic Legal Support for Assault Charges in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Assault charges in Victoria range from summary unlawful assault matters arising from verbal
              altercations or minor physical contact to serious indictable offences involving grievous bodily
              harm. When police initiate charges, the immediate priority is to examine the allegations, evaluate
              the evidence objectively, and establish an informed defence strategy.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The outcome of an assault matter can carry lasting consequences. A recorded conviction can impact
              your current employment, professional accreditation, international travel visas, and family
              relationships. Every matter depends on its unique facts, documentary records, witness credibility,
              statutory defences, and court procedures.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Explore our wider criminal law practice on our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or learn more
              about overall defence strategies on our{" "}
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
            eyebrow="Offences We Handle"
            title="Assault & Violence-Related Matters We Assist With"
            intro="We provide criminal defence advice and court representation across a comprehensive spectrum of assault charges:"
          />
          <div className="matters-grid">
            {assaultMatters.map((item) => (
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
            Where violence allegations intersect with domestic relationships, specialised consideration is
            given to the{" "}
            <Link href="/criminal-lawyers-melbourne/family-violence-criminal-lawyer-melbourne/">
              Family Violence Criminal Lawyer Melbourne
            </Link>{" "}
            framework and any related intervention orders.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Prepare Your Assault Defence</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Assault matters require rigorous factual examination. A successful defence often turns on
              establishing what truly transpired, examining whether self-defence applies, or demonstrating
              evidentiary gaps in the prosecution brief:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {defenceSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If police have contacted you for questioning, our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              service offers crucial guidance before you participate in any interview. When your matter proceeds
              to a hearing, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              practice ensures strong advocacy before the magistrate or judge.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Understanding the Legal Process and Court Expectations</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              When facing assault allegations in Victoria, taking decisive, measured action is essential. Whether
              the appropriate pathway is entering a plea of not guilty to contest the allegations, negotiating
              summary resolution of charges, or preparing structured plea materials in mitigation, careful
              preparation makes an immense difference.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist you in gathering character references, medical evidence, counselling reports, and
              factual witness statements where relevant. Every step is undertaken with clear communication so
              you understand your court obligations, bail conditions, and realistic legal options.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To discuss your matter confidentially with our team, get in touch through our{" "}
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
            <Faq items={assaultFaqs} />
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
                Need prompt legal advice regarding an assault charge or police investigation in Melbourne?
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
