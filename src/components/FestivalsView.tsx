import React from 'react';
import { FESTIVALS_DATA } from '../data/festivals';
import { Festival } from '../types';
import { Calendar, Sun, Sparkles, Heart, Moon, Waves } from 'lucide-react';

interface FestivalsViewProps {
  language: 'en' | 'hi';
}

export const FestivalsView: React.FC<FestivalsViewProps> = ({ language }) => {
  const [selectedFestival, setSelectedFestival] = React.useState<Festival>(FESTIVALS_DATA[0]);
  const [activeDayIdx, setActiveDayIdx] = React.useState<number>(0);

  const chhathDays = [
    { title: 'Day 1: Nahay-Khay', desc: 'Sanctified bath in holy waters, followed by eating pure Kaddu-Bhat (bottle gourd with rice and rock salt cooked in pure ghee).', icon: Waves },
    { title: 'Day 2: Kharna', desc: 'Daylong waterless fast broken after sunset with Rasiya (jaggery kheer made over mango wood fires) and rotis, beginning the 36-hour fast.', icon: Moon },
    { title: 'Day 3: Sandhya Arghya', desc: 'Devotees carry woven bamboo baskets (Daura & Soop) filled with Thekua and seasonal fruits to the ghats, standing waist-deep to worship the Setting Sun.', icon: Sun },
    { title: 'Day 4: Usha Arghya & Parana', desc: 'Before dawn, offerings of raw milk and holy water are made to the Rising Sun, followed by breaking the fast with ginger and prasad.', icon: Sparkles }
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#1E2124] text-white rounded-2xl p-6 sm:p-10 border border-[#2D3238] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Sacred Rhythms & Folk Traditions</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {language === 'hi' ? 'बिहार के महापर्व एवं लोक उत्सव' : 'Festivals & Living Traditions'}
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE] mt-2 font-normal leading-relaxed">
            Witness Chhath Puja, the world’s only Vedic mahaparva celebrating both the setting and rising sun, the month-long rural cattle carnival of Sonepur on the Ganga-Gandak confluence, and the moonlit brother-sister bird festival of Sama-Chakeva.
          </p>
        </div>
      </div>

      {/* Festival Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-[#F4EFE6] p-3 rounded-xl border border-[#EADBCE]">
        {FESTIVALS_DATA.map(fest => (
          <button
            key={fest.id}
            onClick={() => setSelectedFestival(fest)}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              selectedFestival.id === fest.id
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white hover:bg-[#FBF9F5] text-[#2D3238] border border-[#EADBCE]'
            }`}
          >
            {fest.name} ({fest.hindiName})
          </button>
        ))}
      </div>

      {/* Active Festival Spotlight Card */}
      <div className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-[#EADBCE] pb-4">
          <div className="flex items-center gap-2 text-xs text-[#C85A32] font-bold uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>Calendar Timing: {selectedFestival.timing}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124]">
            {selectedFestival.name}
          </h2>
          <p className="text-sm sm:text-base text-[#2D3238]/80 mt-2 leading-relaxed">
            {selectedFestival.overview}
          </p>
        </div>

        {/* Verified Festival Visual Banner */}
        {selectedFestival.image && (
          <div className="relative h-56 sm:h-72 w-full rounded-xl overflow-hidden border border-[#EADBCE]">
            <img
              src={selectedFestival.image}
              alt={selectedFestival.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-800/90 text-white text-[10px] font-bold tracking-wider backdrop-blur-xs flex items-center gap-1 shadow-xs">
              ✓ Authentic Living Tradition Photography
            </div>
          </div>
        )}

        {/* Chhath Puja 4-Day Special Interactive Step Map */}
        {selectedFestival.id === 'chhath-puja' && (
          <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 space-y-4">
            <h4 className="font-serif font-bold text-base text-amber-950 flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-600" />
              <span>The Sacred 4-Day Ritual Sequence of Chhath</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {chhathDays.map((day, idx) => {
                const Icon = day.icon;
                const isDayActive = activeDayIdx === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveDayIdx(idx)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      isDayActive
                        ? 'border-[#C85A32] bg-white shadow-md ring-2 ring-[#C85A32]/20'
                        : 'border-amber-200 bg-white/70 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                        <Icon className="w-4 h-4 text-[#C85A32]" />
                      </span>
                      <span className="text-[10px] font-bold uppercase text-amber-900/60">
                        Phase {idx + 1}
                      </span>
                    </div>
                    <h5 className="font-serif font-bold text-sm text-[#1E2124]">
                      {day.title}
                    </h5>
                    <p className="text-xs text-[#2D3238]/80 mt-1 line-clamp-3">
                      {day.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* General Rituals List */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-base text-[#1E2124]">
            Ritual Observances & Practices:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedFestival.rituals.map((ritual, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-[#EADBCE] text-xs text-[#2D3238] leading-relaxed flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-[#C85A32]/10 text-[#C85A32] font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5">
                  {idx + 1}
                </span>
                <span>{ritual}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mythological & Ecological Significance */}
        <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#EADBCE] text-xs sm:text-sm text-[#2D3238] leading-relaxed">
          <strong className="text-[#A54420] block mb-1 font-serif text-sm uppercase tracking-wide">
            Spiritual, Social & Environmental Significance:
          </strong>
          <p>{selectedFestival.significance}</p>
        </div>
      </div>
    </div>
  );
};
