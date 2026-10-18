"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EngineeringMap } from "@/components/engineering-map";
import { projects } from "@/src/data/projects";
import { profile } from "@/src/data/profile";

function formatClock(now: Date) {
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const date = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()}`;
  return { time, date };
}

const githubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const linkedinIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const socialIcons: Record<string, React.ReactNode> = {
  GITHUB: githubIcon,
  LINKEDIN: linkedinIcon,
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [clock, setClock] = useState<{ time: string; date: string } | null>(null);

  useEffect(() => {
    const update = () => setClock(formatClock(new Date()));
    update();
    const interval = setInterval(update, 15_000);
    return () => clearInterval(interval);
  }, []);

  const letters = profile.name.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section id="home" className="hero">
      <div className="hero__blob hero__blob--one" aria-hidden="true" />
      <div className="hero__blob hero__blob--two" aria-hidden="true" />

      <div className="hero__bar">
        <span>{clock ? `${clock.time} - ${clock.date}` : "--:--"}</span>
        <span>~{profile.name.toUpperCase()}</span>
      </div>

      <div className="container-custom hero__inner">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__label">
            <span className="eyebrow">PORTFOLIO</span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero__hello">
            HELLO, I&apos;M
          </motion.p>

          <motion.h1 variants={itemVariants} aria-label={profile.name}>
            <span className="pixelated-text" aria-hidden="true">
              {letters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.05, duration: 0.25 }}
                  style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : undefined }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__role text-gradient">
            {profile.role}
          </motion.p>

          <motion.p variants={itemVariants} className="hero__bio">
            {profile.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="availability-badge">
            <span className="availability-dot" aria-hidden="true" />
            {profile.availability}
          </motion.div>

          <motion.div variants={itemVariants} className="social-row">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[social.label] ?? null}
                {social.label}
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="hero__actions">
            <a href="#projects" className="nothing-btn">
              VIEW PROJECTS
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nothing-btn"
            >
              RESUME
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <EngineeringMap projects={projects} />
      </div>
    </section>
  );
}
