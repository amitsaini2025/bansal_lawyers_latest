import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import { DynamicArticleMeta } from "@/components/blog/DynamicArticleMeta";
import { RecommendedArticles } from "@/components/blog/RecommendedArticles";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  Section,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { bailInVictoriaFaqs } from "@/lib/bail-in-victoria-faqs";
import { createBailInVictoriaBlogGraphSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title:
    "Bail in Victoria: How a Bail Application Works After Recent Reforms | Bansal Lawyers",
  description:
    "Bail application Victoria explained: how the tests work, what the second-strike rule means and what to prepare before your hearing. Correct as of Nov 2026.",
  path: "/blog/bail-in-victoria-bail-application-guide",
  keywords: [
    "Bail Application Victoria",
    "Bail in Victoria",
    "Bail Laws Victoria",
    "Bail Act 1977",
    "Second-Strike Rule Victoria",
    "Bail Hearing Melbourne",
    "Criminal Lawyers Melbourne",
    "Bail Conditions Victoria",
  ],
  image: "/images/blog/bail-in-victoria-bail-application-guide.jpg",
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Bail in Victoria" },
];

const h2Style = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.3rem, 2.3vw, 1.65rem)",
  color: "var(--navy-900)",
  marginTop: "1.75rem",
  marginBottom: "1rem",
  lineHeight: 1.3,
  fontWeight: 700,
} as const;

const h3Style = {
  fontFamily: "var(--font-serif)",
  fontSize: "1.15rem",
  color: "var(--navy-900)",
  marginTop: "1.35rem",
  marginBottom: "0.5rem",
  fontWeight: 700,
} as const;

const faqStyle = {
  fontFamily: "var(--font-serif)",
  fontSize: "1.15rem",
  color: "var(--navy-900)",
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
  fontWeight: 700,
} as const;

const orderedListStyle = {
  margin: "0 0 1rem",
  paddingLeft: "1.35rem",
  display: "grid",
  gap: "0.65rem",
} as const;

