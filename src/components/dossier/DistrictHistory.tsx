import React from 'react';
import { District } from '../../types';
import { getDistrictTimeline } from '../../data/districtDossiers';
import { Clock, BookMarked, Milestone } from 'lucide-react';

interface DistrictHistoryProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictHistory: React.FC<DistrictHistoryProps> = ({ district, language }) => {
  const timeline = getDistrictTimeline(district.slug, district.history);

  return (
    <section 
      id="history" 
      aria-labelledby="history-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#FBF9F5] dark:bg-[#1A1D20] transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32] block mb-1">
            {language === 'hi' ? 'कालक्रम' : 'Historical Chronology'}
          </span>
          <h2 
            id="history-heading" 
            className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
          >
            {language === 'hi' ? `${district.hindiName} की ऐतिहासिक विकास-यात्रा` : `Historical Arc of ${district.name}`}
          </h2>
          <p className="text-sm sm:text-base text-[#736B63] dark:text-[#9EA8B3] mt-2">
            From ancient civilizational footprints and medieval administration to modern districthood.
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l-2 border-[#C85A32]/30 dark:border-[#C85A32]/40 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {timeline.map((period, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Pin */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#FBF9F5] dark:bg-[#1A1D20] border-2 border-[#C85A32] flex items-center justify-center text-[#C85A32] group-hover:bg-[#C85A32] group-hover:text-white transition-colors">
                <Milestone className="w-3 h-3" />
              </div>

              {/* Era Header */}
              <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-bold uppercase tracking-wider">
                  {period.era}
                </span>
                <span className="text-xs font-mono text-[#736B63] dark:text-[#9EA8B3]">
                  {period.periodName}
                </span>
              </div>

              {/* Title & Narrative */}
              <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#FBF9F5] mb-2 leading-snug">
                {period.title}
              </h3>

              <p className="text-sm text-[#463F38] dark:text-[#D1C7BD] leading-relaxed">
                {period.narrative}
              </p>
            </div>
          ))}
        </div>

        {/* Archival Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] flex items-center gap-3 text-xs text-[#736B63] dark:text-[#9EA8B3]">
          <BookMarked className="w-4 h-4 text-[#C85A32] shrink-0" />
          <span>
            Derived from the District Gazetteers of Bihar and Archaeological Survey of India (ASI) records.
          </span>
        </div>
      </div>
    </section>
  );
};
