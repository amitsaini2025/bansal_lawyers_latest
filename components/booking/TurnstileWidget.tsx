"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface TurnstileApi {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    }
  ) => string;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("Turnstile failed to load"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

/**
 * Keep the Cloudflare script off the first paint.
 * It starts when a form below the fold scrolls into view, or when the visitor
 * focuses, clicks, or submits a form. A form already on screen waits for that
 * use, so the homepage does not download the challenge just by loading.
 */
export function useTurnstileOnEngage(enabled: boolean): {
  formRef: RefObject<HTMLFormElement | null>;
  engaged: boolean;
  arm: () => void;
} {
  const formRef = useRef<HTMLFormElement>(null);
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    if (!enabled || engaged) return;
    const form = formRef.current;
    if (!form) return;
    const engage = () => setEngaged(true);
    const startedBelow = form.getBoundingClientRect().top >= window.innerHeight;
    form.addEventListener("focusin", engage);
    form.addEventListener("pointerdown", engage);
    const observer = startedBelow
      ? new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) engage();
        })
      : null;
    observer?.observe(form);
    return () => {
      form.removeEventListener("focusin", engage);
      form.removeEventListener("pointerdown", engage);
      observer?.disconnect();
    };
  }, [enabled, engaged]);

  return { formRef, engaged, arm: () => setEngaged(true) };
}

/** `onToken` must be stable (e.g. a state setter); it receives "" when the token expires or fails. */
export function TurnstileWidget({ siteKey, onToken }: { siteKey: string; onToken: (token: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let widgetId: string | undefined;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetId = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onToken,
          "expired-callback": () => onToken(""),
          "error-callback": () => onToken(""),
        });
      })
      .catch(() => onToken(""));

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [siteKey, onToken]);

  return <div ref={containerRef} className="appt-turnstile" />;
}
