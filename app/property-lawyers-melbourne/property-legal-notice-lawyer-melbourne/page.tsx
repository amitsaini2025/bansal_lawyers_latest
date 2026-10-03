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
  title: "Property Legal Notice Lawyer Melbourne | Lease & Property Notices",
  description:
    "Bansal Lawyers assists with property legal notices, lease notices, breach notices, demand letters, settlement notices and property dispute responses.",
  path: "/property-lawyers-melbourne/property-legal-notice-lawyer-melbourne",
  keywords: [
    "Property Legal Notice Lawyer Melbourne",
    "Property Legal Notice Lawyers Melbourne",
    "Lease Notice Lawyer Melbourne",
    "Property Demand Letter Lawyer Melbourne",
    "Breach Notice Lawyer Melbourne",
    "Property Lawyer Melbourne",
  ],
});

const noticeTypes = [
  "Lease notices and notices to remedy a breach",
  "Breach notices under a commercial lease",
  "Breach notices under a residential tenancy",
  "Termination notices and the grounds relied on",
  "Demand letters about unpaid rent or outgoings",
  "Settlement-related notices where a party has not completed",
  "Notices requiring a party to satisfy a contract condition",
  "Landlord and tenant notices of various kinds",
  "Notices connected to a property dispute",
  "Responses to a property notice received",
  "Replies to a demand letter about a property matter",
  "Correspondence attempting to settle a property dispute before a hearing",
];

const noticeConsiderations = [
  "The lease or contract terms and any required notice process",
  "The legal basis for the notice, such as a breach or a ground for termination",
  "Whether the required notice period has been given",
  "The facts and the documents that support the position",
  "What the notice is intended to achieve",
  "Whether the wording could limit later options",
  "How the other party is likely to respond",
  "What the next step will be if the notice is not complied with",
];

const noticeFaqs = [
  {
    question: "What is a property legal notice?",
    answer:
      "In property matters, a legal notice is a formal written communication that records a party's position and asks for a specific response by a set date. Common examples include a notice to remedy a breach of a lease, a termination notice and a demand letter about unpaid rent. Some notices must meet specific requirements to be effective.",
  },
  {
    question: "Does a notice have to follow a particular form?",
    answer:
      "It depends on the notice and the legislation or lease it comes from. Some notices must be in a prescribed form and give a minimum period. Others are governed by the lease itself. A notice that does not comply with the requirements may not achieve what the sender intended.",
  },
  {
    question: "Should I get advice before sending a property notice?",
    answer:
      "It is advisable. The notice must be based on a correct legal ground, give the right period, and be worded so that it does not create problems later. Advice before the notice is sent is usually more effective than trying to fix the position afterwards.",
  },
  {
    question: "What happens if a notice is not complied with?",
    answer:
      "It depends on the notice and the lease or contract. The next step might be a further notice, a negotiated resolution, mediation, or an application to VCAT or a court. The appropriate step depends on the grounds, the evidence and what the party is seeking to achieve.",
  },
  {
    question: "I have received a property notice. What should I do first?",
    answer:
      "Read it carefully and note the date and what it requires. Do not ignore it, and take advice before responding. A reply that does not address the specific allegation, or that concedes a point, can affect your position. If the notice is disputed, the response should set out your position clearly.",
  },
  {
    question: "Can a property notice lead to a settlement instead of a hearing?",
    answer:
      "Often yes. Many notices are issued to prompt a resolution, and a significant proportion of property disputes settle through negotiation or mediation without a hearing. Where a settlement is reached, recording it properly in writing protects both parties.",
  },
];

export default function PropertyLegalNoticeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Property Legal Notice Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(noticeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Property Legal Notice Lawyer Melbourne"
        intro={
          <>
            <p>
              A property notice must meet the requirements that apply to it. The wording, the ground and
              the notice period all matter.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists landlords, tenants, buyers and sellers in Melbourne with property
              notices and responses.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Property Legal Notice Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Notices Sent and Reviewed",
          "Lease, Breach and Settlement Notices",
          "Evidence Checked Before Sending",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Property Notices</span>
            <h2>Legal Notices in Property Matters</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A property notice is often the point at which a disagreement becomes formal. It may be a
              notice to remedy a breach of a lease, a termination notice, a demand for unpaid rent, or a
              notice requiring a party to complete a property transaction.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Unlike ordinary correspondence, a notice may need to satisfy specific requirements. It may
              have to be in a particular form, rely on a valid ground, and allow a minimum period before
              it takes effect. A notice that does not meet those requirements can leave the sender in a
              worse position than before.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We prepare notices on behalf of clients and advise clients who have received one. What is
              appropriate depends on the lease or contract, the evidence and the outcome being sought.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Property Notices We Assist With"
            intro="Our property team advises on a range of notices and responses, including:"
          />
          <div className="matters-grid">
            {noticeTypes.map((item) => (
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
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Before You Send</span>
            <h2>What to Consider Before Sending a Notice</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A notice is more effective when it is grounded in the lease or contract and the evidence.
              Before anything is sent, we work through:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {noticeConsiderations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              It also helps to be clear about the purpose. A notice intended to prompt payment should read
              differently from one that sets up a formal dispute process. Sending an aggressive notice
              where a short, firm letter would have worked can make resolution harder rather than easier,
              and it may push the other party towards their own legal advice.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Responding</span>
            <h2>If You Have Received a Property Notice</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Receiving a notice is not the end of the matter, but it should not be ignored. Many notices
              set a deadline, and a failure to respond within it can have consequences under the lease or
              legislation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Before responding, it is worth reviewing the lease or contract, the notice itself and the
              correspondence that led to it. A reply that concedes a point, or that fails to raise a
              defence that was available, can be difficult to undo. Where the notice is disputed, the
              response should address the specific allegation and set out the position clearly.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Notices often lead to negotiation. Where a settlement can be reached, recording it properly
              in writing usually serves both parties better than a prolonged dispute.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={noticeFaqs} />
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
                Need to send a property notice, or respond to one you have received?
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
