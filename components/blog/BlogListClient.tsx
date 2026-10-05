"use client";

import { useId, useMemo, useRef, useState } from "react";
import { BlogCard } from "@/components/ui/BlogCard";

export interface BlogArticleItem {
  id: string;
  title: string;
  eyebrow: string;
  category: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  publishedDate: string;
  readTime: string;
}

interface BlogListClientProps {
  articles: BlogArticleItem[];
}

const ITEMS_PER_PAGE = 6;

export function BlogListClient({ articles }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputId = useId();

  // Extract unique categories preserving logical order
  const categories = useMemo(() => {
    const defaultOrder = [
      "Family Law",
      "Commercial Law",
      "Civil & Estate Law",
      "Administrative Law",
      "Legal Practice",
    ];
    const presentCategories = new Set(articles.map((a) => a.category));
    const ordered = defaultOrder.filter((cat) => presentCategories.has(cat));
    // Add any categories not in defaultOrder
    presentCategories.forEach((cat) => {
      if (!ordered.includes(cat)) ordered.push(cat);
    });
    return ["All Articles", ...ordered];
  }, [articles]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Articles": articles.length };
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, [articles]);

  // Filtered articles based on selected category and search query
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All Articles" || article.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.eyebrow.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedArticles = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, safeCurrentPage]);

  // Handlers
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory("All Articles");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredArticles.length);

  return (
    <div ref={containerRef} style={{ scrollMarginTop: "6rem" }}>
      {/* Search & Filter Toolbar */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          marginBottom: "2rem",
        }}
      >
        {/* Search Input Box */}
        <div style={{ position: "relative", maxWidth: "28rem", width: "100%" }}>
          <label htmlFor={searchInputId} className="visually-hidden">
            Search legal articles
          </label>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "1rem",
                color: "#64748b",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
              }}
              aria-hidden="true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              id={searchInputId}
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search articles by topic or keyword..."
              style={{
                width: "100%",
                padding: "0.75rem 2.5rem 0.75rem 2.75rem",
                fontSize: "0.95rem",
                borderRadius: "9999px",
                border: "1px solid #cbd5e1",
                background: "#ffffff",
                color: "var(--ink)",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                aria-label="Clear search query"
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748b",
                  padding: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filter Category Buttons */}
        <div
          className="blog-filter-bar"
          role="group"
          aria-label="Article category filters"
          style={{ marginBottom: 0 }}
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count = categoryCounts[category] || 0;
            return (
              <button
                key={category}
                type="button"
                className="blog-filter-btn"
                aria-pressed={isSelected}
                onClick={() => handleCategoryChange(category)}
              >
                <span>{category}</span>
                <span className="blog-filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Active Status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "1.75rem",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid #e2e8f0",
          fontSize: "0.92rem",
          color: "var(--ink-secondary)",
        }}
      >
        <div>
          {filteredArticles.length > 0 ? (
            <span>
              Showing <strong>{startIndex}–{endIndex}</strong> of{" "}
              <strong>{filteredArticles.length}</strong> {filteredArticles.length === 1 ? "article" : "articles"}
              {selectedCategory !== "All Articles" && (
                <span> in <em>{selectedCategory}</em></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;{searchQuery}&rdquo;</span>
              )}
            </span>
          ) : (
            <span>No articles found</span>
          )}
        </div>

        {(selectedCategory !== "All Articles" || searchQuery) && (
          <button
            type="button"
            onClick={handleResetFilters}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--brand-blue)",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "0.88rem",
              textDecoration: "underline",
              padding: 0,
            }}
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Cards Grid */}
      {paginatedArticles.length > 0 ? (
        <div className="blog-card-grid">
          {paginatedArticles.map((article) => (
            <BlogCard
              key={article.id}
              title={article.title}
              eyebrow={article.eyebrow}
              description={article.description}
              href={article.href}
              imageSrc={article.imageSrc}
              imageAlt={article.imageAlt}
              readTime={article.readTime}
              publishedDate={article.publishedDate}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div
          style={{
            textAlign: "center",
            padding: "3.5rem 1.5rem",
            background: "#ffffff",
            borderRadius: "var(--radius-md)",
            border: "1px dashed #cbd5e1",
            margin: "1rem 0",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              margin: "0 auto 1rem",
              borderRadius: "50%",
              background: "#f1f5f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#64748b",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.35rem",
              color: "var(--navy-900)",
              marginBottom: "0.5rem",
            }}
          >
            No Articles Found
          </h3>
          <p
            style={{
              color: "var(--ink-secondary)",
              maxWidth: "28rem",
              margin: "0 auto 1.5rem",
              lineHeight: 1.6,
            }}
          >
            We couldn&apos;t find any articles matching your current filter selection. Try clearing your search or choosing another practice category.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="button button--primary"
          >
            View All Articles
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav
          className="blog-pagination-wrapper"
          aria-label="Blog pagination navigation"
        >
          <div className="blog-pagination">
            {/* Previous Page Button */}
            <button
              type="button"
              className="blog-pagination-btn"
              disabled={safeCurrentPage <= 1}
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              aria-label="Go to previous page"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ marginRight: "0.25rem" }}
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>Prev</span>
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
              const isCurrent = pageNumber === safeCurrentPage;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  className="blog-pagination-btn"
                  aria-current={isCurrent ? "page" : undefined}
                  aria-label={`Page ${pageNumber}`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Page Button */}
            <button
              type="button"
              className="blog-pagination-btn"
              disabled={safeCurrentPage >= totalPages}
              onClick={() => handlePageChange(safeCurrentPage + 1)}
              aria-label="Go to next page"
            >
              <span>Next</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ marginLeft: "0.25rem" }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
          <span className="blog-pagination-info">
            Page {safeCurrentPage} of {totalPages}
          </span>
        </nav>
      )}
    </div>
  );
}
