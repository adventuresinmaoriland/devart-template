// Te Reo Māori sentence extenders data
// Each extender includes function, pattern, and worked examples

const EXTENDERS = [
  {
    id: 'hei',
    word: 'hei',
    function: 'Purpose',
    meaning: 'to / in order to',
    category: 'purpose',
    explanation: 'Use hei to explain the purpose or goal of an action. It answers "why are you doing this?" Place it directly after the main clause.',
    pattern: '[action] hei [purpose noun/verb phrase]',
    tip: 'Think: "I'm doing X — hei — the reason why"',
    examples: [
      {
        base: 'Ka haere au ki te toa',
        extension: 'hei hoko kai',
        full: 'Ka haere au ki te toa hei hoko kai',
        baseTranslation: 'I\'m going to the shop',
        translation: 'I\'m going to the shop to buy food'
      },
      {
        base: 'Ka mahi au',
        extension: 'hei utu i ōku nama',
        full: 'Ka mahi au hei utu i ōku nama',
        baseTranslation: 'I\'m working',
        translation: 'I\'m working to pay my bills'
      },
      {
        base: 'Ka ako ia i te reo Māori',
        extension: 'hei kaiako',
        full: 'Ka ako ia i te reo Māori hei kaiako',
        baseTranslation: 'He is learning te reo Māori',
        translation: 'He is learning te reo Māori to become a teacher'
      }
    ]
  },
  {
    id: 'engari',
    word: 'engari',
    function: 'Contrast',
    meaning: 'but / however',
    category: 'contrast',
    explanation: 'Use engari to introduce a contrasting idea, complication, or surprising follow-on. It\'s the most common way to say "but" in te reo.',
    pattern: '[statement], engari [contrasting statement]',
    tip: 'Think: something is true — engari — here\'s the complication',
    examples: [
      {
        base: 'Ka haere au ki te mahi',
        extension: 'engari kāore au e hiahia ana',
        full: 'Ka haere au ki te mahi, engari kāore au e hiahia ana',
        baseTranslation: 'I\'m going to work',
        translation: 'I\'m going to work, but I don\'t want to'
      },
      {
        base: 'He pai te huarere',
        extension: 'engari he māku tonu',
        full: 'He pai te huarere, engari he māku tonu',
        baseTranslation: 'The weather is nice',
        translation: 'The weather is nice, but it\'s still wet'
      },
      {
        base: 'Ka hiahia ana au ki tērā',
        extension: 'engari kāore he wā ōku',
        full: 'Ka hiahia ana au ki tērā, engari kāore he wā ōku',
        baseTranslation: 'I want that',
        translation: 'I want that, but I have no time'
      }
    ]
  },
  {
    id: 'a-muri-i-tera',
    word: 'ā muri i tērā',
    function: 'Sequence',
    meaning: 'after that / then',
    category: 'sequence',
    explanation: 'Use ā muri i tērā to describe what happens next in a sequence of events. It\'s more deliberate and explicit than the shorter ā.',
    pattern: '[first action], ā muri i tērā [next action]',
    tip: 'Think: I\'ll do X first — ā muri i tērā — then this will happen',
    examples: [
      {
        base: 'Ka kai au',
        extension: 'ā muri i tērā ka moe',
        full: 'Ka kai au, ā muri i tērā ka moe',
        baseTranslation: 'I\'ll eat',
        translation: 'I\'ll eat, after that I\'ll sleep'
      },
      {
        base: 'Ka mutu te mahi',
        extension: 'ā muri i tērā ka tūtaki tāua',
        full: 'Ka mutu te mahi, ā muri i tērā ka tūtaki tāua',
        baseTranslation: 'When work finishes',
        translation: 'When work finishes, after that we\'ll meet'
      },
      {
        base: 'Ka horoi au i ngā rīhi',
        extension: 'ā muri i tērā ka mātakitaki pouaka whakaata',
        full: 'Ka horoi au i ngā rīhi, ā muri i tērā ka mātakitaki pouaka whakaata',
        baseTranslation: 'I\'ll wash the dishes',
        translation: 'I\'ll wash the dishes, after that I\'ll watch TV'
      }
    ]
  },
  {
    id: 'a',
    word: 'ā',
    function: 'And then',
    meaning: 'and then / and so',
    category: 'sequence',
    explanation: 'Use ā to link two actions in quick succession. It\'s lighter than "ā muri i tērā" — more like "and then" in natural speech.',
    pattern: '[first action], ā [next action]',
    tip: 'Think of it as a flowing connector — one thing led directly to the next',
    examples: [
      {
        base: 'Ka ara au',
        extension: 'ā ka kaukau',
        full: 'Ka ara au, ā ka kaukau',
        baseTranslation: 'I got up',
        translation: 'I got up and then showered'
      },
      {
        base: 'Ka inu au i taku tī',
        extension: 'ā ka timata ki te mahi',
        full: 'Ka inu au i taku tī, ā ka timata ki te mahi',
        baseTranslation: 'I drank my tea',
        translation: 'I drank my tea and then started work'
      },
      {
        base: 'Ka pānui ia i tēnā pukapuka',
        extension: 'ā ka mārama',
        full: 'Ka pānui ia i tēnā pukapuka, ā ka mārama',
        baseTranslation: 'He read that book',
        translation: 'He read that book and then understood'
      }
    ]
  },
  {
    id: 'na-reira',
    word: 'nā reira',
    function: 'Consequence',
    meaning: 'therefore / so / that\'s why',
    category: 'consequence',
    explanation: 'Use nā reira to show that one thing leads to or causes another. It connects a reason to its result, like "so" or "therefore" in English.',
    pattern: '[reason/situation], nā reira [result/response]',
    tip: 'Think: here\'s the situation — nā reira — here\'s what follows from it',
    examples: [
      {
        base: 'He mākū au',
        extension: 'nā reira ka huri au ki ōku kākahu',
        full: 'He mākū au, nā reira ka huri au ki ōku kākahu',
        baseTranslation: 'I\'m wet',
        translation: 'I\'m wet, so I changed my clothes'
      },
      {
        base: 'He tino hiakai au',
        extension: 'nā reira ka haere au ki te toa',
        full: 'He tino hiakai au, nā reira ka haere au ki te toa',
        baseTranslation: 'I\'m very hungry',
        translation: 'I\'m very hungry, so I went to the shop'
      },
      {
        base: 'Kua mutu te tākaro',
        extension: 'nā reira ka hoki mātou ki te kāinga',
        full: 'Kua mutu te tākaro, nā reira ka hoki mātou ki te kāinga',
        baseTranslation: 'The game finished',
        translation: 'The game finished, so we went home'
      }
    ]
  },
  {
    id: 'ahakoa',
    word: 'ahakoa',
    function: 'Concession',
    meaning: 'although / even though',
    category: 'concession',
    explanation: 'Use ahakoa to acknowledge a condition that might be expected to change the outcome — but doesn\'t. It adds nuance and honesty to your sentences.',
    pattern: '[statement] ahakoa [conceding condition]',
    tip: 'Think: I\'m doing X — ahakoa — despite this challenge or expectation',
    examples: [
      {
        base: 'Ka haere au',
        extension: 'ahakoa e ua ana',
        full: 'Ka haere au ahakoa e ua ana',
        baseTranslation: 'I\'ll go',
        translation: 'I\'ll go even though it\'s raining'
      },
      {
        base: 'Ka mahi tonu ia',
        extension: 'ahakoa e māuiui ana',
        full: 'Ka mahi tonu ia ahakoa e māuiui ana',
        baseTranslation: 'He kept working',
        translation: 'He kept working even though he was sick'
      },
      {
        base: 'Ka kata ia',
        extension: 'ahakoa he pōuri tōna ngākau',
        full: 'Ka kata ia ahakoa he pōuri tōna ngākau',
        baseTranslation: 'She laughed',
        translation: 'She laughed even though her heart was sad'
      }
    ]
  },
  {
    id: 'kia',
    word: 'kia ... ai',
    function: 'Purpose (outcome)',
    meaning: 'so that / in order that',
    category: 'purpose',
    explanation: 'Use kia...ai to express a desired outcome or goal — similar to hei, but focused on a state you want to reach. The ai comes after the verb.',
    pattern: '[action] kia [desired outcome] ai',
    tip: 'Think: I\'m doing X — kia — so that this state will be achieved — ai',
    examples: [
      {
        base: 'Ka ako au',
        extension: 'kia mōhio ai',
        full: 'Ka ako au kia mōhio ai',
        baseTranslation: 'I\'m studying',
        translation: 'I\'m studying so that I\'ll know'
      },
      {
        base: 'Ka horoi ia i ōna ringaringa',
        extension: 'kia hauora ai',
        full: 'Ka horoi ia i ōna ringaringa kia hauora ai',
        baseTranslation: 'She washed her hands',
        translation: 'She washed her hands so that she\'ll be healthy'
      },
      {
        base: 'Ka moe ānamata ia',
        extension: 'kia māia ai',
        full: 'Ka moe ānamata ia kia māia ai',
        baseTranslation: 'He sleeps early',
        translation: 'He sleeps early so that he\'ll be strong'
      }
    ]
  },
  {
    id: 'me',
    word: 'me',
    function: 'Accompaniment',
    meaning: 'with / and also',
    category: 'accompaniment',
    explanation: 'Use me to include other people, things, or actions alongside what you\'re already doing. It can mean "with", "and", or "together with".',
    pattern: '[action/noun] me [person/thing/action]',
    tip: 'Think: I\'m doing X — me — along with this person or thing',
    examples: [
      {
        base: 'Ka haere au',
        extension: 'me taku hoa',
        full: 'Ka haere au me taku hoa',
        baseTranslation: 'I\'m going',
        translation: 'I\'m going with my friend'
      },
      {
        base: 'Ka kai mātou',
        extension: 'me ngā manuhiri',
        full: 'Ka kai mātou me ngā manuhiri',
        baseTranslation: 'We\'re eating',
        translation: 'We\'re eating with the guests'
      },
      {
        base: 'Ka noho ia ki reira',
        extension: 'me tōna whānau',
        full: 'Ka noho ia ki reira me tōna whānau',
        baseTranslation: 'She lives there',
        translation: 'She lives there with her family'
      }
    ]
  }
];

