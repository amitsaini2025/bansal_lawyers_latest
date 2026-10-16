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
  title: "Immigration Detention and Removal Lawyer Melbourne",
  description:
    "Bansal Lawyers gives urgent advice on immigration detention, removal, bridging visa detention decisions, and stays while a review or court case is on foot.",
  path: "/immigration-lawyers-melbourne/detention-removal-lawyer-melbourne",
  keywords: [
    "Immigration Detention Lawyer Melbourne",
    "Visa Removal Lawyer",
    "Bridging Visa Detention",
    "Stay of Removal Australia",
    "Immigration Lawyer Melbourne",
  ],
});

const detentionMatters = [
  "Advice after a person is taken into immigration detention",
  "Review of a bridging visa decision that led to detention",
  "The 14-day ART time limit that applies to a person in detention",
  "Removal planning and whether a review or court case is still available",
  "Urgent court applications where removal would defeat a lawful challenge",
  "Character cancellation cases that have moved into detention",
  "Advice to families about what the detention notice does and does not allow",
];

const detentionFaqs = [
  {
    question: "How quickly does a person in detention need to apply for review?",
    answer:
      "For a reviewable migration or protection decision, a person who is in immigration detention on the day they are notified generally has 14 days to apply to the ART. A person who is not in detention generally has 28 days. The tribunal cannot extend either period.",
  },
  {
    question: "Does an ART application stop removal?",
    answer:
      "It depends on the visa status and the decision. Do not assume that lodging a review, or writing to the Department, stops removal. Get advice on the same day if a removal date has been given.",
  },
  {
    question: "Can the firm act for someone who is already detained?",
    answer:
      "Yes. We can take instructions from the person or, where appropriate, from a family member who has authority to help. The decision letter, the detention notice, and any removal itinerary should be sent as soon as they are available.",
  },
  {
    question: "Is this the same as applying for a new visa?",
    answer:
      "No. This service is about the lawfulness of detention, removal, and any review or court step that is still open. A new visa application is a separate process.",
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
        title="Detention and Removal Lawyer Melbourne"
        intro={
          <>
            <p>
              Detention and removal move faster than an ordinary visa file. The
              review period can be 14 days, and a removal date can be set while
              the family is still gathering documents.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers advises on immigration detention, bridging visa
              decisions that result in detention, and whether a tribunal review,
              a{" "}
              <Link href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/" style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}>
                judicial review
              </Link>
              , or another urgent step is still open.
            </p>
          </>
        }
        primaryAction={{ label: "Call About a Detention Matter", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "14-day detention review limit",
          "Bridging visa detention decisions",
          "Removal timing advice",
          "Same-day document review",
        ]}
      />

      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader eyebrow="Urgent matters" title="Detention and removal work" intro="Bansal Lawyers can advise on:" />
          <div className="matters-grid">
            {detentionMatters.map((matter) => (
              <div key={matter} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{matter}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection
        title="If a removal date has been set, call the same day"
        text="Send the decision letter, the detention documents, and any itinerary. We will identify the deadline and whether a review or court application can still be made."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call the firm", href: "tel:+61422905860" }}
        phone="1300 226 725"
        phoneLabel="Immigration solicitors"
        badges={["Detention", "Removal", "Urgent review deadlines"]}
      />

      <Section tone="white" id="faqs">
        <Faq items={detentionFaqs} />
      </Section>
    </>
  );
}
