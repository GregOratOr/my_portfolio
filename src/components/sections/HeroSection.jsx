// src/components/sections/HeroSection.jsx

export default function HeroSection({ name, title, location, intro }) {
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
                download={`${name.replace(/\s+/g, '_')}_Resume.pdf`}
                className="px-6 py-3 flex items-center gap-2 bg-transparent text-slate-300 font-medium rounded-lg border border-slate-700 hover:bg-slate-800 hover:text-white transition group"
              >
                <span>Download CV</span>
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
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}