import { NavItem, Project } from "@/types/portfolio";

export const assets = "/assets";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const projects: Project[] = [
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

export const services = [
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
