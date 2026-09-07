"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Mail,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface NavDockItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const dockItems: NavDockItem[] = [
  { label: "Home", href: "/#", icon: Home },
  { label: "About", href: "/#about", icon: User },
  { label: "Skills", href: "/#skills", icon: Cpu },
  { label: "Experience", href: "/#experience", icon: Briefcase },
  { label: "Projects", href: "/#projects", icon: FolderGit2 },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function FloatingBottomNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      if (pathname !== "/") return;

      const sections = ["about", "skills", "experience", "projects"];
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            current = `/#${section}`;
            break;
          }
        }
      }

      if (!current && window.scrollY < 300) {
        current = "/#";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex items-center justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className="pointer-events-auto relative flex items-center gap-1.5 sm:gap-2 rounded-full border border-border/80 bg-background/70 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl ring-1 ring-white/10"
        aria-label="Floating Quick Navigation"
      >
        {/* Glow halo behind the dock */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-md -z-10 opacity-70 pointer-events-none" />

        {dockItems.map((item, index) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/contact"
              ? pathname === "/contact"
              : pathname === "/" &&
                (activeSection === item.href ||
                  (item.href === "/#" && (!activeSection || activeSection === "/#")));

          return (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  aria-label={item.label}
                >
                  {/* Active highlight pill background */}
                  {isActive && (
                    <motion.div
                      layoutId="floating-nav-active"
                      className="absolute inset-0 rounded-full bg-primary/15 border border-primary/40 shadow-[0_0_16px_hsl(var(--primary)/0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Icon with scale on hover */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : isActive ? 1.1 : 1,
                      y: hoveredIndex === index ? -2 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative z-10"
                  >
                    <Icon size={20} className={isActive ? "text-primary" : ""} />
                  </motion.div>

                  {/* Little active glowing dot */}
                  {isActive && (
                    <motion.span
                      layoutId="floating-nav-dot"
                      className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-primary shadow-[0_0_6px_hsl(var(--primary))]"
                    />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={12}
                className="rounded-lg border border-border/80 bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-md shadow-lg"
              >
                {item.label}
              </TooltipContent>
            </Tooltip>
          );
        })}

        {/* Optional Back to Top button integrated in dock */}
        <AnimatePresence>
          {showBackToTop && (
            <>
              <div className="h-5 w-px bg-border/80 mx-0.5" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    type="button"
                    onClick={scrollToTop}
                    initial={{ scale: 0, opacity: 0, width: 0 }}
                    animate={{ scale: 1, opacity: 1, width: "auto" }}
                    exit={{ scale: 0, opacity: 0, width: 0 }}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="Back to Top"
                  >
                    <ArrowUp size={18} />
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={12}
                  className="rounded-lg border border-border/80 bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-md"
                >
                  Back to top
                </TooltipContent>
              </Tooltip>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
