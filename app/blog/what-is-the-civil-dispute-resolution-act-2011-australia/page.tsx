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
    "Civil Dispute Resolution Act 2011 Guide | Bansal Lawyers",
  description:
    "A practical guide to the Civil Dispute Resolution Act 2011 (Cth), genuine steps statements, ADR and mediation, cost penalties, and settling disputes before court in Australia.",
  path: "/blog/what-is-the-civil-dispute-resolution-act-2011-australia",
  keywords: [
    "Civil Dispute Resolution Act 2011",
    "Civil Dispute Resolution Australia",
    "Genuine Steps Statement",
    "Alternative Dispute Resolution Melbourne",
    "Civil Litigation Lawyers Melbourne",
    "Commercial Dispute Lawyer Melbourne",
    "Settling Disputes Without Court",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "What is the Civil Dispute Resolution Act 2011 A Guide to Settling Disputes Without Court in Australia",
  },
];

const relatedCivilServices = [
  {
    title: "Civil Lawyers Melbourne",
    href: "/civil-lawyers-melbourne/",
    description: "Civil dispute negotiation, letters of demand, settlement deeds, and court representation.",
  },
  {
    title: "Civil Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/",
    description: "Pre-litigation genuine steps, mediation support, and early conflict resolution.",
  },
  {
    title: "Contract Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne/",
    description: "Breach of contract claims, commercial agreement disputes, and negotiation strategy.",
  },
  {
    title: "Debt Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne/",
    description: "Debt recovery, statutory demands, payment agreements, and settlement enforcement.",
  },
  {
    title: "Negotiation Support Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/negotiation-support-lawyer-melbourne/",
    description: "Strategic negotiation, mediation advocacy, and confidential dispute resolution.",
  },
  {
    title: "Commercial Dispute Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/",
    description: "Business and corporate dispute resolution across Victoria and Federal jurisdictions.",
  },
];

export default function CivilDisputeResolutionActPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "What is the Civil Dispute Resolution Act 2011 A Guide to Settling Disputes Without Court in Australia",
          description:
            "A practical guide to the Civil Dispute Resolution Act 2011 (Cth), genuine steps statements, ADR and mediation, cost penalties, and settling disputes before court in Australia.",
          path: "/blog/what-is-the-civil-dispute-resolution-act-2011-australia",
          datePublished: "2025-03-28",
          dateModified: "2025-03-28",
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
              What is the Civil Dispute Resolution Act 2011 A Guide to Settling Disputes Without Court in Australia
            </h1>

            <DynamicArticleMeta
              publishedDate="Mar 28, 2025"
              category="Civil & Estate Law"
              initialWords={820}
              initialReadTime="4 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Civil Dispute Resolution Act 2011 (Cth)",
          "Pre-Action Genuine Steps Statements",
          "Alternative Dispute Resolution & Mediation",
          "Collins St Office & Virtual Consultations",
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
                src="/images/blog/commercial-contracts.webp"
                alt="Civil Dispute Resolution Act 2011 contract and dispute settlement at Bansal Lawyers"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 860px"
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* Content Body */}
            <article
              className="article-content"
              style={{
                color: "var(--ink)",
                fontSize: "1.06rem",
                lineHeight: "1.8",
              }}
            >
              {/* Introduction */}
              <div
                style={{
                  fontSize: "1.12rem",
                  lineHeight: "1.75",
                  color: "var(--navy-950)",
                  marginBottom: "2rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <p>
                  In the normal life people get dispute all the time in their businesses, individuals or even between service providers and customers. If you need to resolve these disputes you have to go for court, which could be expensive and time consuming. But there is an another easy way: the <em>Civil Dispute Resolution Act 2011</em> (Cth). This law is made to help the people resolve their issue before going to got which help to save time, money and stress. Let us know more about this law is and how it can help you.
                </p>
              </div>

              {/* What is the Civil Dispute Resolution Act 2011? */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  What is the Civil Dispute Resolution Act 2011?
                </h2>
                <p>
                  The Civil Dispute Resolution Act 2011 took effect on 1 August 2011. This Law helps people to get resole their issues before filing a case in the Federal Court or Federal Circuit Court. This law helps people to save money and time to focusing on solve problems as early rather than going straight to the court.
                </p>
              </section>

              {/* What Does "Genuine Steps" Mean? */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  What Does &quot;Genuine Steps&quot; Mean?
                </h2>
                <p>
                  The reason behind this Act is to tell people to took genuine steps to solve their problem before going to court. A good step means that to resolve the issue with involving of person in the dispute, rather than immediately go to court.
                </p>
                <p style={{ fontWeight: 600, color: "var(--navy-950)" }}>
                  Here are some examples of genuine steps you could take:
                </p>
                <ul
                  style={{
                    margin: "1rem 0 1.5rem 1.5rem",
                    display: "grid",
                    gap: "0.75rem",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Tell the other party what the issue is and try to talk it through to fix the problem.
                  </li>
                  <li>
                    Share any important information or documents that could help the other party understand the situation and reach a solution.
                  </li>
                  <li>
                    Consider using mediation or another way to settle the dispute with the help of a neutral third party.
                  </li>
                  <li>
                    Try to negotiate with the other person to resolve some or all of the issues.
                  </li>
                </ul>
              </section>

              {/* What Happens if You Don’t Take Genuine Steps? */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  What Happens if You Don’t Take Genuine Steps?
                </h2>
                <p>
                  Before going to court, both parties in a dispute have to file a genuine steps statement. This is a document which tells that how you resolve the issue. If you not made any genuine step to solve the problem, you have to explain why. Court always look at these statements and may even penalize you with the extra costs if you have not tried to settle things early.
                </p>
              </section>

              {/* Real Case Example */}
              <section
                style={{
                  marginBottom: "2.5rem",
                  padding: "1.5rem",
                  background: "var(--blue-50)",
                  borderLeft: "4px solid var(--brand-blue)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--brand-blue)",
                    marginTop: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  Real Case Example: Superior IP International Pty Ltd v Ahearn Fox Patent and Trade Mark Attorneys [2012]
                </h2>
                <p style={{ margin: 0 }}>
                  Lets take a look at real example to understand how this law works. In the case of <em>Superior IP International Pty Ltd v Ahearn Fox Patent and Trade Mark Attorneys</em> in 2012, the court found that Superior IP International didn’t try hard enough to resolve their dispute before taking it to court. They didn’t attempt to negotiate or use mediation. Because of this, the court decided to make them pay extra costs. This case shows that it’s important to try to work things out before rushing into court.
                </p>
              </section>

              {/* When Do You Not Have to Take Genuine Steps? */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  When Do You Not Have to Take Genuine Steps?
                </h2>
                <p>
                  There are some situations where the law understands that trying to resolve a dispute before going to court might not be possible or reasonable. For example:
                </p>
                <ul
                  style={{
                    margin: "1rem 0 1.5rem 1.5rem",
                    display: "grid",
                    gap: "0.75rem",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    If the situation is urgent, like if there is a risk of harm.
                  </li>
                  <li>
                    If it’s a type of case that’s excluded from the Act, such as certain family law cases or bankruptcy matters.
                  </li>
                </ul>
              </section>

              {/* Why Does This Matter? */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  Why Does This Matter?
                </h2>
                <p>
                  For anyone involved in a dispute, the Civil Dispute Resolution Act is important because it encourages resolving conflicts early and peacefully, without the need for court action. It helps save time, money, and emotional stress.
                </p>
                <p>
                  For lawyers and businesses, this law means you must advise your clients to try to settle disputes before starting legal proceedings. If you don’t, the court could make you pay extra costs.
                </p>
              </section>

              {/* Conclusion: Why You Should Try to Resolve Disputes Early */}
              <section
                style={{
                  marginBottom: "2.5rem",
                  padding: "1.5rem",
                  background: "#f8fafc",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--navy-950)",
                    marginTop: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  Conclusion: Why You Should Try to Resolve Disputes Early
                </h2>
                <p style={{ marginBottom: "0.85rem" }}>
                  The Civil Dispute Resolution Act is a step towards a better and faster way to handle disputes. By trying to resolve issues before going to court, you can avoid a lot of the stress and costs that come with litigation. It’s a win-win for everyone!
                </p>
                <p style={{ marginBottom: "0.85rem" }}>
                  If you ever find yourself in a dispute, it’s important to take genuine steps to solve the problem. Not only will this increase your chances of reaching a solution, but it could also save you a lot of time and money in the long run.
                </p>
                <p style={{ margin: 0 }}>
                  Need help resolving a dispute? Contact Bansal Lawyers{" "}
                  <Link
                    href="/"
                    style={{
                      color: "var(--brand-blue)",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    Best Lawyer in Melbourne Australia
                  </Link>{" "}
                  today, and we can guide you through the process of resolving your issue before it goes to court.
                </p>
              </section>

              {/* Consultation Next Steps Card */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "2rem",
                  background: "var(--navy-900)",
                  color: "#ffffff",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <h3 style={{ margin: 0, color: "#ffffff", fontSize: "1.35rem" }}>
                  Speak to a Melbourne Civil Dispute Lawyer
                </h3>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.65" }}>
                  If you are facing a business disagreement, contract breach, or civil dispute, contact Bansal Lawyers today for strategic advice on taking genuine steps and reaching an effective resolution.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem" }}>
                  <ButtonLink href="/contact" variant="light">
                    Book a Consultation
                  </ButtonLink>
                  <ButtonLink href="tel:+61422905860" variant="white-outline">
                    Call 0422 905 860
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Civil Law Services Section */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--line)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.35rem",
                  color: "var(--navy-950)",
                  marginBottom: "1.5rem",
                }}
              >
                Related Civil & Commercial Dispute Services
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1rem",
                }}
              >
                {relatedCivilServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    style={{
                      display: "block",
                      padding: "1.25rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        color: "var(--brand-blue)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--ink-secondary)",
                        lineHeight: "1.5",
                        margin: 0,
                      }}
                    >
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/what-is-the-civil-dispute-resolution-act-2011-australia" />
          </div>
        </Container>
      </Section>
    </>
  );
}
