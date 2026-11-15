import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DynamicArticleMeta } from "@/components/blog/DynamicArticleMeta";
import { RecommendedArticles } from "@/components/blog/RecommendedArticles";
import { StructuredData } from "@/components/seo";
import { Breadcrumbs, Container, CtaSection, Section } from "@/components/ui";
import { sanitizeBlogHtml } from "@/lib/blog/html";
import { getPublishedBlogPost, toBlogCard } from "@/lib/blog/store";
import { createMetadata } from "@/lib/metadata";
import { createArticleSchema, createBreadcrumbSchema, createLegalServiceSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function DatabaseBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedBlogPost(slug);
  if (!post) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];
  const path = `/blog/${post.slug}`;

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title: post.title,
          description: post.description,
          path,
          datePublished: isoDate(post.publishedAt),
          dateModified: isoDate(post.modifiedAt),
          authorName: "Bansal Lawyers",
        })}
      />
      <StructuredData data={createLegalServiceSchema()} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="blog-db-hero">
        <Container>
          <div className="blog-db-hero__inner">
            <h1>{post.title}</h1>
            <DynamicArticleMeta
              publishedDate={toBlogCard(post).publishedDate}
              category={post.category}
              initialWords={post.wordCount}
              initialReadTime={post.readTime}
            />
          </div>
        </Container>
      </section>

      <Section tone="warm">
        <article className="prose blog-db-article" data-blog-content aria-label={post.title}>
          <div dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(post.body) }} />
          <p>
            This article is general information about Australian law. It is not advice for your
            circumstances. <Link href="/contact">Contact Bansal Lawyers</Link> before you rely on it.
          </p>
        </article>
      </Section>

      <RecommendedArticles currentHref={path} />
      <CtaSection
        title="Need advice on your matter?"
        text="Speak with Bansal Lawyers in Melbourne about family law, migration, criminal defence, commercial disputes, or property."
        action={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
