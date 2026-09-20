import React from 'react';
import { District } from '../../types';
import { Landmark, Compass, ShieldCheck, MapPin } from 'lucide-react';

interface DistrictPlacesProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictPlaces: React.FC<DistrictPlacesProps> = ({ district, language }) => {
  const places = district.importantPlaces || [];

  return (
    <section 
      id="places" 
      aria-labelledby="places-heading"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#F7F4EE] dark:bg-[#151719] transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32] block mb-1">
              {language === 'hi' ? 'दर्शनीय स्थल' : 'Exploration & Sites'}
            </span>
            <h2 
              id="places-heading" 
              className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#FBF9F5] tracking-tight"
            >
              {language === 'hi' ? `${district.hindiName} में दर्शनीय स्थल` : `Places to Discover`}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#736B63] dark:text-[#9EA8B3] max-w-md">
            Verified archaeological monuments, sacred shrines, nature sanctuaries, and historical settlements across {district.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place, idx) => {
            const hasPlaceImage = Boolean(place.image && place.verified);

            return (
              <div 
                key={idx}
                className="bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group"
              >
                {/* Visual Header */}
                {hasPlaceImage && place.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-xs text-[10px] text-emerald-300 font-semibold flex items-center gap-1 border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified Place</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 pb-0 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#C85A32]/10 text-[#C85A32] text-xs font-semibold">
                      <Landmark className="w-3.5 h-3.5" />
                      <span>{place.tag || 'Heritage'}</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#A3988C] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{district.name}</span>
                    </span>
                  </div>
                )}

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {hasPlaceImage && (
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C85A32]/10 text-[#C85A32] text-[11px] font-semibold mb-2">
                        {place.tag || 'Heritage'}
                      </span>
                    )}

                    <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#FBF9F5] mb-2 leading-snug group-hover:text-[#C85A32] transition-colors">
                      {place.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#D1C7BD] leading-relaxed">
                      {place.description}
                    </p>
                  </div>

                  {/* Why It Matters / Footer Context */}
                  <div className="mt-5 pt-3 border-t border-[#EADBCE] dark:border-[#2D3238] flex items-center justify-between text-xs text-[#736B63] dark:text-[#9EA8B3]">
                    <span className="flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Historical Landmark</span>
                    </span>
                    <span className="font-medium text-[#1E2124] dark:text-[#FBF9F5]">
                      {district.headquarters} Block
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
