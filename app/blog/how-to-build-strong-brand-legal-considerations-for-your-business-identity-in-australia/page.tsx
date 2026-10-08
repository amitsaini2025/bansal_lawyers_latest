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
    "Building a Strong Brand: Legal Considerations | Bansal Lawyers",
  description:
    "A guide to choosing the right business structure in Australia: sole trader, partnership, and company structures, tax implications, personal liability, and key differences.",
  path: "/blog/how-to-build-strong-brand-legal-considerations-for-your-business-identity-in-australia",
  keywords: [
    "Business Structure Australia",
    "Sole Trader vs Company Australia",
    "Partnership Agreement Melbourne",
    "Commercial Lawyers Melbourne",
    "Business Legal Identity Australia",
    "Corporations Act 2001",
    "Business Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "How to Build a Strong Brand: Legal Considerations for Your Business Identity",
  },
];

const relatedCommercialServices = [
  {
    title: "Commercial Lawyers Melbourne",
    href: "/commercial-lawyers-melbourne/",
    description: "Business structuring, commercial agreements, shareholder deeds, and regulatory compliance.",
  },
  {
    title: "Partnership Agreement Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/partnership-agreement-lawyer-melbourne/",
    description: "Partnership formation deeds, profit sharing terms, liability allocation, and partner exit rules.",
  },
  {
    title: "Shareholder Agreement Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/shareholder-agreement-lawyer-melbourne/",
    description: "Corporate governance, shareholder agreements, share transfers, and board decision-making rules.",
  },
  {
    title: "Business Sale & Purchase Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne/",
    description: "Due diligence, contract drafting, asset transfers, and business restructuring advice.",
  },
  {
    title: "Business Legal Advice Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/business-legal-advice-lawyer-melbourne/",
    description: "Practical commercial guidance for Australian small businesses, founders, and growing enterprises.",
  },
  {
    title: "Commercial Agreement Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/commercial-agreement-lawyer-melbourne/",
    description: "Tailored service contracts, supply terms, terms of trade, and IP licensing deeds.",
  },
];

export default function StrongBrandLegalConsiderationsPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "How to Build a Strong Brand: Legal Considerations for Your Business Identity",
          description:
            "A guide to choosing the right business structure in Australia: sole trader, partnership, and company structures, tax implications, personal liability, and key differences.",
          path: "/blog/how-to-build-strong-brand-legal-considerations-for-your-business-identity-in-australia",
          datePublished: "2025-01-27",
          dateModified: "2025-01-27",
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
              How to Build a Strong Brand: Legal Considerations for Your Business Identity
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 27, 2025"
              category="Commercial Law"
              initialWords={810}
              initialReadTime="4 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Australian Business Structures",
          "Sole Trader, Partnership & Company",
          "Corporations Act 2001 Compliance",
          "Melbourne CBD & Virtual Consultations",
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
                src="/images/blog/commercial-contracts.webp"
                alt="Business structure and legal identity planning at Bansal Lawyers Melbourne"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 860px"
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* Content Body */}
            <article
              className="article-content"
              style={{
                color: "var(--ink)",
                fontSize: "1.06rem",
                lineHeight: "1.8",
              }}
            >
              {/* Introduction */}
              <div
                style={{
                  fontSize: "1.12rem",
                  lineHeight: "1.75",
                  color: "var(--navy-950)",
                  marginBottom: "2rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <p style={{ fontWeight: 600, color: "var(--brand-blue)", marginBottom: "0.75rem" }}>
                  Bansal Lawyers: Your Trusted Legal Advisors and Best Immigration Lawyer in Melbourne
                </p>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "0.75rem",
                  }}
                >
                  What Is a Business Structure?
                </h2>
                <p style={{ margin: 0 }}>
                  A business structure determines how your business operates, who makes key decisions, how profits and losses are distributed, and what your legal obligations are. It can also affect taxes and personal liability. As your business grows or if your circumstances change, you can choose to change your business structure to better meet your evolving needs.
                </p>
              </div>

              {/* Key Factors to Consider When Choosing a Business Structure */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  Key Factors to Consider When Choosing a Business Structure
                </h2>
                <p>
                  Selecting the right business structure is a crucial decision that can impact your day-to-day operations, tax obligations, legal responsibilities, and potential for growth. Below are the essential factors to keep in mind:
                </p>

                <div style={{ display: "grid", gap: "1.5rem", marginTop: "1.25rem" }}>
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <h3 style={{ fontSize: "1.15rem", color: "var(--navy-950)", marginTop: 0, marginBottom: "0.5rem" }}>
                      1. Decision-Making
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>
                      Ask yourself: Who will make the critical decisions about running the business?
                    </p>
                    <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "0.4rem", listStyleType: "disc" }}>
                      <li>In a sole trader setup, you are the sole decision-maker, giving you complete control.</li>
                      <li>In a partnership, decisions are shared and typically outlined in a partnership agreement.</li>
                      <li>In a company, decisions are made by directors or a board, often with input from shareholders.</li>
                    </ul>
                  </div>

                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <h3 style={{ fontSize: "1.15rem", color: "var(--navy-950)", marginTop: 0, marginBottom: "0.5rem" }}>
                      2. Tax Benefits and Liabilities
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>Different structures are taxed in different ways.</p>
                    <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "0.4rem", listStyleType: "disc" }}>
                      <li>Sole traders and partnerships are taxed at individual tax rates, which may not be ideal for higher profits.</li>
                      <li>Companies are taxed at a flat corporate rate, which can offer benefits in higher-income situations and allows for tax planning strategies.</li>
                    </ul>
                  </div>

                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <h3 style={{ fontSize: "1.15rem", color: "var(--navy-950)", marginTop: 0, marginBottom: "0.5rem" }}>
                      3. Sharing Profits and Losses
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "0.4rem", listStyleType: "disc" }}>
                      <li>As a sole trader, you retain all profits—but also bear all losses personally.</li>
                      <li>In a partnership, profits and losses are split as agreed, which can influence your personal tax and financial liability.</li>
                      <li>Companies distribute profits through dividends, and shareholders only receive what’s declared.</li>
                    </ul>
                  </div>

                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <h3 style={{ fontSize: "1.15rem", color: "var(--navy-950)", marginTop: 0, marginBottom: "0.5rem" }}>
                      4. Legal Obligations
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>Each structure carries different levels of legal complexity and regulatory burden.</p>
                    <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "0.4rem", listStyleType: "disc" }}>
                      <li>Sole traders face minimal paperwork and reporting.</li>
                      <li>Partnerships require a legal agreement and shared accountability.</li>
                      <li>Companies must comply with ASIC regulations, maintain financial records, lodge annual returns, and more.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Popular Business Structures in Australia */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  Popular Business Structures in Australia
                </h2>

                <div style={{ display: "grid", gap: "2rem" }}>
                  {/* 1. Sole Trader */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.5rem",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <h3 style={{ fontSize: "1.25rem", color: "var(--brand-blue)", marginTop: 0, marginBottom: "0.5rem" }}>
                      1. Sole Trader
                    </h3>
                    <p>
                      A sole trader is the most straightforward structure and suits individuals starting a small business.
                    </p>
                    <p style={{ fontWeight: 600, margin: "0.5rem 0" }}>
                      Description: You run the business on your own, under your own name or a registered business name.
                    </p>
                    <p style={{ fontWeight: 600, margin: "0.75rem 0 0.25rem", color: "var(--navy-950)" }}>Benefits:</p>
                    <ul style={{ margin: "0 0 0.75rem 1.5rem", display: "grid", gap: "0.35rem", listStyleType: "disc" }}>
                      <li>Low setup and administrative costs.</li>
                      <li>Full control over operations and profits.</li>
                      <li>Simple tax reporting using your personal tax return.</li>
                    </ul>
                    <p style={{ fontWeight: 600, margin: "0.75rem 0 0.25rem", color: "#b91c1c" }}>Challenges:</p>
                    <ul style={{ margin: "0 0 0 1.5rem", display: "grid", gap: "0.35rem", listStyleType: "disc" }}>
                      <li>Unlimited personal liability — your assets are at risk if the business incurs debt.</li>
                      <li>Limited ability to raise capital or attract investors.</li>
                      <li>Business continuity may suffer if the sole trader becomes incapacitated.</li>
                    </ul>
                  </div>

                  {/* 2. Partnership */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.5rem",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <h3 style={{ fontSize: "1.25rem", color: "var(--brand-blue)", marginTop: 0, marginBottom: "0.5rem" }}>
                      2. Partnership
                    </h3>
                    <p>
                      A partnership allows two or more people to operate a business together under a formal or informal agreement.
                    </p>
                    <p style={{ fontWeight: 600, margin: "0.5rem 0" }}>
                      Description: Partners share control, profits, responsibilities, and liabilities.
                    </p>
                    <p style={{ fontWeight: 600, margin: "0.75rem 0 0.25rem", color: "var(--navy-950)" }}>Benefits:</p>
                    <ul style={{ margin: "0 0 0.75rem 1.5rem", display: "grid", gap: "0.35rem", listStyleType: "disc" }}>
                      <li>Easy and affordable to establish.</li>
                      <li>Shared financial and operational responsibilities.</li>
                      <li>Can benefit from a diverse range of skills and resources.</li>
                    </ul>
                    <p style={{ fontWeight: 600, margin: "0.75rem 0 0.25rem", color: "#b91c1c" }}>Challenges:</p>
                    <ul style={{ margin: "0 0 0 1.5rem", display: "grid", gap: "0.35rem", listStyleType: "disc" }}>
                      <li>Joint and several liability — all partners are responsible for business debts.</li>
                      <li>Conflicts may arise if the partnership agreement isn’t clear.</li>
                      <li>Raising funds can still be difficult compared to a company structure.</li>
                    </ul>
                  </div>

                  {/* 3. Company */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.5rem",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <h3 style={{ fontSize: "1.25rem", color: "var(--brand-blue)", marginTop: 0, marginBottom: "0.5rem" }}>
                      3. Company
                    </h3>
                    <p>
                      A company is a separate legal entity from its owners, offering more protection and credibility.
                    </p>
                    <p style={{ fontWeight: 600, margin: "0.5rem 0" }}>
                      Description: It can enter into contracts, own property, sue, and be sued independently of its shareholders.
                    </p>
                    <p style={{ fontWeight: 600, margin: "0.75rem 0 0.25rem", color: "var(--navy-950)" }}>Benefits:</p>
                    <ul style={{ margin: "0 0 0.75rem 1.5rem", display: "grid", gap: "0.35rem", listStyleType: "disc" }}>
                      <li>Limited liability for shareholders — personal assets are generally protected.</li>
                      <li>Easier to attract investors, raise capital, and expand operations.</li>
                      <li>More credibility and ability to enter into large-scale contracts.</li>
                    </ul>
                    <p style={{ fontWeight: 600, margin: "0.75rem 0 0.25rem", color: "#b91c1c" }}>Challenges:</p>
                    <ul style={{ margin: "0 0 0 1.5rem", display: "grid", gap: "0.35rem", listStyleType: "disc" }}>
                      <li>Higher startup and ongoing compliance costs.</li>
                      <li>More complex administrative and financial reporting.</li>
                      <li>Directors must meet strict legal responsibilities and obligations under the <em>Corporations Act 2001</em>.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Key Differences at a Glance Comparison Table */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  Key Differences at a Glance
                </h2>

                <div
                  style={{
                    overflowX: "auto",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid #e2e8f0",
                    boxShadow: "var(--shadow-sm)",
                    margin: "1.5rem 0",
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      textAlign: "left",
                      fontSize: "0.95rem",
                    }}
                  >
                    <thead>
                      <tr style={{ background: "var(--navy-900)", color: "#ffffff" }}>
                        <th style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #cbd5e1" }}>Features</th>
                        <th style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #cbd5e1" }}>Sole Trader</th>
                        <th style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #cbd5e1" }}>Partnership</th>
                        <th style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #cbd5e1" }}>Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>Simple business structure</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#166534", fontWeight: 600 }}>Yes</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#991b1b" }}>No</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#991b1b" }}>No</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9", background: "#f8fafc" }}>
                        <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>Low initial set-up fees</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#166534", fontWeight: 600 }}>Yes ($33)</td>
                        <td style={{ padding: "0.85rem 1rem" }}>No ($359.90)</td>
                        <td style={{ padding: "0.85rem 1rem" }}>No ($444)</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>Can hire staff</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#166534", fontWeight: 600 }}>Yes</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#166534", fontWeight: 600 }}>Yes</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#166534", fontWeight: 600 }}>Yes</td>
                      </tr>
                      <tr style={{ background: "#f8fafc" }}>
                        <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>Easy to attract capital</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#991b1b" }}>No</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#991b1b" }}>No</td>
                        <td style={{ padding: "0.85rem 1rem", color: "#166534", fontWeight: 600 }}>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Choosing Your Business Structure */}
              <section
                style={{
                  marginBottom: "2.5rem",
                  padding: "1.75rem",
                  background: "#f8fafc",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--navy-950)",
                    marginTop: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  Choosing Your Business Structure
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  Ultimately, the structure you choose should align with your business goals and the level of risk you are willing to take on. At Bansal Lawyers, we are here to help you navigate these choices. Contact us today for tailored legal advice and support to ensure your business&apos;s long-term success.
                </p>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-secondary)", marginBottom: "0.75rem" }}>
                  &copy; 2025 Bansal Lawyers. All rights reserved.
                </p>
                <p style={{ margin: 0 }}>
                  Bansal Lawyers:{" "}
                  <Link
                    href="/"
                    style={{
                      color: "var(--brand-blue)",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    Best Immigration Lawyer in Melbourne
                  </Link>{" "}
                  |{" "}
                  <a
                    href="mailto:info@bansallawyers.com.au"
                    style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
                  >
                    Email Us
                  </a>{" "}
                  |{" "}
                  <Link
                    href="/"
                    style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
                  >
                    Visit Our Website
                  </Link>
                </p>
              </section>

              {/* Consultation Next Steps Card */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "2rem",
                  background: "var(--navy-900)",
                  color: "#ffffff",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <h3 style={{ margin: 0, color: "#ffffff", fontSize: "1.35rem" }}>
                  Speak to a Melbourne Commercial & Business Lawyer
                </h3>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.65" }}>
                  Get experienced legal advice on business structure, partnership deeds, shareholder agreements, or company incorporation in Melbourne.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem" }}>
                  <ButtonLink href="/contact" variant="light">
                    Book a Consultation
                  </ButtonLink>
                  <ButtonLink href="tel:+61422905860" variant="white-outline">
                    Call 0422 905 860
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Commercial Services Section */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--line)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.35rem",
                  color: "var(--navy-950)",
                  marginBottom: "1.5rem",
                }}
              >
                Related Commercial Practice Areas
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1rem",
                }}
              >
                {relatedCommercialServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    style={{
                      display: "block",
                      padding: "1.25rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        color: "var(--brand-blue)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--ink-secondary)",
                        lineHeight: "1.5",
                        margin: 0,
                      }}
                    >
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/how-to-build-strong-brand-legal-considerations-for-your-business-identity-in-australia" />
          </div>
        </Container>
      </Section>
    </>
  );
}
