"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ContactTabsForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Card className="rounded-[2rem] border-border/50 bg-background/50 backdrop-blur-xl">
        <CardContent className="p-8 md:p-10">
          <div className="mb-8">
            <h2 className="mb-3 text-3xl font-bold">Let&apos;s Connect</h2>

            <p className="text-muted-foreground">
              Choose the category that best matches your inquiry.
            </p>
          </div>

          <Tabs defaultValue="recruiter" className="w-full">
            <TabsList className="mb-8 grid h-auto w-full grid-cols-3 rounded-2xl bg-muted/40 p-1">
              <TabsTrigger value="recruiter" className="rounded-xl py-3">
                Recruiter
              </TabsTrigger>

              <TabsTrigger value="freelance" className="rounded-xl py-3">
                Freelance
              </TabsTrigger>

              <TabsTrigger value="contact" className="rounded-xl py-3">
                Contact
              </TabsTrigger>
            </TabsList>

            {/* Recruiter Form */}
            <TabsContent value="recruiter">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Recruiter Name</Label>

                    <Input
                      required
                      placeholder="John Doe"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Company Email</Label>

                    <Input
                      type="email"
                      required
                      placeholder="hr@company.com"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Company Name</Label>

                    <Input
                      required
                      placeholder="Google"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Role Offered</Label>

                    <Input
                      required
                      placeholder="Frontend Developer"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Job Details</Label>

                  <Textarea
                    required
                    rows={6}
                    placeholder="Share job description, tech stack, expectations, salary range, remote/on-site details..."
                    className="rounded-2xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                  />
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background/40 p-4">
                  <Checkbox className="mt-1" />

                  <p className="text-sm leading-6 text-muted-foreground">
                    I consent to being contacted regarding this hiring inquiry.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-xl"
                >
                  <Send size={18} />
                  Send Recruiter Inquiry
                </Button>
              </form>
            </TabsContent>

            {/* Freelance Form */}
            <TabsContent value="freelance">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Your Name</Label>

                    <Input
                      required
                      placeholder="John Doe"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Email Address</Label>

                    <Input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Project Type</Label>

                    <Input
                      placeholder="SaaS Platform"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Budget Range</Label>

                    <Input
                      placeholder="₹50k - ₹1L"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Project Details</Label>

                  <Textarea
                    required
                    rows={6}
                    placeholder="Tell me about your project requirements, features, timeline, references..."
                    className="rounded-2xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-xl"
                >
                  <Send size={18} />
                  Send Project Inquiry
                </Button>
              </form>
            </TabsContent>

            {/* General Contact */}
            <TabsContent value="contact">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Name</Label>

                    <Input
                      required
                      placeholder="Your name"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Email</Label>

                    <Input
                      type="email"
                      required
                      placeholder="hello@example.com"
                      className="h-12 rounded-xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Message</Label>

                  <Textarea
                    required
                    rows={7}
                    placeholder="Say hello, ask something, or start a conversation..."
                    className="rounded-2xl border-border/60 focus-visible:ring-1 focus-visible:ring-primary/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-xl"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              Prefer direct communication?
            </p>

            <Link
              href="mailto:manashdewangan123@gmail.com"
              className="mt-2 inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
            >
              <Mail size={18} />
              manashdewangan123@gmail.com
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
