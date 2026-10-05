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
    "Understanding the Closing Loopholes Reforms: Changes for Independent Contractors | Bansal Lawyers",
  description:
    "Detailed guide to the Fair Work Closing Loopholes No. 2 reforms in Australia: Section 15AA, independent contractor vs employee classification, gig economy protections, and the Amita Gupta Uber Eats case study.",
  path: "/blog/closing-loopholes-reforms-independent-contractors",
  keywords: [
    "Closing Loopholes Reforms",
    "Independent Contractors Australia",
    "Fair Work Act 2009",
    "Section 15AA Fair Work",
    "Gig Economy Workers Rights Australia",
    "Commercial Lawyers Melbourne",
    "Employment Law Advice Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Understanding the Closing Loopholes Reforms: Changes for Independent Contractors",
  },
];

const relatedCommercialServices = [
  {
    title: "Commercial Lawyers Melbourne",
    href: "/commercial-lawyers-melbourne/",
    description: "Business contracts, independent contractor agreements, compliance, and commercial dispute resolution.",
  },
  {
    title: "Business Contract Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/business-contract-lawyer-melbourne/",
    description: "Drafting, reviewing, and amending contractor deeds, employment terms, and service agreements.",
  },
  {
    title: "Contract Review Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/contract-review-lawyer-melbourne/",
    description: "Independent contractor audit, unfair contract terms analysis, and statutory risk assessments.",
  },
  {
    title: "Commercial Agreement Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/commercial-agreement-lawyer-melbourne/",
    description: "Tailored commercial agreements reflecting operational reality and compliance with Fair Work amendments.",
  },
  {
    title: "Civil Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/",
    description: "Pre-court dispute negotiation, breach of contract defence, and mediation support.",
  },
  {
    title: "Commercial Dispute Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/",
    description: "Legal representation in contractor disputes, remuneration claims, and commercial litigation.",
  },
];

export default function ClosingLoopholesReformsPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Understanding the Closing Loopholes Reforms: Changes for Independent Contractors",
          description:
            "Detailed guide to the Fair Work Closing Loopholes No. 2 reforms in Australia: Section 15AA, independent contractor vs employee classification, gig economy protections, and the Amita Gupta Uber Eats case study.",
          path: "/blog/closing-loopholes-reforms-independent-contractors",
          datePublished: "2025-03-06",
          dateModified: "2025-03-06",
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
              Understanding the Closing Loopholes Reforms: Changes for Independent Contractors
            </h1>

            {/* Meta Strip: Mar 06, 2025 | 6 min read | 1105 words | Bansal Lawyers */}
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
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Mar 06, 2025
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                6 min read
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
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                1105 words
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
          "Fair Work Legislation Amendment Act",
          "Section 15AA Ordinary Meaning of Employee",
          "Contract Review & Sham Contracting Audits",
          "Collins St Office & Virtual Consultations",
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
                alt="Fair Work Closing Loopholes reforms and contractor agreements review at Bansal Lawyers"
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
                <p>
                  As on August 2024, the Government of Australia made some changes in Act 2009 of Fair work to provide protection to independent contractors. As per the changes, it is a part of closing the wrong paths to be reforms, which help the employees not treated wrongly as independent contractors when they are employees.
                </p>
                <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                  These changes make clear to provide fair treatment for the independent contractors which brings them high protection and rights. Changes in fair work act 2009 are as per below how these changes will impact workers and business in Australia.
                </p>
              </div>

              {/* What’s Changed for Independent Contractors? */}
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
                  What’s Changed for Independent Contractors?
                </h2>
                <p>
                  Earlier in Australia independent contractors were more freedom in their work but can’t get any benefit like superannuation or any job security against their unfair dismissal. A big change in Section 15 AA as closing loopholes no 2 in which it shows that it’s not just a contract that matters, which tighten the rules for find who will be an independent contractor or an employee at job.
                </p>
              </section>

              {/* Key Changes in the Law */}
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
                  Key Changes in the Law
                </h2>
                <p>
                  After these changes in Law in Australia the working conditions will decide the person is an independent contractor or an employee. See the points below which mean that how the work is actually performed. For example:
                </p>
                <ul
                  style={{
                    margin: "1rem 0 1.5rem 1.5rem",
                    display: "grid",
                    gap: "0.75rem",
                    listStyleType: "disc",
                  }}
                >
                  <li>How the work is done.</li>
                  <li>The relationship between the worker and the employer.</li>
                  <li>The level of control the worker has over when, where, and how the work is carried out.</li>
                </ul>
                <p>
                  This change ensures that workers who are essentially employees are not wrongly classified as independent contractors
                </p>

                {/* Subsections 2 to 5 */}
                <div style={{ display: "grid", gap: "1.75rem", marginTop: "1.5rem" }}>
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--brand-blue)",
                        marginTop: 0,
                        marginBottom: "0.5rem",
                      }}
                    >
                      2. High-Income Independent Contractors
                    </h3>
                    <p style={{ margin: 0 }}>
                      Those independent contractors earn over $175,000 per year, they have an option to opt-out to consider as an employee. If their earnings more than the threshold, the employer and contractor both can eligible to opt out of the new employee protection.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--brand-blue)",
                        marginTop: 0,
                        marginBottom: "0.5rem",
                      }}
                    >
                      3. Protections for Gig Economy Workers
                    </h3>
                    <p style={{ marginBottom: "0.75rem" }}>
                      Closing Loopholes create more protections for gig economy workers like delivery workers and ride share drivers by make them positive that they are not exploited. Gig economy pathway provides direct contracts with better protection for the workers including:
                    </p>
                    <ul style={{ margin: "0 0 0 1.5rem", display: "grid", gap: "0.5rem", listStyleType: "disc" }}>
                      <li>Fairer contracts that prevent workers from being unfairly deactivated or dismissed.</li>
                      <li>The right to bargain collectively for better pay and conditions.</li>
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
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--brand-blue)",
                        marginTop: 0,
                        marginBottom: "0.5rem",
                      }}
                    >
                      4. Road Transport Industry Changes
                    </h3>
                    <p style={{ margin: 0 }}>
                      As per new rules independent contractors must have to provide fair wages and working conditions with protect against unfair practice.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--brand-blue)",
                        marginTop: 0,
                        marginBottom: "0.5rem",
                      }}
                    >
                      5. Unfair Contract Terms
                    </h3>
                    <p style={{ margin: 0 }}>
                      New Rules in which Independent Contractors have ability to challenge fowl play unfair terms in contracts. It’s also provided best security and fairness for those who are working in industries that depend on independent contracting.
                    </p>
                  </div>
                </div>
              </section>

              {/* Case Study: Amita Gupta and Uber Eats */}
              <section
                style={{
                  marginBottom: "2.5rem",
                  padding: "1.75rem",
                  background: "var(--blue-50)",
                  borderLeft: "4px solid var(--brand-blue)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--brand-blue)",
                    marginTop: 0,
                    marginBottom: "1rem",
                  }}
                >
                  Case Study: Amita Gupta and Uber Eats – A Landmark Decision
                </h2>
                <p>
                  A landmark case that highlights the importance of the Closing Loopholes reforms is the decision involving Amita Gupta and Uber Eats. Ms. Gupta, a delivery driver for Uber Eats, challenged her classification as an independent contractor after being permanently blocked from the platform in January 2019. She argued that she was effectively an employee and sought an unfair dismissal remedy under the Fair Work Act 2009.
                </p>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--navy-950)",
                    marginTop: "1.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Background
                </h3>
                <p>
                  Ms. Gupta worked as a delivery driver for Uber Eats, completing over 2,200 deliveries between 2017 and 2019. She used her own car and had the flexibility to log in and out of the Uber Eats app at her discretion. However, Uber Eats maintained significant control over her work through its ratings system, service standards, and the ability to deactivate her account for poor performance.
                </p>
                <p>
                  In 2019, Ms. Gupta was permanently blocked from the platform for failing to meet Uber Eats’ delivery standards. She filed an unfair dismissal claim, arguing that she was an employee of Portier Pacific Pty Ltd (Uber Eats’ Australian entity) and was entitled to protections under the Fair Work Act.
                </p>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--navy-950)",
                    marginTop: "1.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  The Decision
                </h3>
                <p>
                  The Fair Work Commission initially ruled that Ms. Gupta was not an employee, citing her flexibility and lack of obligation to accept work. However, on appeal, the Full Bench of the Fair Work Commission examined the true nature of the relationship. The key findings included:
                </p>
                <ul style={{ margin: "0 0 1rem 1.5rem", display: "grid", gap: "0.5rem", listStyleType: "disc" }}>
                  <li>Ms. Gupta was not running her own business but was working within Uber Eats’ business model.</li>
                  <li>Uber Eats controlled key aspects of her work, including the delivery fee structure, performance standards, and customer interactions.</li>
                </ul>
                <p>
                  Despite this, Ms. Gupta was ultimately found not to be an employee due to her ability to choose when and whether to work, her lack of exclusivity, and the absence of branding or representation as part of Uber Eats’ business.
                </p>
                <p>
                  The Full Bench concluded that Ms. Gupta was not an employee but acknowledged the complexity of the case and the broader implications for gig economy workers.
                </p>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--navy-950)",
                    marginTop: "1.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  How the Reforms Would Apply
                </h3>
                <p>
                  Under the Closing Loopholes reforms, cases like Ms. Gupta’s would likely have a different outcome. The reforms focus on the actual working relationship rather than the written contract, ensuring that workers who are effectively employees are not misclassified. For gig economy workers like Ms. Gupta, the reforms provide:
                </p>
                <ul style={{ margin: "0 0 0 1.5rem", display: "grid", gap: "0.5rem", listStyleType: "disc" }}>
                  <li>Stronger protections against unfair deactivation or dismissal.</li>
                  <li>Clearer contracts that reflect the true nature of the working relationship.</li>
                  <li>The ability to challenge unfair contract terms.</li>
                </ul>
              </section>

              {/* How These Changes Benefit Employers and Workers */}
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
                  How These Changes Benefit Employers and Workers
                </h2>
                <div style={{ display: "grid", gap: "1.5rem" }}>
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--navy-950)",
                        marginTop: 0,
                        marginBottom: "0.6rem",
                      }}
                    >
                      For Employers:
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "0.5rem", listStyleType: "disc" }}>
                      <li>Employers must review contracts with independent contractors to ensure compliance with the new laws. Misclassifying workers can result in legal risks.</li>
                      <li>Gig economy businesses and those in the road transport industry must align their contracts with the new rules.</li>
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
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--navy-950)",
                        marginTop: 0,
                        marginBottom: "0.6rem",
                      }}
                    >
                      For Workers:
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "0.5rem", listStyleType: "disc" }}>
                      <li>Independent contractors now have additional protections, including the ability to challenge unfair contract terms and access fairer working conditions.</li>
                      <li>High-income contractors can opt out of the new employee classification but retain the option to switch back if needed.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Why These Changes Matter */}
              <section
                style={{
                  marginBottom: "2.5rem",
                  padding: "1.5rem",
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
                  Why These Changes Matter
                </h2>
                <p style={{ marginBottom: "0.85rem" }}>
                  These Closing Loopholes no 2 which make significant step forward to protect workers those Misclassified as independent contractors.
                </p>
                <p style={{ marginBottom: "0.85rem" }}>
                  The Closing Loopholes No. 2 reforms are a significant step forward in protecting workers who have been misclassified as independent contractors. This is to reform a focus on how the people really work together it’s sure to those contractors in the gig economy will treat with fair in work and get better opportunities.
                </p>
                <p style={{ marginBottom: "0.85rem" }}>
                  Cases like Amita Gupta’s highlight the importance of these changes in addressing the power imbalance between gig economy platforms and their workers. The reforms provide a clearer framework for determining employment status and ensure that workers receive the rights and protections they deserve.
                </p>
                <p style={{ margin: 0 }}>
                  If you’re an employer or independent contractor and need advice on how these changes affect you, contact Bansal Lawyers, provides{" "}
                  <Link
                    href="/"
                    style={{
                      color: "var(--brand-blue)",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    Best Legal Services in Melbourne Australia
                  </Link>{" "}
                  today for expert guidance. Our team of best lawyers in Melbourne Australia gives proper guidance to help client for these legal changes with proper manner.
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
                  Review Your Contractor Agreements
                </h3>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.65" }}>
                  Ensure your business or contractor arrangements comply with the Fair Work Closing Loopholes reforms. Speak with Bansal Lawyers Melbourne today.
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
                Related Commercial & Employment Legal Services
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
          </div>
        </Container>
      </Section>
    </>
  );
}
