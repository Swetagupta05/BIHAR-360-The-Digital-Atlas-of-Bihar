import React from 'react';
import { Personality } from '../../types';
import { Landmark, Clock, ArrowRight, ShieldCheck, Milestone } from 'lucide-react';

interface PeopleHistorySectionProps {
  personalities: Personality[];
  onSelectPerson: (person: Personality) => void;
  language: 'en' | 'hi';
}

export const PeopleHistorySection: React.FC<PeopleHistorySectionProps> = ({
  personalities,
  onSelectPerson,
  language
}) => {
  const historicalPersonalities = personalities.filter(p => p.historicalConnection);

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Milestone className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'व्यक्तित्व एवं इतिहास' : 'People ↔ History'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi'
              ? 'ऐतिहासिक घटनाएं जिन्होंने देश की दिशा बदली'
              : 'Turning Points of Subcontinental History'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Direct connections between Bihar’s luminaries and the transformative moments that shaped India.
        </p>
      </div>

      {/* Grid of Event Relationship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {historicalPersonalities.map(person => {
          const hist = person.historicalConnection!;

          return (
            <div
              key={person.id}
              onClick={() => onSelectPerson(person)}
              className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-5 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-[#C85A32]/40"
            >
              <div className="space-y-3">
                {/* Person Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors">
                      {person.name}
                    </h3>
                    <div className="text-xs text-[#C85A32] dark:text-[#E06C43] font-semibold">
                      {person.hindiName}
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-[11px] font-bold">
                    {hist.period}
                  </span>
                </div>

                {/* Event Relationship Box */}
                <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E2124] dark:text-[#F5F1E8]">
                    <Clock className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                    <span>Historic Event: {hist.event}</span>
                  </div>

                  <div className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                    <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Historical Significance: </strong>
                    {hist.significance}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60">
                  Era: {person.eraPeriod}
                </span>

                <span className="font-semibold text-[#C85A32] dark:text-[#E06C43] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{language === 'hi' ? 'विस्तृत गाथा' : 'Explore Impact'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
