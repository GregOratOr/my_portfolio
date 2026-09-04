"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NAV_SECTIONS, initialsOf, type NavSectionId } from "@/lib/navigation";

interface SiteNavProps {
  name: string;
  resumeUrl?: string;
}

/**
 * Sticky nav with scroll-spy and a working mobile menu. Slim enough to stay
 * out of the way while keeping every section one click away.
 */
export default function SiteNav({ name, resumeUrl }: SiteNavProps) {
  const [active, setActive] = useState<NavSectionId>("top");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy: the topmost section intersecting the upper half of the viewport wins.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = visible[0]?.target.id;
        if (id) setActive(id as NavSectionId);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    for (const section of NAV_SECTIONS) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="print-hidden sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-fg transition hover:text-accent"
        >
          {initialsOf(name)}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_SECTIONS.filter((section) => section.id !== "top").map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active === section.id ? "true" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm transition ${
                  active === section.id
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {resumeUrl ? (
            <a
              href={resumeUrl}
              className="hidden rounded-lg border border-accent bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-bg sm:inline-flex"
            >
              Resume
            </a>
          ) : null}
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition hover:border-accent hover:text-accent md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <ul id="mobile-menu" className="border-t border-line bg-surface px-6 py-2 md:hidden">
          {NAV_SECTIONS.filter((section) => section.id !== "top").map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block border-b border-line/60 py-3 text-sm last:border-b-0 ${
                  active === section.id ? "text-accent" : "text-muted"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
          {resumeUrl ? (
            <li>
              <a
                href={resumeUrl}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-accent"
              >
                Resume
              </a>
            </li>
          ) : null}
        </ul>
      ) : null}
    </header>
  );
}
