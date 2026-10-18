"use client";

import { portfolioData } from "@/lib/data";
import { Mail, MapPin, Copy, Check, MessageSquare, ArrowRight } from "lucide-react";
import ContactForm from "@/components/contact-form";
import SocialLinks from "@/components/social-links";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { student } = portfolioData;
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(student.email);
      setCopied(true);
      toast({
        title: "Email Copied!",
        description: `${student.email} copied to your clipboard.`,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({
        variant: "destructive",
        title: "Copy failed",
        description: "Please manually copy the email address.",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I am always open to discussing new software projects, engineering ideas, or potential developer roles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
              <h2 className="text-2xl font-bold mb-6 font-headline">Send a Direct Message</h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                <h2 className="text-2xl font-bold mb-6 font-headline">Contact Information</h2>
                <div className="space-y-5 text-muted-foreground">
                  <div className="flex items-center justify-between gap-4 p-3 rounded-md bg-secondary/30">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <a
                        href={`mailto:${student.email}`}
                        className="text-foreground hover:text-primary transition-colors font-medium break-all"
                      >
                        {student.email}
                      </a>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyEmail}
                      className="h-8 px-2.5 text-xs text-muted-foreground hover:text-foreground"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 mr-1" />
                          <span>Copy</span>
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-md bg-secondary/30">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{student.location}</span>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">
                      Prefer social channels? Reach out or connect with me on professional networks:
                    </p>
                    <SocialLinks variant="hero" />
                  </div>
                </div>
              </div>

              {/* Dedicated Collaborate Callout Card */}
              <div className="bg-secondary/40 p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-md text-primary mt-1">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h3 className="font-semibold text-foreground text-lg">Looking to Collaborate?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Have a specific open-source idea, hackathon proposal, web application project, or technical initiative in mind?
                    </p>
                    <div className="pt-2">
                      <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/#collaborate">
                          Go to Collaboration Form <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed for Satara, Maharashtra */}
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <div className="w-full h-56 bg-muted">
                  <iframe
                    title="Location map - Satara, Maharashtra, India"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60888.75053703358!2d73.97816828553942!3d17.68864703960015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239be08d96bbd%3A0x5f4ada5501d90703!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
