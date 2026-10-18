"use client";

import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { Code2, Mail, MapPin, Copy, Check, Handshake, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import SocialLinks from "./social-links";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { student } = portfolioData;
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(student.email);
      setCopied(true);
      toast({
        title: "Email Copied",
        description: `${student.email} copied to your clipboard.`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        variant: "destructive",
        title: "Copy failed",
        description: "Please manually copy the email address.",
      });
    }
  };

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "About Me", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Certificates", href: "/#certificates" },
    { name: "Collaborate", href: "/#collaborate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border mt-16 md:mt-24">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg">
              <div className="p-1.5 rounded-md bg-primary text-primary-foreground">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-headline font-bold text-foreground">
                {student.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {student.bio}
            </p>

            {/* Location & Email Details */}
            <div className="space-y-2 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{student.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${student.email}`}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {student.email}
                </a>
                <button
                  onClick={handleCopy}
                  className="ml-1 text-[11px] text-muted-foreground hover:text-foreground inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-border bg-background"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-green-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Collaboration Callout & Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Collaboration & Social
            </h3>

            <div className="p-4 rounded-lg bg-card border border-border space-y-3">
              <div className="flex items-center gap-2 font-medium text-xs text-foreground">
                <Handshake className="w-4 h-4 text-primary" />
                <span>Have an idea?</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Always open for open-source contributions, hackathons, and technical projects.
              </p>
              <Button asChild size="sm" className="w-full text-xs h-8 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#collaborate">
                  Start Collaborating
                </Link>
              </Button>
            </div>

            {/* Social Buttons */}
            <div className="pt-1">
              <SocialLinks variant="footer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {student.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Built with Next.js, React & Tailwind CSS</span>
            <span>•</span>
            <span>Satara, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
