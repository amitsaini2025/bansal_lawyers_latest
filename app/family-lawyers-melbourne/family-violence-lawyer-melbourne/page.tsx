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
  title:
    "Family Violence Lawyer Melbourne | Intervention Orders & Family Law Advice",
  description:
    "Bansal Lawyers assists with family violence matters, intervention orders, parenting concerns, safety issues and related family law advice in Melbourne.",
  path: "/family-lawyers-melbourne/family-violence-lawyer-melbourne",
  keywords: [
    "Family Violence Lawyer Melbourne",
    "Family Violence Lawyers Melbourne",
    "Intervention Order Lawyer Melbourne",
    "Family Lawyer Melbourne",
    "Family Violence Intervention Order Lawyer",
    "IVO Lawyer Melbourne",
    "Domestic Violence Lawyer Melbourne",
  ],
});

const violenceMatters = [
  "Family violence legal advice",
  "Intervention order matters",
  "Family Violence Intervention Orders",
  "Parenting issues involving safety concerns",
  "Response to intervention order applications",
  "Breach of intervention order concerns",
  "Court-related family violence matters",
  "Negotiation and document preparation",
  "Family violence issues linked to separation",
  "Urgent family law advice",
  "Child safety and parenting concerns",
  "Related criminal law concerns where applicable",
];

const beforeActionChecks = [
  "What legal documents have been issued",
  "Whether there is an intervention order application",
  "Whether children are affected",
  "Whether parenting arrangements need to change",
  "Whether police are involved",
  "Whether there are court dates or deadlines",
  "What evidence or documents may be relevant",
  "What conditions may affect contact, communication, or living arrangements",
];

const parentingIssues = [
  "Where the child lives",
  "Time spent with each parent",
  "Supervised contact",
  "Changeover arrangements",
  "Communication between parents",
  "School or childcare arrangements",
  "Urgent parenting orders",
  "Consent orders or court orders",
];

const whyChoosePoints = [
  "Clear advice about family violence and intervention order matters",
  "Review of court documents and order conditions",
  "Support with parenting issues involving safety concerns",
  "Guidance before court dates",
  "Careful handling of sensitive family situations",
  "Practical advice based on the facts of the matter",
  "Support with related family law concerns",
];

const violenceFaqs = [
  {
    question: "Can Bansal Lawyers help with family violence matters?",
    answer:
      "Yes. Bansal Lawyers assists with family violence matters, intervention orders, parenting concerns, court documents, and related family law advice.",
  },
  {
    question: "What is an intervention order?",
    answer:
      "An intervention order is a court order that may place conditions on contact, communication, behaviour, or attending certain places. The exact conditions depend on the order.",
  },
  {
    question: "Can family violence affect parenting arrangements?",
    answer:
      "Yes. Family violence concerns may affect parenting arrangements, communication between parents, changeovers, supervision, and court orders involving children.",
  },
  {
    question: "What should I do if I receive intervention order documents?",
    answer:
      "You should read the documents carefully, check the court date, and get legal advice before responding or attending court.",
  },
  {
    question: "Can you help if I am accused of breaching an intervention order?",
    answer:
      "Yes. A breach allegation can be serious. We can help you understand the order conditions, the allegation, and possible next steps.",
  },
  {
    question:
      "Should I get legal advice before agreeing to intervention order conditions?",
    answer:
      "Yes. You should understand how the conditions may affect communication, parenting arrangements, work, home, and daily life before agreeing to anything.",
  },
];

