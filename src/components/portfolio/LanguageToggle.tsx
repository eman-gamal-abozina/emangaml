import { motion } from "framer-motion";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  currentLang: "ar" | "en";
  onToggle: () => void;
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ rotate: -2 }}
      whileHover={{ rotate: 3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center gap-2 rounded-lg bg-white border border-neutral-100 px-3 py-1.5 shadow-[0_4px_12px_rgba(122,90,58,0.04)] cursor-pointer group z-50 transition-colors hover:bg-[#fffcf6]"
    >
      {/* شريط زينة صغير جداً كأنه شريط لاصق يثبت زر اللغة */}
      <div className="absolute -top-1.5 left-4 w-6 h-2 bg-[#0f8a7d]/15 rotate-[-5deg] pointer-events-none" />

      {/* أيقونة الترجمة بلون التيل اللطيف */}
      <Languages className="h-4 w-4 text-[#0f8a7d] group-hover:rotate-12 transition-transform duration-300" />
      
      {/* نص اللغة المخفي/المعروض بخط اليد */}
      <span 
        className="text-sm font-bold text-slate-700 select-none"
        style={{ fontFamily: "var(--font-hand)", fontSize: 15 }}
      >
        {currentLang === "en" ? "العربية" : "English"}
      </span>
    </motion.button>
  );
}