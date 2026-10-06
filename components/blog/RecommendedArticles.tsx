"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getRecommendedArticles,
  getRandomRecommendedArticles,
  type BlogArticle,
} from "@/lib/blog-data";

interface RecommendedArticlesProps {
  currentHref: string;
  title?: string;
  subtitle?: string;
  count?: number;
}

export function RecommendedArticles({
  currentHref,
  title = "Recommended Legal Reading & Insights",
  subtitle = "Explore more practical guides, legal updates, and statutory insights from Bansal Lawyers Melbourne.",
  count = 3,
}: RecommendedArticlesProps) {
  // Deterministic initial state for clean SSR hydration
  const [articles, setArticles] = useState<BlogArticle[]>(() =>
    getRecommendedArticles(currentHref, count)
  );

  const handleShuffle = () => {
    const random = getRandomRecommendedArticles(currentHref, count);
    if (random && random.length > 0) {
      setArticles(random);
    }
  };

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: "3.5rem",
        paddingTop: "3rem",
        borderTop: "1px solid var(--line, #e2e8f0)",
      }}
      aria-label="Recommended Articles"
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#1b4c89",
              marginBottom: "0.35rem",
            }}
          >
            Further Reading
          </span>
          <h3
            style={{
              fontSize: "clamp(1.35rem, 2.8vw, 1.75rem)",
              fontWeight: 700,
              color: "var(--navy-900, #0f2746)",
              margin: "0 0 0.5rem 0",
              fontFamily: "var(--font-heading), Georgia, serif",
              lineHeight: 1.25,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--ink-secondary, #475569)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            {subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={handleShuffle}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            padding: "0.55rem 1rem",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#1b4c89",
            backgroundColor: "#f0f6fc",
            border: "1px solid #bcd5f5",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
          aria-label="Shuffle suggested articles"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e1edf9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f6fc";
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="16 3 21 3 21 8" />
            <line x1="4" y1="20" x2="21" y2="3" />
            <polyline points="21 16 21 21 16 21" />
            <line x1="15" y1="15" x2="21" y2="21" />
            <line x1="4" y1="4" x2="9" y2="9" />
          </svg>
          Suggest Other Topics
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {articles.map((article) => (
          <article
            key={article.id}
            style={{
              backgroundColor: "var(--white, #ffffff)",
              border: "1px solid var(--line, #e2e8f0)",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 2px 8px rgba(10, 27, 50, 0.04)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            {/* Card Thumbnail */}
            <Link
              href={article.href}
              style={{
                display: "block",
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                backgroundColor: "#0f2746",
              }}
            >
              <Image
                src={article.imageSrc}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                style={{ objectFit: "cover" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "0.65rem",
                  left: "0.65rem",
                  backgroundColor: "rgba(15, 39, 70, 0.88)",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "0.2rem 0.55rem",
                  borderRadius: "4px",
                  backdropFilter: "blur(4px)",
                }}
              >
                {article.category}
              </span>
            </Link>

            {/* Card Content */}
            <div
              style={{
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--muted, #64748b)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <span>{article.publishedDate}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <h4
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--navy-900, #0f2746)",
                  lineHeight: 1.38,
                  marginBottom: "0.5rem",
                }}
              >
                <Link
                  href={article.href}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {article.title}
                </Link>
              </h4>

              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: "var(--ink-secondary, #475569)",
                  margin: "0 0 1.25rem 0",
                  flexGrow: 1,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {article.description}
              </p>

              <Link
                href={article.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "#1b4c89",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  marginTop: "auto",
                }}
              >
                Read Legal Guide &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
