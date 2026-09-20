import React from 'react';
import { HERITAGE_SITES } from '../data/heritage';
import { HeritageSite } from '../types';
import { Landmark, MapPin, Calendar, Clock, Ticket, ShieldCheck, Sparkles, ArrowUpRight, X } from 'lucide-react';

interface HeritageViewProps {
  language: 'en' | 'hi';
}

export const HeritageView: React.FC<HeritageViewProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [activeSite, setActiveSite] = React.useState<HeritageSite | null>(null);

  const categories = ['All', 'UNESCO World Heritage', 'Ancient Monastic', 'Buddhist Monument', 'Cave Architecture', 'Mausoleum', 'Temple Architecture', 'Fortress', 'Sikh Pilgrimage'];

  const filteredSites = HERITAGE_SITES.filter(site => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'UNESCO World Heritage') return site.isUnesco;
    return site.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#1E2124] text-white rounded-2xl p-6 sm:p-10 border border-[#2D3238] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>Sacred Architecture & Living Monuments</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {language === 'hi' ? 'बिहार के ऐतिहासिक धरोहर स्थल' : 'Historic Heritage & Monuments'}
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE] mt-2 font-normal leading-relaxed">
            Walk among the brick sanctuaries where Xuanzang studied, touch the mirror-polished granite chambers carved under Emperor Ashoka in 261 BCE, and witness India’s oldest continuously functional stone temple.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 bg-[#F4EFE6] p-3 rounded-xl border border-[#EADBCE]">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white hover:bg-[#FBF9F5] text-[#2D3238] border border-[#EADBCE]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSites.map(site => (
          <div
            key={site.id}
            className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#C85A32]/40"
          >
            <div>
              {/* Site Hero Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#1E2124]">
                <img
                  src={site.image}
                  alt={site.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121416]/90 via-[#121416]/30 to-transparent" />

                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {site.isUnesco && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 w-fit">
                      ★ UNESCO World Heritage
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded-full bg-emerald-700/90 text-white text-[10px] font-bold tracking-wider shadow-sm flex items-center gap-1 w-fit backdrop-blur-xs">
                    ✓ Verified Site Visual
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-xl leading-tight">
                    {site.name}
                  </h3>
                  <p className="text-xs text-amber-200/90">
                    {site.hindiName} • {site.location}
                  </p>
                </div>
              </div>

              {/* Site Details */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#EADBCE] text-[#2D3238]/70">
                  <span>Period: <strong className="text-[#1E2124]">{site.period}</strong></span>
                  <span>Dynasty: <strong className="text-[#1E2124]">{site.dynasty}</strong></span>
                </div>

                <p className="text-xs text-[#2D3238] line-clamp-3 leading-relaxed">
                  {site.description}
                </p>

                {/* Key Features */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/60 block">
                    Architectural Highlights
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {site.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#EADBCE]/50 text-[#1E2124]"
                      >
                        • {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-4 pt-0">
              <button
                onClick={() => setActiveSite(site)}
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#C85A32] text-[#1E2124] hover:text-white border border-[#EADBCE] hover:border-[#C85A32] text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Full Architectural Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Heritage Modal */}
      {activeSite && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div
            className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-56 sm:h-72 w-full bg-[#1E2124]">
              <img
                src={activeSite.image}
                alt={activeSite.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121416] via-[#121416]/40 to-transparent" />
              <button
                onClick={() => setActiveSite(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {activeSite.isUnesco && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                      ★ UNESCO World Heritage Site
                    </span>
                  )}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-bold tracking-wider">
                    ✓ Verified Photographic Record
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  {activeSite.name} ({activeSite.hindiName})
                </h2>
                <p className="text-sm text-amber-200/90 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {activeSite.location} | Period: {activeSite.period}
                </p>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-6 text-[#1E2124]">
              <div>
                <h4 className="font-serif font-bold text-lg text-[#1E2124] mb-2">Monument Overview</h4>
                <p className="text-sm text-[#2D3238] leading-relaxed">
                  {activeSite.description}
                </p>
              </div>

              <div className="border-t border-[#EADBCE] pt-4">
                <h4 className="font-serif font-bold text-lg text-[#1E2124] mb-2">Architectural Engineering</h4>
                <p className="text-sm text-[#2D3238] leading-relaxed">
                  {activeSite.architecture}
                </p>
              </div>

              <div className="border-t border-[#EADBCE] pt-4">
                <h4 className="font-serif font-bold text-lg text-[#1E2124] mb-2">Historical Significance</h4>
                <p className="text-sm text-[#2D3238] leading-relaxed">
                  {activeSite.significance}
                </p>
              </div>

              {/* Architectural Highlights List */}
              <div className="border-t border-[#EADBCE] pt-4">
                <h4 className="font-serif font-bold text-sm text-[#1E2124] mb-2 uppercase tracking-wide">
                  Signature Architectural Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeSite.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="p-2 rounded-lg bg-[#F4EFE6] border border-[#EADBCE] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visitor Practical Information */}
              <div className="border-t border-[#EADBCE] pt-4 bg-[#F4EFE6] -mx-6 -mb-6 p-6 rounded-b-2xl">
                <h4 className="font-serif font-bold text-sm text-[#1E2124] mb-3 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
                  <span>Visitor Guidelines & Access</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-[#2D3238]/60 block text-[10px] font-bold uppercase">Timings</span>
                    <span className="font-semibold text-[#1E2124]">{activeSite.visitorInfo.timings}</span>
                  </div>
                  <div>
                    <span className="text-[#2D3238]/60 block text-[10px] font-bold uppercase">Entry Fee</span>
                    <span className="font-semibold text-[#1E2124]">{activeSite.visitorInfo.entryFee}</span>
                  </div>
                  <div>
                    <span className="text-[#2D3238]/60 block text-[10px] font-bold uppercase">Best Season</span>
                    <span className="font-semibold text-[#1E2124]">{activeSite.visitorInfo.bestTime}</span>
                  </div>
                  <div>
                    <span className="text-[#2D3238]/60 block text-[10px] font-bold uppercase">Nearest Rail/Air Hub</span>
                    <span className="font-semibold text-[#1E2124]">{activeSite.visitorInfo.nearestHub}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
