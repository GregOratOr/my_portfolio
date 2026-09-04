import type { ReactNode } from "react";

/**
 * Inline formatter for content strings. Supports `**bold**`, `*italic*` and
 * `__underline__`, and returns React nodes -- never `dangerouslySetInnerHTML`.
 * Nested markers are not supported.
 */
export function parseRichText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*|__.*?__|\*.*?\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={index} className="font-semibold text-fg">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("__") && part.endsWith("__") && part.length > 4) {
      return (
        <span key={index} className="underline decoration-accent/60 decoration-2 underline-offset-4">
          {part.slice(2, -2)}
        </span>
      );
    }

    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={index} className="italic text-fg/90">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}

interface RichTextProps {
  /** One entry per paragraph. An empty string renders a paragraph break. */
  paragraphs: readonly string[];
  className?: string;
  paragraphClassName?: string;
}

/** Renders an array of content strings as formatted paragraphs. */
export function RichText({ paragraphs, className = "", paragraphClassName = "" }: RichTextProps) {
  return (
    <div className={className}>
      {paragraphs.map((paragraph, i) =>
        paragraph ? (
          <p key={i} className={paragraphClassName}>
            {parseRichText(paragraph)}
          </p>
        ) : (
          <div key={i} className="h-4" aria-hidden="true" />
        ),
      )}
    </div>
  );
}
