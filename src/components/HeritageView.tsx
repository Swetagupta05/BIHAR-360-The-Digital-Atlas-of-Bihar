import React, { useState, useEffect } from 'react';
import { HERITAGE_SITES, getHeritageSiteById } from '../data/heritage';
import { HeritageSite, District } from '../types';
import { HeritageHero } from './heritage/HeritageHero';
import { HeritageCategories } from './heritage/HeritageCategories';
import { HeritageFeatured } from './heritage/HeritageFeatured';
import { HeritageTimeline } from './heritage/HeritageTimeline';
import { HeritageMap } from './heritage/HeritageMap';
import { HeritageArchive } from './heritage/HeritageArchive';
import { HeritageSiteDetailModal } from './heritage/HeritageSiteDetailModal';

interface HeritageViewProps {
  language?: 'en' | 'hi';
  onSelectDistrict?: (district: District) => void;
}

export const HeritageView: React.FC<HeritageViewProps> = ({
  language = 'en',
  onSelectDistrict
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [activeSiteStory, setActiveSiteStory] = useState<HeritageSite | null>(null);

  // Check URL params for deep-linking (e.g. ?heritage=site-slug)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const heritageParam = params.get('heritage');
      if (heritageParam) {
        const found = getHeritageSiteById(heritageParam);
        if (found) {
          setActiveSiteStory(found);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenFeatured = (siteId: string) => {
    const site = getHeritageSiteById(siteId);
    if (site) {
      setActiveSiteStory(site);
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* 1. Cinematic Heritage Hero */}
      <HeritageHero
        onOpenFeatured={handleOpenFeatured}
        onScrollToSection={handleScrollToSection}
        language={language}
      />

      {/* 2. Curatorial Categories & Departments */}
      <HeritageCategories
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
        language={language}
      />

      {/* 3. Featured Heritage: Places That Changed History */}
      <HeritageFeatured
        sites={HERITAGE_SITES}
        onOpenSite={setActiveSiteStory}
        language={language}
      />

      {/* 4. Archaeological & Expedition Map */}
      <HeritageMap
        sites={HERITAGE_SITES}
        onOpenSite={setActiveSiteStory}
        language={language}
      />

      {/* 5. Chronicles in Stone: Civilizational Timeline */}
      <HeritageTimeline
        sites={HERITAGE_SITES}
        onOpenSite={setActiveSiteStory}
        language={language}
      />

      {/* 6. Curated Archaeological Registry & Catalogue */}
      <HeritageArchive
        sites={HERITAGE_SITES}
        selectedCategoryId={selectedCategoryId}
        onOpenSite={setActiveSiteStory}
        onSelectDistrict={onSelectDistrict}
        language={language}
      />

      {/* 7. Dedicated Exhibition Story Modal */}
      <HeritageSiteDetailModal
        site={activeSiteStory}
        onClose={() => setActiveSiteStory(null)}
        onOpenSite={setActiveSiteStory}
        onSelectDistrict={onSelectDistrict}
        language={language}
      />
    </div>
  );
};
