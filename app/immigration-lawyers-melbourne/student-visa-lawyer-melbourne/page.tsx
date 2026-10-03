import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  CtaSection,
  Faq,
  Hero,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Student Visa Lawyer Melbourne | Student Visa Advice & Refusals",
  description:
    "Bansal Lawyers assists with student visa applications, refusals, Genuine Student concerns, document review, evidence preparation and appeal advice.",
  path: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne",
  keywords: [
    "Student Visa Lawyer Melbourne",
    "Student Visa Lawyers Melbourne",
    "Student Visa Refusal Lawyer Melbourne",
    "Student Visa Appeal Lawyer",
    "Genuine Student Requirement Australia",
    "Student Visa Australia",
    "Migration Lawyer Melbourne",
  ],
});

const studentMatters = [
  "Student visa applications",
  "Student visa refusals",
  "Student visa appeal advice",
  "Genuine Student requirement concerns",
  "Requests for further information",
  "Document review",
  "Financial evidence review",
  "Course and study history concerns",
  "Previous visa refusal concerns",
  "Immigration history issues",
  "Appeal and review options",
];

const genuineStudentConcerns = [
  "The course does not clearly connect with your background",
  "There are gaps in your study or work history",
  "Financial documents are unclear",
  "Previous visa refusals are not explained properly",
  "The study plan looks weak or incomplete",
  "There is limited evidence of personal circumstances",
  "The application does not clearly explain why you chose the course or provider",
];

const refusalReasons = [
  "Genuine Student concerns",
  "Insufficient financial evidence",
  "Incomplete documents",
  "Weak explanation of study plans",
  "Previous immigration history issues",
  "Failure to respond properly to requests",
  "Concerns about course progression",
  "Inconsistent information",
  "Health or character-related concerns",
];

const whyChoosePoints = [
  "Clear advice on student visa requirements",
  "Review of study history and documents",
  "Guidance on Genuine Student concerns",
  "Support with financial and education evidence",
  "Assistance with requests for further information",
  "Advice on student visa refusal and appeal options",
  "Careful review before lodging or responding",
];

const studentFaqs = [
  {
    question: "Can Bansal Lawyers help with student visa applications?",
    answer:
      "Yes. Bansal Lawyers assists with student visa applications, document review, Genuine Student concerns, and evidence preparation.",
  },
  {
    question: "What is the Genuine Student requirement?",
    answer:
      "The Genuine Student requirement is used to assess whether an applicant’s circumstances support their intention to study in Australia. It may involve study history, course choice, financial position, immigration history, and future plans.",
  },
  {
    question: "Can you help if my student visa is refused?",
    answer:
      "Yes. We can review the refusal letter, explain possible options, and assist with appeal or next-step advice where available.",
  },
  {
    question: "What documents are needed for a student visa?",
    answer:
      "Documents may include identity documents, Confirmation of Enrolment, financial evidence, education records, English test results, health insurance, personal statements, and other supporting documents depending on your situation.",
  },
  {
    question: "Can I appeal a student visa refusal?",
    answer:
      "Some student visa refusals may have review options, but it depends on the decision and your circumstances. You should get advice quickly because deadlines can be strict.",
  },
  {
    question: "Should I get legal advice before lodging a student visa application?",
    answer:
      "Yes. Legal advice can help identify document gaps, Genuine Student concerns, and possible risks before the application is submitted.",
  },
];

