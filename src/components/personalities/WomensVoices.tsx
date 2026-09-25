import React from 'react';
import { Personality } from '../../types';
import { Sparkles, ArrowRight, Quote, Heart, BookOpen, Feather } from 'lucide-react';

interface WomensVoicesProps {
  personalities: Personality[];
  onSelectPerson: (person: Personality) => void;
  language: 'en' | 'hi';
}

export const WomensVoices: React.FC<WomensVoicesProps> = ({
  personalities,
  onSelectPerson,
  language
}) => {
  const womenPersonalities = personalities.filter(p => p.isWomanVoice);

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#F4EFE6] via-[#FBF9F5] to-[#F4EFE6] dark:from-[#1A1D22] dark:via-[#16191D] dark:to-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'विदुषी, साधिका एवं वीरांगनाएं' : 'Women’s Voices of Bihar'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight leading-tight">
            {language === 'hi'
              ? 'बिहार की विदुषियां एवं सृजनकार'
              : 'Scholars, Reformers & Living Voices'}
          </h2>

          <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
            From Vedic philosopher Gargi challenging the sages of ancient Mithila and Amrapali composing verses in the Therigatha, to Prabhavati Devi mobilizing freedom fighters, Dulari Devi pioneering Dalit folk art, and Sharda Sinha carrying the spiritual soul of Chhath across the globe.
          </p>
        </div>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {womenPersonalities.map(person => (
          <div
            key={person.id}
            onClick={() => onSelectPerson(person)}
            className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group hover:border-[#C85A32]/50 relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Top Meta & Portrait */}
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-[#2D3238] border border-[#EADBCE] dark:border-[#2E343B]">
                  <img
                    src={person.image || '/assets/images/madhubani_mithila_painting_1789937745005.jpg'}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-[10px] font-bold uppercase tracking-wider">
                      {person.field}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors leading-snug">
                    {person.name}
                  </h3>

                  <div className="text-xs text-[#C85A32] dark:text-[#E06C43] font-semibold">
                    {person.hindiName}
                  </div>
                  <div className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60 font-mono">
                    {person.era}
                  </div>
                </div>
              </div>

              {/* Title & Short Contribution */}
              <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                {person.shortContribution || person.biography}
              </p>

              {/* Notable Quote */}
              {person.quotes && person.quotes.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border-l-2 border-[#C85A32] text-xs italic text-[#2D3238] dark:text-[#C8BFB4] flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">"{person.quotes[0]}"</span>
                </div>
              )}
            </div>

            {/* Read Story Button */}
            <div className="pt-4 mt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
              <span className="text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 font-medium">
                Root: <span className="capitalize">{person.districtOrigin?.replace('-', ' ')}</span>
              </span>

              <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] group-hover:translate-x-1 transition-transform">
                <span>{language === 'hi' ? 'गाथा पढ़ें' : 'Read Story'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
