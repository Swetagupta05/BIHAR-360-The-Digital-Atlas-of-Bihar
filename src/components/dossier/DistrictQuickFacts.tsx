import React from 'react';
import { District } from '../../types';
import { getDistrictDivision } from '../../data/districtDossiers';
import { Building2, Layers, Map, Users, BookOpen, HeartHandshake, Compass } from 'lucide-react';

interface DistrictQuickFactsProps {
  district: District;
  language: 'en' | 'hi';
}

export const DistrictQuickFacts: React.FC<DistrictQuickFactsProps> = ({ district, language }) => {
  const division = getDistrictDivision(district.slug);
  const censusYear = district.censusYear || 2011;

  const facts = [
    {
      id: 'hq',
      label: language === 'hi' ? 'मुख्यालय' : 'Headquarters',
      value: district.headquarters,
      source: language === 'hi' ? 'प्रशासनिक' : 'Administrative',
      icon: Building2
    },
    {
      id: 'division',
      label: language === 'hi' ? 'प्रमंडल' : 'Division',
      value: division.replace(' Division', ''),
      source: language === 'hi' ? 'बिहार सरकार' : 'Govt of Bihar',
      icon: Layers
    },
    {
      id: 'area',
      label: language === 'hi' ? 'क्षेत्रफल' : 'Area',
      value: `${district.areaSqKm.toLocaleString()} km²`,
      source: language === 'hi' ? 'आधिकारिक सर्वेक्षण' : 'Official Survey',
      icon: Map
    },
    {
      id: 'population',
      label: language === 'hi' ? 'जनसंख्या' : 'Population',
      value: district.populationApprox,
      source: language === 'hi' ? `जनगणना ${censusYear}` : `Census ${censusYear}`,
      icon: Users
    },
    {
      id: 'literacy',
      label: language === 'hi' ? 'साक्षरता दर' : 'Literacy Rate',
      value: district.literacyRate,
      source: language === 'hi' ? `जनगणना ${censusYear}` : `Census ${censusYear}`,
      icon: BookOpen
    },
    {
      id: 'sexRatio',
      label: language === 'hi' ? 'लिंगानुपात' : 'Sex Ratio',
      value: `${district.sexRatio} / 1000`,
      source: language === 'hi' ? `जनगणना ${censusYear}` : `Census ${censusYear}`,
      icon: HeartHandshake
    },
    {
      id: 'coordinates',
      label: language === 'hi' ? 'निर्देशांक' : 'Coordinates',
      value: `${district.coordinates.lat.toFixed(2)}°N, ${district.coordinates.lng.toFixed(2)}°E`,
      source: 'WGS 84',
      icon: Compass
    }
  ];

  return (
    <section 
      aria-label="District Quick Facts"
      className="border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#F7F4EE] dark:bg-[#151719] py-5 px-4 sm:px-8 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-6 divide-y sm:divide-y-0 divide-[#EADBCE] dark:divide-[#2D3238]">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <div 
                key={f.id} 
                className={`flex flex-col justify-center ${i > 0 ? 'pt-3 sm:pt-0' : ''}`}
              >
                <div className="flex items-center gap-1.5 text-[#736B63] dark:text-[#9EA8B3] text-[11px] font-medium mb-1">
                  <Icon className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                  <span className="truncate">{f.label}</span>
                </div>
                <div className="font-serif font-bold text-sm sm:text-base text-[#1E2124] dark:text-[#FBF9F5] leading-snug truncate">
                  {f.value}
                </div>
                <div className="text-[10px] text-[#A3988C] dark:text-[#6C7682] mt-0.5 font-medium tracking-tight">
                  {f.source}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
