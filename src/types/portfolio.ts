export type Page =
  | "home"
  | "about"
  | "projects"
  | "project"
  | "services"
  | "experience"
  | "contact";

export interface NavItem {
  id: Page;
  label: string;
}

export interface Project {
  title: string;
  category: string;
  image?: string;
  description: string;
  tech: string;
  demo?: string;
  source?: string;
}
