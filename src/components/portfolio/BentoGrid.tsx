import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Palette,
  Server,
  Sparkles,
  Star,
  Users,
  Crown,
  Heart,
  Smile,
  Download
} from "lucide-react";
import { Reveal } from "./Reveal";

const skills = [
  "UX Audit",
  "UX Research",
  "Competitive Analysis",
  "User Flow",
  "Prototyping",
  "Design System",
  "Auto Layout",
];

const stacks = [
  {
    label: "Design 🎨",
    icon: Palette,
    items: ["Figma"],
    bg: "bg-[#fff6f9] dark:bg-rose-500/10",
    border: "border-[#e84a8a]/20 dark:border-rose-500/30",
    text: "text-[#e84a8a] dark:text-[#f472b6]"
  },
  {
    label: "Frontend 💻",
    icon: Code2,
    items: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    bg: "bg-[#e6f6f4] dark:bg-emerald-500/10",
    border: "border-[#0f8a7d]/20 dark:border-emerald-500/30",
    text: "text-[#0f8a7d] dark:text-[#4ade80]"
  },
  {
    label: "Backend & DB 🗄️",
    icon: Server,
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
    bg: "bg-[#fdf8e6] dark:bg-amber-500/10",
    border: "border-[#b48912]/20 dark:border-amber-500/30",
    text: "text-[#b48912] dark:text-[#fbbf24]"
  },
];

const milestones = [
  {
    icon: GraduationCap,
    title: "Computer Science Undergraduate",
    meta: "Benha University · Expected 2027",
  },
  {
    icon: Users,
    title: "Full-Stack Web Developer",
    meta: "Architecting End-to-End Scalable Systems",
  },
  {
    icon: Sparkles,
    title: "Programming Instructor",
    meta: "Teaching Kids the Logic of Programming",
  },
  {
    icon: Crown,
    title: "DEPI Graduate",
    meta: "UI/UX & Web Team Leader Designation",
  },
];

