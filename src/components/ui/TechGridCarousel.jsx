"use client";

import { useState } from "react";

export default function TechGridCarousel({ skills }) {
    // CONFIGURATION
    const ROWS = 3;
    const COLS = 4;
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
    for (let i = 0; i < skills.length; i += ITEMS_PER_PAGE) {
        pages.push(skills.slice(i, i + ITEMS_PER_PAGE));
    }

    const totalPages = pages.length;

    const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
    const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

    return (
        <div className="relative w-full max-w-4xl mx-auto group/carousel">

            {/* =========================================
                1. THE FADING CURTAINS (Gradient Masks)
                ========================================= */}
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />


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
            <div className="overflow-hidden w-full py-4"> {/* Added padding Y for shadow breathing room */}

                <div
                    className="flex transition-transform duration-700 ease-in-out will-change-transform items-start"
                    // LOGIC: 
                    // 1. We move by -100% * currentPage (Standard slide)
                    // 2. But we add +10% (translate-x-[10%]) to Center the active 80% card
                    style={{ transform: `translateX(calc(-${currentPage * 70}% + 15%))` }}
                >
                    {pages.map((pageItems, pageIndex) => (

                        // INDIVIDUAL PAGE: Width is set to 80% (w-[80%])
                        // This leaves 10% gap on Left and Right for peeking
                        <div key={pageIndex} className="w-[70%] flex-shrink-0 px-4">

                            <div className={`grid grid-cols-2 ${GRID_COLS_CLASS} gap-4 content-center`}>

                                {pageItems.map((skill, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:-translate-y-1 transition duration-300 group h-full w-full shadow-lg ${skill.hover}`}
                                    >
                                        <div className={`mb-3 text-slate-400 transition duration-300 group-hover:scale-110 ${skill.accent.replace('text-', 'group-hover:text-')}`}>
                                            <div className="w-10 h-10 flex items-center justify-center">
                                                {skill.icon}
                                            </div>
                                        </div>

                                        <span className="text-slate-300 font-medium text-sm group-hover:text-white text-center">
                                            {skill.label}
                                        </span>
                                        {skill.tag && (
                                            <span className={`absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded ${skill.tag.bg} ${skill.tag.text} font-bold opacity-0 group-hover:opacity-100 transition`}>
                                                {skill.tag.label}
                                            </span>
                                        )}
                                    </div>
                                ))}

                                {[...Array(ITEMS_PER_PAGE - pageItems.length)].map((_, i) => (
                                    <div key={`empty-${i}`} className="hidden md:block" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
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
    );
}