import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/ui/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

import { HERO_DATA, TECH_STACK_DATA, EXPERIENCE, PROJECTS, EDUCATION } from "@/data/portfolio";

export default function Home() {
  return (
    // 1. THE OUTER CONTAINER (The Page)
    // min-h-screen: Makes the box at least as tall as the screen.
    // bg-slate-900: Dark blue-grey background.
    // flex/items-center/justify-center: Centers the card in the middle of the screen.
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-slate-900 scroll-smooth">
      
      {/* The Navigation Bar */}
      <Navbar />

      {/* The Hero Section */}
      <div id="home" className="snap-start">
        <HeroSection
          data = {HERO_DATA}
        />
      </div>

      {/* The About Me and Tech Stack Section*/}
      <div id="about" className="snap-start">
         <AboutSection
          data={TECH_STACK_DATA}
        />
      </div>

      {/* The Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-slate-800 snap-start p-10">
        <div className="max-w-6xl w-full pt-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

          {/* The Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.desc}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <ContactSection/>


    </main>
  );
}