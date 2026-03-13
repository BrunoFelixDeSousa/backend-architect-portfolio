import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface TerminalProps extends Omit<HTMLMotionProps<"div">, "children"> {
  title?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  onClose?: () => void;
  maxHeight?: string;
  headerAction?: ReactNode;
  bodyRef?: React.RefObject<HTMLDivElement | null>;
}

const Terminal = forwardRef<HTMLDivElement, TerminalProps>(
  ({ title, children, showCloseButton, onClose, maxHeight = "70vh", headerAction, className, bodyRef, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("terminal-window", className)}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-terminal-green/70" />
            {title && (
              <span className="font-mono text-xs text-muted-foreground ml-2">
                {title}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {showCloseButton && onClose && (
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={14} />
              </button>
            )}
            {headerAction}
          </div>
        </div>

        {/* Content */}
        <div
          ref={bodyRef}
          className="p-4 font-mono text-sm overflow-y-auto whitespace-pre"
          style={{ maxHeight, minHeight: maxHeight }}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);

Terminal.displayName = "Terminal";

// Subcomponente para linhas de terminal com estilo de prompt
interface TerminalLineProps {
  prompt?: string;
  text: string;
  variant?: "default" | "primary" | "muted" | "green";
  className?: string;
}

const TerminalLine = ({ prompt = "➜", text, variant = "default", className }: TerminalLineProps) => {
  const textClasses = {
    default: "text-foreground/80",
    primary: "text-primary",
    muted: "text-muted-foreground",
    green: "text-terminal-green",
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <span className="text-terminal-green shrink-0">{prompt}</span>
      <span className={textClasses[variant]}>{text}</span>
    </div>
  );
};

// Componente de cursor piscante
const TerminalCursor = ({ className }: { className?: string }) => (
  <span className={cn("animate-blink text-primary", className)}>▊</span>
);

export { Terminal, TerminalLine, TerminalCursor };
