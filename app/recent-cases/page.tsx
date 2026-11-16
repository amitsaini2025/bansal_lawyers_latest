import type { Metadata } from "next";
import Image from "next/image";
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
import { listRecentCaseCards } from "@/lib/cases/store";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createCollectionPageSchema, createLegalServiceSchema } from "@/lib/schema";
import { businessDetails } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Recent Cases | Bansal Lawyers Melbourne",
  description:
    "Read recent case updates from Bansal Lawyers covering immigration law, student visa refusals, judicial review and Australian legal developments.",
  path: "/recent-cases",
  keywords: [
    "Recent Cases Australia",
    "Recent Legal Cases Australia",
    "Immigration Case Updates Australia",
    "Australian Legal Updates",
    "Student Visa Judicial Review",
    "Migration Law Updates Australia",
    "Immigration Lawyer Melbourne",
  ],
});

export default async function RecentCasesPage() {
  const recentCases = await listRecentCaseCards();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Recent Cases" },
  ];

  return (
    <>
      <StructuredData
        data={createCollectionPageSchema({
          title: "Recent Cases | Bansal Lawyers Melbourne",
          description:
            "Read recent case updates from Bansal Lawyers covering immigration law, student visa refusals, judicial review and Australian legal developments.",
          path: "/recent-cases",
        })}
      />
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Recent Cases"
        intro={
          <>
            <p>
              Bansal Lawyers shares selected recent case updates to help clients understand how Australian
              legal decisions may affect immigration, family, criminal, commercial, property, and civil law
              matters.
            </p>
            <p style={{ marginTop: "0.75rem", fontSize: "0.98rem", opacity: 0.9 }}>
              These updates are provided for general information only. They do not replace legal advice. Every
              matter depends on its own facts, documents, evidence, deadlines, and legal circumstances.
            </p>
          </>
        }
        primaryAction={{ label: "Call 1300 226 725", href: businessDetails.nationalLineTel }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Selected Australian Court & Tribunal Updates",
          "Objective Legal Commentary & Error Analysis",
          "Immigration, Family & Commercial Insights",
          "Collins Street Office Consultations",
        ]}
      />

      <Section tone="white">
        <Container>
          <SectionHeader
            eyebrow="Case Updates & Summaries"
            title="Latest Case Updates"
            intro="Explore our recent legal summaries examining judicial review, administrative tribunal decisions, and Australian court findings."
          />

          <div className="recent-cases-grid">
            {recentCases.map((item) => (
              <article key={item.title} className="case-card">
                {/* Header row: Practice Area Tag */}
                <div className="case-card__header">
                  <span className="case-card__tag">
                    {item.practiceArea}
                  </span>
                </div>

                {/* Published Date */}
                <div className="case-card__date">
                  <span>
                    <strong>Date:</strong> {item.publishedDate}
                  </span>
                </div>

                {/* Case Thumbnail Image */}
                {item.imageSrc && (
                  <div style={{ borderRadius: "var(--radius-sm)", overflow: "hidden", marginBottom: "1rem", height: "11.5rem", border: "1px solid var(--line)" }}>
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={600}
                      height={340}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                {/* Case Title */}
                <h2 className="case-card__title">
                  <Link href={item.slug}>
                    {item.title}
                  </Link>
                </h2>

                {/* Short Summary */}
                <p className="case-card__summary">
                  {item.summary}
                </p>

                {/* Action Button */}
                <div className="case-card__footer">
                  <ButtonLink href={item.slug} variant="primary" className="button--full">
                    Read Case Summary
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div
            style={{
              maxWidth: "52rem",
              margin: "0 auto",
              textAlign: "center",
              padding: "2.5rem 2rem",
              background: "var(--white)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <span className="eyebrow">Professional Guidance</span>
            <h2>Need Legal Advice for Your Case?</h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.75",
                color: "var(--ink-secondary)",
                margin: "1rem auto 1.75rem",
                maxWidth: "42rem",
              }}
            >
              Every legal matter depends on its specific documents, timing, and evidence. If you are facing an
              adverse decision, a{" "}
              <Link href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/">visa refusal</Link>,
              or court proceedings in Melbourne, speak with our{" "}
              <Link href="/immigration-lawyers-melbourne/">immigration lawyers</Link> or the wider legal team
              for tailored guidance. Published commentary is also on the{" "}
              <Link href="/blog/">blog</Link>.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <ButtonLink href="/contact/" variant="primary">
                Book a Consultation
              </ButtonLink>
              <ButtonLink href={businessDetails.nationalLineTel} variant="secondary">
                Call {businessDetails.nationalLine}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
