export type Section = 'kuputaka' | 'hanga' | 'korero' | 'tikanga';

interface NavItem {
  id: Section;
  maori: string;
  english: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: 'kuputaka', maori: 'Kuputaka', english: 'Vocabulary', icon: '📖' },
  { id: 'hanga', maori: 'Hanga Rerenga', english: 'Sentence Builder', icon: '🔧' },
  { id: 'korero', maori: 'Kōrero O Ia Rā', english: 'Daily Talk', icon: '💬' },
  { id: 'tikanga', maori: 'Tikanga Reo', english: 'Grammar Guide', icon: '📚' },
];

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="bg-pounamu-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="py-4 border-b border-pounamu-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-earth-400 rounded-full flex items-center justify-center text-pounamu-900 font-bold text-lg">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide font-maori">Te Reo Māori</h1>
              <p className="text-pounamu-300 text-sm">University Workplace Language</p>
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="flex overflow-x-auto gap-1 py-2 scrollbar-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-earth-400 focus:ring-offset-2 focus:ring-offset-pounamu-800 ${
                activeSection === item.id
                  ? 'bg-pounamu-600 text-white shadow-sm'
                  : 'text-pounamu-200 hover:bg-pounamu-700 hover:text-white'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-maori">{item.maori}</span>
              <span className="hidden sm:inline text-pounamu-400 text-xs">/ {item.english}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