export function BentoGrid() {
  return (
    <section id="bento" className="relative mx-auto max-w-7xl px-4 py-24 md:py-32 sm:px-6">
      
      {/* Section Header */}
      <Reveal>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span 
            className="inline-flex items-center gap-2 rounded-full bg-[#e6f6f4] dark:bg-[#4ade80]/10 border border-[#0f8a7d]/20 dark:border-[#4ade80]/30 px-4 py-1.5 text-sm font-medium text-[#0f8a7d] dark:text-[#4ade80] transition-colors"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            ✦ My Constellation ✦
          </span>
          <h2 
            className="mt-4 text-4xl font-bold tracking-tight md:text-5xl text-[#0f8a7d] dark:text-[#4ade80] transition-colors"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            A mind mapped in <span className="text-[#e84a8a] dark:text-[#f472b6] italic">pixels & logic</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-sans transition-colors">
            The core skills, technical tools, and defining milestones that shape my creative workflow.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
        
        {/* CARD A — Skills & Notes */}
        <Reveal i={0} className="md:col-span-3">
          <div className="relative h-full rounded-2xl bg-[#fff3a8]/40 dark:bg-amber-500/5 border border-[#f7d77f]/40 dark:border-amber-500/20 p-6 md:p-8 shadow-[0_8px_20px_rgba(122,90,58,0.03)] dark:shadow-none overflow-hidden transition-all duration-500">
            {/* Sticky Tape Decor */}
            <div className="absolute -top-2 left-10 w-16 h-4 bg-[#e84a8a]/15 dark:bg-rose-500/10 rotate-[-4deg]" />
            
            <div className="relative">
              <div 
                className="flex items-center gap-1.5 text-sm font-bold text-[#b48912] dark:text-[#fbbf24]"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                <Star className="h-4 w-4 text-[#b48912] dark:text-[#fbbf24]" /> Skills & Expertise
              </div>
              
              <h3 
                className="mt-4 text-2xl font-bold text-slate-800 dark:text-slate-200 leading-tight transition-colors"
                style={{ fontFamily: "var(--font-hand)", fontSize: 25 }}
              >
                Crafting clarity where design meets cognition.
              </h3>
              
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-sans transition-colors">
                The absolute core pillars I rely on to simplify highly complex user friction into natural, intuitive digital interactions.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white dark:bg-[#27272a] border border-[#f7d77f]/60 dark:border-neutral-800 px-3.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-2xs transition-all hover:-translate-y-0.5"
                    style={{ fontFamily: "var(--font-hand)", fontSize: 15 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CARD B — Technical Tools Stack */}
        <Reveal i={1} className="md:col-span-3">
          <div className="relative h-full rounded-2xl bg-white dark:bg-[#1c1c1e] border border-neutral-100 dark:border-neutral-800/80 p-6 md:p-8 shadow-[0_8px_25px_rgba(122,90,58,0.03)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500">
            <div 
              className="flex items-center gap-1.5 text-sm font-bold text-[#0f8a7d] dark:text-[#4ade80]"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              <Heart className="h-4 w-4 text-[#e84a8a]/60 dark:text-[#f472b6]/60" /> Essential Stacks
            </div>
            
            <h3 
              className="mt-3 text-2xl font-bold text-slate-800 dark:text-slate-200 transition-colors"
              style={{ fontFamily: "var(--font-hand)", fontSize: 25 }}
            >
              Tools & frameworks
            </h3>
            
            <div className="mt-5 space-y-3.5">
              {stacks.map((g) => (
                <div
                  key={g.label}
                  className={`rounded-xl border ${g.border} ${g.bg} p-3.5 transition-all duration-500`}
                >
                  <div className={`flex items-center gap-1.5 text-sm font-bold ${g.text}`} style={{ fontFamily: "var(--font-hand)" }}>
                    <g.icon className="h-4 w-4" />
                    {g.label}
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="inline-flex items-center gap-1 rounded-lg bg-white/80 dark:bg-neutral-900/80 px-2.5 py-0.5 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-2xs border border-neutral-100 dark:border-neutral-800 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0f8a7d]/50 dark:bg-[#4ade80]/50" />
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CARD C — Milestones Grid (Fixed SSR document reference issue using Tailwind properties) */}
        <Reveal i={2} className="md:col-span-6">
          <div className="relative rounded-2xl bg-white dark:bg-[#1c1c1e] border border-neutral-100 dark:border-neutral-800/80 p-6 md:p-8 shadow-[0_8px_25px_rgba(122,90,58,0.03)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_31px,#e8f3f5_32px)] dark:bg-none" style={{ backgroundSize: "100% 32px" }}>
            
            {/* Binder Rings Decor */}
            <div className="absolute right-6 top-4 flex gap-1.5">
              <span className="block h-2 w-2 rounded-full bg-[#0f8a7d]/20 dark:bg-[#4ade80]/20" />
              <span className="block h-2 w-2 rounded-full bg-[#0f8a7d]/20 dark:bg-[#4ade80]/20" />
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between relative z-10">
              <div>
                <div 
                  className="flex items-center gap-1.5 text-sm font-bold text-[#e84a8a] dark:text-[#f472b6]"
                  style={{ fontFamily: "var(--font-hand)" }}
                >
                  <Star className="h-4 w-4 text-[#e84a8a] dark:text-[#f472b6]" /> Milestones
                </div>
                <h3 
                  className="mt-2 text-2xl font-bold text-slate-800 dark:text-slate-200 transition-colors"
                  style={{ fontFamily: "var(--font-hand)", fontSize: 26 }}
                >
                  Small constellations of progress ✨
                </h3>
              </div>
              <p className="max-w-md text-sm text-slate-500 dark:text-slate-400 font-sans md:text-right transition-colors">
                Every single checkpoint in my learning curve taught me a fresh approach to communicating with systems, interfaces, and humans.
              </p>
            </div>

            <div className="relative mt-12 mb-4">
              {/* Timeline Connector Line */}
              <div
                aria-hidden
                className="absolute left-4 right-0 top-5 h-px border-t border-dashed border-[#0f8a7d]/30 dark:border-neutral-700 hidden md:block"
              />
              
              <ol className="grid grid-cols-1 gap-6 md:grid-cols-4 relative z-10">
                {milestones.map((m, i) => (
                  <li key={m.title} className="relative pl-10 md:pl-0">
                    <div className="absolute left-0 top-0 md:relative md:mb-4 flex items-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f6f4] dark:bg-neutral-800 border border-[#0f8a7d]/30 dark:border-neutral-700 shadow-2xs transition-all">
                        <m.icon className="h-4 w-4 text-[#0f8a7d] dark:text-[#4ade80]" />
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#e84a8a]/70 dark:text-[#f472b6]/70 font-mono">
                      📌 STEP 0{i + 1}
                    </div>
                    <div 
                      className="mt-1 font-bold leading-tight text-slate-800 dark:text-slate-200 text-lg transition-colors"
                      style={{ fontFamily: "var(--font-hand)" }}
                    >
                      {m.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-sans transition-colors">{m.meta}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Personal Biography Section (My Story) */}
      <div id="story" className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-6">
        <Reveal className="md:col-span-6">
          <div className="relative h-full rounded-2xl bg-[#fffcf6] dark:bg-[#161618] border border-[rgba(122,90,58,0.1)] dark:border-neutral-800/80 p-6 md:p-10 shadow-[0_8px_30px_rgba(122,90,58,0.02)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500">
            
            {/* Technical grid mapping overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.008] transition-opacity duration-500"
              style={{
                backgroundImage: "linear-gradient(#7a5a3a 1px, transparent 1px), linear-gradient(90deg, #7a5a3a 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Washi Tape Corner Decor */}
            <div className="absolute -top-3 right-12 w-20 h-5 bg-[#bdebe4]/50 dark:bg-emerald-500/20 rotate-[6deg] transition-colors" />

            <div className="relative z-10">
              <div 
                className="flex items-center gap-1.5 text-sm font-bold text-[#0f8a7d] dark:text-[#4ade80]"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                <Smile className="h-4 w-4 text-[#e84a8a] dark:text-[#f472b6]" /> My Story 📖
              </div>
              
              <p 
                className="mt-5 text-xl leading-relaxed text-slate-800 dark:text-slate-200 md:text-2xl md:leading-[1.5] font-bold transition-colors"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                I looked at code and saw <span className="text-[#e84a8a] dark:text-[#f472b6] italic">architecture</span>; I looked at design and saw <span className="text-[#0f8a7d] dark:text-[#4ade80] italic">logic</span>. 
                Coming from a Competitive Programming background, I learned how to dissect tough, logical puzzles piece by piece—but I soon realized that absolute logic without human empathy remains practically invisible.
              </p>
              
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 font-sans md:text-lg transition-colors">
                That realization is exactly what drew me into Full-Stack Development and UI/UX architecture. I am genuinely passionate about reducing cognitive load for everyday users, upholding inclusive global accessibility standards (WCAG), and crafting warm, frictionless digital journeys that feel like absolute second nature.
              </p>

              {/* Resume Interactive Sticker Component */}
              <div className="mt-8 flex justify-start">
                <motion.a
                  href="/Eman_Gamal_Resume.pdf"
                  download="Eman_Gamal_Resume.pdf"
                  initial={{ rotate: -2 }}
                  whileHover={{ rotate: 1, scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center gap-3.5 bg-[#fff3a8] dark:bg-amber-500/10 border-2 border-dashed border-[#b48912]/40 dark:border-amber-500/30 px-5 py-3 rounded-xl shadow-xs cursor-pointer group z-20 transition-all duration-500"
                >
                  {/* Sticker Overlay Shadow Strap */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4.5 bg-[#e84a8a]/20 dark:bg-rose-500/20 rotate-[1deg] pointer-events-none transition-colors" />
                  
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-800 text-[#b48912] dark:text-[#fbbf24] shadow-3xs group-hover:scale-105 transition-all">
                    <Download className="h-4 w-4 animate-bounce" style={{ animationDuration: '2.5s' }} />
                  </span>
                  
                  <div className="text-left">
                    <span 
                      className="block text-base font-bold text-slate-800 dark:text-slate-200 leading-none transition-colors" 
                      style={{ fontFamily: "var(--font-hand)", fontSize: 17 }}
                    >
                      Grab my Resume? 📄
                    </span>
                    <span className="text-[11px] text-[#b48912]/90 dark:text-amber-500/80 font-mono font-bold mt-0.5 block transition-colors">// Click to download PDF</span>
                  </div>
                </motion.a>
              </div>

            </div>
          </div>
        </Reveal>
      </div>

    </section>
  );
}