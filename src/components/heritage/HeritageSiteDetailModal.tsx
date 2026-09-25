import React, { useEffect } from 'react';
import { HeritageSite, District } from '../../types';
import { getHeritageSiteById } from '../../data/heritage';
import { getDistrictById } from '../../data/districts';
import {
  X,
  Award,
  Calendar,
  Clock,
  Ticket,
  MapPin,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Maximize2,
  Navigation,
  Compass,
  Layers,
  FileText
} from 'lucide-react';

interface HeritageSiteDetailModalProps {
  site: HeritageSite | null;
  onClose: () => void;
  onOpenSite: (site: HeritageSite) => void;
  onSelectDistrict?: (district: District) => void;
  language?: 'en' | 'hi';
}

export const HeritageSiteDetailModal: React.FC<HeritageSiteDetailModalProps> = ({
  site,
  onClose,
  onOpenSite,
  onSelectDistrict,
  language = 'en'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (site) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [site, onClose]);

  if (!site) return null;

  const doc = site.museumDoc;
  const district = getDistrictById(site.districtId);

  const relatedSites = (doc?.relatedSiteIds || [])
    .map(id => getHeritageSiteById(id))
    .filter(Boolean) as HeritageSite[];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#FBF9F5] dark:bg-[#151719] text-[#1E2124] dark:text-[#F5F1E8] rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] shadow-2xl my-auto max-h-[92vh] flex flex-col transition-colors"
        onClick={e => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all active:scale-95 shadow-md border border-white/20"
          aria-label="Close story"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* 1. Large Photographic Hero Banner */}
          <div className="relative h-72 sm:h-96 md:h-[460px] w-full overflow-hidden bg-[#1E2124]">
            <img
              src={site.image}
              alt={site.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center brightness-90"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#151719]/80 via-transparent to-transparent" />

            {/* Badges Overlay */}
            <div className="absolute top-5 left-5 right-16 flex flex-wrap items-center gap-2 z-10">
              {site.isUnesco ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A56DB] text-white text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>UNESCO World Heritage Site ({doc?.unescoDetails?.refNumber ? `Ref ${doc.unescoDetails.refNumber}` : 'Official'})</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/90 text-white text-xs font-semibold tracking-wider uppercase shadow-md backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>ASI Protected Monument of National Importance</span>
                </span>
              )}

              <span className="px-3 py-1 rounded-full bg-black/60 text-[#EADBCE] text-xs font-mono backdrop-blur-md border border-white/10">
                {site.period}
              </span>

              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md">
                {site.category}
              </span>
            </div>

            {/* Title & Metadata at Bottom of Hero */}
            <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
              <div className="text-xs sm:text-sm font-serif italic text-amber-200/90 mb-1">
                {site.hindiName}
              </div>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                {site.name}
              </h1>
              <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm text-[#EADBCE]/80 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>{site.location}</span>
                </span>
                <span>•</span>
                <span>Dynasty: {site.dynasty}</span>
                {doc?.historicalPeriodYear && (
                  <>
                    <span>•</span>
                    <span className="font-mono">{doc.historicalPeriodYear}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Main Story Content Body */}
          <div className="p-6 sm:p-10 space-y-10 max-w-4xl mx-auto">
            {/* 2. WHY IT MATTERS — Editorial Lead */}
            <div className="bg-[#F4EFE6] dark:bg-[#1E2124] border-l-4 border-[#C85A32] p-5 sm:p-6 rounded-r-2xl">
              <div className="text-xs uppercase tracking-widest font-bold text-[#C85A32] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Why It Matters</span>
              </div>
              <p className="font-serif italic text-lg sm:text-xl text-[#1E2124] dark:text-[#F5F1E8] leading-relaxed">
                "{doc?.whyItMatters || site.significance}"
              </p>
            </div>

            {/* 3. THE STORY — Historical Narrative */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
                <BookOpen className="w-4 h-4" />
                <span>The Historical Narrative</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
                The Story Behind the Stones
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#2D3238] dark:text-[#EADBCE] leading-relaxed font-sans">
                {doc?.storyNarrative ? (
                  doc.storyNarrative.map((paragraph, idx) => (
                    <p key={idx} className="first-of-type:font-medium">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{site.description}</p>
                )}
              </div>
            </div>

            {/* 4. WHAT REMAINS — Archaeological & Architectural Evidence */}
            <div className="space-y-4 bg-white dark:bg-[#1A1D20] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
                <Layers className="w-4 h-4" />
                <span>Archaeological Evidence</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                What Remains: Surviving Architecture & Ruins
              </h3>
              <p className="text-sm sm:text-base text-[#2D3238] dark:text-[#EADBCE] leading-relaxed">
                {doc?.whatRemains || site.architecture}
              </p>

              {/* Key Features Bullet List */}
              <div className="mt-4 pt-4 border-t border-[#F4EFE6] dark:border-[#2E343B]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2D3238]/60 dark:text-[#C8BFB4]/60 mb-2.5">
                  Distinguishing Architectural Elements:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#2D3238] dark:text-[#EADBCE]">
                  {site.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. LOOK CLOSER — Museum Lens Details */}
            {doc?.lookCloser && doc.lookCloser.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
                  <Maximize2 className="w-4 h-4" />
                  <span>Museum Magnifying Lens</span>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                  Look Closer: Architectural & Sculptural Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {doc.lookCloser.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F4EFE6] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#2E343B] rounded-xl p-4 flex flex-col justify-between hover:border-[#C85A32]/50 transition-all shadow-xs"
                    >
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
                          {item.focus}
                        </span>
                        <h4 className="font-serif font-bold text-sm sm:text-base text-[#1E2124] dark:text-[#F5F1E8] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#2D3238]/80 dark:text-[#C8BFB4]/80 leading-relaxed mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. WHY IT MATTERS TODAY */}
            {doc?.whyItMattersToday && (
              <div className="space-y-2 bg-[#1E2124] text-white rounded-2xl p-6 sm:p-7">
                <div className="text-xs uppercase tracking-widest font-bold text-[#F5B597] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Living Continuity</span>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  Why It Matters Today
                </h3>
                <p className="text-xs sm:text-sm text-[#EADBCE] leading-relaxed">
                  {doc.whyItMattersToday}
                </p>
              </div>
            )}

            {/* 7. PRACTICAL TRAVEL & VISITOR INFORMATION */}
            <div className="space-y-4 bg-white dark:bg-[#1A1D20] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
                <Navigation className="w-4 h-4" />
                <span>Visitor Information</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                Planning Your Journey
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-3 bg-[#FBF9F5] dark:bg-[#252A30] rounded-xl border border-[#EADBCE] dark:border-[#3D454F]">
                  <div className="text-[11px] font-semibold text-[#2D3238]/60 dark:text-[#C8BFB4]/70 flex items-center gap-1 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Visiting Hours</span>
                  </div>
                  <div className="text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]">
                    {site.visitorInfo.timings}
                  </div>
                </div>

                <div className="p-3 bg-[#FBF9F5] dark:bg-[#252A30] rounded-xl border border-[#EADBCE] dark:border-[#3D454F]">
                  <div className="text-[11px] font-semibold text-[#2D3238]/60 dark:text-[#C8BFB4]/70 flex items-center gap-1 mb-1">
                    <Ticket className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Entry Tariff</span>
                  </div>
                  <div className="text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]">
                    {site.visitorInfo.entryFee}
                  </div>
                </div>

                <div className="p-3 bg-[#FBF9F5] dark:bg-[#252A30] rounded-xl border border-[#EADBCE] dark:border-[#3D454F]">
                  <div className="text-[11px] font-semibold text-[#2D3238]/60 dark:text-[#C8BFB4]/70 flex items-center gap-1 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Best Season</span>
                  </div>
                  <div className="text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]">
                    {site.visitorInfo.bestTime}
                  </div>
                </div>

                <div className="p-3 bg-[#FBF9F5] dark:bg-[#252A30] rounded-xl border border-[#EADBCE] dark:border-[#3D454F]">
                  <div className="text-[11px] font-semibold text-[#2D3238]/60 dark:text-[#C8BFB4]/70 flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Nearest Hub</span>
                  </div>
                  <div className="text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]">
                    {site.visitorInfo.nearestHub}
                  </div>
                </div>
              </div>
            </div>

            {/* 8. DISTRICT CONNECTION — Turn into District Dossier */}
            {district && onSelectDistrict && (
              <div className="bg-gradient-to-r from-[#F4EFE6] to-[#EADBCE]/60 dark:from-[#1E2124] dark:to-[#252A30] border-2 border-[#C85A32]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                <div className="space-y-1 max-w-xl">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32]">
                    District Connection
                  </span>
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1E2124] dark:text-[#F5F1E8]">
                    Explore the Homeland of {site.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#C8BFB4]/80">
                    Step into the 10-chapter digital documentary of <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">{district.name} District</span> to discover its living culture, food, landscapes, and people.
                  </p>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectDistrict(district);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C85A32] hover:bg-[#B34A25] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all shrink-0 active:scale-98"
                >
                  <span>Explore {district.name} District Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* 9. SOURCES & ATTRIBUTION */}
            <div className="p-5 bg-white dark:bg-[#1A1D20] rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#2D3238]/75 dark:text-[#C8BFB4]/75 space-y-1.5 font-sans">
              <div className="font-bold text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <FileText className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Sources & Verification Attribution</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
                <div>
                  <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">Official Survey:</span>{' '}
                  {doc?.sources.primary || 'Archaeological Survey of India (ASI)'}
                </div>
                <div>
                  <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">Designation:</span>{' '}
                  {doc?.sources.designation || 'Protected Monument'}
                </div>
              </div>
              {doc?.sources.secondary && (
                <div className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60">
                  <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8]">Historical Literature:</span>{' '}
                  {doc.sources.secondary}
                </div>
              )}
            </div>

            {/* 10. CONTINUE THE STORY — Related Monuments */}
            {relatedSites.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#EADBCE] dark:border-[#2E343B]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Continue the Story</span>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                  Related Architectural & Historic Sites
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedSites.map(relSite => (
                    <div
                      key={relSite.id}
                      onClick={() => onOpenSite(relSite)}
                      className="group cursor-pointer bg-white dark:bg-[#1A1D20] hover:bg-[#FBF9F5] dark:hover:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32] rounded-xl overflow-hidden shadow-xs transition-all flex flex-col"
                    >
                      <div className="h-28 w-full overflow-hidden bg-[#1E2124] relative">
                        <img
                          src={relSite.image}
                          alt={relSite.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        {relSite.isUnesco && (
                          <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-blue-600 text-white text-[8px] font-bold">
                            UNESCO
                          </span>
                        )}
                      </div>
                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors truncate">
                            {relSite.name}
                          </h4>
                          <p className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60 truncate">
                            {relSite.location}
                          </p>
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#C85A32]">
                          <span>Enter Story</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
