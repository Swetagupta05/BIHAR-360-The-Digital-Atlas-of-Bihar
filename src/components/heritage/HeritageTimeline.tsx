import React, { useState } from 'react';
import { HERITAGE_TIMELINE_ERAS, HeritageTimelineEra } from '../../data/heritage';
import { HeritageSite } from '../../types';
import { Clock, Calendar, ArrowRight, CheckCircle2, ChevronRight, Landmark, Layers } from 'lucide-react';

interface HeritageTimelineProps {
  sites: HeritageSite[];
  onOpenSite: (site: HeritageSite) => void;
  language?: 'en' | 'hi';
}

export const HeritageTimeline: React.FC<HeritageTimelineProps> = ({
  sites,
  onOpenSite,
  language = 'en'
}) => {
  const [selectedEraId, setSelectedEraId] = useState<string>('all');

  const activeEras = selectedEraId === 'all'
    ? HERITAGE_TIMELINE_ERAS
    : HERITAGE_TIMELINE_ERAS.filter(era => era.id === selectedEraId);

  const getSitesForEra = (siteIds: string[]) => {
    return sites.filter(site => siteIds.includes(site.id));
  };

  return (
    <section id="heritage-timeline-section" className="space-y-8 bg-[#FBF9F5] dark:bg-[#151719] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl p-6 sm:p-10 shadow-xs transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
            <Clock className="w-3.5 h-3.5" />
            <span>Chronicles in Stone</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight mt-1">
            {language === 'hi' ? 'बिहार की ऐतिहासिक समयरेखा' : "Bihar's Civilizational Timeline"}
          </h2>
          <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mt-1 max-w-xl font-sans">
            From the world's earliest rock-cut granite chambers and royal Mauryan pillars to colossal monastic universities and floating sandstone tombs.
          </p>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F4EFE6] dark:bg-[#1E2124] p-1.5 rounded-xl border border-[#EADBCE] dark:border-[#2E343B]">
          <button
            onClick={() => setSelectedEraId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedEraId === 'all'
                ? 'bg-[#1E2124] dark:bg-[#2E343B] text-white shadow-xs'
                : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-white dark:hover:bg-[#252A30]'
            }`}
          >
            All 5 Epochs
          </button>
          {HERITAGE_TIMELINE_ERAS.map(era => (
            <button
              key={era.id}
              onClick={() => setSelectedEraId(era.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedEraId === era.id
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-white dark:hover:bg-[#252A30]'
              }`}
            >
              {era.id === 'mauryan' ? '3rd c. BCE' :
               era.id === 'classical' ? '1st–2nd c. CE' :
               era.id === 'pala-monastic' ? '5th–12th c. CE' :
               era.id === 'medieval-suri' ? '16th c. CE' : '17th–21st c.'}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-4 sm:pl-8 space-y-12 before:absolute before:left-[19px] sm:before:left-[35px] before:top-3 before:bottom-3 before:w-0.5 before:bg-[#EADBCE] dark:before:bg-[#2E343B]">
        {activeEras.map((era, index) => {
          const eraSites = getSitesForEra(era.siteIds);

          return (
            <div key={era.id} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[19px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-[#FBF9F5] dark:bg-[#151719] border-2 border-[#C85A32] flex items-center justify-center shadow-xs">
                <div className="w-2 h-2 rounded-full bg-[#C85A32]" />
              </div>

              {/* Era Content Card */}
              <div className="bg-white dark:bg-[#1A1D20] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-5 sm:p-7 shadow-xs hover:border-[#C85A32]/40 transition-all ml-4">
                {/* Era Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#F4EFE6] dark:border-[#2E343B] pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-[#C85A32]/10 text-[#C85A32] font-mono text-xs font-bold uppercase tracking-wider">
                      {era.epoch}
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                      {language === 'hi' ? era.hindiTitle : era.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#2D3238]/60 dark:text-[#C8BFB4]/60 font-serif italic">
                    {era.tagline}
                  </span>
                </div>

                {/* Narrative context */}
                <p className="text-xs sm:text-sm text-[#2D3238]/85 dark:text-[#EADBCE]/85 leading-relaxed mt-3 font-sans">
                  {era.narrative}
                </p>

                {/* Sites grounded in this era */}
                <div className="mt-5 pt-4 border-t border-[#F4EFE6] dark:border-[#2E343B]">
                  <div className="text-[11px] uppercase tracking-widest font-semibold text-[#2D3238]/60 dark:text-[#C8BFB4]/60 mb-3 flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Surviving Monuments from this Era ({eraSites.length})</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {eraSites.map(site => (
                      <div
                        key={site.id}
                        onClick={() => onOpenSite(site)}
                        className="group/site cursor-pointer bg-[#FBF9F5] dark:bg-[#252A30] hover:bg-white dark:hover:bg-[#2E343B] border border-[#EADBCE] dark:border-[#3D454F] hover:border-[#C85A32] dark:hover:border-[#C85A32] rounded-xl p-2.5 flex items-center gap-3 transition-all shadow-xs"
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-[#1E2124] relative">
                          <img
                            src={site.image}
                            alt={site.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover/site:scale-105 transition-transform"
                          />
                        </div>

                        <div className="flex-1 min-w-0 pr-1">
                          <h4 className="text-xs font-serif font-bold text-[#1E2124] dark:text-[#F5F1E8] group-hover/site:text-[#C85A32] truncate">
                            {site.name}
                          </h4>
                          <p className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60 truncate">
                            {site.location}
                          </p>
                          <div className="flex items-center gap-1 text-[10px] font-semibold text-[#C85A32] mt-0.5">
                            <span>View Site</span>
                            <ChevronRight className="w-3 h-3 group-hover/site:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
