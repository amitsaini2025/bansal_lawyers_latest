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
    "What You Need to Know About NOICC Visa Cancellations in Australia | Bansal Lawyers",
  description:
    "Received a Notice of Intention to Consider Cancellation (NOICC)? Expert guide by Bansal Lawyers on grounds for visa cancellation, 5-day response deadlines, and protecting your visa status.",
  path: "/blog/noicc-visa-cancellation-australia",
  keywords: [
    "NOICC Visa Cancellation Australia",
    "Notice of Intention to Consider Cancellation",
    "Migration Act 1958 Section 116 Cancellation",
    "Section 501 Character Cancellation",
    "Visa Cancellation Lawyer Melbourne",
    "Department of Home Affairs NOICC Response",
    "Immigration Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "What You Need to Know About NOICC Visa Cancellations in Australia",
  },
];

const relatedImmigrationServices = [
  {
    title: "Visa Cancellation Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/",
    description:
      "Urgent legal representation for NOICC responses, character ground cancellations, and section 116 / 501 matters.",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description:
      "Strategic submissions and tribunal appeals challenging adverse Home Affairs decisions.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description:
      "Merits review and tribunal advocacy before the Administrative Review Tribunal (formerly AAT).",
  },
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description:
      "Defense against course progress, attendance, and work limitation breach notices (condition 8202 / 8105).",
  },
  {
    title: "Immigration Document Review",
    href: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/",
    description:
      "Comprehensive compliance review to identify and resolve bogus document allegations and PIC 4020 risks.",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description:
      "Full spectrum immigration legal services and strategic representation across Victoria and Australia.",
  },
];

export default function NoiccVisaCancellationGuidePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "What You Need to Know About NOICC Visa Cancellations in Australia",
          description:
            "Received a Notice of Intention to Consider Cancellation (NOICC)? Expert guide by Bansal Lawyers on grounds for visa cancellation, 5-day response deadlines, and protecting your visa status.",
          path: "/blog/noicc-visa-cancellation-australia",
          datePublished: "2025-01-11",
          dateModified: "2025-01-11",
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
              What You Need to Know About NOICC Visa Cancellations in Australia
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 11, 2025"
              category="Immigration Law"
              initialWords={984}
              initialReadTime="5 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Migration Act 1958 Cancellation Defense",
          "Urgent 5 Working Days Response Submissions",
          "Section 116, 109 & 501 Character Matters",
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
                  alt="What You Need to Know About NOICC Visa Cancellations in Australia"
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
                Notice of Intention to Consider Cancellation (NOICC)
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Receiving a Notice of Intention to Consider Cancellation (NOICC) can be an overwhelming experience for any visa holder in Australia. If you find yourself in this situation, its crucial to understand what this notice entails, the potential grounds for visa cancellation, and what actions you can take to protect your visa status. At Bansal Lawyers, we specialize in guiding clients through the complexities of immigration law, particularly when facing the possibility of a visa cancellation.
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
                What is a Notice of Intention to Consider Cancellation (NOICC)?
              </h2>

              <p style={{ marginBottom: "2rem" }}>
                A NOICC is issued by the Department of Home Affairs to notify a visa holder that there are grounds for canceling their visa under the Migration Act 1958. The notice provides the visa holder with an opportunity to respond before a final decision on cancellation is made. This response typically includes presenting evidence or comments that argue against the cancellation.
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
                Grounds for Visa Cancellation
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                There are several scenarios where a NOICC may be issued, and they fall under a range of reasons defined by the Migration Act. Here are some common grounds for cancellation:
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
                    borderLeft: "4px solid #ef4444",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Provision of Incorrect Information
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Providing false or misleading information when applying for or during the course of holding a visa.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #dc2626",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    False or Bogus Documents
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Submitting fraudulent documents that are intended to deceive the Department of Home Affairs.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #f97316",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Visa Condition Breaches
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Not adhering to the visa conditions, such as staying beyond the permitted duration or working illegally.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #d97706",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Failure of Business Skills Visa Holders
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Not establishing or managing a business as required for certain business visas.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #b91c1c",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Character Concerns
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    The visa holder may pose a risk to the Australian community, possibly due to criminal activity or behavior that conflicts with Australian values.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #2563eb",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Non-Compliance with Student Visa Conditions
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Failing to meet the academic or attendance requirements set for student visa holders.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #0284c7",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Failure to Meet RSMS Conditions
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Not meeting work conditions, such as not commencing employment within six months or failing to complete the required two years of employment.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #475569",
                    borderRadius: "0.5rem",
                    padding: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    Change in Circumstances
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    If the circumstances that originally justified the granting of the visa no longer exist.
                  </p>
                </div>
              </div>

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
                  It&apos;s important to note that the power to cancel a visa is discretionary, meaning the Department can choose not to cancel the visa even if grounds for cancellation exist. However, in certain cases, such as failure to comply with mandatory conditions, the Department must cancel the visa.
                </p>
              </div>

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
                <Link
                  href="/blog/understanding-administrative-law-bansal-lawyers"
                  style={{
                    color: "var(--navy-900)",
                    textDecoration: "underline",
                    textDecorationColor: "#2563eb",
                    textUnderlineOffset: "4px",
                  }}
                >
                  What to Do if You Receive a NOICC
                </Link>
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Receiving a NOICC means the Department of Home Affairs is considering canceling your visa. However, this doesn&apos;t mean the decision is final. You typically have five working days from receiving the notice to submit a response and present your case.
              </p>

              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--navy-900)",
                  marginTop: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                Steps to Take:
              </h3>

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
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Understand the Grounds:
                  </strong>
                  Review the reasons outlined for the cancellation carefully. It&apos;s important to determine whether they are valid or whether there has been a misunderstanding.
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Prepare Your Response:
                  </strong>
                  You must respond in writing, usually within five working days, providing arguments and supporting evidence as to why your visa should not be canceled. This can include documentation, statements, or any other relevant material.
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.5rem" }}>
                    Consider the Impact:
                  </strong>
                  <p style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
                    When preparing your response, the Department will consider various factors, including:
                  </p>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      fontSize: "0.95rem",
                      color: "#475569",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                    }}
                  >
                    <li>The purpose of your stay in Australia</li>
                    <li>Your compliance with visa conditions</li>
                    <li>Any hardship the cancellation may cause to you or your family</li>
                    <li>Your behavior towards the Department, past and present</li>
                    <li>Whether there are any international obligations that may affect the cancellation decision</li>
                  </ul>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.35rem" }}>
                    Seek Professional Help:
                  </strong>
                  Navigating the response process can be complicated. It&apos;s crucial to work with experienced immigration lawyers, such as those at Bansal Lawyers, who understand the nuances of the law and can present a strong case on your behalf.
                </div>
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
                Consequences of Visa Cancellation
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                If the Department proceeds with the cancellation of your visa, and you do not have another valid visa, you will become{" "}
                <Link
                  href="/contact"
                  style={{
                    color: "#2563eb",
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  an unlawful non-citizen in Australia
                </Link>
                . This means you will lose your right to stay in the country and may face detention and deportation unless you:
              </p>

              <div
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    color: "#7f1d1d",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <li>Apply for a new visa</li>
                  <li>Successfully appeal the cancellation decision through a tribunal or judicial review</li>
                  <li>Leave Australia voluntarily</li>
                </ul>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                In some cases, if the cancellation is successful and you are an unlawful non-citizen, your chances of securing a new visa to return to Australia can be severely limited, especially if the cancellation was due to serious breaches.
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
                Get Professional Guidance with Bansal Lawyers
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                At Bansal Lawyers, we understand how distressing a NOICC can be. Our experienced team is here to assist you in drafting a compelling response to the Department of Home Affairs, ensuring that all potential grounds for cancellation are properly addressed.
              </p>

              <p style={{ marginBottom: "1.25rem" }}>
                Don’t risk a poor response. Seeking legal advice is crucial, as providing a response without proper guidance can lead to serious consequences. We can help you assess your situation, prepare the necessary documents, and present your case in the best possible light.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                Contact us today to discuss your case. Our team of experts is here to guide you through every step of the process to secure the best possible outcome.
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
                  Received a NOICC Notice from Home Affairs?
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
                  Strict deadlines apply. Speak immediately with our Melbourne immigration and visa cancellation lawyers to prepare a persuasive, evidence-backed legal submission.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Get Urgent Legal Advice
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Practice Areas */}
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
                Related Practice Areas &amp; Resources
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
            <RecommendedArticles currentHref="/blog/noicc-visa-cancellation-australia" />
          </div>
        </Container>
      </Section>
    </>
  );
}
