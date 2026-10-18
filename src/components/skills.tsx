"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { Cpu, CheckCircle, Globe, Server, Database, Cloud, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const { skillsCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Technologies" },
    ...skillsCategories.map((c) => ({ id: c.id, name: c.name })),
  ];

  const displayedCategories =
    activeCategory === "all"
      ? skillsCategories
      : skillsCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of programming languages, frameworks, cloud platforms, and tools
            I use to deliver production software.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="p-6 rounded-xl bg-card border border-border shadow-sm transition-all duration-300 hover:border-primary/40 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-secondary text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold font-headline text-lg text-foreground">
                          {category.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary/50 border border-border/80 hover:border-primary/40 hover:bg-secondary transition-colors"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-[10px] uppercase font-semibold text-muted-foreground ml-1 px-1.5 py-0.5 rounded bg-background/60">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
