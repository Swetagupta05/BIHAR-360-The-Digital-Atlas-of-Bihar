import React from 'react';
import { HeritageSite, District } from '../../types';
import { getDistrictById } from '../../data/districts';
import { Landmark, ArrowRight, Award, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface HeritageArchiveProps {
  sites: HeritageSite[];
  selectedCategoryId: string;
  onOpenSite: (site: HeritageSite) => void;
  onSelectDistrict?: (district: District) => void;
  language?: 'en' | 'hi';
}

export const HeritageArchive: React.FC<HeritageArchiveProps> = ({
  sites,
  selectedCategoryId,
  onOpenSite,
  onSelectDistrict,
  language = 'en'
}) => {
  const filteredSites = sites.filter(site => {
    if (selectedCategoryId === 'all') return true;
    if (selectedCategoryId === 'ancient-universities') {
      return ['nalanda-mahavihara', 'vikramshila-mahavihara'].includes(site.id);
    }
    if (selectedCategoryId === 'sacred-shrines') {
      return ['mahabodhi-temple', 'mundeshwari-temple', 'takht-patna-sahib'].includes(site.id);
    }
    if (selectedCategoryId === 'mauryan-antiquity') {
      return ['barabar-caves', 'kolhua-ashoka-pillar'].includes(site.id);
    }
    if (selectedCategoryId === 'stupas-sanctuaries') {
      return ['kesaria-stupa'].includes(site.id);
    }
    if (selectedCategoryId === 'citadels-mausoleums') {
      return ['sher-shah-tomb', 'rohtasgarh-fort', 'golghar-patna'].includes(site.id);
    }
    return true;
  });

  return (
    <section id="heritage-archive-section" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
            Curated Archaeological Registry
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight mt-0.5">
            {language === 'hi' ? 'समस्त संरक्षित धरोहर स्थल' : 'All Curated Heritage Sanctuaries'}
          </h2>
        </div>
        <div className="text-xs text-[#2D3238]/60 dark:text-[#C8BFB4]/60 font-sans">
          Showing {filteredSites.length} {filteredSites.length === 1 ? 'monument' : 'monuments'} with verified photographic records
        </div>
      </div>

      {/* Editorial Layout: Alternating Wide Exhibition Plates & Architectural Plates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSites.map((site, index) => {
          const district = getDistrictById(site.districtId);
          const isWide = index === 0 && selectedCategoryId === 'all';

          return (
            <div
              key={site.id}
              className={`bg-white dark:bg-[#1A1D20] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl overflow-hidden hover:border-[#C85A32]/50 hover:shadow-md transition-all flex flex-col justify-between group ${
                isWide ? 'md:col-span-2 md:flex-row' : ''
              }`}
            >
              {/* Image Container */}
              <div
                onClick={() => onOpenSite(site)}
                className={`relative cursor-pointer overflow-hidden bg-[#1E2124] shrink-0 ${
                  isWide ? 'md:w-1/2 h-64 md:h-auto min-h-[260px]' : 'h-52 sm:h-56 w-full'
                }`}
              >
                <img
                  src={site.image}
                  alt={site.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  {site.isUnesco ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1A56DB] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 w-fit backdrop-blur-md">
                      <Award className="w-3 h-3 text-amber-300" />
                      <span>UNESCO World Heritage</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-800/90 text-white text-[10px] font-semibold tracking-wider uppercase shadow-sm flex items-center gap-1 w-fit backdrop-blur-md">
                      <ShieldCheck className="w-3 h-3 text-emerald-300" />
                      <span>ASI Protected Monument</span>
                    </span>
                  )}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-mono text-[#F5B597]">
                    {site.period}
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl leading-snug">
                    {site.name}
                  </h3>
                  <p className="text-xs text-amber-100/90 font-serif italic truncate">
                    {site.hindiName} • {site.location}
                  </p>
                </div>
              </div>

              {/* Text Description & Actions */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 border-b border-[#F4EFE6] dark:border-[#2E343B] pb-2">
                    <span className="font-semibold text-[#C85A32]">{site.category}</span>
                    <span>Dynasty: {site.dynasty}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2D3238]/85 dark:text-[#EADBCE]/85 leading-relaxed line-clamp-3 font-sans">
                    {site.museumDoc?.whyItMatters || site.description}
                  </p>

                  {/* Distinguishing architectural facet */}
                  <div className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/80 bg-[#FBF9F5] dark:bg-[#252A30] p-2.5 rounded-xl border border-[#EADBCE] dark:border-[#3D454F]">
                    <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">Architecture: </span>
                    <span className="line-clamp-2">{site.architecture}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-[#F4EFE6] dark:border-[#2E343B] flex items-center justify-between gap-2 flex-wrap">
                  {district && onSelectDistrict ? (
                    <button
                      onClick={() => onSelectDistrict(district)}
                      className="text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/80 hover:text-[#C85A32] dark:hover:text-[#F5B597] font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <MapPin className="w-3 h-3 text-[#C85A32]" />
                      <span>{district.name} District Dossier</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    onClick={() => onOpenSite(site)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C85A32] hover:bg-[#B34A25] text-white text-xs font-semibold tracking-wide shadow-xs active:scale-98 transition-all"
                  >
                    <span>Enter Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
