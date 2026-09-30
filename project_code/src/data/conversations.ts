export interface DialogueLine {
  speaker: 'A' | 'B';
  maori: string;
  english: string;
  notes?: string;
  practiceKey?: string;
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
  {
    id: 'conv-005',
    title: 'Ka kai tāua — He tina',
    titleEnglish: 'Lunchtime with a colleague',
    scenario: 'Mere and Tūhoe decide where to have lunch and make a quick plan.',
    setting: 'University staff kitchen, noon',
    dialogue: [
      {
        speaker: 'A',
        maori: 'Kei te hiakai koe? Ka kai tāua i tēnei wā?',
        english: 'Are you hungry? Shall we two eat now?',
        notes: '"Kei te hiakai" = to be hungry (literally "at the desire-to-eat"). "Ka kai tāua" = let\'s eat (we two).',
        practiceKey: 'Kei te hiakai koe',
      },
      {
        speaker: 'B',
        maori: 'Āe, kei te hiakai au. Ka haere ki whea?',
        english: 'Yes, I\'m hungry. Where shall we go?',
        notes: '"Ki whea?" = to where? A simple direction question using "ki" (to/towards) + "whea" (where).',
        practiceKey: 'Ka haere ki whea',
      },
      {
        speaker: 'A',
        maori: 'Ka haere ki te wharekai? He pai ngā kai ōna i tēnei rā.',
        english: 'Shall we go to the cafeteria? The food there is good today.',
        notes: '"Wharekai" = dining hall/cafeteria (whare = building, kai = food). "Ōna" = its (belonging to it).',
        practiceKey: 'He pai ngā kai ōna',
      },
      {
        speaker: 'B',
        maori: 'Āe, he pai tērā. He poto taku wā — me hoki au ki tōku tari i te toru karaka.',
        english: 'Yes, that\'s good. My time is short — I need to return to my office at three.',
        notes: '"He poto taku wā" = my time is short. "Me hoki" = should return (me = obligation marker). "Toru karaka" = three o\'clock.',
        practiceKey: 'He poto taku wā',
      },
      {
        speaker: 'A',
        maori: 'Ka pai, ka pai. Ka hoki tāua i muri mai. He aha tāu e hiahia ana?',
        english: 'Good, good. We\'ll both return afterwards. What do you feel like?',
        notes: '"I muri mai" = afterwards/later. "He aha tāu e hiahia ana?" = What do you desire/feel like?',
        practiceKey: 'He aha tāu e hiahia ana',
      },
      {
        speaker: 'B',
        maori: 'He hōpia māku! Engari, he hiahia anō tōku ki tētahi inu māmā.',
        english: 'Soup for me! But, I also want a light drink.',
        notes: '"Māku" = for me. "Inu" = drink. "Māmā" = light (not heavy). "He hiahia tōku ki" = I desire / I want.',
        practiceKey: 'He hōpia māku',
      },
      {
        speaker: 'A',
        maori: 'Tino pai! Ka haere tāua ināianei. Kia tere!',
        english: 'Excellent! Let\'s go now. Quickly!',
        notes: '"Ka haere tāua ināianei" = let\'s go now (we two). "Kia tere" = be quick / hurry up.',
        practiceKey: 'Ka haere tāua ināianei',
      },
    ],
    grammarNotes: [
      {
        pattern: 'Kei te hiakai au',
        explanation: '"Kei te" + stative verb + subject. "Hiakai" is a stative — it describes a state of being (being hungry), not an action.',
        example: 'Kei te hiainu au. — I am thirsty.',
      },
      {
        pattern: 'Me hoki au',
        explanation: '"Me" before a verb creates an obligation or suggestion: "should/must do." "Me hoki au" = I should/must return.',
        example: 'Me haere tāua ināianei. — We should go now.',
      },
      {
        pattern: 'He aha tāu e hiahia ana?',
        explanation: '"He aha" (what) + "tāu" (your) + "e...ana" (continuous desire). A common way to ask what someone wants.',
        example: 'He aha tāu e hiahia ana ki te kai? — What food do you feel like?',
      },
    ],
    vocabulary: [
      { maori: 'hiakai', english: 'hungry' },
      { maori: 'wharekai', english: 'cafeteria / dining hall' },
      { maori: 'poto', english: 'short (of time or length)' },
      { maori: 'hoki', english: 'to return / also' },
      { maori: 'hōpia', english: 'soup' },
      { maori: 'inu', english: 'drink / to drink' },
      { maori: 'māmā', english: 'light (not heavy)' },
      { maori: 'kia tere', english: 'be quick / hurry' },
    ],
  },
  {
    id: 'conv-006',
    title: 'He hui ā-ipurangi — Kōrero rorohiko',
    titleEnglish: 'An online meeting',
    scenario: 'A team begins a video hui. Two staff check audio, then discuss their project topic.',
    setting: 'Working from home / video call platform',
    dialogue: [
      {
        speaker: 'A',
        maori: 'Tēnā koutou. Kei te rongo koutou i tōku reo?',
        english: 'Hello everyone. Can you all hear my voice?',
        notes: '"Koutou" = you all (three or more people). "Rongo" = to hear/sense. "Tōku reo" = my voice/language.',
        practiceKey: 'Kei te rongo koutou i tōku reo',
      },
      {
        speaker: 'B',
        maori: 'Āe, kei te rongo māua. He mārama anō tōu kanohi.',
        english: 'Yes, we two can hear you. Your face is clear too.',
        notes: '"Māua" = we two (exclusive — not including the listener). "Mārama" = clear/bright. "Kanohi" = face.',
        practiceKey: 'He mārama anō tōu kanohi',
      },
      {
        speaker: 'A',
        maori: 'Ka pai. Ka tīmata tāua i ēnei kaupapa. Ko te tuatahi, ko ngā hua o tō tāua rangahau.',
        english: 'Good. Let\'s begin on these topics. First, the results of our research.',
        notes: '"Ko te tuatahi" = first/the first. "Hua" = results/fruit. "Tō tāua rangahau" = our (two) research.',
        practiceKey: 'Ko te tuatahi',
      },
      {
        speaker: 'B',
        maori: 'Āe, he whakaaro tōku mō tērā. Ka kōrero au?',
        english: 'Yes, I have a thought about that. Can/shall I speak?',
        notes: '"He whakaaro tōku" = I have a thought (literally "there is a thought of mine"). Asking permission to speak.',
        practiceKey: 'He whakaaro tōku mō tērā',
      },
      {
        speaker: 'A',
        maori: 'Āe, kōrero mai.',
        english: 'Yes, go ahead and speak.',
        notes: '"Kōrero mai" = speak towards me/us. "Mai" indicates direction towards the speaker — an invitation.',
        practiceKey: 'Kōrero mai',
      },
      {
        speaker: 'B',
        maori: 'Ko tōku whakaaro, me whakaaro anō tāua ki ngā tikanga o tēnei mahi.',
        english: 'My thought is, we should think again about the protocols of this work.',
        notes: '"Ko tōku whakaaro" = my thought is (identity statement). "Me whakaaro" = should think. "Tikanga" = protocols.',
        practiceKey: 'me whakaaro anō tāua ki ngā tikanga',
      },
      {
        speaker: 'A',
        maori: 'He whakaaro pai tērā. Ka whakaaē au. Ka tuhituhi au i tēnei.',
        english: 'That\'s a good idea. I agree. I will write this down.',
        notes: '"Ka whakaaē au" = I agree (whakaaē = to agree/consent). "Ka tuhituhi au i tēnei" = I will write this.',
        practiceKey: 'Ka whakaaē au',
      },
    ],
    grammarNotes: [
      {
        pattern: 'Koutou / Māua / Tāua',
        explanation: '"Koutou" = you all (3+, addressing group). "Māua" = we two (not including you). "Tāua" = we two (including you). Getting these right shows fluency.',
        example: 'Ka haere koutou āpōpō? — Are you all going tomorrow?',
      },
      {
        pattern: 'He whakaaro tōku',
        explanation: '"He" (indefinite) + noun + "tōku" (mine/of mine). A natural way to introduce your opinion without being too direct.',
        example: 'He pātai tōku. — I have a question.',
      },
      {
        pattern: 'Ka whakaaē au',
        explanation: '"Whakaaē" = to agree/consent. Used in discussion and debate. The opposite is "Ka whakakāhore au" (I disagree).',
        example: 'Ka whakaaē rātou. — They agreed.',
      },
    ],
    vocabulary: [
      { maori: 'ā-ipurangi', english: 'online / internet-based' },
      { maori: 'rongo', english: 'to hear / to feel / to sense' },
      { maori: 'kanohi', english: 'face' },
      { maori: 'mārama', english: 'clear / bright / to understand' },
      { maori: 'hua', english: 'results / fruit / outcome' },
      { maori: 'tikanga', english: 'protocol / correct method / custom' },
      { maori: 'whakaaē', english: 'to agree / to consent' },
      { maori: 'māua', english: 'we two (not including you)' },
    ],
  },
  {
    id: 'conv-007',
    title: 'Tūtaki hou — He kaimahi hou',
    titleEnglish: 'Meeting a new colleague',
    scenario: 'Hera has just started at the university and introduces herself to Māui in the corridor.',
    setting: 'University corridor, first week',
    dialogue: [
      {
        speaker: 'A',
        maori: 'Tēnā koe. Ko wai tō ingoa?',
        english: 'Hello. What is your name?',
        notes: '"Ko wai tō ingoa?" = Who is your name? — the grammatically precise form. Spoken Māori also uses "He aha tō ingoa?"',
        practiceKey: 'Ko wai tō ingoa',
      },
      {
        speaker: 'B',
        maori: 'Ko Hera tōku ingoa. Nō hea koe?',
        english: 'My name is Hera. Where are you from?',
        notes: '"Ko Hera tōku ingoa" = Hera is my name. "Nō hea koe?" = Where are you from? (nō = from/of, hea = where).',
        practiceKey: 'Ko Hera tōku ingoa',
      },
      {
        speaker: 'A',
        maori: 'Nō Whanganui au. Ko au nō te kaupeka o ngā tikanga Māori. Ko tōu?',
        english: 'I am from Whanganui. I am from the Māori studies department. And yours?',
        notes: '"Nō Whanganui au" = I am from Whanganui. "Ko tōu?" = And yours? (shortening of "Ko tōu kaupeka?").',
        practiceKey: 'Nō Whanganui au',
      },
      {
        speaker: 'B',
        maori: 'Ko au nō te kaupeka o ngā pūtaiao hauora. Ināianei au e mahi ana i konei.',
        english: 'I am from the health sciences department. I am now working here.',
        notes: '"E mahi ana" = am working (formal continuous). "I konei" = here / at this place.',
        practiceKey: 'E mahi ana au i konei',
      },
      {
        speaker: 'A',
        maori: 'Nau mai, haere mai ki tō tātou wāhi mahi! Ka āwhina tāua i a tāua.',
        english: 'Welcome to our workplace! We will help each other.',
        notes: '"Nau mai, haere mai" = welcome (traditional invitation). "Tātou" = all of us. "Ka āwhina tāua i a tāua" = we will help each other.',
        practiceKey: 'Nau mai, haere mai',
      },
      {
        speaker: 'B',
        maori: 'Kia ora! He nui ōku pātai — ka āwhina koe i ahau?',
        english: 'Thank you! I have many questions — will you help me?',
        notes: '"He nui ōku pātai" = I have many questions (literally "my questions are many"). "Ka āwhina koe i ahau?" = Will you help me?',
        practiceKey: 'He nui ōku pātai',
      },
      {
        speaker: 'A',
        maori: 'Āe, ka āwhina au i a koe. Ehara i te mea nui!',
        english: 'Yes, I will help you. It\'s no big thing!',
        notes: '"Ka āwhina au i a koe" = I will help you ("i a koe" = personal object marker + you). "Ehara i te mea nui" = it is not a big thing.',
        practiceKey: 'Ehara i te mea nui',
      },
    ],
    grammarNotes: [
      {
        pattern: 'Nō hea koe?',
        explanation: '"Nō" = from/of (source). "Hea" = where. Together: "Where are you from?" One of the most common conversation-opener questions.',
        example: 'Nō Ōtautahi au. — I am from Christchurch.',
      },
      {
        pattern: 'Ka āwhina au i a koe',
        explanation: '"I a" is the personal object marker used before pronouns and proper names. "I a koe" = you (as the object of the action).',
        example: 'Ka kite au i a Hemi āpōpō. — I will see Hemi tomorrow.',
      },
      {
        pattern: 'Nau mai, haere mai',
        explanation: 'A traditional welcome/invitation. "Nau mai" = come forward. "Haere mai" = come (towards speaker). Said together as a warm welcome.',
        example: 'Can be extended: "Nau mai, haere mai, tāu mai!" for an especially warm welcome.',
      },
    ],
    vocabulary: [
      { maori: 'kaimahi', english: 'worker / staff member' },
      { maori: 'hauora', english: 'health / wellbeing' },
      { maori: 'wāhi mahi', english: 'workplace' },
      { maori: 'āwhina', english: 'to help' },
      { maori: 'pātai', english: 'question' },
      { maori: 'ehara', english: 'it is not / negation of identity' },
      { maori: 'tātou', english: 'all of us (three or more, inclusive)' },
      { maori: 'nō hea', english: 'from where / where are you from' },
    ],
  },
  {
    id: 'conv-008',
    title: 'I roto i te hui — He kōrero kaupapa',
    titleEnglish: 'Contributing in a meeting',
    scenario: 'A team hui. Wiremu leads; Kiri and Reweti contribute ideas and raise questions.',
    setting: 'Meeting room, mid-afternoon',
    dialogue: [
      {
        speaker: 'A',
        maori: 'Ka tīmata tāua. He whakaaro ōu mō tēnei kaupapa?',
        english: 'Let\'s begin. Do you have thoughts about this topic?',
        notes: '"Ka tīmata" = let\'s begin. "He whakaaro ōu" = do you have thoughts (literally "are there thoughts of yours?").',
        practiceKey: 'He whakaaro ōu mō tēnei kaupapa',
      },
      {
        speaker: 'B',
        maori: 'Āe, he whakaaro ōku. E whakaaro ana au, me kōrero tāua ki ngā ākonga tuatahi.',
        english: 'Yes, I have thoughts. I think we should speak to the students first.',
        notes: '"E whakaaro ana au" = I am thinking/I think (formal continuous used for opinions). "Tuatahi" = first.',
        practiceKey: 'E whakaaro ana au',
      },
      {
        speaker: 'A',
        maori: 'He whakaaro pai tērā. Ā, ko tāu?',
        english: 'That\'s a good idea. And, what about you?',
        notes: '"He whakaaro pai tērā" = that is a good idea. "Ā, ko tāu?" = And, what is yours? (inviting the next speaker).',
        practiceKey: 'He whakaaro pai tērā',
      },
      {
        speaker: 'B',
        maori: 'Ka whakaaē au ki tāu. Engari, he pātai tōku — ka pēhea ō tātou rauemi?',
        english: 'I agree with you. But, I have a question — how are our resources?',
        notes: '"Ka whakaaē au ki tāu" = I agree with what you said. "Rauemi" = resources/materials.',
        practiceKey: 'he pātai tōku',
      },
      {
        speaker: 'A',
        maori: 'He pai ō tātou rauemi i tēnei wā. Kāore he raruraru.',
        english: 'Our resources are good at this time. There is no problem.',
        notes: '"Kāore he raruraru" = there is no problem. "Kāore" = no/not. "Raruraru" = problem/trouble.',
        practiceKey: 'Kāore he raruraru',
      },
      {
        speaker: 'B',
        maori: 'Ka pai! Nō reira, ka whai wāhi ōku ākonga ki tēnei kaupapa?',
        english: 'Great! So then, will my students be able to participate in this topic?',
        notes: '"Ka whai wāhi" = will be able to participate/have a share. "Nō reira" = therefore/so then.',
        practiceKey: 'ka whai wāhi ōku ākonga',
      },
      {
        speaker: 'A',
        maori: 'Āe, ka whai wāhi rātou. He nui ngā tūāhuatanga mō rātou.',
        english: 'Yes, they will participate. There are many opportunities for them.',
        notes: '"Rātou" = they/them (three or more people). "Tūāhuatanga" = opportunities/occasions.',
        practiceKey: 'He nui ngā tūāhuatanga',
      },
      {
        speaker: 'B',
        maori: 'Tino pai rawa atu! Ka mihi au ki a koe mō āu āwhina.',
        english: 'Absolutely excellent! I give thanks to you for your help.',
        notes: '"Ka mihi au ki a koe" = I greet/give thanks to you. "Mihi" = to acknowledge/greet/thank. Stronger than "kia ora" in formal settings.',
        practiceKey: 'Ka mihi au ki a koe',
      },
    ],
    grammarNotes: [
      {
        pattern: 'E whakaaro ana au',
        explanation: '"E...ana" is the formal continuous. Used for thoughts and opinions: "E whakaaro ana au" = I think/I am of the opinion. More measured than stating a fact directly.',
        example: 'E hiahia ana au ki tētahi tūāhuatanga hou. — I would like a new opportunity.',
      },
      {
        pattern: 'Nō reira',
        explanation: '"Nō reira" = therefore / so then / for that reason. A discourse marker used to signal a conclusion or move to the next point in discussion.',
        example: 'Nō reira, ka tīmata tāua āpōpō. — So then, we begin tomorrow.',
      },
      {
        pattern: 'Ka whai wāhi',
        explanation: '"Whai wāhi" = to participate / to have a part in. Literally "to pursue a space/opening." Common in hui contexts.',
        example: 'Ka whai wāhi ngā tauira ki tēnei kaupapa. — The students will participate in this topic.',
      },
    ],
    vocabulary: [
      { maori: 'kaupapa', english: 'topic / subject / agenda / project' },
      { maori: 'rauemi', english: 'resources / materials' },
      { maori: 'raruraru', english: 'problem / trouble / complication' },
      { maori: 'tūāhuatanga', english: 'opportunity / occasion' },
      { maori: 'whai wāhi', english: 'to participate / have a share' },
      { maori: 'mihi', english: 'to greet / acknowledge / thank' },
      { maori: 'rātou', english: 'they / them (three or more)' },
      { maori: 'nō reira', english: 'therefore / so then' },
    ],
  },
];
