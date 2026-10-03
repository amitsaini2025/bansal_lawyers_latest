import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { createArticleSchema, createBreadcrumbSchema } from "@/lib/schema";
import { articleSlugs, placeholderCards } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  return createMetadata({
    title: "[Article SEO title goes here]",
    description: "[Article meta description goes here]",
    path: `/blog/${slug}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  if (!articleSlugs.includes(slug)) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "[Article title]" },
  ];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title: "[Article SEO title goes here]",
          description: "[Article meta description goes here]",
          path: `/blog/${slug}`,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        compact
        eyebrow="[Article category]"
        title="[Article H1 goes here]"
        intro="[Article introduction goes here]"
        aside={
          <div className="article-meta">
            <span>[Author name]</span>
            <time dateTime="2026-01-01">[Publication date]</time>
            <span>[Reading time]</span>
          </div>
        }
      />
      <Section>
        <figure className="article-figure" style={{ maxWidth: "56rem", margin: "0 auto", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "var(--shadow)" }}>
          <Image
            src="/images/cases/court-case-review.webp"
            alt="Australian Legal Analysis and Practice Overview"
            width={1200}
            height={675}
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </figure>
      </Section>
      <Section tone="warm">
        <div className="content-layout">
          <article className="prose">
            <h2 id="article-overview">[Article section H2 goes here]</h2>
            <p>[Approved article content goes here]</p>
            <p>
              [Contextual reference with internal link]:{" "}
              <Link href="/contact">
                [Relevant practice area internal link]
              </Link>
            </p>
            <h3 id="article-subsection">[Article subsection H3 goes here]</h3>
            <p>[Approved article content goes here]</p>
            <h2 id="legal-considerations">[Article section H2 goes here]</h2>
            <p>[Approved article content goes here]</p>
            <p>
              [For preliminary assistance, arrange a consultation]:{" "}
              <Link href="/contact">[Consultation internal link]</Link>
            </p>
          </article>
          <aside className="content-sidebar">
            <h2>[Table of contents heading]</h2>
            <a href="#article-overview">[Section 1 link]</a>
            <a href="#article-subsection">[Section 2 link]</a>
            <a href="#legal-considerations">[Section 3 link]</a>
          </aside>
        </div>
      </Section>
      <Section>
        <SectionHeader
          eyebrow="[Related articles label]"
          title="[Related articles heading goes here]"
        />
        <div className="card-grid">
          {placeholderCards.map((card, index) => (
            <BlogCard
              {...card}
              eyebrow="[Article category]"
              href={`/blog/${articleSlugs[index % articleSlugs.length]}`}
              key={card.title}
            />
          ))}
        </div>
      </Section>
      <CtaSection
        title="[Article CTA heading goes here]"
        text="[Article CTA text goes here]"
        action={{ label: "[Article CTA button]", href: "/contact" }}
      />
    </>
  );
}
