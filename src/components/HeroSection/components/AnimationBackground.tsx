import { useEffect, useState } from "react";
import { highlightCode } from "../../../lib/highlight";

interface AnimationBackgroundProps {
  codeLines: string[];
}

export function AnimationBackground({ codeLines }: Readonly<AnimationBackgroundProps>) {

  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    async function run() {
      const code = codeLines.join("\n");
      const result = await highlightCode(code);
      setHtml(result);
    }

    run();
  }, [codeLines]);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.1] pointer-events-none select-none">
      <div
        className="animate-code-scroll font-mono text-xs leading-6 whitespace-pre"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}