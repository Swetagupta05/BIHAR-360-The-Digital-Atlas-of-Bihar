import React from 'react';
import { District } from '../../types';
import { getDistrictLandscape } from '../../data/districtDossiers';
import { Waves, Mountain, Trees, Compass } from 'lucide-react';

interface DistrictLandscapeProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictLandscape: React.FC<DistrictLandscapeProps> = ({ district, language }) => {
  const landscape = getDistrictLandscape(district.slug, district.geography);

  return (
    <section 
      id="landscape" 
      aria-labelledby="landscape-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#F7F4EE] dark:bg-[#151719] transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32] block mb-1">
            {language === 'hi' ? 'प्राकृतिक स्वरूप' : 'Physical Geography'}
          </span>
          <h2 
            id="landscape-heading" 
            className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
          >
            {language === 'hi' ? `${district.hindiName} का भू-दृश्य एवं प्राकृतिक परिवेश` : `Landscape & Riverine Character`}
          </h2>
          <p className="text-sm sm:text-base text-[#736B63] dark:text-[#9EA8B3] mt-2">
            The topographical, hydrological, and ecological elements that carve the life of {district.name}.
          </p>
        </div>

        {/* Dynamic Landscape Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Landscape Narrative & Terrain Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 text-[#C85A32] font-semibold text-xs tracking-wider uppercase mb-3">
                <Mountain className="w-4 h-4" />
                <span>{language === 'hi' ? 'स्थलाकृति वर्गीकरण' : 'Terrain Classification'}</span>
              </div>
              
              <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-[#FBF9F5] mb-4">
                {landscape.terrainType}
              </h3>

              <p className="text-sm sm:text-base text-[#463F38] dark:text-[#D1C7BD] leading-relaxed">
                {district.geography}
              </p>

              {landscape.ecologicalCharacter && landscape.ecologicalCharacter !== district.geography && (
                <p className="text-xs sm:text-sm text-[#736B63] dark:text-[#9EA8B3] leading-relaxed mt-4 pt-4 border-t border-[#EADBCE] dark:border-[#2D3238]">
                  {landscape.ecologicalCharacter}
                </p>
              )}
            </div>

            {/* Flora & Fauna / Habitat Highlight */}
            {landscape.floraFaunaHighlights && (
              <div className="bg-[#EFE8DC] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center shrink-0 mt-0.5">
                  <Trees className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#1E2124] dark:text-[#FBF9F5] mb-1">
                    {language === 'hi' ? 'पारिस्थितिकी एवं जैव विविधता' : 'Ecological & Agricultural Habitats'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#B9C4D0] leading-relaxed">
                    {landscape.floraFaunaHighlights}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Rivers & Hydrology Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3">
                <Waves className="w-4 h-4" />
                <span>{language === 'hi' ? 'नदियाँ और जल-प्रवाह' : 'Rivers & Drainage Network'}</span>
              </div>

              <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#FBF9F5] mb-3">
                Lifelines of {district.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#736B63] dark:text-[#9EA8B3] mb-5">
                The seasonal drainage and perennial currents that replenish groundwater and sustain rural agriculture:
              </p>

              <div className="space-y-2.5">
                {landscape.primaryRivers.map((river, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F7F4EE] dark:bg-[#151719] border border-[#EADBCE] dark:border-[#2D3238]"
                  >
                    <span className="font-serif font-semibold text-sm text-[#1E2124] dark:text-[#FBF9F5]">
                      {river}
                    </span>
                    <span className="text-[10px] text-[#A3988C] font-mono uppercase tracking-wider">
                      Basin Channel
                    </span>
                  </div>
                ))}
              </div>

              {/* Geographic Coordinates Context Box */}
              <div className="mt-6 pt-5 border-t border-[#EADBCE] dark:border-[#2D3238] flex items-center justify-between text-xs text-[#736B63] dark:text-[#9EA8B3]">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Cartographic Elevation:</span>
                </span>
                <span className="font-mono font-medium text-[#1E2124] dark:text-[#FBF9F5]">
                  ~40-80m above MSL
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
