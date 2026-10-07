import React from 'react';
import { Utensils, Heart, Home, Clock } from 'lucide-react';
import { EVERYDAY_MEAL_TRADITIONS } from '../../data/cuisine';

interface EverydayFoodSectionProps {
  language: 'en' | 'hi';
}

export const EverydayFoodSection: React.FC<EverydayFoodSectionProps> = ({ language }) => {
  return (
    <section id="everyday-food-section" className="space-y-6 mb-16">
      {/* Header */}
      <div className="space-y-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Home className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
          <span>{language === 'hi' ? 'दैनिक खानपान' : 'Domestic Hearth & Daily Living'}</span>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
          {language === 'hi' ? 'दैनिक जीवन और घर की रसोई' : 'Food & Everyday Life'}
        </h2>

        <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-3xl leading-relaxed">
          {language === 'hi'
            ? 'बिहार की खानपान संस्कृति केवल महापर्वों तक सीमित नहीं है। दैनिक जीवन की सादगी, संतुलित पोषण और घरेलू स्नेह में रची-बसी परंपराएं यहाँ के जीवन की सच्ची धड़कन हैं।'
            : 'Bihar’s culinary identity is anchored as deeply in everyday domestic care as in festive congregations. From the unhurried afternoon thali to the travel-ready stamina of roasted gram flour, explore how ordinary meals nourish daily life.'}
        </p>
      </div>

      {/* Everyday Traditions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {EVERYDAY_MEAL_TRADITIONS.map((trad, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#C85A32] dark:text-[#E06C43] font-bold uppercase tracking-wider block">
                Everyday Practice {idx + 1}
              </span>

              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E2124] dark:text-[#F5F1E8]">
                {language === 'hi' ? trad.hindiTitle : trad.title}
              </h3>

              <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                {trad.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#F0E8DD] dark:border-[#2E343B]">
              <span className="text-[11px] font-serif italic text-[#8C8276] dark:text-[#A89F93]">
                "{trad.culturalNote}"
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
