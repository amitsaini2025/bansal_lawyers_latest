import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/seo";
import { Breadcrumbs, ButtonLink, Container, CtaSection, Section } from "@/components/ui";
import { sanitizeBlogHtml } from "@/lib/blog/html";
import { staticCaseSlugs } from "@/lib/cases/static";
import { getPublishedCase, listPublishedCases } from "@/lib/cases/store";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createCaseUpdateSchema, createLegalServiceSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function storyDate(date: Date): string {
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
  const item = await getPublishedCase(slug);
  if (!item) return {};
  return createMetadata({
    title: item.title,
    description: item.description,
    path: `/success-stories/${item.slug}`,
  });
}

export default async function DatabaseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (staticCaseSlugs().has(slug)) notFound();
  const stories = await listPublishedCases();
  const item = stories.find((story) => story.slug === slug);
  if (!item) notFound();
  const related = stories.filter((story) => story.slug !== slug).slice(0, 4);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Success Stories", href: "/success-stories" },
    { label: item.title },
  ];
  const path = `/success-stories/${item.slug}`;

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createCaseUpdateSchema({
          headline: item.title,
          description: item.description,
          path,
          datePublished: isoDate(item.publishedAt),
          dateModified: isoDate(item.modifiedAt),
          articleSection: item.practiceArea,
        })}
      />
      <StructuredData data={createLegalServiceSchema()} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="case-story-hero">
        <Container>
          <div className="case-story-hero__inner">
            <h1>{item.title}</h1>
          </div>
        </Container>
      </section>

      <Section tone="warm" className="case-story">
        <div className="case-story__layout">
          <article className="prose case-story__article" aria-label={item.title}>
            <figure className="blog-db-figure">
              <Image
                src={item.imageFull}
                alt={item.imageAlt}
                width={1600}
                height={900}
                priority
                sizes="(max-width: 900px) 100vw, 672px"
              />
            </figure>
            <div dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(item.body) }} />
            <p>
              This case update is general information about Australian law. It is not advice for your
              circumstances. <Link href="/contact">Contact Bansal Lawyers</Link> before you rely on it.
            </p>
          </article>

          <aside className="case-story__aside" aria-label="Story details">
            <div className="case-story__card">
              <p className="case-story__label">Practice area</p>
              <p className="case-story__value">{item.practiceArea}</p>
              <p className="case-story__meta">Published {storyDate(item.publishedAt)}</p>
              <ButtonLink href="/contact" variant="primary">
                Book a consultation
              </ButtonLink>
            </div>

            {related.length > 0 ? (
              <div className="case-story__card">
                <p className="case-story__label">More success stories</p>
                <ul className="case-story__related">
                  {related.map((story) => (
                    <li key={story.slug}>
                      <Link href={`/success-stories/${story.slug}`}>{story.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>

      <CtaSection
        title="Need advice on your matter?"
        text="Speak with Bansal Lawyers in Melbourne about immigration, family, criminal, commercial, property, or civil law."
        action={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
