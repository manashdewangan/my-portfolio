"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SpotlightCard } from "./SpotlightCard";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL", "PHP"],
    color: "primary",
  },
  {
    title: "Frontend Frameworks",
    skills: ["React.js", "Next.js (App Router)", "React Native", "Tailwind CSS", "Vite"],
    color: "secondary",
  },
  {
    title: "State & Data Management",
    skills: ["TanStack Query", "Redux Toolkit", "Context API", "Axios", "RESTful APIs"],
    color: "primary",
  },
  {
    title: "UI Design & Systems",
    skills: ["shadcn/ui", "Radix UI", "Framer Motion", "Ant Design", "Figma to Code"],
    color: "secondary",
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Expo", "Native UI Elements", "Mobile UX"],
    color: "primary",
  },
  {
    title: "Dev & Workflow Tools",
    skills: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "npm / bun"],
    color: "secondary",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="floating-blob blob-cyan w-[500px] h-[500px] -bottom-40 -left-40 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-mono mb-4 block"
            >
              02. Skills & Capabilities
            </motion.span>
            <h2 className="section-heading">
              Technical <span className="gradient-text">Proficiency</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Modern frontend and full-stack toolsets curated for crafting fast, responsive, and maintainable software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <SpotlightCard
                  tiltIntensity={12}
                  spotlightColor={
                    category.color === "primary"
                      ? "rgba(0, 220, 240, 0.18)"
                      : "rgba(168, 85, 247, 0.18)"
                  }
                  className="glass-card rounded-2xl p-6 h-full border border-border/60 hover:border-primary/50 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2.5 text-foreground">
                    <span
                      className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor] ${
                        category.color === "primary"
                          ? "bg-primary text-primary"
                          : "bg-secondary text-secondary"
                      }`}
                    />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.08 + skillIndex * 0.04,
                        }}
                        className={`skill-badge border text-xs sm:text-sm font-medium transition-all duration-300 ${
                          category.color === "primary"
                            ? "border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                            : "border-secondary/30 hover:border-secondary hover:bg-secondary/10 hover:shadow-[0_0_15px_hsl(var(--secondary)/0.3)]"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Interactive Tech Matrix Floating Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 glass-card rounded-2xl p-6 md:p-8 border border-border/70 backdrop-blur-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-base font-bold text-foreground">Architecting for Performance & Scale</h4>
                <p className="text-xs text-muted-foreground mt-1">SEO-first, accessible, responsive design with clean code conventions</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {["Lighthouse 95+", "Clean Motion 60fps", "Zero Layout Shift", "TypeScript Strict"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
