import React from 'react';

interface PersonalitiesHeroProps {
  language: 'en' | 'hi';
}

export const PersonalitiesHero: React.FC<PersonalitiesHeroProps> = ({ language }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] bg-[#16191D] text-white shadow-xl">
      {/* Background Image with Archival Grain and Warm Vignette */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/bihar_luminaries_hero_1790334312072.jpg"
          alt="Luminaries of Bihar"
          className="w-full h-full object-cover object-center opacity-45 mix-blend-luminosity filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16191D] via-[#16191D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-transparent to-black/30" />
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 p-6 sm:p-12 md:p-16 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/40 text-[#EADBCE] text-xs font-semibold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] animate-pulse" />
          <span>{language === 'hi' ? 'बिहार के व्यक्तित्व एवं स्वर' : 'People & Voices of Bihar'}</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
          {language === 'hi' ? 'बिहार की गाथा रचने वाले व्यक्तित्व' : 'People Behind Bihar’s Story'}
        </h1>

        <p className="text-base sm:text-lg text-[#EADBCE]/90 font-serif italic leading-relaxed max-w-2xl">
          {language === 'hi'
            ? 'कवियों और दार्शनिकों से लेकर समाज सुधारकों, कलाकारों, जननायकों और उन आवाज़ों तक जिन्होंने इस पावन भूमि के इतिहास और चेतना को संवारा।'
            : 'From poets and scholars to reformers, artists, leaders and voices that shaped the region.'}
        </p>

        <p className="text-xs sm:text-sm text-[#C8BFB4] leading-relaxed max-w-xl font-sans pt-1">
          An editorial archive dedicated to the thinkers, warriors, wordsmiths, and unsung human spirits who walked the riverbanks of the Ganges and Gandak, leaving an indelible imprint on civilization.
        </p>
      </div>
    </div>
  );
};
