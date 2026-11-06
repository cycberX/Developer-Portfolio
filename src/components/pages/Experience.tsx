"use client";

import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/Timeline";
import { FinalCta } from "@/components/common/FinalCta";

export function Experience() {
  return (
    <>
      <section className="page-hero">
        <Eyebrow>EXPERIENCE / CAREER PATH</Eyebrow>
        <h1>
          Building experience.
          <br />
          Refining craft.
        </h1>
        <p>
          A timeline of technical education, software development internships, and client
          projects.
        </p>
      </section>

      <section>
        <SectionTitle eyebrow="01 / TIMELINE">Work & Education</SectionTitle>
        <Timeline cards />
      </section>

      <section>
        <SectionTitle eyebrow="02 / CERTIFICATIONS">
          Industry Credentials
        </SectionTitle>
        <div className="two-col">
          <article className="simple-card">
            <Eyebrow>AMAZON WEB SERVICES</Eyebrow>
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>
              Foundational cloud architecture, AWS core compute, storage, networking, and
              security governance.
            </p>
          </article>
          <article className="simple-card">
            <Eyebrow>COMPTIA</Eyebrow>
            <h3>CompTIA Security+</h3>
            <p>
              Network security, threats and vulnerabilities, identity management, and security
              controls.
            </p>
          </article>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
