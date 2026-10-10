import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  Faq,
  Hero,
  ProcessSteps,
  Section,
  SectionHeader,
} from "@/components/ui";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createContactPageSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";
import { businessDetails } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Bansal Lawyers | Melbourne Lawyers on Collins Street",
  description:
    "Contact Bansal Lawyers in Melbourne CBD for legal support in migration, family, criminal, commercial, business, property, and conveyancing matters. Call 0422 905 860 or book a consultation.",
  path: "/contact",
  keywords: [
    "Contact Bansal Lawyers",
    "Melbourne lawyers",
    "law firm Melbourne CBD",
    "contact lawyers Melbourne",
    "legal consultation Melbourne",
    "migration lawyer Melbourne",
    "family lawyer Melbourne",
    "criminal lawyer Melbourne",
    "commercial lawyer Melbourne",
    "property lawyer Melbourne",
    "lawyers Collins Street Melbourne",
  ],
});

const contactFaqs = [
  {
    question: "How can I contact Bansal Lawyers?",
    answer:
      "You can contact our Melbourne office by calling 0422 905 860, calling our national line on 1300 226 725, emailing Info@bansallawyers.com.au, or submitting the message form on this page.",
  },
  {
    question: "Where is Bansal Lawyers located?",
    answer:
      "Our office is situated at Level 1, 530 Little Collins Street, Melbourne VIC 3000, Australia. We are located in the heart of the Melbourne CBD, close to public transport.",
  },
  {
    question: "Can I book a consultation online?",
    answer:
      "Yes. You can request a legal consultation by submitting the enquiry form on our website or by contacting our office by phone or email. Our team will coordinate an in-person or secure video consultation.",
  },
  {
    question: "What legal matters can I contact Bansal Lawyers about?",
    answer:
      "We assist with migration and visa matters, family law, criminal defence, commercial and business law, property and conveyancing, and civil dispute resolution.",
  },
  {
    question: "Do you assist clients outside Melbourne?",
    answer:
      "Yes. In addition to serving clients in Melbourne, we assist clients located throughout regional Victoria, across Australia, and international clients requiring legal representation in Australian law.",
  },
  {
    question: "What should I include in my enquiry message?",
    answer:
      "Please provide a short summary of your situation, the area of law involved, and any critical deadlines or court dates. You do not need to send confidential files in your first message.",
  },
];

