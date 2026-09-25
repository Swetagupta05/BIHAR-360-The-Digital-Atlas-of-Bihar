import React, { useState } from 'react';
import { HeritageSite } from '../../types';
import { MapPin, Compass, Award, ExternalLink, ArrowRight, Sparkles, Navigation } from 'lucide-react';

interface HeritageMapProps {
  sites: HeritageSite[];
  onOpenSite: (site: HeritageSite) => void;
  language?: 'en' | 'hi';
}

export const HeritageMap: React.FC<HeritageMapProps> = ({
  sites,
  onOpenSite,
  language = 'en'
}) => {
  const [activeSite, setActiveSite] = useState<HeritageSite | null>(null);
  const [filterRegion, setFilterRegion] = useState<'all' | 'north' | 'south' | 'unesco'>('all');

  // Bihar bounding box coordinates for SVG projection:
  // Longitude range: 83.2°E to 88.2°E (approx 5.0 deg width)
  // Latitude range: 24.3°N to 27.5°N (approx 3.2 deg height)
  const getCoordinatesPct = (coords: { lat: number; lng: number }) => {
    const minLng = 83.2;
    const maxLng = 88.0;
    const minLat = 24.3;
    const maxLat = 27.4;

    const x = ((coords.lng - minLng) / (maxLng - minLng)) * 100;
    // Invert Y because latitude goes north (up) but SVG coordinates go down
    const y = 100 - ((coords.lat - minLat) / (maxLat - minLat)) * 100;

    return {
      x: Math.min(Math.max(x, 6), 94),
      y: Math.min(Math.max(y, 10), 90)
    };
  };

  const filteredSites = sites.filter(site => {
    if (filterRegion === 'unesco') return site.isUnesco;
    if (filterRegion === 'north') {
      return ['east-champaran', 'vaishali'].includes(site.districtId);
    }
    if (filterRegion === 'south') {
      return ['patna', 'nalanda', 'gaya', 'jehanabad', 'rohtas', 'kaimur', 'bhagalpur'].includes(site.districtId);
    }
    return true;
  });

  return (
    <section id="heritage-map-section" className="space-y-6 bg-[#FBF9F5] dark:bg-[#151719] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl p-6 sm:p-10 shadow-xs transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
            <Compass className="w-3.5 h-3.5" />
            <span>Archaeological Atlas</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight mt-1">
            {language === 'hi' ? 'धरोहर मानचित्र' : "Explore Bihar's Heritage Map"}
          </h2>
          <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mt-1 max-w-xl font-sans">
            Spatial distribution of ancient monuments across the northern alluvial plains and southern granite hills divided by the sacred Ganga.
          </p>
        </div>

        {/* Region / UNESCO Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F4EFE6] dark:bg-[#1E2124] p-1.5 rounded-xl border border-[#EADBCE] dark:border-[#2E343B]">
          <button
            onClick={() => setFilterRegion('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterRegion === 'all'
                ? 'bg-[#1E2124] dark:bg-[#2E343B] text-white shadow-xs'
                : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-white dark:hover:bg-[#252A30]'
            }`}
          >
            All Bihar ({sites.length})
          </button>
          <button
            onClick={() => setFilterRegion('north')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterRegion === 'north'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-white dark:hover:bg-[#252A30]'
            }`}
          >
            North of Ganga
          </button>
          <button
            onClick={() => setFilterRegion('south')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterRegion === 'south'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-white dark:hover:bg-[#252A30]'
            }`}
          >
            South of Ganga
          </button>
          <button
            onClick={() => setFilterRegion('unesco')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterRegion === 'unesco'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-white dark:hover:bg-[#252A30]'
            }`}
          >
            ★ UNESCO Only
          </button>
        </div>
      </div>

      {/* Cartographic Surface */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-[#F4EFE6] dark:bg-[#1A1D20] border border-[#EADBCE] dark:border-[#2E343B] shadow-inner p-4 sm:p-6 select-none">
        {/* Parchment background pattern and map grid */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C85A32_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* SVG Base with Ganga River & Regional Boundaries */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[380px]">
          <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* North Bihar Plain Tint */}
            <rect x="0" y="0" width="1000" height="280" fill="#EFE8DC" opacity="0.5" />
            {/* South Bihar Plain & Hill Tint */}
            <rect x="0" y="280" width="1000" height="320" fill="#E8DFD0" opacity="0.5" />

            {/* Sacred Ganga River Path curving from Buxar -> Patna -> Munger -> Bhagalpur */}
            <path
              d="M 50 310 Q 180 320 280 295 T 460 280 T 650 300 T 820 320 T 960 340"
              fill="none"
              stroke="#6BA5C4"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M 50 310 Q 180 320 280 295 T 460 280 T 650 300 T 820 320 T 960 340"
              fill="none"
              stroke="#4682B4"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Ganga River Label */}
            <text x="360" y="270" fill="#2E6B8E" fontSize="13" fontStyle="italic" fontFamily="serif" letterSpacing="3">
              ~ SACRED GANGA RIVER (गंगा) ~
            </text>

            {/* Regional Geographic Labels */}
            <text x="70" y="70" fill="#8C7D6B" fontSize="13" fontWeight="bold" letterSpacing="3" fontFamily="sans-serif">
              NORTH BIHAR (TIRHUT & MITHILA PLAINS)
            </text>
            <text x="70" y="560" fill="#8C7D6B" fontSize="13" fontWeight="bold" letterSpacing="3" fontFamily="sans-serif">
              SOUTH BIHAR (MAGADH & ANGA HILLS)
            </text>

            {/* Kaimur Hills indication in south-west */}
            <path d="M 60 520 Q 120 480 180 500 T 260 540" fill="none" stroke="#C4B5A0" strokeWidth="2" strokeDasharray="4 4" />
            <text x="80" y="510" fill="#9C8B76" fontSize="10" fontStyle="italic">
              Kaimur Sandstone Escarpments
            </text>
          </svg>

          {/* Heritage Pins positioned on the map */}
          {filteredSites.map(site => {
            const { x, y } = getCoordinatesPct(site.coordinates);
            const isSelected = activeSite?.id === site.id;

            return (
              <div
                key={site.id}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
              >
                {/* Pin Button */}
                <button
                  onClick={() => {
                    setActiveSite(site);
                  }}
                  onMouseEnter={() => setActiveSite(site)}
                  className={`relative flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'scale-125 z-30'
                      : 'hover:scale-115'
                  }`}
                  aria-label={site.name}
                >
                  {/* Outer pulse for UNESCO sites */}
                  {site.isUnesco && (
                    <span className="absolute -inset-1 rounded-full bg-blue-500/40 animate-ping" />
                  )}

                  {/* Pin Circle */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md border-2 ${
                      site.isUnesco
                        ? 'bg-[#1A56DB] border-white text-white'
                        : isSelected
                        ? 'bg-[#C85A32] border-white text-white'
                        : 'bg-white border-[#C85A32] text-[#C85A32]'
                    }`}
                  >
                    {site.isUnesco ? (
                      <Award className="w-3.5 h-3.5 text-amber-300" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5 fill-current" />
                    )}
                  </div>
                </button>

                {/* Permanent subtle name label for landmarks on larger screens */}
                <div
                  className={`hidden sm:block absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-[10px] font-serif font-bold whitespace-nowrap pointer-events-none transition-all ${
                    isSelected
                      ? 'bg-[#1E2124] dark:bg-[#2E343B] text-white shadow-md z-30'
                      : 'bg-[#FBF9F5]/90 dark:bg-[#1E2124]/90 text-[#2D3238] dark:text-[#EADBCE] border border-[#EADBCE]/80 dark:border-[#3D454F]'
                  }`}
                >
                  {site.name.split(' ')[0]}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend / Key bar at bottom */}
        <div className="mt-4 pt-3 border-t border-[#EADBCE] dark:border-[#2E343B] flex flex-wrap items-center justify-between gap-3 text-xs text-[#2D3238]/80 dark:text-[#C8BFB4]/80">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#1A56DB] border border-white" />
              <span>UNESCO World Heritage Site</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white border border-[#C85A32]" />
              <span>ASI Protected National Monument</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-1 rounded bg-[#4682B4]" />
              <span>Sacred Ganga River</span>
            </div>
          </div>
          <div className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60 italic">
            Tap any pin to view preview & enter story
          </div>
        </div>
      </div>

      {/* Selected Site Preview Drawer/Card */}
      {activeSite && (
        <div className="bg-white dark:bg-[#1A1D20] border-2 border-[#C85A32]/30 rounded-2xl p-4 sm:p-5 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#1E2124] relative shadow-xs">
              <img
                src={activeSite.image}
                alt={activeSite.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {activeSite.isUnesco && (
                <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-blue-600 text-white text-[8px] font-bold">
                  UNESCO
                </span>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap text-xs text-[#C85A32] font-semibold">
                <span>{activeSite.category}</span>
                <span>•</span>
                <span className="text-[#2D3238]/60 dark:text-[#C8BFB4]/60">{activeSite.period}</span>
              </div>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1E2124] dark:text-[#F5F1E8] leading-tight mt-0.5">
                {activeSite.name}
              </h4>
              <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mt-0.5 truncate">
                {activeSite.hindiName} • {activeSite.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenSite(activeSite)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B34A25] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs active:scale-98 transition-all"
            >
              <span>Enter Exhibition Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveSite(null)}
              className="px-3 py-2.5 rounded-xl bg-[#F4EFE6] dark:bg-[#252A30] hover:bg-[#EADBCE] dark:hover:bg-[#2E343B] text-[#2D3238] dark:text-[#C8BFB4] text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
