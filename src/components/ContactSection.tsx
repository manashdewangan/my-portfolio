"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9179647841",
    href: "tel:+919179647841",
  },
  {
    icon: Mail,
    label: "Email",
    value: "manashdewangan123@gmail.com",
    href: "mailto:manashdewangan123@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Manash Dewangan",
    href: "https://www.linkedin.com/in/manash-dewangan-354251233/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "manashdewangan",
    href: "https://github.com/manashdewangan",
  },
];

import { SpotlightCard } from "./SpotlightCard";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="floating-blob blob-cyan w-[500px] h-[500px] -bottom-40 left-1/4 opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm font-mono mb-4 block"
          >
            05. Get In Touch
          </motion.span>
          <h2 className="section-heading mb-6">
            Let&apos;s Build <span className="gradient-text">Something Extraordinary</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently open to new product engineering opportunities, full-stack & mobile roles, and freelance projects. Let&apos;s turn your roadmap into reality!
          </p>

          {/* Contact 3D Cards */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard
                  tiltIntensity={10}
                  className="glass-card rounded-2xl p-6 h-full border border-border/60 hover:border-primary/50 transition-all duration-300 group"
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 text-left"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:manashdewangan123@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="cta-primary inline-flex items-center gap-2 text-base cursor-pointer"
          >
            <Send size={18} />
            Send a Direct Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
