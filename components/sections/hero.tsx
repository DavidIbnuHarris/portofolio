"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

// Data untuk response JSON di terminal kanan
const responseLines = [
  { key: '"name"', value: `"${portfolioData.identity.name}"` },
  { key: '"role"', value: `"${portfolioData.identity.role}"` },
  { key: '"focus_1"', value: '"Web Development"' },
  { key: '"focus_2"', value: '"AI & Machine Learning"', highlight: true },
  { key: '"focus_3"', value: '"Cybersecurity"' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 lg:pt-24"
    >
      {/* Ubah gap-16 menjadi gap-10 pada mobile agar tidak terlalu renggang */}
      <div className="container-px mx-auto grid w-full max-w-6xl items-center gap-10 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* KIRI: Terminal-style intro */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-sm border border-base-border bg-base-surface px-3 py-1.5 font-mono text-xs text-ink-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            System Online
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-3 font-mono text-sm text-amber"
          >
            david@dev:~$ whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance font-mono text-4xl font-medium leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {portfolioData.identity.name}
            <span className="text-amber">.</span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -36, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block whitespace-nowrap text-amber text-3xl sm:text-4xl"
            >
              {portfolioData.identity.role}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-lg text-balance text-base leading-relaxed text-ink-muted md:text-lg"
          >
            {portfolioData.identity.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects">
              <Button size="lg">
                View projects
                <ArrowUpRight size={16} />
              </Button>
            </a>
            <a href={portfolioData.identity.contact.github} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                GitHub
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 flex items-center gap-5 font-mono text-xs text-ink-faint hidden sm:flex"
          >
            {/* Disembunyikan di mobile layar sangat kecil agar tidak bentrok dengan tombol */}
            <a href={portfolioData.identity.contact.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber">
              GitHub
            </a>
            <a href={portfolioData.identity.contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber">
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.identity.contact.email}`} className="transition-colors hover:text-amber">
              Email
            </a>
          </motion.div>
        </div>

        {/* KANAN: JSON "API response" card */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 lg:mt-0" 
        >
          <div className="absolute -inset-6 -z-10 rounded-lg bg-amber/5 blur-2xl" />
          <div className="overflow-hidden rounded-lg border border-base-border bg-base-surface shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-base-border px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a4f5c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a4f5c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a4f5c]" />
              </div>
              <span className="font-mono text-[11px] text-ink-faint">
                GET /api/david
              </span>
            </div>
            {/* Tambahkan break-all / break-words untuk mencegah overflow horizontal pada mobile */}
            <div className="px-4 md:px-5 py-6 font-mono text-[12px] md:text-[13px] leading-7 overflow-x-hidden break-words">
              <p className="text-ink-faint">{"{"}</p>
              {responseLines.map((line, i) => (
                <p key={line.key} className="pl-3 md:pl-4">
                  <span className="text-teal">{line.key}</span>
                  <span className="text-ink-faint">: </span>
                  <span className={line.highlight ? "text-amber" : "text-ink"}>
                    {line.value}
                  </span>
                  {i < responseLines.length - 1 && (
                    <span className="text-ink-faint">,</span>
                  )}
                </p>
              ))}
              <p className="text-ink-faint">{"}"}</p>
            </div>
            <div className="flex items-center justify-between border-t border-base-border bg-base px-4 py-2.5">
              <span className="font-mono text-[11px] text-teal">
                200 OK
              </span>
              <span className="font-mono text-[11px] text-ink-faint">
                12ms
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-ink-faint md:flex"
      >
        scroll
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}