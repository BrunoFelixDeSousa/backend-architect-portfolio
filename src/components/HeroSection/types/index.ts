export interface BootLine {
  text: string;
  type: string;
  delay: number;
}

export interface TerminalStep {
  prompt?: string;
  text: string;
  variant?: "muted" | "primary" | "green";
  isTyped?: boolean;
}

export interface MobileTerminalProps {
  steps: TerminalStep[];
}