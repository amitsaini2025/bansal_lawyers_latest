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
  createBreadcrumbSchema,
  createCaseUpdateSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained",
  description:
    "Case summary of Jaggi v Minister for Immigration [2024] FedCFamC2G 1267 involving student visa Subclass 500 refusal, GTE criteria, AAT hearing conduct, and apprehended bias.",
  path: "/student-visa-refusal-bias-jaggi-v-minister-2024",
  keywords: [
    "Jaggi v Minister 2024",
    "Apprehended Bias Student Visa Refusal",
    "Jaggi v Minister for Immigration",
    "Student Visa Judicial Review",
    "AAT Apprehended Bias",
    "GTE Criterion Student Visa",
    "Subclass 500 Refusal Judicial Review",
    "Immigration Lawyer Melbourne",
  ],
});

const relatedServices = [
  {
    title: "Student Visa Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
    description: "Subclass 500 visa applications, genuine student criteria, and compliance advice.",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description: "Decision record review, refusal grounds assessment, and statutory appeal deadlines.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description: "Merits review representation before the Administrative Review Tribunal (ART).",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description: "Comprehensive Australian immigration law counsel and strategic visa advice.",
  },
  {
    title: "Immigration Document Review Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/",
    description: "Pre-lodgement statement scrutiny, GTE audit, and evidence verification.",
  },
  {
    title: "Request for Further Information Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/request-for-further-information-lawyer-melbourne/",
    description: "Responding to s56 RFIs and Natural Justice notifications from the Department.",
  },
];

