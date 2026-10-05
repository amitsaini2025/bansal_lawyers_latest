import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  BlogCard,
  Container,
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
      <section className="blog-hero-section">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h1>Legal Insights & Updates</h1>
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

      {/* Stats Bar directly below Hero */}
      <section className="blog-stats-bar">
        <div className="blog-stats-inner">
          <div>
            <div className="blog-stat-value">32</div>
            <div className="blog-stat-label">TOTAL ARTICLES</div>
          </div>

          <div>
            <div className="blog-stat-value">1</div>
            <div className="blog-stat-label">CATEGORIES</div>
          </div>

          <div>
            <div className="blog-stat-value">100%</div>
            <div className="blog-stat-label">EXPERT CONTENT</div>
          </div>
        </div>
      </section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Legal Publications"
            title="Latest Articles & Legal Guides"
          />
          <div className="blog-filter-bar" role="group" aria-label="Article category filter">
            <button type="button" className="blog-filter-btn" aria-pressed="true">
              All Articles
            </button>
            <button type="button" className="blog-filter-btn" aria-pressed="false">
              Family Law
            </button>
            <button type="button" className="blog-filter-btn" aria-pressed="false">
              Immigration Law
            </button>
            <button type="button" className="blog-filter-btn" aria-pressed="false">
              Commercial Law
            </button>
          </div>
          <div className="blog-card-grid">
            <BlogCard
              title="Divorce Lawyers in Melbourne Australia — Complete Guide for Couple"
              eyebrow="Family Law"
              description="A complete guide to navigating divorce in Australia under the Family Law Act 1975: legal requirements, required documents, joint vs sole applications, filing fees, and court procedures."
              href="/blog/divorce-lawyers-in-melbourne-australia-complete-guide-for-couple"
              imageSrc="/images/legal-consultation-clarity.webp"
              imageAlt="Divorce Lawyers in Melbourne Australia Guide"
            />
            <BlogCard
              title="Top 10 Legal Services in Australia"
              eyebrow="Legal Practice"
              description="An overview of 10 common legal services in Australia including immigration, family law, criminal defence, employment, property, business law, and civil disputes."
              href="/blog/top-10-legal-services-australia-bansal-lawyers-melbourne"
              imageSrc="/images/melbourne-legal-chambers.webp"
              imageAlt="Top 10 Legal Services in Australia Guide"
            />
            <BlogCard
              title="What is the Civil Dispute Resolution Act 2011 A Guide to Settling Disputes Without Court in Australia"
              eyebrow="Civil Law"
              description="Learn how the Civil Dispute Resolution Act 2011 (Cth) helps individuals and businesses resolve disputes through genuine steps and mediation before filing in court."
              href="/blog/what-is-the-civil-dispute-resolution-act-2011-australia"
              imageSrc="/images/blog/commercial-contracts.webp"
              imageAlt="Civil Dispute Resolution Act 2011 Guide"
            />
            <BlogCard
              title="Understanding the Closing Loopholes Reforms: Changes for Independent Contractors"
              eyebrow="Commercial Law"
              description="A guide to Australia's Fair Work Closing Loopholes No. 2 reforms, contractor vs employee tests, gig worker protections, and the landmark Amita Gupta Uber Eats decision."
              href="/blog/closing-loopholes-reforms-independent-contractors"
              imageSrc="/images/blog/commercial-contracts.webp"
              imageAlt="Closing Loopholes Reforms for Independent Contractors"
            />
            <BlogCard
              title="How to Build a Strong Brand: Legal Considerations for Your Business Identity"
              eyebrow="Commercial Law"
              description="A guide to choosing the right business structure in Australia: sole trader, partnership, and company structures, tax implications, personal liability, and key differences."
              href="/blog/how-to-build-strong-brand-legal-considerations-for-your-business-identity-in-australia"
              imageSrc="/images/blog/commercial-contracts.webp"
              imageAlt="How to Build a Strong Brand and Business Structure Guide"
            />
            <BlogCard
              title="Hiding Assets During Divorce in Australia: Legal Risks & Asset Protection"
              eyebrow="Family Law"
              description="A detailed analysis of the legal risks of hiding assets during divorce in Australia: strict duty of disclosure, court penalties, criminal fraud/perjury, and legal asset protection strategies."
              href="/blog/hiding-assets-during-divorce-australia"
              imageSrc="/images/legal-consultation-clarity.webp"
              imageAlt="Hiding Assets During Divorce in Australia Guide"
            />
            <BlogCard
              title="Easy Guide to Administrative Law in Australia by Bansal Lawyers"
              eyebrow="Administrative Law"
              description="An introductory guide to administrative law in Australia: statutory functions, merits review, tribunal appeals at the ART, judicial review, and government accountability."
              href="/blog/administrative-law-explained-expert-guidance-bansal-lawyers"
              imageSrc="/images/cases/court-case-review.webp"
              imageAlt="Easy Guide to Administrative Law in Australia"
            />
            <BlogCard
              title="Why Having a Power of Attorney in Australia is Crucial"
              eyebrow="Civil & Estate Law"
              description="A guide to Powers of Attorney in Australia: General POA, Enduring Power of Attorney (EPOA), Supportive POA, fiduciary duties, and safeguarding your future."
              href="/blog/why-you-need-power-of-attorney-bansal-lawyers-australia"
              imageSrc="/images/melbourne-legal-chambers.webp"
              imageAlt="Why Having a Power of Attorney in Australia is Crucial"
            />
            <BlogCard
              title="Guide to Successful Co-Parenting After Divorce: Building a Positive Future for Your Family"
              eyebrow="Family Law"
              description="Practical advice on successful co-parenting following divorce in Australia: parenting plans, consent orders, family mediation, and putting children's best interests first."
              href="/blog/guide-to-successful-co-parenting-after-divorce"
              imageSrc="/images/legal-consultation-clarity.webp"
              imageAlt="Guide to Successful Co-Parenting After Divorce"
            />
          </div>
        </Container>
      </Section>
      <CtaSection
        title="Need Advice on a Family or Commercial Law Matter?"
        text="Contact Bansal Lawyers today for confidential advice at our Melbourne CBD office, by phone, or via secure video consultation."
        action={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
