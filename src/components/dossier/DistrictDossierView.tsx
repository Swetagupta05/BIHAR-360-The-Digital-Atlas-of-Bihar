import React from 'react';
import { District } from '../../types';
import { DistrictHero } from './DistrictHero';
import { DistrictQuickFacts } from './DistrictQuickFacts';
import { DistrictSectionNav } from './DistrictSectionNav';
import { DistrictOverview } from './DistrictOverview';
import { DistrictLandscape } from './DistrictLandscape';
import { DistrictKnownFor } from './DistrictKnownFor';
import { DistrictCulture } from './DistrictCulture';
import { DistrictFood } from './DistrictFood';
import { DistrictPlaces } from './DistrictPlaces';
import { DistrictHistory } from './DistrictHistory';
import { DistrictStories } from './DistrictStories';
import { DistrictMapAndTravel } from './DistrictMapAndTravel';
import { DistrictSources } from './DistrictSources';
import { DistrictRelated } from './DistrictRelated';

interface DistrictDossierViewProps {
  district: District;
  onBack: () => void;
  onSelectDistrict: (district: District) => void;
  isBookmarked: boolean;
  onToggleBookmark: (district: District) => void;
  language: 'en' | 'hi';
  onLanguageToggle?: () => void;
}

export const DistrictDossierView: React.FC<DistrictDossierViewProps> = ({
  district,
  onBack,
  onSelectDistrict,
  isBookmarked,
  onToggleBookmark,
  language,
  onLanguageToggle
}) => {
  const [activeSection, setActiveSection] = React.useState<string>('overview');

  // Scroll to section handler
  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Observe active section on scroll
  React.useEffect(() => {
    const sectionIds = [
      'overview',
      'landscape',
      'known-for',
      'culture',
      'flavors',
      'places',
      'history',
      'stories',
      'travel',
      'sources'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sectionIds[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article 
      className="min-h-screen bg-[#FBF9F5] dark:bg-[#0F1113] text-[#1E2124] dark:text-[#F5F1E8] animate-in fade-in duration-200 transition-colors duration-200"
      id="district-dossier-article"
    >
      {/* Editorial Hero Header */}
      <DistrictHero
        district={district}
        isBookmarked={isBookmarked}
        onToggleBookmark={onToggleBookmark}
        onBack={onBack}
        language={language}
        onLanguageToggle={onLanguageToggle}
      />

      {/* Structured Statistical & Administrative Facts Strip */}
      <DistrictQuickFacts
        district={district}
        language={language}
      />

      {/* Sticky Section Navigator */}
      <DistrictSectionNav
        activeSection={activeSection}
        onNavigate={handleNavigateSection}
        language={language}
      />

      {/* Dossier Content Stream */}
      <div className="w-full">
        {/* Section 1: Overview */}
        <DistrictOverview
          district={district}
          language={language}
        />

        {/* Section 2: Landscape & Climate */}
        <DistrictLandscape
          district={district}
          language={language}
        />

        {/* Section 3: Distinct Identity & Known For */}
        <DistrictKnownFor
          district={district}
          language={language}
        />

        {/* Section 4: Dialects, Living Culture & Traditions */}
        <DistrictCulture
          district={district}
          language={language}
        />

        {/* Section 5: Flavors, GI Tags & Agriculture */}
        <DistrictFood
          district={district}
          language={language}
        />

        {/* Section 6: Places to Discover & Archaeological Monuments */}
        <DistrictPlaces
          district={district}
          language={language}
        />

        {/* Section 7: Historical Chronology & Arc */}
        <DistrictHistory
          district={district}
          language={language}
        />

        {/* Section 8: Literary & Oral Memory */}
        <DistrictStories
          district={district}
          language={language}
        />

        {/* Section 9: Geographic Atlas & Travel Circuits */}
        <DistrictMapAndTravel
          district={district}
          onSelectDistrict={onSelectDistrict}
          language={language}
        />

        {/* Section 10: Sources, Census & Archival Attributions */}
        <DistrictSources
          district={district}
          language={language}
        />

        {/* Related Nearby Districts in the Division/Region */}
        <DistrictRelated
          currentDistrict={district}
          onSelectDistrict={onSelectDistrict}
          language={language}
        />
      </div>
    </article>
  );
};
