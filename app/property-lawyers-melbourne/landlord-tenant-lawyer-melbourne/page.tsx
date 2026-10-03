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
  title: "Landlord and Tenant Lawyer Melbourne | Lease & Rental Disputes",
  description:
    "Bansal Lawyers assists landlords and tenants with lease issues, rental disputes, notices, unpaid rent, repairs, bond issues and property disputes.",
  path: "/property-lawyers-melbourne/landlord-tenant-lawyer-melbourne",
  keywords: [
    "Landlord and Tenant Lawyer Melbourne",
    "Landlord Lawyer Melbourne",
    "Tenant Lawyer Melbourne",
    "Lease Dispute Lawyer Melbourne",
    "Rental Dispute Lawyer Melbourne",
    "Property Lawyer Melbourne",
  ],
});

const tenancyMatters = [
  "Reviewing a lease or rental agreement before it is signed",
  "Commercial landlord and tenant obligations",
  "Residential landlord and tenant obligations",
  "Unpaid rent and rent arrears",
  "Repairs, maintenance and who is responsible",
  "Access and entry to the premises",
  "Bond and security deposit disputes",
  "Notices to remedy a breach of the lease",
  "Termination notices and the grounds relied on",
  "Lease disputes about terms or obligations",
  "Rent disputes and rent review questions",
  "VCAT or tribunal-related steps where required",
];

const noticeReview = [
  "The type of notice and the legal basis for it",
  "Whether the required notice period has been given",
  "The date the notice takes effect",
  "What the notice requires the other party to do",
  "Whether the lease or the legislation imposes extra requirements",
  "What evidence supports the position",
  "What can be done if the notice is disputed",
  "Whether the matter could be resolved without a hearing",
];

const tenancyFaqs = [
  {
    question: "What is the difference between a commercial and a residential lease?",
    answer:
      "A commercial lease is generally a negotiated agreement between a landlord and a business tenant, and the terms are largely whatever the parties agree. A residential tenancy is governed by specific legislation that sets out the rights and obligations of rental providers and renters. The rules, the notice requirements and the dispute process differ between the two.",
  },
  {
    question: "Can a landlord evict a tenant without a valid reason?",
    answer:
      "Ending a tenancy requires a valid ground and the correct notice. What grounds are available and what notice period applies depends on the type of tenancy and the reason. A notice that does not comply with the requirements may not be effective, so the position should be checked before a notice is issued.",
  },
  {
    question: "What happens if rent is not paid?",
    answer:
      "The response depends on the lease and the amount outstanding. Usually a breach notice is issued, giving the tenant an opportunity to remedy the situation. If the rent remains unpaid, further steps may be available. The process and the notice periods differ between commercial and residential tenancies.",
  },
  {
    question: "Who pays for repairs in a rental property?",
    answer:
      "In residential tenancies the rental provider is generally responsible for maintaining the property in good repair, with specific requirements for urgent repairs. In a commercial lease, responsibility depends on what the lease says, and many leases place repair obligations on the tenant. The lease wording determines the position.",
  },
  {
    question: "How are bond disputes resolved?",
    answer:
      "If the parties agree on how the bond should be distributed, the claim is straightforward. If they do not, the dispute can be referred to VCAT, which considers the condition of the property and the evidence. Records of the condition at the start and end of the tenancy are important in those matters.",
  },
  {
    question: "Should I get advice before sending a notice?",
    answer:
      "It is advisable. A notice must meet the requirements that apply to it, and an incorrect notice can delay or weaken your position. Advice before the notice is issued is usually more effective than trying to correct the position afterwards.",
  },
];

export default function LandlordTenantLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Landlord and Tenant Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(tenancyFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Landlord and Tenant Lawyer Melbourne"
        intro={
          <>
            <p>
              Landlord and tenant matters arise in both commercial and residential settings, and different
              rules apply to each.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists landlords and tenants in Melbourne with lease obligations, unpaid
              rent, repairs, bond disputes and notices.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Landlord and Tenant Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Commercial and Residential Tenancies",
          "Notices Prepared and Reviewed",
          "Rent, Repairs and Bond Disputes",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Tenancy Matters</span>
            <h2>Landlord and Tenant Advice in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A tenancy creates an ongoing relationship, and most of the time it runs without difficulty.
              When a problem does arise, it usually concerns one of a small number of issues: rent,
              repairs, access, the bond, or the way the tenancy is being brought to an end.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              How those issues are dealt with depends on whether the tenancy is commercial or residential.
              A commercial lease is largely governed by its own terms, while a residential tenancy is
              subject to specific legislation that sets out what each party can do and when.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We advise both landlords and tenants. The steps available depend on the lease, the notices
              exchanged, the evidence and the individual circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Landlord and Tenant Matters We Assist With"
            intro="Our property team advises on a range of tenancy issues, including:"
          />
          <div className="matters-grid">
            {tenancyMatters.map((item) => (
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
            <span className="eyebrow">Notices</span>
            <h2>Reviewing a Tenancy Notice</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Notices are central to tenancy disputes, and the detail determines whether they are
              effective. Before a notice is sent or answered, we work through:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {noticeReview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Where a matter is not resolved between the parties, it may proceed to VCAT. The tribunal
              process is designed to be accessible, but the outcome still turns on the lease, the notices
              and the evidence. Preparing properly for a hearing makes a real difference to the result.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>Why Early Advice Helps</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Tenancy matters move quickly. Notice periods are fixed, and a failure to act within them can
              close off options that were available earlier. The same applies to the evidence: records of
              the condition of the premises, correspondence about repairs, and receipts for work carried
              out are all relevant if a dispute proceeds.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              It is also worth remembering that the consequences differ between the two types of tenancy.
              A step that is available in a commercial lease may not be available in a residential
              tenancy, and the reverse is also true.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a tenancy matter forms part of a wider dispute, we can also assist with property
              disputes and property notices.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={tenancyFaqs} />
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
                Landlord or tenant with a lease issue? Talk to us about the next step.
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
