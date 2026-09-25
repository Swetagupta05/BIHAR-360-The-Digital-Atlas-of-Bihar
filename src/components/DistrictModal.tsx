import React from 'react';
import { District } from '../types';
import { 
  X, Bookmark, Share2, MapPin, Users, BookOpen, ShieldCheck, Check, 
  Sparkles, Award, Compass, ExternalLink, Calendar, Layers, Landmark
} from 'lucide-react';

interface DistrictModalProps {
  district: District | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (district: District) => void;
  language: 'en' | 'hi';
  onOpenDossier?: (district: District) => void;
}

export const DistrictModal: React.FC<DistrictModalProps> = ({
  district,
  onClose,
  isBookmarked,
  onToggleBookmark,
  language,
  onOpenDossier
}) => {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'places' | 'culture' | 'food' | 'people-economy' | 'sources'>('overview');
  const [copied, setCopied] = React.useState(false);

  if (!district) return null;

  const meta = district.imageMetadata;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '?district=' + district.slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'overview', label: language === 'hi' ? 'परिचय एवं इतिहास' : 'Overview & History' },
    { id: 'places', label: language === 'hi' ? 'प्रमुख स्थल' : `Landmarks (${district.importantPlaces.length})` },
    { id: 'culture', label: language === 'hi' ? 'संस्कृति व कला' : 'Culture & Arts' },
    { id: 'food', label: language === 'hi' ? 'खानपान व कृषि' : 'Food & Agriculture' },
    { id: 'people-economy', label: language === 'hi' ? 'व्यक्तित्व व अर्थव्यवस्था' : 'People & Economy' },
    { id: 'sources', label: language === 'hi' ? 'संदर्भ व स्रोत' : 'Data & Sources' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative text-[#1E2124] dark:text-[#F5F1E8]"
        onClick={(e) => e.stopPropagation()}
        id="district-modal-content"
      >
        {/* Header Hero Banner */}
        {meta?.url ? (
          <div className="relative h-56 sm:h-72 w-full bg-[#1E2124] overflow-hidden flex-shrink-0">
            <img
              src={meta.url}
              alt={meta.altText || `${district.name} landmark`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121416] via-[#121416]/40 to-transparent" />

            {/* Top Action Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              {onOpenDossier && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenDossier(district);
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#1E2124] text-xs font-semibold backdrop-blur-md shadow-xs transition-all cursor-pointer"
                  title="Open full 10-chapter dossier"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Full Dossier</span>
                </button>
              )}
              <button
                onClick={() => onToggleBookmark(district)}
                className={`p-2 rounded-full backdrop-blur-md transition-all ${
                  isBookmarked 
                    ? 'bg-[#C85A32] text-white shadow-md' 
                    : 'bg-white/85 hover:bg-white text-[#1E2124]'
                }`}
                id="modal-bookmark-btn"
                title={isBookmarked ? 'Remove Bookmark' : 'Bookmark District'}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark district'}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/85 hover:bg-white text-[#1E2124] backdrop-blur-md transition-all"
                id="modal-share-btn"
                title="Copy Link"
                aria-label="Share district link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all"
                id="modal-close-btn"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* District Title & Verified Badge Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32] text-white text-[11px] font-bold tracking-wider uppercase">
                  {district.region} Region
                </span>
                <span className="flex items-center gap-1 text-xs text-[#EADBCE]">
                  <MapPin className="w-3.5 h-3.5" />
                  HQ: {district.headquarters}
                </span>
                {meta.verified ? (
                  <span className="flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-800/90 text-white font-semibold backdrop-blur-xs">
                    <ShieldCheck className="w-3 h-3 text-emerald-300" />
                    Verified Landmark: {meta.landmark}
                  </span>
                ) : meta.isAiInterpretation ? (
                  <span className="flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#2C5D75]/90 text-white font-semibold backdrop-blur-xs">
                    Documentary Visual Interpretation: {meta.landmark}
                  </span>
                ) : null}
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white tracking-tight flex items-baseline gap-3">
                <span>{district.name}</span>
                <span className="text-xl sm:text-2xl text-amber-200 font-normal">
                  ({district.hindiName})
                </span>
              </h2>

              {meta.subject && (
                <p className="text-xs text-[#EADBCE]/90 mt-1 max-w-2xl line-clamp-1">
                  {meta.subject}
                </p>
              )}
            </div>
          </div>
        ) : (
          /* Editorial Cartographic Header for districts with no verified landmark photo */
          <div className="relative h-48 sm:h-56 w-full bg-gradient-to-r from-[#2D3238] via-[#1E2124] to-[#2D3238] text-white p-6 flex flex-col justify-between flex-shrink-0 border-b border-[#EADBCE]">
            {/* Top Action Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32] text-white text-[11px] font-bold tracking-wider uppercase">
                  {district.region} Region
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#EADBCE] text-[10px] font-semibold flex items-center gap-1">
                  <Compass className="w-3 h-3 text-amber-200" />
                  Editorial Cartographic Dossier
                </span>
              </div>

              <div className="flex items-center gap-2">
                {onOpenDossier && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenDossier(district);
                    }}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xs transition-all cursor-pointer"
                    title="Open full 10-chapter dossier"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                    <span>Full Dossier</span>
                  </button>
                )}
                <button
                  onClick={() => onToggleBookmark(district)}
                  className={`p-2 rounded-full backdrop-blur-md transition-all ${
                    isBookmarked 
                      ? 'bg-[#C85A32] text-white shadow-md' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                  id="modal-bookmark-btn-carto"
                  title={isBookmarked ? 'Remove Bookmark' : 'Bookmark District'}
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark district'}
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                  id="modal-share-btn-carto"
                  title="Copy Link"
                  aria-label="Share district link"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                  id="modal-close-btn-carto"
                  aria-label="Close dossier"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Title */}
            <div>
              <span className="text-[11px] text-amber-200/80 font-mono uppercase tracking-wider block mb-1">
                Geographic Coordinates: {district.coordinates.lat}° N, {district.coordinates.lng}° E • HQ: {district.headquarters}
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline gap-3">
                <span>{district.name}</span>
                <span className="text-xl sm:text-2xl text-amber-200 font-normal">
                  ({district.hindiName})
                </span>
              </h2>
            </div>
          </div>
        )}

        {/* Quick Facts Strip with Exact Official Citations */}
        <div className="bg-[#F4EFE6] dark:bg-[#1A1D22] border-y border-[#EADBCE] dark:border-[#2E343B] px-4 py-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs flex-shrink-0">
          <div>
            <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block text-[9px] uppercase font-bold tracking-wider">
              Area (Sq Km)
            </span>
            <span className="font-bold text-[#1E2124] dark:text-[#F5F1E8]">
              {district.areaSqKm.toLocaleString()} km²
            </span>
            <span className="text-[9px] text-[#2D3238]/50 dark:text-[#948B80] block">Survey of India</span>
          </div>
          <div>
            <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block text-[9px] uppercase font-bold tracking-wider">
              Literacy Rate
            </span>
            <span className="font-bold text-[#1E2124] dark:text-[#F5F1E8]">
              {district.literacyRate}
            </span>
            <span className="text-[9px] text-[#2D3238]/50 dark:text-[#948B80] block">Census 2011</span>
          </div>
          <div>
            <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block text-[9px] uppercase font-bold tracking-wider">
              Population Approx
            </span>
            <span className="font-bold text-[#1E2124] dark:text-[#F5F1E8]">
              {district.populationApprox}
            </span>
            <span className="text-[9px] text-[#2D3238]/50 dark:text-[#948B80] block">Census 2011</span>
          </div>
          <div>
            <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block text-[9px] uppercase font-bold tracking-wider">
              Sex Ratio
            </span>
            <span className="font-bold text-[#1E2124] dark:text-[#F5F1E8]">
              {district.sexRatio} / 1000
            </span>
            <span className="text-[9px] text-[#2D3238]/50 dark:text-[#948B80] block">Census 2011</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] px-4 overflow-x-auto no-scrollbar flex-shrink-0">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === t.id
                  ? 'border-[#C85A32] dark:border-[#E06C43] text-[#C85A32] dark:text-[#E06C43]'
                  : 'border-transparent text-[#2D3238]/70 dark:text-[#C8BFB4]/70 hover:text-[#1E2124] dark:hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-[#1E2124] dark:text-[#F5F1E8]">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Identity Statement */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#C85A32]/10 via-[#F4EFE6] dark:via-[#1A1D22] to-[#C85A32]/5 border border-[#C85A32]/20">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-[#A54420] dark:text-[#E06C43] uppercase tracking-wider mb-1">
                      Identity & Civilizational Significance
                    </h4>
                    <p className="text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed font-medium">
                      {district.identityStatement || district.whyItMatters}
                    </p>
                  </div>
                </div>
              </div>

              {/* General Overview */}
              <div>
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">District Overview</h4>
                <p className="text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                  {district.overview}
                </p>
              </div>

              {/* History Section */}
              <div className="border-t border-[#EADBCE] dark:border-[#2E343B] pt-5">
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Historical Heritage & Archaeology</h4>
                <p className="text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                  {district.history}
                </p>
              </div>

              {/* Geography & Landscape */}
              <div className="border-t border-[#EADBCE] dark:border-[#2E343B] pt-5">
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Landscape, Rivers & Terrain</h4>
                <p className="text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                  {district.geography}
                </p>
              </div>

              {/* Signature Highlights */}
              <div className="border-t border-[#EADBCE] dark:border-[#2E343B] pt-5">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mb-2.5">
                  Prominent Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {district.famousFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#EADBCE]/50 dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8]"
                    >
                      ★ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PLACES TAB */}
          {activeTab === 'places' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70">
                Documented historical, architectural, spiritual, and natural landmarks of {district.name}:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {district.importantPlaces.map((place, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1F2329] shadow-2xs space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8]">
                        {place.name}
                      </h5>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2C5D75]/10 dark:bg-[#4FA0C4]/20 text-[#2C5D75] dark:text-[#4FA0C4]">
                        {place.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                      {place.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CULTURE TAB */}
          {activeTab === 'culture' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Arts, Crafts & Living Traditions</h4>
                <p className="text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed mb-3">
                  {district.culture}
                </p>
                {district.artsAndCrafts && district.artsAndCrafts.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {district.artsAndCrafts.map((craft, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#A54420] dark:text-[#E06C43] text-xs font-semibold"
                      >
                        {craft}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-[#EADBCE] dark:border-[#2E343B] pt-5">
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Spoken Languages & Dialects</h4>
                <div className="flex flex-wrap gap-2">
                  {district.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#EADBCE]/60 dark:bg-[#252A30] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#EADBCE] dark:border-[#2E343B] pt-5">
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Major Festivals & Melas</h4>
                <div className="flex flex-wrap gap-2">
                  {district.festivals.map((fest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white dark:bg-[#1F2329] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                    >
                      {fest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FOOD & AGRICULTURE TAB */}
          {activeTab === 'food' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-3">Traditional Culinary Delicacies</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {district.food.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1F2329] shadow-2xs"
                    >
                      <h5 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] mb-1">
                        {item.name}
                      </h5>
                      <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#EADBCE] dark:border-[#2E343B] pt-5">
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Agricultural Profile & Staple Crops</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {district.agriculture.map((crop, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-emerald-800/10 dark:bg-emerald-950/40 border border-emerald-800/20 dark:border-emerald-700/30 text-emerald-900 dark:text-emerald-300 text-xs font-semibold"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PEOPLE & ECONOMY TAB */}
          {activeTab === 'people-economy' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Notable Personalities</h4>
                <div className="flex flex-wrap gap-2">
                  {district.notablePeople.map((person, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white dark:bg-[#1F2329] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8]"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#EADBCE] dark:border-[#2E343B] pt-5">
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Economy & Commerce</h4>
                <p className="text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                  {district.economy}
                </p>
              </div>

              {district.travelTips && district.travelTips.length > 0 && (
                <div className="border-t border-[#EADBCE] dark:border-[#2E343B] pt-5">
                  <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] mb-2">Field Travel Recommendations</h4>
                  <ul className="space-y-1.5 text-xs text-[#2D3238] dark:text-[#C8BFB4]">
                    {district.travelTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C85A32] dark:text-[#E06C43] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* SOURCES & CITATIONS TAB */}
          {activeTab === 'sources' && (
            <div className="space-y-5 animate-in fade-in duration-150 text-xs">
              <div className="p-4 rounded-xl bg-white dark:bg-[#1F2329] border border-[#EADBCE] dark:border-[#2E343B] space-y-3">
                <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  Dataset Provenance & Verification
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block text-[10px] uppercase font-bold">Gazetteer & Heritage Source</span>
                    <span className="font-medium text-[#1E2124] dark:text-[#F5F1E8]">{district.sourceAttribution.sourceName}</span>
                  </div>
                  <div>
                    <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block text-[10px] uppercase font-bold">Demographic Record</span>
                    <span className="font-medium text-[#1E2124] dark:text-[#F5F1E8]">Census of India {district.censusYear || 2011}</span>
                  </div>
                  <div>
                    <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block text-[10px] uppercase font-bold">Administrative Verification Year</span>
                    <span className="font-medium text-[#1E2124] dark:text-[#F5F1E8]">{district.sourceAttribution.verifiedYear}</span>
                  </div>
                  <div>
                    <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block text-[10px] uppercase font-bold">Survey Classification</span>
                    <span className="font-medium text-[#1E2124] dark:text-[#F5F1E8]">{district.region} Division Administration</span>
                  </div>
                </div>
              </div>

              {/* Image Attribution Details */}
              {meta ? (
                <div className="p-4 rounded-xl bg-white dark:bg-[#1F2329] border border-[#EADBCE] dark:border-[#2E343B] space-y-3">
                  <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                    Visual Asset Citation & License
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-[#EADBCE]/60 dark:border-[#2E343B] pb-1.5">
                      <span className="text-[#2D3238]/70 dark:text-[#C8BFB4]/70">Landmark Subject:</span>
                      <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">{meta.landmark}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#EADBCE]/60 dark:border-[#2E343B] pb-1.5">
                      <span className="text-[#2D3238]/70 dark:text-[#C8BFB4]/70">Verification Status:</span>
                      <span className={`font-semibold ${meta.verified ? 'text-emerald-700 dark:text-emerald-400' : 'text-[#2C5D75] dark:text-[#4FA0C4]'}`}>
                        {meta.verified ? '✓ Verified Landmark Photograph' : 'Documentary Visual Interpretation'}
                      </span>
                    </div>
                    {meta.verificationSource && (
                      <div className="flex justify-between border-b border-[#EADBCE]/60 dark:border-[#2E343B] pb-1.5">
                        <span className="text-[#2D3238]/70 dark:text-[#C8BFB4]/70">Verification Source:</span>
                        <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">{meta.verificationSource}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-[#EADBCE]/60 dark:border-[#2E343B] pb-1.5">
                      <span className="text-[#2D3238]/70 dark:text-[#C8BFB4]/70">Source Institution:</span>
                      <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">{meta.sourceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#2D3238]/70 dark:text-[#C8BFB4]/70">Credit & License:</span>
                      <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">{meta.credit} ({meta.license})</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#2D3238] dark:text-[#C8BFB4] space-y-1">
                  <p className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">Editorial Cartography Standard</p>
                  <p className="text-[#2D3238]/80 dark:text-[#C8BFB4]/80 leading-relaxed">
                    This district is represented using editorial cartographic identity to preserve content authenticity. No generic or stock imagery is displayed where verified documentary landmark photography is pending archival review.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F4EFE6] dark:bg-[#121417] border-t border-[#EADBCE] dark:border-[#2E343B] px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs flex-shrink-0">
          <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60">
            Bihar 360 Official Gazetteer • {district.name} Dossier
          </span>
          <div className="flex items-center gap-2">
            {onOpenDossier && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenDossier(district);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#C85A32] text-white hover:bg-[#A54420] text-xs font-semibold shadow-xs transition-all cursor-pointer"
                id="modal-open-full-dossier-btn"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'विस्तृत 10-अध्याय डॉसियर पढ़ें' : 'Read Full 10-Chapter Dossier'}</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#2D3238] dark:bg-[#2E343B] text-white hover:bg-black dark:hover:bg-[#3D454F] text-xs font-semibold transition-all cursor-pointer"
            >
              {language === 'hi' ? 'बंद करें' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
