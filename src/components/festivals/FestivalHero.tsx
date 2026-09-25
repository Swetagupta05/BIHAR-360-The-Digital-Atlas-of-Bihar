import React from 'react';
import { Calendar, Sparkles, ArrowDown, MapPin, Sun, Waves } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface FestivalHeroProps {
  language: 'en' | 'hi';
  onExploreChhath: () => void;
  onExploreLivingTraditions: () => void;
  onExploreCalendar: () => void;
}

export const FestivalHero: React.FC<FestivalHeroProps> = ({
  language,
  onExploreChhath,
  onExploreLivingTraditions,
  onExploreCalendar
}) => {
  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8DFD5] bg-[#1E2124] text-white shadow-xl">
      {/* Background Cinematic Atmosphere with Authentic Chhath Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={VERIFIED_IMAGES.chhathPuja}
          alt="Chhath Puja Mahaparva at Sacred Ganga Ghats"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 filter contrast-125 transition-transform duration-1000"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-[#1E2124]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141618] via-[#1E2124]/70 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-5xl">
        {/* Cultural Tagline Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 text-[#F4A261] text-xs font-semibold tracking-wider uppercase backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
          <span>
            {language === 'hi'
              ? 'बिहार की जीवित परंपराएं एवं लोक उत्सव'
              : 'Living Traditions & Sacred Rhythms of Bihar'}
          </span>
        </div>

        {/* Primary Editorial Headline requested by prompt */}
        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-4xl text-balance">
          {language === 'hi' ? 'पर्व जो बिहार को जोड़ते हैं' : 'पर्व जो बिहार को जोड़ते हैं'}
        </h1>

        {/* English/Bilingual Sub-headline */}
        <p className="font-serif text-xl sm:text-2xl text-[#EADBCE] font-light mt-3 leading-snug">
          {language === 'hi'
            ? 'त्योहार केवल कैलेंडर की तारीखें नहीं हैं। वे एक पीढ़ी से दूसरी पीढ़ी तक बहती जीवित परंपराएं हैं।'
            : 'Festivals are not just dates on a calendar. They are living traditions carried from one generation to the next.'}
        </p>

        {/* Narrative Context */}
        <p className="text-sm sm:text-base text-[#D4C8BC] mt-5 max-w-3xl leading-relaxed font-sans">
          {language === 'hi'
            ? 'गंगा के तटों पर डूबते और उगते सूर्य को समान नमन करती आस्था, मिथिला की चांदनी रातों में सामा-चकेवा की गूंजती लोकगाथाएं, सोनपुर के संगम पर सदियों पुराना पशु मेला, और गया के फल्गु तट पर पूर्वजों के प्रति शाश्वत कृतज्ञता — जानिए कैसे बिहार अपनी संस्कृति को केवल याद नहीं रखता, जीता है।'
            : 'From the waist-deep river waters of Chhath honoring both sunset and dawn, to the winter moonlight ballads of Sama-Chakeva in Mithila, the ancient pastoral confluence of Sonepur, and the filial gratitude of Gaya’s Falgu sands — step into a landscape where sacred rhythms and everyday life are one.'}
        </p>

        {/* Key Dimensions Meta Strip */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <span className="text-[#A59D93] uppercase tracking-wider text-[11px] block font-mono">
              The Supreme Festival
            </span>
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-[#F4A261]" />
              Chhath Mahaparva
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[#A59D93] uppercase tracking-wider text-[11px] block font-mono">
              Seasonal Cycle
            </span>
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#E76F51]" />
              5 Seasons • 12 Months
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[#A59D93] uppercase tracking-wider text-[11px] block font-mono">
              Sacred Confluences
            </span>
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Waves className="w-3.5 h-3.5 text-[#2A9D8F]" />
              Ganga, Gandak, Falgu
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[#A59D93] uppercase tracking-wider text-[11px] block font-mono">
              Cultural Expression
            </span>
            <span className="font-semibold text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E9C46A]" />
              Ritual Art, Song & Food
            </span>
          </div>
        </div>

        {/* Interactive Quick Links */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={onExploreChhath}
            className="px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B04C27] text-white font-medium text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-[#C85A32]/50"
          >
            <Sun className="w-4 h-4 text-amber-200" />
            <span>{language === 'hi' ? 'छठ महापर्व का विशेष आख्यान' : 'Experience Chhath Story'}</span>
          </button>

          <button
            onClick={onExploreLivingTraditions}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F7F2EC] border border-white/20 font-medium text-xs sm:text-sm transition-all backdrop-blur-xs flex items-center gap-2 focus:outline-hidden"
          >
            <Sparkles className="w-4 h-4 text-[#F4A261]" />
            <span>{language === 'hi' ? 'जीवित परंपराएं (गीत, कला, भोजन)' : 'Living Traditions'}</span>
          </button>

          <button
            onClick={onExploreCalendar}
            className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/5 text-[#EADBCE] border border-white/10 font-medium text-xs sm:text-sm transition-all flex items-center gap-2 focus:outline-hidden"
          >
            <Calendar className="w-4 h-4" />
            <span>{language === 'hi' ? 'वार्षिक कैलेंडर' : 'Annual Calendar'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
