"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/loader";

// Short boot sequence, shown once per browser session so returning visitors
// (and recruiters clicking between tabs) land straight on the content.
const LOADER_DURATION = 900;
const LOADER_SEEN_KEY = "ka-boot-seen";

function loaderAlreadySeen() {
  try {
    const seen = window.sessionStorage.getItem(LOADER_SEEN_KEY) === "1";
    window.sessionStorage.setItem(LOADER_SEEN_KEY, "1");
    return seen;
  } catch {
    return false;
  }
}

export function BootLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion || loaderAlreadySeen() ? 0 : LOADER_DURATION;

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

  return <AnimatePresence>{loading ? <Loader key="loader" /> : null}</AnimatePresence>;
}
