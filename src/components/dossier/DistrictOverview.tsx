import React from 'react';
import { District } from '../../types';

interface DistrictOverviewProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictOverview: React.FC<DistrictOverviewProps> = ({ district, language }) => {
  // Break down the overview and whyItMatters into structured editorial paragraphs
  const title = language === 'hi' ? `${district.hindiName} को जानिए` : `Get to Know ${district.name}`;
  const subtitle = language === 'hi'
    ? 'भौगोलिक परिवेश, ऐतिहासिक संदर्भ एवं सांस्कृतिक अस्मिता'
    : 'Geographic landscape, civilizational heritage, and living character';

  return (
    <section 
      id="overview" 
      aria-labelledby="overview-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#FBF9F5] dark:bg-[#1A1D20] transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32] block mb-1">
            {language === 'hi' ? 'दस्तावेज़ी परिचय' : 'Editorial Introduction'}
          </span>
          <h2 
            id="overview-heading" 
            className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
          >
            {title}
          </h2>
          <p className="text-sm text-[#736B63] dark:text-[#9EA8B3] mt-1 font-serif italic">
            {subtitle}
          </p>
        </div>

        {/* Narrative Flow (Readable chunks, wide editorial measure) */}
        <div className="space-y-6 text-base sm:text-lg text-[#2D3238] dark:text-[#EADBCE] leading-relaxed font-sans">
          {/* Paragraph 1: Foundational Identity & Terrain */}
          <p className="font-serif text-lg sm:text-xl text-[#1E2124] dark:text-[#FBF9F5] leading-relaxed border-l-2 border-[#C85A32] pl-4 sm:pl-6">
            {district.overview}
          </p>

          {/* Paragraph 2: Historical Context & Civilizational Significance */}
          <p>
            {district.history}
          </p>

          {/* Paragraph 3: Cultural Fabric & Why it Matters */}
          <div className="p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40]">
            <h3 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#FBF9F5] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
              <span>{language === 'hi' ? 'महत्व एवं विशिष्टता' : 'Why It Matters in Bihar’s Story'}</span>
            </h3>
            <p className="text-sm sm:text-base text-[#463F38] dark:text-[#D1C7BD] leading-relaxed">
              {district.whyItMatters}
            </p>
          </div>

          {/* Paragraph 4: Living Character & Economic Vigor */}
          <p className="text-sm sm:text-base text-[#5C554E] dark:text-[#B9C4D0] leading-relaxed">
            {district.culture}
          </p>
        </div>
      </div>
    </section>
  );
};
