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
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Business Legal Advice Lawyer Melbourne | Commercial Legal Counsel",
  description:
    "Bansal Lawyers provides practical business legal advice for Melbourne business owners, companies, and directors. Strategic commercial counsel before major decisions.",
  path: "/commercial-lawyers-melbourne/business-legal-advice-lawyer-melbourne",
  keywords: [
    "Business Legal Advice Lawyer Melbourne",
    "Business Lawyer Melbourne",
    "Commercial Legal Counsel Melbourne",
    "Legal Advice for Small Business Melbourne",
    "Corporate Advisory Lawyer Melbourne",
    "Company Lawyer Melbourne",
  ],
});

const businessLegalAdvisoryAreas = [
  "Strategic legal counsel before signing major commercial contracts",
  "Advice on business structuring (sole trader, partnership, company, trust)",
  "Director duties, statutory obligations, and corporate governance compliance",
  "Risk assessment for commercial leases, finance facilities, and acquisitions",
  "Australian Consumer Law (ACL) compliance and unfair contract term reviews",
  "Employment and independent contractor classification advice",
  "Intellectual property protection, trademarks, and trade secret safeguards",
  "Dispute prevention and early conflict management strategies",
];

const whenToSeekAdvice = [
  "Before signing any contract or agreement that involves significant financial commitment",
  "When bringing on new business partners, directors, or equity investors",
  "When expanding operations, securing commercial financing, or granting security charges",
  "When receiving a legal notice, letter of demand, or threat of litigation",
  "When planning to buy, sell, merge, or restructure a commercial business",
  "When facing cash flow difficulties and requiring advice on solvency obligations",
];

const businessAdviceFaqs = [
  {
    question: "When should a small business hire a commercial lawyer?",
    answer:
      "Businesses should engage a commercial lawyer proactively—before signing commercial leases, taking on partners, borrowing capital, or selling products under standard terms. Proactive legal counsel avoids disputes that cost tens of thousands of dollars later.",
  },
  {
    question: "What are director duties under Australian corporations law?",
    answer:
      "Directors owe statutory and fiduciary duties under the Corporations Act 2001 (Cth), including duties of care and diligence, good faith, not improperly using position or information, and preventing the company from trading while insolvent.",
  },
  {
    question: "Can Bansal Lawyers provide ongoing legal advice on a retainer or as-needed basis?",
    answer:
      "Yes. We act as an accessible sounding board for business owners, providing timely commercial advice on an ad-hoc or regular basis as your business encounters new challenges.",
  },
  {
    question: "How do you help prevent commercial disputes?",
    answer:
      "We identify ambiguities in commercial agreements, establish clear payment and delivery milestones, ensure appropriate liability caps, and implement structured dispute resolution mechanisms before contracts are executed.",
  },
  {
    question: "How do I book a business legal consultation?",
    answer:
      "You can book an in-person consultation at our Collins Street office in Melbourne or arrange a phone or video conference through our website or by calling our office directly.",
  },
];

export default function BusinessLegalAdviceLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne" },
    { label: "Business Legal Advice Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(businessAdviceFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Business Legal Advice Lawyer Melbourne"
        intro={
          <>
            <p>
              Making major business decisions without legal counsel can expose your company and personal assets to unnecessary risk.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides practical, plain-language business legal advice to Melbourne entrepreneurs, companies, and directors across every stage of commercial growth.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Business Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call Our Team", href: "tel:+61422905860" }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Advice",
          "Plain-English Strategic Guidance",
          "Focus on Practical Commercial Outcomes",
          "Comprehensive Business Support",
        ]}
      />

      {/* Practical Strategic Guidance */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Counsel</span>
            <h2>Accessible, Trusted Business Legal Advice in Melbourne</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Every commercial transaction and operational milestone carries legal implications. Whether entering into a lease, taking on private finance, negotiating with suppliers, or resolving internal director friction, having independent legal advice gives you clarity and confidence.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, we act as a trusted commercial advisor. We take time to understand your operational reality, review relevant documents, explain risks without legal jargon, and help you make informed decisions that protect your company.
            </p>
          </div>
        </Container>
      </Section>

      {/* Advisory Scope */}
      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Advisory Scope"
            title="Areas Where We Provide Business Legal Advice"
            intro="Our commercial lawyers advise on core legal issues affecting Victorian enterprises:"
          />
          <div className="matters-grid">
            {businessLegalAdvisoryAreas.map((item) => (
              <div key={item} className="matter-item">
                <svg className="matter-item__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* When to Seek Advice */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Proactive Advice</span>
            <h2>When Should You Consult a Business Lawyer?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Seeking advice before executing documents or escalating disputes consistently delivers the best commercial outcomes:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {whenToSeekAdvice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={businessAdviceFaqs} />
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
                Need sound commercial advice before making your next business decision?
              </p>
              <ButtonLink href="/contact" variant="primary">
                Speak With a Business Lawyer
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
