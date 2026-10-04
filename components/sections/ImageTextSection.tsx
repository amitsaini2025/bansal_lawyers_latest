import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";

export type ImageTextProps = {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  reverse?: boolean;
  action?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary" | "text" | "light" | "white-outline";
  };
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
};

export function ImageTextSection({
  title,
  body,
  reverse = false,
  action,
  imageSrc,
  imageAlt = "Bansal Lawyers Melbourne Legal Chambers",
  priority = false,
}: ImageTextProps) {
  const actionVariant = action?.variant || "primary";

  return (
    <div className={`image-text${reverse ? " image-text--reverse" : ""}`}>
      <div className="image-text__media" aria-label={imageAlt}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 960px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        ) : (
          <span style={{ margin: "auto" }}>[Image]</span>
        )}
      </div>
      <div className="image-text__content">
        <h2>{title}</h2>
        <div className="prose">{body}</div>
        {action && (
          <div className="image-text__action">
            <ButtonLink href={action.href} variant={actionVariant}>
              <span>{action.label}</span>
              {actionVariant !== "text" && (
                <span aria-hidden="true" style={{ display: "inline-block", marginLeft: "0.5rem" }}>
                  →
                </span>
              )}
            </ButtonLink>
          </div>
        )}
      </div>
    </div>
  );
}
