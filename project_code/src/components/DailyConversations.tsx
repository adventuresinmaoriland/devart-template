import { useState } from 'react';
import { conversations, Conversation, DialogueLine } from '../data/conversations';

function SpeakerBubble({ line, expanded }: { line: DialogueLine; expanded: boolean }) {
  const isA = line.speaker === 'A';
  return (
    <div className={`flex gap-3 ${isA ? '' : 'flex-row-reverse'}`}>
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
          isA ? 'bg-pounamu-700 text-white' : 'bg-earth-500 text-white'
        }`}
      >
        {line.speaker}
      </div>
      <div className={`max-w-[80%] ${isA ? '' : 'items-end'} flex flex-col gap-1`}>
        {/* Māori */}
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm ${
            isA
              ? 'bg-pounamu-50 border border-pounamu-200 rounded-tl-sm'
              : 'bg-earth-50 border border-earth-200 rounded-tr-sm'
          }`}
        >
          <p className={`font-maori font-semibold text-base leading-snug ${isA ? 'text-pounamu-900' : 'text-earth-900'}`}>
            {line.maori}
          </p>
        </div>
        {/* English */}
        <div className={`px-4 py-2 ${isA ? '' : 'text-right'}`}>
          <p className="text-stone-500 text-sm italic">{line.english}</p>
        </div>
        {/* Grammar note */}
        {expanded && line.notes && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-xs text-amber-800">
            {line.notes}
          </div>
        )}
      </div>
    </div>
  );
}

function ConversationView({ conv }: { conv: Conversation }) {
  const [showNotes, setShowNotes] = useState(false);
  const [showGrammar, setShowGrammar] = useState(false);
  const [showVocab, setShowVocab] = useState(false);

  return (
    <div>
      {/* Scenario info */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-stone-700 mb-1">Scenario</p>
        <p className="text-stone-600 text-sm">{conv.scenario}</p>
        <p className="text-stone-400 text-xs mt-1">📍 {conv.setting}</p>
      </div>

      {/* Controls */}
      <div className="flex gap-2 flex-wrap mb-6">
        <button
          onClick={() => setShowNotes(!showNotes)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            showNotes ? 'bg-amber-500 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          {showNotes ? 'Hide' : 'Show'} line notes
        </button>
        <button
          onClick={() => setShowGrammar(!showGrammar)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            showGrammar ? 'bg-blue-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          {showGrammar ? 'Hide' : 'Show'} grammar notes
        </button>
        <button
          onClick={() => setShowVocab(!showVocab)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            showVocab ? 'bg-pounamu-700 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          {showVocab ? 'Hide' : 'Show'} vocabulary
        </button>
      </div>

      {/* Dialogue */}
      <div className="space-y-4 mb-8">
        {conv.dialogue.map((line, i) => (
          <SpeakerBubble key={i} line={line} expanded={showNotes} />
        ))}
      </div>

      {/* Grammar notes */}
      {showGrammar && (
        <div className="border-t border-stone-200 pt-6 mb-6">
          <h4 className="text-base font-bold text-stone-700 mb-4">Grammar Notes</h4>
          <div className="space-y-3">
            {conv.grammarNotes.map((note, i) => (
              <div key={i} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-maori font-bold text-blue-900 text-lg mb-1">{note.pattern}</p>
                <p className="text-blue-800 text-sm mb-2">{note.explanation}</p>
                {note.example && (
                  <div className="bg-white bg-opacity-70 rounded-lg p-2.5 text-sm">
                    <span className="font-medium text-blue-700">Example: </span>
                    <span className="font-maori text-blue-900">{note.example}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vocabulary */}
      {showVocab && (
        <div className="border-t border-stone-200 pt-6">
          <h4 className="text-base font-bold text-stone-700 mb-4">Key Vocabulary</h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {conv.vocabulary.map((word, i) => (
              <div key={i} className="bg-pounamu-50 border border-pounamu-200 rounded-lg px-4 py-2.5 flex justify-between items-center">
                <span className="font-maori font-semibold text-pounamu-900">{word.maori}</span>
                <span className="text-stone-500 text-sm">{word.english}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function DailyConversations() {
  const [selectedConv, setSelectedConv] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-maori text-pounamu-900 mb-1">Kōrero O Ia Rā</h2>
        <p className="text-stone-500">Daily Talk — university workplace conversations</p>
      </div>

      {/* Conversation selector */}
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {conversations.map((conv, i) => (
          <button
            key={conv.id}
            onClick={() => setSelectedConv(i)}
            className={`text-left p-4 rounded-xl border-2 transition-all ${
              selectedConv === i
                ? 'border-pounamu-500 bg-pounamu-50'
                : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
            }`}
          >
            <p className="font-maori font-bold text-pounamu-900 text-sm leading-snug">{conv.title}</p>
            <p className="text-stone-500 text-xs mt-1">{conv.titleEnglish}</p>
          </button>
        ))}
      </div>

      {/* Active conversation */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-bold font-maori text-pounamu-900">{conversations[selectedConv].title}</h3>
          <p className="text-stone-400 text-sm mt-0.5">{conversations[selectedConv].titleEnglish}</p>
        </div>
        <ConversationView conv={conversations[selectedConv]} />
      </div>

      {/* Speaker key */}
      <div className="flex gap-4 mt-4 text-sm text-stone-500 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-pounamu-700 text-white flex items-center justify-center text-xs font-bold">A</div>
          <span>First speaker</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-earth-500 text-white flex items-center justify-center text-xs font-bold">B</div>
          <span>Second speaker</span>
        </div>
      </div>
    </div>
  );
}
