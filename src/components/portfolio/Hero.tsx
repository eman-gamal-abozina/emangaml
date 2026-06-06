import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import portrait from "@/assets/me2.png";
export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 py-24 md:py-32">

      {/* doodles - شخبطات متحركة بلطف حول الشاشة مع دعم درجات النيون في الليل */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute left-[6%] top-[16%] text-[#e84a8a] dark:text-[#f472b6] animate-pulse transition-colors"
          style={{ fontFamily: "var(--font-hand)", fontSize: "2rem", animationDuration: "3s" }}
        >
          ✿
        </div>

        <div
          className="absolute right-[10%] top-[18%] text-[#0f8a7d] dark:text-[#4ade80] animate-bounce transition-colors"
          style={{ fontSize: "2rem", animationDuration: "4s" }}
        >
          ☆
        </div>

        <div
          className="absolute left-[10%] bottom-[18%] text-[#e84a8a] dark:text-[#f472b6] animate-pulse transition-colors"
          style={{ fontFamily: "var(--font-hand)", fontSize: "2rem", animationDuration: "2.5s" }}
        >
          ♥
        </div>
        

        <div
          className="absolute right-[14%] bottom-[14%] text-[#0f8a7d] dark:text-[#4ade80] opacity-80 dark:opacity-60 transition-all"
          style={{ fontFamily: "var(--font-hand)", fontSize: "2rem" }}
        >
          ✦
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col items-center z-10">

        {/* sticky note - الملاحظة الملونة نتركها صفراء دافئة لتبرز كملصق حقيقي في الثيمين */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 mb-8 md:mb-10"
        >
          {/* شريط لاصق أصفر دافئ تثبيتي */}
          <div className="absolute -top-2 left-12 w-16 h-5 bg-[#f7d77f]/60 dark:bg-amber-500/30 rotate-[--8deg] rounded-xs transition-colors" />

          <div className="bg-[#fff3a8] dark:bg-[#eab308]/20 border dark:border-amber-500/30 px-6 py-4 md:px-8 md:py-5 rounded-xl shadow-[0_4px_12px_rgba(122,90,58,0.05)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all">
            <p
              className="text-[#0f8a7d] dark:text-[#4ade80] text-3xl md:text-5xl font-bold transition-colors"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              hey, i'm eman ✨
            </p>
          </div>
        </motion.div>

        {/* polaroid - كارت الصورة الشخصية */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          whileHover={{
            rotate: 1,
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 14
          }}
          className="
            relative
            bg-white
            dark:bg-[#1c1c1e]
            p-3
            pb-6
            md:p-4
            md:pb-7
            rounded-xl
            shadow-[0_20px_40px_rgba(122,90,58,0.08)]
            dark:shadow-[0_25px_50px_rgba(0,0,0,0.5)]
            border border-neutral-100
            dark:border-neutral-800
            max-w-[360px]
            md:max-w-sm
            w-full
            transition-colors
            duration-500
          "
        >
          {/* tapes - أشرطة الواشي تيب تتحول لشفافية ليلية ناعمة في الداكن */}
          <div className="absolute -top-2.5 left-8 h-4.5 w-20 bg-[#f7cfd9]/70 dark:bg-rose-500/20 rotate-[-8deg] rounded-xs transition-colors" />
          <div className="absolute -top-2.5 right-8 h-4.5 w-18 bg-[#bdebe4]/70 dark:bg-emerald-500/20 rotate-[6deg] rounded-xs transition-colors" />

          <div className="overflow-hidden rounded-lg bg-[#fdfaf3] dark:bg-[#141416] transition-colors">
            <img
              src={portrait}
              alt="Eman"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          <p
            className="text-center mt-4 md:mt-5 text-[#0f8a7d] dark:text-[#4ade80] text-2xl md:text-3xl font-bold transition-colors"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            Junior UX/UI Designer🎨
          </p>
        </motion.div>

        {/* notebook card - اللوحة الكبيرة المخططة */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="
            relative
            mt-8 md:mt-10
            max-w-xl
            md:max-w-2xl
            w-full
            bg-white
            dark:bg-[#1c1c1e]
            rounded-2xl
            shadow-[0_10px_30px_rgba(122,90,58,0.05)]
            dark:shadow-[0_20px_45px_rgba(0,0,0,0.4)]
            border border-neutral-100/80
            dark:border-neutral-800
            px-5
            py-6
            md:px-8
            md:py-8
            transition-colors
            duration-500
          "
        >
          {/* خطوط الدفتر الخلفية اللطيفة - نخفي خطوطها الزرقاء بالداكن لتظل مريحة وعميقة بصرياً */}
          <div className="absolute inset-0 rounded-2xl opacity-[0.35] dark:opacity-0 pointer-events-none overflow-hidden transition-opacity">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, #d9e8f0 32px)",
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            {/* <h2
              className="text-[#0f8a7d] dark:text-[#4ade80] text-3xl md:text-5xl font-bold transition-colors"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              UX/UI Designer
            </h2> */}
            <p className="mt-4 md:mt-5 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-sans transition-colors">
             Not the most experienced designer yet, but definitely one of the most eager to learn.
           looking for an opportunity to grow, contribute and innovate.
              {/* I enjoy crafting delightful digital experiences filled
              with thoughtful details, playful interactions, and a
              touch of personality. */}
            </p>

            <p
              className="mt-4 text-[#e84a8a] dark:text-[#f472b6] text-lg md:text-xl font-bold transition-colors"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              welcome to my little scrapbook ✨
            </p>

            {/* أزرار التفاعل المرنة والمنسقة بالخط اليدوي الساحر */}
            <div className="flex flex-wrap justify-center gap-3.5 mt-6 md:mt-8">
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#0f8a7d]
                  dark:bg-[#4ade80]
                  px-6
                  py-2.5
                  text-white
                  dark:text-[#0b2512]
                  text-base
                  font-semibold
                  shadow-xs
                  whitespace-nowrap
                  hover:scale-[1.03]
                  transition-all
                "
                style={{ fontFamily: "var(--font-hand)" }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#story"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#e84a8a]/20
                  dark:border-neutral-800
                  bg-white
                  dark:bg-[#27272a]
                  px-6
                  py-2.5
                  text-slate-700
                  dark:text-slate-300
                  text-base
                  font-semibold
                  whitespace-nowrap
                  hover:bg-[#fff6f9]
                  dark:hover:bg-neutral-800
                  transition-colors
                "
                style={{ fontFamily: "var(--font-hand)" }}
              >
                <Sparkles className="w-4 h-4 text-[#e84a8a] dark:text-[#f472b6] transition-colors" />
                Read My Story
              </a>
            </div>
          </div>
        </motion.div>

        {/* bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 md:mt-8 text-[#0f8a7d] dark:text-[#4ade80] text-center px-4 transition-colors"
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: "1.25rem",
            fontWeight: 600
          }}
        >
          a designer who collects memories, ideas & tiny details ♡
        </motion.p>
      </div>
    </section>
  );
}