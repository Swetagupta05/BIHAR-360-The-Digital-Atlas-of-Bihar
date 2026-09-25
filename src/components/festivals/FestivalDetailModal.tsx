import React from 'react';
import { X, Calendar, MapPin, Utensils, Music, Bookmark, Share2, Check, ArrowRight, ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';
import { Festival } from '../../types';

interface FestivalDetailModalProps {
  festival: Festival | null;
  onClose: () => void;
  language: 'en' | 'hi';
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onExploreDistrict?: (districtId: string) => void;
  onExploreFood?: (foodId?: string) => void;
}

export const FestivalDetailModal: React.FC<FestivalDetailModalProps> = ({
  festival,
  onClose,
  language,
  isBookmarked,
  onToggleBookmark,
  onExploreDistrict,
  onExploreFood
}) => {
  const [copied, setCopied] = React.useState(false);

  // Keyboard navigation & body scroll lock
  React.useEffect(() => {
    if (!festival) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [festival, onClose]);

  if (!festival) return null;

  const handleShare = () => {
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

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FBF9F5] dark:bg-[#16191D] text-[#1E2124] dark:text-[#F5F1E8] rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky Action Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FBF9F5]/95 dark:bg-[#16191D]/95 backdrop-blur-md border-b border-[#EADBCE] dark:border-[#2E343B]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Cultural Archive • {festival.season?.toUpperCase() || 'TRADITION'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleBookmark}
              className={`p-2 rounded-xl border text-xs font-medium transition-colors flex items-center gap-1.5 ${
                isBookmarked
                  ? 'bg-[#C85A32] text-white border-[#C85A32]'
                  : 'bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#4A453E] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
              }`}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this tradition'}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#4A453E] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium transition-colors flex items-center gap-1.5"
              title="Share tradition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#1E2124] dark:text-[#F5F1E8] border border-[#EADBCE] dark:border-[#2E343B] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Story Content */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Hero Visual Section */}
          <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-[#1E2124] border border-[#EADBCE] dark:border-[#2E343B] shadow-sm">
            <img
              src={festival.image}
              alt={festival.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono tracking-wider uppercase bg-emerald-800/90 text-white px-2.5 py-0.5 rounded-full inline-block mb-1">
                ✓ Authentic Bihar Cultural Documentation
              </span>
              <p className="text-xs sm:text-sm text-white/90 font-serif italic">
                "{festival.atmosphereQuote || festival.overview}"
              </p>
            </div>
          </div>

          {/* Title & Metadata Strip */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
              <span className="px-2.5 py-1 rounded-md bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] font-semibold">
                {festival.timing}
              </span>
              {festival.lunarTithi && (
                <span className="px-2.5 py-1 rounded-md bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-[#1E2124] dark:text-[#F5F1E8]">
                  Tithi: {festival.lunarTithi}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
                {festival.name}
              </h2>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-serif text-xl sm:text-2xl text-[#C85A32] dark:text-[#E06C43]">
                  {festival.hindiName}
                </span>
                {festival.multilingual?.title?.bho && (
                  <span className="text-xs text-[#8C8276] dark:text-[#A89F93]">
                    • भोजपुरी: {festival.multilingual.title.bho}
                  </span>
                )}
                {festival.multilingual?.title?.mai && (
                  <span className="text-xs text-[#8C8276] dark:text-[#A89F93]">
                    • मैथिली: {festival.multilingual.title.mai}
                  </span>
                )}
              </div>
            </div>

            {festival.prominence && (
              <p className="text-xs font-mono text-[#A54420] dark:text-[#E06C43] uppercase tracking-wider font-semibold">
                {festival.prominence}
              </p>
            )}

            <p className="text-sm sm:text-base text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B]">
              {festival.description || festival.overview}
            </p>
          </div>

          {/* Sequential Ritual Map ("How It Is Observed") */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-2">
              <Sparkles className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
              <span>How It Is Observed — Ritual Sequence</span>
            </h3>

            {festival.ritualSequence && festival.ritualSequence.length > 0 ? (
              <div className="space-y-3">
                {festival.ritualSequence.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] font-bold text-xs flex items-center justify-center">
                          {step.phase}
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
                          {step.title} {step.hindiTitle ? `(${step.hindiTitle})` : ''}
                        </h4>
                      </div>
                      {step.dayTag && (
                        <span className="text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
                          {step.dayTag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed pl-8">
                      {step.description}
                    </p>
                    {step.keyItems && step.keyItems.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pl-8 pt-1">
                        {step.keyItems.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-[#F4EFE6] dark:bg-[#252A30] text-[10px] font-mono text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {festival.rituals.map((r, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Associated Food & Sacred Offerings */}
          {(festival.foodTraditions || festival.specialFoods) && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EADBCE] dark:border-[#2E343B] pb-2">
                <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Sacred Foods & Traditional Prasad</span>
                </h3>
                {onExploreFood && (
                  <button
                    onClick={() => {
                      onClose();
                      onExploreFood();
                    }}
                    className="text-xs text-[#C85A32] dark:text-[#E06C43] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View in Food Section</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              {festival.foodTraditions && festival.foodTraditions.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {festival.foodTraditions.map((food, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5"
                    >
                      <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8]">
                        {food.name}
                      </h4>
                      <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                        {food.description}
                      </p>
                      {food.prasadContext && (
                        <span className="text-[11px] font-mono text-[#C85A32] dark:text-[#E06C43] block pt-1">
                          Context: {food.prasadContext}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                  <ul className="list-disc list-inside space-y-1">
                    {festival.specialFoods?.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Folk Songs & Music Traditions */}
          {(festival.musicTradition || festival.songsAndMusic) && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-2">
                <Music className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                <span>Oral Traditions, Songs & Poetry</span>
              </h3>

              <div className="p-5 rounded-2xl bg-[#1E2124] text-white border border-[#2D3238] space-y-3">
                {festival.musicTradition?.title && (
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-base text-amber-200">
                      {festival.musicTradition.title}
                    </h4>
                    <span className="text-[10px] font-mono text-white/70 uppercase">
                      {festival.musicTradition.genre}
                    </span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-[#D4C8BC] leading-relaxed">
                  {festival.musicTradition?.description || festival.songsAndMusic}
                </p>

                {festival.musicTradition?.famousLines && (
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-[#F4A261] block">
                      Famous Traditional Verse
                    </span>
                    <p className="font-serif text-sm text-amber-100 italic leading-relaxed">
                      "{festival.musicTradition.famousLines}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Sacred Places & Districts */}
          {festival.sacredPlaces && festival.sacredPlaces.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-2">
                <MapPin className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                <span>Sacred Geography & Places of Observation</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {festival.sacredPlaces.map((place, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#C85A32] dark:text-[#E06C43] font-semibold">
                        {place.districtName} District
                      </span>
                      <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8]">
                        {place.name}
                      </h4>
                      <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed mt-1">
                        {place.context}
                      </p>
                    </div>

                    {onExploreDistrict && (
                      <button
                        onClick={() => {
                          onClose();
                          onExploreDistrict(place.districtId);
                        }}
                        className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1 pt-2"
                      >
                        <span>Explore {place.districtName} Dossier</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regional Context & Territorial Variation */}
          {festival.regionalVariation && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F4F8] dark:bg-[#1A222C] border border-[#D0DCE7] dark:border-[#2A3B4D] space-y-1.5">
              <strong className="text-xs uppercase tracking-wider font-mono text-[#1D4ED8] dark:text-[#60A5FA] block font-semibold">
                {language === 'hi' ? 'क्षेत्रीय विविधता एवं संदर्भ' : 'Regional Context & Documented Variations'}
              </strong>
              <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
                {festival.regionalVariation}
              </p>
            </div>
          )}

          {/* Historical Origins & Social Significance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {festival.originsHistory && (
              <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5">
                <strong className="text-xs uppercase tracking-wider font-mono text-[#A54420] dark:text-[#E06C43] block font-semibold">
                  Historical & Canonical Origins
                </strong>
                <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                  {festival.originsHistory}
                </p>
              </div>
            )}

            {festival.culturalSignificance && (
              <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5">
                <strong className="text-xs uppercase tracking-wider font-mono text-[#A54420] dark:text-[#E06C43] block font-semibold">
                  Spiritual & Social Meaning
                </strong>
                <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                  {festival.culturalSignificance}
                </p>
              </div>
            )}
          </div>

          {/* Verifiable Sources Box */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#5A524A] dark:text-[#C8BFB4] space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#1E2124] dark:text-[#F5F1E8] font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Verifiable Cultural & Ethnographic Sources:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              <strong>Primary Source:</strong>{' '}
              {festival.sourcesDetail?.primary || festival.source || 'Government of Bihar Culture Department'}
            </p>
            {festival.sourcesDetail?.secondary && (
              <p className="text-[11px] leading-relaxed text-[#7A7065] dark:text-[#A89F93]">
                <strong>Secondary Documentation:</strong> {festival.sourcesDetail.secondary}
              </p>
            )}
            {festival.sourcesDetail?.institutionalAuthority && (
              <p className="text-[11px] leading-relaxed text-[#7A7065] dark:text-[#A89F93]">
                <strong>Institutional Authority:</strong> {festival.sourcesDetail.institutionalAuthority}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F4EFE6] dark:bg-[#16191D] border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
          <span className="text-xs text-[#7A7065] dark:text-[#A89F93] font-mono">
            BIHAR 360 • Intangible Cultural Heritage Archive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1E2124] dark:bg-[#252A30] hover:bg-[#C85A32] dark:hover:bg-[#C85A32] text-white text-xs font-semibold transition-colors"
          >
            Back to Festivals
          </button>
        </div>
      </div>
    </div>
  );
};
