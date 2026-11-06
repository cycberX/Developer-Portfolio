"use client";

import { FormEvent, useState } from "react";
import { assets } from "@/data/portfolio";
import { Button } from "@/components/common/Button";
import { Eyebrow } from "@/components/common/Eyebrow";

export function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="hero contact-hero">
        <div className="hero-copy">
          <Eyebrow>CONTACT / INQUIRIES</Eyebrow>
          <h1>
            Let’s build
            <br />
            something great.
          </h1>
          <p>
            Whether you have an upcoming project, a freelance opportunity, or just want to connect,
            I’d love to hear from you.
          </p>
          <Eyebrow>● OPEN FOR NEW OPPORTUNITIES</Eyebrow>
        </div>
        <img src={`${assets}/f4d50.png`} alt="Contact visual" />
      </section>

      <section className="contact-layout">
        <form onSubmit={submit}>
          <h2>Send a message</h2>
          <p>Share a brief overview of your goals and project timeline.</p>
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
            <input placeholder="e.g. $1k - $5k / Negotiable" />
          </label>
          <label>
            Project description *<textarea required placeholder="Briefly describe the scope, requirements, or timeline..." />
          </label>
          <Button type="submit">{sent ? "Message sent — thank you! ✓" : "Send message ↗"}</Button>
        </form>

        <div className="contact-details">
          <Eyebrow>DIRECT CONTACT</Eyebrow>
          <h2>Let’s connect.</h2>
          <a href="mailto:bandgarsanskar19@gmail.com" className="contact-email">
            bandgarsanskar19@gmail.com ↗
          </a>
          <p style={{ marginTop: "12px" }}>
            Satara, Maharashtra, India
            <br />
            Available for remote and on-site opportunities worldwide.
          </p>

          <div style={{ marginTop: "32px" }}>
            <Eyebrow>SOCIAL & PROFILES</Eyebrow>
            <div className="social-links-list" style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <h3>
                  <a
                    href="https://github.com/mrsanskar19/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </h3>
                <small>github.com/mrsanskar19</small>
              </div>
              <div>
                <h3>
                  <a
                    href="https://www.linkedin.com/in/sanskar-bandgar-719bb336a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </h3>
                <small>linkedin.com/in/sanskar-bandgar</small>
              </div>
              <div>
                <h3>
                  <a
                    href="https://www.instagram.com/officialsanskarbandgar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram ↗
                  </a>
                </h3>
                <small>@officialsanskarbandgar</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hello-cta" style={{ margin: "40px 0 60px" }}>
        <h2>Start a conversation.</h2>
        <a href="mailto:bandgarsanskar19@gmail.com">bandgarsanskar19@gmail.com ↗</a>
      </section>
    </>
  );
}
