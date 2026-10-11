import type { ReactNode } from "react";

export type LinkItem = {
  label: string;
  href: string;
  children?: LinkItem[];
  isMegaMenu?: boolean;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type CardContent = {
  title: string;
  description: string;
  href?: string;
  eyebrow?: string;
  ctaText?: string;
};

export type ProcessItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[] | string;
  image?: string;
  noIndex?: boolean;
};
