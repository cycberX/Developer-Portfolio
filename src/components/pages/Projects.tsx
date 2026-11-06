"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import { Eyebrow } from "@/components/common/Eyebrow";
import { ProjectCard } from "@/components/common/ProjectCard";
import { FinalCta } from "@/components/common/FinalCta";
import { Button } from "@/components/common/Button";

export function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All projects");

  const categories = ["All projects", "Web utilities", "Healthcare", "AI & automation"];

  const visible = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        filter === "All projects" ||
        p.category.trim().toLowerCase() === filter.trim().toLowerCase();

      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.tech.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  const clearFilters = () => {
    setFilter("All projects");
    setSearch("");
  };

  return (
    <>
      <section className="page-hero">
        <Eyebrow>PORTFOLIO / SELECTED BUILDS</Eyebrow>
        <h1>
          Built with care.
          <br />
          Shipped for users.
        </h1>
        <p>
          A selection of web utilities, healthcare clinic applications, and automated systems.
        </p>
      </section>

      <section className="filter-panel">
        <label className="search">
          <span>⌕</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name, technology, or keywords..."
          />
        </label>

        <div className="chips">
          {categories.map((cat) => {
            const count =
              cat === "All projects"
                ? projects.length
                : projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;

            return (
              <button
                type="button"
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
                key={cat}
              >
                {cat} · {count}
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <Eyebrow>
            {String(visible.length).padStart(2, "0")} {visible.length === 1 ? "PROJECT" : "PROJECTS"}
          </Eyebrow>

          {(filter !== "All projects" || search.trim() !== "") && (
            <button
              type="button"
              onClick={clearFilters}
              style={{
                border: "none",
                background: "none",
                color: "var(--blue)",
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Reset filter ↺
            </button>
          )}
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {visible.length === 0 && (
          <div style={{ padding: "48px 24px", textAlign: "center", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", margin: "20px 0" }}>
            <h3 style={{ marginBottom: "8px" }}>No matching projects</h3>
            <p style={{ marginBottom: "20px", color: "var(--muted)" }}>
              No projects match that search term or filter.
            </p>
            <Button secondary onClick={clearFilters}>
              Reset filter
            </Button>
          </div>
        )}
      </section>

      <FinalCta />
    </>
  );
}
