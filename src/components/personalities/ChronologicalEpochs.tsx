import React, { useState } from 'react';
import { Personality } from '../../types';
import { Clock, Calendar, ArrowRight, Quote, MapPin, Sparkles } from 'lucide-react';

interface ChronologicalEpochsProps {
  personalities: Personality[];
  onSelectPerson: (person: Personality) => void;
  language: 'en' | 'hi';
}

type EpochKey = 'Ancient Bihar' | 'Medieval Bihar' | 'Colonial / Freedom Movement' | 'Modern Bihar' | 'Contemporary Bihar';

interface EpochMeta {
  key: EpochKey;
  timeRange: string;
  hindiTitle: string;
  narrative: string;
}

const EPOCHS: EpochMeta[] = [
  {
    key: 'Ancient Bihar',
    timeRange: '6th Century BCE – 6th Century CE',
    hindiTitle: 'प्राचीन बिहार: दर्शन, विज्ञान एवं साम्राज्य',
    narrative: 'The cradle of world philosophy, mathematics, and early democratic republics. Along the fertile plains of Magadha and Vaishali, seekers challenged dogma, calculated planetary orbits, and established imperial welfare statecraft.'
  },
  {
    key: 'Medieval Bihar',
    timeRange: '8th – 17th Century CE',
    hindiTitle: 'मध्यकालीन बिहार: भक्ति, साहित्य एवं प्रशासनिक वैभव',
    narrative: 'An epoch of supreme metaphysical debates in Mithila, lyrical Bhakti literature, infrastructural mastery under Sher Shah Suri, and the birth of martial-spiritual traditions along the banks of the Ganges in Patna.'
  },
  {
    key: 'Colonial / Freedom Movement',
    timeRange: '1777 – 1947 CE',
    hindiTitle: 'औपनिवेशिक काल एवं स्वतंत्रता संग्राम',
    narrative: 'From the eighty-year-old warrior Veer Kunwar Singh routing British garrisons in 1857 to the Champaran indigo resistance of 1917 and Dr. Rajendra Prasad guiding the Constituent Assembly to forge the Republic of India.'
  },
  {
    key: 'Modern Bihar',
    timeRange: '1947 – 2000 CE',
    hindiTitle: 'आधुनिक बिहार: सामाजिक न्याय एवं सांस्कृतिक पुनर्जागरण',
    narrative: 'The crucible of democratic renewal and literary excellence. Jayaprakash Narayan spearheaded Total Revolution, Karpoori Thakur pioneered affirmative action, Dinkar gave voice to independent India, and Dashrath Manjhi conquered stone.'
  },
  {
    key: 'Contemporary Bihar',
    timeRange: '2000 – Present',
    hindiTitle: 'समकालीन बिहार: शिक्षा, लोककला एवं लोकस्वर',
    narrative: 'Contemporary icons transforming education, folk art, and musical heritage. From Super 30 democratizing elite engineering to Dulari Devi breaking art barriers and Sharda Sinha enshrining the spiritual soul of Chhath.'
  }
];

export const ChronologicalEpochs: React.FC<ChronologicalEpochsProps> = ({
  personalities,
  onSelectPerson,
  language
}) => {
  const [selectedEpoch, setSelectedEpoch] = useState<EpochKey>('Ancient Bihar');

  const activeMeta = EPOCHS.find(e => e.key === selectedEpoch) || EPOCHS[0];
  const epochPeople = personalities.filter(p => p.eraPeriod === selectedEpoch);

  return (
    <section className="space-y-6">
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            {language === 'hi' ? 'कालक्रम यात्रा' : 'Chronological Journey'}
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'समय की धारा में बिहार के व्यक्तित्व' : 'People Through Time'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Discover the thinkers, warriors, and visionaries across five pivotal eras of Bihar’s living chronicle.
        </p>
      </div>

      {/* Epoch Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {EPOCHS.map(epoch => {
          const isSelected = selectedEpoch === epoch.key;
          const count = personalities.filter(p => p.eraPeriod === epoch.key).length;
          return (
            <button
              key={epoch.key}
              onClick={() => setSelectedEpoch(epoch.key)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                isSelected
                  ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                  : 'bg-[#FBF9F5] dark:bg-[#16191D] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B] hover:bg-[#F4EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{epoch.key}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#EADBCE] dark:bg-[#2E343B] text-[#2D3238] dark:text-[#C8BFB4]'
                  }`}
                >
                  {count}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Epoch Curatorial Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C85A32] dark:text-[#E06C43]">
            <Clock className="w-3.5 h-3.5" />
            <span>{activeMeta.timeRange}</span>
          </div>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1E2124] dark:text-[#F5F1E8]">
            {language === 'hi' ? activeMeta.hindiTitle : activeMeta.key}
          </h3>
          <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
            {activeMeta.narrative}
          </p>
        </div>
      </div>

      {/* People Grid for Active Epoch */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {epochPeople.map(person => (
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
                  {person.hindiName}
                </div>
              </div>

              <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] line-clamp-3 leading-relaxed">
                {person.shortContribution || person.biography}
              </p>

              {person.quotes && person.quotes.length > 0 && (
                <div className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-[#1E2227] border-l-2 border-[#C85A32] text-xs italic text-[#2D3238] dark:text-[#C8BFB4] flex items-start gap-2">
                  <Quote className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">"{person.quotes[0]}"</span>
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
              <span className="text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-[#C85A32] dark:text-[#E06C43]" />
                {person.districtOrigin?.replace('-', ' ').toUpperCase()}
              </span>

              <span className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{language === 'hi' ? 'गाथा देखें' : 'View Story'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
