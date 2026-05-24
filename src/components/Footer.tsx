"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-2xl font-bold gradient-text">
              MD
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full-Stack & Mobile Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <motion.a
              href="https://github.com/manashdewangan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/manash-dewangan-354251233/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Made with <Heart size={14} className="text-primary" /> by Manash
            Dewangan
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
