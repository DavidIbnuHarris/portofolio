import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3 font-mono text-xs text-amber",
          align === "center" && "justify-center"
        )}
      >
        <span className="text-ink-faint">$</span>
        <span>{eyebrow}</span>
        <span className="h-px flex-1 max-w-16 bg-base-border" />
      </div>
      <h2 className="font-mono text-3xl font-medium tracking-tight text-ink text-balance md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-ink-muted text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
