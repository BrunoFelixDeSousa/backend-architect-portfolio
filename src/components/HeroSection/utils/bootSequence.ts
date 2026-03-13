import { BOOT_SEQUENCE } from "../constants";
import type { BootLine } from "../types";

export function scheduleBootSequence(
  setter: React.Dispatch<
    React.SetStateAction<Array<BootLine & { idx: number }>>
  >,
  onDone: () => void,
): ReturnType<typeof setTimeout>[] {
  return BOOT_SEQUENCE.map((line, idx) =>
    setTimeout(() => {
      setter((prev) => [...prev, { ...line, idx }]);
      if (idx === BOOT_SEQUENCE.length - 1) onDone();
    }, line.delay),
  );
}
