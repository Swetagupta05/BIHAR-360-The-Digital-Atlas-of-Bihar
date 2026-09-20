import React from 'react';
import { Compass, MapPin, ArrowDown, Sparkles, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onDiscoverDistricts: () => void;
  language?: 'en' | 'hi';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onDiscoverDistricts,
  language = 'en'
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#14171A] text-white">
      {/* Background Photography with Warm Atmospheric Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/chhath_puja_bihar_1789937759874.jpg"
          alt="Chhath Puja sunrise prayers on the holy river Ganga in Bihar"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.72] contrast-[1.08] transition-transform duration-1000 ease-out"
        />
        {/* Soft radial and linear vignetting for readable typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171A] via-[#14171A]/45 to-[#14171A]/60" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#14171A]/30 to-[#14171A]/80" />
        
        {/* Subtle Bihar Geographic Contour / River Network Watermark */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen flex items-center justify-center">
          <svg
            className="w-[85%] max-w-4xl h-auto"
            viewBox="0 0 800 500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            {/* Stylized contour of Bihar territory */}
            <path
              d="M 120,180 C 180,120 280,110 380,130 C 480,100 590,110 680,160 C 720,210 750,290 710,360 C 640,420 540,450 430,440 C 310,460 210,430 140,380 C 90,320 80,240 120,180 Z"
              strokeDasharray="4 4"
            />
            {/* The sacred Ganga flowing west to east */}
            <path
              d="M 90,260 Q 240,240 370,270 T 540,265 T 730,290"
              stroke="#E0BA6A"
              strokeWidth="2.5"
            />
            {/* Gandak, Ghaghara, Kosi, Son river tributaries */}
            <path d="M 230,120 Q 280,180 340,260" stroke="#8C5B3E" strokeWidth="1.5" />
            <path d="M 520,130 Q 530,190 550,270" stroke="#8C5B3E" strokeWidth="1.5" />
            <path d="M 310,440 Q 320,350 350,270" stroke="#8C5B3E" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Foreground Hero Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Cultural Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1E2124]/75 border border-[#E0BA6A]/30 backdrop-blur-md mb-6 shadow-md animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="w-2 h-2 rounded-full bg-[#E0BA6A] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#EADBCE] uppercase">
            The Digital Atlas & Cultural Memory of Bihar
          </span>
        </div>

        {/* Master Display Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-4 drop-shadow-sm leading-tight">
          BIHAR 360
        </h1>

        {/* Major Hindi Headline — Respected & Regal */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-hindi-title text-[#E0BA6A] tracking-normal mb-6 drop-shadow-md">
          हर ज़िले की अपनी कहानी है।
        </h2>

        {/* Evocative Narrative Subheading */}
        <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-[#F5EFE6]/90 font-light leading-relaxed mb-10 text-balance">
          Bihar is a living story of sacred rivers, resilient people, monumental heritage, soulful food, cosmic festivals, ancient languages, art, and timeless memory.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExplore}
            id="hero-explore-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C85A32] hover:bg-[#A54420] text-white font-medium text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-[#C85A32]/30 flex items-center justify-center gap-2 group"
          >
            <span>Explore Bihar</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onDiscoverDistricts}
            id="hero-districts-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#E0BA6A]" />
            <span>Discover the 38 Districts</span>
          </button>
        </div>

        {/* Atmospheric Context Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full max-w-3xl flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm text-[#EADBCE]/80 font-light">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E0BA6A]" />
            <span>Sacred Ganga Basin</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
            <span>38 Distinctive Districts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E6550]" />
            <span>3,000+ Years of History</span>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Cue */}
      <div 
        onClick={onExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer text-[#EADBCE]/60 hover:text-white transition-colors duration-200"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#E0BA6A]" />
      </div>
    </section>
  );
};
