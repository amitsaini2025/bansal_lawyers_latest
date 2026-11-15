import type { Metadata } from "next";
import Image from "next/image";
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
  ProcessSteps,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { familyLawyersMelbourneTestimonials } from "@/lib/family-lawyers-melbourne-testimonials";
import { createMetadata } from "@/lib/metadata";
import {
  createFamilyLawyersMelbournePageGraphSchema,
  FAMILY_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  FAMILY_LAWYERS_MELBOURNE_PAGE_TITLE,
} from "@/lib/schema";
import { businessDetails } from "@/lib/site";
import type { FaqItem, ProcessItem } from "@/types/content";

export const metadata: Metadata = createMetadata({
  title: FAMILY_LAWYERS_MELBOURNE_PAGE_TITLE,
  description: FAMILY_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  path: "/family-lawyers-melbourne",
  keywords: [
    "Indian Family Lawyers Melbourne",
    "Family Lawyers Melbourne",
    "Hindi Speaking Family Lawyer Melbourne",
    "Divorce After Indian Marriage Australia",
    "Child Custody Lawyers Melbourne",
    "Property Settlement Lawyers Melbourne",
    "Family Violence Lawyers Melbourne",
    "Consent Orders Melbourne",
  ],
});

const lawyers = [
  {
    name: "Ajay Bansal",
    role: "Director & Principal Lawyer",
    email: businessDetails.email,
    phoneHref: businessDetails.phoneTel,
    profileHref: "/about/ajay-bansal",
    image: "/images/team/ajay-bansal-director.webp",
    alt: "Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne",
  },
  {
    name: "Michael Saleh",
    role: "Solicitor",
    email: businessDetails.email,
    phoneHref: businessDetails.phoneTel,
    profileHref: "/about/michael-saleh",
    image: "/images/team/michael-saleh-solicitor.png",
    alt: "Michael Saleh - Solicitor at Bansal Lawyers Melbourne",
  },
];

const familyProcessSteps: ProcessItem[] = [
  {
    title: "Step 1: Initial Consultation",
    description:
      "This is where you tell us what's happening. You don't need to have it all worked out. We listen first, then explain the basics of where you stand and what might come next. You can book an appointment for a Family Law Consultation Melbourne clients can attend in person, by phone or on video. If you'd like Hindi or Punjabi, tell us when you book and we'll confirm availability. If you already have a court date, mention that too.",
  },
  {
    title: "Step 2: Understanding Your Circumstances",
    description:
      "Next, we get the full picture. We ask about key dates, your children, your assets and debts, and your safety. We also ask what you want to achieve, because your goals shape the advice. Some of these questions can feel personal, especially when family and money are tangled together. You can answer in English, Hindi or Punjabi, and there's no rush. If something isn't clear yet, say so and we'll work it out together.",
  },
  {
    title: "Step 3: Reviewing Documents and Financial Information",
    description:
      "Then we look at the paperwork. This can include your marriage certificate, bank statements, super, loans and property papers, including anything overseas. If a document isn't in English, tell us, because a translation may be needed. Don't worry if something is missing. We'll tell you what's needed now and what can wait. Having everything in one place makes the advice clearer and the next steps easier to plan.",
  },
  {
    title: "Step 4: Explaining Your Options",
    description:
      "Once we know your situation, you get Family Law Legal Advice Melbourne in plain English. We explain what's possible, the risks and the likely next steps. We'll also be upfront about what we can't promise, because every case turns on its own facts. If part of your matter involves India, we'll say so and tell you where you may need Indian advice too. Then you decide how to move forward, at your own pace.",
  },
  {
    title: "Step 5: Negotiation or Family Dispute Resolution",
    description:
      "Many matters are settled through negotiation, so that's often where we begin. We talk with the other side, or their lawyer, to try to reach an agreement that works for both of you. For parenting disputes, you'll generally need to try Family Dispute Resolution Melbourne services before going to court. There are exceptions, such as family violence. If you have safety concerns, tell us at the start so we can explain your options.",
  },
  {
    title: "Step 6: Agreements or Court Applications, Where Necessary",
    description:
      "If you reach an agreement, we can put it in writing in a way that holds up. That might be consent orders, which the court approves, or a financial agreement, which is a private contract. If you can't agree and court is the right step, we prepare the application and guide you through what follows. Not everyone needs this step, and many people never go to court.",
  },
];

