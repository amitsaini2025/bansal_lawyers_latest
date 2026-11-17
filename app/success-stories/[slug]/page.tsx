import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/seo";
import { Breadcrumbs, Container, CtaSection, Section } from "@/components/ui";
import { sanitizeBlogHtml } from "@/lib/blog/html";
import { getPublishedCase } from "@/lib/cases/store";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createCaseUpdateSchema, createLegalServiceSchema } from "@/lib/schema";

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
  const item = await getPublishedCase(slug);
  if (!item) notFound();

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

      <section className="blog-db-hero">
        <Container>
          <div className="blog-db-hero__inner">
            <p className="eyebrow">{item.practiceArea}</p>
            <h1>{item.title}</h1>
          </div>
        </Container>
      </section>

      <Section tone="warm">
        <article className="prose blog-db-article" aria-label={item.title}>
          <figure className="blog-db-figure">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              width={1600}
              height={900}
              priority
              sizes="(max-width: 800px) 100vw, 736px"
            />
          </figure>
          <div dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(item.body) }} />
          <p>
            This case update is general information about Australian law. It is not advice for your
            circumstances. <Link href="/contact">Contact Bansal Lawyers</Link> before you rely on it.
          </p>
        </article>
      </Section>

      <CtaSection
        title="Need advice on your matter?"
        text="Speak with Bansal Lawyers in Melbourne about immigration, family, criminal, commercial, property, or civil law."
        action={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
