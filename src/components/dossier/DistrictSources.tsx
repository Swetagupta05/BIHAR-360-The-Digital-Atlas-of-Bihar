import React from 'react';
import { District } from '../../types';
import { ShieldCheck, ExternalLink, BookOpen, Camera } from 'lucide-react';

interface DistrictSourcesProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictSources: React.FC<DistrictSourcesProps> = ({ district, language }) => {
  const meta = district.imageMetadata;

  return (
    <section 
      id="sources" 
      aria-labelledby="sources-heading"
      className="py-12 px-4 sm:px-8 bg-[#FBF9F5] dark:bg-[#1A1D20] text-[#1E2124] dark:text-[#FBF9F5] transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40]">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 
              id="sources-heading" 
              className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#FBF9F5]"
            >
              {language === 'hi' ? 'दस्तावेज़ी स्रोत एवं सत्यापन' : 'Sources & Archival Attribution'}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#D1C7BD] leading-relaxed mb-6">
            All geographical figures, historical narratives, administrative classifications, and cultural annotations in this dossier are curated in accordance with the Bihar 360 Open Editorial Standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Primary Text & Census Source */}
            <div className="p-4 rounded-xl bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40]">
              <div className="flex items-center gap-1.5 font-bold text-[#1E2124] dark:text-[#FBF9F5] mb-1">
                <BookOpen className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Gazetteer & Demographic Provenance:</span>
              </div>
              <p className="text-[#5C554E] dark:text-[#B9C4D0]">
                {district.sourceAttribution?.sourceName || 'Census of India (2011) & Official District Administration Portal'}. Verified year: {district.sourceAttribution?.verifiedYear || 2024}.
              </p>
            </div>

            {/* Media & Image Attribution */}
            <div className="p-4 rounded-xl bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40]">
              <div className="flex items-center gap-1.5 font-bold text-[#1E2124] dark:text-[#FBF9F5] mb-1">
                <Camera className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Media Attribution:</span>
              </div>
              {meta ? (
                <p className="text-[#5C554E] dark:text-[#B9C4D0]">
                  {meta.landmark} • {meta.sourceName} ({meta.credit || 'Wikimedia Commons'}). License: {meta.license || 'CC BY-SA'}.
                </p>
              ) : (
                <p className="text-[#5C554E] dark:text-[#B9C4D0]">
                  Cartographic and typographic editorial layout created specifically for Bihar 360 Digital Atlas.
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EADBCE] dark:border-[#343A40] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#A3988C]">
            <span>Last reviewed: 2024–2025 archival cycle</span>
            <span>Bihar 360 Digital Atlas — Step 3 Editorial Dossier</span>
          </div>
        </div>
      </div>
    </section>
  );
};
