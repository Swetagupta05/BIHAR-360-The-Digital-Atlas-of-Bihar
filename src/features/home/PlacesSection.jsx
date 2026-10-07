import React from 'react';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { uiTranslations } from '../../data/translations';

const PLACE_IMAGES = [
  '/assets/images/nalanda_university_ruins_1789937702654.webp',
  '/assets/images/mahabodhi_temple_gaya_1789937719331.webp',
  '/assets/images/ashokan_pillar_vaishali_1789937849903.webp',
  '/assets/images/sher_shah_suri_tomb_1789937780605.webp',
  '/assets/images/valmiki_forest_champaran_1789938522457.webp',
  '/assets/images/barabar_caves_bihar_1789937792685.webp'
];

export const PlacesSection = ({
  onNavigatePlaces,
  language = 'en'
}) => {
  const t = uiTranslations[language].places;

  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hindi-title text-[#14171A] dark:text-[#F5F1E8] leading-tight mb-2">
            {t.title}
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#C85A32] italic">
            {t.subtitle}
          </p>
        </div>

        <button
          onClick={onNavigatePlaces}
          id="places-view-all-btn"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors self-start md:self-auto group"
        >
          <span>{t.viewAllBtn}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Destinations Grid (3x2 large imagery cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.destinations.map((place, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onClick={onNavigatePlaces}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigatePlaces();
              }
            }}
            className="group rounded-3xl overflow-hidden bg-[#1E2124] border border-[#EADBCE]/60 dark:border-[#2E343B] flex flex-col justify-end min-h-[340px] sm:min-h-[380px] p-6 sm:p-7 relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={PLACE_IMAGES[idx] || PLACE_IMAGES[0]}
              alt={place.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

            <div className="relative z-10 text-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[#EADBCE] text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  {place.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#EADBCE]/80 font-mono">
                  <MapPin className="w-3 h-3 text-[#E0BA6A]" />
                  {place.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors">
                {language === 'hi' ? place.hindiName : place.name}
              </h3>

              {language === 'en' && (
                <div className="text-xs font-hindi-text text-[#E0BA6A]">
                  {place.hindiName}
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#EADBCE]/90 font-light leading-relaxed line-clamp-2">
                {place.description}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#E0BA6A] font-semibold group-hover:translate-x-1 transition-transform">
                <span>{t.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
