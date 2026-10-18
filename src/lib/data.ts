import {
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Globe,
  Server,
  Database,
  Cloud,
  Wrench,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';

export interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  problem: string;
  objectives: string[];
  features: string[];
  implementation: string;
  challenges: string;
}

export const portfolioData = {
  student: {
    name: "Sanskar Bandgar",
    handle: "mrsanskar",
    email: "bandgarsanskar19@gmail.com",
    location: "Satara, Maharashtra, India",
    title: "Full Stack Developer & IT Engineering Student",
    bio: "Passionate about building scalable web applications, robust cloud infrastructure, and modern developer tooling. Combining strong computer science fundamentals with hands-on full-stack engineering.",
    socials: [
      { name: "GitHub", url: "https://github.com/mrsanskar19/", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sanskar-bandgar-719bb336a/", icon: Linkedin },
    ],
    aboutMe: {
      introduction: "I am an Information Technology engineering student at Savitribai Phule Pune University (SPPU) and a full-stack developer based in Satara, Maharashtra, India. I am driven by the craft of building efficient, reliable software that solves real-world challenges.",
      technicalInterests: "My core interests encompass modern web architectures, scalable backend services, cloud engineering, and developer productivity tools. I enjoy working across the entire development lifecycle—from conceptualizing system architecture and database design to crafting accessible, responsive user interfaces.",
      currentFocus: "Currently, I am expanding my skills in cloud-native deployments, distributed serverless systems, and event-driven patterns, while continuing to collaborate on open-source initiatives and community tech projects.",
      highlights: [
        { label: "Degree Program", value: "B.E. in Information Technology" },
        { label: "Institution", value: "SPPU University" },
        { label: "Current Location", value: "Satara, Maharashtra, India" },
        { label: "Primary Focus", value: "Full Stack & Cloud Architecture" },
      ],
    },
    stats: [
      { label: "Production Projects", value: "3+", description: "Live deployed applications" },
      { label: "Core Technologies", value: "15+", description: "Frontend, backend & cloud" },
      { label: "Industry Experience", value: "1+ yr", description: "Internship & client work" },
      { label: "Academic Standing", value: "SPPU", description: "Information Technology" },
    ],
  },

  skillsCategories: [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: Globe,
      description: "Building responsive, accessible, and high-performance user interfaces.",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Redux Toolkit", level: "Proficient" },
        { name: "HTML5 & Semantic Web", level: "Advanced" },
        { name: "Vite.js", level: "Proficient" },
      ],
    },
    {
      id: "backend",
      name: "Backend & APIs",
      icon: Server,
      description: "Developing secure RESTful endpoints, event-driven streaming, and business logic.",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "RESTful API Design", level: "Advanced" },
        { name: "Server-Sent Events (SSE)", level: "Proficient" },
        { name: "Stripe Connect Payments", level: "Proficient" },
        { name: "Authentication (JWT & OAuth)", level: "Proficient" },
      ],
    },
    {
      id: "databases",
      name: "Databases & Storage",
      icon: Database,
      description: "Designing structured schemas, data modeling, and query optimization.",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "Mongoose ODM", level: "Advanced" },
        { name: "SQL Fundamentals", level: "Intermediate" },
        { name: "Data Modeling", level: "Proficient" },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: Cloud,
      description: "Deploying and managing scalable, resilient cloud applications.",
      skills: [
        { name: "AWS (Certified Cloud Practitioner)", level: "Proficient" },
        { name: "Docker Fundamentals", level: "Intermediate" },
        { name: "CI/CD Pipelines", level: "Intermediate" },
        { name: "Vercel & Cloud Deployment", level: "Advanced" },
        { name: "Linux / Bash", level: "Proficient" },
        { name: "Git & GitHub", level: "Advanced" },
      ],
    },
    {
      id: "tools",
      name: "Tools & Utilities",
      icon: Wrench,
      description: "Leveraging specialized APIs and tooling to accelerate development.",
      skills: [
        { name: "HTML5 Canvas API", level: "Proficient" },
        { name: "Postman API Testing", level: "Proficient" },
        { name: "npm / pnpm Workspaces", level: "Advanced" },
        { name: "Responsive UI Testing", level: "Advanced" },
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Stylish QR Code Generator",
      subtitle: "QRCodeForge - Branded & Dynamic QR Engine",
      description: "A highly customizable QR code generator allowing users to create branded codes with logo embedding, custom eye-frame designs, and high-resolution export.",
      category: "Web Utilities",
      imageUrl: "project-1",
      tags: ["Next.js", "Tailwind CSS", "Canvas API", "TypeScript"],
      liveUrl: "https://qrcodeforge.vercel.app/",
      repoUrl: "https://github.com/mrsanskar19/QRCodeForge.git",
      problem: "Standard QR code generators are often rigid, overloaded with intrusive advertisements, or lack the granular visual styling required for modern brand identity materials.",
      objectives: [
        "Create a pure client-side QR generation engine with zero latency.",
        "Provide real-time canvas preview of colors, custom eyes, and embedded logos.",
        "Ensure scannability compliance across standard mobile camera readers.",
        "Support instant lossless export in SVG and high-DPI PNG formats.",
      ],
      features: [
        "Custom eye-frame and marker shape customization",
        "Logo embedding with automated error correction level calculation",
        "Lossless SVG vector and high-resolution PNG downloads",
        "Client-side canvas rendering with zero server round-trips",
        "Preset color palettes and quick-apply branded templates",
      ],
      implementation: "Built using Next.js and the HTML5 Canvas API. Employs dynamic Error Correction Code (ECC) level scaling to preserve barcode readability even when an embedded center logo covers up to 30% of the surface area. High-DPI canvas scaling eliminates raster blur on modern Retina displays.",
      challenges: "Balancing visual design freedom with strict barcode scanning tolerances. Addressed this by implementing real-time contrast boundary checks and enforcing mandatory quiet-zone margins around the matrix.",
    },
    {
      id: "proj-2",
      title: "Silme N Care Superspeciality Dental Clinic",
      subtitle: "Dental Clinic Website",
      description: "A website project for a superspeciality dental clinic, designed to present clinic information, dental services, and contact details.",
      category: "Healthcare / Web Development",
      imageUrl: "project-2",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://smilencare.com",
      repoUrl: "",
      problem: "Dental clinics require an accessible, reliable digital presence to present their specialized treatments, clinic background, and operating details to prospective patients.",
      objectives: [
        "Present clinic specializations and treatment offerings clearly.",
        "Provide easy access to clinic location, hours, and contact channels.",
        "Ensure fast load times and clean responsiveness across mobile and desktop devices.",
      ],
      features: [
        "Comprehensive overview of dental care services and specializations",
        "Clinic operating hours and direct contact details",
        "Responsive layout adapted for mobile, tablet, and desktop viewing",
        "Clear clinic presentation and treatment information guidance",
      ],
      implementation: "Structured using semantic HTML5, modern CSS styling, and responsive design patterns to ensure cross-device accessibility and swift page rendering.",
      challenges: "Organizing clinical treatment information clearly while ensuring lightweight page delivery for patients browsing on mobile networks.",
    },
    {
      id: "proj-3",
      title: "Aryan Dental Clinic",
      subtitle: "Dental Clinic Website",
      category: "Healthcare / Web Development",
      description: "A web development project for a dental clinic, presenting relevant clinic information and services through a professional website.",
      imageUrl: "project-3",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://aryandentalclinic.com",
      repoUrl: "",
      problem: "Local healthcare practices need an accessible and informative online presence to showcase services and practice details to community patients.",
      objectives: [
        "Create a clean digital presence for the dental clinic.",
        "Display clinic services, practice information, and contact channels.",
        "Deliver smooth, accessible navigation for patient visitors.",
      ],
      features: [
        "Overview of dental treatments and general dental healthcare services",
        "Practice contact channels, location details, and timings",
        "Clean, responsive layout with cross-device compatibility",
        "Fast-loading web pages optimized for mobile devices",
      ],
      implementation: "Developed with semantic web standards, structured styling, and mobile-friendly design principles to ensure reliable browsing across diverse screens.",
      challenges: "Creating a clean, readable layout for medical service descriptions with optimal typography and responsive spacing.",
    },
    {
      id: "proj-4",
      title: "NeuroDesk",
      subtitle: "AI Agent for PC Control and Desktop Automation",
      description: "NeuroDesk is an AI agent project focused on controlling a computer and assisting with desktop tasks through intelligent automation.",
      category: "Artificial Intelligence / Desktop Automation",
      imageUrl: "project-1",
      tags: ["Python", "Machine Learning", "Desktop Automation", "NLP"],
      liveUrl: "",
      repoUrl: "https://github.com/cycberX/NeuroDesk",
      problem: "Repetitive desktop workflows and manual computer tasks often require excessive user steps that can be streamlined through intelligent intent-based assistance.",
      objectives: [
        "Develop an intent prediction pipeline to interpret desktop automation commands.",
        "Create modular execution handlers for system and file interactions.",
        "Implement safe execution boundaries for automated computer tasks.",
      ],
      features: [
        "Intent prediction and task parsing engine",
        "Modular system and file automation execution routines",
        "Interactive command input widget and confirmation safeguards",
        "Extensible function registry for desktop utilities",
      ],
      implementation: "Built in Python utilizing specialized modules for intent prediction, dataset training, function registries, and security confirmation boundaries to safely execute desktop actions.",
      challenges: "Ensuring command execution safety and preventing unintended system modifications while maintaining responsive intent parsing.",
    },
  ],

  capabilities: [
    {
      title: "Modern Web Applications",
      icon: Globe,
      description: "Architecting responsive, high-performance web applications using Next.js, React, and TypeScript. Focused on clean user interfaces, optimal Core Web Vitals, and smooth navigation.",
    },
    {
      title: "Business Software & Operational Tools",
      icon: Layers,
      description: "Designing end-to-end operational software such as multi-vendor storefronts, order tracking systems, and administrative control panels that solve real workflow bottlenecks.",
    },
    {
      title: "API Integrations & Backend Services",
      icon: Server,
      description: "Developing robust RESTful APIs, asynchronous event streams (SSE), database models with MongoDB, and integrating third-party platforms like Stripe Connect.",
    },
    {
      title: "Developer Utilities & Canvas Engines",
      icon: Wrench,
      description: "Creating client-side browser utilities, custom canvas-based image and code generators, and automation scripts that deliver instant feedback without server latency.",
    },
    {
      title: "Cloud & Deployment Architecture",
      icon: Cloud,
      description: "Applying cloud infrastructure fundamentals with AWS and containerized environments. Deploying applications with automated CI/CD workflows and reliable monitoring.",
    },
    {
      title: "Clean Architecture & Scalability",
      icon: Zap,
      description: "Structuring maintainable codebases with reusable component systems, type safety, modular services, and comprehensive error handling.",
    },
  ],

  collaborationTypes: [
    "Software Development Projects",
    "Open-Source Collaboration",
    "Web Application Development",
    "AI/ML Applications",
    "Automation & Productivity Tools",
    "College Projects & Technical Learning",
    "Hackathons & Ideathons",
    "Startup Ideas & Innovative Software",
    "Technical Discussions & Knowledge Sharing",
    "Freelance or Client Project Enquiries",
  ],

  timelineOptions: [
    "Immediate (< 2 weeks)",
    "1 - 2 months",
    "3+ months",
    "Flexible / Exploring",
  ],

  experience: [
    {
      id: "exp-1",
      role: "Freelancer",
      company: "Client Base",
      period: "Jun 2022 - Aug 2023",
      description: "Contributed to client-facing web applications using React and Node.js. Collaborated on feature development, responsive UI components, and gained practical experience with Agile methodologies and CI/CD deployment workflows.",
      icon: Briefcase,
    },
    {
      id: "exp-2",
      role: "Full Stack Intern",
      company: "Cybexonics IT Consultants",
      period: "Aug 2023 - May 2024",
      description: "Assisted senior software engineers in designing RESTful APIs and optimizing database queries. Collaborated on modern frontend UI components using Tailwind CSS and Next.js, ensuring cross-browser responsiveness and performance.",
      icon: Briefcase,
    },
    {
      id: "exp-3",
      role: "B.E. in Information Technology",
      company: "Savitribai Phule Pune University (SPPU)",
      period: "2024 - 2028",
      description: "Focused on core computer science foundations, software engineering, database management systems, network protocols, and web technologies. Maintained strong academic standing.",
      icon: GraduationCap,
    },
  ],

  certificates: [
    {
      id: "cert-1",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Mar 2023",
      imageUrl: "certificate-1",
    },
    {
      id: "cert-2",
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Jan 2023",
      imageUrl: "certificate-2",
    },
    {
      id: "cert-3",
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "Nov 2022",
      imageUrl: "certificate-3",
    },
    {
      id: "cert-4",
      title: "Hackathon Winner - 1st Place",
      issuer: "Hack The Future 2022",
      date: "Oct 2022",
      imageUrl: "certificate-4",
    },
  ],

  articles: [
    {
      id: "article-1",
      title: "The Rise of Serverless Computing",
      description: "An in-depth look at serverless architectures, their benefits, and how they are changing the landscape of cloud computing.",
      imageUrl: "article-1",
      tags: ["Cloud", "Serverless", "Architecture"],
      readUrl: "#",
      date: "Oct 15, 2023",
    },
    {
      id: "article-2",
      title: "A Guide to Modern Authentication",
      description: "Exploring different authentication methods like OAuth 2.0, OpenID Connect, and JWTs in modern web applications.",
      imageUrl: "article-2",
      tags: ["Security", "Authentication", "WebDev"],
      readUrl: "#",
      date: "Sep 28, 2023",
    },
    {
      id: "article-3",
      title: "Mastering State Management in React",
      description: "A comparative analysis of state management libraries in React, including Redux, Zustand, and Context API.",
      imageUrl: "article-3",
      tags: ["React", "State Management", "Frontend"],
      readUrl: "#",
      date: "Aug 12, 2023",
    },
  ],

  careerInterests: {
    title: "My Career Aspirations",
    description: "I am deeply interested in roles related to Cloud Engineering, Full Stack Web Development, and DevOps. I'm eager to work on building and maintaining resilient, scalable infrastructure, creating efficient, robust APIs, and developing intuitive web applications. I look forward to contributing to meaningful projects, learning from experienced mentors, and growing as a software engineer.",
  },
};
