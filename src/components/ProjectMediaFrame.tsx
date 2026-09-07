"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Maximize2,
  Play,
  X,
} from "lucide-react";
import type { Project, ProjectMedia } from "@/data/projects";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectMediaFrameProps {
  project: Project;
  media?: ProjectMedia;
  priority?: boolean;
  className?: string;
  allowPreview?: boolean;
}

export function ProjectMediaFrame({
  project,
  media,
  priority = false,
  className = "",
  allowPreview = false,
}: ProjectMediaFrameProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Compile all available media for this project
  const allMediaList: ProjectMedia[] = useMemo(() => {
    const list: ProjectMedia[] = [];

    if (project.media && project.media.length > 0) {
      list.push(...project.media);
    }

    if (project.image && !list.some((m) => m.src === project.image)) {
      list.unshift({
        type: "image",
        src: project.image,
        alt: `${project.title} cover`,
        caption: project.subtitle,
      });
    }

    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach((gSrc, idx) => {
        if (!list.some((m) => m.src === gSrc)) {
          list.push({
            type: "image",
            src: gSrc,
            alt: `${project.title} screenshot ${idx + 1}`,
            caption: `${project.title} screenshot ${idx + 1}`,
          });
        }
      });
    }

    return list;
  }, [project]);

  const activeMedia =
    media ??
    allMediaList[0] ??
    (project.image
      ? {
          type: "image" as const,
          src: project.image,
          alt: `${project.title} preview`,
          caption: project.subtitle,
        }
      : undefined);

  const currentPreviewMedia =
    allMediaList[activeMediaIndex] ?? activeMedia;

  const handleFrameClick = (e: React.MouseEvent) => {
    if (allowPreview) {
      e.preventDefault();
      e.stopPropagation();
      const initialIdx = allMediaList.findIndex(
        (m) => m.src === activeMedia?.src
      );
      setActiveMediaIndex(initialIdx >= 0 ? initialIdx : 0);
      setIsPreviewOpen(true);
    }
  };

  const showPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) =>
      prev === 0 ? allMediaList.length - 1 : prev - 1
    );
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) =>
      prev === allMediaList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div
        onClick={handleFrameClick}
        className={`project-media-frame group/media relative overflow-hidden ${
          allowPreview ? "cursor-pointer" : ""
        } ${className}`}
      >
        {activeMedia ? (
          activeMedia.type === "video" ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover transition-transform duration-700 group-hover/media:scale-[1.02]"
              src={activeMedia.src}
              poster={activeMedia.poster}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              aria-label={activeMedia.alt}
            />
          ) : (
            <Image
              className="h-full w-full object-cover transition-transform duration-700 group-hover/media:scale-[1.03]"
              src={activeMedia.src}
              alt={activeMedia.alt}
              width={800}
              height={600}
              loading={priority ? "eager" : "lazy"}
            />
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/20 via-secondary/10 to-primary/5">
            <span className="text-[7rem] font-bold gradient-text opacity-30 md:text-[10rem]">
              {project.title[0]}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/10 to-transparent pointer-events-none" />

        {/* Mac OS dot indicators */}
        <div className="absolute left-4 top-4 flex gap-1.5 z-10 pointer-events-none">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 shadow-sm" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 shadow-sm" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80 shadow-sm" />
        </div>

        {/* Action badge & preview button */}
        <div className="absolute right-3.5 top-3.5 z-10 flex items-center gap-2">
          {allowPreview && (
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                const initialIdx = allMediaList.findIndex(
                  (m) => m.src === activeMedia?.src
                );
                setActiveMediaIndex(initialIdx >= 0 ? initialIdx : 0);
                setIsPreviewOpen(true);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur-md hover:bg-primary hover:border-primary transition-colors shadow-lg"
              aria-label="Expand Preview"
            >
              <Maximize2 size={14} />
            </motion.button>
          )}

          <motion.div
            className="rounded-full border border-white/15 bg-black/40 p-2 text-white backdrop-blur-md"
            whileHover={{ scale: 1.08 }}
          >
            {activeMedia?.type === "video" ? (
              <Play size={14} className="text-primary fill-primary/30" />
            ) : (
              <ImageIcon size={14} />
            )}
          </motion.div>
        </div>

        {activeMedia?.caption && (
          <p className="absolute bottom-3 left-4 right-4 text-xs md:text-sm font-medium text-white/95 drop-shadow-md pointer-events-none truncate">
            {activeMedia.caption}
          </p>
        )}
      </div>

      {/* Fullscreen Video / Image Modal Preview with Multi-Image Navigation */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-5xl overflow-hidden border-border/80 bg-background/95 p-3 sm:p-6 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          <DialogHeader className="mb-2">
            <DialogTitle className="flex items-center justify-between text-lg sm:text-xl pr-6">
              <span className="gradient-text">{project.title}</span>
              {allMediaList.length > 1 && (
                <span className="text-xs font-mono text-muted-foreground">
                  {activeMediaIndex + 1} / {allMediaList.length}
                </span>
              )}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm truncate">
              {currentPreviewMedia?.caption || project.subtitle}
            </DialogDescription>
          </DialogHeader>

          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/70 bg-black/80 shadow-inner flex items-center justify-center">
            {currentPreviewMedia?.type === "video" ? (
              <video
                key={currentPreviewMedia.src}
                className="h-full w-full object-contain"
                src={currentPreviewMedia.src}
                poster={currentPreviewMedia.poster}
                controls
                autoPlay
                playsInline
              />
            ) : currentPreviewMedia ? (
              <div className="relative h-full w-full">
                <Image
                  src={currentPreviewMedia.src}
                  alt={currentPreviewMedia.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>
            ) : null}

            {/* Left & Right Navigation arrows if multiple images exist */}
            {allMediaList.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Bar */}
          {allMediaList.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pt-2 pb-1 max-w-full">
              {allMediaList.map((item, idx) => (
                <button
                  key={item.src + idx}
                  type="button"
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all ${
                    activeMediaIndex === idx
                      ? "border-primary ring-2 ring-primary/40 scale-105"
                      : "border-border/60 opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.type === "video" ? (
                    <div className="flex h-full w-full items-center justify-center bg-black/80 text-primary">
                      <Play size={16} />
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

