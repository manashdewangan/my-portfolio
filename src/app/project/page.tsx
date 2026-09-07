"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Filter,
  FolderGit2,
  Github,
  Images,
  Layers,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ProjectMediaFrame } from "@/components/ProjectMediaFrame";
import { SpotlightCard } from "@/components/SpotlightCard";
import { projects } from "@/data/projects";

export default function ProjectsArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract all categories dynamically
  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("All");
    projects.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  }, []);

  // Filter projects by search query and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.some((tech) => tech.toLowerCase().includes(query)) ||
        (project.tags && project.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-background pb-32 pt-28 md:pt-36">
      {/* Background glow ambiance */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-96 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Breadcrumb & Title */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="mb-3 inline-flex items-center gap-2 font-mono text-sm text-primary">
                <FolderGit2 size={16} />
                Project Directory & Archive
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                All Engineered <span className="gradient-text">Projects</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-7 text-muted-foreground md:text-lg"
            >
              Browse through all production applications, SaaS platforms, healthcare tools, mobile apps, and full-stack systems with in-depth architectures.
            </motion.p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card mb-12 rounded-2xl p-4 md:p-6 border border-border/70 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search by name, technology, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border/70 bg-background/60 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-md transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-muted-foreground mr-1">
                <Filter size={14} /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
                      : "border border-border/60 bg-background/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card rounded-2xl py-16 px-6 text-center border border-border/60"
          >
            <FolderGit2 size={40} className="mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-bold text-foreground mb-2">No projects found</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
              No results match your search query &quot;{searchQuery}&quot;. Try adjusting your keywords or category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="cta-secondary inline-flex items-center gap-2 text-xs py-2 px-4"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="h-full"
                >
                  <SpotlightCard
                    tiltIntensity={10}
                    spotlightColor="rgba(0, 220, 240, 0.16)"
                    className="glass-card h-full rounded-2xl border border-border/70 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] group flex flex-col justify-between"
                  >
                    {/* Project Media Showcase */}
                    <div className="relative overflow-hidden">
                      <Link href={`/project/${project.id}`} className="block overflow-hidden">
                        <ProjectMediaFrame
                          project={project}
                          priority={index < 3}
                          className="aspect-[16/9] transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </Link>
                      {project.featured && (
                        <div className="absolute top-3 left-3 z-20">
                          <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-background/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-primary backdrop-blur-md shadow-sm">
                            <Sparkles size={11} /> Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="mb-1 text-xs font-mono text-primary font-medium truncate">
                              {project.category || project.subtitle}
                            </p>
                            <Link href={`/project/${project.id}`}>
                              <h3 className="text-lg md:text-xl font-bold transition-colors group-hover:text-primary text-foreground leading-snug">
                                {project.title}
                              </h3>
                            </Link>
                          </div>
                          {project.live ? (
                            <Link
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full border border-border/80 bg-background/60 p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 shrink-0"
                              aria-label={`Open ${project.title} live link`}
                            >
                              <ExternalLink size={16} />
                            </Link>
                          ) : project.github ? (
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full border border-border/80 bg-background/60 p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 shrink-0"
                              aria-label={`Open ${project.title} GitHub repository`}
                            >
                              <Github size={16} />
                            </Link>
                          ) : null}
                        </div>

                        <p className="mb-4 text-xs md:text-sm leading-6 text-muted-foreground line-clamp-3">
                          {project.description}
                        </p>

                        {/* Top Features */}
                        {project.features && project.features.length > 0 && (
                          <div className="mb-4 space-y-1.5 text-xs text-muted-foreground/90">
                            {project.features.slice(0, 2).map((feat) => (
                              <div key={feat} className="flex items-start gap-1.5 truncate">
                                <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Stack Pills & Explore Button Footer */}
                      <div className="pt-4 border-t border-border/50 mt-auto">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.stack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground border border-border/40"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 4 && (
                            <span className="rounded-md bg-muted/40 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                              +{project.stack.length - 4}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Images size={13} />
                            {project.media?.filter((m) => m.type === "image").length ?? 0} assets
                          </span>
                          <Link
                            href={`/project/${project.id}`}
                            className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                          >
                            <span>Case Study</span>
                            <ArrowUpRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
