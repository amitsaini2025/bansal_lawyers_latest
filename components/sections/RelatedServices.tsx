import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { megaMenuModules, type SubPageItem } from "@/lib/megaMenuData";

export type RelatedServiceLink = {
  title: string;
  href: string;
  description: string;
};

function normalise(path: string) {
  let value = path.trim();
  if (!value.startsWith("/")) value = `/${value}`;
  if (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1);
  return value.toLowerCase();
}

function labelFromHref(href: string) {
  const slug = href.split("/").filter(Boolean).pop() ?? "";
  return slug
    .split("-")
    .map((word) => {
      if (word === "art") return "ART";
      if (word === "ivo") return "IVO";
      if (word === "ndas") return "NDAs";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/** One cross-practice page where the subject matter genuinely overlaps. */
const crossPractice: Record<string, RelatedServiceLink> = {
  "/family-lawyers-melbourne/intervention-order-lawyer-melbourne": {
    title: "Intervention Order Breach Lawyer Melbourne",
    href: "/criminal-lawyers-melbourne/intervention-order-breach-lawyer-melbourne/",
    description: "A breach of an intervention order is a criminal charge, dealt with separately from the order itself.",
  },
  "/family-lawyers-melbourne/family-violence-lawyer-melbourne": {
    title: "Family Violence Criminal Lawyer Melbourne",
    href: "/criminal-lawyers-melbourne/family-violence-criminal-lawyer-melbourne/",
    description: "Criminal charges that arise alongside family violence and parenting issues.",
  },
  "/criminal-lawyers-melbourne/family-violence-criminal-lawyer-melbourne": {
    title: "Family Violence Lawyer Melbourne",
    href: "/family-lawyers-melbourne/family-violence-lawyer-melbourne/",
    description: "Parenting, safety and family law issues that sit beside a criminal charge.",
  },
  "/criminal-lawyers-melbourne/intervention-order-breach-lawyer-melbourne": {
    title: "Intervention Order Lawyer Melbourne",
    href: "/family-lawyers-melbourne/intervention-order-lawyer-melbourne/",
    description: "Applying for, responding to, or varying an intervention order.",
  },
  "/civil-lawyers-melbourne/property-related-dispute-lawyer-melbourne": {
    title: "Property Dispute Lawyer Melbourne",
    href: "/property-lawyers-melbourne/property-dispute-lawyer-melbourne/",
    description: "Lease, contract and settlement disagreements handled with the property team.",
  },
  "/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne": {
    title: "Commercial Dispute Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/",
    description: "Business contract disputes, partner disagreements and commercial claims.",
  },
  "/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne": {
    title: "Debt Recovery Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/debt-recovery-lawyer-melbourne/",
    description: "Unpaid invoices, letters of demand and commercial debt recovery.",
  },
  "/civil-lawyers-melbourne/business-related-dispute-lawyer-melbourne": {
    title: "Commercial Dispute Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/",
    description: "Supplier, partner and payment disputes on the commercial side of the practice.",
  },
  "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne": {
    title: "Civil Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/",
    description: "Notices, negotiation and civil claims when a business disagreement needs a formal step.",
  },
  "/commercial-lawyers-melbourne/debt-recovery-lawyer-melbourne": {
    title: "Debt Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne/",
    description: "Disputed debts, demand letters and civil recovery steps.",
  },
  "/commercial-lawyers-melbourne/legal-notice-lawyer-melbourne": {
    title: "Legal Notice Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/legal-notice-lawyer-melbourne/",
    description: "Letters of demand and breach notices prepared on the civil side of the practice.",
  },
  "/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne": {
    title: "Commercial Lease Lawyer Melbourne",
    href: "/property-lawyers-melbourne/commercial-lease-lawyer-melbourne/",
    description: "Lease assignments and landlord consent that often travel with a business sale.",
  },
  "/property-lawyers-melbourne/commercial-lease-lawyer-melbourne": {
    title: "Business Sale and Purchase Lawyer Melbourne",
    href: "/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne/",
    description: "Sale contracts and lease transfers when a business changes hands with the premises.",
  },
  "/property-lawyers-melbourne/property-dispute-lawyer-melbourne": {
    title: "Property-Related Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/property-related-dispute-lawyer-melbourne/",
    description: "When a property disagreement needs formal notices, negotiation or court documents.",
  },
  "/immigration-lawyers-melbourne/character-section-501-lawyer-melbourne": {
    title: "Criminal Defence Lawyer Melbourne",
    href: "/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne/",
    description: "Criminal charges that can also affect a visa or a character decision.",
  },
  "/family-lawyers-melbourne/property-settlement-lawyer-melbourne": {
    title: "Binding Financial Agreement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
    description: "A private financial agreement is one way to record a property settlement.",
  },
};

function toCard(item: SubPageItem): RelatedServiceLink {
  return {
    title: labelFromHref(item.href),
    href: item.href,
    description: item.description ?? "",
  };
}

export function RelatedServices({
  currentPath,
  links,
  heading = "Related services",
  intro,
}: {
  currentPath?: string;
  links?: RelatedServiceLink[];
  heading?: string;
  intro?: string;
}) {
  const path = currentPath ? normalise(currentPath) : "";
  const practice = megaMenuModules.find(
    (module) =>
      normalise(module.href) === path ||
      module.subPages.some((page) => normalise(page.href) === path),
  );

  let featured: RelatedServiceLink[] = links ?? [];
  let more: RelatedServiceLink[] = [];
  let practiceName = "";
  let practiceHref = "";

  if (!links && practice && path && normalise(practice.href) !== path) {
    practiceName = labelFromHref(practice.href);
    practiceHref = practice.href.endsWith("/") ? practice.href : `${practice.href}/`;
    const index = practice.subPages.findIndex((page) => normalise(page.href) === path);
    const ordered = [
      ...practice.subPages.slice(index + 1),
      ...practice.subPages.slice(0, Math.max(index, 0)),
    ];
    const cross = crossPractice[path];
    const siblingCards = ordered.slice(0, cross ? 2 : 3).map(toCard);
    const siblingHrefs = new Set(siblingCards.map((item) => normalise(item.href)));
    featured = [
      {
        title: practiceName,
        href: practiceHref,
        description: practice.description,
      },
      ...siblingCards,
      ...(cross && !siblingHrefs.has(normalise(cross.href)) ? [cross] : []),
    ];
    const used = new Set(featured.map((item) => normalise(item.href)));
    more = practice.subPages
      .filter((page) => !used.has(normalise(page.href)) && normalise(page.href) !== path)
      .map(toCard);
  }

  if (featured.length === 0) return null;

  return (
    <Section tone="white" id="related-services">
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
        <span className="eyebrow">Practice network</span>
        <h2>{heading}</h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
          {intro ??
            (practiceName ? (
              <>
                These pages sit with our <Link href={practiceHref}>{practiceName}</Link> practice.
                Open a related matter below, or go back to the main practice page.
              </>
            ) : (
              "Related matters our Melbourne team also advises on."
            ))}
        </p>
        <div className="practice-areas-grid">
          {featured.map((item) => (
            <Link key={item.href} href={item.href} className="practice-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
        {more.length > 0 && (
          <div className="related-more">
            <p className="related-more__label">More in {practiceName}</p>
            <ul>
              {more.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
