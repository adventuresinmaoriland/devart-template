export interface DialogueLine {
  speaker: 'A' | 'B';
  maori: string;
  english: string;
  notes?: string;
}

export interface GrammarNote {
  pattern: string;
  explanation: string;
  example?: string;
}

export interface Conversation {
  id: string;
  title: string;
  titleEnglish: string;
  scenario: string;
  setting: string;
  dialogue: DialogueLine[];
  grammarNotes: GrammarNote[];
  vocabulary: { maori: string; english: string }[];
}

export const conversations: Conversation[] = [
  {
    id: 'conv-001',
    title: 'Mōrena — He mihi ata',
    titleEnglish: 'Morning greetings with colleagues',
    scenario: 'Two university staff members, Hemi and Ana, meet in the corridor first thing in the morning.',
    setting: 'University corridor, 8:30am',
    dialogue: [
      {
        speaker: 'A',
        maori: 'Mōrena, Ana! Kei te pēhea koe i tēnei ata?',
        english: 'Good morning, Ana! How are you this morning?',
        notes: '"Mōrena" is the everyday morning greeting. "I tēnei ata" (this morning) adds time context.',
      },
      {
        speaker: 'B',
        maori: 'Mōrena, Hemi! Kei te pai, kia ora. Ā koe?',
        english: 'Good morning, Hemi! I\'m good, thanks. And you?',
        notes: '"Ā koe?" is a short, informal way of asking "And you?" after responding to a greeting.',
      },
      {
        speaker: 'A',
        maori: 'Āe, kei te pai anō au. He nui ōu mahi i tēnei rā?',
        english: 'Yes, I\'m well too. Do you have a lot of work today?',
        notes: '"Anō" means "also/too/again." "He nui ōu mahi" = Your work is much/you have lots of work.',
      },
      {
        speaker: 'B',
        maori: 'Āe, he hui tōku i tēnei ata, ā, he mahi tuhituhi āpōpō.',
        english: 'Yes, I have a meeting this morning, and writing work tomorrow.',
        notes: '"ā" (with macron) here is a discourse connector meaning "and then/and." "Tōku" = my (singular).',
      },
      {
        speaker: 'A',
        maori: 'Ka pai! Mā te wā, e hoa.',
        english: 'Great! See you later, friend.',
        notes: '"Mā te wā" is a casual farewell meaning "see you in time / by and by." "E hoa" = friend (vocative).',
      },
      {
        speaker: 'B',
        maori: 'Āe, mā te wā. Ka kite anō!',
        english: 'Yes, see you later. See you again!',
        notes: '"Ka kite anō" is the standard goodbye meaning "I will see you again."',
      },
    ],
    grammarNotes: [
      {
        pattern: 'Kei te pēhea koe?',
        explanation: '"Kei te" + verb phrase + subject. Literally "At the (state of) how are you?" Used to ask how someone is.',
        example: 'Kei te pēhea ō hoa mahi? — How are your colleagues?',
      },
      {
        pattern: 'He nui ōu mahi',
        explanation: '"He" (indefinite) + adjective + possessive noun phrase. Describes an attribute. "Ōu" = your (plural possession).',
        example: 'He nui āku mahi. — I have a lot of work (literally: My work is much).',
      },
      {
        pattern: 'Mā te wā',
        explanation: 'A fixed farewell phrase meaning "by/until the time." Informal and very common among native and fluent speakers.',
        example: 'Can be combined with "Ka kite anō" for a fuller farewell.',
      },
    ],
    vocabulary: [
      { maori: 'mōrena', english: 'good morning' },
      { maori: 'ata', english: 'morning / dawn' },
      { maori: 'anō', english: 'also / again / too' },
      { maori: 'hui', english: 'meeting' },
      { maori: 'tuhituhi', english: 'writing / to write' },
      { maori: 'mā te wā', english: 'see you later (farewell)' },
      { maori: 'e hoa', english: 'friend (when addressing)' },
    ],
  },
  {
    id: 'conv-002',
    title: 'Kei te aha koe? — Ngā mahi o te rā',
    titleEnglish: 'Talking about your work',
    scenario: 'Aroha stops by Tama\'s office to check in on what he\'s working on.',
    setting: 'University office, mid-morning',
    dialogue: [
      {
        speaker: 'A',
        maori: 'Tēnā koe, Tama! He wā tōu?',
        english: 'Hello, Tama! Do you have a moment?',
        notes: '"He wā tōu?" literally asks "Is there time of yours?" — a polite way to ask if someone is free.',
      },
      {
        speaker: 'B',
        maori: 'Āe, tēnā! Haere mai, noho mai.',
        english: 'Yes, of course! Come in, sit down.',
        notes: '"Haere mai" = come (towards speaker). "Noho mai" = sit. "Mai" indicates direction towards the speaker.',
      },
      {
        speaker: 'A',
        maori: 'Kia ora. Kei te aha koe i ēnei rā?',
        english: 'Thank you. What have you been up to these days?',
        notes: '"Kei te aha koe?" = What are you doing? "I ēnei rā" = these days / recently.',
      },
      {
        speaker: 'B',
        maori: 'Kei te tuhituhi au i tētahi pepa mō tōku rangahau.',
        english: 'I am writing a paper about my research.',
        notes: '"Kei te" + verb for present continuous. "I tētahi" = a/an (object marker + indefinite article).',
      },
      {
        speaker: 'A',
        maori: 'E pai ana! Ko tēhea kaupeka tōu?',
        english: 'Excellent! Which is your department?',
        notes: '"E pai ana" is a formal affirmation of approval. "Ko tēhea" = which one (identity question).',
      },
      {
        speaker: 'B',
        maori: 'Ko au nō te kaupeka o ngā tikanga Māori. He aha tō kaupeka?',
        english: 'I am from the Māori studies department. What is your department?',
        notes: '"Nō" shows origin/affiliation. "Ko au nō te kaupeka" = I belong to the department.',
      },
      {
        speaker: 'A',
        maori: 'Ko au nō te kaupeka o ngā pūtaiao. He pai tō mahi i ngā wā katoa!',
        english: 'I am from the sciences department. Your work is always good!',
        notes: '"I ngā wā katoa" = always / at all times. A nice compliment for a colleague.',
      },
    ],
    grammarNotes: [
      {
        pattern: 'Kei te aha koe?',
        explanation: '"Kei te" (present continuous) + "aha" (what, in verb position) + subject. Asks what someone is doing.',
        example: 'Kei te aha rātou? — What are they doing?',
      },
      {
        pattern: 'E pai ana',
        explanation: '"E...ana" is the formal continuous marker. "E pai ana" = (it) is being good / that\'s good. Used as formal approval.',
        example: 'E tika ana tāu kōrero. — Your speech is correct.',
      },
      {
        pattern: 'Ko au nō...',
        explanation: '"Ko" (identity) + subject + "nō" (from/of). States affiliation or origin.',
        example: 'Ko au nō Ōtautahi. — I am from Christchurch.',
      },
    ],
    vocabulary: [
      { maori: 'he wā', english: 'a moment / some time' },
      { maori: 'haere mai', english: 'come (towards speaker)' },
      { maori: 'noho mai', english: 'sit down / stay' },
      { maori: 'rangahau', english: 'research' },
      { maori: 'kaupeka', english: 'department / branch' },
      { maori: 'tikanga', english: 'customs / protocols / correct way' },
      { maori: 'pūtaiao', english: 'science(s)' },
      { maori: 'katoa', english: 'all / every' },
    ],
  },
  {
    id: 'conv-003',
    title: 'Ka tūtaki tāua — Whakarite tikanga',
    titleEnglish: 'Making plans with a colleague',
    scenario: 'Ngāhuia and Rāngi need to arrange a meeting to work on a joint project.',
    setting: 'University common room',
    dialogue: [
      {
        speaker: 'A',
        maori: 'Rāngi, ka tūtaki tāua āpōpō hei whakaaro i ō tāua whakaaro?',
        english: 'Rāngi, shall we two meet tomorrow to discuss our thoughts?',
        notes: '"Tāua" = we two (dual inclusive). "Hei whakaaro" = for the purpose of thinking/discussing.',
      },
      {
        speaker: 'B',
        maori: 'Āe, ka tūtaki tāua. Ka pēhea te wā?',
        english: 'Yes, let\'s meet. What time?',
        notes: '"Ka pēhea te wā?" = What will the time be like? / What time works?',
      },
      {
        speaker: 'A',
        maori: 'Ka pēhea te rua karaka i te ata?',
        english: 'How about two o\'clock in the morning? (What about 2pm?)',
        notes: '"I te ata" means in the morning. For afternoon say "i te ahiahi." Karaka = o\'clock (from English "clock").',
      },
      {
        speaker: 'B',
        maori: 'Āe, he pai tērā. Ka tūtaki tāua i te tari i te rua karaka i te ata.',
        english: 'Yes, that\'s good. We two will meet at the office at two o\'clock in the morning.',
        notes: '"He pai tērā" = that is good. Repeating the plan confirms understanding.',
      },
      {
        speaker: 'A',
        maori: 'Ka pai. Ka mōhio au. Ka mau te wehi!',
        english: 'Great. I understand. Awesome!',
        notes: '"Ka mōhio au" = I know/understand/noted. "Ka mau te wehi" = awesome/incredible (informal, enthusiastic).',
      },
      {
        speaker: 'B',
        maori: 'Ka pai rawa atu! Ka kite anō āpōpō.',
        english: 'Absolutely great! See you again tomorrow.',
        notes: '"Rawa atu" intensifies: "Ka pai rawa atu" = very/extremely good. Sets a positive tone.',
      },
    ],
    grammarNotes: [
      {
        pattern: 'Ka tūtaki tāua',
        explanation: '"Ka" (future/present) + verb + "tāua" (we two, inclusive). The dual pronoun "tāua" specifically means "you and I."',
        example: 'Ka haere tāua ki te tari. — You and I will go to the office.',
      },
      {
        pattern: 'Hei + verb',
        explanation: '"Hei" before a verb indicates future purpose — the reason for going somewhere or doing something.',
        example: 'Ka haere au hei āwhina. — I will go to help.',
      },
      {
        pattern: 'I te [number] karaka',
        explanation: '"I te" + number + "karaka" = at [time] o\'clock. Time expressions use "i te" for specific clock times.',
        example: 'Ka tīmata te hui i te toru karaka. — The meeting starts at three o\'clock.',
      },
    ],
    vocabulary: [
      { maori: 'tūtaki', english: 'to meet' },
      { maori: 'tāua', english: 'we two (you and I)' },
      { maori: 'whakaaro', english: 'thought / to think / idea' },
      { maori: 'karaka', english: 'o\'clock (time)' },
      { maori: 'mōhio', english: 'to know / to understand' },
      { maori: 'ka mau te wehi', english: 'awesome / incredible (exclamation)' },
      { maori: 'rawa atu', english: 'very / extremely (intensifier)' },
    ],
  },
  {
    id: 'conv-004',
    title: 'Mutu te mahi — Hei konā rā',
    titleEnglish: 'Wrapping up the day',
    scenario: 'Two staff members, Pānia and Rawiri, are finishing up at the end of the working day.',
    setting: 'University corridor, late afternoon',
    dialogue: [
      {
        speaker: 'A',
        maori: 'Kua mutu ōu mahi mō tēnei rā, Rawiri?',
        english: 'Have your tasks finished for today, Rawiri?',
        notes: '"Kua mutu" = have/has finished (Kua = perfect aspect). "Mō tēnei rā" = for today.',
      },
      {
        speaker: 'B',
        maori: 'Āe, kua mutu. He mahi nui taku i tēnei rā, engari kua pai.',
        english: 'Yes, finished. I had a lot of work today, but it\'s done well.',
        notes: '"Engari" = but / however. "Kua pai" = it is now good/done.',
      },
      {
        speaker: 'A',
        maori: 'Ka pai! He aha āu mahi āpōpō?',
        english: 'Great! What is your work tomorrow?',
        notes: '"He aha āu mahi?" = What are your tasks? "Āu" = your (multiple things).',
      },
      {
        speaker: 'B',
        maori: 'He hui āku i te ata, ā, ka kōrero au ki ōku ākonga i te ahiahi.',
        english: 'I have meetings in the morning, and I will speak with my students in the afternoon.',
        notes: '"Āku" = my (multiple). "Ki ōku ākonga" = to my students. "Ahiahi" = afternoon/evening.',
      },
      {
        speaker: 'A',
        maori: 'He rā nui āpōpō māu! Ka pēhea ō tāua kaupapa ā tērā wiki?',
        english: 'Big day for you tomorrow! How is our project going next week?',
        notes: '"He rā nui māu" = a big day for you. "Ā tērā wiki" = next week.',
      },
      {
        speaker: 'B',
        maori: 'Kei te pai. Ka tūtaki tāua ā Rāhina hei whakaaro anō.',
        english: 'It\'s going well. We two will meet on Monday to think about it again.',
        notes: '"Rāhina" = Monday. Days of the week are loanwords from English with Māori sounds.',
      },
      {
        speaker: 'A',
        maori: 'Tino pai. Nō reira, hei konā rā, e hoa. Kia ora mō āu āwhina.',
        english: 'Excellent. So then, farewell friend. Thank you for your help.',
        notes: '"Kia ora mō..." = thank you for... "Āu āwhina" = your help.',
      },
      {
        speaker: 'B',
        maori: 'He pai noa iho! Ka kite anō ā Rāhina. Hei konā.',
        english: 'No problem at all! See you again Monday. Farewell.',
        notes: '"He pai noa iho" = it is just fine / no problem. A humble dismissal of thanks. "Hei konā" = farewell (by the one staying).',
      },
    ],
    grammarNotes: [
      {
        pattern: 'Kua mutu',
        explanation: '"Kua" marks perfect aspect — something that has just been completed. "Kua mutu" = has finished.',
        example: 'Kua tae mai te manuhiri. — The guests have arrived.',
      },
      {
        pattern: 'He aha āu mahi?',
        explanation: '"He aha" = what (indefinite). "Āu mahi" = your tasks (āu = your, plural/multiple). Questions about multiple items use "āu."',
        example: 'He aha āu whakaaro? — What are your thoughts?',
      },
      {
        pattern: 'Ka kōrero au ki...',
        explanation: '"Ki" follows kōrero to mark the person being spoken to. "Ka kōrero au ki a Hemi" = I will talk to Hemi.',
        example: 'Ka tukua e au tētahi īmēra ki a koe. — I will send an email to you.',
      },
    ],
    vocabulary: [
      { maori: 'mutu', english: 'to finish / to end' },
      { maori: 'engari', english: 'but / however' },
      { maori: 'ākonga', english: 'student(s) / learner(s)' },
      { maori: 'ahiahi', english: 'afternoon / evening' },
      { maori: 'Rāhina', english: 'Monday' },
      { maori: 'hei konā rā', english: 'farewell (said by departing person)' },
      { maori: 'hei konā', english: 'farewell (said by staying person)' },
      { maori: 'he pai noa iho', english: 'no problem / it\'s fine' },
    ],
  },
];
