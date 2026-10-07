import React from 'react';
import { Search, SlidersHorizontal, Sparkles, Filter, Compass, Calendar, Clock, MapPin, X } from 'lucide-react';
import { JourneyTheme } from '../../types';
import { JOURNEY_CATEGORIES } from '../../data/itineraries';

interface JourneyDiscoveryProps {
  language: 'en' | 'hi';
  selectedTheme: JourneyTheme | 'all';
  onSelectTheme: (theme: JourneyTheme | 'all') => void;
  selectedDuration: string;
  onSelectDuration: (duration: string) => void;
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
}

export const JourneyDiscovery: React.FC<JourneyDiscoveryProps> = ({
  language,
  selectedTheme,
  onSelectTheme,
  selectedDuration,
  onSelectDuration,
  selectedRegion,
  onSelectRegion,
  searchQuery,
  onSearchChange,
  totalResults
}) => {
  const regions = [
    { id: 'all', label: language === 'hi' ? 'सभी अंचल' : 'All Regions' },
    { id: 'Magadh', label: 'Magadh (मगध)' },
    { id: 'Mithila', label: 'Mithila (मिथिला)' },
    { id: 'Tirhut', label: 'Tirhut (तिरहुत)' },
    { id: 'Bhojpur', label: 'Bhojpur (भोजपुर)' },
    { id: 'Anga', label: 'Anga (अंग)' }
  ];

  const durations = [
    { id: 'all', label: language === 'hi' ? 'सभी अवधियाँ' : 'Any Duration' },
    { id: 'short', label: language === 'hi' ? '3 दिन (संक्षिप्त)' : '3 Days (Weekend)' },
    { id: 'medium', label: language === 'hi' ? '4 दिन (क्लासिक)' : '4 Days (Classic)' },
    { id: 'long', label: language === 'hi' ? '5+ दिन (विस्तृत)' : '5+ Days (Immersive)' }
  ];

  const hasActiveFilters = selectedTheme !== 'all' || selectedDuration !== 'all' || selectedRegion !== 'all' || searchQuery.trim() !== '';

  const handleClearFilters = () => {
    onSelectTheme('all');
    onSelectDuration('all');
    onSelectRegion('all');
    onSearchChange('');
  };

  return (
    <div id="journeys-discovery-section" className="space-y-6 mb-10">
      {/* Editorial intro banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            {language === 'hi' ? 'कथात्मक खोज' : 'Editorial Discovery'}
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] mt-1">
            {language === 'hi' ? 'कहानियों के आधार पर यात्रा चुनें' : 'Discover Journeys by Story'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#A89F93] mt-1">
            {language === 'hi'
              ? 'पर्यटन पैकेज नहीं, बल्कि बिहार के इतिहास, अध्यात्म, स्वाद और लोकशिल्प की जीवंत कहानियाँ।'
              : 'Not generic commercial packages, but coherent cultural narratives connecting landscapes, heritage, and people.'}
          </p>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#8C8276] dark:text-[#7A7369] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            aria-label={language === 'hi' ? 'स्थान, जिला या विषय खोजें' : 'Search journeys by place, district, or theme'}
            placeholder={language === 'hi' ? 'स्थान, जिला या विषय खोजें...' : 'Search by place, district, theme...'}
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#1E2124] dark:text-[#F5F1E8] placeholder-[#8C8276] focus:outline-none focus:border-[#C85A32] dark:focus:border-[#E06C43] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8C8276] hover:text-[#1E2124] dark:hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Story Themes Horizontal Filter Buttons */}
      <div className="space-y-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>{language === 'hi' ? 'कथा विषय (थीम)' : 'Story Themes'}</span>
        </label>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {JOURNEY_CATEGORIES.map(category => (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectTheme(category.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                selectedTheme === category.id
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#14171A] shadow-sm font-bold'
                  : 'bg-white dark:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B]'
              }`}
            >
              <span>{language === 'hi' ? category.hindiLabel : category.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedTheme === category.id
                    ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black font-bold'
                    : 'bg-[#F4EFE6] dark:bg-[#252A30] text-[#5C554E] dark:text-[#A89F93]'
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Secondary Filters: Duration & Region */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FBF9F5] dark:bg-[#16191D] p-3 rounded-2xl border border-[#EADBCE] dark:border-[#2E343B]">
        <div className="flex flex-wrap items-center gap-3">
          {/* Duration dropdown */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#8C8276] dark:text-[#A89F93]" />
            <select
              value={selectedDuration}
              onChange={e => onSelectDuration(e.target.value)}
              aria-label={language === 'hi' ? 'यात्रा अवधि चुनें' : 'Filter journeys by duration'}
              className="bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#2D3238] dark:text-[#C8BFB4] py-1.5 px-2.5 rounded-lg focus:outline-none focus:border-[#C85A32]"
            >
              {durations.map(dur => (
                <option key={dur.id} value={dur.id}>
                  {dur.label}
                </option>
              ))}
            </select>
          </div>

          {/* Region dropdown */}
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#8C8276] dark:text-[#A89F93]" />
            <select
              value={selectedRegion}
              onChange={e => onSelectRegion(e.target.value)}
              aria-label={language === 'hi' ? 'सांस्कृतिक क्षेत्र चुनें' : 'Filter journeys by cultural region'}
              className="bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#2D3238] dark:text-[#C8BFB4] py-1.5 px-2.5 rounded-lg focus:outline-none focus:border-[#C85A32]"
            >
              {regions.map(r => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results counter and reset */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[#5C554E] dark:text-[#A89F93]">
            {language === 'hi' ? `${totalResults} यात्राएँ उपलब्ध` : `Showing ${totalResults} curated journeys`}
          </span>

          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-xs font-bold text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>{language === 'hi' ? 'फ़िल्टर हटाएं' : 'Reset Filters'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
