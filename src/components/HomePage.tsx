import React from 'react';
import { HeroSection } from './home/HeroSection';
import { GlimpseSection } from './home/GlimpseSection';
import { HistoryTimelineSection } from './home/HistoryTimelineSection';
import { HearBiharSection } from './home/HearBiharSection';
import { TasteBiharSection } from './home/TasteBiharSection';
import { FestivalsSection } from './home/FestivalsSection';
import { LivingArtsSection } from './home/LivingArtsSection';
import { PeopleSection } from './home/PeopleSection';
import { PlacesSection } from './home/PlacesSection';
import { DistrictsPreviewSection } from './home/DistrictsPreviewSection';
import { ClosingCtaSection } from './home/ClosingCtaSection';
import { District } from '../types';

interface HomePageProps {
  onNavigateTab: (tab: string) => void;
  onSelectDistrict: (district: District) => void;
  bookmarkedIds?: string[];
  onToggleBookmark?: (district: District) => void;
  onOpenQuiz: () => void;
  language?: 'en' | 'hi';
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateTab,
  onSelectDistrict,
  bookmarkedIds = [],
  onToggleBookmark,
  onOpenQuiz,
  language = 'en'
}) => {
  const handleScrollToGlimpse = () => {
    const el = document.getElementById('glimpse-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigateTab('districts');
    }
  };

  return (
    <div className="w-full bg-[#FBF9F5] dark:bg-[#0F1113] text-[#14171A] dark:text-[#F5F1E8] transition-colors duration-200">
      {/* 1. Hero Section */}
      <HeroSection
        onExplore={handleScrollToGlimpse}
        onDiscoverDistricts={() => onNavigateTab('districts')}
        language={language}
      />

      {/* 2. A Glimpse of Bihar ("एक नज़र में बिहार") */}
      <GlimpseSection
        onNavigate={onNavigateTab}
      />

      {/* 3. Bihar Through Time ("बिहार — समय के पार") */}
      <HistoryTimelineSection
        onNavigateHistory={() => onNavigateTab('heritage')}
      />

      {/* 4. Hear Bihar ("सुनिए बिहार को") */}
      <HearBiharSection
        onNavigateTraditions={() => onNavigateTab('arts')}
      />

      {/* 5. Taste Bihar ("स्वाद से पहचानिए बिहार") */}
      <TasteBiharSection
        onNavigateCuisine={() => onNavigateTab('cuisine')}
      />

      {/* 6. Festivals & Living Traditions ("जब बिहार उत्सव बन जाता है") */}
      <FestivalsSection
        onNavigateFestivals={() => onNavigateTab('festivals')}
      />

      {/* 7. Living Arts ("बिहार की जीवित कला") */}
      <LivingArtsSection
        onNavigateArts={() => onNavigateTab('arts')}
      />

      {/* 8. People Who Shaped Bihar ("वे लोग जिन्होंने बिहार की कहानी लिखी") */}
      <PeopleSection
        onNavigatePeople={() => onNavigateTab('personalities')}
      />

      {/* 9. Places That Stay With You ("जहाँ बिहार आपको ले जाता है") */}
      <PlacesSection
        onNavigatePlaces={() => onNavigateTab('places')}
      />

      {/* 10. 38 Districts Preview ("38 ज़िले। 38 पहचानें। अनगिनत कहानियाँ।") */}
      <DistrictsPreviewSection
        onSelectDistrict={onSelectDistrict}
        onViewAllDistricts={() => onNavigateTab('districts')}
        bookmarkedIds={bookmarkedIds}
        onToggleBookmark={onToggleBookmark}
      />

      {/* 11. Closing CTA Banner */}
      <ClosingCtaSection
        onStartExploring={() => onNavigateTab('districts')}
        onOpenQuiz={onOpenQuiz}
      />
    </div>
  );
};
