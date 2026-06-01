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
    // Generates delicate floating dust motes mimicking paper fibers drifting in ambient room light
    const list: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1, // Subtle organic sizes
      delay: Math.random() * 15,
      duration: 20 + Math.random() * 20, // Slow, relaxed fluid motion for a calming scrapbook aesthetic
      opacity: 0.12 + Math.random() * 0.3,
    }));
    setParticles(list);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background transition-colors duration-500">
      
      {/* Dynamic Notebook sketch grid built directly from the Tailwind v4 custom theme classes */}
      <div className="absolute inset-0 grid-bg opacity-[0.7] dark:opacity-[0.4] transition-opacity duration-500" />
      
      {/* Vignette overlay acting as a soft physical desk lamp shadow across screen edges */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 20%, var(--color-border) 70%, rgba(0, 0, 0, 0.05) 100%)",
        }}
      />
      
      {/* Fluid organic ambient glowing orbs - Swaps seamlessly from warm amber to midnight neon pulses */}
      <div 
        className="absolute rounded-full opacity-40 dark:opacity-[0.06] blur-[100px] transition-all duration-700 mix-blend-screen dark:mix-blend-lighten" 
        style={{ 
          width: 600, 
          height: 600, 
          top: "-10%", 
          left: "-5%", 
          background: "radial-gradient(circle, var(--color-muted) 0%, transparent 70%)" 
        }} 
      />
      <div
        className="absolute rounded-full opacity-30 dark:opacity-[0.04] blur-[120px] transition-all duration-700"
        style={{ 
          width: 500, 
          height: 500, 
          bottom: "10%", 
          right: "-5%", 
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" 
        }}
      />
      
      {/* Micro paper dust particles adapting seamlessly to dark chalk ink and warm sepia ink */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-slate-400/20 dark:bg-primary/20 transition-colors duration-500"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            bottom: -20,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Tactile paper fiber micro-noise overlay wrapper */}
      <div className="noise" />
    </div>
  );
}