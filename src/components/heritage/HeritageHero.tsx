import React from 'react';
import { Landmark, Compass, Clock, MapPin, ArrowRight, Award, Sparkles } from 'lucide-react';
import { HeritageSite } from '../../types';
import { VERIFIED_IMAGES } from '../../data/media';

interface HeritageHeroProps {
  onOpenFeatured: (siteId: string) => void;
  onScrollToSection: (sectionId: string) => void;
  language?: 'en' | 'hi';
}

export const HeritageHero: React.FC<HeritageHeroProps> = ({
  onOpenFeatured,
  onScrollToSection,
  language = 'en'
}) => {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-[#151719] text-white border border-[#2D3238] shadow-2xl">
      {/* Background Photography — Cinematic Single Verified Image: Nalanda Mahavihara */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={VERIFIED_IMAGES.nalanda}
          alt="Ancient baked-brick monastic ruins of Nalanda Mahavihara"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out brightness-85"
        />
        {/* Subtle authentic museum duotone vignette & gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121416] via-[#121416]/70 to-[#121416]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121416] via-[#121416]/80 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-4xl flex flex-col justify-between min-h-[480px] sm:min-h-[540px]">
        {/* Museum Badge & Provenance */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 text-[#F5B597] text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-4 shadow-sm">
            <Landmark className="w-3.5 h-3.5 text-[#E67E51]" />
            <span>Digital Archaeological Archive & Museum</span>
          </div>

          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-sm font-serif italic text-amber-200/90 tracking-wide">
              {language === 'hi' ? 'पुरातत्व एवं जीवंत स्थापत्य' : 'Archaeology & Living Architecture'}
            </span>
            <span className="text-xs text-[#EADBCE]/50">•</span>
            <span className="text-xs font-sans text-[#EADBCE]/80 tracking-wider uppercase">
              Bilingual Curated Exhibition
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mt-3 drop-shadow-sm">
            {language === 'hi' ? 'बिहार की धरोहर' : "Where Bihar's history still stands"}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-amber-100/90 mt-2 font-normal">
            "बिहार की वह पावन भूमि जहाँ इतिहास केवल पढ़ा नहीं जाता, पत्थरों और स्तूपों में आज भी सांस लेता है।"
          </p>

          {/* Editorial Supporting Prose */}
          <p className="text-sm sm:text-base text-[#E5DACB] mt-4 max-w-2xl leading-relaxed font-sans">
            From ancient universities and sacred enlightenment sanctuaries to rock-cut Mauryan caves, monumental stupas, and water-borne sandstone citadels, Bihar preserves layers of a history that shaped India and the wider world.
          </p>
        </div>

        {/* Bottom Actions & Curatorial Index */}
        <div className="pt-8 sm:pt-10 flex flex-col gap-6">
          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenFeatured('nalanda-mahavihara')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#B34A25] text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98"
            >
              <span>Enter Featured Story: Nalanda Mahavihara</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onScrollToSection('heritage-map-section')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium backdrop-blur-md transition-all active:scale-98"
            >
              <Compass className="w-4 h-4 text-[#F5B597]" />
              <span>Explore Archaeological Map</span>
            </button>

            <button
              onClick={() => onScrollToSection('heritage-timeline-section')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium backdrop-blur-md transition-all active:scale-98"
            >
              <Clock className="w-4 h-4 text-[#F5B597]" />
              <span>Civilizational Timeline</span>
            </button>
          </div>

          {/* Curated Indicators Bar */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#EADBCE]/60">UNESCO Heritage</div>
              <div className="text-base sm:text-lg font-serif font-bold text-white flex items-center gap-1.5 mt-0.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>2 World Sites</span>
              </div>
              <div className="text-[11px] text-[#EADBCE]/70">Nalanda & Mahabodhi</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#EADBCE]/60">Documented Age</div>
              <div className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">
                2,300+ Years
              </div>
              <div className="text-[11px] text-[#EADBCE]/70">3rd c. BCE to Present</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#EADBCE]/60">Monuments Cataloged</div>
              <div className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">
                11 Verified Sites
              </div>
              <div className="text-[11px] text-[#EADBCE]/70">With Authentic Imagery</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#EADBCE]/60">Historical Spans</div>
              <div className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">
                5 Major Epochs
              </div>
              <div className="text-[11px] text-[#EADBCE]/70">Maurya, Pala, Suri, Sikh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
