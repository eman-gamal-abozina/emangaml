import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

import project1 from "@/assets/Cover Page.jpg";
import project2 from "@/assets/cover0.jpg";
import project3 from "@/assets/slice2.jpg";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tilt: number;
  className: string;
  clipColor: "pink" | "teal" | "yellow";
};

const projects: Project[] = [
  {
    title: "Wa3e App",
    category: "Team Work",
    description:
      "WA3e is a mobile application that supports parents of children with ADHD through articles, communities, and access to specialized doctors.",
    tags: ["UI/UX", "Mobile App", "ADHD", "Team Work"],
    image: project1,
    liveUrl: "https://www.behance.net/gallery/233388907/Wa3ei-(ADHD-App)",
    tilt: -2,
    clipColor: "pink",
    className: "md:col-span-1",
  },
  {
    title: "Kafehaty App",
    category: "UI/UX Design",
    description:
      "A coffee ordering mobile app that brings multiple coffee shops together in one place, making it easy to order your favorite drink from home.",
    tags: ["UI Design", "Mobile App", "Coffee", "UX"],
    image: project2,
    liveUrl: "https://www.behance.net/gallery/237344775/Coffee-Shop-Mobile-App",
    tilt: 2,
    clipColor: "teal",
    className: "md:col-span-1",
  },
  {
    title: "San3a",
    category: "Team Leader • Case Study",
    description:
      "A platform that helps clients quickly find skilled and trusted craftsmen while providing a smooth booking experience.",
    tags: ["Case Study", "UX Research", "Mobile App", "Leadership"],
    image: project3,
    liveUrl: "https://www.behance.net/gallery/244582277/San3a(Craftsmen-App)",
    tilt: -1.5,
    clipColor: "yellow",
    className: "md:col-span-1",
  },
  {
    title: "Yummy Circles",
    category: "Landing Page",
    description:
      "A colorful and engaging donuts landing page featuring a modern UI and playful visual identity.",
    tags: ["Landing Page", "UI Design", "Web Design", "Food"],
    image: project3,
    liveUrl: "https://www.behance.net/gallery/230220809/Donunts-landing-page",
    tilt: 1.5,
    clipColor: "pink",
    className: "md:col-span-1",
  },
];

