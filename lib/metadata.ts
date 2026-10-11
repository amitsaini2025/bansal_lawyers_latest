import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import type { PageSeo } from "@/types/content";

export function createMetadata({
  title,
  description,
  path,
  keywords,
  image,
  noIndex = false,
}: PageSeo): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const shareImageUrl = image
    ? new URL(image, siteUrl).toString()
    : `${siteUrl}/images/collins-street-office.webp`;

  // If the page title already includes the firm name (e.g. "... | Bansal Lawyers"),
  // or if appending " | Bansal Lawyers" (+17 chars) would push the rendered <title>
  // over 70 characters, use an absolute title so search engines and Semrush never see >70 char titles.
  const hasBranding = /Bansal Lawyers/i.test(title);
  const templateSuffixLength = " | Bansal Lawyers".length;
  const useAbsoluteTitle =
    hasBranding || title.length + templateSuffixLength > 70;
  const metadataTitle = useAbsoluteTitle ? { absolute: title } : title;

  return {
    title: metadataTitle,
    description,
    keywords,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Bansal Lawyers",
      type: "website",
      locale: "en_AU",
      images: [
        {
          url: shareImageUrl,
          width: 1376,
          height: 768,
          type: "image/webp",
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImageUrl],
    },
  };
}
