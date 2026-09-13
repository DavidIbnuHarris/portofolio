import { profile, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-4 py-8 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-mono text-xs text-ink-faint">
          <span className="text-teal">{"// "}</span>
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
          &amp; Tailwind CSS.
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-faint transition-colors hover:text-amber"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
