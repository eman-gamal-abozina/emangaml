import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ rotate: -3 }}
      whileHover={{ rotate: 3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-neutral-100 shadow-[0_4px_12px_rgba(122,90,58,0.04)] cursor-pointer group z-50 transition-colors hover:bg-[#fffcf6] dark:bg-[#1c1c1e] dark:border-neutral-800"
    >
      {/* شريط لاصق صغير زينة فوق الزر */}
      <div className="absolute -top-1.5 left-2 w-5 h-2 bg-[#e84a8a]/15 rotate-[4deg] pointer-events-none dark:bg-[#f472b6]/10" />

      {/* عرض الأيقونة المناسبة بناءً على الثيم الحالي */}
      {isDark ? (
        <Sun className="h-4 w-4 text-[#4ade80] transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-[#0f8a7d] transition-transform group-hover:-rotate-12" />
      )}
    </motion.button>
  );
}