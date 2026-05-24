"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import { SplineHeroEffect } from "./SplineHeroEffect";

export const HeroSection = () => {
  return (
    <section className="hero-opening relative flex min-h-[112vh] items-center overflow-hidden px-6 pb-32">
      {/* <div className="hero-minimal-grid" /> */}
      <div className="absolute inset-0 bg-linear-to-b from-background/15 via-background/72 to-background" />
      <div className="opening-blend" />
      <SplineHeroEffect />
      <div className="landing-depth-grid absolute inset-0" />

      <div className="container relative z-10 mx-auto max-w-6xl pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-background/55 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.7)]" />
            Full-Stack & Mobile Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-6 text-5xl font-bold leading-[0.98] tracking-normal md:text-7xl lg:text-8xl"
          >
            I build clean, useful{" "}
            <span className="gradient-text">web experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mb-9 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
          >
            Hi, I&apos;m Manash. I build scalable web and mobile applications
            with thoughtful motion, strong architecture, and smooth user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="#projects" className="cta-primary text-center">
              View Work
            </Link>
            <Link href="#contact" className="cta-secondary text-center">
              Contact
            </Link>
            <Link
              href="/Manash_Dewangan_Resume.pdf"
              download
              className="cta-secondary inline-flex items-center justify-center gap-2"
            >
              <Download size={18} />
              CV
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
