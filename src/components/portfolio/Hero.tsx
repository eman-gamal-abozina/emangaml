import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import portrait from "@/assets/eman-portrait.png";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col items-center justify-center px-6 pt-28 pb-12 md:pt-32">
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="z-20 mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-lavender"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Available for Internships & Freelance · Based in Egypt
      </motion.div>

      {/* Stage */}
      <div className="relative flex w-full items-center justify-center">
        {/* HUGE name in background — single horizontal line */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          aria-label="Eman Gamal"
          className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none whitespace-nowrap text-center font-normal leading-[0.85] tracking-[-0.03em]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 17vw, 16rem)",
          }}
        >
          <span className="text-gradient italic">Eman</span>{" "}
          <span className="text-glow">Gamal</span>
        </motion.h1>

        {/* Portrait, centered, layered in front — larger & more prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 mt-16 flex w-full max-w-[34rem] flex-col items-center md:mt-20 lg:max-w-[40rem] xl:max-w-[46rem]"
        >
          {/* Tag above portrait */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="z-20 mb-[-1rem] inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background shadow-[0_8px_30px_oklch(0_0_0/0.5)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Product Designer · est. Egypt
          </motion.div>

          {/* Glow halo */}
          <div
            className="pointer-events-none absolute -inset-10 -z-10 animate-pulse-glow"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, oklch(0.5 0.25 308 / 0.55), transparent 65%)",
              filter: "blur(50px)",
            }}
          />

          {/* Portrait with soft ring */}
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-[2.2rem]"
              style={{
                background:
                  "conic-gradient(from 140deg, oklch(0.5 0.25 308 / 0.6), transparent 40%, oklch(0.82 0.1 310 / 0.5), transparent 80%)",
                filter: "blur(28px)",
              }}
            />
            <img
              src={portrait}
              alt="Eman Gamal — UI/UX Designer"
              className="relative h-auto w-full max-h-[82vh] object-contain drop-shadow-[0_30px_60px_oklch(0_0_0/0.6)]"
            />
          </div>
        </motion.div>

        {/* Floating chips */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="absolute left-2 bottom-24 hidden rounded-2xl glass px-4 py-3 text-xs shadow-lg md:block"
        >
          <div className="text-muted-foreground">currently</div>
          <div className="mt-0.5 font-semibold text-foreground">UI/UX · Front-end</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute right-2 bottom-40 hidden rounded-2xl glass px-4 py-3 text-xs shadow-lg md:block"
        >
          <div className="text-muted-foreground">tools</div>
          <div className="mt-0.5 font-semibold text-foreground">Figma · HTML · CSS</div>
        </motion.div>
      </div>

      {/* Subtitle + CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-6 text-center"
      >
        <p
          className="text-2xl tracking-[0.4em] text-foreground/80 md:text-3xl"
          style={{ fontFamily: "var(--font-grotesk)" }}
        >
          UI / UX DESIGNER
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A Junior Product Designer with a Full-Stack mindset — pairing pixel-perfect
          craft with the logic that powers it.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="magnetic-btn group inline-flex items-center gap-2">
            View Selected Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground/90 transition hover:text-foreground hover:border-primary/40"
          >
            <Sparkles className="h-4 w-4 text-lavender" />
            Explore my world
          </a>
        </div>
      </motion.div>
    </section>
  );
}