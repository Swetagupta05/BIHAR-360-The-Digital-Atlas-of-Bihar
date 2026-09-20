import React from 'react';
import { District } from '../../types';
import { Bookmark, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface DistrictCardProps {
  district: District;
  isBookmarked: boolean;
  onToggleBookmark: (district: District) => void;
  onSelectDistrict: (district: District) => void;
  language: 'en' | 'hi';
}

export const DistrictCard: React.FC<DistrictCardProps> = ({
  district,
  isBookmarked,
  onToggleBookmark,
  onSelectDistrict,
  language
}) => {
  const meta = district.imageMetadata;
  const hasVerifiedImage = Boolean(meta?.url && meta.verified);

  // Region colors for subtle visual tinting
  const regionBadgeClass: Record<string, string> = {
    Magadh: 'bg-amber-900/80 text-amber-100 border-amber-500/30',
    Mithila: 'bg-rose-900/80 text-rose-100 border-rose-500/30',
    Tirhut: 'bg-emerald-900/80 text-emerald-100 border-emerald-500/30',
    Bhojpur: 'bg-blue-900/80 text-blue-100 border-blue-500/30',
    Saran: 'bg-teal-900/80 text-teal-100 border-teal-500/30',
    Kosi: 'bg-cyan-900/80 text-cyan-100 border-cyan-500/30',
    Purnia: 'bg-violet-900/80 text-violet-100 border-violet-500/30',
    Anga: 'bg-orange-900/80 text-orange-100 border-orange-500/30',
  };

  const identity = district.identityStatement || district.overview;
  const highlights = district.famousFor.slice(0, 3);

  return (
    <article
      id={`district-card-${district.slug}`}
      className="group bg-[#FBF9F5] border border-[#EADBCE] hover:border-[#C85A32]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      <div>
        {/* Visual Hero Header */}
        {hasVerifiedImage && meta?.url ? (
          <div className="relative h-52 w-full overflow-hidden bg-[#1E2124]">
            <img
              src={meta.url}
              alt={meta.altText || `${district.name} landmark`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121416]/95 via-[#121416]/30 to-black/20" />

            {/* Top Bar: Region Badge & Bookmark */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
                  regionBadgeClass[district.region] || 'bg-black/60 text-white border-white/20'
                }`}
              >
                {district.region}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(district);
                }}
                className={`p-2 rounded-full backdrop-blur-md transition-all duration-150 ${
                  isBookmarked
                    ? 'bg-[#C85A32] text-white shadow-md'
                    : 'bg-black/40 hover:bg-black/70 text-white/90 border border-white/20'
                }`}
                aria-label={isBookmarked ? `Remove ${district.name} from saved` : `Save ${district.name}`}
                title={isBookmarked ? 'Saved' : 'Save District'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Bottom Overlay: District Name & Landmark */}
            <div className="absolute bottom-3 left-4 right-4 text-white z-10">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-serif font-bold text-2xl tracking-tight leading-tight text-white drop-shadow-xs">
                  {district.name}
                </h3>
                <span className="font-serif text-amber-200/95 text-lg font-medium drop-shadow-xs">
                  {district.hindiName}
                </span>
              </div>
              {meta.landmark && (
                <p className="text-[11px] text-[#EADBCE] font-normal truncate mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0 inline" />
                  <span>{meta.landmark}</span>
                </p>
              )}
            </div>
          </div>
        ) : (
          /* High-Craft Cartographic Fallback for districts without verified photos */
          <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-[#F5EFE6] via-[#EFE5D8] to-[#E3D6C5] border-b border-[#EADBCE] p-4 flex flex-col justify-between">
            {/* Delicate Topographic Contour & Grid Background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C85A32_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            {/* Faint watermark of Devanagari district initial */}
            <div className="absolute -right-4 -bottom-4 font-serif text-8xl font-bold text-[#C85A32]/5 select-none pointer-events-none">
              {district.hindiName.slice(0, 1)}
            </div>

            {/* Top Bar: Region Badge & Bookmark */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-[#1E2124] text-[#FBF9F5] text-[10px] font-bold uppercase tracking-wider">
                  {district.region}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/80 border border-[#EADBCE] text-[#7A6B5D] text-[9px] font-semibold flex items-center gap-1">
                  <Compass className="w-2.5 h-2.5 text-[#C85A32]" />
                  Atlas Record
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(district);
                }}
                className={`p-2 rounded-full transition-all border ${
                  isBookmarked
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                    : 'bg-white hover:bg-[#F4EFE6] text-[#2D3238] border-[#EADBCE]'
                }`}
                aria-label={isBookmarked ? `Remove ${district.name} from saved` : `Save ${district.name}`}
                title={isBookmarked ? 'Saved' : 'Save District'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Center Geographic & Typographic Identity */}
            <div className="relative z-10 my-auto text-center py-2">
              <div className="flex items-baseline justify-center gap-2.5">
                <h3 className="font-serif font-bold text-2xl text-[#1E2124] tracking-tight">
                  {district.name}
                </h3>
                <span className="font-serif text-[#C85A32] text-xl font-medium">
                  {district.hindiName}
                </span>
              </div>
              <p className="text-xs text-[#7A6B5D] mt-1 font-medium">
                HQ: {district.headquarters}
              </p>
            </div>

            {/* Subtle Cartographic Coordinates Note */}
            <div className="relative z-10 flex items-center justify-center text-[10px] tracking-widest text-[#7A6B5D]/70 uppercase border-t border-[#EADBCE]/80 pt-1.5 font-mono">
              <span>Cultural Geography of Bihar</span>
            </div>
          </div>
        )}

        {/* Card Editorial Content */}
        <div className="p-5 space-y-3.5">
          {/* One-Line Identity Statement */}
          <p className="text-[13px] text-[#2D3238] leading-relaxed line-clamp-3 font-normal">
            {identity}
          </p>

          {/* Known For Highlights */}
          {highlights.length > 0 && (
            <div className="pt-2.5 border-t border-[#EADBCE]/70">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#7A6B5D] block mb-1">
                Known For:
              </span>
              <p className="text-xs font-semibold text-[#1E2124] leading-snug">
                {highlights.join(' • ')}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0">
        <button
          type="button"
          onClick={() => onSelectDistrict(district)}
          className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#C85A32] text-[#1E2124] hover:text-white border border-[#EADBCE] hover:border-[#C85A32] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-2xs hover:shadow-sm"
          id={`explore-district-${district.slug}`}
        >
          <span>
            {language === 'hi' ? `${district.hindiName} को जानिए` : `Explore ${district.name}`}
          </span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </article>
  );
};
