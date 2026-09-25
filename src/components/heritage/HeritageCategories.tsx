import React from 'react';
import { HERITAGE_CATEGORIES, HeritageCategoryMeta } from '../../data/heritage';
import { Building2, Landmark, Sparkles, BookOpen, Castle, Award } from 'lucide-react';

interface HeritageCategoriesProps {
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  language?: 'en' | 'hi';
}

export const HeritageCategories: React.FC<HeritageCategoriesProps> = ({
  selectedCategoryId,
  onSelectCategory,
  language = 'en'
}) => {
  const activeCategory = HERITAGE_CATEGORIES.find(c => c.id === selectedCategoryId) || HERITAGE_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ancient-universities':
        return <BookOpen className="w-3.5 h-3.5" />;
      case 'sacred-shrines':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'mauryan-antiquity':
        return <Landmark className="w-3.5 h-3.5" />;
      case 'stupas-sanctuaries':
        return <Building2 className="w-3.5 h-3.5" />;
      case 'citadels-mausoleums':
        return <Castle className="w-3.5 h-3.5" />;
      default:
        return <Award className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-[#FBF9F5] dark:bg-[#1A1D20] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-5 sm:p-6 shadow-xs transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#EADBCE] dark:border-[#2E343B]">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C85A32]">
            Museum Curatorial Departments
          </span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'धरोहर श्रेणियां एवं विभाग' : 'Explore by Architectural Typology'}
          </h2>
        </div>
        <div className="text-xs text-[#2D3238]/60 dark:text-[#C8BFB4]/60 font-sans">
          Curated by archaeological typology and chronological significance
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {HERITAGE_CATEGORIES.map(cat => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-[#1E2124] dark:bg-[#C85A32] text-white shadow-sm ring-1 ring-[#1E2124] dark:ring-[#C85A32]'
                  : 'bg-white dark:bg-[#252A30] hover:bg-[#F4EFE6] dark:hover:bg-[#2C3138] text-[#2D3238] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#3D454F]'
              }`}
            >
              <span className={isSelected ? 'text-[#F5B597]' : 'text-[#C85A32]'}>
                {getCategoryIcon(cat.id)}
              </span>
              <span>{language === 'hi' ? cat.hindiLabel : cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-[#F4EFE6] dark:bg-[#1E2124] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 group-hover:bg-white dark:group-hover:bg-[#252A30]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Editorial Explainer */}
      <div className="mt-4 pt-3 text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#C8BFB4]/80 flex items-center gap-2 italic">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
        <span>{activeCategory.description}</span>
      </div>
    </div>
  );
};
