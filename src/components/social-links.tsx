"use client";

import React from "react";
import { getActiveSocials } from "@/lib/socials";
import { Button } from "./ui/button";

interface SocialLinksProps {
  variant?: "hero" | "compact" | "footer" | "card";
  showLabel?: boolean;
  className?: string;
}

export default function SocialLinks({
  variant = "compact",
  showLabel = false,
  className = "",
}: SocialLinksProps) {
  const activeSocials = getActiveSocials();

  if (activeSocials.length === 0) {
    return null;
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        {activeSocials.map((social) => {
          const Icon = social.icon;
          return (
            <Button
              key={social.id}
              variant="outline"
              size="sm"
              asChild
              className="h-9 px-3 rounded-md border-border bg-card hover:bg-secondary hover:text-primary transition-all duration-200 active:scale-95"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Sanskar Bandgar's ${social.name} profile`}
                title={`${social.name}: ${social.description || social.url}`}
              >
                <Icon className="h-4 w-4 mr-1.5" />
                <span className="text-xs font-medium">{social.name}</span>
              </a>
            </Button>
          );
        })}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {activeSocials.map((social) => {
          const Icon = social.icon;
          return (
            <Button
              key={social.id}
              variant="outline"
              size="sm"
              asChild
              className="h-8 px-2.5 text-xs border-border bg-card hover:bg-secondary hover:text-primary transition-all"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect on ${social.name}`}
                title={social.name}
              >
                <Icon className="h-3.5 w-3.5 mr-1.5" />
                <span>{social.name}</span>
              </a>
            </Button>
          );
        })}
      </div>
    );
  }

  // Default compact icon layout
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {activeSocials.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.id}
            variant="ghost"
            size="icon"
            asChild
            className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              <Icon className="h-4 w-4" />
              {showLabel && <span className="sr-only">{social.name}</span>}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
