"use client";

import { go } from "@/lib/navigation";
import { Eyebrow } from "@/components/common/Eyebrow";

export function Footer() {
  return (
    <footer>
      <div>
        <h3>sb. / Sanskar Bandgar</h3>
        <p>Full-stack development. Thoughtful experiences. Built from Satara, for the web.</p>
      </div>

      <div>
        <Eyebrow>EXPLORE</Eyebrow>
        <div className="footer-links">
          <div className="footer-links-row">
            <button type="button" onClick={() => go("home")}>
              Home
            </button>
            <span>/</span>
            <button type="button" onClick={() => go("about")}>
              About
            </button>
            <span>/</span>
            <button type="button" onClick={() => go("projects")}>
              Projects
            </button>
          </div>
          <div className="footer-links-row">
            <button type="button" onClick={() => go("services")}>
              Services
            </button>
            <span>/</span>
            <button type="button" onClick={() => go("experience")}>
              Experience
            </button>
            <span>/</span>
            <button type="button" onClick={() => go("contact")}>
              Contact
            </button>
          </div>
        </div>
      </div>

      <div>
        <Eyebrow>LET’S CONNECT</Eyebrow>
        <div className="footer-links">
          <a href="mailto:bandgarsanskar19@gmail.com">bandgarsanskar19@gmail.com</a>
          <div className="footer-social-row">
            <a
              href="https://github.com/mrsanskar19/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/sanskar-bandgar-719bb336a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <span>•</span>
            <a
              href="https://www.instagram.com/officialsanskarbandgar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </div>

      <small>
        © 2026 Sanskar Bandgar &nbsp; • &nbsp; Satara, India &nbsp; • &nbsp;{" "}
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          Back to top ↑
        </button>
      </small>
    </footer>
  );
}
