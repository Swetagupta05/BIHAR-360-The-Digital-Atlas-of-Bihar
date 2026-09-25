import React from 'react';
import { Personality } from '../../types';
import { MapPin, ArrowRight, ExternalLink, Compass } from 'lucide-react';

interface PeoplePlacesSectionProps {
  personalities: Personality[];
  onSelectPerson: (person: Personality) => void;
  onSelectDistrict?: (districtId: string) => void;
  language: 'en' | 'hi';
}

export const PeoplePlacesSection: React.FC<PeoplePlacesSectionProps> = ({
  personalities,
  onSelectPerson,
  onSelectDistrict,
  language
}) => {
  // Personalities with rich "whyPlaceMatters" descriptions
  const placePersonalities = personalities.filter(p => p.districtOrigin && p.whyPlaceMatters);

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'व्यक्तित्व एवं जनपद' : 'People ↔ Places'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi'
              ? 'स्थान जो इतिहास के साक्षी बने'
              : 'Sacred Soil: Why the Places Matter'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Discover the geographic roots of Bihar’s icons and connect directly with each district’s living dossier.
        </p>
      </div>

      {/* Grid of People ↔ Place Relationship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {placePersonalities.map(person => {
          const districtId = person.districtOrigin!;
          const formattedDistrictName = districtId.replace('-', ' ');

          return (
            <div
              key={person.id}
              className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-5 hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#C85A32]/40"
            >
              <div className="space-y-3">
                {/* Person Header */}
                <div
                  onClick={() => onSelectPerson(person)}
                  className="cursor-pointer space-y-1"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60">
                    <span className="font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                      {person.field}
                    </span>
                    <span>{person.era}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors">
                    {person.name}
                  </h3>
                  <div className="text-xs text-[#C85A32] dark:text-[#E06C43] font-semibold">
                    {person.hindiName}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#8C8276] dark:text-[#948B80]">
                  <span>↓ Connected Place</span>
                </div>

                {/* Place Box */}
                <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E2124] dark:text-[#F5F1E8]">
                    <MapPin className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                    <span className="capitalize">{formattedDistrictName} District</span>
                  </div>
                  <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                    {person.whyPlaceMatters}
                  </p>
                </div>
              </div>

              {/* Bottom Actions: View Person vs Explore District Dossier */}
              <div className="pt-4 mt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectPerson(person)}
                  className="text-xs font-semibold text-[#2D3238] dark:text-[#C8BFB4] hover:text-[#C85A32] dark:hover:text-[#E06C43] transition-colors"
                >
                  {language === 'hi' ? 'गाथा पढ़ें' : 'Read Bio'}
                </button>

                {onSelectDistrict && (
                  <button
                    onClick={() => onSelectDistrict(districtId)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#C85A32]/10 hover:bg-[#C85A32] text-[#C85A32] hover:text-white dark:bg-[#C85A32]/20 dark:hover:bg-[#C85A32] dark:text-[#E06C43] dark:hover:text-white font-semibold transition-all"
                  >
                    <span>{formattedDistrictName} Dossier</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
