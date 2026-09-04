/**
 * TEMPLATE -- copy to `skills.ts` (or run `npm run setup:content`) and edit.
 *
 * Every `id` must exist in TECH_REGISTRY (src/lib/tech/registry.ts). To add a
 * technology: drop `public/icons/tech/<slug>.svg` in place, then add an entry to
 * the registry. Nothing here stores colours -- the registry names an accent
 * token and src/lib/theme/accents.ts owns the actual classes.
 *
 * Levels are optional: "expert" | "core" | "new" | "exploring".
 */
import type { SkillsInput } from "./schema";

export const SKILLS: SkillsInput = {
  title: "My Toolkit",
  desc: [
    "A short paragraph about how you pick your tools and where you are heading next.",
    "",
    "Supports **bold**, *italic* and __underline__, and an empty string adds a gap.",
  ],

  // Order is free -- the page groups these by category automatically.
  skills: [
    { id: "PYTHON", level: "expert" },
    { id: "JAVASCRIPT", level: "core" },
    { id: "NEXTJS", level: "core" },
    { id: "REACT" },
    { id: "POSTGRESQL" },
    { id: "DOCKER", level: "new" },
    { id: "GIT", level: "core" },
    { id: "GITHUB" },
    { id: "LINUX" },
    { id: "RUST", level: "exploring" },
  ],

  // The small "currently exploring" panel.
  learning: ["RUST", "DOCKER"],
};
