import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
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
    "Dividing Finances and Property After Separation in Australia | Bansal Lawyers",
  description:
    "A complete guide by Bansal Lawyers on how to divide finances, assets, debts, superannuation, and spousal maintenance after separation or divorce in Australia.",
  path: "/blog/how-to-divide-finances-and-property-after-separation-australia",
  keywords: [
    "Dividing Finances After Separation Australia",
    "Property Settlement Australia",
    "Spousal Maintenance Family Law Melbourne",
    "Consent Orders Property Separation",
    "Time Limits Property Settlement Australia",
    "De Facto Property Settlement Victoria",
    "Family Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Dividing Finances and Property After Separation in Australia: A Complete Guide",
  },
];

const relatedFamilyServices = [
  {
    title: "Property Settlement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
    description:
      "Expert representation for asset division, financial agreements, property settlements, and superannuation splitting.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description:
      "Legally binding, court-approved financial and parenting consent orders without costly litigation.",
  },
  {
    title: "Spousal Maintenance Lawyer Melbourne",
    href: "/family-lawyers-melbourne/spousal-maintenance-lawyer-melbourne/",
    description:
      "Assistance assessing spousal support eligibility, interim maintenance, and defending or lodging maintenance claims.",
  },
  {
    title: "Binding Financial Agreements",
    href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
    description:
      "Formal financial agreements before, during, or after separation to protect property and assets.",
  },
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description:
      "Clear legal guidance for joint and sole divorce applications and legal separation requirements.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description:
      "Full-service family law solutions prioritising fair settlements and strategic legal protection.",
  },
];

export default function DividingFinancesPropertyGuidePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Dividing Finances and Property After Separation in Australia: A Complete Guide",
          description:
            "A complete guide by Bansal Lawyers on how to divide finances, assets, debts, superannuation, and spousal maintenance after separation or divorce in Australia.",
          path: "/blog/how-to-divide-finances-and-property-after-separation-australia",
          datePublished: "2025-01-16",
          dateModified: "2025-01-16",
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
              Dividing Finances and Property After Separation in Australia: A Complete Guide
            </h1>

            {/* Meta Strip: Jan 16, 2025 | 5 min read | 827 words | Bansal Lawyers */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem 2rem",
                alignItems: "center",
                fontSize: "0.92rem",
                color: "rgba(255, 255, 255, 0.85)",
                paddingTop: "0.75rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#93c5fd" }}
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Jan 16, 2025
              </span>

              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#93c5fd" }}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                5 min read
              </span>

              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#93c5fd" }}
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                827 words
              </span>

              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#93c5fd" }}
                  aria-hidden="true"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Bansal Lawyers
              </span>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Family Law Act 1975 Compliance",
          "Property Settlements & Super Splitting",
          "Consent Orders & Financial Agreements",
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
                  alt="Dividing Finances and Property After Separation in Australia"
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
                Finances and Property After Separation: A Guide from Bansal Lawyers
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                When a relationship comes to an end, whether through divorce or the breakdown of a de facto relationship, one of the most complex issues to resolve is how to divide property, finances, and responsibilities. If you’re facing this challenge, understanding the legal processes and your rights is crucial to ensuring a fair outcome.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                At Bansal Lawyers, we know that these financial matters can be overwhelming, which is why we’ve put together this guide to help you navigate the key steps involved in dividing property and resolving financial support issues after separation.
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
                  href="/blog/parenting-arrangements-after-divorce-in-australia"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Understanding Financial Arrangements After Separation
                </Link>
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                When a relationship ends, several financial matters need to be addressed, including:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.75rem",
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
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Property Division
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    How assets and liabilities will be split between both parties.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #0284c7",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Debts
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Who will be responsible for any outstanding debts, loans, or mortgages.
                  </p>
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
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Financial Support
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    This could be ongoing support for yourself or for your dependent children.
                  </p>
                </div>
              </div>

              <p style={{ marginBottom: "1.25rem" }}>
                If you and your former partner can agree on how to divide everything, you can formalise it through Consent Orders or a Financial Agreement. This process can save you time, stress, and money by avoiding the need for court involvement.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                But if you can’t agree, don’t worry! There are alternative solutions like mediation or other forms of alternative dispute resolution (ADR) that can help you reach a fair agreement without the need to go to court. If all else fails, you can apply to the Family Court to make a final decision on how to divide the property and any financial support obligations.
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
                Divorce vs. Financial Proceedings: Two Separate Processes
              </h2>

              <div
                style={{
                  background: "#eff6ff",
                  borderLeft: "4px solid #3b82f6",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: 0, color: "#1e3a8a", fontWeight: 500 }}>
                  It’s important to remember that divorce and financial proceedings are separate legal processes. Even if your divorce isn’t finalised, you can still apply to the court for financial orders. Likewise, you can seek property or maintenance orders before your divorce is final.
                </p>
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
                Types of Financial Support After Separation
              </h2>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Spousal Maintenance:
                  </strong>
                  If one partner needs financial support after separation, they can apply for spousal maintenance. This applies to both married and de facto relationships.
                </li>
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Child Support:
                  </strong>
                  Parents have a legal obligation to support their children financially after separation. You can apply for child support or child maintenance orders to ensure your children’s needs are met.
                </li>
              </ul>

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
                How the Court Makes Financial Decisions
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                If your case goes to court, the judge doesn’t use a fixed formula to divide assets or determine maintenance. Instead, the court considers multiple factors to ensure a “just and equitable” outcome:
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "0.75rem",
                  border: "1px solid #e2e8f0",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <li>
                    <strong style={{ color: "var(--navy-900)" }}>Financial Contributions:</strong>{" "}
                    This includes income, assets brought into the relationship, and inheritances.
                  </li>
                  <li>
                    <strong style={{ color: "var(--navy-900)" }}>Non-Financial Contributions:</strong>{" "}
                    Like homemaking or caring for children.
                  </li>
                  <li>
                    <strong style={{ color: "var(--navy-900)" }}>The Welfare of Children:</strong>{" "}
                    The judge will also consider the needs of any children involved and each party’s future requirements, including age, health, and financial resources.
                  </li>
                </ul>
              </div>

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
                Time Limits for Financial Applications
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Time is crucial when it comes to financial claims after separation:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "#fffbeb",
                    border: "1px solid #fde68a",
                    borderLeft: "4px solid #d97706",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#92400e", display: "block", marginBottom: "0.35rem" }}>
                    For Marriages
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#78350f" }}>
                    Applications must be made within <strong>12 months</strong> of the divorce being final.
                  </span>
                </div>

                <div
                  style={{
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderLeft: "4px solid #dc2626",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#991b1b", display: "block", marginBottom: "0.35rem" }}>
                    For De Facto Relationships
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#7f1d1d" }}>
                    Applications must be made within <strong>2 years</strong> from the breakdown of the relationship.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderLeft: "4px solid #16a34a",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#166534", display: "block", marginBottom: "0.35rem" }}>
                    For Null & Void Marriages
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#14532d" }}>
                    Applications must be made within <strong>12 months</strong> of the decree of nullity.
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: "#fff7ed",
                  borderLeft: "4px solid #f97316",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#9a3412" }}>
                  <strong>Make sure to act promptly!</strong> Missing these deadlines could limit your ability to resolve financial matters. If you do miss the deadline, you may need to seek permission from the court, which isn’t always guaranteed.
                </p>
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
                Other Financial Considerations: Superannuation and Bankruptcy
              </h2>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Superannuation:
                  </strong>
                  Your superannuation can be part of the property division, and you may be entitled to a share of your partner’s superannuation, or vice versa.
                </li>
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Bankruptcy:
                  </strong>
                  If either partner is bankrupt, it may affect how assets and debts are divided. The court can address bankruptcy in family law proceedings to ensure fairness.
                </li>
              </ul>

              {/* Section 7 */}
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
                Why You Should Seek Legal Advice
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Family law can be complicated, and understanding your rights and options is vital. While you don’t have to hire a lawyer to apply for consent orders or start legal proceedings, having experienced legal support is highly recommended. A family lawyer can guide you through the process, help you assess your options, and ensure your interests are protected.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                At Bansal Lawyers, we specialise in family law and financial settlements. We offer expert advice and representation to help you through this difficult time. Whether you need help with property division, spousal maintenance, or child support, we’re here to support you every step of the way.
              </p>

              {/* Section 8 */}
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
                Contact Us
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Dealing with finances after separation doesn’t have to be a stressful, confusing process. With the right legal advice and a clear understanding of your options, you can resolve financial matters in a way that’s fair and beneficial for both parties.
              </p>

              <p style={{ marginBottom: "1.25rem" }}>
                At Bansal Lawyers, we’re committed to helping you navigate the complexities of family law with confidence and peace of mind.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                <Link
                  href="/contact"
                  style={{
                    color: "#2563eb",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  Contact us today
                </Link>{" "}
                to learn more or schedule a consultation. Let us help you through this challenging time with expert guidance.
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
                  Need Clarity on Dividing Your Assets After Separation?
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
                  Speak with our Melbourne family lawyers today for tailored legal guidance on property division, consent orders, and spousal maintenance.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Schedule a Consultation
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Family Law Services */}
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
          </div>
        </Container>
      </Section>
    </>
  );
}
