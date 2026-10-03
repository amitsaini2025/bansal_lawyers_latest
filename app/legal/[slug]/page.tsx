import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  CtaSection,
  Hero,
  Section,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/schema";
import { policySlugs } from "@/lib/site";

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  return createMetadata({
    title: "[Legal policy page title goes here]",
    description: "[Legal policy meta description goes here]",
    path: `/legal/${slug}`,
  });
}

export default async function LegalPolicyPage({ params }: LegalPageProps) {
  const { slug } = await params;

  if (!policySlugs.includes(slug)) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "[Legal policies label]", href: "#" },
    { label: "[Policy title goes here]" },
  ];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        compact
        eyebrow="[Legal document label]"
        title="[Policy H1 goes here]"
        intro="[Policy introduction goes here]"
        aside={
          <div className="article-meta">
            <span>[Jurisdiction: Australia]</span>
            <time dateTime="2026-01-01">[Last updated date goes here]</time>
            <span>[Version identifier]</span>
          </div>
        }
      />

      <Section tone="warm">
        <div className="content-layout">
          <article className="prose">
            <p>
              <em>[Document notice / binding declaration placeholder]</em>
            </p>

            <h2 id="policy-scope">[Section 1 heading goes here]</h2>
            <p>[Approved policy clause content goes here]</p>
            <p>[Approved supporting terms go here]</p>

            <h2 id="collection-use">[Section 2 heading goes here]</h2>
            <p>[Approved policy clause content goes here]</p>
            <h3>[Subsection 2.1 heading goes here]</h3>
            <p>[Approved subsection content goes here]</p>

            <h2 id="rights-obligations">[Section 3 heading goes here]</h2>
            <p>[Approved policy clause content goes here]</p>
            <p>[Approved supporting terms go here]</p>

            <h2 id="dispute-jurisdiction">[Section 4 heading goes here]</h2>
            <p>[Approved governing law and jurisdiction clause goes here]</p>

            <h2 id="contact-officer">[Section 5 heading goes here]</h2>
            <p>[Approved privacy officer or compliance contact details go here]</p>
            <p>
              <a href="mailto:privacy@example.com.au">[Policy contact email link]</a>
            </p>
          </article>

          <aside className="content-sidebar">
            <h2>[Table of contents heading]</h2>
            <a href="#policy-scope">[Section 1 link]</a>
            <a href="#collection-use">[Section 2 link]</a>
            <a href="#rights-obligations">[Section 3 link]</a>
            <a href="#dispute-jurisdiction">[Section 4 link]</a>
            <a href="#contact-officer">[Section 5 link]</a>

            <h2 style={{ marginTop: "2rem" }}>[Related policies heading]</h2>
            {policySlugs.map((policySlug) => (
              <Link
                key={policySlug}
                href={`/legal/${policySlug}`}
                style={{
                  fontWeight: policySlug === slug ? 700 : 400,
                }}
              >
                [Policy link: {policySlug}]
              </Link>
            ))}
          </aside>
        </div>
      </Section>

      <CtaSection
        title="[Legal inquiry CTA heading goes here]"
        text="[Legal inquiry CTA text goes here]"
        action={{ label: "[Contact page CTA button]", href: "/contact" }}
      />
    </>
  );
}
