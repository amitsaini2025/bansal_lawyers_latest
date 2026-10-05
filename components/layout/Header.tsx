"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { megaMenuModules } from "@/lib/megaMenuData";
import { navigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeModuleId, setActiveModuleId] = useState<string>("immigration");
  const [mobileExpandedModule, setMobileExpandedModule] = useState<string | null>("immigration");
  const [mobilePracticeExpanded, setMobilePracticeExpanded] = useState(false);

  const menuButton = useRef<HTMLButtonElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navShellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 960px)");
    const closeOnBreakpointChange = () => {
      setMobileMenuOpen(false);
      setIsMegaOpen(false);
    };
    media.addEventListener("change", closeOnBreakpointChange);
    return () => {
      media.removeEventListener("change", closeOnBreakpointChange);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [...document.querySelectorAll<HTMLElement>("main, footer")];
    const previous = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });
    const frame = requestAnimationFrame(() => {
      navShellRef.current?.querySelector<HTMLElement>(".mobile-nav-panel a[href]")?.focus();
    });
    return () => {
      cancelAnimationFrame(frame);
      background.forEach((element, index) => { element.inert = previous[index]; });
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  // Close menus and synchronize active module on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setIsMegaOpen(false);

      if (pathname.includes("family-lawyers-melbourne")) {
        setActiveModuleId("family");
        setMobileExpandedModule("family");
      } else if (pathname.includes("immigration-lawyers-melbourne")) {
        setActiveModuleId("immigration");
        setMobileExpandedModule("immigration");
      } else if (pathname.includes("commercial-lawyers-melbourne")) {
        setActiveModuleId("commercial");
        setMobileExpandedModule("commercial");
      } else if (pathname.includes("property-lawyers-melbourne")) {
        setActiveModuleId("property");
        setMobileExpandedModule("property");
      } else if (pathname.includes("civil-lawyers-melbourne")) {
        setActiveModuleId("civil");
        setMobileExpandedModule("civil");
      } else if (pathname.includes("criminal-lawyers-melbourne")) {
        setActiveModuleId("criminal");
        setMobileExpandedModule("criminal");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle outside clicks and keyboard shortcuts
  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" && mobileMenuOpen) {
        const focusable = [...(headerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex="0"]'
        ) ?? [])].filter((element) =>
          element.getClientRects().length > 0 && getComputedStyle(element).visibility !== "hidden"
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === "Escape") {
        if (isMegaOpen) {
          setIsMegaOpen(false);
          triggerRef.current?.focus();
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButton.current?.focus();
        }
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isMegaOpen &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setIsMegaOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [mobileMenuOpen, isMegaOpen]);

  // Hover intent helpers with grace timer
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!megaMenuRef.current?.contains(document.activeElement)) setIsMegaOpen(false);
    }, 180);
  };

  const activeModule =
    megaMenuModules.find((m) => m.id === activeModuleId) || megaMenuModules[0];

  const isPracticeActive =
    pathname.includes("immigration-lawyers-melbourne") ||
    pathname.includes("family-lawyers-melbourne") ||
    pathname.includes("commercial-lawyers-melbourne") ||
    pathname.includes("property-lawyers-melbourne") ||
    pathname.includes("civil-lawyers-melbourne") ||
    pathname.includes("criminal-lawyers-melbourne");

  return (
    <header ref={headerRef} className={`site-header${mobileMenuOpen ? " site-header--menu-open" : ""}`}>
      {/* 1. Enhanced Subheader / Utility Top Bar (Desktop only) */}
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          {/* Left: Location & National Presence */}
          <div className="utility-bar__left">
            <span className="utility-flag" title="Australia">
              🇦🇺
            </span>
            <span className="utility-badge">Melbourne CBD</span>
            <span className="utility-sep" aria-hidden="true">|</span>
            <span className="utility-address">Level 8/278 Collins St, Melbourne VIC 3000</span>
            <span className="utility-sep" aria-hidden="true">|</span>
            <a
              href="tel:+61422905860"
              className="utility-phone"
              aria-label="Call Bansal Lawyers"
            >
              <svg
                className="utility-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              <span>0422 905 860</span>
            </a>
          </div>

          {/* Right: Email & Social Media Links */}
          <div className="utility-bar__right">
            <a
              href="mailto:Info@bansallawyers.com.au"
              className="utility-email"
              aria-label="Email Bansal Lawyers"
            >
              <svg
                className="utility-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Info@bansallawyers.com.au</span>
            </a>

            <div className="utility-socials" aria-label="Social media links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/bansal-lawyers/"
                target="_blank"
                rel="noopener noreferrer"
                className="utility-social-link"
                aria-label="Bansal Lawyers on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/bansallawyers/"
                target="_blank"
                rel="noopener noreferrer"
                className="utility-social-link"
                aria-label="Bansal Lawyers on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bansallawyers/"
                target="_blank"
                rel="noopener noreferrer"
                className="utility-social-link"
                aria-label="Bansal Lawyers on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/61422905860"
                target="_blank"
                rel="noopener noreferrer"
                className="utility-social-link"
                aria-label="Chat with Bansal Lawyers on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.7-.71 1.7 0 1 .73 1.97.83 2.11.1.13 1.4 2.2 3.44 3.05 1.71.71 2.06.57 2.43.53.37-.03 1.2-.49 1.37-.96.17-.48.17-.89.12-.97-.05-.08-.19-.13-.41-.24-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11-.15.22-.59.71-.72.86-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.43-.37-.37-.5-.38l-.43-.01z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Header Row: Logo Left, Nav Center, CTA & Hamburger Right */}
      <div className="container header-main">
        {/* Left: Brand Logo */}
        <div className="header-brand-col">
          <Link
            className="brand"
            href="/"
            aria-label="Bansal Lawyers home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/logo.webp"
              alt="Bansal Lawyers"
              width={212}
              height={56}
              priority
              className="brand__img"
            />
          </Link>
        </div>

        {/* Center / Slide-out: Navigation Shell */}
        <div
          ref={navShellRef}
          id="primary-navigation"
          className={`nav-shell${mobileMenuOpen ? " nav-shell--open" : ""}`}
        >
          {/* A. Desktop Navigation List */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul className="nav-list">
              {navigation.map((item) => {
                if (item.isMegaMenu) {
                  return (
                    <li
                      key={item.label}
                      className="nav-item--mega"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) setIsMegaOpen(false);
                      }}
                    >
                      <button
                        ref={triggerRef}
                        type="button"
                        className={`nav-trigger ${isMegaOpen || isPracticeActive ? "nav-trigger--active" : ""}`}
                        aria-expanded={isMegaOpen}
                        aria-haspopup="true"
                        aria-controls="practice-areas-menu"
                        onClick={() => setIsMegaOpen((prev) => !prev)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`nav-trigger__chevron ${isMegaOpen ? "nav-trigger__chevron--open" : ""}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {/* Desktop Mega Menu Dropdown */}
                      {isMegaOpen && (
                        <div
                          ref={megaMenuRef}
                          id="practice-areas-menu"
                          className="mega-menu"
                          role="region"
                          aria-label="Practice areas menu"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="mega-menu__body">
                            {/* Left Column: Core Modules */}
                            <div className="mega-menu__left" role="group" aria-label="Core practice areas">
                              <div className="mega-menu__section-title">
                                Core Practice Areas
                              </div>
                              <ul className="mega-modules-list">
                                {megaMenuModules.map((module) => {
                                  const isSelected = module.id === activeModuleId;
                                  return (
                                    <li key={module.id}>
                                      <Link
                                        href={module.href}
                                        className={`mega-module-item ${isSelected ? "mega-module-item--active" : ""}`}
                                        onMouseEnter={() => setActiveModuleId(module.id)}
                                        onFocus={() => setActiveModuleId(module.id)}
                                        onClick={() => setIsMegaOpen(false)}
                                      >
                                        <div className="mega-module-item__info">
                                          <div className="mega-module-item__title-row">
                                            <span className="mega-module-item__title">
                                              {module.title}
                                            </span>
                                          </div>
                                          <span className="mega-module-item__tagline">
                                            {module.tagline}
                                          </span>
                                        </div>
                                        <svg
                                          className="mega-module-item__arrow"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            {/* Right Column: Dynamic Sub-pages of Active Module */}
                            <div className="mega-menu__right">
                              <div className="mega-subpages-header">
                                <div>
                                  <div className="mega-subpages-title-row">
                                    <h3 className="mega-subpages-title">
                                      {activeModule.title} Matters
                                    </h3>
                                    {activeModule.status === "coming-soon" && (
                                      <span className="badge-tag badge-tag--soon-solid">
                                        Subpages Coming Soon
                                      </span>
                                    )}
                                  </div>
                                  <p className="mega-subpages-desc">
                                    {activeModule.description}
                                  </p>
                                </div>
                                <Link
                                  href={activeModule.href}
                                  className="mega-subpages-overview-btn"
                                  onClick={() => setIsMegaOpen(false)}
                                >
                                  View {activeModule.title} Overview →
                                </Link>
                              </div>

                              {/* Status banner for modules whose subpages are coming soon */}
                              {activeModule.status === "coming-soon" && (
                                <div className="mega-status-notice">
                                  <span className="mega-status-notice__icon">ℹ</span>
                                  <span>
                                    Dedicated in-depth subpages for {activeModule.title} are currently under preparation. Our team actively represents clients in all of these practice areas today.
                                  </span>
                                </div>
                              )}

                              <div className="mega-subpages-grid">
                                {activeModule.subPages.map((subPage) => (
                                  <Link
                                    key={subPage.title}
                                    href={subPage.href}
                                    className="mega-subpage-card"
                                    onClick={() => setIsMegaOpen(false)}
                                  >
                                    <div className="mega-subpage-card__main">
                                      <div className="mega-subpage-card__header">
                                        <span className="mega-subpage-card__title">
                                          {subPage.title}
                                        </span>
                                        {subPage.badge && (
                                          <span className="badge-tag badge-tag--mini">
                                            {subPage.badge}
                                          </span>
                                        )}
                                      </div>
                                      {subPage.description && (
                                        <span className="mega-subpage-card__desc">
                                          {subPage.description}
                                        </span>
                                      )}
                                    </div>
                                    <span className="mega-subpage-card__arrow" aria-hidden="true">
                                      →
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Bottom banner for mega menu */}
                          <div className="mega-menu__footer">
                            <div className="mega-menu__footer-left">
                              <span className="mega-menu__footer-dot" aria-hidden="true" />
                              <span>
                                Need immediate assistance? Call our Melbourne CBD team directly on{" "}
                                <a href="tel:+61422905860" className="mega-menu__footer-tel">
                                  0422 905 860
                                </a>
                              </span>
                            </div>
                            <Link
                              href="/contact"
                              className="button button--primary button--compact"
                              onClick={() => setIsMegaOpen(false)}
                            >
                              Book Consultation
                            </Link>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* B. Mobile Navigation Drawer Panel (Exact 1:1 mirror of Desktop Browser Menu) */}
          <div className="mobile-nav-panel" inert={!mobileMenuOpen}>
            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              {/* 1. Home */}
              <Link
                href="/"
                className={`mobile-nav-link ${pathname === "/" ? "mobile-nav-link--active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Home</span>
              </Link>

              {/* 2. About */}
              <Link
                href="/about"
                className={`mobile-nav-link ${pathname.startsWith("/about") ? "mobile-nav-link--active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>About</span>
              </Link>

              {/* 3. Practice Areas (Accordion matching Desktop Mega Menu) */}
              <div className="mobile-practice-accordion">
                <button
                  type="button"
                  className={`mobile-accordion-toggle ${mobilePracticeExpanded ? "mobile-accordion-toggle--open" : ""}`}
                  onClick={() => setMobilePracticeExpanded((prev) => !prev)}
                  aria-expanded={mobilePracticeExpanded}
                >
                  <span className="mobile-accordion-title">
                    Practice Areas
                  </span>
                  <svg
                    className={`mobile-accordion-chevron ${mobilePracticeExpanded ? "mobile-accordion-chevron--open" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {mobilePracticeExpanded && (
                  <div className="mobile-practice-content">
                    {megaMenuModules.map((module) => {
                      const isExpanded = mobileExpandedModule === module.id;
                      return (
                        <div key={module.id} className="mobile-module-block">
                          <button
                            type="button"
                            className={`mobile-module-header ${isExpanded ? "mobile-module-header--active" : ""}`}
                            onClick={() =>
                              setMobileExpandedModule((prev) =>
                                prev === module.id ? null : module.id
                              )
                            }
                            aria-expanded={isExpanded}
                          >
                            <div className="mobile-module-header__title">
                              <span>{module.title}</span>
                              {module.status === "coming-soon" && (
                                <span className="badge-tag badge-tag--mini">Coming Soon</span>
                              )}
                            </div>
                            <svg
                              className={`mobile-module-chevron ${isExpanded ? "mobile-module-chevron--open" : ""}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>

                          {isExpanded && (
                            <div className="mobile-module-sublinks">
                              <Link
                                href={module.href}
                                className="mobile-sublink mobile-sublink--overview"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                View {module.title} Overview →
                              </Link>
                              {module.subPages.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.href}
                                  className="mobile-sublink"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <span>{sub.title}</span>
                                  {sub.badge && (
                                    <span className="badge-tag badge-tag--mini">
                                      {sub.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 4. Recent Cases */}
              <Link
                href="/recent-cases"
                className={`mobile-nav-link ${pathname.startsWith("/recent-cases") || pathname.includes("thakur-v-minister") || pathname.includes("jaggi-v-minister") ? "mobile-nav-link--active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Recent Cases</span>
              </Link>

              {/* 5. Blog */}
              <Link
                href="/blog"
                className={`mobile-nav-link ${pathname.startsWith("/blog") ? "mobile-nav-link--active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Blog</span>
              </Link>

              {/* 6. Contact */}
              <Link
                href="/contact"
                className={`mobile-nav-link ${pathname.startsWith("/contact") ? "mobile-nav-link--active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Contact</span>
              </Link>
            </nav>

            {/* 6. Consultation CTA Button */}
            <div className="mobile-drawer-cta">
              <Link
                href="/contact"
                className="button button--primary button--full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Right: Desktop CTA + Mobile Quick Call + Mobile Menu Toggle */}
        <div className="header-actions-col">
          {/* Desktop Consultation Button */}
          <Link
            className="button button--primary button--compact header-cta-desktop"
            href="/contact"
          >
            Book Consultation
          </Link>

          {/* Mobile Quick Call Button */}
          <a
            href="tel:+61422905860"
            className="header-mobile-call-btn"
            aria-label="Call Bansal Lawyers"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
            </svg>
            <span>Call</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={menuButton}
            className={`menu-toggle ${mobileMenuOpen ? "menu-toggle--open" : ""}`}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? (
              <svg className="menu-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="menu-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
