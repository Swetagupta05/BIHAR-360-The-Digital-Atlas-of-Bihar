import React, { useState } from 'react';
import { ScrollText, BookOpen, Layers, Feather, Sparkles, ExternalLink, HelpCircle } from 'lucide-react';
import { ScriptProfile } from '../../types';

interface ScriptsSectionProps {
  scripts: ScriptProfile[];
  language: 'en' | 'hi';
}

export const ScriptsSection: React.FC<ScriptsSectionProps> = ({ scripts, language }) => {
  const [selectedScriptId, setSelectedScriptId] = useState<string>('tirhuta');
  const [selectedGlyphIndex, setSelectedGlyphIndex] = useState<number | null>(null);

  const selectedScript = scripts.find(s => s.id === selectedScriptId) || scripts[0];

  return (
    <section id="scripts-section" className="space-y-8 mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-semibold uppercase tracking-wider">
            <ScrollText className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'लिपियों की धरोहर' : 'Calligraphic & Scribal Heritage'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार की ऐतिहासिक लिपियां' : 'Scripts of Bihar: The Written Memory'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'भाषा और लिपि एक नहीं हैं। सदियों तक बिहार में भोजपुरी और मगही कैथी लिपि में लिखी गईं, मैथिली तिरहुता में सहेजी गई, और उर्दू नस्तलीक़ में पुष्पित हुई।'
              : 'A fundamental truth of linguistics: Language ≠ Script. Explore how Tirhuta palm-leaf manuscripts, Kaithi legal deeds, Nastaliq gazettes, and modern Devanagari have chronicled Bihar’s history.'}
          </p>
        </div>

        {/* Script ≠ Language Principle Callout */}
        <div className="p-3 rounded-2xl bg-[#F5EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] text-[#5A524A] dark:text-[#A89F93] max-w-xs space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>The Scribal Principle</span>
          </div>
          <p className="leading-snug">
            A single language can be scribed in multiple scripts, and a single script historically crossed linguistic boundaries.
          </p>
        </div>
      </div>

      {/* Script Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {scripts.map(script => {
          const isSelected = selectedScriptId === script.id;
          return (
            <button
              key={script.id}
              onClick={() => {
                setSelectedScriptId(script.id);
                setSelectedGlyphIndex(null);
              }}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'border-[#C85A32] bg-[#FBF9F5] dark:bg-[#1E2227] shadow-sm ring-1 ring-[#C85A32]'
                  : 'border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-serif text-[#C85A32] mb-1 font-bold">
                {script.visualGlyphs[0]?.char || 'क'}
              </div>
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#1E2124] dark:text-[#F5F1E8]">
                {script.name}
              </h3>
              <p className="text-[11px] text-[#8C8276] dark:text-[#A89F93] font-hindi-text truncate">
                {script.hindiName}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Script Detail Showcase */}
      <div className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Script Narrative & Context */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] dark:text-[#E06C43] font-semibold">
                  {selectedScript.historicalEra}
                </span>
                {selectedScript.unicodeRange && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F0E8DD] dark:bg-[#252A30] text-[#5A524A] dark:text-[#C8BFB4]">
                    {selectedScript.unicodeRange}
                  </span>
                )}
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
                {selectedScript.name} ({selectedScript.hindiName})
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
              {selectedScript.description}
            </p>

            {/* Cultural & Scribal Note */}
            <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] font-semibold block">
                {language === 'hi' ? 'सांस्कृतिक एवं प्रशासनिक संदर्भ' : 'Historical & Archival Impact'}
              </span>
              <p className="text-xs text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                {selectedScript.culturalNote}
              </p>
            </div>

            {/* Languages Scribed Using this Script */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
                {language === 'hi' ? 'इस लिपि से जुड़ी भाषाएं' : 'Associated Languages & Dialects'}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedScript.languagesAssociated.map(langName => (
                  <span
                    key={langName}
                    className="px-3 py-1 rounded-lg bg-[#F5EFE6] dark:bg-[#252A30] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                  >
                    {langName}
                  </span>
                ))}
              </div>
            </div>

            {/* Status Today */}
            <div className="pt-2 text-xs text-[#8C8276] dark:text-[#A89F93]">
              <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Status Today: </strong>
              <span>{selectedScript.statusToday}</span>
            </div>
          </div>

          {/* Right Column: Visual Calligraphic & Glyph Display */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Primary Native Manuscript Sample Plaque */}
            <div className="rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-gradient-to-br from-[#FBF9F5] to-[#F5EFE6] dark:from-[#1E2227] dark:to-[#16191D] p-6 text-center space-y-3 shadow-inner">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
                Native Script Inscription Sample
              </span>
              <div className="font-serif text-3xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] font-bold py-2 tracking-wide">
                {selectedScript.nativeSample}
              </div>
              <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] italic font-serif max-w-sm mx-auto">
                “{selectedScript.nativeSampleTranslation}”
              </p>
            </div>

            {/* Interactive Glyphs Character Palette */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                  Interactive Character Palette (Click to inspect)
                </span>
                {selectedGlyphIndex !== null && (
                  <span className="text-xs font-mono text-[#C85A32]">
                    {selectedScript.visualGlyphs[selectedGlyphIndex]?.name} ({selectedScript.visualGlyphs[selectedGlyphIndex]?.roman})
                  </span>
                )}
              </div>

              <div className="grid grid-cols-5 gap-2">
                {selectedScript.visualGlyphs.map((glyph, idx) => {
                  const isActive = selectedGlyphIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedGlyphIndex(idx)}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        isActive
                          ? 'border-[#C85A32] bg-[#C85A32] text-white shadow-sm scale-105'
                          : 'border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1E2227] text-[#1E2124] dark:text-[#F5F1E8] hover:border-[#C85A32]'
                      }`}
                    >
                      <span className="text-2xl font-serif font-bold leading-none mb-1">
                        {glyph.char}
                      </span>
                      <span className={`text-[10px] font-mono ${isActive ? 'text-white/90' : 'text-[#8C8276]'}`}>
                        {glyph.roman}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scribal Quote / Calligraphy Insight */}
            <div className="p-4 rounded-xl border border-dashed border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block mb-1">
                Preserving Bihar’s Manuscript Heritage
              </span>
              Over three centuries of legal land records across Bihar collectorates were preserved in cursive Kaithi, while monastic and courtly literature flourished on palm leaves inscribed in Tirhuta.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
