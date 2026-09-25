import React, { useState } from 'react';
import { NOTABLE_PERSONALITIES } from '../data/personalities';
import { Personality } from '../types';
import { PersonalitiesHero } from './personalities/PersonalitiesHero';
import { FeaturedPeople } from './personalities/FeaturedPeople';
import { ChronologicalEpochs } from './personalities/ChronologicalEpochs';
import { FieldsDiscovery } from './personalities/FieldsDiscovery';
import { WomensVoices } from './personalities/WomensVoices';
import { LiteraryLinguisticTraditions } from './personalities/LiteraryLinguisticTraditions';
import { PeoplePlacesSection } from './personalities/PeoplePlacesSection';
import { PeopleHistorySection } from './personalities/PeopleHistorySection';
import { PersonStoryModal } from './personalities/PersonStoryModal';
import { Sparkles, Clock, Users, BookOpen, Compass, Milestone, Heart } from 'lucide-react';

interface PersonalitiesViewProps {
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
}

type SectionView = 'overview' | 'time' | 'fields' | 'women' | 'literature' | 'places' | 'history';

export const PersonalitiesView: React.FC<PersonalitiesViewProps> = ({
  language,
  onSelectDistrict
}) => {
  const [activeView, setActiveView] = useState<SectionView>('overview');
  const [selectedPerson, setSelectedPerson] = useState<Personality | null>(null);

  const viewTabs: Array<{ id: SectionView; labelEn: string; labelHi: string; icon: React.ElementType }> = [
    { id: 'overview', labelEn: 'Curated Stories', labelHi: 'विशेष आख्यान', icon: Sparkles },
    { id: 'time', labelEn: 'People Through Time', labelHi: 'कालक्रम यात्रा', icon: Clock },
    { id: 'fields', labelEn: 'Fields & Contributions', labelHi: 'क्षेत्र एवं योगदान', icon: Users },
    { id: 'women', labelEn: 'Women’s Voices', labelHi: 'नारी स्वर', icon: Heart },
    { id: 'literature', labelEn: 'Literature & Languages', labelHi: 'साहित्य व भाषा', icon: BookOpen },
    { id: 'places', labelEn: 'People ↔ Places', labelHi: 'व्यक्तित्व व जनपद', icon: Compass },
    { id: 'history', labelEn: 'People ↔ History', labelHi: 'व्यक्तित्व व इतिहास', icon: Milestone },
  ];

  return (
    <div className="space-y-8 sm:space-y-12 pb-12">
      {/* 1. Hero — People Behind Bihar */}
      <PersonalitiesHero language={language} />

      {/* Editorial Section Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#FBF9F5]/90 dark:bg-[#0F1113]/90 backdrop-blur-md py-3 -my-2 border-y border-[#EADBCE] dark:border-[#2E343B] transition-colors">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none px-1">
          {viewTabs.map(tab => {
            const Icon = tab.icon;
            const isSelected = activeView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveView(tab.id);
                  // Smooth scroll just below hero if needed
                }}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                    : 'bg-[#F4EFE6] dark:bg-[#1A1D22] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B] hover:bg-white dark:hover:bg-[#252A30]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#C85A32] dark:text-[#E06C43]'}`} />
                <span>{language === 'hi' ? tab.labelHi : tab.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic View Sections */}
      {activeView === 'overview' && (
        <div className="space-y-12 sm:space-y-16">
          {/* 2. Featured Stories (1 large + supporting) */}
          <FeaturedPeople
            personalities={NOTABLE_PERSONALITIES}
            onSelectPerson={setSelectedPerson}
            language={language}
          />

          {/* 5. Women's Voices Highlights */}
          <WomensVoices
            personalities={NOTABLE_PERSONALITIES}
            onSelectPerson={setSelectedPerson}
            language={language}
          />

          {/* 3. Chronological Epochs */}
          <ChronologicalEpochs
            personalities={NOTABLE_PERSONALITIES}
            onSelectPerson={setSelectedPerson}
            language={language}
          />

          {/* 6. Literature & Languages */}
          <LiteraryLinguisticTraditions
            personalities={NOTABLE_PERSONALITIES}
            onSelectPerson={setSelectedPerson}
            language={language}
          />

          {/* 7. People ↔ Places */}
          <PeoplePlacesSection
            personalities={NOTABLE_PERSONALITIES}
            onSelectPerson={setSelectedPerson}
            onSelectDistrict={onSelectDistrict}
            language={language}
          />

          {/* 8. People ↔ History */}
          <PeopleHistorySection
            personalities={NOTABLE_PERSONALITIES}
            onSelectPerson={setSelectedPerson}
            language={language}
          />
        </div>
      )}

      {activeView === 'time' && (
        <ChronologicalEpochs
          personalities={NOTABLE_PERSONALITIES}
          onSelectPerson={setSelectedPerson}
          language={language}
        />
      )}

      {activeView === 'fields' && (
        <FieldsDiscovery
          personalities={NOTABLE_PERSONALITIES}
          onSelectPerson={setSelectedPerson}
          language={language}
        />
      )}

      {activeView === 'women' && (
        <WomensVoices
          personalities={NOTABLE_PERSONALITIES}
          onSelectPerson={setSelectedPerson}
          language={language}
        />
      )}

      {activeView === 'literature' && (
        <LiteraryLinguisticTraditions
          personalities={NOTABLE_PERSONALITIES}
          onSelectPerson={setSelectedPerson}
          language={language}
        />
      )}

      {activeView === 'places' && (
        <PeoplePlacesSection
          personalities={NOTABLE_PERSONALITIES}
          onSelectPerson={setSelectedPerson}
          onSelectDistrict={onSelectDistrict}
          language={language}
        />
      )}

      {activeView === 'history' && (
        <PeopleHistorySection
          personalities={NOTABLE_PERSONALITIES}
          onSelectPerson={setSelectedPerson}
          language={language}
        />
      )}

      {/* 9. Person Story Modal / Deep Dive Dossier */}
      <PersonStoryModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
        language={language}
        onSelectDistrict={onSelectDistrict}
      />
    </div>
  );
};
