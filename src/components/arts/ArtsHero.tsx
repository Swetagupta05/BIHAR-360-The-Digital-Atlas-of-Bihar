import React from 'react';
import { Palette, Compass, ArrowDown, Sparkles, Feather } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface ArtsHeroProps {
  language: 'en' | 'hi';
  onScrollToSection: (sectionId: string) => void;
}

export const ArtsHero: React.FC<ArtsHeroProps> = ({ language, onScrollToSection }) => {
  return (
    <section className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#383D45] bg-[#1E2124] text-white shadow-xl">
      {/* Background authentic art image with rich editorial darkening */}
      <div className="absolute inset-0 z-0">
        <img
          src={VERIFIED_IMAGES.madhubani}
          alt="Authentic traditional Madhubani line art and pigments"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-[#1E2124]/85 to-[#1E2124]/60" />
      </div>

      <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-20 lg:py-24 max-w-5xl">
        {/* Subtle Cultural Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 text-[#F4A261] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-xs">
          <Feather className="w-3.5 h-3.5 text-[#E76F51]" />
          <span>
            {language === 'hi'
              ? 'बिहार की हस्तशिल्प एवं जीवंत परंपराएं'
              : 'Living Heritage & Artisanal Traditions of Bihar'}
          </span>
        </div>

        {/* Suggested Hindi Title & English Supporting Typography */}
        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
          {language === 'hi' ? 'बिहार की कला, हाथों की कहानी' : 'The Hands of Bihar'}
        </h1>

        <p className="font-serif italic text-lg sm:text-2xl text-[#EADBCE] mt-2 font-normal leading-relaxed">
          {language === 'hi'
            ? 'मिट्टी की दीवारों से लेकर करघे के रेशम तक, पीढ़ियों की साधना और स्मृति।'
            : 'From painted walls to woven silk, Bihar’s artistic traditions carry generations of memory, skill, and identity.'}
        </p>

        {/* Editorial Introduction */}
        <div className="mt-6 max-w-2xl text-sm sm:text-base text-[#D4C8BC] leading-relaxed space-y-3 font-normal">
          <p>
            {language === 'hi'
              ? 'यह कला केवल देखने का माध्यम नहीं है; यह माटी, वनस्पति, नदियों की रेत और हाथ से रची गई लोक-स्मृति का जीवंत संग्रहालय है। यहां हर रेखा में एक व्रत है, हर रंग में वनस्पति का अर्क है, और हर बुनाई में पुरखों का संवाद है।'
              : 'Here, art is neither decorative commerce nor static museum artifact. It is a living archive—drawn with bamboo twigs on cow-dung washed walls, coiled from wild fragrant river reeds, and woven from forest cocoons by the steady hands of village women and ancestral loom masters.'}
          </p>
        </div>

        {/* Quick Editorial Anchors */}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium">
          <button
            onClick={() => onScrollToSection('arts-discovery')}
            className="px-4 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B34D29] text-white shadow-md transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>{language === 'hi' ? 'परंपराओं की खोज करें' : 'Explore Traditions'}</span>
          </button>

          <button
            onClick={() => onScrollToSection('process-storytelling')}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#EADBCE] border border-white/20 backdrop-blur-xs transition-all flex items-center gap-2"
          >
            <Palette className="w-4 h-4 text-[#F4A261]" />
            <span>{language === 'hi' ? 'कला कैसे बनती है?' : 'How Art Is Made'}</span>
          </button>

          <button
            onClick={() => onScrollToSection('materials-archive')}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#EADBCE] border border-white/20 backdrop-blur-xs transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{language === 'hi' ? 'बिहार की सामग्री' : 'Materials of Bihar'}</span>
          </button>

          <button
            onClick={() => onScrollToSection('living-masters')}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#EADBCE] border border-white/20 backdrop-blur-xs transition-all flex items-center gap-2"
          >
            <span>{language === 'hi' ? 'परंपरा के संवाहक' : 'Living Masters'}</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex items-center gap-2 text-xs text-[#EADBCE]/60">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#F4A261]" />
          <span>{language === 'hi' ? 'कलाओं की विस्तृत गाथा नीचे पढ़ें' : 'Scroll down to immerse in Bihar’s craft stories'}</span>
        </div>
      </div>
    </section>
  );
};
