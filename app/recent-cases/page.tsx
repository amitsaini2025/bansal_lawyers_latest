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
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createCollectionPageSchema } from "@/lib/schema";

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

interface CaseCardItem {
  title: string;
  slug?: string;
  practiceArea: string;
  publishedDate: string;
  publishedTime: string;
  summary: string;
  badge?: string;
  isLive: boolean;
  imageSrc?: string;
}

const recentCases: CaseCardItem[] = [
  {
    title: "Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained",
    slug: "/student-visa-refusal-bias-jaggi-v-minister-2024",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    publishedTime: "Published Time: Not specified",
    summary:
      "Federal Circuit and Family Court decision upholding judicial review of an AAT student visa refusal where member comments and conduct created an apprehension of bias constituting jurisdictional error.",
    imageSrc: "/images/cases/court-case-review.webp",
    isLive: true,
  },
  {
    title: "Thakur v Minister for Immigration and Citizenship 2025 — Student Visa Judicial Review",
    slug: "/thakur-v-minister-for-immigration-2025-student-visa",
    practiceArea: "Immigration Law",
    publishedDate: "Aug 23, 2025",
    publishedTime: "Published Time: Not specified",
    summary:
      "A student visa judicial review case involving a Subclass 500 refusal, GTE requirement, AAT decision-making, and jurisdictional error based on an incorrect factual finding about the applicant’s arrival date.",
    imageSrc: "/images/cases/court-case-review.webp",
    isLive: true,
  },
  {
    title: "Student Visa Refusal Updates — Ministerial Intervention & Subclass 500 Appeals",
    practiceArea: "Immigration Law",
    publishedDate: "Upcoming",
    publishedTime: "Published Time: Not specified",
    summary:
      "Comprehensive analysis of tribunal merits review, Genuine Student criteria, and successful reconsideration pathways following visa refusal notices.",
    badge: "Coming Soon",
    isLive: false,
  },
  {
    title: "Visa Cancellation Case Updates — Section 501 & Section 116 Character Decisions",
    practiceArea: "Migration Litigation",
    publishedDate: "Upcoming",
    publishedTime: "Published Time: Not specified",
    summary:
      "Judicial review precedents examining natural justice, mandatory cancellations, and revocation submissions before the Federal Court of Australia.",
    badge: "Coming Soon",
    isLive: false,
  },
  {
    title: "ART Appeal Updates — Administrative Review Tribunal Jurisdictional Procedures",
    practiceArea: "Administrative Law",
    publishedDate: "Upcoming",
    publishedTime: "Published Time: Not specified",
    summary:
      "Case law summaries and transition guidelines navigating new evidentiary thresholds under the Administrative Review Tribunal (ART).",
    badge: "Coming Soon",
    isLive: false,
  },
  {
    title: "Judicial Review Updates — Federal Circuit & Family Court Error Analyses",
    practiceArea: "Federal Court",
    publishedDate: "Upcoming",
    publishedTime: "Published Time: Not specified",
    summary:
      "Detailed reviews of material factual errors, procedural unfairness, and legally unreasonable decisions in Australian migration jurisprudence.",
    badge: "Coming Soon",
    isLive: false,
  },
  {
    title: "Family Law Updates — Financial Settlements & Parenting Orders in Dispute",
    practiceArea: "Family Law",
    publishedDate: "Upcoming",
    publishedTime: "Published Time: Not specified",
    summary:
      "Recent court decisions evaluating asset pool contributions, spousal maintenance disputes, and best interests of children in separated families.",
    badge: "Coming Soon",
    isLive: false,
  },
];

export default function RecentCasesPage() {
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
        primaryAction={{ label: "Speak With Our Legal Team", href: "tel:+61422905860" }}
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
                {/* Header row: Practice Area Tag & Badge */}
                <div className="case-card__header">
                  <span className="case-card__tag">
                    {item.practiceArea}
                  </span>
                  {item.badge && (
                    <span className="case-card__badge">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Published Date & Timestamp */}
                <div className="case-card__date" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
                  <span>
                    <strong>Date:</strong> {item.publishedDate}
                  </span>
                  <span>{item.publishedTime}</span>
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
                  {item.isLive && item.slug ? (
                    <Link href={item.slug}>
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h2>

                {/* Short Summary */}
                <p className="case-card__summary">
                  {item.summary}
                </p>

                {/* Action Button */}
                <div className="case-card__footer">
                  {item.isLive && item.slug ? (
                    <ButtonLink href={item.slug} variant="primary" className="button--full">
                      Read Case Summary
                    </ButtonLink>
                  ) : (
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--ink-secondary)",
                        fontStyle: "italic",
                      }}
                    >
                      Full summary publishing soon
                    </span>
                  )}
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
              adverse decision, visa refusal, or court proceedings in Melbourne, speak with our legal team for
              tailored guidance.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <ButtonLink href="/contact/" variant="primary">
                Book a Consultation
              </ButtonLink>
              <ButtonLink href="tel:+61422905860" variant="secondary">
                Call 0422 905 860
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
