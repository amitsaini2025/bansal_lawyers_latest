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
    "Facing a Visa Refusal? Review & Appeal Guide | Bansal Lawyers",
  description:
    "Facing a visa refusal or cancellation? Bansal Lawyers guides you through tribunal reviews, strict appeal deadlines, evidence preparation, and winning strategies.",
  path: "/blog/visa-refusal-australia-review-appeal-bansal-lawyers",
  keywords: [
    "Visa Refusal Australia Review Appeal",
    "Bansal Lawyers Visa Refusal",
    "Administrative Review Tribunal Migration",
    "Australian Citizenship Refusal Appeal",
    "Character Visa Refusal Section 501",
    "Migration Review Application Steps",
    "Immigration Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Facing a Visa Refusal? Bansal Lawyers Can Help You Get Your Decision Reviewed and Win!",
  },
];

const relatedImmigrationServices = [
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description:
      "Comprehensive legal support challenging adverse visa refusal decisions by the Department of Home Affairs.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description:
      "Representation before the Administrative Review Tribunal (ART) for merits review hearings and legal submissions.",
  },
  {
    title: "Visa Cancellation Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/",
    description:
      "Urgent legal defence against Section 501 character cancellations and Section 116 visa condition breaches.",
  },
  {
    title: "Citizenship Lawyer Australia",
    href: "/immigration-lawyers-melbourne/citizenship-lawyer-australia/",
    description:
      "Overcoming citizenship application refusals, character tests, identity issues, and residence requirement disputes.",
  },
  {
    title: "Partner Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/",
    description:
      "Partner visa appeals, genuine relationship evidence preparation, and Schedule 3 criteria waiver submissions.",
  },
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description:
      "Appealing Genuine Student Test (GST) refusals, enrollment cancellations, and financial capacity challenges.",
  },
];

const reviewableDecisions = [
  {
    title: "Migration Visa Refusal or Cancellation",
    description:
      "If your visa application has been rejected or your visa cancelled across skilled, student, partner, visitor, or employer-sponsored streams.",
    icon: "📋",
  },
  {
    title: "Protection (Refugee) Visa Refusal",
    description:
      "If your refugee protection visa was refused or cancelled, requiring specialized merits review before the Migration & Refugee Division.",
    icon: "🛡️",
  },
  {
    title: "Character-Related Visa Issues",
    description:
      "If your visa was refused based on character concerns, criminal history findings, or section 501 / PIC 4001 notifications.",
    icon: "⚖️",
  },
  {
    title: "Australian Citizenship Refusal or Cancellation",
    description:
      "If your citizenship application has been denied or revoked due to character, identity, or continuous residence discrepancies.",
    icon: "🇦🇺",
  },
  {
    title: "Nomination Refusal",
    description:
      "If your employer nomination, occupation, or position nomination was refused by the Department under skilled employer sponsorship programs.",
    icon: "🏢",
  },
  {
    title: "Sponsorship Issues",
    description:
      "If you’ve had issues with your sponsor being refused, barred, or cancelled, impacting your underlying application or status.",
    icon: "🤝",
  },
];

export default function VisaRefusalReviewAppealPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Facing a Visa Refusal? Bansal Lawyers Can Help You Get Your Decision Reviewed and Win!",
          description:
            "Facing a visa refusal or cancellation? Bansal Lawyers guides you through tribunal reviews, strict appeal deadlines, evidence preparation, and winning strategies.",
          path: "/blog/visa-refusal-australia-review-appeal-bansal-lawyers",
          datePublished: "2025-01-01",
          dateModified: "2025-01-01",
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
              Facing a Visa Refusal? Bansal Lawyers Can Help You Get Your
              Decision Reviewed and Win!
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
              Have you received a visa refusal or cancellation decision that you
              disagree with? Do not worry and you are not alone, and we can help.
              At Bansal Lawyers, we specialize in guiding individuals through the
              complex world of visa reviews, making sure that your case gets the
              attention it deserves.
            </p>

            <DynamicArticleMeta
              publishedDate="Jan 01, 2025"
              category="Immigration Law"
              initialWords={896}
              initialReadTime="5 min read"
            />
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <TrustBar
        items={[
          "Registered Australian Legal Practitioners",
          "Merits Review Strategy & Advocacy",
          "Decisions Overturned & Visas Reinstated",
          "Clear, Practical & Compassionate Advice",
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
                  src="/images/legal-consultation-clarity.webp"
                  alt="Facing a Visa Refusal - Bansal Lawyers Decision Review and Appeal"
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
                    marginBottom: "1rem",
                    fontWeight: 500,
                  }}
                >
                  Have you received a visa refusal or cancellation decision that
                  you disagree with? Do not worry and you are not alone, and we
                  can help. At Bansal Lawyers, we specialize in guiding
                  individuals through the complex world of visa reviews, making
                  sure that your case gets the attention it deserves.
                </p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  If you are facing challenges with your{" "}
                  <Link
                    href="/blog/visa-refusal-australia-review-appeal-bansal-lawyers"
                    style={{
                      color: "#0284c7",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    migration or refugee visa, Australian citizenship
                  </Link>{" "}
                  application, or any other related decision, our team is here
                  to provide expert legal assistance and support every step of the
                  way.
                </p>
              </div>

              {/* Section 1: What Decisions Can We Help Review? */}
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
                  What Decisions Can We Help Review?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  When you receive a decision from the Department of Home Affairs
                  or the Minister for Home Affairs, it might not always be in your
                  favour. But here’s the good news: we can help you challenge a
                  variety of decisions, including:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {reviewableDecisions.map((dec, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        padding: "1.25rem",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {dec.icon}
                      </div>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {dec.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.925rem",
                          color: "#475569",
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {dec.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.65,
                      color: "#1e40af",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    At Bansal Lawyers, we are experienced in reviewing these
                    decisions and providing personalized strategies for your
                    case. If you’re unsure whether your case is eligible for
                    review, just give us a call, and we’ll help you figure it out!
                  </p>
                </div>
              </div>

              {/* Section 2: How to Apply for a Review – Step by Step */}
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
                  How to Apply for a Review – Step by Step
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  Time is crucial when applying for a review. The deadlines for
                  applying can vary depending on the type of decision you’ve
                  received, and missing these deadlines can jeopardize your case.
                  Here’s how you can stay on track:
                </p>

                {/* Steps */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      padding: "1.35rem",
                      borderRadius: "12px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
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
                      1
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          margin: "0 0 0.35rem",
                        }}
                      >
                        Check Your Decision Letter
                      </h3>
                      <p
                        style={{
                          fontSize: "0.975rem",
                          lineHeight: 1.6,
                          color: "#475569",
                          margin: 0,
                        }}
                      >
                        This letter from the Department of Home Affairs will
                        outline if your decision is eligible for review and
                        provide you with the specific deadlines.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      padding: "1.35rem",
                      borderRadius: "12px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
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
                      2
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          margin: "0 0 0.35rem",
                        }}
                      >
                        Apply Online
                      </h3>
                      <p
                        style={{
                          fontSize: "0.975rem",
                          lineHeight: 1.6,
                          color: "#475569",
                          margin: 0,
                        }}
                      >
                        The fastest and most straightforward way to apply is
                        online. Once you apply, you’ll receive confirmation, and
                        you can submit documents anytime during the process.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      padding: "1.35rem",
                      borderRadius: "12px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
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
                      3
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          margin: "0 0 0.35rem",
                        }}
                      >
                        Submit Your Evidence
                      </h3>
                      <p
                        style={{
                          fontSize: "0.975rem",
                          lineHeight: 1.6,
                          color: "#475569",
                          margin: 0,
                        }}
                      >
                        You’ll need to provide all the necessary documents and
                        evidence supporting your case. We’ll help ensure that
                        everything is in order to strengthen your application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: What Happens During the Review Process? */}
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
                  What Happens During the Review Process?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  Once we submit your application for a review, you’ll receive a
                  confirmation letter, and the Department of Home Affairs will be
                  notified. Here’s what typically follows:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "1.25rem",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "1.05rem",
                        color: "#0f172a",
                        marginBottom: "0.35rem",
                      }}
                    >
                      Review of Evidence
                    </strong>
                    <p
                      style={{
                        fontSize: "0.925rem",
                        lineHeight: 1.55,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      You will have the chance to present evidence supporting
                      your case.
                    </p>
                  </div>

                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "1.25rem",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "1.05rem",
                        color: "#0f172a",
                        marginBottom: "0.35rem",
                      }}
                    >
                      Hearings or Submissions
                    </strong>
                    <p
                      style={{
                        fontSize: "0.925rem",
                        lineHeight: 1.55,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      You may be asked to attend a hearing or submit further
                      documents.
                    </p>
                  </div>

                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "1.25rem",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "1.05rem",
                        color: "#0f172a",
                        marginBottom: "0.35rem",
                      }}
                    >
                      Decision
                    </strong>
                    <p
                      style={{
                        fontSize: "0.925rem",
                        lineHeight: 1.55,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      After careful review, a decision will be made regarding
                      your visa or citizenship status.
                    </p>
                  </div>
                </div>

                {/* Our Three Commitments */}
                <div
                  style={{
                    backgroundColor: "#f1f5f9",
                    border: "1px solid #cbd5e1",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: "1rem",
                    }}
                  >
                    How Bansal Lawyers Champions Your Case:
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                      gap: "1.25rem",
                    }}
                  >
                    <div>
                      <strong style={{ color: "#0284c7", display: "block", marginBottom: "0.25rem" }}>
                        Expert Legal Guidance
                      </strong>
                      <p style={{ margin: 0, fontSize: "0.925rem", color: "#334155", lineHeight: 1.5 }}>
                        We’ll guide you through every step of the review process.
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#0284c7", display: "block", marginBottom: "0.25rem" }}>
                        Personalized Support
                      </strong>
                      <p style={{ margin: 0, fontSize: "0.925rem", color: "#334155", lineHeight: 1.5 }}>
                        We treat your case with the attention and care it deserves.
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#0284c7", display: "block", marginBottom: "0.25rem" }}>
                        Clear Communication
                      </strong>
                      <p style={{ margin: 0, fontSize: "0.925rem", color: "#334155", lineHeight: 1.5 }}>
                        We ensure you understand your options and help you make informed decisions.
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "#0f172a",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  We’re here to fight for your rights and help you achieve the
                  best possible outcome.
                </p>
              </div>

              {/* Section 4: Get Started Today! */}
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
                  Get Started Today!
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  If you’ve received a negative decision on your visa, Australian
                  citizenship, or migration-related matter, contact Bansal
                  Lawyers today. Our team of experts is ready to help you
                  understand your options, guide you through the review process,
                  and work towards a successful resolution.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  Don&apos;t let a refusal or cancellation hold you back. Let
                  Bansal Lawyers help you turn your case around. Reach out today
                  for a consultation, and take the first step toward securing
                  your future in Australia.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  At Bansal Lawyers, we work diligently to ensure that your case
                  is presented in the best possible light, increasing the chances
                  of a favourable outcome.
                </p>
              </div>

              {/* Section 5: Can You Represent Yourself? */}
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
                  Can You Represent Yourself?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  Yes! You can represent yourself during the review process.
                  However, if you prefer to have a professional on your side, we
                  are here to help. You can appoint a registered migration agent
                  or an Australian lawyer to represent you. They will act on your
                  behalf, ensuring that everything is done correctly and
                  professionally.
                </p>

                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.975rem",
                      lineHeight: 1.65,
                      color: "#475569",
                      margin: 0,
                    }}
                  >
                    You can also have a close family member (like a spouse or
                    parent) or sponsor represent you without a fee, but for legal
                    representation, you would need a registered agent or lawyer.
                  </p>
                </div>
              </div>

              {/* Section 6: How Much Does It Cost? */}
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
                  How Much Does It Cost?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  We understand that cost is an important factor, and we want to
                  ensure that you have access to the support you need. The fee
                  for most migration visa reviews is $3,496. However, if you are
                  dealing with specific issues like immigration detention or
                  certain visa types, there might be no application fee.
                </p>

                <div
                  style={{
                    backgroundColor: "#fffbeb",
                    border: "1px solid #fde68a",
                    borderRadius: "12px",
                    padding: "1.35rem 1.5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <strong
                    style={{
                      color: "#92400e",
                      display: "block",
                      marginBottom: "0.35rem",
                      fontSize: "1.05rem",
                    }}
                  >
                    Fee Waivers &amp; Hardship Reductions
                  </strong>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "#78350f",
                      margin: 0,
                    }}
                  >
                    If you&apos;re worried about costs, reach out to us for more
                    details. We’ll walk you through all the fees and discuss any
                    options for fee reductions or payment methods.
                  </p>
                </div>
              </div>

              {/* Section 7: Why Choose Bansal Lawyers? */}
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
                  Why Choose Bansal Lawyers?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.75rem",
                  }}
                >
                  Dealing with a visa refusal or cancellation can be overwhelming,
                  but you don’t have to face it alone. At{" "}
                  <Link
                    href="/"
                    style={{
                      color: "#0284c7",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    Bansal Lawyers
                  </Link>
                  , we are committed to offering clear, practical, and
                  compassionate legal services to support you. Our team has the
                  experience and knowledge needed to handle even the most complex
                  immigration issues.
                </p>

                {/* Direct Action Box */}
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
                    Schedule Your Visa Review Consultation
                  </h3>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.65,
                      color: "#e2e8f0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Speak directly with an Australian immigration legal
                    practitioner. Call us at{" "}
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
                    or email{" "}
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
                    .
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <ButtonLink href="/contact" variant="primary">
                      Book An Appointment
                    </ButtonLink>
                    <ButtonLink
                      href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                      variant="secondary"
                    >
                      Explore Refusal Services
                    </ButtonLink>
                  </div>
                </div>
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
                    Bansal Lawyers provides specialized legal representation
                    across all Australian visa and migration refusal matters,
                    administrative tribunal appeals, and ministerial intervention
                    requests.
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

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/visa-refusal-australia-review-appeal-bansal-lawyers" />
          </div>
        </Container>
      </Section>
    </>
  );
}
