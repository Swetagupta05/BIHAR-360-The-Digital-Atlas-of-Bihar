import React, { useState } from 'react';
import { BIHAR_LANDSCAPE_PLACES } from '../data/places';
import { LandscapePlace } from '../types';
import { PlacesHero } from './places/PlacesHero';
import { LandscapeSystemFlow } from './places/LandscapeSystemFlow';
import { FeaturedLandscapes } from './places/FeaturedLandscapes';
import { RiversOfBihar } from './places/RiversOfBihar';
import { WildlifeNaturalHeritage } from './places/WildlifeNaturalHeritage';
import { PlacesTellingHistory } from './places/PlacesTellingHistory';
import { SacredLandscapes } from './places/SacredLandscapes';
import { LandscapeExplorer } from './places/LandscapeExplorer';
import { PlaceDetailModal } from './places/PlaceDetailModal';
import { Sparkles, Compass, Waves, Trees, History, MapPin, Map, Navigation } from 'lucide-react';

interface PlacesViewProps {
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
  onNavigateTab?: (tab: string) => void;
  onSelectPerson?: (personId: string) => void;
}

type SectionView = 'overview' | 'system' | 'rivers' | 'wildlife' | 'history' | 'sacred' | 'all';

export const PlacesView: React.FC<PlacesViewProps> = ({
  language,
  onSelectDistrict,
  onNavigateTab,
  onSelectPerson
}) => {
  const [activeView, setActiveView] = useState<SectionView>('overview');
  const [selectedPlace, setSelectedPlace] = useState<LandscapePlace | null>(null);

  const viewTabs: Array<{ id: SectionView; labelEn: string; labelHi: string; icon: React.ElementType }> = [
    { id: 'overview', labelEn: 'Curated Landscapes', labelHi: 'विशेष परिदृश्य', icon: Sparkles },
    { id: 'system', labelEn: 'Bihar as Landscape', labelHi: 'भौगोलिक स्वरूप', icon: Compass },
    { id: 'rivers', labelEn: 'Rivers of Bihar', labelHi: 'प्रमुख नदियां', icon: Waves },
    { id: 'wildlife', labelEn: 'Wildlife & Nature', labelHi: 'वन्यजीव व प्रकृति', icon: Trees },
    { id: 'history', labelEn: 'Places & History', labelHi: 'स्थान व इतिहास', icon: History },
    { id: 'sacred', labelEn: 'Sacred Landscapes', labelHi: 'पवित्र धरा', icon: Sparkles },
    { id: 'all', labelEn: 'Explore All', labelHi: 'सम्पूर्ण खोज', icon: MapPin },
  ];

  return (
    <div className="space-y-8 sm:space-y-12 pb-16">
      {/* 1. Hero — Places & Landscapes of Bihar */}
      <PlacesHero language={language} />

      {/* Sticky Section Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#FBF9F5]/90 dark:bg-[#0F1113]/90 backdrop-blur-md py-3 -my-2 border-y border-[#EADBCE] dark:border-[#2E343B] transition-colors">
        <div className="flex items-center justify-between gap-3 overflow-x-auto scrollbar-none px-1">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {viewTabs.map(tab => {
              const Icon = tab.icon;
              const isSelected = activeView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all border whitespace-nowrap ${
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

          {/* Quick links to Map & Circuits */}
          {onNavigateTab && (
            <div className="hidden md:flex items-center gap-2 flex-shrink-0 pl-3 border-l border-[#EADBCE] dark:border-[#2E343B]">
              <button
                onClick={() => onNavigateTab('map')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E2227] text-xs font-medium text-[#2D3238] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] hover:text-[#C85A32] dark:hover:text-[#E06C43] transition-colors"
              >
                <Map className="w-3.5 h-3.5" />
                <span>Map Explorer</span>
              </button>
              <button
                onClick={() => onNavigateTab('circuits')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E2227] text-xs font-medium text-[#2D3238] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] hover:text-[#C85A32] dark:hover:text-[#E06C43] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Travel Circuits</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Views */}
      {activeView === 'overview' && (
        <div className="space-y-12 sm:space-y-16">
          {/* 12. Featured Landscapes (Asymmetric Exhibition Sequence) */}
          <FeaturedLandscapes
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />

          {/* 2. Bihar as a Living Landscape (Geographic continuum) */}
          <LandscapeSystemFlow language={language} />

          {/* 4. Rivers of Bihar */}
          <RiversOfBihar
            language={language}
            onSelectDistrict={onSelectDistrict}
          />

          {/* 5. Wildlife & Natural Heritage */}
          <WildlifeNaturalHeritage
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />

          {/* 6. Places That Tell History */}
          <PlacesTellingHistory
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />

          {/* 7. Sacred & Spiritual Landscapes */}
          <SacredLandscapes
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />

          {/* 3. Explore by Landscape Category */}
          <LandscapeExplorer
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />
        </div>
      )}

      {activeView === 'system' && (
        <div className="space-y-8">
          <LandscapeSystemFlow language={language} />
          <FeaturedLandscapes
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />
        </div>
      )}

      {activeView === 'rivers' && (
        <div className="space-y-8">
          <RiversOfBihar
            language={language}
            onSelectDistrict={onSelectDistrict}
          />
        </div>
      )}

      {activeView === 'wildlife' && (
        <div className="space-y-8">
          <WildlifeNaturalHeritage
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />
        </div>
      )}

      {activeView === 'history' && (
        <div className="space-y-8">
          <PlacesTellingHistory
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />
        </div>
      )}

      {activeView === 'sacred' && (
        <div className="space-y-8">
          <SacredLandscapes
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />
        </div>
      )}

      {activeView === 'all' && (
        <div className="space-y-8">
          <LandscapeExplorer
            places={BIHAR_LANDSCAPE_PLACES}
            onSelectPlace={setSelectedPlace}
            language={language}
          />
        </div>
      )}

      {/* 8. Place Story Experience (Detail Modal) */}
      <PlaceDetailModal
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
        language={language}
        onSelectDistrict={onSelectDistrict}
        onSelectPerson={onSelectPerson}
      />
    </div>
  );
};
