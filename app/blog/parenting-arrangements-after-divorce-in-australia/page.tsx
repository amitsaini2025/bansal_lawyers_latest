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
    "Parenting Arrangements After Divorce in Australia | Bansal Lawyers",
  description:
    "Comprehensive guide on parenting arrangements after divorce in Australia under the Family Law Act 1975: child's best interests, parenting plans, consent orders, and mediation.",
  path: "/blog/parenting-arrangements-after-divorce-in-australia",
  keywords: [
    "Parenting Arrangements After Divorce Australia",
    "Best Interests of the Child Family Law",
    "Parenting Plans Melbourne",
    "Parenting Orders Family Court Australia",
    "Child Custody Lawyers Melbourne",
    "Divorce Lawyers Melbourne",
    "Family Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Parenting Arrangements After Divorce in Australia Insights from Bansal Lawyers",
  },
];

const relatedFamilyServices = [
  {
    title: "Child Custody Lawyer Melbourne",
    href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
    description: "Parenting arrangements, parental responsibility, living schedules, and court orders.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description: "Enforceable parenting and property consent orders approved by the Family Court.",
  },
  {
    title: "Family Dispute Resolution Lawyer",
    href: "/family-lawyers-melbourne/family-dispute-resolution-lawyer-melbourne/",
    description: "Accredited family dispute mediation and Section 60I certificates prior to court proceedings.",
  },
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description: "Sole and joint divorce applications, separation under one roof, and court filings.",
  },
  {
    title: "Child Support Lawyer Melbourne",
    href: "/family-lawyers-melbourne/child-support-lawyer-melbourne/",
    description: "Child support assessments, binding child support agreements, and enforcement advice.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description: "Compassionate, high-calibre family law representation and dispute resolution across Victoria.",
  },
];

export default function ParentingArrangementsAfterDivorcePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Parenting Arrangements After Divorce in Australia Insights from Bansal Lawyers",
          description:
            "Comprehensive guide on parenting arrangements after divorce in Australia under the Family Law Act 1975: child's best interests, parenting plans, consent orders, and mediation.",
          path: "/blog/parenting-arrangements-after-divorce-in-australia",
          datePublished: "2025-01-18",
          dateModified: "2025-01-18",
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
              Parenting Arrangements After Divorce in Australia Insights from Bansal Lawyers
            </h1>

            {/* Meta Strip: Jan 18, 2025 | 7 min read | 1251 words | Bansal Lawyers */}
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
                Jan 18, 2025
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
                7 min read
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
                1251 words
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
          "Family Law Act 1975 Best Interests Framework",
          "Parenting Plans & Court Consent Orders",
          "Family Dispute Resolution (FDR) Mediation",
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
                alt="Parenting arrangements and child custody legal consultation at Bansal Lawyers Melbourne"
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
                  Divorce is often one of the most challenging experiences a family can go through, especially when children are involved. The emotional and logistical complexities of separation can leave parents uncertain about the best way to ensure their children well-being during such a significant transition. At Bansal Lawyers, we understand that maintaining a focus on your child needs is crucial, and we are here to help you navigate the legal aspects of divorce and parenting arrangements.
                </p>
              </section>

              {/* Children Can Flourish After Divorce */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.65rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  Children Can Flourish After Divorce
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  It is important to recognize that children from divorced families can thrive just as well as children from intact families, especially when they are supported and encouraged to maintain positive relationships with both parents and other significant people in their lives, such as grandparents or extended family members, where it is safe to do so.
                </p>
                <p style={{ margin: 0 }}>
                  However, for some children, divorce can be a stressful experience. Children’s reactions often depend on factors like their age, temperament, and the level of conflict or cooperation between their parents. It is natural for children to experience a range of emotions during and after a divorce, and addressing these emotions with care is essential for their long-term well-being. If you or your child are feeling stressed due to the divorce, it’s a good idea to seek support and consider helpful resources to manage these challenges.
                </p>
              </section>

              {/* What Does a Child Need After Divorce? */}
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
                    What Does a Child Need After Divorce?
                  </h2>
                  <p style={{ marginBottom: "1rem" }}>
                    After a divorce, it’s essential to focus on your child’s emotional and physical needs. Both parents should prioritize the following actions:
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", margin: "0 0 1rem", display: "grid", gap: "0.5rem" }}>
                    <li>Reassure your child that they are loved and that the divorce is not their fault.</li>
                    <li>Maintain a positive and cooperative relationship with your ex-partner when it comes to making decisions about your child’s care.</li>
                    <li>Avoid involving your child in conflicts, and ensure they are not caught in the middle of any disputes.</li>
                    <li>Encourage open communication, allowing your child to express their feelings and concerns without fear of judgment.</li>
                    <li>Support relationships with extended family, like grandparents, if appropriate.</li>
                  </ul>
                  <p style={{ margin: 0, fontWeight: 600, color: "var(--navy-900)" }}>
                    A child needs stability, routine, and the assurance that both parents are committed to providing care and support. By prioritizing the child’s well-being, parents can help their children adjust to life after divorce.
                  </p>
                </div>
              </section>

              {/* Key Considerations for Parenting Arrangements After Divorce */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.65rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  Key Considerations for Parenting Arrangements After Divorce
                </h2>
                <p style={{ marginBottom: "1.25rem" }}>
                  Divorce is unique for every family, and there is no one-size-fits-all solution when it comes to parenting arrangements. When determining the best arrangements for your child, there are several factors to keep in mind:
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
                      Safety First
                    </strong>
                    <span>
                      The safety of your child should always be the primary concern, particularly when dealing with potential issues like family violence or neglect.
                    </span>
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
                      Child’s Wishes
                    </strong>
                    <span>
                      Depending on their age and maturity, children may have preferences about their living arrangements or time spent with each parent. These views should be considered when making decisions.
                    </span>
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
                      Routine and Stability
                    </strong>
                    <span>
                      Establishing a predictable routine can help children feel secure, but it’s important to remain flexible in case of changes such as special occasions or school holidays.
                    </span>
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
                      Time with Extended Family
                    </strong>
                    <span>
                      If possible, children should continue to spend time with extended family members such as grandparents or other important people in their lives.
                    </span>
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
                      Future Considerations
                    </strong>
                    <span>
                      Decisions about the child’s schooling, extracurricular activities, healthcare, and religious practices should be part of the ongoing conversation.
                    </span>
                  </div>
                </div>
              </section>

              {/* The Legal Framework: Best Interests of the Child */}
              <section>
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(234, 240, 246, 0.9) 0%, rgba(245, 242, 235, 0.95) 100%)",
                    padding: "1.75rem 2rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                    boxShadow: "var(--shadow)",
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
                    The Legal Framework: Best Interests of the Child
                  </h2>
                  <p style={{ marginBottom: "1rem" }}>
                    In Australia, the <em>Family Law Act 1975</em> sets out that the best interests of the child must be the primary consideration in any parenting dispute, including matters related to living arrangements, education, and healthcare decisions.
                  </p>
                  <p style={{ marginBottom: "0.75rem", fontWeight: 600, color: "var(--navy-900)" }}>
                    When determining what is in the child’s best interests, the Court will consider a variety of factors:
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", margin: "0 0 1.25rem", display: "grid", gap: "0.5rem" }}>
                    <li>
                      <strong>Safety:</strong> The Court will evaluate whether arrangements promote the safety of the child and anyone who has care of the child, particularly in relation to family violence or abuse.
                    </li>
                    <li>
                      <strong>Emotional, Psychological, and Cultural Needs:</strong> The child’s emotional and psychological needs are critical, as well as their cultural identity, particularly for Indigenous children.
                    </li>
                    <li>
                      <strong>Relationship with Parents and Extended Family:</strong> The Court will also weigh the benefit of a child maintaining relationships with both parents, and where it is safe, with other significant people in the child’s life, such as grandparents or siblings.
                    </li>
                    <li>
                      <strong>The Capacity of Parents to Meet the Child’s Needs:</strong> The Court considers whether each parent can meet the child’s developmental, emotional, and cultural needs.
                    </li>
                  </ul>
                  <p style={{ margin: 0, fontSize: "0.98rem" }}>
                    If parents can reach a mutual agreement about their child’s care, a Parenting Plan can be created. If you cannot come to an agreement, you may need to seek Parenting Orders from the Court. In some cases, the Court will appoint an Independent Children’s Lawyer (ICL) to represent the child’s interests.
                  </p>
                </div>
              </section>

              {/* What If You Can’t Agree on Parenting Arrangements? */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  What If You Can’t Agree on Parenting Arrangements?
                </h2>
                <p style={{ marginBottom: "1.25rem" }}>
                  While it is always preferable to resolve parenting matters amicably, it is not uncommon for parents to face challenges in reaching an agreement post-divorce. There are several ways to work through these challenges:
                </p>

                <div style={{ display: "grid", gap: "1rem" }}>
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                      Informal Arrangements
                    </strong>
                    <span>Sometimes, parents can agree to informal arrangements without formal legal documentation.</span>
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
                      Parenting Plans
                    </strong>
                    <span>If a more formal agreement is needed, a Parenting Plan can outline the specifics of your child’s care in writing, signed and dated by both parents.</span>
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
                      Parenting Orders
                    </strong>
                    <span>If informal arrangements or a Parenting Plan are not sufficient, parents may need to apply for Consent Orders or litigated Parenting Orders through the Court.</span>
                  </div>
                </div>

                <p style={{ marginTop: "1.25rem", marginBottom: 0 }}>
                  In some cases, mediation or dispute resolution can help resolve disagreements without court intervention. If Court orders are needed, Bansal Lawyers can assist in navigating the process and ensuring that your child’s best interests are protected throughout the legal proceedings.
                </p>
              </section>

              {/* Conclusion */}
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
                    Conclusion
                  </h2>
                  <p style={{ marginBottom: "1rem" }}>
                    Divorce is undoubtedly difficult for both parents and children. However, with the right support and expert legal guidance, it is possible to make decisions that prioritize the well-being of your child. At Bansal Lawyers, we are dedicated to helping you navigate the complexities of divorce and parenting arrangements, ensuring that your child’s emotional and developmental needs are met.
                  </p>
                  <p style={{ margin: 0 }}>
                    As one of the best family lawyers in the area, we offer personalized advice and effective solutions. If you are facing a divorce or need assistance with parenting arrangements, contact Bansal Lawyers today. Our experienced divorce lawyers are here to provide the legal expertise and support you need to protect your child’s best interests and help your family move forward with confidence.
                  </p>
                </div>
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
                          href="/blog/divorce-lawyers-in-melbourne-australia-complete-guide-for-couple"
                          style={{ color: "var(--navy-900)", textDecoration: "underline" }}
                        >
                          How to get a divorce in Australia:
                        </Link>
                      </strong>{" "}
                      You can apply for divorce through the Federal Circuit and Family Court of Australia. This process requires a separation period of at least 12 months.
                    </div>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>Divorce laws in Australia:</strong> The laws governing divorce are outlined under the <em>Family Law Act 1975</em>, which ensures that decisions are made in the best interests of children.
                    </div>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>Divorce percentage in Australia:</strong> In recent years, the divorce rate in Australia has hovered around 30-35% of marriages ending in divorce.
                    </div>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>Filing for divorce in Australia:</strong> You must file a divorce application, either individually or jointly with your spouse. If both parties agree on all aspects of the divorce, it can often be resolved without a court appearance.
                    </div>
                  </div>

                  <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--line)" }}>
                    <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.7 }}>
                      For those wondering how to apply for a divorce or the rates of divorce in Australia, it is helpful to consult with a divorce lawyer to ensure all legal steps are followed. In some cases, divorce lawyers in Melbourne or other regions can offer personalized legal advice specific to your circumstances. If you are seeking to know more about divorce statistics in Australia, or have questions regarding the divorce process, our team at Bansal Lawyers is here to assist you.
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
                  Need Advice on Parenting Plans or Court Consent Orders?
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Our experienced Melbourne family lawyers assist parents in drafting enforceable parenting plans, formalizing consent orders, and representing families in mediation and court.
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
                Our Melbourne family lawyers provide compassionate, focused advocacy across all areas of family law.
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
          </div>
        </Container>
      </Section>
    </>
  );
}
