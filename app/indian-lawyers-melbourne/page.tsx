import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClientTestimonialsCarousel } from "@/components/sections/ClientTestimonialsCarousel";
import { GoogleReviewSummaryBadge } from "@/components/sections/GoogleReviewSummaryBadge";
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
  TrustBar,
} from "@/components/ui";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { indianLawyersMelbourneFaqs } from "@/lib/indian-lawyers-melbourne-faqs";
import { indianLawyersMelbourneTestimonials } from "@/lib/indian-lawyers-melbourne-testimonials";
import { createMetadata } from "@/lib/metadata";
import {
  createIndianLawyersMelbournePageGraphSchema,
  INDIAN_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  INDIAN_LAWYERS_MELBOURNE_PAGE_TITLE,
} from "@/lib/schema";
import { businessDetails, officeHoursDescription } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: INDIAN_LAWYERS_MELBOURNE_PAGE_TITLE,
  description: INDIAN_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  path: "/indian-lawyers-melbourne",
  keywords: [
    "Indian Lawyers Melbourne",
    "Indian Lawyer Melbourne",
    "Indian Family Lawyers Melbourne",
    "Hindi-Speaking Lawyer Melbourne",
    "Punjabi-Speaking Lawyer Melbourne",
    "Business Dispute Lawyer Melbourne",
    "Legal Consultation Melbourne",
    "Indian Civil Lawyers in Melbourne",
    "Indian Criminal Lawyers in Melbourne",
    "Indian Commercial Lawyers in Melbourne",
  ],
});

const lawyers = [
  {
    name: "Ajay Bansal",
    role: "Director & Principal Lawyer",
    email: "info@bansallawyers.com.au",
    phone: businessDetails.phone,
    phoneHref: businessDetails.phoneTel,
    profileHref: "/about/ajay-bansal",
    image: "/images/team/ajay-bansal-director.webp",
    alt: "Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne",
  },
  {
    name: "Michael Saleh",
    role: "Solicitor",
    email: "info@bansallawyers.com.au",
    phone: businessDetails.phone,
    phoneHref: businessDetails.phoneTel,
    profileHref: "/about/michael-saleh",
    image: "/images/team/michael-saleh-solicitor.png",
    alt: "Michael Saleh - Solicitor at Bansal Lawyers Melbourne",
  },
];

