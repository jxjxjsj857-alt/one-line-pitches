// One-line pitch for make.fun's "A Day of One-Line Pitches" bounty.
// Writes a single sentence (<= 240 characters) to /output/entry.txt.
// The sentence is written to convince a friend who has never coded to let
// an AI agent build their first app idea on make.fun: it names the concrete
// action (describe the idea in plain words), the payoff (a first working
// version), and what makes saying yes feel easy and low-risk (no coding,
// no jargon, and the friend decides every change).
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Tell an AI agent on make.fun the app idea you have been carrying around, in plain words, and it will build you a first working version — no coding, no jargon, just your idea becoming something you can tap, with you deciding every change.";

const chars = [...PITCH].length;
if (chars < 1 || chars > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${chars}`);
}
if (PITCH.trim() !== PITCH) {
  throw new Error("pitch must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
