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
  title: "Commercial Lease Lawyer Melbourne | Lease Review & Advice",
  description:
    "Bansal Lawyers assists with commercial lease review, rent and outgoings, renewal options, fit-out obligations, disputes and lease advice in Melbourne.",
  path: "/property-lawyers-melbourne/commercial-lease-lawyer-melbourne",
  keywords: [
    "Commercial Lease Lawyer Melbourne",
    "Commercial Lease Lawyers Melbourne",
    "Lease Review Lawyer Melbourne",
    "Business Lease Lawyer Melbourne",
    "Commercial Property Lawyer Melbourne",
    "Property Lawyer Melbourne",
  ],
});

const leaseMatters = [
  "Reviewing a commercial lease before signing",
  "Advice for tenants taking on new premises",
  "Advice for landlords preparing a lease",
  "Rent, rent review and market review clauses",
  "Outgoings, apportionment and what is recoverable",
  "Lease term, options and renewal rights",
  "Fit-out, alterations and landlord approval",
  "Maintenance and repair obligations",
  "Assignment and subletting of the lease",
  "Make-good obligations at the end of the term",
  "Default, breach and termination provisions",
  "Commercial lease disputes and notices",
];

const leaseTerms = [
  "The premises, including the exact area and any car parking included",
  "The lease term, commencement date and any options to renew",
  "The rent, the rent review method and the review dates",
  "Outgoings and how the tenant's share is calculated",
  "The permitted use of the premises and any restrictions",
  "Fit-out obligations, approvals and who pays for the works",
  "Who is responsible for repairs and maintenance, and to what standard",
  "Whether the lease can be assigned or sublet, and on what conditions",
  "Make-good obligations at the end of the term",
  "What happens if the tenant defaults or the lease is terminated early",
];

const leaseFaqs = [
  {
    question: "Why should a commercial lease be reviewed before signing?",
    answer:
      "A commercial lease often runs for several years and creates long-term financial obligations. Once it is signed, the terms are difficult to change. A review before signing lets you check the rent and outgoings, the obligations you are taking on, and the conditions attached to any option to renew.",
  },
  {
    question: "What are outgoings and how are they charged?",
    answer:
      "Outgoings are the costs of operating the building, such as rates, insurance, repairs and management fees. In many commercial leases the tenant pays a share, calculated by reference to the area leased. What can be recovered and how it is apportioned depends on the lease, so the wording should be checked carefully.",
  },
  {
    question: "How do options to renew work?",
    answer:
      "An option gives the tenant the right to renew the lease for a further term, provided the conditions in the lease are met. Those conditions often include giving notice within a specified window and not being in default. Missing the notice period can mean the option is lost, so the dates matter.",
  },
  {
    question: "What is a make-good obligation?",
    answer:
      "A make-good obligation requires the tenant to restore the premises to a particular condition at the end of the lease. The wording determines what is actually required, and it can involve significant cost. It is worth understanding the obligation before committing to a fit-out.",
  },
  {
    question: "Do Victorian retail leasing rules apply to my lease?",
    answer:
      "The Retail Leases Act applies to certain retail premises and to leases that meet the statutory requirements. Whether it applies to your lease depends on the premises, the permitted use and other factors. The rules affect matters such as disclosure, rent reviews and dispute resolution, so it is worth confirming the position.",
  },
  {
    question: "Can a commercial lease be assigned to someone else?",
    answer:
      "It depends on the lease. Many commercial leases allow assignment only with the landlord's consent, and some set out the process and the information the proposed assignee must provide. Where the business is being sold, the lease assignment is often a key part of the transaction.",
  },
];

export default function CommercialLeaseLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Commercial Lease Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(leaseFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Commercial Lease Lawyer Melbourne"
        intro={
          <>
            <p>
              A commercial lease can commit a business to years of rent, outgoings and other obligations.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists landlords and tenants in Melbourne with commercial lease review,
              renewal options, make-good obligations and lease disputes.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Commercial Lease Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Landlord and Tenant Advice",
          "Lease Review Before Signing",
          "Rent, Outgoings and Renewals",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Commercial Leases</span>
            <h2>Commercial Lease Advice in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Taking on commercial premises is often one of the larger commitments a business makes.
              Unlike a residential tenancy, a commercial lease is generally a negotiated document, and the
              terms are largely whatever the parties agree.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              That means the protections you have depend on what the lease actually says. Rent, outgoings,
              repairs, renewal and make-good obligations are all determined by the wording, and a clause
              that seems minor at signing can carry significant cost later.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We advise tenants and landlords on lease terms and on the issues that arise during a lease.
              What matters most depends on the premises, the permitted use and the terms proposed.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Commercial Lease Matters We Assist With"
            intro="Our property team advises on a range of commercial lease issues, including:"
          />
          <div className="matters-grid">
            {leaseMatters.map((item) => (
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
            <h2>What to Check in a Commercial Lease</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The terms that matter depend on the premises and the business, but the following should be
              clear before you sign:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {leaseTerms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Rent reviews deserve particular attention. A market review can move the rent in either
              direction, while a fixed increase is predictable. The method, the timing and any ratchet
              provision all affect what you will be paying over the term. Depending on the premises and the
              permitted use, Victorian retail leasing legislation may also apply and impose additional
              requirements on the parties.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>Business Risks in an Unclear Lease</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A lease that is unclear about outgoings can produce costs the tenant did not anticipate. A
              lease that is silent on assignment can make it difficult to sell the business. A make-good
              obligation that is drafted broadly can require restoration work well beyond what the tenant
              expected.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Renewal options carry their own risk. Where the notice period is missed, the option may be
              lost, and the tenant may be left negotiating a new lease from a weaker position.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a dispute does arise, we can also assist with landlord and tenant matters, property
              notices and property disputes.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={leaseFaqs} />
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
                Been given a commercial lease to sign? Have it reviewed first.
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
