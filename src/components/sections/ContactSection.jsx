// src/components/sections/ContactSection.jsx

export default function ContactSection({CONTACT_DATA}) {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-slate-900 snap-start p-10 text-center">
      
      {/* MAIN CALL TO ACTION */}
      <div className="max-w-3xl space-y-8">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Ready to <span className="text-indigo-500">collaborate?</span>
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl">
          I am currently looking for opportunities in AI Research and Full Stack Development. 
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
          
          {/* EMAIL BUTTON */}
          <a 
            href={`mailto:${CONTACT_DATA.email}`}
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 hover:scale-105 transition shadow-lg shadow-indigo-500/25"
          >
            Say Hello 👋
          </a>

          {/* GITHUB BUTTON */}
          <a 
            href={CONTACT_DATA.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg border border-slate-700 hover:border-white transition"
          >
            View GitHub
          </a>

        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-10 text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Built with Next.js & Tailwind.</p>
      </div>

    </section>
  );
}