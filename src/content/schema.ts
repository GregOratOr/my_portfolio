import { z } from "zod";
import { TECH_REGISTRY, type TechId } from "@/lib/tech/registry";
import { SOCIAL_CHANNELS } from "@/lib/icons/social";

/**
 * Every content file is validated against these schemas at import time, so a
 * typo in a gitignored content file fails the build with a field path instead
 * of rendering a blank section.
 */

const techId = z.custom<TechId>((value) => typeof value === "string" && value in TECH_REGISTRY, {
  message: "Unknown tech id -- add it to TECH_REGISTRY in src/lib/tech/registry.ts first",
});

/** Paragraphs of rich text. An empty string is a deliberate paragraph break. */
const paragraphs = z.array(z.string()).default([]);

export const skillLevelSchema = z.enum(["expert", "core", "new", "exploring"]);

export const contactSchema = z.object({
  channel: z.enum(SOCIAL_CHANNELS),
  /** Overrides the channel's default label. */
  label: z.string().optional(),
  /** Human-readable value, e.g. the address itself. */
  value: z.string().optional(),
  href: z.string().min(1),
  /** Show in the primary call-to-action rather than the icon row. */
  primary: z.boolean().default(false),
});

export const highlightSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const siteSchema = z.object({
  /** Canonical origin, used for metadata and Open Graph URLs. */
  url: z.string().url(),
  title: z.string().min(1),
  description: z.string().min(1),
  /** Path under public/, or an absolute URL. */
  ogImage: z.string().optional(),
});

export const profileSchema = z.object({
  name: z.string().min(1),
  /** Job title shown above the name. */
  role: z.string().min(1),
  location: z.string().min(1),
  /** Short availability note, e.g. "Open to AI/ML roles from Jan 2026". */
  availability: z.string().optional(),
  intro: paragraphs,
  /** The at-a-glance band: three to five label/value pairs. */
  highlights: z.array(highlightSchema).default([]),
  /** Path under public/ (gitignored in this repo). Omit to hide the CV button. */
  resumeUrl: z.string().optional(),
  /** Path under public/ for the portrait. Omit to fall back to a monogram. */
  avatarUrl: z.string().optional(),
  contacts: z.array(contactSchema).min(1),
  site: siteSchema,
});

export const skillsSchema = z.object({
  title: z.string().default("Tech Stack"),
  desc: paragraphs,
  /** Everything worth showing, grouped by registry category at render time. */
  skills: z
    .array(
      z.object({
        id: techId,
        level: skillLevelSchema.optional(),
      }),
    )
    .min(1),
  /** The short "currently exploring" list. */
  learning: z.array(techId).default([]),
});

export const timelineItemSchema = z.object({
  title: z.string().min(1),
  org: z.string().min(1),
  location: z.string().optional(),
  date: z.string().min(1),
  /** Path under public/ or an absolute URL. Falls back to an org monogram. */
  logo: z.string().optional(),
  bullets: z.array(z.string()).default([]),
  tech: z.array(techId).default([]),
});

export const projectSchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1),
  /** One-line outcome, shown before the bullets. */
  summary: z.string().optional(),
  /** Omit to render a non-clickable card. */
  link: z.string().optional(),
  images: z.array(z.string()).default([]),
  bullets: z.array(z.string()).default([]),
  tech: z.array(techId).default([]),
  /** Pin to the front of the grid. */
  featured: z.boolean().default(false),
});

export const experienceSchema = z.array(timelineItemSchema);
export const educationSchema = z.array(timelineItemSchema);
export const projectsSchema = z.array(projectSchema);

// Inferred output types -- what components consume.
export type Site = z.output<typeof siteSchema>;
export type Contact = z.output<typeof contactSchema>;
export type Highlight = z.output<typeof highlightSchema>;
export type Profile = z.output<typeof profileSchema>;
export type Skills = z.output<typeof skillsSchema>;
export type SkillLevel = z.output<typeof skillLevelSchema>;
export type TimelineItem = z.output<typeof timelineItemSchema>;
export type Project = z.output<typeof projectSchema>;

// Input types -- what content files are annotated with (defaults optional).
export type ProfileInput = z.input<typeof profileSchema>;
export type SkillsInput = z.input<typeof skillsSchema>;
export type TimelineItemInput = z.input<typeof timelineItemSchema>;
export type ProjectInput = z.input<typeof projectSchema>;

/** Parses a content module, prefixing failures with the file it came from. */
export function parseContent<S extends z.ZodType>(
  schema: S,
  value: unknown,
  source: string,
): z.output<S> {
  const result = schema.safeParse(value);
  if (result.success) return result.data;

  const issues = result.error.issues
    .map((issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("\n");
  throw new Error(`Invalid content in ${source}:\n${issues}`);
}
