import { ArrowUpRight, Instagram, Linkedin, Mail, Palette, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const MAILTO =
  "mailto:amooonaabozina@gmail.com?subject=Hi%20Eman%20%E2%9C%A8%20%E2%80%94%20Let%27s%20talk%20design&body=Hi%20Eman%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20loved%20it.%20I%27d%20like%20to%20talk%20about%3A%0A%0A%E2%80%A2%20Project%2FRole%3A%20%0A%E2%80%A2%20Timeline%3A%20%0A%E2%80%A2%20Anything%20else%3A%20%0A%0ATalk%20soon%2C%0A";

export function Footer() {
  return (
    <footer id="contact" className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <Reveal>
        {/* صندوق الـ Footer: يدعم الآن اللون الداكن للورق والحدود الليلية */}
        <div 
          className="relative overflow-hidden rounded-[24px] bg-[#fffcf6] dark:bg-[#161618] border border-[rgba(122,90,58,0.12)] dark:border-neutral-800/80 p-8 md:p-14 shadow-[0_12px_40px_rgba(122,90,58,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-colors duration-500"
        >
          {/* خلفية شبكة الدفتر: تقليل الشفافية بالداكن لراحة العين */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.008] transition-opacity duration-500"
            style={{
              backgroundImage: "linear-gradient(#7a5a3a 1px, transparent 1px), linear-gradient(90deg, #7a5a3a 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* طابع بريدي زينة: يتحول لقصاصة داكنة منقطة بالوردي المضيء */}
          <div className="absolute right-8 top-8 hidden md:flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-[#e84a8a]/30 dark:border-[#f472b6]/30 bg-[#fff3a8]/30 dark:bg-[#f472b6]/5 text-[#e84a8a]/40 dark:text-[#f472b6]/50 rotate-12 transition-all">
            <Sparkles className="h-6 w-6" />
          </div>

          <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            
            {/* جهة الدعوة والكتابة */}
            <div>
              <span 
                className="inline-flex items-center gap-1 rounded-full bg-[#e6f6f4] dark:bg-[#4ade80]/10 px-3 py-1 text-xs font-bold text-[#0f8a7d] dark:text-[#4ade80] transition-colors"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                Let's build something beautiful ✨
              </span>
              
              <h3 
                className="mt-4 text-4xl font-bold leading-[1.1] md:text-5xl text-[#0f8a7d] dark:text-[#4ade80] transition-colors"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                Have an idea <br />
                <span className="text-[#e84a8a] dark:text-[#f472b6] italic transition-colors">worth crafting?</span>
              </h3>
              
              {/* تم تحويل النص بالكامل للغة الإنجليزية */}
              <p className="mt-4 max-w-md text-base text-slate-600 dark:text-slate-400 font-sans leading-relaxed transition-colors">
                Always open for internships, freelance opportunities, and creative collaborations where design meets code to tell meaningful stories.
              </p>
              
              {/* زر إرسال الإيميل: يدعم التغير للون النيوني التفاعلي بالداكن */}
              <a 
                href={MAILTO} 
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0f8a7d] dark:bg-[#4ade80] px-5 py-3 text-sm font-bold text-white dark:text-[#0b2512] shadow-md transition-all duration-300 hover:bg-[#1aa094] dark:hover:bg-[#22c55e] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Start a conversation ✉️ <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* جهة روابط التواصل المصممة كطوابع مذكرات */}
            <div className="space-y-3.5">
              <SocialRow icon={<Mail className="h-4 w-4" />} label="Email" value="amooonaabozina@gmail.com" href={MAILTO} accentColor="text-[#0f8a7d] dark:text-[#4ade80]" bgColor="bg-[#e6f6f4] dark:bg-[#4ade80]/10" />
              <SocialRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="in/eman-gamal" href="https://www.linkedin.com/in/eman-gamal-29b9a9291" accentColor="text-[#0f8a7d] dark:text-[#4ade80]" bgColor="bg-[#e6f6f4] dark:bg-[#4ade80]/10" />
              <SocialRow icon={<Palette className="h-4 w-4" />} label="Behance" value="behance.net/eman" href="https://share.google/py2IKeZmZNZRQYs5q" accentColor="text-[#e84a8a] dark:text-[#f472b6]" bgColor="bg-[#fff6f9] dark:bg-[#f472b6]/10" />
              <SocialRow icon={<Instagram className="h-4 w-4" />} label="Instagram" value="@_amooona3_" href="https://www.instagram.com/_amooona3_/" accentColor="text-[#e84a8a] dark:text-[#f472b6]" bgColor="bg-[#fff6f9] dark:bg-[#f472b6]/10" />
            </div>

          </div>

          {/* خط الفاصل السفلي اللطيف المنقط */}
          <div className="relative mt-12 flex flex-col items-center justify-between gap-4 border-t border-dashed border-neutral-200 dark:border-neutral-800 pt-6 text-xs text-slate-500 dark:text-slate-400 font-sans sm:flex-row transition-colors">
            <span className="flex items-center gap-1">
              © 2026 Eman · Crafted with <span className="text-[#e84a8a] dark:text-[#f472b6]">❤️</span> and curiosity in Egypt.
            </span>
            <span style={{ fontFamily: "var(--font-hand)", fontSize: 14 }} className="text-[#0f8a7d] dark:text-[#4ade80] font-bold transition-colors">
              Designed & coded — every pixel intentional. ✨
            </span>
          </div>

        </div>
      </Reveal>
    </footer>
  );
}

function SocialRow({
  icon,
  label,
  value,
  href,
  accentColor,
  bgColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  accentColor: string;
  bgColor: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between rounded-xl border border-neutral-100 dark:border-neutral-800/60 bg-white dark:bg-[#1c1c1e] px-4 py-3 shadow-2xs transition-all duration-300 hover:border-neutral-200 dark:hover:border-neutral-700 hover:-translate-y-0.5 hover:shadow-xs dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
    >
      <span className="flex items-center gap-3.5">
        {/* أيقونة الطابع البريدي الصغير الملون مع دعم الخلفية والألوان الليلية */}
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${bgColor} ${accentColor} border border-transparent group-hover:scale-105 transition-all duration-300`}>
          {icon}
        </span>
        <span>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono leading-none">{label}</span>
          <span className="mt-0.5 block text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{value}</span>
        </span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700 dark:group-hover:text-slate-300" />
    </a>
  );
}