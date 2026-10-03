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
  title: "Drug Offence Lawyer Melbourne | Drug Charges & Defence Advice",
  description:
    "Bansal Lawyers assists with drug offences, possession charges, police matters, court representation and criminal defence advice in Melbourne.",
  path: "/criminal-lawyers-melbourne/drug-offence-lawyer-melbourne",
  keywords: [
    "Drug Offence Lawyer Melbourne",
    "Drug Offence Lawyers Melbourne",
    "Drug Charge Lawyer Melbourne",
    "Criminal Lawyer Melbourne",
    "Drug Possession Lawyer Melbourne",
    "Criminal Defence Lawyer Melbourne",
  ],
});

const drugMatters = [
  "Possession of a drug of dependence under the Drugs, Poisons and Controlled Substances Act 1981 (Vic)",
  "Use of illicit substances and drug paraphernalia allegations",
  "Trafficking or intent to traffic drugs of dependence (including trafficable quantity thresholds)",
  "Cultivation of narcotic plants (including cannabis cultivation allegations)",
  "Prescription drug misuse, unlawful supply, and non-prescribed pharmaceuticals",
  "Importation and border-controlled substance charges under Commonwealth legislation",
  "Scrutinising the legality of police search warrants, vehicle searches, and personal stop-and-searches",
  "Challenging forensic drug weight, botanical analysis, and chemical purity certificates",
  "Applications for the Magistrates' Court Criminal Diversion Program for eligible possession charges",
  "Urgent bail applications where strict statutory bail tests apply for trafficking charges",
  "Submissions for Drug Treatment Orders (DTO) or Community Correction Orders (CCO)",
  "Court representation across contest mentions, committal proceedings, and plea hearings",
];

const defenceStrategy = [
  "Examining the lawfulness of the initial police search under Section 82 of the Act or warrant powers",
  "Testing whether legal possession (knowledge and physical custody/control) can be established",
  "Scrutinising chemical analysis certificates, chain of custody of exhibits, and net weight calculations",
  "Advising on your right to silence and legal rights before participating in a police interview",
  "Exploring suitability for the Victorian Criminal Diversion Program to avoid a recorded conviction",
  "Preparing urgent bail applications addressing compelling reason or exceptional circumstances hurdles",
  "Negotiating with police prosecutors to withdraw trafficking charges where quantities were for personal use",
  "Presenting rehabilitation evidence, pathology screens, and expert medical reports at sentencing",
];

const drugFaqs = [
  {
    question: "What is deemed 'possession' of a drug in Victoria?",
    answer:
      "Under Victorian law, possession requires both physical custody or control over the substance and knowledge that the illicit item is present. Section 5 of the Drugs, Poisons and Controlled Substances Act 1981 creates a legal presumption that drugs found on premises occupied by a person are in their possession, unless the person proves they did not know the drug was there. Rebutting this presumption requires precise evidentiary analysis.",
  },
  {
    question: "What is the difference between drug possession and drug trafficking?",
    answer:
      "Drug possession involves having an illicit substance for personal use without commercial intent. Drug trafficking involves selling, offering for sale, preparing, moving, or manufacturing drugs. In Victoria, possessing a quantity above the statutory 'trafficable quantity' threshold creates a legal presumption that you possessed the substance for the purpose of trafficking, placing the legal burden on the defence to prove personal use.",
  },
  {
    question: "Can police search my person, bag, or car without a warrant?",
    answer:
      "Under Section 82 of the Drugs, Poisons and Controlled Substances Act 1981 (Vic), Victoria Police officers may search a person, vehicle, or vessel without a warrant if they have reasonable grounds to suspect that a drug of dependence is present. If police lacked reasonable grounds, the evidence gathered during the search may be ruled inadmissible under Section 138 of the Evidence Act 2008.",
  },
  {
    question: "Can I get diversion for a first-time drug possession charge in Melbourne?",
    answer:
      "Yes. First-time offenders charged with minor drug possession (such as personal amounts of cannabis, cocaine, or MDMA) may be eligible for the Magistrates' Court Criminal Diversion Program. If granted, the accused person completes conditions (such as drug education and good behaviour) and no conviction or criminal finding is recorded.",
  },
  {
    question: "Will a drug charge affect my visa, citizenship, or international travel?",
    answer:
      "Yes. Australia's Department of Home Affairs scrutinises drug offences under the Migration Act character test, which can lead to visa refusals or cancellations. In addition, many foreign countries (including the United States, Canada, and Japan) strictly deny entry or require special visa waivers for individuals with drug convictions.",
  },
  {
    question: "Is it difficult to get bail for drug trafficking charges?",
    answer:
      "Yes. Under the Victorian Bail Act 1977, serious drug charges—particularly trafficking commercial quantities—place the accused in a reverse-onus position where they must prove 'exceptional circumstances' or 'compelling reason' why their detention in custody is not justified. Thorough preparation of bail conditions and supporting guarantees is critical.",
  },
];

