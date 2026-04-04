import { useState, useMemo, useCallback } from 'react';
import { vocabulary, VocabTheme, VocabItem, THEME_LABELS, vocabByTheme, allVocabIds } from '../data/vocabulary';
import { useSpacedRepetition } from '../hooks/useSpacedRepetition';
import { Quality, formatNextReview } from '../utils/sm2';

type CardState = 'front' | 'back' | 'rating';

const QUALITY_LABELS: { value: Quality; label: string; color: string; description: string }[] = [
  { value: 0, label: '0', color: 'bg-red-600 hover:bg-red-700', description: 'Blackout' },
  { value: 1, label: '1', color: 'bg-red-500 hover:bg-red-600', description: 'Wrong' },
  { value: 2, label: '2', color: 'bg-orange-500 hover:bg-orange-600', description: 'Hard' },
  { value: 3, label: '3', color: 'bg-yellow-500 hover:bg-yellow-600', description: 'OK' },
  { value: 4, label: '4', color: 'bg-emerald-500 hover:bg-emerald-600', description: 'Good' },
  { value: 5, label: '5', color: 'bg-pounamu-600 hover:bg-pounamu-700', description: 'Perfect' },
];

const THEME_STYLE: Record<VocabTheme, { bg: string; border: string; badge: string; dot: string }> = {
  greetings: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
    dot: 'bg-emerald-500',
  },
  workplace: {
    bg: 'bg-earth-50',
    border: 'border-earth-200',
    badge: 'bg-earth-100 text-earth-800',
    dot: 'bg-earth-500',
  },
  actions: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-500',
  },
  time: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-800',
    dot: 'bg-purple-500',
  },
};

function StatusDot({ status }: { status: 'new' | 'learning' | 'review' }) {
  const classes = {
    new: 'bg-slate-400',
    learning: 'bg-yellow-500',
    review: 'bg-emerald-500',
  };
  const labels = { new: 'New', learning: 'Learning', review: 'Review' };
  return (
    <span className="flex items-center gap-1.5 text-xs text-stone-500">
      <span className={`w-2 h-2 rounded-full ${classes[status]}`} />
      {labels[status]}
    </span>
  );
}

