"use client";

import { assets, projects, services } from "@/data/portfolio";
import { go } from "@/lib/navigation";
import { Button } from "@/components/common/Button";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ServiceCard } from "@/components/common/ServiceCard";
import { Timeline } from "@/components/common/Timeline";
import { FinalCta } from "@/components/common/FinalCta";

export function Home() {
  const skillCategories = [
    { title: "Frontend", items: "React / Next.js / TypeScript / Tailwind CSS" },
    { title: "Backend & APIs", items: "Node.js / Express / REST APIs / Python" },
    { title: "Databases", items: "MongoDB / MySQL / Prisma" },
    { title: "Cloud & DevOps", items: "AWS / Docker / CI/CD / Git" },
  ];

  return (
    <>
      <section className="hero home-hero">
        <div className="hero-copy">
          <Eyebrow>INDEPENDENT DEVELOPER / SATARA, INDIA</Eyebrow>
          <span className="availability">● &nbsp; Open for collaboration</span>
          <h1>
            Building Digital
            <br />
            Experiences That
            <br />
            Move Businesses
            <br />
            Forward.
          </h1>
          <p>
            Full-stack developer building high-performance web applications, scalable APIs, and
            intuitive user interfaces.
          </p>
          <div className="actions">
            <Button onClick={() => go("projects")}>View my work ↗</Button>
            <Button secondary onClick={() => go("contact")}>
              Let’s talk ↗
            </Button>
          </div>
        </div>
        <div className="workspace-visual">
          <div className="orbit-labels">
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Python</span>
          </div>
          <img src={`${assets}/9890c.png`} alt="Developer workspace" />
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="01 / ABOUT">
          Curiosity is the starting point.
          <br />
          Craft is what comes next.
        </SectionTitle>
        <div className="about-preview">
          <div>
            <img src={`${assets}/d85e4.png`} alt="Sanskar Bandgar" />
            <Eyebrow>SANSKAR BANDGAR / SATARA, MAHARASHTRA</Eyebrow>
          </div>
          <div>
            <h3>
              A developer’s mindset.
              <br />
              An engineer’s foundation.
            </h3>
            <p>
              I am an Information Technology student and full-stack developer dedicated to turning
              ideas into clean, reliable software.
            </p>
            <p>
              From accessible frontends to resilient backends, my focus is on clarity, modular
              architecture, and long-term maintainability.
            </p>
            <Button secondary onClick={() => go("about")}>
              Explore about me ↗
            </Button>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="02 / TECH STACK"
          description="A practical, battle-tested toolkit for modern web applications."
        >
          A connected stack.
          <br />
          Built for scale.
        </SectionTitle>
        <div className="ecosystem">
          <img src={`${assets}/ab923.png`} alt="" />
          <img className="core-cube" src={`${assets}/09732.png`} alt="Technology stack" />
          {[
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "AWS",
            "Python",
            "TypeScript",
            "Tailwind",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <div className="skill-grid">
          {skillCategories.map((skill, index) => (
            <article className="simple-card" key={skill.title}>
              <Eyebrow>{String(index + 1).padStart(2, "0")}</Eyebrow>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="03 / FEATURED PROJECTS"
          description="Selected builds across web utilities, healthcare, and automation."
        >
          Featured work.
        </SectionTitle>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
        <div style={{ marginTop: "24px" }}>
          <Button secondary onClick={() => go("projects")}>
            Explore all projects ↗
          </Button>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="04 / SERVICES">
          From concept to production.
        </SectionTitle>
        <div className="service-grid">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service[0]} service={service} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="05 / JOURNEY">
          A path of continuous learning.
        </SectionTitle>
        <Timeline />
      </section>

      <FinalCta />
    </>
  );
}
