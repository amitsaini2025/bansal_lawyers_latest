"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeToMotionPreference(listener: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", listener);
  return () => preference.removeEventListener("change", listener);
}

const getMotionPreference = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerMotionPreference = () => false;

const services = [
  "Immigration Law",
  "Family Law",
  "Criminal Law",
  "Commercial Law",
  "Property Law",
  "Civil Law",
];

export function TypingHeroTitle({
  constantPrefix = "Lawyers in Melbourne for",
  connector,
  items = services,
}: {
  constantPrefix?: string;
  connector?: string;
  items?: string[];
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference, getMotionPreference, getServerMotionPreference
  );
  const item = items[index] ?? items[0] ?? "";

  const fullConstant = connector ? `${constantPrefix} ${connector}` : constantPrefix;

  // Typing logic
  useEffect(() => {
    if (reducedMotion || items.length === 0) return;
    if (subIndex === item.length + 1 && !isDeleting) {
      // Pause at full word
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      // Move to next word after a brief pause
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % items.length);
      }, 200);
      return () => clearTimeout(timeout);
    }

    const typingSpeed = isDeleting ? 45 : 85;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, items, item, reducedMotion]);

  // Cursor blink
  useEffect(() => {
    if (reducedMotion) return;
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, [reducedMotion]);

  const currentWord = reducedMotion ? (items[0] ?? "") : item.substring(0, subIndex);

  return (
    <span className="hero-typing-title">
      {/* Screen reader & SEO accessible text for search engine indexing */}
      <span className="sr-only">
        Lawyers in Melbourne for Immigration Law, Family Law, Criminal Law, Commercial Law, Property Law and Civil Law
      </span>

      {/* Visual Typing Animation */}
      <span aria-hidden="true" className="hero-typing-visible">
        <span className="hero-typing-constant-line">{fullConstant}</span>
        <span className="hero-typing-dynamic-line">
          <span className="hero-typing-word">{currentWord}</span>
          <span
            className={`hero-typing-cursor ${
              blink ? "hero-typing-cursor--visible" : "hero-typing-cursor--hidden"
            }`}
          >
            |
          </span>
        </span>
      </span>
    </span>
  );
}