function PaperClip({ color }: { color: "pink" | "teal" | "yellow" }) {
  const colors = {
    pink: "#e84a8a",
    teal: "#0f8a7d",
    yellow: "#f7d77f",
  };

  return (
    <div 
      className="absolute -top-5 left-10 z-20 pointer-events-none h-14 w-4 opacity-90 dark:opacity-75 transition-transform group-hover:scale-105"
      style={{ transform: "rotate(-5deg)" }}
    >
      <svg viewBox="0 0 24 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path 
          d="M12 2C7.5 2 4 5.5 4 10V54C4 61.5 10 68 17.5 68C23.5 68 28 63.5 28 57.5V18C28 13.5 24.5 10 20 10C16.5 10 13.5 13.5 13.5 17V48C13.5 50.5 15.5 52.5 18 52.5C20.5 52.5 22.5 50.5 22.5 48V22" 
          stroke={colors[color]} 
          strokeWidth="3.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal i={index}>
      <motion.div
        initial={{ rotate: project.tilt }}
        whileHover={{ rotate: 0, scale: 1.02, y: -6 }}
        transition={{ type: "spring", stiffness: 150, damping: 14 }}
        className="group relative mx-auto h-full w-full max-w-md pb-6"
      >
        {/* ورقة كرافت دافئة خلفية بديلة - تتحول لورقة داكنة ناعمة بالليل */}
        <div className="absolute inset-0 bg-[#f4ebd0]/70 dark:bg-[#27272a]/40 rounded-[16px] rotate-2 translate-x-1 translate-y-1 shadow-sm -z-10 border border-neutral-200/40 dark:border-neutral-800/40 transition-colors duration-500" />

        {/* جسم الكارت الرئيسي: بولارويد أبيض دافئ يتحول إلى كارت رمادي داكن ليلي */}
        <div className="relative flex h-full flex-col rounded-[16px] bg-white dark:bg-[#1c1c1e] p-4 pt-7 shadow-[0_10px_25px_rgba(122,90,58,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-neutral-100 dark:border-neutral-800/60 transition-all duration-500">
          
          <PaperClip color={project.clipColor} />

          {/* البادج الملائم للهوية */}
          <span 
            className="absolute right-4 top-4 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors"
            style={{ 
              fontFamily: "var(--font-hand)", 
              fontSize: 14,
              color: project.clipColor === "pink" ? "#e84a8a" : project.clipColor === "teal" ? "#0f8a7d" : "#b48912",
              backgroundColor: project.clipColor === "pink" ? "#fff6f9" : project.clipColor === "teal" ? "#e6f6f4" : "#fdf8e6"
            }}
          >
            {project.category}
          </span>

          {/* الصورة مؤطرة بنعومة مع تعديل الشفافية بالليل */}
          <div className="relative overflow-hidden rounded-[10px] bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800/80 mt-2">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover opacity-95 dark:opacity-85 transition-all duration-500 group-hover:scale-102 group-hover:opacity-100 dark:group-hover:opacity-100"
            />
          </div>

          <div className="mt-4 flex flex-col flex-grow px-1">
            <h3
              className="text-2xl text-slate-800 dark:text-slate-200 font-bold transition-colors group-hover:text-[#0f8a7d] dark:group-hover:text-[#4ade80]"
              style={{ fontFamily: "var(--font-hand)", fontSize: 25 }}
            >
              {project.title}
            </h3>
            
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans flex-grow transition-colors">
              {project.description}
            </p>

            {/* التاغات المكتوبة بخط اليد */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-[#0f8a7d] dark:group-hover:text-[#4ade80] transition-colors"
                  style={{ fontFamily: "var(--font-hand)", fontSize: 16 }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* أزرار تفاعلية */}
            <div className="mt-5 pt-3 border-t border-dashed border-neutral-100 dark:border-neutral-800/60 flex items-center justify-end gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-neutral-800 text-slate-400 dark:text-slate-500 hover:text-[#e84a8a] dark:hover:text-[#f472b6] transition-colors"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-neutral-800 text-slate-400 dark:text-slate-500 hover:text-[#0f8a7d] dark:hover:text-[#4ade80] transition-colors"
                >
                  <ExternalLink className="h-4.5 w-4.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-24 md:pb-32 sm:px-6">
      
      {/* حاوية اللوحة الرئيسية: تدعم الخلفية الكريمية الفاتحة واللون الرمادي الليلي العميق */}
      <div className="relative overflow-hidden rounded-[24px] px-4 py-12 sm:px-8 sm:py-16 md:px-12 bg-[#fffcf6] dark:bg-[#161618] border border-[rgba(122,90,58,0.1)] dark:border-neutral-800/80 shadow-[0_8px_30px_rgba(122,90,58,0.03)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-500">
        
        {/* الشخبطات التزيينية الكيوت */}
        <Sparkles className="pointer-events-none absolute right-12 top-24 h-5 w-5 text-[#0f8a7d]/40 dark:text-[#4ade80]/30 animate-pulse" />
        <Heart className="pointer-events-none absolute left-12 bottom-16 h-5 w-5 text-[#e84a8a]/40 dark:text-[#f472b6]/30 animate-ping" style={{ animationDuration: '4s' }} />
        
        <div
          className="absolute left-[5%] top-[40%] text-[#f7d77f]/40 dark:text-amber-500/20 select-none hidden md:block transition-colors"
          style={{ fontFamily: "var(--font-hand)", fontSize: "2.5rem" }}
        >
          ✿
        </div>
        <div
          className="absolute right-[6%] bottom-[30%] text-[#0f8a7d]/20 dark:text-[#4ade80]/10 select-none hidden md:block transition-colors"
          style={{ fontFamily: "var(--font-hand)", fontSize: "3rem" }}
        >
          ★
        </div>

        {/* الهيدر مع دعم كامل للـ Dark Mode */}
        <Reveal>
          <div className="relative mx-auto mb-16 grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_1.2fr]">
            
            <div className="relative hidden md:flex flex-col items-start justify-center h-full pl-4">
              <span
                className="text-[#e84a8a] dark:text-[#f472b6] tracking-widest uppercase font-bold transition-colors"
                style={{ fontFamily: "var(--font-hand)", fontSize: 18 }}
              >
                ✦ My Creative Showcase ✦
              </span>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1.5 font-mono">// handcrafted with pixel-perfect love.</p>
            </div>

            {/* كارت ورقة العنوان المتكيف مع الوضع الداكن والنهاري */}
            <motion.div
              initial={{ rotate: -1 }}
              whileHover={{ rotate: 0 }}
              className="relative rounded-2xl bg-white dark:bg-[#1c1c1e] p-6 md:p-8 shadow-[0_8px_20px_rgba(122,90,58,0.04)] border border-neutral-100 dark:border-neutral-800/80 transition-all duration-500"
              style={{
                // إخفاء خطوط النوت بوك الزرقاء بالداكن لجمالية التصميم
                backgroundImage: typeof document !== 'undefined' && document.documentElement.classList.contains('dark') 
                  ? 'none' 
                  : "repeating-linear-gradient(to bottom, transparent 0px, transparent 29px, #e8f3f5 30px)",
              }}
            >
              {/* فتحات الدفتر الدائرية */}
              <div className="absolute left-6 md:left-auto md:right-6 top-4 flex gap-1.5">
                <span className="block h-2.5 w-2.5 rounded-full bg-[#0f8a7d]/30 dark:bg-[#4ade80]/30" />
                <span className="block h-2.5 w-2.5 rounded-full bg-[#0f8a7d]/30 dark:bg-[#4ade80]/30" />
              </div>
              
              <h2
                className="text-4xl leading-none text-[#0f8a7d] dark:text-[#4ade80] font-bold transition-colors"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                Selected Work
                <br />
                <span className="text-[#e84a8a] dark:text-[#f472b6] text-3xl md:text-4xl italic">Digital Crafts 🎨</span>
              </h2>
              
              <p
                className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl font-sans transition-colors"
              >
                Here is a collection of my favorite engineering and interface experiments. Each project tells a story of an explicit creative hurdle solved by balancing intuitive, user-centered aesthetics with highly organized, scalable code.
              </p>
            </motion.div>

          </div>
        </Reveal>

        {/* شبكة عرض المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch relative z-10 px-1">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}