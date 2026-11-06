import { go } from "@/lib/navigation";
import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";

export function FinalCta() {
  return (
    <section className="final-cta">
      <Eyebrow>LET’S WORK TOGETHER</Eyebrow>
      <h2>
        Have an idea?
        <br />
        Let’s build something
        <br />
        exceptional.
      </h2>
      <p>A website, a full-stack product, or intelligent software tools.</p>
      <div className="actions">
        <Button onClick={() => go("contact")}>Contact me ↗</Button>
        <a href="mailto:bandgarsanskar19@gmail.com">Email me ↗</a>
      </div>
    </section>
  );
}
