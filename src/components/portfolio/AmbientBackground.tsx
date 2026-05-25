import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export function AmbientBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const list: Particle[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 20,
      duration: 18 + Math.random() * 18,
      opacity: 0.3 + Math.random() * 0.6,
    }));
    setParticles(list);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-80" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 0%, oklch(0.13 0.02 285 / 0.4) 60%, oklch(0.1 0.015 285) 100%)",
        }}
      />
      {/* Floating orbs */}
      <div className="glow-orb animate-float" style={{ width: 500, height: 500, top: "-10%", left: "-10%" }} />
      <div
        className="glow-orb animate-float"
        style={{ width: 420, height: 420, top: "40%", right: "-10%", animationDelay: "2s" }}
      />
      <div
        className="glow-orb animate-float"
        style={{ width: 380, height: 380, bottom: "-10%", left: "30%", animationDelay: "4s" }}
      />
      {/* Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-lavender"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            bottom: -20,
            boxShadow: "0 0 6px oklch(0.85 0.1 305 / 0.8)",
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <div className="noise" />
    </div>
  );
}