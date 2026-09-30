export interface SentenceStep {
  id: string;
  label: string;
  addition: string;
  additionMeaning: string;
  fullMaori: string;
  fullEnglish: string;
  annotation: AnnotatedPart[];
  note?: string;
}

export interface AnnotatedPart {
  text: string;
  type: 'particle' | 'verb' | 'subject' | 'location' | 'time' | 'purpose' | 'companion' | 'object' | 'connector' | 'plain';
  meaning?: string;
}

export interface SentenceChain {
  id: string;
  title: string;
  description: string;
  steps: SentenceStep[];
  spokenVsWritten?: {
    situation: string;
    written: string;
    spoken: string;
    note: string;
  }[];
}

export const sentenceChains: SentenceChain[] = [
  {
    id: 'chain-001',
    title: 'Ka haere au — Going to the office',
    description: 'Start with a simple sentence and extend it step by step to include destination, time, purpose, and companion.',
    steps: [
      {
        id: 'step-001-1',
        label: 'Base sentence',
        addition: 'Ka haere au',
        additionMeaning: 'I go / I will go',
        fullMaori: 'Ka haere au',
        fullEnglish: 'I go / I will go',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'present/future tense marker' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I (subject)' },
        ],
        note: '"Ka" marks present or future tense. The verb comes before the subject in Māori (VSO word order).',
      },
      {
        id: 'step-001-2',
        label: '+ Destination',
        addition: 'ki te tari',
        additionMeaning: 'to the office',
        fullMaori: 'Ka haere au ki te tari',
        fullEnglish: 'I go to the office',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'tense marker' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki te tari', type: 'location', meaning: 'to the office (ki = to/towards, te = the, tari = office)' },
        ],
        note: '"Ki" marks direction or destination. "Ki te" = to the (when followed by a noun).',
      },
      {
        id: 'step-001-3',
        label: '+ Time',
        addition: 'āpōpō',
        additionMeaning: 'tomorrow',
        fullMaori: 'Ka haere au ki te tari āpōpō',
        fullEnglish: 'I will go to the office tomorrow',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'tense marker' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki te tari', type: 'location', meaning: 'to the office' },
          { text: 'āpōpō', type: 'time', meaning: 'tomorrow' },
        ],
        note: 'Time expressions generally come at the end of the sentence in Māori.',
      },
      {
        id: 'step-001-4',
        label: '+ Purpose',
        addition: 'hei hui',
        additionMeaning: 'for a meeting',
        fullMaori: 'Ka haere au ki te tari āpōpō hei hui',
        fullEnglish: 'I will go to the office tomorrow for a meeting',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'tense marker' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki te tari', type: 'location', meaning: 'to the office' },
          { text: 'āpōpō', type: 'time', meaning: 'tomorrow' },
          { text: 'hei hui', type: 'purpose', meaning: 'for a meeting (hei = for future purpose)' },
        ],
        note: '"Hei" indicates future purpose — something you will do when you arrive.',
      },
      {
        id: 'step-001-5',
        label: '+ Companion',
        addition: 'me ōku hoa mahi',
        additionMeaning: 'with my work colleagues',
        fullMaori: 'Ka haere au ki te tari āpōpō hei hui me ōku hoa mahi',
        fullEnglish: 'I will go to the office tomorrow for a meeting with my work colleagues',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'tense marker' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki te tari', type: 'location', meaning: 'to the office' },
          { text: 'āpōpō', type: 'time', meaning: 'tomorrow' },
          { text: 'hei hui', type: 'purpose', meaning: 'for a meeting' },
          { text: 'me ōku hoa mahi', type: 'companion', meaning: 'with my work colleagues (me = with/and, ōku = my (plural), hoa mahi = work friends)' },
        ],
        note: '"Me" connects companions. "Ōku" is the plural possessive "my" for common/inalienable things.',
      },
    ],
    spokenVsWritten: [
      {
        situation: 'Present continuous',
        written: 'E haere ana au ki te tari',
        spoken: 'Kei te haere au ki te tari',
        note: 'Both mean "I am going to the office." The "E...ana" form is more formal/written; "Kei te" is the everyday spoken form.',
      },
      {
        situation: 'Asking what something is',
        written: 'He aha tāu e hiahia ana?',
        spoken: 'He aha tāu mōu?',
        note: 'Both ask "What do you want?" The written form uses the formal continuous; spoken shortens it considerably.',
      },
    ],
  },
  {
    id: 'chain-002',
    title: 'Kei te mahi au — Talking about your work',
    description: 'Describe what you are doing right now and extend with detail about the task, topic, and reason.',
    steps: [
      {
        id: 'step-002-1',
        label: 'Base sentence',
        addition: 'Kei te mahi au',
        additionMeaning: 'I am working',
        fullMaori: 'Kei te mahi au',
        fullEnglish: 'I am working',
        annotation: [
          { text: 'Kei te', type: 'particle', meaning: 'present continuous marker' },
          { text: 'mahi', type: 'verb', meaning: 'work' },
          { text: 'au', type: 'subject', meaning: 'I' },
        ],
        note: '"Kei te" marks present continuous action — something happening right now.',
      },
      {
        id: 'step-002-2',
        label: '+ Task',
        addition: 'i tētahi pepa',
        additionMeaning: 'on a paper',
        fullMaori: 'Kei te tuhituhi au i tētahi pepa',
        fullEnglish: 'I am writing a paper',
        annotation: [
          { text: 'Kei te', type: 'particle', meaning: 'present continuous' },
          { text: 'tuhituhi', type: 'verb', meaning: 'write' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'i tētahi pepa', type: 'object', meaning: 'a paper (i = object marker, tētahi = a/an, pepa = paper)' },
        ],
        note: '"I" here is the object marker (not past tense). "Tētahi" = "a" (indefinite article for one thing).',
      },
      {
        id: 'step-002-3',
        label: '+ Topic',
        addition: 'mō tōku rangahau',
        additionMeaning: 'about my research',
        fullMaori: 'Kei te tuhituhi au i tētahi pepa mō tōku rangahau',
        fullEnglish: 'I am writing a paper about my research',
        annotation: [
          { text: 'Kei te', type: 'particle', meaning: 'present continuous' },
          { text: 'tuhituhi', type: 'verb', meaning: 'write' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'i tētahi pepa', type: 'object', meaning: 'a paper' },
          { text: 'mō tōku rangahau', type: 'purpose', meaning: 'about/for my research (mō = about/for, tōku = my, rangahau = research)' },
        ],
        note: '"Mō" indicates the topic or purpose. "Tōku" = my (singular possession, common/non-intimate).',
      },
      {
        id: 'step-002-4',
        label: '+ Department',
        addition: 'mō tōku kaupeka',
        additionMeaning: 'for my department',
        fullMaori: 'Kei te tuhituhi au i tētahi pepa mō tōku rangahau mō tōku kaupeka',
        fullEnglish: 'I am writing a paper about my research for my department',
        annotation: [
          { text: 'Kei te', type: 'particle', meaning: 'present continuous' },
          { text: 'tuhituhi', type: 'verb', meaning: 'write' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'i tētahi pepa', type: 'object', meaning: 'a paper' },
          { text: 'mō tōku rangahau', type: 'purpose', meaning: 'about my research' },
          { text: 'mō tōku kaupeka', type: 'connector', meaning: 'for my department' },
        ],
        note: 'Multiple "mō" phrases can stack. In spoken Māori this would often be shortened for natural flow.',
      },
    ],
    spokenVsWritten: [
      {
        situation: 'Asking name',
        written: 'Ko wai tō ingoa?',
        spoken: 'He aha tō ingoa?',
        note: '"Ko wai tō ingoa?" (Who is your name?) is more grammatically precise. "He aha tō ingoa?" (What is your name?) is extremely common in everyday use — both are correct.',
      },
      {
        situation: 'Saying where you are from',
        written: 'Ko Tāmaki Makaurau tōku kāinga.',
        spoken: 'Nō Tāmaki Makaurau au.',
        note: '"Ko" makes an identity statement; "Nō" shows origin/source. Both are used but "Nō...au" flows more naturally in conversation.',
      },
    ],
  },
  {
    id: 'chain-003',
    title: 'Ko au — Making identity statements',
    description: 'Learn to use the "Ko" structure to introduce yourself and state identities.',
    steps: [
      {
        id: 'step-003-1',
        label: 'Base sentence',
        addition: 'Ko au',
        additionMeaning: 'It is me / I am',
        fullMaori: 'Ko au tēnei',
        fullEnglish: 'This is me / Here I am',
        annotation: [
          { text: 'Ko', type: 'particle', meaning: 'identity/equative marker' },
          { text: 'au', type: 'subject', meaning: 'I / me' },
          { text: 'tēnei', type: 'plain', meaning: 'this (near speaker)' },
        ],
        note: '"Ko" links two equal things, like an equals sign. It does not use "is/am/are" as a separate word.',
      },
      {
        id: 'step-003-2',
        label: '+ Name',
        addition: 'Ko [ingoa] tōku ingoa',
        additionMeaning: 'My name is [name]',
        fullMaori: 'Ko Mere tōku ingoa',
        fullEnglish: 'My name is Mere',
        annotation: [
          { text: 'Ko', type: 'particle', meaning: 'identity marker' },
          { text: 'Mere', type: 'subject', meaning: '[a name]' },
          { text: 'tōku ingoa', type: 'plain', meaning: 'my name (tōku = my, ingoa = name)' },
        ],
        note: 'Names and proper nouns follow Ko directly. This is the standard way to introduce yourself.',
      },
      {
        id: 'step-003-3',
        label: '+ Role',
        addition: 'He kaiako au',
        additionMeaning: 'I am a teacher',
        fullMaori: 'Ko Mere tōku ingoa. He kaiako au.',
        fullEnglish: 'My name is Mere. I am a teacher.',
        annotation: [
          { text: 'Ko', type: 'particle', meaning: 'identity marker' },
          { text: 'Mere', type: 'subject', meaning: 'Mere (name)' },
          { text: 'tōku ingoa', type: 'plain', meaning: 'my name' },
          { text: 'He', type: 'particle', meaning: 'indefinite article (a/an) — used with He + noun + subject for descriptions' },
          { text: 'kaiako', type: 'verb', meaning: 'teacher' },
          { text: 'au', type: 'subject', meaning: 'I' },
        ],
        note: '"He + noun + subject" is used for indefinite descriptions: "He kaiako au" = I am a teacher.',
      },
      {
        id: 'step-003-4',
        label: '+ Department',
        addition: 'i te kaupeka o...',
        additionMeaning: 'in the department of...',
        fullMaori: 'Ko Mere tōku ingoa. He kaiako au i te kaupeka o ngā tikanga Māori.',
        fullEnglish: 'My name is Mere. I am a teacher in the Māori studies department.',
        annotation: [
          { text: 'Ko', type: 'particle', meaning: 'identity marker' },
          { text: 'Mere', type: 'subject', meaning: 'Mere' },
          { text: 'tōku ingoa', type: 'plain', meaning: 'my name' },
          { text: 'He kaiako', type: 'particle', meaning: 'a teacher (indefinite)' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'i te kaupeka', type: 'location', meaning: 'in the department (i = at/in for present location)' },
          { text: 'o ngā tikanga Māori', type: 'connector', meaning: 'of Māori studies (o = of, ngā = the plural)' },
        ],
        note: '"O" is the possessive/genitive particle meaning "of." "Ngā" is the plural definite article.',
      },
    ],
  },
  {
    id: 'chain-004',
    title: 'I haere au — Past tense: where I went',
    description: 'Use past tense "I" to talk about what you did and where you went.',
    steps: [
      {
        id: 'step-004-1',
        label: 'Base sentence',
        addition: 'I haere au',
        additionMeaning: 'I went',
        fullMaori: 'I haere au',
        fullEnglish: 'I went',
        annotation: [
          { text: 'I', type: 'particle', meaning: 'past tense marker' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
        ],
        note: '"I" at the start of a sentence marks simple past tense. Do not confuse with "i" (object marker) in the middle of a sentence.',
      },
      {
        id: 'step-004-2',
        label: '+ Destination',
        addition: 'ki te hui',
        additionMeaning: 'to the meeting',
        fullMaori: 'I haere au ki te hui',
        fullEnglish: 'I went to the meeting',
        annotation: [
          { text: 'I', type: 'particle', meaning: 'past tense' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki te hui', type: 'location', meaning: 'to the meeting (ki = to, te = the, hui = meeting)' },
        ],
        note: '"Ki te hui" = to the meeting. "Ki" always marks direction — going towards something.',
      },
      {
        id: 'step-004-3',
        label: '+ When',
        addition: 'inanahi',
        additionMeaning: 'yesterday',
        fullMaori: 'I haere au ki te hui inanahi',
        fullEnglish: 'I went to the meeting yesterday',
        annotation: [
          { text: 'I', type: 'particle', meaning: 'past tense' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki te hui', type: 'location', meaning: 'to the meeting' },
          { text: 'inanahi', type: 'time', meaning: 'yesterday' },
        ],
        note: 'Past time words: "inanahi" (yesterday), "i tērā wiki" (last week), "i tērā marama" (last month).',
      },
      {
        id: 'step-004-4',
        label: '+ With whom',
        addition: 'me tōku tumuaki',
        additionMeaning: 'with my manager',
        fullMaori: 'I haere au ki te hui inanahi me tōku tumuaki',
        fullEnglish: 'I went to the meeting yesterday with my manager',
        annotation: [
          { text: 'I', type: 'particle', meaning: 'past tense' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki te hui', type: 'location', meaning: 'to the meeting' },
          { text: 'inanahi', type: 'time', meaning: 'yesterday' },
          { text: 'me tōku tumuaki', type: 'companion', meaning: 'with my manager (me = with, tōku = my, tumuaki = manager/leader)' },
        ],
        note: '"Me" before a noun means "with" when expressing a companion. "Tōku tumuaki" = my manager/head.',
      },
      {
        id: 'step-004-5',
        label: '+ Outcome',
        addition: 'ā, i pai',
        additionMeaning: 'and it went well',
        fullMaori: 'I haere au ki te hui inanahi me tōku tumuaki, ā, i pai.',
        fullEnglish: 'I went to the meeting yesterday with my manager, and it went well.',
        annotation: [
          { text: 'I', type: 'particle', meaning: 'past tense' },
          { text: 'haere', type: 'verb', meaning: 'go' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki te hui', type: 'location', meaning: 'to the meeting' },
          { text: 'inanahi', type: 'time', meaning: 'yesterday' },
          { text: 'me tōku tumuaki', type: 'companion', meaning: 'with my manager' },
          { text: 'ā,', type: 'connector', meaning: 'and / and then (discourse connector)' },
          { text: 'i pai', type: 'plain', meaning: 'it went well (i = past, pai = good)' },
        ],
        note: '"Ā" (with macron) links two clauses. "I pai" = it was good / it went well.',
      },
    ],
    spokenVsWritten: [
      {
        situation: 'Past tense question',
        written: 'I haere koe ki hea?',
        spoken: 'I haere koe ki whea? / I aha koe?',
        note: '"Ki hea" and "ki whea" both mean "to where" — both are used. "I aha koe?" (what did you do?) is a common shorter alternative.',
      },
      {
        situation: 'Describing how it went',
        written: 'I pai te hui.',
        spoken: 'Āe, i pai. / Ka pai rawa atu!',
        note: 'In casual speech the full subject is often dropped when clear from context. "Ka pai rawa atu" (very good) is an enthusiastic spoken alternative.',
      },
    ],
  },
  {
    id: 'chain-005',
    title: 'Ka kōrero au ki — Talking to someone',
    description: 'Build sentences about speaking and communicating with people.',
    steps: [
      {
        id: 'step-005-1',
        label: 'Base sentence',
        addition: 'Ka kōrero au',
        additionMeaning: 'I will speak / I speak',
        fullMaori: 'Ka kōrero au',
        fullEnglish: 'I will speak / I speak',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'present/future tense marker' },
          { text: 'kōrero', type: 'verb', meaning: 'speak / talk' },
          { text: 'au', type: 'subject', meaning: 'I' },
        ],
        note: '"Kōrero" means to speak, talk, or discuss. It can be both a verb and a noun (kōrero = speech/talk).',
      },
      {
        id: 'step-005-2',
        label: '+ Person',
        addition: 'ki a Hemi',
        additionMeaning: 'to Hemi',
        fullMaori: 'Ka kōrero au ki a Hemi',
        fullEnglish: 'I will speak to Hemi',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'tense marker' },
          { text: 'kōrero', type: 'verb', meaning: 'speak' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki a Hemi', type: 'location', meaning: 'to Hemi (ki = to/towards, a = personal article before proper names)' },
        ],
        note: '"Ki a [name]" = to [person]. The particle "a" is used before personal names and pronouns as the object marker.',
      },
      {
        id: 'step-005-3',
        label: '+ About what',
        addition: 'mō te kaupapa',
        additionMeaning: 'about the project',
        fullMaori: 'Ka kōrero au ki a Hemi mō te kaupapa',
        fullEnglish: 'I will speak to Hemi about the project',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'tense marker' },
          { text: 'kōrero', type: 'verb', meaning: 'speak' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki a Hemi', type: 'location', meaning: 'to Hemi' },
          { text: 'mō te kaupapa', type: 'purpose', meaning: 'about the project (mō = about/for, te = the, kaupapa = project/topic)' },
        ],
        note: '"Mō" is used for "about" when discussing topics of conversation.',
      },
      {
        id: 'step-005-4',
        label: '+ When',
        addition: 'āpōpō',
        additionMeaning: 'tomorrow',
        fullMaori: 'Ka kōrero au ki a Hemi mō te kaupapa āpōpō',
        fullEnglish: 'I will speak to Hemi about the project tomorrow',
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'tense marker' },
          { text: 'kōrero', type: 'verb', meaning: 'speak' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki a Hemi', type: 'location', meaning: 'to Hemi' },
          { text: 'mō te kaupapa', type: 'purpose', meaning: 'about the project' },
          { text: 'āpōpō', type: 'time', meaning: 'tomorrow' },
        ],
        note: 'Time expressions typically follow other extensions.',
      },
      {
        id: 'step-005-5',
        label: '+ Where',
        addition: 'i tōna tari',
        additionMeaning: "at his/her office",
        fullMaori: 'Ka kōrero au ki a Hemi mō te kaupapa āpōpō i tōna tari',
        fullEnglish: "I will speak to Hemi about the project tomorrow at his office",
        annotation: [
          { text: 'Ka', type: 'particle', meaning: 'tense marker' },
          { text: 'kōrero', type: 'verb', meaning: 'speak' },
          { text: 'au', type: 'subject', meaning: 'I' },
          { text: 'ki a Hemi', type: 'location', meaning: 'to Hemi' },
          { text: 'mō te kaupapa', type: 'purpose', meaning: 'about the project' },
          { text: 'āpōpō', type: 'time', meaning: 'tomorrow' },
          { text: 'i tōna tari', type: 'location', meaning: "at his/her office (i = at, tōna = his/her, tari = office)" },
        ],
        note: '"I" before a location means "at" (static location). "Tōna" = his/her — Māori has no grammatical gender.',
      },
    ],
    spokenVsWritten: [
      {
        situation: 'Asking someone to speak',
        written: 'Kōrero mai ki ahau.',
        spoken: 'Kōrero mai!',
        note: '"Ki ahau" (to me) is understood from context in speech. Spoken Māori often drops objects when clear.',
      },
      {
        situation: 'I talked to them',
        written: 'I kōrero au ki a rātou.',
        spoken: 'I kōrero au ki a rātou.',
        note: '"Rātou" (them, 3+) is typically kept as it adds specificity. Contrast with "māua" (just us two) and "tāua" (you and I).',
      },
    ],
  },
  {
    id: 'chain-006',
    title: 'He whakaaro tōku — Sharing an idea',
    description: 'Learn to express opinions, introduce ideas, and build up a contribution in a hui.',
    steps: [
      {
        id: 'step-006-1',
        label: 'Base sentence',
        addition: 'He whakaaro tōku',
        additionMeaning: 'I have a thought / I have an idea',
        fullMaori: 'He whakaaro tōku',
        fullEnglish: 'I have a thought / I have an idea',
        annotation: [
          { text: 'He', type: 'particle', meaning: 'indefinite article (a / there is)' },
          { text: 'whakaaro', type: 'verb', meaning: 'thought / idea' },
          { text: 'tōku', type: 'subject', meaning: 'mine / of mine' },
        ],
        note: '"He [noun] tōku/ōku" = I have [something]. A natural way to introduce yourself before speaking in a hui.',
      },
      {
        id: 'step-006-2',
        label: '+ About what',
        addition: 'mō tēnei kaupapa',
        additionMeaning: 'about this topic',
        fullMaori: 'He whakaaro tōku mō tēnei kaupapa',
        fullEnglish: 'I have a thought about this topic',
        annotation: [
          { text: 'He', type: 'particle', meaning: 'indefinite article' },
          { text: 'whakaaro', type: 'verb', meaning: 'thought / idea' },
          { text: 'tōku', type: 'subject', meaning: 'mine' },
          { text: 'mō tēnei kaupapa', type: 'purpose', meaning: 'about this topic (mō = about, tēnei = this, kaupapa = topic)' },
        ],
        note: '"Tēnei" = this (near the speaker). "Tērā" = that (near the listener or far away).',
      },
      {
        id: 'step-006-3',
        label: '+ State the opinion',
        addition: 'E whakaaro ana au',
        additionMeaning: 'I think / I believe',
        fullMaori: 'He whakaaro tōku mō tēnei kaupapa. E whakaaro ana au,',
        fullEnglish: 'I have a thought about this topic. I think,',
        annotation: [
          { text: 'He whakaaro tōku', type: 'plain', meaning: 'I have a thought' },
          { text: 'mō tēnei kaupapa.', type: 'purpose', meaning: 'about this topic.' },
          { text: 'E', type: 'particle', meaning: 'continuous aspect marker (formal)' },
          { text: 'whakaaro', type: 'verb', meaning: 'think' },
          { text: 'ana', type: 'particle', meaning: 'continuous aspect marker (pairs with E)' },
          { text: 'au,', type: 'subject', meaning: 'I' },
        ],
        note: '"E...ana" is the formal continuous — used here to signal an ongoing belief or opinion. Very natural in formal/hui settings.',
      },
      {
        id: 'step-006-4',
        label: '+ The idea itself',
        addition: 'me whakaaro anō tāua',
        additionMeaning: 'we should think about it again',
        fullMaori: 'He whakaaro tōku mō tēnei kaupapa. E whakaaro ana au, me whakaaro anō tāua.',
        fullEnglish: 'I have a thought about this topic. I think we should think about it again.',
        annotation: [
          { text: 'He whakaaro tōku', type: 'plain', meaning: 'I have a thought' },
          { text: 'mō tēnei kaupapa.', type: 'purpose', meaning: 'about this topic.' },
          { text: 'E whakaaro ana au,', type: 'particle', meaning: 'I think,' },
          { text: 'me', type: 'particle', meaning: 'should (obligation marker before verb)' },
          { text: 'whakaaro', type: 'verb', meaning: 'think / consider' },
          { text: 'anō', type: 'connector', meaning: 'again / also' },
          { text: 'tāua.', type: 'subject', meaning: 'we two (you and I)' },
        ],
        note: '"Me" before a verb = should/ought to. "Me whakaaro" = we should think. "Anō" = again/also.',
      },
    ],
    spokenVsWritten: [
      {
        situation: 'Agreeing',
        written: 'Ka whakaaē au ki tāu kōrero.',
        spoken: 'Āe, ka whakaaē au. / Tino tika!',
        note: '"Ka whakaaē au ki tāu kōrero" is formal — "I agree with your speech." Spoken shortcuts: "Āe" (yes), "Tino tika" (exactly right), "Ka pai rawa atu" (very good).',
      },
      {
        situation: 'Raising a point',
        written: 'He whakaaro tōku mō tērā.',
        spoken: 'He pai... he whakaaro tōku.',
        note: 'In casual speech, a small filler like "he pai" or "āe" before your point is common — it signals you\'re about to contribute.',
      },
    ],
  },
];

