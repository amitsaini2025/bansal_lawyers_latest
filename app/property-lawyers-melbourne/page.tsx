import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  CtaSection,
  Faq,
  Hero,
  Section,
  SectionHeader,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createFaqSchema, createLegalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Property Lawyers Melbourne | Contracts, Leases & Property Disputes",
  description: "Bansal Lawyers assists with buying and selling property, contract review, conveyancing-related support, leases, settlement issues, disputes and property legal notices in Melbourne.",
  path: "/property-lawyers-melbourne",
  keywords: [
    "Property Lawyers Melbourne",
    "Property Lawyer Melbourne",
    "Property Law Firm Melbourne",
    "Conveyancing Lawyer Melbourne",
    "Property Contract Review Melbourne",
    "Commercial Lease Lawyer Melbourne",
    "Residential Lease Lawyer Melbourne",
    "Property Dispute Lawyer Melbourne",
    "Landlord and Tenant Lawyer Melbourne",
    "Property Settlement Lawyer Melbourne",
  ],
});

const propertyMatters = [
  { title: "Buying property", href: "/property-lawyers-melbourne/buying-property-lawyer-melbourne/" },
  { title: "Selling property", href: "/property-lawyers-melbourne/selling-property-lawyer-melbourne/" },
  { title: "Property contract review", href: "/property-lawyers-melbourne/property-contract-review-lawyer-melbourne/" },
  { title: "Conveyancing-related legal support", href: "/property-lawyers-melbourne/conveyancing-lawyer-melbourne/" },
  { title: "Commercial leases", href: "/property-lawyers-melbourne/commercial-lease-lawyer-melbourne/" },
  { title: "Residential lease issues", href: "/property-lawyers-melbourne/residential-lease-lawyer-melbourne/" },
  { title: "Property disputes", href: "/property-lawyers-melbourne/property-dispute-lawyer-melbourne/" },
  { title: "Settlement issues", href: "/property-lawyers-melbourne/property-settlement-lawyer-melbourne/" },
  { title: "Property transfers", href: "/property-lawyers-melbourne/property-transfer-lawyer-melbourne/" },
  { title: "Landlord and tenant matters", href: "/property-lawyers-melbourne/landlord-tenant-lawyer-melbourne/" },
  { title: "Property-related legal notices", href: "/property-lawyers-melbourne/property-legal-notice-lawyer-melbourne/" },
];

