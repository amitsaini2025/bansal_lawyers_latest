import Image from "next/image";
import Link from "next/link";
import { ClientTestimonialsCarousel } from "@/components/sections/ClientTestimonialsCarousel";
import { OfficeLocationMedia } from "@/components/sections/OfficeLocationMedia";
import { ajayBansalFaqs } from "@/lib/ajay-bansal-faqs";
import { ajayClientTestimonials } from "@/lib/ajay-client-testimonials";
import {
  Container,
  CtaSection,
  Faq,
  Section,
  TrustBar,
} from "@/components/ui";
import { businessDetails, officeHoursDescription } from "@/lib/site";

const focusAreas = [
  {
    title: "Immigration law",
    description: "Visa applications, refusals, cancellations, NOICC responses, and ART appeals.",
  },
  {
    title: "Family law",
    description: "Separation, parenting arrangements, property settlement, and family violence matters.",
  },
  {
    title: "Commercial & property law",
    description: "Business matters, contracts, transactions, property advice, and disputes.",
  },
  {
    title: "Criminal & civil matters",
    description: "Criminal charges, civil disputes, evidence preparation, and representation.",
  },
];

const biography = [
  "Ajay Bansal is the founding Director of Bansal Lawyers. He brings 7 years of experience to the firm and has worked with clients across a wide range of legal matters throughout Australia.",
  "His work covers immigration law, family law, property law, commercial law, criminal law, and civil matters. Over the years, he has assisted hundreds of clients with legal issues involving visas, family disputes, business transactions, property settlements, criminal charges, and other critical legal concerns.",
  "Ajay’s approach is straightforward. He focuses on understanding the client’s situation, explaining the legal position clearly, and helping the client make informed decisions without ambiguity or delay.",
];

const trustItems = [
  "7 Years of Experience",
  "Victorian & Federal Court Advocacy",
  "Multidisciplinary Strategic Guidance",
  "Melbourne CBD & Virtual Consultations",
];

const ajayGlanceCredentials = [
  { label: "Experience", value: "7 years of experience" },
  { label: "Location", value: "Melbourne CBD" },
  { label: "Languages", value: "English, Hindi, Punjabi" },
  { label: "Consultations", value: "In-person and virtual" },
];

