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

  // If the page title already includes the firm name (e.g. "... | Bansal Lawyers"),
  // treat it as an absolute title to prevent the RootLayout template (%s | Bansal Lawyers)
  // from appending "Bansal Lawyers" a second time.
  const hasBranding = /Bansal Lawyers/i.test(title);
  const metadataTitle = hasBranding ? { absolute: title } : title;

  return {
    title: metadataTitle,
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
