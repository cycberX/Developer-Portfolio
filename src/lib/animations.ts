import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initScrollAnimations(container?: HTMLElement | Document) {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const root = container || document;

  // Animate headings and section titles
  const headings = root.querySelectorAll(".section-heading, .page-hero");
  headings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Stagger grid cards
  const grids = root.querySelectorAll(".project-grid, .service-grid, .skill-grid, .three-col");
  grids.forEach((grid) => {
    const cards = grid.children;
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });

  // Timeline entries
  const timelineItems = root.querySelectorAll(".timeline article");
  timelineItems.forEach((item, i) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: i * 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Final CTA section
  const cta = root.querySelector(".final-cta");
  if (cta) {
    gsap.fromTo(
      cta,
      { opacity: 0, scale: 0.97, y: 24 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cta,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  ScrollTrigger.refresh();
}

/**
 * Attaches interactive 3D tilt and elevation on hover
 */
export function attachCardHover(element: HTMLElement | null) {
  if (!element || typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const onMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = (-y / (rect.height / 2)) * 5;
    const rotY = (x / (rect.width / 2)) * 5;

    gsap.to(element, {
      rotateX: rotX,
      rotateY: rotY,
      y: -6,
      scale: 1.015,
      duration: 0.25,
      ease: "power1.out",
      transformPerspective: 900,
    });
  };

  const onMouseLeave = () => {
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  element.addEventListener("mousemove", onMouseMove);
  element.addEventListener("mouseleave", onMouseLeave);

  return () => {
    element.removeEventListener("mousemove", onMouseMove);
    element.removeEventListener("mouseleave", onMouseLeave);
  };
}

export { gsap, ScrollTrigger };
