"use client";

import { assets, projects, services } from "@/data/portfolio";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ServiceCard } from "@/components/common/ServiceCard";
import { ProjectCard } from "@/components/common/ProjectCard";
import { FinalCta } from "@/components/common/FinalCta";

export function Services() {
  const process = [
    ["01", "Discovery", "Understand project requirements, scope, and technical targets."],
    ["02", "Architecture", "Design data models, API endpoints, and UI wireframes."],
    ["03", "Development", "Build accessible, responsive frontend components and robust APIs."],
    ["04", "Testing", "Verify performance, cross-browser responsiveness, and edge cases."],
    ["05", "Deployment", "Configure CI/CD pipelines, cloud hosting, and domain configuration."],
    ["06", "Handoff", "Deliver documentation, code repositories, and production readiness."],
  ];

  return (
    <>
      <section className="hero service-hero">
        <div className="hero-copy">
          <Eyebrow>SERVICES / CAPABILITIES</Eyebrow>
          <h1>
            Full-stack
            <br />
            engineering.
          </h1>
          <p>
            From bespoke websites to connected full-stack web applications. Delivering clean code,
            reliable APIs, and performant user interfaces.
          </p>
        </div>
        <img src={`${assets}/09732.png`} alt="Connected services visual" />
      </section>

      <section>
        <SectionTitle eyebrow="01 / WHAT I OFFER">
          End-to-End Capabilities
        </SectionTitle>
        <div className="service-grid">
          {services.map((x) => (
            <ServiceCard service={x} key={x[0]} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="02 / METHODOLOGY">The Delivery Process</SectionTitle>
        <div className="three-col process-grid">
          {process.map((x) => (
            <article className="tint-card" key={x[0]}>
              <Eyebrow>{x[0]}</Eyebrow>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="03 / PROVEN WORK">Recent Case Studies</SectionTitle>
        <div className="project-grid">
          {projects.slice(0, 2).map((x) => (
            <ProjectCard project={x} key={x.title} />
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
