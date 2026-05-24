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

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="floating-blob blob-purple w-100 h-100 top-1/4 -right-20 opacity-40" />

      <div className="container mx-auto px-6">
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
              03. Experience
            </motion.span>
            <h2 className="section-heading">
              Where I&apos;ve <span className="gradient-text">Worked</span>
            </h2>
          </div>

          <div className="relative pl-8 md:pl-12">
            {/* Timeline Line */}
            <div className="timeline-line" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="timeline-dot top-8"
                />

                <div className="glass-card rounded-2xl p-6 md:p-8 ml-4 md:ml-8 group hover:shadow-(--shadow-hover) transition-all duration-500 hover:-translate-y-2">
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        exp.type === "work"
                          ? "bg-primary/10"
                          : "bg-secondary/10"
                      }`}
                    >
                      {exp.type === "work" ? (
                        <Briefcase className="text-primary" size={24} />
                      ) : (
                        <GraduationCap className="text-secondary" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + i * 0.1 + 0.4,
                        }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
