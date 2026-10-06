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
  href = "/blog",
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
        <div className="blog-card__meta">
          {eyebrow && <span className="blog-card__tag">{eyebrow}</span>}
          {readTime && <span className="blog-card__readtime">{readTime}</span>}
        </div>
        <h3 className="blog-card__title">
          <Link href={href}>
            {title}
          </Link>
        </h3>
        {description && (
          <p className="blog-card__description">
            {description}
          </p>
        )}
        <div className="blog-card__footer">
          <ButtonLink href={href} variant="primary" className="button--full">
            Read Guide
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
