import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RecommendedArticles } from "@/components/blog/RecommendedArticles";
import { StructuredData } from "@/components/seo";
import { Breadcrumbs, ButtonLink, Container, CtaSection, Section } from "@/components/ui";
import { sanitizeBlogHtml } from "@/lib/blog/html";
import { DEFAULT_BLOG_IMAGE, getPublishedBlogPost, listPublishedBlogPosts } from "@/lib/blog/store";
import { createMetadata } from "@/lib/metadata";
import { createArticleSchema, createBreadcrumbSchema, createLegalServiceSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function articleDate(date: Date): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Australia/Melbourne",
  }).format(date);
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
  const posts = await listPublishedBlogPosts();
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = [
    ...posts.filter((item) => item.slug !== slug && item.category === post.category),
    ...posts.filter((item) => item.slug !== slug && item.category !== post.category),
  ].slice(0, 4);

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
          image: post.imageFull,
        })}
      />
      <StructuredData data={createLegalServiceSchema()} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="blog-article-hero">
        <Container>
          <div className="blog-article-hero__inner">
            <h1>{post.title}</h1>
          </div>
        </Container>
      </section>

      <Section tone="warm" className="blog-article">
        <div className="blog-article__layout">
          <article className="prose blog-db-article blog-article__article" data-blog-content aria-label={post.title}>
            {post.imageFull !== DEFAULT_BLOG_IMAGE ? (
              <figure className="blog-db-figure">
                <Image
                  src={post.imageFull}
                  alt={post.imageAlt}
                  width={1600}
                  height={900}
                  priority
                  sizes="(max-width: 900px) 100vw, 672px"
                />
              </figure>
            ) : null}
            <div dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(post.body) }} />
            <p>
              This article is general information about Australian law. It is not advice for your
              circumstances. <Link href="/contact">Contact Bansal Lawyers</Link> before you rely on it.
            </p>
          </article>

          <aside className="blog-article__aside" aria-label="Article details">
            <div className="blog-article__card">
              <p className="blog-article__label">Category</p>
              <p className="blog-article__value">{post.category}</p>
              <p className="blog-article__meta">Published {articleDate(post.publishedAt)}</p>
              <p className="blog-article__meta">
                {post.readTime}
                {post.wordCount > 0 ? ` · ${post.wordCount.toLocaleString("en-AU")} words` : ""}
              </p>
              <ButtonLink href="/contact" variant="primary">
                Book a consultation
              </ButtonLink>
            </div>

            {related.length > 0 ? (
              <div className="blog-article__card">
                <p className="blog-article__label">More articles</p>
                <ul className="blog-article__related">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
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
