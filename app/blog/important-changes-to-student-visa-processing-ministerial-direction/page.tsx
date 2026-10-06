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
    "Key Changes to Student Visa Processing Under MD111 | Bansal Lawyers",
  description:
    "Explore how Ministerial Direction 111 (MD111) replaces MD107 for Australian Student visa (Subclass 500) processing: priority categories, provider thresholds, and merit assessment.",
  path: "/blog/important-changes-to-student-visa-processing-ministerial-direction",
  keywords: [
    "Ministerial Direction 111 Student Visa",
    "MD107 Revocation Student Visa Australia",
    "Subclass 500 Visa Processing Priority",
    "Indicative Overseas Student Allocations 2025",
    "Student Visa Lawyer Melbourne",
    "Offshore Student Visa Processing MD111",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Key Changes to Student Visa Processing Under the Latest Ministerial Direction",
  },
];

const relatedImmigrationServices = [
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description:
      "Offshore Subclass 500 applications, Genuine Student (GS) criteria, financial evidence, and enrollment assistance.",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description:
      "Challenging adverse Student visa refusals and GTE/GS requirement disputes.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description:
      "Tribunal representation before the Administrative Review Tribunal for visa refusals and cancellations.",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description:
      "Full-service Australian migration law counsel, skilled visas, partner visas, and judicial review representation.",
  },
];

export default function StudentVisaMinisterialDirectionPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Key Changes to Student Visa Processing Under the Latest Ministerial Direction",
          description:
            "A timely analysis by Bansal Lawyers on the revocation of MD107 and introduction of Ministerial Direction 111 (MD111) for Australian Student visa (Subclass 500) processing.",
          path: "/blog/important-changes-to-student-visa-processing-ministerial-direction",
          datePublished: "2024-12-22",
          dateModified: "2024-12-22",
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
                marginBottom: "1rem",
              }}
            >
              Key Changes to Student Visa Processing Under the Latest
              Ministerial Direction
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                color: "#38bdf8",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              Important Changes to Student Visa Processing: Ministerial
              Direction
            </p>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "#cbd5e1",
                marginBottom: "1.75rem",
                maxWidth: "760px",
              }}
            >
              The Australian Government has updated the student visa processing
              system with the revocation of Ministerial Direction 107 (MD107)
              and the introduction of Ministerial Direction 111 (MD111),
              effective December 19, 2024.
            </p>

            <DynamicArticleMeta
              publishedDate="Dec 22, 2024"
              category="Immigration Law"
              initialWords={497}
              initialReadTime="3 min read"
            />
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <TrustBar
        items={[
          "Subclass 500 Student Visa Experts",
          "Ministerial Direction 111 (MD111) Guidance",
          "Genuine Student (GS) Requirement Strategy",
          "Melbourne Registered Legal Practitioners",
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
                  alt="Student Visa Processing Ministerial Direction 111"
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
                  The Australian Government has updated the student visa
                  processing system with the revocation of Ministerial Direction
                  107 (MD107) and the introduction of Ministerial Direction 111
                  (MD111), effective December 19, 2024. These changes aim to
                  streamline and ensure fair and efficient processing of
                  Student visas in response to the growing international
                  education sector.
                </p>
              </div>

              {/* Section 1: Revocation of Ministerial Direction 107 (MD107) */}
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
                  Revocation of Ministerial Direction 107 (MD107)
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  As of December 18, 2024, MD107 was revoked. Initially, MD107
                  was introduced to manage the increasing volume of student visa
                  applications, prioritizing providers with strong recruitment
                  practices. However, it became apparent that it
                  disproportionately affected certain education providers. The
                  government recognized the need for a more balanced approach,
                  leading to the replacement of MD107 with MD111.
                </p>
              </div>

              {/* Section 2: Introduction of Ministerial Direction 111 (MD111) */}
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
                    href="/blog/visa-refusal-australia-review-appeal-bansal-lawyers"
                    style={{
                      color: "#0284c7",
                      textDecoration: "none",
                    }}
                  >
                    Introduction of Ministerial Direction 111
                  </Link>{" "}
                  (MD111)
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.5rem",
                  }}
                >
                  MD111 establishes new guidelines for processing offshore
                  Subclass 500 (Student) visa applications. It aims to ensure
                  more equitable processing across different provider types and
                  locations.
                </p>

                {/* Key Aspects of MD111 */}
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                  }}
                >
                  Key Aspects of MD111
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {/* Priority 1 */}
                  <div
                    style={{
                      border: "1px solid #bfdbfe",
                      backgroundColor: "#eff6ff",
                      borderRadius: "14px",
                      padding: "1.35rem 1.5rem",
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
                      <span
                        style={{
                          backgroundColor: "#1d4ed8",
                          color: "#ffffff",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          padding: "0.25rem 0.65rem",
                          borderRadius: "9999px",
                          textTransform: "uppercase",
                        }}
                      >
                        Priority 1 – High
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "1.025rem",
                        lineHeight: 1.7,
                        color: "#1e3a8a",
                        margin: 0,
                      }}
                    >
                      Offshore Student visa applications linked to providers in
                      the higher education and vocational education sectors, who
                      have not yet reached their prioritization threshold, will
                      receive fast-tracked processing. These providers must
                      remain within 80% of their indicative allocation of new
                      overseas student commencements for 2025.
                    </p>
                  </div>

                  {/* Priority 2 */}
                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      backgroundColor: "#f8fafc",
                      borderRadius: "14px",
                      padding: "1.35rem 1.5rem",
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
                      <span
                        style={{
                          backgroundColor: "#64748b",
                          color: "#ffffff",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          padding: "0.25rem 0.65rem",
                          borderRadius: "9999px",
                          textTransform: "uppercase",
                        }}
                      >
                        Priority 2 – Standard
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "1.025rem",
                        lineHeight: 1.7,
                        color: "#334155",
                        margin: 0,
                      }}
                    >
                      Once a provider meets the prioritization threshold,
                      applications linked to that provider will be processed at
                      the standard rate.
                    </p>
                  </div>
                </div>

                {/* Additional Sectors & Merit Reminder */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "1.25rem",
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
                      Impact on Different Sectors:
                    </strong>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      MD111 also applies to other sectors, including schools,
                      higher degree research students, scholarship recipients,
                      and students from regions like the Pacific and
                      Timor-Leste, ensuring priority processing for students from
                      these areas.
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#fff7ed",
                      border: "1px solid #fdba74",
                      borderRadius: "12px",
                      padding: "1.25rem",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "1.05rem",
                        color: "#9a3412",
                        marginBottom: "0.35rem",
                      }}
                    >
                      Visa Processing is Not a Guarantee of Approval:
                    </strong>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "#7c2d12",
                        margin: 0,
                      }}
                    >
                      While MD111 speeds up processing for Priority 1 applicants,
                      it does not guarantee visa approval. Applications are
                      still assessed on merit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Why These Changes Matter */}
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
                  Why These Changes Matter
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  The revised system ensures that smaller and regional providers
                  are not overlooked and that students from all regions benefit
                  from faster processing. MD111 also makes the process more
                  transparent and predictable.
                </p>
              </div>

              {/* Section 4: What This Means for Students */}
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
                  What This Means for Students
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  If you plan to study in Australia in 2025, now is the time to
                  submit your visa application. Ensure your application is
                  complete and submitted early to avoid delays. MD111 prioritizes
                  applications based on the provider’s enrolment status, but
                  applying early remains the best approach.
                </p>
              </div>

              {/* Section 5: Conclusion & Bansal Lawyers Advisory */}
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
                  Conclusion
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  Ministerial Direction 111 is a significant step toward
                  improving fairness and efficiency in student visa processing.
                  Understanding the new priority system will help students
                  navigate the process effectively.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.75rem",
                  }}
                >
                  At Bansal Lawyers, we understand the complexities of Australian
                  immigration law and are dedicated to providing expert legal
                  guidance throughout the student visa application process. With
                  the recent changes under Ministerial Direction 111, it is more
                  important than ever to ensure that your visa application is
                  well-prepared and submitted on time. Whether you are applying
                  for higher education, vocational training, or another education
                  sector, we provide the legal expertise needed to navigate these
                  changes with confidence.
                </p>

                {/* Callout Box */}
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
                    Plan Your 2025 Studies in Australia
                  </h3>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.65,
                      color: "#e2e8f0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    For personalized advice or assistance, don’t hesitate to{" "}
                    <Link
                      href="/contact"
                      style={{
                        color: "#38bdf8",
                        fontWeight: 700,
                        textDecoration: "underline",
                      }}
                    >
                      contact Bansal Lawyers
                    </Link>
                    . Let us help you achieve your educational goals in
                    Australia.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <ButtonLink href="/contact" variant="primary">
                      Contact Bansal Lawyers
                    </ButtonLink>
                    <ButtonLink
                      href="/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/"
                      variant="secondary"
                    >
                      Student Visa Services
                    </ButtonLink>
                  </div>
                </div>
              </div>

              {/* Author / Practice Box */}
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
                    Bansal Lawyers Student Visa Division
                  </h3>
                  <p
                    style={{
                      fontSize: "0.925rem",
                      lineHeight: 1.5,
                      color: "#64748b",
                      margin: 0,
                    }}
                  >
                    Bansal Lawyers advises international students, education
                    agents, and institutions across Australia, providing
                    end-to-end visa application preparation and merits review
                    advocacy.
                  </p>
                </div>
              </div>

              {/* Related Services */}
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
            <RecommendedArticles currentHref="/blog/important-changes-to-student-visa-processing-ministerial-direction" />
          </div>
        </Container>
      </Section>
    </>
  );
}