const nextSteps = [
  {
    title: "1. Submit your enquiry or call the office",
    description:
      "Contact our Melbourne team by phone, email, or our online form with a brief summary of your legal matter.",
  },
  {
    title: "2. The team reviews your matter and contacts you",
    description:
      "A member of our team reviews your information and reaches out during business hours to discuss your situation.",
  },
  {
    title: "3. You can schedule a consultation to discuss your legal options",
    description:
      "Arrange an in-person or video consultation where we examine your documents and explain practical next steps.",
  },
];

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Bansal Lawyers" },
  ];

  return (
    <>
      {/* Schema.org Structured Data */}
      <StructuredData data={createContactPageSchema()} />
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(contactFaqs)} />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={breadcrumbs} />

      {/* H1 & Hero Section */}
      <Hero
        eyebrow="Contact Bansal Lawyers"
        title="Let's Start Your Legal Journey"
        intro="Get expert legal assistance from our Melbourne law firm. We're here to help you navigate complex legal matters with confidence and clarity."
        primaryAction={{ label: "Send Message Now", href: "#contact-form" }}
        secondaryAction={{
          label: "Call Us Directly",
          href: "tel:0422905860",
        }}
      />

      {/* Section 3: Contact Form Section */}
      <Section tone="white" id="contact-form">
        <Container>
          <div className="contact-form-container">
            <SectionHeader
              eyebrow="Online Message Form"
              title="Send Us a Message"
              intro="Send your details below, and our Melbourne team will review your matter and respond during business hours."
              align="center"
            />
            <div className="contact-form-wrapper contact-form-wrapper--centered">
              <ContactForm turnstileSiteKey={getTurnstileSiteKey()} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 1: Contact Intro */}
      <Section tone="white">
        <Container>
          <div className="contact-intro-grid">
            <div className="contact-intro-main">
              <h2>Contact Our Melbourne Lawyers</h2>
              <p className="contact-intro-lead">
                Bansal Lawyers provides expert legal services from our Collins Street office in the Melbourne CBD. Our team assists clients across Victoria and Australia with migration and visa matters, family law, criminal defence, commercial and business law, and property and conveyancing.
              </p>
              <p className="contact-intro-text">
                When you contact us, we listen to your situation, explain your legal options in plain language, and outline sensible next steps. You can reach us by phone, email, or the form below — we aim to respond promptly during business hours, Monday to Friday.
              </p>
              <div className="contact-intro-tags">
                <span className="contact-intro-tag">Collins Street CBD Chambers</span>
                <span className="contact-intro-tag">Direct Solicitor Communication</span>
                <span className="contact-intro-tag">Strict Professional Confidentiality</span>
              </div>
            </div>

            <div className="contact-intro-card">
              <div className="contact-intro-card__header">
                <span className="contact-intro-card__badge">Priority Legal Intake</span>
                <h3 className="contact-intro-card__title">Urgent Matters & Direct Assistance</h3>
              </div>

              <div className="contact-intro-card__body">
                <p className="contact-intro-card__notice">
                  If your matter is urgent, call our legal team directly or schedule a dedicated consultation:
                </p>

                <div className="contact-channel-row">
                  <span className="contact-channel-row__label">Direct Solicitor Mobile</span>
                  <a href="tel:0422905860" className="contact-channel-row__value">
                    0422 905 860
                  </a>
                </div>

                <div className="contact-channel-row">
                  <span className="contact-channel-row__label">National Hotline</span>
                  <a href="tel:1300226725" className="contact-channel-row__value">
                    1300 BANSAL (1300 226 725)
                  </a>
                </div>

                <div className="contact-intro-card__action">
                  <a href="#contact-form">
                    Book Consultation Online →
                  </a>
                </div>
              </div>

              <div className="contact-intro-card__footer">
                <span className="contact-intro-card__lang-label">Languages:</span>
                <span className="contact-intro-card__languages">English, Hindi, Punjabi, and Arabic</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 2: Contact Details */}
      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Communication Channels"
            title="Get In Touch"
            intro="Connect directly with our Melbourne legal team through any of the channels below."
          />
          <div className="contact-cards-grid">
            {/* Card 1: Visit Our Office */}
            <div className="contact-detail-card">
              <div className="contact-detail-card__header">
                <span className="contact-detail-card__num">01</span>
                <span className="contact-detail-card__tag">CBD Office</span>
              </div>
              <h3>Visit Our Office</h3>
              <address>
                Level 1, 530 Little Collins Street,<br />
                Melbourne VIC 3000,<br />
                Australia
              </address>
              <a
                href="https://g.co/kgs/Hw16bN8"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps →
              </a>
            </div>

            {/* Card 2: Call Us Now */}
            <div className="contact-detail-card">
              <div className="contact-detail-card__header">
                <span className="contact-detail-card__num">02</span>
                <span className="contact-detail-card__tag">Direct Phone</span>
              </div>
              <h3>Call Us Now</h3>
              <p>
                Mobile: <a href="tel:0422905860">(+61) 0422 905 860</a><br />
                National: <a href="tel:1300226725">1300 BANSAL (1300 226 725)</a>
              </p>
              <a href="tel:0422905860">Call Direct Now →</a>
            </div>

            {/* Card 3: Email Us */}
            <div className="contact-detail-card">
              <div className="contact-detail-card__header">
                <span className="contact-detail-card__num">03</span>
                <span className="contact-detail-card__tag">Direct Email</span>
              </div>
              <h3>Email Us</h3>
              <p>
                Send questions or initial documents directly to our team inbox.
              </p>
              <a href="mailto:Info@bansallawyers.com.au">Info@bansallawyers.com.au</a>
            </div>

            {/* Card 4: Book a Consultation */}
            <div className="contact-detail-card">
              <div className="contact-detail-card__header">
                <span className="contact-detail-card__num">04</span>
                <span className="contact-detail-card__tag">Consultation</span>
              </div>
              <h3>Book an Appointment</h3>
              <p>
                Schedule an in-person CBD consultation, phone call, or secure video meeting.
              </p>
              <a href="#contact-form">Schedule Consultation →</a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 5: Office Location Section */}
      <Section tone="white" id="office-location">
        <Container>
          <div className="location-grid">
            <div>
              <span className="eyebrow">Little Collins Street Location</span>
              <h2>Our Melbourne CBD Office</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--ink)" }}>
                Bansal Lawyers is located on Little Collins Street in the heart of Melbourne CBD, making it accessible for city professionals, suburban residents, and interstate clients visiting the city.
              </p>
              <p style={{ color: "var(--ink-secondary)", lineHeight: "1.7", marginTop: "1rem" }}>
                Our office is easily reached by train and tram, with several tram routes running along nearby Collins Street and Bourke Street.
              </p>
              <address style={{ fontStyle: "normal", margin: "1.5rem 0", color: "var(--navy-950)", fontWeight: 600 }}>
                Level 1, 530 Little Collins Street,<br />
                Melbourne VIC 3000, Australia
              </address>
              <ButtonLink
                href="https://www.google.com/maps/dir/?api=1&destination=Level+1%2C+530+Little+Collins+Street+Melbourne+VIC+3000"
                variant="primary"
              >
                Get Directions
              </ButtonLink>
            </div>

            <div className="office-map-frame" aria-label="Google Map Embed Location">
              <iframe
                title="Bansal Lawyers Melbourne Office Location"
                src="https://maps.google.com/maps?q=Level%201%2C%20530%20Little%20Collins%20Street,%20Melbourne%20VIC%203000&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 6: Response Time / What Happens Next */}
      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="Our Process"
            title="What Happens After You Contact Us?"
            intro="We ensure our intake process is calm, clear, and reassuring from your first point of contact."
          />
          <ProcessSteps items={nextSteps} />
        </Container>
      </Section>

      {/* Section 7: FAQ Section */}
      <Section tone="white" id="faqs">
        <Faq items={contactFaqs} subtitle="Common questions regarding contacting our office, scheduling legal consultations, and discussing your matter." />
      </Section>

      {/* Section 8: Final CTA */}
      <Section tone="navy">
        <Container>
          <div className="section-header section-header--center">
            <span className="eyebrow eyebrow--light">Take the Next Step</span>
            <h2>Need Legal Guidance? Contact Bansal Lawyers Today</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.88)", fontSize: "1.12rem", lineHeight: "1.7" }}>
              Some legal matters have strict deadlines and require early attention. Speak with our Melbourne legal team to discuss your situation, explore your legal options, and plan the right path forward.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "2rem",
              }}
            >
              <ButtonLink href="#contact-form" variant="light">
                Book a Consultation
              </ButtonLink>
              <ButtonLink href={businessDetails.phoneTel} variant="white-outline">
                Call {businessDetails.phone}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
