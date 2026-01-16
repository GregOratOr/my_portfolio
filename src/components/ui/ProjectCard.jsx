"use client"; // Required for useState/useEffect

import { useState, useEffect } from "react";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // LOGIC: Handle Slideshow
  useEffect(() => {
    let interval;

    // Only start slideshow if hovered AND there are multiple images
    if (isHovered && project.images && project.images.length > 1) {

      // Cycle image every 1.5 seconds
      interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
      }, 1200);

    } else {
      // Reset to first image when mouse leaves
      setCurrentImgIndex(0);
    }

    return () => clearInterval(interval);
  }, [isHovered, project.images]);

  return (
    // WRAPPER: Clicking anywhere opens the link
    <div className="group relative flex flex-col bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="relative h-56 w-full overflow-hidden block cursor-pointer"

      >
        {/* The Image(s) */}
        {/* group-hover:scale-110 creates the zoom effect */}
        <img
          src={project.images ? project.images[currentImgIndex] : "/api/placeholder/400/320"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* The Overlay Gradient (Scrim) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />

        {/* The Title (Overlaid) */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white leading-tight flex items-center gap-2">
            {project.title}
            {/* Optional: Small 'External Link' icon to hint it is clickable */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
            </svg>
          </h3>
        </div>
      </a>

      {/* 2. CONTENT SECTION (Bullets & Tags) */}
      <div className="p-5 flex flex-col flex-grow bg-slate-800 cursor-default">

        {/* Bullet Points */}
        {/* flex-grow pushes the tags to the bottom */}
        <ul className="space-y-2 mb-6 flex-grow pr-5">
          {project.bullets.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        <div className="flex border-t border-slate-700/50 p-2">
          <span className="text-xs text-slate-500 font-mono mb-2">
            {project.date}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((techItem, index) => (
            <div
              key={index}
              /* DYNAMIC STYLING:
                 1. Background: Takes 'text-color' -> converts to 'bg-color/10' (10% opacity)
                 2. Border: Takes 'text-color' -> converts to 'border-color/20' (20% opacity)
                 3. Text: Keeps the original 'text-color'
              */
              className={`
                px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider 
                flex items-center gap-1.5 transition-colors
                border
                ${techItem.accent.replace("text-", "bg-")}/10
                ${techItem.accent.replace("text-", "border-")}/20
                ${techItem.accent}
              `}
            >
              <div className="w-2 h-2">
                {techItem.icon}
              </div>
              <span>
                {techItem.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}