const familyFaqs: FaqItem[] = [
  {
    question: "Do I need a lawyer to get a divorce?",
    answer:
      "No, you can apply yourself. But if there are children, property or complicated finances involved, a lawyer can save you from costly mistakes. We help with divorce applications, separation advice and the issues that come with them.",
  },
  {
    question: "Can a lawyer help with child custody and parenting arrangements?",
    answer:
      "Yes. We help with parenting arrangements, negotiations and consent orders. Most parents have to try mediation before applying to court, and we can guide you through that too.",
  },
  {
    question: "How long do I have to settle property after separation?",
    answer:
      "If you were married, generally 12 months from the date your divorce takes effect. If you were in a de facto relationship, two years from the end of the relationship. We help with property settlements involving assets, debts, super, business interests and other financial arrangements.",
  },
  {
    question: "Can you help with family violence and intervention orders?",
    answer:
      "Yes. We assist with family violence matters, intervention orders and the family law issues that go with them. If you're in immediate danger, call 000.",
  },
  {
    question: "When should I contact a family lawyer?",
    answer:
      "As early as you can. Maybe you're separating, or dealing with parenting issues, or you've been served with legal documents, or you're worried about property or safety. Any of those is a good time.",
  },
  {
    question: "How long does a divorce take in Melbourne?",
    answer:
      "You need to be separated for 12 months before you can apply. After you file, timing depends on how busy the court is. If you have no children under 18, you often don't have to attend the hearing. Once the divorce order is made, it takes effect one month and one day later, and that's when the divorce becomes final.",
  },
  {
    question: "Do I have to go to court to sort out parenting arrangements?",
    answer:
      "Not always. Many parents reach agreement through negotiation or mediation and then make it official with consent orders. Court is usually the next step when agreement isn't possible, or when safety is a concern.",
  },
  {
    question: "How is property divided after separation?",
    answer:
      "There's no fixed formula. The court looks at what each person has contributed, financially and otherwise, and what each of you will need going forward. Then it decides on an outcome that's just and equitable.",
  },
  {
    question: "Is there a time limit for property settlement?",
    answer:
      "Yes. For married couples, generally 12 months from when the divorce takes effect. For de facto couples, two years from the end of the relationship. After that, you need the court's permission to apply, and it isn't guaranteed.",
  },
  {
    question: "Can I get an intervention order without going to court?",
    answer:
      "Not quite. Only a court can make an intervention order. But you don't always have to wait for a hearing to be protected. In some situations, police can issue a family violence safety notice on the spot. That gives you temporary protection until a court decides whether to make an intervention order.",
  },
  {
    question: "Can I get divorced in Australia if I got married in India?",
    answer:
      "Often, yes. You can apply here if your marriage is recognised in Australia and either you or your spouse is an Australian citizen, regards Australia as home and intends to live here indefinitely, or has ordinarily lived here for 12 months before filing. You also need to have been separated for 12 months. You must file your marriage certificate, with an English translation if it's not in English. If you can't find the certificate, the court asks for an affidavit explaining why. If you're not sure your marriage is recognised, talk to us before you file.",
  },
  {
    question: "Can I speak with a Hindi or Punjabi-speaking family lawyer in Melbourne?",
    answer: (
      <>
        Yes. Ajay Bansal speaks English, Hindi and Punjabi and works on family law matters. If you want a Hindi
        Speaking Family Lawyer Melbourne, tell us your preferred language when you{" "}
        <Link href="/contact">get in touch</Link> and we&apos;ll confirm availability. Court documents and legal
        paperwork are still in English, so Ajay will go through them with you in the language you&apos;re most
        comfortable with.
      </>
    ),
    answerText:
      "Yes. Ajay Bansal speaks English, Hindi and Punjabi and works on family law matters. If you want a Hindi Speaking Family Lawyer Melbourne, tell us your preferred language when you get in touch and we'll confirm availability. Court documents and legal paperwork are still in English, so Ajay will go through them with you in the language you're most comfortable with.",
  },
  {
    question: "How can I arrange a consultation with an Indian family lawyer in Melbourne?",
    answer: (
      <>
        Call 1300 226 725 or 0422 905 860, email info@bansallawyers.com.au or{" "}
        <Link href="/book-an-appointment">book online</Link>. You can meet us at Level 8, 278 Collins Street, or
        talk by phone or video. Tell us if you&apos;d like Hindi or Punjabi, and let us know if you have a court date
        or deadline coming up.
      </>
    ),
    answerText:
      "Call 1300 226 725 or 0422 905 860, email info@bansallawyers.com.au or book online at https://www.bansallawyers.com.au/book-an-appointment. You can meet us at Level 8, 278 Collins Street, or talk by phone or video. Tell us if you'd like Hindi or Punjabi, and let us know if you have a court date or deadline coming up.",
  },
];

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

