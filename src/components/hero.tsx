"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";
import SocialLinks from "./social-links";
import {
  Code2,
  Handshake,
  Mail,
  ChevronDown,
  MapPin,
  GraduationCap,
  Sparkles,
  Download,
} from "lucide-react";

export default function Hero() {
  const { student } = portfolioData;
  const [imageError, setImageError] = useState(false);

  // Retrieve existing verified portfolio image
  const profileImage =
    PlaceHolderImages.find((img) => img.id === "student-profile-1") ||
    PlaceHolderImages.find((img) => img.id.startsWith("student-profile"));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean Typographic Eyebrow (No decorative badge pill) */}
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary">
              Developer • Engineer • Student
            </div>

            {/* Main Prominent Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-headline text-foreground leading-[1.1]">
                Hi, I&apos;m <span className="text-primary">{student.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-muted-foreground font-headline">
                {student.title}
              </p>
            </div>

            {/* Software Development Interests Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              I specialize in developing scalable web applications, robust backend services, and cloud-native software.
              Combining computer science foundations from Savitribai Phule Pune University (SPPU) with hands-on full-stack engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA */}
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 shadow-sm active:scale-[0.98] transition-all"
              >
                <Code2 className="mr-2 h-4 w-4" />
                Explore My Projects
              </Button>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("collaborate")}
                className="border-primary/40 text-foreground hover:bg-secondary hover:text-primary font-semibold px-6 active:scale-[0.98] transition-all"
              >
                <Handshake className="mr-2 h-4 w-4 text-primary" />
                Collaborate With Me
              </Button>

              {/* Contact Button */}
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4 text-primary" />
                  Contact Me
                </Link>
              </Button>

              {/* Resume Download */}
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
              >
                <a href="/resume.pdf" download="Sanskar_Bandgar_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  CV
                </a>
              </Button>
            </div>

            {/* Social Media Links Component */}
            <div className="pt-3 border-t border-border/60">
              <div className="text-xs text-muted-foreground font-medium mb-2.5">
                Connect with me:
              </div>
              <SocialLinks variant="hero" />
            </div>
          </div>

          {/* Right Column: Visual Composition with Existing Assets */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Visual Card */}
              <div className="rounded-2xl border border-border bg-card p-3 sm:p-4 shadow-sm transition-all hover:border-primary/40">
                <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-xl overflow-hidden bg-muted">
                  {!imageError && profileImage ? (
                    <Image
                      src={profileImage.imageUrl}
                      alt={student.name}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-secondary/50">
                      <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <Code2 className="w-10 h-10" />
                      </div>
                      <div className="font-headline font-bold text-lg text-foreground">
                        {student.name}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Full Stack Developer • Satara, Maharashtra
                      </p>
                    </div>
                  )}
                </div>

                {/* Sub-card details */}
                <div className="pt-4 px-2 pb-2 space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/60 pb-3">
                    <div className="flex items-center gap-1.5 font-medium text-foreground">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>SPPU Information Technology</span>
                    </div>
                    <span className="text-[11px]">2024 - 2028</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 font-medium text-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{student.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-primary font-semibold">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>Open for Collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Indicator */}
       
      </div>
    </section>
  );
}
