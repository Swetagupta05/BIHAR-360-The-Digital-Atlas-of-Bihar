import React, { useState } from 'react';
import { Personality } from '../../types';
import { Search, Users, ArrowRight, Quote, MapPin, Sparkles, Filter } from 'lucide-react';

interface FieldsDiscoveryProps {
  personalities: Personality[];
  onSelectPerson: (person: Personality) => void;
  language: 'en' | 'hi';
}

const CONTRIBUTION_FIELDS = [
  'All',
  'Literature',
  'Spiritual & Philosophy',
  'Statecraft & Governance',
  'Science & Innovation',
  'Freedom Movement',
  'Social Reform & Justice',
  'Music',
  'Art & Culture',
  'Education & Scholarship'
];

export const FieldsDiscovery: React.FC<FieldsDiscoveryProps> = ({
  personalities,
  onSelectPerson,
  language
}) => {
  const [selectedField, setSelectedField] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPersonalities = personalities.filter(p => {
    const matchesField = selectedField === 'All' || p.field?.toLowerCase() === selectedField.toLowerCase();
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.hindiName.includes(query) ||
      p.title.toLowerCase().includes(query) ||
      p.biography.toLowerCase().includes(query) ||
      (p.districtOrigin || '').toLowerCase().includes(query);

    return matchesField && matchesSearch;
  });

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            {language === 'hi' ? 'योगदान अनुसार खोज' : 'Explore by Contribution'}
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'विचार, कर्म एवं रचनात्मक क्षेत्र' : 'Fields of Human Endeavor'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Explore Bihar’s luminaries by their specific contribution to world thought, literature, mathematics, freedom, and justice.
        </p>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="space-y-3">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C8276] dark:text-[#948B80]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'नाम, क्षेत्र या जिले से खोजें...' : 'Search luminaries by name, field, or origin...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] text-xs sm:text-sm text-[#1E2124] dark:text-[#F5F1E8] placeholder-[#8C8276] dark:placeholder-[#948B80] focus:outline-hidden focus:ring-2 focus:ring-[#C85A32]/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8276] hover:text-[#1E2124] dark:hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Contribution Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CONTRIBUTION_FIELDS.map(field => {
            const isSelected = selectedField === field;
            const count = field === 'All'
              ? personalities.length
              : personalities.filter(p => p.field?.toLowerCase() === field.toLowerCase()).length;

            return (
              <button
                key={field}
                onClick={() => setSelectedField(field)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  isSelected
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                    : 'bg-[#FBF9F5] dark:bg-[#16191D] hover:bg-[#F4EFE6] dark:hover:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
                }`}
              >
                <span>{field}</span>
                <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-white/80' : 'text-[#8C8276] dark:text-[#948B80]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Grid */}
      {filteredPersonalities.length === 0 ? (
        <div className="p-12 text-center bg-[#FBF9F5] dark:bg-[#16191D] rounded-2xl border border-dashed border-[#EADBCE] dark:border-[#2E343B] space-y-3">
          <Users className="w-8 h-8 text-[#8C8276] dark:text-[#948B80] mx-auto opacity-50" />
          <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8]">
            {language === 'hi' ? 'कोई व्यक्तित्व नहीं मिला' : 'No Personalities Found'}
          </h3>
          <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] max-w-md mx-auto">
            {language === 'hi'
              ? 'कृपया दूसरा क्षेत्र चुनें या खोज शब्द बदलें।'
              : 'Try clearing your search query or selecting a different contribution field.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPersonalities.map(person => (
            <div
              key={person.id}
              onClick={() => onSelectPerson(person)}
              className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-5 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-[#C85A32]/40"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-[10px] font-bold uppercase tracking-wider">
                    {person.field}
                  </span>
                  <span className="text-[11px] font-mono text-[#2D3238]/60 dark:text-[#C8BFB4]/60">
                    {person.era}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors leading-snug">
                    {person.name}
                  </h4>
                  <div className="text-xs text-[#C85A32] dark:text-[#E06C43] font-semibold mt-0.5">
                    {person.hindiName} • {person.title}
                  </div>
                </div>

                <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-3 leading-relaxed">
                  {person.shortContribution || person.biography}
                </p>

                {person.majorAchievements && person.majorAchievements.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/60 dark:text-[#C8BFB4]/60 block">
                      Key Contribution
                    </span>
                    <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-2">
                      • {person.majorAchievements[0]}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
                <span className="text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-[#C85A32] dark:text-[#E06C43]" />
                  {person.districtOrigin?.replace('-', ' ').toUpperCase()}
                </span>

                <span className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{language === 'hi' ? 'गाथा पढ़ें' : 'Read Story'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
