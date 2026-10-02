"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
// Menghapus import profile dari @/lib/data, dan menggunakan portfolioData kita
import { navRoutes } from "@/data/portfolio"; 
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

function MethodTag({ method }: { method: string }) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] font-bold tracking-wide",
        method === "POST" ? "text-teal" : "text-amber"
      )}
    >
      {method}
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-base-border bg-base/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-ink hover:text-amber transition-colors"
        >
          <span className="text-ink-faint">~/</span>
          {/* Mengambil nama dari portfolioData INFiX (David Ibnu Harris) */}
          {portfolioData.identity.name.split(" ")[0].toLowerCase()}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navRoutes.map((route) => (
            <a
              key={route.path}
              href={route.href}
              className="group flex items-center gap-2 rounded-sm px-3 py-2 font-mono text-xs text-ink-muted transition-colors hover:text-ink"
            >
              <MethodTag method={route.method} />
              <span>{route.path}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm" variant="outline">
              connect()
            </Button>
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-base-border bg-base md:hidden"
        >
          <div className="container-px mx-auto flex flex-col py-4">
            {navRoutes.map((route) => (
              <a
                key={route.path}
                href={route.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-base-border/60 py-3 font-mono text-sm text-ink-muted last:border-none"
              >
                <MethodTag method={route.method} />
                <span>{route.path}</span>
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}