export default function FamilyLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Indian Family Lawyers in Melbourne" },
  ];

  return (
    <div className="family-landing-page">
      <StructuredData data={createFamilyLawyersMelbournePageGraphSchema(familyFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Indian Family Lawyers in Melbourne"
        intro={
          <>
            <p>
              Separation is rarely tidy. When your marriage was in India, relatives are overseas and the forms keep
              arriving, it can feel like too much at once. We&apos;re here to explain where you stand and what your
              options are, without the jargon, and we stay with you through the process.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers is a Melbourne law firm that helps Indian-Australian individuals and families. We explain
              Australian and Victorian family law in plain language, and you can talk to us in English, Hindi or
              Punjabi. Meet us at Level 8, 278 Collins Street, by phone or video.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="family" turnstileSiteKey={turnstileSiteKey} />}
      />

      <TrustBar
        items={[
          "Collins Street Office and Remote Consultations",
          "Consent Orders and Court Representation",
          "Plain-English Legal Guidance",
          "English, Hindi and Punjabi Legal Assistance",
          "Focused Family Law Advice",
        ]}
      />

      <Section tone="white" id="indian-community-advice">
        <SectionHeader
          title="Family Law Advice for Melbourne's Indian Community"
          intro={
            <>
              If you or your spouse live in Australia, Australian family law can deal with your divorce, parenting and
              property issues, even if you married in India. It depends on things like citizenship, how long you&apos;ve
              lived here and whether your marriage is recognised in Australia.
            </>
          }
        />
        <p style={proseBody}>
          The questions we hear from Indian-Australian families are often a mix. Some people married in India and
          separated in Melbourne. Some have parents or in-laws who put money into a home or business. Others have children
          and relatives in two countries, and everyone has a view on what should happen. If you want an Indian Family Lawyer
          Melbourne can offer for that kind of mix, we start by listening. Then we explain what Australian law says about
          your situation. Our work as Family Lawyers for Indian Community Melbourne families can call on is to make the law
          clear so you can decide what to do next.
        </p>
      </Section>

      <Section tone="warm" id="hindi-punjabi-lawyers">
        <SectionHeader
          title="Hindi and Punjabi-Speaking Family Lawyers"
          intro={
            <>
              If you&apos;re more comfortable in Hindi or Punjabi, you shouldn&apos;t have to push through a painful
              conversation in English. Our Hindi and Punjabi-speaking lawyer in Melbourne,{" "}
              <Link href="/about/ajay-bansal">Ajay Bansal</Link>, speaks English, Hindi and Punjabi, and works on family
              law matters.
            </>
          }
        />
        <p style={proseBody}>
          That matters more than people expect. Separation means talking about your marriage, your children and your money.
          It&apos;s easier to do that in the language you think in. You won&apos;t be hunting for the right English word,
          and you&apos;re less likely to leave out something important.
        </p>
        <p style={proseBody}>
          If you&apos;ve been searching for a Hindi Speaking Family Lawyer Melbourne or a Punjabi Speaking Family Lawyer
          Melbourne, tell us your preferred language when you book and we&apos;ll confirm availability. Court forms and
          legal documents are still in English. Ajay will go through them with you in whichever language you prefer.
        </p>
      </Section>

      <Section tone="white" id="matters">
        <SectionHeader
          title="Family Law Matters We Assist With"
          intro="Family law covers a lot of ground. Here are the areas we help with most, from divorce to family violence orders. Our Indian Family Law Solicitors Melbourne team explains your options, prepares the paperwork, negotiates with the other side and goes to court where it's needed."
        />

        <div className="service-detail-grid">
          <article className="service-text-block">
            <h3>Divorce and Separation</h3>
            <p>
              You can apply for a divorce once you&apos;ve been{" "}
              <Link href="/family-lawyers-melbourne/divorce-lawyer-melbourne/">separated for 12 months</Link>. That time can
              include months spent under the same roof, as long as you can show the court you were really separated. If you
              married in India, you can still apply here when the marriage is recognised in Australia and you meet the
              citizenship or residency requirements. You&apos;ll need your marriage certificate, with an English translation
              if it&apos;s in another language.
            </p>
            <p>
              A divorce only ends the marriage. Parenting and property are separate. If you have children under 18, the
              court also has to be satisfied they&apos;re being properly cared for before it makes the order.
            </p>
            <p>
              Our Indian Divorce Lawyers Melbourne service starts with a conversation in English, Hindi or Punjabi. As{" "}
              <Link href="/family-lawyers-melbourne/divorce-lawyer-melbourne/">divorce lawyers in Melbourne</Link>, we
              prepare the application, explain what the court will look at and help you plan what comes next.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Parenting Arrangements and Child Custody</h3>
            <p>
            People often say &ldquo;custody&rdquo;. The Family Law Act talks about parenting arrangements and parenting
            orders, and the court&apos;s main question is what&apos;s best for the child. Since 6 May 2024, there&apos;s
            no automatic presumption that parents share decision-making equally. Each case is looked at on its own facts.
          </p>
          <p style={proseBody}>
            Before going to court, most parents have to try family dispute resolution (mediation). There are exceptions,
            such as family violence or urgency. Our{" "}
            <Link href="/family-lawyers-melbourne/child-custody-lawyer-melbourne/">
              child custody lawyers in Melbourne
            </Link>{" "}
            can help with parenting arrangements, negotiations, consent orders and court if it comes to that. We can also
            explain where child support fits in.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Property Settlement After Separation</h3>
            <p>
            Property settlement covers more than the house. Savings, loans, investments, a business and debts all count,
            and super is treated as property that can be split. Assets in India, like land, a flat or a family business
            interest, can be part of the picture too. But an Australian order may be hard to enforce overseas, so you
            need advice on that early.
          </p>
          <p style={proseBody}>
            Time limits matter. If you were married, you generally have 12 months from the date your divorce takes effect
            to apply to court. De facto couples generally have two years from the end of the relationship. After that,
            you need the court&apos;s permission.
          </p>
          <p style={proseBody}>
            Looking for Indian Property Settlement Lawyers Melbourne to review your situation? As{" "}
            <Link href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/">
              property settlement lawyers in Melbourne
            </Link>
            , we help you work out what&apos;s in the pool, gather documents and negotiate Property Division After
            Separation.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Spousal Maintenance</h3>
            <p>
            After separation, one person may need financial support from the other for a time. Spousal maintenance is
            separate from child support and property settlement, and time limits apply. Our{" "}
            <Link href="/family-lawyers-melbourne/spousal-maintenance-lawyer-melbourne/">
              spousal maintenance lawyers in Melbourne
            </Link>{" "}
            can explain whether you may be entitled to support, or whether you may need to pay it.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Consent Orders</h3>
            <p>
            If you and your former partner agree on parenting or property, consent orders let the court approve that
            agreement so it becomes enforceable. Our{" "}
            <Link href="/family-lawyers-melbourne/consent-orders-lawyer-melbourne/">
              consent orders lawyers in Melbourne
            </Link>{" "}
            prepare the documents and guide you through filing.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Binding Financial Agreements</h3>
            <p>
            A binding financial agreement is a private contract about how property and finances are divided. Each person
            needs independent legal advice for it to be binding. Our{" "}
            <Link href="/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/">
              binding financial agreement lawyers in Melbourne
            </Link>{" "}
            advise whether a BFA suits your situation before or after separation.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Family Violence and Intervention Orders</h3>
            <p>
            If you&apos;re in danger now, call 000. In Victoria, intervention orders are court orders, usually from the
            Magistrates&apos; Court, to protect someone from a family member. Police can also apply on your behalf.
            </p>
            <p>
            Police can issue a family violence safety notice for immediate protection. You then{" "}
            <Link href="/family-lawyers-melbourne/intervention-order-lawyer-melbourne/">
              go to a hearing within 14 days
            </Link>
            .
            </p>
            <p>
              Our{" "}
            <Link href="/family-lawyers-melbourne/family-violence-lawyer-melbourne/">family violence lawyers</Link>{" "}
            provide Family Violence Legal Advice Melbourne on Family Violence Intervention Orders Victoria. Our{" "}
            <Link href="/family-lawyers-melbourne/intervention-order-lawyer-melbourne/">
              intervention order lawyers
            </Link>{" "}
            act for people applying for an order and for people responding to one. For 24/7 crisis support, call
            1800RESPECT on 1800 737 732 or Safe Steps on 1800 015 188.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="warm" id="indian-australian-families">
        <SectionHeader
          title="Family Law Issues Affecting Indian-Australian Families"
          intro={
            <>
              Indian-Australian families often ask us the same few questions. Here are straight answers to the most common
              ones, from marriages in India to family money and property overseas. They&apos;re general information on Indian
              Family Law Melbourne matters, so they can&apos;t replace advice on your own situation. If you&apos;d like to
              talk to someone first, visit our page for{" "}
              <Link href="/indian-lawyers-melbourne/">Indian Lawyers in Melbourne</Link>.
            </>
          }
        />
        <div className="service-detail-grid">
          <article className="service-text-block">
            <h3>Divorce after a marriage in India</h3>
            <p>
              Divorce After Indian Marriage Australia is usually possible when the marriage is recognised here and you or
              your spouse meet the citizenship or residency requirements. You still need 12 months of separation. When
              you&apos;re ready to apply, our{" "}
              <Link href="/family-lawyers-melbourne/divorce-lawyer-melbourne/">divorce lawyers in Melbourne</Link> can prepare
              the paperwork.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Marriage certificates and translations</h3>
            <p>
              Indian Marriage Divorce Australia applications need a copy of your marriage certificate. If it isn&apos;t in
              English, the court wants an English translation attached to an affidavit from the translator. If you can&apos;t
              get a certificate for a marriage overseas, you can file an affidavit explaining why and giving details of the
              ceremony, so it&apos;s worth trying the authority where you married first.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Money from parents or extended family</h3>
            <p>
              Gifts, loans and contributions from parents can come up in a property settlement. How they&apos;re treated
              depends on the facts and the paperwork, so keep bank transfers and any written agreements.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Property or financial interests in India</h3>
            <p>
              Australian courts can take overseas property into account, but enforcing an order abroad can be hard. Getting
              this right is a big part of Overseas Property Settlement Australia matters. Our{" "}
              <Link href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne/">
                property settlement lawyers in Melbourne
              </Link>{" "}
              can look at what&apos;s held overseas alongside what&apos;s here.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Parenting with family overseas</h3>
            <p>
              Grandparents, relatives or a parent in India can be part of the picture. Travel to India, long holidays and
              relocation can be dealt with in parenting orders or consent orders, so it&apos;s worth getting the arrangements
              in writing.
            </p>
          </article>
          <article className="service-text-block">
            <h3>When you may also need an Indian lawyer</h3>
            <p>
              We advise on Australian law only. For a court case, property or registration issue in India, you may need a
              lawyer there too. Indian Family Disputes Melbourne families face often involve both countries. We&apos;ll tell
              you what we can do from Melbourne and where to get Indian advice.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="white" id="why-choose">
        <SectionHeader
          title="Why Choose Bansal Lawyers?"
          intro="Choosing a lawyer while your family life is up in the air is a big decision. If you're looking for Indian Family Lawyers in Melbourne, here's what you can expect from us."
        />
        <div className="service-detail-grid">
          <article className="service-text-block">
            <h3>Lawyers Who Speak Your Language</h3>
            <p>
              You can talk to us in English, Hindi or Punjabi. <Link href="/about/ajay-bansal">Ajay Bansal</Link> speaks
              all three, and he&apos;ll go through court forms and legal paperwork with you in whichever language you&apos;re
              most comfortable with. That means fewer misunderstandings, and you&apos;re more likely to tell us the details
              that matter. Nobody should have to translate their own family problems on the spot. Tell us your preference
              when you book and we&apos;ll confirm availability.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Clear Advice on Australian Family Law</h3>
            <p>
              We explain Australian and Victorian family law in plain English, and we&apos;re upfront about what it can and
              can&apos;t do. If part of your situation needs a lawyer in India, we&apos;ll tell you early. Before you decide
              anything, you&apos;ll hear your options, the risks and the likely next steps. No lawyer can promise an outcome,
              and we won&apos;t. What you will get is a straight explanation of where you stand.
            </p>
          </article>
          <article className="service-text-block">
            <h3>A Team That Can Negotiate and Go to Court</h3>
            <p>
              Bansal Lawyers is led by Ajay, who works alongside solicitor{" "}
              <Link href="/about/michael-saleh">Michael Saleh</Link>. Ajay appears in Victorian and Federal courts, and
              Michael has appeared in the Magistrates&apos; Court of Victoria and the Federal Circuit and Family Court of
              Australia. Many matters settle through negotiation, so that&apos;s often where we start. Where court is needed,
              we can take that step with you too.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Easy to Reach, in Person or Online</h3>
            <p>
              Our office is at Level 8, 278 Collins Street in the Melbourne CBD. You can meet us in person, by phone or on
              video, so our Family Lawyers Melbourne team is easy to reach wherever you are. If you have a court date or a
              deadline coming up, tell us when you get in touch so we can plan around it. If you&apos;re worried about your
              safety, say so at the start and we&apos;ll explain your options.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Confidential and Practical Support</h3>
            <p>
              Your consultation with us is confidential. Bring what you have, and we&apos;ll help you work out the next step,
              whether that&apos;s an agreement, a negotiation, a court application or simply understanding where you stand. If
              you&apos;d like to know more about <Link href="/about">the firm</Link> first, or you&apos;re ready to talk, you
              can <Link href="/contact">get in touch</Link> at any time.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="white" id="family-law-process">
        <SectionHeader
          title="Our Family Law Process"
          intro="Every family matter is different, but the steps are usually similar. Here's how we work with you, from the first call to the final paperwork. Many matters settle without a court hearing, so not every step applies to every client."
        />
        <ProcessSteps items={familyProcessSteps} columns={3} />
      </Section>

      <Section tone="warm" id="our-team">
        <div className="team-clean-header">
          <div className="team-clean-eyebrow">
            <span className="team-clean-eyebrow__line" aria-hidden="true" />
            <span>LEGAL PRACTITIONERS</span>
            <span className="team-clean-eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="team-clean-title">
            Meet Our <span className="team-clean-title__serif">Family Lawyers</span>
          </h2>
          <p className="team-clean-intro">
            Ajay Bansal is the director and principal lawyer. Michael Saleh is a solicitor. Read each profile, then book a
            consultation.
          </p>
        </div>
        <div className="service-detail-grid" style={{ marginBottom: "1.75rem" }}>
          <article className="service-text-block">
            <h3>
              <Link href="/about/ajay-bansal">Ajay Bansal</Link>
            </h3>
            <p>
              Ajay founded Bansal Lawyers and is its Director and Principal Lawyer. He has seven years in practice, and his
              family law work covers separation, parenting arrangements, property settlement and family violence matters. He
              appears in Victorian and Federal courts and speaks English, Hindi and Punjabi.
            </p>
          </article>
          <article className="service-text-block">
            <h3>
              <Link href="/about/michael-saleh">Michael Saleh</Link>
            </h3>
            <p>
              Michael is a solicitor admitted to the Supreme Court of Victoria, with a Bachelor of Laws and a Graduate
              Diploma of Legal Practice. His family law work covers parenting orders, child custody disputes, intervention
              orders and financial settlements. He has appeared in the Magistrates&apos; Court of Victoria and the Federal
              Circuit and Family Court of Australia, and speaks English and Arabic.
            </p>
          </article>
        </div>
        <div className="team-clean-grid">
          {lawyers.map((member) => (
            <article key={member.name} className="team-clean-card">
              <Link
                href={member.profileHref}
                className="team-clean-card__media-link"
                title={`View ${member.name}'s profile`}
              >
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 580px) 100vw, 420px"
                  className="team-clean-card__img"
                />
              </Link>
              <div className="team-clean-card__content">
                <h3 className="team-clean-card__name">
                  <Link href={member.profileHref}>{member.name}</Link>
                </h3>
                <a href={`mailto:${member.email}`} className="team-clean-card__email">
                  {member.email}
                </a>
                <p className="team-clean-card__role">{member.role}</p>
                <div className="team-clean-card__socials">
                  <a
                    href={member.phoneHref}
                    className="team-clean-card__icon-link"
                    aria-label={`Call ${member.name}`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </a>
                  <Link href={member.profileHref} className="team-clean-card__icon-link" aria-label={`View ${member.name}'s profile`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <polyline points="17 11 19 13 23 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="client-testimonials-section client-testimonials-section--corner-badge" id="client-reviews">
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={familyLawyersMelbourneTestimonials} />
          <GoogleReviewSummaryBadge />
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
              <p style={proseBody}>
                Book a consultation to talk through a family law matter, a business or commercial dispute, or a will.
              </p>
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
        title="Speak With Indian Family Lawyers in Melbourne"
        text={
          <>
            <p>
              Separating, divorcing, arguing over parenting or property, or dealing with family violence? Get in touch
              and we&apos;ll help you work out your next step. When you book, we confirm the consultation fee
              before any work starts, and later costs depend on the matter.
            </p>
            <p className="cta-section__contact">
              {businessDetails.name}
              <br />
              {businessDetails.address}
              <br />
              Phone: <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLine}</a>
              <br />
              Mobile: <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>
              <br />
              Email: <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>
              <br />
              Hours: Mon–Fri, 9:30 AM–6 PM
            </p>
          </>
        }
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        phone="1300 226 725"
        phoneLabel="Direct Family Law Line"
        badges={[
          "Strictly confidential family legal advice",
          "English, Hindi and Punjabi",
          "Melbourne CBD & virtual consultations",
        ]}
      />

      <Section tone="warm" id="faqs">
        <Faq
          items={familyFaqs}
          title="Frequently Asked Questions"
          subtitle="Quick answers to what people usually ask before they book."
          contactTitle="Need confidential advice about your family law situation?"
          contactButtonLabel="Book a Confidential Consultation"
          contactHref="/contact"
        />
      </Section>
    </div>
  );
}
