import { useState } from 'react';
import { sentenceChains, SentenceChain, AnnotatedPart } from '../data/sentences';

const ANNOTATION_STYLES: Record<AnnotatedPart['type'], { bg: string; text: string; label: string }> = {
  particle: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'particle' },
  verb: { bg: 'bg-emerald-100', text: 'text-emerald-800', label: 'verb' },
  subject: { bg: 'bg-orange-100', text: 'text-orange-800', label: 'subject' },
  location: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'location' },
  time: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'time' },
  purpose: { bg: 'bg-pink-100', text: 'text-pink-800', label: 'purpose' },
  companion: { bg: 'bg-cyan-100', text: 'text-cyan-800', label: 'companion' },
  object: { bg: 'bg-rose-100', text: 'text-rose-800', label: 'object' },
  connector: { bg: 'bg-indigo-100', text: 'text-indigo-800', label: 'connector' },
  plain: { bg: 'bg-stone-100', text: 'text-stone-700', label: '' },
};

function AnnotatedSentence({ parts }: { parts: AnnotatedPart[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 items-start">
        {parts.map((part, i) => {
          const style = ANNOTATION_STYLES[part.type];
          const isPlain = part.type === 'plain';
          return (
            <div key={i} className="relative group">
              <span
                className={`font-maori font-semibold text-lg px-2 py-1 rounded cursor-default select-none transition-all ${
                  isPlain ? 'text-pounamu-900' : `${style.bg} ${style.text}`
                } ${part.meaning ? 'cursor-help' : ''}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {part.text}
              </span>
              {/* Tooltip */}
              {part.meaning && hoveredIndex === i && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 w-56 bg-stone-900 text-white text-xs rounded-lg p-2.5 shadow-xl pointer-events-none">
                  {style.label && (
                    <div className={`text-xs font-medium mb-1 uppercase tracking-wide ${style.text.replace('text-', 'text-').replace('800', '400')}`}>
                      {style.label}
                    </div>
                  )}
                  <div>{part.meaning}</div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ColorLegend() {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(ANNOTATION_STYLES)
        .filter(([key]) => key !== 'plain')
        .map(([type, style]) => (
          <span key={type} className={`text-xs px-2 py-0.5 rounded ${style.bg} ${style.text} font-medium`}>
            {style.label}
          </span>
        ))}
    </div>
  );
}

function ChainView({ chain }: { chain: SentenceChain }) {
  const [activeStep, setActiveStep] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const stepsToShow = showAll ? chain.steps : chain.steps.slice(0, activeStep + 1);

  return (
    <div>
      {/* Chain header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold font-maori text-pounamu-900 mb-1">{chain.title}</h3>
        <p className="text-stone-500 text-sm">{chain.description}</p>
      </div>

      {/* Step navigator */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {chain.steps.map((step, i) => (
          <button
            key={step.id}
            onClick={() => { setActiveStep(i); setShowAll(false); }}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeStep === i
                ? 'bg-pounamu-700 text-white'
                : i <= activeStep
                ? 'bg-pounamu-100 text-pounamu-700'
                : 'bg-stone-100 text-stone-400'
            }`}
          >
            Step {i + 1}
          </button>
        ))}
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-3 py-1.5 rounded-full text-sm font-medium bg-earth-100 text-earth-800 hover:bg-earth-200 transition-colors"
        >
          {showAll ? 'Show current' : 'Show all'}
        </button>
      </div>

      {/* Steps display */}
      <div className="space-y-4 mb-8">
        {stepsToShow.map((step, i) => (
          <div
            key={step.id}
            className={`rounded-xl border-2 p-5 transition-all ${
              i === activeStep && !showAll
                ? 'border-pounamu-400 bg-pounamu-50 shadow-sm'
                : 'border-stone-200 bg-white'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-6 rounded-full bg-pounamu-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <div>
                <span className="font-semibold text-pounamu-800 text-sm">{step.label}</span>
                {i > 0 && (
                  <span className="ml-2 text-xs bg-earth-100 text-earth-800 px-2 py-0.5 rounded-full">
                    + {step.addition} = {step.additionMeaning}
                  </span>
                )}
              </div>
            </div>

            {/* Annotated sentence */}
            <div className="mb-3">
              <AnnotatedSentence parts={step.annotation} />
            </div>

            {/* English */}
            <p className="text-stone-500 text-sm mb-3 italic">"{step.fullEnglish}"</p>

            {/* Grammar note */}
            {step.note && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                <span className="font-semibold">Note: </span>{step.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      {!showAll && (
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveStep((i) => Math.max(0, i - 1))}
            disabled={activeStep === 0}
            className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          <button
            onClick={() => setActiveStep((i) => Math.min(chain.steps.length - 1, i + 1))}
            disabled={activeStep === chain.steps.length - 1}
            className="btn-primary"
          >
            Next step →
          </button>
        </div>
      )}

      {/* Spoken vs Written */}
      {chain.spokenVsWritten && chain.spokenVsWritten.length > 0 && (
        <div className="border-t border-stone-200 pt-6">
          <h4 className="text-base font-bold text-stone-700 mb-4">
            Formal (tuhituhi) vs Spoken (kōrero) — Key Differences
          </h4>
          <div className="space-y-4">
            {chain.spokenVsWritten.map((pair, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-stone-200">
                <div className="bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-600">
                  {pair.situation}
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
                  <div className="p-4">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                      Written / Formal
                    </div>
                    <p className="font-maori font-semibold text-blue-900 text-lg">{pair.written}</p>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
                      Spoken / Everyday
                    </div>
                    <p className="font-maori font-semibold text-emerald-900 text-lg">{pair.spoken}</p>
                  </div>
                </div>
                <div className="bg-amber-50 px-4 py-2.5 text-sm text-amber-800">
                  {pair.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SentenceBuilder() {
  const [selectedChain, setSelectedChain] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-maori text-pounamu-900 mb-1">Hanga Rerenga</h2>
        <p className="text-stone-500">Sentence Builder — extend sentences step by step</p>
      </div>

      {/* Color key */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-8">
        <p className="text-sm font-semibold text-stone-600 mb-2">Hover over coloured words for meaning. Colour key:</p>
        <ColorLegend />
      </div>

      {/* Chain selector */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {sentenceChains.map((chain, i) => (
          <button
            key={chain.id}
            onClick={() => setSelectedChain(i)}
            className={`text-left px-4 py-2.5 rounded-xl border-2 text-sm transition-all ${
              selectedChain === i
                ? 'border-pounamu-500 bg-pounamu-50 text-pounamu-800 font-semibold'
                : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300'
            }`}
          >
            <div className="font-maori font-medium">{chain.title.split('—')[0].trim()}</div>
            <div className="text-xs text-stone-400 mt-0.5">{chain.title.split('—')[1]?.trim()}</div>
          </button>
        ))}
      </div>

      {/* Active chain */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
        <ChainView chain={sentenceChains[selectedChain]} />
      </div>
    </div>
  );
}
