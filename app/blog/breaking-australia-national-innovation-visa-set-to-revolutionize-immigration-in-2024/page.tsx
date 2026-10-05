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
    "National Innovation Visa (Subclass 858) Guide | Bansal Lawyers",
  description:
    "Australia's new National Innovation Visa (Subclass 858) replaces the Global Talent Visa from 6 December 2024: ministerial invitation, Form 47NI, and PR pathways.",
  path: "/blog/breaking-australia-national-innovation-visa-set-to-revolutionize-immigration-in-2024",
  keywords: [
    "National Innovation Visa Subclass 858",
    "Global Talent Visa Replacement Australia",
    "NIV Form 47NI",
    "Ministerial Invitation Subclass 858",
    "Clause 858.212(3) Migration Regulations",
    "Distinguished Talent Permanent Residency",
    "Immigration Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Breaking: Australia's National Innovation Visa Set to Revolutionize Immigration in 2024",
  },
];

const relatedImmigrationServices = [
  {
    title: "Permanent Residency Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/",
    description:
      "Specialist guidance on direct permanent residency, Subclass 858, and skilled migration pathways.",
  },
  {
    title: "Skilled Migration Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/",
    description:
      "General skilled migration, state nominations, and talent assessments for global leaders.",
  },
  {
    title: "Employer Sponsored Visa Lawyer",
    href: "/immigration-lawyers-melbourne/employer-sponsored-visa-lawyer-melbourne/",
    description:
      "Specialist talent and high-earner visa solutions for corporate sponsors and international executives.",
  },
  {
    title: "Immigration Document Review",
    href: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/",
    description:
      "Comprehensive vetting of international records of achievement, patents, publications, and citations.",
  },
];

const keyChangesList = [
  {
    num: "1",
    title: "Renaming and Replacing the Global Talent Visa",
    content:
      "The Migration Amendment (National Innovation Visa) Regulations 2024 officially replace references to the Global Talent Visa with the National Innovation Visa throughout the Migration Regulations 1994. This is more than just a name change; it signifies Australia’s shift to a broader focus on national innovation and economic development.\n\nAs part of this transition, all references to the Global Talent Visa (Class BX) will be changed to the National Innovation Visa (Class BX). For example, in Schedule 1 of the Migration Regulations, the term “Global Talent” will be substituted with “National Innovation” in various provisions, such as Regulation 1.12(7) and Subregulation 2.06AAB(1), along with others.",
  },
  {
    num: "2",
    title: "Invitation to Apply Requirement",
    content:
      "One of the most significant changes with the National Innovation Visa is the requirement that applicants must be invited, in writing, by the Minister to apply. This was not a requirement under the previous Global Talent Visa system, but it is now a key step for individuals wishing to apply for the National Innovation Visa.\n\nApplicants will need to apply within the period stated in the invitation and meet the criteria outlined in the invitation. This ensures that only those with a specific invitation from the Minister will be eligible to submit their application.",
  },
  {
    num: "3",
    title: "Record of Exceptional and Outstanding Achievement",
    content:
      "Under the new regulations, applicants must demonstrate that their internationally recognized record of exceptional and outstanding achievements aligns with the details provided in the invitation. This includes showing their achievements in the specific area stated in the invitation, which could be in sectors like technology, business, research, or other fields of national importance. This requirement is codified in Clause 858.212(3) of Schedule 2, which ensures that the applicant’s achievements are directly aligned with the ministerial invitation.",
  },
  {
    num: "4",
    title: "Transitional Arrangements",
    content:
      "For applicants who have already lodged a Global Talent Visa application before 6 December 2024, their application will continue to be assessed under the old Global Talent visa rules. The new regulations only apply to applications submitted after 6 December 2024, ensuring a clear transition for those in the process before the changes come into effect.",
  },
  {
    num: "5",
    title: "Streamlined Application Process",
    content:
      "From 6 December 2024, applicants must submit their applications using Form 47NI. This form can be completed online through Immi Account or submitted in paper format by email, provided the Department of Home Affairs authorizes this method. It’s essential to ensure the correct form is used and the application is submitted within the timeframe stated in the invitation.",
  },
];

