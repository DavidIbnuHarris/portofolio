import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-base-border bg-base py-10 font-mono text-xs text-ink-faint">
      <div className="container-px mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p>
          &copy; {year} {portfolioData.identity.name}. All rights reserved.
        </p>
        <p>
          Original template design by{" "}
          <a
            href="https://github.com/jitanshu-27/jitanshu-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-amber transition-colors underline decoration-base-border underline-offset-4"
          >
            Jitanshu
          </a>
          .
        </p>
      </div>
    </footer>
  );
}