"use client"
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";

type Page =
  | "home"
  | "about"
  | "projects"
  | "project"
  | "services"
  | "experience"
  | "blog"
  | "article"
  | "contact";
type Theme = "light" | "dark";

const assets = "/assets";
const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "QRCodeForge",
    category: "Web utilities",
    image: `${assets}/a4b10.png`,
    description:
      "A customizable QR generator with logo embedding, custom eye frames and high-resolution export.",
    tech: "Next.js / TypeScript / Tailwind / Canvas API",
    demo: "https://qrcodeforge.vercel.app/",
    source: "https://github.com/mrsanskar19/QRCodeForge.git",
  },
  {
    title: "Smile N Care",
    category: "Healthcare",
    image: `${assets}/e43ca.png`,
    description:
      "A specialty dental clinic website presenting clinic information, services and contact details.",
    tech: "Next.js / JavaScript / Responsive design",
    demo: "https://smilencare.com",
  },
  {
    title: "Aryan Dental Clinic",
    category: "Healthcare",
    image: `${assets}/75a42.png`,
    description:
      "A professional dental clinic website that makes treatment information and services easy to explore.",
    tech: "Next.js / JavaScript / Responsive design",
    demo: "https://aryandentalclinic.com",
  },
  {
    title: "NeuroDesk",
    category: "AI & automation",
    description:
      "An AI agent project exploring computer control and intelligent assistance with desktop tasks.",
    tech: "Python / Machine Learning / AI automation",
    source: "https://github.com/cycberX/NeuroDesk",
  },
];

const services = [
  [
    "01",
    "Website development",
    "Fast, accessible websites that make a memorable first impression.",
    "c7a8f.png",
  ],
  [
    "02",
    "Full-stack applications",
    "Connected frontend and dependable backend, built as one.",
    "44e60.png",
  ],
  [
    "03",
    "SaaS product development",
    "From a focused product idea to a scalable application foundation.",
    "09732.png",
  ],
  [
    "04",
    "Dashboards & CRM",
    "Clear interfaces for complex workflows, data and operations.",
    "a1a88.png",
  ],
  [
    "05",
    "API development",
    "Reliable connections between products and third-party services.",
    "fdd9e.png",
  ],
  [
    "06",
    "AI & automation",
    "Explore intelligent workflows that solve real, repeatable problems.",
    "7ea37.png",
  ],
];

