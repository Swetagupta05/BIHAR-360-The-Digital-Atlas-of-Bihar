import React from 'react';
import { Utensils, ArrowRight } from 'lucide-react';
import { uiTranslations } from '../../data/translations';

const FOOD_IMAGES = [
  '/assets/images/litti_chokha_bihar_1789937732927.webp',
  '/assets/images/bihari_thekua_prasad_1789938008063.webp',
  '/assets/images/mithila_makhana_kheer_1789938020193.webp',
  '/assets/images/silao_khaja_bihar_1789937916729.webp',
  '/assets/images/gaya_tilkut_sweet_1789938032533.webp'
];

export const TasteBiharSection = ({
  onNavigateCuisine,
  language = 'en'
}) => {
  const t = uiTranslations[language].cuisine;

  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
            <Utensils className="w-3.5 h-3.5" />
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
          onClick={onNavigateCuisine}
          id="taste-view-all-btn"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors self-start md:self-auto group"
        >
          <span>{t.viewAllBtn}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Visual Food Showcase (5 curated cards with rich photography) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {t.items.map((food, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onClick={onNavigateCuisine}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigateCuisine();
              }
            }}
            className="group rounded-3xl overflow-hidden bg-white dark:bg-[#1A1D20] border border-[#EADBCE]/80 dark:border-[#2E343B] flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Food Image */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#1E2124]">
              <img
                src={FOOD_IMAGES[idx] || FOOD_IMAGES[0]}
                alt={food.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#14171A]/85 text-[#E0BA6A] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs">
                  {food.badge}
                </span>
              </div>
            </div>

            {/* Food Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8C5B3E] dark:text-[#E0A882] font-mono block">
                  {food.origin}
                </span>
                <h3 className="text-base font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors mt-0.5">
                  {language === 'hi' ? food.hindiName : food.name}
                </h3>
                {language === 'en' && (
                  <h4 className="text-xs font-hindi-text text-[#C85A32] font-semibold">
                    {food.hindiName}
                  </h4>
                )}
                <p className="text-xs text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed mt-2 line-clamp-3">
                  {food.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#EADBCE]/50 dark:border-[#2E343B] flex items-center justify-between text-[11px] text-[#C85A32] font-semibold">
                <span>{t.actionText}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
