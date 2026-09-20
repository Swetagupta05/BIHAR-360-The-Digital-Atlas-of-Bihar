import React from 'react';
import { District } from '../types';
import { ALL_DISTRICTS, REGIONS } from '../data/districts';
import { DistrictCard } from './districts/DistrictCard';
import { DistrictSpotlight } from './districts/DistrictSpotlight';
import { DistrictFilters, ViewMode, SortOption } from './districts/DistrictFilters';
import { Compass, RotateCcw } from 'lucide-react';

interface DistrictsGridProps {
  onSelectDistrict: (district: District) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (district: District) => void;
  language: 'en' | 'hi';
}

export const DistrictsGrid: React.FC<DistrictsGridProps> = ({
  onSelectDistrict,
  bookmarkedIds,
  onToggleBookmark,
  language
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedRegion, setSelectedRegion] = React.useState<string>('All');
  const [bookmarkedOnly, setBookmarkedOnly] = React.useState<boolean>(false);
  const [viewMode, setViewMode] = React.useState<ViewMode>('grid');
  const [sortBy, setSortBy] = React.useState<SortOption>('name');

  // Filter and sort districts
  const filteredDistricts = React.useMemo(() => {
    return ALL_DISTRICTS.filter(d => {
      // Search matching across name, Hindi name, HQ, identity, famousFor
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        d.name.toLowerCase().includes(query) ||
        d.hindiName.includes(query) ||
        d.headquarters.toLowerCase().includes(query) ||
        (d.identityStatement && d.identityStatement.toLowerCase().includes(query)) ||
        d.famousFor.some(f => f.toLowerCase().includes(query));

      // Region matching
      const matchesRegion =
        selectedRegion === 'All' || d.region.toLowerCase() === selectedRegion.toLowerCase();

      // Bookmark filter
      const matchesBookmark = !bookmarkedOnly || bookmarkedIds.includes(d.id);

      return matchesSearch && matchesRegion && matchesBookmark;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'region') return a.region.localeCompare(b.region);
      if (sortBy === 'places') return b.importantPlaces.length - a.importantPlaces.length;
      return 0;
    });
  }, [searchQuery, selectedRegion, bookmarkedOnly, bookmarkedIds, sortBy]);

  // Group districts by region for the 'regions' view mode
  const districtsByRegion = React.useMemo(() => {
    const map: Record<string, District[]> = {};
    REGIONS.forEach(reg => {
      map[reg.id] = [];
    });
    filteredDistricts.forEach(d => {
      if (!map[d.region]) {
        map[d.region] = [];
      }
      map[d.region].push(d);
    });
    return map;
  }, [filteredDistricts]);

  const isFilteringActive = searchQuery !== '' || selectedRegion !== 'All' || bookmarkedOnly;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setBookmarkedOnly(false);
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Editorial Hero Banner */}
      <header className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E2124] via-[#241F1C] to-[#1E2124] text-white p-7 sm:p-12 border border-[#3E342F] shadow-lg">
        {/* Subtle Decorative River Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C85A32_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#EADBCE] text-xs font-semibold tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>
              {language === 'hi' ? 'बिहार का सांस्कृतिक दिग्दर्शन' : 'Digital Cultural Atlas of Bihar'}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              {language === 'hi' ? (
                <>
                  38 ज़िले। <span className="text-amber-200">38 पहचानें।</span>
                </>
              ) : (
                <>
                  38 Districts. <span className="text-amber-200">38 Identities.</span>
                </>
              )}
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-[#EADBCE]/90 font-normal">
              {language === 'hi'
                ? 'अनगिनत गाथाएँ, प्राचीन विरासत और जन-जीवन का दर्शन।'
                : 'Countless stories, ancient heritages, and living traditions.'}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#D4C7B8] leading-relaxed max-w-3xl pt-1">
            {language === 'hi'
              ? 'मगध के प्राचीन स्तूपों और मिथिला के चित्रित आँगनों से लेकर चम्पारण के साल वनों और गंगा-कोसी के उर्वर कछारों तक—बिहार के प्रत्येक ज़िले की विशिष्ट पहचान और प्रामाणिक धरोहर का आख्यान।'
              : 'From the monastic stupas of Magadh and the painted courtyards of Mithilanchal to the tiger canopies of Champaran and the holy Ganga riverlands. Discover each district through verified landmarks, cultural legacies, and authentic identities.'}
          </p>

          {/* Cultural Regions Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-[#EADBCE]/80 border-t border-white/10">
            <span className="font-bold text-amber-200 uppercase tracking-wider text-[11px]">
              8 Cultural Realms:
            </span>
            {REGIONS.map((reg, idx) => (
              <React.Fragment key={reg.id}>
                <span className="hover:text-white transition-colors">
                  {reg.name} ({reg.hindiName})
                </span>
                {idx < REGIONS.length - 1 && <span className="text-white/30">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      {/* 2. Cultural Spotlight (visible when not actively filtering) */}
      {!isFilteringActive && (
        <section aria-label="Cultural Spotlight">
          <DistrictSpotlight
            districts={ALL_DISTRICTS}
            onSelectDistrict={onSelectDistrict}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={onToggleBookmark}
            language={language}
          />
        </section>
      )}

      {/* 3. Search & Region Filter Bar */}
      <section aria-label="District Filters">
        <DistrictFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
          bookmarkedOnly={bookmarkedOnly}
          onToggleBookmarkedOnly={() => setBookmarkedOnly(prev => !prev)}
          bookmarkedCount={bookmarkedIds.length}
          totalCount={ALL_DISTRICTS.length}
          filteredCount={filteredDistricts.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          sortBy={sortBy}
          onSortChange={setSortBy}
          language={language}
        />
      </section>

      {/* 4. District Cards Collection */}
      <section aria-label="Districts Directory">
        {filteredDistricts.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 px-4 bg-[#F4EFE6] rounded-3xl border border-[#EADBCE] space-y-4">
            <Compass className="w-12 h-12 text-[#C85A32]/60 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-[#1E2124]">
                {language === 'hi' ? 'कोई ज़िला नहीं मिला' : 'No districts found'}
              </h3>
              <p className="text-sm text-[#7A6B5D] max-w-md mx-auto">
                {language === 'hi'
                  ? 'खोज शब्द बदलकर देखें या क्षेत्रीय फ़िल्टर रीसेट करें।'
                  : 'Try searching with another name or reset your active filters.'}
              </p>
            </div>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C85A32] text-white text-xs font-bold hover:bg-[#A8431E] transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'फ़िल्टर रीसेट करें' : 'Reset All Filters'}</span>
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Editorial Grid Layout: 3 Columns with generous breathing room */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredDistricts.map(district => (
              <DistrictCard
                key={district.id}
                district={district}
                isBookmarked={bookmarkedIds.includes(district.id)}
                onToggleBookmark={onToggleBookmark}
                onSelectDistrict={onSelectDistrict}
                language={language}
              />
            ))}
          </div>
        ) : (
          /* Cultural Regions Chapters Layout */
          <div className="space-y-12">
            {REGIONS.map(reg => {
              const regionDistricts = districtsByRegion[reg.id] || [];
              if (regionDistricts.length === 0) return null;

              return (
                <div key={reg.id} className="space-y-6">
                  {/* Region Chapter Header */}
                  <div className="border-b border-[#EADBCE] pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124]">
                          {reg.name}
                        </h2>
                        <span className="font-serif text-xl text-[#C85A32]">
                          {reg.hindiName}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EADBCE] text-[#2D3238] font-bold">
                          {regionDistricts.length} {regionDistricts.length === 1 ? 'District' : 'Districts'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#7A6B5D] mt-1 max-w-2xl">
                        {reg.description}
                      </p>
                    </div>
                  </div>

                  {/* Region District Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {regionDistricts.map(district => (
                      <DistrictCard
                        key={district.id}
                        district={district}
                        isBookmarked={bookmarkedIds.includes(district.id)}
                        onToggleBookmark={onToggleBookmark}
                        onSelectDistrict={onSelectDistrict}
                        language={language}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
