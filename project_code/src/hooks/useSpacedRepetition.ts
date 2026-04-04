import { useState, useEffect, useCallback } from 'react';
import { CardData, Quality, createCard, applyReview, getDueCards, getCardStatus } from '../utils/sm2';

const STORAGE_KEY = 'te-reo-maori-srs-cards';

export function useSpacedRepetition(itemIds: string[]) {
  const [cards, setCards] = useState<Record<string, CardData>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Persist to localStorage whenever cards change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    } catch (e) {
      console.error('Failed to save SRS data', e);
    }
  }, [cards]);

  const getCard = useCallback(
    (id: string): CardData => {
      return cards[id] ?? createCard(id);
    },
    [cards]
  );

  const reviewCard = useCallback((id: string, quality: Quality) => {
    setCards((prev) => {
      const existing = prev[id] ?? createCard(id);
      const updated = applyReview(existing, quality);
      return { ...prev, [id]: updated };
    });
  }, []);

  const resetCard = useCallback((id: string) => {
    setCards((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setCards({});
  }, []);

  const getDueItems = useCallback(
    <T extends { id: string }>(items: T[]): T[] => {
      return getDueCards(items, cards);
    },
    [cards]
  );

  const getStatus = useCallback(
    (id: string) => getCardStatus(cards[id]),
    [cards]
  );

  const stats = {
    total: itemIds.length,
    new: itemIds.filter((id) => !cards[id] || cards[id].repetitions === 0).length,
    learning: itemIds.filter((id) => {
      const c = cards[id];
      return c && c.repetitions > 0 && c.repetitions < 3;
    }).length,
    review: itemIds.filter((id) => {
      const c = cards[id];
      return c && c.repetitions >= 3;
    }).length,
    due: itemIds.filter((id) => {
      const c = cards[id];
      if (!c) return true;
      return Date.now() >= c.nextReview;
    }).length,
  };

  return {
    cards,
    getCard,
    reviewCard,
    resetCard,
    resetAll,
    getDueItems,
    getStatus,
    stats,
  };
}
