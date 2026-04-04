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
];
