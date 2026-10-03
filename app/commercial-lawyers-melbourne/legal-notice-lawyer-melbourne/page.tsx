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
  title: "Legal Notice Lawyer Melbourne | Demand Letters & Business Notices",
  description:
    "Bansal Lawyers assists with legal notices, demand letters, business notices, contract breach notices, unpaid debts and commercial dispute responses.",
  path: "/commercial-lawyers-melbourne/legal-notice-lawyer-melbourne",
  keywords: [
    "Legal Notice Lawyer Melbourne",
    "Legal Notice Lawyers Melbourne",
    "Demand Letter Lawyer Melbourne",
    "Letter of Demand Lawyer Melbourne",
    "Business Legal Notice Melbourne",
    "Commercial Lawyer Melbourne",
  ],
});

const noticeTypes = [
  "Letters of demand for unpaid money",
  "Notices of breach under a contract",
  "Notices requiring a party to perform an obligation",
  "Notices raising a claim for defective or incomplete work",
  "Notices connected to a business or shareholder dispute",
  "Notices about a lease or premises issue",
  "Notices where a contract requires a formal step before proceedings",
  "Responses to a notice received from another party",
  "Replies to a demand letter or a claim",
  "Correspondence attempting to settle a matter before it escalates",
];

const noticeConsiderations = [
  "The contract terms and any required notice process",
  "The facts and the documents that support the position",
  "What the notice is actually trying to achieve",
  "The deadline that applies, if one is set",
  "Whether the wording could limit later options",
  "Whether the notice should be a step towards negotiation or proceedings",
  "How the other party is likely to respond",
  "What the next step will be if the notice is ignored",
];

const noticeFaqs = [
  {
    question: "What is a legal notice?",
    answer:
      "In commercial matters, a legal notice is a formal written communication that records a party's position and asks for a specific response by a set date. Common examples include a letter of demand for unpaid money and a notice of breach under a contract. Some contracts require a notice before other steps can be taken.",
  },
  {
    question: "Should I send a notice before taking further action?",
    answer:
      "Often yes. A clear notice can resolve a matter without further cost, and many contracts require one. Whether a notice is appropriate, and in what terms, depends on the contract and the facts. It is worth seeking advice before sending one, because the wording can affect your position later.",
  },
  {
    question: "What should a letter of demand include?",
    answer:
      "It should identify the parties correctly, set out the amount or obligation in dispute, explain the basis of the claim, refer to the relevant contract terms, and specify what is required and by when. It should also make clear what will happen if the deadline is not met, without overstating the position.",
  },
  {
    question: "What happens if the notice is ignored?",
    answer:
      "It depends on the type of notice and the contract. If the deadline passes without a response, the next step might be a further notice, a negotiated settlement, mediation, or court or tribunal proceedings. The appropriate step depends on the strength of the claim and whether the other party has the capacity to pay.",
  },
  {
    question: "Can a poorly worded notice make things worse?",
    answer:
      "Yes. A notice that overstates the claim, misstates the contract, or contains an unintended admission can weaken your position. An aggressive or unclear notice can also push the other party towards their own legal advice rather than resolution. Careful drafting is worth the effort.",
  },
  {
    question: "I have received a notice. What should I do?",
    answer:
      "Read it carefully and note any deadline. Do not ignore it, and do not respond in detail until you have taken advice. A response written in the wrong terms can limit your options, so it is usually best to have the notice and the surrounding documents reviewed first.",
  },
];

export default function LegalNoticeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Legal Notice Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(noticeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Legal Notice Lawyer Melbourne"
        intro={
          <>
            <p>
              A legal notice should be prepared carefully. The wording, the deadline and the supporting
              evidence can all affect what happens next.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne businesses with demand letters, breach notices, formal
              notices and responses to notices received.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Legal Notice Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Sending and Responding to Notices",
          "Evidence Reviewed Before Any Notice",
          "Deadlines Taken Seriously",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Formal Correspondence</span>
            <h2>Legal Notices and Demand Letters in Commercial Matters</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A legal notice is often the point at which a commercial disagreement becomes formal. It may
              be a letter of demand for money, a notice of breach under a contract, or a response to a
              claim made against your business. In each case, the document does more than communicate a
              position; it creates a record that may be referred to later.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Many commercial contracts set out a required process before further steps can be taken, such
              as giving written notice and allowing a period to remedy the issue. Following that process
              properly matters, and so does the way the notice itself is drafted.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We prepare notices on behalf of clients and advise clients who have received one. What is
              appropriate in each case depends on the contract, the evidence and the outcome the client is
              seeking.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Notices We Assist With"
            intro="Our commercial team advises on a range of formal notices and responses, including:"
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
              A notice is more effective when it is grounded in the documents. Before anything is sent, we
              work through the following points:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {noticeConsiderations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              It also helps to be clear about the purpose. A notice intended to prompt payment should read
              differently from one that sets up a formal dispute process. Sending an aggressive notice
              where a short, firm letter would have worked can make resolution harder rather than easier.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Responding</span>
            <h2>If You Have Received a Notice</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Receiving a notice is not the end of the matter, but it should not be ignored. Many notices
              set a deadline, and a failure to respond within it can have consequences under the contract
              or in any later proceedings.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Before responding, it is worth reviewing the contract, the notice itself and the
              correspondence that led to it. A reply that concedes a point, or that fails to raise a
              defence that was available, can be difficult to undo. Where the notice is disputed, the
              response should address the specific allegations and set out the position clearly.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Notices often lead to negotiation. Where a commercial outcome can be reached, a settlement
              recorded properly in writing usually serves both parties better than a prolonged dispute.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={noticeFaqs} />
      </Section>
    </>
  );
}
