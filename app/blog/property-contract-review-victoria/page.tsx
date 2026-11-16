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
import { propertyContractReviewVictoriaFaqs } from "@/lib/property-contract-review-victoria-faqs";
import { createPropertyContractReviewVictoriaBlogGraphSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Property Contract Review Victoria: What to Check Pre-Sign | Bansal Lawyers",
  description:
    "Property contract review Victoria: what to check in the Section 32, special conditions, title, cooling-off and settlement terms before you sign.",
  path: "/blog/property-contract-review-victoria",
  keywords: [
    "Property Contract Review Victoria",
    "Property Contract Review Melbourne",
    "Section 32 Vendor Statement",
    "Contract of Sale Victoria",
    "Special Conditions in Property Contracts",
    "Cooling-Off Period Victoria",
    "Property Lawyers Melbourne",
  ],
  image: "/images/blog/property-contract-review-victoria.jpg",
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Property Contract Review Victoria" },
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

export default function PropertyContractReviewVictoriaPage() {
  return (
    <>
      <StructuredData
        data={createPropertyContractReviewVictoriaBlogGraphSchema(
          propertyContractReviewVictoriaFaqs
        )}
      />

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
              What to Check Before Signing a Property Contract in Victoria
            </h1>
            <DynamicArticleMeta
              publishedDate="Nov 16, 2026"
              category="Property Law"
              initialWords={1950}
              initialReadTime="8 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Section 32 & Contract Review",
          "Victorian Property Law",
          "Auction & Private Sale Advice",
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
                src="/images/blog/property-contract-review-victoria.jpg"
                alt="What to check before signing a property contract in Victoria — Bansal Lawyers"
                width={1024}
                height={580}
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
                  Signing a property contract in Victoria is a point of no return. Once you sign, you&apos;re generally
                  bound by what&apos;s in the contract unless the vendor agrees to change it, or a limited right such as
                  cooling-off still applies.
                </p>
                <p style={{ fontSize: "1.05rem", margin: 0 }}>
                  This guide walks through what to check in the contract of sale and Section 32 vendor statement before
                  you sign: special conditions, title and easements, planning controls, cooling-off rights, settlement
                  terms, and what&apos;s changing with Section 32 timing in 2026 reforms.
                </p>
              </section>

              <section>
                <h2 style={{ ...h2Style, marginTop: 0 }}>Why the review has to happen before you sign</h2>
                <p style={{ marginBottom: "1rem" }}>
                  After you sign, you can&apos;t change the contract just because you&apos;ve spotted a problem. The
                  vendor has to agree to any change, and they often won&apos;t unless you have leverage, such as a
                  condition you can rely on to exit.
                </p>
                <p style={{ margin: 0 }}>
                  Consumer Affairs Victoria and the{" "}
                  <a
                    href="https://lawhandbook.org.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Law Handbook
                  </a>{" "}
                  both treat signing as the critical step. Get the contract and Section 32 reviewed in writing before you
                  sign, not after.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>What a Section 32 vendor statement is</h2>
                <p style={{ marginBottom: "1rem" }}>
                  The Section 32 statement is the vendor&apos;s disclosure document. In Victoria, the seller must give it
                  to you before you sign the contract of sale.
                </p>
                <p style={{ margin: 0 }}>
                  It covers matters such as mortgages and charges, easements and restrictions on the title, planning
                  controls and notices, and rates and taxes. It doesn&apos;t replace a full contract review, but
                  it&apos;s a starting point for title, planning and disclosure issues.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>What&apos;s changing with Section 32 timing</h2>
                <p style={{ marginBottom: "1rem" }}>
                  This is where a lot of online advice is out of date. The{" "}
                  <em>Consumer Legislation Amendment Act 2026</em> (Vic) received Royal Assent on 8 September 2026. So the
                  reform is no longer a proposal, but it isn&apos;t in force either. CAV lists the earlier-availability rule
                  as an upcoming change starting 1 June 2027.
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
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>
                          Type of sale
                        </th>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>Today</th>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>
                          From 1 June 2027 (per CAV)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Auction or fixed-date sale",
                          "Given before you sign",
                          "Available at least 14 days before the sale",
                        ],
                        [
                          "Advertised private sale",
                          "Given before you sign",
                          "Available within 14 days after the property is advertised",
                        ],
                        [
                          "Not advertised, or sold within 14 days of advertising",
                          "Given before you sign",
                          "Given before you sign",
                        ],
                      ].map(([type, today, from2027], index) => (
                        <tr
                          key={type}
                          style={{
                            borderBottom: "1px solid var(--line)",
                            background: index % 2 === 1 ? "var(--sand-50)" : undefined,
                          }}
                        >
                          <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>{type}</td>
                          <td style={{ padding: "0.85rem 1rem" }}>{today}</td>
                          <td style={{ padding: "0.85rem 1rem" }}>{from2027}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ marginBottom: "1rem" }}>
                  Correct as of November 2026. Start dates can move, so check the{" "}
                  <a
                    href="https://www.consumer.vic.gov.au/housing/buying-and-selling-property"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CAV page
                  </a>{" "}
                  for current dates.
                </p>
                <p style={{ margin: 0 }}>
                  Until commencement, the old rule applies: the seller must give you the Section 32 before you sign.
                  Don&apos;t assume you&apos;ll get 14 days to read it.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>What to check before you sign</h2>
                <p style={{ marginBottom: "1rem" }}>
                  A practical pre-sign checklist combines the Section 32, the contract of sale, and any special conditions
                  the agent or vendor has added.
                </p>
                <ol style={{ margin: 0, paddingLeft: "1.35rem", display: "grid", gap: "0.85rem" }}>
                  <li>
                    <strong>Title and easements.</strong> Check what&apos;s registered on the title and whether
                    easements or encumbrances limit what you can build or use the land for.
                  </li>
                  <li>
                    <strong>Planning controls.</strong> Read the planning and zoning information in the Section 32 and
                    confirm it matches what you expect for the property and your plans.
                  </li>
                  <li>
                    <strong>Building permits.</strong> Look for evidence of permits for renovations or structures, and
                    flags such as bushfire-prone or heritage overlays where they affect cost or use.
                  </li>
                  <li>
                    <strong>Owners corporation.</strong> For apartments and units, review owners corporation certificates,
                    fees, and rules in the Section 32 pack.
                  </li>
                  <li>
                    <strong>The basics.</strong> Confirm property details, settlement date, purchase price, and
                    inclusions and exclusions match what you were told. Guides such as{" "}
                    <a
                      href="https://www.nab.com.au/personal/life-moments/home-property/buy-next-home/checklist"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NAB&apos;s buying checklist
                    </a>{" "}
                    are a useful cross-check, but they don&apos;t replace legal advice.
                  </li>
                  <li>
                    <strong>Deposit.</strong> Check when the deposit is due and who holds it. From 1 July 2027, early
                    release of a deposit will need an express condition in the contract.
                  </li>
                  <li>
                    <strong>Special conditions.</strong> These are usually where contracts differ most. Read each
                    condition and confirm dates, outcomes, and what happens if a condition isn&apos;t met.
                  </li>
                </ol>
              </section>

              <section>
                <h2 style={h2Style}>Special conditions that catch buyers out</h2>
                <p style={{ marginBottom: "1rem" }}>
                  Special conditions are extra clauses in the contract of sale. They might protect the buyer, the seller,
                  or both, for example subject to finance or a satisfactory building inspection.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Problems often come from vague wording: no clear deadline, no stated outcome if the condition
                  fails, or a condition you assumed was included but isn&apos;t written in the contract.
                </p>
                <ul style={{ margin: "0 0 1rem", paddingLeft: "1.35rem", display: "grid", gap: "0.5rem" }}>
                  <li>A finance or inspection condition with no clear date.</li>
                  <li>No stated outcome if the condition isn&apos;t met.</li>
                  <li>A condition you assumed was included but isn&apos;t.</li>
                </ul>
                <p style={{ margin: 0 }}>
                  If a condition matters to you, it needs to be in writing, with a date and a consequence. A{" "}
                  <Link href="/property-lawyers-melbourne/property-contract-review-lawyer-melbourne/">
                    property contract review lawyer
                  </Link>{" "}
                  can flag gaps before you sign.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>Cooling-off rights, and when you don&apos;t get them</h2>
                <p style={{ marginBottom: "1rem" }}>
                  For private sales of residential property in Victoria, there is a cooling-off period of three clear
                  business days, starting the day after you sign. If you cool off, you get a refund of what you&apos;ve
                  paid, less $100 or 0.2% of the purchase price, whichever is greater.
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
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }} />
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>
                          Private sale
                        </th>
                        <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>Auction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Cooling-off", "Three clear business days", "None, at or within three clear business days before or after the auction"],
                        ["Conditions in the contract", "Can be negotiated", "Can't be added without the vendor's agreement"],
                        ["Subject to finance", "Can be negotiated", "Not available without the vendor's agreement"],
                      ].map(([label, priv, auction], index) => (
                        <tr
                          key={label}
                          style={{
                            borderBottom: "1px solid var(--line)",
                            background: index % 2 === 1 ? "var(--sand-50)" : undefined,
                          }}
                        >
                          <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>{label}</td>
                          <td style={{ padding: "0.85rem 1rem" }}>{priv}</td>
                          <td style={{ padding: "0.85rem 1rem" }}>{auction}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ marginBottom: "1rem" }}>
                  At auction, the contract is generally binding when the hammer falls. You can&apos;t add finance or
                  building conditions later without the vendor&apos;s agreement, so arrange pre-approved finance and
                  inspections beforehand.
                </p>
                <p style={{ margin: 0 }}>
                  Cooling-off also doesn&apos;t apply in some other situations, such as certain purchases by companies.
                  Check CAV guidance if you&apos;re buying in a company or trust name.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>Settlement terms to confirm</h2>
                <p style={{ margin: 0 }}>
                  Settlement is when the money and the title change hands. Contract terms decide what happens if someone
                  is late. Check that the settlement date works with your finance approval and, if you&apos;re selling a
                  home, with that sale. Confirm what the contract says about default if either side misses the date. And
                  look at who holds the deposit and under what conditions it can be released. If settlement risk is a
                  concern, speak with{" "}
                  <Link href="/property-lawyers-melbourne/property-settlement-lawyer-melbourne/">
                    settlement issues lawyers in Melbourne
                  </Link>{" "}
                  before you sign.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>When to bring a lawyer in</h2>
                <h3 style={{ ...h3Style, marginTop: 0 }}>Before you sign, or before you bid. Not after.</h3>
                <p style={{ margin: 0 }}>
                  Send the contract and the Section 32 to a lawyer as soon as you have them, particularly if you&apos;re
                  buying at auction, where you can&apos;t add conditions later. If you&apos;re still choosing a firm, see
                  our page for{" "}
                  <Link href="/property-lawyers-melbourne/buying-property-lawyer-melbourne/">
                    buying property lawyers in Melbourne
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 style={h2Style}>Conclusion</h2>
                <p style={{ margin: 0 }}>
                  Before you sign a Victorian property contract, get the Section 32 as early as you can, read the special
                  conditions carefully, and line up a written review of both documents. The 14-day Section 32 rule is on
                  the way, but as of November 2026 the seller must still give you the Section 32 before you sign. Use
                  cooling-off wisely on private sales, and treat auction purchases as unconditional unless the vendor has
                  agreed otherwise in writing.
                </p>
              </section>

              <section id="faqs">
                <h2 style={{ ...h2Style, marginTop: 0 }}>Frequently Asked Questions</h2>
                {propertyContractReviewVictoriaFaqs.map((faq, index) => (
                  <div key={faq.question}>
                    <h3 style={faqStyle}>
                      {index + 1}. {faq.question}
                    </h3>
                    <p style={{ margin: index === propertyContractReviewVictoriaFaqs.length - 1 ? 0 : "0 0 1rem" }}>
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
                  Need a Property Contract Review Before You Sign?
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Bansal Lawyers reviews contracts of sale and Section 32 statements for buyers across Melbourne and
                  Victoria, including auction purchases where there is no second chance to add conditions.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <ButtonLink href="/book-an-appointment" variant="primary">
                    Book a Consultation
                  </ButtonLink>
                  <ButtonLink
                    href="/property-lawyers-melbourne/property-contract-review-lawyer-melbourne/"
                    variant="secondary"
                  >
                    Property Contract Review
                  </ButtonLink>
                </div>
              </div>
            </article>

            <RecommendedArticles currentHref="/blog/property-contract-review-victoria" />
          </div>
        </Container>
      </Section>
    </>
  );
}