function AjayAtAGlanceCard({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const variantClass =
    variant === "mobile" ? "ajay-at-a-glance-card--mobile-only" : "ajay-at-a-glance-card--desktop-only";

  return (
    <aside
      className={`practitioner-profile__details ajay-at-a-glance-card ${variantClass}`.trim()}
      aria-label="Ajay Bansal professional details"
    >
      <h2>At a glance</h2>
      <dl>
        {ajayGlanceCredentials.map((credential) => (
          <div key={credential.label}>
            <dt>{credential.label}</dt>
            <dd>{credential.value}</dd>
          </div>
        ))}
      </dl>
      <Link href="/contact" className="button button--primary">
        Book a Consultation
      </Link>
    </aside>
  );
}

export function AjayBansalProfile() {
  return (
    <div className="ajay-bansal-page">
      <section className="practitioner-hero ajay-bansal-hero">
        <Container>
          <div className="practitioner-hero__grid">
            <div className="practitioner-hero__content">
              <h1>Indian Lawyer in Melbourne – Legal Support for the Indian Community</h1>
              <p className="practitioner-hero__lead">
                Finding the right legal representation can make an important difference when dealing
                with a family, criminal, civil or commercial matter. If you are searching for the best
                Indian lawyer in Melbourne, it is important to consider relevant legal experience,
                knowledge of Australian law, clear communication and an understanding of your
                circumstances.
              </p>
              <hr className="ajay-hero-divider" />
              <div className="ajay-hero-intro">
                <p>
                  At Bansal Lawyers, our team assists members of the Indian community with a range of
                  legal matters, including family law, divorce, criminal law, civil disputes, property
                  matters, immigration and commercial law. We aim to help clients understand their legal
                  options and the processes involved so they can make informed decisions about their
                  matters.
                </p>
                <p>
                  Whether you need assistance with a personal legal issue, a family dispute or a
                  business-related matter, speak with our team to discuss your requirements.
                  Consultations in English, Hindi and Punjabi are available, subject to confirmation of
                  language availability with the firm.
                </p>
              </div>
              <div className="practitioner-hero__actions">
                <Link href="/contact" className="button button--light">
                  Book a Consultation
                </Link>
                <a href={businessDetails.phoneTel} className="button button--white-outline">
                  Call {businessDetails.phone}
                </a>
              </div>
            </div>
            <div className="practitioner-hero__portrait">
              <Image
                src="/images/team/ajay-bansal-director.webp"
                alt="Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne"
                fill
                priority
                sizes="(max-width: 760px) calc(100vw - 3rem), 420px"
              />
            </div>
          </div>
        </Container>
      </section>

      <TrustBar items={trustItems} />

      <div className="ajay-profile-scroll-layout">
        <div className="ajay-profile-scroll-layout__content">
          <Section tone="white" id="why-choose" className="ajay-profile-scroll-first-section">
        <div className="ajay-profile-section ajay-profile-why">
          <h2>Meet Ajay Bansal</h2>
          <AjayAtAGlanceCard variant="mobile" />
          <p>
            Ajay Bansal founded Bansal Lawyers and is its Director and Principal Lawyer. Over 7 years,
            he&apos;s helped hundreds of clients with immigration, family, property, commercial,
            criminal and civil matters. He appears in the Victorian and Federal courts and acts for
            clients all over Australia.
          </p>
          <p>
            His approach is simple. He gets to know your situation, explains where you stand in plain
            terms, and helps you make decisions without dragging things out. The firm was built on
            honest, practical advice that people can actually follow.
          </p>
          <p>
            For families, he deals with parenting arrangements, property settlement and family violence
            matters. For business owners, he handles contracts, transactions, property and disputes.
          </p>
          <p>
            Ajay speaks English, Hindi and Punjabi. So if you want an Indian lawyer in Melbourne, you
            can talk about sensitive things in the language you&apos;re most at ease with. He works
            alongside solicitor <Link href="/about/michael-saleh/">Michael Saleh</Link> and the rest of
            the team. See <Link href="/about/michael-saleh/">Michael&apos;s profile</Link> and meet{" "}
            <Link href="/about/">the rest of the team</Link>.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="punjabi-speaking-lawyer">
        <div className="ajay-profile-section ajay-profile-why">
          <h2>Punjabi-Speaking Lawyer in Melbourne: Why Language Matters</h2>
          <p>
            Imagine describing the worst week of your life in your second language, with legal terms
            thrown in on top.
          </p>
          <p>
            You might be perfectly fine with English at work and still lose the thread when
            you&apos;re reading a charge sheet, a court order or a lease clause. The language is
            technical and a lot is riding on it. One misunderstanding can cost you money, time, or
            time with your kids.
          </p>
          <hr className="ajay-profile-divider" />
          <p>
            Ajay speaks English, Hindi and Punjabi, so you can tell him what happened in the language
            you think in. Ask your questions as they come to you, and he&apos;ll explain where you
            stand in plain words. Prefer Hindi? That&apos;s fine too. Court papers and contracts will
            still be in English, so we&apos;ll go through them together.
          </p>
          <p>
            Sharing a language doesn&apos;t replace legal skill, of course. What it does is make sure
            your lawyer hears the whole story, and good advice starts with that.
          </p>
        </div>
      </Section>

      <Section tone="white" id="profile" className="practitioner-profile ajay-practitioner-profile">
        <div className="practitioner-profile__grid">
          <div className="practitioner-profile__biography">
            <p className="practitioner-profile__label">Professional profile</p>
            <h2>Clear Advice and Focused Representation</h2>
            <div className="practitioner-profile__prose">
              {biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="practitioner-profile__focus">
              <h2>Practice Focus</h2>
              <div className="practitioner-profile__focus-grid">
                {focusAreas.map((area) => (
                  <article className="practitioner-focus-card" key={area.title}>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="warm" id="indian-community" className="ajay-indian-community-section">
        <div className="ajay-profile-section ajay-profile-indian ajay-profile-why">
          <h2>Legal Services for the Indian Community in Melbourne</h2>
          <p className="ajay-profile-indian__intro">
            Legal trouble rarely comes at a convenient time. Here&apos;s what Ajay and the team can
            help with.
          </p>
          <h3>Family law</h3>
          <p>
            Separation is hard enough without court dates and forms on top. Ajay helps with
            divorce, parenting and property when your marriage is recognised in Australia. When you
            need step-by-step guidance, our{" "}
            <Link href="/family-lawyers-melbourne/">family lawyer in Melbourne</Link> team can explain
            what applies to your situation.
          </p>
          <p>A few things are worth knowing early on.</p>
          <p>
            To apply for divorce you generally need 12 months of separation. That can include time
            under one roof if the separation is genuine. The divorce ends the marriage; property and
            parenting are separate steps.
          </p>
          <p>
            Married couples usually have 12 months from when the divorce takes effect to apply for
            property orders or spousal maintenance. De facto couples generally have two years from
            the end of the relationship.
          </p>
          <p>
            Intervention orders in Victoria are heard in the Magistrates&apos; Court. If you are in
            immediate danger, call 000. We act for people applying for an order and for people
            responding to one.
          </p>
          <h3>Criminal law</h3>
          <p>
            A charge, a police interview or a court summons can throw your whole life off track. The
            earlier you speak to a{" "}
            <Link href="/criminal-lawyers-melbourne/">criminal lawyer in Melbourne</Link>, the
            better. We help with summary offences, traffic offences and licence suspensions, and
            assault and property offences. We also assist with bail applications, breaches of
            intervention orders, police interviews and cautions, pleas in mitigation, criminal
            appeals and Magistrates&apos; Court appearances.
          </p>
          <p className="ajay-profile-list-lead">
            If you&apos;ve been charged, these are the first things to do:
          </p>
          <ul className="ajay-profile-checklist">
            <li>Get legal advice before you do any police interview.</li>
            <li>
              Keep every document you&apos;re given, including the charge sheet, summons, bail
              papers and any messages about the case.
            </li>
            <li>
              Write down your court date and which court it&apos;s in. Missing it can make things a
              lot worse.
            </li>
            <li>
              Call a lawyer early. The sooner we can look at the evidence, the sooner you&apos;ll
              know what defences and pleas might be open to you.
            </li>
          </ul>
          <p>
            Not sure whether we take your type of charge? Give us a call and ask. We&apos;ll give you
            a straight answer.
          </p>
          <h3>Civil and Commercial law</h3>
          <p>
            Money and contract problems tend to go wrong in the same few ways. Someone stops paying.
            Two people read the same agreement differently. A business partner stops returning your
            calls.
          </p>
          <p>
            Disputes over money or contracts are the bread and butter of{" "}
            <Link href="/civil-lawyers-melbourne/">civil law in Melbourne</Link>. We help with unpaid
            invoices, contract disagreements, partnership fall-outs and debt recovery. Early advice
            often means a letter of demand or negotiation before anyone files in court.
          </p>
          <p>
            When a matter has to go further, we&apos;ll explain the court steps and whether VCAT, the
            Magistrates&apos; Court or another Victorian court is the right place. Parties are expected
            to take genuine steps to resolve disputes under the Civil Procedure Act 2010 before
            starting most court proceedings.
          </p>
          <p>
            If you run a business, Ajay also handles{" "}
            <Link href="/commercial-lawyers-melbourne/">commercial law matters in Melbourne</Link>,
            including contracts, shareholder disputes and business sales.
          </p>
          <p>
            Try not to leave it too long. In Victoria, you generally have six years to bring a claim
            for breach of contract from when the breach happened, though shorter deadlines can apply in
            some agreements.
          </p>
          <h3>Property law and Indian power of attorney</h3>
          <p>
            Buying or selling a property, signing a lease, or dealing with a settlement that&apos;s
            gone wrong? It mostly comes down to paperwork and deadlines. Before you sign anything,
            it&apos;s worth having a{" "}
            <Link href="/property-lawyers-melbourne/">property lawyer in Melbourne</Link> check the
            contract. We also advise on conveyancing, leases and landlord and tenant issues, and we
            step in when a settlement or property dispute goes wrong.
          </p>
          <p>
            If you live in Australia but need someone in India to act for you, for example to sell a
            property or sort out a bank matter, we can draft or review a power of attorney for use in
            India. We&apos;re not a notary public, so we&apos;ll send you to one for the signing.
            Stamping and registration, where they apply, are done in India.
          </p>
        </div>
      </Section>
        </div>

        <div className="ajay-profile-scroll-layout__aside">
          <AjayAtAGlanceCard variant="desktop" />
        </div>
      </div>

      <Section tone="white" id="how-to-choose-indian-lawyer">
        <div className="ajay-profile-section ajay-profile-why">
          <h2>How to Choose the Best Indian Lawyer in Melbourne</h2>
          <p>
            Choosing a lawyer is an important decision, particularly when your legal matter involves
            family circumstances, business interests or connections between Australia and India. When
            comparing Indian lawyers in Melbourne, consider the following factors:
          </p>
          <h3>Experience Relevant to Your Legal Matter</h3>
          <p>
            Look for a lawyer who regularly handles the type of matter you need help with, whether it
            involves family law, criminal charges, property disputes, commercial matters or immigration.
          </p>
          <h3>Understanding of Australian Law</h3>
          <p>
            A lawyer assisting you in Melbourne should understand the relevant Australian and Victorian
            legal requirements. Matters involving Indian assets or overseas family circumstances may
            also require advice from a lawyer in India.
          </p>
          <h3>Clear Communication</h3>
          <p>
            Choose a legal team that explains the available legal options, potential risks, procedures
            and costs in language you understand. If you prefer Hindi or Punjabi, confirm whether
            consultations are available in your preferred language.
          </p>
          <h3>Professional Reputation and Client Feedback</h3>
          <p>
            Consider the lawyer&apos;s professional background, relevant experience and genuine client
            feedback. Reviews can help you understand other clients&apos; experiences, but they should
            not be treated as a guarantee of legal outcomes.
          </p>
          <h3>Accessibility and Consultation</h3>
          <p>
            Check whether the firm offers convenient consultation arrangements, explains its fees and
            provides a clear point of contact for your matter. At Bansal Lawyers, you can contact the
            team to discuss your legal requirements and find out whether the firm can assist with your
            matter.
          </p>
        </div>
      </Section>

      <section className="client-testimonials-section" id="client-reviews">
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={ajayClientTestimonials} />
        </Container>
      </section>

      <Section tone="white" id="consultation-prep">
        <div className="ajay-profile-section ajay-profile-why">
          <h2>How to Prepare for a Legal Consultation</h2>
          <p>
            If you&apos;re planning to book a consultation with an Indian lawyer in Melbourne, a bit
            of preparation helps. You&apos;ll get clearer advice in the first meeting, and it can save
            you time and money. You don&apos;t need to have everything perfect. Bring what you&apos;ve
            got and we&apos;ll sort out the rest with you.
          </p>
          <h3>Documents to bring</h3>
          <ul className="ajay-profile-checklist">
            <li>
              <strong>Photo ID,</strong> such as your driver licence or passport.
            </li>
            <li>
              <strong>Legal or court papers,</strong> such as a charge sheet, summons, bail papers,
              court orders, intervention order documents or a letter of demand.
            </li>
            <li>
              <strong>Agreements,</strong> such as contracts, leases or loan documents.
            </li>
            <li>
              <strong>Messages and records,</strong> such as emails, text messages, receipts and bank
              statements related to the issue.
            </li>
          </ul>
          <h3>Write a short timeline</h3>
          <p>
            Write down what happened in order, with dates and names. One page is plenty. It helps your
            lawyer see the full picture quickly.
          </p>
          <h3>Note your deadlines</h3>
          <p>
            Jot down any dates you already know about, like a court date, a deadline to reply to a
            notice, or a time limit you&apos;re worried about. If a deadline is close, tell us when you
            book so we can see you sooner.
          </p>
          <h3>Prepare your questions</h3>
          <p>
            Write your questions down before you come. It&apos;s easy to forget them once you&apos;re in
            the room. Things like: What are my options? What could happen next? What are the next
            steps?
          </p>
          <h3>Choose your language</h3>
          <p>
            When you book, let us know if you&apos;d like to speak with a Punjabi-speaking lawyer in
            Melbourne. You can use Punjabi, Hindi or English, whichever lets you explain things best.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq
          items={ajayBansalFaqs}
          title="Frequently Asked Questions"
          subtitle="Common questions before you book a consultation with Ajay Bansal."
          contactTitle="Want advice on your own matter?"
          contactButtonLabel="Book a Consultation"
          contactHref="/contact"
        />
      </Section>

      <Section tone="warm" id="office-map" className="ajay-profile-office-media">
        <OfficeLocationMedia standalone />
      </Section>

      <CtaSection
        title="Schedule a Consultation With Ajay Bansal"
        text={
          <>
            <p>
              Speak with Ajay Bansal and the Bansal Lawyers team about your immigration, family,
              criminal, civil or commercial matter.
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLine}</a>
            </p>
            <p>
              <strong>Mobile:</strong> <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>
            </p>
            <p>
              <strong>Address:</strong> {businessDetails.address}
            </p>
            <p>
              <strong>Hours:</strong> {officeHoursDescription}
            </p>
          </>
        }
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        phone={businessDetails.nationalLine}
        phoneLabel="Call the Office"
        badges={[
          "English, Hindi and Punjabi",
          "Collins Street and virtual consultations",
          "Immigration, family, criminal and commercial law",
        ]}
      />
    </div>
  );
}
