"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Frontend Developer",
    company: "Logixhunt / Gloitel IT",
    period: "Professional Experience",
    description: [
      "Built interactive UI components for web & mobile using React Native & Next.js",
      "Utilized JSX, hooks, navigation & TypeScript for robust applications",
      "Ensured responsive & performance-optimized UI across all devices",
      "Worked on API integration & real-world app logic including state handling & UX flows",
    ],
  },
  {
    type: "project",
    title: "PHP Web Development",
    company: "Academic Project",
    period: "Academic Experience",
    description: [
      "Built a dynamic website with PHP & MySQL backend",
      "Designed backend logic & database schema architecture",
      "Presented final working solution & handled feature implementation",
    ],
  },
];

import { SpotlightCard } from "./SpotlightCard";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="floating-blob blob-purple w-100 h-100 top-1/4 -right-20 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-mono mb-4 block"
            >
              03. Experience & Milestones
            </motion.span>
            <h2 className="section-heading">
              Where I&apos;ve <span className="gradient-text">Built & Grown</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Real-world engineering experience developing production web apps, mobile solutions, and complex dashboards.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            {/* Glowing Neon Timeline Line */}
            <div className="timeline-line shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Glowing Pulse Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="timeline-dot top-8 ring-4 ring-primary/20"
                />

                <SpotlightCard
                  tiltIntensity={8}
                  spotlightColor={
                    exp.type === "work"
                      ? "rgba(0, 220, 240, 0.16)"
                      : "rgba(168, 85, 247, 0.16)"
                  }
                  className="glass-card rounded-2xl p-6 md:p-8 ml-4 md:ml-8 border border-border/60 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          exp.type === "work"
                            ? "bg-primary/10 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                            : "bg-secondary/10 text-secondary shadow-[0_0_20px_hsl(var(--secondary)/0.2)]"
                        }`}
                      >
                        {exp.type === "work" ? (
                          <Briefcase size={24} />
                        ) : (
                          <GraduationCap size={24} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium text-sm md:text-base">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-border/70 bg-background/60 text-muted-foreground backdrop-blur-md">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-4">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + i * 0.1 + 0.4,
                        }}
                        className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_8px_hsl(var(--primary))]" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
