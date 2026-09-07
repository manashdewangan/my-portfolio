"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Layers3, MonitorPlay } from "lucide-react";
import { useRef } from "react";

const videoSrc =
  "/763656_City_Apocalypse_Car_Street_By_Miguel_Rodriguez_Artlist_HD.mp4";

export function LandingScrollShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const frameY = useTransform(scrollYProgress, [0, 0.45, 1], [140, -10, -90]);
  const frameScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.72, 1.02, 0.94],
  );
  const frameRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -10]);
  const frameRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 8]);
  const backLayerY = useTransform(scrollYProgress, [0, 1], [-60, 90]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -40]);
  const progressWidth = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    ["10%", "95%"],
  );

  return (
    <section
      ref={ref}
      className="opening-showcase relative -mt-28 min-h-[100vh] overflow-hidden px-6 pb-20 pt-0 md:-mt-14"
    >
      <div className="opening-blend" />
      <div className="landing-depth-grid absolute inset-0" />

      <div className="container sticky top-20 mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl gap-8 py-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <motion.div style={{ y: textY }} className="relative z-10 max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/45 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl">
            <MonitorPlay size={16} className="text-primary" />
            Scroll to reveal
          </span>
          <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
            A quiet motion layer for the work.
          </h2>
          <p className="mb-7 text-base leading-7 text-muted-foreground md:text-lg">
            The page moves from introduction into a cinematic preview, keeping
            the first impression simple while adding depth as you scroll.
          </p>
        </motion.div>

        <div className="relative min-h-[420px] lg:min-h-[620px]">
          {/* <motion.div
            style={{ y: backLayerY }}
            className="landing-parallax-panel landing-parallax-panel-back"
          >
            <Layers3 size={18} />
            <span>Responsive UI</span>
          </motion.div> */}

          <motion.div
            style={{
              y: frameY,
              scale: frameScale,
              rotateX: frameRotateX,
              rotateY: frameRotateY,
            }}
            className="landing-video-frame"
          >
            <div className="landing-frame-topbar">
              <span />
              <span />
              <span />
              <div className="ml-auto h-2 w-24 rounded-full bg-white/10" />
            </div>

            <div className="landing-frame-screen">
              {videoSrc ? (
                <video
                  src={videoSrc}
                  className="h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <div className="landing-motion-preview">
                  <motion.div
                    style={{ y: midLayerY }}
                    className="preview-sidebar"
                  />
                  <motion.div
                    style={{ y: backLayerY }}
                    className="preview-card preview-card-a"
                  />
                  <motion.div
                    style={{ y: midLayerY }}
                    className="preview-card preview-card-b"
                  />
                  <div className="preview-hero">
                    <Code2 size={26} className="text-primary" />
                    <div>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="preview-grid">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0.35 }}
                        animate={{ opacity: [0.35, 0.85, 0.35] }}
                        transition={{
                          duration: 2.4,
                          delay: index * 0.18,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div className="landing-frame-shine" />
            </div>

            <div className="landing-frame-progress">
              <motion.span style={{ width: progressWidth }} />
            </div>
          </motion.div>

          <motion.div
            style={{ y: midLayerY }}
            className="landing-parallax-panel landing-parallax-panel-front"
          >
            <Code2 size={18} />
            <span>Clean Motion</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
