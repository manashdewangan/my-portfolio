"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const splineSceneUrl = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL ?? "";

export function SplineHeroEffect() {
  const hostRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 24, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 24, mass: 0.4 });
  const rotateY = useTransform(smoothX, [-1, 1], [-9, 9]);
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const x = useTransform(smoothX, [-1, 1], [-18, 18]);
  const y = useTransform(smoothY, [-1, 1], [-14, 14]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set((event.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!splineSceneUrl || !hostRef.current) {
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://unpkg.com/@splinetool/viewer@1.10.57/build/spline-viewer.js"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.57/build/spline-viewer.js";
      document.head.appendChild(script);
    }

    hostRef.current.innerHTML = "";
    const viewer = document.createElement("spline-viewer");
    viewer.setAttribute("url", splineSceneUrl);
    viewer.setAttribute("loading-anim-type", "spinner-small-dark");
    viewer.setAttribute("events-target", "global");
    hostRef.current.appendChild(viewer);
  }, []);

  if (splineSceneUrl) {
    return (
      <motion.div
        style={{ rotateX, rotateY, x, y }}
        className="spline-hero-shell"
        aria-hidden="true"
      >
        <div ref={hostRef} className="spline-hero-viewer" />
        <div className="spline-hero-fade" />
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, x, y }}
      className="spline-hero-shell"
      aria-hidden="true"
    >
      <motion.div
        className="spline-fallback-scene"
        animate={{ rotateX: [52, 58, 52], rotateZ: [-6, 2, -6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Floating 3D Depth Planes with Live Code/Interface Glow */}
        <motion.div
          className="spline-fallback-plane spline-fallback-plane-a group"
          animate={{ y: [-15, 15, -15], rotateZ: [-2, 3, -2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 border-b border-primary/20 pb-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
            <span className="h-2 w-2 rounded-full bg-green-400/80" />
            <span className="text-[10px] font-mono text-muted-foreground ml-auto">App.tsx</span>
          </div>
          <div className="space-y-1.5 font-mono text-[10px] text-primary/80">
            <div className="flex gap-2">
              <span className="text-secondary">const</span>
              <span>architect</span> = <span className="text-emerald-400">&apos;scalable&apos;</span>;
            </div>
            <div className="h-1.5 w-3/4 rounded bg-primary/20" />
            <div className="h-1.5 w-1/2 rounded bg-secondary/20" />
          </div>
        </motion.div>

        <motion.div
          className="spline-fallback-plane spline-fallback-plane-b"
          animate={{ y: [16, -14, 16], rotateZ: [2, -3, 2] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-primary">Performance</span>
              <span className="text-[10px] font-mono text-emerald-400">99%</span>
            </div>
            <div className="w-full bg-primary/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary h-full w-[94%]" />
            </div>
            <div className="flex gap-1.5">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">React 19</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-secondary/10 text-secondary">Next.js</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="spline-fallback-plane spline-fallback-plane-c"
          animate={{ y: [-10, 18, -10], rotateZ: [-3, 2, -3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              3D
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">Interactive Motion</div>
              <div className="text-[10px] text-muted-foreground">WebGL + Framer</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Rotating Core Rings */}
        <motion.div
          className="spline-fallback-core"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <span className="border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.3)]" />
          <span className="border-secondary/40 shadow-[0_0_30px_hsl(var(--secondary)/0.3)]" />
          <span className="border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]" />
        </motion.div>
      </motion.div>
      <div className="spline-hero-fade" />
    </motion.div>
  );
}
