"use client";

import { useEffect, useRef } from "react";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus(); }, []);
  return (
    <section className="section">
      <div className="container">
        <h1 ref={heading} tabIndex={-1}>Something went wrong</h1>
        <p>Please try again or contact our team directly.</p>
        <div className="hero__actions">
          <button className="button button--primary" onClick={retry}>Try again</button>
          <a className="button button--secondary" href="/contact">Contact Our Legal Team</a>
        </div>
      </div>
    </section>
  );
}
