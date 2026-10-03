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
  title: "Child Custody Lawyer Melbourne | Parenting Orders & Family Law Advice",
  description:
    "Bansal Lawyers assists with child custody, parenting arrangements, parenting orders, consent orders, family violence concerns and family law matters in Melbourne.",
  path: "/family-lawyers-melbourne/child-custody-lawyer-melbourne",
  keywords: [
    "Child Custody Lawyer Melbourne",
    "Child Custody Lawyers Melbourne",
    "Parenting Arrangement Lawyer Melbourne",
    "Parenting Orders Lawyer Melbourne",
    "Family Lawyer Melbourne",
    "Child Parenting Lawyer Melbourne",
    "Child Access Lawyer Melbourne",
  ],
});

const parentingMatters = [
  "Child custody matters",
  "Parenting arrangements",
  "Parenting orders",
  "Consent orders for children",
  "Child living arrangements",
  "Time spent with each parent",
  "Communication arrangements",
  "Schooling and medical decision concerns",
  "Relocation and travel concerns",
  "Family violence-related parenting issues",
  "Urgent parenting matters",
  "Court-related parenting disputes",
];

const parentingArrangementItems = [
  "Where the child lives",
  "Time with each parent",
  "Weekend and holiday arrangements",
  "School pick-up and drop-off",
  "Phone or video contact",
  "Birthdays and special occasions",
  "Medical and schooling decisions",
  "Travel within Australia or overseas",
];

const safetyConcernsList = [
  "Where the child lives",
  "Supervised time with a parent",
  "Changeover arrangements",
  "Communication between parents",
  "Court orders",
  "Urgent applications",
  "Intervention order conditions",
];

const whyChoosePoints = [
  "Clear advice about parenting options",
  "Support with parenting arrangements and consent orders",
  "Guidance on child-focused legal issues",
  "Assistance with family violence-related parenting concerns",
  "Careful handling of sensitive family matters",
  "Practical advice before negotiation or court steps",
  "Support with urgent parenting concerns where required",
];

const custodyFaqs = [
  {
    question: "Can Bansal Lawyers help with child custody matters?",
    answer:
      "Yes. Bansal Lawyers assists with child custody matters, parenting arrangements, parenting orders, consent orders, and related family law advice.",
  },
  {
    question:
      "What is the difference between parenting arrangements and parenting orders?",
    answer:
      "Parenting arrangements may be informal or agreed between parents. Parenting orders are formal court orders that set out arrangements for children.",
  },
  {
    question: "Can parenting arrangements be formalised?",
    answer:
      "Yes. If both parents agree, parenting arrangements may be formalised through consent orders, depending on the situation.",
  },
  {
    question:
      "Can you help if the other parent is not allowing me to see my child?",
    answer:
      "Yes. We can review your situation and advise on possible legal steps, including negotiation, mediation, consent orders, or court-related options where required.",
  },
  {
    question: "What if there are family violence concerns?",
    answer:
      "If there are family violence or safety concerns, legal advice should be taken early. These issues may affect parenting arrangements, changeovers, supervision, and court orders.",
  },
  {
    question: "Can you help with relocation or travel issues?",
    answer:
      "Yes. We assist with parenting matters involving relocation, travel consent, passport concerns, and long-distance parenting arrangements.",
  },
];

