import { Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-py scroll-mt-16 bg-base-surface/40">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GET /api/experience"
          title="Experience"
          description="Pengalaman praktis saya di bidang teknologi, mulai dari sistem pemerintahan digital hingga kompetisi hackathon."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.experience.map((exp, i) => (
            <Reveal key={`${exp.id}-${i}`} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-lg border border-base-border bg-base-surface p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Terminal size={18} className="text-amber" />
                  <span className="font-mono text-[11px] text-ink-faint">
                    {exp.duration}
                  </span>
                </div>
                <h3 className="font-mono text-base font-medium text-ink">
                  {exp.role}
                </h3>
                <p className="mt-1 font-mono text-xs text-teal">
                  {exp.company}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}