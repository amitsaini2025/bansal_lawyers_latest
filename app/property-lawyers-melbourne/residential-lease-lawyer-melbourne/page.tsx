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
  title: "Residential Lease Lawyer Melbourne | Tenancy & Rental Disputes",
  description:
    "Bansal Lawyers assists with residential lease issues, landlord and tenant matters, rental disputes, notices, bond issues and lease obligations.",
  path: "/property-lawyers-melbourne/residential-lease-lawyer-melbourne",
  keywords: [
    "Residential Lease Lawyer Melbourne",
    "Residential Lease Lawyers Melbourne",
    "Residential Tenancy Lawyer Melbourne",
    "Landlord Tenant Lawyer Melbourne",
    "Rental Dispute Lawyer Melbourne",
    "Property Lawyer Melbourne",
  ],
});

const residentialMatters = [
  "Understanding a residential rental agreement before signing",
  "Advice on landlord and tenant rights and obligations",
  "Unpaid rent and rent arrears",
  "Repairs, maintenance and urgent repairs",
  "Bond disputes and bond claims at the end of a tenancy",
  "Termination notices and the grounds for ending a tenancy",
  "Notices to remedy a breach of the rental agreement",
  "Rent increase notices and disputes about rent",
  "Access and entry to the property",
  "Concerns about possession of the property",
  "Preparing for a VCAT hearing where required",
  "Advice before sending or responding to a notice",
];

const noticePoints = [
  "What the notice is actually claiming or requiring",
  "The legal basis relied on, such as a breach or a termination ground",
  "The date the notice takes effect and any deadline to respond",
  "Whether the required notice period has been given",
  "What the other party can do if the notice is not complied with",
  "Whether the matter can be resolved without a hearing",
  "What evidence supports or answers the notice",
  "The steps available if the notice is disputed",
];

const residentialFaqs = [
  {
    question: "What does a residential tenancy lawyer do?",
    answer:
      "We advise rental providers and renters on their rights and obligations under a residential rental agreement and the applicable Victorian rules. That can include reviewing an agreement, advising on a notice, assisting with a bond or repair dispute, or preparing for a VCAT hearing.",
  },
  {
    question: "Can a landlord end a tenancy early?",
    answer:
      "Ending a tenancy requires a valid ground and the correct notice. The grounds and notice periods are set out in the legislation, and they differ depending on the reason and the type of agreement. A notice that does not comply with the requirements may not be effective.",
  },
  {
    question: "What happens to the bond at the end of a tenancy?",
    answer:
      "The bond is generally held by the Residential Tenancies Bond Authority and claimed at the end of the tenancy. If the parties agree on how it should be distributed, the claim is straightforward. If they do not, the dispute can be referred to VCAT, which will consider the condition of the property and the evidence.",
  },
  {
    question: "Who is responsible for repairs?",
    answer:
      "In most residential tenancies the rental provider is responsible for maintaining the property in good repair, and there are specific requirements for urgent repairs. What is required depends on the terms of the agreement and the nature of the issue, and the renter has obligations too, such as reporting damage.",
  },
  {
    question: "What should I do if I receive a breach notice?",
    answer:
      "Read it carefully and note the date and what it requires. Do not ignore it. Take advice before responding, because a reply that does not address the specific allegation, or that concedes a point, can affect your position. Where the notice is disputed, the response should set out your position clearly.",
  },
  {
    question: "Can rent be increased during a tenancy?",
    answer:
      "Rent can only be increased in accordance with the rules that apply to the agreement, including the required notice and any limits on how often an increase can occur. If you believe an increase does not comply, it is worth obtaining advice before the increase takes effect.",
  },
];

export default function ResidentialLeaseLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Residential Lease Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(residentialFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Residential Lease Lawyer Melbourne"
        intro={
          <>
            <p>
              Residential lease issues affect both rental providers and renters, and the rules that apply
              are specific.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists landlords and tenants in Melbourne with rental agreements, notices,
              bond disputes, repairs and possession issues.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Residential Lease Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Rental Providers and Renters",
          "Notices Explained Before You Act",
          "Bond and Repair Disputes",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Residential Tenancies</span>
            <h2>Residential Lease and Tenancy Advice</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Residential tenancies are governed by a detailed set of rules that set out what a rental
              provider and a renter can each do, and when. Those rules affect rent, repairs, access,
              bonds, notices and the way a tenancy can be brought to an end.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Problems often start with a notice. A notice that does not meet the requirements, or a
              response that does not address the right issue, can change the course of a dispute. Advice
              before a notice is sent or answered is usually more effective than advice afterwards.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We advise both sides of a residential tenancy. What is available in each case depends on the
              agreement, the notices exchanged, the evidence and the individual circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Residential Lease Matters We Assist With"
            intro="Our property team advises on a range of residential tenancy issues, including:"
          />
          <div className="matters-grid">
            {residentialMatters.map((item) => (
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
            <h2>Before You Send or Respond to a Notice</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Notices are central to residential tenancy disputes, and the detail matters. Before a notice
              is sent or answered, we work through:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {noticePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Where a matter is not resolved between the parties, it may proceed to VCAT. The tribunal
              process is designed to be accessible, but the outcome still turns on the documents, the
              notices and the evidence. Preparing properly for a hearing makes a real difference.
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
              Residential tenancy matters often move quickly. A notice period may be short, and a failure
              to respond within it can have consequences. Acting on advice before that point keeps the
              options open.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The same applies to the evidence. Records of the condition of the property, correspondence
              about repairs, and receipts for work carried out are all relevant if a bond or repair
              dispute proceeds. Gathering them early is easier than reconstructing them later.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a tenancy matter overlaps with a wider property dispute, we can also assist with
              property disputes and property notices.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq items={residentialFaqs} />
      </Section>
    </>
  );
}
