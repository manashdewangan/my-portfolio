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
        animate={{ rotateX: [56, 60, 56], rotateZ: [-8, -2, -8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="spline-fallback-plane spline-fallback-plane-a"
          animate={{ y: [-12, 14, -12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="spline-fallback-plane spline-fallback-plane-b"
          animate={{ y: [18, -10, 18] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="spline-fallback-plane spline-fallback-plane-c"
          animate={{ y: [-8, 18, -8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="spline-fallback-core"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <span />
          <span />
          <span />
        </motion.div>
      </motion.div>
      <div className="spline-hero-fade" />
    </motion.div>
  );
}
