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
    "Guide to Applying for Divorce in Australia | Bansal Lawyers",
  description:
    "A comprehensive step-by-step guide to applying for divorce in Australia by Bansal Lawyers: eligibility, sole vs joint applications, required documents, fees, and court process.",
  path: "/blog/step-by-step-guide-applying-divorce-in-australia",
  keywords: [
    "Divorce Application Australia",
    "How to Apply for Divorce Victoria",
    "Sole vs Joint Divorce Application",
    "Commonwealth Courts Portal Divorce",
    "Divorce Filing Fees Australia",
    "Separated Under One Roof Divorce",
    "Divorce Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label: "Step-by-Step Guide to Applying for Divorce in Australia",
  },
];

const relatedFamilyServices = [
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description:
      "Sole and joint divorce applications, separation under one roof evidence, and representation in the FCFCOA.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description:
      "Formalising parenting arrangements and property division into legally binding court orders.",
  },
  {
    title: "Property Settlement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
    description:
      "Asset splitting, financial agreements, debt allocation, and superannuation division following divorce.",
  },
  {
    title: "Child Custody Lawyer Melbourne",
    href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
    description:
      "Parenting plans, parental responsibility, and ensuring children's best interests are safeguarded.",
  },
  {
    title: "Spousal Maintenance Lawyer Melbourne",
    href: "/family-lawyers-melbourne/spousal-maintenance-lawyer-melbourne/",
    description:
      "Assistance with urgent or ongoing financial maintenance after separation.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description:
      "Compassionate, strategic legal guidance for all family law matters across Victoria.",
  },
];

export default function StepByStepDivorceGuidePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title: "Step-by-Step Guide to Applying for Divorce in Australia",
          description:
            "A comprehensive step-by-step guide to applying for divorce in Australia by Bansal Lawyers: eligibility, sole vs joint applications, required documents, fees, and court process.",
          path: "/blog/step-by-step-guide-applying-divorce-in-australia",
          datePublished: "2025-01-15",
          dateModified: "2025-01-15",
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
              Step-by-Step Guide to Applying for Divorce in Australia
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 15, 2025"
              category="Family Law"
              initialWords={980}
              initialReadTime="5 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Family Law Act 1975 Jurisdiction",
          "Federal Circuit and Family Court of Australia (FCFCOA)",
          "Commonwealth Courts Portal e-Filing",
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
                  alt="Step-by-Step Guide to Applying for Divorce in Australia"
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
                Your Step-by-Step Guide to Applying for Divorce in Australia
              </h2>

              <p style={{ marginBottom: "2rem" }}>
                At Bansal Lawyers, we understand that divorce is a life-altering and emotional journey. Navigating the legalities of divorce can be overwhelming, but we are here to guide you through the entire process with clarity and confidence.
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
                1. Understanding{" "}
                <Link
                  href="/blog/how-to-divide-finances-and-property-after-separation-australia"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Divorce Jurisdiction and Process in Australia
                </Link>
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                In Australia, divorce is regulated by the Family Law Act 1975 and administered through the Federal Circuit and Family Court of Australia (FCFCOA). The court has jurisdiction to grant a divorce order once it is satisfied that the marriage has irretrievably broken down and the parties have been separated for at least 12 months.
              </p>

              <p style={{ marginBottom: "1.25rem" }}>
                Thanks to digital advancements, divorce applications can now be lodged online through the Commonwealth Courts Portal, making the process more convenient and efficient for applicants.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                At Bansal Lawyers, we understand that divorce can be emotionally complex and legally overwhelming. Our team offers professional guidance and personalised support to ensure the entire process is handled smoothly and in accordance with the law.
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
                2. Your Divorce Application Options
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Depending on your situation, you may apply for divorce in one of two ways:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                {/* Sole Application */}
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderTop: "4px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.75rem",
                    }}
                  >
                    Sole Application
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      fontSize: "0.95rem",
                      color: "#475569",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>Filed by one spouse without the other’s involvement in the initial submission.</li>
                    <li>The applicant is responsible for serving the divorce papers to the other party.</li>
                    <li>Court attendance may be required if there are children under 18, to confirm suitable arrangements are in place.</li>
                  </ul>
                </div>

                {/* Joint Application */}
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderTop: "4px solid #059669",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.75rem",
                    }}
                  >
                    Joint Application
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      fontSize: "0.95rem",
                      color: "#475569",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>Filed together by both spouses.</li>
                    <li>No need for one party to serve the application on the other.</li>
                    <li>Generally, no court appearance is necessary, even if children are involved—provided all documents are in order.</li>
                  </ul>
                </div>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                At Bansal Lawyers, we can help determine which option suits your circumstances and ensure the application is completed without errors.
              </p>

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
                3. Are You Eligible to Apply for Divorce?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                To apply for divorce in Australia, you must meet the following eligibility requirements:
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
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <li>
                    <strong style={{ color: "var(--navy-900)" }}>Residency:</strong> You or your spouse must be an Australian citizen, a permanent resident, or have lived in Australia for at least 12 months prior to filing.
                  </li>
                  <li>
                    <strong style={{ color: "var(--navy-900)" }}>Irretrievable Breakdown of Marriage:</strong> There must be no chance of reconciliation.
                  </li>
                  <li>
                    <strong style={{ color: "var(--navy-900)" }}>Separation Period:</strong> You must be separated for at least 12 months and 1 day.
                  </li>
                </ul>
              </div>

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
                  If you’ve been living under the same roof during separation, you’ll need to provide additional evidence, such as affidavits, to prove the separation occurred.
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
                4. What Documents Do You Need?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                The following documents are essential when lodging your divorce application:
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1.2rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                    Marriage Certificate:
                  </strong>
                  If it’s in a foreign language, a certified English translation must be provided.
                </li>
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1.2rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                    Proof of Separation (if applicable):
                  </strong>
                  This is required if you and your spouse lived together during part or all of the separation period.
                </li>
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1.2rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                    Counselling Certificate:
                  </strong>
                  Needed if you have been married less than two years, unless exempted.
                </li>
              </ul>

              <p style={{ marginBottom: "2rem" }}>
                We assist in ensuring all necessary documents are correctly prepared and submitted to avoid delays or rejections.
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
                5. How to File Your Divorce Application
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                The application process involves the following steps:
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
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Step 1: Register
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Create an account on the Commonwealth Courts Portal.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Step 2: Complete the Form
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Provide detailed information about your marriage, separation, and any children.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Step 3: Upload Supporting Documents
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Attach your marriage certificate and any other required documents.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Step 4: Pay the Filing Fee
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    The standard fee is $1,100, but a reduced fee of $365 may apply if you hold a concession card or can demonstrate financial hardship.
                  </span>
                </div>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                Bansal Lawyers can file on your behalf or assist you in completing each step correctly.
              </p>

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
                6. After Submitting Your Application
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Once the application is submitted:
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
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <li>The court will review your documents and may schedule a hearing.</li>
                  <li>If it’s a sole application, you must serve documents on your spouse and provide proof of service.</li>
                  <li>
                    If the court is satisfied that the legal requirements have been met, it will grant a divorce order, which becomes final one month and one day after the hearing.
                  </li>
                </ul>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                We will track your application, manage deadlines, and represent you if court attendance is required.
              </p>

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
                7. Important Considerations Before Applying
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                There are specific situations where extra steps or documentation may be needed:
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
                    background: "#fffbeb",
                    border: "1px solid #fde68a",
                    borderLeft: "4px solid #d97706",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#92400e", display: "block", marginBottom: "0.35rem" }}>
                    Married Less Than 2 Years
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#78350f" }}>
                    You must attend marriage counselling and submit a certificate before filing, unless you receive court permission to proceed without it.
                  </span>
                </div>

                <div
                  style={{
                    background: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    borderLeft: "4px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "#1e40af", display: "block", marginBottom: "0.35rem" }}>
                    Separated but Living Together
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#1e3a8a" }}>
                    You will need to provide affidavit evidence from both yourself and a third party outlining how the separation was maintained under the same roof.
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
                    Children Under 18
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#14532d" }}>
                    The court must be satisfied that appropriate parenting arrangements are in place before granting a divorce.
                  </span>
                </div>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                We assist with drafting affidavits, obtaining counselling certificates, and ensuring the court receives all necessary information.
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
                8. Let Bansal Lawyers Guide You Through the Process
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                At Bansal Lawyers, we offer compassionate, strategic, and efficient legal assistance to individuals seeking divorce across Australia. Our services include:
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
                    gap: "0.6rem",
                  }}
                >
                  <li>Evaluating your eligibility and advising on your options</li>
                  <li>Drafting and lodging your application</li>
                  <li>Helping you gather required documents</li>
                  <li>Serving papers and meeting court deadlines</li>
                  <li>Representing you in court where necessary</li>
                  <li>Assisting with related matters such as property settlement, parenting arrangements, and spousal maintenance</li>
                </ul>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                <Link
                  href="/family-lawyers-melbourne"
                  style={{
                    color: "#2563eb",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  Contact us today
                </Link>{" "}
                to make this process as smooth and stress-free as possible.
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
                  Ready to Lodge Your Divorce Application?
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
                  Let our experienced Melbourne family lawyers assist you with sole or joint divorce filings, service of documents, and court representation.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Speak with a Divorce Lawyer
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

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/step-by-step-guide-applying-divorce-in-australia" />
          </div>
        </Container>
      </Section>
    </>
  );
}