// Practice sentences with guided exercises
const PRACTICE_SENTENCES = [
  {
    id: 1,
    maori: 'Ka haere au ki te mahi',
    english: 'I\'m going to work',
    exercises: [
      {
        extenderId: 'hei',
        prompt: 'Why are you going to work? Add a purpose.',
        modelAnswer: 'Ka haere au ki te mahi hei utu i ōku nama',
        modelTranslation: 'I\'m going to work to pay my bills'
      },
      {
        extenderId: 'engari',
        prompt: 'Add a contrasting feeling or condition.',
        modelAnswer: 'Ka haere au ki te mahi, engari kāore au e hiahia ana',
        modelTranslation: 'I\'m going to work, but I don\'t want to'
      },
      {
        extenderId: 'ahakoa',
        prompt: 'What obstacle are you going despite?',
        modelAnswer: 'Ka haere au ki te mahi ahakoa e māuiui ana',
        modelTranslation: 'I\'m going to work even though I\'m sick'
      }
    ]
  },
  {
    id: 2,
    maori: 'Ka kai mātou i te ahiahi',
    english: 'We\'re eating this evening',
    exercises: [
      {
        extenderId: 'me',
        prompt: 'Who else is joining you?',
        modelAnswer: 'Ka kai mātou i te ahiahi me ngā hoa',
        modelTranslation: 'We\'re eating this evening with friends'
      },
      {
        extenderId: 'a-muri-i-tera',
        prompt: 'What will happen after the meal?',
        modelAnswer: 'Ka kai mātou i te ahiahi, ā muri i tērā ka haere ki te tākaro',
        modelTranslation: 'We\'re eating this evening, after that we\'ll go play'
      },
      {
        extenderId: 'engari',
        prompt: 'Add a complication or condition.',
        modelAnswer: 'Ka kai mātou i te ahiahi, engari kāore anō ngā rīhi i oti',
        modelTranslation: 'We\'re eating this evening, but the dishes aren\'t done yet'
      }
    ]
  },
  {
    id: 3,
    maori: 'Ka ako au i te reo Māori',
    english: 'I\'m learning te reo Māori',
    exercises: [
      {
        extenderId: 'hei',
        prompt: 'What do you want to become through your learning?',
        modelAnswer: 'Ka ako au i te reo Māori hei kaiako',
        modelTranslation: 'I\'m learning te reo Māori to become a teacher'
      },
      {
        extenderId: 'kia',
        prompt: 'What state do you want to reach through learning?',
        modelAnswer: 'Ka ako au i te reo Māori kia reo Māori ai',
        modelTranslation: 'I\'m learning te reo Māori so that I\'ll be a te reo speaker'
      },
      {
        extenderId: 'ahakoa',
        prompt: 'What makes it challenging, but you keep going anyway?',
        modelAnswer: 'Ka ako au i te reo Māori ahakoa he uaua',
        modelTranslation: 'I\'m learning te reo Māori even though it\'s difficult'
      }
    ]
  },
  {
    id: 4,
    maori: 'Ka tūtaki au ki tōku hoa',
    english: 'I\'m meeting my friend',
    exercises: [
      {
        extenderId: 'a',
        prompt: 'What happens right after you meet?',
        modelAnswer: 'Ka tūtaki au ki tōku hoa, ā ka haere māua ki te kapu tī',
        modelTranslation: 'I\'m meeting my friend and then we\'ll go for a cup of tea'
      },
      {
        extenderId: 'hei',
        prompt: 'Why are you meeting? What\'s the purpose?',
        modelAnswer: 'Ka tūtaki au ki tōku hoa hei kōrero',
        modelTranslation: 'I\'m meeting my friend to have a talk'
      },
      {
        extenderId: 'engari',
        prompt: 'Add something unexpected about the meeting.',
        modelAnswer: 'Ka tūtaki au ki tōku hoa, engari he poto noa te wā',
        modelTranslation: 'I\'m meeting my friend, but it\'s only for a short time'
      }
    ]
  },
  {
    id: 5,
    maori: 'Ka pānui au i tōku pukapuka',
    english: 'I\'m reading my book',
    exercises: [
      {
        extenderId: 'a',
        prompt: 'What did you do right after reading?',
        modelAnswer: 'Ka pānui au i tōku pukapuka, ā ka moe',
        modelTranslation: 'I\'m reading my book and then I\'ll sleep'
      },
      {
        extenderId: 'kia',
        prompt: 'What do you hope to achieve by reading?',
        modelAnswer: 'Ka pānui au i tōku pukapuka kia mārama ai',
        modelTranslation: 'I\'m reading my book so that I\'ll understand'
      },
      {
        extenderId: 'ahakoa',
        prompt: 'What are you reading despite?',
        modelAnswer: 'Ka pānui au i tōku pukapuka ahakoa e ngenge ana au',
        modelTranslation: 'I\'m reading my book even though I\'m tired'
      }
    ]
  },
  {
    id: 6,
    maori: 'Ka haere mātou ki te kaukau',
    english: 'We\'re going swimming',
    exercises: [
      {
        extenderId: 'me',
        prompt: 'Who\'s coming along?',
        modelAnswer: 'Ka haere mātou ki te kaukau me ngā tamariki',
        modelTranslation: 'We\'re going swimming with the children'
      },
      {
        extenderId: 'ahakoa',
        prompt: 'What conditions are you going despite?',
        modelAnswer: 'Ka haere mātou ki te kaukau ahakoa he makariri',
        modelTranslation: 'We\'re going swimming even though it\'s cold'
      },
      {
        extenderId: 'a-muri-i-tera',
        prompt: 'What will you do after swimming?',
        modelAnswer: 'Ka haere mātou ki te kaukau, ā muri i tērā ka hoki ki te kāinga',
        modelTranslation: 'We\'re going swimming, after that we\'ll go home'
      }
    ]
  },
  {
    id: 7,
    maori: 'He tino hiakai au',
    english: 'I\'m very hungry',
    exercises: [
      {
        extenderId: 'na-reira',
        prompt: 'What are you going to do because you\'re so hungry?',
        modelAnswer: 'He tino hiakai au, nā reira ka haere au ki te toa',
        modelTranslation: 'I\'m very hungry, so I\'m going to the shop'
      },
      {
        extenderId: 'engari',
        prompt: 'Add something that complicates the situation.',
        modelAnswer: 'He tino hiakai au, engari kāore he kai i konei',
        modelTranslation: 'I\'m very hungry, but there\'s no food here'
      }
    ]
  },
  {
    id: 8,
    maori: 'Ka mahi māua',
    english: 'We two worked',
    exercises: [
      {
        extenderId: 'a-muri-i-tera',
        prompt: 'What did you do after working?',
        modelAnswer: 'Ka mahi māua, ā muri i tērā ka noho māua ki te tākaro kēmu',
        modelTranslation: 'We two worked, after that we sat and played a game'
      },
      {
        extenderId: 'ahakoa',
        prompt: 'What challenge did you work through?',
        modelAnswer: 'Ka mahi māua ahakoa e ua ana',
        modelTranslation: 'We two worked even though it was raining'
      },
      {
        extenderId: 'engari',
        prompt: 'Add a contrast to what happened.',
        modelAnswer: 'Ka mahi māua, engari kāore i oti',
        modelTranslation: 'We two worked, but it wasn\'t finished'
      }
    ]
  },
  {
    id: 9,
    maori: 'Ka horoi au i ngā rīhi',
    english: 'I\'m washing the dishes',
    exercises: [
      {
        extenderId: 'a',
        prompt: 'What are you doing right after the dishes?',
        modelAnswer: 'Ka horoi au i ngā rīhi, ā ka noho ki te mātakitaki',
        modelTranslation: 'I\'m washing the dishes and then I\'ll sit and watch'
      },
      {
        extenderId: 'engari',
        prompt: 'What\'s the complication with washing up?',
        modelAnswer: 'Ka horoi au i ngā rīhi, engari he nui',
        modelTranslation: 'I\'m washing the dishes, but there are a lot'
      }
    ]
  },
  {
    id: 10,
    maori: 'Ka tae ia ki te kura',
    english: 'He/she arrived at school',
    exercises: [
      {
        extenderId: 'a',
        prompt: 'What did he/she do on arriving?',
        modelAnswer: 'Ka tae ia ki te kura, ā ka noho ki roto i te akomanga',
        modelTranslation: 'He arrived at school and then sat in the classroom'
      },
      {
        extenderId: 'ahakoa',
        prompt: 'What obstacle did he/she overcome to get there?',
        modelAnswer: 'Ka tae ia ki te kura ahakoa i tōmuri ia',
        modelTranslation: 'She arrived at school even though she was late'
      },
      {
        extenderId: 'me',
        prompt: 'Who did she arrive with?',
        modelAnswer: 'Ka tae ia ki te kura me ōna hoa',
        modelTranslation: 'She arrived at school with her friends'
      }
    ]
  }
];

// Category metadata for colours and display
const CATEGORIES = {
  purpose:       { label: 'Purpose',       color: '#2E7D5E', bg: '#E8F5F0' },
  contrast:      { label: 'Contrast',      color: '#B5451B', bg: '#FDF0EA' },
  sequence:      { label: 'Sequence',      color: '#1A6B9A', bg: '#E8F3FA' },
  consequence:   { label: 'Consequence',   color: '#6B3FA0', bg: '#F2EDF8' },
  concession:    { label: 'Concession',    color: '#B5761B', bg: '#FDF5E8' },
  accompaniment: { label: 'With / And',    color: '#1B7A8A', bg: '#E8F6F8' }
};
