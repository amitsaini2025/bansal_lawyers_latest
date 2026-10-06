import type { LinkItem } from "@/types/content";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bansallawyers.com.au";

export const businessDetails = {
  name: "Bansal Lawyers",
  address: "Level 8/278 Collins St, Melbourne VIC 3000, Australia",
  streetAddress: "Level 8/278 Collins St",
  addressLocality: "Melbourne",
  addressRegion: "VIC",
  postalCode: "3000",
  addressCountry: "AU",
  phone: "0422 905 860",
  phoneTel: "tel:+61422905860",
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
  { label: "Recent Cases", href: "/recent-cases" },
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
