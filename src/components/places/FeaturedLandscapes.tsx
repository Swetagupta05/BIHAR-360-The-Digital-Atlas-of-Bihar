import React from 'react';
import { LandscapePlace } from '../../types';
import { ArrowRight, Compass, MapPin, Trees, Waves } from 'lucide-react';

interface FeaturedLandscapesProps {
  places: LandscapePlace[];
  onSelectPlace: (place: LandscapePlace) => void;
  language: 'en' | 'hi';
}

export const FeaturedLandscapes: React.FC<FeaturedLandscapesProps> = ({
  places,
  onSelectPlace,
  language
}) => {
  const leadPlace = places.find(p => p.featuredRole === 'lead') || places[0];
  const supportingPlaces = places.filter(p => p.featuredRole === 'supporting');
  const panoramicPlace = places.find(p => p.featuredRole === 'panoramic');

  if (!leadPlace) return null;

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'विशेष प्राकृतिक परिदृश्य' : 'Curated Landscapes'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार के विशिष्ट प्राकृतिक स्वरूप' : 'Featured Landscapes of Bihar'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Exhibition curation: sub-Himalayan sal forests, freshwater dolphin riverways, and ancient volcanic monoliths.
        </p>
      </div>

      {/* Row 1: Large Visual Story (7 cols) + Two Smaller Stories (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Large Visual Story */}
        <div
          onClick={() => onSelectPlace(leadPlace)}
          className="lg:col-span-7 bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group hover:border-[#C85A32]/40"
        >
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#2D3238]">
            <img
              src={leadPlace.image}
              alt={leadPlace.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-[#16191D]/40 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Curator’s Choice
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#EADBCE] text-xs font-medium border border-white/20">
                {leadPlace.category}
              </span>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <div className="text-xs text-[#EADBCE] font-mono">
                {leadPlace.districtName} District • {leadPlace.landscapeType}
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
                {leadPlace.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#EADBCE]/90 font-medium">
                {leadPlace.hindiName}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed font-serif">
              {leadPlace.intro}
            </p>

            <div className="pt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
              <span className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                <span>{leadPlace.districtName}</span>
              </span>

              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C85A32] hover:bg-[#B04A25] text-white text-xs font-semibold tracking-wide transition-all shadow-xs group-hover:gap-2.5">
                <span>{language === 'hi' ? 'विस्तार से देखें' : 'Explore Landscape'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Two Supporting Stories (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {supportingPlaces.map(place => (
            <div
              key={place.id}
              onClick={() => onSelectPlace(place)}
              className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl overflow-hidden hover:shadow-md transition-all cursor-pointer group hover:border-[#C85A32]/40 flex flex-col sm:flex-row h-full"
            >
              <div className="relative w-full sm:w-44 h-44 sm:h-auto flex-shrink-0 bg-[#2D3238] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                    {place.category}
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors leading-snug">
                    {place.name}
                  </h4>
                  <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-3 leading-relaxed">
                    {place.whyItMatters}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#C85A32] dark:text-[#E06C43]">
                  <span>{place.districtName}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {language === 'hi' ? 'पढ़ें' : 'View'} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Full-Width Panoramic Story */}
      {panoramicPlace && (
        <div
          onClick={() => onSelectPlace(panoramicPlace)}
          className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] bg-[#16191D] text-white shadow-md hover:shadow-lg transition-all cursor-pointer group"
        >
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={panoramicPlace.image}
              alt={panoramicPlace.name}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#16191D] via-[#16191D]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-transparent to-black/30" />
          </div>

          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between max-w-2xl z-10">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider">
                Wetland Panorama
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white text-xs font-medium">
                Ramsar Site No. 2436
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                {panoramicPlace.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#EADBCE]/90 leading-relaxed font-serif line-clamp-2">
                {panoramicPlace.tagline}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#EADBCE] group-hover:text-white transition-colors">
                <span>{language === 'hi' ? 'रामसर आर्द्रभूमि गाथा देखें' : 'Explore Ramsar Wetland Profile'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
