"use client";

import {
  ajayHeroGoogleReviews,
  ajayHeroGoogleReviewsMeta,
} from "@/lib/ajay-hero-google-reviews";
import { googleBusinessProfileUrl } from "@/lib/site";
import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

const SCROLL_START_ID = "ajay-reviews-scroll-start";
const SCROLL_END_ID = "client-reviews";
const STICKY_TOP_PX = 116;

function StarRow({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <span className="google-reviews-card__stars" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <svg key={index} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleGlyph() {
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

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function AjayHeroGoogleReview() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lastReviewRef = useRef<HTMLElement>(null);
  const [scrollEndPx, setScrollEndPx] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const { displayName, rating, reviewCount } = ajayHeroGoogleReviewsMeta;

  useLayoutEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const lastReview = lastReviewRef.current;
      const distance =
        lastReview != null
          ? Math.max(0, lastReview.offsetTop + lastReview.offsetHeight - viewport.clientHeight)
          : Math.max(0, track.scrollHeight - viewport.clientHeight);
      setScrollEndPx(distance);
    };

    measure();

    const viewport = viewportRef.current;
    const track = trackRef.current;
    const observer = new ResizeObserver(measure);
    if (viewport) observer.observe(viewport);
    if (track) observer.observe(track);

    document.fonts?.ready.then(measure).catch(() => measure());

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (scrollEndPx <= 0) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      if (reducedMotion) {
        setTranslateY(-scrollEndPx);
        return;
      }

      const startEl = document.getElementById(SCROLL_START_ID);
      const endEl = document.getElementById(SCROLL_END_ID);
      if (!startEl || !endEl) return;

      const scrollY = window.scrollY;
      const rangeStart = startEl.offsetTop - STICKY_TOP_PX;
      const rangeEnd = endEl.offsetTop - STICKY_TOP_PX;
      const span = rangeEnd - rangeStart;

      if (span <= 0) {
        setTranslateY(0);
        return;
      }

      const progress = clamp((scrollY - rangeStart) / span, 0, 1);
      setTranslateY(-progress * scrollEndPx);
    };

    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scrollEndPx]);

  return (
    <div className="ajay-hero-google-review hero-booking-card" aria-label="Google reviews">
      <div className="hero-booking-card__mockup-bar ajay-hero-google-review__bar">
        <div className="mockup-dots" aria-hidden="true">
          <span className="mockup-dot mockup-dot--red" />
          <span className="mockup-dot mockup-dot--yellow" />
          <span className="mockup-dot mockup-dot--green" />
        </div>
        <span className="mockup-title-badge">
          Google Review
          <span className="mockup-sparkle" aria-hidden="true">
            ✦
          </span>
        </span>
        <span className="mockup-status-pill">{rating.toFixed(1)}</span>
      </div>

      <div className="ajay-hero-google-review__panel google-reviews-card">
        <header className="google-reviews-card__header ajay-hero-google-review__header">
          <div>
            <h3 className="google-reviews-card__title">{displayName}</h3>
          </div>
          <a
            className="google-reviews-card__write"
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Write a review
          </a>
        </header>

        <div className="google-reviews-card__summary ajay-hero-google-review__summary">
          <span className="google-reviews-card__score">{rating.toFixed(1)}</span>
          <StarRow count={5} />
          <a
            className="google-reviews-card__count"
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {reviewCount} reviews
          </a>
        </div>

        <div ref={viewportRef} className="ajay-hero-google-review__viewport">
          <div
            ref={trackRef}
            className="ajay-hero-google-review__track"
            style={
              {
                transform: `translateY(${translateY}px)`,
              } as CSSProperties
            }
          >
            {ajayHeroGoogleReviews.map((review, index) => (
              <article
                className="google-reviews-card__review ajay-hero-google-review__review"
                key={review.author}
                ref={index === ajayHeroGoogleReviews.length - 1 ? lastReviewRef : undefined}
              >
                <div className="google-reviews-card__reviewer">
                  <span
                    className="google-reviews-card__avatar"
                    style={review.avatarColor ? { background: review.avatarColor } : undefined}
                    aria-hidden="true"
                  >
                    {review.author.charAt(0)}
                  </span>
                  <div>
                    <p className="google-reviews-card__author">{review.author}</p>
                    <p className="google-reviews-card__meta">
                      {review.authorReviewCount != null
                        ? `${review.authorReviewCount} reviews · ${review.relativeTime}`
                        : review.relativeTime}
                    </p>
                  </div>
                </div>
                <StarRow count={review.rating} size={14} />
                <p className="google-reviews-card__text">{review.text}</p>
              </article>
            ))}
          </div>
        </div>

        <footer className="google-reviews-card__footer ajay-hero-google-review__footer">
          <a
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="google-reviews-card__more"
          >
            <GoogleGlyph />
            View more reviews on Google →
          </a>
        </footer>
      </div>
    </div>
  );
}
