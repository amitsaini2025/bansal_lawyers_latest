import type { Metadata } from "next";
import Link from "next/link";
import { ClientTestimonialsCarousel } from "@/components/sections/ClientTestimonialsCarousel";
import { GoogleReviewSummaryBadge } from "@/components/sections/GoogleReviewSummaryBadge";
import { OfficeMapEmbed } from "@/components/sections/OfficeMapEmbed";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { familyLawyersMelbourneTestimonials } from "@/lib/family-lawyers-melbourne-testimonials";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";
import { businessDetails } from "@/lib/site";
import type { FaqItem } from "@/types/content";

export const metadata: Metadata = createMetadata({
  title: "Indian Divorce Lawyers Melbourne | Hindi & Punjabi Speaking Lawyer",
  description:
    "Looking for Indian divorce lawyers in Melbourne? Bansal Lawyers assists with divorce applications, separation, parenting arrangements and property settlements. Book a consultation.",
  path: "/family-lawyers-melbourne/divorce-lawyer-melbourne",
  keywords: [
    "Indian Divorce Lawyers Melbourne",
    "Divorce Lawyer Melbourne",
    "Hindi Speaking Divorce Lawyer Melbourne",
    "Divorce After Indian Marriage Australia",
    "Divorce Lawyers Melbourne",
    "Separation Lawyer Melbourne",
    "Family Lawyer Melbourne",
  ],
});

const proseLead = {
  fontSize: "1.12rem",
  lineHeight: "1.75",
  color: "var(--ink)",
  marginTop: "1rem",
} as const;

const proseBody = {
  fontSize: "1.05rem",
  lineHeight: "1.75",
  color: "var(--ink-secondary)",
  marginTop: "0.75rem",
} as const;

const contentWidth = { maxWidth: "52rem", margin: "0 auto" } as const;

