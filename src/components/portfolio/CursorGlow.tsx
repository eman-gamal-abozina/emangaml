import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // التحقق من أن الجهاز ليس شاشة لمس (لأن الهالة للفأرة فقط)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 transition-opacity duration-500 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* هالة إضاءة دافئة جداً وناعمة (Warm Highlight) تمتزج مع ملمس الورق الكريمي */}
      <div
        className="rounded-full"
        style={{
          width: 320,
          height: 320,
          // استخدام تدرج كهرماني/عسلي ناعم جداً وخافت بدلاً من النيون البنفسجي
          background:
            "radial-gradient(circle, rgba(244, 235, 208, 0.45) 0%, rgba(253, 250, 243, 0) 70%)",
          // تأثير مزج الألوان لمضاعفة الإحساس بالعمق فوق أوراق الكرافت البيج والكروت البيضاء
          mixBlendMode: "multiply", 
          filter: "blur(15px)",
        }}
      />
    </div>
  );
}