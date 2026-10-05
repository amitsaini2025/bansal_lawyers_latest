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

const blogArticles: BlogArticleItem[] = [
  {
    id: "divorce-lawyers-guide",
    title: "Divorce Lawyers in Melbourne Australia — Complete Guide for Couple",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A complete guide to navigating divorce in Australia under the Family Law Act 1975: legal requirements, required documents, joint vs sole applications, filing fees, and court procedures.",
    href: "/blog/divorce-lawyers-in-melbourne-australia-complete-guide-for-couple",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Divorce Lawyers in Melbourne Australia Guide",
    publishedDate: "Jan 31, 2026",
    readTime: "4 min read",
  },
  {
    id: "top-10-legal-services",
    title: "Top 10 Legal Services in Australia",
    eyebrow: "Legal Practice",
    category: "Legal Practice",
    description:
      "An overview of 10 common legal services in Australia including immigration, family law, criminal defence, employment, property, business law, and civil disputes.",
    href: "/blog/top-10-legal-services-australia-bansal-lawyers-melbourne",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Top 10 Legal Services in Australia Guide",
    publishedDate: "Sep 26, 2025",
    readTime: "3 min read",
  },
  {
    id: "civil-dispute-resolution-act",
    title:
      "What is the Civil Dispute Resolution Act 2011 A Guide to Settling Disputes Without Court in Australia",
    eyebrow: "Civil Law",
    category: "Civil & Estate Law",
    description:
      "Learn how the Civil Dispute Resolution Act 2011 (Cth) helps individuals and businesses resolve disputes through genuine steps and mediation before filing in court.",
    href: "/blog/what-is-the-civil-dispute-resolution-act-2011-australia",
    imageSrc: "/images/blog/commercial-contracts.webp",
    imageAlt: "Civil Dispute Resolution Act 2011 Guide",
    publishedDate: "Mar 28, 2025",
    readTime: "4 min read",
  },
  {
    id: "closing-loopholes-contractors",
    title:
      "Understanding the Closing Loopholes Reforms: Changes for Independent Contractors",
    eyebrow: "Commercial Law",
    category: "Commercial Law",
    description:
      "A guide to Australia's Fair Work Closing Loopholes No. 2 reforms, contractor vs employee tests, gig worker protections, and the landmark Amita Gupta Uber Eats decision.",
    href: "/blog/closing-loopholes-reforms-independent-contractors",
    imageSrc: "/images/blog/commercial-contracts.webp",
    imageAlt: "Closing Loopholes Reforms for Independent Contractors",
    publishedDate: "Mar 06, 2025",
    readTime: "6 min read",
  },
  {
    id: "how-to-build-strong-brand",
    title:
      "How to Build a Strong Brand: Legal Considerations for Your Business Identity",
    eyebrow: "Commercial Law",
    category: "Commercial Law",
    description:
      "A guide to choosing the right business structure in Australia: sole trader, partnership, and company structures, tax implications, personal liability, and key differences.",
    href: "/blog/how-to-build-strong-brand-legal-considerations-for-your-business-identity-in-australia",
    imageSrc: "/images/blog/commercial-contracts.webp",
    imageAlt: "How to Build a Strong Brand and Business Structure Guide",
    publishedDate: "Jan 27, 2025",
    readTime: "4 min read",
  },
  {
    id: "hiding-assets-during-divorce",
    title:
      "Hiding Assets During Divorce in Australia: Legal Risks & Asset Protection",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A detailed analysis of the legal risks of hiding assets during divorce in Australia: strict duty of disclosure, court penalties, criminal fraud/perjury, and legal asset protection strategies.",
    href: "/blog/hiding-assets-during-divorce-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Hiding Assets During Divorce in Australia Guide",
    publishedDate: "Jan 24, 2025",
    readTime: "4 min read",
  },
  {
    id: "administrative-law-explained",
    title: "Easy Guide to Administrative Law in Australia by Bansal Lawyers",
    eyebrow: "Administrative Law",
    category: "Administrative Law",
    description:
      "An introductory guide to administrative law in Australia: statutory functions, merits review, tribunal appeals at the ART, judicial review, and government accountability.",
    href: "/blog/administrative-law-explained-expert-guidance-bansal-lawyers",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt: "Easy Guide to Administrative Law in Australia",
    publishedDate: "Jan 23, 2025",
    readTime: "4 min read",
  },
  {
    id: "why-you-need-power-of-attorney",
    title: "Why Having a Power of Attorney in Australia is Crucial",
    eyebrow: "Civil & Estate Law",
    category: "Civil & Estate Law",
    description:
      "A guide to Powers of Attorney in Australia: General POA, Enduring Power of Attorney (EPOA), Supportive POA, fiduciary duties, and safeguarding your future.",
    href: "/blog/why-you-need-power-of-attorney-bansal-lawyers-australia",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Why Having a Power of Attorney in Australia is Crucial",
    publishedDate: "Jan 22, 2025",
    readTime: "4 min read",
  },
  {
    id: "guide-to-successful-co-parenting",
    title:
      "Guide to Successful Co-Parenting After Divorce: Building a Positive Future for Your Family",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "Practical advice on successful co-parenting following divorce in Australia: parenting plans, consent orders, family mediation, and putting children's best interests first.",
    href: "/blog/guide-to-successful-co-parenting-after-divorce",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Guide to Successful Co-Parenting After Divorce",
    publishedDate: "Jan 21, 2025",
    readTime: "3 min read",
  },
  {
    id: "breaking-rental-agreement-early",
    title:
      "Breaking a Rental Agreement Early in Australia: Your Legal Rights Explained by Bansal Lawyers",
    eyebrow: "Property Law",
    category: "Property Law",
    description:
      "Understand tenant rights when breaking a rental agreement early in Australia: lease break costs, compensation rules, VCAT severe hardship applications, and notice periods.",
    href: "/blog/breaking-rental-agreement-early-in-australia",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Breaking a Rental Agreement Early in Australia Guide",
    publishedDate: "Jan 20, 2025",
    readTime: "4 min read",
  },
  {
    id: "parenting-arrangements-after-divorce",
    title:
      "Parenting Arrangements After Divorce in Australia Insights from Bansal Lawyers",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A comprehensive guide to parenting arrangements after divorce in Australia: child's best interests under the Family Law Act 1975, parenting plans, consent orders, and mediation.",
    href: "/blog/parenting-arrangements-after-divorce-in-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Parenting Arrangements After Divorce in Australia Guide",
    publishedDate: "Jan 18, 2025",
    readTime: "7 min read",
  },
  {
    id: "understanding-family-law-court-fees",
    title:
      "Understanding Family Law Court Fees in Australia by Bansal Lawyers",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A guide by Bansal Lawyers to Federal Circuit and Family Court fees in Australia: divorce filing fees, consent orders, conciliation conferences, hearing fees, and hardship exemptions.",
    href: "/blog/understanding-family-law-court-fees-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Understanding Family Law Court Fees in Australia Guide",
    publishedDate: "Jan 17, 2025",
    readTime: "4 min read",
  },
  {
    id: "how-to-divide-finances-and-property",
    title:
      "Dividing Finances and Property After Separation in Australia: A Complete Guide",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A complete guide by Bansal Lawyers on how to divide finances, assets, debts, superannuation, and spousal maintenance after separation or divorce in Australia.",
    href: "/blog/how-to-divide-finances-and-property-after-separation-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt:
      "Dividing Finances and Property After Separation in Australia Guide",
    publishedDate: "Jan 16, 2025",
    readTime: "5 min read",
  },
  {
    id: "step-by-step-guide-applying-divorce",
    title: "Step-by-Step Guide to Applying for Divorce in Australia",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A step-by-step guide to applying for divorce in Australia by Bansal Lawyers: sole vs joint applications, eligibility criteria, required documents, filing fees, and court process.",
    href: "/blog/step-by-step-guide-applying-divorce-in-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Step-by-Step Guide to Applying for Divorce in Australia",
    publishedDate: "Jan 15, 2025",
    readTime: "5 min read",
  },
];

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
