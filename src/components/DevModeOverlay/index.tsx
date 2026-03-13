import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "../ui/terminal";

// Konami code: ↑ ↑ ↓ ↓ ← → ← →
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"];

const manifestoLines = [
  "┌─────────────────────────────────────────────┐",
  "│           DEVELOPER MODE ACTIVATED           │",
  "├─────────────────────────────────────────────┤",
  "│                                             │",
  "│  // Principles                              │",
  "│  → Code is read more than it is written.    │",
  "│  → Architecture outlives implementation.    │",
  "│  → Tests are the first users of your code.  │",
  "│  → Simplicity is not the absence of         │",
  "│    complexity — it's the mastery of it.      │",
  "│                                             │",
  "│  // Stack                                   │",
  "│  → Java · Quarkus · Spring Boot             │",
  "│  → PostgreSQL · Kafka · Docker              │",
  "│  → Clean Architecture · DDD · CQRS          │",
  "│  → NestJS · TypeScript (when needed)        │",
  "│                                             │",
  "│  // Constants                               │",
  "│  → F = ma    (Newton's second law)          │",
  "│  → E = mc²   (Mass-energy equivalence)      │",
  "│  → S = k·lnΩ (Boltzmann entropy)            │",
  "│  → ΔG = ΔH - TΔS (Gibbs free energy)       │",
  "│                                             │",
  "│  // Philosophy                              │",
  '│  "The purpose of abstraction is not to be   │',
  '│   vague, but to create a new semantic level  │',
  '│   in which one can be absolutely precise."   │',
  "│   — Edsger W. Dijkstra                      │",
  "│                                             │",
  "│  → https://github.com/BrunoFelixDeSousa     │",
  "│                                             │",
  "└─────────────────────────────────────────────┘",
];

export function DevModeOverlay() {
    const [active, setActive] = useState(false);
  const [inputSeq, setInputSeq] = useState<string[]>([]);
  const [visibleLines, setVisibleLines] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (active && e.key === "Escape") {
        setActive(false);
        setInputSeq([]);
        setVisibleLines(0);
        return;
      }

      const next = [...inputSeq, e.key].slice(-KONAMI.length);
      setInputSeq(next);

      if (next.length === KONAMI.length && next.every((k, i) => k === KONAMI[i])) {
        setActive(true);
        setInputSeq([]);
      }
    },
    [inputSeq, active]
  );

  useEffect(() => {
    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!active) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleLines(0);
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= manifestoLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => {
            setActive(false);
            setVisibleLines(0);
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Terminal
              title="dev://mode"
              showCloseButton
              onClose={() => {
                setActive(false);
                setVisibleLines(0);
              }}
              maxHeight="70vh"
              className="w-full max-w-xl text-xs leading-5 text-primary/90"
            >
              {manifestoLines.slice(0, visibleLines).map((line, i) => (
                <div key={i+1} className="whitespace-pre">
                  {line}
                </div>
              ))}
              {visibleLines < manifestoLines.length && (
                <span className="animate-blink text-primary">▊</span>
              )}
            </Terminal>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}