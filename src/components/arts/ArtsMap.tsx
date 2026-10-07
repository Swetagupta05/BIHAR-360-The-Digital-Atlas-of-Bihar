import React from 'react';
import { CRAFT_GEOGRAPHIC_CLUSTERS } from '../../data/arts';
import { MapPin, Compass, ArrowRight, Sparkles } from 'lucide-react';

interface ArtsMapProps {
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
}

export const ArtsMap: React.FC<ArtsMapProps> = ({ language, onSelectDistrict }) => {
  return (
    <section id="arts-geography" className="space-y-6 pt-4">
      {/* Section Header */}
      <div className="border-b border-[#EADBCE] dark:border-[#383D45] pb-4">
        <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-1">
          <Compass className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'भौगोलिक शिल्प मानचित्र' : 'Geographic Craft Hearth'}</span>
        </div>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F3EFEA]">
          {language === 'hi' ? 'कला का भूगोल: अंचल और जिले' : 'Arts Across Bihar: Regional Clusters'}
        </h2>
        <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70 mt-1 max-w-2xl">
          {language === 'hi'
            ? 'बिहार के चारों प्रमुख सांस्कृतिक अंचलों की विशिष्ट कलाएं और उनके उद्गम जिले। किसी भी जिले पर क्लिक करके उसका विस्तृत डोशियर देखें।'
            : 'Trace each art form back to its physical landscape—from the waterlogged ponds of Mithila to the silk groves of Anga and the quilt circles of Tirhut.'}
        </p>
      </div>

      {/* Visual Cluster Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CRAFT_GEOGRAPHIC_CLUSTERS.map((cluster, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-[#FAF7F2] dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] shadow-xs space-y-4 hover:border-[#C85A32] transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                  {cluster.giStatus}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-white mt-2">
                  {cluster.region}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#C85A32] font-medium mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{cluster.districtName}</span>
                </div>
              </div>

              <div className="text-[10px] text-[#2D3238]/50 dark:text-[#EADBCE]/50 font-mono">
                {cluster.coordinates.lat}° N, {cluster.coordinates.lng}° E
              </div>
            </div>

            <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
              {cluster.description}
            </p>

            <div className="space-y-1.5 pt-2 border-t border-[#EADBCE]/60 dark:border-[#33383F]">
              <span className="text-[11px] font-bold text-[#C85A32] uppercase tracking-wider block">
                {language === 'hi' ? 'संबद्ध कला परंपराएं:' : 'Indigenous Craft Traditions:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cluster.artForms.map((form, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs font-semibold text-[#1E2124] dark:text-white"
                  >
                    {form}
                  </span>
                ))}
              </div>
            </div>

            {onSelectDistrict && (
              <div className="pt-2">
                <button
                  onClick={() => onSelectDistrict(cluster.districtId)}
                  className="w-full py-2.5 rounded-xl bg-white dark:bg-[#25292E] hover:bg-[#C85A32] hover:text-white text-[#1E2124] dark:text-white border border-[#EADBCE] dark:border-[#383D45] text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 group shadow-2xs"
                >
                  <span>
                    {language === 'hi'
                      ? `${cluster.districtName.split('&')[0].trim()} जिला डोशियर खोलें`
                      : `Explore ${cluster.districtName.split('&')[0].trim()} District Dossier`}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
