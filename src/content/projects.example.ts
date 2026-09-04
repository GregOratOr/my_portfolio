/**
 * TEMPLATE -- copy to `projects.ts` (or run `npm run setup:content`) and edit.
 *
 * Put screenshots in `public/images/projects/` and reference them by path.
 * `featured: true` pins a project to the front of the grid. Omit `link` to
 * render a card that is not clickable. Cards with several images cross-fade
 * through them on hover.
 */
import type { ProjectInput } from "./schema";

export const PROJECTS: ProjectInput[] = [
  {
    title: "Example Data Platform",
    date: "March 2024 - Present",
    featured: true,
    // One line, outcome first. This is the part recruiters actually read.
    summary: "Batch and streaming ingestion for 40M events/day on a single Postgres cluster.",
    link: "https://github.com/your-handle/example-data-platform",
    images: ["/images/projects/placeholder.svg"],
    bullets: [
      "Designed the ingestion layer around **idempotent writes**, making replays safe.",
      "Cut warehouse spend **60%** by moving cold partitions to object storage.",
    ],
    tech: ["PYTHON", "POSTGRESQL", "DOCKER"],
  },
  {
    title: "Example Web App",
    date: "January 2023 - February 2024",
    summary: "Next.js dashboard with offline-first sync and a shared design system.",
    link: "https://github.com/your-handle/example-web-app",
    images: ["/images/projects/placeholder.svg"],
    bullets: [
      "Built an offline-first sync layer on top of **IndexedDB**.",
      "Shipped a component library adopted by *three* other teams.",
    ],
    tech: ["NEXTJS", "REACT", "JAVASCRIPT"],
  },
];
