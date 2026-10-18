"use client";

import { portfolioData } from "@/lib/data";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A verified timeline of my engineering internships, client engagements, and academic
            milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border ml-4 sm:ml-8 space-y-12">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-card border-2 border-primary text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Content Card */}
                <Card className="border border-border bg-card shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors">
                          {item.role}
                        </CardTitle>
                        <div className="text-sm font-medium text-muted-foreground mt-0.5">
                          {item.company}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border w-fit">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
