import React, { useState } from 'react';
import { BIHAR_RIVERS } from '../../data/places';
import { RiverDetail } from '../../types';
import { Waves, MapPin, Compass, ShieldCheck, Fish, BookOpen, ArrowRight } from 'lucide-react';

interface RiversOfBiharProps {
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
}

export const RiversOfBihar: React.FC<RiversOfBiharProps> = ({ language, onSelectDistrict }) => {
  const [selectedRiverId, setSelectedRiverId] = useState<string>('ganga');

  const activeRiver = BIHAR_RIVERS.find(r => r.id === selectedRiverId) || BIHAR_RIVERS[0];

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Waves className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'जीवनदायिनी जलधाराएं' : 'The Waters of Life'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार की प्रमुख नदियां' : 'Rivers of Bihar'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          The perennial snowmelt and plateau streams that carve the plains, sustain agriculture, and hold millennia of sacred memory.
        </p>
      </div>

      {/* River Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {BIHAR_RIVERS.map(river => {
          const isSelected = selectedRiverId === river.id;
          return (
            <button
              key={river.id}
              onClick={() => setSelectedRiverId(river.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all border whitespace-nowrap ${
                isSelected
                  ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                  : 'bg-[#FBF9F5] dark:bg-[#16191D] hover:bg-[#F4EFE6] dark:hover:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{river.name.split(' ')[0]}</span>
                <span className="text-[10px] opacity-75 font-normal">({river.hindiName.split(' ')[0]})</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected River Detailed Visual Card */}
      <div className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* River Image Side */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-[#2D3238]">
            <img
              src={activeRiver.image}
              alt={activeRiver.name}
              className="w-full h-full object-cover filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:hidden" />

            <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden space-y-1">
              <h3 className="font-serif font-bold text-2xl">
                {activeRiver.name}
              </h3>
              <p className="text-xs text-[#EADBCE]">
                {activeRiver.origin}
              </p>
            </div>
          </div>

          {/* River Content Side */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
            <div className="hidden lg:block space-y-1 border-b border-[#EADBCE] dark:border-[#2E343B] pb-3">
              <div className="flex items-center justify-between text-xs text-[#C85A32] dark:text-[#E06C43] font-mono">
                <span>Course in Bihar: {activeRiver.lengthInBiharKm ? `~${activeRiver.lengthInBiharKm} km` : 'Perennial flow'}</span>
                <span>{activeRiver.hindiName}</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
                {activeRiver.name}
              </h3>
            </div>

            {/* Origin & Confluence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#948B80]">
                  Origin Source
                </span>
                <p className="font-medium text-[#1E2124] dark:text-[#F5F1E8]">
                  {activeRiver.origin}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#948B80]">
                  Course & Confluence
                </span>
                <p className="font-medium text-[#1E2124] dark:text-[#F5F1E8]">
                  {activeRiver.confluence}
                </p>
              </div>
            </div>

            {/* Geographic Role */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                Geographic & Ecological Role
              </h4>
              <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                {activeRiver.geographicRole}
              </p>
            </div>

            {/* Cultural & Historical Significance */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                Cultural & Sacred Significance
              </h4>
              <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                {activeRiver.culturalSignificance}
              </p>
            </div>

            {/* Key Places Along the River */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#948B80] block">
                Key Places Along This River
              </span>
              <div className="flex flex-wrap gap-2">
                {activeRiver.keyPlacesAlong.map((place, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#2D3238] dark:text-[#C8BFB4]"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>

            {/* Notable Riverine Species */}
            {activeRiver.notableSpecies && activeRiver.notableSpecies.length > 0 && (
              <div className="p-3 rounded-2xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] flex items-start gap-2.5">
                <Fish className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-[#2D3238] dark:text-[#C8BFB4]">
                  <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Key Aquatic Species: </strong>
                  {activeRiver.notableSpecies.join(' • ')}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
