import { motion } from "framer-motion";
import { Smile, Sparkles, Star, Flower2, Heart } from "lucide-react";
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
    caption: "This face = when you accidentally walk into a bookshop",
    scribble: "Bookshop Detour",
    tilt: -4,
    tape: "tl",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    src: books,
    alt: "Reading in a quiet library corner",
    caption: "Reading fuels my imagination. A good book and a quiet corner = my kind of party.",
    scribble: "Quiet Corner Club",
    tilt: 3,
    tape: "tr",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: laptop,
    alt: "Laptop with stickers and Turkish coffee",
    caption: "I'm not just a coffee lover — I love making it. The steps, the smell, the sound, it all makes me feel calm and happy.",
    scribble: "Coffee Ritual ✿",
    tilt: -2,
    tape: "top",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: sky,
    alt: "Sky over the Nile",
    caption: "Going for a walk and taking photos of nature makes me feel relaxed.",
    scribble: "Nature Therapy",
    tilt: 2,
    tape: "top",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    src: coffee,
    alt: "Cup of Turkish coffee",
    caption: "Tiny cup, big mood — my favorite kind of pause.",
    scribble: "Slow Sips",
    tilt: 4,
    tape: "tl",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: walk,
    alt: "Walk under flame trees in Egypt",
    caption: "Flame trees, golden hour, and the quiet kind of joy.",
    scribble: "Golden Hour",
    tilt: -3,
    tape: "tr",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: juice,
    alt: "Holding sugarcane juice in a car",
    caption: "Not sure how I would've survived summer without sugarcane juice.",
    scribble: "Summer Survival Kit",
    tilt: 5,
    tape: "top",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: coding,
    alt: "Code on a screen at night",
    caption: "Like every developer ever — hours of coding, and one tiny error ruins everything.",
    scribble: "after 2 hours coding",
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
  // Alternate warm masking-tape colors (peach + mint) for scrapbook vibe
  const tapeBg =
    position === "tr"
      ? "linear-gradient(180deg, #ffe9a8cc, #f6cf7ab3)"
      : position === "tl"
        ? "linear-gradient(180deg, #ffd0d6cc, #f7a8b3b3)"
        : "linear-gradient(180deg, #c8eee3cc, #9dd7c9b3)";
  return (
    <span
      className={base}
      style={{
        ...styles[position],
        background: tapeBg,
        mixBlendMode: "normal",
        boxShadow:
          "0 4px 8px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.4)",
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
        <div
          className="relative flex h-full flex-col rounded-[6px] p-3 pb-5 shadow-[0_14px_30px_rgba(60,40,80,0.18)] ring-1 ring-black/5 transition-all duration-500"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #fdfaf3 100%)",
          }}
        >
          {p.tape && <Tape position={p.tape} />}

          {/* Image */}
          <div className="relative overflow-hidden rounded-[4px] bg-neutral-200">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {p.scribble && (
              <span
                className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[#0f8a7d] ring-1 ring-[#0f8a7d]/30 backdrop-blur-md"
                style={{ fontFamily: "var(--font-hand)", fontSize: 18, fontWeight: 600 }}
              >
                {p.scribble}
              </span>
            )}
          </div>

          {/* Caption */}
          <figcaption
            className="mt-3 px-1 text-center leading-tight"
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: 22,
              color: i % 2 === 0 ? "#e84a8a" : "#0f8a7d",
              fontWeight: 600,
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
      {/* Cream paper board */}
      <div
        className="relative overflow-hidden rounded-[28px] px-5 py-14 sm:px-10 sm:py-20 md:px-16"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 0%, #fff7e8 0%, #fdf5e6 30%, #f9efd9 100%)",
          boxShadow:
            "0 30px 80px rgba(20,10,40,0.45), inset 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {/* Subtle paper grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#7a5a3a 1px, transparent 1px), linear-gradient(90deg, #7a5a3a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Doodle decorations */}
        <Star className="pointer-events-none absolute right-12 top-10 h-7 w-7 text-[#3fb6a3]" strokeWidth={1.5} />
        <Sparkles className="pointer-events-none absolute left-10 top-32 h-5 w-5 text-[#e84a8a]" />
        <Flower2 className="pointer-events-none absolute right-16 top-56 h-7 w-7 text-[#e84a8a]" strokeWidth={1.5} />
        <Heart className="pointer-events-none absolute left-20 bottom-24 h-6 w-6 text-[#a4d96b] fill-[#a4d96b]" />
        <Sparkles className="pointer-events-none absolute right-24 bottom-32 h-5 w-5 text-[#3fb6a3]" />

        {/* Header: notebook page */}
        <Reveal>
          <div className="relative mx-auto mb-16 grid max-w-5xl items-start gap-8 md:grid-cols-[1.1fr_1fr]">
            <motion.div
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 0 }}
              className="relative rounded-[6px] bg-white px-7 pb-8 pt-10 shadow-[0_14px_30px_rgba(60,40,80,0.18)]"
              style={{
                background:
                  "repeating-linear-gradient(180deg, #ffffff 0px, #ffffff 28px, #eaf4f1 29px)",
              }}
            >
              {/* binder rings */}
              <div className="absolute left-6 top-0 flex -translate-y-1/2 gap-3">
                <span className="block h-5 w-5 rounded-full bg-[#3fb6a3] ring-2 ring-white shadow" />
                <span className="block h-5 w-5 rounded-full bg-[#3fb6a3]/70 ring-2 ring-white shadow" />
              </div>
              <h2
                className="text-5xl leading-none text-[#0f8a7d] md:text-6xl"
                style={{ fontFamily: "var(--font-hand)", fontWeight: 700 }}
              >
                FUN Facts
                <br />
                <span className="text-[#1aa094]">About Me</span>
              </h2>
              <p
                className="mt-5 max-w-md text-[17px] leading-[1.5] text-[#2b2b2b]"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                UX/UI Designer with a tiny case of imposter syndrome — just a creative
                soul with a passion for coding, books, art, and travelling. Nature is
                my true kingdom. Currently getting lost in the pages of a good book,
                marketing to my community, or experimenting with branding.
              </p>
            </motion.div>

            {/* Smile sticker */}
            <div className="relative hidden md:block">
              <motion.div
                initial={{ rotate: 8 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="absolute right-6 top-2 grid h-28 w-28 place-items-center rounded-full border-[3px] border-[#e84a8a] bg-white/70 text-[#e84a8a]"
              >
                <Smile className="h-14 w-14" strokeWidth={1.6} />
              </motion.div>
              <span
                className="absolute right-44 top-20 text-[#3fb6a3]"
                style={{ fontFamily: "var(--font-hand)", fontSize: 22 }}
              >
                ✦ a little scrapbook ✦
              </span>
            </div>
          </div>
        </Reveal>

        {/* Scrapbook polaroids */}
        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
          {polaroids.map((p, i) => (
            <div key={i} className="mb-12 break-inside-avoid">
              <PolaroidCard p={p} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}