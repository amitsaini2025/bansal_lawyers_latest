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
  title: "Business-Related Dispute Lawyer Melbourne | Civil Business Disputes",
  description:
    "Bansal Lawyers assists with business-related disputes, commercial disputes, contract issues, payment disputes, legal notices and negotiation support.",
  path: "/civil-lawyers-melbourne/business-related-dispute-lawyer-melbourne",
  keywords: [
    "Business-Related Dispute Lawyer Melbourne",
    "Business Dispute Lawyer Melbourne",
    "Commercial Dispute Lawyer Melbourne",
    "Civil Business Dispute Lawyer Melbourne",
    "Commercial Lawyers Melbourne",
    "Contract Dispute Lawyer Melbourne",
  ],
});

const businessDisputeMatters = [
  "Contractual disputes with key suppliers, vendors, and service providers",
  "Customer complaints, warranty claims, and service delivery disagreements",
  "Disputed progress claims, unpaid trade invoices, and withholding of fees",
  "Business partner, co-director, and joint-venturer governance disputes",
  "Shareholder deadlocks, buy-out valuation disputes, and minority oppression claims",
  "Commercial distribution, agency, and franchise performance disputes",
  "Allegations of misleading or deceptive conduct under the Australian Consumer Law",
  "Breaches of confidentiality, non-compete covenants, and intellectual property misuse",
  "Drafting and responding to formal letters of demand and breach notices",
  "Structured without-prejudice settlement conferences and mediation",
  "Drafting Deeds of Settlement, Separation Deeds, and mutual releases",
  "Filing and defending business claims in VCAT and Victorian civil courts",
];

const businessDisputeProcess = [
  "Auditing underlying commercial agreements, purchase orders, and variation records",
  "Evaluating the legal merits, financial risks, and counter-claim exposures",
  "Distinguishing between contract breaches, debt claims, and consumer law issues",
  "Formulating a cost-effective commercial dispute resolution strategy",
  "Drafting clear, firm legal correspondence and formal notices of demand",
  "Conducting direct commercial negotiations and mediation sessions",
  "Drafting binding Deeds of Settlement, Release, or business separation documents",
  "Preparing court pleadings and representing your interests in Victorian jurisdictions",
];

const businessDisputeFaqs = [
  {
    question: "What is the difference between a civil business dispute and a corporate dispute?",
    answer:
      "A civil business dispute generally involves disagreements between a business and external parties—such as suppliers, customers, contractors, or landlords—regarding contracts, payments, or performance. A corporate dispute typically involves internal governance conflicts among shareholders, directors, or partners regarding voting rights, dividend distributions, management control, or breaches of fiduciary duties.",
  },
  {
    question: "Can commercial disputes be settled without public court exposure?",
    answer:
      "Yes. Most commercial disputes are resolved privately through confidential without-prejudice negotiations, mediation, or conciliation conferences. Resolving matters out of court protects your business's reputation, avoids public court records, and allows the parties to agree on flexible commercial terms that a judge cannot order.",
  },
  {
    question: "What steps should I take if a business partner or co-director dispute arises?",
    answer:
      "Review your Partnership Agreement, Shareholder Agreement, or Company Constitution immediately to identify dispute mechanisms, buy-out clauses, and voting rules. Avoid taking unilateral actions, such as locking bank accounts or diverting clients, without legal advice, as this can trigger emergency court injunctions or claims for breach of director duties under the Corporations Act 2001.",
  },
  {
    question: "How does the Australian Consumer Law affect B2B disputes in Victoria?",
    answer:
      "The Australian Consumer Law (ACL), found in Schedule 2 of the Competition and Consumer Act 2010, applies to business-to-business transactions in many circumstances. In particular, section 18 prohibits misleading or deceptive conduct in trade or commerce, and the unfair contract terms regime protects small businesses against one-sided standard-form contracts.",
  },
  {
    question: "What is a Deed of Settlement and Release in a business dispute?",
    answer:
      "A Deed of Settlement and Release is a formal, binding contract that resolves the dispute. It typically details any agreed financial settlement, return of property or inventory, non-disparagement covenants, strict confidentiality terms, and comprehensive mutual releases ensuring that neither party can revive the claims in the future.",
  },
  {
    question: "What courts in Melbourne handle business and commercial claims?",
    answer:
      "Minor civil and fair trading claims may be heard in the Victorian Civil and Administrative Tribunal (VCAT). General commercial disputes up to $100,000 are dealt with in the Magistrates' Court of Victoria. Intermediate and complex commercial litigation is handled by the County Court (Commercial Division) or the Supreme Court of Victoria (Commercial Court).",
  },
];

export default function BusinessRelatedDisputeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Business-Related Dispute Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(businessDisputeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Business-Related Dispute Lawyer Melbourne"
        intro={
          <>
            <p>
              Commercial friction, disputed contracts, and partner disagreements threaten business continuity
              and profitability if not handled with tactical care.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides practical, strategic civil dispute advice for Melbourne business owners,
              directors, sole traders, and commercial operators across Victoria.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Business-Related Dispute Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Advice",
          "Commercial Risk & Cost-Benefit Audits",
          "Confidential Pre-Court Negotiation",
          "VCAT & Victorian Court Representation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Commercial Dispute Advice</span>
            <h2>Resolving Business and Commercial Conflicts in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In business, disputes are sometimes an inevitable consequence of commercial growth and operational
              strain. A key client cancels an agreement without notice, a vendor delivers sub-standard components,
              or co-directors reach an impasse regarding the future direction of the enterprise.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Commercial disputes require an approach that balances legal strength with commercial pragmatism.
              At Bansal Lawyers, we assess the legal position, evaluate evidence, and pursue negotiation or
              litigation strategies that protect your business reputation, financial assets, and operational focus.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Explore our core commercial practice at our main{" "}
              <Link href="/commercial-lawyers-melbourne/">Commercial Lawyers Melbourne</Link> and{" "}
              <Link href="/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/">
                Commercial Dispute Lawyer Melbourne
              </Link>{" "}
              pages. For general civil litigation pathways, see our{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> overview.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Commercial Matters"
            title="Business Disputes We Assist With"
            intro="We assist small to medium enterprises, directors, and commercial operators across diverse sectors:"
          />
          <div className="matters-grid">
            {businessDisputeMatters.map((item) => (
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
            Every matter is assessed against the governing contracts, communications, statutory obligations,
            and commercial cash flow requirements of your business.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Methodology</span>
            <h2>Our Process for Resolving Business-Related Civil Disputes</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Navigating a commercial dispute demands methodical preparation and disciplined communication.
              We focus on:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {businessDisputeProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Where contractual breaches or payment failures are at issue, our{" "}
              <Link href="/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne/">
                Contract Dispute Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne/">
                Debt Dispute Lawyer Melbourne
              </Link>{" "}
              services deliver targeted tactical support.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Commercial Pragmatism</span>
            <h2>Protecting Cash Flow and Business Reputation</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Prolonged commercial litigation drains management focus and incurs substantial financial costs.
              Our priority is to achieve resolution early through structured without-prejudice negotiations,
              commercial settlement deeds, or formal mediation where possible.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              When a negotiated outcome is reached, we draft comprehensive Deeds of Settlement and Release
              that contain strict confidentiality, non-disparagement, and release terms. If litigation is
              unavoidable, we represent your business vigorously in Victorian courts.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              To discuss a business dispute with our commercial legal team, visit our{" "}
              <Link href="/contact/">Contact Bansal Lawyers</Link> page.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={businessDisputeFaqs} />
      </Section>
    </>
  );
}
