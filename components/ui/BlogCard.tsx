import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import type { CardContent } from "@/types/content";

export interface BlogCardProps extends CardContent {
  imageSrc?: string;
  imageAlt?: string;
  publishedDate?: string;
  readTime?: string;
}

export function BlogCard({
  title,
  description,
  href = "/blog/article-placeholder",
  eyebrow,
  imageSrc,
  imageAlt,
  publishedDate,
  readTime,
}: BlogCardProps) {
  return (
    <article className="blog-card">
      <div className="image-placeholder" aria-label={imageAlt || "Featured article image"}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={600}
            height={340}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <span>[Image]</span>
        )}
      </div>
      <div className="blog-card__content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          {eyebrow && <span className="blog-card__tag">{eyebrow}</span>}
          {readTime && (
            <span style={{ fontSize: "0.8rem", color: "var(--ink-secondary)", fontWeight: 500 }}>
              {readTime}
            </span>
          )}
        </div>
        <h3 className="blog-card__title">
          <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
            {title}
          </Link>
        </h3>
        {description && (
          <p
            className="blog-card__description"
            style={{
              fontSize: "0.92rem",
              color: "var(--ink-secondary)",
              lineHeight: 1.6,
              margin: "0.6rem 0 0",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>
        )}
        <div className="blog-card__footer" style={{ marginTop: "auto", paddingTop: "1.25rem" }}>
          <ButtonLink href={href} variant="primary" className="button--full">
            Read Guide
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
