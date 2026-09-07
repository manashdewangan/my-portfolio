"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import { useRef } from "react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive, beautiful user interfaces",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with cross-functional teams",
  },
];

import { SpotlightCard } from "./SpotlightCard";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="floating-blob blob-purple w-[400px] h-[400px] top-20 -right-20 opacity-50 pointer-events-none" />

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
              01. About Me
            </motion.span>
            <h2 className="section-heading">
              Building the <span className="gradient-text">Future</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate{" "}
                <span className="text-foreground font-semibold">
                  Full-Stack & Mobile Developer
                </span>{" "}
                with a B.Tech in Computer Science & Engineering. I specialize in
                building responsive, scalable, user-centric applications with
                clean architecture, reusable components, and high-performance UX.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With deep hands-on expertise in{" "}
                <span className="text-primary font-medium">React.js</span>,{" "}
                <span className="text-primary font-medium">Next.js</span>,{" "}
                <span className="text-primary font-medium">React Native</span>,{" "}
                <span className="text-primary font-medium">TypeScript</span>, and{" "}
                <span className="text-primary font-medium">Tailwind CSS</span>, I enjoy turning ambitious ideas into production-grade digital products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently open to frontend/full-stack developer roles, impactful product teams, and freelance collaborations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <SpotlightCard
                    tiltIntensity={14}
                    className="glass-card p-6 h-full border border-border/60 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
