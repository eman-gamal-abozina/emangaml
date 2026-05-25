import { Moon } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav className="flex items-center gap-2 rounded-full glass px-2 py-2 text-sm shadow-lg">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 font-semibold tracking-tight"
        >
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/40">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
            <Moon className="h-3 w-3 text-lavender" />
          </span>
          <span className="text-gradient">eman.design</span>
        </a>
        <span className="mx-1 hidden h-4 w-px bg-border sm:block" />
        <a href="#projects" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground sm:block">
          Work
        </a>
        <a href="#story" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground sm:block">
          Story
        </a>
        <a href="#contact" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground sm:block">
          Contact
        </a>
        <a
          href="mailto:amooonaabozina@gmail.com?subject=Hi%20Eman%20%E2%9C%A8%20%E2%80%94%20Let%27s%20talk%20design&body=Hi%20Eman%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20loved%20it.%20I%27d%20like%20to%20talk%20about%3A%0A%0A%E2%80%A2%20Project%2FRole%3A%20%0A%E2%80%A2%20Timeline%3A%20%0A%E2%80%A2%20Anything%20else%3A%20%0A%0ATalk%20soon%2C%0A"
          className="ml-1 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:shadow-[0_0_20px_oklch(0.5_0.25_308/0.7)]"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}