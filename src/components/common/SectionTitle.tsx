import { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export function SectionTitle({
  eyebrow,
  children,
  description,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