const propertySections = [
  {
    id: "buying-property",
    title: "Buying Property",
    paragraphs: [
      "Buying property is a major decision. Before signing or proceeding, it is important to understand the contract, conditions, settlement terms, finance dates, special conditions, title details and your legal obligations.",
      "Bansal Lawyers assists buyers with legal advice, document review and an explanation of contract terms. We can identify issues that may affect the purchase and advise on settlement concerns so you can make an informed decision.",
    ],
  },
  {
    id: "selling-property",
    title: "Selling Property",
    paragraphs: [
      "Selling property calls for careful document preparation and a clear understanding of your obligations. The contract, disclosure documents, settlement conditions, buyer requests, special conditions and transfer-related issues all need attention.",
      "We assist sellers with reviewing documents, understanding the terms of a sale and addressing legal issues that arise before settlement. What is needed will depend on the property and the proposed transaction.",
    ],
  },
  {
    id: "property-contract-review",
    title: "Property Contract Review",
    paragraphs: [
      "Many property problems begin when a buyer or seller signs without fully understanding the contract. A review before signing gives you a chance to ask questions about the terms and consider their effect on the transaction.",
      "We can review the purchase price, deposit terms, finance conditions, settlement date, special conditions, default clauses, title and ownership details, inclusions and exclusions, and the obligations of the vendor and purchaser. We can also explain cooling-off rights where they apply; those rights depend on the circumstances of the sale.",
    ],
  },
  {
    id: "conveyancing-support",
    title: "Conveyancing-Related Legal Support",
    paragraphs: [
      "Transferring ownership involves legal steps and documents as well as practical deadlines. Conveyancing-related legal support can help you understand what the contract requires and where an issue needs attention.",
      "Bansal Lawyers can provide legal advice connected to the conveyancing process, including contract review, settlement issues, property transfers and concerns about related documents. We will discuss the scope of assistance needed for your matter.",
    ],
  },
  {
    id: "commercial-leases",
    title: "Commercial Leases",
    paragraphs: [
      "A commercial lease can create long-term obligations for a landlord, tenant or business owner. It is worth reviewing the terms before signing, rather than discovering a difficult obligation once the business is operating.",
      "Important terms include rent and outgoings, the lease term, renewal options, fit-out and maintenance responsibilities, default clauses, assignment or transfer of the lease, make-good obligations and termination rights. We help clients understand these terms and assess potential dispute risks. Depending on the premises and lease, Victorian retail leasing rules may also be relevant.",
    ],
  },
  {
    id: "residential-lease-issues",
    title: "Residential Lease Issues",
    paragraphs: [
      "Residential lease issues can affect both rental providers and renters. Questions may arise about rental obligations, notices, repairs, the bond, termination, rent disputes or possession of the property.",
      "Advice can help you understand the agreement, your rights and obligations under the applicable Victorian rules, and the steps available in your circumstances.",
    ],
  },
  {
    id: "property-disputes",
    title: "Property Disputes",
    paragraphs: [
      "Addressing a property dispute early may help keep it from becoming more costly or stressful. Disputes can arise between buyers and sellers, landlords and tenants, or other parties over contracts, leases, settlement, property damage, payments, or boundary and ownership concerns where relevant.",
      "We can review documents and legal notices, advise on negotiation and possible settlement, and explain court or tribunal-related steps if they are required. The appropriate approach depends on the evidence, the parties and the outcome you are seeking.",
    ],
  },
  {
    id: "settlement-issues",
    title: "Settlement Issues",
    paragraphs: [
      "A missed settlement date, finance delay, document issue or transfer concern can affect a property transaction. Disagreements between parties or a failure to meet a contract condition can also put settlement at risk.",
      "Bansal Lawyers can review the contract and relevant correspondence, explain your obligations and assist you in understanding your options when a settlement problem arises. Deadlines matter, so it is sensible to seek advice promptly.",
    ],
  },
  {
    id: "property-transfers",
    title: "Property Transfers",
    paragraphs: [
      "A property transfer may involve a change in ownership, a family arrangement, a business structure or a deceased estate-related matter where relevant. Each situation can have different document and legal requirements.",
      "We can help you consider the documents and legal questions involved. The appropriate process depends on why the property is being transferred, who is involved and the circumstances of the ownership change.",
    ],
  },
  {
    id: "landlord-and-tenant",
    title: "Landlord and Tenant Matters",
    paragraphs: [
      "Landlord and tenant matters arise in both commercial and residential settings. They may concern lease terms, unpaid rent, repairs, access, bond disputes, termination, alleged breaches or disagreements about each party’s obligations.",
      "We can review the lease, notices and correspondence, explain the relevant obligations and discuss practical next steps. Different rules may apply to commercial and residential arrangements.",
    ],
  },
  {
    id: "property-legal-notices",
    title: "Property-Related Legal Notices",
    paragraphs: [
      "A property-related notice should be reviewed carefully before it is sent or answered. An unclear or rushed notice can create risk, particularly where the contract or legislation sets a deadline or requires particular wording.",
      "We assist with lease notices, breach notices, demand letters, termination notices, settlement-related notices, landlord and tenant notices, property dispute notices and responses to notices. Reviewing the documents and available evidence before sending a notice can help clarify the legal position and the next step.",
    ],
  },
];

const propertyFaqs = [
  { question: "Can Bansal Lawyers help with buying property?", answer: "Yes. We assist buyers with contract and document review, legal advice, settlement concerns and identifying issues before they proceed." },
  { question: "Do you assist with selling property?", answer: "Yes. We help sellers review sale documents, understand their obligations and address legal issues connected to the sale." },
  { question: "Can you review a property contract before I sign?", answer: "Yes. We can explain the contract terms, conditions, deadlines and potential risks before you make a commitment." },
  { question: "Do you provide conveyancing-related legal support?", answer: "Yes. We provide legal advice connected to contract review, property transfers, settlement issues and relevant documents. We can discuss the scope of assistance for your matter." },
  { question: "Can you help with commercial lease matters?", answer: "Yes. We assist landlords, tenants and business owners with lease terms, obligations and disputes. A review before signing can help clarify longer-term commitments." },
  { question: "Do you assist with residential lease issues?", answer: "Yes. We can advise on rental obligations, repairs, bonds, notices, termination and other residential tenancy concerns." },
  { question: "Can you help with property disputes and settlement issues?", answer: "Yes. We review the relevant documents and deadlines, explain your options and advise on negotiation or further steps where appropriate." },
  { question: "Can you prepare or respond to property-related legal notices?", answer: "Yes. We can review the evidence and relevant documents before advising on a notice or response. The requirements depend on the type of notice and your circumstances." },
];

