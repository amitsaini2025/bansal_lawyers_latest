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
  title: "Partnership Agreement Lawyer Melbourne | Business Partner Advice",
  description:
    "Bansal Lawyers assists with partnership agreements, business partner terms, responsibilities, profit sharing, exits, disputes and commercial advice.",
  path: "/commercial-lawyers-melbourne/partnership-agreement-lawyer-melbourne",
  keywords: [
    "Partnership Agreement Lawyer Melbourne",
    "Partnership Agreement Lawyers Melbourne",
    "Business Partnership Lawyer Melbourne",
    "Partnership Dispute Lawyer Melbourne",
    "Commercial Lawyer Melbourne",
    "Business Lawyer Melbourne",
  ],
});

const partnershipMatters = [
  "Preparing a written partnership agreement",
  "Reviewing or updating an existing partnership agreement",
  "Defining each partner's role and responsibilities",
  "Capital contributions and how they are recorded",
  "Profit and loss sharing arrangements",
  "Decision-making rules and partner authority",
  "Admitting a new partner to the business",
  "Partner exit, retirement and removal",
  "Valuation of a departing partner's interest",
  "Partnership disputes and separation",
  "Advice on whether a partnership is the right structure",
  "Converting a partnership into a company where appropriate",
];

const partnershipTerms = [
  "Who the partners are, and what each contributes to the business",
  "How profits and losses are shared between partners",
  "How decisions are made, and whether some need unanimous agreement",
  "What each partner is authorised to do on behalf of the business",
  "How much time and effort each partner is expected to commit",
  "What happens if a partner wants to leave, retire or reduce their involvement",
  "How a new partner can be admitted, and on what terms",
  "How a departing partner's share is valued and paid out",
  "What happens if a partner dies or becomes unable to work",
  "How disputes between partners are resolved",
];

const partnershipFaqs = [
  {
    question: "Do partners need a written partnership agreement?",
    answer:
      "Yes, it is strongly advisable. Without a written agreement, the statutory rules and general partnership law apply, and they may not reflect what the partners actually intended. A written agreement records how the business is run, how profits are shared and what happens when a partner leaves.",
  },
  {
    question: "What is the difference between a partnership and a company?",
    answer:
      "A partnership is a relationship between two or more people carrying on a business together for profit. Partners are generally personally responsible for the debts of the business. A company is a separate legal entity, which changes how liability, tax and ownership are treated. The right structure depends on the business and the people involved.",
  },
  {
    question: "How are profits usually shared in a partnership?",
    answer:
      "That depends entirely on what the partners agree. Some partnerships split profits equally, while others use a formula that reflects capital contributed, time worked or the value of each partner's client base. What matters is that the method is recorded clearly so there is no argument later.",
  },
  {
    question: "What happens if one partner wants to leave?",
    answer:
      "Without a written agreement, the process can be unclear and disruptive. A partnership agreement can set out the notice required, how the departing partner's share is valued, and how the remaining partners can buy that interest. That gives everyone a defined path rather than a negotiation under pressure.",
  },
  {
    question: "Can a partnership agreement deal with disputes?",
    answer:
      "Yes. It can set out a structured process, such as requiring the partners to attempt mediation before taking further steps. Agreeing to that process in advance makes it easier to resolve a disagreement without damaging the business.",
  },
  {
    question: "Can you help where partners are already in dispute?",
    answer:
      "Yes. We can review the partnership agreement, the business records and the correspondence, explain your position, and advise on negotiation or further steps. What is appropriate depends on the terms of the agreement, the conduct of the partners and the outcome you are seeking.",
  },
];

export default function PartnershipAgreementLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Partnership Agreement Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(partnershipFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Partnership Agreement Lawyer Melbourne"
        intro={
          <>
            <p>
              A partnership agreement records how the business is run, how profits are shared and what
              happens when a partner leaves.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists Melbourne businesses and partners with preparing, reviewing and
              negotiating partnership agreements.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Partnership Agreement Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Advice for New and Existing Partnerships",
          "Clear Profit Sharing Terms",
          "Exit and Dispute Provisions",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Business Partners</span>
            <h2>Setting Out How the Partnership Works</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Partnerships often begin between people who already trust each other. Because of that trust,
              the practical arrangements are rarely written down. Each partner has a general sense of who
              does what and how the money is split, and the business runs on that understanding.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The difficulty comes when something changes. A partner takes on less work, wants to bring in
              someone new, or decides to leave. At that point, the informal understanding is no longer
              enough, and the partners discover they remember the arrangement differently.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A written partnership agreement sets out the terms clearly from the start. It covers roles,
              contributions, profit sharing, decision-making and exits. Every partnership is different,
              and the right terms depend on the business, the partners and their individual circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Partnership Matters We Assist With"
            intro="We advise on a wide range of partnership arrangements, including:"
          />
          <div className="matters-grid">
            {partnershipMatters.map((item) => (
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
            <h2>What a Partnership Agreement Should Cover</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The terms needed will depend on the business, but most partnership agreements should deal
              with the following:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {partnershipTerms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Capital contributions also deserve attention. If one partner puts in significantly more
              than another, the agreement should record how that contribution is treated, whether it is
              repaid on exit, and how it affects profit sharing. Leaving that unresolved is a common
              source of dispute between partners.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>The Risk of an Informal Partnership</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Where there is no written agreement, the partners are left with the default rules and
              whatever they can prove about their arrangement. That can produce outcomes none of them
              expected. A partner may be entitled to end the partnership on short notice, or the business
              may have to be wound up to separate the partners&apos; interests.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Partners in an informal arrangement can also be exposed personally to the business&apos;s
              debts, because a partnership is not a separate legal entity in the way a company is.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Agreeing the terms while the partnership is working well is far easier than negotiating them
              during a dispute. Where a disagreement has already begun, we can also assist with commercial
              disputes and related notices.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={partnershipFaqs} />
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
                Going into business with a partner, or reviewing an existing arrangement?
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
