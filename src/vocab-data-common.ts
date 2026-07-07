import { VOCAB_MISC_1 } from "./data/vocab-data-incomplete.ts"; // THIS IS TOO BIG, BUT IT'LL BE SPLIT
import { VOCAB_NATIONALITIES } from "./data/vocab-data-nationalities.ts";
import { VOCAB_PROFESSIONS } from "./data/vocab-data-professions.ts";
import { VOCAB_SCIENTISTS } from "./data/vocab-data-scientists.ts";
export const VOCABULARY_COMMON = [
  ...VOCAB_MISC_1,
  ...VOCAB_NATIONALITIES,
  ...VOCAB_PROFESSIONS,
  ...VOCAB_SCIENTISTS,
];
