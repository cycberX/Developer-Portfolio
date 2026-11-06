"use client";

import { useEffect, useState } from "react";
import { Page } from "@/types/portfolio";
import { navItems } from "@/data/portfolio";
import { go } from "@/lib/navigation";
import { Button } from "@/components/common/Button";

export function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling while mobile drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close sidebar on Escape key
  useEffect(() => {
    if (!open || typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Background overlay - positioned below the mobile sidebar (z-index: 9998) */}
      {open && (
        <div
          className="nav-overlay"
          onClick={() => setOpen(false)}
          aria-label="Close navigation overlay"
          role="button"
          tabIndex={0}
        />
      )}

      {/* Standalone Mobile Slide-out Drawer (z-index: 9999) */}
      <aside
        className={`mobile-sidebar ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal={open}
      >
        <div className="sidebar-header">
          <span className="sidebar-title">Menu</span>
          <button
            type="button"
            className="sidebar-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav-items">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                page === item.id ||
                (page === "project" && item.id === "projects")
                  ? "active"
                  : ""
              }
              onClick={() => {
                go(item.id);
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile sidebar actions */}
        <div className="mobile-sidebar-actions">
          <a
            className="resume"
            href="https://mrsanskar.vercel.app/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Résumé ↓
          </a>

          <Button
            onClick={() => {
              go("contact");
              setOpen(false);
            }}
          >
            Let’s talk ↗
          </Button>
        </div>
      </aside>

      {/* Desktop & Main Header Navigation Shell */}
      <header className="nav-shell">
        <button
          type="button"
          className="brand"
          onClick={() => {
            go("home");
            setOpen(false);
          }}
          aria-label="Go home"
        >
          sb.
        </button>

        <nav className="nav-links" aria-label="Desktop primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                page === item.id ||
                (page === "project" && item.id === "projects")
                  ? "active"
                  : ""
              }
              onClick={() => {
                go(item.id);
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="resume"
            href="https://mrsanskar.vercel.app/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↓
          </a>

          <Button onClick={() => go("contact")}>
            Let’s talk ↗
          </Button>

          <button
            type="button"
            className={`menu-button ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <i />
            <i />
          </button>
        </div>
      </header>
    </>
  );
}
