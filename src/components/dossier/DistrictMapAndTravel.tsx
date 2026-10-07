import React from 'react';
import { District } from '../../types';
import { 
  getNeighboringDistricts, 
  getDistrictTravelCircuit, 
  getDistrictDidYouKnow 
} from '../../data/districtDossiers';
import { ALL_DISTRICTS } from '../../data/districts';
import { MapPin, Navigation, Compass, Lightbulb, ArrowRight, Route, Train } from 'lucide-react';

interface DistrictMapAndTravelProps {
  district: District;
  onSelectDistrict: (district: District) => void;
  language: 'en' | 'hi';
}

export const DistrictMapAndTravel: React.FC<DistrictMapAndTravelProps> = ({
  district,
  onSelectDistrict,
  language
}) => {
  const neighborSlugs = getNeighboringDistricts(district.slug);
  const travelCircuit = getDistrictTravelCircuit(district.slug);
  const didYouKnowFacts = getDistrictDidYouKnow(district.slug, district.famousFor || []);

  // Map neighbor slugs to District objects
  const neighborDistricts = neighborSlugs
    .map(slug => ALL_DISTRICTS.find(d => d.slug === slug || d.id === slug))
    .filter((d): d is District => Boolean(d));

  return (
    <section 
      id="travel" 
      aria-labelledby="travel-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#FBF9F5] dark:bg-[#1A1D20] transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32] block mb-1">
            {language === 'hi' ? 'मानचित्र एवं यात्रा' : 'Geographic Context & Travel'}
          </span>
          <h2 
            id="travel-heading" 
            className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
          >
            {language === 'hi' ? `${district.hindiName} की स्थिति एवं यात्रा परामर्श` : `Map Location & Travel Preview`}
          </h2>
          <p className="text-sm sm:text-base text-[#736B63] dark:text-[#9EA8B3] mt-2">
            Position within Bihar’s 38-district atlas, borderland connections, and travel circuits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Geographic Location, Mini Map & Neighbors (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-4">
                <Compass className="w-4 h-4" />
                <span>{language === 'hi' ? 'स्थानिक मानचित्र' : 'District Location in Bihar'}</span>
              </div>

              {/* Simplified Bihar Cartographic Orientation Map */}
              <div className="relative w-full aspect-[16/9] rounded-xl bg-[#1E2124] overflow-hidden border border-[#343A40] p-4 flex flex-col justify-between">
                {/* SVG Outline Representation */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FBF9F5_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 flex justify-between items-start text-[11px] text-[#D1C7BD]">
                  <span>Bihar Digital Atlas</span>
                  <span className="font-mono text-amber-300">{district.coordinates.lat.toFixed(2)}°N, {district.coordinates.lng.toFixed(2)}°E</span>
                </div>

                {/* Pinpoint Indicator */}
                <div className="relative z-10 text-center my-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C85A32] text-white font-serif font-bold shadow-lg animate-pulse">
                    <MapPin className="w-4 h-4" />
                    <span>{district.name} ({district.hindiName})</span>
                  </div>
                  <p className="text-xs text-white/70 mt-2 font-mono">
                    {district.region} Division • North-Eastern India
                  </p>
                </div>

                <div className="relative z-10 flex justify-between items-end text-[10px] text-white/50">
                  <span>Standard WGS 84</span>
                  <span>Interactive Map Available</span>
                </div>
              </div>

              {/* Neighboring Districts */}
              <div className="mt-6">
                <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#FBF9F5] mb-2 flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>{language === 'hi' ? 'पड़ोसी ज़िले (क्लिक करके देखें):' : 'Neighboring Districts:'}</span>
                </h4>
                
                {neighborDistricts.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {neighborDistricts.map((neighbor) => (
                      <button
                        key={neighbor.id}
                        type="button"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          onSelectDistrict(neighbor);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] text-xs font-semibold text-[#1E2124] dark:text-[#FBF9F5] hover:border-[#C85A32] hover:text-[#C85A32] transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                      >
                        <span>{neighbor.name}</span>
                        <span className="text-[10px] text-[#A3988C] font-normal">({neighbor.hindiName})</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[#736B63] dark:text-[#9EA8B3]">
                    Bordered by international/state boundaries and adjacent river basins.
                  </p>
                )}
              </div>
            </div>

            {/* Did You Know? Facts Box */}
            {didYouKnowFacts.length > 0 && (
              <div className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Lightbulb className="w-4 h-4" />
                  <span>{language === 'hi' ? 'क्या आप जानते हैं?' : 'Did You Know?'}</span>
                </div>
                
                <div className="space-y-4">
                  {didYouKnowFacts.map((factItem, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-[#463F38] dark:text-[#D1C7BD] leading-relaxed">
                      <p className="font-medium text-[#1E2124] dark:text-[#FBF9F5] mb-1">
                        • {factItem.fact}
                      </p>
                      <span className="text-[10px] text-[#A3988C] italic block pl-3">
                        Source: {factItem.source}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Travel Circuit, Practical Advice, Circuit Preview (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Travel Circuit Integration */}
            <div className="bg-[#F4EFE6] dark:bg-[#22272B] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-2">
                <Route className="w-4 h-4" />
                <span>{language === 'hi' ? 'पर्यटन परिपथ' : 'Related Travel Circuit'}</span>
              </div>

              <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#FBF9F5] mb-2">
                {travelCircuit.circuitName}
              </h3>

              <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#D1C7BD] leading-relaxed mb-4">
                {travelCircuit.description}
              </p>

              {/* Transit & Tips */}
              <div className="space-y-3 pt-4 border-t border-[#EADBCE] dark:border-[#343A40]">
                <div className="flex items-start gap-2.5 text-xs text-[#463F38] dark:text-[#D1C7BD]">
                  <Train className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E2124] dark:text-[#FBF9F5]">Transit Access: </strong>
                    <span>Headquarters at {district.headquarters}, connected via East Central / Northeast Frontier Railway and National Highway grid.</span>
                  </div>
                </div>

                {district.travelTips && district.travelTips.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40]">
                    <span className="text-[11px] font-bold text-[#C85A32] uppercase tracking-wide block mb-1">
                      Travel Advisory:
                    </span>
                    <p className="text-xs text-[#5C554E] dark:text-[#D1C7BD]">
                      {district.travelTips[0]}
                    </p>
                  </div>
                )}
              </div>

              {/* CTA: Plan a Journey */}
              <div className="mt-6 pt-5 border-t border-[#EADBCE] dark:border-[#343A40]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#FBF9F5]">
                      Planning a visit to {district.name}?
                    </h4>
                    <p className="text-[11px] text-[#736B63] dark:text-[#9EA8B3]">
                      Best experienced between October and March.
                    </p>
                  </div>

                  <a 
                    href="#places"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C85A32] text-white text-xs font-semibold shadow-xs hover:bg-[#A04523] transition-colors"
                  >
                    <span>Explore Places</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Economic Context */}
            <div className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl p-6 shadow-xs">
              <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#FBF9F5] mb-1.5">
                {language === 'hi' ? 'स्थानीय आर्थिकी एवं मंडियां' : 'District Economy & Trade Mandis'}
              </h4>
              <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#D1C7BD] leading-relaxed">
                {district.economy}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
