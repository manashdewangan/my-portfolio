"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Briefcase,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ContactTabsForm } from "./component/ContactTabsForm";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9179647841",
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

const inquiryTypes = [
  "Recruitment Opportunity",
  "Freelance Project",
  "Startup Collaboration",
  "Portfolio Website",
  "SaaS Platform",
  "Dashboard",
  "Mobile App",
  "Landing Page",
  "E-Commerce",
  "Custom Web App",
  "General Contact",
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <main className="relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for freelance & full-time opportunities
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Let&apos;s Build{" "}
            <span className="gradient-text">Something Great</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            I build scalable web and mobile applications with modern UI, strong
            frontend architecture, and smooth user experiences.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <Card className="border-border/50 bg-background/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Contact Information
                </h2>

                <p className="mb-8 leading-7 text-muted-foreground">
                  Feel free to reach out for freelance work, recruiter
                  inquiries, startup collaborations, or full-stack & mobile
                  development opportunities.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-background/40 p-4 transition-all hover:border-primary/30"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <item.icon className="text-primary" size={22} />
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>

                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-background/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Briefcase className="text-primary" size={22} />
                  <h3 className="text-xl font-semibold">Services</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Next.js Development",
                    "React Native Apps",
                    "SaaS Platforms",
                    "Admin Dashboards",
                    "Landing Pages",
                    "UI/UX Development",
                  ].map((service) => (
                    <div
                      key={service}
                      className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-background/50 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="text-primary" size={22} />
                  <h3 className="text-xl font-semibold">Availability</h3>
                </div>

                <p className="leading-7 text-muted-foreground">
                  Currently open to freelance projects, recruiter opportunities,
                  startup collaborations, and full-stack web & mobile
                  development roles.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT SIDE */}
          <ContactTabsForm />
        </div>
      </div>
    </main>
  );
}
