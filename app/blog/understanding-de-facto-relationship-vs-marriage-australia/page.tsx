import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import { DynamicArticleMeta } from "@/components/blog/DynamicArticleMeta";
import { RecommendedArticles } from "@/components/blog/RecommendedArticles";

import {
  Breadcrumbs,
  ButtonLink,
  Container,
  Section,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title:
    "De Facto Relationship vs Marriage in Australia: Differences Explained | Bansal Lawyers",
  description:
    "Understand the legal differences between marriage and de facto relationships in Australia: proving cohabitation, the 2-year rule, property rights under the Family Law Act, and financial agreements.",
  path: "/blog/understanding-de-facto-relationship-vs-marriage-australia",
  keywords: [
    "De Facto Relationship Australia",
    "De Facto vs Marriage Rights Victoria",
    "Proving De Facto Cohabitation Australia",
    "De Facto 2 Year Rule Exceptions",
    "Binding Financial Agreements De Facto",
    "De Facto Property Settlement Lawyers Melbourne",
    "Family Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Understanding the Differences Between a De Facto Relationship and Marriage in Australia",
  },
];

const relatedFamilyServices = [
  {
    title: "Binding Financial Agreements",
    href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
    description:
      "Cohabitation agreements and pre-nuptial agreements protecting individual assets and inheritances.",
  },
  {
    title: "Property Settlement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
    description:
      "Equitable division of property, joint debts, and superannuation following separation.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description:
      "Formalising agreed property settlements and parenting arrangements into binding court orders.",
  },
  {
    title: "Spousal Maintenance Lawyer Melbourne",
    href: "/family-lawyers-melbourne/spousal-maintenance-lawyer-melbourne/",
    description:
      "Assistance assessing spousal support eligibility and lodging maintenance applications.",
  },
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description:
      "Legal separation guidance, sole and joint divorce filings, and court representation.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description:
      "Comprehensive, empathetic family law solutions for married and de facto couples across Victoria.",
  },
];

export default function DeFactoVsMarriageGuidePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Understanding the Differences Between a De Facto Relationship and Marriage in Australia",
          description:
            "Understand the legal differences between marriage and de facto relationships in Australia: proving cohabitation, the 2-year rule, property rights under the Family Law Act, and financial agreements.",
          path: "/blog/understanding-de-facto-relationship-vs-marriage-australia",
          datePublished: "2025-01-08",
          dateModified: "2025-01-08",
          authorName: "Bansal Lawyers",
        })}
      />
      <StructuredData data={createLegalServiceSchema()} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Article Header Hero */}
      <section
        style={{
          background: "var(--navy-900)",
          color: "var(--white)",
          padding: "clamp(2.75rem, 5.5vw, 4.25rem) 0 clamp(2.25rem, 4.5vw, 3.25rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
                lineHeight: "1.22",
                color: "var(--white)",
                margin: "0 0 1.25rem",
                fontWeight: 700,
              }}
            >
              Understanding the Differences Between a De Facto Relationship and Marriage in Australia
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 08, 2025"
              category="Family Law"
              initialWords={763}
              initialReadTime="4 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Family Law Act 1975 De Facto Jurisdiction",
          "Property Settlements & Superannuation Splitting",
          "Binding Financial Agreements (Cohabitation Deeds)",
          "Melbourne CBD & Victoria-Wide Representation",
        ]}
      />

      {/* Main Content Layout */}
      <Section tone="white">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              maxWidth: "56rem",
              margin: "0 auto",
            }}
          >
            {/* Main Article Body */}
            <article
              style={{
                background: "#ffffff",
                padding: "clamp(1.75rem, 4vw, 3rem)",
                borderRadius: "1rem",
                boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
                border: "1px solid #e2e8f0",
                fontSize: "1.0625rem",
                lineHeight: "1.75",
                color: "#334155",
              }}
            >
              {/* Featured Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(220px, 35vw, 380px)",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  marginBottom: "2.25rem",
                }}
              >
                <Image
                  src="/images/legal-consultation-clarity.webp"
                  alt="Understanding the Differences Between a De Facto Relationship and Marriage in Australia"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Subheading / Introduction */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                  color: "var(--navy-900)",
                  marginTop: "0",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Insights from Bansal Lawyers
              </h2>

              <p style={{ marginBottom: "2rem" }}>
                In Australia, both marriage and de facto relationships are recognized under the law, but they come with distinct legal definitions and requirements. Whether you are in a marriage or a de facto relationship, understanding the differences is crucial, especially when it comes to property settlements, financial agreements, and rights following separation. At Bansal Lawyers, we provide expert guidance to help you navigate these complexities.
              </p>

              {/* Section 1 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                <Link
                  href="/blog/step-by-step-guide-applying-divorce-in-australia"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  The Definition of Marriage vs. De Facto Relationship
                </Link>
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                In Australia, marriage is a formal and legal union between two people, entered into voluntarily for life. Once married, the law automatically recognizes the relationship, and your marriage certificate is proof of that.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                A de facto relationship is when two people live together and share a domestic life, but are not married or related. Unlike marriage, a de facto relationship doesn’t have the same official recognition, which can make legal matters more complicated.
              </p>

              {/* Section 2 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Proving a Marriage vs. Proving a De Facto Relationship
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Proving you are married is relatively straightforward—simply present your marriage certificate. However, proving that you are in a de facto relationship is more complicated. To make financial claims after the breakdown of a de facto relationship, you must demonstrate that you and your partner lived together or maintained a domestic relationship for a minimum of two years.
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "0.75rem",
                  border: "1px solid #e2e8f0",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.75rem" }}>
                  Evidence to support the existence of a de facto relationship can include:
                </strong>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    fontSize: "0.98rem",
                    color: "#475569",
                  }}
                >
                  <li>Joint property ownership or lease agreements</li>
                  <li>Joint bank accounts</li>
                  <li>Household bills in both names</li>
                  <li>Mail addressed to both parties at the same address</li>
                </ul>
              </div>

              <div
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderLeft: "4px solid #16a34a",
                  borderRadius: "0.5rem",
                  padding: "1.25rem",
                  marginBottom: "2rem",
                }}
              >
                <strong style={{ color: "#166534", display: "block", marginBottom: "0.5rem" }}>
                  However, you can bypass the two-year rule if:
                </strong>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                    fontSize: "0.95rem",
                    color: "#14532d",
                  }}
                >
                  <li>You have registered the relationship</li>
                  <li>You share a child together</li>
                  <li>One partner has made a substantial financial contribution to the relationship</li>
                </ul>
              </div>

              {/* Section 3 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Do De Facto Couples Have the Same Legal Rights as Married Couples?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Under the Family Law Act, de facto couples are afforded the same legal rights as married couples when it comes to property settlements, financial settlements, and spousal maintenance, regardless of whether the relationship is heterosexual or same-sex. However, it&apos;s important to note that some couples may still have rights under older state-based de facto relationship laws if they separated before the Commonwealth took over jurisdiction under the Family Law Act.
              </p>

              <div
                style={{
                  background: "#eff6ff",
                  borderLeft: "4px solid #3b82f6",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#1e3a8a" }}>
                  If you’re unsure about your rights, it’s always a good idea to consult with an experienced family lawyer.
                </p>
              </div>

              {/* Section 4 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                <Link
                  href="/blog/how-to-divide-finances-and-property-after-separation-australia"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Marriage vs. De Facto Relationship: What to Consider
                </Link>
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Marriage is indisputable. Once you’ve had a valid marriage ceremony, the law immediately recognizes your union. This can provide significant legal advantages:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Power of Attorney
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    If your spouse becomes incapacitated, you may more easily be granted Power of Attorney over their finances and legal affairs.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #059669",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Inheritance
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    If your spouse passes away without a will, you may automatically be entitled to part or all of their estate.
                  </span>
                </div>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                In a de facto relationship, these legal benefits may not automatically apply. For example, if your partner dies without a will, you may not be entitled to their estate unless you’ve taken specific steps to establish your legal standing.
              </p>

              {/* Section 5 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                How to Protect Yourself in a De Facto Relationship
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                If you choose not to marry, there are several steps you can take to protect yourself legally in a de facto relationship:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Register the Relationship:
                  </strong>
                  This can make your relationship legally recognized and can help secure many of the same rights as a married couple.
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Draw Up a Financial Agreement:
                  </strong>
                  A financial agreement outlines how property and finances will be handled in the event of a separation.
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Include Each Other in Estate Planning:
                  </strong>
                  Have a will that specifies how your estates will be administered and distributed, and nominate each other as beneficiaries for superannuation funds, life insurance, and other investments.
                </div>
              </div>

              {/* Section 6 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Conclusion
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Whether you are in a marriage or a de facto relationship, the law recognizes both types of unions, but they come with distinct legal definitions and requirements. While the legal rights for de facto couples have been aligned with those of married couples in many areas, the process of proving the relationship and securing legal benefits can be more complex.
              </p>

              <p style={{ marginBottom: "1.25rem" }}>
                At Bansal Lawyers, we are here to assist you in understanding and managing the complexities of family law, whether you are married, in a de facto relationship, or considering a separation. If you’re unsure about your rights or need assistance with a financial agreement, property settlement, or other family law matters, don’t hesitate to reach out to us for expert advice and representation.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                Contact Bansal Lawyers today to discuss your situation and ensure you have the right legal protection for your relationship.
              </p>

              {/* CTA Box */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
                  color: "var(--white)",
                  padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  borderRadius: "0.875rem",
                  marginTop: "2.5rem",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    color: "var(--white)",
                    fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                  }}
                >
                  Need Advice on De Facto Rights or a Financial Agreement?
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1rem",
                    maxWidth: "36rem",
                    margin: "0 auto 1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  Our Melbourne family law team assists married and de facto couples with cohabitation agreements, property settlements, relationship registration, and estate protections.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Consult a De Facto Family Lawyer
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Family Services */}
            <div
              style={{
                background: "#ffffff",
                padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
                borderRadius: "1rem",
                boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.35rem",
                  color: "var(--navy-900)",
                  marginBottom: "1.25rem",
                  fontWeight: 700,
                }}
              >
                Related Family Law Practice Areas
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {relatedFamilyServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    style={{
                      display: "block",
                      padding: "1.2rem",
                      borderRadius: "0.5rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 0.4rem",
                        fontSize: "1.05rem",
                        color: "var(--navy-900)",
                        fontWeight: 600,
                      }}
                    >
                      {service.title} &rarr;
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.875rem",
                        color: "#64748b",
                        lineHeight: "1.5",
                      }}
                    >
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/understanding-de-facto-relationship-vs-marriage-australia" />
          </div>
        </Container>
      </Section>
    </>
  );
}
