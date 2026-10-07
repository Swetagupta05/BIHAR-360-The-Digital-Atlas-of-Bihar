import React from 'react';
import { MapPin, ArrowRight, Compass, Bookmark } from 'lucide-react';
import { ALL_DISTRICTS } from '../../data/districts';
import { uiTranslations } from '../../data/translations';

const REGION_HINDI_MAP = {
  'Patna': 'पटना',
  'Tirhut': 'तिरहुत',
  'Saran': 'सारण',
  'Darbhanga': 'दरभंगा',
  'Kosi': 'कोशी',
  'Purnia': 'पूर्णिया',
  'Bhagalpur': 'भागलपुर',
  'Munger': 'मुंगेर',
  'Magadh': 'मगध'
};

export const DistrictsPreviewSection = ({
  onSelectDistrict,
  onViewAllDistricts,
  bookmarkedIds = [],
  onToggleBookmark,
  language = 'en'
}) => {
  const t = uiTranslations[language].districts;

  // Curate 6 representative districts across different divisions of Bihar
  const previewSlugs = ['patna', 'gaya', 'nalanda', 'madhubani', 'west-champaran', 'bhagalpur'];
  const previewDistricts = previewSlugs
    .map(slug => ALL_DISTRICTS.find(d => d.slug === slug || d.id === slug))
    .filter(Boolean);

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6] dark:bg-[#141619] border-t border-[#EADBCE]/70 dark:border-[#2E343B] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
              <Compass className="w-3.5 h-3.5" />
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-hindi-title text-[#14171A] dark:text-[#F5F1E8] leading-tight mb-2">
              {t.title}
            </h2>

            <p className="text-xl sm:text-2xl font-serif text-[#C85A32] italic mb-3">
              {t.subtitle}
            </p>

            <p className="text-sm text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed">
              {t.description}
            </p>
          </div>

          <button
            onClick={onViewAllDistricts}
            id="districts-preview-all-btn"
            className="px-6 py-3.5 rounded-full bg-[#C85A32] hover:bg-[#A54420] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-[#C85A32]/30 inline-flex items-center gap-2 self-start md:self-auto group"
          >
            <span>{t.exploreAllBtn}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Curated District Cards Grid (Clean editorial format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewDistricts.map((district) => {
            const meta = district.imageMetadata;
            const isBookmarked = bookmarkedIds.includes(district.id);
            const regionName = language === 'hi' ? (REGION_HINDI_MAP[district.region] || district.region) : district.region;

            return (
              <div
                key={district.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelectDistrict(district)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectDistrict(district);
                  }
                }}
                className="bg-white dark:bg-[#1A1D20] rounded-3xl border border-[#EADBCE]/80 dark:border-[#2E343B] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                {/* Visual Header */}
                <div className="relative h-48 w-full overflow-hidden bg-[#1E2124]">
                  {meta?.url ? (
                    <img
                      src={meta.url}
                      alt={meta.altText || `${district.name} landmark`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#2D3238] to-[#1E2124] flex items-center justify-center p-4 text-center">
                      <span className="font-serif font-bold text-white/40 text-xl tracking-wider uppercase">
                        {district.name}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#14171A]/85 text-[#E0BA6A] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs">
                      {regionName} {t.divisionSuffix}
                    </span>

                    {onToggleBookmark && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(district);
                        }}
                        className={`w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-md transition-all cursor-pointer ${
                          isBookmarked 
                            ? 'bg-[#C85A32] text-white shadow-xs' 
                            : 'bg-black/40 text-white hover:bg-black/60'
                        }`}
                        title={isBookmarked ? t.bookmarkRemove : t.bookmarkAdd}
                        aria-label={isBookmarked ? t.bookmarkRemove : t.bookmarkAdd}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    )}
                  </div>

                  {/* Bottom Image Label */}
                  {meta?.landmark && (
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] text-[#E0BA6A] block font-mono">
                        {meta.verified ? t.verifiedLandmark : t.culturalIdentity}
                      </span>
                      <span className="text-xs font-semibold text-white truncate block">
                        {meta.landmark}
                      </span>
                    </div>
                  )}
                </div>

                {/* District Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                        {language === 'hi' ? district.hindiName : district.name}
                      </h3>
                      {language === 'en' && (
                        <span className="text-base font-hindi-text text-[#8C5B3E] dark:text-[#E0A882] font-medium">
                          {district.hindiName}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[#4B525A] dark:text-[#9EA8B3] mb-2 font-mono">
                      <MapPin className="w-3 h-3 text-[#C85A32]" />
                      <span>{t.hqPrefix} {district.headquarters}</span>
                    </div>

                    <p className="text-xs text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed line-clamp-3">
                      {district.identityStatement || district.whyItMatters}
                    </p>
                  </div>

                  {/* Highlights and Action */}
                  <div className="pt-3 border-t border-[#EADBCE]/60 dark:border-[#2E343B] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#8C5B3E] dark:text-[#E0A882] font-medium truncate max-w-[170px]">
                      {district.famousFor[0]}
                    </span>
                    <span className="font-semibold text-[#C85A32] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>{t.exploreDossier}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Invitation */}
        <div className="rounded-3xl bg-[#1E2124] text-white p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              {t.bannerTitle}
            </h4>
            <p className="text-xs sm:text-sm text-[#EADBCE]/80 font-light">
              {t.bannerDesc}
            </p>
          </div>

          <button
            onClick={onViewAllDistricts}
            className="px-8 py-3.5 rounded-full bg-[#E0BA6A] hover:bg-white text-[#14171A] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md flex-shrink-0 flex items-center gap-2"
          >
            <span>{t.bannerBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
