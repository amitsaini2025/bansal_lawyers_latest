import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  BlogCard,
  CtaSection,
  Section,
  SectionHeader,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Legal Insights & Updates | Bansal Lawyers Melbourne",
  description:
    "Stay informed with our expert articles on legal trends, industry news, and professional insights. Our Melbourne lawyers publish practical guidance on family law, migration and visa matters, criminal defence, commercial disputes, and property law.",
  path: "/blog",
  keywords: [
    "Legal Insights Melbourne",
    "Australian Legal Updates",
    "Melbourne Law Blog",
    "Family Law Melbourne Articles",
    "Migration Law Updates Australia",
    "Criminal Defence Advice Melbourne",
    "Commercial Law Insights Melbourne",
    "Property Law Guidance Victoria",
    "Bansal Lawyers Blog",
  ],
});

export default function BlogPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section matching exact design */}
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.94)), url('/images/cases/court-case-review.webp') center/cover no-repeat",
          color: "#ffffff",
          textAlign: "center",
          padding: "clamp(4.5rem, 8vw, 6.5rem) 1.5rem clamp(4rem, 7vw, 5.5rem)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.35rem, 5vw, 3.4rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              marginBottom: "1.75rem",
            }}
          >
            Legal Insights & Updates
          </h1>
          <p
            style={{
              fontSize: "clamp(1.02rem, 1.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.92)",
              marginBottom: "1.35rem",
              maxWidth: "48rem",
              marginInline: "auto",
            }}
          >
            Stay informed with our expert articles on legal trends, industry news, and
            professional insights. Our Melbourne lawyers publish practical guidance on
            family law, migration and visa matters, criminal defence, commercial disputes,
            and property law so you can understand your options before taking the next step.
          </p>
          <p
            style={{
              fontSize: "clamp(1.02rem, 1.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.92)",
              margin: 0,
              maxWidth: "48rem",
              marginInline: "auto",
            }}
          >
            Whether you are dealing with a visa refusal, separation, business contract, or
            property transaction, browse articles written by the team at Bansal Lawyers — or{" "}
            <Link
              href="/contact"
              style={{
                color: "#ffffff",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontWeight: 500,
              }}
            >
              contact us
            </Link>{" "}
            for advice tailored to your situation.
          </p>
        </div>
      </section>

      {/* Stats Bar directly below Hero */}
      <section
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
          padding: "clamp(2rem, 3.5vw, 2.75rem) 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "56rem",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(2.5rem, 8vw, 7.5rem)",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "clamp(2.2rem, 4vw, 2.85rem)",
                fontWeight: 800,
                color: "#1d4ed8",
                lineHeight: 1,
              }}
            >
              32
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#64748b",
                textTransform: "uppercase",
                marginTop: "0.45rem",
              }}
            >
              TOTAL ARTICLES
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "clamp(2.2rem, 4vw, 2.85rem)",
                fontWeight: 800,
                color: "#1d4ed8",
                lineHeight: 1,
              }}
            >
              1
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#64748b",
                textTransform: "uppercase",
                marginTop: "0.45rem",
              }}
            >
              CATEGORIES
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "clamp(2.2rem, 4vw, 2.85rem)",
                fontWeight: 800,
                color: "#1d4ed8",
                lineHeight: 1,
              }}
            >
              100%
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#64748b",
                textTransform: "uppercase",
                marginTop: "0.45rem",
              }}
            >
              EXPERT CONTENT
            </div>
          </div>
        </div>
      </section>
      <Section tone="warm">
        <SectionHeader
          eyebrow="Legal Publications"
          title="Latest Articles & Legal Guides"
        />
        <div className="filter-bar" role="group" aria-label="Article category filter">
          <button type="button" aria-pressed="true">All Articles</button>
          <button type="button" aria-pressed="false">Family Law</button>
          <button type="button" aria-pressed="false">Immigration Law</button>
          <button type="button" aria-pressed="false">Commercial Law</button>
        </div>
        <div className="card-grid">
          <BlogCard
            title="Divorce Lawyers in Melbourne Australia — Complete Guide for Couple"
            eyebrow="Family Law"
            description="A complete guide to navigating divorce in Australia under the Family Law Act 1975: legal requirements, required documents, joint vs sole applications, filing fees, and court procedures."
            href="/blog/divorce-lawyers-in-melbourne-australia-complete-guide-for-couple"
            imageSrc="/images/legal-consultation-clarity.webp"
            imageAlt="Divorce Lawyers in Melbourne Australia Guide"
          />
        </div>
      </Section>
      <CtaSection
        title="Need Advice on a Family or Commercial Law Matter?"
        text="Contact Bansal Lawyers today for confidential advice at our Melbourne CBD office, by phone, or via secure video consultation."
        action={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
