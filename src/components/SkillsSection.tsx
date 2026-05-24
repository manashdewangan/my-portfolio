"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
    color: "primary",
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    color: "secondary",
  },
  {
    title: "Mobile",
    skills: ["React Native"],
    color: "primary",
  },
  {
    title: "State & Data",
    skills: ["TanStack Query", "Redux"],
    color: "secondary",
  },
  {
    title: "UI Libraries",
    skills: ["shadcn/ui", "Ant Design"],
    color: "primary",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Figma"],
    color: "secondary",
  },
  {
    title: "APIs",
    skills: ["REST API"],
    color: "primary",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="floating-blob blob-cyan w-[500px] h-[500px] -bottom-40 -left-40 opacity-40" />

      <div className="container mx-auto px-6">
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
              02. Skills
            </motion.span>
            <h2 className="section-heading">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      category.color === "primary"
                        ? "bg-primary"
                        : "bg-secondary"
                    }`}
                  />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className={`skill-badge ${
                        category.color === "primary"
                          ? "border-primary/30 hover:border-primary/60"
                          : "border-secondary/30 hover:border-secondary/60"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 glass-card rounded-2xl p-8"
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-4xl md:text-5xl opacity-60 hover:opacity-100 transition-opacity duration-300">
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className="cursor-pointer"
              >
                <span className="text-[#61DAFB]">⚛️</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className="cursor-pointer"
              >
                <span className="text-[#3178C6]">🔷</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className="cursor-pointer"
              >
                <span className="text-[#38BDF8]">🌊</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className="cursor-pointer"
              >
                <span>📱</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className="cursor-pointer"
              >
                <span>🚀</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className="cursor-pointer"
              >
                <span>⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
