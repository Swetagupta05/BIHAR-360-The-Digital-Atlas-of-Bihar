import React from 'react';
import { District } from '../../types';
import { ALL_DISTRICTS } from '../../data/districts';
import { Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface DistrictRelatedProps {
  currentDistrict: District;
  onSelectDistrict: (district: District) => void;
  language: 'en' | 'hi';
}

export const DistrictRelated: React.FC<DistrictRelatedProps> = ({
  currentDistrict,
  onSelectDistrict,
  language
}) => {
  // Find districts from the same region, excluding current
  let related = ALL_DISTRICTS.filter(
    d => d.region === currentDistrict.region && d.id !== currentDistrict.id
  );

  // If less than 3, add other nearby districts
  if (related.length < 3) {
    const additional = ALL_DISTRICTS.filter(
      d => d.id !== currentDistrict.id && !related.some(r => r.id === d.id)
    ).slice(0, 3 - related.length);
    related = [...related, ...additional];
  }

  const displayedDistricts = related.slice(0, 3);

  return (
    <section 
      aria-label="Related Districts"
      className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#EADBCE] dark:border-[#2D3238] bg-[#F7F4EE] dark:bg-[#151719] transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#C85A32] block mb-1">
              {language === 'hi' ? 'यात्रा को आगे बढ़ाएँ' : 'Continue Your Journey'}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#FBF9F5]">
              {language === 'hi' ? `${currentDistrict.region} क्षेत्र के अन्य ज़िले` : `Related Districts in ${currentDistrict.region}`}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#736B63] dark:text-[#9EA8B3]">
            Explore adjoining landscapes, shared dialect zones, and cultural trails.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDistricts.map((d) => {
            const hasVerifiedImg = Boolean(d.imageMetadata?.url && d.imageMetadata.verified);

            return (
              <div
                key={d.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onSelectDistrict(d);
                }}
                className="group bg-[#FBF9F5] dark:bg-[#1E2124] border border-[#EADBCE] dark:border-[#343A40] rounded-2xl overflow-hidden cursor-pointer hover:border-[#C85A32] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Image or Editorial Cartographic banner */}
                <div className="relative aspect-[16/10] bg-[#1E2124] overflow-hidden">
                  {hasVerifiedImg && d.imageMetadata?.url ? (
                    <img 
                      src={d.imageMetadata.url}
                      alt={d.imageMetadata.landmark || d.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-[#2D3238] to-[#1E2124]">
                      <span className="text-[10px] font-mono text-white/50">{d.slug.toUpperCase()}</span>
                      <div className="text-center font-serif text-3xl font-bold text-amber-200/90">
                        {d.hindiName}
                      </div>
                      <span className="text-[10px] text-white/40">Bihar 360 Atlas</span>
                    </div>
                  )}

                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-xs text-[10px] font-semibold text-white">
                    {d.region}
                  </div>

                  {hasVerifiedImg && (
                    <div className="absolute top-2.5 right-2.5 p-1 rounded-full bg-black/70 text-emerald-300">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#FBF9F5] group-hover:text-[#C85A32] transition-colors">
                        {d.name}
                      </h3>
                      <span className="font-serif text-sm text-[#736B63] dark:text-[#A3988C]">
                        {d.hindiName}
                      </span>
                    </div>

                    <p className="text-xs text-[#5C554E] dark:text-[#D1C7BD] line-clamp-2 leading-relaxed">
                      {d.identityStatement || d.overview}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#EADBCE] dark:border-[#2D3238] flex items-center justify-between text-xs font-semibold text-[#C85A32]">
                    <span>Explore Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
