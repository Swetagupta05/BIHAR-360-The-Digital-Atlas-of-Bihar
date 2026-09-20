import React from 'react';
import { ARTS_AND_CRAFTS } from '../data/arts';
import { ArtCraft } from '../types';
import { Palette, Sparkles, Award, Brush, Check } from 'lucide-react';

interface ArtsViewProps {
  language: 'en' | 'hi';
}

export const ArtsView: React.FC<ArtsViewProps> = ({ language }) => {
  const [selectedArt, setSelectedArt] = React.useState<ArtCraft>(ARTS_AND_CRAFTS[0]);
  const [activeStyleIdx, setActiveStyleIdx] = React.useState<number>(0);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#1E2124] text-white rounded-2xl p-6 sm:p-10 border border-[#2D3238] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>Living Crafts & Indigenous Folk Art</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {language === 'hi' ? 'बिहार की लोक कलाएं एवं हस्तशिल्प' : 'Folk Arts, Textiles & Handicrafts'}
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE] mt-2 font-normal leading-relaxed">
            From the sacred mud-wall murals of Mithila and the three-colored snake scrolls of Angika Manjusha to the golden wild tussar silk of Bhagalpur and the recycled storytelling quilts of Sujuni.
          </p>
        </div>
      </div>

      {/* Main Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left selector menu (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="font-serif font-bold text-base text-[#1E2124] px-1 mb-2">
            Select Art Tradition:
          </h3>
          {ARTS_AND_CRAFTS.map(art => {
            const isSelected = selectedArt.id === art.id;
            return (
              <button
                key={art.id}
                onClick={() => {
                  setSelectedArt(art);
                  setActiveStyleIdx(0);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'border-[#C85A32] bg-[#C85A32] text-white shadow-md'
                    : 'border-[#EADBCE] bg-[#FBF9F5] hover:bg-[#F4EFE6] text-[#1E2124]'
                }`}
              >
                <div>
                  <div className="font-serif font-bold text-sm">
                    {art.name}
                  </div>
                  <div className={`text-xs ${isSelected ? 'text-amber-100' : 'text-[#2D3238]/70'}`}>
                    {art.originRegion}
                  </div>
                </div>
                {art.giTag && (
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    GI Tag
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right detailed art canvas (8 cols) */}
        <div className="lg:col-span-8 bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl p-6 space-y-6 shadow-xs">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#EADBCE]">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#C85A32]/10 text-[#C85A32] text-xs font-bold uppercase tracking-wider">
                  {selectedArt.category}
                </span>
                {selectedArt.giTag && (
                  <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase">
                    ★ GI Certified Heritage
                  </span>
                )}
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] mt-1.5">
                {selectedArt.name} ({selectedArt.hindiName})
              </h2>
              <p className="text-xs text-[#2D3238]/70 mt-0.5">
                Geographic Hearth: {selectedArt.originRegion}
              </p>
            </div>
          </div>

          {/* Verified Art Visual Banner */}
          {selectedArt.image && (
            <div className="relative h-52 sm:h-72 w-full rounded-xl overflow-hidden border border-[#EADBCE]">
              <img
                src={selectedArt.image}
                alt={selectedArt.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-800/90 text-white text-[10px] font-bold tracking-wider backdrop-blur-xs flex items-center gap-1 shadow-xs">
                ✓ Authentic Verified Traditional Craft
              </div>
            </div>
          )}

          {/* Overview & History */}
          <div className="space-y-4 text-sm text-[#2D3238] leading-relaxed">
            <div>
              <h4 className="font-serif font-bold text-base text-[#1E2124] mb-1">Tradition & Aesthetics</h4>
              <p>{selectedArt.description}</p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-base text-[#1E2124] mb-1">Mythological & Historical Roots</h4>
              <p>{selectedArt.history}</p>
            </div>
          </div>

          {/* Interactive Five Styles Showcase (for Madhubani / Manjusha) */}
          {selectedArt.fiveStyles && (
            <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#EADBCE] space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#1E2124] uppercase tracking-wider flex items-center gap-2">
                <Brush className="w-4 h-4 text-[#C85A32]" />
                <span>Distinct Stylistic Schools & Variants</span>
              </h4>

              <div className="flex flex-wrap gap-1.5">
                {selectedArt.fiveStyles.map((style, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStyleIdx(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                      activeStyleIdx === idx
                        ? 'bg-[#C85A32] text-white shadow-xs'
                        : 'bg-white text-[#2D3238] hover:bg-[#FBF9F5] border border-[#EADBCE]'
                    }`}
                  >
                    {style.name}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#EADBCE] text-xs text-[#2D3238] leading-relaxed">
                <strong className="text-[#C85A32] block mb-1">
                  {selectedArt.fiveStyles[activeStyleIdx].name} Style:
                </strong>
                {selectedArt.fiveStyles[activeStyleIdx].description}
              </div>
            </div>
          )}

          {/* Techniques & Natural Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-[#EADBCE] bg-white space-y-2">
              <h4 className="font-serif font-bold text-xs uppercase tracking-wide text-[#1E2124]">
                Creation Techniques
              </h4>
              <p className="text-xs text-[#2D3238] leading-relaxed">
                {selectedArt.techniques}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#EADBCE] bg-white space-y-2">
              <h4 className="font-serif font-bold text-xs uppercase tracking-wide text-[#1E2124]">
                Indigenous Natural Materials
              </h4>
              <ul className="space-y-1 text-xs text-[#2D3238]">
                {selectedArt.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]"></span>
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Master Artisans Badge */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wide text-amber-900 mb-1.5 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Pioneering Master Artisans & National Honorees</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedArt.masterArtisans.map((artisan, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-white text-amber-950 border border-amber-300 font-medium"
                >
                  🏅 {artisan}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
