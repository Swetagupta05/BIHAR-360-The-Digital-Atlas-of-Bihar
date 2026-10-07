import React from 'react';
import { HeroSection } from '../features/home/HeroSection';
import { GlimpseSection } from '../features/home/GlimpseSection';
import { HistoryTimelineSection } from '../features/home/HistoryTimelineSection';
import { HearBiharSection } from '../features/home/HearBiharSection';
import { TasteBiharSection } from '../features/home/TasteBiharSection';
import { FestivalsSection } from '../features/home/FestivalsSection';
import { LivingArtsSection } from '../features/home/LivingArtsSection';
import { PeopleSection } from '../features/home/PeopleSection';
import { PlacesSection } from '../features/home/PlacesSection';
import { DistrictsPreviewSection } from '../features/home/DistrictsPreviewSection';
import { ClosingCtaSection } from '../features/home/ClosingCtaSection';

/**
 * @param {{
 *  onNavigateTab: (tab: string) => void;
 *  onSelectDistrict: (district: any) => void;
 *  bookmarkedIds?: string[];
 *  onToggleBookmark?: (district: any) => void;
 *  onOpenQuiz?: () => void;
 *  onOpenGuide?: () => void;
 *  language?: 'en' | 'hi' | string;
 * }} props
 */
export const HomePage = ({
  onNavigateTab,
  onSelectDistrict,
  bookmarkedIds = [],
  onToggleBookmark,
  onOpenQuiz,
  onOpenGuide,
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
        language={language}
      />

      {/* 3. Bihar Through Time ("बिहार — समय के पार") */}
      <HistoryTimelineSection
        onNavigateHistory={() => onNavigateTab('history')}
        language={language}
      />

      {/* 4. Hear Bihar ("सुनिए बिहार को") */}
      <HearBiharSection
        onNavigateTraditions={() => onNavigateTab('music')}
        language={language}
      />

      {/* 5. Taste Bihar ("स्वाद से पहचानिए बिहार") */}
      <TasteBiharSection
        onNavigateCuisine={() => onNavigateTab('cuisine')}
        language={language}
      />

      {/* 6. Festivals & Living Traditions ("जब बिहार उत्सव बन जाता है") */}
      <FestivalsSection
        onNavigateFestivals={() => onNavigateTab('festivals')}
        language={language}
      />

      {/* 7. Living Arts ("बिहार की जीवित कला") */}
      <LivingArtsSection
        onNavigateArts={() => onNavigateTab('arts')}
        language={language}
      />

      {/* 8. People Who Shaped Bihar ("वे लोग जिन्होंने बिहार की कहानी लिखी") */}
      <PeopleSection
        onNavigatePeople={() => onNavigateTab('personalities')}
        language={language}
      />

      {/* 9. Places That Stay With You ("जहाँ बिहार आपको ले जाता है") */}
      <PlacesSection
        onNavigatePlaces={() => onNavigateTab('places')}
        language={language}
      />

      {/* 10. 38 Districts Preview ("38 ज़िले। 38 पहचानें। अनगिनत कहानियाँ।") */}
      <DistrictsPreviewSection
        onSelectDistrict={onSelectDistrict}
        onViewAllDistricts={() => onNavigateTab('districts')}
        bookmarkedIds={bookmarkedIds}
        onToggleBookmark={onToggleBookmark}
        language={language}
      />

      {/* 11. Closing CTA Banner */}
      <ClosingCtaSection
        onStartExploring={() => onNavigateTab('districts')}
        onOpenQuiz={onOpenQuiz}
        onOpenGuide={onOpenGuide}
        language={language}
      />
    </div>
  );
};
