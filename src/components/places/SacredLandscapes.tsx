import React, { useState } from 'react';
import { LandscapePlace } from '../../types';
import { Sparkles, MapPin, ArrowRight, BookOpen } from 'lucide-react';

interface SacredLandscapesProps {
  places: LandscapePlace[];
  onSelectPlace: (place: LandscapePlace) => void;
  language: 'en' | 'hi';
}

type TraditionFilter = 'All' | 'Buddhist' | 'Jain' | 'Hindu' | 'Sikh' | 'Sufi';

export const SacredLandscapes: React.FC<SacredLandscapesProps> = ({
  places,
  onSelectPlace,
  language
}) => {
  const [selectedTradition, setSelectedTradition] = useState<TraditionFilter>('All');

  // Filter sacred places
  const sacredPlaces = places.filter(p => {
    if (!p.sacredTradition) return false;
    if (selectedTradition === 'All') return true;
    return p.sacredTradition === selectedTradition;
  });

  const traditions: TraditionFilter[] = ['All', 'Buddhist', 'Jain', 'Hindu', 'Sikh', 'Sufi'];

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'आध्यात्मिक धरा' : 'Sacred Heritage'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'पवित्र एवं आध्यात्मिक परिदृश्य' : 'Sacred & Spiritual Landscapes'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Across three millennia, Bihar served as a sanctuary of spiritual inquiry across Buddhist, Jain, Hindu, Sikh, and Sufi traditions.
        </p>
      </div>

      {/* Tradition Selector Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {traditions.map(tradition => {
          const isSelected = selectedTradition === tradition;
          const count = tradition === 'All'
            ? places.filter(p => p.sacredTradition).length
            : places.filter(p => p.sacredTradition === tradition).length;

          return (
            <button
              key={tradition}
              onClick={() => setSelectedTradition(tradition)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border whitespace-nowrap ${
                isSelected
                  ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                  : 'bg-[#FBF9F5] dark:bg-[#16191D] hover:bg-[#F4EFE6] dark:hover:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
              }`}
            >
              <span>{tradition}</span>
              <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-white/80' : 'text-[#8C8276] dark:text-[#948B80]'}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Sacred Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sacredPlaces.map(place => (
          <div
            key={place.id}
            onClick={() => onSelectPlace(place)}
            className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl p-5 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group hover:border-[#C85A32]/40"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider">
                  {place.sacredTradition} Tradition
                </span>
                <span className="text-[11px] font-mono text-[#8C8276] dark:text-[#948B80]">
                  {place.districtName}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors leading-snug">
                  {place.name}
                </h3>
                <div className="text-xs text-[#C85A32] dark:text-[#E06C43] font-semibold mt-0.5">
                  {place.hindiName}
                </div>
              </div>

              <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-3 leading-relaxed">
                {place.intro}
              </p>

              {place.cultureAndTraditions && (
                <div className="p-3 rounded-2xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#948B80] block">
                    Living Traditions & Context
                  </span>
                  <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-2">
                    {place.cultureAndTraditions}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between text-xs">
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
    </section>
  );
};
