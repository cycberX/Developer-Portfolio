import { Page } from "@/types/portfolio";

export function scrollToTop(instant = true) {
  if (typeof window === "undefined") return;

  const html = document.documentElement;
  const prevBehavior = html.style.scrollBehavior;

  if (instant) {
    html.style.setProperty("scroll-behavior", "auto", "important");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      html.style.removeProperty("scroll-behavior");
      if (prevBehavior) {
        html.style.scrollBehavior = prevBehavior;
      }
    });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
}

export function go(page: Page) {
  if (typeof window !== "undefined") {
    window.location.hash = page;
    scrollToTop(true);
  }
}
