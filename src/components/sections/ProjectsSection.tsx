import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/content/schema";

interface ProjectsSectionProps {
  projects: readonly Project[];
}

/** A plain responsive grid: everything is reachable without clicking through pages. */
export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      lede="Research and engineering projects, newest first."
      tinted
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
