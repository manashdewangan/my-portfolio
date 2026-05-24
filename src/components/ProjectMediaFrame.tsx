"use client";

import { motion } from "framer-motion";
import { ImageIcon, Play } from "lucide-react";
import type { Project, ProjectMedia } from "@/data/projects";
import Image from "next/image";

interface ProjectMediaFrameProps {
  project: Project;
  media?: ProjectMedia;
  priority?: boolean;
  className?: string;
}

export function ProjectMediaFrame({
  project,
  media,
  priority = false,
  className = "",
}: ProjectMediaFrameProps) {
  const previewMedia: ProjectMedia | undefined = project.image
    ? {
        type: "image",
        src: project.image,
        alt: `${project.title} preview`,
        caption: project.subtitle,
      }
    : undefined;
  const activeMedia =
    media ??
    previewMedia ??
    project.media?.find((item) => item.type === "image") ??
    project.media?.[0];

  return (
    <div
      className={`project-media-frame group/media relative overflow-hidden ${className}`}
    >
      {activeMedia ? (
        activeMedia.type === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={activeMedia.src}
            poster={activeMedia.poster}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label={activeMedia.alt}
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
        ) : (
          <Image
            className="h-full w-full object-fill"
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

      <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/10 to-transparent" />
      <div className="absolute left-4 top-4 flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <motion.div
        className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/30 p-2 text-white backdrop-blur-md"
        whileHover={{ scale: 1.08 }}
      >
        {activeMedia?.type === "video" ? (
          <Play size={16} />
        ) : (
          <ImageIcon size={16} />
        )}
      </motion.div>
      {activeMedia?.caption && (
        <p className="absolute bottom-2 left-4 right-4 text-xs md:text-lg font-medium text-white drop-shadow">
          {activeMedia.caption}
        </p>
      )}
    </div>
  );
}
