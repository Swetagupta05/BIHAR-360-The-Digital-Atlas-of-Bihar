import React from 'react';
import { LandscapePlace } from '../../types';
import { Landmark, ArrowRight, MapPin, Clock, History } from 'lucide-react';

interface PlacesTellingHistoryProps {
  places: LandscapePlace[];
  onSelectPlace: (place: LandscapePlace) => void;
  language: 'en' | 'hi';
}

export const PlacesTellingHistory: React.FC<PlacesTellingHistoryProps> = ({
  places,
  onSelectPlace,
  language
}) => {
  // Places that carry historical narratives
  const historicalPlaces = places.filter(p => p.historyNarrative);

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <History className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'भूगोल एवं इतिहास' : 'Geography ↔ History'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'स्थान जो इतिहास की गाथा कहते हैं' : 'Places That Tell History'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Discover how Bihar’s unique terrain gave rise to republics, world universities, and spiritual revolutions.
        </p>
      </div>

      {/* Structured Sequence: PLACE → WHAT HAPPENED HERE → WHY IT MATTERS TODAY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {historicalPlaces.map(place => (
          <div
            key={place.id}
            onClick={() => onSelectPlace(place)}
            className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl p-6 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-[#C85A32]/40"
          >
            <div className="space-y-4">
              {/* Place Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#8C8276] dark:text-[#948B80]">
                    <MapPin className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                    <span>{place.districtName} District</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors mt-0.5">
                    {place.name}
                  </h3>
                  <div className="text-xs text-[#C85A32] dark:text-[#E06C43] font-semibold">
                    {place.hindiName}
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                  {place.category.split(' ')[0]}
                </span>
              </div>

              {/* Step 1: What Happened Here */}
              <div className="p-3.5 rounded-2xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                  <Clock className="w-3 h-3" />
                  <span>What Happened Here</span>
                </div>
                <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                  {place.historyNarrative}
                </p>
              </div>

              {/* Step 2: Why It Matters Today */}
              <div className="p-3.5 rounded-2xl bg-[#F4EFE6]/60 dark:bg-[#1E2227]/60 border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#948B80]">
                  <Landmark className="w-3 h-3" />
                  <span>Why It Matters Today</span>
                </div>
                <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                  {place.whyItMatters}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 mt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between text-xs font-semibold text-[#C85A32] dark:text-[#E06C43]">
              <span className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60 font-normal">
                {place.landscapeType}
              </span>
              <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{language === 'hi' ? 'विस्तार से' : 'Explore Story'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
