import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { uiTranslations } from '../../data/translations';

export const GlimpseSection = ({
  onNavigate,
  language = 'en'
}) => {
  const t = uiTranslations[language].glimpse;

  return (
    <section id="glimpse-section" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="max-w-3xl mb-14 sm:mb-18">
        <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.eyebrow}</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-hindi-title text-[#14171A] dark:text-[#F5F1E8] leading-tight mb-2">
          {t.title}
        </h2>
        
        <p className="text-xl sm:text-2xl font-serif text-[#C85A32] italic mb-4">
          {t.subtitle}
        </p>

        <p className="text-sm sm:text-base text-[#4B525A] dark:text-[#C8BFB4] font-normal leading-relaxed max-w-2xl">
          {t.description}
        </p>
      </div>

      {/* Editorial Composition (Asymmetrical Magazine Collage) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Dominant Hero Vignette: Nalanda Mahavihara (7 cols on desktop) */}
        <div 
          onClick={() => onNavigate('heritage')}
          className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-[#1E2124] min-h-[380px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-10 cursor-pointer shadow-sm border border-[#EADBCE]/60 dark:border-[#2E343B] transition-all duration-300 hover:shadow-xl"
        >
          <img
            src="/assets/images/nalanda_university_ruins_1789937702654.webp"
            alt="Ancient baked-brick stupa and monasteries of Nalanda Mahavihara"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

          <div className="relative z-10 text-white space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-[11px] font-semibold uppercase tracking-wider">
                {t.nalandaTag}
              </span>
              <span className="text-xs text-[#EADBCE]/80 font-mono">{t.nalandaEra}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors flex items-center gap-2">
              <span>{t.nalandaTitle}</span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </h3>

            <p className="text-sm sm:text-base text-[#EADBCE]/90 font-light max-w-xl line-clamp-2 sm:line-clamp-3">
              {t.nalandaDesc}
            </p>
          </div>
        </div>

        {/* Supporting Right Column: Stacked Vignettes (5 cols on desktop) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {/* Top Supporting Vignette: Litti Chokha & Clay Oven */}
          <div 
            onClick={() => onNavigate('cuisine')}
            className="group relative rounded-3xl overflow-hidden bg-[#1E2124] min-h-[230px] sm:min-h-[250px] flex flex-col justify-end p-6 cursor-pointer shadow-sm border border-[#EADBCE]/60 dark:border-[#2E343B] transition-all duration-300 hover:shadow-lg"
          >
            <img
              src="/assets/images/litti_chokha_bihar_1789937732927.webp"
              alt="Authentic Bihar Litti Chokha roasted over cow dung embers and submerged in ghee"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

            <div className="relative z-10 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E0BA6A]">
                {t.littiTag}
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-bold group-hover:text-[#E0BA6A] transition-colors flex items-center justify-between">
                <span>{t.littiTitle}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-xs text-[#EADBCE]/85 font-light line-clamp-2">
                {t.littiDesc}
              </p>
            </div>
          </div>

          {/* Bottom Supporting Vignette: Mithila Folk Art */}
          <div 
            onClick={() => onNavigate('arts')}
            className="group relative rounded-3xl overflow-hidden bg-[#1E2124] min-h-[230px] sm:min-h-[250px] flex flex-col justify-end p-6 cursor-pointer shadow-sm border border-[#EADBCE]/60 dark:border-[#2E343B] transition-all duration-300 hover:shadow-lg"
          >
            <img
              src="/assets/images/madhubani_mithila_painting_1789937745005.webp"
              alt="Mithila Madhubani handmade painting with natural vegetable dyes and fine linework"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

            <div className="relative z-10 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E0BA6A]">
                {t.mithilaTag}
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-bold group-hover:text-[#E0BA6A] transition-colors flex items-center justify-between">
                <span>{t.mithilaTitle}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-xs text-[#EADBCE]/85 font-light line-clamp-2">
                {t.mithilaDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Horizontal Panoramic Strip: Landscape & Sacred Waters */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Landscape Moment: Valmiki Tiger Reserve */}
        <div 
          onClick={() => onNavigate('circuits')}
          className="group relative rounded-3xl overflow-hidden bg-[#1E2124] h-56 sm:h-64 flex flex-col justify-end p-6 cursor-pointer border border-[#EADBCE]/60 dark:border-[#2E343B] transition-all duration-300 hover:shadow-lg"
        >
          <img
            src="/assets/images/valmiki_forest_champaran_1789938522457.webp"
            alt="Valmiki National Park sal forests and river Gandak"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/35 to-transparent" />
          
          <div className="relative z-10 text-white space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#3E6550] bg-white/90 px-2 py-0.5 rounded">
              {t.valmikiTag}
            </span>
            <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors flex items-center justify-between">
              <span>{t.valmikiTitle}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>
            <p className="text-xs text-[#EADBCE]/90 font-light">
              {t.valmikiDesc}
            </p>
          </div>
        </div>

        {/* Sacred Waters Moment: Munger Ganga Fort */}
        <div 
          onClick={() => onNavigate('heritage')}
          className="group relative rounded-3xl overflow-hidden bg-[#1E2124] h-56 sm:h-64 flex flex-col justify-end p-6 cursor-pointer border border-[#EADBCE]/60 dark:border-[#2E343B] transition-all duration-300 hover:shadow-lg"
        >
          <img
            src="/assets/images/munger_fort_ganga_1789938550689.webp"
            alt="Munger fort overlooking the northward bend of the sacred Ganga"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/35 to-transparent" />
          
          <div className="relative z-10 text-white space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#2C5D75] bg-white/90 px-2 py-0.5 rounded">
              {t.mungerTag}
            </span>
            <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors flex items-center justify-between">
              <span>{t.mungerTitle}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>
            <p className="text-xs text-[#EADBCE]/90 font-light">
              {t.mungerDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
