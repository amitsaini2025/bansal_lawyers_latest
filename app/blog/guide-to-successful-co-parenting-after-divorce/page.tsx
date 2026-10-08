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
    "Guide to Co-Parenting After Divorce | Bansal Lawyers",
  description:
    "Practical legal and parental advice on building a successful co-parenting relationship after divorce in Australia: parenting plans, consent orders, mediation, and child well-being.",
  path: "/blog/guide-to-successful-co-parenting-after-divorce",
  keywords: [
    "Co-Parenting After Divorce Australia",
    "Parenting Arrangements Melbourne",
    "Parenting Plans Family Law",
    "Consent Orders Melbourne",
    "Child Custody Lawyers Melbourne",
    "Family Mediation Melbourne",
    "Family Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Guide to Successful Co-Parenting After Divorce: Building a Positive Future for Your Family",
  },
];

const relatedFamilyServices = [
  {
    title: "Child Custody Lawyer Melbourne",
    href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
    description: "Parenting arrangements, parental responsibility, living arrangements, and court orders.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description: "Legally enforceable parenting and financial consent orders approved by the Family Court.",
  },
  {
    title: "Family Dispute Resolution Lawyer",
    href: "/family-lawyers-melbourne/family-dispute-resolution-lawyer-melbourne/",
    description: "Accredited family dispute mediation and Section 60I certificates prior to court applications.",
  },
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description: "Sole and joint divorce applications, marriage separation under one roof, and court filings.",
  },
  {
    title: "Child Support Lawyer Melbourne",
    href: "/family-lawyers-melbourne/child-support-lawyer-melbourne/",
    description: "Advice on child maintenance assessments, binding child support agreements, and enforcement.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description: "Compassionate, expert family law advice and representation across Victoria.",
  },
];

export default function CoParentingAfterDivorcePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Guide to Successful Co-Parenting After Divorce: Building a Positive Future for Your Family",
          description:
            "Practical legal and parental advice on building a successful co-parenting relationship after divorce in Australia: parenting plans, consent orders, mediation, and child well-being.",
          path: "/blog/guide-to-successful-co-parenting-after-divorce",
          datePublished: "2025-01-21",
          dateModified: "2025-01-21",
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
              Guide to Successful Co-Parenting After Divorce: Building a Positive Future for Your Family
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 21, 2025"
              category="Family Law"
              initialWords={650}
              initialReadTime="3 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Child's Best Interests Always Prioritized",
          "Parenting Plans & Court Consent Orders",
          "Family Dispute Resolution (FDR) Support",
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
                src="/images/legal-consultation-clarity.webp"
                alt="Co-parenting and parenting arrangements legal advice at Bansal Lawyers Melbourne"
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
                <p style={{ fontSize: "1.08rem", marginBottom: "1rem" }}>
                  Going through a divorce is tough, but when children are involved, the complexity increases. At Bansal Lawyers, we understand the emotional and legal challenges that accompany separation, especially when it comes to ensuring that your children thrive despite the changes. The journey of co-parenting after divorce may feel overwhelming, but with the right approach, it can become an opportunity to create a healthier and happier future for both you and your children.
                </p>
                <p style={{ fontSize: "1.08rem", margin: 0 }}>
                  Whether you are already in the middle of a divorce or just beginning to navigate the process, this guide will provide you with valuable insights and practical tips to help you co-parent successfully and build a positive, supportive environment for your children.
                </p>
              </section>

              {/* 1. Keep Your Child’s Well-Being Front and Centre */}
              <section>
                <div
                  style={{
                    background: "var(--sand-50)",
                    padding: "1.5rem 1.75rem",
                    borderRadius: "var(--radius-sm)",
                    borderLeft: "4px solid var(--navy-800)",
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
                    1. Keep Your Child’s Well-Being Front and Centre
                  </h2>
                  <p style={{ margin: 0 }}>
                    At the heart of co-parenting is one simple, yet powerful truth: your child&apos;s happiness and emotional stability must always come first. Divorce can create a lot of tension and conflict, but your children’s emotional needs should guide every decision you make. While your relationship with your ex-partner may have ended, your shared responsibility as parents is a lifelong commitment.
                  </p>
                </div>
              </section>

              {/* 2. The Legal Side of Co-Parenting: What You Need to Know */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  2. The Legal Side of Co-Parenting: What You Need to Know
                </h2>
                <div style={{ display: "grid", gap: "1rem" }}>
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Parenting Plan or Consent Order
                    </strong>
                    <span>
                      If you and your ex-partner can agree on the terms of co-parenting, you can create a Parenting Plan or formalize the arrangement through a Consent Order filed with the Federal Circuit and Family Court of Australia.
                    </span>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Mediation
                    </strong>
                    <span>
                      If you can’t reach an agreement, mediation is the next step. This process allows you to work with a neutral Family Dispute Resolution (FDR) practitioner to resolve conflicts.
                    </span>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Court Application
                    </strong>
                    <span>
                      If all else fails, you can apply to the court for Parenting Orders, where a judge will determine arrangements based on the best interests of the child.
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "1.25rem",
                    padding: "1.25rem 1.5rem",
                    background: "linear-gradient(135deg, rgba(234, 240, 246, 0.9) 0%, rgba(245, 242, 235, 0.95) 100%)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 600, color: "var(--navy-900)" }}>
                    In Australia, both parents share joint parental responsibility, meaning that major decisions about your child’s education, health, and welfare need to be made together.
                  </p>
                </div>
              </section>

              {/* 3. Tips for Building a Successful Co-Parenting Relationship */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  3. Tips for Building a Successful Co-Parenting Relationship
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Put Your Child’s Needs First
                    </strong>
                    <span>Ensure your child&apos;s physical and emotional comfort comes before personal grievances.</span>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Be Respectful
                    </strong>
                    <span>Treat every interaction with courtesy, professionalism, and boundary awareness.</span>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Clear, Concise Communication
                    </strong>
                    <span>Keep exchanges focused on schedules, medical updates, school matters, and logistics.</span>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Stay Involved in Your Child’s Life
                    </strong>
                    <span>Attend school functions, sporting activities, and milestones consistently.</span>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Support Their Relationship with the Other Parent
                    </strong>
                    <span>Encourage phone calls, positive interactions, and respect for both households.</span>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Limit Negative Comments
                    </strong>
                    <span>Never badmouth the other parent in front of the child or use them as a messenger.</span>
                  </div>

                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                      gridColumn: "1 / -1",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Encourage Emotional Expression
                    </strong>
                    <span>Allow children to share their feelings freely without fear of disappointing either parent.</span>
                  </div>
                </div>
              </section>

              {/* 4. Why Legal Support Matters */}
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
                    4. Why Legal Support Matters: Let Us Help You Navigate the Complexities
                  </h2>
                  <p style={{ marginBottom: "1rem" }}>
                    At Bansal Lawyers, we understand that divorce and co-parenting can be overwhelming. That’s why we’re here to offer expert legal advice tailored to your unique situation.
                  </p>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      margin: 0,
                      display: "grid",
                      gap: "0.5rem",
                    }}
                  >
                    <li>Understand your rights and responsibilities as a parent</li>
                    <li>Ensure your child’s best interests are always prioritized</li>
                    <li>Reach a fair and amicable agreement with your ex-partner</li>
                    <li>Navigate the court process with confidence if needed</li>
                  </ul>
                </div>
              </section>

              {/* 5. Let’s Make This Journey Easier Together */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.45rem",
                    color: "var(--navy-900)",
                    marginBottom: "0.75rem",
                  }}
                >
                  5. Let’s Make This Journey Easier Together
                </h2>
                <p style={{ margin: 0 }}>
                  Divorce doesn’t have to be the end of your ability to raise happy, well-adjusted children. With the right mindset, legal guidance, and communication, you and your ex-partner can create a positive and cooperative co-parenting relationship. At Bansal Lawyers, we’re here to support you every step of the way.
                </p>
              </section>

              {/* Related Information Section */}
              <section>
                <div
                  style={{
                    background: "var(--sand-50)",
                    padding: "1.75rem 2rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.3rem",
                      color: "var(--navy-900)",
                      marginTop: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    Related Information:
                  </h3>
                  <div style={{ display: "grid", gap: "0.75rem" }}>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>
                        <Link
                          href="/blog/hiding-assets-during-divorce-australia"
                          style={{ color: "var(--navy-900)", textDecoration: "underline" }}
                        >
                          Penalty for Hiding Assets in Divorce Australia:
                        </Link>
                      </strong>{" "}
                      The court may penalize the dishonest party with cost orders, asset redistribution, or contempt sanctions.
                    </div>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>Cost of Divorce in Victoria:</strong> As of 2024, the standard application fee is approximately $930 (with reduced fee concessions available for eligible concession holders).
                    </div>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>What is the Average Split in a Divorce Settlement in Australia?</strong> It depends on financial and non-financial contributions, future needs, care of children, and earning capacities.
                    </div>
                  </div>

                  <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--line)" }}>
                    <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.7 }}>
                      Best team of experienced lawyers in Melbourne Australia Bansal Lawyers always help families move forward with awareness, clarity and confidence. By combining compassionate support with strong legal expertise, we guide you through the challenges of co-parenting after divorce and empower you to make decisions that protect your child’s future and well-being.
                    </p>
                    <p style={{ marginTop: "0.75rem", marginBottom: 0, fontWeight: 600 }}>
                      For expert family law advice, contact{" "}
                      <Link
                        href="/contact"
                        style={{ color: "var(--navy-900)", textDecoration: "underline" }}
                      >
                        Bansal Lawyers
                      </Link>
                      . Let us help you secure the best future for your family.
                    </p>
                  </div>
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
                  Need Legal Support with Parenting Arrangements or Consent Orders?
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Speak with our compassionate Melbourne family law team for guidance on drafting formal parenting plans, negotiating consent orders, or navigating mediation.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <ButtonLink href="/book-an-appointment" variant="primary">
                    Book a Family Consultation
                  </ButtonLink>
                  <ButtonLink href="/family-lawyers-melbourne/child-custody-lawyer-melbourne" variant="secondary">
                    View Child Custody Services
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
                Our Melbourne family solicitors provide caring, strategic representation across all aspects of family and children&apos;s matters.
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
            <RecommendedArticles currentHref="/blog/guide-to-successful-co-parenting-after-divorce" />
          </div>
        </Container>
      </Section>
    </>
  );
}
