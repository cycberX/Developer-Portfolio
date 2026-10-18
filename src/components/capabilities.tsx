"use client";

import { portfolioData } from "@/lib/data";
import { Wrench } from "lucide-react";

export default function Capabilities() {
  const { capabilities } = portfolioData;

  return (
    <section id="capabilities" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            What I Can Build
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From modern responsive interfaces to real-time order systems and cloud pipelines, here are the
            core solutions I design and deliver.
          </p>
        </div>

        {/* Grid of Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="p-3 w-fit rounded-lg bg-secondary text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-headline text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
