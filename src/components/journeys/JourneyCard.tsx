import React from 'react';
import { Clock, MapPin, Bookmark, ArrowRight, Utensils, Music, BookOpen, Layers } from 'lucide-react';
import { CuratedJourney } from '../../types';

interface JourneyCardProps {
  journey: CuratedJourney;
  language: 'en' | 'hi';
  onSelectJourney: (journey: CuratedJourney) => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (journey: CuratedJourney) => void;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
  journey,
  language,
  onSelectJourney,
  isBookmarked = false,
  onToggleBookmark
}) => {
  return (
    <div
      onClick={() => onSelectJourney(journey)}
      className="group rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:border-[#C85A32]/40"
    >
      {/* Top Image Frame */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-[#1E2124]">
        <img
          src={journey.heroImage}
          alt={journey.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          {/* Theme badge */}
          <span
            className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm text-white backdrop-blur-md"
            style={{ backgroundColor: journey.themeColor }}
          >
            {journey.themeLabel}
          </span>

          {/* Bookmark action */}
          {onToggleBookmark && (
            <button
              onClick={e => {
                e.stopPropagation();
                onToggleBookmark(journey);
              }}
              title={isBookmarked ? 'Remove Bookmark' : 'Save Journey'}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isBookmarked
                  ? 'bg-[#C85A32] text-white shadow-md'
                  : 'bg-black/40 hover:bg-black/60 text-white/90 hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        {/* Bottom overlay info inside image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-3 text-xs font-semibold text-[#EADBCE] mb-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E06C43]" />
              <span>{journey.durationDays} Days / {journey.durationDays - 1} Nights</span>
            </span>
            <span>•</span>
            <span>{journey.totalStops} Major Stops</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-sm bg-white/20 text-[10px] uppercase font-bold tracking-wider">
              {journey.pace}
            </span>
          </div>

          <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug line-clamp-1">
            {language === 'hi' ? journey.hindiTitle : journey.title}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          {/* Hindi / English secondary title */}
          <p className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43]">
            {language === 'hi' ? journey.title : journey.hindiTitle}
          </p>

          {/* Tagline / Subtitle */}
          <p className="font-serif italic text-xs sm:text-sm text-[#2D3238] dark:text-[#EAE5D9] leading-relaxed">
            {language === 'hi' ? journey.hindiTagline : journey.tagline}
          </p>

          {/* Narrative excerpt */}
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] line-clamp-2 leading-relaxed">
            {journey.storyNarrative}
          </p>

          {/* Route Stop Sequence Flow */}
          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block mb-1.5">
              {language === 'hi' ? 'मार्ग क्रम' : 'Route Sequence'}
            </span>
            <div className="flex flex-wrap items-center gap-1 text-[11px] font-semibold text-[#2D3238] dark:text-[#C8BFB4]">
              {journey.stops.map((stop, index) => (
                <React.Fragment key={stop.stopNumber}>
                  <span className="px-2 py-0.5 rounded-md bg-[#F4EFE6] dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B]">
                    {stop.districtName}
                  </span>
                  {index < journey.stops.length - 1 && (
                    <span className="text-[#8C8276] text-xs">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Sensory badges row */}
        <div className="pt-3 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-[11px] text-[#5C554E] dark:text-[#A89F93]">
            {journey.culinaryTraditions.length > 0 && (
              <span className="flex items-center gap-1" title="Local Culinary Stops">
                <Utensils className="w-3 h-3 text-[#C85A32]" />
                <span className="truncate max-w-[80px] sm:max-w-[100px]">{journey.culinaryTraditions[0]}</span>
              </span>
            )}
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1" title="Best Season">
              <span className="text-[#8C8276] font-medium">{journey.bestSeason.split('(')[0]}</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-[#C85A32] dark:text-[#E06C43] group-hover:translate-x-1 transition-transform">
            <span>{language === 'hi' ? 'यात्रा विवरण' : 'View Story'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
