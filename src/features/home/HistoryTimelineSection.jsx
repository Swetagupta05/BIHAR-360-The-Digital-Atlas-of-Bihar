import React from 'react';
import { ArrowRight, History } from 'lucide-react';
import { uiTranslations } from '../../data/translations';

export const HistoryTimelineSection = ({
  onNavigateHistory,
  language = 'en'
}) => {
  const t = uiTranslations[language].history;

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6] dark:bg-[#141619] border-y border-[#EADBCE]/70 dark:border-[#2E343B] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
              <History className="w-3.5 h-3.5" />
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
            type="button"
            onClick={onNavigateHistory}
            id="history-view-all-btn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors self-start md:self-auto group cursor-pointer"
          >
            <span>{t.viewAllBtn}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2-Column Editorial Showcase: Visual on left, Interactive Vertical Timeline on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-[#EADBCE] dark:border-[#2E343B] bg-[#1E2124]">
            <img
              src="/assets/images/mahabodhi_temple_gaya_1789937719331.webp"
              alt="Mahabodhi Temple shikhara at Bodh Gaya where the Buddha sat under the sacred Bodhi tree"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-[360px] sm:h-[460px] lg:h-[540px] object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#E0BA6A] text-[#14171A] text-[10px] font-bold uppercase tracking-wider">
                {t.visualBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {t.visualTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#EADBCE]/90 font-light leading-relaxed">
                {t.visualDesc}
              </p>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-6 relative pl-6 sm:pl-8 border-l-2 border-[#C85A32]/30">
            {t.epochs.map((epoch, index) => (
              <div 
                key={index} 
                className="relative group transition-all duration-200"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#F5EFE6] dark:bg-[#141619] border-2 border-[#C85A32] group-hover:scale-125 group-hover:bg-[#C85A32] transition-all" />

                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-xs font-mono font-bold text-[#C85A32] uppercase tracking-wider">
                      {epoch.era}
                    </span>
                    <span className="text-xs text-[#8C5B3E] dark:text-[#E0A882] font-medium hidden sm:inline">•</span>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                      {language === 'hi' ? epoch.hindiTitle : epoch.title}
                    </h4>
                  </div>
                  
                  {language === 'en' && (
                    <div className="text-xs font-hindi-text text-[#8C5B3E] dark:text-[#E0A882]">
                      {epoch.hindiTitle}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed pt-0.5">
                    {epoch.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <button
                onClick={onNavigateHistory}
                className="px-6 py-2.5 rounded-full bg-[#1E2124] dark:bg-[#2C3138] hover:bg-black dark:hover:bg-[#3D454F] text-white text-xs font-semibold tracking-wide transition-all shadow-md flex items-center gap-2"
              >
                <span>{t.readMoreBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
