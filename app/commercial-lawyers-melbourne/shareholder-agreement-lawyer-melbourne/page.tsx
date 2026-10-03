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
  title: "Shareholder Agreement Lawyer Melbourne | Company Ownership Advice",
  description:
    "Bansal Lawyers assists with shareholder agreements, company ownership terms, director responsibilities, exits, disputes and business structure advice.",
  path: "/commercial-lawyers-melbourne/shareholder-agreement-lawyer-melbourne",
  keywords: [
    "Shareholder Agreement Lawyer Melbourne",
    "Shareholder Agreement Lawyers Melbourne",
    "Business Lawyer Melbourne",
    "Company Agreement Lawyer Melbourne",
    "Commercial Lawyer Melbourne",
    "Shareholder Dispute Lawyer Melbourne",
  ],
});

const agreementMatters = [
  "Preparing a shareholder agreement for a new company",
  "Reviewing or updating an existing agreement",
  "Shareholder and director responsibilities",
  "Decision-making and reserved matters",
  "Voting rights and weighted decisions",
  "Share transfers and pre-emptive rights",
  "Exit rights and buy-out mechanisms",
  "Profit distribution and dividend policy",
  "Resolving deadlock between shareholders",
  "New shareholders joining the company",
  "Advice where a shareholder dispute has started",
  "Business structure and ownership advice",
];

const agreementTerms = [
  "Who the shareholders are and what each of them owns",
  "How major decisions are made, and who has the final say",
  "Which decisions require unanimous or special approval",
  "What happens if a shareholder wants to sell their shares",
  "Whether other shareholders have a right to buy those shares first",
  "How profits are distributed, and when",
  "How a shareholder can exit, and how their shares are valued",
  "What happens if a shareholder dies, becomes incapacitated or leaves",
  "How a deadlock is broken when shareholders cannot agree",
  "How disputes between shareholders are resolved",
];

const agreementFaqs = [
  {
    question: "What is a shareholder agreement?",
    answer:
      "A shareholder agreement is a contract between the shareholders of a company that sets out how the company will be governed and how the shareholders will deal with each other. It sits alongside the company's constitution and deals with matters such as decision-making, share transfers, exits and dispute resolution.",
  },
  {
    question: "Do small companies need a shareholder agreement?",
    answer:
      "Small companies often need one most. Where there are only two or three shareholders, disagreements can stall the business completely, and there may be no clear way to break a deadlock. A written agreement sets out how those situations are handled before they arise.",
  },
  {
    question: "When is the right time to put a shareholder agreement in place?",
    answer:
      "The best time is at the start, when the shareholders are working well together and the terms are easy to discuss. Once a disagreement has developed, negotiating governance rules becomes far more difficult and often requires legal steps instead.",
  },
  {
    question: "Can a shareholder agreement cover how shares are valued on exit?",
    answer:
      "Yes. Setting out a valuation method in advance is one of the more useful parts of a shareholder agreement. It reduces the scope for argument when a shareholder leaves, and can avoid the cost of a later valuation dispute.",
  },
  {
    question: "What happens if shareholders cannot agree on a major decision?",
    answer:
      "Without a deadlock provision, the company can effectively stop. A shareholder agreement can set out a clear process, such as referring the matter to mediation, using a casting vote, or triggering a buy-out mechanism. The right approach depends on the business and the shareholders involved.",
  },
  {
    question: "Can you help if a shareholder dispute has already started?",
    answer:
      "Yes. We can review the existing agreement and company documents, explain your position and the options available, and advise on negotiation or further steps. What is appropriate depends on the terms of the agreement, the conduct of the parties and the outcome you are seeking.",
  },
];

export default function ShareholderAgreementLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Shareholder Agreement Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(agreementFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Shareholder Agreement Lawyer Melbourne"
        intro={
          <>
            <p>
              A shareholder agreement sets out how a company is governed and how the shareholders deal
              with each other, before problems arise.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne companies, founders and shareholders with preparing,
              reviewing and negotiating shareholder agreements.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Shareholder Agreement Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Founders, Startups & Private Companies",
          "Clear Governance Terms",
          "Exit and Deadlock Provisions",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Company Governance</span>
            <h2>Why Shareholders Need a Written Agreement</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              When a company is set up, the shareholders usually share the same goals. Decisions are made
              informally, and there is little need to write down how the relationship will work. Over
              time, circumstances change: one shareholder wants to sell, another wants to invest further,
              or the business takes a direction the others did not expect.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A shareholder agreement records the rules while the relationship is strong. It sets out how
              decisions are made, how shares can be transferred, how a shareholder can exit and how
              disagreements are resolved. Those provisions are what keep a company operating when the
              shareholders no longer see things the same way.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We advise on the company structure, the roles of directors and shareholders, and the
              arrangements that suit the particular business. Every agreement depends on the ownership
              structure, the commercial relationship and the risks the parties are prepared to accept.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Shareholder Matters We Assist With"
            intro="Our commercial team advises on the full range of shareholder arrangements:"
          />
          <div className="matters-grid">
            {agreementMatters.map((item) => (
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
            <span className="eyebrow">Key Terms</span>
            <h2>What a Shareholder Agreement Should Cover</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The terms needed will differ from company to company, but most shareholder agreements
              should address the following:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {agreementTerms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              It is also worth distinguishing between the roles of a director and a shareholder. A
              director has duties under the Corporations Act and responsibilities that cannot simply be
              set aside by agreement, while a shareholder&apos;s rights are largely governed by the
              agreement and the company&apos;s constitution. We explain how the two interact in your
              company.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>What Can Happen Without a Shareholder Agreement</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Without an agreement, the company&apos;s constitution and the Corporations Act apply. Those
              rules may not reflect what the shareholders actually intended, and they often leave gaps
              where a small company needs clear answers.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A deadlock between shareholders can bring the business to a standstill. A shareholder who
              wants to leave may have no clear way to sell their shares, and the remaining shareholders
              may be unable to prevent those shares going to an outsider. Where a shareholder dies,
              ownership can pass to their estate and create further complications.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a dispute has already arisen, we can assist with commercial disputes and, where
              appropriate, with notices and negotiations aimed at resolving the matter.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={agreementFaqs} />
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
                Starting a company, or reviewing how yours is governed?
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
