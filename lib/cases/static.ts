export interface CaseCardItem {
  title: string;
  slug: string;
  practiceArea: string;
  publishedDate: string;
  summary: string;
  imageSrc: string;
}

/** Stories written as pages in the site. A database row with the same slug does not replace them. */
export const builtInCases: CaseCardItem[] = [];

export function staticCaseSlugs(): Set<string> {
  return new Set(builtInCases.map((item) => item.slug.replace(/^\/success-stories\//, "").replace(/\/$/, "")));
}
