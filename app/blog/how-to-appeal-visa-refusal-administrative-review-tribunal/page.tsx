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
    "How to Appeal Your Visa Refusal: A Simple Guide to the ART | Bansal Lawyers",
  description:
    "A guide by Bansal Lawyers on appealing a visa refusal to the Administrative Review Tribunal (ART): merits review, 28-day deadlines, fees, hearing expectations, and decisions.",
  path: "/blog/how-to-appeal-visa-refusal-administrative-review-tribunal",
  keywords: [
    "How to Appeal Visa Refusal ART",
    "Administrative Review Tribunal Migration",
    "AAT Replacement ART Australia",
    "Visa Refusal Appeal Melbourne",
    "ART Merits Review Process",
    "ART Application Fee $3496",
    "28 Day Appeal Deadline ART",
    "Immigration Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "How to Appeal Your Visa Refusal: A Simple Guide to the Administrative Review Tribunal (ART)",
  },
];

const relatedImmigrationServices = [
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description:
      "Strategic representation for Administrative Review Tribunal (formerly AAT) migration & refugee appeals.",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description:
      "Challenging adverse Department of Home Affairs decisions on partner, student, skilled, and work visas.",
  },
  {
    title: "Visa Cancellation Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/",
    description:
      "Urgent legal defense for character cancellations (s 501), bogus documents (s 109), and breach of conditions (s 116).",
  },
  {
    title: "Partner Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/",
    description:
      "Partner visa refusals, genuine relationship statements, schedule 3 criteria waivers, and tribunal representation.",
  },
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description:
      "Overcoming genuine student test (GST) refusals, enrollment cancellations, and financial capacity challenges.",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description:
      "Comprehensive Australian immigration law advice, document submissions, tribunal representation, and judicial review.",
  },
];

const tribunalDecisions = [
  {
    name: "Affirm",
    tagline: "Decision Unchanged",
    color: "#b91c1c",
    bg: "#fef2f2",
    border: "#fecaca",
    description:
      "The ART agrees with the original decision, and it remains unchanged. The refusal by the Department of Home Affairs stands.",
  },
  {
    name: "Vary",
    tagline: "Decision Modified",
    color: "#b45309",
    bg: "#fffbeb",
    border: "#fde68a",
    description:
      "The ART makes changes to the original decision, altering specific conditions or dates while evaluating the overall merits.",
  },
  {
    name: "Set Aside",
    tagline: "Original Decision Overturned",
    color: "#15803d",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    description:
      "The ART agrees the original decision was wrong and makes a new decision in your favor, replacing the Department's refusal.",
  },
  {
    name: "Remit",
    tagline: "Sent Back to Department",
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
    description:
      "The ART sends the case back to the Department of Home Affairs with formal instructions to reconsider the decision in light of tribunal findings.",
  },
];

export default function HowToAppealVisaRefusalArtPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "How to Appeal Your Visa Refusal: A Simple Guide to the Administrative Review Tribunal (ART)",
          description:
            "A simple guide by Bansal Lawyers on how to appeal a visa refusal to the Administrative Review Tribunal (ART): merits review, 28-day time limits, fees, hearing process, and potential decisions.",
          path: "/blog/how-to-appeal-visa-refusal-administrative-review-tribunal",
          datePublished: "2025-01-02",
          dateModified: "2025-01-02",
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
                marginBottom: "1.25rem",
              }}
            >
              How to Appeal Your Visa Refusal: A Simple Guide to the
              Administrative Review Tribunal (ART)
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "#cbd5e1",
                marginBottom: "1.75rem",
                maxWidth: "760px",
              }}
            >
              If you have received a visa refusal from the Department of Home
              Affairs, you may feel overwhelmed and uncertain about what to do
              next. However, all hope is not lost. You have the option to appeal
              this decision to the Migration &amp; Refugee Division of the
              Administrative Review Tribunal (ART).
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.25rem",
                fontSize: "0.9375rem",
                color: "#94a3b8",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                paddingTop: "1.25rem",
              }}
            >
              <span>
                Published:{" "}
                <strong style={{ color: "#f8fafc" }}>Jan 02, 2025</strong>
              </span>
              <span>•</span>
              <span>
                Read Time:{" "}
                <strong style={{ color: "#f8fafc" }}>5 min read</strong>
              </span>
              <span>•</span>
              <span>
                Category:{" "}
                <strong style={{ color: "#f8fafc" }}>Immigration Law</strong>
              </span>
              <span>•</span>
              <span>
                Length:{" "}
                <strong style={{ color: "#f8fafc" }}>997 words</strong>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <TrustBar
        items={[
          "Registered Australian Legal Practitioners",
          "Migration & Refugee Division Advocacy",
          "Merits Review & Fresh Evidence Strategy",
          "Strict 28-Day Deadline Compliance",
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
                  src="/images/cases/court-case-review.webp"
                  alt="How to Appeal Your Visa Refusal to the Administrative Review Tribunal"
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
                  If you have received a visa refusal from the Department of
                  Home Affairs, you may feel overwhelmed and uncertain about what
                  to do next. However, all hope is not lost. You have the option
                  to appeal this decision to the Migration &amp; Refugee
                  Division of the Administrative Review Tribunal (ART). This
                  blog will guide you through the process of appealing your visa
                  refusal and help you understand how the ART works.
                </p>
              </div>

              {/* Section 1: What is the Administrative Review Tribunal (ART)? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  <Link
                    href="/blog/difference-between-courts-and-administrative-review-tribunal"
                    style={{
                      color: "#0284c7",
                      textDecoration: "none",
                    }}
                  >
                    What is the Administrative Review Tribunal (ART)?
                  </Link>
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  The ART is an independent body that reviews decisions made by
                  the Australian Government, including those made by the
                  Department of Home Affairs regarding visa applications. The
                  ART is specifically designed to ensure that decisions made by
                  government departments are fair, transparent, and just.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  In October 2024, the ART replaced the Administrative Appeals
                  Tribunal (AAT), continuing to handle a wide range of
                  administrative decisions, including those related to migration
                  and refugee cases. The ART operates with the goal of providing
                  a more efficient and accessible process for challenging
                  decisions.
                </p>

                {/* Transition Highlight Box */}
                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#1d4ed8",
                      color: "#ffffff",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    i
                  </div>
                  <div>
                    <strong style={{ color: "#1e3a8a", display: "block", marginBottom: "0.25rem" }}>
                      Key Transition: From AAT to ART (October 2024)
                    </strong>
                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#1e40af", lineHeight: 1.55 }}>
                      The Administrative Review Tribunal Act 2024 officially established the ART to replace the former AAT. The new tribunal prioritizes modern case management, enhanced fairness, and prompt decision timelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Why Are Visas Refused? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  Why Are Visas Refused?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  Visa refusals can occur for various reasons. Understanding
                  these reasons can help you avoid potential pitfalls:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {[
                    {
                      title: "Eligibility Criteria",
                      desc: "Failure to meet statutory visa eligibility criteria or specific subclass regulations.",
                      icon: "⚠️",
                    },
                    {
                      title: "Insufficient Documentation",
                      desc: "Incomplete proof of genuine temporary stay, funds, ties, or employment verification.",
                      icon: "📄",
                    },
                    {
                      title: "Authenticity Concerns",
                      desc: "Concerns raised by case officers about the genuineness or truthfulness of provided materials.",
                      icon: "🔍",
                    },
                    {
                      title: "Health or Character Issues",
                      desc: "Failure to satisfy Public Interest Criteria (PIC 4005/4007 or character test under s 501).",
                      icon: "⚖️",
                    },
                  ].map((pitfall, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        padding: "1.25rem",
                      }}
                    >
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                        {pitfall.icon}
                      </div>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {pitfall.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.925rem",
                          color: "#64748b",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {pitfall.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  Additionally, changes in immigration policies and regulations
                  can also impact visa decisions. Once a visa is refused, the
                  Department of Home Affairs will provide a decision letter
                  outlining the reasons for the refusal.
                </p>
              </div>

              {/* Section 3: How Does the ART Review Work? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  How Does the ART Review Work?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  The ART conducts what’s called a “merits review” of your case.
                  This means the ART doesn’t just look at whether the Department
                  of Home Affairs made a legal error. Instead, it examines the
                  entire decision afresh, considering all facts, evidence, and
                  the law as it stands. The ART aims to ensure that decisions
                  are fair and based on all the relevant information.
                </p>

                {/* Merits Review Comparison Banner */}
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: "0.75rem",
                    }}
                  >
                    What &quot;Merits Review&quot; Means for Your Case:
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      color: "#334155",
                      fontSize: "0.975rem",
                      lineHeight: 1.7,
                    }}
                  >
                    <li>
                      <strong>Fresh Perspective:</strong> The Tribunal Member steps into the shoes of the original delegate and re-decides the matter.
                    </li>
                    <li>
                      <strong>New Evidence Admissible:</strong> You can submit updated bank statements, new relationship photos, fresh medical reports, or course enrolments that did not exist at refusal.
                    </li>
                    <li>
                      <strong>Law at Time of Review:</strong> The ART applies the law that applies at the time of the review, giving you the opportunity to remedy previous deficiencies.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4: What Decisions Can the ART Make? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  What Decisions Can the ART Make?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  After reviewing your case, the ART can make one of the following
                  decisions:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {tribunalDecisions.map((decision, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: decision.bg,
                        border: `1px solid ${decision.border}`,
                        borderRadius: "12px",
                        padding: "1.35rem",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: decision.color,
                          marginBottom: "0.35rem",
                        }}
                      >
                        {decision.tagline}
                      </div>
                      <h3
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "#0f172a",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {decision.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          color: "#334155",
                          margin: 0,
                          flexGrow: 1,
                        }}
                      >
                        {decision.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: How Long Do I Have to Lodge an Appeal? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  How Long Do I Have to Lodge an Appeal?
                </h2>

                <div
                  style={{
                    backgroundColor: "#fff7ed",
                    border: "1px solid #fdba74",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    marginBottom: "1.25rem",
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
                    <span style={{ fontSize: "1.5rem" }}>⏰</span>
                    <strong
                      style={{
                        fontSize: "1.15rem",
                        color: "#9a3412",
                        fontWeight: 800,
                      }}
                    >
                      Strict Statutory Deadline: Typically 28 Days
                    </strong>
                  </div>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.75,
                      color: "#7c2d12",
                      margin: 0,
                    }}
                  >
                    The ART has strict timelines for lodging an appeal, typically
                    28 days from the date the decision was made. The exact
                    timeline will be specified in the refusal decision letter from
                    the Department of Home Affairs. It&apos;s crucial to submit your
                    appeal within this time to avoid your case being dismissed.
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "0.975rem",
                    lineHeight: 1.65,
                    color: "#64748b",
                    margin: 0,
                  }}
                >
                  <em>
                    Note: The ART does not have discretionary power to extend
                    statutory deadlines if an appeal is filed late. Missing the
                    specified timeframe generally results in an invalid
                    application and possible loss of bridging visa status.
                  </em>
                </p>
              </div>

              {/* Section 6: Costs of Appealing to the ART */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  Costs of Appealing to the ART
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  Most ART applications require an upfront application fee, which
                  is currently $3,496. However, applicants who are experiencing
                  financial hardship may be eligible for a 50% fee reduction.
                  Additionally, if your appeal is successful, you may be
                  refunded part of the application fee. For protection visa
                  reviews, no upfront fee is required, but a fee of $2,151 applies
                  if the appeal is unsuccessful.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "1.35rem",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "#0284c7",
                        textTransform: "uppercase",
                      }}
                    >
                      General Migration Matters
                    </span>
                    <h3
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "#0f172a",
                        margin: "0.25rem 0 0.5rem",
                      }}
                    >
                      $3,496
                    </h3>
                    <p
                      style={{
                        fontSize: "0.925rem",
                        color: "#475569",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      Upfront lodgement fee. Eligible for a 50% reduction in
                      cases of certified financial hardship. 50% refund payable
                      if the appeal is successful.
                    </p>
                  </div>

                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "1.35rem",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "#059669",
                        textTransform: "uppercase",
                      }}
                    >
                      Protection Visa Reviews
                    </span>
                    <h3
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "#0f172a",
                        margin: "0.25rem 0 0.5rem",
                      }}
                    >
                      $0 Upfront
                    </h3>
                    <p
                      style={{
                        fontSize: "0.925rem",
                        color: "#475569",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      No upfront application fee. A post-decision fee of $2,151
                      only becomes payable if the review application is
                      unsuccessful.
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  You should also consider the cost of legal representation if you
                  choose to work with a lawyer to assist with your appeal.
                </p>
              </div>

              {/* Section 7: How Long Does It Take to Get a Hearing at the ART? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  How Long Does It Take to Get a Hearing at the ART?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  While processing times can vary, the ART typically takes several
                  months to schedule a hearing. For example, cases related to
                  bridging visas may be finalised in around 11 days, while
                  protection visas can take up to 2,249 days.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  It&apos;s important to be patient, but also proactive in preparing
                  your case to ensure the best possible outcome.
                </p>

                {/* Processing time quick guide */}
                <div
                  style={{
                    backgroundColor: "#f1f5f9",
                    borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Typical Processing Spectrum (Illustrative)
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1.5rem",
                      fontSize: "0.925rem",
                      color: "#334155",
                    }}
                  >
                    <div>
                      ⚡ <strong>Bridging Visas:</strong> ~11 days (Urgent priority)
                    </div>
                    <div>
                      💼 <strong>Partner &amp; Student Visas:</strong> Several months to ~1.5 years
                    </div>
                    <div>
                      🛡️ <strong>Protection Visas:</strong> Up to ~2,249 days
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8: Do I Need Legal Assistance? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  Do I Need Legal Assistance?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  While it&apos;s not mandatory to hire a lawyer for an ART
                  appeal, working with an experienced immigration lawyer can
                  significantly improve your chances of success. Legal
                  professionals can help:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {[
                    {
                      num: "1",
                      title: "Assess your prospects of success",
                      text: "Reviewing the refusal reasons, Department file notes, and available evidence to give an honest, strategic appraisal of your chances.",
                    },
                    {
                      num: "2",
                      title: "Gather compelling new evidence",
                      text: "Gathering supporting documents, drafting detailed statutory declarations, obtaining expert country reports, and compiling medical assessments.",
                    },
                    {
                      num: "3",
                      title: "Prepare persuasive legal arguments",
                      text: "Preparing detailed written submissions that directly refute each refusal reason, highlighting the strongest legal and factual aspects of your case.",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      style={{
                        display: "flex",
                        gap: "1.25rem",
                        padding: "1.25rem",
                        borderRadius: "12px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          backgroundColor: "#0284c7",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          flexShrink: 0,
                        }}
                      >
                        {item.num}
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            margin: "0 0 0.35rem",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            color: "#475569",
                            margin: 0,
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 9: What to Expect at the ART Hearing? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  What to Expect at the ART Hearing?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  The ART hearing is typically less formal than court
                  proceedings. Here’s what you can expect:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {/* Where are hearings held? */}
                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "1.35rem",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "1.3rem" }}>📍</span>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          margin: 0,
                        }}
                      >
                        Where are hearings held?
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      Hearings may take place in person, via video conference, or
                      by phone, depending on the specifics of your case.
                    </p>
                  </div>

                  {/* How long will the hearing last? */}
                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "1.35rem",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "1.3rem" }}>⏱️</span>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          margin: 0,
                        }}
                      >
                        How long will the hearing last?
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      Hearings can last anywhere from a few minutes to several
                      days, depending on the complexity of the case.
                    </p>
                  </div>
                </div>

                {/* Who will be at the hearing? */}
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Who will be at the hearing?
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      color: "#334155",
                      fontSize: "0.975rem",
                      lineHeight: 1.75,
                    }}
                  >
                    <li>
                      <strong>The ART Member:</strong> The presiding decision-maker who will question you, review evidence, and make the final decision.
                    </li>
                    <li>
                      <strong>A hearing attendant:</strong> An officer to manage formalities, recordings, and room logistics.
                    </li>
                    <li>
                      <strong>An interpreter:</strong> If required, a NAATI-accredited professional provided free of charge by the tribunal.
                    </li>
                    <li>
                      <strong>Your legal representative:</strong> If you have one, your immigration lawyer or registered agent to advocate, make legal arguments, and assist you.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 10: What Happens After the Decision? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  What Happens After the Decision?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  Once the ART has reviewed your case, they will issue a decision.
                  If the decision is in your favour, the Department of Home
                  Affairs will continue processing your visa application. If the
                  decision is not favourable, the ART may affirm the original
                  decision, or you may be able to appeal further to the Federal
                  Circuit and Family Court of Australia.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      borderLeft: "4px solid #16a34a",
                      backgroundColor: "#f0fdf4",
                      padding: "1.25rem",
                      borderRadius: "0 12px 12px 0",
                    }}
                  >
                    <strong style={{ color: "#166534", display: "block", marginBottom: "0.35rem" }}>
                      Favourable Outcome (Remit or Set Aside)
                    </strong>
                    <p style={{ margin: 0, fontSize: "0.925rem", color: "#14532d", lineHeight: 1.55 }}>
                      The Department continues processing your visa, usually requiring only updated medicals, police clearances, or final visa grant notification.
                    </p>
                  </div>

                  <div
                    style={{
                      borderLeft: "4px solid #dc2626",
                      backgroundColor: "#fef2f2",
                      padding: "1.25rem",
                      borderRadius: "0 12px 12px 0",
                    }}
                  >
                    <strong style={{ color: "#991b1b", display: "block", marginBottom: "0.35rem" }}>
                      Unfavourable Outcome (Affirm)
                    </strong>
                    <p style={{ margin: 0, fontSize: "0.925rem", color: "#7f1d1d", lineHeight: 1.55 }}>
                      If legal or jurisdictional errors were committed by the ART Member, you may lodge an appeal for Judicial Review in the Federal Circuit and Family Court of Australia within 35 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 11: Need Help with Your Appeal? */}
              <div style={{ marginBottom: "2.75rem" }}>
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
                  Need Help with Your Appeal?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  The ART appeal process can be complex, but with the right legal
                  assistance, you can improve your chances of a successful outcome.
                  If you’re facing a visa refusal and are unsure of your next
                  steps, Bansal Lawyers can help guide you through the process.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.5rem",
                  }}
                >
                  Our experienced team specialises in migration law and has
                  extensive knowledge of the ART appeal process. Contact us today
                  to schedule a consultation and learn how we can assist with
                  your visa appeal.
                </p>

                {/* Contact Bansal Lawyers Box */}
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
                    Contact{" "}
                    <Link
                      href="/"
                      style={{
                        color: "#38bdf8",
                        textDecoration: "underline",
                      }}
                    >
                      Bansal Lawyers
                    </Link>
                  </h3>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.65,
                      color: "#e2e8f0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    For expert advice and assistance with your ART appeal, call us
                    today at{" "}
                    <a
                      href="tel:0422905860"
                      style={{
                        color: "#38bdf8",
                        fontWeight: 700,
                        textDecoration: "underline",
                      }}
                    >
                      0422905860
                    </a>{" "}
                    or email us at{" "}
                    <a
                      href="mailto:info@bansallawyers.com.au"
                      style={{
                        color: "#38bdf8",
                        fontWeight: 700,
                        textDecoration: "underline",
                      }}
                    >
                      info@bansallawyers.com.au
                    </a>
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <ButtonLink
                      href="/contact"
                      variant="primary"
                    >
                      Schedule An ART Consultation
                    </ButtonLink>
                    <ButtonLink
                      href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                      variant="secondary"
                    >
                      View ART Appeal Services
                    </ButtonLink>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  lineHeight: 1.6,
                  marginBottom: "3rem",
                }}
              >
                <strong>Disclaimer:</strong> This blog is intended for
                informational purposes only and does not constitute legal advice.
                Please contact a legal professional to discuss your specific
                circumstances.
              </div>

              {/* Author / Legal Practice Box */}
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
                    Bansal Lawyers Migration Practice
                  </h3>
                  <p
                    style={{
                      fontSize: "0.925rem",
                      lineHeight: 1.5,
                      color: "#64748b",
                      margin: 0,
                    }}
                  >
                    Bansal Lawyers provides specialized immigration law counsel,
                    handling visa refusal appeals, character cancellation hearings,
                    and complex jurisdictional matters before the Administrative
                    Review Tribunal and the Federal Courts.
                  </p>
                </div>
              </div>

              {/* Related Immigration Practice Areas */}
              <div>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                  }}
                >
                  Related Immigration Services
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {relatedImmigrationServices.map((service, i) => (
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
          </div>
        </Container>
      </Section>
    </>
  );
}
