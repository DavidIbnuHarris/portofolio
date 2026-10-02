"use client";

import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { portfolioData } from "@/data/portfolio";

// Mendefinisikan tipe sesuai dengan data di portfolio.ts
type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  status: string;
  githubUrl: string;
  demoUrl: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <div className="group relative h-full overflow-hidden rounded-lg border border-base-border bg-base-surface transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl hover:shadow-black/30">
        <div className="flex items-center justify-between border-b border-base-border px-5 py-3">
          <span className="font-mono text-[11px] text-ink-faint">
            /projects/{project.id}
          </span>
          {/* StatusBadge bawaan template mungkin butuh penyesuaian jika string 'status'-nya berbeda */}
          <StatusBadge status={project.status} />
        </div>

        <div className="p-5">
          <h3 className="font-mono text-lg font-medium text-ink">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-base-border bg-base px-2 py-1 font-mono text-[10.5px] text-teal"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-base-border pt-4">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
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
          description="A selection of my work focusing on Web Development, AI/Machine Learning explorations, and system implementations."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}