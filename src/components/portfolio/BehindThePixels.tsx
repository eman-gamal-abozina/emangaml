import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import books from "@/assets/fun-books.jpg";
import bookshop from "@/assets/fun-bookshop.jpg";
import laptop from "@/assets/fun-laptop.jpg";
import coffee from "@/assets/fun-coffee.jpg";
import juice from "@/assets/fun-juice.jpg";
import walk from "@/assets/fun-walk.jpg";
import sky from "@/assets/fun-sky.jpg";
import coding from "@/assets/fun-coding.jpg";

type Polaroid = {
  src: string;
  alt: string;
  caption: string;
  scribble?: string;
  tilt: number;
  className: string; // grid placement + size
  tape?: "tl" | "tr" | "top";
};

const polaroids: Polaroid[] = [
  {
    src: bookshop,
    alt: "Browsing books at a street bookshop",
    caption: "this face = when you accidentally walk into a bookshop",
    scribble: "📚 lost again",
    tilt: -4,
    tape: "tl",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    src: books,
    alt: "Reading in a quiet library corner",
    caption: "a good book + a quiet corner = my kind of party",
    scribble: "reading fuels imagination",
    tilt: 3,
    tape: "tr",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: laptop,
    alt: "Laptop with stickers and Turkish coffee",
    caption: "engineer mode: ON · caffeine: required",
    scribble: "be positive, like a proton",
    tilt: -2,
    tape: "top",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: sky,
    alt: "Sky over the Nile",
    caption: "whenever I'm stuck, I look at the sky — it resets my visual hierarchy",
    scribble: "✶ debug = look up",
    tilt: 2,
    tape: "top",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    src: coffee,
    alt: "Cup of Turkish coffee",
    caption: "compiling… powered by Turkish coffee",
    scribble: "1 cup = 1 bug fixed",
    tilt: 4,
    tape: "tl",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: walk,
    alt: "Walk under flame trees in Egypt",
    caption: "going for a walk + taking photos of nature = my reset button",
    scribble: "nature therapy",
    tilt: -3,
    tape: "tr",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: juice,
    alt: "Holding sugarcane juice in a car",
    caption: "not sure how I'd survive summer without sugarcane juice",
    scribble: "summer survival kit",
    tilt: 5,
    tape: "top",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: coding,
    alt: "Code on a screen at night",
    caption: "like every dev ever — hours of coding & one tiny error ruins everything",
    scribble: "after 2 hours coding…",
    tilt: -4,
    tape: "tl",
    className: "md:col-span-4 md:row-span-2",
  },
];

function Tape({ position }: { position: "tl" | "tr" | "top" }) {
  const base =
    "pointer-events-none absolute h-5 w-20 rounded-[2px] mix-blend-screen";
  const styles: Record<typeof position, React.CSSProperties> = {
    tl: {
      top: -10,
      left: 16,
      transform: "rotate(-12deg)",
    },
    tr: {
      top: -10,
      right: 16,
      transform: "rotate(10deg)",
    },
    top: {
      top: -10,
      left: "50%",
      transform: "translateX(-50%) rotate(-2deg)",
    },
  };
  return (
    <span
      className={base}
      style={{
        ...styles[position],
        background:
          "linear-gradient(180deg, oklch(0.85 0.08 305 / 0.55), oklch(0.78 0.14 305 / 0.35))",
        boxShadow:
          "0 4px 10px oklch(0 0 0 / 0.4), inset 0 0 0 1px oklch(1 0 0 / 0.08)",
      }}
    />
  );
}

function PolaroidCard({ p, i }: { p: Polaroid; i: number }) {
  return (
    <Reveal i={i} className={p.className}>
      <motion.figure
        initial={{ rotate: p.tilt }}
        whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="group relative mx-auto h-full w-full max-w-md"
        style={{ rotate: `${p.tilt}deg` }}
      >
        {/* Glow halo */}
        <div
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.2 300 / 0.55), transparent 70%)",
          }}
        />

        <div
          className="relative flex h-full flex-col rounded-[14px] p-3 pb-4 shadow-[0_20px_50px_oklch(0_0_0/0.55)] ring-1 ring-primary/20 transition-all duration-500 group-hover:ring-primary/60"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.96 0.01 290 / 0.97), oklch(0.9 0.015 295 / 0.94))",
          }}
        >
          {p.tape && <Tape position={p.tape} />}

          {/* Image */}
          <div className="relative overflow-hidden rounded-[6px] bg-black">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* purple cinematic tint */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-70"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.78 0.14 305 / 0.25), oklch(0.4 0.12 290 / 0.35))",
              }}
            />
            {/* film grain edge */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                boxShadow: "inset 0 0 40px oklch(0 0 0 / 0.6)",
              }}
            />
            {p.scribble && (
              <span
                className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-medium text-lavender ring-1 ring-primary/40 backdrop-blur-md"
                style={{ fontFamily: "var(--font-hand)", fontSize: 14 }}
              >
                {p.scribble}
              </span>
            )}
          </div>

          {/* Caption */}
          <figcaption
            className="mt-3 px-1 text-center leading-tight text-[oklch(0.25_0.03_285)]"
            style={{ fontFamily: "var(--font-hand)", fontSize: 20 }}
          >
            {p.caption}
          </figcaption>
        </div>
      </motion.figure>
    </Reveal>
  );
}

export function BehindThePixels() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-lavender">
            <Heart className="h-3.5 w-3.5" /> Behind the pixels
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            <span className="text-gradient">Little moments</span>{" "}
            <span className="text-glow italic font-light">that shape my craft</span>
          </h2>
          <p
            className="mt-5 text-2xl text-foreground/85"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            a quiet scrapbook — coffee, books, sky, code & everything in between.
          </p>
        </div>
      </Reveal>

      {/* Scrapbook board */}
      <div className="relative">
        {/* soft ambient sparkle */}
        <Sparkles
          aria-hidden
          className="pointer-events-none absolute -top-6 right-10 h-6 w-6 text-lavender/60"
        />
        <Sparkles
          aria-hidden
          className="pointer-events-none absolute bottom-10 left-4 h-5 w-5 text-lavender/50"
        />

        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-10 md:auto-rows-[1px] md:gap-y-10">
          {polaroids.map((p, i) => (
            <PolaroidCard key={i} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}