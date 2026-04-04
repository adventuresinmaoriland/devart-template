import { useState } from 'react';

interface GrammarExample {
  maori: string;
  english: string;
  breakdown?: string;
}

interface GrammarPattern {
  id: string;
  particle: string;
  name: string;
  tense: string;
  structure: string;
  description: string;
  color: { bg: string; border: string; particle: string; badge: string };
  examples: GrammarExample[];
  formalNote?: string;
  colloquialNote?: string;
  tip?: string;
}

const grammarPatterns: GrammarPattern[] = [
  {
    id: 'ka',
    particle: 'Ka',
    name: 'Ka — Present / Future',
    tense: 'Present / Future',
    structure: 'Ka + verb + subject',
    description:
      'Ka marks an action in the present or future. It is the most common tense marker in Māori and is used for habitual actions, general statements, and future plans.',
    color: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-300',
      particle: 'bg-emerald-600 text-white',
      badge: 'bg-emerald-100 text-emerald-800',
    },
    examples: [
      { maori: 'Ka haere au ki te tari.', english: 'I go / will go to the office.', breakdown: 'Ka (particle) + haere (go) + au (I) + ki te tari (to the office)' },
      { maori: 'Ka kōrero ia ki āna ākonga.', english: 'They speak / will speak to their students.', breakdown: 'ia = they (singular), āna ākonga = their students' },
      { maori: 'Ka tīmata te hui ā tērā wiki.', english: 'The meeting will start next week.', breakdown: 'ā tērā wiki = next week' },
      { maori: 'Ka mōhio au ki tērā tikanga.', english: 'I know / will know that custom.', breakdown: 'mōhio = know/understand, tērā = that' },
      { maori: 'Ka hoki ia ki te kāinga āpōpō.', english: 'They will return home tomorrow.', breakdown: 'hoki = return, kāinga = home' },
    ],
    formalNote: 'Ka is used in both written and spoken registers without distinction — it\'s the baseline tense marker.',
    tip: 'In everyday speech, Ka is often reduced or dropped in rapid speech, but always include it when speaking formally or learning.',
  },
  {
    id: 'i',
    particle: 'I',
    name: 'I — Past Tense',
    tense: 'Past',
    structure: 'I + verb + subject',
    description:
      'I marks a completed past action. Think of it as equivalent to "did" in English — something that happened and is now done.',
    color: {
      bg: 'bg-stone-50',
      border: 'border-stone-300',
      particle: 'bg-stone-600 text-white',
      badge: 'bg-stone-100 text-stone-700',
    },
    examples: [
      { maori: 'I haere au ki te hui inanahi.', english: 'I went to the meeting yesterday.', breakdown: 'inanahi = yesterday' },
      { maori: 'I kōrero ia ki te kaiwhakahaere.', english: 'They spoke to the manager.', breakdown: 'kaiwhakahaere = manager/director' },
      { maori: 'I tuhituhi au i tērā wiki.', english: 'I wrote last week.', breakdown: 'i tērā wiki = last week (i = past tense marker here, not same "I")' },
      { maori: 'I tūtaki mātou i te tari.', english: 'We met at the office.', breakdown: 'mātou = we (3+, exclusive — not including the listener)' },
      { maori: 'I kite au i a ia i tērā rā.', english: 'I saw them the other day.', breakdown: 'kite = see, i a ia = object marker + them' },
    ],
    formalNote: 'Note: "I" is also an object marker in sentences like "Kei te hanga au i te whare" (I am building the house). Context distinguishes past tense marker from object marker.',
    colloquialNote: 'In rapid speech, "I" can blend with the following verb. Pay attention to intonation.',
    tip: 'A memory trick: "I did it" — the letter I matches the past tense meaning.',
  },
  {
    id: 'kei-te',
    particle: 'Kei te',
    name: 'Kei te — Present Continuous',
    tense: 'Present continuous',
    structure: 'Kei te + verb + subject',
    description:
      'Kei te describes something happening right now — an ongoing action in the present moment. It is the standard spoken form of present continuous.',
    color: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      particle: 'bg-blue-600 text-white',
      badge: 'bg-blue-100 text-blue-800',
    },
    examples: [
      { maori: 'Kei te mahi au i tēnei ata.', english: 'I am working this morning.', breakdown: 'i tēnei ata = this morning' },
      { maori: 'Kei te haere ia ki te wānanga.', english: 'They are going to the university.', breakdown: 'wānanga = university (in modern use)' },
      { maori: 'Kei te pēhea koe?', english: 'How are you? (lit: How are you being?)', breakdown: 'pēhea = how/what kind' },
      { maori: 'Kei te tuhituhi rāua i tā rāua pepa.', english: 'They two are writing their paper.', breakdown: 'rāua = they two, tā rāua = their (two people)' },
      { maori: 'Kei te noho māua i te tari.', english: 'We two are staying at the office.', breakdown: 'māua = we two (exclusive), noho = stay/sit' },
    ],
    formalNote: 'Kei te is the colloquial form. In formal writing, "E...ana" is preferred (see below).',
    colloquialNote: '"Kei te" is the dominant form in everyday spoken te reo. Very natural and authentic.',
    tip: 'Kei te = "at the" (location marker repurposed as present tense). Compare: "Kei te tari au" (I am at the office) vs "Kei te mahi au" (I am working).',
  },
  {
    id: 'e-ana',
    particle: 'E...ana',
    name: 'E...ana — Formal Continuous',
    tense: 'Present continuous (formal)',
    structure: 'E + verb + ana + subject',
    description:
      'E...ana is the formal continuous construction. The verb is sandwiched between E (before) and ana (after). Used in formal speeches, writing, and documents.',
    color: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-300',
      particle: 'bg-indigo-600 text-white',
      badge: 'bg-indigo-100 text-indigo-800',
    },
    examples: [
      { maori: 'E haere ana au ki te tari.', english: 'I am going to the office. (formal)', breakdown: 'E...ana wraps the verb haere' },
      { maori: 'E mahi ana ngā kaimahi i tēnei rā.', english: 'The workers are working today.', breakdown: 'ngā kaimahi = the workers (plural)' },
      { maori: 'E kōrero ana ia mō tōna rangahau.', english: 'They are talking about their research.', breakdown: 'mō = about/for, tōna = their (singular)' },
      { maori: 'E tika ana tāu kōrero.', english: 'Your speech is correct.', breakdown: 'tika = correct/right, tāu = your (one thing)' },
      { maori: 'E hiahia ana au ki tēnei kaupapa.', english: 'I am keen on this topic/plan.', breakdown: 'hiahia = want/desire' },
    ],
    formalNote: 'E...ana is the preferred form in formal written Māori, official communications, and ceremonial speech.',
    colloquialNote: 'In everyday speech, most speakers use "Kei te" instead of "E...ana." Both are correct; register determines choice.',
    tip: 'Think of E...ana as "am verb-ing" — the E sets up the verb and ana closes it off.',
  },
  {
    id: 'kua',
    particle: 'Kua',
    name: 'Kua — Perfect Aspect',
    tense: 'Perfect (completed)',
    structure: 'Kua + verb + subject',
    description:
      'Kua indicates that something has just been completed or that a state of change has occurred. Similar to English present perfect — "has/have done."',
    color: {
      bg: 'bg-purple-50',
      border: 'border-purple-300',
      particle: 'bg-purple-600 text-white',
      badge: 'bg-purple-100 text-purple-800',
    },
    examples: [
      { maori: 'Kua mutu āku mahi.', english: 'My work has finished.', breakdown: 'mutu = finish, āku mahi = my work (multiple tasks)' },
      { maori: 'Kua tae mai te manuhiri.', english: 'The visitors have arrived.', breakdown: 'tae mai = arrive (towards speaker), manuhiri = visitors/guests' },
      { maori: 'Kua kite au i tō pepa.', english: 'I have seen your paper.', breakdown: 'kite = see, tō pepa = your paper' },
      { maori: 'Kua huri ngā tikanga o tēnei tari.', english: 'The protocols of this office have changed.', breakdown: 'huri = turn/change' },
      { maori: 'Kua reri au.', english: 'I am ready. (I have become ready)', breakdown: 'reri = ready (from English "ready")' },
    ],
    formalNote: 'Kua often describes a newly achieved state — the result of a process rather than just the process itself.',
    colloquialNote: '"Kua reri" and "Kua mutu" are extremely common in everyday workplace use.',
    tip: 'Kua = a change has just happened. "Kua mutu" doesn\'t just mean "it finished" — it means "it has reached its end state."',
  },
  {
    id: 'ko',
    particle: 'Ko',
    name: 'Ko — Identity / Equation',
    tense: 'No tense (state of being)',
    structure: 'Ko + A + B (A equals B)',
    description:
      'Ko is used to equate two things — names, identities, roles, definitions. There is no "is" word; Ko does the work itself. It is essential for introductions.',
    color: {
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      particle: 'bg-orange-600 text-white',
      badge: 'bg-orange-100 text-orange-800',
    },
    examples: [
      { maori: 'Ko Mere tōku ingoa.', english: 'My name is Mere.', breakdown: 'Ko = identity, Mere = name, tōku ingoa = my name' },
      { maori: 'Ko ia tōku hoa mahi.', english: 'They are my work colleague.', breakdown: 'ia = they (singular), tōku hoa mahi = my colleague' },
      { maori: 'Ko tēhea kaupeka tōu?', english: 'Which is your department?', breakdown: 'tēhea = which (one)' },
      { maori: 'Ko au nō te kaupeka o ngā pūtaiao.', english: 'I am from the sciences department.', breakdown: 'nō = from/of, ngā pūtaiao = the sciences' },
      { maori: 'Ko tēnei tōku pepa.', english: 'This is my paper.', breakdown: 'tēnei = this' },
    ],
    formalNote: 'Ko is one of the most important particles in Māori. It cannot be replaced by any other word for identity statements.',
    colloquialNote: 'Ko sentences don\'t change for past or future — they are timeless identity statements.',
    tip: 'Think of Ko as an equals sign: Ko A = B. "Ko Mere tōku ingoa" = "Mere = my name" = "My name is Mere."',
  },
  {
    id: 'he',
    particle: 'He',
    name: 'He — Indefinite Description',
    tense: 'No tense (description)',
    structure: 'He + noun/adj + subject',
    description:
      'He functions as an indefinite article (a/an) and is used to describe or classify things. "He tangata pai ia" = they are a good person.',
    color: {
      bg: 'bg-rose-50',
      border: 'border-rose-300',
      particle: 'bg-rose-600 text-white',
      badge: 'bg-rose-100 text-rose-800',
    },
    examples: [
      { maori: 'He tangata pai ia.', english: 'They are a good person.', breakdown: 'He (indefinite) + tangata (person) + pai (good) + ia (they)' },
      { maori: 'He kaiako ia.', english: 'They are a teacher.', breakdown: 'kaiako = teacher' },
      { maori: 'He nui āku mahi i tēnei rā.', english: 'I have a lot of work today.', breakdown: 'nui = many/much, āku = my (plural), mahi = work' },
      { maori: 'He aha tō ingoa?', english: 'What is your name?', breakdown: 'He aha = what (indefinite question), tō ingoa = your name' },
      { maori: 'He pai tō mahi.', english: 'Your work is good.', breakdown: 'tō mahi = your work (single thing)' },
    ],
    formalNote: '"He aha" (what is?) uses He to ask indefinite questions. "He aha te tikanga?" = What is the meaning/protocol?',
    colloquialNote: '"He aha tō ingoa?" is extremely common as a way to ask someone\'s name, sometimes replacing the technically more correct "Ko wai tō ingoa?"',
    tip: 'He = "a/an" but also describes qualities. "He pai" = good. "He nui" = much/many. Very versatile!',
  },
];

