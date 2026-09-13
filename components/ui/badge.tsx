import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-base-border bg-base-raised px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

/**
 * HTTP-status-styled badge. Doubles as the site's project-status indicator:
 * live projects read "200 OK", pending ones read "202 COMING SOON" — an
 * honest, on-brand alternative to a generic "coming soon" pill.
 */
export function StatusBadge({ status }: { status: "live" | "coming-soon" }) {
  const isLive = status === "live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide",
        isLive
          ? "border-teal/30 bg-teal/10 text-teal"
          : "border-amber/30 bg-amber/10 text-amber"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          isLive ? "bg-teal" : "bg-amber"
        )}
      />
      {isLive ? "200 OK" : "202 COMING SOON"}
    </span>
  );
}
