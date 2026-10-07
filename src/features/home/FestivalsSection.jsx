import React from 'react';
import { ArrowRight, Sun } from 'lucide-react';
import { uiTranslations } from '../../data/translations';

export const FestivalsSection = ({
  onNavigateFestivals,
  language = 'en'
}) => {
  const t = uiTranslations[language].festivals;

  return (
    <section className="py-20 sm:py-28 bg-[#14171A] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-[#E0BA6A] text-xs uppercase tracking-widest font-bold mb-2.5">
            <Sun className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hindi-title text-white leading-tight mb-2">
            {t.title}
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#E0BA6A] italic mb-4">
            {t.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#EADBCE]/80 font-light leading-relaxed max-w-xl">
            {t.description}
          </p>
        </div>

        {/* Cinematic Masterpiece Feature: Chhath Mahaparva */}
        <div 
          role="button"
          tabIndex={0}
          onClick={onNavigateFestivals}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigateFestivals();
            }
          }}
          className="group relative rounded-3xl overflow-hidden bg-[#1E2124] min-h-[340px] sm:min-h-[460px] lg:min-h-[520px] flex flex-col justify-end p-5 sm:p-10 lg:p-12 cursor-pointer border border-white/10 shadow-2xl transition-all duration-300 hover:border-[#E0BA6A]/40"
        >
          <img
            src="/assets/images/chhath_puja_bihar_1789937759874.webp"
            alt="Devotees offering Sandhya Arghya to the setting sun in the Ganges during Chhath Puja"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/50 to-transparent" />

          <div className="relative z-10 max-w-2xl text-white space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full bg-[#C85A32] text-white text-[11px] font-semibold tracking-wider uppercase">
                {t.chhathBadge}
              </span>
              <span className="text-xs text-[#E0BA6A] font-hindi-text font-semibold">
                {t.chhathSub}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors">
              {t.chhathTitle}
            </h3>

            <p className="text-sm sm:text-base text-[#EADBCE]/90 font-light leading-relaxed">
              {t.chhathDesc}
            </p>

            <div className="pt-3 flex items-center gap-2 text-[#E0BA6A] font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
              <span>{t.chhathAction}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Secondary Festival Vignettes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sonepur Mela */}
          <div 
            role="button"
            tabIndex={0}
            onClick={onNavigateFestivals}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigateFestivals();
              }
            }}
            className="group relative rounded-3xl overflow-hidden bg-[#1E2124] h-60 sm:h-72 flex flex-col justify-end p-6 sm:p-8 cursor-pointer border border-white/10 transition-all duration-300 hover:border-[#E0BA6A]/40"
          >
            <img
              src="/assets/images/sonepur_cattle_fair_1789937950038.webp"
              alt="Sonepur Cattle Fair rural carnival along the Gandak and Ganga confluence"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

            <div className="relative z-10 text-white space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E0BA6A]">
                {t.sonepurBadge}
              </span>
              <h4 className="text-xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors">
                {t.sonepurTitle}
              </h4>
              <p className="text-xs text-[#EADBCE]/85 font-light line-clamp-2">
                {t.sonepurDesc}
              </p>
            </div>
          </div>

          {/* Sama-Chakeva */}
          <div 
            role="button"
            tabIndex={0}
            onClick={onNavigateFestivals}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigateFestivals();
              }
            }}
            className="group relative rounded-3xl overflow-hidden bg-[#1E2124] h-60 sm:h-72 flex flex-col justify-end p-6 sm:p-8 cursor-pointer border border-white/10 transition-all duration-300 hover:border-[#E0BA6A]/40"
          >
            <img
              src="/assets/images/sama_chakeva_mithila_1789938124507.webp"
              alt="Handmade clay bird sculptures for Sama-Chakeva winter folk festival in Mithila"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

            <div className="relative z-10 text-white space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E0BA6A]">
                {t.samaBadge}
              </span>
              <h4 className="text-xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors">
                {t.samaTitle}
              </h4>
              <p className="text-xs text-[#EADBCE]/85 font-light line-clamp-2">
                {t.samaDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Section Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateFestivals}
            id="festivals-explore-btn"
            className="px-8 py-3 rounded-full bg-[#E0BA6A] text-[#14171A] hover:bg-white font-medium text-sm transition-all shadow-lg inline-flex items-center gap-2"
          >
            <span>{t.exploreAllBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