export function VocabularyDeck() {
  const [selectedTheme, setSelectedTheme] = useState<VocabTheme | 'all'>('all');
  const [mode, setMode] = useState<'browse' | 'study'>('browse');
  const [cardState, setCardState] = useState<CardState>('front');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionRated, setSessionRated] = useState<string[]>([]);

  const { reviewCard, getDueItems, getStatus, stats, resetAll, getCard } = useSpacedRepetition(allVocabIds);

  const filteredVocab = useMemo(() => {
    if (selectedTheme === 'all') return vocabulary;
    return vocabByTheme[selectedTheme] ?? [];
  }, [selectedTheme]);

  const dueCards = useMemo(() => getDueItems(filteredVocab), [filteredVocab, getDueItems]);
  const studyQueue = useMemo(() => (dueCards.length > 0 ? dueCards : filteredVocab), [dueCards, filteredVocab]);

  const currentCard: VocabItem | undefined = studyQueue[currentIndex];

  const handleShowAnswer = useCallback(() => setCardState('back'), []);

  const handleRate = useCallback(
    (quality: Quality) => {
      if (!currentCard) return;
      reviewCard(currentCard.id, quality);
      setSessionRated((prev) => [...prev, currentCard.id]);
      setCardState('front');
      setCurrentIndex((i) => (i + 1 < studyQueue.length ? i + 1 : 0));
    },
    [currentCard, reviewCard, studyQueue.length]
  );

  const handleStartStudy = () => {
    setMode('study');
    setCurrentIndex(0);
    setCardState('front');
    setSessionRated([]);
  };

  const handleEndStudy = () => {
    setMode('browse');
    setCurrentIndex(0);
    setCardState('front');
  };

  const themes: { id: VocabTheme | 'all'; label: string }[] = [
    { id: 'all', label: 'All themes' },
    ...Object.entries(THEME_LABELS).map(([k, v]) => ({ id: k as VocabTheme, label: v })),
  ];

  if (mode === 'study' && currentCard) {
    const style = THEME_STYLE[currentCard.theme];
    const cardData = getCard(currentCard.id);
    const status = getStatus(currentCard.id);
    const progress = sessionRated.length;
    const total = studyQueue.length;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Study header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-sm text-stone-500 mb-1">
              Card {Math.min(progress + 1, total)} of {total}
            </div>
            <div className="w-48 h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-pounamu-600 rounded-full transition-all duration-300"
                style={{ width: `${total > 0 ? (progress / total) * 100 : 0}%` }}
              />
            </div>
          </div>
          <button onClick={handleEndStudy} className="btn-secondary text-sm">
            End session
          </button>
        </div>

        {/* Flashcard */}
        <div className={`rounded-2xl border-2 ${style.border} ${style.bg} p-8 shadow-sm mb-6`}>
          <div className="flex justify-between items-start mb-6">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${style.badge}`}>
              {THEME_LABELS[currentCard.theme]}
            </span>
            <StatusDot status={status} />
          </div>

          {/* Front: Māori */}
          <div className="text-center mb-6">
            <p className="text-4xl font-maori font-bold text-pounamu-900 mb-2 leading-tight">
              {currentCard.maori}
            </p>
            {currentCard.pronunciation && cardState === 'back' && (
              <p className="text-stone-400 text-sm italic mt-2">/{currentCard.pronunciation}/</p>
            )}
          </div>

          {/* Back: English + details */}
          {cardState !== 'front' && (
            <div className="border-t border-stone-200 pt-6">
              <p className="text-2xl text-stone-700 text-center font-medium mb-4">{currentCard.english}</p>
              {currentCard.notes && (
                <div className="bg-white bg-opacity-70 rounded-lg p-3 text-sm text-stone-600 mb-4">
                  <span className="font-medium text-pounamu-700">Note: </span>
                  {currentCard.notes}
                </div>
              )}
              {currentCard.example && (
                <div className="bg-white bg-opacity-70 rounded-lg p-3">
                  <p className="font-maori text-pounamu-800 font-semibold text-sm">{currentCard.example.maori}</p>
                  <p className="text-stone-500 text-sm mt-1">{currentCard.example.english}</p>
                </div>
              )}
              <div className="text-center mt-4 text-xs text-stone-400">
                Next review: {formatNextReview(cardData)}
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        {cardState === 'front' && (
          <div className="text-center">
            <button onClick={handleShowAnswer} className="btn-primary text-lg px-10 py-3">
              Show answer
            </button>
          </div>
        )}

        {cardState === 'back' && (
          <div>
            <p className="text-center text-sm text-stone-500 mb-3 font-medium">
              How well did you know this?
            </p>
            <div className="grid grid-cols-6 gap-2">
              {QUALITY_LABELS.map((q) => (
                <button
                  key={q.value}
                  onClick={() => handleRate(q.value)}
                  className={`${q.color} text-white rounded-lg py-3 flex flex-col items-center gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-400`}
                >
                  <span className="text-lg font-bold">{q.label}</span>
                  <span className="text-xs opacity-90">{q.description}</span>
                </button>
              ))}
            </div>
            <p className="text-center text-xs text-stone-400 mt-2">
              0–2 = didn't know · 3–5 = remembered (higher = easier)
            </p>
          </div>
        )}
      </div>
    );
  }

  // Browse mode
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-maori text-pounamu-900 mb-1">Kuputaka</h2>
        <p className="text-stone-500">Vocabulary — spaced repetition flashcards</p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total', value: stats.total, color: 'text-stone-700' },
          { label: 'New', value: stats.new, color: 'text-slate-500' },
          { label: 'Learning', value: stats.learning, color: 'text-yellow-600' },
          { label: 'Due now', value: stats.due, color: 'text-pounamu-700 font-bold' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-stone-200 p-4 text-center shadow-sm">
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-stone-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Study button + reset */}
      <div className="flex gap-3 mb-8">
        <button onClick={handleStartStudy} className="btn-primary flex items-center gap-2">
          <span>Study {dueCards.length > 0 ? dueCards.length : filteredVocab.length} cards</span>
          {dueCards.length > 0 && (
            <span className="bg-earth-400 text-pounamu-900 text-xs px-2 py-0.5 rounded-full font-bold">
              {dueCards.length} due
            </span>
          )}
        </button>
        <button
          onClick={() => { if (confirm('Reset all progress?')) resetAll(); }}
          className="btn-secondary text-sm"
        >
          Reset progress
        </button>
      </div>

      {/* Theme filter */}
      <div className="flex gap-2 flex-wrap mb-6">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTheme(t.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedTheme === t.id
                ? 'bg-pounamu-700 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Vocabulary grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVocab.map((item) => {
          const style = THEME_STYLE[item.theme];
          const status = getStatus(item.id);
          const card = getCard(item.id);
          return (
            <div
              key={item.id}
              className={`rounded-xl border ${style.border} ${style.bg} p-4 card-hover`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${style.badge}`}>
                  {THEME_LABELS[item.theme].split('(')[0].trim()}
                </span>
                <StatusDot status={status} />
              </div>
              <p className="text-xl font-maori font-bold text-pounamu-900 mb-1">{item.maori}</p>
              <p className="text-stone-600 text-sm mb-2">{item.english}</p>
              {item.pronunciation && (
                <p className="text-stone-400 text-xs italic mb-2">/{item.pronunciation}/</p>
              )}
              {item.example && (
                <div className="border-t border-stone-200 pt-2 mt-2">
                  <p className="text-xs font-maori text-pounamu-700">{item.example.maori}</p>
                  <p className="text-xs text-stone-500">{item.example.english}</p>
                </div>
              )}
              <div className="text-xs text-stone-400 mt-2">{formatNextReview(card)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
