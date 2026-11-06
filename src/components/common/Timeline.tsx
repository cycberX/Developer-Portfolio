import { Eyebrow } from "./Eyebrow";

export function Timeline({ cards = false }: { cards?: boolean }) {
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
