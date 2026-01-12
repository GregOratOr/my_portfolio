// src/components/ui/TechCarousel.jsx
"use client";
import { useRef } from 'react';

export default function TechCarousel({ skills }) {
  const scrollRef = useRef(null);

  // Function to scroll the container
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Scroll by 300px left or right
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-10">

      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition z-10 shadow-lg border border-slate-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* SCROLLABLE WINDOW */}
      {/* 'overflow-x-auto' allows scrolling, 'no-scrollbar' hides the ugly bar */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth py-6 px-4 no-scrollbar items-center"
        style={{ scrollbarWidth: 'none' }} // Firefox hide scrollbar
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center space-y-3 w-32 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50 transition duration-300 group"
          >
            {/* The Icon */}
            <div className="group-hover:scale-110 transition duration-300">
              {skill.icon}
            </div>

            {/* The Label */}
            <span className="text-slate-300 font-medium group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition z-10 shadow-lg border border-slate-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    </div>
  );
}


// In @/components/sections/AboutSection.jsx

// <section className="min-h-screen flex flex-col items-center justify-center bg-slate-900 snap-start p-10">

//   <div className="max-w-6xl w-full text-center space-y-16">

//     {/* HEADER */}
//     <div className="space-y-4">
//       <h2 className="text-4xl font-bold text-white">
//         My <span className="text-indigo-500">Tech Stack</span>
//       </h2>
//       <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//         I build intelligent systems using a modern, scalable stack.
//         From training agents in PyTorch to deploying full-stack apps with Next.js.
//       </p>
//     </div>

//     {/* CAROUSEL */}
//     <div className="w-full">
//       <TechCarousel skills={skills} />
//     </div>

//   </div>
// </section>
