import { motion } from "framer-motion";
import { Smile, Sparkles, Star, Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import competitions from "@/assets/5827835863067464157.jpg";
import bookshop from "@/assets/fun-bookshop.jpg";
import laptop from "@/assets/fun-laptop.jpg";
import events from "@/assets/5827835863067464233.jpg";
import juice from "@/assets/fun-juice.jpg";
import journal from "@/assets/5827835863067464280.jpg";
import sky from "@/assets/fun-sky.jpg";
import coding from "@/assets/fun-coding.jpg";

type Polaroid = {
  src: string;
  alt: string;
  caption: string;
  scribble?: string;
  tilt: number;
  tape?: "tl" | "tr" | "top";
};

const polaroids: Polaroid[] = [
  {
    src: bookshop,
    alt: "Browsing books at a street bookshop",
    caption: "This face = when you accidentally walk into a bookshop",
    scribble: "Bookshop Detour",
    tilt: -3,
    tape: "tl",
  },
  {
    src: competitions,
    alt: "Nasa Space Apps",
    caption: "enjoy competitions and the exciting atmosphere they bring.",
    scribble: "Nasa Space Apps",
    tilt: 2.5,
    tape: "tr",
  },
  {
    src: laptop,
    alt: "Laptop with stickers and Turkish coffee",
    caption: "I'm not just a coffee lover . makes me feel calm and happy.",
    scribble: "Coffee Ritual ✿",
    tilt: -1.5,
    tape: "top",
  },
  {
    src: sky,
    alt: "Sky over the Nile",
    caption: "Going for a walk and taking photos of nature makes me feel relaxed.",
    scribble: "Nature Therapy",
    tilt: 2,
    tape: "top",
  },
  {
    src: events,
    alt: "events",
    caption: "enjoy attending events - gives me energy to complete this dummy track",
    scribble: "events power",
    tilt: 3,
    tape: "tl",
  },
  {
    src: journal,
    alt: "Walk under flame trees in Egypt",
    caption: "I journal each day - that is how a take off my thoughts",
    scribble: "Journaling",
    tilt: -2,
    tape: "tr",
  },
  {
    src: juice,
    alt: "Holding sugarcane juice in a car",
    caption: "Not sure how I would've survived summer without sugarcane juice.",
    scribble: "Summer Survival Kit",
    tilt: 3.5,
    tape: "top",
  },
  {
    src: coding,
    alt: "Code on a screen at night",
    caption: "Like every developer ever — hours of coding, and one tiny error ruins everything.",
    scribble: "after 2 hours coding",
    tilt: -3,
    tape: "tl",
  },
];

function Tape({ position }: { position: "tl" | "tr" | "top" }) {
  const base = "pointer-events-none absolute h-4.5 w-18 md:w-20 rounded-[1px] opacity-75 z-20 transition-all duration-500";
  
  const styles: Record<typeof position, React.CSSProperties> = {
    tl: { top: -8, left: 12, transform: "rotate(-10deg)" },
    tr: { top: -8, right: 12, transform: "rotate(8deg)" },
    top: { top: -8, left: "50%", transform: "translateX(-50%) rotate(-1deg)" },
  };

  // تم استبدال الـ inline style الشرطي بكلاسات Tailwind الديناميكية المتوافقة مع الـ SSR
  const themeClasses = {
    tr: "bg-[linear-gradient(90deg,rgba(247,215,127,0.7),rgba(247,215,127,0.5))] dark:bg-gradient-to-r dark:from-amber-500/30 dark:to-amber-500/10",
    tl: "bg-[linear-gradient(90deg,rgba(247,207,217,0.8),rgba(247,207,217,0.6))] dark:bg-gradient-to-r dark:from-rose-500/30 dark:to-rose-500/10",
    top: "bg-[linear-gradient(90deg,rgba(189,235,228,0.8),rgba(189,235,228,0.6))] dark:bg-gradient-to-r dark:from-emerald-500/30 dark:to-emerald-500/10",
  };

  return (
    <span
      className={`${base} ${themeClasses[position]}`}
      style={styles[position]}
    />
  );
}

function PolaroidCard({ p, i }: { p: Polaroid; i: number }) {
  return (
    <Reveal i={i}>
      <motion.figure
        initial={{ rotate: p.tilt }}
        whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 15 }}
        className="group relative mx-auto w-full mb-6 break-inside-avoid"
      >
        <div className="relative flex flex-col rounded-xl bg-white dark:bg-[#1c1c1e] p-3 pb-6 shadow-[0_10px_25px_rgba(122,90,58,0.06)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-neutral-100 dark:border-neutral-800 transition-all duration-500">
          {p.tape && <Tape position={p.tape} />}

          {/* Image Layer */}
          <div className="relative overflow-hidden rounded-lg bg-[#fdfaf3] dark:bg-[#141416]">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {p.scribble && (
              <span
                className="absolute left-2.5 top-2.5 rounded-full bg-white/90 dark:bg-[#1c1c1e]/90 px-3 py-0.5 text-[#0f8a7d] dark:text-[#4ade80] text-sm font-bold border border-[#0f8a7d]/10 dark:border-[#4ade80]/20 backdrop-blur-xs shadow-xs transition-colors duration-500"
                style={{ fontFamily: "var(--font-hand)", fontSize: 15 }}
              >
                {p.scribble}
              </span>
            )}
          </div>

          <figcaption
            className={`mt-3.5 px-1 text-center leading-tight font-semibold transition-colors duration-500 ${
              i % 2 === 0 
                ? "text-[#e84a8a] dark:text-[#f472b6]" 
                : "text-[#0f8a7d] dark:text-[#4ade80]"
            }`}
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: 20,
            }}
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
    <section className="relative mx-auto max-w-7xl px-4 pb-24 md:pb-32 sm:px-6">
      
      <div
        className="relative overflow-hidden rounded-[24px] px-4 py-12 sm:px-8 sm:py-16 md:px-12 bg-[#fffcf6] dark:bg-[#161618] border border-[rgba(122,90,58,0.1)] dark:border-neutral-800/60 shadow-[0_8px_30px_rgba(122,90,58,0.02)] transition-colors duration-500"
      >
        {/* Grid Overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.015] transition-opacity duration-500"
          style={{
            backgroundImage:
              "linear-gradient(#7a5a3a 1px, transparent 1px), linear-gradient(90deg, #7a5a3a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative Icons */}
        <Star className="pointer-events-none absolute right-12 top-10 h-6 w-6 text-[#0f8a7d]/30 dark:text-[#4ade80]/20 animate-pulse transition-colors" strokeWidth={1.5} />
        <Sparkles className="pointer-events-none absolute left-10 top-32 h-5 w-5 text-[#e84a8a]/40 dark:text-[#f472b6]/20 transition-colors" />
        <Heart className="pointer-events-none absolute left-20 bottom-24 h-5 w-5 text-[#e84a8a]/30 dark:text-[#f472b6]/20 transition-colors" />
        <Sparkles className="pointer-events-none absolute right-24 bottom-32 h-5 w-5 text-[#0f8a7d]/30 dark:text-[#4ade80]/20 transition-colors" />

        {/* Header Notebook layout (Fixed Document Reference by migrating lines to Tailwind) */}
        <Reveal>
          <div className="relative mx-auto mb-16 grid max-w-5xl items-center gap-6 md:grid-cols-[1.2fr_1fr]">
            <motion.div
              initial={{ rotate: -1 }}
              whileHover={{ rotate: 0 }}
              className="relative rounded-2xl bg-white dark:bg-[#1c1c1e] p-6 md:p-8 shadow-[0_8px_20px_rgba(122,90,58,0.04)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-neutral-100 dark:border-neutral-800 transition-all duration-500 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_29px,#e8f3f5_30px)] dark:bg-none"
              style={{ backgroundSize: "100% 30px" }}
            >
              {/* Binder Rings Decor */}
              <div className="absolute left-6 top-4 flex gap-1.5">
                <span className="block h-2.5 w-2.5 rounded-full bg-[#0f8a7d]/30 dark:bg-[#4ade80]/30" />
                <span className="block h-2.5 w-2.5 rounded-full bg-[#0f8a7d]/30 dark:bg-[#4ade80]/30" />
              </div>
              
              <h2
                className="text-4xl leading-none text-[#0f8a7d] dark:text-[#4ade80] md:text-5xl font-bold transition-colors duration-500"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                FUN Facts
                <br />
                <span className="text-[#e84a8a] dark:text-[#f472b6] text-3xl md:text-4xl transition-colors">About Me ✨</span>
              </h2>
              
              <p
                className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 font-sans transition-colors duration-500"
              >
                UX/UI Designer with a tiny case of imposter syndrome — just a creative
                soul with a passion for coding, books, art, and travelling. Nature is
                my true kingdom. Currently getting lost in the pages of a good book,
                marketing to my community, or experimenting with branding.
              </p>
            </motion.div>

            {/* Sticker Layout */}
            <div className="relative hidden md:block justify-self-center">
              <motion.div
                initial={{ rotate: 8 }}
                whileHover={{ rotate: -2, scale: 1.05 }}
                className="grid h-24 w-24 place-items-center rounded-full border-2 border-dashed border-[#e84a8a]/40 dark:border-[#f472b6]/40 bg-[#fff3a8]/50 dark:bg-[#f472b6]/10 text-[#e84a8a] dark:text-[#f472b6] transition-all duration-500"
              >
                <Smile className="h-12 w-12 text-[#e84a8a] dark:text-[#f472b6] transition-colors" strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* Masonry Layout Grid */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance] relative z-10 px-1">
          {polaroids.map((p, i) => (
            <div key={i} className="break-inside-avoid">
              <PolaroidCard p={p} i={i} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}