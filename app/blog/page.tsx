import type { Metadata } from "next";
import Link from "next/link";
import { BlogListClient, type BlogArticleItem } from "@/components/blog/BlogListClient";
import { StructuredData } from "@/components/seo";
import { Container, CtaSection, Section, SectionHeader } from "@/components/ui";
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

import { blogArticles } from "@/lib/blog-data";

export default function BlogPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section matching exact design */}
      <section className="blog-hero-section">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h1>Legal Insights &amp; Updates</h1>
          <p>
            Stay informed with our expert articles on legal trends, industry news, and
            professional insights. Our Melbourne lawyers publish practical guidance on
            family law, migration and visa matters, criminal defence, commercial disputes,
            and property law so you can understand your options before taking the next step.
          </p>
          <p>
            Whether you are dealing with a visa refusal, separation, business contract, or
            property transaction, browse articles written by the team at Bansal Lawyers — or{" "}
            <Link href="/contact">contact us</Link> for advice tailored to your situation.
          </p>
        </div>
      </section>

      {/* Dynamic Stats Bar, Interactive Search, Category Filters, Cards & Pagination */}
      <BlogListClient articles={blogArticles} />

      <CtaSection
        title="Need Advice on a Family or Commercial Law Matter?"
        text="Contact Bansal Lawyers today for confidential advice at our Melbourne CBD office, by phone, or via secure video consultation."
        action={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
