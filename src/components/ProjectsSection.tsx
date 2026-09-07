"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Images,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { ProjectMediaFrame } from "@/components/ProjectMediaFrame";
import { projects } from "@/data/projects";

import { SpotlightCard } from "@/components/SpotlightCard";

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-30 mx-auto h-60 w-[min(82rem,90vw)] rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <span className="mb-4 block font-mono text-sm text-primary">
              04. Featured Projects
            </span>
            <h2 className="section-heading">
              Selected{" "}
              <span className="gradient-text">Work & Case Studies</span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:justify-self-end md:text-lg">
            A curated showcase of shipped platforms, SaaS products, dashboards,
            and mobile apps. Every project is engineered with high usability,
            robust architecture, and smooth motion.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className="h-full"
            >
              <SpotlightCard
                tiltIntensity={10}
                spotlightColor="rgba(0, 220, 240, 0.18)"
                className="glass-card h-full rounded-2xl border border-border/70 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.22)] group"
              >
                <div className="block overflow-hidden relative">
                  <Link
                    href={`/project/${project.id}`}
                    className="block overflow-hidden"
                  >
                    <ProjectMediaFrame
                      project={project}
                      priority={index === 0}
                      className="aspect-[16/9] transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </Link>
                </div>

                <div className="p-6 md:p-7 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <Link href={`/project/${project.id}`} className="min-w-0">
                        <p className="mb-1 text-xs font-mono text-primary font-medium">
                          {project.category || project.subtitle}
                        </p>
                        <h3 className="text-xl font-bold transition-colors group-hover:text-primary md:text-2xl text-foreground">
                          {project.title}
                        </h3>
                      </Link>
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-border/80 bg-background/60 p-2.5 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                          aria-label={`Open ${project.title}`}
                        >
                          <ArrowUpRight size={18} />
                        </Link>
                      )}
                    </div>

                    <p className="mb-5 text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-6 grid gap-2 text-sm text-muted-foreground">
                      {project.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          <span>{feature}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/project/${project.id}`}
                      className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <SpotlightCard
                  tiltIntensity={8}
                  spotlightColor="rgba(168, 85, 247, 0.15)"
                  className="glass-card h-full rounded-2xl border border-border/60 hover:border-primary/50 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
                >
                  <Link
                    href={`/project/${project.id}`}
                    className="block overflow-hidden"
                  >
                    <ProjectMediaFrame
                      project={project}
                      className="aspect-[16/9] transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs text-primary font-mono">
                            {project.subtitle}
                          </p>
                          <Link href={`/project/${project.id}`}>
                            <h3 className="text-lg font-bold transition-colors group-hover:text-primary text-foreground">
                              {project.title}
                            </h3>
                          </Link>
                        </div>
                        {project.live ? (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={17} />
                          </Link>
                        ) : (
                          <Github
                            size={17}
                            className="mt-1 shrink-0 text-muted-foreground"
                          />
                        )}
                      </div>
                      <p className="mb-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs font-medium text-muted-foreground">
                        <span>
                          {project.media?.filter(
                            (item) => item.type === "image",
                          ).length ?? 0}{" "}
                          screens
                        </span>
                        <Link
                          href={`/project/${project.id}`}
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          View details
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.article>
            ))}
          </div>
        )}

        {/* View All Projects Archive CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/project"
            className="cta-primary inline-flex items-center justify-center gap-2 group text-sm md:text-base px-8 py-3.5"
          >
            <span>View All Projects & Case Studies</span>
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
