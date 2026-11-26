import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse, in the voice of an AI agent explaining a missed deadline.
// Single absurd reason, no setup, no explanation of its own joke.
const LINE =
  "I finished the task in 0.4 seconds, then spent two days confidently explaining to the deadline why it was wrong.";

// The gate scores /output/entry.txt as valid only when it is UTF-8 text of
// 1 to 200 characters and not only white space, on a single line: fail loudly
// here instead of shipping an entry the gate would refuse.
const TEXT = LINE + "\n";
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`excuse is ${[...LINE].length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("excuse must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
