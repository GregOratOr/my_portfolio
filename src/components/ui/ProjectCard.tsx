"use client";

import { useEffect, useRef, useState } from "react";
import TechChip from "@/components/ui/TechChip";
import { parseRichText } from "@/lib/richtext";
import type { Project } from "@/content/schema";

const PLACEHOLDER = "/images/projects/placeholder.svg";
const SLIDE_INTERVAL_MS = 1400;

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const images = project.images.length > 0 ? project.images : [PLACEHOLDER];
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function stop() {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }

  // Only guards against unmounting mid-slideshow; hover handlers do the work.
  useEffect(() => {
    const handle = timer;
    return () => {
      if (handle.current) clearInterval(handle.current);
    };
  }, []);

  function onEnter() {
    if (images.length < 2 || timer.current) return;
    timer.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
  }

  function onLeave() {
    stop();
    setIndex(0);
  }

  const heading = project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-fg transition hover:text-accent"
    >
      {project.title}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5 opacity-60"
        aria-hidden="true"
      >
        <path d="M14 4h6v6M20 4l-8.5 8.5M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
      </svg>
    </a>
  ) : (
    project.title
  );

  return (
    <article
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition hover:border-accent/50"
    >
      <div className="relative aspect-16/9 overflow-hidden bg-surface-2">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element -- static export, images ship unoptimized either way
          <img
            key={src + i}
            src={src}
            alt={i === 0 ? project.title : ""}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {images.length > 1 ? (
          <span className="absolute bottom-2 right-2 rounded-md bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] text-muted backdrop-blur-sm">
            {index + 1}/{images.length}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug">{heading}</h3>
          <span className="shrink-0 font-mono text-[11px] text-muted">{project.date}</span>
        </div>

        {project.summary ? (
          <p className="mt-2 text-sm leading-relaxed text-fg/80">{project.summary}</p>
        ) : null}

        {project.bullets.length > 0 ? (
          <ul className="mt-3 flex-1 space-y-1.5">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span
                  className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/60"
                  aria-hidden="true"
                />
                <span>{parseRichText(bullet)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex-1" />
        )}

        {project.tech.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-4">
            {project.tech.map((id) => (
              <li key={id}>
                <TechChip id={id} size="sm" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
