import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Divorce Lawyers in Melbourne Australia — Complete Guide for Couple | Bansal Lawyers",
  description:
    "Complete guide by Bansal Lawyers on getting a divorce in Melbourne Australia under the Family Law Act 1975, covering requirements, documents, joint vs sole applications, fees, hearings, and property settlements.",
  path: "/blog/divorce-lawyers-in-melbourne-australia-complete-guide-for-couple",
  keywords: [
    "Divorce Lawyers in Melbourne Australia",
    "Divorce Lawyers Melbourne",
    "Divorce Guide Australia",
    "Family Law Act 1975",
    "Joint Divorce Application Australia",
    "Sole Divorce Application Australia",
    "Divorce Requirements Australia",
    "Family Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Divorce Lawyers in Melbourne Australia — Complete Guide for Couple" },
];

const relatedFamilyServices = [
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description: "Sole and joint divorce applications, marriage separation under one roof, and court filings.",
  },
  {
    title: "Property Settlement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
    description: "Asset division, superannuation splitting, real estate transfers, and financial settlements.",
  },
  {
    title: "Child Custody Lawyer Melbourne",
    href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
    description: "Parenting arrangements, child care plans, parental responsibility, and court orders.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description: "Legally binding financial and parenting consent orders through the Family Court.",
  },
  {
    title: "Binding Financial Agreements",
    href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
    description: "Pre-nuptial, post-nuptial, and post-separation binding financial agreements.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description: "Comprehensive family law guidance, negotiation, mediation, and court representation.",
  },
];