const divorceFaqs: FaqItem[] = [
  {
    question: "Can Bansal Lawyers help with divorce applications?",
    answer:
      "Yes. Bansal Lawyers assists with divorce applications, document review, separation advice, and related family law matters.",
  },
  {
    question: "Does divorce automatically divide property?",
    answer:
      "No. Divorce and property settlement are separate legal issues. Property settlement should be addressed separately after separation.",
  },
  {
    question: "Can I apply for divorce if we are still living in the same house?",
    answer:
      "In some situations, separation under the same roof may be relevant. The facts and documents should be reviewed before applying.",
  },
  {
    question: "Do parenting arrangements get decided during divorce?",
    answer:
      "Divorce does not automatically decide parenting arrangements. Parenting matters may need to be handled separately through agreement, consent orders, or court-related steps.",
  },
  {
    question: "Should I get legal advice before applying for divorce?",
    answer:
      "Yes. Legal advice can help you understand the process, documents, children's arrangements, property issues, and any time limits that may apply.",
  },
  {
    question: "Can you help if there are family violence concerns?",
    answer:
      "Yes. Bansal Lawyers assists with family violence-related family law concerns, intervention orders, parenting issues, and related legal advice.",
  },
  {
    question: "Can I get divorced in Australia if I married in India?",
    answer:
      "Yes, generally you can, if the marriage is recognised in Australia. You or your spouse must also be an Australian citizen, regard Australia as home and intend to stay, or have ordinarily lived here for the 12 months before applying. You must also have been separated for at least 12 months. You will need to file your marriage certificate. A short consultation can help confirm whether you meet the requirements.",
  },
  {
    question: "Can Indian citizens living in Melbourne hire an Indian lawyer in Australia?",
    answer:
      "Yes. Your citizenship does not stop you from hiring a lawyer in Victoria. At Bansal Lawyers, you can ask for advice in English, Hindi or Punjabi. The firm advises on Australian law only, so if part of your matter sits in India, such as a case already filed there, you may also need a lawyer in India.",
  },
  {
    question: "Can I get divorced in Melbourne if my spouse lives in India?",
    answer:
      "Yes, generally. What matters is whether you or your spouse meets the Australian citizenship or residency test, not where your spouse lives. In a sole application, a spouse overseas generally must be served at least 42 days before the hearing. The method of service depends on the rules for the country involved.",
  },
  {
    question: "How is property in India considered during an Australian divorce?",
    answer:
      "Generally, it can be taken into account as part of the overall property pool, along with your Australian assets. The difficulty is enforcement, because an Australian order does not automatically change ownership records in India. Whether and how an order can be enforced there depends on Indian law, so you may need local advice as well. We can explain the Australian side and what documents to gather.",
  },
  {
    question: "Can I consult an Indian divorce lawyer if I live outside Melbourne?",
    answer:
      "Yes. We offer consultations by phone and video, so you do not need to be in Melbourne to get advice. If your matter is in the Federal Circuit and Family Court, many steps, including divorce hearings, are done by phone. Family or relatives overseas can often join the call too. If you would like an in-person meeting, our Collins Street office is available.",
  },
  {
    question: "Can I receive legal advice in Hindi or Punjabi?",
    answer:
      "Yes. Our Director and Principal Lawyer, Ajay Bansal, advises in English, Hindi and Punjabi. Court documents are in English, so we explain them in your preferred language so you understand what you are signing. Tell us your language preference when you book, and we will plan the consultation around it. We can also go through terms like affidavit or service in plain words.",
  },
  {
    question: "What documents should I bring to my first legal consultation?",
    answer:
      "Bring your marriage certificate, photo ID, details of when you separated, and information about any children. It also helps to have recent bank, loan and superannuation statements, details of property in Australia or India, and any court papers or intervention orders you have received. If you do not have all these documents, you can still attend the consultation.",
  },
  {
    question: "How do I arrange a consultation with Bansal Lawyers?",
    answer: (
      <>
        You can arrange a consultation by calling 1300 226 725 or using the{" "}
        <Link href="/contact/">Bansal Lawyers contact page</Link>. The stated office hours are Monday to
        Friday, 9:30am to 6:00pm.
      </>
    ),
    answerText:
      "You can arrange a consultation by calling 1300 226 725 or using the Bansal Lawyers contact page. The stated office hours are Monday to Friday, 9:30am to 6:00pm.",
  },
  {
    question: "Do I need a lawyer to get a divorce in Australia?",
    answer:
      "No, you do not have to. Many people complete a simple divorce application on their own, and Legal Aid agencies publish guides for this. A lawyer is more useful when something is complicated, such as a spouse overseas, a separation under one roof, children under 18 or a property dispute. Because a divorce does not settle property or parenting, advice on those issues is worth getting even if the application is simple.",
  },
  {
    question: "How much does it cost to apply for a divorce?",
    answer: (
      <>
        The court filing fee is $1,170, or $390 if you hold an eligible concession card or have financial hardship,
        from 1 July 2026. For a joint application, both of you must be eligible for the reduced fee. The court reviews
        fees each year, so check the current{" "}
        <Link href="/blog/understanding-family-law-court-fees-australia/">fee guidelines</Link> before you file. This is
        the court&apos;s fee only, and it does not include legal fees.
      </>
    ),
    answerText:
      "The court filing fee is $1,170, or $390 if you hold an eligible concession card or have financial hardship, from 1 July 2026. For a joint application, both of you must be eligible for the reduced fee. The court reviews fees each year, so check the current fee guidelines before you file. This is the court's fee only, and it does not include legal fees.",
  },
];

