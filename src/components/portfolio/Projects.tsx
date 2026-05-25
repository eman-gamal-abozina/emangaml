import { ArrowUpRight, Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  cover?: string;
  accent: string; // gradient
};

const projects: Project[] = [
  {
    index: "01",
    title: "Project Title",
    category: "UI/UX · Case Study",
    description:
      "A short, punchy description of the project — the problem, the craft, the outcome.",
    accent: "linear-gradient(135deg, oklch(0.45 0.25 310), oklch(0.32 0.2 290))",
  },
  {
    index: "02",
    title: "Project Title",
    category: "Product Design",
    description:
      "What you designed, why it mattered, and the measurable impact it delivered.",
    accent: "linear-gradient(135deg, oklch(0.5 0.22 320), oklch(0.3 0.18 280))",
  },
  {
    index: "03",
    title: "Project Title",
    category: "Design System",
    description:
      "A glimpse into the system — tokens, components, and the rhythm that ties them together.",
    accent: "linear-gradient(135deg, oklch(0.42 0.24 305), oklch(0.28 0.16 300))",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-lavender">
              <Briefcase className="h-3.5 w-3.5" /> Selected Work
            </span>
            <h2
              className="mt-5 text-5xl leading-[0.95] tracking-tight md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-gradient italic">Projects</span>{" "}
              <span className="text-glow">— crafted with care.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground md:text-base">
            A small, curated list of work where design decisions had to earn their place.
            Each case study is a story in itself.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.index} i={i}>
            <ProjectCard project={p} alt={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, alt }: { project: Project; alt: boolean }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/15 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_30px_80px_oklch(0.4_0.25_308/0.35)] ${
        alt ? "md:mt-10" : ""
      }`}
    >
      {/* Cover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: project.accent }}
          >
            <span
              className="text-[8rem] font-normal italic leading-none text-white/15"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.index}
            </span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-90"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, oklch(0.12 0.015 295 / 0.85) 100%)",
          }}
        />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-lavender ring-1 ring-primary/30 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>{project.index}</span>
          <span>Case Study</span>
        </div>
        <h3
          className="text-3xl leading-tight tracking-tight md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-lavender"
          >
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <span className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent transition-all duration-500 group-hover:w-24" />
        </div>
      </div>
    </article>
  );
}