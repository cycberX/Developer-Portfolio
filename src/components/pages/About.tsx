"use client";

import { assets } from "@/data/portfolio";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/Timeline";
import { FinalCta } from "@/components/common/FinalCta";

export function About() {
  const skillCopy = [
    ["Frontend", "React, Next.js, TypeScript, Tailwind CSS"],
    ["Backend & APIs", "Node.js, Express, RESTful APIs, Python"],
    ["Databases", "MongoDB, MySQL, Prisma ORM"],
    ["Cloud & Tools", "AWS, Docker fundamentals, Git, Postman"],
  ];

  return (
    <>
      <section className="hero about-hero">
        <div className="hero-copy">
          <Eyebrow>ABOUT / SANSKAR BANDGAR</Eyebrow>
          <h1>
            An engineer
            <br />
            by education.
            <br />A builder
            <br />
            by instinct.
          </h1>
          <p>
            I turn complex technical requirements into intuitive, performant digital experiences.
            Focused on web engineering, distributed APIs, and cloud services.
          </p>
          <Eyebrow>SATARA, MAHARASHTRA, INDIA &nbsp;•&nbsp; REMOTE & HYBRID</Eyebrow>
        </div>
        <div className="portrait">
          <img src={`${assets}/d85e4.png`} alt="Sanskar Bandgar" />
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="01 / BACKGROUND">
          Foundations & Focus
        </SectionTitle>
        <div className="two-col copy-columns">
          <div>
            <h3>Education & Fundamentals</h3>
            <p>
              Pursuing a Bachelor of Engineering in Information Technology at Savitribai Phule
              Pune University. Academic training in data structures, algorithms, network architecture,
              and database systems provides a firm ground for building scalable applications.
            </p>
          </div>
          <div>
            <h3>What I Build</h3>
            <p>
              My hands-on experience spans full-stack web applications, REST API architectures, and
              cloud deployment workflows. I value code readability, automated tooling, and
              accessible interface design.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="02 / CAPABILITIES">Core proficiencies.</SectionTitle>
        <div className="skill-grid">
          {skillCopy.map(([a, b], i) => (
            <article className="simple-card" key={a}>
              <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="philosophy">
        <Eyebrow>03 / PRINCIPLES</Eyebrow>
        <h2>
          “Good software lives where rigorous engineering fundamentals meet thoughtful user
          experience.”
        </h2>
        <div className="three-col" style={{ marginTop: "32px" }}>
          <div>
            <h3>Clarity first</h3>
            <p>Clear abstractions and maintainable codebases.</p>
          </div>
          <div>
            <h3>Built to scale</h3>
            <p>Modular architecture that adapts with product growth.</p>
          </div>
          <div>
            <h3>Attention to detail</h3>
            <p>From schema validation to smooth UI interactions.</p>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="04 / TIMELINE">Experience & Milestones.</SectionTitle>
        <Timeline cards />
      </section>

      <FinalCta />
    </>
  );
}
