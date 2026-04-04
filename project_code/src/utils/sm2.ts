// SM-2 Spaced Repetition Algorithm implementation
// Based on the SuperMemo SM-2 algorithm by Piotr Wozniak

export interface CardData {
  id: string;
  interval: number;       // days until next review
  easeFactor: number;     // ease factor (starts at 2.5)
  repetitions: number;    // number of successful repetitions
  nextReview: number;     // timestamp (ms) of next review
  lastReview: number;     // timestamp (ms) of last review
}

export type Quality = 0 | 1 | 2 | 3 | 4 | 5;
// 0 = complete blackout
// 1 = incorrect, remembered after seeing answer
// 2 = incorrect, easy to recall after seeing answer
// 3 = correct with significant difficulty
// 4 = correct after hesitation
// 5 = perfect response

export function createCard(id: string): CardData {
  return {
    id,
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: Date.now(),
    lastReview: 0,
  };
}

export function applyReview(card: CardData, quality: Quality): CardData {
  const now = Date.now();
  const DAY_MS = 24 * 60 * 60 * 1000;

  let { interval, easeFactor, repetitions } = card;

  if (quality >= 3) {
    // Successful recall
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    // Failed recall - reset
    repetitions = 0;
    interval = 1;
  }

  // Update ease factor
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  // Clamp ease factor between 1.3 and 2.5
  easeFactor = Math.max(1.3, Math.min(2.5, easeFactor));

  // Clamp interval
  interval = Math.max(1, interval);

  return {
    ...card,
    interval,
    easeFactor,
    repetitions,
    nextReview: now + interval * DAY_MS,
    lastReview: now,
  };
}

export function isDue(card: CardData): boolean {
  return Date.now() >= card.nextReview;
}

export function getDueCards<T extends { id: string }>(
  items: T[],
  cards: Record<string, CardData>
): T[] {
  return items.filter((item) => {
    const card = cards[item.id];
    if (!card) return true; // New card, always due
    return isDue(card);
  });
}

export function getCardStatus(card: CardData | undefined): 'new' | 'learning' | 'review' {
  if (!card || card.repetitions === 0) return 'new';
  if (card.repetitions < 3) return 'learning';
  return 'review';
}

export function formatNextReview(card: CardData | undefined): string {
  if (!card || card.lastReview === 0) return 'New';
  const diff = card.nextReview - Date.now();
  const DAY_MS = 24 * 60 * 60 * 1000;
  const HOUR_MS = 60 * 60 * 1000;

  if (diff <= 0) return 'Due now';
  if (diff < HOUR_MS) return 'In < 1 hour';
  if (diff < DAY_MS) return `In ${Math.round(diff / HOUR_MS)} hours`;
  const days = Math.round(diff / DAY_MS);
  return `In ${days} day${days === 1 ? '' : 's'}`;
}
