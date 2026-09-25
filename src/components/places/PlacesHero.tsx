import React from 'react';
import { Compass, Waves, Trees } from 'lucide-react';

interface PlacesHeroProps {
  language: 'en' | 'hi';
}

export const PlacesHero: React.FC<PlacesHeroProps> = ({ language }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] bg-[#16191D] text-white shadow-xl">
      {/* Background Image: Authentic Ganga & Alluvial Plains of Bihar */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/bihar_landscape_hero_1790340760986.jpg"
          alt="Ganga and Alluvial Plains of Bihar"
          className="w-full h-full object-cover object-center opacity-55 mix-blend-luminosity filter contrast-115"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16191D] via-[#16191D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-transparent to-black/30" />
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 p-6 sm:p-12 md:p-16 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/40 text-[#EADBCE] text-xs font-semibold tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>{language === 'hi' ? 'भूगोल, नदियां एवं प्रकृति' : 'Landscapes, Rivers & Natural Character'}</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
          {language === 'hi' ? 'बिहार के परिदृश्य एवं प्राकृतिक धरा' : 'Places & Landscapes of Bihar'}
        </h1>

        <p className="text-base sm:text-lg text-[#EADBCE]/90 font-serif italic leading-relaxed max-w-2xl">
          {language === 'hi'
            ? 'मैदानों को रचने वाली नदियों से लेकर वनों, आर्द्रभूमियों, पहाड़ियों और इतिहास से लबरेज़ स्थानों तक।'
            : 'From the rivers that shape the plains to forests, wetlands, hills and places layered with history.'}
        </p>

        <p className="text-xs sm:text-sm text-[#C8BFB4] leading-relaxed max-w-xl font-sans pt-1">
          An immersive geographic and environmental exploration of the sacred riverbeds, ancient quartzite folds, oxbow wetlands, and sub-Himalayan sal canopies that gave rise to three thousand years of Indian civilization.
        </p>
      </div>
    </div>
  );
};
