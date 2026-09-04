import {
  educationSchema,
  experienceSchema,
  parseContent,
  profileSchema,
  projectsSchema,
  skillsSchema,
} from "./schema";

import { PROFILE } from "./profile";
import { SKILLS } from "./skills";
import { EDUCATION, EXPERIENCE } from "./experience";
import { PROJECTS } from "./projects";

/**
 * The one place the app reads content from.
 *
 * The four modules below are gitignored -- `npm run setup:content` creates them
 * from the committed `*.example.ts` templates, so a fresh clone always builds.
 * Validation happens here, at build time.
 */

export const profile = parseContent(profileSchema, PROFILE, "src/content/profile.ts");
export const skills = parseContent(skillsSchema, SKILLS, "src/content/skills.ts");
export const experience = parseContent(experienceSchema, EXPERIENCE, "src/content/experience.ts");
export const education = parseContent(educationSchema, EDUCATION, "src/content/experience.ts");
export const projects = parseContent(projectsSchema, PROJECTS, "src/content/projects.ts");

/** Projects with `featured: true` first, original order otherwise. */
export const sortedProjects = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
);

export const primaryContact = profile.contacts.find((contact) => contact.primary);
export const socialContacts = profile.contacts.filter((contact) => !contact.primary);

export type * from "./schema";
