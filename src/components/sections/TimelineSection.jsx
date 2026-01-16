"use client"

import { useState } from "react";

export default function TimelineSection({ experience, education }) {
    const [activeTab, setActiveTab] = useState("work");

    const data = activeTab === "work" ? experience : education;

    return (
        <section id="experience" className="min-h-screen big-slate-900 py-20 px-6 text-white">
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

                {/* DEBUG: */}
                {/* <div>
                    Current Tab: {activeTab}<br />
                    Item to show: {data.length}
                </div> */}

                <div className="ml-10 border-l-2 border-slate-700 space-y-12">

                    {data.map((item, index) => (

                        // INDIVIDUAL ITEM CONTAINER
                        // relative: Allows us to position the logo relative to this box
                        // pl-12: Pushes content right so it doesn't overlap the logo
                        <div key={index} className="relative pl-12 group">

                            {/* 1. THE LOGO NODE */}
                            {/* absolute: Removes it from flow */}
                            {/* -left-[25px]: Pulls it left. Why 25px? 
                                Logo is 48px wide (w-12). Center is 24px. 
                                Border is 2px. 
                                So 24px + 1px = 25px centers it perfectly. */}
                            <div className="absolute -left-[25px] top-0 w-12 h-12 bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center overflow-hidden transition group-hover:scale-110 group-hover:border-indigo-500">
                                <img src={item.logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>

                            {/* 2. THE CONTENT (Same as Phase 2, just cleaner) */}
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