"use client";

import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { projects } from "@/lib/data";
import { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <div className="group relative h-full overflow-hidden rounded-lg border border-base-border bg-base-surface transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl hover:shadow-black/30">
        <div className="flex items-center justify-between border-b border-base-border px-5 py-3">
          <span className="font-mono text-[11px] text-ink-faint">
            /projects/{project.id}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="p-5">
          <h3 className="font-mono text-lg font-medium text-ink">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-base-border bg-base px-2 py-1 font-mono text-[10.5px] text-teal"
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-1.5 text-xs text-ink-muted"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-amber" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-4 border-t border-base-border pt-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-ink hover:text-amber transition-colors"
              >
                Live <ArrowUpRight size={13} />
              </a>
            ) : (
              <span className="flex items-center gap-1.5 font-mono text-xs text-ink-faint">
                Live <ArrowUpRight size={13} />
              </span>
            )}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-ink hover:text-amber transition-colors"
              >
                <Github size={13} /> Source
              </a>
            ) : (
              <span className="flex items-center gap-1.5 font-mono text-xs text-ink-faint">
                <Github size={13} /> Source
              </span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-py scroll-mt-16">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GET /api/projects"
          title="Projects"
          description="A selection of full-stack builds — most are in active development, shipped incrementally rather than all at once."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
