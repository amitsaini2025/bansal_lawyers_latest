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
  title: "Property Transfer Lawyer Melbourne | Ownership Transfer Advice",
  description:
    "Bansal Lawyers assists with property transfer advice, ownership changes, transfer documents, settlement concerns and property legal support in Melbourne.",
  path: "/property-lawyers-melbourne/property-transfer-lawyer-melbourne",
  keywords: [
    "Property Transfer Lawyer Melbourne",
    "Property Transfer Lawyers Melbourne",
    "Property Ownership Transfer Melbourne",
    "Conveyancing Lawyer Melbourne",
    "Property Lawyer Melbourne",
    "Transfer of Property Lawyer Melbourne",
  ],
});

const transferSituations = [
  "A transfer connected to the sale or purchase of a property",
  "A transfer between family members",
  "Adding or removing a name on the title",
  "A transfer following a change in a relationship",
  "A transfer involving a company or trust structure",
  "A transfer connected to a deceased estate where relevant",
  "A transfer arising from a court or tribunal order",
  "A correction to title details where an error has occurred",
  "A transfer where a mortgage or charge affects the property",
  "A transfer where duty or exemption questions arise",
];

const transferPoints = [
  "The current registered owner and how the title is held",
  "The reason for the transfer, which determines the process",
  "Whether the transfer attracts duty and whether an exemption may apply",
  "Whether a lender's consent or a discharge of mortgage is required",
  "Whether the transfer requires a plan or survey document",
  "Whether any restriction on the title affects the transfer",
  "The documents required for lodgement and registration",
  "Whether the parties' circumstances raise any additional issue",
];

const transferFaqs = [
  {
    question: "What is a property transfer?",
    answer:
      "A property transfer is the document and process by which ownership of land changes from one party to another. It is lodged with the land registry so that the register reflects the new owner. The steps involved depend on why the transfer is taking place.",
  },
  {
    question: "Does every property transfer involve a sale?",
    answer:
      "No. Transfers also occur between family members, following a relationship change, as part of a business or trust restructure, or under a court order. Because the reason for the transfer affects the process and the documents required, it is important to explain your circumstances from the outset.",
  },
  {
    question: "Does stamp duty apply to a property transfer?",
    answer:
      "Duty may apply, depending on the reason for the transfer and the relationship between the parties. Some transfers attract concessions or exemptions, but the rules are specific and the eligibility requirements must be met. Because duty is assessed on the particular circumstances, it is worth obtaining advice before the documents are prepared.",
  },
  {
    question: "Can a name be added to or removed from a title?",
    answer:
      "Yes, although the process and the consequences depend on the circumstances. Adding a name can affect ownership rights, and removing one may require the consent of a lender or another party. There can also be duty and tax implications, so the position should be considered carefully beforehand.",
  },
  {
    question: "Why do incorrect transfer documents cause problems?",
    answer:
      "A transfer that does not match the title details, names the wrong party or omits a required consent may be rejected at lodgement. That causes delay, and correcting a registered document afterwards is more involved than getting it right initially. Reviewing the documents before lodgement avoids most of these issues.",
  },
  {
    question: "What information do I need to provide?",
    answer:
      "The title details, the names of the parties and how the property is currently held, the reason for the transfer, and any mortgage or other interest affecting the land. If duty or an exemption is relevant, information about the parties' circumstances will also be needed.",
  },
];

export default function PropertyTransferLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Property Transfer Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(transferFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Property Transfer Lawyer Melbourne"
        intro={
          <>
            <p>
              A property transfer needs to be prepared correctly and match the title details, because the
              documents are lodged with the land registry.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists property owners in Melbourne with transfer documents, ownership
              changes and the issues that arise from them.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Property Transfer Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Transfers for Sales and Private Arrangements",
          "Title and Ownership Checks",
          "Documents Prepared Correctly",
          "Melbourne CBD Office",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Ownership Changes</span>
            <h2>Property Transfer Advice in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A property transfer records a change of ownership. It may follow a sale, a family
              arrangement, a relationship change, a business restructure or a court order. The document
              itself looks straightforward, but the requirements around it depend on why the transfer is
              happening.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We review the title, confirm how the property is currently held, and explain what the
              particular transfer requires. That includes whether a lender&apos;s consent or a discharge
              is needed, whether the title is subject to any restriction, and what documents must be
              lodged.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The advice depends entirely on the reason for the transfer and the parties involved. Because
              those circumstances affect the documents, the duty position and the practical steps, we will
              ask about them before advising.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Transfer Situations We Assist With"
            intro="We advise on transfers arising from a range of circumstances, including:"
          />
          <div className="matters-grid">
            {transferSituations.map((item) => (
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
            <span className="eyebrow">What We Check</span>
            <h2>What a Transfer Requires</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The requirements vary with the transaction, but we generally work through the following:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {transferPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Duty is often the point that surprises people. Whether duty applies, and whether a concession
              or exemption is available, depends on the relationship between the parties and the reason for
              the transfer. Those questions should be considered before the documents are prepared, not
              after they are lodged.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Risk</span>
            <h2>Risks of Incorrect Transfer Documents</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A transfer must match the registered title. If the names, the property description or the
              way the title is held do not align, the document may be rejected when it is lodged. That
              causes delay, and in a transaction with a settlement date attached, delay has consequences.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              A transfer can also carry consequences the parties did not intend. Changing who is on the
              title affects ownership rights, and it can affect the position on a mortgage, on duty and on
              any future dealings with the property. Those effects should be understood before the transfer
              takes place.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Where a transfer forms part of a transaction, we can also assist with contract review and
              settlement issues.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={transferFaqs} />
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
                Changing ownership of a property? Talk to us about the documents first.
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
