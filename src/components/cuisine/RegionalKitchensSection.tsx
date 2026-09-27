import React, { useState } from 'react';
import { MapPin, ArrowRight, Utensils, Sparkles } from 'lucide-react';
import { Dish, CulinaryRegion, CulinaryRegionProfile } from '../../types';

interface RegionalKitchensSectionProps {
  regions: CulinaryRegionProfile[];
  dishes: Dish[];
  language: 'en' | 'hi';
  onSelectDish: (dish: Dish) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const RegionalKitchensSection: React.FC<RegionalKitchensSectionProps> = ({
  regions,
  dishes,
  language,
  onSelectDish,
  onSelectDistrictById
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<CulinaryRegion>('Bhojpur');

  const activeRegion = regions.find(r => r.id === selectedRegionId) || regions[0];
  const regionDishes = dishes.filter(
    d => d.region === activeRegion.id || activeRegion.signatureDishes.includes(d.id)
  );

  return (
    <section id="regional-kitchens-section" className="space-y-8 rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 shadow-xs mb-16">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
          <span>{language === 'hi' ? 'क्षेत्रीय खानपान' : 'Regional Culinary Identities'}</span>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
          {language === 'hi' ? 'माटी और अंचल के अनुसार स्वाद' : 'Explore by Region'}
        </h2>

        <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
          {language === 'hi'
            ? 'सोन के दोआब से लेकर मिथिला के पोखरों और मगध के प्राचीन मार्गों तक — जानिए कैसे बिहार के हर भूभाग की जलवायु और फसल ने उसकी विशिष्ट रसोई को आकार दिया।'
            : 'Bihar’s culinary geography spans dry western plains, fertile river confluences, ancient confectionary pilgrimage corridors, and lotus wetlands. Explore each cultural zone and its documented culinary specialties.'}
        </p>
      </div>

      {/* Region Chips / Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {regions.map(r => {
          const isSelected = r.id === selectedRegionId;
          return (
            <button
              key={r.id}
              onClick={() => setSelectedRegionId(r.id)}
              className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-white dark:bg-[#1E2227] border-[#C85A32] shadow-sm ring-1 ring-[#C85A32]/40'
                  : 'bg-white/60 dark:bg-[#1E2227]/60 border-[#EADBCE] dark:border-[#2E343B] hover:bg-white dark:hover:bg-[#1E2227]'
              }`}
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] uppercase block truncate">
                  {r.id}
                </span>
                <h3 className="font-serif font-bold text-xs sm:text-sm text-[#1E2124] dark:text-[#F5F1E8]">
                  {language === 'hi' ? r.hindiName : r.name.split('&')[0].trim()}
                </h3>
              </div>
              <span className={`text-[10px] font-mono pt-2 ${isSelected ? 'text-[#C85A32] dark:text-[#E06C43] font-semibold' : 'text-[#8C8276] dark:text-[#948B80]'}`}>
                {r.signatureDishes.length} staples →
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Region Detailed Dossier */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Region Narrative & Flavor Profile */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#C85A32] dark:text-[#E06C43] font-semibold">
                Regional Flavor Philosophy
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
                {language === 'hi' ? activeRegion.hindiName : activeRegion.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
              {activeRegion.narrative}
            </p>

            <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] font-bold block">
                Flavor & Technique Profile
              </span>
              <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
                {activeRegion.flavorProfile}
              </p>
            </div>
          </div>

          {/* Right: Dishes from this Region */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-[#8C8276] dark:text-[#A89F93] pb-1">
              Documented Culinary Delicacies from {activeRegion.name}:
            </div>

            <div className="space-y-3">
              {regionDishes.map(dish => (
                <div
                  key={dish.id}
                  onClick={() => onSelectDish(dish)}
                  className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/50 hover:shadow-xs transition-all cursor-pointer flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-center flex-shrink-0 group-hover:border-[#C85A32] transition-colors">
                      <Utensils className="w-5 h-5 text-[#C85A32]" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] truncate group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43]">
                          {dish.name}
                        </h4>
                        <span className="font-serif text-xs text-[#8C8276] dark:text-[#A89F93]">
                          ({dish.hindiName})
                        </span>
                      </div>
                      <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] truncate">
                        {dish.category} • {dish.ingredients.slice(0, 2).join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[11px] font-mono text-[#8C8276] dark:text-[#A89F93] hidden sm:inline">
                      {dish.season}
                    </span>
                    <span className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      <span>Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