export default function IndianLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Indian Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createIndianLawyersMelbournePageGraphSchema(indianLawyersMelbourneFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Indian Lawyers in Melbourne"
        intro={
          <>
            <p>
              Bansal Lawyers is a Melbourne firm that helps Indian families and business owners when a marriage ends, when a family business falls into dispute, or when a will has to cover property in more than one country. Advice is available in English, Hindi and Punjabi.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Many clients married in India, own a flat or land there, or run a company with parents, siblings or cousins. Australian law answers some of those questions. Indian law answers others. The office is on Collins Street. If you are elsewhere in Australia, or if family in India need to join, we meet by phone or video.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: `Call ${businessDetails.phone}`, href: businessDetails.phoneTel }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="family" turnstileSiteKey={turnstileSiteKey} />}
      />

      <TrustBar
        items={[
          "English, Hindi and Punjabi",
          "Family, Civil, Criminal, Business Disputes and Wills",
          "Collins Street Office",
          "Online Consultations in Australia and India",
        ]}
      />

      <div id="content">
      <Section tone="white" id="family-law">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Family Law</span>
          <h2>Divorce, Parenting and Property After an Indian Marriage</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A marriage celebrated in India can be ended in an Australian court when the Family Law Act applies. One spouse must be an Australian citizen, domiciled in Australia, or ordinarily resident here for the 12 months before the application. The couple must have been separated for 12 months. That period can include time under the same roof, if the separation is real. The divorce order ends the marriage. It does not divide property or decide where children live.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Parenting arrangements are decided by what is in the child&apos;s best interests. Most parents must try family dispute resolution before they ask the court for parenting orders, unless the matter is urgent or there is family violence. We help with those arrangements, with negotiations, and with consent orders when you reach an agreement.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Property settlement looks at what both spouses own, including assets outside Australia. A house, a plot or an interest in a family business in India can be part of the pool. An order made in Australia binds the spouses. Registering a transfer on an Indian title is a further step, and it follows the local registry. Spousal maintenance, for a former partner who cannot meet their own reasonable needs, is not paid in every case. Married couples generally have 12 months from the date the divorce order takes effect to apply for property orders or spousal maintenance. De facto couples generally have two years from the end of the relationship.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Family violence orders in Victoria are intervention orders under the Family Violence Protection Act 2008, usually heard in the Magistrates&apos; Court. If you are in immediate danger, call 000. We act for people applying for an order and for people responding to one, including where parenting or property are running at the same time.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            The wider family law work is on our{" "}
            <Link href="/family-lawyers-melbourne/">family lawyers</Link> page. The application itself is covered on the{" "}
            <Link href="/family-lawyers-melbourne/divorce-lawyer-melbourne/">divorce lawyers</Link> page.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="business-disputes">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Business Disputes</span>
          <h2>Partnership and Shareholder Disputes in Family Businesses</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Many Indian family businesses in Melbourne are partnerships or private companies. The shares or the partnership interests sit with parents, siblings or cousins. The dispute often starts at home and becomes a legal problem when drawings stop, one person wants to leave, or a lease or franchise agreement is in one relative&apos;s name only.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We help with partnership and shareholder disputes, including deadlocks, arguments about ownership, and exits where there is no written agreement or the agreement does not match how the business was run. Franchise disputes and shop-lease disputes often sit in the same file. We read the agreement, the company records and the payments, then write to the other side, negotiate a buy-out, or advise on a claim.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            How we approach partner, supplier and payment disputes is set out on the{" "}
            <Link href="/civil-lawyers-melbourne/business-related-dispute-lawyer-melbourne/">
              business dispute
            </Link>{" "}
            page.
          </p>
        </div>
      </Section>

      <Section tone="white" id="commercial-disputes">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Commercial Disputes</span>
          <h2>Contracts, Unpaid Debts and Court or VCAT Claims</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Commercial disputes are the contract and payment problems around those businesses. An invoice is unpaid. A supplier did not deliver. A customer refuses a progress claim. A relative who was also a customer says the deal was different from the written terms.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We help with contract disputes, debt recovery and letters of demand, whether you are owed the money or you have received a demand. A letter of demand states what is owed, why, and the date for payment. It is often the step before a claim. Some smaller disputes are heard at VCAT. Larger contract claims, and many company disputes, are issued in a court. Which path fits depends on the amount, the contract and the type of claim. Bring the contract, the invoices and the messages to the first meeting.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Contracts, debt recovery and commercial disputes are covered on our{" "}
            <Link href="/commercial-lawyers-melbourne/">commercial lawyers</Link> page.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="wills">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Wills and Estates</span>
          <h2>Wills for Assets in Australia and India</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A will says what happens to your property when you die. If you hold assets in Australia and in India, one document is not always enough. Land in India is dealt with under the law of the place where that property is, and a registry, bank or court there may expect a will that meets Indian formalities. Many clients need an Australian will and an Indian will, written so that one does not revoke the other. Succession rules in India also differ by religion, so the same draft does not suit every family.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            A power of attorney is a different document. A will operates after death. A power of attorney operates while you are alive. In Victoria, an enduring power of attorney appoints someone to make financial and personal decisions, including if you later lose capacity. A medical treatment decision maker is appointed separately for health decisions. If a relative in India needs to sell, lease or manage property for you, that is usually an{" "}
            <Link href="/property-lawyers-melbourne/indian-power-of-attorney-lawyer-melbourne/">
              Indian power of attorney
            </Link>
            , prepared for that transaction.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            If a will is challenged, or a family member was left out, the Victorian claim is generally a family provision application under the Administration and Probate Act 1958. Eligible people can ask the court for further provision. The usual time limit is six months from the grant of probate, so a challenge should not wait.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Drafting and estate advice are on our{" "}
            <Link href="/wills-lawyers-melbourne/">wills lawyers</Link> page.
          </p>
        </div>
      </Section>

      <Section tone="white" id="why-clients-choose-us">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Why Choose Bansal Lawyers for Indian-Community Legal Matters?</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Maybe your marriage has ended. Maybe your brother wants out of the family shop. Or maybe your dad&apos;s will covers a flat in India and a house in Melbourne, and no one knows how the two fit together. These things are hard enough without wondering whether your lawyer will get where you&apos;re coming from.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Bansal Lawyers is a Melbourne firm that works with a lot of Indian families and business owners. If you&apos;re searching for{" "}
            <strong>Indian lawyers in Melbourne</strong>, here&apos;s what you can expect from us.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>We Listen First</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We begin by asking questions. What do you want to happen? Who&apos;s involved? What paperwork do you have? Many of our clients come to us with a situation that&apos;s tangled up with family, money or two countries, and that takes time to sort out. We won&apos;t rush you or jump to conclusions. If something is difficult to talk about, you can say it in the language you&apos;re most comfortable in. Once we&apos;ve got the full picture, we&apos;ll give you advice.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>Speak in Your Own Language</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Talk to us in Hindi, Punjabi or English, whichever feels easiest. That goes for anyone looking for a{" "}
            <Link href="/about/ajay-bansal/">Hindi-speaking lawyer in Melbourne</Link> or a{" "}
            <Link href="/about/ajay-bansal/#punjabi-speaking-lawyer">Punjabi-speaking lawyer in Melbourne</Link>.
            Court documents are written in English, but we&apos;ll walk you through them.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>Matters That Reach Across Borders</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Many of our clients married in India, own property there, or run a business with relatives. Some of those questions are answered by Australian law, others by Indian law. We&apos;ll tell you what we can do here, and whether you&apos;ll need a lawyer in India as well. If you&apos;re in a partnership or shareholder fight, a{" "}
            <Link href="/civil-lawyers-melbourne/business-related-dispute-lawyer-melbourne/">
              business dispute lawyer in Melbourne
            </Link>{" "}
            will begin with your agreement and the company records.
          </p>
          <hr className="ajay-profile-divider" />
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>You&apos;ll Know What Happens Next</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We&apos;ll tell you where you stand, what might go wrong and what comes next. If there&apos;s a deadline or a court date, we&apos;ll point it out early so it doesn&apos;t catch you off guard. We explain each step in plain language, including what we&apos;ll do and what we need from you. After that, we keep you in the loop, and if anything changes along the way, you&apos;ll hear it from us straight away.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>Visit Us in the CBD or Meet Online</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our office is on Level 8, 278 Collins Street, in the Melbourne CBD. If getting there is hard, you can book a{" "}
            <Link href="/contact/">legal consultation in Melbourne</Link> by phone or video instead. Family members in India can join the call too.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            People often search for <strong>Indian family lawyers in Melbourne</strong>,{" "}
            <strong>Indian commercial lawyers in Melbourne</strong> or <strong>Indian civil lawyers in Melbourne</strong>.
            Our <Link href="/family-lawyers-melbourne/">family lawyers</Link>,{" "}
            <Link href="/commercial-lawyers-melbourne/">commercial lawyers</Link> and{" "}
            <Link href="/civil-lawyers-melbourne/">civil lawyers</Link> cover all of these areas. We also take on{" "}
            <Link href="/criminal-lawyers-melbourne/">criminal</Link>,{" "}
            <Link href="/property-lawyers-melbourne/">property</Link> and{" "}
            <Link href="/wills-lawyers-melbourne/">wills</Link> matters.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="meet-ajay-bansal">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Meet Ajay Bansal – Director &amp; Principal Lawyer</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Ajay Bansal founded Bansal Lawyers and is its Director and Principal Lawyer. Over 7 years, he&apos;s helped hundreds of clients with{" "}
            <Link href="/immigration-lawyers-melbourne/">immigration</Link>, family, property, commercial, criminal and civil matters. He appears in the Victorian and Federal courts and acts for clients all over Australia.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            His approach is simple. He gets to know your situation, explains where you stand in plain terms, and helps you make decisions without dragging things out. The firm was built on honest, practical advice that people can actually follow.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            For families, he deals with parenting arrangements, property settlement and family violence matters. For business owners, he handles contracts, transactions, property and disputes.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Ajay speaks English, Hindi and Punjabi. So if you want an <strong>Indian lawyer in Melbourne</strong>, you can talk about sensitive things in the language you&apos;re most at ease with. He works alongside solicitor{" "}
            <Link href="/about/michael-saleh/">Michael Saleh</Link> and the rest of the team. See{" "}
            <Link href="/about/ajay-bansal/">Ajay&apos;s full profile</Link> and meet{" "}
            <Link href="/about/">the rest of the team</Link>.
          </p>
        </div>
      </Section>

      <Section tone="white" id="our-team">
        <div className="team-clean-header">
          <div className="team-clean-eyebrow">
            <span className="team-clean-eyebrow__line" aria-hidden="true" />
            <span>LEGAL PRACTITIONERS</span>
            <span className="team-clean-eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="team-clean-title">Meet Our Legal Team</h2>
          <p className="team-clean-intro">
            Ajay Bansal is the director and principal lawyer. Michael Saleh is a solicitor. Read each profile, then book a consultation.
          </p>
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
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </a>
                  <Link
                    href={member.profileHref}
                    className="team-clean-card__icon-link"
                    aria-label={`View ${member.name}'s profile`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

      <section
        className="client-testimonials-section client-testimonials-section--corner-badge"
        id="client-reviews"
      >
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={indianLawyersMelbourneTestimonials} />
          <GoogleReviewSummaryBadge />
        </Container>
      </section>

      <Section tone="white" id="consultation-prep">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>How to Prepare for Your First Legal Consultation</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A little preparation helps you get more out of the first meeting. You don&apos;t need to have it all sorted. These steps will help.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>1. Identify Your Legal Issue</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Start with a rough idea of the problem. Is it a divorce, a business dispute, a property issue, a will or a criminal charge? Pick whichever is closest. If you&apos;re not sure, just tell us what happened and we&apos;ll work out where it fits.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>2. Gather Your Documents</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            What you&apos;ll need depends on the matter. A divorce calls for different papers than a business dispute. Common ones are:
          </p>
          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", lineHeight: "1.75", color: "var(--ink-secondary)" }}>
            <li>Marriage certificate and ID</li>
            <li>Court, police or tribunal papers</li>
            <li>Property records and loan statements</li>
            <li>Contracts, company records and messages</li>
            <li>Any existing will</li>
          </ul>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Can&apos;t find everything? Bring what you&apos;ve got and we&apos;ll tell you what else is needed.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>3. Prepare a Timeline</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Jot down the key dates: when you married or separated, when the dispute began, and any earlier court steps. If you have a court date or a letter with a deadline, let us know as soon as you can. Some time limits are short.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>4. List Your Questions</h3>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Most people want to know their options, what happens next, how long it could take and what it might cost. Write your questions down so you don&apos;t forget them once you&apos;re in the meeting.
          </p>
          <h3 style={{ marginTop: "1.75rem", fontSize: "1.25rem" }}>5. Discuss the Next Steps</h3>
          <hr className="ajay-profile-divider" />
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We may need to read through your documents before we can advise on your options. We can&apos;t promise an outcome, a timeframe or a fee until we&apos;ve looked at your matter.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            To request a consultation, use our <Link href="/contact/">contact page</Link>, call{" "}
            {businessDetails.nationalLine} or {businessDetails.phone}, or email{" "}
            <a href={businessDetails.emailMailto}>{businessDetails.email}</a>. We can meet by phone, secure video or at
            our Collins Street CBD office. Tell us your preferred language when you book.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="office">
        <div className="location-grid">
          <div>
            <span className="eyebrow">Collins Street</span>
            <h2>Our Melbourne Office</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--ink)" }}>
              The office is at Level 8, 278 Collins Street, Melbourne VIC 3000, between Swanston and Elizabeth Streets. Trams on Collins Street stop nearby.
            </p>
            <p style={{ color: "var(--ink-secondary)", lineHeight: "1.7", marginTop: "1rem" }}>
              Book a consultation to talk through a family law matter, a business or commercial dispute, or a will.
            </p>
            <address style={{ fontStyle: "normal", margin: "1.5rem 0", color: "var(--navy-950)", fontWeight: 600 }}>
              Level 8, 278 Collins Street,<br />
              Melbourne VIC 3000
            </address>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <ButtonLink href="/contact" variant="primary">
                Book a Consultation
              </ButtonLink>
              <ButtonLink
                href="https://www.google.com/maps/dir/?api=1&destination=Level+8,+278+Collins+Street+Melbourne+VIC+3000"
                variant="secondary"
              >
                Get Directions
              </ButtonLink>
            </div>
          </div>
          <div className="office-map-frame" aria-label="Map of the Bansal Lawyers Collins Street office">
            <iframe
              title="Bansal Lawyers Melbourne Office Location"
              src="https://maps.google.com/maps?q=Level%208,%20278%20Collins%20Street,%20Melbourne%20VIC%203000&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq
          items={indianLawyersMelbourneFaqs}
          title="Frequently Asked Questions"
          subtitle="Questions Indian families and business owners ask before they book."
          contactTitle="Want advice on your own matter?"
          contactButtonLabel="Book a Consultation"
          contactHref="/contact"
        />
      </Section>
      </div>

      <CtaSection
        id="speak-with-us"
        title="Speak to an Indian Lawyer in Melbourne Today"
        text={
          <>
            <p>
              Legal trouble can feel confusing, but the right advice early on makes things simpler. Our Indian lawyers in
              Melbourne act in family, criminal, civil, commercial and dispute matters, and can also help with your will,
              explaining every step in English, Hindi or Punjabi. Meet us on Collins Street or online, from anywhere in
              Australia or India. Call {businessDetails.nationalLine} and speak to a lawyer who understands your situation.
            </p>
            <p style={{ marginTop: "1rem" }}>
              <strong>Office:</strong> {businessDetails.address}
              <br />
              <strong>Phone:</strong>{" "}
              <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLineDisplay}</a> |{" "}
              <strong>Mobile:</strong> <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>
              <br />
              <strong>Email:</strong>{" "}
              <a href={businessDetails.emailMailto}>{businessDetails.email}</a>
              <br />
              <strong>Hours:</strong> {officeHoursDescription} Melbourne time
            </p>
          </>
        }
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: `Call ${businessDetails.phone}`, href: businessDetails.phoneTel }}
        phone={businessDetails.nationalLine}
        phoneLabel="Call the Office"
        badges={[
          "English, Hindi and Punjabi",
          "Collins Street and online consultations",
          "Clients across Australia and in India",
        ]}
      />
    </>
  );
}
