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
    "How to Appeal a Visa Refusal or Cancellation to the ART | Bansal Lawyers",
  description:
    "A guide by Bansal Lawyers on how to appeal a visa refusal or cancellation to the Administrative Review Tribunal (ART): 28-day time limits, tribunal hearing process, fees, and outcomes.",
  path: "/blog/how-to-appeal-visa-refusal-cancellation-art",
  keywords: [
    "ART Appeal Visa Refusal Australia",
    "Administrative Review Tribunal Migration",
    "AAT Replacement ART Australia",
    "Visa Cancellation Appeal Melbourne",
    "ART Application Fee 2025",
    "28 Day Appeal Time Limit ART",
    "Immigration Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "How to Appeal a Visa Refusal or Cancellation to the Administrative Review Tribunal (ART)",
  },
];

const relatedImmigrationServices = [
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description:
      "Specialist legal representation for Administrative Review Tribunal (formerly AAT) migration appeals.",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description:
      "Challenging adverse Department of Home Affairs decisions on student, partner, skilled, and visitor visas.",
  },
  {
    title: "Visa Cancellation Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/",
    description:
      "Urgent legal defense against character ground cancellations and section 116 / 501 cancellations.",
  },
  {
    title: "Partner Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/",
    description:
      "Subclass 820/801 and 309/100 applications, appeals, and genuine relationship evidence preparation.",
  },
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description:
      "Appeals against course progress breaches, work limit cancellations, and genuine temporary entrant refusals.",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description:
      "Comprehensive Australian migration law services, tribunal advocacy, and judicial review representation.",
  },
];

