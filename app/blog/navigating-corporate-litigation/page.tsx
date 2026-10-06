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
    "Navigating Corporate Litigation with Confidence | Bansal Lawyers",
  description:
    "A guide by Bansal Lawyers to corporate litigation in Melbourne: contract breaches, shareholder disputes, director duties under the Corporations Act, and commercial dispute resolution.",
  path: "/blog/navigating-corporate-litigation",
  keywords: [
    "Corporate Litigation Melbourne",
    "Commercial Dispute Lawyer Melbourne",
    "Breach of Contract Defense Victoria",
    "Shareholder Disputes Corporations Act",
    "Director Duties Litigation 2001",
    "Bansal Lawyers Commercial Law",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label: "Navigating Corporate Litigation",
  },
];

const relatedCommercialServices = [
  {
    title: "Commercial Dispute Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/",
    description:
      "Strategic litigation, arbitration, and mediation for high-stakes business and partnership disputes.",
  },
  {
    title: "Business Contract Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/business-contract-lawyer-melbourne/",
    description:
      "Drafting and enforcing commercial agreements, supplier terms, and breach of contract remedies.",
  },
  {
    title: "Shareholder Agreement Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/shareholder-agreement-lawyer-melbourne/",
    description:
      "Resolving minority oppression, director deadlocks, and buy-out valuation mechanisms.",
  },
  {
    title: "Commercial Agreement Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/commercial-agreement-lawyer-melbourne/",
    description:
      "Franchising agreements, licensing contracts, and distribution rights compliance under Australian law.",
  },
  {
    title: "Civil Litigation Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/",
    description:
      "Court representation across the Victorian County Court, Supreme Court, and Federal Court of Australia.",
  },
];

const corporateDisputes = [
  {
    num: "1",
    title: "Contract Disputes",
    content:
      "Contracts form the foundation of any commercial relationship. When one party fails to meet its obligations, it can result in costly disputes. We assist clients in enforcing contracts or defending against breach of contract claims, whether related to service agreements, supply arrangements, lease contracts, or partnership deals. Our lawyers review contract terms, identify legal breaches, and represent clients in negotiation, mediation, or litigation, ensuring the best possible outcome.",
  },
  {
    num: "2",
    title: "Shareholder & Partnership Disputes",
    content:
      "Conflicts among business partners or shareholders can threaten the viability of a company. These may involve disagreements over profit sharing, strategic direction, breaches of shareholder agreements, mismanagement claims, or disputes regarding buy-outs and exit strategies. We help resolve these sensitive matters through clear legal guidance, dispute resolution processes, and, where necessary, court intervention. Our goal is to preserve business value while protecting our client’s rights and investments.",
  },
  {
    num: "3",
    title: "Director Duties & Misconduct",
    content:
      "Company directors are legally bound by duties under the Corporations Act 2001, including acting in good faith, avoiding conflicts of interest, and exercising care and diligence. Allegations of director misconduct — such as fraud, negligence, or abuse of power — can lead to serious legal consequences. Bansal Lawyers provides legal defence and compliance advice to directors facing such claims, and we also act for shareholders or companies seeking redress for breaches of duty.",
  },
  {
    num: "4",
    title: "Franchise & Licensing Disputes",
    content:
      "Franchisees and licensors often face disputes over non-compliance, misrepresentation, or unfair contract terms. We represent both franchisors and franchisees in resolving conflicts arising under franchise agreements, licensing arrangements, or intellectual property use. Whether it’s termination issues, performance obligations, or enforcement of exclusivity clauses, our legal team ensures your rights are protected under the Franchising Code of Conduct and other relevant laws.",
  },
  {
    num: "5",
    title: "Employment-Related Claims",
    content:
      "Employment disputes can severely impact workplace morale and expose businesses to financial and reputational risks. We assist employers in managing claims involving unfair dismissal, workplace harassment, wage disputes, breaches of employment contracts, and adverse action claims under the Fair Work Act. Our services include proactive legal advice, employee contract review, workplace investigations, and representation before industrial tribunals and courts.",
  },
];

export default function NavigatingCorporateLitigationPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title: "Navigating Corporate Litigation with Confidence",
          description:
            "A guide by Bansal Lawyers to commercial and corporate litigation in Melbourne: contract breaches, shareholder conflicts, director duties, and dispute resolution.",
          path: "/blog/navigating-corporate-litigation",
          datePublished: "2024-12-05",
          dateModified: "2024-12-05",
          authorName: "Bansal Lawyers",
        })}
      />
      <StructuredData data={createLegalServiceSchema()} />

      {/* Hero Section - NO BADGE/PILL ABOVE H1 */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          padding: "3.5rem 0 3rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <div style={{ maxWidth: "860px", marginTop: "1.5rem" }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Navigating Corporate Litigation
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                color: "#38bdf8",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Navigating Corporate Litigation with Confidence
            </p>

            <p
              style={{
                fontSize: "1rem",
                color: "#94a3b8",
                fontWeight: 500,
                marginBottom: "1.25rem",
              }}
            >
              Bansal Lawyers – Your Trusted Legal Experts in Melbourne
            </p>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "#cbd5e1",
                marginBottom: "1.75rem",
                maxWidth: "760px",
              }}
            >
              Corporate litigation can be stressful complicated, time-consuming,
              and costly. At Bansal Lawyers, best lawyers in Melbourne will help
              in businesses across Australia by handling legal disputes with
              clarity, confidence, and strategy.
            </p>

            <DynamicArticleMeta
              publishedDate="Dec 05, 2024"
              category="Commercial Law"
              initialWords={602}
              initialReadTime="4 min read"
            />
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <TrustBar
        items={[
          "Victorian Commercial Court & Tribunal Advocates",
          "Corporations Act 2001 Governance Compliance",
          "Alternative Dispute Resolution & Mediation",
          "Strategic Contract & Shareholder Enforcement",
        ]}
      />

      {/* Main Content Area */}
      <Section tone="white">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            <div style={{ maxWidth: "860px", margin: "0 auto", width: "100%" }}>
              {/* Featured Image */}
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "2.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Image
                  src="/images/melbourne-legal-chambers.webp"
                  alt="Corporate Litigation Lawyers Melbourne - Bansal Lawyers"
                  width={900}
                  height={480}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Introductory Lead Box */}
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  borderLeft: "4px solid #0284c7",
                  padding: "1.5rem 1.75rem",
                  borderRadius: "0 12px 12px 0",
                  marginBottom: "2.5rem",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    color: "#1e293b",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Corporate litigation can be stressful complicated,
                  time-consuming, and costly. At Bansal Lawyers, best lawyers in
                  Melbourne will help in businesses across Australia by handling
                  legal disputes with clarity, confidence, and strategy. If you
                  are having any legal issue like shareholder conflict, breach of
                  contract, or any legal issue, our legal team of lawyers in
                  Melbourne are here to support and protect your business at every
                  step of the way.
                </p>
              </div>

              {/* Section 1: Common Corporate Disputes We Handle */}
              <div style={{ marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Common Corporate Disputes We Handle:
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.5rem",
                  }}
                >
                  At Bansal Lawyers, we specialise in resolving complex corporate
                  disputes with a strategic, solution-focused approach. Whether
                  you are a small business owner, company director, or
                  shareholder, our experienced legal team is here to protect your
                  interests and minimise disruption to your business operations.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {corporateDisputes.map((dispute) => (
                    <div
                      key={dispute.num}
                      style={{
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "14px",
                        padding: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "#0284c7",
                            color: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            flexShrink: 0,
                          }}
                        >
                          {dispute.num}
                        </span>
                        <h3
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            margin: 0,
                          }}
                        >
                          {dispute.title}
                        </h3>
                      </div>

                      <p
                        style={{
                          fontSize: "1.025rem",
                          lineHeight: 1.75,
                          color: "#334155",
                          margin: 0,
                        }}
                      >
                        {dispute.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Why Choose Bansal Lawyers? */}
              <div style={{ marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Why Choose Bansal Lawyers?
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    {
                      title: "Strategic Advice",
                      desc: "We offer clear, practical advice focused on your business goals.",
                      icon: "🎯",
                    },
                    {
                      title: "Proven Experience",
                      desc: "Our team of lawyers help to handle legal disputes for businesses of all sizes.",
                      icon: "⚖️",
                    },
                    {
                      title: "Negotiation & Mediation",
                      desc: "Whenever possible, we help you resolve matters without going to court.",
                      icon: "🤝",
                    },
                    {
                      title: "Court Representation",
                      desc: "If necessary, we provide strong advocacy in all Australian courts.",
                      icon: "🏛️",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        padding: "1.25rem",
                      }}
                    >
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.35rem" }}>
                        {item.icon}
                      </div>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: 1.55,
                          color: "#475569",
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Protect Your Business */}
              <div style={{ marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Protect Your Business – Speak with Our Corporate Litigation Team
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.5rem",
                  }}
                >
                  If you are facing any legal issue it does not have to stop or
                  slow down your business. Bansal Lawyers{" "}
                  <Link
                    href="/"
                    style={{
                      color: "#0284c7",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    Top legal firm in Melbourne Australia
                  </Link>{" "}
                  provides you the legal support and strategy to handle the
                  situation for your better future. We’re here to resolve your
                  dispute efficiently and effectively.
                </p>

                {/* Callout Box */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                    color: "#ffffff",
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Resolve Your Commercial Dispute
                  </h3>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.65,
                      color: "#e2e8f0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Speak with our commercial litigation lawyers in Melbourne to
                    protect your company assets, reputation, and commercial
                    viability.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <ButtonLink href="/contact" variant="primary">
                      Consult Our Litigation Team
                    </ButtonLink>
                    <ButtonLink
                      href="/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/"
                      variant="secondary"
                    >
                      Commercial Dispute Services
                    </ButtonLink>
                  </div>
                </div>
              </div>

              {/* Author / Practice Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1.5rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "3rem",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#0284c7",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    flexShrink: 0,
                  }}
                >
                  BL
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 0.25rem",
                    }}
                  >
                    Bansal Lawyers Commercial Litigation Practice
                  </h3>
                  <p
                    style={{
                      fontSize: "0.925rem",
                      lineHeight: 1.5,
                      color: "#64748b",
                      margin: 0,
                    }}
                  >
                    Bansal Lawyers acts for Australian companies, proprietary
                    directors, and investors in contract enforcement, shareholder
                    oppression proceedings, and commercial negotiations.
                  </p>
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                  }}
                >
                  Related Commercial Services
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {relatedCommercialServices.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      style={{
                        display: "block",
                        padding: "1.25rem",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "#0284c7",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {service.title} &rarr;
                      </h4>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.5,
                          color: "#64748b",
                          margin: 0,
                        }}
                      >
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/navigating-corporate-litigation" />
          </div>
        </Container>
      </Section>
    </>
  );
}
