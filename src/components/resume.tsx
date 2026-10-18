"use client";

import { Button } from "./ui/button";
import { Download, FileText, CheckCircle2, Eye } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { portfolioData } from "@/lib/data";

export default function Resume() {
  const { student } = portfolioData;

  const quickPoints = [
    "Information Technology Engineering Student @ SPPU",
    "Hands-on Full Stack experience with React, Next.js, Node.js & MongoDB",
    "AWS Certified Cloud Practitioner & CompTIA Security+ certified",
    "Proficient in REST APIs, Server-Sent Events & Tailwind CSS",
  ];

  return (
    <section id="resume" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-border bg-card p-8 sm:p-12 shadow-sm">
          <CardContent className="space-y-8 p-0 text-center">
            <div className="inline-flex p-3.5 bg-primary/10 rounded-full text-primary border border-primary/20 mx-auto">
              <FileText className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline text-foreground">
                Curriculum Vitae & Resume
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Looking for an in-depth review of my coursework, technical skills, and project experience?
                Download my comprehensive developer resume.
              </p>
            </div>

            {/* Quick Summary Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto p-4 rounded-lg bg-secondary/30 border border-border">
              {quickPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 shadow-sm active:scale-[0.98] transition-all"
              >
                <a href="/resume.pdf" download="Sanskar_Bandgar_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Complete Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-secondary font-semibold px-6"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview in Browser
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
