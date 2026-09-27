import React from 'react';
import { Compass, Sparkles, MapPin, ArrowRight, ShieldCheck, Route, Heart } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface JourneyHeroProps {
  language: 'en' | 'hi';
  onExploreJourneys: () => void;
  onBuildCustomJourney: () => void;
  onExploreFieldGuide: () => void;
}

export const JourneyHero: React.FC<JourneyHeroProps> = ({
  language,
  onExploreJourneys,
  onBuildCustomJourney,
  onExploreFieldGuide
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#14171A] text-white border border-[#2D3238] shadow-2xl mb-12">
      {/* Background Hero Image with atmospheric overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={VERIFIED_IMAGES.nalanda}
          alt="Ancient Bihar Archaeological Landscapes"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14171A] via-[#14171A]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171A] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:py-20 max-w-4xl">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#E06C43] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xs">
          <Compass className="w-3.5 h-3.5 text-[#E06C43] animate-pulse" />
          <span>{language === 'hi' ? 'सांस्कृतिक एवं ऐतिहासिक परिपथ' : 'Editorial Cultural Expeditions'}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
          {language === 'hi' ? 'बिहार की यात्राएँ' : 'Journeys Through Bihar'}
        </h1>

        {/* Tagline / Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-[#EADBCE] font-light mb-4">
          {language === 'hi'
            ? '“बिहार को सिर्फ़ देखिए नहीं — उसकी कहानियों के साथ चलिए।”'
            : '“Don’t just visit Bihar. Follow a story.”'}
        </p>

        {/* Supporting description */}
        <p className="text-sm sm:text-base text-[#C8BFB4] leading-relaxed max-w-2xl mb-8 font-sans">
          {language === 'hi'
            ? 'सड़कों, सदानीरा नदियों, पुरातात्विक अवशेषों, लोककथाओं और भोजन के अनूठे स्वादों का अनुसरण करें। एक ऐसा परिपथ जो केवल गंतव्य नहीं बताता, बल्कि यह समझाता है कि इस भूमि की हर दिशा में कौन-सी सभ्यता और विचार फले-फूले।'
            : 'Follow the roads, rivers, archaeological remains, living folk arts, and timeless flavours that connect Bihar. Meticulously curated narrative routes that answer not merely where to go, but why every mile of this ancient soil resonates with civilizational memory.'}
        </p>

        {/* Narrative Chain Preview */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#EADBCE]/80 mb-8 py-2 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs w-fit">
          <span className="text-[#E06C43] font-bold">STORY</span>
          <span>→</span>
          <span>PLACES</span>
          <span>→</span>
          <span>DISTRICTS</span>
          <span>→</span>
          <span>HISTORY</span>
          <span>→</span>
          <span>FOOD</span>
          <span>→</span>
          <span>MUSIC</span>
          <span>→</span>
          <span className="text-[#88C4A0] font-bold">EXPERIENCE</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            onClick={onExploreJourneys}
            className="px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#B44D28] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-[#C85A32]/25 flex items-center gap-2 group cursor-pointer"
          >
            <span>{language === 'hi' ? 'कहानियों पर आधारित यात्राएँ' : 'Explore Curated Journeys'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onBuildCustomJourney}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5F1E8] border border-white/20 text-xs sm:text-sm font-bold tracking-wide transition-all backdrop-blur-xs flex items-center gap-2 cursor-pointer"
          >
            <Route className="w-4 h-4 text-[#E06C43]" />
            <span>{language === 'hi' ? 'अपनी यात्रा खुद बनाएँ' : 'Build Your Own Journey'}</span>
          </button>

          <button
            onClick={onExploreFieldGuide}
            className="px-5 py-3 rounded-xl hover:bg-white/5 text-[#C8BFB4] hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#88C4A0]" />
            <span>{language === 'hi' ? 'यात्रा परामर्श एवं दिशानिर्देश' : 'Traveler’s Field Guide'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
