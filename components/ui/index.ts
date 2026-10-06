// Canonical UI & Layout Component Registry
export { Button, ButtonLink } from "./Button";
export type { ButtonProps, ButtonLinkProps } from "./Button";

export { Breadcrumbs } from "./Breadcrumbs";
export { TrustBar } from "./TrustBar";
export { PracticeAreaCard } from "./PracticeAreaCard";
export { BlogCard } from "./BlogCard";
export type { BlogCardProps } from "./BlogCard";
export { ProcessSteps } from "./ProcessSteps";
export { Faq } from "./Faq";
export { TypingHeroTitle } from "./TypingHeroTitle";
export { HeroBookingPlaceholder, HeroContactForm } from "./HeroBookingPlaceholder";

// Layout & Section component re-exports for unified import ergonomics
export { Container } from "@/components/layout/Container";
export type { ContainerProps } from "@/components/layout/Container";

export {
  Section,
  SectionHeader,
  Hero,
  CtaSection,
  ImageTextSection,
} from "@/components/sections";
export type {
  SectionProps,
  SectionHeaderProps,
  HeroProps,
  CtaSectionProps,
  ImageTextProps,
} from "@/components/sections";
