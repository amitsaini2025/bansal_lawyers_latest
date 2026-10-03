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
  title: "Family Violence Criminal Lawyer Melbourne | Criminal Defence Advice",
  description:
    "Bansal Lawyers assists with family violence criminal charges, police matters, intervention order breaches, court representation and defence advice.",
  path: "/criminal-lawyers-melbourne/family-violence-criminal-lawyer-melbourne",
  keywords: [
    "Family Violence Criminal Lawyer Melbourne",
    "Family Violence Criminal Lawyers Melbourne",
    "Domestic Violence Criminal Lawyer Melbourne",
    "Criminal Lawyer Melbourne",
    "Intervention Order Breach Lawyer Melbourne",
    "Family Violence Lawyer Melbourne",
  ],
});

const familyViolenceMatters = [
  "Criminal charges arising from domestic disputes (assault, reckless injury, threats to inflict harm)",
  "Contravention of Family Violence Intervention Orders (FVIO) or Safety Notices (FVSN)",
  "Persistent contravention of family violence orders under Section 125A of the Family Violence Protection Act 2008",
  "Criminal damage, property destruction, and unlawful entry allegations within the family home",
  "Threats to kill, stalking, and continuous electronic harassment allegations",
  "Managing simultaneous criminal prosecutions and civil Intervention Order (IVO) proceedings",
  "Urgent bail applications in the Magistrates' Court under strict family violence statutory thresholds",
  "Navigating strict bail conditions, non-contact terms, and exclusion from the family residence",
  "Intersecting parenting arrangements and Federal Circuit and Family Court of Australia orders",
  "Representing clients at Magistrates' Court contest mentions, special hearings, and pleas",
  "Negotiating charge withdrawal, diversion, or resolution on agreed summary basis",
  "Advising on the severe immigration visa cancellation risks under Section 501 of the Migration Act",
];

const defenceApproach = [
  "Reviewing the police brief of evidence, triple-zero call logs, and body-worn camera footage",
  "Examining the underlying relationship context, text messages, and chronological communication records",
  "Assessing whether allegations were fabricated, exaggerated, or arose during acrimonious separation",
  "Navigating strict bail conditions to allow necessary arrangements for personal effects or child contact",
  "Coordinating defence strategy across both the criminal prosecution and civil intervention order lists",
  "Advising on your right to silence and legal posture during Victoria Police station interviews",
  "Engaging in structured prosecution discussions to seek withdrawal of unsupported charges",
  "Presenting comprehensive mitigating evidence, including voluntary completion of behavioural programs",
];

const familyViolenceFaqs = [
  {
    question: "What is the difference between a civil intervention order and a criminal family violence charge?",
    answer:
      "A Family Violence Intervention Order (FVIO) is a civil court order made under the Family Violence Protection Act 2008 to protect an individual from family violence. While making an IVO does not give the respondent a criminal record, breaching any condition of that order is a criminal offence. In many situations, Victoria Police initiate both civil IVO proceedings and separate criminal charges (such as assault or property damage) arising from the same incident.",
  },
  {
    question: "How do family violence charges affect bail applications in Victoria?",
    answer:
      "Under the Victorian Bail Act 1977, family violence allegations trigger heightened statutory scrutiny. In many family violence matters, an accused person is in a 'show compelling reason' or 'exceptional circumstances' category, requiring them to demonstrate to the court why detention is not justified, and that any risk to the protected person can be sufficiently managed through strict conditions.",
  },
  {
    question: "Can an intervention order condition prevent me from seeing my children?",
    answer:
      "Yes. Standard intervention order conditions prohibit an accused person from contacting the protected person directly or indirectly, which can unintentionally prevent contact with children if they live with the protected parent. However, orders can be tailored or varied to permit contact that is in accordance with Family Court parenting orders or written parenting agreements.",
  },
  {
    question: "What is the penalty for breaching a family violence intervention order in Victoria?",
    answer:
      "Under Section 123 of the Family Violence Protection Act 2008, contravening an intervention order carries a maximum penalty of 2 years imprisonment or a significant fine. If the breach involves intention to cause harm or fear, or constitutes persistent contravention under Section 125A, maximum penalties increase to 5 years imprisonment.",
  },
  {
    question: "Can the complainant 'drop' the family violence charges?",
    answer:
      "No. In Victoria, criminal charges are brought by the State (Victoria Police), not by the individual complainant. Even if the affected family member provides a statement indicating they wish the charges to be withdrawn, police prosecutors maintain independent discretion to proceed with the prosecution based on other evidence (such as 000 calls, body-worn camera footage, or admissions).",
  },
  {
    question: "How do family violence criminal charges impact visa status in Australia?",
    answer:
      "The Department of Home Affairs takes family violence offences extremely seriously. Under Section 501 of the Migration Act 1958, non-citizens facing family violence convictions or custodial sentences face mandatory visa cancellation or refusal under the character test. Seeking urgent legal advice is vital for non-citizens.",
  },
];

export default function FamilyViolenceCriminalLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Family Violence Criminal Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(familyViolenceFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Family Violence Criminal Lawyer Melbourne"
        intro={
          <>
            <p>
              Family violence criminal charges can rapidly alter your life, resulting in immediate eviction
              from your home, separation from your children, and serious criminal jeopardy.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides serious, calm, and strategic criminal defence representation for
              individuals facing domestic violence charges, IVO contraventions, and court proceedings across Victoria.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Family Violence Criminal Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Urgent Consultations",
          "Criminal Defence & IVO Coordination",
          "Magistrates' Court Bail & Contest Advocacy",
          "Understanding of Family Court Overlap",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Domestic Criminal Defence</span>
            <h2>Careful, Strategic Representation for Family Violence Charges</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In Victoria, allegations of family violence are handled with zero-tolerance policies by Victoria
              Police. When an incident occurs, police often take immediate action by issuing a Family Violence
              Safety Notice, initiating criminal assault or property damage charges, and applying for an interim
              Intervention Order.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              These matters frequently arise in the emotionally charged environment of relationship breakdown,
              parenting disputes, or financial stress. It is crucial to have legal counsel that understands both
              the strict procedural rules of the criminal courts and the nuanced dynamics of family law.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For legal support regarding civil intervention orders, visit our dedicated{" "}
              <Link href="/family-lawyers-melbourne/family-violence-lawyer-melbourne/">
                Family Violence Lawyer Melbourne
              </Link>{" "}
              practice under Family Law, or return to our core{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Matters We Handle"
            title="Family Violence Charges & Court Proceedings We Assist With"
            intro="We defend clients facing criminal domestic violence charges across the Magistrates' Court of Victoria:"
          />
          <div className="matters-grid">
            {familyViolenceMatters.map((item) => (
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
            Where an accused person is charged specifically with violating court-ordered restrictions, our{" "}
            <Link href="/criminal-lawyers-melbourne/intervention-order-breach-lawyer-melbourne/">
              Intervention Order Breach Lawyer Melbourne
            </Link>{" "}
            service addresses the technical and evidentiary elements of the breach allegation.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Defend Family Violence Criminal Allegations</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Defending a family violence charge requires disciplined evidentiary analysis and careful
              case management:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {defenceApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If you are charged with physical violence, see our specialized{" "}
              <Link href="/criminal-lawyers-melbourne/assault-lawyer-melbourne/">
                Assault Lawyer Melbourne
              </Link>{" "}
              guidance. If you are held in police custody following an arrest, our{" "}
              <Link href="/criminal-lawyers-melbourne/bail-application-lawyer-melbourne/">
                Bail Application Lawyer Melbourne
              </Link>{" "}
              team acts immediately to seek bail in court.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Protecting Your Rights, Liberty, and Parenting Relationships</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The consequences of a family violence finding can follow you for decades. Beyond the threat of
              imprisonment or community correction orders, an adverse outcome can heavily restrict contact with
              your children under Family Court parenting laws and trigger Australian visa cancellations for
              migrants and permanent residents.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We ensure your version of events is heard, examine whether allegations have been weaponised
              during property or parenting disputes, and hold police strictly to evidentiary proof. We provide
              calm, objective advice on whether to contest charges or negotiate summary resolutions.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To arrange an urgent, confidential consultation, contact our legal team via our{" "}
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
            <Faq items={familyViolenceFaqs} />
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
                Facing family violence criminal charges or urgent police action in Melbourne?
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
