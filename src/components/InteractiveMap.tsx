import React from 'react';
import { District } from '../types';
import { ALL_DISTRICTS, REGIONS } from '../data/districts';
import { MapPin, Info, ArrowUpRight, Compass, Sparkles, Filter } from 'lucide-react';

interface InteractiveMapProps {
  onSelectDistrict: (district: District) => void;
  selectedDistrict: District | null;
  language: 'en' | 'hi';
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  onSelectDistrict,
  selectedDistrict,
  language
}) => {
  const [selectedRegion, setSelectedRegion] = React.useState<string>('All');
  const [hoveredDistrict, setHoveredDistrict] = React.useState<District | null>(null);

  const filteredDistricts = selectedRegion === 'All'
    ? ALL_DISTRICTS
    : ALL_DISTRICTS.filter(d => d.region.toLowerCase() === selectedRegion.toLowerCase());

  // Region color map for visual styling
  const regionColorMap: Record<string, { bg: string; text: string; border: string }> = {
    Magadh: { bg: 'bg-amber-500/15', text: 'text-amber-800', border: 'border-amber-500/30' },
    Tirhut: { bg: 'bg-emerald-500/15', text: 'text-emerald-800', border: 'border-emerald-500/30' },
    Mithila: { bg: 'bg-rose-500/15', text: 'text-rose-800', border: 'border-rose-500/30' },
    Bhojpur: { bg: 'bg-blue-500/15', text: 'text-blue-800', border: 'border-blue-500/30' },
    Saran: { bg: 'bg-teal-500/15', text: 'text-teal-800', border: 'border-teal-500/30' },
    Kosi: { bg: 'bg-cyan-500/15', text: 'text-cyan-800', border: 'border-cyan-500/30' },
    Purnia: { bg: 'bg-violet-500/15', text: 'text-violet-800', border: 'border-violet-500/30' },
    Anga: { bg: 'bg-orange-500/15', text: 'text-orange-800', border: 'border-orange-500/30' },
  };

  const activeHover = hoveredDistrict || selectedDistrict || ALL_DISTRICTS[0];

  return (
    <div className="space-y-6">
      {/* Map Header & Controls */}
      <div className="bg-[#F4EFE6] border border-[#EADBCE] rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              <Compass className="w-4 h-4" />
              <span>Cartographic Atlas</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124]">
              {language === 'hi' ? 'बिहार का इंटरएक्टिव मानचित्र' : 'Interactive Map of Bihar'}
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3238]/70 mt-1 max-w-2xl">
              Explore all 38 districts across North and South Bihar, divided by the sacred flow of the Ganga River. Click any district to open its comprehensive dossier.
            </p>
          </div>

          {/* Region Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedRegion('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedRegion === 'All'
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#2D3238] border border-[#EADBCE]'
              }`}
            >
              All (38)
            </button>
            {REGIONS.map(reg => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedRegion === reg.id
                    ? 'bg-[#C85A32] text-white shadow-xs'
                    : 'bg-white/80 hover:bg-white text-[#2D3238] border border-[#EADBCE]'
                }`}
              >
                {reg.name} ({reg.districtCount})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Map Canvas & Live Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual Map Grid Canvas (2 cols) */}
        <div className="lg:col-span-2 bg-gradient-to-b from-[#FBF9F5] to-[#F4EFE6] border border-[#EADBCE] rounded-2xl p-4 sm:p-6 shadow-xs relative overflow-hidden">
          
          {/* North Bihar Indicator */}
          <div className="flex items-center justify-between pb-3 border-b border-[#EADBCE]/70 text-xs font-semibold text-[#2D3238]/60">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              North Bihar (Terai Plains & Mithilanchal)
            </span>
            <span className="text-[11px] text-[#2D3238]/50">Bordering Nepal & Himalayas</span>
          </div>

          {/* District Grid Cells */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 my-4">
            {filteredDistricts.map(district => {
              const isSelected = selectedDistrict?.id === district.id;
              const isHovered = hoveredDistrict?.id === district.id;
              const colorInfo = regionColorMap[district.region] || { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' };

              return (
                <button
                  key={district.id}
                  id={`map-district-btn-${district.slug}`}
                  onClick={() => onSelectDistrict(district)}
                  onMouseEnter={() => setHoveredDistrict(district)}
                  className={`p-2.5 rounded-xl text-left border transition-all relative group flex flex-col justify-between min-h-[82px] ${
                    isSelected
                      ? 'border-[#C85A32] bg-[#C85A32] text-white shadow-md ring-2 ring-[#C85A32]/30 scale-[1.03]'
                      : isHovered
                      ? 'border-[#C85A32]/60 bg-white shadow-md scale-[1.02]'
                      : `${colorInfo.bg} ${colorInfo.border} hover:bg-white`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-amber-200' : 'text-[#2D3238]/60'
                      }`}>
                        {district.region}
                      </span>
                      <ArrowUpRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ${
                        isSelected ? 'text-white' : 'text-[#C85A32]'
                      }`} />
                    </div>
                    <div className="font-serif font-bold text-xs sm:text-sm mt-0.5 leading-tight">
                      {district.name}
                    </div>
                    <div className={`text-[10px] ${
                      isSelected ? 'text-white/80' : 'text-[#2D3238]/60'
                    }`}>
                      {district.hindiName}
                    </div>
                  </div>

                  <div className="text-[9px] truncate mt-1 text-[#2D3238]/60 font-medium">
                    {district.headquarters}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sacred Ganga River Waterway Divider */}
          <div className="my-5 relative py-2 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t-2 border-dashed border-[#2C5D75]/40"></div>
            </div>
            <div className="relative flex items-center gap-2 px-4 py-1 rounded-full bg-[#2C5D75] text-white text-[11px] font-bold shadow-xs">
              <span>🌊 The Sacred Ganga River</span>
              <span className="text-[10px] text-sky-200 font-normal hidden sm:inline">(Flowing West to East: Buxar → Patna → Munger → Bhagalpur)</span>
            </div>
          </div>

          {/* South Bihar Indicator */}
          <div className="flex items-center justify-between pt-2 border-t border-[#EADBCE]/70 text-xs font-semibold text-[#2D3238]/60">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              South Bihar (Magadh, Bhojpur & Chota Nagpur Foothills)
            </span>
            <span className="text-[11px] text-[#2D3238]/50">Ancient Cradle of Dynasties</span>
          </div>
        </div>

        {/* Live Inspector Panel (1 col) */}
        <div className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl p-5 flex flex-col justify-between shadow-xs">
          {activeHover ? (
            <div className="space-y-4">
              {/* Image Preview */}
              <div className="relative h-40 rounded-xl overflow-hidden bg-[#1E2124]">
                <img
                  src={activeHover.heroImage}
                  alt={activeHover.name}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#C85A32]">
                    {activeHover.region}
                  </span>
                  <h3 className="font-serif font-bold text-xl leading-tight mt-1">
                    {activeHover.name} ({activeHover.hindiName})
                  </h3>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#EADBCE]">
                  <span className="text-[#2D3238]/60">Headquarters</span>
                  <span className="font-bold text-[#1E2124]">{activeHover.headquarters}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EADBCE]">
                  <span className="text-[#2D3238]/60">Approx Population</span>
                  <span className="font-bold text-[#1E2124]">{activeHover.populationApprox}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EADBCE]">
                  <span className="text-[#2D3238]/60">Literacy Rate</span>
                  <span className="font-bold text-[#1E2124]">{activeHover.literacyRate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EADBCE]">
                  <span className="text-[#2D3238]/60">Sex Ratio</span>
                  <span className="font-bold text-[#1E2124]">{activeHover.sexRatio} / 1000</span>
                </div>
              </div>

              {/* Why it Matters Callout */}
              <div className="p-3 rounded-lg bg-[#F4EFE6] border border-[#EADBCE] text-xs">
                <span className="font-bold text-[#C85A32] block mb-0.5">Historical Significance:</span>
                <p className="text-[#2D3238] line-clamp-3">
                  {activeHover.whyItMatters}
                </p>
              </div>

              {/* Signature Highlights */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/60 block mb-1.5">
                  Famous For
                </span>
                <div className="flex flex-wrap gap-1">
                  {activeHover.famousFor.slice(0, 3).map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#EADBCE]/60 text-[#1E2124]"
                    >
                      ★ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Open Dossier Button */}
              <button
                onClick={() => onSelectDistrict(activeHover)}
                className="w-full py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#A54420] text-white font-serif font-bold text-sm transition-colors shadow-xs flex items-center justify-center gap-1.5 mt-2"
              >
                <span>Explore Full {activeHover.name} Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-[#2D3238]/50 p-6">
              <MapPin className="w-8 h-8 text-[#C85A32] mb-2" />
              <p className="text-sm">Hover over or click any district to inspect details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