function go(page: Page) {
  window.location.hash = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Button({
  children,
  onClick,
  secondary = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
}) {
  return (
    <button className={`button ${secondary ? "button-secondary" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}


function Header({
  page,
  theme,
  setTheme,
}: {
  page: Page;
  theme: Theme;
  setTheme: (value: Theme) => void;
}) {
  const [open, setOpen] = useState(false);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      {open && (
        <button
          className="nav-overlay"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        />
      )}

      <header className="nav-shell justify-between">
        <button
          className="brand"
          onClick={() => {
            go("home");
            setOpen(false);
          }}
          aria-label="Go home"
        >
          sb.
        </button>

        <nav
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={
                page === item.id ||
                  (page === "project" && item.id === "projects") ||
                  (page === "article" && item.id === "blog")
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

          {/* Mobile sidebar actions */}
          <div className="mobile-sidebar-actions">


            <a
              className="resume"
              href="https://mrsanskar.vercel.app/resume.pdf"
              target="_blank"
              rel="noreferrer"
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
        </nav>

        <div className="nav-actions">


          <a
            className="resume"
            href="https://mrsanskar.vercel.app/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé ↓
          </a>

          <Button onClick={() => go("contact")}>
            Let’s talk ↗
          </Button>

          <button
            className="menu-button"
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


function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionTitle({
  eyebrow,
  children,
  description,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading reveal">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function FinalCta() {
  return (
    <section className="final-cta reveal">
      <Eyebrow>YOU GOT SOMETHING STARTED</Eyebrow>
      <h2>
        Have an idea?
        <br />
        Let’s build something
        <br />
        extraordinary.
      </h2>
      <p>A website, an ambitious product, or a better way of doing things.</p>
      <div className="actions">
        <Button onClick={() => go("contact")}>Contact me ↗</Button>
        <a href="mailto:bandgarsanskar19@gmail.com">Email me ↗</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <h3>sb. / Sanskar Bandgar</h3>
        <p>Full-stack development. Thoughtful experiences. Built from Satara, for the web.</p>
      </div>
      <div>
        <Eyebrow>EXPLORE</Eyebrow>
        <p>
          Home / About / Projects
          <br />
          Services / Experience
          <br />
          Blog / Contact
        </p>
      </div>
      <div>
        <Eyebrow>LET’S CONNECT</Eyebrow>
        <p>
          <a href="mailto:bandgarsanskar19@gmail.com">bandgarsanskar19@gmail.com</a>
          <br />
          <a href="https://github.com/mrsanskar19" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>{" "}
          &nbsp; LinkedIn ↗ &nbsp; Instagram ↗
        </p>
      </div>
      <small>
        © 2026 Sanskar Bandgar &nbsp; • &nbsp; Satara, India &nbsp; • &nbsp;{" "}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </small>
    </footer>
  );
}

function ProjectCard({
  project,
  compact = false,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  return (
    <article className={`project-card reveal ${compact ? "compact" : ""}`}>
      <div className="project-visual">
        {project.image ? (
          <img src={project.image} alt={`${project.title} website screenshot`} />
        ) : (
          <div className="neuro-visual">
            <Eyebrow>NEURODESK / AI AGENT</Eyebrow>
            <strong>Intent → Action</strong>
            <code>Understand. Plan. Assist.</code>
          </div>
        )}
      </div>
      <Eyebrow>{project.category}</Eyebrow>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <small>{project.tech}</small>
      <div className="card-actions">
        {project.title === "QRCodeForge" && (
          <Button onClick={() => go("project")}>Project details ↗</Button>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live demo ↗
          </a>
        )}
        {project.source && (
          <a href={project.source} target="_blank" rel="noreferrer">
            Source ↗
          </a>
        )}
      </div>
    </article>
  );
}

function ServiceCard({ service }: { service: string[] }) {
  return (
    <article className="service-card reveal">
      <img src={`${assets}/${service[3]}`} alt="" />
      <Eyebrow>{service[0]} / SERVICE</Eyebrow>
      <h3>{service[1]}</h3>
      <p>{service[2]}</p>
    </article>
  );
}

function Home() {
  const skills = [
    "Frontend",
    "Backend & APIs",
    "Databases",
    "Languages",
    "UI engineering",
    "Cloud & deployment",
    "AI & automation",
    "Developer tools",
  ];
  return (
    <>
      <section className="hero home-hero">
        <div className="hero-copy reveal">
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
            I’m Sanskar, a full-stack developer building clear, reliable digital products with
            curiosity at the core.
          </p>
          <div className="actions">
            <Button onClick={() => go("projects")}>View my work ↗</Button>
            <Button secondary onClick={() => go("contact")}>
              Let’s talk ↗
            </Button>
          </div>
          <Eyebrow>FULL STACK / CLOUD / INTELLIGENT SYSTEMS</Eyebrow>
        </div>
        <div className="workspace-visual reveal">
          <div className="orbit-labels">
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Python</span>
          </div>
          <img src={`${assets}/9890c.png`} alt="Dimensional developer workspace" />
          <div className="visual-caption">
            <span>DESIGNING SYSTEMS THAT FEEL SIMPLE</span>
            <span>2026 / 01</span>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="01 / ABOUT PREVIEW">
          Curiosity is the starting point.
          <br />
          Craft is what comes next.
        </SectionTitle>
        <div className="about-preview reveal">
          <div>
            <img src={`${assets}/d85e4.png`} alt="Portrait of Sanskar Bandgar" />
            <Eyebrow>SANSKAR BANDGAR / SATARA, MAHARASHTRA</Eyebrow>
          </div>
          <div>
            <h3>
              A developer’s mindset.
              <br />
              An engineer’s foundation.
            </h3>
            <p>
              I’m a full-stack developer with a foundation in Information Technology and a drive to
              turn complex ideas into clean, usable products.
            </p>
            <p>
              My work moves from thoughtful interfaces to resilient APIs, always grounded in
              clarity, maintainability and practical value.
            </p>
            <Button secondary onClick={() => go("about")}>
              Explore about me ↗
            </Button>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="02 / TECHNOLOGY ECOSYSTEM"
          description="A practical toolkit chosen for the problem, not the trend."
        >
          A connected stack.
          <br />
          Not a collection of buzzwords.
        </SectionTitle>
        <div className="ecosystem reveal">
          <img src={`${assets}/ab923.png`} alt="" />
          <img className="core-cube" src={`${assets}/09732.png`} alt="Connected technology stack" />
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
          {skills.map((skill, index) => (
            <article className="simple-card reveal" key={skill}>
              <Eyebrow>{String(index + 1).padStart(2, "0")}</Eyebrow>
              <h3>{skill}</h3>
              <p>
                {["React", "Next.js", "JavaScript", "TypeScript"]
                  .slice(index % 4)
                  .concat(["REST APIs", "Git"])
                  .slice(0, 4)
                  .join(" / ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="03 / FEATURED PROJECTS"
          description="Selected builds across utilities, healthcare and intelligent systems."
        >
          Small details.
          <br />
          Meaningful applications.
        </SectionTitle>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
        <Button secondary onClick={() => go("projects")}>
          Explore all projects ↗
        </Button>
      </section>

      <section>
        <SectionTitle eyebrow="04 / SERVICES">
          From the first idea
          <br />
          to a working product.
        </SectionTitle>
        <div className="service-grid">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service[0]} service={service} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="05 / JOURNEY"
          description="A path shaped by fundamentals, practical work and constant exploration."
        >
          Learning deeply.
          <br />
          Building continuously.
        </SectionTitle>
        <Timeline />
      </section>

      <section>
        <SectionTitle
          eyebrow="06 / FIELD NOTES"
          description="Ideas on interfaces, human-centered AI and turning concepts into products."
        >
          Ideas worth exploring.
        </SectionTitle>
        <ArticleGrid />
      </section>
      <FinalCta />
    </>
  );
}

function About() {
  const skillCopy = [
    ["Frontend", "React / Next.js / TypeScript / responsive interfaces"],
    ["Backend & APIs", "Node.js / Express / REST APIs"],
    ["Databases", "MongoDB / MySQL / Prisma"],
    ["Languages", "JavaScript / TypeScript / Python"],
    ["UI engineering", "Accessible UI / responsive design / Tailwind CSS"],
    ["Cloud & deployment", "AWS / Docker fundamentals / CI/CD"],
    ["AI & automation", "Machine learning / Python exploration"],
    ["Developer tools", "Git / GitHub / Postman / Cursor"],
  ];
  return (
    <>
      <section className="hero about-hero">
        <div className="hero-copy reveal">
          <Eyebrow>ABOUT / HUMAN BUILDER</Eyebrow>
          <h1>
            An engineer
            <br />
            by education.
            <br />A builder
            <br />
            by instinct.
          </h1>
          <p>
            I’m Sanskar. I turn complex ideas into clear, reliable digital experiences — with
            curiosity at the core.
          </p>
          <Eyebrow>
            SATARA, MAHARASHTRA, INDIA
            <br />
            OPEN TO REMOTE & HYBRID OPPORTUNITIES
          </Eyebrow>
        </div>
        <div className="portrait reveal">
          <img src={`${assets}/d85e4.png`} alt="Sanskar Bandgar" />
          <Eyebrow>BUILDING / LEARNING / REFINING</Eyebrow>
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="01 / MY STORY">
          Solid foundations.
          <br />
          Real-world curiosity.
        </SectionTitle>
        <div className="two-col copy-columns reveal">
          <div>
            <h3>Engineering foundations & passion</h3>
            <p>
              I am an Information Technology engineering student at Savitribai Phule Pune University
              with an active interest in software systems, web experiences and intelligent products.
              My education gives me structure; building gives me perspective.
            </p>
          </div>
          <div>
            <h3>What I’m exploring now</h3>
            <p>
              My focus is modern web architecture, accessible frontend experiences, cloud
              engineering and developer productivity. I’m expanding into AI-driven applications,
              distributed services and secure cloud platforms.
            </p>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="02 / MY STACK">Comfortable across the stack.</SectionTitle>
        <div className="skill-grid">
          {skillCopy.map(([a, b], i) => (
            <article className="simple-card reveal" key={a}>
              <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="philosophy reveal">
        <Eyebrow>03 / PERSONAL PHILOSOPHY</Eyebrow>
        <h2>
          “I believe the best software is built at the intersection of solid computer science
          fundamentals, modular architecture, and genuine attention to user experience.”
        </h2>
        <p>— Sanskar Bandgar</p>
        <div className="three-col">
          <div>
            <h3>Clarity first</h3>
            <p>Accessible interfaces and understandable systems.</p>
          </div>
          <div>
            <h3>Build to evolve</h3>
            <p>Modular architecture and reliable foundations.</p>
          </div>
          <div>
            <h3>Own the details</h3>
            <p>From database design to the final responsive breakpoint.</p>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="04 / EDUCATION & EXPERIENCE">A journey in progress.</SectionTitle>
        <Timeline cards />
      </section>
      <FinalCta />
    </>
  );
}

function Timeline({ cards = false }: { cards?: boolean }) {
  const items = [
    [
      "2024 – 2026",
      "B.E. in Information Technology",
      "Savitribai Phule Pune University",
      "Computer science foundations, software engineering, databases, network protocols and web technologies.",
    ],
    [
      "AUG 2023 – MAY 2024",
      "Full Stack Intern",
      "CyberX Info Consultants",
      "Assisted with RESTful APIs, database query optimization, Tailwind CSS and Next.js interfaces.",
    ],
    [
      "JUN 2021 – AUG 2023",
      "Freelancer",
      "Client Base",
      "Contributed to React and Node.js applications, responsive UI components, Agile development and CI/CD workflows.",
    ],
  ];
  return (
    <div className={cards ? "timeline card-timeline" : "timeline"}>
      {items.map(([date, title, company, desc]) => (
        <article className="reveal" key={title}>
          <Eyebrow>{date}</Eyebrow>
          <h3>{title}</h3>
          <strong>{company}</strong>
          <p>{desc}</p>
        </article>
      ))}
    </div>
  );
}

function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All projects");
  const filters = ["All projects", "Web utilities", "Healthcare", "AI & automation"];
  const visible = projects.filter(
    (p) =>
      (filter === "All projects" || p.category === filter) &&
      `${p.title} ${p.tech}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <section className="page-hero reveal">
        <Eyebrow>PROJECTS / SELECTED BUILDS</Eyebrow>
        <h1>
          From “what if”
          <br />
          to out in the world.
        </h1>
        <p>
          Useful tools, healthcare experiences, and an exploration into intelligent automation. A
          closer look at what I build and how I think.
        </p>
      </section>
      <section className="filter-panel">
        <label className="search">
          <span>⌕</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name or technology"
          />
        </label>
        <div className="chips">
          {filters.map((x) => (
            <button className={filter === x ? "active" : ""} onClick={() => setFilter(x)} key={x}>
              {x} · {x === "All projects" ? 4 : projects.filter((p) => p.category === x).length}
            </button>
          ))}
        </div>
        <Eyebrow>TECHNOLOGIES &nbsp; All / Next.js / TypeScript / JavaScript / Python</Eyebrow>
      </section>
      <section>
        <Eyebrow>04 PROJECTS / PURPOSEFULLY BUILT</Eyebrow>
        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {visible.length === 0 && <p>No projects match that search.</p>}
        <div className="destinations">
          <h3>Project destinations</h3>
          <p>
            QRCodeForge — qrcodeforge.vercel.app / github.com/mrsanskar19/QRCodeForge
            <br />
            Smile N Care — smilencare.com
            <br />
            Aryan Dental Clinic — aryandentalclinic.com
            <br />
            NeuroDesk — github.com/cycberX/NeuroDesk
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function CaseStudy() {
  return (
    <>
      <section className="page-hero reveal">
        <Eyebrow>PROJECT / QRCODEFORGE</Eyebrow>
        <h1>
          Not just a code.
          <br />A brand touchpoint.
        </h1>
        <p>
          QRCodeForge — a customizable QR utility with logo embedding, expressive eye frames, and
          high-resolution exports.
        </p>
        <Eyebrow>NEXT.JS / TYPESCRIPT / CANVAS API</Eyebrow>
      </section>
      <div className="wide-image reveal">
        <img src={`${assets}/a4b10.png`} alt="QRCodeForge website" />
      </div>
      <section>
        <SectionTitle eyebrow="01 / PROBLEM & GOAL">Make utility feel personal.</SectionTitle>
        <div className="two-col copy-columns">
          <div>
            <h3>The problem space</h3>
            <p>
              A QR code can be functional and still feel disconnected from a brand. The product
              needed a focused customization experience without turning into a complex design tool.
            </p>
          </div>
          <div>
            <h3>Project goals</h3>
            <p>
              Create useful QR variations with embedded logos, custom eye frames and export-ready
              resolution. Keep interaction predictable and the interface approachable.
            </p>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="02 / PRODUCT FLOW">Create. Customize. Export.</SectionTitle>
        <div className="three-col numbered">
          {[
            ["01", "Create your code", "Start with the destination content you want to share."],
            ["02", "Make it your own", "Apply a logo and custom visual treatments."],
            ["03", "Export cleanly", "Download a high-resolution asset ready to use."],
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
        <SectionTitle eyebrow="03 / TECHNICAL FOUNDATION">A focused, practical stack.</SectionTitle>
        <div className="chips">
          <span>Next.js application framework</span>
          <span>TypeScript typed logic</span>
          <span>Tailwind CSS interface styling</span>
          <span>HTML5 Canvas API</span>
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="04 / ORIGINAL PRODUCT">The original application.</SectionTitle>
        <div className="wide-image">
          <img src={`${assets}/a4b10.png`} alt="Original QRCodeForge application screenshot" />
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="05 / WORKING TOOL">
          A working tool.
          <br />
          No inflated numbers.
        </SectionTitle>
        <p className="lead">
          The working product is live. Its focus is a real utility: supporting logos, image ratios,
          corner styles and customizable colors without inventing vanity metrics.
        </p>
      </section>
      <section>
        <SectionTitle eyebrow="06 / MORE WORK">Different problems. Same care.</SectionTitle>
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

function Services() {
  const process = [
    ["01", "Discovery", "Align on the problem, people, priorities and constraints."],
    ["02", "Planning", "Define scope, information architecture and technical direction."],
    ["03", "Design", "Shape the experience through flows and clear interface states."],
    ["04", "Development", "Build reusable interfaces and dependable application logic."],
    ["05", "Testing", "Improve responsiveness, accessibility and cross-device behavior."],
    ["06", "Deployment", "Prepare release, deployment and a practical handoff."],
  ];
  return (
    <>
      <section className="hero service-hero">
        <div className="hero-copy reveal">
          <Eyebrow>SERVICES / FROM IDEA TO PRODUCT</Eyebrow>
          <h1>
            Built for your
            <br />
            next big thing.
          </h1>
          <p>
            From a clear first impression to the systems behind it. Thoughtful full-stack
            development for the way you want to work.
          </p>
        </div>
        <img src={`${assets}/09732.png`} alt="Connected full-stack product" />
      </section>
      <section>
        <SectionTitle eyebrow="01 / WHAT I BUILD">
          The right foundation.
          <br />
          The room to grow.
        </SectionTitle>
        <div className="service-grid">
          {services.map((x) => (
            <ServiceCard service={x} key={x[0]} />
          ))}
        </div>
        <p className="lead">
          No mystery: choose one scoped project or combine services around what your product
          actually needs.
        </p>
      </section>
      <section>
        <SectionTitle eyebrow="02 / DELIVERY MODEL">No mystery. Just momentum.</SectionTitle>
        <div className="three-col process-grid">
          {process.map((x) => (
            <article className="tint-card reveal" key={x[0]}>
              <Eyebrow>{x[0]}</Eyebrow>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="03 / RECENT WORK">See the thinking in practice.</SectionTitle>
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

function Experience() {
  return (
    <>
      <section className="page-hero reveal">
        <Eyebrow>EXPERIENCE / A CONTINUOUS LEARNING CURVE</Eyebrow>
        <h1>
          Every chapter,
          <br />a better builder.
        </h1>
        <p>
          From freelance applications to engineering foundations: the work, people and ideas shaping
          my practice.
        </p>
      </section>
      <section>
        <SectionTitle eyebrow="01 / CAREER TIMELINE">Learning through the work.</SectionTitle>
        <Timeline cards />
      </section>
      <section>
        <SectionTitle eyebrow="02 / WHAT COMES NEXT">
          Cloud-minded.
          <br />
          Full-stack focused.
        </SectionTitle>
        <p className="lead">
          I’m interested in Cloud Engineering, Full Stack Web Development and DevOps. I want to help
          build resilient infrastructure, robust APIs and intuitive web applications, while learning
          from experienced mentors.
        </p>
        <div className="two-col">
          <article className="simple-card">
            <Eyebrow>CREDENTIAL</Eyebrow>
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>
              Listed in the existing portfolio. Credential details available through the résumé.
            </p>
          </article>
          <article className="simple-card">
            <Eyebrow>CREDENTIAL</Eyebrow>
            <h3>CompTIA Security+</h3>
            <p>
              Listed in the existing portfolio. Credential details available through the résumé.
            </p>
          </article>
        </div>
        <a
          className="text-link"
          href="https://mrsanskar.vercel.app/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Résumé / mrsanskar.vercel.app/resume.pdf ↗
        </a>
      </section>
      <FinalCta />
    </>
  );
}

const articles = [
  [
    "{ design } → interfaces",
    "Building thoughtful interfaces with Next.js",
    "Design / Web development",
  ],
  ["human × AI", "Exploring intelligent desktop workflows", "AI / systems"],
  ["idea → build", "From a useful idea to a maintainable product", "Building / product"],
];

function ArticleGrid() {
  return (
    <div className="article-grid">
      {articles.map(([cover, title, meta], i) => (
        <article
          className="article-card reveal"
          key={title}
          onClick={() => i === 0 && go("article")}
          tabIndex={0}
        >
          <div>
            <Eyebrow>0{i + 1} / FIELD NOTE</Eyebrow>
            <strong>{cover}</strong>
          </div>
          <Eyebrow>{meta}</Eyebrow>
          <h3>{title}</h3>
          <p>Practical notes from the building process.</p>
          <a>Preview article layout ↗</a>
        </article>
      ))}
    </div>
  );
}

function Blog() {
  return (
    <>
      <section className="page-hero reveal">
        <Eyebrow>FIELD NOTES / WRITING & EXPLORATION</Eyebrow>
        <h1>
          Thoughts from
          <br />
          the building process.
        </h1>
        <p>
          A future home for practical notes on the web, intelligent systems and the things learned
          along the way.
        </p>
        <a
          className="text-link"
          href="https://mrsanskar.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          COMING SOON / ON THE EXISTING SITE ↗
        </a>
      </section>
      <section className="filter-panel">
        <label className="search">
          <span>⌕</span>
          <input placeholder="Search future articles" />
        </label>
        <div className="chips">
          {[
            "All topics",
            "Web development",
            "Artificial intelligence",
            "SaaS development",
            "Programming",
            "Technology",
            "Tutorials",
          ].map((x, i) => (
            <button className={i === 0 ? "active" : ""} key={x}>
              {x}
            </button>
          ))}
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="01 / FEATURED ARTICLE DRAFT">
          A space for deeper thinking.
        </SectionTitle>
        <div className="featured-article">
          <div className="editorial-cover">
            <Eyebrow>FIELD NOTES / 001</Eyebrow>
            <strong>
              {"{ ideas }"}
              <br />→ interfaces
            </strong>
            <Eyebrow>SHAPE / REFINE / SHIP THOUGHTFULLY</Eyebrow>
          </div>
          <div>
            <Eyebrow>WEB DEVELOPMENT / INTERFACE SYSTEMS</Eyebrow>
            <h2>
              Building thoughtful
              <br />
              interfaces with Next.js
            </h2>
            <p>
              An editorial layout preview for future writing on accessible interfaces, reusable
              components and maintainable web experiences.
            </p>
            <Button secondary onClick={() => go("article")}>
              Preview article layout ↗
            </Button>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle
          eyebrow="02 / IN THE EDITORIAL LAB"
          description="These are proposed editorial topics, not published articles."
        >
          Topics to explore.
        </SectionTitle>
        <ArticleGrid />
      </section>
      <section className="two-col empty-states">
        <div>
          <h3>Recent posts</h3>
          <p>No posts published yet. The newest writing will appear here.</p>
        </div>
        <div>
          <h3>Popular articles</h3>
          <p>Recommendations will appear once there is published work.</p>
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="03 / KEEP THE CONVERSATION GOING">
          Have a topic in mind?
        </SectionTitle>
        <p className="lead">Send a question or share an idea for a future article.</p>
        <a className="text-link" href="mailto:bandgarsanskar19@gmail.com">
          bandgarsanskar19@gmail.com ↗
        </a>
      </section>
      <FinalCta />
    </>
  );
}

function Article() {
  return (
    <>
      <section className="page-hero article-hero reveal">
        <Eyebrow>FIELD NOTE / 001 / EDITORIAL PREVIEW</Eyebrow>
        <h1>
          Building thoughtful
          <br />
          interfaces with Next.js
        </h1>
        <p>
          Clarity, accessibility and maintainable components — a starting point for a considered
          interface.
        </p>
        <div className="author">
          <img src={`${assets}/d85e4.png`} alt="Sanskar Bandgar" />
          <div>
            <strong>Sanskar Bandgar / Proposed author</strong>
            <small>Unpublished concept / Publication status and date: To be set</small>
          </div>
        </div>
      </section>
      <section className="article-cover">
        <Eyebrow>FIELD NOTE / 001</Eyebrow>
        <h2>
          Good interfaces
          <br />
          start with good questions.
        </h2>
        <Eyebrow>STRUCTURE / ACCESSIBILITY / REUSABILITY</Eyebrow>
      </section>
      <section className="reading-layout">
        <aside>
          <Eyebrow>IN THIS ARTICLE</Eyebrow>
          <p>
            01 / Start with the task
            <br />
            02 / Build reusable foundations
            <br />
            03 / Make access the default
            <br />
            04 / Refine across devices
          </p>
          <Eyebrow>
            SHARE / Copy link ↗<br />
            LinkedIn ↗ / Email ↗
          </Eyebrow>
        </aside>
        <article>
          <p className="text-link">
            Sample editorial content for layout review. This is not an article and has not been
            published.
          </p>
          <h2>Start with the task</h2>
          <p>
            Before choosing an animation or a framework, identify the one thing a visitor needs to
            do. Good hierarchy gives that task a clear place on the page. Navigation should explain
            where someone is, and calls to action should describe what happens next.
          </p>
          <h2>Build reusable foundations</h2>
          <p>
            A small system of spacing, type and color decisions can make a complex interface easier
            to understand and maintain. Reusable components are most useful when their states are
            explicit: default, focus, error, loading and success.
          </p>
          <pre>
            {
              '// A meaningful action starts with its label\n<button type="submit">\n  Send message\n</button>'
            }
          </pre>
          <h2>Make access the default</h2>
          <p>
            Use semantic elements, visible focus indicators and descriptive labels. Pair inline
            validation with a clear explanation of how to recover. Respect reduced-motion
            preferences and avoid making essential information dependent on a hover interaction.
          </p>
          <h2>Refine across devices</h2>
          <p>
            A responsive layout is more than a smaller desktop. Reorder information around the
            visitor context, make controls comfortable to touch, and reduce visual complexity where
            it competes with reading.
          </p>
          <blockquote>“The details should support the task, not compete with it.”</blockquote>
          <p>
            In practice: Start with one complete journey. Build it clearly, test it with care, and
            let the visual details reinforce the experience.
          </p>
        </article>
      </section>
      <section>
        <SectionTitle eyebrow="RELATED / MORE NOTES">Keep the curiosity going.</SectionTitle>
        <ArticleGrid />
      </section>
      <FinalCta />
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <>
      <section className="hero contact-hero">
        <div className="hero-copy reveal">
          <Eyebrow>CONTACT / LET’S MAKE IT HAPPEN</Eyebrow>
          <h1>
            Let’s Create
            <br />
            Something
            <br />
            Great Together.
          </h1>
          <p>
            A new website, a software idea, an open-source collaboration — I’m ready to hear what
            you’re thinking.
          </p>
          <Eyebrow>● OPEN FOR COLLABORATION</Eyebrow>
        </div>
        <img src={`${assets}/f4d50.png`} alt="Connected blue globe with message" />
      </section>
      <section className="contact-layout">
        <form onSubmit={submit}>
          <h2>Tell me about your project.</h2>
          <p>A little context helps me understand what you have in mind.</p>
          <label>
            Full name *<input required placeholder="Your name" />
          </label>
          <label>
            Email address *<input required type="email" placeholder="you@company.com" />
          </label>
          <label>
            Subject *<input required placeholder="What would you like to build?" />
          </label>
          <label>
            Project budget / optional
            <input placeholder="Select a range" />
          </label>
          <label>
            Project description *<textarea required placeholder="Your goals, scope and ideas…" />
          </label>
          <Button>{sent ? "Message noted — thank you" : "Send message ↗"}</Button>
          <small>
            This preview validates your message locally. For direct contact, email me using the
            address alongside.
          </small>
        </form>
        <div className="contact-details">
          <Eyebrow>PREFER A DIRECT HELLO?</Eyebrow>
          <h2>Let’s connect.</h2>
          <a href="mailto:bandgarsanskar19@gmail.com">bandgarsanskar19@gmail.com</a>
          <p>
            Satara, Maharashtra, India
            <br />
            Open to remote and hybrid opportunities.
          </p>
          <Eyebrow>ELSEWHERE ON THE INTERNET</Eyebrow>
          <h3>
            <a href="https://github.com/mrsanskar19" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </h3>
          <small>github.com/mrsanskar19</small>
          <h3>LinkedIn ↗</h3>
          <h3>Instagram ↗</h3>
          <p>
            Interested in a role or collaboration?
            <br />
            Résumé: mrsanskar.vercel.app/resume.pdf
          </p>
        </div>
      </section>
      <section>
        <SectionTitle eyebrow="WORKING TOGETHER / A SIMPLE START">
          First, a good conversation.
        </SectionTitle>
        <div className="three-col">
          {[
            ["01", "Share your idea", "Tell me what you’re building and what matters most."],
            [
              "02",
              "Align on the approach",
              "Discuss the scope, priorities and a practical next step.",
            ],
            [
              "03",
              "Build with intention",
              "Turn the agreed direction into a considered digital experience.",
            ],
          ].map((x) => (
            <article className="tint-card" key={x[0]}>
              <Eyebrow>{x[0]}</Eyebrow>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="hello-cta">
        <h2>Good work starts with a hello.</h2>
        <a href="mailto:bandgarsanskar19@gmail.com">bandgarsanskar19@gmail.com ↗</a>
      </section>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>(() => (window.location.hash.slice(1) as Page) || "home");
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem("portfolio-theme") as Theme) || "light",
  );
  useEffect(() => {
    const sync = () => setPage((window.location.hash.slice(1) as Page) || "home");
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);
  const content: any = useMemo(
    (): any =>
      ({
        home: <Home />,
        about: <About />,
        projects: <Projects />,
        project: <CaseStudy />,
        services: <Services />,
        experience: <Experience />,
        blog: <Blog />,
        article: <Article />,
        contact: <Contact />,
      })[page] || <Home />,
    [page],
  );
  return (
    <div className="site">
      <Header page={page} theme={theme} setTheme={setThemeState} />
      <main>{content}</main>
      <Footer />
    </div>
  );
}
