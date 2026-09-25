import React from 'react';
import { Search, Filter, Calendar, Sparkles, X } from 'lucide-react';
import { FestivalSeason, FestivalTradition } from '../../types';

interface FestivalFiltersProps {
  selectedSeason: FestivalSeason | 'all';
  onSelectSeason: (season: FestivalSeason | 'all') => void;
  selectedTradition: FestivalTradition;
  onSelectTradition: (tradition: FestivalTradition) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  language: 'en' | 'hi';
  totalCount: number;
  filteredCount: number;
}

export const FestivalFilters: React.FC<FestivalFiltersProps> = ({
  selectedSeason,
  onSelectSeason,
  selectedTradition,
  onSelectTradition,
  searchQuery,
  onSearchChange,
  language,
  totalCount,
  filteredCount
}) => {
  const seasons: Array<{ id: FestivalSeason | 'all'; labelEn: string; labelHi: string; icon: string }> = [
    { id: 'all', labelEn: 'All Seasons', labelHi: 'सभी ऋतुएं', icon: '✦' },
    { id: 'autumn', labelEn: 'Autumn / Sharat', labelHi: 'शरद / हेमंत (Chhath, Sama)', icon: '🍂' },
    { id: 'winter', labelEn: 'Winter / Sheeta', labelHi: 'शीत ऋतु (Sankranti, Prakash Parv)', icon: '❄️' },
    { id: 'spring', labelEn: 'Spring / Vasant', labelHi: 'वसंत ऋतु (Sufi Urs, Chaiti Chhath)', icon: '🌸' },
    { id: 'summer', labelEn: 'Summer / Grishma', labelHi: 'ग्रीष्म ऋतु (Buddha Purnima)', icon: '☀️' },
    { id: 'monsoon', labelEn: 'Monsoon / Varsha', labelHi: 'वर्षा ऋतु (Karam Parva)', icon: '🌧️' }
  ];

  const traditions: Array<{ id: FestivalTradition; labelEn: string; labelHi: string }> = [
    { id: 'all', labelEn: 'All Traditions', labelHi: 'सभी परंपराएं' },
    { id: 'chhath', labelEn: 'Chhath Mahaparva', labelHi: 'छठ महापर्व' },
    { id: 'folk', labelEn: 'Folk Traditions', labelHi: 'लोक परंपराएं (सामा, करमा)' },
    { id: 'hindu', labelEn: 'Hindu Traditions', labelHi: 'हिंदू परंपराएं (गया पितृपक्ष)' },
    { id: 'sikh', labelEn: 'Sikh Traditions', labelHi: 'सिख परंपरा (प्रकाश पर्व)' },
    { id: 'buddhist', labelEn: 'Buddhist Traditions', labelHi: 'बौद्ध परंपरा (बुद्ध पूर्णिमा)' },
    { id: 'sufi', labelEn: 'Sufi Traditions', labelHi: 'सूफी परंपरा (मनेर उर्स)' },
    { id: 'harvest', labelEn: 'Harvest Festivals', labelHi: 'कृषि एवं फसल उत्सव' },
    { id: 'regional', labelEn: 'Regional & Fairs', labelHi: 'क्षेत्रीय मेले एवं महोत्सव' }
  ];

  const hasActiveFilters = selectedSeason !== 'all' || selectedTradition !== 'all' || searchQuery.trim() !== '';

  const handleClearFilters = () => {
    onSelectSeason('all');
    onSelectTradition('all');
    onSearchChange('');
  };

  return (
    <div className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-5 sm:p-7 space-y-5 shadow-xs">
      {/* Top Row: Search & Count summary */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#8C8276] dark:text-[#A89F93] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'त्योहार, अनुष्ठान, जिला या प्रसाद खोजें...'
                : 'Search festivals, rituals, districts, prasad...'
            }
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs sm:text-sm text-[#1E2124] dark:text-[#F5F1E8] placeholder-[#8C8276] dark:placeholder-[#A89F93] focus:outline-hidden focus:ring-2 focus:ring-[#C85A32]/30 focus:border-[#C85A32]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#8C8276] dark:text-[#A89F93] hover:text-[#1E2124] dark:hover:text-[#F5F1E8]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
          <span className="text-[#5A524A] dark:text-[#C8BFB4] font-mono">
            Showing <strong className="text-[#C85A32] dark:text-[#E06C43]">{filteredCount}</strong> of {totalCount} traditions
          </span>
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-[#C85A32] dark:text-[#E06C43] hover:text-[#A54420] font-semibold underline flex items-center gap-1"
            >
              <span>Reset</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Row 1: Season Selector (Natural Cycle) */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs text-[#8C8276] dark:text-[#A89F93] font-mono uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
          <span>{language === 'hi' ? 'ऋतु के अनुसार खोजें (Season)' : 'Filter by Season & Climate'}</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {seasons.map(s => {
            const isSelected = selectedSeason === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectSeason(s.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 focus:outline-hidden ${
                  isSelected
                    ? 'bg-[#C85A32] text-white shadow-xs font-semibold'
                    : 'bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#4A453E] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B]'
                }`}
              >
                <span>{s.icon}</span>
                <span>{language === 'hi' ? s.labelHi : s.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 2: Cultural Tradition / Category Filters */}
      <div className="space-y-2 pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B]">
        <div className="flex items-center gap-1.5 text-xs text-[#8C8276] dark:text-[#A89F93] font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
          <span>{language === 'hi' ? 'परंपरा श्रेणी (Tradition Category)' : 'Filter by Cultural Tradition'}</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {traditions.map(t => {
            const isSelected = selectedTradition === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onSelectTradition(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all focus:outline-hidden ${
                  isSelected
                    ? 'bg-[#1E2124] dark:bg-[#2E343B] text-white shadow-xs font-semibold'
                    : 'bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#4A453E] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B]'
                }`}
              >
                {language === 'hi' ? t.labelHi : t.labelEn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
