import React from 'react';
import { Clock, Landmark, Compass, ArrowRight, ShieldCheck, Scroll, Layers } from 'lucide-react';

interface HistoryHeroProps {
  language: 'en' | 'hi';
  onExploreTimeline: () => void;
  onExploreEras: () => void;
  onExploreConnections: () => void;
}

export const HistoryHero: React.FC<HistoryHeroProps> = ({
  language,
  onExploreTimeline,
  onExploreEras,
  onExploreConnections
}) => {
  return (
    <section className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] bg-[#121518] text-white shadow-xl mb-12">
      {/* Background Architectural Texture with Real Historic Landmark */}
      <div className="absolute inset-0 opacity-25 pointer-events-none select-none">
        <img
          src="/assets/images/barabar_caves_bihar_1789937792685.jpg"
          alt="Barabar Caves Mauryan Rock Architecture"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121518] via-[#121518]/90 to-transparent" />
      </div>

      <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-4xl space-y-6">
        {/* Editorial Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 text-[#F4A261] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
          <Clock className="w-3.5 h-3.5 text-[#E76F51]" />
          <span>
            {language === 'hi'
              ? 'समय, स्थान और जनमानस की यात्रा'
              : 'Chronicles, Archaeology & Living Landscapes'}
          </span>
        </div>

        {/* Primary Editorial Headline */}
        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
          {language === 'hi' ? 'बिहार — समय के पार' : 'Bihar Through Time'}
        </h1>

        {/* Supporting Line */}
        <p className="font-serif text-lg sm:text-2xl text-[#F4A261] font-light leading-snug max-w-3xl">
          {language === 'hi'
            ? 'यहाँ साम्राज्यों का उदय हुआ, यहाँ से विचार पूरी दुनिया में फैले, और सदियों का इतिहास आज भी बिहार के परिदृश्यों में जीवंत है।'
            : 'Empires rose here, ideas travelled from here, and centuries of history still remain visible in Bihar’s landscapes.'}
        </p>

        {/* Narrative Context */}
        <p className="text-xs sm:text-sm text-[#D4C8BC] leading-relaxed max-w-2xl font-sans">
          {language === 'hi'
            ? 'यह कोई तारीखों की सूखी सूची नहीं है; यह एक सभ्यतागत यात्रा है। जानिए कैसे चिरांद की पाषाण बस्तियों, वैशाली के प्रथम गणतंत्र, पाटलिपुत्र के मौर्य साम्राज्य और नालंदा के ज्ञानपीठों से लेकर चंपारण सत्याग्रह तक का इतिहास आज भी हमारे सामने खड़ा है।'
            : 'Not a wall of dates or a textbook summary. Explore how the ancient republics of Vaishali, the imperial courts of Pataliputra, the monastic quadrangles of Nalanda, and the agrarian hearths of Champaran shaped the political, philosophical, and moral foundations of South Asia.'}
        </p>

        {/* Action Anchor Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <button
            onClick={onExploreTimeline}
            className="px-5 py-2.5 rounded-full bg-[#C85A32] text-white text-xs font-semibold hover:bg-[#B34B24] transition-colors shadow-sm flex items-center gap-2"
          >
            <span>{language === 'hi' ? 'कालक्रम देखें' : 'Explore Timeline'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onExploreEras}
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20 backdrop-blur-xs flex items-center gap-2"
          >
            <Layers className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>{language === 'hi' ? '12 ऐतिहासिक युग' : '12 Historical Eras'}</span>
          </button>

          <button
            onClick={onExploreConnections}
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#D4C8BC] text-xs font-semibold transition-colors border border-white/10 backdrop-blur-xs flex items-center gap-2"
          >
            <Compass className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>{language === 'hi' ? 'स्थान एवं विभूतियाँ' : 'Places & People Matrix'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
