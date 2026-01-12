// src/components/sections/AboutSection.jsx
import TechGridCarousel from "@/components/ui/TechGridCarousel";

// 1. Accept 'data' prop
export default function AboutSection({ data }) {

  // 2. Destructure for easier usage
  const { title, desc, skills, learning } = data;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-900 snap-start py-20">

      <div className="max-w-6xl w-full px-6 space-y-16">

        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text */}
          <div className="text-left space-y-6">
            <h2 className="text-5xl font-bold text-white leading-tight">
              {/* If you didn't add title to data, you can hardcode it or use data.title */}
              {title || "My Tech Stack"}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {desc}
            </p>
          </div>

          {/* RIGHT: Currently Learning */}
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm w-full max-w-[320px] lg:ml-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Currently Exploring
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {learning.map((item, index) => (
                <div
                  key={index}
                  className={`aspect-square flex flex-col items-center justify-center p-2 bg-slate-900/80 rounded-lg border border-slate-700 transition group relative ${item.hover}`}
                >
                  <div className={`w-5 h-5 text-slate-400 transition mb-1 ${item.accent.replace('text-', 'group-hover:text-')}`}>
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-medium text-slate-400 group-hover:text-white uppercase tracking-wide">
                    {item.label}
                  </span>
                  {/* Tiny Tag Indicator (Dot) if tag exists */}
                  {item.tag && (
                    <div className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full ${item.tag.bg.replace('/30', '')}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM: Main Carousel */}
        <div className="w-full border-t border-slate-800 pt-10">
          <TechGridCarousel skills={skills} />
        </div>

      </div>
    </section>
  );
}