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
  title: "Property-Related Dispute Lawyer Melbourne | Civil Property Disputes",
  description:
    "Bansal Lawyers assists with property-related disputes, lease disputes, settlement issues, landlord-tenant disputes, legal notices and civil dispute advice.",
  path: "/civil-lawyers-melbourne/property-related-dispute-lawyer-melbourne",
  keywords: [
    "Property-Related Dispute Lawyer Melbourne",
    "Property Dispute Lawyer Melbourne",
    "Civil Property Dispute Lawyer Melbourne",
    "Property Lawyers Melbourne",
    "Lease Dispute Lawyer Melbourne",
    "Landlord Tenant Dispute Lawyer Melbourne",
  ],
});

const propertyDisputeMatters = [
  "Buyer and seller disputes under contracts of sale of real estate",
  "Settlement delays, default notices, and penalty interest claims",
  "Off-the-plan property disputes and sunset clause contestations",
  "Commercial lease disagreements, rent arrears, and outgoings disputes",
  "Landlord and commercial tenant lockouts and re-entry contestations",
  "Property damage, make-good claims, and repair obligation disputes",
  "Deposit forfeiture and repudiation of property purchase agreements",
  "Co-ownership and joint proprietor property sale disputes (section 225 VCAT)",
  "Easement, right-of-way, and property boundary disagreements",
  "Drafting and responding to formal property breach and rescission notices",
  "Negotiating Deeds of Settlement for delayed or failed property settlements",
  "VCAT building and property hearings and Victorian court proceedings",
];

const propertyDisputeProcess = [
  "Auditing contracts of sale, section 32 vendor statements, and lease agreements",
  "Verifying whether notice conditions, cooling-off periods, and deadlines were met",
  "Assessing the validity of rescission notices, default notices, or claims for damages",
  "Calculating financial liabilities including deposit loss, re-sale deficits, and interest",
  "Drafting formal legal letters and notices of response to opposing conveyancers or solicitors",
  "Conducting urgent without-prejudice negotiations to achieve settlement or deed of release",
  "Filing urgent applications in VCAT or the County/Supreme Court where injunctions are needed",
];

const propertyDisputeFaqs = [
  {
    question: "What happens if a buyer or seller cannot settle on the due date in Victoria?",
    answer:
      "If a party cannot complete settlement on the agreed date, the non-defaulting party typically issues a formal Notice of Default (often providing 14 days under standard Victorian contracts). The default notice specifies the breach, calculates penalty interest under the contract, and warns that failure to remedy will result in rescission of the contract, forfeiture of deposit, and potential liability for any resale deficiency.",
  },
  {
    question: "Can I terminate a property contract if the vendor's section 32 statement is inaccurate?",
    answer:
      "Under section 32K of the Sale of Land Act 1962 (Vic), a purchaser may have a statutory right to rescind a contract of sale prior to settlement if the vendor failed to supply a section 32 statement, gave false or misleading information, or failed to disclose a required matter, provided the purchaser acted reasonably. Strict conditions apply, and prompt legal advice is essential.",
  },
  {
    question: "Where are property-related disputes heard in Victoria?",
    answer:
      "Jurisdiction depends on the nature and value of the dispute. Many retail tenancy, residential lease, co-ownership, and domestic building disputes are heard by the Victorian Civil and Administrative Tribunal (VCAT). High-value contract of sale disputes, deposit claims, and specific performance actions are typically litigated in the County Court or Supreme Court of Victoria.",
  },
  {
    question: "How are commercial lease disputes regarding 'make-good' resolved?",
    answer:
      "Make-good disputes arise at the expiration of a commercial lease when the landlord and tenant disagree on the required state of repair, removal of tenant fit-outs, or reinstatement of the premises. Resolving these disputes requires a careful comparison of the original condition report, lease covenants, depreciation factors, and independent expert scope-of-work valuations.",
  },
  {
    question: "What is a co-ownership property dispute under Victorian law?",
    answer:
      "When joint proprietors or tenants in common cannot agree on whether to sell, renovate, or divide real property, Part IV of the Property Law Act 1958 (Vic) empowers VCAT to make orders for the sale of the land, division of proceeds, or physical partition, including accounting for mortgage payments and property improvements.",
  },
  {
    question: "Can property disputes be resolved out of court?",
    answer:
      "Yes. Most property disputes are resolved through urgent without-prejudice negotiations, deed of variation of settlement dates, or mediated Deeds of Settlement and Release. Out-of-court resolutions save substantial conveyancing delays, prevent property market devaluation risks, and avoid high court costs.",
  },
];

export default function PropertyRelatedDisputeLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne" },
    { label: "Property-Related Dispute Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(propertyDisputeFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Property-Related Dispute Lawyer Melbourne"
        intro={
          <>
            <p>
              Property transactions and leasing arrangements involve significant financial commitments.
              When disputes emerge, decisive and legally grounded action is vital to protect your assets.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers provides clear, strategic civil dispute advice for property buyers, sellers,
              landlords, commercial tenants, and co-owners across Melbourne and Victoria.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Property-Related Dispute Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Advice",
          "Contract of Sale & Lease Audits",
          "Urgent Default & Rescission Notice Advice",
          "VCAT & Victorian Court Representation",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Civil Property Disputes</span>
            <h2>Practical Legal Solutions for Victorian Property Conflicts</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Real estate transactions, leases, and co-ownership arrangements carry substantial financial stakes.
              When a buyer fails to obtain finance by the condition date, a vendor issues a default notice over
              a delayed settlement, or a commercial landlord and tenant dispute outgoings or repair obligations,
              the consequences of inaction can be severe.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              At Bansal Lawyers, we combine deep familiarity with Victorian property law and rigorous civil
              litigation skills. We analyse the contractual documents, evaluate statutory rights under the
              Sale of Land Act and Retail Leases Act, and advise you on immediate practical steps to protect
              your property rights.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For broader property advice, conveyancing, and leasing documentation, visit our dedicated{" "}
              <Link href="/property-lawyers-melbourne/">Property Lawyers Melbourne</Link> and{" "}
              <Link href="/property-lawyers-melbourne/property-dispute-lawyer-melbourne/">
                Property Dispute Lawyer Melbourne
              </Link>{" "}
              pages. To understand general dispute resolution, see our{" "}
              <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> overview.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Property Matters"
            title="Property-Related Disputes We Handle"
            intro="We assist purchasers, vendors, landlords, tenants, and co-owners with varied property conflicts:"
          />
          <div className="matters-grid">
            {propertyDisputeMatters.map((item) => (
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
            Every matter is assessed against the contract of sale or lease, the relevant statutory frameworks,
            and the individual financial exposures involved.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Response</span>
            <h2>Our Process in Handling Property-Related Civil Disputes</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Time is of the essence in property disputes, where contractual deadlines and statutory default
              periods run strictly. Our process prioritises:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {propertyDisputeProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If you need to serve or respond to a formal default notice, our{" "}
              <Link href="/civil-lawyers-melbourne/legal-notice-lawyer-melbourne/">
                Legal Notice Lawyer Melbourne
              </Link>{" "}
              service ensures compliance with contractual notice clauses. For out-of-court discussions, our{" "}
              <Link href="/civil-lawyers-melbourne/negotiation-support-lawyer-melbourne/">
                Negotiation Support Lawyer Melbourne
              </Link>{" "}
              team delivers commercial settlement solutions.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Urgent Action</span>
            <h2>Why Prompt Legal Advice is Critical in Property Disputes</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Missing a deadline under a 14-day default notice, failing to lodge a caveat when an equitable
              interest arises, or improperly withholding rent during a commercial lease dispute can lead to
              immediate contract termination and catastrophic financial loss.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We provide urgent, pragmatic counsel to stabilise the situation, explore variations or settlement
              extensions, and protect your legal position whether through structured negotiation or tribunal
              proceedings.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you are facing a property dispute or delayed settlement, contact our Melbourne CBD office via our{" "}
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
            <Faq items={propertyDisputeFaqs} />
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
                Encountering a property contract dispute, lease disagreement, or settlement delay in Melbourne?
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
