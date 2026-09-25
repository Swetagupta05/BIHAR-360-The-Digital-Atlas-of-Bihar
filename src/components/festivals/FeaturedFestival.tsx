import React from 'react';
import { Calendar, MapPin, Utensils, Music, ArrowRight, Bookmark, Share2, Sparkles, Check, Heart } from 'lucide-react';
import { Festival } from '../../types';

interface FeaturedFestivalProps {
  festival: Festival;
  language: 'en' | 'hi';
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onOpenDetail: () => void;
  onExploreDistrict?: (districtId: string) => void;
  onExploreFood?: (foodId?: string) => void;
  variant?: 'left' | 'right' | 'wide';
}

export const FeaturedFestival: React.FC<FeaturedFestivalProps> = ({
  festival,
  language,
  isBookmarked,
  onToggleBookmark,
  onOpenDetail,
  onExploreDistrict,
  onExploreFood,
  variant = 'left'
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        navigator.share({
          title: `${festival.name} — Bihar 360`,
          text: festival.overview || festival.description,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // fallback
    }
  };

  const isWide = variant === 'wide';
  const isImageRight = variant === 'right';

  return (
    <article className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] overflow-hidden shadow-xs hover:shadow-md transition-shadow">
      <div className={`grid grid-cols-1 ${isWide ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-0 items-stretch`}>
        {/* Visual Column */}
        <div
          className={`${
            isWide ? 'lg:col-span-5' : 'lg:col-span-5'
          } ${isImageRight ? 'lg:order-2' : 'lg:order-1'} relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-[#1E2124] overflow-hidden group`}
        >
          <img
            src={festival.image}
            alt={festival.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Timing Chip at Top */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wider uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>{festival.monthDisplay || festival.monthGregorian || 'Traditional Calendar'}</span>
            </span>

            {/* Bookmark & Share Buttons */}
            <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark();
                }}
                className={`p-1.5 rounded-full transition-colors ${
                  isBookmarked
                    ? 'bg-[#C85A32] text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/20'
                }`}
                title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this tradition'}
                aria-label="Bookmark"
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
              </button>
              <button
                onClick={handleShare}
                className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                title="Share tradition"
                aria-label="Share"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Bottom Atmosphere Caption on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full inline-block">
              ✓ Authentic Living Heritage Photography
            </span>
            {festival.atmosphereQuote && (
              <p className="text-xs text-white/90 italic font-serif line-clamp-2">
                "{festival.atmosphereQuote}"
              </p>
            )}
          </div>
        </div>

        {/* Editorial Story Column */}
        <div
          className={`${
            isWide ? 'lg:col-span-7' : 'lg:col-span-7'
          } ${isImageRight ? 'lg:order-1' : 'lg:order-2'} p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6`}
        >
          {/* Header & Titles */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
              <span className="text-[#C85A32] dark:text-[#E06C43] font-semibold uppercase">
                {festival.timing}
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
                {festival.name}
              </h3>
              <span className="font-serif text-lg sm:text-xl text-[#8C8276] dark:text-[#A89F93]">
                ({festival.hindiName})
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed font-sans line-clamp-3">
              {festival.overview || festival.description}
            </p>
          </div>

          {/* "How it is Observed" — Sequential Ritual Timeline */}
          {festival.ritualSequence && festival.ritualSequence.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-[#8C8276] dark:text-[#A89F93] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                <span>How Bihar Celebrates — The Ritual Sequence:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {festival.ritualSequence.slice(0, 4).map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-[#1E2124] dark:text-[#F5F1E8]">
                        {step.title}
                      </span>
                      {step.dayTag && (
                        <span className="text-[10px] text-[#C85A32] dark:text-[#E06C43] font-mono">
                          {step.dayTag.split('•')[0]}
                        </span>
                      )}
                    </div>
                    <p className="text-[#5A524A] dark:text-[#C8BFB4] text-[11px] line-clamp-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Associated Food, Music, and Places Quick Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#F0E8DD] dark:border-[#2E343B] text-xs">
            {/* Foods */}
            <div className="p-3 rounded-xl bg-[#F4EFE6]/70 dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
              <div className="flex items-center gap-1 text-[#C85A32] dark:text-[#E06C43] font-semibold text-[11px] uppercase tracking-wider font-mono">
                <Utensils className="w-3 h-3" />
                <span>Prasad & Food</span>
              </div>
              <p className="text-[#4A453E] dark:text-[#C8BFB4] font-medium text-xs line-clamp-2">
                {festival.foodTraditions && festival.foodTraditions.length > 0
                  ? festival.foodTraditions.map(f => f.name.split('(')[0].trim()).join(', ')
                  : festival.specialFoods
                  ? festival.specialFoods[0].split('(')[0]
                  : 'Traditional Sattvic Prasad'}
              </p>
            </div>

            {/* Music */}
            <div className="p-3 rounded-xl bg-[#F4EFE6]/70 dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
              <div className="flex items-center gap-1 text-[#C85A32] dark:text-[#E06C43] font-semibold text-[11px] uppercase tracking-wider font-mono">
                <Music className="w-3 h-3" />
                <span>Oral Traditions</span>
              </div>
              <p className="text-[#4A453E] dark:text-[#C8BFB4] font-medium text-xs line-clamp-2">
                {festival.musicTradition?.title || festival.songsAndMusic?.slice(0, 45) || 'Folk Songs & Ancient Ballads'}
              </p>
            </div>

            {/* Primary Associated Region / District */}
            <div className="p-3 rounded-xl bg-[#F4EFE6]/70 dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
              <div className="flex items-center gap-1 text-[#C85A32] dark:text-[#E06C43] font-semibold text-[11px] uppercase tracking-wider font-mono">
                <MapPin className="w-3 h-3" />
                <span>Primary Place</span>
              </div>
              <p className="text-[#4A453E] dark:text-[#C8BFB4] font-medium text-xs line-clamp-2">
                {festival.sacredPlaces && festival.sacredPlaces.length > 0
                  ? festival.sacredPlaces[0].name.split('(')[0]
                  : festival.regions?.[0] || 'Across Bihar'}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
            <div className="flex items-center gap-2">
              {festival.associatedDistricts && festival.associatedDistricts.length > 0 && onExploreDistrict && (
                <button
                  onClick={() => onExploreDistrict(festival.associatedDistricts![0])}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32] dark:hover:border-[#E06C43] text-xs font-medium text-[#4A453E] dark:text-[#C8BFB4] transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>
                    Explore {festival.associatedDistricts[0].charAt(0).toUpperCase() + festival.associatedDistricts[0].slice(1)} District
                  </span>
                </button>
              )}
            </div>

            <button
              onClick={onOpenDetail}
              className="px-5 py-2.5 rounded-xl bg-[#1E2124] dark:bg-[#252A30] hover:bg-[#C85A32] dark:hover:bg-[#C85A32] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 shadow-xs group focus:outline-hidden"
            >
              <span>{language === 'hi' ? 'सम्पूर्ण आख्यान पढ़ें' : 'Read Living Story'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
