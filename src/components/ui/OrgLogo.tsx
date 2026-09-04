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
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-neutral-900 p-1.5">
      {/* eslint-disable-next-line @next/next/no-img-element -- third-party logos, many hotlinked; the optimizer would need remotePatterns per host */}
      <img
        src={logo}
        alt={`${org} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
