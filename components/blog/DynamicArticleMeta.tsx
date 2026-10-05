"use client";

import { useEffect, useState } from "react";

interface DynamicArticleMetaProps {
  publishedDate: string;
  category?: string;
  initialWords?: number;
  initialReadTime?: string;
  authorName?: string;
  contentSelector?: string;
}

export function DynamicArticleMeta({
  publishedDate,
  category,
  initialWords,
  initialReadTime,
  authorName = "Bansal Lawyers",
  contentSelector = "[data-blog-content]",
}: DynamicArticleMetaProps) {
  const [words, setWords] = useState<number | undefined>(initialWords);
  const [readTime, setReadTime] = useState<string | undefined>(initialReadTime);

  useEffect(() => {
    // 1. Locate the article text container
    const element =
      document.querySelector(contentSelector) ||
      document.querySelector("article.prose") ||
      document.querySelector("article.article-content") ||
      document.querySelector("article") ||
      document.querySelector(".blog-article-content");

    if (element) {
      // 2. Clone to avoid DOM mutation and strip non-article elements
      const clone = element.cloneNode(true) as HTMLElement;
      clone
        .querySelectorAll(
          "script, style, aside, nav, button, svg, [aria-hidden='true'], footer"
        )
        .forEach((el) => el.remove());

      const rawText = clone.innerText || clone.textContent || "";
      const cleaned = rawText
        .replace(/[\r\n\t]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      const counted = cleaned.split(" ").filter((w) => w.length > 0).length;

      if (counted > 40) {
        setWords(counted);
        const minutes = Math.max(1, Math.ceil(counted / 200));
        setReadTime(`${minutes} min read`);
      }
    }
  }, [contentSelector]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "0.85rem 1.75rem",
        fontSize: "0.92rem",
        color: "rgba(255, 255, 255, 0.88)",
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        paddingTop: "1rem",
        marginTop: "1.25rem",
      }}
      aria-label="Article metadata"
    >
      {/* Published Date */}
      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#93c5fd" }}
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>
          Published: <strong style={{ color: "#ffffff" }}>{publishedDate}</strong>
        </span>
      </span>

      {/* Reading Time */}
      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#93c5fd" }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>
          Read Time:{" "}
          <strong style={{ color: "#ffffff" }}>{readTime || "4 min read"}</strong>
        </span>
      </span>

      {/* Dynamic Word Count */}
      {words ? (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#93c5fd" }}
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>
            Length:{" "}
            <strong style={{ color: "#ffffff" }}>
              {words.toLocaleString()} words
            </strong>
          </span>
        </span>
      ) : null}

      {/* Author Name */}
      {authorName ? (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#93c5fd" }}
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span style={{ color: "#ffffff", fontWeight: 600 }}>{authorName}</span>
        </span>
      ) : null}

      {/* Category */}
      {category ? (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
          <span style={{ color: "rgba(255, 255, 255, 0.4)" }}>•</span>
          <span style={{ color: "#cbd5e1" }}>
            Category: <strong style={{ color: "#ffffff" }}>{category}</strong>
          </span>
        </span>
      ) : null}
    </div>
  );
}
