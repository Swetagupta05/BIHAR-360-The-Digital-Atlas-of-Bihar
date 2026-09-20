import React from 'react';
import { District } from '../../types';
import { 
  Bookmark, Share2, Check, ArrowLeft, ShieldCheck, 
  MapPin, Compass, Globe, Sparkles 
} from 'lucide-react';
import { getDistrictDivision } from '../../data/districtDossiers';

interface DistrictHeroProps {
  district: District;
  isBookmarked: boolean;
  onToggleBookmark: (district: District) => void;
  onBack: () => void;
  language: 'en' | 'hi';
  onLanguageToggle?: () => void;
}

export const DistrictHero: React.FC<DistrictHeroProps> = ({
  district,
  isBookmarked,
  onToggleBookmark,
  onBack,
  language,
  onLanguageToggle
}) => {
  const [copied, setCopied] = React.useState(false);
  const meta = district.imageMetadata;
  const hasVerifiedImage = Boolean(meta?.url && meta.verified);
  const division = getDistrictDivision(district.slug);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?district=${district.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const identityText = district.identityStatement || district.whyItMatters || district.overview;

  return (
    <header className="relative w-full bg-[#1A1D20] text-[#FBF9F5] border-b border-[#343A40] overflow-hidden">
      {/* Subtle Ambient Vignette */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#C99436]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Navigation & Breadcrumb Bar */}
      <div className="relative z-20 border-b border-white/10 bg-black/30 backdrop-blur-md px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Breadcrumbs & Back Button */}
          <div className="flex items-center gap-2 text-[#D1C7BD]">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all cursor-pointer"
              title="Return to district directory"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'सभी ज़िले' : 'All Districts'}</span>
            </button>

            <span className="text-white/30 hidden sm:inline">/</span>
            <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-white/70 font-medium">
              <button 
                type="button" 
                onClick={onBack}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Bihar 360
              </button>
              <span className="text-white/30">→</span>
              <button 
                type="button" 
                onClick={onBack}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Districts
              </button>
              <span className="text-white/30">→</span>
              <span className="text-amber-200 font-semibold" aria-current="page">
                {district.name} ({district.hindiName})
              </span>
            </nav>
          </div>

          {/* Controls: Contextual Language Switcher, Bookmark, Share */}
          <div className="flex items-center gap-2">
            {onLanguageToggle && (
              <button
                type="button"
                onClick={onLanguageToggle}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
                title="Switch dossier language"
              >
                <Globe className="w-3 h-3 text-amber-300" />
                <span>{language === 'en' ? 'हिन्दी में पढ़ें' : 'Read in English'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onToggleBookmark(district)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                isBookmarked
                  ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              }`}
              title={isBookmarked ? `Saved ${district.name}` : `Save ${district.name}`}
              aria-label={isBookmarked ? `Remove ${district.name} from saved` : `Save ${district.name}`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{isBookmarked ? (language === 'hi' ? 'सहेजा गया' : 'Saved') : (language === 'hi' ? 'सहेजें' : 'Save')}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all cursor-pointer"
              title="Share this district link"
              aria-label="Share this district dossier link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Hero Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Top Narrative Column (7 cols desktop) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            {/* Context Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
                {district.region} Region
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#EADBCE] text-[11px] font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-amber-300" />
                <span>{division}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#EADBCE] text-[11px] font-medium">
                HQ: {district.headquarters}
              </span>
            </div>

            {/* District Title */}
            <div>
              <div className="flex items-baseline flex-wrap gap-x-4 gap-y-1">
                <h1 className="font-serif font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none">
                  {district.name}
                </h1>
                <span className="font-serif font-normal text-3xl sm:text-5xl text-amber-200/95">
                  {district.hindiName}
                </span>
              </div>

              {/* Sub-line Geographic Coordinate Stamp */}
              <p className="text-xs text-[#A99D91] font-mono tracking-widest mt-2 uppercase">
                {district.coordinates.lat.toFixed(4)}° N, {district.coordinates.lng.toFixed(4)}° E • Cultural Geography of Bihar
              </p>
            </div>

            {/* Short Factual Identity Sentence (Verified, Non-poetic claim) */}
            <div className="border-l-2 border-[#C85A32] pl-4 sm:pl-5 py-1">
              <p className="text-base sm:text-xl text-[#F2EAE1] leading-relaxed font-serif italic">
                "{identityText}"
              </p>
            </div>

            {/* Quick Signature Highlights */}
            {district.famousFor && district.famousFor.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#D1C7BD]/70 block">
                  Cultural & Geographical Signatures:
                </span>
                <div className="flex flex-wrap gap-2">
                  {district.famousFor.slice(0, 4).map((f, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-[#FBF9F5] font-medium backdrop-blur-xs"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right / Top Media Column (5 cols desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            {hasVerifiedImage && meta?.url ? (
              /* Verified Landmark Photographic Showcase */
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group">
                <img
                  src={meta.url}
                  alt={meta.altText || `${district.name} landmark`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Verified Landmark Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-emerald-500/40 text-xs font-semibold text-emerald-300 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Landmark</span>
                  </div>
                </div>

                {/* Bottom Landmark Caption */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif font-bold text-base sm:text-lg leading-tight text-white drop-shadow-xs">
                    {meta.landmark}
                  </h3>
                  <p className="text-xs text-[#EADBCE]/80 line-clamp-1 mt-0.5">
                    {meta.sourceName} • {meta.credit}
                  </p>
                </div>
              </div>
            ) : (
              /* High-Craft Cartographic & Editorial Fallback (Never pretending to be a photo) */
              <div className="relative rounded-2xl overflow-hidden border border-[#52443C] bg-gradient-to-br from-[#25201D] via-[#1E1B18] to-[#171412] p-6 sm:p-8 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] flex flex-col justify-between shadow-2xl">
                {/* Delicate Cartographic Grid & Topographic Contour Simulation */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C85A32_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
                
                {/* Devanagari Monogram Watermark */}
                <div className="absolute -right-4 -bottom-6 font-serif text-9xl font-bold text-[#C85A32]/10 select-none pointer-events-none">
                  {district.hindiName.slice(0, 1)}
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-amber-200">
                    <Compass className="w-3 h-3 text-amber-300" />
                    <span>Editorial Cartographic Record</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#A99D91]">
                    {district.slug.toUpperCase()}
                  </span>
                </div>

                {/* Center Cartographic Identity */}
                <div className="relative z-10 my-auto text-center py-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#C85A32]/20 border border-[#C85A32]/40 flex items-center justify-center mx-auto mb-3 text-amber-200">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-white">
                    {district.name}
                  </h3>
                  <p className="font-serif text-lg text-amber-200/90 mt-0.5">
                    {district.hindiName}
                  </p>
                  <p className="text-xs text-[#D1C7BD] mt-2 max-w-xs mx-auto">
                    {district.headquarters} • {district.region} Division
                  </p>
                </div>

                {/* Bottom Verification Standard Note */}
                <div className="relative z-10 border-t border-white/10 pt-2 flex items-center justify-between text-[10px] text-[#A99D91]">
                  <span>Archival Gazetteer Profile</span>
                  <span className="font-mono">Bihar 360 Standard</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
