import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  Hero,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Criminal Lawyers Melbourne | Criminal Defence & Court Representation",
  description:
    "Bansal Lawyers provides criminal defence legal advice and representation in Melbourne for summary offences, traffic matters, bail applications and court hearings.",
  path: "/criminal-lawyers-melbourne",
  keywords: [
    "Criminal Lawyers Melbourne",
    "Criminal Defence Lawyer Melbourne",
    "Magistrates Court Lawyer Melbourne",
    "Intervention Order Breach Lawyer",
    "Traffic Lawyer Melbourne",
  ],
});

const criminalMatters = [
  {
    title: "Intervention order breaches",
    href: "/family-lawyers-melbourne/family-violence-lawyer-melbourne/",
  },
  {
    title: "Magistrates' Court representation",
    href: "/contact/",
  },
  {
    title: "Bail applications",
    href: "/contact/",
  },
  {
    title: "Traffic offences & licence suspensions",
    href: "/contact/",
  },
  {
    title: "Summary criminal offences",
    href: "/contact/",
  },
  {
    title: "Assault and property offences",
    href: "/contact/",
  },
  {
    title: "Police interviews and cautions",
    href: "/contact/",
  },
  {
    title: "Pleas in mitigation",
    href: "/contact/",
  },
  {
    title: "Criminal appeals",
    href: "/contact/",
  },
];

export default function CriminalLawyersMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Criminal Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Criminal Lawyers Melbourne"
        intro={
          <>
            <p>
              Facing a criminal charge, police interview, or court summons can
              be daunting. Protecting your rights and having an experienced
              solicitor represent you in court is vital for achieving the best
              possible outcome.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists individuals with criminal defence,
              Magistrates&apos; Court representation, bail applications, traffic
              matters, and breach of intervention order allegations in Melbourne.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Criminal Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Urgent Legal Consultations",
          "Magistrates' Court Representation across Victoria",
          "Police Interview & Bail Application Support",
          "Clear Defence Advice & Realistic Assessments",
        ]}
      />

      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Defence Practice"
            title="Criminal Law Matters We Assist With"
            intro="Bansal Lawyers provides practical criminal defence across Melbourne courts:"
          />
          <div className="matters-grid">
            {criminalMatters.map((matter) => (
              <Link
                key={matter.title}
                href={matter.href}
                className="matter-item"
                title={`Explore ${matter.title}`}
              >
                <svg
                  className="matter-item__icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{matter.title}</span>
                <svg
                  className="matter-item__arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Court Representation</span>
            <h2>Experienced Criminal Defence in Melbourne</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Whether dealing with summary offences, traffic charges, or the
              criminal consequences of intervention order breaches, getting
              early legal counsel ensures you understand the evidence,
              defences, and plea options available.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If your matter involves family law or intervention orders, consult our{" "}
              <Link
                href="/family-lawyers-melbourne/family-violence-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
              >
                Family Violence Lawyer Melbourne
              </Link>{" "}
              or{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              .
            </p>
            <div style={{ marginTop: "2rem" }}>
              <ButtonLink href="/contact/" variant="primary">
                Contact Bansal Lawyers
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
