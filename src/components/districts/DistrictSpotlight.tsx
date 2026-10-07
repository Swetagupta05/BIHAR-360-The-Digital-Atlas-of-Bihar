import React from 'react';
import { District } from '../../types';
import { Sparkles, ArrowRight, Compass, Shuffle, Bookmark, ShieldCheck } from 'lucide-react';

interface DistrictSpotlightProps {
  districts: District[];
  onSelectDistrict: (district: District) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (district: District) => void;
  language: 'en' | 'hi';
}

export const DistrictSpotlight: React.FC<DistrictSpotlightProps> = ({
  districts,
  onSelectDistrict,
  bookmarkedIds,
  onToggleBookmark,
  language
}) => {
  // Iconic districts with verified photography for spotlight selection
  const spotlightCandidates = React.useMemo(() => {
    return districts.filter(d => Boolean(d.imageMetadata?.url && d.imageMetadata.verified));
  }, [districts]);

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const activeDistrict = spotlightCandidates[currentIndex] || districts[0];
  if (!activeDistrict) return null;

  const isBookmarked = bookmarkedIds.includes(activeDistrict.id);
  const meta = activeDistrict.imageMetadata;

  const handleNextSpotlight = () => {
    setCurrentIndex(prev => (prev + 1) % spotlightCandidates.length);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E2124] via-[#2A231F] to-[#1E2124] text-white border border-[#3E342F] shadow-xl p-6 sm:p-8 lg:p-10">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C85A32]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#C99436]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Editorial Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#EADBCE] text-xs font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {language === 'hi' ? 'विशेष सांस्कृतिक फोकस' : 'Cultural Spotlight'}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextSpotlight}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-[#EADBCE] hover:text-white transition-all cursor-pointer"
              title="View another spotlight district"
            >
              <Shuffle className="w-3 h-3 text-amber-200" />
              <span>{language === 'hi' ? 'अन्य जिला देखें' : 'Shuffle Spotlight'}</span>
            </button>
          </div>

          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-amber-300/80 font-bold mb-1">
              <span>{activeDistrict.region} Region</span>
              <span>•</span>
              <span>HQ: {activeDistrict.headquarters}</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none mt-1">
              {activeDistrict.name}{' '}
              <span className="text-amber-200/90 font-serif font-normal text-2xl sm:text-3xl ml-2">
                {activeDistrict.hindiName}
              </span>
            </h2>
          </div>

          {/* District Identity Prose */}
          <p className="text-base sm:text-lg text-[#EADBCE] leading-relaxed font-serif italic max-w-2xl">
            "{activeDistrict.identityStatement || activeDistrict.overview}"
          </p>

          {/* Highlights Pills */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-white/60 block">
              Core Cultural Signatures:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeDistrict.famousFor.slice(0, 4).map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white/90 font-medium backdrop-blur-xs"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onSelectDistrict(activeDistrict)}
              className="px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#A8431E] text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>
                {language === 'hi'
                  ? `${activeDistrict.hindiName} का सम्पूर्ण विवरण`
                  : `Explore ${activeDistrict.name}`}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onToggleBookmark(activeDistrict)}
              className={`p-3 rounded-xl transition-all border ${
                isBookmarked
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/50'
                  : 'bg-white/10 hover:bg-white/20 text-white/80 border-white/15'
              }`}
              title={isBookmarked ? 'Saved to Bookmarks' : 'Save District'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Right Column: Verified Visual Showcase (5 cols) */}
        <div className="lg:col-span-5">
          <div
            onClick={() => onSelectDistrict(activeDistrict)}
            className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] group cursor-pointer"
          >
            {meta?.url ? (
              <img
                src={meta.url}
                alt={meta.altText || activeDistrict.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#3E342F] to-[#25201D] flex items-center justify-center p-6 text-center">
                <Compass className="w-16 h-16 text-amber-200/40 mx-auto" />
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {meta?.landmark && (
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-emerald-300 font-semibold mb-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Landmark</span>
                </div>
                <p className="text-sm font-serif font-bold text-white leading-tight">
                  {meta.landmark}
                </p>
                <p className="text-[11px] text-white/70 line-clamp-1 mt-0.5">
                  {meta.location || activeDistrict.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