export default function FamilyViolenceLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Family Violence Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(violenceFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Family Violence Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Family Violence Lawyer Melbourne"
        intro={
          <>
            <p>
              Family violence matters need urgent and careful legal advice.
              These situations can affect personal safety, children, parenting
              arrangements, housing, police involvement, and court orders.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with family violence matters,
              intervention orders, parenting concerns, safety-related issues,
              and related family law matters in Melbourne. We help clients
              understand their options and take practical steps based on their
              situation. As experienced{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we provide measured, supportive, and confidential legal guidance.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Family Violence Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Confidential Virtual Consultations",
          "Intervention Orders (FVIO) in the Magistrates' Court",
          "Protective Parenting & Safety Condition Coordination",
          "Federal Circuit and Family Court Representation",
        ]}
      />

      {/* 2. Legal Advice for Family Violence Matters [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Careful & Timely Guidance</span>
            <h2>Legal Advice for Family Violence Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Family violence matters can move quickly. There may be police
              involvement, court dates, intervention order applications,
              parenting concerns, or urgent safety issues.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before taking action or responding to documents, it is important
              to understand:
            </p>
            <ul className="points-list">
              {beforeActionChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your situation and explain the available
              options clearly.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Family Violence Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Family Violence Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {violenceMatters.map((matter) => (
              <div key={matter} className="matter-item">
                <svg
                  className="matter-item__icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
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
            Each matter should be reviewed carefully based on the facts,
            documents, safety concerns, and court requirements.
          </p>
        </Container>
      </Section>

      {/* 4. Intervention Orders [H2] */}
      <Section tone="white" id="intervention-orders">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Magistrates&apos; Court Proceedings</span>
            <h2>Intervention Orders</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              An intervention order can place conditions on contact,
              communication, attending certain places, or other behaviour. These
              orders can affect family arrangements, parenting communication,
              housing, employment, and daily life.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients with understanding intervention order
              applications, court documents, conditions, possible responses, and
              related family law issues.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you have received intervention order documents, it is important
              to get legal advice before the court date.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Parenting Matters and Family Violence [H2] */}
      <Section tone="warm" id="parenting-matters">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Children&apos;s Safety & Wellbeing</span>
            <h2>Parenting Matters and Family Violence</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Family violence concerns can affect parenting arrangements. In some
              situations, there may be concerns about changeovers, communication
              between parents, supervision, safety, or the child’s wellbeing.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Our dedicated{" "}
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Child Custody Lawyer Melbourne
              </Link>{" "}
              assists with protective parenting arrangements, supervised
              contact, and formal applications before the Federal Circuit and
              Family Court of Australia.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Parenting issues may involve:
            </p>
            <ul className="points-list">
              {parentingIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers assists clients with family violence-related
              parenting concerns and helps them understand the legal steps
              available. Where parties are also finalizing separation, our{" "}
              <Link
                href="/family-lawyers-melbourne/divorce-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Divorce Lawyer Melbourne
              </Link>{" "}
              provides coordinated guidance.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Responding to Family Violence Allegations [H2] */}
      <Section tone="white" id="responding-to-allegations">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Fair Legal Representation</span>
            <h2>Responding to Family Violence Allegations</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some clients need advice after receiving an intervention order
              application or being accused of family violence. These matters
              should be handled carefully because the outcome may affect
              parenting, contact, reputation, employment, and related legal
              matters.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients with reviewing the allegations, understanding the
              documents, preparing for court, and considering practical legal
              options. Where appropriate, parenting or property terms can be
              safely formalized through a{" "}
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Consent Orders Lawyer Melbourne
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Breach of Intervention Order Concerns [H2] */}
      <Section tone="warm" id="breach-concerns">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Legal Consequences</span>
            <h2>Breach of Intervention Order Concerns</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A breach of an intervention order can become serious and may
              involve criminal law consequences. If you are concerned about a
              possible breach, or if you have been accused of breaching an order,
              legal advice should be taken quickly.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              In matters involving police charges or court summonses, consulting
              an experienced{" "}
              <Link
                href="/criminal-lawyers-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Criminal Lawyers Melbourne
              </Link>{" "}
              practitioner is vital to protect your legal rights and avoid
              criminal penalties.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers can assist with understanding the order conditions
              and the possible next steps.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Family Violence Matters? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Calm & Strategic Counsel</span>
            <h2>Why Choose Bansal Lawyers for Family Violence Matters?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Family violence matters need careful handling, clear advice, and
              timely action. These are sensitive cases, and the legal process can
              feel stressful for everyone involved.
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
              We help clients understand what the documents mean, what options
              may be available, and what steps should be taken next.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With a Family Violence Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Family Violence Lawyer in Melbourne"
        text="If you are dealing with a family violence matter, intervention order, parenting concern, or urgent safety-related issue, Bansal Lawyers can help you understand your next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Immediate confidential advice", "Intervention order support & court representation", "Melbourne CBD & virtual consultations"]}
      />

      {/* Topic Cluster Quick Links */}
      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practice Network</span>
            <h2 style={{ marginBottom: "1.5rem" }}>
              Related Family & Legal Services
            </h2>
            <div className="practice-areas-grid">
              <Link
                href="/family-lawyers-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Family Lawyers Melbourne</h3>
                <p>
                  Comprehensive family law advice for parenting, property,
                  divorce, and safety matters.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/divorce-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Divorce Lawyer Melbourne</h3>
                <p>
                  Sole and joint divorce applications, separation under one
                  roof, and marriage dissolution.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Child Custody Lawyer Melbourne</h3>
                <p>
                  Child living arrangements, parental responsibility, and
                  child-focused safety orders.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Consent Orders Lawyer Melbourne</h3>
                <p>
                  Court-approved consent orders formalising parenting and
                  financial agreements without trial.
                </p>
              </Link>
              <Link
                href="/criminal-lawyers-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Criminal Lawyers Melbourne</h3>
                <p>
                  Magistrates&apos; Court representation for breach of
                  intervention order allegations and summary offences.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={violenceFaqs} />
      </Section>
    </>
  );
}
