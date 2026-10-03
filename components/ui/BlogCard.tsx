import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import type { CardContent } from "@/types/content";

export interface BlogCardProps extends CardContent {
  imageSrc?: string;
  imageAlt?: string;
}

export function BlogCard({
  title,
  description,
  href = "/blog/article-placeholder",
  eyebrow,
  imageSrc,
  imageAlt,
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
            sizes="(max-width: 768px) 100vw, 33vw"
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
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonLink href={href} variant="text">
          Read Article
        </ButtonLink>
      </div>
    </article>
  );
}
