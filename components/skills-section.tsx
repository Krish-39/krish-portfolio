"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { skillGroups } from "@/src/data/profile";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-primary">
      <div className="container-custom">
        <SectionHeader eyebrow="EXPERTISE" title="Skills, Strengths & Languages" />

        <motion.div
          className="skill-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="skill-group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="cta-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3>Ready to collaborate?</h3>
            <p>Let&apos;s discuss how my skills can help your project.</p>
          </div>
          <a href="#contact" className="btn btn-primary whitespace-nowrap">
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
