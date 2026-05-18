import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contact" className="relative mx-auto max-w-7xl px-6 pb-20">
      <Reveal>
        <div className="glass-card relative overflow-hidden p-10 md:p-16">
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full opacity-60"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="relative grid grid-cols-1 items-end gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-lavender">Let's build</p>
              <h3 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-6xl">
                <span className="text-gradient">Have an idea</span>
                <br />
                <span className="text-glow italic font-light">worth crafting?</span>
              </h3>
              <p className="mt-5 max-w-md text-muted-foreground">
                Open to internships, freelance, and collaborations where design and code
                can finally speak the same language.
              </p>
              <a
                href="mailto:hello@aya.dev"
                className="magnetic-btn mt-8 inline-flex items-center gap-2"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-3 text-sm">
              <SocialRow icon={<Mail className="h-4 w-4" />} label="Email" value="hello@aya.dev" />
              <SocialRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="/in/aya" />
              <SocialRow icon={<Github className="h-4 w-4" />} label="GitHub" value="@aya" />
            </div>
          </div>
          <div className="relative mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <span>© 2026 Aya · Crafted with curiosity in Egypt.</span>
            <span>Designed & coded — every pixel intentional.</span>
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
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href="#"
      className="group flex items-center justify-between rounded-2xl border border-border bg-secondary/40 px-4 py-3 transition hover:border-primary/50 hover:bg-secondary/70"
    >
      <span className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-lavender ring-1 ring-primary/30">
          {icon}
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
          <span className="font-medium text-foreground">{value}</span>
        </span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}