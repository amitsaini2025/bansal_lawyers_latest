import Image from "next/image";
import Link from "next/link";
import { Container, CtaSection, Section, TrustBar } from "@/components/ui";

type FocusArea = { title: string; description: string };

type PractitionerProfileProps = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  summary: string;
  credentials: Array<{ label: string; value: string }>;
  trustItems: string[];
  biography: string[];
  focusAreas: FocusArea[];
  ctaText: string;
};

export function PractitionerProfile({
  name, role, image, imageAlt, summary, credentials, trustItems, biography, focusAreas, ctaText,
}: PractitionerProfileProps) {
  return (
    <>
      <section className="practitioner-hero">
        <Container>
          <div className="practitioner-hero__grid">
            <div className="practitioner-hero__content">
              <p className="practitioner-hero__label">Bansal Lawyers</p>
              <h1>{name}</h1>
              <p className="practitioner-hero__role">{role}</p>
              <p className="practitioner-hero__summary">{summary}</p>
              <div className="practitioner-hero__actions">
                <Link href="/contact" className="button button--light">Book a Consultation</Link>
                <a href="tel:+61422905860" className="button button--white-outline">Call 0422 905 860</a>
              </div>
            </div>
            <div className="practitioner-hero__portrait">
              <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 760px) calc(100vw - 3rem), 420px" />
            </div>
          </div>
        </Container>
      </section>
      <TrustBar items={trustItems} />
      <Section tone="white" id="biography" className="practitioner-profile">
        <div className="practitioner-profile__grid">
          <div className="practitioner-profile__biography">
            <p className="practitioner-profile__label">Professional profile</p>
            <h2>Clear advice and focused representation</h2>
            <div className="practitioner-profile__prose">
              {biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="practitioner-profile__focus">
              <h2>Practice focus</h2>
              <div className="practitioner-profile__focus-grid">
                {focusAreas.map((area) => (
                  <article className="practitioner-focus-card" key={area.title}>
                    <h3>{area.title}</h3><p>{area.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <aside className="practitioner-profile__details" aria-label={`${name} professional details`}>
            <h2>At a glance</h2>
            <dl>{credentials.map((credential) => <div key={credential.label}><dt>{credential.label}</dt><dd>{credential.value}</dd></div>)}</dl>
            <Link href="/contact" className="button button--primary">Book a Consultation</Link>
          </aside>
        </div>
      </Section>
      <CtaSection
        title={ctaText}
        text={`Speak with ${name} and the Bansal Lawyers team about your legal matter.`}
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call 0422 905 860", href: "tel:+61422905860" }}
        phone="0422 905 860"
        phoneLabel="Direct Practitioner Contact"
        badges={["Melbourne CBD consultations", "Virtual appointments", "Clear legal advice"]}
      />
    </>
  );
}
