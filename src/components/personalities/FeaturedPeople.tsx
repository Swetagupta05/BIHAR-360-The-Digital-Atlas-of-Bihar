import React from 'react';
import { Personality } from '../../types';
import { ArrowRight, Quote, Sparkles, MapPin, BookOpen } from 'lucide-react';

interface FeaturedPeopleProps {
  personalities: Personality[];
  onSelectPerson: (person: Personality) => void;
  language: 'en' | 'hi';
}

export const FeaturedPeople: React.FC<FeaturedPeopleProps> = ({
  personalities,
  onSelectPerson,
  language
}) => {
  // Select primary lead story (Dinkar or Buddha)
  const leadPerson = personalities.find(p => p.id === 'ramdhari-singh-dinkar') || personalities[0];

  // Select 3 distinct supporting stories with different eras & fields
  const supportingPeople = [
    personalities.find(p => p.id === 'gautama-buddha'),
    personalities.find(p => p.id === 'dashrath-manjhi'),
    personalities.find(p => p.id === 'sharda-sinha')
  ].filter(Boolean) as Personality[];

  if (!leadPerson) return null;

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            {language === 'hi' ? 'विशेष आख्यान' : 'Curated Stories'}
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार की आवाजें: प्रमुख जीवन गाथाएं' : 'Featured Luminaries & Stories'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Archival profiles of the visionaries whose courage and creativity redefined the spirit of India.
        </p>
      </div>

      {/* Asymmetric Curated Grid: 1 Large Hero + Supporting Stories */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Large Featured Story (7 Cols) */}
        <div className="lg:col-span-7 bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all group hover:border-[#C85A32]/40">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#2D3238]">
            <img
              src={leadPerson.image || '/assets/images/dinkar_portrait_1790334325905.jpg'}
              alt={leadPerson.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-[#16191D]/40 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Curator’s Choice
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#EADBCE] text-xs font-medium border border-white/20">
                {leadPerson.field}
              </span>
            </div>

            {/* Title Over Image Base */}
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <div className="text-xs text-[#EADBCE] font-mono tracking-wide">
                {leadPerson.eraPeriod} • {leadPerson.era}
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
                {leadPerson.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#EADBCE]/90 font-medium">
                {leadPerson.hindiName} — {leadPerson.title}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed font-serif">
                {leadPerson.featuredStoryIntro || leadPerson.biography}
              </p>

              {leadPerson.quotes && leadPerson.quotes.length > 0 && (
                <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border-l-4 border-[#C85A32] dark:border-[#E06C43] text-xs sm:text-sm italic text-[#2D3238] dark:text-[#E2D9CE] flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0 mt-0.5" />
                  <span className="font-serif">"{leadPerson.quotes[0]}"</span>
                </div>
              )}

              {leadPerson.majorAchievements && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] block">
                    Historical Milestones
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#2D3238] dark:text-[#C8BFB4]">
                    {leadPerson.majorAchievements.slice(0, 2).map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-1.5 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-5 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
              <span className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                Origin: <strong className="capitalize text-[#1E2124] dark:text-[#F5F1E8]">{leadPerson.districtOrigin?.replace('-', ' ')}</strong>
              </span>

              <button
                onClick={() => onSelectPerson(leadPerson)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C85A32] hover:bg-[#B04A25] text-white text-xs font-semibold tracking-wide transition-all shadow-xs group-hover:gap-2.5"
              >
                <span>{language === 'hi' ? 'पूरी गाथा पढ़ें' : 'Explore Story'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Smaller Supporting Stories (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          {supportingPeople.map((person, idx) => (
            <div
              key={person.id}
              onClick={() => onSelectPerson(person)}
              className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-4 sm:p-5 hover:shadow-md transition-all cursor-pointer group hover:border-[#C85A32]/40 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              {/* Supporting Image / Avatar Crop */}
              <div className="relative w-full sm:w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-[#2D3238]">
                <img
                  src={person.image || '/assets/images/patna_golghar_granary_1789937770039.jpg'}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden" />
              </div>

              {/* Supporting Story Content */}
              <div className="flex-1 space-y-1.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                    {person.field}
                  </span>
                  <span className="text-[10px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60">
                    • {person.eraPeriod}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors truncate">
                  {person.name}
                </h4>

                <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-2 leading-relaxed">
                  {person.shortContribution || person.biography}
                </p>

                <div className="pt-1 flex items-center justify-between text-[11px] font-medium text-[#C85A32] dark:text-[#E06C43]">
                  <span>{person.hindiName}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {language === 'hi' ? 'विस्तार से' : 'Read profile'} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
