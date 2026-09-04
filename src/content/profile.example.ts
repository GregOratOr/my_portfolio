/**
 * TEMPLATE -- copy to `profile.ts` (or run `npm run setup:content`) and edit.
 *
 * `profile.ts` is gitignored, so your real name, email, and links never reach
 * the public repository. This file is the committed placeholder that keeps a
 * fresh clone building.
 *
 * Available contact channels: email, github, linkedin, leetcode, instagram, x,
 * scholar, website (see src/lib/icons/social.ts).
 */
import type { ProfileInput } from "./schema";

export const PROFILE: ProfileInput = {
  name: "Ada Example",
  role: "Software Engineer",
  location: "Remote",
  availability: "Open to backend and platform roles",

  // Supports **bold**, *italic*, __underline__. An empty string "" adds a gap.
  intro: [
    "I build **reliable systems** and the tooling that keeps them honest — data pipelines, services, and the odd developer productivity hack.",
  ],

  // The at-a-glance band shown under the hero. Four or five pairs works best.
  highlights: [
    { label: "Focus", value: "Distributed systems, data pipelines" },
    { label: "Education", value: "B.Sc. Computer Science, Example University" },
    { label: "Core stack", value: "Python, TypeScript, Postgres, Docker" },
    { label: "Location", value: "Remote (UTC+0)" },
  ],

  // Put your CV at public/resume.pdf (gitignored). Omit to hide the button.
  resumeUrl: "/resume.pdf",

  // Optional portrait at public/images/<file>. Omit to show a monogram instead.
  // avatarUrl: "/images/portrait.jpg",

  contacts: [
    {
      channel: "email",
      value: "you@example.com",
      href: "mailto:you@example.com",
      primary: true, // primary = the big "say hello" button
    },
    { channel: "github", href: "https://github.com/your-handle" },
    { channel: "linkedin", href: "https://www.linkedin.com/in/your-handle/" },
  ],

  site: {
    url: "https://example.com",
    title: "Ada Example — Software Engineer",
    description: "Portfolio of Ada Example: distributed systems, data pipelines, and developer tooling.",
  },
};