export default function DivorceLawyerMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Family Lawyers Melbourne",
      href: "/family-lawyers-melbourne",
    },
    { label: "Indian Divorce Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createFaqSchema(
          divorceFaqs,
          "/family-lawyers-melbourne/divorce-lawyer-melbourne",
        )}
      />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Indian Divorce Lawyers in Melbourne"
        intro={
          <>
            <p>
              Ending a marriage is hard at any time. It can feel heavier when family expectations, community pressure
              and two countries are part of the picture. Bansal Lawyers is a Melbourne firm that helps people with
              divorce applications, separation advice, parenting arrangements, property settlement and consent orders.
              If you are looking for Indian Divorce Lawyers in Melbourne, you can speak with us in English, Hindi or
              Punjabi, and we will explain each step in plain language.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              We advise on Australian law only. If part of your situation sits in India, we will tell you what we can
              do from Melbourne and where you may also need a lawyer there. Whether you married in India or Australia,
              and whether you and your spouse agree or not, a first conversation helps you see where you stand.{" "}
              <Link href="/contact/">Book a consultation</Link> or call{" "}
              <a href={businessDetails.nationalLineTel}>1300 226 725</a>.
            </p>
          </>
        }
        primaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
        secondaryAction={{
          label: "Call 1300 226 725",
          href: businessDetails.nationalLineTel,
        }}
        aside={
          <HeroBookingPlaceholder defaultPracticeArea="family" turnstileSiteKey={turnstileSiteKey} />
        }
      />

      <TrustBar
        items={[
          "Level 8, 278 Collins Street Melbourne & Remote Consultations",
          "Sole & Joint Divorce Applications in the FCFCOA",
          "Separation Under One Roof Evidence & Affidavits",
          "English, Hindi & Punjabi Legal Assistance",
        ]}
      />

      <Section tone="white" id="experienced-divorce-lawyers">
        <Container>
          <div style={contentWidth}>
            <h2>Experienced Indian Divorce Lawyers in Melbourne</h2>
            <p style={proseLead}>
              A divorce is a court order that legally ends a marriage. It does not divide property or decide where
              children live, and it does not settle child support. Those are separate family law issues. You can start
              working on them while you are separated, and you do not have to wait until the divorce is final.
            </p>
            <p style={proseBody}>
              In Australia, divorce is handled through the Federal Circuit and Family Court of Australia (FCFCOA). You
              must have been separated for at least 12 months before you apply, and you or your spouse must meet the
              Australian connection test. If you married in India, you can still apply here when the marriage is
              recognised in Australia. We help you understand the requirements, prepare documents and plan what comes
              after the divorce order.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="how-we-help">
        <Container>
          <SectionHeader title="How Our Divorce Lawyers Can Help" />
          <div className="service-detail-grid">
            <article className="service-text-block">
              <h3>Divorce Applications and Legal Representation</h3>
              <p>
                We prepare sole and joint divorce applications, check your separation date and eligibility, and explain
                what the court needs from you. If your spouse is overseas, we explain service rules and timelines. If
                you have children under 18, we help you describe parenting arrangements in the application so the court
                can be satisfied they are being properly considered.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Separation Advice and Legal Rights</h3>
              <p>
                If you have searched for Indian Separation Lawyers Melbourne, you are probably asking what happens now.
                Separation is usually the first step. You can sort out parenting and property as soon as you separate,
                and you do not need to wait for a divorce. The date you separated matters, because it affects when you
                can apply for divorce. We help you work out that date, protect your position, and avoid decisions you
                may regret.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Property and Financial Settlements</h3>
              <p>
                Divorce does not divide your assets. A property settlement looks at what you own and owe, including the
                home, savings, super, businesses and debts. Under the Family Law Act, a court must be satisfied that any
                property order is just and equitable, and since 10 June 2025 this process is set out more clearly in the
                Act, according to the Attorney-General&apos;s Department. If you want to see how this applies to your own
                situation, a good first step is a{" "}
                <Link href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/">
                  property settlement review
                </Link>{" "}
                of what you own and owe, followed by a clear explanation of your options.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Child Custody and Parenting Arrangements</h3>
              <p>
                Most people say child custody, but Australian law talks about parenting arrangements: where children
                live, how time is shared, and who makes big decisions. Every decision is guided by what is best for the
                child. If you are working out arrangements and need help with{" "}
                <Link href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/">
                  child custody and parenting matters
                </Link>
                , we can cover everything from reaching an agreement and putting a parenting plan in writing to taking
                the next legal step.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Consent Orders and Financial Agreements</h3>
              <p>
                If you and your spouse agree on property or parenting, the agreement should be formalised. Consent orders
                are orders made by the court on agreed terms. A financial agreement is a private contract, and each
                person must receive independent legal advice from an Australian lawyer for it to be binding, as the
                Federal Circuit and Family Court explains. We can advise which option may suit you and prepare the
                paperwork.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Spousal Maintenance</h3>
              <p>
                Spousal maintenance is financial support from one former spouse to the other. It is not automatic.
                Generally, the person asking must show they cannot adequately support themselves, and the other person
                must be able to pay. The test comes from section 72 of the Family Law Act. Time limits apply, so it is
                worth getting advice early. We can assess whether a claim, or a claim against you, is realistic.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Family Violence and Intervention Orders</h3>
              <p>
                If you are in immediate danger, call 000. In Victoria, a family violence intervention order is a court
                order that restricts a person&apos;s behaviour towards you, and you can apply through the
                Magistrates&apos; Court of Victoria. Police can also apply for you. Whether you need to apply for an
                order or have been served with one,{" "}
                <Link href="/family-lawyers-melbourne/family-violence-lawyer-melbourne/">family violence advice</Link> is
                available, including when parenting or property issues are running at the same time.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="indian-community">
        <Container>
          <SectionHeader
            title="Family Law Matters for the Indian Community in Melbourne"
            intro={
              <>
                Many of our clients married in India, own property there, or have family in both countries. Some
                questions are answered by Australian law, and others by Indian law. As Family Lawyers for Indians in
                Melbourne, we explain what the Australian system can do and what it cannot, so you can plan your next
                move with clear eyes.
              </>
            }
          />
          <div className="service-detail-grid">
            <article className="service-text-block">
              <h3>Divorce in Australia After an Indian Marriage</h3>
              <p>
                If you are searching for an Indian Marriage Divorce Lawyer Melbourne, the short answer is that a marriage
                in India can generally be ended in an Australian court. The marriage must be recognised in Australia
                under Part VA of the Marriage Act 1961, and you or your spouse must meet the residency or citizenship
                test. You do not need to register an overseas marriage first. You will need to file your marriage
                certificate, with a certified English translation if it is not in English.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Property Settlement Involving Assets in India</h3>
              <p>
                Property in India, such as a flat, land or a family business interest, can be taken into account in an
                Australian property settlement. The catch is enforcement. An Australian order binds you and your spouse,
                but it does not automatically change title records in India, and local steps may be needed. How that
                works depends on Indian law, so you may need a lawyer in India as well. We will say so early, and we
                will keep our advice to Australian law.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Divorce When Your Spouse Lives in India</h3>
              <p>
                Your spouse living in India does not stop you from applying in Australia, as long as you meet the
                Australian connection test. The main practical issue is service, which means getting the court papers to
                your spouse. In a sole application, papers for a spouse overseas must be served at least 42 days before
                the hearing, and the method depends on whether the country is a party to the Hague Service Convention.
                If service is not possible, you can ask the court for other options.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Family Disputes Involving India and Australia</h3>
              <p>
                Cross-border disputes can be stressful. Parenting disagreements, a case already started in India, or
                worries about a child travelling overseas all need careful handling. If you are looking for Indian
                Lawyers for Family Disputes Melbourne, we can advise on the Australian side, including mediation,
                parenting orders and consent orders. Tell us early if any court case has started in India, because that
                can change what you should do next.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="divorce-process">
        <Container>
          <div style={contentWidth}>
            <h2>Understanding the Divorce Process in Australia</h2>
            <p style={proseLead}>
              Divorce in Australia is &ldquo;no fault&rdquo;. The court does not ask who caused the breakdown. It looks at
              whether you meet the requirements and whether the paperwork is in order. Here is how the process works,
              step by step.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Eligibility to Apply for Divorce</h3>
            <p style={proseBody}>
              You can apply if you were validly married, have been separated for at least 12 months, and either you or
              your spouse is an Australian citizen, regards Australia as home and intends to stay, or has ordinarily lived
              here for the 12 months before filing, according to the Federal Circuit and Family Court. Since 10 June
              2025, couples married for less than two years no longer need a counselling certificate, as the court has
              confirmed.
            </p>

            <h3 style={{ marginTop: "2rem" }}>The 12-Month Separation Requirement</h3>
            <p style={proseBody}>
              Separation means one or both of you decided the marriage is over and acted on it. You need to have lived
              separately and apart for at least 12 months, with no reasonable likelihood of getting back together.
              Generally, a short reconciliation of under three months does not restart the clock, but that depends on
              your facts. If you applied before 12 months had passed, the court can adjourn or dismiss your application.
              Counting the dates correctly is one of the most common reasons to get advice first.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Documents Required for a Divorce Application</h3>
            <p style={proseBody}>
              The court&apos;s practice direction sets out what is needed. Typically, you will need:
            </p>
            <ol className="points-list" style={{ marginTop: "0.75rem" }}>
              <li>
                Your marriage certificate (with an English translation and the translator&apos;s affidavit if needed).
              </li>
              <li>The Affidavit for eFiling Application (Divorce).</li>
              <li>Proof of your Australian connection, such as citizenship or visa documents.</li>
              <li>Extra affidavits if you separated under one roof.</li>
              <li>Details of arrangements for any children under 18.</li>
            </ol>
            <p style={proseBody}>
              The court fee is $1,170, or $390 if you qualify for the reduced fee, from 1 July 2026 under the{" "}
              <Link href="/blog/understanding-family-law-court-fees-australia/">court&apos;s guidelines</Link>. These
              fees are reviewed every year.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Sole and Joint Divorce Applications</h3>
            <p style={proseBody}>
              A joint application is made by both of you, and you do not need to serve papers. A sole application is made
              by one of you, and the other spouse must be served. Both can end in the same divorce order. The right
              choice depends on how well you and your spouse are communicating.
            </p>
            <div style={{ overflowX: "auto", marginTop: "1.25rem" }}>
              <table className="prose" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th />
                    <th scope="col">Joint application</th>
                    <th scope="col">Sole application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Who applies</th>
                    <td>Both spouses</td>
                    <td>One spouse</td>
                  </tr>
                  <tr>
                    <th scope="row">Serving the other spouse</th>
                    <td>Not required</td>
                    <td>Required</td>
                  </tr>
                  <tr>
                    <th scope="row">Reduced fee</th>
                    <td>Both must qualify</td>
                    <td>Applicant must qualify</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: "2rem" }}>What Happens After Filing a Divorce Application?</h3>
            <p style={proseBody}>
              Once you file through the Commonwealth Courts Portal, the court lists a hearing date. In a sole
              application, you must serve your spouse at least 28 days before the hearing if they are in Australia, or 42
              days if they are overseas, and then file proof of service. Your spouse can respond to the application.
              Opposing a divorce is possible only in limited situations, such as disputing the separation period or the
              court&apos;s power to hear the case. Our family team can handle this process for you.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Divorce Hearing and Finalisation</h3>
            <p style={proseBody}>
              Divorce hearings are held by phone. According to the court, you generally only need to attend if you asked
              to, if your spouse asked to attend where there are children under 18, or if your spouse opposes the
              application. If the court is satisfied, it grants the divorce order, which takes effect one month and one
              day later. You cannot remarry before then. Where there are children under 18, the court must be satisfied
              that proper arrangements have been made for them.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="property-settlement">
        <Container>
          <div style={contentWidth}>
            <h2>Property Settlement After Separation</h2>
            <p style={proseLead}>
              Dividing property is often the part people worry about most, especially when money, family expectations and
              assets in more than one country are involved. A property settlement is a separate process from divorce. It
              can be done by agreement or, if needed, by a court.
            </p>

            <h3 style={{ marginTop: "2rem" }}>How Are Assets and Liabilities Considered?</h3>
            <p style={proseBody}>
              The starting point is a full list of what you own and owe, including the family home, bank accounts, cars,
              investments, business interests and debts. Both financial and non-financial contributions count, such as
              looking after the home and children. The court also looks at each person&apos;s future needs. Since 10 June
              2025, the Act also covers the effect of family violence on contributions and sets out the duty of full
              financial disclosure, as explained by the Attorney-General&apos;s Department.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Dividing Property, Savings and Superannuation</h3>
            <p style={proseBody}>
              Superannuation is treated as property in a family law settlement, even though you cannot usually access it
              as cash. It can be split by agreement or by court order, with the super fund involved in the process, as
              the Attorney-General&apos;s Department explains. The Australian Taxation Office also has information on how
              splits are handled. Ask for statements for every fund, including older ones.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Financial Agreements and Consent Orders</h3>
            <p style={proseBody}>
              Once you agree on a split, you can formalise it in two ways. Consent orders are made by the court, which
              must be satisfied the terms are just and equitable. A financial agreement is a private contract, and each
              person needs independent legal advice from a lawyer for it to be binding. Which route suits you depends on
              how settled your terms are and how much certainty you need, and our{" "}
              <Link href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/">consent orders service</Link> can
              help you weigh that up and prepare the documents.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Property Settlement Time Limits</h3>
            <p style={proseBody}>
              If you were married, you generally have 12 months from the day your divorce order takes effect to apply to
              the court for property orders. For de facto couples, the time limit is generally two years from separation.
              After that, you need the court&apos;s permission, which is not always given, as the Federal Circuit and
              Family Court points out. Spousal maintenance has a similar 12-month limit. If you are close to a deadline,
              speak to a lawyer quickly.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="parenting">
        <Container>
          <div style={contentWidth}>
            <h2>Child Custody and Parenting Arrangements After Separation</h2>
            <p style={proseLead}>
              When children are involved, the legal steps matter, but so does how you communicate with each other from
              now on. Most parents who separate sort out arrangements without going to court. Here is how the options
              work, from the most flexible to the most formal.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Parenting Plans and Parenting Agreements</h3>
            <p style={proseBody}>
              Most parents would rather sort out the children&apos;s routine between themselves than go to court, and a
              parenting plan is how that usually happens. Where the children live, school, holidays and who decides what
              can all be written down once, so the same questions do not keep coming back. The thing to know is that a
              plan is not a court order, so a court cannot enforce it on its own. If you want that protection, it can be
              turned into consent orders, as Victoria Legal Aid explains. A lawyer can help you get the wording right
              early, so the plan still works when school terms and work shifts change.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Parenting Orders</h3>
            <p style={proseBody}>
              Sometimes talking does not get you there, and a parenting order becomes the way forward. It is a court
              order covering who the children live with, the time they spend with each parent and who makes the major
              decisions. The court decides based on what is best for the children. Since 6 May 2024, the law no longer
              presumes that parents will share equal responsibility for major decisions, and the list of things the court
              considers has been simplified, according to the Attorney-General&apos;s Department. Having someone
              alongside you who knows how these changes apply to your family makes the process less daunting, from
              preparing your documents to the hearing itself.
            </p>

            <h3 style={{ marginTop: "2rem" }}>Child Support and Financial Responsibilities</h3>
            <p style={proseBody}>
              After separation, many parents want to know one thing: what happens with the money for the children? Child
              support is administered by Services Australia, which uses a formula based on both parents&apos; incomes and
              how much care each parent provides, as set out on the Services Australia website. Parents can also make a
              private arrangement instead. It is separate from spousal maintenance, and in some cases both can be
              payable. If an assessment looks wrong, or you are weighing up a private agreement, talking it through with
              a lawyer first can save you from locking in something you later regret.
            </p>

            <h3 style={{ marginTop: "2rem" }}>What Happens When Parents Cannot Agree?</h3>
            <p style={proseBody}>
              Before going to court for parenting orders, most parents must try family dispute resolution unless an
              exemption applies, such as family violence or urgency. The Federal Circuit and Family Court expects genuine
              attempts to resolve disputes when it is safe to do so. If mediation does not work, you may need to apply
              for orders. Our{" "}
              <Link href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/">parenting order advice</Link> can
              explain the steps, deadlines and documents.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="same-roof">
        <Container>
          <div style={contentWidth}>
            <h2>Can You Get Divorced While Living Under the Same Roof?</h2>
            <p style={proseLead}>
              Yes. You can be separated and still live in the same home, and many couples do, often because of money,
              children or housing costs in Melbourne. The court looks at whether your relationship has really ended, not
              at your address. The Federal Circuit and Family Court has a fact sheet on this, and you will usually need
              to give the court extra information in an affidavit (a sworn written statement).
            </p>
            <p style={{ ...proseBody, color: "var(--navy-950)", fontWeight: 600 }}>
              What the court may find relevant:
            </p>
            <ul className="points-list">
              <li>When and how you told your spouse that the marriage was over.</li>
              <li>
                Whether you sleep in separate rooms and whether you share meals, chores or social activities.
              </li>
              <li>
                How you manage money, such as separate bank accounts or changes to bills and tax or Centrelink details.
              </li>
              <li>How day-to-day care of the children is arranged.</li>
              <li>Why you are still in the same home, for example because you cannot afford to move out.</li>
            </ul>
            <p style={proseBody}>
              In a sole application, you will often need another person who knows you both to give a supporting
              affidavit. In a joint application, the requirements are different. It helps to keep records, such as
              messages and bank statements, from the start. We can tell you what applies to your situation.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="why-choose">
        <Container>
          <div style={contentWidth}>
            <h2>Why Choose Bansal Lawyers for Divorce Matters in Melbourne?</h2>
            <p style={proseLead}>
              Choosing a lawyer is personal. You want someone who listens, explains things clearly and is honest about
              what is and is not possible. This is what you can expect from us.
            </p>
          </div>
          <div className="service-detail-grid" style={{ marginTop: "2rem" }}>
            <article className="service-text-block">
              <h3>Understanding Your Individual Divorce and Separation Circumstances</h3>
              <p>
                We begin by asking questions. When did you separate? Where do you and your spouse live? Are there
                children? What do you own in Australia and overseas, and what outcome do you want? Many of the people we
                help have ties to India, and you can read more about how we approach those matters in our work with{" "}
                <Link href="/indian-lawyers-melbourne/">Indian clients in Melbourne</Link>. Your answers shape the advice
                we give.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Guidance Through the Australian Divorce Process</h3>
              <p>
                The divorce process has set steps, deadlines and forms. We walk you through each one in plain English,
                from checking you are eligible to filing, serving papers and the hearing. We also flag time limits early,
                particularly the 12-month limits for property and maintenance claims after a divorce, so you are not
                caught out by a date you did not know about.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Assistance With Complex Family Law Matters</h3>
              <p>
                Some matters are not simple: a spouse overseas, property in India, parenting disputes or family violence.
                We act in family law matters of this kind. Our Director and Principal Lawyer,{" "}
                <Link href="/about/ajay-bansal">Ajay Bansal</Link>, advises in English, Hindi and Punjabi, and he has more
                than seven years of experience and appearances in Victorian and Federal courts.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Personalised Legal Strategies for Your Circumstances</h3>
              <p>
                No two separations are the same, so we do not use a one-size-fits-all plan. We explain your options, the
                risks and likely next steps, and you decide how to proceed. We cannot promise an outcome, a timeframe, or
                a fee until we have looked at your matter. What we can promise is an honest assessment, so you can make
                informed decisions at your own pace.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Convenient Consultations and Accessible Legal Support</h3>
              <p>
                You can meet us at Level 8, 278 Collins Street, Melbourne VIC 3000, or speak with us by phone or video,
                so you can get advice wherever you are in Australia. Our office is open Monday to Friday, 9:30 am to 6:00
                pm. If it helps to have a family member join the call, including from India, let us know when you book.
                Tell us if you would like the consultation in Hindi or Punjabi.
              </p>
            </article>
            <article className="service-text-block">
              <h3>Transparent Information About Legal Fees and Costs</h3>
              <p>
                Money is a big worry in separation, and we do not want it to be a surprise. When you book, we confirm the
                consultation fee before any work starts. After that, costs depend on what your matter involves, such as
                whether you agree with your spouse, whether there are children and whether a court is needed. If you want
                to know how fees work for your situation, ask us at the start.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <section className="client-testimonials-section client-testimonials-section--corner-badge" id="client-reviews">
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={familyLawyersMelbourneTestimonials} />
          <GoogleReviewSummaryBadge />
          <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/family-lawyers-melbourne/">Indian family lawyers in Melbourne</Link>
          </p>
        </Container>
      </section>

      <Section tone="white" id="office">
        <Container>
          <div className="location-grid">
            <div>
              <h2>Our Melbourne Office</h2>
              <p style={{ ...proseLead, marginTop: "1rem" }}>
                The office is at Level 8, 278 Collins Street, Melbourne VIC 3000, between Swanston and Elizabeth Streets.
                Trams on Collins Street stop nearby.
              </p>
              <p style={proseBody}>Book a consultation to talk through a divorce or family law matter.</p>
              <address style={{ fontStyle: "normal", margin: "1.5rem 0", color: "var(--navy-950)", fontWeight: 600 }}>
                {businessDetails.address}
              </address>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <ButtonLink href="/contact" variant="primary">
                  Book a Consultation
                </ButtonLink>
                <ButtonLink
                  href="https://www.google.com/maps/search/?api=1&query=Level+8,+278+Collins+Street+Melbourne+VIC+3000"
                  variant="secondary"
                >
                  Get Directions
                </ButtonLink>
              </div>
            </div>
            <OfficeMapEmbed />
          </div>
        </Container>
      </Section>

      <CtaSection
        id="speak-with-us"
        title="Speak With Our Indian Divorce Lawyers in Melbourne"
        text={
          <>
            <p>
              If you are ready to talk, our <strong>Indian Divorce Lawyers in Melbourne</strong> are here to listen,
              answer your questions and explain your options. A{" "}
              <strong>Divorce Lawyer for Indian Couples Melbourne</strong> can help whether you and your spouse still talk
              or you are only communicating through family. Nothing is expected of you except honesty about your
              situation.
            </p>
            <p style={{ marginTop: "1rem" }}>
              When you book, we confirm the consultation fee before any work starts, and later costs depend on the
              matter.
            </p>
            <p className="cta-section__contact" style={{ marginTop: "1.25rem" }}>
              <strong>Phone:</strong>{" "}
              <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLine}</a>
              <br />
              <strong>Mobile:</strong> <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>
              <br />
              <strong>Address:</strong> {businessDetails.address}
              <br />
              <strong>Hours:</strong> Monday to Friday, 9:30am to 6:00pm
              <br />
              <strong>Online:</strong> <Link href="/contact/">contact us here</Link>
            </p>
          </>
        }
        action={{ label: "Book a Consultation", href: "/contact/" }}
        secondaryAction={{
          label: "Speak With Our Divorce Team",
          href: businessDetails.phoneTel,
        }}
        phone={businessDetails.nationalLine}
        phoneLabel="Direct Family Solicitor"
        badges={[
          "Strictly confidential family legal advice",
          "Prompt response to urgent matters",
          "Melbourne CBD & virtual consultations",
        ]}
      />

      <Section tone="warm" id="faqs">
        <Faq
          items={divorceFaqs}
          title="Frequently Asked Questions About Indian Divorce Lawyers in Melbourne"
          subtitle="Quick answers to common questions before you book."
          contactTitle="Need confidential advice about your divorce or separation?"
          contactButtonLabel="Book a Confidential Consultation"
          contactHref="/contact"
        />
      </Section>
    </>
  );
}