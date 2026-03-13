import { useEffect, useRef, useState } from "react";
import type { MobileTerminalProps } from "../types";
import { Terminal, TerminalCursor } from "../../ui/terminal";

export function MobileTerminal({ steps }: Readonly<MobileTerminalProps>)  {
  // Cada step tem seu próprio texto digitado até o momento
  const [typed, setTyped] = useState<string[]>(steps.map(() => ""));
  const [currentStep, setCurrentStep] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Limpa e reinicia ao montar
    setTyped(steps.map(() => ""));
    setCurrentStep(0);

    const typeStep = (stepIdx: number) => {
      if (stepIdx >= steps.length) return;

      const fullText = steps[stepIdx].prompt
        ? `${steps[stepIdx].prompt} ${steps[stepIdx].text}`
        : steps[stepIdx].text;

      let charIdx = 0;

      const interval = setInterval(() => {
        charIdx++;
        setTyped(prev => {
          const next = [...prev];
          next[stepIdx] = fullText.slice(0, charIdx);
          return next;
        });

        if (charIdx >= fullText.length) {
          clearInterval(interval);
          // Pausa entre steps antes de começar o próximo
          const pause = setTimeout(() => typeStep(stepIdx + 1), 200);
          timersRef.current.push(pause);
        }
      }, 35);

      timersRef.current.push(interval as unknown as ReturnType<typeof setTimeout>);
      setCurrentStep(stepIdx);
    };

    // Começa o primeiro step após pequeno delay inicial
    const start = setTimeout(() => typeStep(0), 300);
    timersRef.current.push(start);

    return () => timersRef.current.forEach(clearTimeout);
  }, [steps]);

  const variantClass: Record<string, string> = {
    muted:   "text-muted-foreground",
    primary: "text-primary whitespace-pre-wrap",
    green:   "text-terminal-green",
  };

  return (
    <Terminal
      title="terminal"
      className="text-xs leading-5 text-left"
      maxHeight="160px"
    >
      {steps.map((step, i) => {
        // Não renderiza steps que ainda não começaram
        if (typed[i].length === 0 && i > currentStep) return null;

        const isCurrentlyTyping = i === currentStep && typed[i].length < (
          step.prompt
            ? `${step.prompt} ${step.text}`.length
            : step.text.length
        );

        return (
          <div
            key={i+1}
            className={variantClass[step.variant ?? "primary"]}
          >
            {/* Colore o prompt separadamente se já passou dessa parte */}
            {step.prompt && typed[i].length > 0 ? (
              <>
                <span className="text-terminal-green">
                  {typed[i].slice(0, step.prompt.length + 1)}
                </span>
                <span className={variantClass[step.variant ?? "primary"]}>
                  {typed[i].slice(step.prompt.length + 1)}
                </span>
              </>
            ) : (
              typed[i]
            )}
            {isCurrentlyTyping && <TerminalCursor />}
          </div>
        );
      })}

      {/* Cursor idle após tudo digitado */}
      {currentStep >= steps.length - 1 &&
        typed[steps.length - 1] === (
          steps.at(-1)?.text
        ) && (
        <TerminalCursor />
      )}
    </Terminal>
  );
};