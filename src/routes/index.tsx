import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/portfolio/AmbientBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { BentoGrid } from "@/components/portfolio/BentoGrid";
import { BehindThePixels } from "@/components/portfolio/BehindThePixels";
import { Footer } from "@/components/portfolio/Footer";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/portfolio/LanguageToggle";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // محاولة قراءة خيار المستخدم السابق من متصفحه، أو التحقق من تفضيلات جهازه
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  // 2. مراقبة التغييرات وتطبيق كلاس dark على عنصر الـ html الرئيسي
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  
  const [lang, setLang] = useState<"ar" | "en">("en");

  const toggleLanguage = () => {
    setLang((prev: string) => (prev === "en" ? "ar" : "en"));
    // هنا يمكنكِ إضافة منطق تغيير النصوص لاحقاً (مثل i18n أو استخدام كائنات نصوص مجهزة)
  };
  
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <div className="fixed top-4 right-4 z-50 md:top-6 md:right-8">
        <LanguageToggle currentLang={lang} onToggle={toggleLanguage} />
      </div>
      {/* 📌 وضع زر تغيير الثيم في أعلى الشاشة بجانب زر اللغة */}
      <div className="fixed top-4 left-4 z-50 md:top-6 md:left-8flex gap-2">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>
      <AmbientBackground />
      <CursorGlow />
      <Nav />
      <Hero />
      <ProjectsSection />
      <BentoGrid />
      
      
      <BehindThePixels />
      <Footer />
    </main>
  );
}
