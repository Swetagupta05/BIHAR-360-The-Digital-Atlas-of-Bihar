import React, { useState } from 'react';
import { Languages, Sparkles, BookOpen, Quote, HelpCircle } from 'lucide-react';
import { TOPIC_LOCALIZATION_SAMPLES } from '../../data/languages';
import { LocalizedTopicText } from '../../types';

interface TopicLocalizationSectionProps {
  language: 'en' | 'hi';
}

export const TopicLocalizationSection: React.FC<TopicLocalizationSectionProps> = ({ language }) => {
  const [activeSampleId, setActiveSampleId] = useState<string>('chhath-prasad-blessing');
  const [verseLanguage, setVerseLanguage] = useState<'en' | 'hi' | 'regional'>('regional');

  const currentSample =
    TOPIC_LOCALIZATION_SAMPLES.find(s => s.id === activeSampleId) ||
    TOPIC_LOCALIZATION_SAMPLES[0];

  const getActiveVerseText = (translations: LocalizedTopicText): { text: string; langTag: string } => {
    if (verseLanguage === 'en') {
      return { text: translations.en, langTag: 'English' };
    }
    if (verseLanguage === 'hi') {
      return { text: translations.hi, langTag: 'Standard Hindi' };
    }
    // Regional original
    if (translations.mai) return { text: translations.mai, langTag: 'Maithili (मैथिली)' };
    if (translations.bho) return { text: translations.bho, langTag: 'Bhojpuri (भोजपुरी)' };
    if (translations.mag) return { text: translations.mag, langTag: 'Magahi (मगही)' };
    return { text: translations.hi, langTag: 'Hindi' };
  };

  const { text: displayedVerse, langTag: displayedLangTag } = getActiveVerseText(
    currentSample.translations
  );

  return (
    <section id="topic-localization-section" className="space-y-8 mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-semibold uppercase tracking-wider">
            <Languages className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'प्रकरण-स्तरीय स्थानीयकरण' : 'Topic-Level Nuance'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi'
              ? 'जब कविता अपनी मूल बोली में गूंजती है'
              : 'Beyond Global UI: Topic-Level Translation'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'भाषा केवल ऐप के मेन्यू बदलने का नाम नहीं है। देखिए कैसे एक ही पावन मंत्र या लोकगीत अपनी मूल क्षेत्रीय बोली, हिंदी और अंग्रेजी में अलग-अलग संवेदनात्मक अनुगूंज छोड़ता है।'
              : 'True linguistic appreciation goes deeper than generic UI buttons. Toggle individual verses between their original vernacular expression, Hindi, and English without altering global navigation.'}
          </p>
        </div>

        {/* Informational Tooltip Plaque */}
        <div className="p-3 rounded-2xl bg-[#F5EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] text-[#5A524A] dark:text-[#A89F93] max-w-xs space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Nuanced Vernacular Fidelity</span>
          </div>
          <p className="leading-snug">
            Preserves poetic rhythm, local idiom, and sacred sanctity that get flattened in machine translation.
          </p>
        </div>
      </div>

      {/* Main Interactive Showcase */}
      <div className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Sample Selector */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
              {language === 'hi' ? 'उदाहरण पद्य का चयन करें' : 'Select Cultural Passage'}
            </span>

            {TOPIC_LOCALIZATION_SAMPLES.map(sample => {
              const isSelected = activeSampleId === sample.id;
              return (
                <button
                  key={sample.id}
                  onClick={() => setActiveSampleId(sample.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? 'border-[#C85A32] bg-[#FBF9F5] dark:bg-[#1E2227] shadow-xs ring-1 ring-[#C85A32]'
                      : 'border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
                  }`}
                >
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#1E2124] dark:text-[#F5F1E8]">
                    {sample.topicTitle}
                  </h3>
                  <p className="text-xs text-[#8C8276] dark:text-[#A89F93] line-clamp-2 mt-1">
                    {sample.culturalContext}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Verse Rendering Canvas */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            {/* Language Switcher for THIS Verse */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0E8DD] dark:border-[#2E343B] pb-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                  Passage Register
                </span>
                <div className="text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
                  Rendering: <span className="text-[#C85A32]">{displayedLangTag}</span>
                </div>
              </div>

              {/* Toggle Buttons */}
              <div className="inline-flex rounded-xl bg-[#F5EFE6] dark:bg-[#252A30] p-1 border border-[#EADBCE] dark:border-[#2E343B]">
                <button
                  onClick={() => setVerseLanguage('regional')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    verseLanguage === 'regional'
                      ? 'bg-white dark:bg-[#16191D] text-[#C85A32] shadow-xs'
                      : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
                  }`}
                >
                  Regional Original
                </button>
                <button
                  onClick={() => setVerseLanguage('hi')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    verseLanguage === 'hi'
                      ? 'bg-white dark:bg-[#16191D] text-[#C85A32] shadow-xs'
                      : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
                  }`}
                >
                  Standard Hindi
                </button>
                <button
                  onClick={() => setVerseLanguage('en')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    verseLanguage === 'en'
                      ? 'bg-white dark:bg-[#16191D] text-[#C85A32] shadow-xs'
                      : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Inscription Quote Box */}
            <div className="rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-gradient-to-br from-[#FBF9F5] to-[#F5EFE6] dark:from-[#1E2227] dark:to-[#16191D] p-6 sm:p-8 space-y-4 shadow-inner relative">
              <Quote className="w-8 h-8 text-[#C85A32]/20 absolute top-4 right-4" />

              <div className="font-serif text-lg sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8] font-medium leading-relaxed italic">
                “{displayedVerse}”
              </div>

              <div className="pt-3 border-t border-[#EADBCE] dark:border-[#2E343B]/60 flex items-center justify-between text-xs text-[#8C8276] dark:text-[#A89F93]">
                <span className="font-mono uppercase tracking-wider text-[10px]">
                  {currentSample.culturalContext}
                </span>
                <span className="font-serif italic font-medium text-[#C85A32]">
                  {currentSample.topicTitle}
                </span>
              </div>
            </div>

            {/* Editorial Explanation */}
            <div className="p-4 rounded-xl bg-[#FBF9F5] dark:bg-[#1B1E22] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
              <strong className="text-[#1E2124] dark:text-[#F5F1E8] block mb-1 font-semibold">
                Linguistic Observation:
              </strong>
              {currentSample.englishExplanation}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
