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
          <span className="text-gradient">aya.dev</span>
        </a>
        <span className="mx-1 hidden h-4 w-px bg-border sm:block" />
        <a href="#bento" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground sm:block">
          Work
        </a>
        <a href="#story" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground sm:block">
          Story
        </a>
        <a href="#contact" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground sm:block">
          Contact
        </a>
        <a
          href="#contact"
          className="ml-1 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary hover:shadow-[0_0_20px_oklch(0.72_0.2_300/0.6)]"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}