export default function BailInVictoriaBailApplicationGuidePage() {
  return (
    <>
      <StructuredData data={createBailInVictoriaBlogGraphSchema(bailInVictoriaFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <section
        style={{
          background: "var(--navy-900)",
          color: "var(--white)",
          padding: "clamp(2.75rem, 5.5vw, 4.25rem) 0 clamp(2.25rem, 4.5vw, 3.25rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
                lineHeight: 1.22,
                color: "var(--white)",
                margin: "0 0 1.25rem",
                fontWeight: 700,
              }}
            >
              Bail in Victoria: How a Bail Application Works After the Recent Reforms
            </h1>
            <DynamicArticleMeta
              publishedDate="Nov 19, 2026"
              category="Criminal Law"
              initialWords={2200}
              initialReadTime="9 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Bail Act 1977 Applications",
          "Magistrates' & Supreme Court",
          "Second-Strike Rule Advice",
          "Melbourne CBD & Virtual Consultations",
        ]}
      />

      <Section tone="white">
        <Container>
          <div
            style={{
              maxWidth: "56rem",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
            }}
          >
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Image
                src="/images/blog/bail-in-victoria-bail-application-guide.jpg"
                alt="Bail in Victoria — how a bail application works after recent reforms — Bansal Lawyers"
                width={1200}
                height={630}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                priority
              />
            </div>

            <article style={{ display: "grid", gap: "1.75rem", color: "var(--ink-700)", lineHeight: 1.8 }}>
              <section>
                <p style={{ fontSize: "1.08rem", marginBottom: "1rem" }}>
                  Bail applications are harder to win than they were two years ago. Since March 2025, the{" "}
                  <em>Bail Act 1977</em> (Vic) has put community safety first and applied tougher tests. A
                  &ldquo;second-strike rule&rdquo; for people charged with an indictable offence while already on bail
                  began on 31 March 2026.
                </p>
                <p style={{ fontSize: "1.05rem", margin: 0 }}>
                  This guide explains how bail applications work in Victoria today: the hearing process, the tests courts
                  apply, what the reforms changed, and what to prepare before a bail hearing. It is correct as of
                  November 2026.
                </p>
              </section>

              <section>
                <h2 style={{ ...h2Style, marginTop: 0 }}>Why bail is harder to get in Victoria now</h2>
                <p style={{ marginBottom: "1rem" }}>
                  Victorian bail law tightened in two stages. The first package started on 26 March 2025. The
                  second-strike rule started on 31 March 2026 for people on bail for an indictable offence who are
                  charged with another indictable offence.
                </p>
                <p style={{ margin: 0 }}>
                  The Victorian Government has reported that magistrates remanded offenders about 10,000 more times in
                  2025 than in 2024, a rise of more than 70%. That figure reflects tougher tests and stricter starting
                  points, not a single change in isolation.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>How does a bail application work in Victoria?</h2>
                <p style={{ marginBottom: "1rem" }}>
                  Bail means you stay in the community on conditions while your case is dealt with, instead of being held
                  in custody on remand. The <em>Bail Act 1977</em> sets the framework, which the Department of Justice
                  and Community Safety summarises in its How bail works material.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Police, a bail justice, or a court (a magistrate or judge) can decide bail. For the most serious
                  charges, only a court decides.
                </p>
                <ol style={orderedListStyle}>
                  <li>
                    <strong>Arrest and charge.</strong> Police decide first whether to grant bail or refuse it.
                  </li>
                  <li>
                    <strong>Police refusal.</strong> If police refuse bail, you are usually brought before a bail justice
                    or court for a bail hearing.
                  </li>
                  <li>
                    <strong>The hearing.</strong> Your lawyer argues for release; the prosecution may oppose bail. The
                    decision-maker applies the bail tests that apply to your charge.
                  </li>
                  <li>
                    <strong>Bail granted.</strong> You are released on conditions. Common conditions include reporting
                    to a police station, living at a set address, staying away from certain people or places, and
                    curfews.
                  </li>
                  <li>
                    <strong>Bail guarantee, if required.</strong> The court may require cash or property security from a
                    third party to support bail.
                  </li>
                  <li>
                    <strong>Bail refused.</strong> You stay in custody until the case finishes or a later application
                    succeeds.
                  </li>
                </ol>
              </section>

              <section>
                <h2 style={h2Style}>What does the Bail Act 1977 say now?</h2>
                <p style={{ marginBottom: "1rem" }}>
                  The <em>Bail Act 1977</em> still governs every bail decision in Victoria. After the 2025 changes,
                  three parts matter most.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>Community safety comes first.</strong> The <em>Bail Amendment Act 2025</em> (Vic) was passed
                  to clarify the guiding principle of maximising community safety. That principle sits in section 1B(1AA).
                  It is a guiding principle, not a test on its own.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>Remand is no longer a last resort for children.</strong> Parliament removed that principle as
                  part of the first package, according to its own summary of the reforms.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Surrounding circumstances still matter.</strong> Section 3AAA lists what a decision-maker
                  weighs, including a person&apos;s circumstances, associations, home environment and background.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>Which bail tests will a court apply?</h2>
                <p style={{ marginBottom: "1rem" }}>
                  People often talk about three bail tests as if a court picks one. It does not work that way.
                  Unacceptable risk is the base test. For more serious charges, the person must also clear a tougher
                  hurdle on top of it: compelling reason or exceptional circumstances. The charge decides which one
                  applies.
                </p>

                <h3 style={h3Style}>Unacceptable risk</h3>
                <p style={{ marginBottom: "1rem" }}>
                  This is the base test for bail applications. The decision-maker asks whether you are likely to miss
                  court, commit a serious offence on bail, interfere with witnesses or evidence, or endanger someone.
                  If conditions cannot reduce that risk to an acceptable level, bail is refused.
                </p>

                <h3 style={h3Style}>Compelling reason</h3>
                <p style={{ marginBottom: "1rem" }}>
                  This is an additional hurdle for certain serious charges. The 2025 changes expanded the list, including
                  serious gun crimes, serious arson, weapons offences such as machetes, and car theft with conduct
                  endangering life.
                </p>

                <h3 style={h3Style}>Exceptional circumstances</h3>
                <p style={{ marginBottom: "1rem" }}>
                  This is the strictest hurdle. The 2025 changes include offences such as armed robbery, aggravated
                  burglary, home invasion and carjacking.
                </p>

                <h3 style={h3Style}>High degree of probability</h3>
                <p style={{ margin: 0 }}>
                  This applies if you are accused of a listed very serious offence while already on bail for another
                  matter. The decision-maker must be satisfied there is a high degree of probability you will not commit
                  another serious offence if released. Parliament&apos;s own summary covers six specific repeat serious
                  offences. The first stage of a hearing is often working out which test applies.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>Bail tests at a glance</h2>
                <div style={{ overflowX: "auto", margin: "0.5rem 0 1rem" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      minWidth: "640px",
                      background: "var(--white)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <thead>
                      <tr style={{ background: "var(--navy-900)", color: "var(--white)" }}>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>Test</th>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>
                          Who it applies to
                        </th>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>
                          What the court needs
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Unacceptable risk",
                          "The base test for bail applications",
                          "The risk of release is not unacceptable, or conditions can reduce it to an acceptable level",
                        ],
                        [
                          "Compelling reason",
                          "Certain serious offences, such as serious gun crime, serious arson and weapons offences, and some repeat indictable offending on bail",
                          "A compelling reason bail is justified, plus passing unacceptable risk",
                        ],
                        [
                          "Exceptional circumstances",
                          "The most serious offences, such as armed robbery, home invasion and carjacking",
                          "Exceptional circumstances, plus passing unacceptable risk",
                        ],
                        [
                          "High degree of probability",
                          "A listed very serious offence allegedly committed while on bail for another",
                          "A high degree of probability the person will not reoffend, on top of the other tests",
                        ],
                      ].map(([test, applies, needs], index) => (
                        <tr
                          key={test}
                          style={{
                            borderBottom: "1px solid var(--line)",
                            background: index % 2 === 1 ? "var(--sand-50)" : undefined,
                          }}
                        >
                          <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>{test}</td>
                          <td style={{ padding: "0.85rem 1rem" }}>{applies}</td>
                          <td style={{ padding: "0.85rem 1rem" }}>{needs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--ink-500)" }}>
                  Source: Department of Justice and Community Safety, How bail works, reviewed 28 October 2026.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>What is the second-strike rule?</h2>
                <p style={{ marginBottom: "1rem" }}>
                  The second-strike rule bites when a person is on bail for an indictable offence and is charged with
                  another one. An indictable offence is a broad category of serious crime. Examples include burglary,
                  robbery, riot and affray, motor vehicle theft and assault.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  The person loses the presumption of bail. They must show a compelling reason and pass the unacceptable
                  risk test. The government confirmed the rule started on 31 March 2026.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Some lower-level offending is excluded, such as minor shoplifting, fraud and small-scale drug
                  possession. It is not automatic remand: the Attorney-General has stated people still face a bail
                  hearing, but they start further back.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>What are the new bail offences?</h2>
                <p style={{ marginBottom: "1rem" }}>
                  The 2025 reforms brought back two offences aimed at people who are already on bail.
                </p>
                <div style={{ overflowX: "auto", margin: "0.5rem 0 1rem" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      minWidth: "640px",
                      background: "var(--white)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <thead>
                      <tr style={{ background: "var(--navy-900)", color: "var(--white)" }}>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>Offence</th>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>
                          What it covers
                        </th>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>
                          Maximum penalty
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Committing an indictable offence while on bail (section 30B, Bail Act 1977)",
                          "Committing a new indictable offence while on bail",
                          "3 months' imprisonment or 30 penalty units",
                        ],
                        [
                          "Contravening a conduct condition (section 49F, Summary Offences Act 1966)",
                          "Breaking a conduct condition without reasonable excuse, such as a reporting or curfew condition. It does not apply to a child.",
                          "3 months' imprisonment or 30 penalty units",
                        ],
                      ].map(([offence, covers, penalty], index) => (
                        <tr
                          key={offence}
                          style={{
                            borderBottom: "1px solid var(--line)",
                            background: index % 2 === 1 ? "var(--sand-50)" : undefined,
                          }}
                        >
                          <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>
                            {offence}
                          </td>
                          <td style={{ padding: "0.85rem 1rem" }}>{covers}</td>
                          <td style={{ padding: "0.85rem 1rem" }}>{penalty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ margin: 0 }}>
                  Breaking conditions can lead to arrest and being taken to court, where conditions may be changed or
                  revoked. The section 30B offence links to the second-strike rule, which can pull a person into a
                  tougher test.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>What happens if bail is refused?</h2>
                <p style={{ marginBottom: "1rem" }}>
                  You stay in custody until the case is decided or a later application succeeds. That is not the end of
                  the road.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  The{" "}
                  <a
                    href="https://www.magistratescourt.vic.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Magistrates&apos; Court
                  </a>{" "}
                  has a form for a further bail application. The Supreme Court hears applications and appeals under
                  practice note SC CR 2.
                </p>
                <p style={{ margin: 0 }}>
                  A second application works best when something has changed, such as a confirmed treatment place, a new
                  address or a different guarantor.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>What should you prepare before a bail hearing?</h2>
                <p style={{ marginBottom: "1rem" }}>
                  The Supreme Court publishes a bail application checklist (August 2025). In practice, you will usually
                  need a supporting affidavit with exhibits, including details of drug or alcohol support and housing
                  services.
                </p>
                <p style={{ marginBottom: "0.75rem" }}>Worth sorting out early:</p>
                <ul style={{ margin: "0 0 1rem", paddingLeft: "1.35rem", display: "grid", gap: "0.5rem" }}>
                  <li>A confirmed address where you will live if released</li>
                  <li>Letters showing work, study or family responsibilities</li>
                  <li>A treatment or support place, for drug, alcohol or housing issues</li>
                  <li>A bail guarantor who understands the stakes</li>
                  <li>The charge sheet and any prior record for your lawyer to work out which test applies</li>
                </ul>
              </section>

              <section>
                <h2 style={h2Style}>Does a bail application affect your visa?</h2>
                <p style={{ margin: 0 }}>
                  For non-citizens, a criminal charge can have consequences under section 501 of the{" "}
                  <em>Migration Act 1958</em> (Cth). The Department of Home Affairs may refuse or cancel a visa based on
                  the character test. See the Department&apos;s guidance on the{" "}
                  <a
                    href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    section 501 character test and visa cancellation
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 style={h2Style}>Getting advice on a bail application</h2>
                <p style={{ marginBottom: "1rem" }}>
                  Whether bail is realistic depends on which test applies to your charge and whether you were already on
                  bail when the new charge was laid. Early advice lets you line up housing, support and documents before
                  the hearing.
                </p>
                <p style={{ margin: 0 }}>
                  If you need help now, speak with our{" "}
                  <Link href="/criminal-lawyers-melbourne/">criminal lawyers in Melbourne</Link> or our dedicated{" "}
                  <Link href="/criminal-lawyers-melbourne/bail-application-lawyer-melbourne/">
                    bail application lawyers
                  </Link>
                  . This guide is general information, not legal advice. Victorian bail law has changed significantly
                  since March 2025.
                </p>
              </section>

              <section id="faqs">
                <h2 style={{ ...h2Style, marginTop: 0 }}>Frequently asked questions</h2>
                {bailInVictoriaFaqs.map((faq, index) => (
                  <div key={faq.question}>
                    <h3 style={faqStyle}>{faq.question}</h3>
                    <p style={{ margin: index === bailInVictoriaFaqs.length - 1 ? 0 : "0 0 1rem" }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </section>

              <div
                style={{
                  background: "var(--navy-900)",
                  color: "var(--white)",
                  padding: "2.25rem 2rem",
                  borderRadius: "var(--radius-md)",
                  marginTop: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--white)",
                    marginTop: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  Need Urgent Bail Advice?
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Bansal Lawyers assists with urgent bail applications in the Magistrates&apos; Court, Bail and Remand
                  Court and the Supreme Court, including matters caught by the second-strike rule and compelling-reason
                  thresholds.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <ButtonLink href="/book-an-appointment" variant="primary">
                    Book a Consultation
                  </ButtonLink>
                  <ButtonLink
                    href="/criminal-lawyers-melbourne/bail-application-lawyer-melbourne/"
                    variant="secondary"
                  >
                    Bail Application Lawyers
                  </ButtonLink>
                </div>
              </div>
            </article>

            <RecommendedArticles currentHref="/blog/bail-in-victoria-bail-application-guide" />
          </div>
        </Container>
      </Section>
    </>
  );
}