/**
 * Life Path Number — Pythagorean numerology.
 *
 * Algorithm (verbatim from numerological tradition; matches every reputable
 * source). Sum the digits of the full birthday MM-DD-YYYY, reducing to a
 * single digit 1-9. The Master Numbers 11, 22, 33 are preserved when they
 * appear at any reduction step — they are not collapsed further.
 *
 * Example: October 5, 1973  →  10-5-1973
 *   month:  1 + 0       = 1
 *   day:    5           = 5
 *   year:   1+9+7+3     = 20 → 2+0 = 2
 *   total:  1 + 5 + 2   = 8  → Life Path 8
 */

export type LifePathNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

const MASTER_NUMBERS = new Set([11, 22, 33]);

/** Reduce a number to a single digit unless it is a Master Number (11/22/33). */
function reduceWithMasters(n: number): number {
  while (n > 9 && !MASTER_NUMBERS.has(n)) {
    n = String(n).split("").reduce((s, d) => s + Number(d), 0);
  }
  return n;
}

/** Sum digits without reducing — used as the inner step. */
function sumDigits(n: number): number {
  return String(n).split("").reduce((s, d) => s + Number(d), 0);
}

export function computeLifePath(month: number, day: number, year: number): LifePathNumber {
  if (
    !Number.isInteger(month) || month < 1 || month > 12 ||
    !Number.isInteger(day)   || day   < 1 || day   > 31 ||
    !Number.isInteger(year)  || year  < 1900 || year > 2100
  ) {
    throw new Error("Invalid date for Life Path calculation.");
  }
  const m = reduceWithMasters(month <= 9 ? month : sumDigits(month));
  const d = reduceWithMasters(day   <= 9 ? day   : sumDigits(day));
  const y = reduceWithMasters(sumDigits(year));
  const total = reduceWithMasters(m + d + y);
  return total as LifePathNumber;
}

export interface LifePathArchetype {
  number: LifePathNumber;
  title: string;
  oneLine: string;
  strengths: string[];
  shadows: string[];
  callingCard: string;
}

// Archetype copy aligned with Claudia's "Imperfect Coach" voice — encouraging,
// growth-oriented, no fear-based framing. Master numbers preserved separately.
export const LIFE_PATH_ARCHETYPES: Record<LifePathNumber, LifePathArchetype> = {
  1: {
    number: 1,
    title: "The Pioneer",
    oneLine: "You're here to lead, originate, and forge new ground.",
    strengths: ["Independent", "Visionary", "Self-starting", "Innovative"],
    shadows: ["Stubbornness", "Loneliness in leadership", "Impatience with slower paths"],
    callingCard: "Trust your first instinct — it's almost always the right one.",
  },
  2: {
    number: 2,
    title: "The Diplomat",
    oneLine: "You're here to bring people together and create harmony.",
    strengths: ["Intuitive", "Empathetic", "Diplomatic", "Patient"],
    shadows: ["Over-giving", "Difficulty with confrontation", "Losing self in others"],
    callingCard: "Your sensitivity is the gift — boundaries are how you protect it.",
  },
  3: {
    number: 3,
    title: "The Communicator",
    oneLine: "You're here to express, inspire, and bring joy to the world.",
    strengths: ["Creative", "Charismatic", "Expressive", "Optimistic"],
    shadows: ["Scattered focus", "Surface-level engagement", "Mood swings"],
    callingCard: "Your voice is your medicine — speak it more, edit it less.",
  },
  4: {
    number: 4,
    title: "The Builder",
    oneLine: "You're here to build structures that outlast you.",
    strengths: ["Disciplined", "Reliable", "Practical", "Loyal"],
    shadows: ["Rigidity", "Workaholism", "Resistance to change"],
    callingCard: "Your steady hand makes other people's dreams possible.",
  },
  5: {
    number: 5,
    title: "The Free Spirit",
    oneLine: "You're here to experience freedom and teach others how to live fully.",
    strengths: ["Adventurous", "Curious", "Adaptable", "Magnetic"],
    shadows: ["Restlessness", "Commitment avoidance", "Overindulgence"],
    callingCard: "Freedom isn't the absence of structure — it's the right structure.",
  },
  6: {
    number: 6,
    title: "The Nurturer",
    oneLine: "You're here to heal, care for, and beautify the world.",
    strengths: ["Compassionate", "Protective", "Service-oriented", "Aesthetic"],
    shadows: ["Martyrdom", "Over-responsibility for others", "Perfectionism"],
    callingCard: "Caring for yourself is not selfish — it's how you sustain caring for everyone else.",
  },
  7: {
    number: 7,
    title: "The Seeker",
    oneLine: "You're here to question, study, and uncover hidden truths.",
    strengths: ["Analytical", "Intuitive", "Spiritually attuned", "Independent thinker"],
    shadows: ["Isolation", "Skepticism turned cynicism", "Over-analysis"],
    callingCard: "Your wisdom only matters when you share it — let people in.",
  },
  8: {
    number: 8,
    title: "The Powerhouse",
    oneLine: "You're here to build wealth, influence, and lasting legacy.",
    strengths: ["Ambitious", "Strategic", "Resilient", "Materially gifted"],
    shadows: ["Control issues", "Workaholism", "Materialism over meaning"],
    callingCard: "Money is energy — direct it where it serves your soul, not just your image.",
  },
  9: {
    number: 9,
    title: "The Humanitarian",
    oneLine: "You're here to serve humanity and complete what others began.",
    strengths: ["Compassionate", "Wise beyond years", "Globally-minded", "Artistic"],
    shadows: ["Self-sacrifice", "Difficulty letting go", "Emotional overwhelm"],
    callingCard: "Endings are your superpower — let things finish so new things can begin.",
  },
  11: {
    number: 11,
    title: "The Illuminator (Master Number)",
    oneLine: "A spiritual messenger here to wake others up.",
    strengths: ["Highly intuitive", "Inspirational", "Visionary", "Channel for higher wisdom"],
    shadows: ["Anxiety", "Self-doubt about the calling", "Burnout from over-channeling"],
    callingCard: "You feel everything for a reason — the world needs your sensitivity.",
  },
  22: {
    number: 22,
    title: "The Master Builder (Master Number)",
    oneLine: "A visionary architect of large-scale dreams made real.",
    strengths: ["Practical visionary", "Disciplined", "Transformational", "Global impact"],
    shadows: ["Crippling self-doubt", "Fear of the scale of your calling", "Perfectionism"],
    callingCard: "Your dreams are big because you were built for big work — start anyway.",
  },
  33: {
    number: 33,
    title: "The Master Teacher (Master Number)",
    oneLine: "A devoted healer and teacher of unconditional love.",
    strengths: ["Profound compassion", "Selfless service", "Spiritual mastery", "Heart-centered leadership"],
    shadows: ["Martyrdom complex", "Burnout from over-giving", "Difficulty receiving"],
    callingCard: "Love is your medicine — the world is your patient. Pace yourself.",
  },
};

export function getArchetype(n: LifePathNumber): LifePathArchetype {
  return LIFE_PATH_ARCHETYPES[n];
}
