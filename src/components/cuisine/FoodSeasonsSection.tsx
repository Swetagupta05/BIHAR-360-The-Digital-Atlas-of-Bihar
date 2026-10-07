import React, { useState } from 'react';
import { Sun, CloudRain, Snowflake, Sparkles, ArrowRight } from 'lucide-react';
import { Dish, CulinarySeasonProfile, FoodSeason } from '../../types';

interface FoodSeasonsSectionProps {
  seasons: CulinarySeasonProfile[];
  dishes: Dish[];
  language: 'en' | 'hi';
  onSelectDish: (dish: Dish) => void;
}

export const FoodSeasonsSection: React.FC<FoodSeasonsSectionProps> = ({
  seasons,
  dishes,
  language,
  onSelectDish
}) => {
  const [activeSeasonId, setActiveSeasonId] = useState<FoodSeason>('Winter');

  const activeSeason = seasons.find(s => s.id === activeSeasonId) || seasons[0];
  const seasonDishes = dishes.filter(
    d => d.season === activeSeason.id || activeSeason.featuredDishIds.includes(d.id)
  );

  const getSeasonIcon = (id: FoodSeason) => {
    switch (id) {
      case 'Winter':
        return <Snowflake className="w-4 h-4 text-sky-500" />;
      case 'Summer':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'Monsoon':
        return <CloudRain className="w-4 h-4 text-blue-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#C85A32]" />;
    }
  };

  return (
    <section id="food-seasons-section" className="space-y-8 rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 shadow-xs mb-16">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Sun className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
          <span>{language === 'hi' ? 'ऋतु चक्र एवं खानपान' : 'Seasonal Rhythms'}</span>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
          {language === 'hi' ? 'मौसम के अनुसार स्वाद और पोषण' : 'Food × Seasons'}
        </h2>

        <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
          {language === 'hi'
            ? 'बिहार की पारंपरिक रसोई सौर चक्रों और कृषि ऋतुओं के साथ चलती है। जानिए कड़ाके की ठंड में तिल और गुड़ की मिठास, जेठ की दोपहरी में सत्तू का ताजगी भरा स्वाद, और सावन की झड़ी में भुने चने और अनरसे की परंपरा।'
            : 'Traditional kitchens in Bihar move in cadence with seasonal agro-climatic shifts: sesame confections and fresh jaggery during winter months, roasted gram flour drinks during summer heat, and steaming spiced legumes during the monsoon.'}
        </p>
      </div>

      {/* Season Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {seasons.map(s => {
          const isSelected = s.id === activeSeasonId;

          return (
            <button
              key={s.id}
              onClick={() => setActiveSeasonId(s.id)}
              className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-white dark:bg-[#1E2227] border-[#C85A32] shadow-sm ring-1 ring-[#C85A32]/40'
                  : 'bg-white/60 dark:bg-[#1E2227]/60 border-[#EADBCE] dark:border-[#2E343B] hover:bg-white dark:hover:bg-[#1E2227]'
              }`}
            >
              <div className="flex items-center justify-between pb-2">
                <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] uppercase">
                  {s.months}
                </span>
                {getSeasonIcon(s.id)}
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#1E2124] dark:text-[#F5F1E8]">
                  {language === 'hi' ? s.hindiTitle : s.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Season Showcase */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Season Narrative & Staples */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#C85A32] dark:text-[#E06C43] font-semibold">
                Nutritional & Ecological Principle
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                {language === 'hi' ? activeSeason.hindiTitle : activeSeason.title}
              </h3>
              <p className="text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
                {activeSeason.months}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
              {activeSeason.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] font-bold block">
                Seasonal Agro-Staples:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeSeason.staples.map((staple, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                  >
                    {staple}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Seasonal Dishes */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-[#8C8276] dark:text-[#A89F93] pb-1">
              Documented Seasonal Preparations:
            </div>

            <div className="space-y-3">
              {seasonDishes.map(dish => (
                <div
                  key={dish.id}
                  onClick={() => onSelectDish(dish)}
                  className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/50 hover:shadow-xs transition-all cursor-pointer flex items-center justify-between gap-4 group"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-sm sm:text-base text-[#1E2124] dark:text-[#F5F1E8] truncate group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43]">
                        {dish.name}
                      </h4>
                      <span className="font-serif text-xs text-[#8C8276] dark:text-[#A89F93]">
                        ({dish.hindiName})
                      </span>
                    </div>
                    <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] line-clamp-1 mt-0.5">
                      {dish.description}
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 flex-shrink-0">
                    <span>Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
