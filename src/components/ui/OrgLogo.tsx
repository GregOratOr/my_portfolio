"use client";

import { useState } from "react";
import { initialsOf } from "@/lib/navigation";

interface OrgLogoProps {
  org: string;
  /** Path under public/ or an absolute URL. */
  logo?: string;
}

/**
 * Organisation mark with a monogram fallback. Logos are optional and often
 * hotlinked or gitignored, so a missing file must degrade quietly rather than
 * leave a broken image.
 *
 * On hover/focus the real logo expands into a larger preview so recruiters can
 * read marks that are illegible at the 48px chip size. The preview is CSS-only
 * (named `group/logo` so it does not collide with the timeline row's `group`).
 */
export default function OrgLogo({ org, logo }: OrgLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <div
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 font-mono text-sm font-semibold text-muted"
      >
        {initialsOf(org)}
      </div>
    );
  }

  return (
    // Dark tile on purpose: most university and company marks are white-on-transparent
    // PNGs, which disappear against a light surface.
    <div className="group/logo relative shrink-0">
      <div
        tabIndex={0}
        className="flex h-12 w-12 cursor-zoom-in items-center justify-center overflow-hidden rounded-lg border border-line bg-neutral-900 p-1.5 transition group-hover/logo:border-accent/50 group-focus-within/logo:border-accent/50"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- third-party logos, many hotlinked; the optimizer would need remotePatterns per host */}
        <img
          src={logo}
          alt={`${org} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-full left-0 z-30 mb-2 origin-bottom-left scale-95 opacity-0 transition duration-150 ease-out group-hover/logo:scale-100 group-hover/logo:opacity-100 group-focus-within/logo:scale-100 group-focus-within/logo:opacity-100 sm:bottom-auto sm:left-full sm:top-0 sm:mb-0 sm:ml-3 sm:origin-top-left"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-xl border border-line bg-neutral-900 p-3 shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element -- same third-party source as the chip */}
          <img src={logo} alt="" className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
