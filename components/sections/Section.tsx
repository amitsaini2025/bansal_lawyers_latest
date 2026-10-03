import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

export type SectionProps = {
  children: ReactNode;
  tone?: "white" | "warm" | "navy";
  className?: string;
  id?: string;
};

export function Section({
  children,
  tone = "white",
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`section section--${tone} ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
