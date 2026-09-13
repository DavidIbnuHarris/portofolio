import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-py scroll-mt-16 bg-base-surface/40">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="cat skills.json"
          title="Skills"
          description="The languages, frameworks, and tools I build with day to day — plus what I'm learning next."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="h-full rounded-md border border-base-border bg-base-surface p-5 transition-colors hover:border-amber/40">
                <p className="mb-4 font-mono text-xs text-amber">
                  <span className="text-ink-faint">import</span>{" "}
                  {"{"} {group.label.replace(/\s+/g, "")} {"}"}
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
