import React from 'react';
import { BookOpen, Sparkles, Feather, ScrollText, Music, MapPin } from 'lucide-react';

interface LanguageHeroProps {
  language: 'en' | 'hi';
  onExploreLanguages: () => void;
  onExploreScripts: () => void;
  onExploreOralTraditions: () => void;
}

export const LanguageHero: React.FC<LanguageHeroProps> = ({
  language,
  onExploreLanguages,
  onExploreScripts,
  onExploreOralTraditions
}) => {
  return (
    <section className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] bg-[#14171A] text-white shadow-xl mb-12">
      {/* Background Subtle Manuscript & Texture Treatment */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-12 -right-12 font-serif text-[180px] sm:text-[240px] text-[#C85A32]/30 leading-none select-none font-bold">
          𑒧𑂍
        </div>
        <div className="absolute bottom-0 left-10 font-serif text-[120px] text-[#EADBCE]/10 leading-none select-none">
          अ
        </div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-[#C85A32]/20 via-indigo-900/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-4xl space-y-6">
        {/* Editorial Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 text-[#F4A261] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
          <Feather className="w-3.5 h-3.5 text-[#E76F51]" />
          <span>
            {language === 'hi'
              ? 'बिहार की भाषाएं, बोलियां एवं वाचिक परंपरा'
              : 'Linguistic Heritage & Living Oral Traditions'}
          </span>
        </div>

        {/* Primary Editorial Headline */}
        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
          {language === 'hi' ? 'बिहार की भाषाएं और स्वर' : 'Languages & Voices of Bihar'}
        </h1>

        {/* Supporting Line */}
        <p className="font-serif text-lg sm:text-2xl text-[#F4A261] font-light leading-snug max-w-3xl">
          {language === 'hi'
            ? 'मैथिली के मधुर पदों से लेकर भोजपुरी के रंगमंच तक, मगही की लोक-कथाओं से लेकर अंगिका के गीतों तक — बिहार अनेक स्वरों में बोलता है।'
            : 'From Maithili poetry to Bhojpuri theatre, from Magahi storytelling to Angika songs, Bihar speaks through many voices.'}
        </p>

        {/* Narrative Context */}
        <p className="text-xs sm:text-sm text-[#D4C8BC] leading-relaxed max-w-2xl font-sans">
          {language === 'hi'
            ? 'भाषाएं केवल शब्द नहीं होतीं; वे अपने भीतर पीढ़ियों की स्मृतियां, साहित्य, संगीत, अनुष्ठान और मानवीय पहचान संजोए रहती हैं। जानिए बिहार के समृद्ध साहित्यिक इतिहास, वाचिक परंपराओं और कैथी व तिरहुता जैसी ऐतिहासिक लिपियों की धरोहर।'
            : 'Languages are not just words. They carry memory, literature, songs, stories, rituals, and identity. Explore the literary lineages, epic oral narratives, and historic scripts that have shaped dialogue across the Gangetic plains for centuries.'}
        </p>

        {/* Action Anchor Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={onExploreLanguages}
            className="px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B04C27] text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-amber-200" />
            <span>{language === 'hi' ? 'भाषाएं एवं बोलियां' : 'Explore Languages'}</span>
          </button>

          <button
            onClick={onExploreScripts}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F7F2EC] border border-white/20 font-medium text-xs sm:text-sm transition-all backdrop-blur-xs flex items-center gap-2"
          >
            <ScrollText className="w-4 h-4 text-emerald-300" />
            <span>{language === 'hi' ? 'बिहार की ऐतिहासिक लिपियां' : 'Historic Scripts'}</span>
          </button>

          <button
            onClick={onExploreOralTraditions}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F7F2EC] border border-white/20 font-medium text-xs sm:text-sm transition-all backdrop-blur-xs flex items-center gap-2"
          >
            <Music className="w-4 h-4 text-sky-300" />
            <span>{language === 'hi' ? 'वाचिक परंपरा एवं लोकगीत' : 'Oral Traditions'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
