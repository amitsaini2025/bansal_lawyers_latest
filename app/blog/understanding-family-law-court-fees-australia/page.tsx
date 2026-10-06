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
    "Understanding Family Law Court Fees in Australia | Bansal Lawyers",
  description:
    "A guide by Bansal Lawyers to Federal Circuit and Family Court fees in Australia: divorce filing fees, consent orders, conciliation conferences, hearing fees, and hardship exemptions.",
  path: "/blog/understanding-family-law-court-fees-australia",
  keywords: [
    "Family Law Court Fees Australia",
    "Divorce Application Fee Victoria",
    "Family Court Filing Fees Melbourne",
    "Consent Orders Court Fees",
    "Family Law Fees Regulations 2022",
    "Court Fee Exemptions Hardship Australia",
    "Family Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label: "Understanding Family Law Court Fees in Australia by Bansal Lawyers",
  },
];

const relatedFamilyServices = [
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description: "Sole and joint divorce applications, marriage separation under one roof, and court filings.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description: "Cost-effective, legally enforceable parenting and property consent orders approved by the Family Court.",
  },
  {
    title: "Property Settlement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
    description: "Financial dispute resolution, asset division, superannuation splitting, and financial settlements.",
  },
  {
    title: "Child Custody Lawyer Melbourne",
    href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
    description: "Parenting arrangements, parental responsibility, living schedules, and court orders.",
  },
  {
    title: "Binding Financial Agreements",
    href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
    description: "Pre-nuptial, post-nuptial, and separation financial agreements avoiding court proceedings.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description: "Comprehensive, transparent family law guidance and representation across Victoria.",
  },
];

export default function FamilyLawCourtFeesGuidePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Understanding Family Law Court Fees in Australia by Bansal Lawyers",
          description:
            "A guide by Bansal Lawyers to Federal Circuit and Family Court fees in Australia: divorce filing fees, consent orders, conciliation conferences, hearing fees, and hardship exemptions.",
          path: "/blog/understanding-family-law-court-fees-australia",
          datePublished: "2025-01-17",
          dateModified: "2025-01-17",
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
              Understanding Family Law Court Fees in Australia by Bansal Lawyers
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 17, 2025"
              category="Family Law"
              initialWords={750}
              initialReadTime="4 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Family Law (Fees) Regulations 2022",
          "Effective from 1 July 2024 Schedule",
          "Exemptions & Concession Card Reductions",
          "Melbourne CBD & Victoria-Wide Representation",
        ]}
      />

      {/* Main Article Content */}
      <Section tone="white">
        <Container>
          <div
            style={{
              maxWidth: "56rem",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
            }}
          >
            {/* Featured Visual Image */}
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Image
                src="/images/legal-consultation-clarity.webp"
                alt="Family law court fees and legal advice at Bansal Lawyers Melbourne"
                width={1200}
                height={630}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                priority
              />
            </div>

            {/* Content Body */}
            <article style={{ display: "grid", gap: "2.25rem", color: "var(--ink-700)", lineHeight: 1.8 }}>
              {/* Introduction */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  A Guide by Bansal Lawyers in Melbourne
                </h2>
                <p style={{ fontSize: "1.08rem", marginBottom: "1rem" }}>
                  Family law matters can be challenging, particularly when it comes to understanding the costs involved. As you embark on your legal journey whether you are seeking a divorce, child custody arrangement, or financial settlement. it is crucial to know what fees to expect and how they may impact your case.
                </p>
                <p style={{ fontSize: "1.08rem", margin: 0 }}>
                  At Bansal Lawyers, we believe in providing clarity about the legal process, so here’s a comprehensive breakdown of the fees that you might encounter in family law proceedings in Australia, based on the Federal Government’s <em>Family Law (Fees) Regulations 2022</em>. These fees are effective from 1 July 2024 and can help you budget appropriately for your case.
                </p>
              </section>

              {/* 1. Filing Fees */}
              <section>
                <div
                  style={{
                    background: "var(--sand-50)",
                    padding: "1.75rem 2rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      color: "var(--navy-900)",
                      marginTop: 0,
                      marginBottom: "0.75rem",
                    }}
                  >
                    1. Filing Fees: The Initial Step in Family Law Proceedings
                  </h2>
                  <p style={{ marginBottom: "1.25rem" }}>
                    When you file a case in court, you&apos;ll need to pay a filing fee. These fees vary depending on the type of application you&apos;re submitting. Below are some of the most common fees:
                  </p>

                  <div style={{ display: "grid", gap: "0.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Application for Divorce</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$1,100</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Application for Divorce (Reduced Fee)*</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$365</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Application for Consent Orders</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$200</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Application for Decree as to Nullity</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$1,560</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Application for Decree as to Nullity (Reduced Fee)</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$520</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Initiating Application (Parenting or Financial, Final Only)</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$425</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Initiating Application (Parenting or Financial, Final and Interim)</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$570</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Initiating Application (Parenting and Financial, Final Only)</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$695</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span><strong>Initiating Application (Parenting and Financial, Final and Interim)</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$840</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0" }}>
                      <span><strong>Response to Initiating Application (Final)</strong></span>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$425</span>
                    </div>
                  </div>

                  <p style={{ marginTop: "1.25rem", marginBottom: 0, fontSize: "0.95rem", color: "var(--ink-600)" }}>
                    *Available if both parties meet eligibility criteria. If you’re in a situation where financial hardship is a concern or you hold certain government concession cards, you may be eligible for reduced fees or even exemptions. Be sure to check the specific guidelines or speak with our legal team to see if you qualify.
                  </p>
                </div>
              </section>

              {/* 2. Court Event Fees */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  2. Court Event Fees: Costs for Court Hearings and Conferences
                </h2>
                <p style={{ marginBottom: "1.25rem" }}>
                  As your case moves forward, additional fees may apply for court events such as hearings or conciliation conferences. These fees help cover the administrative costs of organizing and conducting these proceedings.
                </p>

                <div style={{ display: "grid", gap: "1rem" }}>
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Setting Down for Hearing Fee (Defended Matter)
                    </strong>
                    <div style={{ display: "flex", gap: "2rem", marginTop: "0.5rem" }}>
                      <span><strong>Division 2:</strong> $770</span>
                      <span><strong>Division 1:</strong> $1,045</span>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Daily Hearing Fee (for Each Hearing Day, Excluding the First Day)
                    </strong>
                    <div style={{ display: "flex", gap: "2rem", marginTop: "0.5rem" }}>
                      <span><strong>Division 2:</strong> $770</span>
                      <span><strong>Division 1:</strong> $1,045</span>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Conciliation Conference Fee
                    </strong>
                    <div style={{ marginTop: "0.25rem" }}>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>$480</span>
                    </div>
                  </div>
                </div>

                <p style={{ marginTop: "1.25rem", marginBottom: 0 }}>
                  These event fees are non-refundable once paid, so it’s important to be prepared for these costs. If your case goes to a trial or if hearings are scheduled over multiple days, you will need to account for daily hearing fees.
                </p>
              </section>

              {/* 3. Additional Costs */}
              <section>
                <div
                  style={{
                    background: "var(--sand-50)",
                    padding: "1.75rem 2rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      color: "var(--navy-900)",
                      marginTop: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    3. Additional Costs: Other Court-Related Fees
                  </h2>
                  <p style={{ marginBottom: "1rem" }}>
                    There are also various smaller fees for specific actions in the court process, such as:
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", margin: 0, display: "grid", gap: "0.5rem" }}>
                    <li>
                      <strong>Interim Order Application (Parenting or Financial):</strong> $145
                    </li>
                    <li>
                      <strong>Issue Subpoena:</strong> $65
                    </li>
                    <li>
                      <strong>Application Under the Trans-Tasman Proceedings Act 2010:</strong> $145
                    </li>
                    <li>
                      <strong>Filing an Application to Register a New Zealand Judgment:</strong> $130
                    </li>
                  </ul>
                </div>
              </section>

              {/* 4. Payment Methods */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  4. Payment Methods for Court Fees
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  To make the payment process easier, family law court fees can be paid in several ways, including:
                </p>
                <ul style={{ paddingLeft: "1.25rem", margin: "0 0 1rem", display: "grid", gap: "0.5rem" }}>
                  <li><strong>Online Payments:</strong> Via the Commonwealth Courts Portal for eFiling.</li>
                  <li><strong>Eftpos, Debit or Credit Card:</strong> Directly at the court registry.</li>
                  <li><strong>Mail Payments:</strong> Using Visa or MasterCard credit/debit cards (or pre-paid debit cards available at retail outlets).</li>
                </ul>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    background: "linear-gradient(135deg, rgba(234, 240, 246, 0.9) 0%, rgba(245, 242, 235, 0.95) 100%)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 600, color: "var(--navy-900)" }}>
                    It’s important to note that GST does not apply to court fees, which simplifies the cost structure.
                  </p>
                </div>
              </section>

              {/* 5. Reduced Fees and Exemptions */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  5. Reduced Fees and Exemptions for Those Facing Financial Hardship
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  If you&apos;re facing financial hardship, you may be eligible for reduced fees or fee exemptions, particularly for divorce and decree of nullity applications. Both parties must meet eligibility requirements for a reduced fee in divorce applications filed jointly.
                </p>
                <p style={{ margin: 0 }}>
                  To see if you qualify for reduced fees or fee exemptions, be sure to consult the Guidelines for Reduced Fees or reach out to our legal team for further assistance.
                </p>
              </section>

              {/* 6. How Bansal Lawyers Can Help */}
              <section>
                <div
                  style={{
                    background: "var(--sand-50)",
                    padding: "1.75rem 2rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.45rem",
                      color: "var(--navy-900)",
                      marginTop: 0,
                      marginBottom: "0.75rem",
                    }}
                  >
                    6. How Bansal Lawyers Can Help
                  </h2>
                  <p style={{ margin: 0 }}>
                    At Bansal Lawyers, we understand that{" "}
                    <Link
                      href="/family-lawyers-melbourne"
                      style={{ color: "var(--navy-900)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      family law proceedings
                    </Link>{" "}
                    can be financially and emotionally draining. That&apos;s why we aim to make the process as transparent and manageable as possible. We’re here to guide you through the complexities of the legal system while ensuring that you understand the costs involved at each stage.
                  </p>
                </div>
              </section>

              {/* CTA Box */}
              <div
                style={{
                  background: "var(--navy-900)",
                  color: "var(--white)",
                  padding: "2.25rem 2rem",
                  borderRadius: "var(--radius-md)",
                  marginTop: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--white)",
                    marginTop: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  Need Clear Guidance on Family Court Fees &amp; Applications?
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Our Melbourne family law team provides transparent fee estimates, advice on fee waiver exemptions, and strategic dispute resolution to minimize litigation expenses.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <ButtonLink href="/book-an-appointment" variant="primary">
                    Book a Family Consultation
                  </ButtonLink>
                  <ButtonLink href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne" variant="secondary">
                    Consent Orders Services
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Practice Areas Grid */}
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--line)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.5rem",
                  color: "var(--navy-900)",
                  marginBottom: "0.5rem",
                }}
              >
                Related Family Law Practice Areas
              </h2>
              <p
                style={{
                  color: "var(--ink-600)",
                  fontSize: "0.95rem",
                  marginBottom: "1.5rem",
                }}
              >
                Our Melbourne family lawyers provide compassionate, transparent counsel across Victoria.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {relatedFamilyServices.map((service) => (
                  <div
                    key={service.href}
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "var(--navy-900)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--ink-600)",
                          lineHeight: 1.6,
                          marginBottom: "1rem",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "var(--navy-800)",
                        textDecoration: "underline",
                      }}
                    >
                      View Service Details &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/understanding-family-law-court-fees-australia" />
          </div>
        </Container>
      </Section>
    </>
  );
}
