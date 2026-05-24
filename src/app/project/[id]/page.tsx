"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  BriefcaseBusiness,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  Code2,
  Database,
  ExternalLink,
  Gauge,
  Github,
  Images,
  Layers3,
  Palette,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Store,
  Target,
  UserRound,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import type React from "react";
import { ProjectMediaFrame } from "@/components/ProjectMediaFrame";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getProjectById } from "@/data/projects";
import type { ProjectMedia } from "@/data/projects";

export default function Page() {
  const params = useParams<{ id: string }>();
  const id = params?.id ?? "";
  const project = getProjectById(id);
  const stageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const mediaScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.92, 1, 0.96],
  );
  const mediaRotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -4]);
  const copyY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const media = useMemo(() => project?.media ?? [], [project]);
  const videoMedia = useMemo(
    () => media.find((item) => item.type === "video"),
    [media],
  );
  const imageMedia = useMemo(
    () => media.filter((item) => item.type === "image"),
    [media],
  );
  const visibleImageMedia = useMemo(() => imageMedia.slice(0, 4), [imageMedia]);
  const hiddenImageMedia = useMemo(() => imageMedia.slice(4), [imageMedia]);
  const hiddenImageCount = hiddenImageMedia.length;
  const previewImageMedia = imageMedia;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const previewMedia = previewImageMedia[previewIndex] ?? previewImageMedia[0];
  const showPreviousPreview = () => {
    setPreviewIndex((current) =>
      current === 0 ? previewImageMedia.length - 1 : current - 1,
    );
  };
  const showNextPreview = () => {
    setPreviewIndex((current) =>
      current === previewImageMedia.length - 1 ? 0 : current + 1,
    );
  };

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <Link href="/#projects" className="cta-primary inline-block">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const scopeNotes = [
    {
      title: "Project Goal",
      text: project.longDescription,
      icon: <Target className="text-primary" size={20} />,
    },
    {
      title: "Core Workflow",
      text: project.features[0] ?? project.description,
      icon: <Workflow className="text-primary" size={20} />,
    },
    {
      title: "User Outcome",
      text: "The interface is structured to help users find the right information quickly, move through key actions, and trust the product experience.",
      icon: <Rocket className="text-primary" size={20} />,
    },
  ];
  const deliveryNotes = [
    {
      title: "Product Focus",
      text: project.description,
      icon: <Target className="text-primary" size={20} />,
    },
    {
      title: "Frontend Build",
      text: `Built with ${project.stack.slice(0, 3).join(", ")} for a responsive and maintainable interface.`,
      icon: <Code2 className="text-primary" size={20} />,
    },
    {
      title: "Experience Layer",
      text:
        project.features[0] ??
        "Designed to make the main user journey easier to scan and use.",
      icon: <Rocket className="text-primary" size={20} />,
    },
  ];
  const implementationNotes = [
    {
      title: "Reusable UI",
      text: "Shared sections, media frames, badges, and layout patterns keep the project page consistent while still letting each case study feel specific.",
      icon: <Layers3 className="text-primary" size={20} />,
    },
    {
      title: "Data Driven",
      text: `Content, stack, media, features, and challenges are loaded from project data, so updates stay simple as ${project.title} evolves.`,
      icon: <Images className="text-primary" size={20} />,
    },
    {
      title: "Responsive Polish",
      text: "Spacing, gallery previews, modal navigation, and motion states are tuned to keep the page usable across desktop and mobile screens.",
      icon: <Zap className="text-primary" size={20} />,
    },
  ];
  const detailItems = [
    {
      label: "Category",
      value: project.category,
      icon: <BriefcaseBusiness size={18} />,
    },
    { label: "Status", value: project.status, icon: <Activity size={18} /> },
    { label: "Year", value: project.year, icon: <Calendar size={18} /> },
    { label: "Duration", value: project.duration, icon: <Clock size={18} /> },
    { label: "Role", value: project.role, icon: <UserRound size={18} /> },
    { label: "Client", value: project.client, icon: <Target size={18} /> },
  ].filter((item) => item.value);
  const metricItems = project.metrics
    ? Object.entries(project.metrics)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => ({
          label: formatProjectLabel(key),
          value: String(value),
          icon: <Gauge size={18} />,
        }))
    : [];
  const architectureItems = project.architecture
    ? Object.entries(project.architecture)
        .filter(([, value]) => value)
        .map(([key, value]) => ({
          label: formatProjectLabel(key),
          value: String(value),
          icon:
            key === "database" ? <Database size={18} /> : <Code2 size={18} />,
        }))
    : [];
  const themeColors = project.theme
    ? Object.entries(project.theme).filter(([, value]) => value)
    : [];
  const seoItems: { label: string; value: string; icon: React.ReactNode }[] =
    [];
  if (project.seo?.metaTitle) {
    seoItems.push({
      label: "Meta Title",
      value: project.seo.metaTitle,
      icon: <Search size={18} />,
    });
  }
  if (project.seo?.metaDescription) {
    seoItems.push({
      label: "Meta Description",
      value: project.seo.metaDescription,
      icon: <Search size={18} />,
    });
  }
  const platformItems =
    project.platforms?.map((platform) => ({
      label: platform,
      value: "Supported surface",
      icon: <Smartphone size={18} />,
    })) ?? [];
  const involvementItems = project.involvement
    ? Object.entries(project.involvement)
        .filter(([, value]) => value)
        .map(([key, value]) => ({
          label: formatProjectLabel(key),
          value: String(value),
          icon: <ShieldCheck size={18} />,
        }))
    : [];
  const appLinkItems = project.appLinks
    ? Object.entries(project.appLinks)
        .filter(([, value]) => value)
        .map(([key, value]) => ({
          label: `${formatProjectLabel(key)} App`,
          href: String(value),
        }))
    : [];
  const mobileMockupMedia = videoMedia ?? imageMedia[0];

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <section className="relative px-6 pb-14 pt-32 md:pb-20">
        <div className="absolute inset-x-0 top-20 mx-auto h-72 w-[min(68rem,90vw)] rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4 block font-mono text-sm text-primary"
              >
                {project.subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
              >
                <span className="gradient-text">{project.title}</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="mb-7 text-lg leading-8 text-muted-foreground md:text-xl">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary inline-flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Live Site
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary inline-flex items-center gap-2"
                  >
                    <Github size={18} />
                    View Code
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectInsightSection
        eyebrow="Project Scope"
        title="What the product needed to support."
        description="A clearer look at the intent behind the build, the main workflow, and the user outcome this interface is designed around."
        items={scopeNotes}
      />

      {(detailItems.length > 0 ||
        metricItems.length > 0 ||
        project.tags?.length ||
        themeColors.length > 0) && (
        <section className="px-6 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <span className="mb-3 block font-mono text-sm text-primary">
                Project Details
              </span>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Useful context at a glance.
              </h2>
              <p className="leading-7 text-muted-foreground">
                Key information that helps visitors understand the project type,
                delivery scope, role, timeline, technical scale, and visual
                direction.
              </p>
            </div>

            {detailItems.length > 0 && (
              <InfoGrid items={detailItems} className="mb-5" />
            )}

            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              {metricItems.length > 0 && (
                <InfoPanel
                  title="Metrics"
                  description="Measurable project scope and implementation signals."
                  items={metricItems}
                />
              )}

              {(project.tags?.length || themeColors.length > 0) && (
                <div className="rounded-2xl border border-border bg-card/50 p-6">
                  {project.tags?.length ? (
                    <>
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                        <Sparkles className="text-primary" size={18} />
                        Tags
                      </h3>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {themeColors.length > 0 && (
                    <>
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                        <Palette className="text-primary" size={18} />
                        Theme
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {themeColors.map(([name, value]) => (
                          <span
                            key={name}
                            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                          >
                            <span
                              className="h-3 w-3 rounded-full border border-white/20"
                              style={{ backgroundColor: value }}
                            />
                            {formatProjectLabel(name)}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {(platformItems.length > 0 ||
        involvementItems.length > 0 ||
        appLinkItems.length > 0) && (
        <section className="px-6 py-12 md:py-16">
          <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="mb-8 max-w-3xl">
                <span className="mb-3 block font-mono text-sm text-primary">
                  Platform Ecosystem
                </span>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Web, admin, and app touchpoints.
                </h2>
                <p className="leading-7 text-muted-foreground">
                  This project connects multiple product surfaces, so the case
                  study separates what was built, where it runs, and which areas
                  were part of the contribution.
                </p>
              </div>

              <div className="grid gap-5">
                {platformItems.length > 0 && (
                  <InfoPanel
                    title="Platforms"
                    description="The user-facing surfaces connected to this product."
                    items={platformItems}
                  />
                )}
                {involvementItems.length > 0 && (
                  <InfoPanel
                    title="Contribution"
                    description="A clear breakdown of involvement across each product area."
                    items={involvementItems}
                  />
                )}
                {appLinkItems.length > 0 && (
                  <div className="rounded-2xl border border-border bg-card/50 p-6">
                    <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
                      <Store className="text-primary" size={18} />
                      App Links
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {appLinkItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                        >
                          <ExternalLink size={15} />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:gap-5">
              <DeviceMockup
                device="iphone"
                title="iPhone 17 Pro Max"
                media={mobileMockupMedia}
              />
              <DeviceMockup
                device="samsung"
                title="Samsung S24 Ultra"
                media={mobileMockupMedia}
              />
            </div>
          </div>
        </section>
      )}

      <section ref={stageRef} className="relative px-6 py-12 md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div style={{ y: copyY }} className="lg:sticky lg:top-32">
            <span className="mb-3 block font-mono text-sm text-primary">
              Scroll Preview
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Media that moves with the story.
            </h2>
            <p className="leading-7 text-muted-foreground">
              Add screenshots or walkthrough videos in `src/data/projects.ts`.
              The first media item becomes the showcase preview, and the full
              gallery appears below for quick scanning.
            </p>
          </motion.div>

          <motion.div
            style={{ scale: mediaScale, rotateX: mediaRotate }}
            className="project-stage-3d"
          >
            <ProjectMediaFrame
              project={project}
              media={videoMedia ?? media[0]}
              priority
              className="aspect-[16/9]"
            />
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <span className="mb-3 block font-mono text-sm text-primary">
                Gallery
              </span>
              <h2 className="text-3xl font-bold">Project Assets</h2>
            </div>
            <span className="hidden text-sm text-muted-foreground sm:block">
              Images are pulled from project data
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {(visibleImageMedia.length ? visibleImageMedia : [undefined]).map(
              (item, index) => (
                <motion.div
                  key={item?.src ?? "empty-media"}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <ProjectMediaFrame
                    project={project}
                    media={item}
                    className="aspect-video"
                  />
                </motion.div>
              ),
            )}
            {hiddenImageCount > 0 && (
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: visibleImageMedia.length * 0.08,
                }}
                className="flex aspect-video items-center justify-center rounded-2xl border border-border bg-muted/30 p-6 text-center transition-colors hover:border-primary/50 hover:bg-primary/10"
                onClick={() => {
                  setPreviewIndex(0);
                  setIsPreviewOpen(true);
                }}
              >
                <span>
                  <Images className="mx-auto mb-3 text-primary" size={28} />
                  <span className="block text-2xl font-bold">
                    +{hiddenImageCount}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    more project screenshots
                  </span>
                </span>
              </motion.button>
            )}
            {/* <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 p-6 text-center text-muted-foreground">
              <div>
                <Plus className="mx-auto mb-3 text-primary" size={24} />
                <p className="text-sm">
                  Add another media object to this project to extend the
                  gallery.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-5xl overflow-x-hidden overflow-y-auto border-border bg-background/95 p-3 backdrop-blur-xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:p-6">
          <div className="mb-8 min-w-0 p-0 sm:p-2">
              <DialogHeader>
                <DialogTitle>{project.title} Screenshots</DialogTitle>
                <DialogDescription>
                  Browse all project images.
                </DialogDescription>
              </DialogHeader>

            {previewMedia && (
              <div className="relative my-4 max-w-full overflow-hidden rounded-xl border border-border bg-muted/20">
                <ProjectMediaFrame
                  project={project}
                  media={previewMedia}
                  className="aspect-video"
                />
                {previewImageMedia.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousPreview}
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/65"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextPreview}
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/65"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={22} />
                      </button>
                      <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      {previewIndex + 1} / {previewImageMedia.length}
                    </span>
                  </>
                )}
              </div>
            )}

            <div className="max-w-full overflow-hidden">
              <div className="flex max-w-full gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {previewImageMedia.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setPreviewIndex(index)}
                    className={`group w-24 shrink-0 overflow-hidden rounded-lg border text-left transition-colors sm:w-36 lg:w-40 ${
                      previewMedia?.src === item.src
                        ? "border-primary"
                        : "border-border hover:border-primary/60"
                    }`}
                  >
                    <span className="relative block aspect-video">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ProjectInsightSection
        eyebrow="Build Story"
        title="From requirements to polished screens."
        description="This section connects the project data with the actual delivery: what the interface needed to do, how the frontend was structured, and what parts of the experience received the most attention."
        items={deliveryNotes}
      />

      <ProjectInsightSection
        eyebrow="Implementation Notes"
        title="Built to stay easy to update."
        description="The page is organized around reusable project data, focused media previews, and responsive details so the case study can grow without becoming heavy."
        items={implementationNotes}
      />

      {(project.highlights?.length ||
        project.advancedFeatures?.length ||
        architectureItems.length > 0) && (
        <section className="px-6 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <span className="mb-3 block font-mono text-sm text-primary">
                Technical Depth
              </span>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                The parts worth noticing.
              </h2>
              <p className="leading-7 text-muted-foreground">
                A closer look at the standout features, architecture choices,
                and implementation details that make the project stronger.
              </p>
            </div>

            {project.highlights?.length ? (
              <div className="mb-5 grid gap-5 md:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-2xl border border-border bg-card/50 p-6"
                  >
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-muted/50">
                      <Sparkles className="text-primary" size={20} />
                    </span>
                    <h3 className="mb-3 text-lg font-bold">
                      {highlight.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="grid gap-5 lg:grid-cols-2">
              {project.advancedFeatures?.length ? (
                <FeaturePanel
                  title="Advanced Features"
                  items={project.advancedFeatures}
                />
              ) : null}
              {architectureItems.length > 0 && (
                <InfoPanel
                  title="Architecture"
                  description="How the application is structured and shipped."
                  items={architectureItems}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {(project.learnings?.length ||
        project.futureImprovements?.length ||
        seoItems.length > 0 ||
        project.seo?.keywords?.length ||
        project.testimonials?.length) && (
        <section className="px-6 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <span className="mb-3 block font-mono text-sm text-primary">
                Next Steps
              </span>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Learnings, SEO, and future direction.
              </h2>
              <p className="leading-7 text-muted-foreground">
                These details help show how the project improved your skills,
                what can be expanded next, and how the project is positioned for
                search and discovery.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {project.learnings?.length ? (
                <FeaturePanel title="Learnings" items={project.learnings} />
              ) : null}
              {project.futureImprovements?.length ? (
                <FeaturePanel
                  title="Future Improvements"
                  items={project.futureImprovements}
                />
              ) : null}
              {(seoItems.length > 0 || project.seo?.keywords?.length) && (
                <div className="rounded-2xl border border-border bg-card/50 p-6">
                  <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
                    <Search className="text-primary" size={18} />
                    SEO
                  </h3>
                  <div className="space-y-4">
                    {seoItems.map((item) => (
                      <div key={item.label}>
                        <p className="text-xs uppercase text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-6">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  {project.seo?.keywords?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.seo.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
              {project.testimonials?.length ? (
                <div className="rounded-2xl border border-border bg-card/50 p-6">
                  <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
                    <Quote className="text-primary" size={18} />
                    Feedback
                  </h3>
                  <div className="space-y-5">
                    {project.testimonials.map((testimonial) => (
                      <blockquote
                        key={testimonial.name}
                        className="border-l border-primary/50 pl-4"
                      >
                        <p className="text-sm leading-6 text-muted-foreground">
                          {testimonial.feedback}
                        </p>
                        <footer className="mt-3 text-sm font-medium">
                          {testimonial.name}
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-16">
        <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="skill-badge"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <ProjectList
              icon={<Check className="text-primary" size={20} />}
              title="Key Features"
              items={project.features}
            />
            <ProjectList
              icon={<Zap className="text-secondary" size={20} />}
              title="Challenges Solved"
              items={project.challenges}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <Link
          href="/#projects"
          className="cta-secondary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          View All Projects
        </Link>
      </section>
    </main>
  );
}

function ProjectInsightSection({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    title: string;
    text: string;
    icon: React.ReactNode;
  }[];
}) {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <span className="mb-3 block font-mono text-sm text-primary">
            {eyebrow}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="leading-7 text-muted-foreground">{description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card/50 p-6"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-muted/50">
                {item.icon}
              </span>
              <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoGrid({
  items,
  className = "",
}: {
  items: {
    label: string;
    value: string | number | undefined;
    icon: React.ReactNode;
  }[];
  className?: string;
}) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border bg-card/50 p-5"
        >
          <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {item.icon}
          </span>
          <p className="text-sm text-muted-foreground">{item.label}</p>
          <p className="mt-1 text-lg font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function InfoPanel({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-6">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="mb-5 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border/70 bg-background/40 p-4"
          >
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 text-primary">
              {item.icon}
            </span>
            <p className="text-xs uppercase text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-1 text-sm font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturePanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-6">
      <h3 className="mb-5 text-lg font-bold">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
          >
            <Check className="mt-0.5 shrink-0 text-primary" size={16} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DeviceMockup({
  device,
  title,
  media,
}: {
  device: "iphone" | "samsung";
  title: string;
  media?: ProjectMedia;
}) {
  const isIphone = device === "iphone";

  return (
    <div className="mx-auto w-full max-w-[17rem]">
      <div
        className={`relative bg-neutral-950 p-2 shadow-[0_24px_70px_hsl(0_0%_0%/0.45)] ${
          isIphone
            ? "rounded-[2.45rem] border-[5px] border-zinc-700"
            : "rounded-[1.55rem] border-[4px] border-zinc-600"
        }`}
      >
        <span
          className={`absolute top-16 z-20 h-20 w-1 rounded-full bg-zinc-700 ${
            isIphone ? "-left-[0.55rem]" : "-right-[0.45rem]"
          }`}
        />
        <span
          className={`absolute top-32 z-20 h-14 w-1 rounded-full bg-zinc-700 ${
            isIphone ? "-left-[0.55rem]" : "-right-[0.45rem]"
          }`}
        />
        <span
          className={`absolute top-24 z-20 h-16 w-1 rounded-full bg-zinc-700 ${
            isIphone ? "-right-[0.55rem]" : "-left-[0.45rem]"
          }`}
        />

        <div
          className={`relative overflow-hidden bg-black ${
            isIphone ? "rounded-[2rem]" : "rounded-[1.18rem]"
          }`}
        >
          {isIphone ? (
            <div className="absolute left-1/2 top-3 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_hsl(0_0%_100%/0.08)]" />
          ) : (
            <div className="absolute left-1/2 top-3 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-white/10 bg-black shadow-[0_0_0_2px_hsl(0_0%_0%/0.65)]" />
          )}

          <div className="aspect-[9/19.5] overflow-hidden">
            {media ? (
              <DeviceMedia media={media} />
            ) : (
              <div className="flex h-full items-center justify-center bg-muted/20">
                <Smartphone className="text-primary" size={42} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Mobile responsive preview
        </p>
      </div>
    </div>
  );
}

function DeviceMedia({ media }: { media: ProjectMedia }) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label={media.alt}
        onMouseEnter={(event) => {
          void event.currentTarget.play();
        }}
        onMouseLeave={(event) => {
          event.currentTarget.pause();
        }}
        onFocus={(event) => {
          void event.currentTarget.play();
        }}
        onBlur={(event) => {
          event.currentTarget.pause();
        }}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      width={420}
      height={900}
      className="h-full w-full object-cover"
    />
  );
}

function ProjectList({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-6"
    >
      <h2 className="mb-5 flex items-center gap-3 text-xl font-bold">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50">
          {icon}
        </span>
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function formatProjectLabel(value: string) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}
