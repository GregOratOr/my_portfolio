import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/ui/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import TimelineSection from "@/components/sections/TimelineSection";

import { HERO_DATA, TECH_STACK_DATA, EXPERIENCE, PROJECTS, EDUCATION } from "@/data/portfolio";
import ProjectsSection from "@/components/sections/ProjectsSection";

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
      <div id="home" className="">
        <HeroSection
          data = {HERO_DATA}
        />
      </div>

      {/* The About Me and Tech Stack Section*/}
      <AboutSection
        data={TECH_STACK_DATA}
      />

      {/* Experience Timeline */}
      <TimelineSection
        experience={EXPERIENCE}
        education={EDUCATION}
      />
      
      {/* The Projects Section */}
      <ProjectsSection
        projects={PROJECTS}
      />

      {/* Contact Me Section */}
      <ContactSection/>


    </main>
  );
}