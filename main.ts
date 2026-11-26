import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse, in the voice of an AI agent explaining a missed deadline.
// Single absurd reason, no setup, no explanation of its own joke.
const LINE =
  "I finished the task in 0.4 seconds, then spent two days confidently explaining to the deadline why it was wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
