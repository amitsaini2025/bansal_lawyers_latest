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
  title: "Police Interview Lawyer Melbourne | Advice Before Police Questioning",
  description:
    "Bansal Lawyers assists with legal advice before police interviews, police questioning, criminal allegations and rights before speaking to police.",
  path: "/criminal-lawyers-melbourne/police-interview-lawyer-melbourne",
  keywords: [
    "Police Interview Lawyer Melbourne",
    "Police Interview Lawyers Melbourne",
    "Police Questioning Lawyer Melbourne",
    "Criminal Lawyer Melbourne",
    "Criminal Defence Lawyer Melbourne",
    "Legal Advice Before Police Interview",
  ],
});

const interviewMatters = [
  "Pre-interview legal advice and protecting your common law and statutory right to silence",
  "Advising on rights under Section 464 of the Crimes Act 1958 (Vic) (rights of suspects in custody)",
  "Responding to police telephone calls, visitations, or requests to 'come down to the station'",
  "Understanding statutory obligations: confirming name, address, and date of birth vs answering allegations",
  "Audio-visual records of interview (ROI) and formal cautioning procedures by Victoria Police",
  "Risks of informal conversations, off-the-record chats, or written statements",
  "Handling police search warrants, forensic procedures, and requests for phone passcodes",
  "Negotiating voluntary station attendance to avoid embarrassing workplace or residential arrests",
  "Urgent telephone advice while detained at a Victoria Police station",
  "Guidance across assault, theft, fraud, drug offences, family violence, and traffic investigations",
  "Advising when a 'no comment' interview is the safest strategic pathway",
  "Post-interview procedures, bail determinations, and preparation for first court appearances",
];

const interviewAdviceSteps = [
  "Contacting the investigating police officer to ascertain the exact nature and scope of the allegations",
  "Reviewing your fundamental rights under Victorian law, including your absolute right to silence",
  "Explaining the strict distinction between mandatory identification details and discretionary answers",
  "Highlighting the forensic hazards of attempting to 'talk your way out of charges' or provide casual explanations",
  "Advising on police powers regarding fingerprints, DNA samples, mobile phone access, and property seizure",
  "Preparing you for standard police interview tactics, open-ended questions, and evidence confrontation",
  "Attending or participating in telephone conferences with police investigators prior to formal questioning",
  "Formulating a coordinated post-interview bail plan in case formal charges are issued",
];

const interviewFaqs = [
  {
    question: "Do I have to answer police questions during a criminal interview in Victoria?",
    answer:
      "No. Under Victorian law, you have a fundamental right to silence. Aside from being legally required to provide your full name and residential address, you are under no obligation to answer questions regarding alleged offences. You can politely answer 'no comment' to all questions about the allegations.",
  },
  {
    question: "Will answering 'no comment' make me look guilty to police or the court?",
    answer:
      "No. Under Victorian law (Section 464J of the Crimes Act 1958 and the Evidence Act 2008), an accused person has an absolute right to remain silent. The prosecution and judge cannot invite a jury or magistrate to infer guilt simply because you exercised your legal right not to answer questions during a police interview.",
  },
  {
    question: "Can I bring a lawyer with me to a police interview?",
    answer:
      "Yes. Under Section 464C of the Crimes Act 1958, an investigating police officer must, before questioning or conducting an investigation, inform you that you may communicate with a legal practitioner and give you reasonable facilities to do so. A lawyer can advise you beforehand and, where appropriate, attend the interview.",
  },
  {
    question: "What happens if police ask for my phone passcode?",
    answer:
      "Under Victorian law, you are generally not required to provide your phone passcode or unlock your device unless police have obtained a specific judicial 'data access order' or search warrant order issued by a magistrate under Section 465AAA of the Crimes Act 1958. Handing over your phone voluntarily can provide police with unrestricted access to personal messages, photographs, and location history.",
  },
  {
    question: "Can an informal conversation with police be used against me?",
    answer:
      "Yes. Any statement, remark, or admission made to a police officer—even in the police car, in the station reception, or during casual conversation before the recording starts—can be written down by the officer in their official notebook and tendered as evidence in court. It is essential not to discuss the allegations informally.",
  },
  {
    question: "What should I do if police contact me asking for an interview?",
    answer:
      "Politely request the officer's name, station, contact number, and the nature of the matter they wish to discuss. State that you intend to seek legal advice first and that your lawyer will contact them. Then contact our criminal defence team immediately before speaking further with the officer.",
  },
];

export default function PoliceInterviewLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne" },
    { label: "Police Interview Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(interviewFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Police Interview Lawyer Melbourne"
        intro={
          <>
            <p>
              What you say—or choose not to say—during a police interview can determine the outcome of a
              criminal case before it even reaches court.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides immediate, critical legal advice for individuals requested or required to
              attend a police interview, protecting your rights from the very first contact.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Police Interview Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Urgent Police Station Advice",
          "Protection of Fundamental Right to Silence",
          "Liaison With Victoria Police Investigators",
          "Pre-Interview Strategic Preparation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Investigative Rights</span>
            <h2>Critical Legal Advice Before Speaking to Victoria Police</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              When Victoria Police contact an individual requesting an interview, it is rarely a casual enquiry.
              In almost all instances, investigators already suspect that an offence has been committed and are
              seeking admissions, corroborating details, or inconsistencies to build a stronger prosecution brief.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Many people mistakenly believe that by attending an interview and &ldquo;explaining their side of the
              story,&rdquo; police will see reason and drop the investigation. In reality, statements made in
              unprepared interviews are frequently the single piece of evidence that secures a conviction.
              Obtaining independent legal counsel before answering questions is your most powerful safeguard.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For broader defence representation, visit our main{" "}
              <Link href="/criminal-lawyers-melbourne/">Criminal Lawyers Melbourne</Link> page, or learn about
              our overall trial defence services on our{" "}
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
            title="Police Investigations & Questioning Scenarios We Assist With"
            intro="We provide urgent pre-interview advice across all criminal investigation categories:"
          />
          <div className="matters-grid">
            {interviewMatters.map((item) => (
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
            Depending on the allegation, see our specialised guidance for{" "}
            <Link href="/criminal-lawyers-melbourne/assault-lawyer-melbourne/">Assault Lawyer Melbourne</Link>,{" "}
            <Link href="/criminal-lawyers-melbourne/theft-lawyer-melbourne/">Theft Lawyer Melbourne</Link>, and{" "}
            <Link href="/criminal-lawyers-melbourne/fraud-lawyer-melbourne/">Fraud Lawyer Melbourne</Link> matters.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Our Methodology</span>
            <h2>How We Prepare You for Police Questioning</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Our priority is ensuring that you do not compromise your legal defence during an investigation:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {interviewAdviceSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We communicate directly with the investigating officer on your behalf to arrange a structured
              attendance, establish what documentation is sought, and ensure you are fully briefed before any
              formal contact occurs.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Assessment</span>
            <h2>Understanding the Dangers of Self-Representation at the Station</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Police officers are skilled investigators trained in questioning techniques designed to elicit
              admissions. Even statements intended to be entirely innocent can confirm that you were at the scene,
              confirm ownership of property, or reveal inconsistencies that prosecutors will later use against you.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              By seeking legal advice beforehand, you level the playing field. We clarify exactly what powers
              police have, what they cannot compel you to do, and how to maintain a calm, legally protected
              position throughout the process.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If police have contacted you or a family member for an interview, reach out immediately via our{" "}
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
            <Faq items={interviewFaqs} />
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
                Contacted by police for questioning or requested to attend a police station in Victoria?
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
