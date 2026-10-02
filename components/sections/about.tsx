import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { portfolioData } from "@/data/portfolio";
import { Terminal, GraduationCap, Compass } from "lucide-react";

const facts = [
  {
    icon: GraduationCap,
    label: "Background",
    value: portfolioData.identity.role,
  },
  {
    icon: Terminal,
    label: "Focus",
    value: "Web Development & Cybersecurity",
  },
  {
    icon: Compass,
    label: "Exploring",
    value: "AI & Machine Learning",
  },
];

export function About() {
  return (
    <section id="about" className="section-py scroll-mt-16">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="cat about.md" title="About" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="text-balance text-lg leading-relaxed text-ink-muted md:text-xl">
              {portfolioData.identity.about}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 rounded-md border border-base-border bg-base-surface p-4"
                >
                  <fact.icon size={18} className="mt-0.5 shrink-0 text-amber" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm text-ink">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}