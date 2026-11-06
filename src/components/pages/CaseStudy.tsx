"use client";

import { assets, projects } from "@/data/portfolio";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProjectCard } from "@/components/common/ProjectCard";
import { FinalCta } from "@/components/common/FinalCta";

export function CaseStudy() {
  return (
    <>
      <section className="page-hero">
        <Eyebrow>CASE STUDY / WEB UTILITY</Eyebrow>
        <h1>
          QRCodeForge
          <br />
          Custom QR Utility
        </h1>
        <p>
          A vector-grade QR code generator supporting custom logo embedding, unique eye frames,
          and high-resolution export for digital and print media.
        </p>
        <Eyebrow>NEXT.JS / TYPESCRIPT / CANVAS API / TAILWIND</Eyebrow>
      </section>

      <div className="wide-image">
        <img src={`${assets}/a4b10.png`} alt="QRCodeForge Application" />
      </div>

      <section>
        <SectionTitle eyebrow="01 / OVERVIEW">Purpose & Architecture</SectionTitle>
        <div className="two-col copy-columns">
          <div>
            <h3>The Challenge</h3>
            <p>
              Standard QR generators often produce generic, rigid codes that lack branding
              integration. The goal was to provide a fluid, real-time customization experience with
              embedded logo support, custom corner radius, and color palettes.
            </p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>
              Built using HTML5 Canvas API and TypeScript for client-side rendering. Users can
              preview edits in real time and export PNG or SVG assets with customizable resolution
              for packaging and marketing collateral.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="02 / FLOW">Generate. Style. Export.</SectionTitle>
        <div className="three-col numbered">
          {[
            ["01", "Define Target", "Input URLs, plain text, Wi-Fi credentials, or vCards."],
            ["02", "Customize Styling", "Embed brand logos, apply gradient accents, and style marker eyes."],
            ["03", "High-Res Export", "Download print-ready raster or vector assets directly in the browser."],
          ].map((x) => (
            <article className="simple-card" key={x[0]}>
              <Eyebrow>{x[0]}</Eyebrow>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="03 / STACK">Technical Foundation</SectionTitle>
        <div className="chips">
          <span>Next.js App Router</span>
          <span>TypeScript Type Safety</span>
          <span>Tailwind CSS Styling</span>
          <span>HTML5 Canvas Engine</span>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="04 / MORE BUILDS">Related Projects</SectionTitle>
        <div className="project-grid">
          {projects.slice(1, 3).map((x) => (
            <ProjectCard project={x} key={x.title} />
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