export default function HowToAppealArtGuidePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "How to Appeal a Visa Refusal or Cancellation to the Administrative Review Tribunal (ART)",
          description:
            "A guide by Bansal Lawyers on how to appeal a visa refusal or cancellation to the Administrative Review Tribunal (ART): 28-day time limits, tribunal hearing process, fees, and outcomes.",
          path: "/blog/how-to-appeal-visa-refusal-cancellation-art",
          datePublished: "2025-01-06",
          dateModified: "2025-01-06",
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
              How to Appeal a Visa Refusal or Cancellation to the Administrative Review Tribunal (ART)
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 06, 2025"
              category="Immigration Law"
              initialWords={748}
              initialReadTime="4 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Administrative Review Tribunal (ART) Jurisdiction",
          "Effective 14 October 2024 Reform (Formerly AAT)",
          "Strict 28-Day Statutory Lodgement Deadlines",
          "Melbourne CBD & Victoria-Wide Migration Representation",
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
                  alt="How to Appeal a Visa Refusal or Cancellation to the ART"
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
                Visa Refusal or Cancellation? How to Appeal to the Administrative Review Tribunal (ART)
              </h2>

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
                  href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  What is the Administrative Review Tribunal (ART)?
                </Link>
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                The Administrative Review Tribunal (ART) is an independent body created to review decisions made by Australian government agencies, including the Department of Home Affairs. Its primary role is to ensure decisions, particularly in migration and refugee matters, are fair, transparent, and legally sound.
              </p>

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
                  Previously known as the Administrative Appeals Tribunal (AAT), the ART came into operation on 14 October 2024, with a goal of improving efficiency, accessibility, and the speed of reviews, especially for migration-related matters like visa refusals or cancellations.
                </p>
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--navy-900)",
                  marginTop: "1.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                How Does ART Work?
              </h3>

              <p style={{ marginBottom: "2rem" }}>
                Unlike courts that focus on legal interpretations, ART is more flexible, re-examining the facts of your case from the beginning. It gives you the opportunity to present new evidence, which might not have been considered in the original decision-making process. The ART does not decide whether the law was correctly applied; instead, it reassesses the decision based on available facts.
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
                <Link
                  href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  What Is an ART Appeal?
                </Link>
              </h2>

              <p style={{ marginBottom: "2rem" }}>
                An ART appeal allows you to challenge a government decision, such as a visa refusal or cancellation, that you believe is wrong. The process offers a chance to submit new evidence, make your case, and request a review of the original decision.
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
                How to Apply for an ART Appeal
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                The process of applying for an appeal is straightforward but needs attention to detail. Here are the basic steps:
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
                    borderTop: "3px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <strong style={{ color: "#2563eb", display: "block", marginBottom: "0.35rem" }}>
                    1. Lodging Your Application
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Submit your application for review to ART within the required statutory timeframe.
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
                    2. Document Review
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    ART will examine your application and all supporting evidence provided.
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
                    3. Hearing
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    In some cases, a hearing is scheduled where you can present your case, and potentially call witnesses or have a lawyer represent you.
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
                    4. Final Decision
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    After reviewing your case, ART will make its decision and provide reasons.
                  </span>
                </div>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                Throughout this process, you may be asked for more information, and you’ll be invited to attend a hearing, where you can present your arguments. To make the most of this opportunity, having an experienced immigration lawyer is highly recommended.
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
                Time Limits for ART Appeals
              </h2>

              <div
                style={{
                  background: "#fffbeb",
                  borderLeft: "4px solid #d97706",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: "0 0 0.5rem", color: "#92400e", fontWeight: 700 }}>
                  Time is critical!
                </p>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "#78350f" }}>
                  You must submit your appeal within <strong>28 days</strong> from the date you are notified of the decision. However, special cases, such as those under sections 501 and 501CA of the Migration Act, have different timeframes. It’s essential to seek professional advice to avoid missing important deadlines.
                </p>
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
                Possible ART Decisions
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                ART has the power to:
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
                    Affirm the original decision:
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Keep the decision as is.
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
                  <strong style={{ color: "#059669", display: "block", marginBottom: "0.35rem" }}>
                    Set aside the decision:
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Cancel the original decision and replace it with a new one.
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
                    Remit the decision:
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Send the matter back to the original decision-maker for reconsideration.
                  </span>
                </div>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                These options provide a real opportunity to reverse or change a decision in your favor.
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
                Why You Should Have an Immigration Lawyer
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Navigating the ART appeal process can be complex, but with the help of a skilled immigration lawyer, you can significantly improve your chances of success. Here’s how:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)" }}>Expert Guidance:</strong> Immigration lawyers understand the intricacies of Australian migration law and can help you present your best case.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)" }}>Strategic Advice:</strong> They will guide you on the best strategies and alternative migration pathways.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)" }}>Document Preparation:</strong> Lawyers ensure that all paperwork is submitted correctly and in compliance with the law.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)" }}>Complex Cases:</strong> Whether your case is straightforward or complicated, a lawyer’s experience can make all the difference.
                </div>
              </div>

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
                Costs of ART Appeals
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                While pursuing an ART appeal does come with some costs, they are manageable. These include:
              </p>

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
                    borderLeft: "4px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Professional Fees
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    Legal fees vary based on the complexity of your case.
                  </span>
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
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    ART Application Fees
                  </strong>
                  <span style={{ fontSize: "0.95rem", color: "#475569" }}>
                    ART charges an application fee of <strong>$3,496</strong> (excluding bridging visa reviews). This must be paid upfront and may vary depending on the nature of your application.
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
                Why Seek Legal Help with Your Visa Appeal?
              </h2>

              <p style={{ marginBottom: "2rem" }}>
                Appealing a visa decision is a serious matter that could impact your future in Australia. At Bansal Lawyers, we specialize in Migration Law and have extensive experience helping clients with ART appeals. Whether you are facing a visa refusal or cancellation, we understand the appeal process and can help ensure your case is presented in the best possible way.
              </p>

              {/* Section 9 */}
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
                Contact Bansal Lawyers Today
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                If you are facing a visa refusal or cancellation, or need assistance with an ART appeal, don’t hesitate to reach out. Our team of experienced migration lawyers is here to help you navigate the process and protect your rights.
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
                  Contact us today for a consultation
                </Link>
                , and let us help you secure the best possible outcome for your visa appeal.
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
                  Facing a 28-Day ART Appeal Deadline?
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
                  Act immediately. Our experienced Melbourne immigration lawyers will audit your refusal notice, prepare fresh evidentiary submissions, and represent you before the Administrative Review Tribunal.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Request Urgent Appeal Advice
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Immigration Services */}
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
                Related Migration Law Practice Areas
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {relatedImmigrationServices.map((service, index) => (
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
            <RecommendedArticles currentHref="/blog/how-to-appeal-visa-refusal-cancellation-art" />
          </div>
        </Container>
      </Section>
    </>
  );
}