export default function JaggiCaseDetailPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Recent Cases", href: "/recent-cases" },
    { label: "Jaggi v Minister for Immigration [2024]" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData
        data={createCaseUpdateSchema({
          headline:
            "Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained",
          description:
            "Case summary of Jaggi v Minister for Immigration, Citizenship and Multicultural Affairs [2024] FedCFamC2G 1267 involving student visa Subclass 500 refusal, GTE criteria, and apprehended bias.",
          path: "/student-visa-refusal-bias-jaggi-v-minister-2024",
          datePublished: "2025-04-11",
          dateModified: "2025-04-11",
          articleSection: "Immigration Law",
        })}
      />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Article Header */}
      <section
        style={{
          background: "var(--navy-900)",
          color: "var(--white)",
          padding: "clamp(2.5rem, 5vw, 4rem) 0 clamp(2rem, 4vw, 3rem)",
        }}
      >
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#93c5fd",
                  background: "rgba(147, 197, 253, 0.12)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "3px",
                  border: "1px solid rgba(147, 197, 253, 0.25)",
                }}
              >
                Immigration Law
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  letterSpacing: "0.04em",
                }}
              >
                Case Summary &amp; Legal Update
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                lineHeight: "1.25",
                color: "var(--white)",
                margin: "0 0 1.25rem",
              }}
            >
              Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "center",
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.8)",
                paddingTop: "0.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <span>
                <strong>Published:</strong> Apr 11, 2025
              </span>
              <span>
                <strong>Citation:</strong> [2024] FedCFamC2G 1267
              </span>
              <span>
                <strong>Jurisdiction:</strong> Federal Circuit and Family Court of Australia
              </span>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Federal Circuit & Family Court Decision",
          "Student Visa (Subclass 500) Judicial Review",
          "Apprehended Bias Jurisdictional Error",
          "Independent Legal Commentary",
        ]}
      />

      {/* Main Article Content */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            {/* Short introductory note */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                background: "var(--blue-50)",
                borderLeft: "4px solid var(--brand-blue)",
                borderRadius: "var(--radius-sm)",
                marginBottom: "2.5rem",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.96rem",
                  lineHeight: "1.65",
                  color: "var(--ink)",
                  fontStyle: "italic",
                }}
              >
                This case update is provided for general information only and should not be treated as legal
                advice. The outcome of any immigration matter depends on the facts, documents, evidence,
                deadlines, and legal circumstances of that matter.
              </p>
            </div>

            {/* Featured Legal Brief Visual */}
            <div
              style={{
                marginBottom: "2rem",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Image
                src="/images/cases/court-case-review.webp"
                alt="Federal Court of Australia Legal Brief - Jaggi v Minister 2024"
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

            {/* EXACT Case Content Provided — Preserved 100% Intact */}
            <article className="case-content" style={{ color: "var(--ink)", fontSize: "1.05rem", lineHeight: "1.8" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.5rem", color: "var(--brand-blue)", marginBottom: "0.5rem" }}>
                  Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained
                </h2>
                <p style={{ color: "var(--ink-secondary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                  Apr 11,2025
                </p>
                <p style={{ fontWeight: 600, color: "var(--ink)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  Legal Update: Apprehended Bias in Migration Decisions
                </p>
                <p style={{ fontStyle: "italic", color: "var(--ink-secondary)", fontSize: "1rem", marginBottom: "1.5rem" }}>
                  Jaggi v Minister for Immigration, Citizenship and Multicultural Affairs [2024] FedCFamC2G 1267
                </p>
              </div>

              {/* Case Summary */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Case Summary
                </h3>
                <p>
                  In a significant Federal Circuit and Family Court decision handed down on 22 November 2024, the Court upheld an application for judicial review of an Administrative Appeals Tribunal (AAT) decision that had refused a student visa (Subclass 500) application. The case was heard by Judge D Humphreys in Perth.
                </p>
                <p>
                  The decision provides a detailed examination of apprehended bias in migration tribunals, particularly in the context of GTE (Genuine Temporary Entrant) assessments for student visa applicants. This case is especially notable for its thorough analysis of how a tribunal member&apos;s comments and conduct during a hearing can create a reasonable apprehension of bias.
                </p>
                <p>
                  The Court&apos;s reasoning reinforces the principle that apprehended bias constitutes jurisdictional error without requiring proof of materiality - an important consideration for practitioners handling judicial review applications.
                </p>
              </section>

              {/* Key Facts */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Key Facts
                </h3>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The applicant, a 22-year-old Indian citizen named Anmol Jaggi, applied for a student visa (subclass 500) to undertake a Certificate III in Commercial Cookery after arriving in Australia on a visitor visa on 27 April 2023
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    His student visa application was lodged on 30 August 2023 and refused by a delegate on 15 November 2023
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The refusal was primarily based on the applicant failing to satisfy clause 500.212A of schedule 2 to the Migration Regulations 1994 (Cth) - the Genuine Temporary Entrant (GTE) criterion
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Despite being enrolled in his course since 7 October 2023 with six months of documented good attendance and progress, the delegate was not satisfied he was a genuine student
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    A significant issue was that the applicant&apos;s migration agent had mistakenly uploaded another person&apos;s GTE statement with the application
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The AAT affirmed the delegate&apos;s decision on 8 May 2024 (with written reasons provided on 29 May 2024), but the Federal Circuit Court found the Tribunal&apos;s process was affected by apprehended bias
                  </li>
                </ul>
              </section>

              {/* Detailed Analysis of the Tribunal Hearing */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Detailed Analysis of the Tribunal Hearing
                </h3>
                <p>
                  The Federal Circuit Court had access to the complete transcript and audio recording of the Tribunal hearing, which revealed several problematic aspects of the proceedings:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    At the very beginning of the hearing, before hearing any substantive evidence from the applicant, the Tribunal member stated he was &ldquo;highly likely to affirm&rdquo; the previous decision
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The member made concerning generalizations, stating that &ldquo;99% of the cooks in India don&apos;t come here [to Australia] and study,&rdquo; suggesting prejudgment of the applicant&apos;s case
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The member told the applicant&apos;s migration agent: &ldquo;I know how it works... I do nine of these a week, predominantly in exactly the same situation. I can see through it&rdquo;
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The member threatened to refer the migration agent to the Office of the Migration Agents Registration Authority (OMARA) for alleged malpractice
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The member made statements suggesting he believed the applicant had &ldquo;misled the Department of Home Affairs in the application for a visitor visa&rdquo; and that the applicant had &ldquo;someone who&apos;s been coaching him on a pathway&rdquo;
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Throughout the hearing, the member appeared to hold the absence of a formal GTE statement against the applicant, despite having the opportunity to assess GTE through oral evidence
                  </li>
                </ul>
                <p style={{ marginTop: "1rem" }}>
                  The Court found that while the Tribunal member&apos;s concerns about the migration agent&apos;s conduct were legitimate, these criticisms &ldquo;spilled over into the assessment of the applicant&rdquo; in a way that suggested apprehended bias.
                </p>
              </section>

              {/* Key Legal Principles and Their Application */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Key Legal Principles and Their Application
                </h3>
                <p>The case provides an excellent illustration of several important legal principles:</p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>The &ldquo;double might&rdquo; test for apprehended bias:</strong> The Court applied the established test from <em>CNY17 v Minister for Immigration and Border Protection</em> (2019) 268 CLR 76, which asks &ldquo;whether a hypothetical fair-minded observer with knowledge of the statutory framework and factual context might reasonably apprehend that the administrator might not bring an impartial mind to the resolution of the question to be decided&rdquo;
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Stereotyping as a form of bias:</strong> The Court recognized that making generalizations about applicants from particular countries or backgrounds can constitute apprehended bias
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Materiality of bias:</strong> Citing the recent High Court decision in <em>LPDT v Minister for Immigration</em> [2024] HCA 12, the Court confirmed that were apprehended bias is established, it constitutes jurisdictional error without the need to prove materiality - meaning the applicant did not need to demonstrate that the outcome would have been different without the bias
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Inquisitorial role versus prejudgment:</strong> The Court drew a distinction between legitimate vigorous questioning (appropriate for the Tribunal&apos;s inquisitorial role) and prejudgment of a case before hearing all evidence
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Separation of criticisms:</strong> The Court noted that while criticism of a migration agent may be warranted, decision-makers must not allow these concerns to affect their assessment of the applicant&apos;s case on its merits
                  </li>
                </ul>
              </section>

              {/* Outcome and Court Orders */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Outcome and Court Orders
                </h3>
                <p>The Court made the following orders:</p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Upheld the application for judicial review
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Issued a writ of certiorari quashing the decision of the Administrative Appeals Tribunal made on 15 November 2023
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Issued a writ of mandamus directed to the Administrative Review Tribunal requiring it to determine the applicant&apos;s case according to law
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Ordered the First Respondent (Minister) to pay the Applicant&apos;s costs fixed in the sum of $8,371.30
                  </li>
                </ul>
                <p style={{ marginTop: "1rem" }}>
                  It&apos;s worth noting that the Court referred to the &ldquo;Administrative Review Tribunal&rdquo; rather than the &ldquo;Administrative Appeals Tribunal&rdquo; in its orders, reflecting the recent transition between these tribunals.
                </p>
              </section>

              {/* Implications for Migration Practice */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Implications for Migration Practice
                </h3>
                <p>
                  This case offers several important lessons for visa applicants, migration agents, and immigration lawyers:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Procedural fairness is fundamental:</strong> Even where substantive issues exist in an application (such as a missing GTE statement), applicants are entitled to have their cases considered on their merits without prejudgment
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>The importance of complete applications:</strong> While the bias issue was determinative in this case, the initial problems arose from incomplete documentation - specifically the absence of a proper GTE statement
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Review options for procedural failures:</strong> Applicants who believe their cases were not considered fairly have grounds for judicial review, even if their underlying visa applications had potential weaknesses
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Transcripts and recordings as evidence:</strong> The Court&apos;s access to both written transcripts and audio recordings of the Tribunal hearing was crucial in establishing the apprehended bias claim - highlighting the importance of these records
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Financial implications:</strong> The costs awarded ($8,371.30) demonstrate that successful judicial review can lead to recovery of legal expenses
                  </li>
                </ul>
                <p style={{ marginTop: "1rem" }}>
                  For visa applicants who believe procedural fairness has been compromised in their case, this decision supports the availability of judicial review as a remedy.
                </p>
              </section>

              {/* Other Grounds of Review */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Other Grounds of Review
                </h3>
                <p>
                  While the Court&apos;s finding on apprehended bias was sufficient to resolve the case, the applicant had also raised two other grounds of review:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Failure to consider discretionary visa conditions:</strong> The applicant argued that the Tribunal failed to consider an argument about potentially imposing condition 8534 (which would limit the holder from being granted certain substantive visas while in Australia) as a way to address concerns about the applicant&apos;s genuine temporary intentions
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>Misapplication of GTE requirements:</strong> The applicant contended that the Tribunal erroneously treated the provision of a written &ldquo;genuine temporary entrant statement&rdquo; as a mandatory requirement for the grant of a student visa, rather than considering all available evidence including oral testimony
                  </li>
                </ul>
                <p style={{ marginTop: "1rem" }}>
                  The Court did not need to determine these grounds given its finding on apprehended bias, but they represent interesting additional arguments that could be relevant in other student visa cases.
                </p>
              </section>

              {/* Informational Disclaimer & Links */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.5rem",
                  background: "var(--sand-50)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.95rem",
                  color: "var(--ink-secondary)",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.7" }}>
                  This case summary is provided for informational purposes only and does not constitute legal advice. For personalized assistance with your migration matter, please contact Bansal Lawyers Melbourne for a consultation.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <li>
                    <a
                      href="https://www.bansallawyers.com.au/dont-miss-out-why-the-new-subclass-482-sid-visa-is-the-fastest-way-to-work-and-stay-in-australia"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Why the new Subclass 482 SID visa is the fastest way to work and stay in Australia →
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/thakur-v-minister-for-immigration-2025-student-visa"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Thakur v Minister for Immigration 2025 — Student Visa Case →
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* Related Legal Services Section */}
      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Legal Support</span>
            <h2>Related Legal Services</h2>
            <p style={{ color: "var(--ink-secondary)", marginTop: "0.5rem", marginBottom: "2rem" }}>
              Explore our specialized legal services for Australian student visas, merits review, and
              immigration litigation:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 16rem), 1fr))",
                gap: "1.25rem",
              }}
            >
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  style={{
                    display: "block",
                    padding: "1.25rem",
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--brand-blue)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: "1.55",
                      color: "var(--ink-secondary)",
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Need Advice After a Visa Refusal? (CTA Section) */}
      <Section tone="white">
        <Container>
          <div
            style={{
              maxWidth: "54rem",
              margin: "0 auto",
              padding: "clamp(2rem, 4vw, 3rem)",
              background: "var(--navy-900)",
              color: "var(--white)",
              borderRadius: "var(--radius-md)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#93c5fd",
                marginBottom: "0.75rem",
              }}
            >
              Immigration Assistance
            </span>
            <h2 style={{ color: "var(--white)", marginBottom: "1rem" }}>
              Need Advice After a Visa Refusal?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.75",
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: "42rem",
                margin: "0 auto 1.75rem",
              }}
            >
              If you have received a student visa refusal, request for information, tribunal decision, or
              immigration-related notice, it is important to get advice based on your own facts and documents.
            </p>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: "1.7",
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: "42rem",
                margin: "0 auto 2rem",
              }}
            >
              Bansal Lawyers can review your decision letter, explain your options, and guide you on the next
              step.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <ButtonLink href="/contact/" variant="primary">
                Book a Consultation
              </ButtonLink>
              <ButtonLink
                href="tel:+61422905860"
                variant="white-outline"
              >
                Speak With Our Immigration Team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
