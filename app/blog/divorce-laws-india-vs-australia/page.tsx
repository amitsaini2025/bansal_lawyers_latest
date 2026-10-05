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
    "Divorce Process in India vs Australia: Key Differences Explained | Bansal Lawyers",
  description:
    "Compare divorce laws in India and Australia: fault vs no-fault divorce, religious vs secular systems, mutual consent options, child custody, and jurisdiction.",
  path: "/blog/divorce-laws-india-vs-australia",
  keywords: [
    "Divorce in India vs Australia",
    "Divorce Process Australia",
    "Overseas Marriage Divorce Australia",
    "Indian Divorce Law Hindu Marriage Act",
    "No Fault Divorce Australia",
    "Divorce Lawyers Melbourne",
    "Indian Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Understanding the Divorce Process in India and Australia: Key Differences Explained",
  },
];

const relatedFamilyServices = [
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description:
      "Assistance with divorces involving overseas marriages, sole and joint applications, and cross-border jurisdiction.",
  },
  {
    title: "Child Custody Lawyer Melbourne",
    href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
    description:
      "Child welfare-centric parenting arrangements, living schedules, and international relocation advisory.",
  },
  {
    title: "Property Settlement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
    description:
      "Division of Australian and overseas assets, superannuation splitting, and financial agreements.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description:
      "Formalising parenting arrangements and asset splits into legally enforceable court orders.",
  },
  {
    title: "Binding Financial Agreements",
    href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
    description:
      "Pre-nuptial and post-separation financial agreements safeguarding family assets and inheritances.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description:
      "Compassionate, culturally aware family law services for multicultural families across Victoria.",
  },
];

export default function DivorceLawsIndiaVsAustraliaPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Understanding the Divorce Process in India and Australia: Key Differences Explained",
          description:
            "Compare divorce laws in India and Australia: fault vs no-fault divorce, religious vs secular systems, mutual consent options, child custody, and jurisdiction.",
          path: "/blog/divorce-laws-india-vs-australia",
          datePublished: "2025-01-09",
          dateModified: "2025-01-09",
          authorName: "Ajay Bansal",
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
              Understanding the Divorce Process in India and Australia: Key Differences Explained
            </h1>

            {/* Meta Strip: Jan 09, 2025 | 5 min read | 978 words | Bansal Lawyers */}
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
                Jan 09, 2025
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
                978 words
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
          "Cross-Border Australian & Indian Divorce Advisory",
          "Overseas Marriages & Australian Court Recognition",
          "Secular No-Fault Family Law Act 1975 System",
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
                  alt="Understanding the Divorce Process in India and Australia"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Introduction */}
              <p style={{ marginBottom: "1.25rem" }}>
                Divorce can be a life-changing experience, and navigating the legal process is often complex and stressful. What makes this process even more challenging is that divorce laws vary significantly from country to country. Whether you are in India or Australia, the divorce process comes with its own set of rules, procedures, and requirements. In this blog, we will explore the key differences between the divorce processes in India and Australia, so you can better understand what to expect if you are going through or considering a divorce.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                At Bansal Lawyers, we are dedicated to offering expert guidance through the{" "}
                <Link
                  href="/blog/hiding-assets-during-divorce-australia"
                  style={{
                    color: "#2563eb",
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  divorce process in Australia
                </Link>
                , helping you navigate the legal landscape with confidence.
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
                1. Fault vs. No-Fault Divorce: What&apos;s the Difference?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                One of the most significant differences between the divorce processes in India and Australia is how &quot;fault&quot; is treated. In Australia, the concept of fault is not considered when it comes to divorce. The law simply requires that the marriage has irretrievably broken down, usually evidenced by 12 months of separation.
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderLeft: "4px solid #2563eb",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: 0, color: "#334155" }}>
                  On the other hand, India has different rules depending on the couple&apos;s religion. For example, under the Hindu Marriage Act, grounds like cruelty, adultery, and desertion can be used as &quot;fault&quot; grounds to seek a divorce. So, if you&apos;re in India, proving fault may be a part of your divorce process if you are not pursuing a mutual consent divorce.
                </p>
              </div>

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
                2. Religion and Divorce: A Key Factor in India
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                In India, divorce laws are influenced by the couple&apos;s religion, which means that the legal process and grounds for divorce can vary greatly. Hindu couples follow the Hindu Marriage Act, while Muslims adhere to the Muslim Personal Law, and Christians fall under the Indian Divorce Act. This can lead to differences in divorce grounds, court procedures, and even the ability to remarry.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                In Australia, divorce laws are secular and apply equally to all citizens, regardless of religion. The family court system is uniform, offering a more straightforward approach for all parties.
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
                3. Child Custody and Support: Flexibility Matters
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                When it comes to child custody and support, Australia offers a more flexible system that places the child&apos;s best interests at the heart of the decision. Courts work to ensure that both parents maintain an active role in the child&apos;s life, and custody arrangements are more adaptable to the family&apos;s needs.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                In India, while child welfare is also a priority, there can be more rigid expectations, especially regarding the custody of children. Traditionally, mothers are more likely to be awarded custody, though this is not a guarantee. Child support and maintenance laws in India can also be more rigid compared to Australia, where there is a well-established system for determining child support obligations.
              </p>

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
                4. Mutual Consent Divorce: The Fast Track Option
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                If both parties agree to end their marriage, a mutual consent divorce is often the quickest and easiest way to proceed. In India, this option allows couples to jointly file for divorce and settle issues like child custody, maintenance, and property division. This process usually takes 6 months to a year to complete.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                In Australia, the process is also streamlined if both parties agree. Couples can file a joint application for divorce after being separated for at least 12 months, making it a relatively quick and simple process, especially for those with no contested issues.
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
                5. Separation Requirements: How Long Must You Be Apart?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                In Australia, you must be separated for at least 12 months before applying for a divorce, and during this time, both parties must live apart. There&apos;s no need to prove fault or specific reasons for the breakdown of the marriage.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                In India, for a mutual consent divorce, couples must be separated for at least two years. If a divorce is being sought on fault grounds (such as cruelty or adultery), the separation period might not apply, but the case must still be presented in court.
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
                6. Jurisdiction:{" "}
                <Link
                  href="/blog/how-to-divide-finances-and-property-after-separation-australia"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Where Can You File for Divorce?
                </Link>
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                In Australia, divorce jurisdiction is clear-cut. To file for divorce, at least one party must either be an Australian citizen, have lived in Australia for at least 12 months, or consider Australia their home. This means even if you were married overseas, you could still apply for divorce in Australia if you meet these criteria.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                In India, the jurisdiction for divorce is typically determined by where the couple resides or where the marriage took place. If you&apos;re living in a foreign country, you may still be able to file for divorce in India, depending on your specific circumstances.
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
                The Six Stages of Divorce in India
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderTop: "3px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Filing the Petition
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    One spouse files the divorce petition, citing the reasons for the dissolution of the marriage.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderTop: "3px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Service of Summons
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    The other party is formally notified and required to respond.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderTop: "3px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Response
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    The spouse receiving the petition can either agree to the divorce or contest it.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderTop: "3px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Trial
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    If contested, the case goes to trial, where both parties present their evidence and arguments.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderTop: "3px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Interim Orders
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Temporary orders may be requested for child custody, spousal support, or maintenance.
                  </span>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderTop: "3px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    Final Order
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Once all issues are resolved, the court issues a final decree, officially ending the marriage.
                  </span>
                </div>
              </div>

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
                <Link
                  href="/contact"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  How Bansal Lawyers Can Help You Navigate Divorce in Australia
                </Link>
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Divorce is a challenging and emotional process, but with the right support, it can be less overwhelming. At Bansal Lawyers, we specialize in helping clients navigate the divorce process in Australia. Whether you&apos;re seeking a mutual consent divorce, dealing with child custody issues, or facing complex divorce proceedings, our expert team will ensure that your case is handled with professionalism and care.
              </p>

              <p style={{ marginBottom: "1.25rem" }}>
                We offer clear, practical legal advice and are committed to guiding you through the entire divorce process. If you&apos;re in Australia and need assistance with your divorce, Bansal Lawyers is here to support you every step of the way.
              </p>

              <p style={{ marginBottom: "1.25rem" }}>
                Contact Bansal Lawyers for expert legal assistance today.
              </p>

              <p
                style={{
                  fontWeight: 700,
                  color: "var(--navy-900)",
                  marginBottom: "2rem",
                  fontSize: "1.1rem",
                }}
              >
                AB
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
                  Married Overseas and Seeking a Divorce in Australia?
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
                  Our Melbourne family law team advises Indian and multicultural Australian couples on marriage recognition, divorce applications, property settlements, and parenting arrangements.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Speak with an Indian &amp; Australian Family Lawyer
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
          </div>
        </Container>
      </Section>
    </>
  );
}
