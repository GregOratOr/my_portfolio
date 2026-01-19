"use client"

import { useState } from "react";

export default function TimelineSection({ experience, education }) {
    const [activeTab, setActiveTab] = useState("work");

    const data = activeTab === "work" ? experience : education;

    return (
        <section id="experience" className="min-h-screen bg-slate-900 py-20 px-6 text-white">
            <div className="max-w-4xl mx-auto">
                {/* HEADER */}
                <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
                
                {/* TAB SELECTOR */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab("work")}
                        className={`px-6 py-2 w-full rounded ${activeTab === "work" ? "h-11 bg-indigo-600 text-white shadow-lg scale-105" : "bg-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        Work
                    </button>

                    <button
                        onClick={() => setActiveTab("education")}
                        className={`px-6 py-2 w-full rounded ${activeTab === "education" ? "h-11 bg-indigo-600 text-white shadow-lg scale-105" : "bg-slate-800 text-slate-400 hover:text-white"}`}
                    >
                        Education
                    </button>
                </div>

                <div className="ml-10 border-l-2 border-slate-700 space-y-12">

                    {data.map((item, index) => (
                        <div key={index} className="relative pl-12 group">

                            {/* --- MODIFIED LOGO NODE --- */}
                            <div 
                                className="
                                    absolute top-0 
                                    /* 1. INITIAL STATE: Small Circle centered on line */
                                    -left-[25px] w-12 h-12 rounded-full border-4 border-slate-800 bg-slate-900
                                    
                                    /* 2. HOVER SIZE & POSITION: 
                                       Expand to a larger box (w-48) to accommodate wide rectangular logos.
                                       Adjust 'left' to keep it centered (-left-[96px] is approx half of w-48).
                                    */
                                    hover:w-48 hover:h-32 hover:-left-[96px]
                                    
                                    /* 3. HOVER SHAPE: 
                                       Change from circle (rounded-full) to standard corners (rounded-lg).
                                       Change background to white so transparent logos are visible.
                                    */
                                    hover:rounded-lg hover:bg-slate-900 hover:border-indigo-500
                                    
                                    /* Styling & Animation */
                                    flex items-center justify-center overflow-hidden 
                                    transition-all duration-300 ease-out
                                    
                                    /* Z-Index to pop over text */
                                    z-10 hover:z-50 hover:shadow-2xl
                                "
                            >
                                <img 
                                    src={item.logo.src || item.logo} 
                                    alt="Logo" 
                                    /* object-cover: Fills the small circle (crops edges).
                                       hover:object-contain: Shows full logo without cropping (original shape).
                                       p-2: Adds padding so the logo doesn't touch the borders.
                                    */
                                    className="w-full h-full object-cover hover:object-contain p-1 hover:p-4 transition-all duration-300" 
                                />
                            </div>
                            {/* -------------------------- */}

                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition">
                                    {item.title}
                                </h3>

                                <span className="text-indigo-400 text-sm font-medium">
                                    {item.org}
                                </span>

                                <span className="text-xs text-slate-500 font-mono mb-2">
                                    {item.date}
                                </span>

                                <ul className="list-disc ml-4 text-slate-400 text-sm space-y-1">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}