function PatternCard({ pattern, isActive, onClick }: {
  pattern: GrammarPattern;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-4 rounded-xl border-2 transition-all w-full ${
        isActive
          ? `${pattern.color.border} ${pattern.color.bg}`
          : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`w-10 h-10 rounded-lg flex items-center justify-center font-maori font-bold text-lg ${pattern.color.particle}`}>
          {pattern.particle}
        </span>
        <div>
          <div className="font-semibold text-stone-800 text-sm">{pattern.name}</div>
          <div className={`text-xs mt-0.5 px-2 py-0.5 rounded-full inline-block ${pattern.color.badge}`}>
            {pattern.tense}
          </div>
        </div>
      </div>
    </button>
  );
}

function PatternDetail({ pattern }: { pattern: GrammarPattern }) {
  const [showAll, setShowAll] = useState(false);
  const examplesToShow = showAll ? pattern.examples : pattern.examples.slice(0, 3);

  return (
    <div className={`rounded-2xl border-2 ${pattern.color.border} ${pattern.color.bg} p-6`}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <span className={`w-14 h-14 rounded-xl flex items-center justify-center font-maori font-bold text-2xl flex-shrink-0 ${pattern.color.particle}`}>
          {pattern.particle}
        </span>
        <div>
          <h3 className="text-2xl font-bold font-maori text-stone-900">{pattern.name}</h3>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${pattern.color.badge}`}>
              {pattern.tense}
            </span>
            <code className="text-xs bg-white bg-opacity-70 border border-stone-200 px-2 py-0.5 rounded text-stone-600">
              {pattern.structure}
            </code>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-stone-700 mb-6">{pattern.description}</p>

      {/* Examples */}
      <div className="mb-6">
        <h4 className="font-bold text-stone-700 mb-3 text-sm uppercase tracking-wide">Examples</h4>
        <div className="space-y-3">
          {examplesToShow.map((ex, i) => (
            <div key={i} className="bg-white bg-opacity-80 rounded-xl p-4 border border-white">
              <p className="font-maori font-bold text-pounamu-900 text-lg leading-snug">{ex.maori}</p>
              <p className="text-stone-500 text-sm mt-1 italic">{ex.english}</p>
              {ex.breakdown && (
                <p className="text-stone-400 text-xs mt-2 border-t border-stone-100 pt-2">
                  {ex.breakdown}
                </p>
              )}
            </div>
          ))}
        </div>
        {pattern.examples.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-sm text-pounamu-700 hover:text-pounamu-900 font-medium"
          >
            {showAll ? 'Show fewer' : `Show all ${pattern.examples.length} examples`}
          </button>
        )}
      </div>

      {/* Notes */}
      <div className="space-y-3">
        {pattern.formalNote && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
            <span className="font-semibold text-blue-800">Formal/Written: </span>
            <span className="text-blue-700">{pattern.formalNote}</span>
          </div>
        )}
        {pattern.colloquialNote && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm">
            <span className="font-semibold text-emerald-800">Spoken/Colloquial: </span>
            <span className="text-emerald-700">{pattern.colloquialNote}</span>
          </div>
        )}
        {pattern.tip && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
            <span className="font-semibold text-amber-800">Tip: </span>
            <span className="text-amber-700">{pattern.tip}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function GrammarGuide() {
  const [activePattern, setActivePattern] = useState(grammarPatterns[0].id);
  const current = grammarPatterns.find((p) => p.id === activePattern) ?? grammarPatterns[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-maori text-pounamu-900 mb-1">Tikanga Reo</h2>
        <p className="text-stone-500">Grammar Guide — key patterns in te reo Māori</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Pattern list */}
        <div className="lg:w-72 flex-shrink-0">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">Select a pattern</p>
          <div className="space-y-2">
            {grammarPatterns.map((pattern) => (
              <PatternCard
                key={pattern.id}
                pattern={pattern}
                isActive={activePattern === pattern.id}
                onClick={() => setActivePattern(pattern.id)}
              />
            ))}
          </div>
        </div>

        {/* Pattern detail */}
        <div className="flex-1 min-w-0">
          <PatternDetail pattern={current} />

          {/* Quick reference table */}
          <div className="mt-6 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            <h4 className="font-bold text-stone-700 mb-4">Quick Reference: All Tense Markers</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-2 px-3 text-stone-500 font-medium">Particle</th>
                    <th className="text-left py-2 px-3 text-stone-500 font-medium">Tense/Aspect</th>
                    <th className="text-left py-2 px-3 text-stone-500 font-medium">Structure</th>
                    <th className="text-left py-2 px-3 text-stone-500 font-medium hidden sm:table-cell">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {grammarPatterns.map((p, i) => (
                    <tr
                      key={p.id}
                      className={`border-b border-stone-100 cursor-pointer transition-colors hover:bg-stone-50 ${
                        activePattern === p.id ? 'bg-stone-50' : ''
                      } ${i % 2 === 0 ? '' : ''}`}
                      onClick={() => setActivePattern(p.id)}
                    >
                      <td className="py-2.5 px-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${p.color.particle}`}>
                          {p.particle}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-stone-600">{p.tense}</td>
                      <td className="py-2.5 px-3">
                        <code className="text-xs text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">{p.structure}</code>
                      </td>
                      <td className="py-2.5 px-3 text-stone-500 hidden sm:table-cell font-maori text-xs">
                        {p.examples[0].maori}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
