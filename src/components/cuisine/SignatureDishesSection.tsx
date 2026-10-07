import React from 'react';
import { Sparkles, ArrowRight, Award, Utensils, MapPin } from 'lucide-react';
import { Dish } from '../../types';

interface SignatureDishesSectionProps {
  dishes: Dish[];
  language: 'en' | 'hi';
  onSelectDish: (dish: Dish) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const SignatureDishesSection: React.FC<SignatureDishesSectionProps> = ({
  dishes,
  language,
  onSelectDish,
  onSelectDistrictById
}) => {
  const signatureDishes = dishes.filter(d => d.isSignature);

  return (
    <section id="signature-dishes-section" className="space-y-6 mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
            <span>{language === 'hi' ? 'प्रतिष्ठित व्यंजन' : 'Living Culinary Classics'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार के कालजयी स्वाद' : 'Signature Bihar Foods'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'वे प्रामाणिक व्यंजन जो पीढ़ियों से बिहार की पहचान रहे हैं — अंगारों पर भुनी लिट्टी, छठ का पावन ठेकुआ, परतदार सिलाव खाजा, और गया का तिलकुट।'
              : 'Dishes shaped by agrarian rhythms, riverine soils, and ceremonial gatherings. Each carries an indelible sense of identity, technique, and place.'}
          </p>
        </div>

        <div className="text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
          Curated: <strong className="text-[#C85A32] dark:text-[#E06C43]">{signatureDishes.length}</strong> signature preparations
        </div>
      </div>

      {/* Editorial Grid: Varied Composition */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signatureDishes.map((dish, idx) => {
          const hasImage = Boolean(dish.image);

          return (
            <article
              key={dish.id}
              role="button"
              tabIndex={0}
              aria-label={`View culinary story of ${dish.name}`}
              onClick={() => onSelectDish(dish)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectDish(dish);
                }
              }}
              className="group cursor-pointer rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Header */}
                {hasImage ? (
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#1E2124]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white/90">
                        {dish.region}
                      </span>
                      {dish.giTag && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/90 text-[10px] font-bold uppercase tracking-wider text-black">
                          GI Tag
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-[11px] font-mono text-[#EADBCE]/90">
                        {dish.category}
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full border ${dish.isVegetarian ? 'bg-emerald-400 border-white' : 'bg-rose-500 border-white'}`} />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-2 bg-[#FBF9F5] dark:bg-[#16191D] border-b border-[#EADBCE] dark:border-[#2E343B] relative">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-[10px] font-mono font-semibold uppercase">
                        {dish.region} • {dish.category}
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full ${dish.isVegetarian ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                    </div>

                    <div className="py-4">
                      <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#948B80] uppercase tracking-wider block">
                        Traditional Heritage Recipe
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#1E2124] dark:text-[#F5F1E8]">
                        {dish.hindiName}
                      </h4>
                    </div>
                  </div>
                )}

                {/* Content Body */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="font-serif text-xs text-[#8C8276] dark:text-[#A89F93] mt-0.5">
                      {dish.hindiName}
                    </p>
                  </div>

                  <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed line-clamp-2">
                    {dish.description}
                  </p>

                  {/* Key Ingredients Badges */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block mb-1">
                      Key Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {dish.ingredients.slice(0, 3).map((ing, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F4EFE6] dark:bg-[#252A30] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] truncate max-w-[140px]"
                        >
                          {ing.split('(')[0].trim()}
                        </span>
                      ))}
                      {dish.ingredients.length > 3 && (
                        <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] self-center">
                          +{dish.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: District connection & Read Story */}
              <div className="px-6 py-4 bg-[#FBF9F5] dark:bg-[#16191D] border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-[#8C8276] dark:text-[#A89F93] font-mono text-[11px] truncate max-w-[150px]">
                  <MapPin className="w-3 h-3 text-[#C85A32] flex-shrink-0" />
                  <span className="truncate">{dish.districtNames?.[0] || dish.originDistrict}</span>
                </span>

                <span className="font-semibold text-[#C85A32] dark:text-[#E06C43] group-hover:underline flex items-center gap-1 flex-shrink-0">
                  <span>Culinary Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
