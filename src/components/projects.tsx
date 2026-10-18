"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, ProjectDetails } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import {
  Github,
  ExternalLink,
  Code2,
  Info,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectDetails | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated selection of real-world web applications, production software suites, and
            developer tools I have engineered.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const image = PlaceHolderImages.find((p) => p.id === project.imageUrl);
            return (
              <Card
                key={project.id}
                className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Image Container with subtle scale */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-background/90 text-foreground backdrop-blur border border-border/80 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-xs font-medium text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 border-t border-border/50 flex items-center justify-between gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveProject(project)}
                    className="text-xs text-muted-foreground hover:text-primary hover:bg-secondary/60 px-2.5"
                  >
                    <Info className="w-3.5 h-3.5 mr-1" />
                    Details
                  </Button>

                  <div className="flex items-center gap-2">
                    {Boolean(project.repoUrl) && (
                      <Button variant="outline" size="sm" asChild className="text-xs h-8 px-2.5">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <Github className="w-3.5 h-3.5 mr-1" />
                          <span>Code</span>
                        </a>
                      </Button>
                    )}

                    {Boolean(project.liveUrl) && (
                      <Button
                        size="sm"
                        asChild
                        className="text-xs h-8 px-3 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live preview`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-1" />
                          <span>Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Project Details Modal / Dialog */}
        <Dialog
          open={!!activeProject}
          onOpenChange={(open) => {
            if (!open) setActiveProject(null);
          }}
        >
          {activeProject && (
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8">
              <DialogHeader className="space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    {activeProject.category}
                  </span>
                  <span className="text-xs text-muted-foreground">Detailed Technical Breakdown</span>
                </div>
                <DialogTitle className="text-2xl sm:text-3xl font-bold font-headline">
                  {activeProject.title}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {activeProject.subtitle}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4 text-sm text-foreground">
                {/* Problem Statement */}
                <div className="p-4 rounded-lg bg-secondary/40 border border-border space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>The Problem Statement</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm pl-6">
                    {activeProject.problem}
                  </p>
                </div>

                {/* Project Objectives */}
                <div className="space-y-2.5">
                  <h4 className="font-bold font-headline text-base flex items-center gap-2">
                    <TargetIcon className="w-4 h-4 text-primary" />
                    Key Objectives
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                    {activeProject.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features & Functionality */}
                <div className="space-y-2.5">
                  <h4 className="font-bold font-headline text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Key Features & Functionality
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    {activeProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture & Implementation Details */}
                <div className="space-y-2">
                  <h4 className="font-bold font-headline text-base flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary" />
                    Implementation & Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeProject.implementation}
                  </p>
                </div>

                {/* Challenges & Solutions */}
                <div className="space-y-2 p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-bold font-headline text-sm flex items-center gap-2 text-foreground">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    Engineering Challenges & Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeProject.challenges}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-border">
                  {Boolean(activeProject.repoUrl) && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  )}

                  {Boolean(activeProject.liveUrl) && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Launch Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