export default function StudentVisaLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Student Visa Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(studentFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Student Visa Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Student Visa Lawyer Melbourne"
        intro={
          <>
            <p>
              A student visa matter can affect your study plans, future career,
              and stay in Australia. Whether you are applying for a student visa,
              responding to a request for information, or dealing with a refusal,
              the application needs to be prepared carefully.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with student visa applications,
              student visa refusals, Genuine Student concerns, document review,
              evidence preparation, and appeal advice. We help you understand the
              process and take the right next step based on your situation. As
              experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we provide clear legal support throughout Australia.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Student Visa Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Genuine Student Assessment & Document Review",
          "S56 & RFI Strategic Responses",
          "Administrative Review Tribunal (ART) Appeals",
        ]}
      />

      {/* 2. Student Visa Advice Before You Apply [H2] */}
      <Section tone="white" id="advice-before-applying">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Preparation & Strategy</span>
            <h2>Student Visa Advice Before You Apply</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A student visa application is not just about submitting course and
              identity documents. The Department may consider your study
              history, financial position, English requirements, immigration
              history, course choice, and whether your circumstances support your
              intention to study in Australia.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Many student visa problems happen because the application does not
              clearly explain the applicant&apos;s background or future plans.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers can review your situation, explain the key
              requirements, and guide you on the documents that may be needed
              before lodging your application.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Student Visa Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Student Visa Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {studentMatters.map((matter) => (
              <div key={matter} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{matter}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--navy-950)", fontWeight: 600 }}>
            Every student visa matter should be reviewed based on the
            applicant&apos;s personal background, education history, documents,
            and future study plans.
          </p>
        </Container>
      </Section>

      {/* 4. Genuine Student Requirement Concerns [H2] */}
      <Section tone="white" id="genuine-student">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Key Assessment Criterion</span>
            <h2>Genuine Student Requirement Concerns</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The Genuine Student requirement is an important part of many student
              visa matters. The Department may review whether your course choice,
              previous study, financial situation, personal circumstances, and
              future plans are consistent with your stated intention to study.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Concerns may arise when:
            </p>
            <ul className="points-list">
              {genuineStudentConcerns.map((concern) => (
                <li key={concern}>{concern}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can help review your circumstances and advise on how
              the application or response should be prepared.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Student Visa Refusals [H2] */}
      <Section tone="warm" id="refusals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Urgent Legal Intervention</span>
            <h2>Student Visa Refusals</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A student visa refusal can be stressful, especially when your course
              start date, future study plans, or current stay in Australia is
              affected. If you need urgent assistance, our team includes a
              knowledgeable{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              to analyze your decision and protect your appeal window.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common reasons for student visa refusal may include:
            </p>
            <ul className="points-list">
              {refusalReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If your student visa has been refused, it is important to review
              the refusal letter before deciding whether to appeal, reapply, or
              consider another option.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Requests for Further Information [H2] */}
      <Section tone="white" id="rfi-requests">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Departmental Inquiries</span>
            <h2>Requests for Further Information</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In some cases, the Department may ask for more information before
              deciding your student visa application. This request should be
              handled carefully because the response may affect the final
              decision.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients by reviewing the request, identifying missing or
              weak documents, and helping prepare a clear response to the issues
              raised.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Appeals and Review Options [H2] */}
      <Section tone="warm" id="appeals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Tribunal Review</span>
            <h2>Appeals and Review Options</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some student visa refusal decisions may be reviewed through the
              Administrative Review Tribunal. For comprehensive tribunal
              advocacy, our dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART Appeal Lawyer Melbourne
              </Link>{" "}
              can prepare statements, legal submissions, and representation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The available options depend on the type of decision, your
              location, your visa status, and the deadline mentioned in the
              decision letter.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers can review your refusal letter, explain whether
              review options may be available, and advise on evidence preparation
              for the next step.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Student Visa Matters? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Trusted Melbourne Practitioners</span>
            <h2>Why Choose Bansal Lawyers for Student Visa Matters?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Student visa matters need clear preparation and proper explanation.
              A weak or incomplete application can lead to delays, refusals, or
              limited options later.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {whyChoosePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We help clients understand what needs attention before taking the
              next step. If your long-term plans in Australia also involve family
              or partner pathways, consult our{" "}
              <Link
                href="/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Partner Visa Lawyer Melbourne
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With a Student Visa Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Student Visa Lawyer in Melbourne"
        text="If you are applying for a student visa, responding to a request for information, or dealing with a student visa refusal, Bansal Lawyers can help you understand your options."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Student Visa Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Genuine Student requirement & financial checks", "Visa refusal & condition compliance advice", "Melbourne CBD & virtual consultations"]}
      />

      {/* Topic Cluster Quick Links */}
      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practice Network</span>
            <h2 style={{ marginBottom: "1.5rem" }}>
              Related Immigration Legal Services
            </h2>
            <div className="practice-areas-grid">
              <Link
                href="/immigration-lawyers-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Immigration Lawyers Melbourne</h3>
                <p>
                  Comprehensive migration law advice for families, students,
                  workers, and Australian businesses.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Visa Refusal Lawyer Melbourne</h3>
                <p>
                  Strategic assessment of refusal letters, grounds, and urgent
                  statutory appeal time limits.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>ART Appeal Lawyer Melbourne</h3>
                <p>
                  Tribunal appeals for visa refusals and cancellations before the
                  Administrative Review Tribunal.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Partner Visa Lawyer Melbourne</h3>
                <p>
                  Spouse, prospective marriage, and de facto relationship
                  evidence review and lodgement.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={studentFaqs} />
      </Section>
    </>
  );
}
