import React from 'react';
import { Calendar as CalendarIcon, Sparkles, ArrowRight, Sun } from 'lucide-react';
import { Festival } from '../../types';

interface FestivalCalendarProps {
  festivals: Festival[];
  language: 'en' | 'hi';
  onSelectFestival: (festival: Festival) => void;
}

export const FestivalCalendar: React.FC<FestivalCalendarProps> = ({
  festivals,
  language,
  onSelectFestival
}) => {
  const months = [
    { code: 'JAN', name: 'January', hindi: 'माघ / पौष', season: 'winter' },
    { code: 'FEB', name: 'February', hindi: 'फाल्गुन', season: 'winter' },
    { code: 'MAR', name: 'March', hindi: 'चैत्र', season: 'spring' },
    { code: 'APR', name: 'April', hindi: 'वैशाख', season: 'spring' },
    { code: 'MAY', name: 'May', hindi: 'ज्येष्ठ', season: 'summer' },
    { code: 'JUN', name: 'June', hindi: 'आषाढ़', season: 'summer' },
    { code: 'JUL', name: 'July', hindi: 'श्रावण', season: 'monsoon' },
    { code: 'AUG', name: 'August', hindi: 'भाद्रपद', season: 'monsoon' },
    { code: 'SEP', name: 'September', hindi: 'आश्विन', season: 'autumn' },
    { code: 'OCT', name: 'October', hindi: 'कार्तिक', season: 'autumn' },
    { code: 'NOV', name: 'November', hindi: 'मार्गशीर्ष', season: 'autumn' },
    { code: 'DEC', name: 'December', hindi: 'पौष', season: 'winter' }
  ];

  // Group festivals into months based on their verified calendar placement
  const getFestivalsForMonth = (monthIndex: number) => {
    return festivals.filter(f => {
      if (f.id === 'chhath-puja') {
        // Kartik Chhath (Oct/Nov) and Chaiti Chhath (Mar/Apr)
        return monthIndex === 9 || monthIndex === 10 || monthIndex === 2 || monthIndex === 3;
      }
      if (f.id === 'pitrapaksha-mela') {
        // Bhadrapada to Ashwin (Sep/Oct)
        return monthIndex === 8 || monthIndex === 9;
      }
      if (f.id === 'sonepur-mela') {
        // Kartik Purnima through Margashirsha (Nov/Dec)
        return monthIndex === 10 || monthIndex === 11;
      }
      if (f.id === 'prakash-parv') {
        // Poush Shukla Saptami (Dec/Jan)
        return monthIndex === 11 || monthIndex === 0;
      }
      if (f.id === 'rajgir-mahotsav') {
        // Late November / early December
        return monthIndex === 10 || monthIndex === 11;
      }
      if (f.id === 'karam-parva') {
        // Bhadrapada (August/September)
        return monthIndex === 7 || monthIndex === 8;
      }
      if (f.id === 'sufi-urs-maner') {
        // Spring Shawwal commemoration (March/April)
        return monthIndex === 2 || monthIndex === 3;
      }
      if (f.id === 'mithila-vivah-panchami') {
        // Margashirsha Shukla Panchami (November/December)
        return monthIndex === 10 || monthIndex === 11;
      }
      if (f.monthIndex !== undefined) {
        return f.monthIndex === monthIndex;
      }
      return false;
    });
  };

  return (
    <section
      id="annual-calendar-section"
      className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 lg:p-12 shadow-xs space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <CalendarIcon className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
            <span>{language === 'hi' ? 'वार्षिक सांस्कृतिक चक्र' : 'Annual Cycle of Festivities'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार का वार्षिक उत्सव कैलेंडर' : 'The Annual Festival Calendar of Bihar'}
          </h2>

          <p className="text-sm text-[#4A453E] dark:text-[#C8BFB4] max-w-2xl">
            {language === 'hi'
              ? 'ऋतुओं के परिवर्तन और चंद्रमा की कलाओं के अनुसार बिहार के 12 महीनों में मनाए जाने वाले प्रमुख पर्व और मेले।'
              : 'Traverse Bihar’s 12-month calendar aligned with seasonal harvests, lunar tithis, and sacred solar transitions.'}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32] dark:bg-[#E06C43]" />
          <span>Major Living Tradition</span>
        </div>
      </div>

      {/* 12-Month Calendar Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {months.map((m, idx) => {
          const monthFestivals = getFestivalsForMonth(idx);
          const hasFestivals = monthFestivals.length > 0;

          return (
            <div
              key={m.code}
              className={`rounded-2xl border p-4 transition-all flex flex-col justify-between ${
                hasFestivals
                  ? 'bg-white dark:bg-[#1E2227] border-[#EADBCE] dark:border-[#2E343B] shadow-xs hover:border-[#C85A32] dark:hover:border-[#E06C43]'
                  : 'bg-[#F4EFE6]/40 dark:bg-[#1A1D22]/40 border-[#EADBCE]/60 dark:border-[#2E343B]/60 opacity-75'
              }`}
            >
              {/* Month Header */}
              <div className="border-b border-[#F0E8DD] dark:border-[#2E343B] pb-2 mb-3 flex items-center justify-between">
                <div>
                  <span className="font-mono font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] tracking-wider">
                    {m.code}
                  </span>
                  <span className="text-[11px] text-[#8C8276] dark:text-[#A89F93] ml-2">
                    {m.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#C85A32] dark:text-[#E06C43] bg-[#C85A32]/10 dark:bg-[#C85A32]/20 px-2 py-0.5 rounded-full">
                  {m.hindi}
                </span>
              </div>

              {/* Month Festivals List */}
              <div className="space-y-2 flex-1">
                {hasFestivals ? (
                  monthFestivals.map(fest => (
                    <button
                      key={fest.id}
                      onClick={() => onSelectFestival(fest)}
                      className="w-full text-left p-2.5 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] transition-all group focus:outline-hidden"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-serif font-bold text-xs text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors line-clamp-1">
                          {fest.name.split('(')[0].trim()}
                        </span>
                        <ArrowRight className="w-3 h-3 text-[#C85A32] dark:text-[#E06C43] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                      </div>
                      <span className="text-[10px] text-[#8C8276] dark:text-[#A89F93] block mt-0.5 line-clamp-1">
                        {fest.hindiName}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="h-14 flex items-center justify-center text-[11px] text-[#A59D93] dark:text-[#7A7268] italic">
                    Local agrarian & lunar observances
                  </div>
                )}
              </div>

              {/* Season indicator footer */}
              <div className="pt-2 mt-3 border-t border-[#F0E8DD] dark:border-[#2E343B] text-[10px] text-[#8C8276] dark:text-[#A89F93] uppercase tracking-wider font-mono flex items-center justify-between">
                <span>{m.season} Season</span>
                {hasFestivals && (
                  <span className="font-bold text-[#C85A32] dark:text-[#E06C43]">
                    {monthFestivals.length} Event{monthFestivals.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
