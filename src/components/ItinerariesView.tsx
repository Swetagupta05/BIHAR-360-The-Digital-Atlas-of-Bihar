import React, { useState, useMemo } from 'react';
import { CURATED_JOURNEYS } from '../data/itineraries';
import { CuratedJourney, JourneyTheme } from '../types';
import { JourneyHero } from './journeys/JourneyHero';
import { JourneyDiscovery } from './journeys/JourneyDiscovery';
import { JourneyCard } from './journeys/JourneyCard';
import { JourneyDetailModal } from './journeys/JourneyDetailModal';
import { CustomJourneyBuilder } from './journeys/CustomJourneyBuilder';
import { TravelAdvisorySection } from './journeys/TravelAdvisorySection';
import { Compass, RotateCcw, Sparkles } from 'lucide-react';

interface ItinerariesViewProps {
  language: 'en' | 'hi';
  onSelectDistrictById?: (id: string) => void;
  onNavigateTab?: (tab: string) => void;
}

export const ItinerariesView: React.FC<ItinerariesViewProps> = ({
  language,
  onSelectDistrictById,
  onNavigateTab
}) => {
  // State for filtering
  const [selectedTheme, setSelectedTheme] = useState<JourneyTheme | 'all'>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected journey for detail modal
  const [activeJourney, setActiveJourney] = useState<CuratedJourney | null>(null);

  // Bookmarked journeys state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bihar360_bookmarked_journeys');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (journey: CuratedJourney) => {
    setBookmarkedIds(prev => {
      const next = prev.includes(journey.id)
        ? prev.filter(id => id !== journey.id)
        : [...prev, journey.id];
      try {
        localStorage.setItem('bihar360_bookmarked_journeys', JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filtered journeys logic
  const filteredJourneys = useMemo(() => {
    return CURATED_JOURNEYS.filter(journey => {
      // 1. Theme
      if (selectedTheme !== 'all' && journey.theme !== selectedTheme) {
        return false;
      }

      // 2. Duration
      if (selectedDuration === 'short' && journey.durationDays > 3) {
        return false;
      }
      if (selectedDuration === 'medium' && journey.durationDays !== 4) {
        return false;
      }
      if (selectedDuration === 'long' && journey.durationDays < 5) {
        return false;
      }

      // 3. Region
      if (selectedRegion !== 'all' && !journey.regions.includes(selectedRegion)) {
        return false;
      }

      // 4. Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle =
          journey.title.toLowerCase().includes(q) || journey.hindiTitle.toLowerCase().includes(q);
        const matchesTagline =
          journey.tagline.toLowerCase().includes(q) || journey.hindiTagline.toLowerCase().includes(q);
        const matchesDistricts = journey.districtNames.some(d => d.toLowerCase().includes(q));
        const matchesStops = journey.stops.some(
          s => s.placeName.toLowerCase().includes(q) || (s.hindiPlaceName && s.hindiPlaceName.toLowerCase().includes(q))
        );
        const matchesTheme = journey.themeLabel.toLowerCase().includes(q);

        if (!matchesTitle && !matchesTagline && !matchesDistricts && !matchesStops && !matchesTheme) {
          return false;
        }
      }

      return true;
    });
  }, [selectedTheme, selectedDuration, selectedRegion, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* 1. Hero Section */}
      <JourneyHero
        language={language}
        onExploreJourneys={() => scrollTo('journeys-discovery-section')}
        onBuildCustomJourney={() => scrollTo('build-custom-journey-section')}
        onExploreFieldGuide={() => scrollTo('traveler-field-guide-section')}
      />

      {/* 2. Journey Discovery & Filters */}
      <JourneyDiscovery
        language={language}
        selectedTheme={selectedTheme}
        onSelectTheme={setSelectedTheme}
        selectedDuration={selectedDuration}
        onSelectDuration={setSelectedDuration}
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalResults={filteredJourneys.length}
      />

      {/* 3. Featured Journeys Grid */}
      <div className="mb-16">
        {filteredJourneys.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJourneys.map(journey => (
              <JourneyCard
                key={journey.id}
                journey={journey}
                language={language}
                onSelectJourney={setActiveJourney}
                isBookmarked={bookmarkedIds.includes(journey.id)}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] p-12 text-center space-y-4">
            <Compass className="w-12 h-12 text-[#8C8276] mx-auto opacity-50" />
            <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8]">
              {language === 'hi' ? 'कोई यात्रा नहीं मिली' : 'No journeys match your criteria'}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#A89F93] max-w-md mx-auto">
              {language === 'hi'
                ? 'कृपया अपने खोज शब्दों या फ़िल्टर को बदलकर दोबारा प्रयास करें।'
                : 'Try adjusting your search query, clearing filters, or switching story themes.'}
            </p>
            <button
              onClick={() => {
                setSelectedTheme('all');
                setSelectedDuration('all');
                setSelectedRegion('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#C85A32] text-white text-xs font-bold hover:bg-[#B44D28] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'सभी फ़िल्टर साफ़ करें' : 'Reset All Filters'}</span>
            </button>
          </div>
        )}
      </div>

      {/* 4. Interactive "Build Your Own Journey" Studio */}
      <CustomJourneyBuilder
        language={language}
        onSelectDistrictById={onSelectDistrictById}
      />

      {/* 5. Responsible Field Guide & Ethics Advisory */}
      <TravelAdvisorySection language={language} />

      {/* 6. Active Journey Detail Modal */}
      {activeJourney && (
        <JourneyDetailModal
          journey={activeJourney}
          language={language}
          onClose={() => setActiveJourney(null)}
          onSelectDistrictById={onSelectDistrictById}
          isBookmarked={bookmarkedIds.includes(activeJourney.id)}
          onToggleBookmark={toggleBookmark}
        />
      )}
    </div>
  );
};
