"use client";

import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion";
import React, { useRef, useState } from "react";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  tiltIntensity?: number;
  glareOpacity?: number;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 220, 240, 0.15)",
  tiltIntensity = 12,
  glareOpacity = 0.15,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized mouse coordinates: -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Pixel coordinates within card for radial spotlight
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });
    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={`relative rounded-2xl transition-shadow duration-300 ${className}`}
      {...props}
    >
      {/* Spotlight Radial Follower */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Specular Glare */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 z-20 mix-blend-overlay"
        style={{
          opacity: isHovered ? glareOpacity : 0,
          background: `radial-gradient(circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255,255,255,0.8) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Card Content with 3D Pop */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
