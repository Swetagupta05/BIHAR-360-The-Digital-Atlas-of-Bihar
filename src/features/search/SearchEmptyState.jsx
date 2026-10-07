import React from 'react';
import { Search, Sparkles } from 'lucide-react';

export const SearchEmptyState = ({
  query,
  setQuery,
  onClose,
  onOpenGuide,
  onNavigateTab,
  language
}) => {
  return (
    <div className="py-12 px-4 text-center max-w-md mx-auto space-y-4">
      <div className="w-12 h-12 rounded-full bg-[#EADBCE]/50 dark:bg-[#252A30] flex items-center justify-center mx-auto text-[#C85A32]">
        <Search className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
          {language === 'hi' ? `कोई परिणाम नहीं मिला` : `No stories found for "${query}"`}
        </h3>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mt-1 leading-relaxed">
          {language === 'hi'
            ? 'कृपया वर्तनी जाँचें या ज़िला नाम (जैसे पटना, गया, मधुबनी) या ऐतिहासिक विषय खोजें।'
            : 'Try searching for verified district names (e.g. Nalanda, Rohtas), monuments, cuisine (Litti Chokha, Tilkut), or in Devanagari Hindi.'}
        </p>
      </div>

      <div className="pt-2 flex flex-wrap justify-center gap-2">
        {onOpenGuide && query.trim() && (
          <button
            onClick={() => {
              onClose();
              onOpenGuide(query.trim());
            }}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#C85A32] to-[#A54420] text-white text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? `बिहार मार्गदर्शक से पूछें: "${query}"` : `Ask Bihar Guide: "${query}"`}</span>
          </button>
        )}
        <button
          onClick={() => setQuery('Nalanda')}
          className="px-3 py-1 rounded-full bg-[#EADBCE]/50 dark:bg-[#252A30] text-xs font-medium hover:bg-[#C85A32] hover:text-white transition-colors"
        >
          Nalanda
        </button>
        <button
          onClick={() => setQuery('Madhubani')}
          className="px-3 py-1 rounded-full bg-[#EADBCE]/50 dark:bg-[#252A30] text-xs font-medium hover:bg-[#C85A32] hover:text-white transition-colors"
        >
          Madhubani
        </button>
        <button
          onClick={() => setQuery('Chhath')}
          className="px-3 py-1 rounded-full bg-[#EADBCE]/50 dark:bg-[#252A30] text-xs font-medium hover:bg-[#C85A32] hover:text-white transition-colors"
        >
          Chhath Puja
        </button>
        <button
          onClick={() => {
            onClose();
            onNavigateTab('districts');
          }}
          className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-xs font-medium hover:bg-[#A54420] transition-colors"
        >
          {language === 'hi' ? 'सभी 38 ज़िले देखें' : 'Browse All 38 Districts'}
        </button>
      </div>
    </div>
  );
};
