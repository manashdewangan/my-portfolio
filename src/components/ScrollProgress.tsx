"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left bg-linear-to-r from-primary via-secondary to-primary shadow-[0_0_12px_hsl(var(--primary))]"
        style={{ scaleX }}
      />
    </div>
  );
}
