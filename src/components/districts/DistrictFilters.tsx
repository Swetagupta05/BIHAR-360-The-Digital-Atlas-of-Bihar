import React from 'react';
import { Search, Filter, Bookmark, Grid3X3, Layers, X, ArrowDownAZ } from 'lucide-react';
import { REGIONS } from '../../data/districts';

export type ViewMode = 'grid' | 'regions';
export type SortOption = 'name' | 'region' | 'places';

interface DistrictFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  bookmarkedOnly: boolean;
  onToggleBookmarkedOnly: () => void;
  bookmarkedCount: number;
  totalCount: number;
  filteredCount: number;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  language: 'en' | 'hi';
}

export const DistrictFilters: React.FC<DistrictFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedRegion,
  onSelectRegion,
  bookmarkedOnly,
  onToggleBookmarkedOnly,
  bookmarkedCount,
  totalCount,
  filteredCount,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  language
}) => {
  return (
    <div className="bg-[#F4EFE6] dark:bg-[#1A1D20] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-4 sm:p-5 space-y-4 shadow-xs transition-colors">
      {/* Top Row: Search Input, View Mode, and Sort */}
      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A6B5D] dark:text-[#9EA8B3]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'ज़िला, पहचान, धरोहर या शिल्प खोजें...'
                : 'Search by district name, identity, heritage, or craft...'
            }
            className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#3D454F] focus:border-[#C85A32] rounded-xl text-sm text-[#1E2124] dark:text-[#F5F1E8] placeholder:text-[#7A6B5D]/60 dark:placeholder:text-[#C8BFB4]/50 focus:outline-none focus:ring-2 focus:ring-[#C85A32]/10 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A6B5D] hover:text-[#1E2124] dark:text-[#9EA8B3] dark:hover:text-[#F5F1E8] p-0.5"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Action Controls: Saved Toggle, View Mode, Sort */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#2D3238] dark:text-[#C8BFB4]">
          {/* Saved / Bookmarks Filter */}
          <button
            type="button"
            onClick={onToggleBookmarkedOnly}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 border ${
              bookmarkedOnly
                ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                : 'bg-white dark:bg-[#252A30] hover:bg-[#FBF9F5] dark:hover:bg-[#2C3138] text-[#2D3238] dark:text-[#F5F1E8] border-[#EADBCE] dark:border-[#3D454F]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarkedOnly ? 'fill-current' : ''}`} />
            <span>
              {language === 'hi' ? 'सहेजे गए' : 'Saved'} ({bookmarkedCount})
            </span>
          </button>

          {/* View Mode Toggle: Grid vs. Regional Chapters */}
          <div className="inline-flex rounded-xl bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#3D454F] p-0.5">
            <button
              type="button"
              onClick={() => onViewModeChange('grid')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#1E2124] dark:bg-[#3D454F] text-white shadow-xs'
                  : 'text-[#7A6B5D] dark:text-[#9EA8B3] hover:text-[#1E2124] dark:hover:text-[#F5F1E8]'
              }`}
              title="Continuous Grid View"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {language === 'hi' ? 'ग्रिड' : 'Editorial Grid'}
              </span>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('regions')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                viewMode === 'regions'
                  ? 'bg-[#1E2124] dark:bg-[#3D454F] text-white shadow-xs'
                  : 'text-[#7A6B5D] dark:text-[#9EA8B3] hover:text-[#1E2124] dark:hover:text-[#F5F1E8]'
              }`}
              title="Group by Cultural Regions"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {language === 'hi' ? 'सांस्कृतिक क्षेत्र' : 'By Region'}
              </span>
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-1 bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#3D454F] rounded-xl px-2.5 py-1.5">
            <ArrowDownAZ className="w-3.5 h-3.5 text-[#7A6B5D] dark:text-[#9EA8B3]" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="bg-transparent text-xs text-[#1E2124] dark:text-[#F5F1E8] font-medium focus:outline-none cursor-pointer pr-1"
            >
              <option value="name" className="dark:bg-[#252A30]">Name (A–Z)</option>
              <option value="region" className="dark:bg-[#252A30]">Region Order</option>
              <option value="places" className="dark:bg-[#252A30]">Key Sites Count</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Row: Region Filter Pills & Results Count */}
      <div className="pt-3 border-t border-[#EADBCE] dark:border-[#2E343B] flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-[#7A6B5D] dark:text-[#9EA8B3] mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#C85A32]" />
            <span>Region:</span>
          </span>

          {/* All Button */}
          <button
            type="button"
            onClick={() => onSelectRegion('All')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              selectedRegion === 'All'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white dark:bg-[#252A30] hover:bg-[#FBF9F5] dark:hover:bg-[#2C3138] text-[#2D3238] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#3D454F]'
            }`}
          >
            All (38)
          </button>

          {/* 8 Cultural Regions */}
          {REGIONS.map((reg) => {
            const isSelected = selectedRegion.toLowerCase() === reg.id.toLowerCase();
            return (
              <button
                key={reg.id}
                type="button"
                onClick={() => onSelectRegion(reg.id)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#C85A32] text-white shadow-xs'
                    : 'bg-white dark:bg-[#252A30] hover:bg-[#FBF9F5] dark:hover:bg-[#2C3138] text-[#2D3238] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#3D454F]'
                }`}
              >
                {reg.name} ({reg.districtCount})
              </button>
            );
          })}
        </div>

        {/* Counter Status */}
        <div className="text-xs text-[#7A6B5D] dark:text-[#9EA8B3] shrink-0 font-medium">
          {filteredCount === totalCount ? (
            <span>Showing all {totalCount} districts</span>
          ) : (
            <span>
              Showing <strong className="text-[#1E2124] dark:text-[#F5F1E8]">{filteredCount}</strong> of {totalCount} districts
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
