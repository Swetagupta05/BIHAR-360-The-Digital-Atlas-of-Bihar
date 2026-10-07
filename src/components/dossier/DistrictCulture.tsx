import React from 'react';
import { District } from '../../types';
import { getDistrictLinguisticDetail } from '../../data/districtDossiers';
import { MessageSquare, Users, Palette, Calendar } from 'lucide-react';

interface DistrictCultureProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictCulture: React.FC<DistrictCultureProps> = ({ district, language }) => {
  const linguisticDetail = getDistrictLinguisticDetail(
    district.slug, 
    district.region, 
    district.languages || []
  );

  return (
    <section 
      id="culture" 
      aria-labelledby="culture-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#F7F4EE] dark:bg-[#151719] transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32] block mb-1">
            {language === 'hi' ? 'जन-जीवन एवं भाषा' : 'People, Language & Traditions'}
          </span>
          <h2 
            id="culture-heading" 
            className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
          >
            {language === 'hi' ? `${district.hindiName} की सांस्कृतिक धरोहर` : `People & Cultural Heritage`}
          </h2>
          <p className="text-sm sm:text-base text-[#736B63] dark:text-[#9EA8B3] mt-2">
            The linguistic landscape, folk traditions, living crafts, and social celebrations of {district.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Linguistic Nuance (Crucial Requirement: Clearly distinguish language, dialect/variety, regional usage) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'hi' ? 'भाषाई परिदृश्य' : 'Linguistic Landscape'}</span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-[#FBF9F5] mb-2">
                Vernacular Idioms & Dialects
              </h3>

              <div className="space-y-4 text-sm text-[#463F38] dark:text-[#D1C7BD] mt-4">
                {/* Official vs Spoken */}
                <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40]">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-[#1E2124] dark:text-[#FBF9F5]">Official Languages:</span>
                    <span className="font-mono text-[#C85A32]">{linguisticDetail.official.join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1E2124] dark:text-[#FBF9F5]">Primary Vernacular:</span>
                    <span className="font-serif font-semibold text-[#1E2124] dark:text-amber-200">
                      {linguisticDetail.vernacular}
                    </span>
                  </div>
                </div>

                {/* Dialect Detail (Rigorous, non-collapsed distinctions) */}
                <p className="leading-relaxed">
                  {linguisticDetail.dialectDetail}
                </p>

                {/* Script and Epigraphy Note */}
                <div className="pt-3 border-t border-[#EADBCE] dark:border-[#2D3238] text-xs text-[#736B63] dark:text-[#9EA8B3]">
                  <strong className="text-[#1E2124] dark:text-[#FBF9F5]">Script & Written Heritage: </strong>
                  {linguisticDetail.scriptNote}
                </div>
              </div>

              {/* Tagged Spoken Languages */}
              <div className="mt-5 pt-4 border-t border-[#EADBCE] dark:border-[#2D3238]">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#A3988C] block mb-2">
                  Recognized Tongues in Census & Everyday Usage:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(district.languages || []).map((lang, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#EFE8DC] dark:bg-[#2D3238] text-xs font-medium text-[#1E2124] dark:text-[#FBF9F5]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cultural Fabric Quote / Living Custom */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] shadow-xs">
              <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-2">
                <Users className="w-4 h-4" />
                <span>{language === 'hi' ? 'सामाजिक ताना-बाना' : 'Social Fabric & Customs'}</span>
              </div>
              <p className="text-sm text-[#463F38] dark:text-[#D1C7BD] leading-relaxed">
                {district.culture}
              </p>
            </div>
          </div>

          {/* Right Column: Crafts, Festivals, Notable Figures */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Crafts & Artisanship */}
            {district.artsAndCrafts && district.artsAndCrafts.length > 0 && (
              <div className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-3">
                  <Palette className="w-4 h-4" />
                  <span>{language === 'hi' ? 'हस्तशिल्प एवं लोक कला' : 'Folk Crafts & Handlooms'}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#FBF9F5] mb-3">
                  Indigenous Artisanship
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {district.artsAndCrafts.map((craft, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-[#F7F4EE] dark:bg-[#151719] border border-[#EADBCE] dark:border-[#2D3238]"
                    >
                      <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#FBF9F5] mb-1">
                        {craft}
                      </h4>
                      <p className="text-[11px] text-[#736B63] dark:text-[#9EA8B3]">
                        Rooted in natural grasses, bamboo, clay, or loomed textiles.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Festivals Celebrated with District Context */}
            {district.festivals && district.festivals.length > 0 && (
              <div className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'hi' ? 'पर्व और लोक मेले' : 'Festivals & Fairs'}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#FBF9F5] mb-2">
                  Festive Celebrations
                </h3>
                <p className="text-xs text-[#736B63] dark:text-[#9EA8B3] mb-4">
                  Community gatherings marked by sacred river baths, seasonal melas, and devotional songs:
                </p>
                <div className="flex flex-wrap gap-2">
                  {district.festivals.map((fest, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] text-xs font-semibold text-[#1E2124] dark:text-[#FBF9F5]"
                    >
                      {fest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Notable Personalities from District Soil */}
            {district.notablePeople && district.notablePeople.length > 0 && (
              <div className="bg-[#EFE8DC] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#C85A32] block mb-2">
                  {language === 'hi' ? 'विभूतियाँ एवं लेखक' : 'Eminent Figures & Soil Legacy'}
                </span>
                <ul className="space-y-2">
                  {district.notablePeople.map((p, idx) => (
                    <li key={idx} className="flex items-baseline gap-2 text-xs sm:text-sm text-[#1E2124] dark:text-[#FBF9F5] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
