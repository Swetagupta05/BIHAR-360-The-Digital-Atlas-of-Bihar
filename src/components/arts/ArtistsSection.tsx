import React, { useState } from 'react';
import { NOTABLE_PRACTITIONERS } from '../../data/arts';
import { Award, Feather, MapPin, ExternalLink, Filter } from 'lucide-react';

interface ArtistsSectionProps {
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
}

export const ArtistsSection: React.FC<ArtistsSectionProps> = ({ language, onSelectDistrict }) => {
  const [filterRegion, setFilterRegion] = useState<string>('all');

  const filteredPractitioners = NOTABLE_PRACTITIONERS.filter((p) => {
    if (filterRegion === 'all') return true;
    return p.region.toLowerCase().includes(filterRegion.toLowerCase());
  });

  return (
    <section id="living-masters" className="space-y-6 pt-4">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#383D45] pb-4">
        <div>
          <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'परंपरा के संवाहक एवं शिल्पी' : 'Living Heritage Guardians'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F3EFEA]">
            {language === 'hi' ? 'परंपरा जो आज भी जीवित है: गुरु एवं शिल्पी' : 'People Who Keep These Traditions Alive'}
          </h2>
          <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70 mt-1 max-w-2xl">
            {language === 'hi'
              ? 'राष्ट्रीय एवं अंतरराष्ट्रीय सम्मानों से अलंकृत वे मास्टर कलाकार, जिन्होंने अपनी निष्ठा और नवाचार से बिहार की कला को वैश्विक पहचान दिलाई।'
              : 'Honoring the verified Padma Shri laureates, national award winners, and community elders whose hands carry centuries of artistic memory.'}
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex items-center gap-1.5 text-xs shrink-0">
          <span className="text-[#2D3238]/60 dark:text-[#EADBCE]/60 font-semibold uppercase tracking-wider">
            {language === 'hi' ? 'अंचल:' : 'Region:'}
          </span>
          <select
            value={filterRegion}
            onChange={(e) => setFilterRegion(e.target.value)}
            className="bg-[#FBF9F5] dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-[#1E2124] dark:text-white rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-[#C85A32]"
          >
            <option value="all">{language === 'hi' ? 'सभी अंचल' : 'All Regions'}</option>
            <option value="Mithila">Mithila (मिथिला)</option>
            <option value="Anga">Anga (अंग प्रदेश)</option>
            <option value="Tirhut">Tirhut (तिरहुत)</option>
            <option value="Magadh">Magadh (मगध)</option>
          </select>
        </div>
      </div>

      {/* Practitioner Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPractitioners.map((practitioner, idx) => (
          <div
            key={idx}
            className="bg-[#FAF7F2] dark:bg-[#202428] rounded-2xl border border-[#EADBCE] dark:border-[#33383F] p-6 flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-xs transition-shadow"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                    {practitioner.honor}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-white mt-1.5">
                    {practitioner.name}
                  </h3>
                  {practitioner.hindiName && (
                    <div className="font-serif italic text-xs text-[#C85A32]">
                      {practitioner.hindiName}
                    </div>
                  )}
                </div>

                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#2D3238]/70 dark:text-[#EADBCE]/70">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{practitioner.region}</span>
              </div>

              <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
                {practitioner.contribution}
              </p>
            </div>

            <div className="pt-3 border-t border-[#EADBCE]/60 dark:border-[#33383F] flex items-center justify-between text-[11px] text-[#2D3238]/60 dark:text-[#EADBCE]/60">
              <span className="line-clamp-1 italic">
                Source: {practitioner.source}
              </span>

              {practitioner.districtId && onSelectDistrict && (
                <button
                  onClick={() => onSelectDistrict(practitioner.districtId!)}
                  className="text-[#C85A32] hover:underline font-semibold shrink-0 ml-2"
                >
                  District →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
