"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/data/portfolio";
import { attachCardHover } from "@/lib/animations";
import { Eyebrow } from "./Eyebrow";

export function ServiceCard({ service }: { service: string[] }) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return attachCardHover(cardRef.current);
  }, []);

  return (
    <article ref={cardRef} className="service-card">
      <img src={`${assets}/${service[3]}`} alt="" />
      <Eyebrow>{service[0]} / SERVICE</Eyebrow>
      <h3>{service[1]}</h3>
      <p>{service[2]}</p>
    </article>
  );
}
