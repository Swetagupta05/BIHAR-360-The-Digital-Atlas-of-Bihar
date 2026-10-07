import React from 'react';
import { Compass, Landmark, Utensils, Music, Sparkles, BookOpen } from 'lucide-react';

interface BiharGuideSuggestionsProps {
  onSelectSuggestion: (question: string) => void;
  disabled?: boolean;
}

interface SuggestionItem {
  id: string;
  category: string;
  question: string;
  icon: React.ElementType;
  badge?: string;
}

const CURATED_SUGGESTIONS: SuggestionItem[] = [
  {
    id: 's-mithila',
    category: 'Cultural Region',
    question: 'What can I explore in Mithila?',
    icon: Sparkles,
    badge: 'Art & Heritage'
  },
  {
    id: 's-nalanda',
    category: 'Ancient History',
    question: 'Tell me the story of Nalanda.',
    icon: Landmark,
    badge: 'UNESCO'
  },
  {
    id: 's-gaya-food',
    category: 'Gastronomy',
    question: 'What food should I try in Gaya?',
    icon: Utensils,
    badge: 'Flavors'
  },
  {
    id: 's-buddha',
    category: 'Sacred Trails',
    question: 'Which places are connected to Buddhism?',
    icon: Compass,
    badge: 'Journeys'
  },
  {
    id: 's-music',
    category: 'Living Traditions',
    question: 'What can I listen to from Bihar?',
    icon: Music,
    badge: 'Soundscapes'
  },
  {
    id: 's-journey',
    category: 'Itineraries',
    question: 'Show me a cultural journey through Bihar.',
    icon: BookOpen,
    badge: 'Circuits'
  }
];

export const BiharGuideSuggestions: React.FC<BiharGuideSuggestionsProps> = ({
  onSelectSuggestion,
  disabled = false
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5B3E] dark:text-[#D4A373]">
          Suggested Explorations
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {CURATED_SUGGESTIONS.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              disabled={disabled}
              onClick={() => onSelectSuggestion(item.question)}
              className="group text-left p-3 rounded-xl border border-[#EADBCE] dark:border-[#2E343B] bg-white/80 dark:bg-[#1A1D22]/80 hover:bg-[#F5EFE6] dark:hover:bg-[#252A30] hover:border-[#C85A32]/40 transition-all hover:scale-[1.01] shadow-2xs disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#C85A32]"
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#71767C] dark:text-[#948B80] flex items-center gap-1.5">
                  <Icon className="w-3 h-3 text-[#C85A32] dark:text-[#E06C43]" />
                  {item.category}
                </span>
                {item.badge && (
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-[#EADBCE]/50 dark:bg-[#2E343B] text-[#555C65] dark:text-[#B5ACA0]">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="text-xs sm:text-sm font-medium text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors leading-snug">
                "{item.question}"
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
