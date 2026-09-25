import React from 'react';
import { LandscapePlace } from '../../types';
import { Trees, Bird, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface WildlifeNaturalHeritageProps {
  places: LandscapePlace[];
  onSelectPlace: (place: LandscapePlace) => void;
  language: 'en' | 'hi';
}

export const WildlifeNaturalHeritage: React.FC<WildlifeNaturalHeritageProps> = ({
  places,
  onSelectPlace,
  language
}) => {
  // Filter natural heritage, forests, wetlands, and wildlife sanctuaries
  const wildlifePlaces = places.filter(p =>
    p.category === 'Forests & Wildlife' ||
    p.category === 'Wetlands & Lakes' ||
    p.conservationStatus
  );

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Trees className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'वन्यजीव एवं संरक्षित क्षेत्र' : 'Protected Sanctuaries & Habitats'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार की प्राकृतिक धरोहर एवं वन्यजीव' : 'Wildlife & Natural Heritage'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          From the royal Bengal tiger corridors of Valmiki to blind Gangetic river dolphins and international Ramsar wetlands.
        </p>
      </div>

      {/* Grid of Wildlife Sanctuaries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wildlifePlaces.map(place => (
          <div
            key={place.id}
            onClick={() => onSelectPlace(place)}
            className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group hover:border-[#C85A32]/40"
          >
            <div>
              {/* Image Frame */}
              <div className="relative h-48 w-full overflow-hidden bg-[#2D3238]">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#EADBCE] text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    {place.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-[#EADBCE] font-mono">
                    {place.districtName} District
                  </span>
                  <h3 className="font-serif font-bold text-lg leading-tight truncate">
                    {place.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-3">
                <div className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43]">
                  {place.landscapeType}
                </div>

                <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-3 leading-relaxed">
                  {place.whyItMatters}
                </p>

                {place.conservationStatus && (
                  <div className="p-2.5 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] text-[#2D3238] dark:text-[#C8BFB4] flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0" />
                    <span className="line-clamp-1">{place.conservationStatus}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 pt-0 flex items-center justify-between border-t border-[#EADBCE] dark:border-[#2E343B] mt-2 pt-3 text-xs">
              <span className="text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C85A32] dark:text-[#E06C43]" />
                <span className="capitalize">{place.districtName}</span>
              </span>

              <span className="font-semibold text-[#C85A32] dark:text-[#E06C43] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{language === 'hi' ? 'विवरण देखें' : 'View Profile'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
