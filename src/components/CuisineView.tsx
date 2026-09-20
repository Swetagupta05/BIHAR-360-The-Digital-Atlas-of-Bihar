import React from 'react';
import { CUISINE_ITEMS } from '../data/cuisine';
import { Dish } from '../types';
import { Utensils, Award, Sparkles, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface CuisineViewProps {
  language: 'en' | 'hi';
}

export const CuisineView: React.FC<CuisineViewProps> = ({ language }) => {
  const [filter, setFilter] = React.useState<'all' | 'veg' | 'non-veg' | 'gi'>('all');
  const [expandedDish, setExpandedDish] = React.useState<string | null>(CUISINE_ITEMS[0].id);

  const filteredDishes = CUISINE_ITEMS.filter(dish => {
    if (filter === 'veg') return dish.isVegetarian;
    if (filter === 'non-veg') return !dish.isVegetarian;
    if (filter === 'gi') return dish.giTag;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#1E2124] text-white rounded-2xl p-6 sm:p-10 border border-[#2D3238] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Culinary Heritage of Magadh & Mithila</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {language === 'hi' ? 'बिहार के पारम्परिक स्वाद एवं व्यंजन' : 'Authentic Flavors & Culinary Traditions'}
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE] mt-2 font-normal leading-relaxed">
            From the rustic, wood-smoked earthen embers of Litti Chokha to the sacred jaggery cookies of Chhath Puja, 52-layered crispy Silao Khaja, and earthen clay-pot Champaran Ahuna Handi Mutton.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-[#F4EFE6] p-3 rounded-xl border border-[#EADBCE]">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'all'
              ? 'bg-[#C85A32] text-white shadow-xs'
              : 'bg-white text-[#2D3238] border border-[#EADBCE]'
          }`}
        >
          All Delicacies ({CUISINE_ITEMS.length})
        </button>
        <button
          onClick={() => setFilter('veg')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'veg'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'bg-white text-[#2D3238] border border-[#EADBCE]'
          }`}
        >
          🟢 Pure Vegetarian
        </button>
        <button
          onClick={() => setFilter('non-veg')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'non-veg'
              ? 'bg-rose-700 text-white shadow-xs'
              : 'bg-white text-[#2D3238] border border-[#EADBCE]'
          }`}
        >
          🔴 Signature Non-Veg
        </button>
        <button
          onClick={() => setFilter('gi')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'gi'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white text-[#2D3238] border border-[#EADBCE]'
          }`}
        >
          ★ GI Tagged Specialties
        </button>
      </div>

      {/* Dishes List */}
      <div className="space-y-4">
        {filteredDishes.map(dish => {
          const isExpanded = expandedDish === dish.id;

          return (
            <div
              key={dish.id}
              className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl overflow-hidden shadow-xs hover:border-[#C85A32]/40 transition-colors"
            >
              {/* Header Accordion Bar */}
              <div
                onClick={() => setExpandedDish(isExpanded ? null : dish.id)}
                className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none hover:bg-[#F4EFE6]/50 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
                    dish.isVegetarian
                      ? 'border-emerald-600 bg-emerald-100'
                      : 'border-rose-600 bg-rose-100'
                  }`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E2124]">
                        {dish.name}
                      </h3>
                      <span className="text-xs sm:text-sm text-[#C85A32] font-serif font-normal">
                        ({dish.hindiName})
                      </span>
                      {dish.giTag && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold uppercase">
                          GI Tag
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#2D3238]/70 mt-0.5">
                      {dish.category} • Origin: {dish.originDistrict.replace('-', ' ').toUpperCase()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="text-[#2D3238]/60 hover:text-[#1E2124]">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Expanded Recipe & History Details */}
              {isExpanded && (
                <div className="p-4 sm:p-6 border-t border-[#EADBCE] bg-[#F4EFE6]/30 space-y-5 animate-in fade-in duration-150">
                  {dish.image && (
                    <div className="relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#EADBCE]">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-800/90 text-white text-[10px] font-bold tracking-wider backdrop-blur-xs flex items-center gap-1 shadow-xs">
                        ✓ Authentic Regional Culinary Record
                      </div>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-xs">
                        Origin: {dish.originDistrict.replace('-', ' ').toUpperCase()}, BIHAR
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-[#2D3238] leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Ingredients */}
                    <div className="p-4 rounded-xl bg-white border border-[#EADBCE] space-y-2">
                      <h4 className="font-serif font-bold text-sm text-[#1E2124] uppercase tracking-wide">
                        Key Ingredients & Spices
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#2D3238]">
                        {dish.ingredients.map((ing, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]"></span>
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preparation Method */}
                    <div className="p-4 rounded-xl bg-white border border-[#EADBCE] space-y-2">
                      <h4 className="font-serif font-bold text-sm text-[#1E2124] uppercase tracking-wide">
                        Authentic Preparation Tradition
                      </h4>
                      <p className="text-xs text-[#2D3238] leading-relaxed">
                        {dish.preparationMethod}
                      </p>
                    </div>
                  </div>

                  {/* Cultural Context */}
                  <div className="p-4 rounded-xl bg-[#EADBCE]/40 border border-[#EADBCE] text-xs text-[#1E2124]">
                    <span className="font-bold text-[#A54420] block mb-1 uppercase tracking-wide">
                      Cultural Roots & Folklore
                    </span>
                    <p className="leading-relaxed text-[#2D3238]">
                      {dish.culturalContext}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
