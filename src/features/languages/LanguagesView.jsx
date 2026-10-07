import React, { useState } from 'react';
import { BIHAR_LANGUAGES, SCRIPTS_OF_BIHAR } from '../../data/languages';
import { resolveTranslationLanguage } from '../../data/interfaceLanguages';
import { LanguageHero } from '../../components/languages/LanguageHero';
import { VoicesOfBiharIntro } from '../../components/languages/VoicesOfBiharIntro';
import { LanguageLandscape } from '../../components/languages/LanguageLandscape';
import { LanguageRegionSection } from '../../components/languages/LanguageRegionSection';
import { ScriptsSection } from '../../components/languages/ScriptsSection';
import { OralTraditionsSection } from '../../components/languages/OralTraditionsSection';
import { TopicLocalizationSection } from '../../components/languages/TopicLocalizationSection';
import { LanguageDetailModal } from '../../components/languages/LanguageDetailModal';
import { ShieldCheck } from 'lucide-react';

export const LanguagesView = ({
  language,
  onNavigateTab,
  onSelectDistrictById,
  onSelectPersonality
}) => {
  const [selectedLanguageProfile, setSelectedLanguageProfile] = useState(null);
  const effectiveLang = resolveTranslationLanguage(language);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-12 animate-fade-in">
      {/* 1. Hero Section */}
      <LanguageHero
        language={effectiveLang}
        onExploreLanguages={() => scrollToSection('languages-landscape-section')}
        onExploreScripts={() => scrollToSection('scripts-section')}
        onExploreOralTraditions={() => scrollToSection('oral-traditions-section')}
      />

      {/* 2. Editorial Introduction: The Voices of Bihar */}
      <VoicesOfBiharIntro language={effectiveLang} />

      {/* 3. Documented Language Landscape (Interactive Catalog) */}
      <LanguageLandscape
        languages={BIHAR_LANGUAGES}
        language={effectiveLang}
        onSelectLanguage={setSelectedLanguageProfile}
        onSelectDistrictById={onSelectDistrictById}
      />

      {/* 4. Language × Region Bidirectional Interactive Map */}
      <LanguageRegionSection
        languages={BIHAR_LANGUAGES}
        language={effectiveLang}
        onSelectLanguage={setSelectedLanguageProfile}
        onSelectDistrictById={onSelectDistrictById}
      />

      {/* 5. Scripts of Bihar: Calligraphic & Scribal Heritage */}
      <ScriptsSection
        scripts={SCRIPTS_OF_BIHAR}
        language={effectiveLang}
      />

      {/* 6. Living Oral Traditions & Theatrical Voices */}
      <OralTraditionsSection
        languages={BIHAR_LANGUAGES}
        language={effectiveLang}
        onSelectLanguage={setSelectedLanguageProfile}
        onNavigateTab={onNavigateTab}
      />

      {/* 7. Topic-Level Localization Demonstration */}
      <TopicLocalizationSection language={effectiveLang} />

      {/* 8. Sourcing & Academic Rigor Footer */}
      <section className="mt-16 pt-8 border-t border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#8C8276] dark:text-[#A89F93]">
        <div className="rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] p-6 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
            <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
            <span>Linguistic Methodology, Sourcing & Constitutional Documentation</span>
          </div>

          <p className="leading-relaxed">
            The Languages & Voices documentation in Bihar 360 follows strict academic and constitutional standards:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="space-y-1">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block">
                Constitutional Status
              </span>
              <p className="text-[11px] leading-relaxed">
                Eighth Schedule to the Constitution of India (incorporation of Maithili, 92nd Amendment Act 2003); Bihar Official Language Acts of 1950 and 1980 (Urdu as Second Official Language).
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block">
                Linguistic Surveys
              </span>
              <p className="text-[11px] leading-relaxed">
                George Abraham Grierson, <em>Linguistic Survey of India</em> (Vol. V, Indo-Aryan Family, Eastern Group); Suniti Kumar Chatterji, <em>The Origin and Development of the Bengali Language</em> (discussion of Bihari group).
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block">
                Literary Recognition
              </span>
              <p className="text-[11px] leading-relaxed">
                Sahitya Akademi (National Academy of Letters) recognition criteria; Bihar Rashtrabhasha Parishad; Maithili, Bhojpuri, and Magahi Academies of the Government of Bihar.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block">
                Scribal History
              </span>
              <p className="text-[11px] leading-relaxed">
                Unicode Technical Consortium proposals for Tirhuta (L2/11-175R) and Kaithi (L2/08-002); historical court archives of the Patna High Court and Bihar State Archives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Profile Detail Modal */}
      {selectedLanguageProfile && (
        <LanguageDetailModal
          languageProfile={selectedLanguageProfile}
          onClose={() => setSelectedLanguageProfile(null)}
          language={effectiveLang}
          onNavigateTab={onNavigateTab}
          onSelectDistrictById={onSelectDistrictById}
          onSelectPersonality={onSelectPersonality}
        />
      )}
    </div>
  );
};