export default function PropertyLawyersMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(propertyFaqs)} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Property Lawyers Melbourne"
        intro={
          <>
            <p>Bansal Lawyers assists buyers, sellers, property owners, investors, landlords, tenants, business owners and individuals with property law matters in Melbourne.</p>
            <p style={{ marginTop: "0.75rem" }}>We advise on buying and selling property, property contract review, conveyancing-related legal support, commercial leases, residential lease issues, property disputes, settlement issues, property transfers, landlord and tenant matters, and property-related legal notices.</p>
          </>
        }
        primaryAction={{ label: "Speak With a Property Lawyer", href: "/contact/" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <Section tone="white">
        <Container>
            <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
              <h2>Practical Legal Advice for Property Matters</h2>
            <p style={{ lineHeight: "1.75", marginTop: "1rem" }}>Property matters often involve significant financial and legal decisions. Contracts, leases, settlements, transfers, disputes and legal notices deserve careful review before you sign, respond or take action.</p>
            <p style={{ lineHeight: "1.75", marginTop: "0.75rem" }}>Unclear contract terms, missed deadlines, lease issues, settlement problems, transfer errors, landlord and tenant disputes or poorly handled notices can create avoidable legal and financial risk. We focus on the documents and decisions that matter to you, and explain the next steps in plain language.</p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader eyebrow="How we can help" title="Property Law Matters We Assist With" intro="Bansal Lawyers can assist with:" />
          <div className="matters-grid">
            {propertyMatters.map((matter) => (
              <Link key={matter.title} href={matter.href} className="matter-item" title={`Explore ${matter.title}`}>
                <svg className="matter-item__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{matter.title}</span>
                <svg className="matter-item__arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            ))}
          </div>
          <p style={{ maxWidth: "52rem", margin: "2rem auto 0", lineHeight: "1.75" }}>Each matter is reviewed in light of the contract, documents, deadlines, property type, parties involved, risks and your personal or commercial circumstances.</p>
        </Container>
      </Section>

      {propertySections.map((section, index) => (
        <Section key={section.id} tone={index % 2 === 0 ? "white" : "warm"} id={section.id}>
          <Container>
            <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} style={{ lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1rem" }}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <h2>Why Choose Bansal Lawyers for Property Law Matters?</h2>
            <p style={{ lineHeight: "1.75", marginTop: "1rem" }}>We offer clear, practical property legal advice to Melbourne buyers, sellers, landlords, tenants, investors and business owners. Our work begins with careful review of the contracts, leases, documents and deadlines that affect your decision.</p>
            <p style={{ lineHeight: "1.75", marginTop: "1rem" }}>Whether you are buying or selling, seeking property contract review or conveyancing-related legal support, dealing with a lease, dispute, settlement issue, transfer, landlord and tenant matter or property-related legal notice, we explain the legal position before you sign, respond or take action. We handle property documents and disputes professionally, with advice grounded in your circumstances.</p>
            <p style={{ marginTop: "1.5rem" }}>Learn more <Link href="/about/">about Bansal Lawyers</Link>. For related business and dispute matters, see our <Link href="/commercial-lawyers-melbourne/">Commercial Lawyers Melbourne</Link> and <Link href="/civil-lawyers-melbourne/">Civil Lawyers Melbourne</Link> pages, or return to <Link href="/property-lawyers-melbourne/">Property Lawyers Melbourne</Link>.</p>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Speak With Property Lawyers in Melbourne"
        text="Before buying or selling property, signing a lease, responding to a notice, dealing with a settlement issue, transferring property or handling a dispute, speak with us about the documents and next steps."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Property Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Property Solicitor"
        badges={["Contract & Section 32 reviews", "Fast turnaround for auction deadlines", "Melbourne CBD & virtual appointments"]}
      />

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={propertyFaqs} />
            <p style={{ marginTop: "2rem" }}>Need advice on your documents? <Link href="/contact/">Contact Bansal Lawyers</Link> to discuss your matter.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
