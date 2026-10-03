import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  BlogCard,
  Breadcrumbs,
  CtaSection,
  Hero,
  Section,
  SectionHeader,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/schema";
import { articleSlugs, placeholderCards } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "[Blog page title goes here]",
  description: "[Blog page meta description goes here]",
  path: "/blog",
});

const cards = [...placeholderCards, ...placeholderCards];

export default function BlogPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        compact
        eyebrow="[Blog page label]"
        title="[Blog page H1 goes here]"
        intro="[Blog page introduction goes here]"
        aside={null}
      />
      <Section tone="warm">
        <SectionHeader
          eyebrow="[Articles label]"
          title="[Articles heading goes here]"
        />
        <div className="filter-bar" role="group" aria-label="[Category filter label]">
          <button type="button" aria-pressed="true">[All categories]</button>
          <button type="button" aria-pressed="false">[Category]</button>
          <button type="button" aria-pressed="false">[Category]</button>
        </div>
        <div className="card-grid">
          {cards.map((card, index) => {
            const blogImages = [
              "/images/cases/court-case-review.webp",
              "/images/blog/commercial-contracts.webp",
              "/images/melbourne-legal-chambers.webp",
              "/images/collins-street-office.webp",
            ];
            return (
              <BlogCard
                {...card}
                title={`[Article ${index + 1} title goes here]`}
                eyebrow="[Article category]"
                href={`/blog/${articleSlugs[index % articleSlugs.length]}`}
                imageSrc={blogImages[index % blogImages.length]}
                imageAlt={`Featured legal topic ${index + 1}`}
                key={index}
              />
            );
          })}
        </div>
        <nav className="pagination" aria-label="Pagination">
          <Link href="/blog" aria-current="page">1</Link>
          <Link href="/blog?page=2">2</Link>
          <Link href="/blog?page=2">[Next page]</Link>
        </nav>
      </Section>
      <CtaSection
        title="[Blog page CTA heading goes here]"
        text="[Blog page CTA text goes here]"
        action={{ label: "[Blog page CTA button]", href: "/contact" }}
      />
    </>
  );
}
