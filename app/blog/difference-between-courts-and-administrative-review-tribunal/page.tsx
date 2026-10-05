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
    "Difference Between Courts and the Administrative Review Tribunal (ART) | Bansal Lawyers",
  description:
    "Understand the key differences between the Courts (Judicial Review) and the Administrative Review Tribunal (Merits Review) in Australia when challenging Home Affairs decisions.",
  path: "/blog/difference-between-courts-and-administrative-review-tribunal",
  keywords: [
    "Difference Between Courts and ART Australia",
    "Merits Review vs Judicial Review",
    "Administrative Review Tribunal ART Melbourne",
    "Federal Circuit Court Judicial Review",
    "Visa Appeal Lawyer Melbourne",
    "Department of Home Affairs Decision Appeal",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Understanding the Difference Between the Courts and the Administrative Review Tribunal (ART)",
  },
];

const relatedAdminServices = [
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description:
      "Strategic merits review representation before the Administrative Review Tribunal (formerly AAT).",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description:
      "Reviewing and challenging adverse visa refusal notifications from the Department of Home Affairs.",
  },
  {
    title: "Visa Cancellation Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/",
    description:
      "Defending against section 116, 109, and 501 character cancellation notices.",
  },
  {
    title: "Civil Litigation Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/",
    description:
      "Judicial review and court advocacy in the Federal Circuit and Family Court and Federal Court of Australia.",
  },
  {
    title: "Court Document Preparation",
    href: "/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/",
    description:
      "Drafting originating applications, legal submissions, and affidavit evidence for administrative appeals.",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description:
      "Comprehensive Australian migration counsel and court representation across Victoria.",
  },
];

export default function DifferenceCourtsAndArtPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Understanding the Difference Between the Courts and the Administrative Review Tribunal (ART)",
          description:
            "Understand the key differences between the Courts (Judicial Review) and the Administrative Review Tribunal (Merits Review) in Australia when challenging Home Affairs decisions.",
          path: "/blog/difference-between-courts-and-administrative-review-tribunal",
          datePublished: "2025-01-04",
          dateModified: "2025-01-04",
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
              Understanding the Difference Between the Courts and the Administrative Review Tribunal (ART)
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 04, 2025"
              category="Administrative Law"
              initialWords={785}
              initialReadTime="4 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Merits Review (ART) vs Judicial Review (Federal Courts)",
          "Fresh Evidence Assessment & Jurisdictional Errors",
          "Decisions by Department of Home Affairs & Visa Appeals",
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
                  src="/images/cases/court-case-review.webp"
                  alt="Understanding the Difference Between the Courts and the Administrative Review Tribunal"
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
                Understanding the Difference Between the Courts and the Administrative Review Tribunal (ART)
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                When you challenge a decision made by a government department like the Department of Home Affairs, many people assume they must go to court. However, in Australia, there are two primary ways to review government decisions: the Administrative Review Tribunal (ART) and the Courts. While both can review decisions made by government agencies, they serve very different purposes and have different approaches.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                Lets break down how these two bodies work and how they differ so that you can make informed decisions about the best path to take when challenging a decision.
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
                What is the Administrative Review Tribunal (ART)?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                The ART (formerly known as the Administrative Appeals Tribunal or AAT) is responsible for merits review of decisions made by government departments, including the Department of Home Affairs. Merits review means the ART looks at the decision afresh—it does not focus on whether the decision-maker followed the law but instead focuses on the facts of the case, the law, and any new evidence. The ART’s goal is to determine the right outcome based on all available information.
              </p>

              <p style={{ marginBottom: "0.75rem" }}>
                The ART can:
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
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Affirm the decision:
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Agree with the original decision and leave it unchanged.
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
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Vary the decision:
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Modify the original decision.
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
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Set aside the decision:
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Reject the original decision and make a new one.
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
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Remit the decision:
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Send the matter back to the original decision-maker, like the Department of Home Affairs, for reconsideration.
                  </span>
                </div>
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
                  If you&apos;re unhappy with the ART’s decision, you can appeal to the courts for a judicial review, which looks at the legal aspects of the decision.
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
                How Do the Courts Review Decisions?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Unlike the ART’s approach, the courts conduct judicial review, which is concerned only with the legality of the decision-making process. Courts do not reassess whether the decision itself was right or wrong; they focus on whether the decision was made according to the law.
              </p>

              <p style={{ marginBottom: "1.25rem" }}>
                If the court finds that the decision was not made legally—for example, if the law was misapplied or the process was flawed—it may send the case back to the ART for reconsideration. However, the court does not change the decision directly; it simply ensures that the right legal principles are followed.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                If the court finds that the decision-making process was legal, it will dismiss the application, meaning the original decision stands.
              </p>

              {/* Section 3: Table */}
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
                Key Differences Between ART and the Courts
              </h2>

              <div
                style={{
                  overflowX: "auto",
                  marginBottom: "2rem",
                  borderRadius: "0.75rem",
                  border: "1px solid #e2e8f0",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "0.95rem",
                    textAlign: "left",
                  }}
                >
                  <thead>
                    <tr style={{ background: "var(--navy-900)", color: "#ffffff" }}>
                      <th style={{ padding: "0.875rem 1rem", fontWeight: 700, borderBottom: "1px solid #e2e8f0" }}>
                        Aspect
                      </th>
                      <th style={{ padding: "0.875rem 1rem", fontWeight: 700, borderBottom: "1px solid #e2e8f0" }}>
                        ART (Administrative Review Tribunal)
                      </th>
                      <th style={{ padding: "0.875rem 1rem", fontWeight: 700, borderBottom: "1px solid #e2e8f0" }}>
                        Courts
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e2e8f0", background: "#ffffff" }}>
                      <td style={{ padding: "0.875rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>
                        Type of Review
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        Merits review (reassesses the decision from scratch)
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        Judicial review (checks if the law was applied correctly)
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
                      <td style={{ padding: "0.875rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>
                        Focus
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        The rightness of the decision based on facts and evidence
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        The legality of the decision-making process
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0", background: "#ffffff" }}>
                      <td style={{ padding: "0.875rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>
                        Outcome
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        Can affirm, vary, set aside, or remit the decision
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        Can remit the case or dismiss the application
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
                      <td style={{ padding: "0.875rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>
                        New Evidence
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        Can consider new evidence and facts
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        Does not consider new evidence, focuses on the law
                      </td>
                    </tr>
                    <tr style={{ background: "#ffffff" }}>
                      <td style={{ padding: "0.875rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>
                        Purpose
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        Ensures fairness and accountability in government decisions
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        Ensures decisions are made according to the law
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <Link
                  href="/blog/divorce-laws-india-vs-australia"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Why Are Both the ART and Courts Important
                </Link>
                ?
              </h2>

              <p style={{ marginBottom: "2rem" }}>
                Both the ART and the courts play vital roles in ensuring that government decisions are fair and follow the law. The ART offers a flexible, accessible review process where decisions can be re-evaluated with fresh evidence. On the other hand, the courts act as a safeguard, making sure that all decisions are legally sound and that no one, not even government bodies, is above the law.
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
                When Should You Seek ART Review or Court Action?
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #2563eb",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Choose the ART:
                  </strong>
                  If you believe the original decision by the Department of Home Affairs was incorrect, and you have new evidence or facts that could change the outcome, the ART is the right place to review the decision.
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #059669",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Choose the Courts:
                  </strong>
                  If you believe the decision-making process itself was flawed, such as the Department of Home Affairs or the ART misapplying the law, then you can seek a judicial review in the courts.
                </div>
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
                Get Legal Guidance from Bansal Lawyers
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Both the ART and judicial review processes are crucial for ensuring that administrative decisions are fair and legal. If you&apos;re unsure whether to pursue an ART review or a judicial review in court, consulting a legal professional can help guide your decision.
              </p>

              <p style={{ marginBottom: "1.25rem" }}>
                At Bansal Lawyers, we have the experience to help you navigate both the ART and court systems. Whether you’re looking to challenge a decision made by the Department of Home Affairs or need advice on how to proceed with an appeal, we’re here to help.{" "}
                <Link
                  href="/contact"
                  style={{
                    color: "#2563eb",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  Contact Bansal Lawyers today for a consultation.
                </Link>{" "}
                Let us guide you through the review process and help you achieve the best possible outcome for your case.
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
                  Unsure Whether to Apply to the ART or the Federal Courts?
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
                  Our Melbourne administrative and immigration lawyers analyze whether your case requires fresh merits review or judicial review for jurisdictional error.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Schedule an Administrative Law Consultation
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Administrative Practice Areas */}
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
                Related Administrative &amp; Migration Practice Areas
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {relatedAdminServices.map((service, index) => (
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
            <RecommendedArticles currentHref="/blog/difference-between-courts-and-administrative-review-tribunal" />
          </div>
        </Container>
      </Section>
    </>
  );
}
