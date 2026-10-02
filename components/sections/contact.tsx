"use client";

import { useState, FormEvent } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<SubmitState>("idle");
  const { contact } = portfolioData.identity;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  // Mengambil username dari URL untuk ditampilkan di UI
  const githubUsername = contact.github.split('/').pop() || "GitHub";
  const linkedinUsername = contact.linkedin.split('/').pop() || "LinkedIn";

  return (
    <section id="contact" className="section-py scroll-mt-16 bg-base-surface/40">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="POST /api/contact"
          title="Let's Connect"
          description="Terbuka untuk diskusi mengenai Web Development, eksplorasi AI/ML, atau peluang kolaborasi. Hubungi saya melalui form di bawah atau kirim email secara langsung."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 rounded-md border border-base-border bg-base-surface p-4 transition-colors hover:border-amber/40"
            >
              <Mail size={18} className="text-amber" />
              <div>
                <p className="font-mono text-[11px] text-ink-faint">Email</p>
                <p className="text-sm text-ink">{contact.email}</p>
              </div>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-md border border-base-border bg-base-surface p-4 transition-colors hover:border-amber/40"
            >
              <Github size={18} className="text-amber" />
              <div>
                <p className="font-mono text-[11px] text-ink-faint">GitHub</p>
                <p className="text-sm text-ink">{githubUsername}</p>
              </div>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-md border border-base-border bg-base-surface p-4 transition-colors hover:border-amber/40"
            >
              <Linkedin size={18} className="text-amber" />
              <div>
                <p className="font-mono text-[11px] text-ink-faint">LinkedIn</p>
                <p className="text-sm text-ink">{linkedinUsername}</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-base-border bg-base-surface p-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[11px] text-ink-faint"
                  >
                    name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-base-border bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-amber"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[11px] text-ink-faint"
                  >
                    email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-base-border bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-amber"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[11px] text-ink-faint"
                  >
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-md border border-base-border bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-amber"
                    placeholder="Apa yang ingin Anda diskusikan?"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Button type="submit" disabled={state === "loading"}>
                  {state === "loading" ? "Sending..." : "Send message"}
                  <Send size={15} />
                </Button>
                {state === "success" && (
                  <span className="font-mono text-xs text-teal">
                    200 OK — message sent
                  </span>
                )}
                {state === "error" && (
                  <span className="font-mono text-xs text-amber">
                    500 — error, please email directly
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}