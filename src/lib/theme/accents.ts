/**
 * Accent colours as tokens, not class strings.
 *
 * Content and the tech registry only ever name a token ("amber"). The literal
 * Tailwind classes live here, in a committed file, so Tailwind's scanner always
 * finds them -- gitignored content can never make a colour disappear.
 */

export const ACCENT_TOKENS = [
  "neutral",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

export type AccentToken = (typeof ACCENT_TOKENS)[number];

export interface AccentClasses {
  /** Foreground colour, legible on both themes. */
  text: string;
  /** Tinted surface for chips and badges. */
  surface: string;
  /** Hairline that matches the surface tint. */
  border: string;
  /** Border colour revealed on hover of an ancestor `.group`. */
  groupHoverBorder: string;
  /** Solid swatch, for dots and rails. */
  solid: string;
}

export const ACCENTS: Record<AccentToken, AccentClasses> = {
  neutral: {
    text: "text-neutral-700 dark:text-neutral-300",
    surface: "bg-neutral-500/10",
    border: "border-neutral-500/25",
    groupHoverBorder: "group-hover:border-neutral-500/60",
    solid: "bg-neutral-500",
  },
  red: {
    text: "text-red-700 dark:text-red-400",
    surface: "bg-red-500/10",
    border: "border-red-500/25",
    groupHoverBorder: "group-hover:border-red-500/60",
    solid: "bg-red-500",
  },
  orange: {
    text: "text-orange-700 dark:text-orange-400",
    surface: "bg-orange-500/10",
    border: "border-orange-500/25",
    groupHoverBorder: "group-hover:border-orange-500/60",
    solid: "bg-orange-500",
  },
  amber: {
    text: "text-amber-700 dark:text-amber-400",
    surface: "bg-amber-500/10",
    border: "border-amber-500/25",
    groupHoverBorder: "group-hover:border-amber-500/60",
    solid: "bg-amber-500",
  },
  yellow: {
    text: "text-yellow-700 dark:text-yellow-300",
    surface: "bg-yellow-500/10",
    border: "border-yellow-500/25",
    groupHoverBorder: "group-hover:border-yellow-500/60",
    solid: "bg-yellow-500",
  },
  lime: {
    text: "text-lime-700 dark:text-lime-400",
    surface: "bg-lime-500/10",
    border: "border-lime-500/25",
    groupHoverBorder: "group-hover:border-lime-500/60",
    solid: "bg-lime-500",
  },
  green: {
    text: "text-green-700 dark:text-green-400",
    surface: "bg-green-500/10",
    border: "border-green-500/25",
    groupHoverBorder: "group-hover:border-green-500/60",
    solid: "bg-green-500",
  },
  emerald: {
    text: "text-emerald-700 dark:text-emerald-400",
    surface: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    groupHoverBorder: "group-hover:border-emerald-500/60",
    solid: "bg-emerald-500",
  },
  teal: {
    text: "text-teal-700 dark:text-teal-400",
    surface: "bg-teal-500/10",
    border: "border-teal-500/25",
    groupHoverBorder: "group-hover:border-teal-500/60",
    solid: "bg-teal-500",
  },
  cyan: {
    text: "text-cyan-700 dark:text-cyan-400",
    surface: "bg-cyan-500/10",
    border: "border-cyan-500/25",
    groupHoverBorder: "group-hover:border-cyan-500/60",
    solid: "bg-cyan-500",
  },
  sky: {
    text: "text-sky-700 dark:text-sky-400",
    surface: "bg-sky-500/10",
    border: "border-sky-500/25",
    groupHoverBorder: "group-hover:border-sky-500/60",
    solid: "bg-sky-500",
  },
  blue: {
    text: "text-blue-700 dark:text-blue-400",
    surface: "bg-blue-500/10",
    border: "border-blue-500/25",
    groupHoverBorder: "group-hover:border-blue-500/60",
    solid: "bg-blue-500",
  },
  indigo: {
    text: "text-indigo-700 dark:text-indigo-400",
    surface: "bg-indigo-500/10",
    border: "border-indigo-500/25",
    groupHoverBorder: "group-hover:border-indigo-500/60",
    solid: "bg-indigo-500",
  },
  violet: {
    text: "text-violet-700 dark:text-violet-400",
    surface: "bg-violet-500/10",
    border: "border-violet-500/25",
    groupHoverBorder: "group-hover:border-violet-500/60",
    solid: "bg-violet-500",
  },
  purple: {
    text: "text-purple-700 dark:text-purple-400",
    surface: "bg-purple-500/10",
    border: "border-purple-500/25",
    groupHoverBorder: "group-hover:border-purple-500/60",
    solid: "bg-purple-500",
  },
  fuchsia: {
    text: "text-fuchsia-700 dark:text-fuchsia-400",
    surface: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/25",
    groupHoverBorder: "group-hover:border-fuchsia-500/60",
    solid: "bg-fuchsia-500",
  },
  pink: {
    text: "text-pink-700 dark:text-pink-400",
    surface: "bg-pink-500/10",
    border: "border-pink-500/25",
    groupHoverBorder: "group-hover:border-pink-500/60",
    solid: "bg-pink-500",
  },
  rose: {
    text: "text-rose-700 dark:text-rose-400",
    surface: "bg-rose-500/10",
    border: "border-rose-500/25",
    groupHoverBorder: "group-hover:border-rose-500/60",
    solid: "bg-rose-500",
  },
};

export function accentClasses(token: AccentToken): AccentClasses {
  return ACCENTS[token];
}
