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
  title: "Ministerial Intervention Lawyer Melbourne | Sections 351 and 501J",
  description:
    "Bansal Lawyers prepares ministerial intervention requests after tribunal and court options are finished, including unique or exceptional circumstances under sections 351 and 501J.",
  path: "/immigration-lawyers-melbourne/ministerial-intervention-lawyer-melbourne",
  keywords: [
    "Ministerial Intervention Lawyer Melbourne",
    "Section 351 Ministerial Intervention",
    "Section 501J Intervention",
    "Unique or Exceptional Circumstances",
    "Immigration Lawyer Melbourne",
  ],
});

const interventionMatters = [
  "Section 351 requests after an ART migration decision",
  "Section 501J requests in character matters",
  "Advice on whether the Minister's guidelines are met",
  "Unique or exceptional circumstances, including compassionate family circumstances",
  "Requests that raise Australia's international obligations",
  "Matters where tribunal and court avenues have been used or are not available",
  "Advice when a request should not be made because another remedy is still open",
];

const interventionFaqs = [
  {
    question: "What is ministerial intervention?",
    answer:
      "In some cases the Minister can replace a tribunal decision with a more favourable decision. It is a personal, non-compellable power. The Minister does not have to consider a request, and there is no right to a favourable outcome.",
  },
  {
    question: "When is a request usually made?",
    answer:
      "A request is usually considered only after merits review, and only where the Minister's public guidelines identify unique or exceptional circumstances. If an ART appeal or a judicial review is still available, that step should be assessed first.",
  },
  {
    question: "Which powers do you advise on?",
    answer:
      "The common powers in visa matters are section 351, after an ART review of a migration decision, and section 501J, in character matters. The correct power depends on the decision that was made.",
  },
  {
    question: "Does asking the Minister stop removal?",
    answer:
      "Making a request does not, by itself, give a right to stay in Australia. If removal or detention is imminent, that needs separate urgent advice.",
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
        eyebrow="After review rights are used"
        title="Ministerial Intervention Lawyer Melbourne"
        intro={
          <>
            <p>
              Ministerial intervention is not a second appeal. It is a request
              that the Minister consider replacing a decision in the limited
              circumstances set out in the Minister&apos;s guidelines.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers advises whether a request is appropriate, which
              power applies, and how the unique or exceptional circumstances
              should be put. We look first at whether an{" "}
              <Link href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/" style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}>
                ART appeal
              </Link>{" "}
              or{" "}
              <Link href="/immigration-lawyers-melbourne/judicial-review-lawyer-melbourne/" style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}>
                judicial review
              </Link>{" "}
              is still available.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Solicitor", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Section 351 and section 501J",
          "Guideline assessment before a request is lodged",
          "Family and compassionate circumstances",
          "Melbourne CBD and remote conferences",
        ]}
      />

      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader eyebrow="Intervention" title="Requests we advise on" intro="Bansal Lawyers can advise on:" />
          <div className="matters-grid">
            {interventionMatters.map((matter) => (
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
        title="Check whether intervention is the right step"
        text="Bring the tribunal decision and any court outcome. We will tell you whether a ministerial request fits the guidelines or whether another remedy should be used first."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call the firm", href: "tel:+61422905860" }}
        phone="1300 226 725"
        phoneLabel="Immigration solicitors"
        badges={["Guideline screening", "Section 351", "Section 501J"]}
      />

      <Section tone="white" id="faqs">
        <Faq items={interventionFaqs} />
      </Section>
    </>
  );
}
