"use client"

import ProjectCard from "../ui/ProjectCard";
import { useState } from "react";

export default function ProjectsSection({ projects }) {
  // CONFIGURATION
  const ROWS = 2;
  const COLS = 3;
  const ITEMS_PER_PAGE = ROWS * COLS;

  // TAILWIND CLASS MAPPING
  const GRID_COLS_CLASS = {
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  }[COLS] || "md:grid-cols-4";

  const [currentPage, setCurrentPage] = useState(0);

  // DATA CHUNKING
  const pages = [];
  for (let i = 0; i < projects.length; i += ITEMS_PER_PAGE) {
    pages.push(projects.slice(i, i + ITEMS_PER_PAGE));
  }

  const totalPages = pages.length;

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-slate-800 p-10">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-white mb-5 text-center">Featured Projects</h2>
        <div className="relative flex justify-center max-w-7xl w-full pt-5 rounded-2xl">
          {/* =========================================
                1. THE FADING CURTAINS (Gradient Masks)
                ========================================= */}
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-800 via-slate-800/80 to-transparent z-10 pointer-events-none" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-800 via-slate-800/80 to-transparent z-10 pointer-events-none" />


          {/* =========================================
                2. NAVIGATION BUTTONS (Now on top of fade)
                ========================================= */}
          <button
            onClick={prevPage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition z-20 shadow-lg border border-slate-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={nextPage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition z-20 shadow-lg border border-slate-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* =========================================
                3. THE CAROUSEL TRACK
                ========================================= */}
          <div className="overflow-hidden w-full"> {/* Added padding Y for shadow breathing room */}

            <div
              className="flex transition-transform duration-700 ease-in-out will-change-transform items-start"
              // LOGIC: 
              // 1. We move by -100% * currentPage (Standard slide)
              // 2. But we add +10% (translate-x-[10%]) to Center the active 80% card
              style={{ transform: `translateX(calc(-${currentPage * 90}% + 5%))` }}
            >
              {pages.map((pageItems, pageIndex) => (

                // INDIVIDUAL PAGE: Width is set to 80% (w-[80%])
                // This leaves 10% gap on Left and Right for peeking
                <div key={pageIndex} className="w-[90%] flex-shrink-0 px-4">

                  <div className={`grid grid-cols-2 ${GRID_COLS_CLASS} gap-4 content-center`}>
                    {pageItems.map((projects, index) => (
                      <div key={index} className="h-full w-full">
                        <ProjectCard project={projects} />
                      </div>
                    ))}
                    {[...Array(ITEMS_PER_PAGE - pageItems.length)].map((_, i) => (
                      <div key={`empty-${i}`} className="hidden md:block" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-6">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentPage ? "bg-indigo-500 w-6" : "bg-slate-700 hover:bg-slate-600"
                    }`}
                />
              ))}
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}