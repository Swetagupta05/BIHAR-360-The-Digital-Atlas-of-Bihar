import React from 'react';
import { NOTABLE_PERSONALITIES } from '../data/personalities';
import { Personality } from '../types';
import { Users, Award, Sparkles, Quote, MapPin, BookOpen, Check } from 'lucide-react';

interface PersonalitiesViewProps {
  language: 'en' | 'hi';
}

export const PersonalitiesView: React.FC<PersonalitiesViewProps> = ({ language }) => {
  const [selectedField, setSelectedField] = React.useState<string>('All');
  const [activePerson, setActivePerson] = React.useState<Personality | null>(null);

  const fields = ['All', 'Spiritual Master', 'Statecraft', 'Science & Mathematics', 'Literature', 'Freedom Fighter', 'Social Justice'];

  const filteredList = NOTABLE_PERSONALITIES.filter(p => {
    if (selectedField === 'All') return true;
    return (p.field || '').toLowerCase().includes(selectedField.toLowerCase());
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#1E2124] text-white rounded-2xl p-6 sm:p-10 border border-[#2D3238] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Visionaries, Philosophers & Freedom Titans</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {language === 'hi' ? 'बिहार की अमर विभूतियां' : 'Luminaries & Icons of Bihar'}
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE] mt-2 font-normal leading-relaxed">
            From the spiritual paths of Buddha and Mahavira and the revolutionary mathematical discoveries of Aryabhata to the 80-year-old warrior Veer Kunwar Singh, Mountain Man Dashrath Manjhi, and Super 30 educator Anand Kumar.
          </p>
        </div>
      </div>

      {/* Field Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 bg-[#F4EFE6] p-3 rounded-xl border border-[#EADBCE]">
        {fields.map(f => (
          <button
            key={f}
            onClick={() => setSelectedField(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedField === f
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white hover:bg-[#FBF9F5] text-[#2D3238] border border-[#EADBCE]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Personalities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.map(person => (
          <div
            key={person.id}
            className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl p-5 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#C85A32]/40"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-[10px] font-bold uppercase tracking-wider">
                  {person.field}
                </span>
                <span className="text-[11px] text-[#2D3238]/60 font-medium">
                  {person.era || person.eraPeriod}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-[#1E2124] leading-tight">
                  {person.name}
                </h3>
                <div className="text-xs text-[#C85A32] font-semibold mt-0.5">
                  {person.hindiName} • {person.title}
                </div>
              </div>

              <p className="text-xs text-[#2D3238] line-clamp-3 leading-relaxed">
                {person.biography}
              </p>

              {person.quotes && person.quotes.length > 0 && (
                <div className="p-3 rounded-xl bg-[#F4EFE6] border border-[#EADBCE] text-xs italic text-[#2D3238] flex items-start gap-2">
                  <Quote className="w-3.5 h-3.5 text-[#C85A32] flex-shrink-0 mt-0.5" />
                  <span>"{person.quotes[0]}"</span>
                </div>
              )}

              {person.majorAchievements && (
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/60 block">
                    Key Achievements
                  </span>
                  <ul className="space-y-1 text-xs text-[#2D3238]">
                    {person.majorAchievements.slice(0, 2).map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-1.5 flex-shrink-0"></span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-[#EADBCE]">
              <span className="text-[11px] text-[#2D3238]/70 flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-[#C85A32]" />
                Root District: {person.districtOrigin?.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
