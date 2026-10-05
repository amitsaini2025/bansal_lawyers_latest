import type { BlogArticleItem } from "@/components/blog/BlogListClient";

export interface BlogArticle extends BlogArticleItem {
  wordCount?: number;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "divorce-lawyers-guide",
    title: "Divorce Lawyers in Melbourne Australia — Complete Guide for Couple",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A complete guide to navigating divorce in Australia under the Family Law Act 1975: legal requirements, required documents, joint vs sole applications, filing fees, and court procedures.",
    href: "/blog/divorce-lawyers-in-melbourne-australia-complete-guide-for-couple",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Divorce Lawyers in Melbourne Australia Guide",
    publishedDate: "Jan 31, 2026",
    readTime: "4 min read",
    wordCount: 850,
  },
  {
    id: "top-10-legal-services",
    title: "Top 10 Legal Services in Australia",
    eyebrow: "Legal Practice",
    category: "Legal Practice",
    description:
      "An overview of 10 common legal services in Australia including immigration, family law, criminal defence, employment, property, business law, and civil disputes.",
    href: "/blog/top-10-legal-services-australia-bansal-lawyers-melbourne",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Top 10 Legal Services in Australia Guide",
    publishedDate: "Sep 26, 2025",
    readTime: "3 min read",
    wordCount: 650,
  },
  {
    id: "civil-dispute-resolution-act",
    title:
      "What is the Civil Dispute Resolution Act 2011 A Guide to Settling Disputes Without Court in Australia",
    eyebrow: "Civil Law",
    category: "Civil & Estate Law",
    description:
      "Learn how the Civil Dispute Resolution Act 2011 (Cth) helps individuals and businesses resolve disputes through genuine steps and mediation before filing in court.",
    href: "/blog/what-is-the-civil-dispute-resolution-act-2011-australia",
    imageSrc: "/images/blog/commercial-contracts.webp",
    imageAlt: "Civil Dispute Resolution Act 2011 Guide",
    publishedDate: "Mar 28, 2025",
    readTime: "4 min read",
    wordCount: 820,
  },
  {
    id: "closing-loopholes-contractors",
    title:
      "Understanding the Closing Loopholes Reforms: Changes for Independent Contractors",
    eyebrow: "Commercial Law",
    category: "Commercial Law",
    description:
      "A guide to Australia's Fair Work Closing Loopholes No. 2 reforms, contractor vs employee tests, gig worker protections, and the landmark Amita Gupta Uber Eats decision.",
    href: "/blog/closing-loopholes-reforms-independent-contractors",
    imageSrc: "/images/blog/commercial-contracts.webp",
    imageAlt: "Closing Loopholes Reforms for Independent Contractors",
    publishedDate: "Mar 06, 2025",
    readTime: "6 min read",
    wordCount: 1200,
  },
  {
    id: "how-to-build-strong-brand",
    title:
      "How to Build a Strong Brand: Legal Considerations for Your Business Identity",
    eyebrow: "Commercial Law",
    category: "Commercial Law",
    description:
      "A guide to choosing the right business structure in Australia: sole trader, partnership, and company structures, tax implications, personal liability, and key differences.",
    href: "/blog/how-to-build-strong-brand-legal-considerations-for-your-business-identity-in-australia",
    imageSrc: "/images/blog/commercial-contracts.webp",
    imageAlt: "How to Build a Strong Brand and Business Structure Guide",
    publishedDate: "Jan 27, 2025",
    readTime: "4 min read",
    wordCount: 810,
  },
  {
    id: "hiding-assets-during-divorce",
    title:
      "Hiding Assets During Divorce in Australia: Legal Risks & Asset Protection",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A detailed analysis of the legal risks of hiding assets during divorce in Australia: strict duty of disclosure, court penalties, criminal fraud/perjury, and legal asset protection strategies.",
    href: "/blog/hiding-assets-during-divorce-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Hiding Assets During Divorce in Australia Guide",
    publishedDate: "Jan 24, 2025",
    readTime: "4 min read",
    wordCount: 890,
  },
  {
    id: "administrative-law-explained",
    title: "Easy Guide to Administrative Law in Australia by Bansal Lawyers",
    eyebrow: "Administrative Law",
    category: "Administrative Law",
    description:
      "An introductory guide to administrative law in Australia: statutory functions, merits review, tribunal appeals at the ART, judicial review, and government accountability.",
    href: "/blog/administrative-law-explained-expert-guidance-bansal-lawyers",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt: "Easy Guide to Administrative Law in Australia",
    publishedDate: "Jan 23, 2025",
    readTime: "4 min read",
    wordCount: 780,
  },
  {
    id: "why-you-need-power-of-attorney",
    title: "Why Having a Power of Attorney in Australia is Crucial",
    eyebrow: "Civil & Estate Law",
    category: "Civil & Estate Law",
    description:
      "A guide to Powers of Attorney in Australia: General POA, Enduring Power of Attorney (EPOA), Supportive POA, fiduciary duties, and safeguarding your future.",
    href: "/blog/why-you-need-power-of-attorney-bansal-lawyers-australia",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Why Having a Power of Attorney in Australia is Crucial",
    publishedDate: "Jan 22, 2025",
    readTime: "4 min read",
    wordCount: 820,
  },
  {
    id: "guide-to-successful-co-parenting",
    title:
      "Guide to Successful Co-Parenting After Divorce: Building a Positive Future for Your Family",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "Practical advice on successful co-parenting following divorce in Australia: parenting plans, consent orders, family mediation, and putting children's best interests first.",
    href: "/blog/guide-to-successful-co-parenting-after-divorce",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Guide to Successful Co-Parenting After Divorce",
    publishedDate: "Jan 21, 2025",
    readTime: "3 min read",
    wordCount: 650,
  },
  {
    id: "breaking-rental-agreement-early",
    title:
      "Breaking a Rental Agreement Early in Australia: Your Legal Rights Explained by Bansal Lawyers",
    eyebrow: "Property Law",
    category: "Property Law",
    description:
      "Understand tenant rights when breaking a rental agreement early in Australia: lease break costs, compensation rules, VCAT severe hardship applications, and notice periods.",
    href: "/blog/breaking-rental-agreement-early-in-australia",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Breaking a Rental Agreement Early in Australia Guide",
    publishedDate: "Jan 20, 2025",
    readTime: "4 min read",
    wordCount: 790,
  },
  {
    id: "parenting-arrangements-after-divorce",
    title:
      "Parenting Arrangements After Divorce in Australia Insights from Bansal Lawyers",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A comprehensive guide to parenting arrangements after divorce in Australia: child's best interests under the Family Law Act 1975, parenting plans, consent orders, and mediation.",
    href: "/blog/parenting-arrangements-after-divorce-in-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Parenting Arrangements After Divorce in Australia Guide",
    publishedDate: "Jan 18, 2025",
    readTime: "7 min read",
    wordCount: 1350,
  },
  {
    id: "understanding-family-law-court-fees",
    title:
      "Understanding Family Law Court Fees in Australia by Bansal Lawyers",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A guide by Bansal Lawyers to Federal Circuit and Family Court fees in Australia: divorce filing fees, consent orders, conciliation conferences, hearing fees, and hardship exemptions.",
    href: "/blog/understanding-family-law-court-fees-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Understanding Family Law Court Fees in Australia Guide",
    publishedDate: "Jan 17, 2025",
    readTime: "4 min read",
    wordCount: 750,
  },
  {
    id: "how-to-divide-finances-and-property",
    title:
      "Dividing Finances and Property After Separation in Australia: A Complete Guide",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A complete guide by Bansal Lawyers on how to divide finances, assets, debts, superannuation, and spousal maintenance after separation or divorce in Australia.",
    href: "/blog/how-to-divide-finances-and-property-after-separation-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt:
      "Dividing Finances and Property After Separation in Australia Guide",
    publishedDate: "Jan 16, 2025",
    readTime: "5 min read",
    wordCount: 960,
  },
  {
    id: "step-by-step-guide-applying-divorce",
    title: "Step-by-Step Guide to Applying for Divorce in Australia",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A step-by-step guide to applying for divorce in Australia by Bansal Lawyers: sole vs joint applications, eligibility criteria, required documents, filing fees, and court process.",
    href: "/blog/step-by-step-guide-applying-divorce-in-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Step-by-Step Guide to Applying for Divorce in Australia",
    publishedDate: "Jan 15, 2025",
    readTime: "5 min read",
    wordCount: 980,
  },
  {
    id: "understanding-administrative-law-bansal-lawyers",
    title:
      "Understanding Administrative Law Insights from Bansal Lawyers",
    eyebrow: "Administrative Law",
    category: "Administrative Law",
    description:
      "An expert guide to administrative law in Australia: statutory functions, merits review, tribunal appeals at the ART, judicial review, and government accountability.",
    href: "/blog/understanding-administrative-law-bansal-lawyers",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt: "Understanding Administrative Law Insights from Bansal Lawyers",
    publishedDate: "Jan 14, 2025",
    readTime: "4 min read",
    wordCount: 609,
  },
  {
    id: "why-you-need-power-of-attorney-today",
    title: "The Importance of Having a Power of Attorney Today",
    eyebrow: "Civil & Estate Law",
    category: "Civil & Estate Law",
    description:
      "A complete guide to Powers of Attorney in Australia: General POA, Enduring Power of Attorney (EPOA), Supportive POA, fiduciary duties, and safeguarding your future.",
    href: "/blog/why-you-need-power-of-attorney-today",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "The Importance of Having a Power of Attorney Today",
    publishedDate: "Jan 13, 2025",
    readTime: "5 min read",
    wordCount: 975,
  },
  {
    id: "noicc-visa-cancellation-australia",
    title:
      "What You Need to Know About NOICC Visa Cancellations in Australia",
    eyebrow: "Immigration Law",
    category: "Immigration Law",
    description:
      "A complete guide to Notice of Intention to Consider Cancellation (NOICC) in Australia: cancellation grounds, 5-day response deadlines, and protecting your visa status.",
    href: "/blog/noicc-visa-cancellation-australia",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt:
      "What You Need to Know About NOICC Visa Cancellations in Australia",
    publishedDate: "Jan 11, 2025",
    readTime: "5 min read",
    wordCount: 984,
  },
  {
    id: "top-legal-risks-for-small-businesses",
    title:
      "Top 8 Legal Risks for Small Businesses: How Bansal Lawyers Can Help",
    eyebrow: "Commercial Law",
    category: "Commercial Law",
    description:
      "Understand and manage the top 8 legal risks facing Australian small businesses: tax compliance, consumer disputes, permits, employment, IP, structures, funding, and website terms.",
    href: "/blog/top-legal-risks-for-small-businesses",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Top 8 Legal Risks for Small Businesses",
    publishedDate: "Jan 10, 2025",
    readTime: "4 min read",
    wordCount: 731,
  },
  {
    id: "divorce-laws-india-vs-australia",
    title:
      "Understanding the Divorce Process in India and Australia: Key Differences Explained",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "A comprehensive comparison of divorce laws in India and Australia: fault vs no-fault grounds, religious vs secular courts, mutual consent timelines, child custody, and jurisdiction.",
    href: "/blog/divorce-laws-india-vs-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Understanding the Divorce Process in India and Australia",
    publishedDate: "Jan 09, 2025",
    readTime: "5 min read",
    wordCount: 978,
  },
  {
    id: "understanding-de-facto-relationship-vs-marriage",
    title:
      "Understanding the Differences Between a De Facto Relationship and Marriage in Australia",
    eyebrow: "Family Law",
    category: "Family Law",
    description:
      "Insights from Bansal Lawyers on legal differences between marriage and de facto relationships in Australia: proving cohabitation, the 2-year rule, property rights, and financial agreements.",
    href: "/blog/understanding-de-facto-relationship-vs-marriage-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt:
      "Understanding the Differences Between a De Facto Relationship and Marriage in Australia",
    publishedDate: "Jan 08, 2025",
    readTime: "4 min read",
    wordCount: 763,
  },
  {
    id: "understanding-affidavits-statutory-declarations",
    title:
      "Understanding Affidavit, Statutory Declarations, and Statements of Evidence",
    eyebrow: "Civil & Estate Law",
    category: "Civil & Estate Law",
    description:
      "A complete guide to legal evidence documents in Australia: affidavits, statutory declarations, witness statements, authorized witnessing, and court admissibility.",
    href: "/blog/understanding-affidavits-statutory-declarations-statements-of-evidence",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt:
      "Understanding Affidavit, Statutory Declarations, and Statements of Evidence",
    publishedDate: "Jan 07, 2025",
    readTime: "4 min read",
    wordCount: 756,
  },
  {
    id: "how-to-appeal-visa-refusal-cancellation-art",
    title:
      "How to Appeal a Visa Refusal or Cancellation to the Administrative Review Tribunal (ART)",
    eyebrow: "Immigration Law",
    category: "Immigration Law",
    description:
      "A complete guide to Administrative Review Tribunal (ART) visa appeals: 28-day statutory deadlines, fresh evidentiary reviews, hearing procedures, fees, and appeal outcomes.",
    href: "/blog/how-to-appeal-visa-refusal-cancellation-art",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt:
      "How to Appeal a Visa Refusal or Cancellation to the Administrative Review Tribunal (ART)",
    publishedDate: "Jan 06, 2025",
    readTime: "4 min read",
    wordCount: 748,
  },
  {
    id: "difference-between-courts-and-administrative-review-tribunal",
    title:
      "Understanding the Difference Between the Courts and the Administrative Review Tribunal (ART)",
    eyebrow: "Administrative Law",
    category: "Administrative Law",
    description:
      "Understand the key differences between the Courts (Judicial Review) and the Administrative Review Tribunal (Merits Review) when challenging government decisions in Australia.",
    href: "/blog/difference-between-courts-and-administrative-review-tribunal",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt:
      "Understanding the Difference Between the Courts and the Administrative Review Tribunal",
    publishedDate: "Jan 04, 2025",
    readTime: "4 min read",
    wordCount: 785,
  },
  {
    id: "human-rights-legal-recourse-australia",
    title: "Human Rights and Legal Recourse in Australia: A Brief Guide",
    eyebrow: "Civil & Estate Law",
    category: "Civil & Estate Law",
    description:
      "A brief guide by Bansal Lawyers to human rights protection and legal recourse in Australia: anti-discrimination acts, AHRC complaints, and civil liberties defense.",
    href: "/blog/human-rights-legal-recourse-australia",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Human Rights and Legal Recourse in Australia",
    publishedDate: "Jan 03, 2025",
    readTime: "3 min read",
    wordCount: 567,
  },
  {
    id: "how-to-appeal-visa-refusal-administrative-review-tribunal",
    title:
      "How to Appeal Your Visa Refusal: A Simple Guide to the Administrative Review Tribunal (ART)",
    eyebrow: "Immigration Law",
    category: "Immigration Law",
    description:
      "A simple guide by Bansal Lawyers on how to appeal a visa refusal to the Administrative Review Tribunal (ART): merits review, 28-day time limits, fees, hearing process, and potential decisions.",
    href: "/blog/how-to-appeal-visa-refusal-administrative-review-tribunal",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt:
      "How to Appeal Your Visa Refusal to the Administrative Review Tribunal",
    publishedDate: "Jan 02, 2025",
    readTime: "5 min read",
    wordCount: 997,
  },
  {
    id: "visa-refusal-australia-review-appeal-bansal-lawyers",
    title:
      "Facing a Visa Refusal? Bansal Lawyers Can Help You Get Your Decision Reviewed and Win!",
    eyebrow: "Immigration Law",
    category: "Immigration Law",
    description:
      "Facing a visa refusal or cancellation? Bansal Lawyers guides you through tribunal reviews, strict appeal deadlines, evidence preparation, and winning strategies.",
    href: "/blog/visa-refusal-australia-review-appeal-bansal-lawyers",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt:
      "Facing a Visa Refusal - Bansal Lawyers Decision Review and Appeal",
    publishedDate: "Jan 01, 2025",
    readTime: "5 min read",
    wordCount: 896,
  },
  {
    id: "exciting-changes-to-australias-administrative-review-system",
    title:
      "Exciting Changes to Australia's Administrative Review System: What You Need to Know",
    eyebrow: "Administrative Law",
    category: "Administrative Law",
    description:
      "An expert breakdown of the Administrative Review Tribunal Act 2024 (ART Act): tougher member qualifications, merit-based appointments, specialized areas, and accountability.",
    href: "/blog/exciting-changes-to-australias-administrative-review-system",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt:
      "Exciting Changes to Australia's Administrative Review System - ART Act 2024",
    publishedDate: "Dec 31, 2024",
    readTime: "4 min read",
    wordCount: 768,
  },
  {
    id: "important-changes-to-student-visa-processing-ministerial-direction",
    title:
      "Key Changes to Student Visa Processing Under the Latest Ministerial Direction",
    eyebrow: "Immigration Law",
    category: "Immigration Law",
    description:
      "A timely analysis by Bansal Lawyers on the revocation of MD107 and introduction of Ministerial Direction 111 (MD111) for Australian Student visa (Subclass 500) processing.",
    href: "/blog/important-changes-to-student-visa-processing-ministerial-direction",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Student Visa Processing Ministerial Direction 111",
    publishedDate: "Dec 22, 2024",
    readTime: "3 min read",
    wordCount: 497,
  },
  {
    id: "understanding-judicial-review-of-migration-decisions-in-australia",
    title:
      "Understanding Judicial Review of Migration Decisions in Australia",
    eyebrow: "Immigration Law",
    category: "Immigration Law",
    description:
      "A comprehensive guide by Bansal Lawyers to judicial review in the Federal Circuit and Family Court of Australia: jurisdictional error, 35-day time limits, affidavit requirements, and hearings.",
    href: "/blog/understanding-judicial-review-of-migration-decisions-in-australia",
    imageSrc: "/images/cases/court-case-review.webp",
    imageAlt:
      "Judicial Review of Migration Decisions in Australia Federal Court",
    publishedDate: "Dec 19, 2024",
    readTime: "5 min read",
    wordCount: 979,
  },
  {
    id: "dont-miss-out-why-the-new-subclass-482-sid-visa-is-the-fastest-way-to-work-and-stay-in-australia",
    title:
      "Don't Miss Out: Why the New Subclass 482 SID Visa Is the Fastest Way to Work and Stay in Australia",
    eyebrow: "Immigration Law",
    category: "Immigration Law",
    description:
      "From TSS to SID: How the new Subclass 482 Skills in Demand visa revolutionizes Australian careers with 4-year validity, reduced work experience, 7-21 day processing, and PR pathways.",
    href: "/blog/dont-miss-out-why-the-new-subclass-482-sid-visa-is-the-fastest-way-to-work-and-stay-in-australia",
    imageSrc: "/images/legal-consultation-clarity.webp",
    imageAlt: "Subclass 482 Skills in Demand SID Visa Australia",
    publishedDate: "Dec 11, 2024",
    readTime: "5 min read",
    wordCount: 949,
  },
  {
    id: "breaking-australia-national-innovation-visa-set-to-revolutionize-immigration-in-2024",
    title:
      "Breaking: Australia's National Innovation Visa Set to Revolutionize Immigration in 2024",
    eyebrow: "Immigration Law",
    category: "Immigration Law",
    description:
      "National Innovation Visa (Subclass 858) overview: replacing the Global Talent visa from 6 December 2024 with mandatory ministerial invitations, Form 47NI, and direct permanent residency.",
    href: "/blog/breaking-australia-national-innovation-visa-set-to-revolutionize-immigration-in-2024",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Australia National Innovation Visa Subclass 858",
    publishedDate: "Dec 27, 2024",
    readTime: "5 min read",
    wordCount: 872,
  },
  {
    id: "navigating-corporate-litigation",
    title: "Navigating Corporate Litigation",
    eyebrow: "Commercial Law",
    category: "Commercial Law",
    description:
      "A guide by Bansal Lawyers to commercial and corporate litigation in Melbourne: contract breaches, shareholder conflicts, director duties, and dispute resolution.",
    href: "/blog/navigating-corporate-litigation",
    imageSrc: "/images/melbourne-legal-chambers.webp",
    imageAlt: "Corporate Litigation Lawyers Melbourne - Bansal Lawyers",
    publishedDate: "Dec 05, 2024",
    readTime: "4 min read",
    wordCount: 602,
  },
];

