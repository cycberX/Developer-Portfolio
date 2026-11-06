"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/types/portfolio";
import { go } from "@/lib/navigation";
import { attachCardHover } from "@/lib/animations";
import { Eyebrow } from "./Eyebrow";

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return attachCardHover(cardRef.current);
  }, []);

  return (
    <article ref={cardRef} className={`project-card ${compact ? "compact" : ""}`}>
      <div className="project-visual">
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} />
        ) : (
          <div className="neuro-visual">
            <Eyebrow>NEURODESK / AI AGENT</Eyebrow>
            <strong>Intent → Action</strong>
            <code>Understand. Plan. Assist.</code>
          </div>
        )}
      </div>
      <Eyebrow>{project.category.toUpperCase()}</Eyebrow>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Eyebrow>{project.tech}</Eyebrow>
      <div className="actions">
        {project.title === "QRCodeForge" ? (
          <button type="button" className="text-link" onClick={() => go("project")}>
            Case study ↗
          </button>
        ) : project.demo ? (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Visit live ↗
          </a>
        ) : null}
        {project.source && (
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            Source ↗
          </a>
        )}
      </div>
    </article>
  );
}
