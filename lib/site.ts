import type { LinkItem } from "@/types/content";

const rawSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bansallawyers.com.au"
)
  .trim()
  .replace(/\/+$/, "");

export const siteUrl = rawSiteUrl.replace(
  /^https?:\/\/bansallawyers\.com\.au$/i,
  "https://www.bansallawyers.com.au"
);

/** Shown in footer and other Melbourne office hour labels. */
export const officeHoursFooter = "Mon–Fri: 09:30 AM to 6 PM (Melbourne time)";

/** Prose form for chat and assistant copy. */
export const officeHoursDescription = "Monday to Friday, 9:30 am to 6:00 pm";

/** Firm motto (homepage hero and footer). */
export const firmMotto = "There is no legal puzzle that we can't solve.";

/** Google Business Profile (reviews & listing). */
export const googleBusinessProfileUrl = "https://share.google/BwO1gQmlYQweKWxbh";

export const googleBusinessReviewsSummary = {
  displayName: "BANSAL Lawyers",
  rating: 5.0,
  reviewCount: 61,
  mapsAddress: "Level 8/278 Collins St, Melbourne VIC 3000, Australia",
  featuredReview: {
    author: "Arshdeep Singh",
    authorReviewCount: 8,
    relativeTime: "3 months ago",
    rating: 5,
    text:
      "I am really grateful to Ajay Bansal for his guidance and support throughout my visa matter. He handled everything properly. Finally, on 15 July 2026, his visa was granted. Highly recommended!",
  },
} as const;

export const businessDetails = {
  name: "Bansal Lawyers",
  address: "Level 8, 278 Collins Street, Melbourne VIC 3000",
  streetAddress: "Level 8, 278 Collins Street",
  addressLocality: "Melbourne",
  addressRegion: "VIC",
  postalCode: "3000",
  addressCountry: "AU",
  phone: "0422 905 860",
  phoneTel: "tel:0422905860",
  nationalLine: "1300 226 725",
  nationalLineDisplay: "1300 BANSAL (1300 226 725)",
  nationalLineTel: "tel:1300226725",
  email: "info@bansallawyers.com.au",
  emailMailto: "mailto:info@bansallawyers.com.au",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61562008576642",
  instagram: "https://www.instagram.com/bansallawyers?igsh=N21ubnVkeDhibjVw",
  linkedin: "https://www.linkedin.com/company/bansallawyers",
  twitter: "https://twitter.com/BansalLawyers",
  youtube: "https://www.youtube.com/@BansalLawyers",
};

export const navigation: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Practice Areas",
    href: "/immigration-lawyers-melbourne",
    isMegaMenu: true,
  },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const serviceSlugs = [
  "immigration-law",
  "family-law",
  "criminal-law",
  "commercial-law",
  "property-law",
  "civil-law",
];

export const articleSlugs = ["article-placeholder", "article-placeholder-two"];

export const policySlugs = ["privacy", "terms", "disclaimer"];

export const placeholderCards = Array.from({ length: 3 }, (_, index) => ({
  title: `[Card ${index + 1} title goes here]`,
  description: `[Card ${index + 1} text goes here]`,
}));

export const placeholderSteps = Array.from({ length: 3 }, (_, index) => ({
  title: `[Step ${index + 1} title goes here]`,
  description: `[Step ${index + 1} text goes here]`,
}));

export const placeholderFaqs = Array.from({ length: 4 }, (_, index) => ({
  question: `[FAQ ${index + 1} question goes here]`,
  answer: `[FAQ ${index + 1} answer goes here]`,
}));
