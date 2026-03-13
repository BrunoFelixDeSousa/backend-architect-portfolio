import { RotateCcw } from "lucide-react";
import { Terminal, TerminalCursor } from "../../ui/terminal";
import { PromptPrefix } from "./PromptPrefix";
import { LINE_COLORS } from "../constants";

interface TerminalDesktopProps {
  lines: Array<{ text: string; type: string; idx: number }>;
  done: boolean;
  replay: () => void;
  terminalBodyRef: React.RefObject<HTMLDivElement | null>;
}

export function TerminalDesktop({ lines, done, replay, terminalBodyRef }: Readonly<TerminalDesktopProps>){
  return (
    <Terminal
      bodyRef={terminalBodyRef}
      title="order-service — quarkus dev"
      maxHeight="300px"
      className="text-[11px] sm:text-xs leading-5 text-left"
      headerAction={
        done ? (
          <button
            onClick={replay}
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-mono text-[10px]"
          >
            <RotateCcw size={10} />
            replay
          </button>
        ) : undefined
      }
    >
      {lines.map(({ text, type, idx }) => (
        <div
          key={idx}
          className={`whitespace-pre ${LINE_COLORS[type] || "text-foreground/80"}`}
        >
          {type === "prompt" ? (
            <span>
              <PromptPrefix />
              <span className="text-foreground/80">{text}</span>
            </span>
          ) : (
            text || "\u00A0"
          )}
        </div>
      ))}

      {!done && <TerminalCursor />}
      {done && (
        <div className="mt-2">
          <TerminalCursor />
        </div>
      )}
    </Terminal>
  );
}
