import { PenTool } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      {/* Warm paper-like card that seamlessly transitions into a sleek dark capsule */}
      <nav className="flex items-center gap-2 rounded-full bg-white dark:bg-[#1c1c1e] border border-[rgba(122,90,58,0.12)] dark:border-neutral-800 px-2 py-2 text-sm shadow-[0_8px_24px_rgba(60,40,80,0.06)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-500">
        
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 font-semibold tracking-tight group"
        >
          {/* Logo Circle: Quiet ambient pulse animation */}
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#0f8a7d]/10 dark:bg-[#4ade80]/10 ring-1 ring-[#0f8a7d]/20 dark:ring-[#4ade80]/20 transition-colors">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#0f8a7d]/10 dark:bg-[#4ade80]/10" />
            <PenTool className="h-3 w-3 text-[#0f8a7d] dark:text-[#4ade80] transition-colors" />
          </span>
          {/* Logo Text with handwritten typography */}
          <span 
            className="text-base text-[#2b2b2b] dark:text-slate-200 transition-colors group-hover:text-[#0f8a7d] dark:group-hover:text-[#4ade80]"
            style={{ fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: 18 }}
          >
            eman.design
          </span>
        </a>
        
        {/* Sepia/Dark Divider */}
        <span className="mx-1 hidden h-4 w-px bg-[rgba(122,90,58,0.15)] dark:bg-neutral-800 sm:block transition-colors" />
        
        {/* Navigation links with personalized handwritten layout */}
        <a 
          href="#bento" 
          className="hidden rounded-full px-3 py-1.5 text-slate-500 dark:text-slate-400 transition-colors hover:text-[#0f8a7d] dark:hover:text-[#4ade80] sm:block"
          style={{ fontFamily: "var(--font-hand)", fontSize: 16, fontWeight: 600 }}
        >
          Work
        </a>
        <a 
          href="#story" 
          className="hidden rounded-full px-3 py-1.5 text-slate-500 dark:text-slate-400 transition-colors hover:text-[#0f8a7d] dark:hover:text-[#4ade80] sm:block"
          style={{ fontFamily: "var(--font-hand)", fontSize: 16, fontWeight: 600 }}
        >
          Story
        </a>
        <a 
          href="#contact" 
          className="hidden rounded-full px-3 py-1.5 text-slate-500 dark:text-slate-400 transition-colors hover:text-[#0f8a7d] dark:hover:text-[#4ade80] sm:block"
          style={{ fontFamily: "var(--font-hand)", fontSize: 16, fontWeight: 600 }}
        >
          Contact
        </a>
        
        {/* Interactive 2D Teal Sticker button that depresses on click */}
        <a
          href="mailto:amooonaabozina@gmail.com?subject=Hi%20Eman%20%E2%9C%A8%20%E2%80%94%20Let%27s%20talk%20design&body=Hi%20Eman%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20loved%20it.%20I%27d%20like%20to%20talk%20about%3A%0A%0A%E2%80%A2%20Project%2FRole%3A%20%0A%E2%80%A2%20Timeline%3A%20%0A%E2%80%A2%20Anything%20else%3A%20%0A%0ATalk%20soon%2C%0A"
          className="ml-1 rounded-full bg-[#0f8a7d] dark:bg-[#0f8a7d] px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 shadow-[0_4px_0_#0a5c53] dark:shadow-[0_4px_0_#063d37] hover:translate-y-[2px] hover:shadow-[0_2px_0_#0a5c53] dark:hover:shadow-[0_2px_0_#063d37] active:translate-y-[4px] active:shadow-none"
          style={{ fontFamily: "var(--font-hand)", fontSize: 14, fontWeight: 700 }}
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}