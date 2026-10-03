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
  title: "Intervention Order Breach Lawyer Melbourne | IVO Breach Advice",
  description:
    "Bansal Lawyers assists with intervention order breach allegations, court documents, family violence-related criminal matters and defence advice.",
  path: "/criminal-lawyers-melbourne/intervention-order-breach-lawyer-melbourne",
  keywords: [
    "Intervention Order Breach Lawyer Melbourne",
    "Intervention Order Breach Lawyers Melbourne",
    "Breach IVO Lawyer Melbourne",
    "IVO Breach Lawyer Melbourne",
    "Criminal Lawyer Melbourne",
    "Family Violence Criminal Lawyer Melbourne",
  ],
});

const breachMatters = [
  "Contravention of Family Violence Intervention Orders under Section 123 of the Family Violence Protection Act 2008",
  "Persistent contravention of family violence orders under Section 125A (carrying up to 5 years imprisonment)",
  "Contravention of Personal Safety Intervention Orders under Section 100 of the Personal Safety Intervention Orders Act 2010",
  "Breaches involving alleged direct contact (phone calls, text messages, emails, social media communication)",
  "Breaches involving indirect or third-party contact via family members or mutual acquaintances",
  "Attending or approaching within specified distance of protected residences, workplaces, or schools",
  "Allegations of breach where the protected person initiated or invited contact",
  "Disputes regarding whether the interim or final intervention order was properly served on the respondent",
  "Managing conflicting Family Court parenting orders and Section 68R inconsistency exceptions",
  "Police interviews, cautions, charge sheets, and arrest warrants for IVO breaches",
  "Magistrates' Court contest mentions, hearing advocacy, and witness cross-examination",
  "Plea hearings in mitigation seeking non-conviction outcomes or diversion recommendations where eligible",
];

const defenceApproach = [
  "Verifying proper service of the intervention order and confirming knowledge of exact operational conditions",
  "Examining digital evidence, phone records, message metadata, and IP logs to verify alleged communications",
  "Scrutinising whether the alleged conduct falls within statutory exceptions (such as communicating via a lawyer)",
  "Evaluating situations where contact was initiated or consented to by the protected person",
  "Advising on legal rights, police cautions, and self-incrimination before attending police stations",
  "Engaging with Victoria Police prosecutors to clarify ambiguities or seek withdrawal of unsustainable breach charges",
  "Coordinating court strategy with ongoing civil intervention order and family law proceedings",
  "Preparing comprehensive plea submissions in mitigation addressing the context and lack of harmful intent",
];

const breachFaqs = [
  {
    question: "Is breaching an intervention order in Victoria a criminal offence?",
    answer:
      "Yes. While applying for or being subject to an Intervention Order (IVO) is a civil court matter, breaching any condition of that order is a criminal offence under Victorian law. A finding of guilt can result in a permanent criminal record, substantial fines, Community Correction Orders, or imprisonment.",
  },
  {
    question: "What if the protected person invited me over or sent the first message?",
    answer:
      "Under Victorian law, only a magistrate can vary or cancel an intervention order. Even if the protected person invites you to their home, calls you, or sends text messages, you will still be legally liable for breaching the order if you respond or attend the prohibited location. The protected person's consent is not a legal defence to a breach charge, although it is a vital mitigating factor at sentencing.",
  },
  {
    question: "What constitutes 'persistent contravention' of an intervention order?",
    answer:
      "Under Section 125A of the Family Violence Protection Act 2008, a person commits persistent contravention if they breach an order on 2 or more occasions within a 28-day period. Persistent contravention is an indictable offence that carries a maximum penalty of 5 years imprisonment.",
  },
  {
    question: "What must the prosecution prove to convict someone of an IVO breach?",
    answer:
      "The prosecution must prove beyond reasonable doubt that: (1) a valid intervention order or safety notice was in force; (2) the accused had been served with the order or had received explanation of its terms; and (3) the accused intentionally or knowingly engaged in conduct that contravened a condition of the order.",
  },
  {
    question: "Can an IVO breach charge be resolved through the Criminal Diversion Program?",
    answer:
      "In certain circumstances, minor or technical breaches (especially for first-time offenders where no violence, threats, or intimidation occurred) may be considered for the Magistrates' Court Criminal Diversion Program. This requires the consent of the police prosecutor and judicial approval, allowing the matter to be finalised without a criminal conviction.",
  },
  {
    question: "How do Family Court parenting orders interact with an intervention order?",
    answer:
      "Under Section 68R of the Family Law Act 1975, Family Court parenting orders generally override inconsistent state intervention orders to the extent of any inconsistency. Most Victorian intervention orders contain an explicit exception allowing contact or attendance solely for the purpose of complying with a parenting order or written parenting agreement.",
  },
];

