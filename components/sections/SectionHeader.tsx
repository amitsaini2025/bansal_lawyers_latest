import type { ReactNode } from "react";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  title,
  intro,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align}`}>
      <h2>{title}</h2>
      {intro && typeof intro === "string" ? <p>{intro}</p> : intro}
    </header>
  );
}
