"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/pages/Contact";
import { initScrollAnimations, ScrollTrigger } from "@/lib/animations";
import { scrollToTop } from "@/lib/navigation";

export default function ContactRoute() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    scrollToTop(true);

    const timer = setTimeout(() => {
      scrollToTop(true);
      initScrollAnimations();
    }, 50);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="site">
      <Header page="contact" />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
