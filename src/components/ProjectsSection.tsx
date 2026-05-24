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

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
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
        className="absolute inset-x-0 top-30 mx-auto h-60 w-[min(82rem,90vw)] rounded-full bg-primary/5 blur-2xl"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <span className="mb-4 block font-mono text-sm text-primary">
              04. Projects
            </span>
            <h2 className="section-heading">
              Selected <span className="gradient-text">Work</span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:justify-self-end md:text-lg">
            Scroll through a compact showcase of shipped interfaces. Each case
            study supports images and videos from the project data file, so new
            media can be added without redesigning the page.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className="project-card project-card-3d group"
            >
              <motion.div style={{ rotateX: rotate }} className="h-full">
                <Link href={`/project/${project.id}`} className="block">
                  <ProjectMediaFrame
                    project={project}
                    priority={index === 0}
                    className="aspect-[16/9]"
                  />
                </Link>

                <div className="p-5 md:p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <Link href={`/project/${project.id}`} className="min-w-0">
                      <p className="mb-1 text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                      <h3 className="text-xl font-bold transition-colors group-hover:text-primary md:text-2xl">
                        {project.title}
                      </h3>
                    </Link>
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-border p-2 text-primary transition-colors hover:bg-primary/10"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    )}
                  </div>

                  <p className="mb-5 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-5 grid gap-2 text-sm text-muted-foreground">
                    {project.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                      <Images size={14} />
                      {project.media?.filter((item) => item.type === "image")
                        .length ?? 0}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/project/${project.id}`}
                className="glass-card group block h-full overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
              >
                <ProjectMediaFrame
                  project={project}
                  className="aspect-[16/9]"
                />
                <div className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {project.subtitle}
                      </p>
                      <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                    </div>
                    {project.live ? (
                      <ExternalLink
                        size={17}
                        className="mt-1 shrink-0 text-muted-foreground"
                      />
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
                  <p className="mb-4 line-clamp-2 text-xs leading-5 text-muted-foreground/90">
                    {project.features[0]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-muted/40 px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
                    <span>
                      {project.media?.filter((item) => item.type === "image")
                        .length ?? 0}{" "}
                      photos
                    </span>
                    <span className="inline-flex items-center gap-1 text-primary">
                      View case study
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
