import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  // Transformasi data object menjadi array agar sesuai dengan struktur mapping UI bawaan
  const skillGroups = [
    { label: "Frontend", skills: portfolioData.skills.frontend },
    { label: "Backend", skills: portfolioData.skills.backend },
    { label: "Database", skills: portfolioData.skills.database },
    { label: "AI_ML", skills: portfolioData.skills.ai_ml },
    { label: "Cybersecurity", skills: portfolioData.skills.cybersecurity },
    { label: "Tools", skills: portfolioData.skills.tools },
  ];

  return (
    <section id="skills" className="section-py scroll-mt-16 bg-base-surface/40">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="cat skills.json"
          title="Skills"
          description="The languages, frameworks, and tools I use to build systems, explore AI, and secure the web."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="h-full rounded-md border border-base-border bg-base-surface p-5 transition-colors hover:border-amber/40">
                <p className="mb-4 font-mono text-xs text-amber">
                  <span className="text-ink-faint">import</span>{" "}
                  {"{"} {group.label} {"}"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-base-border bg-base px-2.5 py-1 font-mono text-xs text-ink-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}