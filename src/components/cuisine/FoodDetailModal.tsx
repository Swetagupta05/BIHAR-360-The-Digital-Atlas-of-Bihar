import React, { useEffect } from 'react';
import { X, MapPin, Sparkles, Calendar, Utensils, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { Dish } from '../../types';

interface FoodDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  language: 'en' | 'hi';
  onNavigateTab?: (tab: string) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({
  dish,
  onClose,
  language,
  onNavigateTab,
  onSelectDistrictById
}) => {
  useEffect(() => {
    if (!dish) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [dish, onClose]);

  if (!dish) return null;

  const hasImage = Boolean(dish.image);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Culinary story of ${dish.name}`}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FBF9F5] dark:bg-[#16191D] text-[#1E2124] dark:text-[#F5F1E8] rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EADBCE] dark:border-[#2E343B] bg-white/50 dark:bg-[#1E2227]/50 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Culinary Heritage • {dish.region || 'Bihar'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#1E2124] dark:text-[#F5F1E8] border border-[#EADBCE] dark:border-[#2E343B] transition-colors"
            aria-label="Close culinary story"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Story Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          {/* Visual Header / Cover */}
          {hasImage ? (
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-[#1E2124] border border-[#EADBCE] dark:border-[#2E343B] shadow-sm">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white/90">
                    {dish.category}
                  </span>
                  {dish.giTag && (
                    <span className="ml-2 px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-bold uppercase">
                      GI Tagged
                    </span>
                  )}
                </div>
                <span className={`w-3 h-3 rounded-full border-2 border-white ${dish.isVegetarian ? 'bg-emerald-400' : 'bg-rose-500'}`} />
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2 text-center">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] mx-auto flex items-center justify-center">
                <Utensils className="w-6 h-6 text-[#C85A32]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
                Traditional Recipe Documentation
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1E2124] dark:text-[#F5F1E8]">
                {dish.hindiName}
              </h3>
            </div>
          )}

          {/* Titles & Dietary Category */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-xs font-mono font-semibold uppercase">
                {dish.region} • {dish.category}
              </span>
              <span className="text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
                {dish.isVegetarian ? '🟢 Pure Vegetarian' : '🔴 Non-Vegetarian'}
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
              {dish.name}
            </h2>

            <p className="font-serif text-lg text-[#C85A32] dark:text-[#E06C43]">
              {dish.hindiName}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
            {dish.description}
          </p>

          {/* Key Ingredients */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Traditional Ingredients
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {dish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Preparation Method */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Traditional Preparation Technique
            </h4>
            <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B]">
              <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                {dish.preparationMethod}
              </p>
            </div>
          </div>

          {/* Cultural & Ritual Context */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Cultural & Social Significance
            </h4>
            <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
              {dish.culturalContext}
            </p>
          </div>

          {/* When Eaten & Season */}
          <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-1 text-xs">
            {dish.whenEaten && (
              <div>
                <strong className="text-[#1E2124] dark:text-[#F5F1E8] font-mono uppercase text-[10px] block">
                  When It Is Eaten:
                </strong>
                <span className="text-[#5A524A] dark:text-[#C8BFB4]">{dish.whenEaten}</span>
              </div>
            )}
            {dish.season && (
              <div className="pt-1">
                <strong className="text-[#1E2124] dark:text-[#F5F1E8] font-mono uppercase text-[10px] block">
                  Season:
                </strong>
                <span className="text-[#5A524A] dark:text-[#C8BFB4]">{dish.season}</span>
              </div>
            )}
          </div>

          {/* Cross-Link Integration */}
          <div className="space-y-2 pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B]">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Explore in Bihar 360
            </h4>
            <div className="flex flex-wrap gap-2">
              {dish.festivalConnections && dish.festivalConnections.length > 0 && onNavigateTab && (
                <button
                  onClick={() => {
                    onClose();
                    onNavigateTab('festivals');
                  }}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Associated Festival: {dish.festivalNames?.[0] || 'Festival'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}

              {dish.originDistrict && onSelectDistrictById && (
                <button
                  onClick={() => {
                    onClose();
                    onSelectDistrictById(dish.originDistrict);
                  }}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#4A453E] dark:text-[#C8BFB4] hover:underline flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Explore {dish.districtNames?.[0] || dish.originDistrict} Dossier</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Sources Attribution */}
          {dish.sources && dish.sources.length > 0 && (
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#5A524A] dark:text-[#C8BFB4] space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Documented Sources</span>
              </div>
              <ul className="list-disc list-inside text-[11px] space-y-0.5 text-[#8C8276] dark:text-[#A89F93]">
                {dish.sources.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F4EFE6] dark:bg-[#16191D] border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
          <span className="text-xs text-[#7A7065] dark:text-[#A89F93] font-mono">
            BIHAR 360 • Culinary Heritage Archive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1E2124] dark:bg-[#252A30] hover:bg-[#C85A32] dark:hover:bg-[#C85A32] text-white text-xs font-semibold transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
