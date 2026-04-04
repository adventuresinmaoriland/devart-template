import { useState } from 'react';
import { Navigation, Section } from './components/Navigation';
import { VocabularyDeck } from './components/VocabularyDeck';
import { SentenceBuilder } from './components/SentenceBuilder';
import { DailyConversations } from './components/DailyConversations';
import { GrammarGuide } from './components/GrammarGuide';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('kuputaka');

  const renderSection = () => {
    switch (activeSection) {
      case 'kuputaka':
        return <VocabularyDeck />;
      case 'hanga':
        return <SentenceBuilder />;
      case 'korero':
        return <DailyConversations />;
      case 'tikanga':
        return <GrammarGuide />;
      default:
        return <VocabularyDeck />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pb-16">{renderSection()}</main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 py-2 text-center text-xs text-stone-400">
        Te Reo Māori — University Workplace Language · Progress saved locally
      </footer>
    </div>
  );
}
