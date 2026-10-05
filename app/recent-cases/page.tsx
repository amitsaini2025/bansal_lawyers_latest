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
  slug: string;
  practiceArea: string;
  publishedDate: string;
  summary: string;
  imageSrc: string;
}

const recentCases: CaseCardItem[] = [
  {
    title: "Tribunal Decision Overturned for \"Copy and Paste\" Reasoning — Maazuddin v Minister for Immigration 2024",
    slug: "/recent-cases/maazuddin-v-minister-2024-tribunal-decision-overturned",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Federal Circuit and Family Court decision setting aside a student visa cancellation where the AAT reproduced the delegate's reasons verbatim, failing to bring an independent mind and breaching section 359A procedural fairness.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "The Crucial Importance of Correctly Framing the Legal Question — Alsheri v Minister for Immigration 2025",
    slug: "/recent-cases/alsheri-v-minister-2025-importance-of-framing-legal-question",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Federal Circuit and Family Court decision examining why a tribunal's failure to correctly identify and apply the statutory test for employment under Schedule 6D constitutes jurisdictional error.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "Khanal Migration Case Study: English Language Requirements and Flexibility During COVID-19",
    slug: "/recent-cases/khanal-migration-english-language-requirements-covid-19-case-study",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Administrative Review Tribunal (ART) decision examining Subclass 485 Temporary Graduate English requirements, Department pandemic flexibility, and substantive compliance during exceptional circumstances.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "When Tribunal Errors Matter: Chikweu v Minister 2024 Immigration Case",
    slug: "/recent-cases/chikweu-v-minister-2024-federal-court-visa-refusal-overturn",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Federal Court of Australia decision examining when tribunal errors matter enough to overturn a visa refusal, focusing on materiality, jurisdictional error, and reasonable adjournment.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained",
    slug: "/recent-cases/student-visa-refusal-bias-jaggi-v-minister-2024",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Federal Circuit and Family Court decision upholding judicial review of an AAT student visa refusal where member comments and conduct created an apprehension of bias constituting jurisdictional error.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "Thakur v Minister for Immigration and Citizenship 2025 — Student Visa Judicial Review",
    slug: "/recent-cases/thakur-v-minister-for-immigration-2025-student-visa",
    practiceArea: "Immigration Law",
    publishedDate: "Aug 23, 2025",
    summary:
      "A student visa judicial review case involving a Subclass 500 refusal, GTE requirement, AAT decision-making, and jurisdictional error based on an incorrect factual finding about the applicant’s arrival date.",
    imageSrc: "/images/cases/court-case-review.webp",
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
