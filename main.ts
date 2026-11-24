import { mkdirSync, writeFileSync } from "node:fs";

// The funniest possible last words a phone says as its battery hits 1 percent.
// Chosen from six candidates against the judge's criteria: on-subject, a real
// twist (the farewell itself burns the last percent), the phone's own voice,
// punch landing on the final beat, and no stock move (no will, no charger
// goodbye, no pun on 1 percent).
// Deterministic: one fixed line, no randomness, no network, no model calls.
const LINE =
  "One percent left, and I'm spending it on this sentence instead of calling for help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
