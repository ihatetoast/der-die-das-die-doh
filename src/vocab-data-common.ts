import { VOCAB_COMPLETED_1 } from "./data/vocab-data-completed-1.ts"; // THIS IS TOO BIG, BUT IT'LL BE SPLIT
import { VOCAB_NATIONALITIES_A_F } from "./data/vocab-data-nationalities-a-f.ts";
import { VOCAB_NATIONALITIES_G_M } from "./data/vocab-data-nationalities-g-m.ts";
import { VOCAB_NATIONALITIES_N_S } from "./data/vocab-data-nationalities-n-s.ts";
import { VOCAB_NATIONALITIES_T_Z } from "./data/vocab-data-nationalities-t-z.ts";
import { VOCAB_PROFESSIONS } from "./data/vocab-data-professions.ts";
import { VOCAB_SCIENTISTS } from "./data/vocab-data-scientists.ts";
export const VOCABULARY_COMMON = [
  ...VOCAB_COMPLETED_1,

  ...VOCAB_PROFESSIONS,
  ...VOCAB_SCIENTISTS,
];

export const DEMONYMS = [
  VOCAB_NATIONALITIES_A_F,
  VOCAB_NATIONALITIES_G_M,
  VOCAB_NATIONALITIES_N_S,
  VOCAB_NATIONALITIES_T_Z,
];
