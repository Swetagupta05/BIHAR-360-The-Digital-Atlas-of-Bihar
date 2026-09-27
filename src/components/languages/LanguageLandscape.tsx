import React, { useState } from 'react';
import { Search, BookOpen, ScrollText, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { LanguageProfile } from '../../types';

interface LanguageLandscapeProps {
  languages: LanguageProfile[];
  language: 'en' | 'hi';
  onSelectLanguage: (lang: LanguageProfile) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const LanguageLandscape: React.FC<LanguageLandscapeProps> = ({
  languages,
  language,
  onSelectLanguage,
  onSelectDistrictById
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'hi' ? 'सभी भाषाएं एवं बोलियां' : 'All Voices' },
    { id: 'Constitutional Language', label: language === 'hi' ? 'संविधान की 8वीं अनुसूची' : 'Eighth Schedule' },
    { id: 'Official State Language', label: language === 'hi' ? 'राज्य की राजभाषाएं' : 'Official State Languages' },
    { id: 'Regional Literary Language', label: language === 'hi' ? 'क्षेत्रीय साहित्यिक भाषाएं' : 'Regional Literary Languages' },
    { id: 'Documented Speech Variety', label: language === 'hi' ? 'प्रामाणिक बोलियां' : 'Speech Varieties' }
  ];

  const filteredLanguages = languages.filter(lang => {
    const matchesCategory =
      selectedCategory === 'all' ||
      lang.category === selectedCategory ||
      (selectedCategory === 'Constitutional Language' &&
        (lang.id === 'maithili' || lang.id === 'hindi' || lang.id === 'urdu'));
    const matchesSearch =
      searchQuery.trim() === '' ||
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.localName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.primaryRegions.some(r => r.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lang.traditionalScripts.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="languages-landscape-section" className="space-y-6 mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
            <span>{language === 'hi' ? 'भाषाई मानचित्र' : 'Documented Language Landscape'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार के स्वर एवं साहित्यिक परंपराएं' : 'Explore Bihar’s Voices'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'आठवीं अनुसूची में मान्यता प्राप्त मैथिली से लेकर जन-जन की भोजपुरी, मगध की मगही, अंगिका, बज्जिका, सुरजापुरी, उर्दू और मानक हिंदी तक।'
              : 'Each entry represents a living cultural world documented in academic linguistics, literary history, and constitutional records.'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C8276] dark:text-[#948B80]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'भाषा, लिपि या क्षेत्र खोजें...' : 'Search by name, script, region...'}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-[#1E2124] dark:text-[#F5F1E8] focus:outline-hidden focus:border-[#C85A32] transition-colors"
          />
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white dark:bg-[#1E2227] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLanguages.map(lang => (
          <article
            key={lang.id}
            onClick={() => onSelectLanguage(lang)}
            className="group cursor-pointer rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Card Banner */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-[10px] font-mono font-semibold uppercase tracking-wider">
                  {lang.category}
                </span>

                <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#948B80]">
                  {lang.primaryRegions.join(' • ')}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors">
                  {lang.name}
                </h3>
                <p className="font-serif text-sm text-[#C85A32] dark:text-[#E06C43] mt-0.5">
                  {lang.localName}
                </p>
              </div>

              <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed line-clamp-3">
                {lang.overview}
              </p>

              {/* Sample Phrase Callout */}
              <div className="p-3.5 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#948B80] block">
                  Conversational Greeting:
                </span>
                <p className="font-serif text-xs text-[#1E2124] dark:text-[#F5F1E8] font-medium">
                  "{lang.samplePhrase.text}"
                </p>
                <p className="text-[11px] text-[#8C8276] dark:text-[#948B80] italic">
                  — {lang.samplePhrase.meaning}
                </p>
              </div>

              {/* Traditional Scripts Badges */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#948B80] block">
                  Traditional Writing Systems:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {lang.traditionalScripts.map((sc, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg bg-[#F4EFE6] dark:bg-[#252A30] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] font-medium"
                    >
                      {sc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar: Action link & Census note */}
            <div className="px-6 py-4 bg-[#FBF9F5] dark:bg-[#16191D] border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-[#8C8276] dark:text-[#948B80] truncate max-w-[170px]">
                {lang.notableFigures.length} Literary Figures
              </span>

              <span className="font-semibold text-[#C85A32] dark:text-[#E06C43] group-hover:underline flex items-center gap-1 flex-shrink-0">
                <span>View Documentary Profile</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