export default function DrugOffenceLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Drug Offence Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(drugFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Drug Offence Lawyer Melbourne"
        intro={
          <>
            <p>
              Drug charges carry significant legal, personal, and professional consequences, with potential
              repercussions for employment, travel visas, and liberty.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides serious, strategic criminal defence representation for drug possession,
              trafficking allegations, police search disputes, and court proceedings across Victoria.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Drug Offence Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Urgent Counsel",
          "Police Search & Seizure Legality Scrutiny",
          "Magistrates' Court Diversion Advice",
          "Urgent Bail & Court Representation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Controlled Substances</span>
            <h2>Comprehensive Legal Defence for Drug Offences in Victoria</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Drug offences in Victoria are governed by the Drugs, Poisons and Controlled Substances Act 1981,
              encompassing allegations ranging from simple possession for personal use to commercial trafficking
              and cultivation. Whether you have been charged after a roadside vehicle search, a nightclub
              inspection, or a formal police search warrant, obtaining independent legal advice promptly is
              crucial.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A key consideration in drug matters is examining how the evidence was obtained. If police conducted
              an unlawful stop-and-search without reasonable grounds or breached search warrant parameters,
              that evidence can be challenged in court. Furthermore, establishing the true quantity, purity,
              and purpose of possession can dramatically affect the legal threshold and available penalties.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Learn more about our overarching criminal practice on our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or learn about
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
            eyebrow="Matters We Handle"
            title="Drug Offences & Controlled Substance Matters We Assist With"
            intro="We defend clients facing a wide spectrum of summary and indictable drug charges across Melbourne:"
          />
          <div className="matters-grid">
            {drugMatters.map((item) => (
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
            When an accused person is remanded in custody following serious drug charges, our{" "}
            <Link href="/criminal-lawyers-melbourne/bail-application-lawyer-melbourne/">
              Bail Application Lawyer Melbourne
            </Link>{" "}
            service prepares urgent court applications to seek release on bail.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Approach Your Drug Defence</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Drug charges require meticulous technical and procedural analysis. We guide you through each
              critical step of your defence:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {defenceStrategy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If police seek to question you, our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              advisers provide critical advice prior to any recorded conversation. In court, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              team ensures your interests are firmly protected.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Protecting Your Record, Career, and Visa Status</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A recorded drug conviction can have severe ripple effects on your future. It can trigger mandatory
              reporting obligations to employer regulatory bodies, threaten Working with Children clearances,
              and jeopardize temporary or permanent Australian residency visas.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our priority is exploring every legal avenue to resolve charges favourably. For eligible
              first-time offenders, we actively pursue the Criminal Diversion Program to achieve outcome
              dismissal without a criminal record. For contested charges, we scrutinise every evidentiary link
              to hold the prosecution strictly to their burden of proof.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To arrange an urgent, confidential consultation regarding a drug offence, visit our{" "}
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
            <Faq items={drugFaqs} />
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
                Need urgent legal advice regarding a drug charge or police investigation in Victoria?
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
