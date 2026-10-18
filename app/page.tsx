"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/loader";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

const LOADER_DURATION = 1600;

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 0 : LOADER_DURATION;

    document.body.style.overflow = "hidden";
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, duration);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <AnimatePresence>{loading ? <Loader key="loader" /> : null}</AnimatePresence>

      <Header />

      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
