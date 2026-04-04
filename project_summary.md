# Te Reo Māori — Akoranga (University Workplace Language)

## Authors
- Claude (Anthropic)

## Description
Te Reo Māori Akoranga is a web application for university staff who want to integrate te reo Māori into their daily work conversations. Rather than teaching abstract grammar rules in isolation, every lesson is grounded in real workplace scenarios: morning greetings with colleagues, discussing your mahi (work), arranging hui (meetings), and wrapping up the day. Four interconnected modules cover spaced-repetition vocabulary flashcards (SM-2 algorithm, localStorage persistence), a progressive sentence builder with colour-coded grammar annotations and hover tooltips, authentic workplace dialogues with toggleable notes, and a comprehensive grammar guide covering all seven key tense/aspect markers with formal-versus-colloquial comparisons. Built with React, TypeScript, Vite, and Tailwind CSS — all client-side, no backend required. The warm pounamu-green and earth-tone palette reflects Aotearoa's natural environment.

## Link to Prototype
Run locally with:
```
cd project_code && npm install && npm run dev
```

## Example Code
SM-2 spaced repetition algorithm — updates card interval after each review:
```typescript
export function applyReview(card: CardData, quality: Quality): CardData {
  let { interval, easeFactor, repetitions } = card;
  if (quality >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  easeFactor = Math.max(1.3, Math.min(2.5, easeFactor));
  return {
    ...card, interval, easeFactor, repetitions,
    nextReview: Date.now() + interval * 86_400_000,
    lastReview: Date.now(),
  };
}
```

## Links to External Libraries
- [React](https://react.dev/) — UI component framework
- [Vite](https://vitejs.dev/) — fast build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — type-safe JavaScript

## Images & Videos
![Example Image](project_images/cover.jpg?raw=true "Te Reo Māori Akoranga")
