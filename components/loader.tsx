"use client";

import { motion } from "framer-motion";
import { profile } from "@/src/data/profile";

export function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      aria-hidden="true"
    >
      <div>
        <div className="loader__dots">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.span
              key={index}
              className="loader__dot"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: index % 3 === 0 ? 0.85 : 0.2 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", delay: index * 0.05 }}
            />
          ))}
        </div>
        <motion.div
          className="loader__line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.p
          className="loader__name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {profile.name.toUpperCase()}
        </motion.p>
      </div>
    </motion.div>
  );
}
