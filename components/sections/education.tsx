import { GraduationCap, BadgeCheck, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { education, achievements, certificates } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="section-py scroll-mt-16">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GET /api/education"
          title="Education & Achievements"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Education */}
          <Reveal>
            <div className="h-full rounded-lg border border-base-border bg-base-surface p-6">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap size={20} className="text-amber" />
                <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  Education
                </p>
              </div>
              <h3 className="font-mono text-lg text-ink">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                {education.institution} &middot; {education.year}
              </p>

              {certificates.length > 0 && (
                <div className="mt-8 border-t border-base-border pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <BadgeCheck size={20} className="text-ink-faint" />
                    <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                      Certifications
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {certificates.map((cert) => (
                      <li
                        key={cert.id}
                        className="flex flex-col gap-1 text-sm"
                      >
                        {cert.credentialUrl ? (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-ink hover:text-teal transition-colors"
                          >
                            {cert.name}
                          </a>
                        ) : (
                          <p className="font-mono text-ink">{cert.name}</p>
                        )}
                        <p className="text-xs text-ink-muted">
                          {cert.issuer} • {cert.date}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-lg border border-base-border bg-base-surface p-6">
              <div className="mb-4 flex items-center gap-3">
                <Star size={20} className="text-amber" />
                <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  Achievements
                </p>
              </div>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
