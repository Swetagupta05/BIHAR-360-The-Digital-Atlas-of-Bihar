import React from 'react';
import { Users, ArrowRight, Quote } from 'lucide-react';
import { uiTranslations } from '../../data/translations';

export const PeopleSection = ({
  onNavigatePeople,
  language = 'en'
}) => {
  const t = uiTranslations[language].people;

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6] dark:bg-[#141619] border-y border-[#EADBCE]/70 dark:border-[#2E343B] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
              <Users className="w-3.5 h-3.5" />
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
            onClick={onNavigatePeople}
            id="people-view-all-btn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors self-start md:self-auto group"
          >
            <span>{t.viewAllBtn}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Editorial Profiles Grid (Asymmetric & Typographic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.thinkers.map((person, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              onClick={onNavigatePeople}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigatePeople();
                }
              }}
              className="bg-white dark:bg-[#1A1D20] rounded-3xl p-6 sm:p-7 border border-[#EADBCE] dark:border-[#2E343B] shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8C5B3E] dark:text-[#E0A882]">
                  <span>{person.era}</span>
                  <span className="px-2 py-0.5 rounded bg-[#F5EFE6] dark:bg-[#252A30] font-semibold text-[#C85A32] dark:text-[#E06C43]">
                    {person.district}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                    {language === 'hi' ? person.hindiName : person.name}
                  </h3>
                  {language === 'en' && (
                    <div className="text-sm font-hindi-text text-[#A54420] dark:text-[#E06C43] font-semibold">
                      {person.hindiName}
                    </div>
                  )}
                  <div className="text-xs text-[#8C5B3E] dark:text-[#E0A882] font-medium mt-0.5">
                    {person.title}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FBF9F5] dark:bg-[#151719] border border-[#EADBCE]/60 dark:border-[#2E343B] text-xs italic text-[#2D3238] dark:text-[#C8BFB4] font-serif relative">
                  <Quote className="w-3.5 h-3.5 text-[#C85A32]/40 absolute top-2 right-2" />
                  “{person.quote}”
                </div>

                <p className="text-xs text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed">
                  {person.story}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EADBCE]/50 dark:border-[#2E343B] flex items-center justify-between text-xs text-[#C85A32] font-semibold">
                <span>{t.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