export default function NationalInnovationVisaPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Breaking: Australia's National Innovation Visa Set to Revolutionize Immigration in 2024",
          description:
            "National Innovation Visa (Subclass 858) overview: replacing the Global Talent visa from 6 December 2024 with mandatory ministerial invitations, Form 47NI, and direct permanent residency.",
          path: "/blog/breaking-australia-national-innovation-visa-set-to-revolutionize-immigration-in-2024",
          datePublished: "2024-12-27",
          dateModified: "2024-12-27",
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
              Breaking: Australia&apos;s National Innovation Visa Set to
              Revolutionize Immigration in 2024
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                color: "#38bdf8",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              National Innovation Visa (Subclass 858): What You Need to Know
              About the Changes from 6 December 2024
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
              Starting 6 December 2024, Australia will launch a new migration
              pathway with the National Innovation Visa (Subclass 858) replacing
              the Global Talent Visa. This visa aims to attract talented
              individuals from around the world who can make a significant
              contribution to Australia&apos;s economy and innovation ecosystem.
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
                <strong style={{ color: "#f8fafc" }}>Dec 27, 2024</strong>
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
                <strong style={{ color: "#f8fafc" }}>872 words</strong>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <TrustBar
        items={[
          "Subclass 858 National Innovation Visa Counsel",
          "Ministerial Invitation Strategy & Dossier Curation",
          "Direct Permanent Residency Pathway Guidance",
          "Registered Australian Legal Practitioners",
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
                  src="/images/melbourne-legal-chambers.webp"
                  alt="Australia National Innovation Visa Subclass 858"
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
                  Starting 6 December 2024, Australia will launch a new migration
                  pathway with the National Innovation Visa (Subclass 858)
                  replacing the Global Talent Visa. This visa aims to attract
                  talented individuals from around the world who can make a
                  significant contribution to Australia economy and innovation
                  ecosystem. As these changes take effect, there are several key
                  aspects to consider. Lets explore the amendments and what they
                  mean for your visa application.
                </p>
              </div>

              {/* Section 1: What is the National Innovation Visa? */}
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
                  What is the National Innovation Visa?
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  The National Innovation Visa (Subclass 858) is designed to
                  provide a pathway for skilled professionals, researchers, and
                  entrepreneurs with internationally recognized achievements in
                  their fields. Whether you’re an innovator, an entrepreneur, or
                  an expert in your profession, this visa is tailored to those
                  who can offer a unique contribution to Australia’s economic
                  development.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  The introduction of the National Innovation Visa comes with a
                  number of important amendments to the Migration Regulations,
                  effective from 6 December 2024. Here’s a breakdown of the
                  changes.
                </p>
              </div>

              {/* Section 2: Key Changes Under the National Innovation Visa */}
              <div style={{ marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <Link
                    href="/"
                    style={{
                      color: "#0284c7",
                      textDecoration: "none",
                    }}
                  >
                    Key Changes Under the National Innovation Visa (Subclass 858)
                  </Link>
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {keyChangesList.map((change) => (
                    <div
                      key={change.num}
                      style={{
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "14px",
                        padding: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "#0284c7",
                            color: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            flexShrink: 0,
                          }}
                        >
                          {change.num}
                        </span>
                        <h3
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            margin: 0,
                          }}
                        >
                          {change.title}
                        </h3>
                      </div>

                      <div
                        style={{
                          fontSize: "1.025rem",
                          lineHeight: 1.75,
                          color: "#334155",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {change.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: The Benefits of the National Innovation Visa */}
              <div style={{ marginBottom: "3rem" }}>
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
                  The Benefits of the National Innovation Visa
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  The National Innovation Visa offers several significant
                  benefits:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #bbf7d0",
                      backgroundColor: "#f0fdf4",
                      borderRadius: "12px",
                      padding: "1.35rem",
                    }}
                  >
                    <strong
                      style={{
                        fontSize: "1.1rem",
                        color: "#166534",
                        display: "block",
                        marginBottom: "0.35rem",
                      }}
                    >
                      • Pathway to Permanent Residency:
                    </strong>
                    <p
                      style={{
                        fontSize: "0.975rem",
                        lineHeight: 1.65,
                        color: "#14532d",
                        margin: 0,
                      }}
                    >
                      The National Innovation Visa is designed to lead to
                      permanent residency in Australia, offering long-term
                      opportunities for individuals and their families to live,
                      work, and contribute to Australia’s economy.
                    </p>
                  </div>

                  <div
                    style={{
                      border: "1px solid #bfdbfe",
                      backgroundColor: "#eff6ff",
                      borderRadius: "12px",
                      padding: "1.35rem",
                    }}
                  >
                    <strong
                      style={{
                        fontSize: "1.1rem",
                        color: "#1e3a8a",
                        display: "block",
                        marginBottom: "0.35rem",
                      }}
                    >
                      • Attracting Global Talent:
                    </strong>
                    <p
                      style={{
                        fontSize: "0.975rem",
                        lineHeight: 1.65,
                        color: "#1e40af",
                        margin: 0,
                      }}
                    >
                      This visa will support Australia’s ambition to attract
                      high-quality talent, particularly in high-demand fields such
                      as technology, research, business, and other innovative
                      sectors.
                    </p>
                  </div>

                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      backgroundColor: "#f8fafc",
                      borderRadius: "12px",
                      padding: "1.35rem",
                    }}
                  >
                    <strong
                      style={{
                        fontSize: "1.1rem",
                        color: "#0f172a",
                        display: "block",
                        marginBottom: "0.35rem",
                      }}
                    >
                      • Simplified Process:
                    </strong>
                    <p
                      style={{
                        fontSize: "0.975rem",
                        lineHeight: 1.65,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      With the repeal of endorsement requirements and a more
                      transparent application procedure, the National Innovation
                      Visa is set to streamline the immigration process for
                      highly skilled professionals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: What You Need to Do Now */}
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
                  What You Need to Do Now
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  If you&apos;re considering applying for the National Innovation
                  Visa (Subclass 858) post-6 December 2024, ensure that you are
                  invited by the Minister and that your application aligns with
                  the details mentioned in the invitation. Meeting the strict
                  requirements regarding your exceptional achievements is crucial
                  for success.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  Additionally, make sure to submit your application through the
                  correct channels, using Form 47NI, and within the specified
                  timeframe mentioned in the invitation.
                </p>
              </div>

              {/* Section 5: Conclusion & Contact */}
              <div style={{ marginBottom: "3rem" }}>
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
                  The National Innovation Visa is a promising new opportunity for
                  professionals, researchers, and entrepreneurs seeking to make a
                  lasting impact on Australia&apos;s economy and innovation
                  landscape. If you are planning to apply or need assistance
                  navigating these changes, Bansal Lawyers is here to provide
                  expert legal advice and support throughout the process. Our
                  team of experienced migration lawyers can help ensure that your
                  application meets all the necessary criteria, giving you the
                  best chance of success.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.75rem",
                  }}
                >
                  Stay informed about the changes and reach out to Bansal
                  Lawyers for personalized guidance on your National Innovation
                  Visa application.
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
                    Assess Your National Innovation Visa Eligibility
                  </h3>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.65,
                      color: "#e2e8f0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Let our Melbourne migration lawyers assess your international
                    track record and prepare a comprehensive ministerial
                    invitation dossier.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <ButtonLink href="/contact" variant="primary">
                      Book A Consultation
                    </ButtonLink>
                    <ButtonLink
                      href="/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/"
                      variant="secondary"
                    >
                      Permanent Residency Pathways
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
                    Bansal Lawyers Global Talent &amp; Innovation Practice
                  </h3>
                  <p
                    style={{
                      fontSize: "0.925rem",
                      lineHeight: 1.5,
                      color: "#64748b",
                      margin: 0,
                    }}
                  >
                    Bansal Lawyers advises international researchers, tech
                    founders, and distinguished professionals on the Subclass
                    858 National Innovation Visa and Australian permanent
                    residency.
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
          </div>
        </Container>
      </Section>
    </>
  );
}
