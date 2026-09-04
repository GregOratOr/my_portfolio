import type { ReactNode } from "react";

interface SectionProps {
  /** Anchor target, also used by the nav's scroll-spy. */
  id: string;
  /** Small label above the heading. */
  eyebrow?: string;
  title: string;
  /** Short line under the heading. */
  lede?: string;
  /** Alternate surface tint, for banding sections apart. */
  tinted?: boolean;
  children: ReactNode;
}

/**
 * The shared shell for every page section: consistent rhythm, width, and
 * heading hierarchy. Sections size to their content -- no forced full-height
 * slides, so the page stays skimmable.
 */
export default function Section({ id, eyebrow, title, lede, tinted, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line py-20 sm:py-24 ${tinted ? "bg-surface-2" : "bg-bg"}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <header className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
          {lede ? <p className="mt-3 text-base leading-relaxed text-muted">{lede}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
