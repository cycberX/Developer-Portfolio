"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Handshake, Mail } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Cta() {
  const scrollToCollaborate = () => {
    const el = document.getElementById("collaborate");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-sm">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground">
              Have a Project or Idea in Mind?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Whether you are looking to build a high-performance web app, discuss open-source collaboration,
              or explore full-time software engineering roles, I&apos;m ready to connect.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            <Button
              size="lg"
              onClick={scrollToCollaborate}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 shadow-sm active:scale-[0.98] transition-all"
            >
              <Handshake className="mr-2 h-4 w-4" />
              Collaborate With Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hover:bg-secondary font-semibold px-6"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Directly
              </Link>
            </Button>
          </div>

          <div className="mt-6 text-xs text-muted-foreground">
            Direct Email:{" "}
            <a
              href={`mailto:${portfolioData.student.email}`}
              className="text-primary hover:underline font-semibold"
            >
              {portfolioData.student.email}
            </a>{" "}
            • Satara, Maharashtra, India
          </div>
        </div>
      </div>
    </section>
  );
}
