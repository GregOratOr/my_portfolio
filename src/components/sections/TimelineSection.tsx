"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import OrgLogo from "@/components/ui/OrgLogo";
import TechChip from "@/components/ui/TechChip";
import { parseRichText } from "@/lib/richtext";
import type { TimelineItem } from "@/content/schema";

type Tab = "work" | "education";

interface TimelineSectionProps {
  experience: readonly TimelineItem[];
  education: readonly TimelineItem[];
}

export default function TimelineSection({ experience, education }: TimelineSectionProps) {
  const [tab, setTab] = useState<Tab>("work");
  const items = tab === "work" ? experience : education;

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I have worked and studied"
      lede="Roles, dates, and what actually shipped."
    >
      <div
        role="tablist"
        aria-label="Timeline"
        className="mb-10 inline-flex rounded-lg border border-line bg-surface p-1"
      >
        {(
          [
            ["work", "Work", experience.length],
            ["education", "Education", education.length],
          ] as const
        ).map(([value, label, count]) => (
          <button
            key={value}
            role="tab"
            type="button"
            aria-selected={tab === value}
            onClick={() => setTab(value)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
              tab === value ? "bg-accent text-bg" : "text-muted hover:text-fg"
            }`}
          >
            {label}
            <span className="ml-1.5 font-mono text-[10px] opacity-70">{count}</span>
          </button>
        ))}
      </div>

      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {items.map((item) => (
          <li key={`${item.org}-${item.title}`} className="group relative">
            <span className="absolute -left-[calc(1.5rem+1px)] top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2rem+1px)]" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <OrgLogo org={item.org} logo={item.logo} />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-fg">{item.title}</h3>
                  <span className="font-mono text-xs text-muted">{item.date}</span>
                </div>

                <p className="mt-0.5 text-sm text-accent">
                  {item.org}
                  {item.location ? <span className="text-muted"> &middot; {item.location}</span> : null}
                </p>

                {item.bullets.length > 0 ? (
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span
                          className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/60"
                          aria-hidden="true"
                        />
                        <span>{parseRichText(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.tech.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.tech.map((id) => (
                      <li key={id}>
                        <TechChip id={id} size="sm" />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
