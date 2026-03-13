import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { codeLines } from "./constants";
import { MobileTerminal } from "./components/TerminalMobile";
import type { BootLine, TerminalStep } from "./types";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { scheduleBootSequence } from "./utils/bootSequence";
import { TerminalDesktop } from "./components/TerminalDesktop";
import { AnimationBackground } from "./components/AnimationBackground";

export function HeroSection() {
  const { t } = useLanguage();
  const [lines, setLines] = useState<Array<BootLine & { idx: number }>>([]);
  const [done, setDone] = useState(false);
  const [runKey, setRunKey] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const mobileSteps: TerminalStep[] = [
    { prompt: "➜", text: t.hero.terminal, variant: "muted" },
    { text: t.hero.terminalOutput, variant: "primary", isTyped: true },
    { text: "✓ Live reload enabled", variant: "green" },
  ];

  useEffect(() => {
    const el = terminalBodyRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [lines]);

  const replay = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setLines([]);
    setDone(false);
    setRunKey(k => k + 1);
  }, []);

  useEffect(() => {
    timersRef.current = scheduleBootSequence(setLines, () => setDone(true));
    return () => timersRef.current.forEach(clearTimeout);
  }, [runKey]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimationBackground codeLines={codeLines} />

      {/* Sobreposição de grade */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Fórmulas ocultas da física */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05] select-none"
        aria-hidden="true"
        style={{ userSelect: "none" }}
      >
        <text x="5%"  y="15%" className="font-mono fill-primary"   fontSize="10">E = mc²</text>
        <text x="80%" y="10%" className="font-mono fill-secondary" fontSize="9">F = ma</text>
        <text x="15%" y="85%" className="font-mono fill-primary"   fontSize="8">∇ × E = -∂B/∂t</text>
        <text x="70%" y="90%" className="font-mono fill-secondary" fontSize="9">S = k·ln(Ω)</text>
        <text x="50%" y="50%" className="font-mono fill-primary"   fontSize="7">ΔG = ΔH - TΔS</text>
        <text x="90%" y="45%" className="font-mono fill-secondary" fontSize="8">λ = h/p</text>
        <text x="3%"  y="55%" className="font-mono fill-primary"   fontSize="9">∂²ψ/∂x² = (1/c²)·∂²ψ/∂t²</text>
        <text x="60%" y="30%" className="font-mono fill-secondary" fontSize="7">π ≈ 3.14159265</text>
        <text x="30%" y="70%" className="font-mono fill-primary"   fontSize="8">φ = (1+√5)/2</text>
        <path d="M 100 500 Q 400 50 700 500"  stroke="hsl(var(--primary))"   strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M 200 600 Q 500 100 800 600" stroke="hsl(var(--secondary))" strokeWidth="0.3" fill="none" opacity="0.3" />
      </svg>

      {/* Gradientes */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      {/* Conteúdo principal */}
      <div className="section-container relative z-10 flex flex-col items-center text-center gap-8 pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-3">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-4 text-glow">
            {t.hero.name}
          </h1>
          <p className="font-mono text-xl sm:text-2xl text-muted-foreground mb-2">{t.hero.role}</p>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">{t.hero.tagline}</p>
        </motion.div>

        {/* Terminal mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full max-w-sm block sm:hidden"
        >
          <MobileTerminal steps={mobileSteps} />
        </motion.div>

        {/* Terminal desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full max-w-2xl hidden sm:block"
        >
          <TerminalDesktop done={done} lines={lines} replay={replay} terminalBodyRef={terminalBodyRef} />
        </motion.div>

        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 font-mono text-sm text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 cursor-pointer"
          aria-label={t.hero.cta}
        >
          {t.hero.cta}
          <ChevronDown size={16} className="animate-float" />
        </motion.button>


      </div>
    </section>
  );
}
