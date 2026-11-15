"use client";

import { useCallback, useEffect, useState } from "react";
import type { AjayClientTestimonial } from "@/lib/ajay-client-testimonials";

const TRUNCATE_LENGTH = 165;

const AVATAR_COLORS = ["#f29900", "#1a73e8", "#9334e6", "#0d904f", "#d93025"];

function StarRow({ count }: { count: number }) {
  return (
    <span className="client-testimonial-card__stars" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <span className="client-testimonial-card__verified" aria-label="Verified review">
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#4285F4" />
        <path
          fill="#fff"
          d="M10.5 14.2 7.8 11.5l1.4-1.4 1.3 1.3 3.5-3.5 1.4 1.4-4.9 4.9z"
        />
      </svg>
    </span>
  );
}

function TestimonialCard({
  item,
  colorIndex,
}: {
  item: AjayClientTestimonial;
  colorIndex: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncate = item.text.length > TRUNCATE_LENGTH;
  const displayText =
    expanded || !needsTruncate
      ? item.text
      : `${item.text.slice(0, TRUNCATE_LENGTH).trim()}…`;
  const initial = item.author.trim().charAt(0).toUpperCase() || "?";
  const avatarColor = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];

  return (
    <article className="client-testimonial-card">
      <div className="client-testimonial-card__head">
        <div className="client-testimonial-card__reviewer">
          <span
            className="client-testimonial-card__avatar"
            style={{ backgroundColor: avatarColor }}
            aria-hidden="true"
          >
            {initial}
          </span>
          <div>
            <p className="client-testimonial-card__author">{item.author}</p>
            <p className="client-testimonial-card__meta">{item.relativeTime}</p>
          </div>
        </div>
        <GoogleMark />
      </div>
      <div className="client-testimonial-card__rating">
        <StarRow count={5} />
        <VerifiedBadge />
      </div>
      <p className="client-testimonial-card__text">{displayText}</p>
      {needsTruncate && !expanded ? (
        <button
          type="button"
          className="client-testimonial-card__read-more"
          onClick={() => setExpanded(true)}
        >
          Read more
        </button>
      ) : null}
    </article>
  );
}

function useVisibleCount() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setVisible(1);
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

type ClientTestimonialsCarouselProps = {
  items: AjayClientTestimonial[];
};

export function ClientTestimonialsCarousel({ items }: ClientTestimonialsCarouselProps) {
  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visibleCount);
  const [clampedTo, setClampedTo] = useState(maxIndex);

  if (clampedTo !== maxIndex) {
    setClampedTo(maxIndex);
    setIndex((current) => Math.min(current, maxIndex));
  }

  const goNext = useCallback(() => {
    setIndex((current) => Math.min(current + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((current) => Math.max(current - 1, 0));
  }, []);

  const visibleItems = items.slice(index, index + visibleCount);

  return (
    <div className="client-testimonials-carousel">
      <div className="client-testimonials-carousel__viewport">
        <div
          className="client-testimonials-carousel__track"
          style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
        >
          {visibleItems.map((item, i) => (
            <TestimonialCard key={`${item.author}-${index + i}`} item={item} colorIndex={index + i} />
          ))}
        </div>
      </div>
      {items.length > visibleCount ? (
        <div className="client-testimonials-carousel__nav">
          <button
            type="button"
            className="client-testimonials-carousel__arrow"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous reviews"
          >
            ‹
          </button>
          <button
            type="button"
            className="client-testimonials-carousel__arrow"
            onClick={goNext}
            disabled={index >= maxIndex}
            aria-label="Next reviews"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
