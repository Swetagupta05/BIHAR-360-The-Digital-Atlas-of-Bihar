import React from 'react';
import { Compass, Sparkles, MapPin, Landmark, Utensils, Music } from 'lucide-react';
import { BiharGuideSuggestions } from './BiharGuideSuggestions';

interface BiharGuideEmptyStateProps {
  onSelectSuggestion: (question: string) => void;
  disabled?: boolean;
}

export const BiharGuideEmptyState: React.FC<BiharGuideEmptyStateProps> = ({
  onSelectSuggestion,
  disabled
}) => {
  return (
    <div className="py-6 sm:py-8 px-2 max-w-2xl mx-auto flex flex-col items-center text-center">
      {/* Editorial Emblem */}
      <div className="relative mb-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#C85A32] to-[#A54420] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-lg shadow-[#C85A32]/20">
          B
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] mb-1.5">
        Ask Bihar
      </h2>
      <p className="text-xs sm:text-sm font-serif italic text-[#8C5B3E] dark:text-[#D4A373] mb-3">
        "Explore Bihar through its stories, places, traditions, and people."
      </p>

      {/* Narrative Intro */}
      <p className="text-xs sm:text-sm text-[#4B525A] dark:text-[#B5ACA0] max-w-lg leading-relaxed mb-6">
        Grounded directly in verified records across all <strong className="text-[#14171A] dark:text-white">38 districts</strong>, archaeological monuments, culinary heritage, classical ragas, and sacred circuits.
      </p>

      {/* Capability Highlights Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#EADBCE]/50 dark:bg-[#20252B] text-[#555C65] dark:text-[#DCD5CB] border border-[#EADBCE]/70 dark:border-[#2E343B]">
          <MapPin className="w-3 h-3 text-[#C85A32]" />
          38 Districts
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#EADBCE]/50 dark:bg-[#20252B] text-[#555C65] dark:text-[#DCD5CB] border border-[#EADBCE]/70 dark:border-[#2E343B]">
          <Landmark className="w-3 h-3 text-[#C85A32]" />
          UNESCO & Monuments
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#EADBCE]/50 dark:bg-[#20252B] text-[#555C65] dark:text-[#DCD5CB] border border-[#EADBCE]/70 dark:border-[#2E343B]">
          <Utensils className="w-3 h-3 text-[#C85A32]" />
          Culinary Heritage
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#EADBCE]/50 dark:bg-[#20252B] text-[#555C65] dark:text-[#DCD5CB] border border-[#EADBCE]/70 dark:border-[#2E343B]">
          <Music className="w-3 h-3 text-[#C85A32]" />
          Soundscapes
        </span>
      </div>

      {/* Suggested Questions Section */}
      <div className="w-full text-left">
        <BiharGuideSuggestions
          onSelectSuggestion={onSelectSuggestion}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
