import React from 'react';

interface DistrictSectionNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  language: 'en' | 'hi';
}

export const DistrictSectionNav: React.FC<DistrictSectionNavProps> = ({
  activeSection,
  onNavigate,
  language
}) => {
  const sections = [
    { id: 'overview', label: language === 'hi' ? 'परिचय' : 'Overview' },
    { id: 'landscape', label: language === 'hi' ? 'भूगोल व स्वरूप' : 'Landscape' },
    { id: 'known-for', label: language === 'hi' ? 'विशिष्ट पहचान' : 'Known For' },
    { id: 'culture', label: language === 'hi' ? 'भाषा व संस्कृति' : 'Culture' },
    { id: 'flavors', label: language === 'hi' ? 'स्वाद' : 'Flavors' },
    { id: 'places', label: language === 'hi' ? 'दर्शनीय स्थल' : 'Places' },
    { id: 'history', label: language === 'hi' ? 'इतिहास' : 'History' },
    { id: 'stories', label: language === 'hi' ? 'गाथाएँ' : 'Stories' },
    { id: 'travel', label: language === 'hi' ? 'यात्रा व मानचित्र' : 'Travel & Map' },
    { id: 'sources', label: language === 'hi' ? 'स्रोत' : 'Sources' }
  ];

  return (
    <nav
      aria-label="District dossier sections"
      className="sticky top-0 z-30 bg-[#FBF9F5]/95 dark:bg-[#1E2124]/95 backdrop-blur-md border-b border-[#EADBCE] dark:border-[#2D3238] shadow-xs transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center overflow-x-auto no-scrollbar py-2.5 gap-1 sm:gap-2">
          {sections.map((s) => {
            const isActive = activeSection === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onNavigate(s.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1E2124] text-white dark:bg-[#FBF9F5] dark:text-[#1E2124] shadow-xs'
                    : 'text-[#5C554E] dark:text-[#D1C7BD] hover:text-[#1E2124] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
