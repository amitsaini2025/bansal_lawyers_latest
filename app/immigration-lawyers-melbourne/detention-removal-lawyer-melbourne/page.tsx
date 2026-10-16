import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  Container,
  CtaSection,
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
  title: "Immigration Detention and Removal in Australia: Eligibility, Process & Costs",
  description:
    "Understand Australian immigration detention and removal. Who is detained, the removal process, costs and options available. Expert guidance from Bansal Lawyers.",
  path: "/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne",
  keywords: [
    "Immigration Detention Australia",
    "Immigration Detention Lawyer Melbourne",
    "Visa Removal Lawyer",
    "Bridging Visa Detention",
    "Stay of Removal Australia",
    "Immigration Lawyer Melbourne",
  ],
});

const whoCanBeDetained = [
  "People whose visas have expired or been cancelled",
  "People who never held a valid visa",
  "People whose bridging visas have ceased",
];

const optionsWhileDetained = [
  "Apply for a bridging visa (if eligible)",
  "Lodge a substantive visa application or review (where available)",
  "Seek Ministerial Intervention (where a relevant ART decision exists)",
  "Challenge the legality of detention or removal through judicial review in appropriate cases",
];

const detentionFaqs = [
  {
    question: "Is immigration detention mandatory for unlawful non-citizens?",
    answer:
      "Yes, under section 189 of the Migration Act.",
  },
  {
    question: "Do I have to pay for being in immigration detention?",
    answer:
      "Most people do not. Only limited categories are liable for daily maintenance costs.",
  },
  {
    question: "Can I be removed while a review is pending?",
    answer:
      "Generally no, if a valid application or review is properly on foot. Specific rules apply.",
  },
];

export default function DetentionRemovalLawyerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Immigration Lawyers Melbourne", href: "/immigration-lawyers-melbourne" },
    { label: "Detention and Removal" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(detentionFaqs)} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Urgent · detention and removal"
        title="Immigration Detention and Removal in Australia"
        intro={
          <>
            <p>
              Under the <em>Migration Act 1958</em>, an{" "}
              <strong>unlawful non-citizen</strong> (a person who does not hold a
              valid visa) must be detained under section 189 until they are
              granted a visa or removed from Australia. Detention is mandatory for
              people who arrive without a visa, overstay, or have their visa
              cancelled or refused and do not obtain a bridging visa.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers gives urgent advice on detention, bridging visas,
              removal timing, and whether a review or court step is still open.
            </p>
          </>
        }
        primaryAction={{ label: "Call About a Detention Matter", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Section 189 detention advice",
          "Bridging visa options",
          "Removal timing and costs",
          "Same-day document review",
        ]}
      />

      <Section tone="white" id="who-can-be-detained">
        <Container>
          <SectionHeader
            eyebrow="Eligibility"
            title="Who Can Be Detained?"
            intro="Release from immigration detention only occurs through the grant of a visa or removal."
          />
          <div className="matters-grid">
            {whoCanBeDetained.map((item) => (
              <div key={item} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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

      <Section tone="warm" id="removal">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Section 198</span>
            <h2>Removal from Australia</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Removal of unlawful non-citizens must occur{" "}
              <strong>as soon as reasonably practicable</strong> under section
              198, subject to limited exceptions (for example where a valid visa
              application or review is on foot, or non-refoulement obligations
              apply).
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If a tribunal review is still available, act quickly — see our{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART appeal
              </Link>{" "}
              page. Character cancellations that lead to detention are handled
              with our{" "}
              <Link
                href="/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                section 501 lawyers
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="costs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Fees & liability</span>
            <h2>Costs of Detention and Removal</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Most ordinary immigration detainees are{" "}
              <strong>not liable</strong> for daily detention costs (general
              detention debt was abolished in 2009). Limited categories (such as
              certain convicted people smugglers or illegal foreign fishers) may
              be liable for a daily maintenance amount. From 1 July 2026 this
              amount is <strong>$702.31 per day</strong> for applicable persons.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Removed non-citizens can also be liable for removal costs under
              section 210 in certain circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="options">
        <Container>
          <SectionHeader
            eyebrow="Next steps"
            title="Options While in Detention or Facing Removal"
            intro="Available pathways depend on visa history, whether a review is on foot, and whether a relevant ART decision exists."
          />
          <div className="matters-grid">
            {optionsWhileDetained.map((item) => (
              <div key={item} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
          <p style={{ textAlign: "center", marginTop: "1.75rem", color: "var(--ink-secondary)", fontSize: "1rem", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            Where an ART decision already exists, see{" "}
            <Link
              href="/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              Ministerial Intervention
            </Link>
            . Where legal error is alleged, see{" "}
            <Link
              href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
            >
              judicial review
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CtaSection
        title="Contact Bansal Lawyers"
        text="These pathways involve strict deadlines and technical legal requirements. Early advice significantly improves available options. Contact Bansal Lawyers for an assessment of your circumstances."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call the firm", href: "tel:+61422905860" }}
        phone="1300 226 725"
        phoneLabel="Immigration solicitors"
        badges={["Detention", "Removal", "Bridging visas"]}
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
                <h3>ART Review & Bridging Visas</h3>
                <p>Tribunal review rights and staying lawful while a matter is on foot.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Ministerial Intervention</h3>
                <p>Requests after a relevant ART decision under sections 351 or 501J.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Section 501 Character</h3>
                <p>Character cancellations that can lead to detention or removal.</p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Judicial Review</h3>
                <p>Court challenges to the legality of detention or removal decisions.</p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="faqs">
        <Faq items={detentionFaqs} />
      </Section>
    </>
  );
}