export default function DivorceGuideArticlePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title: "Divorce Lawyers in Melbourne Australia — Complete Guide for Couple",
          description:
            "Complete guide by Bansal Lawyers on getting a divorce in Melbourne Australia under the Family Law Act 1975, covering requirements, documents, joint vs sole applications, fees, hearings, and property settlements.",
          path: "/blog/divorce-lawyers-in-melbourne-australia-complete-guide-for-couple",
          datePublished: "2026-01-31",
          dateModified: "2026-01-31",
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
              Divorce Lawyers in Melbourne Australia — Complete Guide for Couple
            </h1>

            {/* User-requested Meta Strip: Jan 31, 2026 | Blog | 4 min read | 723 words */}
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
                Jan 31, 2026
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
                4 min read
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
                723 words
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
          "Collins St Office & Remote Consultations",
          "Family Law Act 1975 Guidance",
          "Sole & Joint Divorce Applications",
          "Consent Orders & Property Settlements",
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
            {/* Featured Article Image */}
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
                alt="Divorce Lawyers Melbourne Australia consultation at Bansal Lawyers"
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

            {/* Article Content Layout */}
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
                  fontSize: "1.15rem",
                  lineHeight: "1.75",
                  color: "var(--navy-950)",
                  marginBottom: "2rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <p>
                  At <Link href="/" style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}>Bansal Lawyers</Link>, we help you navigate the difficult process of divorce with clear, caring, and professional legal support. As experienced Divorce Lawyers in Melbourne Australia, we guide couples through every stage of the divorce process, ensuring legal clarity, compliance with Australian family law, and confidence in decision-making during a challenging time.
                </p>
              </div>

              {/* Requirements for getting a divorce in Australia */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  Requirements for getting a divorce in Australia
                </h2>
                <p>
                  The Australian Government has set certain requirements that couples must meet to be married under the <em>Family Law Act 1975</em>. To be able to file for divorce in Australia:
                </p>
                <ul
                  style={{
                    margin: "1rem 0 1.5rem 1.5rem",
                    display: "grid",
                    gap: "0.75rem",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    <strong>Residency requirement:</strong> One of the spouses must be an Australian citizen or permanent resident or have lived in Australia for at least 12 months before the application is filed.
                  </li>
                  <li>
                    <strong>Separation period:</strong> The couple must have been apart for at least 12 months and one day, which shows that the marriage is over.
                  </li>
                </ul>
              </section>

              {/* The Documents you need to apply */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  The Documents you need to apply
                </h2>
                <p>
                  A well-prepared application helps the court avoid delays and extra requests. You must have a marriage certificate to file for divorce. If it&apos;s not in English, you must get it translated. In some cases, you might need more documents:
                </p>
                <ol
                  style={{
                    margin: "1rem 0 1.5rem 1.5rem",
                    display: "grid",
                    gap: "0.75rem",
                    listStyleType: "decimal",
                  }}
                >
                  <li>
                    <strong>Paperwork that explains how the separation works under one roof</strong>
                  </li>
                  <li>
                    <strong>Counselling certificates for marriages that have been going on for less than two years</strong> (unless they are exempt)
                  </li>
                  <li>
                    <strong>Proof of arrangements for childcare</strong>, if applicable
                  </li>
                </ol>
              </section>

              {/* Applications for Joint and Sole Divorce */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  Applications for Joint and Sole Divorce
                </h2>
                <p>
                  Couples can choose between two types of applications based on their current situation.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                    margin: "1.5rem 0",
                  }}
                >
                  {/* Joint Application Card */}
                  <div
                    style={{
                      background: "var(--blue-50)",
                      border: "1px solid var(--blue-200)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        color: "var(--brand-blue)",
                        marginTop: 0,
                        marginBottom: "0.75rem",
                      }}
                    >
                      Joint Application
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: "1.65" }}>
                      Both applicants fill out a joint application. This choice usually takes less time and doesn&apos;t need official service of documents. It also often doesn&apos;t require going to court. It works best when both people agree that their marriage is over.
                    </p>
                  </div>

                  {/* Sole Application Card */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      borderRadius: "var(--radius-md)",
                      padding: "1.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        color: "var(--navy-950)",
                        marginTop: 0,
                        marginBottom: "0.75rem",
                      }}
                    >
                      Sole Application
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: "1.65" }}>
                      One spouse only files a sole application. The divorce papers must be formally served to the other party, and the Court must be given proof of service. Hearing may be necessary, especially if there are problems with service or if children under 18 are involved.
                    </p>
                  </div>
                </div>

                {/* Court Filing Fees Callout */}
                <div
                  style={{
                    padding: "1.25rem 1.5rem",
                    background: "rgba(37, 99, 235, 0.06)",
                    borderLeft: "4px solid var(--brand-blue)",
                    borderRadius: "var(--radius-sm)",
                    marginTop: "1.25rem",
                  }}
                >
                  <p style={{ margin: "0 0 0.5rem" }}>
                    The usual fee to file is <strong>$1,125</strong>. An exception for people who have a concession card or are having trouble paying money can only pay <strong>$365</strong>.
                  </p>
                  <p style={{ margin: 0, color: "var(--ink-secondary)", fontSize: "0.95rem" }}>
                    Legal Representatives can fill out and file the paperwork for you, making sure that everything is done correctly and in accordance with the law.
                  </p>
                </div>
              </section>

              {/* What Happens After You Submit */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  What Happens After You Submit
                </h2>
                <p>
                  After the application is sent in, the Court looks it over. In a sole application, the person who filed the application must give the other party the papers and show proof of service. The Court will grant a divorce order if it is satisfied that all requirements have been met. One month and one day after the order is made, the divorce is final.
                </p>
                <div
                  style={{
                    padding: "1.25rem 1.5rem",
                    background: "#fef3c7",
                    borderLeft: "4px solid #f59e0b",
                    borderRadius: "var(--radius-sm)",
                    marginTop: "1rem",
                  }}
                >
                  <p style={{ margin: 0, color: "#92400e", fontWeight: 500 }}>
                    A divorce legally ends a marriage, but it doesn&apos;t automatically settle disagreements over property, spousal support, or parenting. These issues need to be dealt with separately and within a certain amount of time after the divorce.
                  </p>
                </div>
              </section>

              {/* Divorce Hearings and Final Orders */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  Divorce Hearings and Final Orders
                </h2>
                <p>
                  In most of the cases, being physically present in court is not necessary. If more information is needed or if it involves children, a short hearing may be set up. Hearings usually don&apos;t last long and are only for making sure the law is being followed.
                </p>
              </section>

              {/* About Bansal Lawyers in Melbourne */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  About Bansal Lawyers in Melbourne
                </h2>
                <p>
                  Bansal Lawyers is a trusted firm of divorce lawyers in Melbourne Australia, founded with the goal of offering legal services that are practical, ethical, and focused on our clients&apos; needs. The firm started out as a small practice, but it has now grown into a trusted legal partner for people and families all over Australia.
                </p>
                <p>
                  Bansal Lawyers is well-known for its specific and personalized approach, cultural awareness and clear communication. The firm has a strong presence in family law, immigration law, and commercial law. In divorce cases, the firm offers caring and strategic advice on who can get a divorce, how to apply, parenting issues, and money issues after the divorce.
                </p>
                <p>
                  Every case is handled with honesty, care, and respect for the client&apos;s situation, giving them the confidence and legal certainty they need to move forward.
                </p>
              </section>

              {/* Conclusion */}
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
                  Conclusion
                </h2>
                <p style={{ margin: 0 }}>
                  Divorce can be hard and challenging but getting knowledge of how the legal system works can help couples make smart and confident decisions about their future. At Bansal Lawyers, we always follow the law while also looking out for our clients&apos; long-term personal and financial interests and making sure that the process goes smoothly.
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
                  Speak to a Melbourne Family Lawyer
                </h3>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.65" }}>
                  If you are considering filing for divorce or need help resolving property settlement and parenting arrangements, contact Bansal Lawyers today for confidential, compassionate legal advice.
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

            {/* Related Family Law Services Section */}
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
                Related Family Law Practice Areas
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1rem",
                }}
              >
                {relatedFamilyServices.map((service) => (
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
                      transition: "border-color var(--transition), transform var(--transition)",
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
