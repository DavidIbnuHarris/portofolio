export type ProjectStatus = "live" | "coming-soon";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface HackathonEntry {
  name: string;
  year: string;
  summary: string;
  result: string;
}

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}
