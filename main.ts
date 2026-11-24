import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A house cat's one-star review of its human: specific, deadpan, feline.
const ENTRY =
  "One star. Dinner was four minutes late, so I sat on the warm laptop until the human apologised, then slept in the cardboard box. The expensive bed is a trap, and the human is staff.";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} characters)`);
