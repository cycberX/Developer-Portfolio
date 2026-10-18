"use client";

import { portfolioData } from "@/lib/data";
import { User, GraduationCap, MapPin, Target, Sparkles, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { aboutMe, name } = portfolioData.student;

  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know my engineering journey, technical interests, and professional aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Narrative Content */}
          <div className="md:col-span-7 space-y-6">
            <Card className="border border-border bg-card">
              <CardContent className="p-6 sm:p-8 space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-headline flex items-center gap-2 text-foreground">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Engineering Foundations & Passion
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {aboutMe.introduction}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-border">
                  <h3 className="text-xl font-bold font-headline flex items-center gap-2 text-foreground">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Technical Focus & Philosophy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {aboutMe.technicalInterests}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-border">
                  <h3 className="text-xl font-bold font-headline flex items-center gap-2 text-foreground">
                    <Target className="w-5 h-5 text-primary" />
                    Current Goals
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {aboutMe.currentFocus}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Facts / Highlight Cards */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Highlights
            </h3>

            <div className="grid gap-3">
              <div className="p-4 rounded-lg bg-card border border-border flex items-start gap-3.5 transition-colors hover:border-primary/40">
                <div className="p-2 rounded-md bg-secondary text-primary mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Academics</div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">
                    B.E. in Information Technology
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Savitribai Phule Pune University (2024 - 2028)
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border flex items-start gap-3.5 transition-colors hover:border-primary/40">
                <div className="p-2 rounded-md bg-secondary text-primary mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Location</div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">
                    Satara, Maharashtra, India
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Open to remote and hybrid opportunities
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border flex items-start gap-3.5 transition-colors hover:border-primary/40">
                <div className="p-2 rounded-md bg-secondary text-primary mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Specialization</div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">
                    Full Stack Web & Cloud Systems
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Next.js, Node.js, Express, MongoDB, AWS
                  </div>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="p-5 rounded-lg bg-secondary/40 border border-border text-sm text-muted-foreground italic leading-relaxed">
              &ldquo;I believe the best software is built at the intersection of solid computer science fundamentals, modular architecture, and genuine attention to user experience.&rdquo;
              <div className="mt-2 text-xs font-semibold not-italic text-foreground">
                — {name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
