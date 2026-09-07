"use client";

import { useEffect, useRef } from "react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  color: string;
}

interface GeometricShape3D {
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  size: number;
  vertices: [number, number, number][];
  edges: [number, number][];
}

export function Canvas3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.4;
      targetMouseY = (e.clientY - height / 2) * 0.4;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Create 3D Particles
    const particleCount = Math.min(Math.floor(width / 16), 75);
    const particles: Particle3D[] = [];

    const colors = [
      "hsla(187, 100%, 50%, ",
      "hsla(262, 83%, 58%, ",
      "hsla(156, 72%, 46%, ",
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 - 400,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        baseRadius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Helper: Build a 3D Octahedron / Cube wireframe
    const createIcosahedron = (
      x: number,
      y: number,
      z: number,
      size: number,
    ): GeometricShape3D => {
      // Octahedron vertices
      const v: [number, number, number][] = [
        [0, -size, 0],
        [size, 0, 0],
        [0, 0, size],
        [-size, 0, 0],
        [0, 0, -size],
        [0, size, 0],
      ];

      const e: [number, number][] = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [5, 1],
        [5, 2],
        [5, 3],
        [5, 4],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 1],
      ];

      return {
        x,
        y,
        z,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        vRotX: (Math.random() - 0.5) * 0.008,
        vRotY: (Math.random() - 0.5) * 0.008,
        vRotZ: (Math.random() - 0.5) * 0.008,
        size,
        vertices: v,
        edges: e,
      };
    };

    const shapes: GeometricShape3D[] = [
      createIcosahedron(width * 0.28, -height * 0.15, 150, 45),
      createIcosahedron(-width * 0.32, height * 0.2, 50, 60),
      createIcosahedron(width * 0.35, height * 0.35, -100, 35),
    ];

    const fov = 500;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const cx = width / 2;
      const cy = height / 2;

      // Project & Render 3D geometric shapes
      shapes.forEach((shape) => {
        shape.rotX += shape.vRotX;
        shape.rotY += shape.vRotY;
        shape.rotZ += shape.vRotZ;

        // Rotate vertices in 3D
        const cosX = Math.cos(shape.rotX);
        const sinX = Math.sin(shape.rotX);
        const cosY = Math.cos(shape.rotY);
        const sinY = Math.sin(shape.rotY);
        const cosZ = Math.cos(shape.rotZ);
        const sinZ = Math.sin(shape.rotZ);

        const projectedVertices: { x: number; y: number; visible: boolean }[] =
          shape.vertices.map(([vx, vy, vz]) => {
            // Y rotation
            const x1 = vx * cosY - vz * sinY;
            const y1 = vy;
            const z1 = vx * sinY + vz * cosY;

            // X rotation
            const x2 = x1;
            const y2 = y1 * cosX - z1 * sinX;
            const z2 = y1 * sinX + z1 * cosX;

            // Z rotation
            const x3 = x2 * cosZ - y2 * sinZ;
            const y3 = x2 * sinZ + y2 * cosZ;
            const z3 = z2;

            // World position with parallax mouse
            const wx = x3 + shape.x - mouseX * 0.5;
            const wy = y3 + shape.y - mouseY * 0.5;
            const wz = z3 + shape.z + fov;

            if (wz <= 10) return { x: 0, y: 0, visible: false };

            const scale = fov / wz;
            return {
              x: cx + wx * scale,
              y: cy + wy * scale,
              visible: true,
            };
          });

        // Draw edges
        ctx.save();
        ctx.strokeStyle = "rgba(0, 220, 240, 0.22)";
        ctx.lineWidth = 1;
        shape.edges.forEach(([i1, i2]) => {
          const p1 = projectedVertices[i1];
          const p2 = projectedVertices[i2];
          if (p1?.visible && p2?.visible) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Draw glowing vertex nodes
        projectedVertices.forEach((p) => {
          if (p.visible) {
            ctx.fillStyle = "rgba(0, 240, 255, 0.6)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        ctx.restore();
      });

      // Update & Render Particles
      const projectedParticles: {
        x: number;
        y: number;
        radius: number;
        alpha: number;
        color: string;
      }[] = [];

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around bounds
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;
        if (p.z < -400) p.z = 400;
        if (p.z > 400) p.z = -400;

        // Camera translation with mouse
        const wx = p.x - mouseX * 0.3;
        const wy = p.y - mouseY * 0.3;
        const wz = p.z + fov;

        if (wz > 10) {
          const scale = fov / wz;
          const px = cx + wx * scale;
          const py = cy + wy * scale;
          const radius = Math.max(0.5, p.baseRadius * scale);
          const alpha = Math.min(1, Math.max(0.1, (p.z + 400) / 800));

          projectedParticles.push({
            x: px,
            y: py,
            radius,
            alpha,
            color: p.color,
          });

          // Draw particle
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha * 0.75})`;
          ctx.fill();
        }
      });

      // Draw constellation connecting lines between close particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha =
              (1 - dist / 110) * 0.22 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(0, 220, 240, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-60 dark:opacity-75 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
