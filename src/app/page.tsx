import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

import {
  education,
  experience,
  primaryContact,
  profile,
  skills,
  socialContacts,
  sortedProjects,
} from "@/content";

/** Composition root: the only place that reads content and hands it to sections. */
export default function Home() {
  return (
    <>
      <SiteNav name={profile.name} resumeUrl={profile.resumeUrl} />

      <main>
        <HeroSection profile={profile} socials={socialContacts} primaryContact={primaryContact} />
        <SkillsSection skills={skills} />
        <TimelineSection experience={experience} education={education} />
        <ProjectsSection projects={sortedProjects} />
        <ContactSection
          primaryContact={primaryContact}
          socials={socialContacts}
          availability={profile.availability}
        />
      </main>

      <Footer name={profile.name} />
    </>
  );
}
