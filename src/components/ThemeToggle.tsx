"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type React from "react";

const accents = [
  { name: "cyan", color: "hsl(187 100% 50%)" },
  { name: "emerald", color: "hsl(156 72% 46%)" },
  { name: "rose", color: "hsl(348 84% 62%)" },
  { name: "amber", color: "hsl(38 92% 54%)" },
] as const;

type AccentName = (typeof accents)[number]["name"];

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [accent, setAccent] = useState<AccentName>(() => {
    if (typeof window === "undefined") {
      return "cyan";
    }

    const savedAccent = window.localStorage.getItem("portfolio-accent");
    return accents.some((item) => item.name === savedAccent)
      ? (savedAccent as AccentName)
      : "cyan";
  });
  const isDark = resolvedTheme !== "light";

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
    window.localStorage.setItem("portfolio-accent", accent);
  }, [accent]);

  const changeAccent = (nextAccent: AccentName) => {
    setAccent(nextAccent);
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="theme-control" aria-label="Theme controls">
      <motion.button
        type="button"
        onClick={toggleTheme}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="theme-mode-button"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <motion.span
          initial={false}
          animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-primary" />
          ) : (
            <Moon className="h-5 w-5 text-primary" />
          )}
        </motion.span>
      </motion.button>

      <div className="theme-accent-group">
        {accents.map((item) => (
          <motion.button
            key={item.name}
            type="button"
            onClick={() => changeAccent(item.name)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="theme-accent-button mx-1"
            data-active={accent === item.name}
            aria-label={`Use ${item.name} accent`}
            style={{ "--accent-swatch": item.color } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};
