import React from 'react';
import { HeritageSite } from '../../types';
import { Landmark, ArrowRight, Award, Compass, MapPin, Sparkles, BookOpen } from 'lucide-react';

interface HeritageFeaturedProps {
  sites: HeritageSite[];
  onOpenSite: (site: HeritageSite) => void;
  language?: 'en' | 'hi';
}

export const HeritageFeatured: React.FC<HeritageFeaturedProps> = ({
  sites,
  onOpenSite,
  language = 'en'
}) => {
  // Dominant feature: Nalanda Mahavihara
  const dominantSite = sites.find(s => s.id === 'nalanda-mahavihara') || sites[0];

  // Complementary features: Mahabodhi Temple, Barabar Caves, Sher Shah Tomb
  const secondarySites = [
    sites.find(s => s.id === 'mahabodhi-temple'),
    sites.find(s => s.id === 'barabar-caves'),
    sites.find(s => s.id === 'sher-shah-tomb')
  ].filter(Boolean) as HeritageSite[];

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exhibition Highlights</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight mt-1">
            {language === 'hi' ? 'वे स्थल जिन्होंने इतिहास की दिशा बदली' : 'Places That Changed History'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-md font-sans">
          Selected for civilizational resonance, architectural innovation, and global philosophical impact.
        </p>
      </div>

      {/* Editorial Layout: One Dominant Feature + 3 Complementary Features */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Dominant Feature (Large panoramic showcase, 7 columns on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-[#151719] text-white rounded-3xl overflow-hidden border border-[#2D3238] shadow-lg group">
          {/* Main Visual */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#1E2124]">
            <img
              src={dominantSite.image}
              alt={dominantSite.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/40 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {dominantSite.isUnesco && (
                <span className="px-3 py-1 rounded-full bg-[#1A56DB] text-white text-xs font-semibold tracking-wider uppercase shadow-sm flex items-center gap-1.5 backdrop-blur-md">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>UNESCO World Heritage (Ref 1502)</span>
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-black/60 text-[#EADBCE] text-xs font-medium backdrop-blur-md border border-white/10">
                {dominantSite.period}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5B597]">
                Featured Masterwork
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1 leading-tight">
                {dominantSite.name}
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 font-serif italic mt-0.5">
                {dominantSite.hindiName} • {dominantSite.location}
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <blockquote className="border-l-2 border-[#C85A32] pl-3.5 text-sm sm:text-base italic text-[#E5DACB] leading-relaxed">
                "{dominantSite.museumDoc?.whyItMatters || dominantSite.significance}"
              </blockquote>
              <p className="text-xs sm:text-sm text-[#EADBCE]/80 mt-3 line-clamp-3 leading-relaxed">
                {dominantSite.museumDoc?.storyNarrative[0] || dominantSite.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#EADBCE]/70">
                <span className="font-semibold text-white">Dynasty:</span> {dominantSite.dynasty}
              </div>
              <button
                onClick={() => onOpenSite(dominantSite)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B34A25] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm active:scale-98"
              >
                <span>Enter Exhibition Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Complementary Features (Stacked editorial cards, 5 columns on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {secondarySites.map(site => (
            <div
              key={site.id}
              onClick={() => onOpenSite(site)}
              className="group cursor-pointer bg-[#FBF9F5] dark:bg-[#1A1D20] hover:bg-white dark:hover:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/50 rounded-2xl p-3 sm:p-4 transition-all duration-300 shadow-xs hover:shadow-md flex items-center gap-4"
            >
              {/* Image thumbnail */}
              <div className="relative w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 bg-[#1E2124]">
                <img
                  src={site.image}
                  alt={site.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {site.isUnesco && (
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-blue-600/90 text-white text-[9px] font-bold uppercase tracking-wider">
                    UNESCO
                  </span>
                )}
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-2 flex-wrap text-[11px] text-[#C85A32] font-semibold">
                  <span>{site.category}</span>
                  <span className="text-[#2D3238]/40 dark:text-[#C8BFB4]/40">•</span>
                  <span className="text-[#2D3238]/70 dark:text-[#C8BFB4]/70 font-mono">{site.period.split('(')[0].trim()}</span>
                </div>

                <h4 className="font-serif font-bold text-base sm:text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors leading-snug mt-0.5 truncate">
                  {site.name}
                </h4>
                <p className="text-xs text-[#2D3238]/60 dark:text-[#C8BFB4]/60 font-serif italic mb-1.5 truncate">
                  {site.hindiName}
                </p>

                <p className="text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80 line-clamp-2 leading-relaxed font-sans">
                  {site.museumDoc?.whyItMatters || site.description}
                </p>

                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#C85A32] group-hover:translate-x-0.5 transition-transform">
                  <span>Enter Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
