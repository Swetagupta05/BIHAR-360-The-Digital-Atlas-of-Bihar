import React, { useState } from 'react';
import { LandscapePlace, LandscapeCategory } from '../../types';
import { Search, MapPin, Compass, ArrowRight, Trees, Filter, Map } from 'lucide-react';

interface LandscapeExplorerProps {
  places: LandscapePlace[];
  onSelectPlace: (place: LandscapePlace) => void;
  language: 'en' | 'hi';
}

const CATEGORIES: LandscapeCategory[] = [
  'All',
  'Rivers & River Landscapes',
  'Wetlands & Lakes',
  'Forests & Wildlife',
  'Hills & Rock Landscapes',
  'Plains & Agricultural Landscapes',
  'Caves & Geological Sites',
  'Archaeological Landscapes',
  'Sacred Landscapes'
];

export const LandscapeExplorer: React.FC<LandscapeExplorerProps> = ({
  places,
  onSelectPlace,
  language
}) => {
  const [selectedCategory, setSelectedCategory] = useState<LandscapeCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPlaces = places.filter(place => {
    const matchesCategory = selectedCategory === 'All' || place.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      place.name.toLowerCase().includes(query) ||
      place.hindiName.includes(query) ||
      place.districtName.toLowerCase().includes(query) ||
      place.landscapeType.toLowerCase().includes(query) ||
      place.whyItMatters.toLowerCase().includes(query) ||
      place.intro.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'भू-परिदृश्य खोज' : 'Landscape Discovery'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'प्राकृतिक स्वरूप अनुसार अन्वेषण' : 'Explore by Landscape'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Filter and discover Bihar’s geography across river basins, volcanic monoliths, wetlands, and ancient cities.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="space-y-3">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C8276] dark:text-[#948B80]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'स्थान, जनपद या परिदृश्य खोजें...' : 'Search places by name, district, or landscape...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] text-xs sm:text-sm text-[#1E2124] dark:text-[#F5F1E8] placeholder-[#8C8276] dark:placeholder-[#948B80] focus:outline-hidden focus:ring-2 focus:ring-[#C85A32]/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8276] hover:text-[#1E2124] dark:hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All'
              ? places.length
              : places.filter(p => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  isSelected
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                    : 'bg-[#FBF9F5] dark:bg-[#16191D] hover:bg-[#F4EFE6] dark:hover:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-white/80' : 'text-[#8C8276] dark:text-[#948B80]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Places */}
      {filteredPlaces.length === 0 ? (
        <div className="p-12 text-center bg-[#FBF9F5] dark:bg-[#16191D] rounded-3xl border border-dashed border-[#EADBCE] dark:border-[#2E343B] space-y-3">
          <Compass className="w-8 h-8 text-[#8C8276] dark:text-[#948B80] mx-auto opacity-50" />
          <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8]">
            {language === 'hi' ? 'कोई स्थान नहीं मिला' : 'No Landscapes Found'}
          </h3>
          <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] max-w-md mx-auto">
            {language === 'hi'
              ? 'कृपया अन्य वर्ग चुनें या खोज शब्द बदलें।'
              : 'Try clearing your search query or choosing another landscape category.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map(place => (
            <div
              key={place.id}
              onClick={() => onSelectPlace(place)}
              className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group hover:border-[#C85A32]/40"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-[#2D3238]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#EADBCE] text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {place.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] text-[#EADBCE] font-mono">
                      {place.districtName} District
                    </span>
                    <h3 className="font-serif font-bold text-lg leading-tight truncate">
                      {place.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43]">
                    {place.landscapeType}
                  </div>

                  <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-3 leading-relaxed">
                    {place.whyItMatters || place.intro}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#EADBCE] dark:border-[#2E343B] mt-2 pt-3 text-xs">
                <span className="text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-[#C85A32] dark:text-[#E06C43]" />
                  <span className="capitalize">{place.districtName}</span>
                </span>

                <span className="font-semibold text-[#C85A32] dark:text-[#E06C43] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{language === 'hi' ? 'विस्तार से' : 'Read Profile'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
