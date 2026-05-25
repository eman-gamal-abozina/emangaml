import {
  Code2,
  Figma,
  GraduationCap,
  Layers,
  Palette,
  Server,
  Sparkles,
  Star,
  Stars,
  Users,
  Wand2,
  Crown,
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
    label: "Design",
    icon: Palette,
    items: ["Figma"],
  },
  {
    label: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS"],
  },
  {
    label: "Backend & Database",
    icon: Server,
    items: ["Node.js", "Express.js", "MongoDB"],
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
    title: "Technical UI/UX Designer",
    meta: "helping others on projects",
  },
  {
    icon: Sparkles,
    title: "Programming Instructor",
    meta: "teaching kids programming",
  },
  {
    icon: Crown,
    title: "DEPI Graduate",
    meta: "UI/UX Team Leader",
  },
];

export function BentoGrid() {
  return (
    <section id="bento" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-lavender">
            <Stars className="h-3.5 w-3.5" /> The constellation
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            <span className="text-gradient">A mind mapped</span>{" "}
            <span className="text-glow italic font-light">in pixels & logic</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Skills, stacks and the milestones that shaped the way I think.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
        {/* CARD A — Skills */}
        <Reveal i={0} className="md:col-span-3 md:row-span-2">
          <div className="glass-card group relative h-full overflow-hidden p-8">
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-60 transition-opacity group-hover:opacity-100"
              style={{ background: "var(--gradient-glow)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-lavender" /> Skills & Expertise
              </div>
              <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
                Crafting clarity where design meets cognition.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                The disciplines I lean on to turn complex problems into intuitive,
                accessible experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {skills.map((s, i) => (
                  <span
                    key={s}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/20 hover:shadow-[0_0_20px_oklch(0.72_0.2_300/0.4)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CARD B — Stacks */}
        <Reveal i={1} className="md:col-span-3 md:row-span-2">
          <div className="glass-card group relative h-full overflow-hidden p-8">
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full opacity-50 transition-opacity group-hover:opacity-80"
              style={{ background: "var(--gradient-glow)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Layers className="h-3.5 w-3.5 text-lavender" /> Essential Stacks
              </div>
              <h3 className="mt-4 text-2xl font-semibold md:text-3xl">Tools & frameworks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                What I use to bridge design and code.
              </p>
              <div className="mt-6 space-y-4">
                {stacks.map((g) => (
                  <div
                    key={g.label}
                    className="rounded-2xl border border-border bg-secondary/40 p-4 transition-all hover:border-primary/40 hover:bg-secondary/70"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lavender">
                      <g.icon className="h-4 w-4" />
                      {g.label}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <span
                          key={it}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground/90 ring-1 ring-inset ring-primary/15 transition hover:ring-primary/60 hover:text-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_oklch(0.72_0.2_300)]" />
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CARD C — Milestones */}
        <Reveal i={2} className="md:col-span-6">
          <div className="glass-card group relative overflow-hidden p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <Star className="h-3.5 w-3.5 text-lavender" /> Milestones
                </div>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  Small constellations of progress.
                </h3>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Each step taught me a different language — for screens, for systems, for
                people.
              </p>
            </div>

            <div className="relative mt-10">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              />
              <ol className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {milestones.map((m, i) => (
                  <li key={m.title} className="group/m relative">
                    <div className="mb-4 flex items-center">
                      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_30px_oklch(0.72_0.2_300/0.4)] transition group-hover/m:scale-110 group-hover/m:shadow-[0_0_45px_oklch(0.72_0.2_300/0.7)]">
                        <m.icon className="h-4.5 w-4.5 text-lavender" />
                      </span>
                    </div>
                    <div className="text-xs uppercase tracking-wider text-lavender/80">
                      0{i + 1}
                    </div>
                    <div className="mt-1 font-semibold leading-snug text-foreground">
                      {m.title}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.meta}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Soul section */}
      <div id="story" className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
        {/* CARD D — Story */}
        <Reveal className="md:col-span-6">
          <div className="glass-card relative h-full overflow-hidden p-8 md:p-10">
            <div
              className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-50"
              style={{ background: "var(--gradient-glow)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Wand2 className="h-3.5 w-3.5 text-lavender" /> My Story
              </div>
              <p className="mt-6 text-xl leading-relaxed text-foreground/95 md:text-2xl md:leading-[1.5]">
                I looked at code and saw{" "}
                <span className="text-glow italic">architecture</span>; I looked at design
                and saw <span className="text-glow italic">logic</span>. Coming from a
                competitive programming background, I learned how to solve tough logical
                puzzles — but realized logic without empathy is invisible.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                That's why I stepped into UI/UX. I'm obsessed with reducing cognitive load,
                honoring WCAG accessibility standards, and building experiences that feel
                like second nature to users.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Silhouette decoration (kept for future use)
export function Silhouette() {
  return <Figma className="hidden" />;
}