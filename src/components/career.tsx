"use client";

import { portfolioData } from "@/lib/data";
import { Target, Compass, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Career() {
  const { title, description } = portfolioData.careerInterests;

  return (
    <section id="career" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-border bg-card p-8 sm:p-12 text-center shadow-sm">
          <CardContent className="space-y-6 p-0">
            <div className="inline-flex p-3.5 bg-primary/10 rounded-full text-primary border border-primary/20">
              <Target className="h-8 w-8" />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline text-foreground">
                {title}
              </h2>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
