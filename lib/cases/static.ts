export interface CaseCardItem {
  title: string;
  slug: string;
  practiceArea: string;
  publishedDate: string;
  summary: string;
  imageSrc: string;
}

/** Case studies written as pages in the site. A database row with the same slug does not replace them. */
export const builtInCases: CaseCardItem[] = [
  {
    title: "Tribunal Decision Overturned for \"Copy and Paste\" Reasoning — Maazuddin v Minister for Immigration 2024",
    slug: "/recent-cases/maazuddin-v-minister-2024-tribunal-decision-overturned",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Federal Circuit and Family Court decision setting aside a student visa cancellation where the AAT reproduced the delegate's reasons verbatim, failing to bring an independent mind and breaching section 359A procedural fairness.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "The Crucial Importance of Correctly Framing the Legal Question — Alsheri v Minister for Immigration 2025",
    slug: "/recent-cases/alsheri-v-minister-2025-importance-of-framing-legal-question",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Federal Circuit and Family Court decision examining why a tribunal's failure to correctly identify and apply the statutory test for employment under Schedule 6D constitutes jurisdictional error.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "Khanal Migration Case Study: English Language Requirements and Flexibility During COVID-19",
    slug: "/recent-cases/khanal-migration-english-language-requirements-covid-19-case-study",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Administrative Review Tribunal (ART) decision examining Subclass 485 Temporary Graduate English requirements, Department pandemic flexibility, and substantive compliance during exceptional circumstances.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "When Tribunal Errors Matter: Chikweu v Minister 2024 Immigration Case",
    slug: "/recent-cases/chikweu-v-minister-2024-federal-court-visa-refusal-overturn",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Federal Court of Australia decision examining when tribunal errors matter enough to overturn a visa refusal, focusing on materiality, jurisdictional error, and reasonable adjournment.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained",
    slug: "/recent-cases/student-visa-refusal-bias-jaggi-v-minister-2024",
    practiceArea: "Immigration Law",
    publishedDate: "Apr 11, 2025",
    summary:
      "Federal Circuit and Family Court decision upholding judicial review of an AAT student visa refusal where member comments and conduct created an apprehension of bias constituting jurisdictional error.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
  {
    title: "Thakur v Minister for Immigration and Citizenship 2025 — Student Visa Judicial Review",
    slug: "/recent-cases/thakur-v-minister-for-immigration-2025-student-visa",
    practiceArea: "Immigration Law",
    publishedDate: "Aug 23, 2025",
    summary:
      "A student visa judicial review case involving a Subclass 500 refusal, GTE requirement, AAT decision-making, and jurisdictional error based on an incorrect factual finding about the applicant’s arrival date.",
    imageSrc: "/images/cases/court-case-review.webp",
  },
];

export function staticCaseSlugs(): Set<string> {
  return new Set(builtInCases.map((item) => item.slug.replace(/^\/recent-cases\//, "").replace(/\/$/, "")));
}