// -------------------------------------------------------
// Buildable bases (interactive sentence builder)
// -------------------------------------------------------

export interface BuildOption {
  maori: string;
  english: string;
  parts: AnnotatedPart[];
}

export interface BuildCategory {
  id: string;
  label: string;
  labelMaori: string;
  icon: string;
  options: BuildOption[];
}

export interface BuildBase {
  id: string;
  title: string;
  titleEnglish: string;
  description: string;
  annotation: AnnotatedPart[];
  categories: BuildCategory[];
}

export const buildBases: BuildBase[] = [
  {
    id: 'build-001',
    title: 'Ka haere au',
    titleEnglish: 'I am going...',
    description: 'Build a sentence about going somewhere. Pick a destination, time, and purpose.',
    annotation: [
      { text: 'Ka', type: 'particle', meaning: 'present/future tense marker' },
      { text: 'haere', type: 'verb', meaning: 'go' },
      { text: 'au', type: 'subject', meaning: 'I' },
    ],
    categories: [
      {
        id: 'destination',
        label: 'Destination',
        labelMaori: 'Wāhi',
        icon: '📍',
        options: [
          { maori: 'ki te tari', english: 'to the office', parts: [{ text: 'ki te tari', type: 'location', meaning: 'to the office (ki = to, tari = office)' }] },
          { maori: 'ki te wharekai', english: 'to the cafeteria', parts: [{ text: 'ki te wharekai', type: 'location', meaning: 'to the cafeteria (wharekai = food building)' }] },
          { maori: 'ki te wānanga', english: 'to the university', parts: [{ text: 'ki te wānanga', type: 'location', meaning: 'to the university (wānanga = place of learning)' }] },
          { maori: 'ki kāinga', english: 'home', parts: [{ text: 'ki kāinga', type: 'location', meaning: 'home (ki = to, kāinga = home)' }] },
        ],
      },
      {
        id: 'time',
        label: 'Time',
        labelMaori: 'Wā',
        icon: '🕐',
        options: [
          { maori: 'āpōpō', english: 'tomorrow', parts: [{ text: 'āpōpō', type: 'time', meaning: 'tomorrow' }] },
          { maori: 'ināianei', english: 'right now', parts: [{ text: 'ināianei', type: 'time', meaning: 'right now / this moment' }] },
          { maori: 'i tēnei ata', english: 'this morning', parts: [{ text: 'i tēnei ata', type: 'time', meaning: 'this morning (ata = morning/dawn)' }] },
          { maori: 'i te ahiahi', english: 'this afternoon', parts: [{ text: 'i te ahiahi', type: 'time', meaning: 'in the afternoon (ahiahi = afternoon/evening)' }] },
        ],
      },
      {
        id: 'purpose',
        label: 'Purpose',
        labelMaori: 'Take',
        icon: '🎯',
        options: [
          { maori: 'hei hui', english: 'for a meeting', parts: [{ text: 'hei hui', type: 'purpose', meaning: 'for a meeting (hei = for future purpose, hui = meeting)' }] },
          { maori: 'hei mahi', english: 'to work', parts: [{ text: 'hei mahi', type: 'purpose', meaning: 'to work (hei = purpose, mahi = work)' }] },
          { maori: 'hei kai', english: 'to eat', parts: [{ text: 'hei kai', type: 'purpose', meaning: 'to eat (hei = purpose, kai = food/eat)' }] },
          { maori: 'hei āwhina', english: 'to help', parts: [{ text: 'hei āwhina', type: 'purpose', meaning: 'to help (āwhina = help)' }] },
        ],
      },
      {
        id: 'companion',
        label: 'With',
        labelMaori: 'Hoa',
        icon: '👥',
        options: [
          { maori: 'me ōku hoa mahi', english: 'with my colleagues', parts: [{ text: 'me ōku hoa mahi', type: 'companion', meaning: 'with my colleagues (me = with, ōku = my plural, hoa mahi = work friends)' }] },
          { maori: 'me tōku tumuaki', english: 'with my manager', parts: [{ text: 'me tōku tumuaki', type: 'companion', meaning: 'with my manager (tumuaki = head/leader)' }] },
          { maori: 'me ōku ākonga', english: 'with my students', parts: [{ text: 'me ōku ākonga', type: 'companion', meaning: 'with my students (ākonga = learners)' }] },
          { maori: 'me tōku hoa', english: 'with my friend', parts: [{ text: 'me tōku hoa', type: 'companion', meaning: 'with my friend (hoa = friend)' }] },
        ],
      },
    ],
  },
  {
    id: 'build-002',
    title: 'Kei te kōrero au',
    titleEnglish: "I'm talking...",
    description: "Build a sentence about speaking with someone. Add who you're talking to, about what, and when.",
    annotation: [
      { text: 'Kei te', type: 'particle', meaning: 'present continuous marker' },
      { text: 'kōrero', type: 'verb', meaning: 'speak / talk' },
      { text: 'au', type: 'subject', meaning: 'I' },
    ],
    categories: [
      {
        id: 'person',
        label: 'Talking to',
        labelMaori: 'Ki a wai',
        icon: '🗣️',
        options: [
          { maori: 'ki a Hemi', english: 'to Hemi', parts: [{ text: 'ki a Hemi', type: 'location', meaning: 'to Hemi (ki = to, a = personal article before names)' }] },
          { maori: 'ki ōku hoa mahi', english: 'to my colleagues', parts: [{ text: 'ki ōku hoa mahi', type: 'location', meaning: 'to my colleagues' }] },
          { maori: 'ki ōku ākonga', english: 'to my students', parts: [{ text: 'ki ōku ākonga', type: 'location', meaning: 'to my students' }] },
          { maori: 'ki tōku tumuaki', english: 'to my manager', parts: [{ text: 'ki tōku tumuaki', type: 'location', meaning: 'to my manager' }] },
        ],
      },
      {
        id: 'topic',
        label: 'About',
        labelMaori: 'Mō aha',
        icon: '💬',
        options: [
          { maori: 'mō tōku rangahau', english: 'about my research', parts: [{ text: 'mō tōku rangahau', type: 'purpose', meaning: 'about my research (mō = about, rangahau = research)' }] },
          { maori: 'mō tō mātou kaupapa', english: 'about our project', parts: [{ text: 'mō tō mātou kaupapa', type: 'purpose', meaning: 'about our project (mātou = our, exclusive of listener)' }] },
          { maori: 'mō ngā ākonga', english: 'about the students', parts: [{ text: 'mō ngā ākonga', type: 'purpose', meaning: 'about the students (ngā = the plural)' }] },
          { maori: 'mō ngā tikanga', english: 'about the protocols', parts: [{ text: 'mō ngā tikanga', type: 'purpose', meaning: 'about the protocols/customs' }] },
        ],
      },
      {
        id: 'when',
        label: 'When',
        labelMaori: 'Āhea',
        icon: '🕐',
        options: [
          { maori: 'āpōpō', english: 'tomorrow', parts: [{ text: 'āpōpō', type: 'time', meaning: 'tomorrow' }] },
          { maori: 'ā tēnei ata', english: 'this morning', parts: [{ text: 'ā tēnei ata', type: 'time', meaning: 'this morning (ā = at future time)' }] },
          { maori: 'ā tērā wiki', english: 'next week', parts: [{ text: 'ā tērā wiki', type: 'time', meaning: 'next week (ā = at future time, tērā = that, wiki = week)' }] },
          { maori: 'ā Rāhina', english: 'on Monday', parts: [{ text: 'ā Rāhina', type: 'time', meaning: 'on Monday (ā = at/on, Rāhina = Monday)' }] },
        ],
      },
    ],
  },
  {
    id: 'build-003',
    title: 'I mahi au',
    titleEnglish: 'I worked on...',
    description: 'Build a past tense sentence about work you have done. Add the task, when, and who you worked with.',
    annotation: [
      { text: 'I', type: 'particle', meaning: 'past tense marker' },
      { text: 'mahi', type: 'verb', meaning: 'work / do' },
      { text: 'au', type: 'subject', meaning: 'I' },
    ],
    categories: [
      {
        id: 'task',
        label: 'What task',
        labelMaori: 'He aha te mahi',
        icon: '📋',
        options: [
          { maori: 'i tētahi pepa', english: 'on a document', parts: [{ text: 'i tētahi pepa', type: 'object', meaning: 'a paper/document (i = object marker, tētahi = a/an, pepa = paper)' }] },
          { maori: 'i tētahi rīpoata', english: 'on a report', parts: [{ text: 'i tētahi rīpoata', type: 'object', meaning: 'a report (rīpoata = report, from English)' }] },
          { maori: 'i te rangahau', english: 'on the research', parts: [{ text: 'i te rangahau', type: 'object', meaning: 'the research (rangahau = research)' }] },
          { maori: 'i ōku āpiha', english: 'on my files', parts: [{ text: 'i ōku āpiha', type: 'object', meaning: 'my files (āpiha = files/folders)' }] },
        ],
      },
      {
        id: 'when-past',
        label: 'When',
        labelMaori: 'Āhea',
        icon: '🕐',
        options: [
          { maori: 'inanahi', english: 'yesterday', parts: [{ text: 'inanahi', type: 'time', meaning: 'yesterday' }] },
          { maori: 'i tēnei ata', english: 'this morning', parts: [{ text: 'i tēnei ata', type: 'time', meaning: 'this morning' }] },
          { maori: 'i tērā wiki', english: 'last week', parts: [{ text: 'i tērā wiki', type: 'time', meaning: 'last week' }] },
          { maori: 'i tērā marama', english: 'last month', parts: [{ text: 'i tērā marama', type: 'time', meaning: 'last month (marama = month/moon)' }] },
        ],
      },
      {
        id: 'companion-past',
        label: 'With',
        labelMaori: 'Me wai',
        icon: '👥',
        options: [
          { maori: 'me tōku hoa mahi', english: 'with my colleague', parts: [{ text: 'me tōku hoa mahi', type: 'companion', meaning: 'with my colleague' }] },
          { maori: 'me ōku ākonga', english: 'with my students', parts: [{ text: 'me ōku ākonga', type: 'companion', meaning: 'with my students' }] },
          { maori: 'me tōku kaiārahi', english: 'with my supervisor', parts: [{ text: 'me tōku kaiārahi', type: 'companion', meaning: 'with my supervisor (kaiārahi = guide/supervisor)' }] },
          { maori: 'māku anō', english: 'by myself', parts: [{ text: 'māku anō', type: 'companion', meaning: 'by myself (māku = for/by me, anō = alone/self)' }] },
        ],
      },
    ],
  },
];
