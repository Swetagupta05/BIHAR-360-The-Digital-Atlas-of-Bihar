import React from 'react';
import { Users, ArrowRight, Quote } from 'lucide-react';

interface PeopleSectionProps {
  onNavigatePeople: () => void;
}

export const PeopleSection: React.FC<PeopleSectionProps> = ({
  onNavigatePeople
}) => {
  const thinkers = [
    {
      name: 'Gautama Buddha',
      hindiName: 'गौतम बुद्ध',
      title: 'The Awakened One',
      era: '6th – 5th Century BCE',
      district: 'Gaya & Rajgir',
      quote: 'Peace comes from within. Do not seek it without.',
      story: 'Sought truth across Magadha, attained supreme Bodhi beneath the pipal tree at Bodh Gaya, and taught the Middle Path (Madhyama-pratipat) that transformed global thought.'
    },
    {
      name: 'Lord Mahavira',
      hindiName: 'भगवान महावीर',
      title: '24th Jain Tirthankara',
      era: '6th Century BCE',
      district: 'Vaishali (Kundalpur)',
      quote: 'Non-injury to any living being is the highest religion.',
      story: 'Born in the Licchavi republic of Vaishali; codified the foundational principles of Ahimsa (Universal Non-violence) and Anekantavada (multi-faceted perspective of truth).'
    },
    {
      name: 'Aryabhata',
      hindiName: 'आर्यभट्ट',
      title: 'Astronomer & Mathematician',
      era: '476 – 550 CE',
      district: 'Patna (Taregna Observatory)',
      quote: 'The spherical earth rotates on its axis, while stars appear to move westward.',
      story: 'Formulated the mathematical value of Pi (3.1416), introduced sine tables, and proved earth’s axial rotation from his Taregna observatory near Pataliputra at age 23.'
    },
    {
      name: 'Dr. Rajendra Prasad',
      hindiName: 'डॉ. राजेन्द्र प्रसाद',
      title: 'First President of India & Statesman',
      era: '1884 – 1963 CE',
      district: 'Siwan (Ziradei)',
      quote: 'In drafting the Constitution, we sought to preserve the soul of our ancient civilization.',
      story: 'Supreme legal mind, freedom fighter, and president of the Constituent Assembly who guided free India’s foundational constitutional framework with humility and intellect.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6] dark:bg-[#141619] border-y border-[#EADBCE]/70 dark:border-[#2E343B] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
              <Users className="w-3.5 h-3.5" />
              <span>Philosophers, Astronomers & Statesmen</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-hindi-title text-[#14171A] dark:text-[#F5F1E8] leading-tight mb-2">
              वे लोग जिन्होंने बिहार की कहानी लिखी
            </h2>

            <p className="text-xl sm:text-2xl font-serif text-[#C85A32] italic">
              People Who Shaped Bihar & Human History
            </p>
          </div>

          <button
            onClick={onNavigatePeople}
            id="people-view-all-btn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors self-start md:self-auto group"
          >
            <span>Read all biographical profiles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Editorial Profiles Grid (Asymmetric & Typographic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {thinkers.map((person, idx) => (
            <div
              key={idx}
              onClick={onNavigatePeople}
              className="bg-white dark:bg-[#1A1D20] rounded-3xl p-6 sm:p-7 border border-[#EADBCE] dark:border-[#2E343B] shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8C5B3E] dark:text-[#E0A882]">
                  <span>{person.era}</span>
                  <span className="px-2 py-0.5 rounded bg-[#F5EFE6] dark:bg-[#252A30] font-semibold text-[#C85A32] dark:text-[#E06C43]">
                    {person.district}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                    {person.name}
                  </h3>
                  <div className="text-sm font-hindi-text text-[#A54420] dark:text-[#E06C43] font-semibold">
                    {person.hindiName}
                  </div>
                  <div className="text-xs text-[#8C5B3E] dark:text-[#E0A882] font-medium mt-0.5">
                    {person.title}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FBF9F5] dark:bg-[#151719] border border-[#EADBCE]/60 dark:border-[#2E343B] text-xs italic text-[#2D3238] dark:text-[#C8BFB4] font-serif relative">
                  <Quote className="w-3.5 h-3.5 text-[#C85A32]/40 absolute top-2 right-2" />
                  “{person.quote}”
                </div>

                <p className="text-xs text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed">
                  {person.story}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EADBCE]/50 dark:border-[#2E343B] flex items-center justify-between text-xs text-[#C85A32] font-semibold">
                <span>View historical legacy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
