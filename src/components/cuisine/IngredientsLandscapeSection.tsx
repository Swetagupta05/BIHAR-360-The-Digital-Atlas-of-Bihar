import React from 'react';
import { Wheat, Droplet, Sparkles, Flame, Waves, Sprout, ArrowRight } from 'lucide-react';
import { CulinaryIngredient, Dish } from '../../types';

interface IngredientsLandscapeSectionProps {
  ingredients: CulinaryIngredient[];
  language: 'en' | 'hi';
  onSelectIngredientDish?: (dishName: string) => void;
}

export const IngredientsLandscapeSection: React.FC<IngredientsLandscapeSectionProps> = ({
  ingredients,
  language,
  onSelectIngredientDish
}) => {
  const getIngredientIcon = (iconType: string) => {
    switch (iconType) {
      case 'water':
        return <Waves className="w-5 h-5 text-sky-500" />;
      case 'grain':
        return <Wheat className="w-5 h-5 text-amber-500" />;
      case 'plant':
        return <Sprout className="w-5 h-5 text-emerald-500" />;
      case 'droplet':
        return <Droplet className="w-5 h-5 text-amber-600" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-orange-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C85A32]" />;
    }
  };

  return (
    <section id="ingredients-landscape-section" className="space-y-6 mb-16">
      {/* Header */}
      <div className="space-y-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <Wheat className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
          <span>{language === 'hi' ? 'माटी और फसल' : 'Landscapes & Agro-Staples'}</span>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
          {language === 'hi' ? 'माटी से थाली तक: बिहार के मूल घटक' : 'Ingredients of Bihar'}
        </h2>

        <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-3xl leading-relaxed">
          {language === 'hi'
            ? '“घटक → भूदृश्य → कृषि चक्र → रसोई।” जानिए कैसे बिहार की उपजाऊ जलोढ़ मिट्टी, आर्द्रभूमि (पोखर) और रबी-खरीफ चक्र इसके व्यंजनों के आधार बनते हैं।'
            : 'Explore the fundamental pantry of Bihar traced from natural landscape to agrarian cycle and domestic hearth. Not abstract groceries, but living bonds with soil and season.'}
        </p>
      </div>

      {/* Grid of Ingredient Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.map(ing => (
          <div
            key={ing.id}
            className="p-6 rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-[#FBF9F5] dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-center">
                  {getIngredientIcon(ing.iconType)}
                </div>
                <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] uppercase">
                  {ing.agriculturalSeason}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8]">
                  {ing.name}
                </h3>
                <span className="font-serif text-xs text-[#C85A32] dark:text-[#E06C43]">
                  {ing.hindiName}
                </span>
                <p className="font-serif italic text-xs text-[#8C8276] dark:text-[#A89F93] mt-1">
                  "{ing.tagline}"
                </p>
              </div>

              {/* Landscape to Kitchen Path */}
              <div className="p-3.5 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] font-bold block">
                  Landscape → Agriculture → Kitchen:
                </span>
                <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                  {ing.landscapeConnection}
                </p>
              </div>

              <p className="text-xs text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                {ing.culturalRole}
              </p>
            </div>

            {/* Dishes Used In */}
            <div className="pt-3 border-t border-[#F0E8DD] dark:border-[#2E343B] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
                Signature Dishes:
              </span>
              <div className="flex flex-wrap gap-1">
                {ing.dishesUsedIn.map((dName, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onSelectIngredientDish?.(dName)}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F4EFE6] dark:bg-[#252A30] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32] hover:text-[#C85A32] dark:hover:text-[#E06C43] transition-colors cursor-pointer text-left"
                  >
                    {dName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