export default function ChildCustodyLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Child Custody Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(custodyFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Child Custody Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Child Custody Lawyer Melbourne"
        intro={
          <>
            <p>
              Child custody and parenting matters can be difficult for parents
              and children. When parents separate, important decisions may need to
              be made about where the children live, how much time they spend
              with each parent, schooling, health care, communication, travel, and
              daily care.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with child custody, parenting
              arrangements, parenting orders, consent orders, and related family
              law matters in Melbourne. We help parents understand their options
              and take practical steps based on the child’s best interests. As
              experienced{" "}
              <Link
                href="/family-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Family Lawyers Melbourne
              </Link>
              , we provide constructive legal representation during separation.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With a Child Custody Lawyer",
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
          "Child-Focused Best Interests Representation",
          "Parenting Plans & Consent Orders Filing",
          "Urgent Recovery Orders & Family Violence Advocacy",
        ]}
      />

      {/* 2. Legal Advice for Parenting Matters [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Parenting Guidance</span>
            <h2>Legal Advice for Parenting Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Parenting matters are sensitive and should be handled carefully.
              Some parents can reach agreement through discussion or mediation.
              Others may need formal consent orders or court-related steps when
              agreement is not possible.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before making decisions, it is important to understand:
            </p>
            <ul className="points-list">
              <li>What parenting arrangements are suitable for the child</li>
              <li>Whether both parents can reach an agreement</li>
              <li>Whether consent orders may be needed</li>
              <li>Whether mediation or family dispute resolution is required</li>
              <li>Whether there are safety or family violence concerns</li>
              <li>What documents or evidence may be relevant</li>
              <li>Whether urgent parenting orders are needed</li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review your situation and explain the available
              options in clear language.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Child Custody and Parenting Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Child Custody and Parenting Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {parentingMatters.map((matter) => (
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
            Each parenting matter should be reviewed based on the child&apos;s
            needs, family situation, safety concerns, and practical arrangements.
          </p>
        </Container>
      </Section>

      {/* 4. Parenting Arrangements After Separation [H2] */}
      <Section tone="white" id="parenting-arrangements">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Frameworks</span>
            <h2>Parenting Arrangements After Separation</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              After separation, parents may need to decide how children will
              spend time with each parent and how major decisions will be made.
              These arrangements should be clear and workable.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Parenting arrangements may cover:
            </p>
            <ul className="points-list">
              {parentingArrangementItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Clear parenting arrangements can help reduce conflict and
              confusion for both parents and children. When finalising separation
              formalities, our{" "}
              <Link
                href="/family-lawyers-melbourne/divorce-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Divorce Lawyer Melbourne
              </Link>{" "}
              can assist with divorce applications, while our{" "}
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Property Settlement Lawyer Melbourne
              </Link>{" "}
              handles the division of family assets.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Parenting Orders and Consent Orders [H2] */}
      <Section tone="warm" id="consent-orders">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Formalising Agreements</span>
            <h2>Parenting Orders and Consent Orders</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              If parents reach agreement, the agreement can sometimes be
              formalised through consent orders. This can provide clearer
              structure and reduce the risk of future disputes.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If parents cannot agree, parenting orders may need to be
              considered through the court process. Our dedicated{" "}
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Consent Orders Lawyer Melbourne
              </Link>{" "}
              prepares legally enforceable documents filed directly with the
              court.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers assists with parenting order advice, consent orders,
              document preparation, negotiation support, and court-related
              parenting matters where required.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Family Violence and Safety Concerns [H2] */}
      <Section tone="white" id="family-violence">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Safety & Protection</span>
            <h2>Family Violence and Safety Concerns</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some parenting matters involve family violence, intervention
              orders, safety concerns, police involvement, or concerns about the
              child&apos;s wellbeing. These matters need careful and prompt legal
              advice.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              For urgent intervention order representation and protective
              conditions, our{" "}
              <Link
                href="/family-lawyers-melbourne/family-violence-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Family Violence Lawyer Melbourne
              </Link>{" "}
              provides immediate counsel.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Safety concerns may affect:
            </p>
            <ul className="points-list">
              {safetyConcernsList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If there are safety concerns, it is important to get advice before
              agreeing to any parenting arrangement.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Relocation and Travel Issues [H2] */}
      <Section tone="warm" id="relocation">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Interstate & International Movement</span>
            <h2>Relocation and Travel Issues</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Parenting disputes may also involve relocation or travel. One
              parent may want to move to another city, state, or country with the
              child. These matters can be complex because they affect the
              child’s routine, schooling, family relationships, and time with
              each parent.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers assists with relocation concerns, travel consent
              issues, passport-related concerns, and parenting arrangements
              involving distance between parents.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Child Custody Matters? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Dedicated Advocates</span>
            <h2>Why Choose Bansal Lawyers for Child Custody Matters?</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Child custody matters need practical advice, careful preparation,
              and a focus on the child&apos;s needs. The right approach depends on
              the facts, the level of agreement between parents, and any safety
              concerns.
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
              We help clients understand the process and make informed decisions
              during a difficult time.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With a Child Custody Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Child Custody Lawyer in Melbourne"
        text="If you are separating, dealing with parenting issues, concerned about your child’s living arrangements, or need help with parenting orders, Bansal Lawyers can help you understand your next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Parenting Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Child-focused parenting arrangements", "Consent orders & mediation guidance", "Melbourne CBD & virtual consultations"]}
      />

      {/* Topic Cluster Quick Links */}
      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practice Network</span>
            <h2 style={{ marginBottom: "1.5rem" }}>
              Related Family Law Services
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
                  Sole and joint divorce applications, marriage dissolution, and
                  post-separation planning.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Property Settlement Lawyer Melbourne</h3>
                <p>
                  Division of matrimonial assets, real estate, superannuation,
                  and liabilities.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Consent Orders Lawyer Melbourne</h3>
                <p>
                  Legally binding court consent orders for parenting and
                  financial agreements without trial.
                </p>
              </Link>
              <Link
                href="/family-lawyers-melbourne/family-violence-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Family Violence Lawyer Melbourne</h3>
                <p>
                  Intervention orders (IVO), safety conditions, and protective
                  parenting representation.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={custodyFaqs} />
            <div
              style={{
                marginTop: "2.5rem",
                textAlign: "center",
                padding: "2rem",
                background: "var(--warm-50)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <p style={{ margin: "0 0 1rem", color: "var(--ink-secondary)", fontSize: "0.98rem" }}>
                Need clear advice about your parenting arrangements or court applications?
              </p>
              <ButtonLink href="/contact/" variant="primary">
                Schedule a Custody Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
