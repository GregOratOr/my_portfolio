/**
 * TEMPLATE -- copy to `experience.ts` (or run `npm run setup:content`) and edit.
 *
 * `logo` is optional and takes either a path under `public/` (for example
 * "/images/logos/acme.png") or an absolute URL. When it is missing or fails to
 * load, the timeline falls back to a monogram built from the org name -- so a
 * gitignored logo file can never break the build.
 *
 * `tech` ids come from TECH_REGISTRY (src/lib/tech/registry.ts).
 */
import type { TimelineItemInput } from "./schema";

export const EXPERIENCE: TimelineItemInput[] = [
  {
    title: "Senior Software Engineer",
    org: "Acme Corp",
    location: "Remote",
    date: "January 2024 - Present",
    tech: ["PYTHON", "DOCKER", "POSTGRESQL"],
    bullets: [
      "Led the migration of the billing service to an event-driven design, cutting p99 latency by **40%**.",
      "Introduced contract tests across four services, removing the shared staging bottleneck.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Startup Example",
    location: "London, UK",
    date: "June 2021 - December 2023",
    tech: ["JAVASCRIPT", "NEXTJS"],
    bullets: [
      "Shipped the customer dashboard from prototype to **12k monthly users**.",
      "Owned the release pipeline and on-call rotation for the web tier.",
    ],
  },
];

export const EDUCATION: TimelineItemInput[] = [
  {
    title: "B.Sc. Computer Science",
    org: "Example University",
    location: "London, UK",
    date: "September 2017 - June 2021",
    tech: ["PYTHON", "JAVA"],
    bullets: [
      "**GPA:** 3.8/4.0",
      "**Coursework:** Algorithms, Databases, Distributed Systems, Machine Learning.",
      "**Dissertation:** graph-based recommendation on sparse interaction data.",
    ],
  },
];
