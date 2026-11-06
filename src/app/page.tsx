"use client";

import { useEffect, useMemo, useState } from "react";
import { Page } from "@/types/portfolio";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/components/pages/Home";
import { About } from "@/components/pages/About";
import { Projects } from "@/components/pages/Projects";
import { CaseStudy } from "@/components/pages/CaseStudy";
import { Services } from "@/components/pages/Services";
import { Experience } from "@/components/pages/Experience";
import { Contact } from "@/components/pages/Contact";
import { initScrollAnimations, ScrollTrigger } from "@/lib/animations";
import { scrollToTop } from "@/lib/navigation";

const validPages: Page[] = [
  "home",
  "about",
  "projects",
  "project",
  "services",
  "experience",
  "contact",
];

export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1) as Page;
      if (hash && validPages.includes(hash)) {
        setPage(hash);
      }
    }

    const sync = () => {
      const hash = (window.location.hash.slice(1) as Page) || "home";
      setPage(hash);
      scrollToTop(true);
    };

    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  // Ensure scroll is at top whenever page changes, then initialize GSAP ScrollTrigger
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
  }, [page]);

  const content = useMemo(() => {
    switch (page) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "project":
        return <CaseStudy />;
      case "services":
        return <Services />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return <Home />;
    }
  }, [page]);

  return (
    <div className="site">
      <Header page={page} />
      <main>{content}</main>
      <Footer />
    </div>
  );
}
