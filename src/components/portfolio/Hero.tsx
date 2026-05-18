import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        {/* Left: copy */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-lavender"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Internships & Freelance · Based in Egypt
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">I craft interfaces by day,</span>
            <br />
            <span className="text-glow italic font-light">and decode logic</span>{" "}
            <span className="text-gradient">by night.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-lg font-medium text-foreground/90 md:text-xl"
          >
            A Junior Product Designer with a Full-Stack mindset.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-[15px]"
          >
            Yes, I'm a Junior — but my curiosity is Senior. I don't just design pretty
            screens; I understand how they breathe behind the code. Driven by pixels,
            powered by continuous learning, and ready to build things that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a href="#story" className="magnetic-btn group inline-flex items-center gap-2">
              Let's Build Something Great
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#bento"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground/90 transition hover:text-foreground hover:border-primary/40"
            >
              <Sparkles className="h-4 w-4 text-lavender" />
              Explore my world
            </a>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Glow halo */}
          <div
            className="absolute -inset-10 -z-10 animate-pulse-glow"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, oklch(0.72 0.2 300 / 0.55), transparent 65%)",
              filter: "blur(40px)",
            }}
          />
          {/* Frame */}
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 glass-card p-2">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src={portrait}
                alt="Portrait"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, oklch(0.13 0.02 285 / 0.85) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-2.5 text-xs">
                <span className="font-semibold tracking-wide text-foreground">
                  Designer + Developer
                </span>
                <span className="text-lavender">v2026</span>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -left-6 top-12 hidden rounded-2xl glass px-4 py-3 text-xs shadow-lg sm:block"
          >
            <div className="text-muted-foreground">currently building</div>
            <div className="mt-0.5 font-semibold text-foreground">/empathy.ux</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="absolute -right-4 bottom-24 hidden rounded-2xl glass px-4 py-3 text-xs shadow-lg sm:block"
          >
            <div className="text-muted-foreground">stack</div>
            <div className="mt-0.5 font-semibold text-foreground">MEAN · Figma</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}