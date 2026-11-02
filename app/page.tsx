import { BootLoader } from "@/components/boot-loader";
import { CommandMenu } from "@/components/command-menu";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { DeepDivesSection } from "@/components/deep-dives-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

// Server component: static sections render to HTML at build time; only the
// interactive pieces (loader, header, hero, projects, contact, ⌘K) hydrate.
export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <BootLoader />
      <Header />
      <CommandMenu />

      <main id="main-content">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <DeepDivesSection />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
