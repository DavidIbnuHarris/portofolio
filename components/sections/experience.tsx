import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { hackathons } from "@/lib/data";

export function Experience() {
  return (
    <section id="hackathons" className="section-py scroll-mt-16 bg-base-surface/40">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GET /api/experience"
          title="Hackathons & Experience"
          description="I'm early in my career — currently building production-ready full-stack projects while preparing for SDE-1 opportunities. Here's my hands-on competitive experience so far."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((h, i) => (
            <Reveal key={`${h.name}-${i}`} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-lg border border-base-border bg-base-surface p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Trophy size={18} className="text-amber" />
                  <span className="font-mono text-[11px] text-ink-faint">
                    {h.year}
                  </span>
                </div>
                <h3 className="font-mono text-base font-medium text-ink">
                  {h.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {h.summary}
                </p>
                <p className="mt-4 font-mono text-xs text-teal">
                  {h.result}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
