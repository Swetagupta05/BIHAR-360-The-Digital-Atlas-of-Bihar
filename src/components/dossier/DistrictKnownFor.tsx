import React from 'react';
import { District } from '../../types';
import { Sparkles, Award, ArrowRight } from 'lucide-react';

interface DistrictKnownForProps {
  district: District;
  language: 'en' | 'hi';
  onNavigateSection?: (sectionId: string) => void;
}

export const DistrictKnownFor: React.FC<DistrictKnownForProps> = ({
  district,
  language,
  onNavigateSection
}) => {
  const items = district.famousFor || [];
  if (items.length === 0) return null;

  return (
    <section 
      id="known-for" 
      aria-labelledby="known-for-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#FBF9F5] dark:bg-[#1A1D20] transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32] block mb-1">
              {language === 'hi' ? 'विशिष्ट पहचान' : 'Identity & Distinction'}
            </span>
            <h2 
              id="known-for-heading" 
              className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
            >
              {language === 'hi' ? `${district.hindiName} की प्रसिद्ध पहचान` : `Known For`}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#736B63] dark:text-[#9EA8B3] max-w-md">
            The defining symbols, agricultural crops, cultural institutions, and heritage landmarks that represent {district.name} across India.
          </p>
        </div>

        {/* Varied Visual Rhythm: Asymmetrical editorial cards instead of cookie-cutter grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.slice(0, 6).map((item, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#1E2124] to-[#2D3238] text-white border border-[#343A40] shadow-md'
                    : 'bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] text-[#1E2124] dark:text-[#FBF9F5]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        isFeatured
                          ? 'bg-[#C85A32] text-white'
                          : 'bg-black/5 dark:bg-white/10 text-[#C85A32]'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Signature #{idx + 1}</span>
                    </span>

                    <span className={`text-[11px] font-mono ${isFeatured ? 'text-white/50' : 'text-[#A3988C]'}`}>
                      {district.region} Division
                    </span>
                  </div>

                  <h3 className={`font-serif font-bold ${isFeatured ? 'text-2xl sm:text-3xl text-white' : 'text-xl text-[#1E2124] dark:text-[#FBF9F5]'} leading-snug mb-3`}>
                    {item}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isFeatured ? 'text-[#EADBCE]/85' : 'text-[#5C554E] dark:text-[#B9C4D0]'}`}>
                    {isFeatured 
                      ? `${item} stands at the historical epicenter of ${district.name}, celebrated in official gazetteers and regional folklore.`
                      : `A hallmark of local culture, craft, or agriculture rooted in generational community practice.`
                    }
                  </p>
                </div>

                {onNavigateSection && (
                  <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onNavigateSection('places')}
                      className={`text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer ${
                        isFeatured ? 'text-amber-300 hover:text-white' : 'text-[#C85A32] hover:text-[#A04523]'
                      }`}
                    >
                      <span>Explore related landmarks</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <Award className={`w-4 h-4 ${isFeatured ? 'text-amber-300/60' : 'text-[#C85A32]/40'}`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
