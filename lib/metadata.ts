import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import type { PageSeo } from "@/types/content";

export function createMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageSeo): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
