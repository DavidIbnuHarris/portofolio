import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { portfolioData } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="section-py scroll-mt-16">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GET /api/education"
          title="Education"
        />

        <div className="grid gap-6">
          {portfolioData.education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.08}>
              <div className="h-full rounded-lg border border-base-border bg-base-surface p-6 md:w-1/2">
                <div className="mb-4 flex items-center gap-3">
                  <GraduationCap size={20} className="text-amber" />
                  <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                    {edu.duration}
                  </p>
                </div>
                <h3 className="font-mono text-lg text-ink">
                  {edu.degree}
                </h3>
                <p className="mt-1 font-mono text-sm text-teal">
                  {edu.institution}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {edu.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}