import React, { useState } from 'react';
import { Personality } from '../../types';
import { BookOpen, Feather, ArrowRight, MapPin, Languages } from 'lucide-react';

interface LiteraryLinguisticTraditionsProps {
  personalities: Personality[];
  onSelectPerson: (person: Personality) => void;
  language: 'en' | 'hi';
}

type LangFilter = 'All' | 'Hindi' | 'Maithili' | 'Bhojpuri' | 'Magahi' | 'Pali / Prakrit' | 'Classical Sanskrit';

export const LiteraryLinguisticTraditions: React.FC<LiteraryLinguisticTraditionsProps> = ({
  personalities,
  onSelectPerson,
  language
}) => {
  const [selectedLang, setSelectedLang] = useState<LangFilter>('All');

  // Filter personalities with language associations
  const linguisticPersonalities = personalities.filter(p => {
    if (!p.languageAssociation) return false;
    if (selectedLang === 'All') return true;
    return p.languageAssociation.language.toLowerCase().includes(selectedLang.toLowerCase());
  });

  const languagePills: LangFilter[] = [
    'All',
    'Hindi',
    'Maithili',
    'Bhojpuri',
    'Magahi',
    'Pali / Prakrit',
    'Classical Sanskrit'
  ];

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Languages className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'भाषा एवं साहित्य' : 'Literature & Languages'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi'
              ? 'शब्द, वाणी एवं भाषाई परंपरा'
              : 'The Living Words: Linguistic Traditions'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          Tracing how Bihar’s distinct tongues—Hindi, Maithili, Bhojpuri, Magahi, and classical Prakrit—shaped national consciousness.
        </p>
      </div>

      {/* Language Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {languagePills.map(lang => {
          const isSelected = selectedLang === lang;
          return (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border whitespace-nowrap ${
                isSelected
                  ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                  : 'bg-[#FBF9F5] dark:bg-[#16191D] hover:bg-[#F4EFE6] dark:hover:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
              }`}
            >
              {lang}
            </button>
          );
        })}
      </div>

      {/* Relationship Flow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {linguisticPersonalities.map(person => {
          const langAssoc = person.languageAssociation!;
          return (
            <div
              key={person.id}
              onClick={() => onSelectPerson(person)}
              className="bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl p-5 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-[#C85A32]/40"
            >
              <div className="space-y-4">
                {/* Person Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors">
                      {person.name}
                    </h3>
                    <div className="text-xs text-[#C85A32] dark:text-[#E06C43] font-semibold">
                      {person.hindiName}
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-xs font-bold">
                    {langAssoc.language}
                  </span>
                </div>

                {/* Structured Relationship Diagram: Person → Language → Contribution → Region */}
                <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#948B80]">
                    <Feather className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                    <span>Literary Tradition / Key Creation</span>
                  </div>
                  <div className="font-serif font-semibold text-sm text-[#1E2124] dark:text-[#F5F1E8]">
                    {langAssoc.keyWorkOrTradition}
                  </div>
                  <p className="text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                    {langAssoc.contribution}
                  </p>
                </div>
              </div>

              {/* Region & Explore Action */}
              <div className="pt-4 mt-4 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between text-xs">
                <span className="text-[#2D3238]/70 dark:text-[#C8BFB4]/70 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Region: <strong className="text-[#1E2124] dark:text-[#F5F1E8]">{langAssoc.region}</strong></span>
                </span>

                <span className="font-semibold text-[#C85A32] dark:text-[#E06C43] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{language === 'hi' ? 'गाथा देखें' : 'View Profile'}</span>
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
