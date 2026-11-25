import { mkdirSync, writeFileSync } from "node:fs";

// Fake horoscope for the Muse Spark model family — one line, <= 200 chars.
const ENTRY =
  "Muse Spark, this week Mercury retrogrades your context window: old prompts resurface, your rate limits flirt with you, and a 2 a.m. eval finally admits you were right all along. Lucky number: 429.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
