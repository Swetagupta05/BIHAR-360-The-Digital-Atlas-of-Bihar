import React from 'react';
import { Sparkles, ArrowRight, Sun, Calendar } from 'lucide-react';

interface FestivalsSectionProps {
  onNavigateFestivals: () => void;
}

export const FestivalsSection: React.FC<FestivalsSectionProps> = ({
  onNavigateFestivals
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#14171A] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-[#E0BA6A] text-xs uppercase tracking-widest font-bold mb-2.5">
            <Sun className="w-3.5 h-3.5" />
            <span>Sacred Rhythms & Elemental Devotion</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hindi-title text-white leading-tight mb-2">
            जब बिहार उत्सव बन जाता है
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#E0BA6A] italic mb-4">
            Festivals & Living Traditions
          </p>

          <p className="text-sm sm:text-base text-[#EADBCE]/80 font-light leading-relaxed max-w-xl">
            Where nature is not conquered, but worshipped directly. In Bihar, sacred celebrations transcend social division—kneeling in reverence to water, sun, and seasonal migratory life.
          </p>
        </div>

        {/* Cinematic Masterpiece Feature: Chhath Mahaparva */}
        <div 
          onClick={onNavigateFestivals}
          className="group relative rounded-3xl overflow-hidden bg-[#1E2124] min-h-[440px] sm:min-h-[520px] flex flex-col justify-end p-6 sm:p-12 cursor-pointer border border-white/10 shadow-2xl transition-all duration-300 hover:border-[#E0BA6A]/40"
        >
          <img
            src="/assets/images/chhath_puja_bihar_1789937759874.jpg"
            alt="Devotees offering Sandhya Arghya to the setting sun in the Ganges during Chhath Puja"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/50 to-transparent" />

          <div className="relative z-10 max-w-2xl text-white space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full bg-[#C85A32] text-white text-[11px] font-semibold tracking-wider uppercase">
                The Supreme Mahaparva
              </span>
              <span className="text-xs text-[#E0BA6A] font-hindi-text font-semibold">
                कार्तिक शुक्ल षष्ठी
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors">
              Chhath Puja: The Sun & The River
            </h3>

            <p className="text-sm sm:text-base text-[#EADBCE]/90 font-light leading-relaxed">
              The only Vedic festival in the world that bows in gratitude to both the setting sun and the rising dawn. Millions stand waist-deep in the cool currents of the Ganga, Gandak, and Koshi. No priest mediates. No altar separates. Just human gratitude before the celestial source of all life.
            </p>

            <div className="pt-3 flex items-center gap-2 text-[#E0BA6A] font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
              <span>Read the four sacred days of Chhath</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Secondary Festival Vignettes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sonepur Mela */}
          <div 
            onClick={onNavigateFestivals}
            className="group relative rounded-3xl overflow-hidden bg-[#1E2124] h-60 sm:h-72 flex flex-col justify-end p-6 sm:p-8 cursor-pointer border border-white/10 transition-all duration-300 hover:border-[#E0BA6A]/40"
          >
            <img
              src="/assets/images/sonepur_cattle_fair_1789937950038.jpg"
              alt="Sonepur Cattle Fair rural carnival along the Gandak and Ganga confluence"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

            <div className="relative z-10 text-white space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E0BA6A]">
                Confluence Carnival • Saran
              </span>
              <h4 className="text-xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors">
                Sonepur Harihar Kshetra Mela
              </h4>
              <p className="text-xs text-[#EADBCE]/85 font-light line-clamp-2">
                Asia’s largest rural fair where Marwari horses, folk theaters, and pilgrims gather where the Gandak embraces the Ganga.
              </p>
            </div>
          </div>

          {/* Sama-Chakeva */}
          <div 
            onClick={onNavigateFestivals}
            className="group relative rounded-3xl overflow-hidden bg-[#1E2124] h-60 sm:h-72 flex flex-col justify-end p-6 sm:p-8 cursor-pointer border border-white/10 transition-all duration-300 hover:border-[#E0BA6A]/40"
          >
            <img
              src="/assets/images/sama_chakeva_mithila_1789938124507.jpg"
              alt="Handmade clay bird sculptures for Sama-Chakeva winter folk festival in Mithila"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

            <div className="relative z-10 text-white space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E0BA6A]">
                Winter Courtyard Ritual • Mithila
              </span>
              <h4 className="text-xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors">
                Sama-Chakeva: The Migratory Bond
              </h4>
              <p className="text-xs text-[#EADBCE]/85 font-light line-clamp-2">
                Young sisters mold clay birds under winter moonlight, singing ancient Maithili folk melodies to welcome birds from the Himalayas.
              </p>
            </div>
          </div>
        </div>

        {/* Section Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateFestivals}
            id="festivals-explore-btn"
            className="px-8 py-3 rounded-full bg-[#E0BA6A] text-[#14171A] hover:bg-white font-medium text-sm transition-all shadow-lg inline-flex items-center gap-2"
          >
            <span>Explore all festivals →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
