import React from 'react';
import { District } from '../../types';
import { Utensils, Sparkles, MapPin } from 'lucide-react';

interface DistrictFoodProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictFood: React.FC<DistrictFoodProps> = ({ district, language }) => {
  const foods = district.food || [];

  return (
    <section 
      id="flavors" 
      aria-labelledby="flavors-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#FBF9F5] dark:bg-[#1A1D20] transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32]">
              {language === 'hi' ? 'खान-पान' : 'Gastronomic Heritage'}
            </span>
            <span className="text-xs text-amber-500 font-serif font-bold">
              • स्वाद
            </span>
          </div>
          <h2 
            id="flavors-heading" 
            className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
          >
            {language === 'hi' ? `${district.hindiName} के स्थानीय स्वाद` : `Local Flavors of ${district.name}`}
          </h2>
          <p className="text-sm sm:text-base text-[#736B63] dark:text-[#9EA8B3] mt-2">
            Signature culinary preparations, rural dairy delicacies, and regional riverine foods rooted in {district.region} tradition.
          </p>
        </div>

        {foods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foods.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-[#C85A32]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-[11px] font-semibold">
                      <Utensils className="w-3 h-3" />
                      <span>Specialty #{idx + 1}</span>
                    </span>

                    <span className="text-[11px] text-[#736B63] dark:text-[#9EA8B3] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C85A32]" />
                      <span>{district.name} & {district.region}</span>
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#FBF9F5] mb-2 leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#D1C7BD] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EADBCE] dark:border-[#343A40] flex items-center justify-between text-[11px] text-[#A3988C]">
                  <span>Traditional Recipe</span>
                  <span className="flex items-center gap-1 text-[#C85A32]">
                    <Sparkles className="w-3 h-3" />
                    <span>Regional Authentic</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] text-center max-w-2xl mx-auto">
            <Utensils className="w-8 h-8 text-[#C85A32] mx-auto mb-3" />
            <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#FBF9F5] mb-1">
              Regional {district.region} Flavors
            </h3>
            <p className="text-xs sm:text-sm text-[#736B63] dark:text-[#9EA8B3]">
              Culinary traditions in {district.name} are deeply integrated with the seasonal harvest of {district.region}—featuring fresh earthen curd, beaten rice (Chura), aromatic mustard river fish, and winter sesame sweets.
            </p>
          </div>
        )}

        {/* Agricultural Base Context */}
        {district.agriculture && district.agriculture.length > 0 && (
          <div className="mt-8 p-5 rounded-xl bg-[#EFE8DC] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#1E2124] dark:text-[#FBF9F5]">
                {language === 'hi' ? 'कृषि एवं उपज आधार:' : 'Agricultural & Produce Foundation:'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {district.agriculture.map((crop, i) => (
                <span 
                  key={i}
                  className="px-2.5 py-0.5 rounded-md bg-white/70 dark:bg-black/40 text-[#463F38] dark:text-[#D1C7BD] font-medium"
                >
                  {crop}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