/**
 * Returns a selection of recommended articles excluding the currently viewed article.
 * Prioritizes matching category, and fills remaining spots with other articles.
 */
export function getRecommendedArticles(
  currentHref: string,
  count = 3
): BlogArticle[] {
  const current = blogArticles.find(
    (a) => a.href === currentHref || a.href.endsWith(currentHref)
  );
  const otherArticles = blogArticles.filter(
    (a) => a.href !== currentHref && !a.href.endsWith(currentHref)
  );

  if (otherArticles.length <= count) {
    return otherArticles;
  }

  // Filter same category first
  const sameCategory = current
    ? otherArticles.filter((a) => a.category === current.category)
    : [];
  const otherCategories = current
    ? otherArticles.filter((a) => a.category !== current.category)
    : otherArticles;

  const results: BlogArticle[] = [];

  // Add up to 2 from same category
  for (const article of sameCategory) {
    if (results.length < 2) {
      results.push(article);
    }
  }

  // Fill remaining slots from other categories
  for (const article of otherCategories) {
    if (results.length < count) {
      results.push(article);
    }
  }

  return results;
}

/**
 * Returns a randomized selection of recommended articles excluding the currently viewed article.
 */
export function getRandomRecommendedArticles(
  currentHref: string,
  count = 3
): BlogArticle[] {
  const cleanCurrent = currentHref.replace(/\/$/, "");
  const pool = blogArticles.filter(
    (a) => a.href.replace(/\/$/, "") !== cleanCurrent
  );

  if (pool.length <= count) {
    return pool;
  }

  // Shuffle copy using Fisher-Yates shuffle algorithm
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
