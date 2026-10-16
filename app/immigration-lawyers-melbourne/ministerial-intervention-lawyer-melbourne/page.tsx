import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  Container,
  CtaSection,
  Faq,
  Hero,
  ProcessSteps,
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
  title:
    "Ministerial Intervention Australia: Process, Documents, Deadlines & Costs (s351 & s501J)",
  description:
    "Learn how Ministerial Intervention works under sections 351 and 501J. Understand eligibility, required documents, process, bridging visas and costs after an ART decision. Expert advice from Bansal Lawyers.",
  path: "/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne",
  keywords: [
    "Ministerial Intervention Australia",
    "Section 351 Ministerial Intervention",
    "Section 501J Intervention",
    "Ministerial Intervention Lawyer Melbourne",
    "ART decision Ministerial Intervention",
    "Immigration Lawyer Melbourne",
  ],
});

const eligibilityCriteria = [
  "Parent of an Australian citizen or permanent resident child (minor at time of request)",
  "Skills for an occupation on the relevant skilled lists with current employment evidence",
  "Carer of an Australian citizen with a qualifying Carer Visa Assessment Certificate",
  "Certain long-term residence and health or family circumstances",
];

const documentsRequired = [
  "The ART decision",
  "Identity documents",
  "Evidence supporting the specific criterion (birth certificates, citizenship evidence, skills assessments, employment documents, medical reports, statutory declarations)",
  "NAATI-accredited English translations where needed",
];

const processSteps = [
  {
    title: "Confirm ART decision",
    description:
      "Confirm a relevant ART decision exists and check for section 12 barriers.",
  },
  {
    title: "Identify the power",
    description:
      "Identify the correct power (usually s351 or s501J) and the section 13 criterion you rely on.",
  },
  {
    title: "Prepare the request",
    description:
      "Prepare a written request specifying the persons included, the power, the ART decision and the criteria.",
  },
  {
    title: "Lodge the request",
    description:
      "Lodge online via the Department's Contact the Minister form or by post to the Minister for Immigration and Citizenship, PO Box 6022, House of Representatives, Parliament House, Canberra ACT 2600.",
  },
];

const interventionFaqs = [
  {
    question: "Does Ministerial Intervention guarantee a visa?",
    answer:
      "No. It is discretionary and most requests are not referred or granted.",
  },
  {
    question: "Can I apply for Ministerial Intervention without an ART decision?",
    answer:
      "No. A relevant tribunal decision is required to enliven the power.",
  },
  {
    question: "Will a Ministerial Intervention request stop my removal?",
    answer:
      "No, unless the Minister makes a procedural decision to consider the request.",
  },
];

export default function MinisterialInterventionLawyerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Immigration Lawyers Melbourne", href: "/immigration-lawyers-melbourne" },
    { label: "Ministerial Intervention" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(interventionFaqs)} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Sections 351 & 501J · After ART"
        title="Ministerial Intervention in Australia (Sections 351 & 501J)"
        intro={
          <>
            <p>
              <strong>Ministerial Intervention</strong> is a discretionary power
              under the <em>Migration Act 1958</em> that allows the Minister for
              Immigration to substitute a more favourable decision after an
              adverse decision by the Administrative Review Tribunal (ART). It
              is most commonly used under <strong>section 351</strong> (visa
              refusals and cancellations, including protection matters) or{" "}
              <strong>section 501J</strong> (character matters).
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              The power is <strong>non-compellable</strong>. The Minister has no
              obligation to consider or intervene in any case, and a decision not
              to intervene is generally not reviewable.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Solicitor", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Section 351 and section 501J",
          "Guideline assessment before lodging",
          "Documents, deadlines and costs advice",
          "Melbourne CBD and remote conferences",
        ]}
      />

      <Section tone="white" id="when-to-request">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Eligibility</span>
            <h2>When Can You Request Ministerial Intervention?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              You can only request Ministerial Intervention after a relevant ART
              decision has been made. It is <strong>not</strong> available if you
              missed the ART deadline or as a substitute for merits review. See
              our{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART appeal
              </Link>{" "}
              page if tribunal review is still available.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Under the current Ministerial Instructions (September 2025), the
              Department only refers requests that meet at least one of the
              specific criteria in section 13 of the Instructions. Common
              examples include:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {eligibilityCriteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Requests that fall outside these criteria, or that meet any
              &ldquo;inappropriate to refer&rdquo; circumstances (for example being unlawful
              when a bridging visa could have been applied for, or making a
              repeat request within two years), are finalised without referral to
              the Minister.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="process">
        <Container>
          <SectionHeader
            eyebrow="How it works"
            title="Ministerial Intervention Process"
            intro="A first request can support a Bridging Visa E in some cases, but a request does not automatically grant a bridging visa or stop removal. Ensure you remain a lawful non-citizen throughout."
          />
          <ProcessSteps items={processSteps} />
          <p style={{ textAlign: "center", marginTop: "1.75rem", color: "var(--ink-secondary)", fontSize: "1rem", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            If detention or removal is imminent, get urgent advice on our{" "}
            <Link
              href="/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              detention and removal
            </Link>{" "}
            page.
          </p>
        </Container>
      </Section>

      <Section tone="white" id="documents">
        <Container>
          <SectionHeader
            eyebrow="Evidence"
            title="Documents Required"
            intro="Provide certified copies of:"
          />
          <div className="matters-grid">
            {documentsRequired.map((doc) => (
              <div key={doc} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="deadlines-costs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Timing & fees</span>
            <h2>Deadlines and Costs</h2>
            <div className="deadline-alert-box" style={{ marginTop: "1.25rem" }}>
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <strong>No fixed statutory deadline — practical urgency is high</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  Bridging visas after an adverse ART decision are often limited
                  to 28 or 35 days. Remaining unlawful can make the request
                  inappropriate to refer.
                </p>
              </div>
            </div>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1.5rem" }}>
              There is <strong>no Departmental application fee</strong>.
              Professional fees for preparing a strong request vary depending on
              complexity. Bansal Lawyers provides fixed-fee quotes after assessing
              prospects against the current Instructions.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Character-related requests under section 501J are assessed with our{" "}
              <Link
                href="/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                section 501 character
              </Link>{" "}
              practice. Where court options remain, see{" "}
              <Link
                href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                judicial review
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Contact Bansal Lawyers"
        text="These pathways involve strict deadlines and technical legal requirements. Early advice significantly improves available options. Contact Bansal Lawyers for an assessment of your circumstances."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call the firm", href: "tel:+61422905860" }}
        phone="1300 226 725"
        phoneLabel="Immigration solicitors"
        badges={["Guideline screening", "Section 351", "Section 501J"]}
      />

      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Related work</span>
            <h2 style={{ marginBottom: "1.5rem" }}>Related immigration legal services</h2>
            <div className="practice-areas-grid">
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>ART Review</h3>
                <p>Merits review in the Administrative Review Tribunal before ministerial options.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Detention & Bridging Visas</h3>
                <p>Stay lawful while a request is prepared, including bridging visa advice.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Section 501 Character</h3>
                <p>Character cancellations and section 501J ministerial requests.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Judicial Review</h3>
                <p>Court challenges where jurisdictional error may still be available.</p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="faqs">
        <Faq items={interventionFaqs} />
      </Section>
    </>
  );
}
