// src/components/sections/HeroSection.jsx

import { CONTACT_DATA } from "@/data/portfolio";

export default function HeroSection({ name, title, location, intro }) {
  const SOCIALS = [
    {
      key: "github",
      icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    },
    {
      key: "linkedin",
      icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    },
    {
      key: "leetcode",
      icon: <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    },
    {
      key: "instagram",
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    }
  ];

  return (
    <section className="h-screen bg-slate-900 snap-start flex items-center justify-center p-8">

      {/* GRID CONTAINER */}
      {/* h-full: Ensures the grid columns stretch the full height of the screen */}
      <div className="max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* 1. LEFT REGION (1/3) - The Image */}
        {/* flex items-center justify-center: Centers the child (image) perfectly in X and Y */}
        <div className="md:col-span-1 flex flex-col items-center justify-center order-1 md:order-1">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-slate-700">
            <span className="text-9xl">🧑‍💻</span>
          </div>
        </div>

        {/* 2. RIGHT REGION (2/3) - The Text */}
        {/* flex flex-col items-center justify-center: Centers the text block perfectly in X and Y */}
        <div className="md:col-span-2 flex flex-col items-center justify-center order-2 md:order-2">

          {/* Inner Content Wrapper */}
          {/* text-center md:text-left: Keeps text legible (left-aligned) on desktop, 
              even though the whole BLOCK is centered in the region. 
              Change to 'text-center' if you want the text lines centered too. */}
          <div className="text-center md:text-left space-y-6 max-w-2xl">
            <h2 className="text-indigo-400 font-medium tracking-wide text-lg uppercase">
              {title}
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {name}
              </span>
              <span className="waving-hand cursor-default ml-4">
                👋
              </span>
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 font-medium text-lg">
              <span className="location-pin text-indigo-500"> {/* Change text-indigo-500 to text-red-500 if you want red */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64" /* <--- Updated to match your new icon's grid */
                  fill="currentColor" /* <--- Allows Tailwind to set the color */
                  className="w-6 h-6" /* <--- Forces it to be 24px (standard icon size) */
                >
                  <path d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z" />
                  <path d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z" />
                </svg>
              </span>
              {location}
            </div>

            <p className="text-slate-400 text-lg md:text-xl">
              {intro}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                download={`${name.replace(/\s+/g, '_')}_CV.pdf`}
                className="px-6 py-3 flex items-center gap-2 bg-transparent text-slate-300 font-medium rounded-lg border border-slate-700 hover:bg-slate-800 hover:text-white transition group"
              >
                <span><b>CV</b></span>
                {/* Download Icon (Arrow Down) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 group-hover:animate-bounce" // Bounces when you hover the button!
                >
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 transition"
              >
                Contact Me
              </a>
            
            <div className="hidden md:block h-10 w-px bg-slate-700/50"></div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                CONTACT_DATA[social.key] && (
                  <a
                    key={social.key}
                    href={CONTACT_DATA[social.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* Square Icon Styles */
                    className="w-11 h-11 flex items-center justify-center bg-slate-800 text-slate-400 rounded-lg border border-slate-700 hover:text-white hover:border-indigo-500 hover:bg-slate-700 hover:-translate-y-1 transition duration-300"
                    aria-label={social.key}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      {social.icon}
                    </svg>
                  </a>
                )
              ))}

            </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}