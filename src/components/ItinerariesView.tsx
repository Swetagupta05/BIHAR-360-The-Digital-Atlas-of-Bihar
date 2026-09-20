import React from 'react';
import { TRAVEL_CIRCUITS, TravelCircuit } from '../data/itineraries';
import { Compass, Calendar, Clock, MapPin, CheckCircle, Navigation, ShieldCheck, ArrowRight } from 'lucide-react';

interface ItinerariesViewProps {
  language: 'en' | 'hi';
}

export const ItinerariesView: React.FC<ItinerariesViewProps> = ({ language }) => {
  const [selectedCircuit, setSelectedCircuit] = React.useState<TravelCircuit>(TRAVEL_CIRCUITS[0]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#1E2124] text-white rounded-2xl p-6 sm:p-10 border border-[#2D3238] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Pilgrimage & Cultural Expeditions</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {language === 'hi' ? 'बिहार पर्यटन एवं तीर्थ परिपथ' : 'Curated Travel Circuits'}
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE] mt-2 font-normal leading-relaxed">
            Meticulously planned travel itineraries with verified day-by-day stops, optimal seasons, historical context, and practical travel advisories for pilgrims, heritage travelers, and nature explorers.
          </p>
        </div>
      </div>

      {/* Circuit Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-[#F4EFE6] p-3 rounded-xl border border-[#EADBCE]">
        {TRAVEL_CIRCUITS.map(circuit => (
          <button
            key={circuit.id}
            onClick={() => setSelectedCircuit(circuit)}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              selectedCircuit.id === circuit.id
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white hover:bg-[#FBF9F5] text-[#2D3238] border border-[#EADBCE]'
            }`}
          >
            {circuit.title} ({circuit.days} Days)
          </button>
        ))}
      </div>

      {/* Main Itinerary Content */}
      <div className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        {/* Circuit Header */}
        <div className="border-b border-[#EADBCE] pb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32] text-white text-xs font-bold uppercase">
              {selectedCircuit.days} Days / {selectedCircuit.days - 1} Nights
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#2C5D75]/10 text-[#2C5D75] text-xs font-semibold">
              Theme: {selectedCircuit.theme}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#3E6550]/10 text-[#2A4737] text-xs font-semibold">
              Best Season: {selectedCircuit.bestSeason}
            </span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124]">
            {selectedCircuit.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#C85A32] font-semibold mt-0.5">
            {selectedCircuit.hindiTitle}
          </p>
          <p className="text-sm text-[#2D3238] mt-3 leading-relaxed">
            {selectedCircuit.overview}
          </p>
        </div>

        {/* Day-by-Day Stops Timeline */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-lg text-[#1E2124]">
            Day-by-Day Route & Landmarks
          </h4>
          <div className="space-y-3 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-[#EADBCE]">
            {selectedCircuit.stops.map((stop, idx) => (
              <div
                key={idx}
                className="relative pl-10 p-4 rounded-xl bg-white border border-[#EADBCE] shadow-xs hover:border-[#C85A32]/40 transition-colors"
              >
                {/* Timeline node */}
                <div className="absolute left-2.5 top-5 -translate-x-1/2 w-6 h-6 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  {idx + 1}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h5 className="font-serif font-bold text-base text-[#1E2124]">
                    {stop.placeName}
                  </h5>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EADBCE] text-[#1E2124]">
                      {stop.district} District
                    </span>
                    <span className="text-xs font-bold text-[#C85A32]">
                      {stop.duration}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2D3238] leading-relaxed">
                  {stop.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Tips Callout */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F4EFE6] border border-[#EADBCE] space-y-2.5">
          <h4 className="font-serif font-bold text-sm text-[#1E2124] uppercase tracking-wide flex items-center gap-2">
            <Navigation className="w-4 h-4 text-[#C85A32]" />
            <span>Essential Travel Advisories & Route Tips</span>
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-[#2D3238]">
            {selectedCircuit.practicalTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 flex-shrink-0"></span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
