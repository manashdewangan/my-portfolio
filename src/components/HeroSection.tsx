"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, ArrowUpRight, Terminal, Code2, Cpu } from "lucide-react";
import Link from "next/link";
import { SplineHeroEffect } from "./SplineHeroEffect";

export const HeroSection = () => {
  return (
    <section className="hero-opening relative flex min-h-[110vh] items-center overflow-hidden px-6 pb-28 pt-16">
      <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/60 to-background pointer-events-none" />
      <div className="opening-blend" />
      <SplineHeroEffect />
      <div className="landing-depth-grid absolute inset-0 pointer-events-none" />

      {/* Floating 3D Metric Badges in Hero Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden xl:flex absolute top-36 right-[26%] z-20 items-center gap-3 rounded-2xl border border-primary/30 bg-background/60 p-3.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform"
      >
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Terminal size={20} />
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground">Specialization</p>
          <p className="text-sm font-bold text-foreground">React • Next.js • React Native</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="hidden xl:flex absolute bottom-24 right-[18%] z-20 items-center gap-3 rounded-2xl border border-secondary/30 bg-background/60 p-3.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform"
      >
        <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
          <Cpu size={20} />
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground">Experience</p>
          <p className="text-sm font-bold text-foreground">Production Apps & SaaS Dashboards</p>
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-6xl pt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-foreground backdrop-blur-xl shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            </span>
            <span className="font-mono text-xs text-primary font-medium tracking-wide uppercase">
              Full-Stack & Mobile Developer
            </span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-xs text-muted-foreground">Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-6 text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl lg:text-8xl"
          >
            I architect & build{" "}
            <span className="gradient-text drop-shadow-[0_0_35px_hsl(var(--primary)/0.35)]">
              future-ready
            </span>{" "}
            web & mobile apps.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mb-9 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl font-normal"
          >
            Hi, I&apos;m <span className="font-semibold text-foreground">Manash Dewangan</span>. I engineer scalable web and mobile applications with high-performance motion, sleek 3D depth, and clean user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="cta-primary inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="#contact" className="cta-secondary text-center">
              Let&apos;s Talk
            </Link>
            <Link
              href="/Manash_Dewangan_Resume.pdf"
              download
              className="cta-secondary inline-flex items-center justify-center gap-2 group"
            >
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
              <span>Resume</span>
            </Link>
          </motion.div>

          {/* Mini Tech stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-3 pt-6 border-t border-border/40"
          >
            <span className="text-xs font-mono text-muted-foreground mr-1">Core Arsenal:</span>
            {["Next.js", "React Native", "TypeScript", "Tailwind CSS", "TanStack Query", "REST API"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/50 bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