export default function InterventionOrderBreachLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Intervention Order Breach Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(breachFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Intervention Order Breach Lawyer Melbourne"
        intro={
          <>
            <p>
              Being charged with contravening an intervention order is a serious criminal matter that can
              result in an arrest, police custody, and a permanent criminal conviction.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers delivers meticulous, strategic criminal defence representation for individuals
              facing IVO breach charges, police questioning, and court hearings in Melbourne.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With an IVO Breach Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Urgent Appointments",
          "Thorough Digital & Message Evidence Review",
          "Magistrates' Court Contest & Plea Advocacy",
          "Understanding of Family Law Conflicts",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Contravention Defence</span>
            <h2>Strategic Legal Defence for Intervention Order Breaches</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Intervention orders in Victoria—whether Family Violence Intervention Orders (FVIO) or Personal
              Safety Intervention Orders (PSIO)—impose strict legal restrictions on what a respondent can and
              cannot do. What many people do not realise is that even a single text message, a brief phone call,
              or asking a third party a question can be classified by Victoria Police as a criminal contravention.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Allegations of breaching an order frequently occur against the backdrop of separation, child
              handover misunderstandings, or mutual communications where the protected person invited contact.
              Regardless of the circumstances, police treat breaches with utmost seriousness. Engaging legal
              counsel immediately is critical to protecting your freedom and criminal record.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If your matter involves civil intervention order proceedings, visit our dedicated{" "}
              <Link href="/family-lawyers-melbourne/intervention-order-lawyer-melbourne/">
                Intervention Order Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/family-lawyers-melbourne/family-violence-lawyer-melbourne/">
                Family Violence Lawyer Melbourne
              </Link>{" "}
              pages under Family Law, or return to our{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> practice overview.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Matters We Handle"
            title="Intervention Order Contraventions We Assist With"
            intro="We defend respondents facing criminal breach allegations across Victorian Magistrates' Courts:"
          />
          <div className="matters-grid">
            {breachMatters.map((item) => (
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
            When an alleged contravention includes accusations of threats or physical harm, our{" "}
            <Link href="/criminal-lawyers-melbourne/family-violence-criminal-lawyer-melbourne/">
              Family Violence Criminal Lawyer Melbourne
            </Link>{" "}
            and{" "}
            <Link href="/criminal-lawyers-melbourne/assault-lawyer-melbourne/">
              Assault Lawyer Melbourne
            </Link>{" "}
            practitioners formulate a coordinated defence across all charges.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Defend Breach Allegations</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Successfully defending an intervention order breach requires scrutinising both the legal validity
              of the order and the evidentiary proof of the alleged act:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {defenceApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If police investigators ask you to attend an interview, see our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              team before speaking. When appearing before a magistrate, our{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>{" "}
              advocates ensure your case is presented with technical precision.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Protecting Your Liberty and Long-Term Record</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A conviction for contravening an intervention order can permanently mark your criminal record,
              complicate ongoing Family Court proceedings regarding your children, and trigger visa cancellations
              under Australian migration laws.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our role is to provide clear, objective counsel. We verify whether police can prove service of
              the order, examine whether the communication fell within statutory exceptions, and present
              persuasive mitigation where a technical breach occurred without malice or intent to intimidate.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To schedule a confidential consultation regarding an intervention order breach, visit our{" "}
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
            <Faq items={breachFaqs} />
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
                Accused of breaching an intervention order or facing court proceedings in Melbourne?
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
