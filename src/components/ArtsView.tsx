import React, { useState, useEffect } from 'react';
import { ARTS_AND_CRAFTS } from '../data/arts';
import { ArtCraft } from '../types';
import { ArtsHero } from './arts/ArtsHero';
import { ArtsDiscovery } from './arts/ArtsDiscovery';
import { DeepDiveMithila } from './arts/DeepDiveMithila';
import { DeepDiveManjusha } from './arts/DeepDiveManjusha';
import { FeatureSujani } from './arts/FeatureSujani';
import { FeatureSikki } from './arts/FeatureSikki';
import { FeatureBhagalpuriSilk } from './arts/FeatureBhagalpuriSilk';
import { ArtProcess } from './arts/ArtProcess';
import { MaterialsLibrary } from './arts/MaterialsLibrary';
import { ArtsMap } from './arts/ArtsMap';
import { ArtistsSection } from './arts/ArtistsSection';
import { LivingHeritage } from './arts/LivingHeritage';
import { ArtDetailView } from './arts/ArtDetailView';

interface ArtsViewProps {
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
}

export const ArtsView: React.FC<ArtsViewProps> = ({ language, onSelectDistrict }) => {
  const [selectedArtForDetail, setSelectedArtForDetail] = useState<ArtCraft | null>(null);
  const [bookmarkedArtIds, setBookmarkedArtIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bihar360_bookmarked_arts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bihar360_bookmarked_arts', JSON.stringify(bookmarkedArtIds));
    } catch {
      // ignore
    }
  }, [bookmarkedArtIds]);

  const toggleBookmark = (art: ArtCraft) => {
    setBookmarkedArtIds((prev) =>
      prev.includes(art.id) ? prev.filter((id) => id !== art.id) : [...prev, art.id]
    );
  };

  const isBookmarked = (id: string) => bookmarkedArtIds.includes(id);

  const handleScrollToSection = (sectionId: string) => {
    if (selectedArtForDetail) {
      setSelectedArtForDetail(null);
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Find arts for specific deep dives
  const madhubaniArt = ARTS_AND_CRAFTS.find((a) => a.id === 'madhubani-painting') || ARTS_AND_CRAFTS[0];
  const manjushaArt = ARTS_AND_CRAFTS.find((a) => a.id === 'manjusha-art') || ARTS_AND_CRAFTS[1];
  const sujaniArt = ARTS_AND_CRAFTS.find((a) => a.id === 'sujani-embroidery') || ARTS_AND_CRAFTS[2];
  const sikkiArt = ARTS_AND_CRAFTS.find((a) => a.id === 'sikki-grass-craft') || ARTS_AND_CRAFTS[3];
  const silkArt = ARTS_AND_CRAFTS.find((a) => a.id === 'bhagalpuri-silk') || ARTS_AND_CRAFTS[4];

  // If a specific art detail page is active, show the deep editorial view
  if (selectedArtForDetail) {
    return (
      <ArtDetailView
        art={selectedArtForDetail}
        language={language}
        onBack={() => {
          setSelectedArtForDetail(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isBookmarked={isBookmarked(selectedArtForDetail.id)}
        onToggleBookmark={() => toggleBookmark(selectedArtForDetail)}
        onSelectDistrict={onSelectDistrict}
      />
    );
  }

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* 1. Immersive Editorial Hero */}
      <ArtsHero
        language={language}
        onScrollToSection={handleScrollToSection}
      />

      {/* 2. Curated Craft Discovery (Filters, search, asymmetric cards) */}
      <ArtsDiscovery
        arts={ARTS_AND_CRAFTS}
        language={language}
        onSelectArt={(art) => {
          setSelectedArtForDetail(art);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isBookmarked={isBookmarked}
        onToggleBookmark={toggleBookmark}
        onSelectDistrict={onSelectDistrict}
      />

      {/* 3. Dedicated Deep Dives & Featured Art Stories */}
      <div id="dedicated-deepdives" className="space-y-12 sm:space-y-16 pt-4">
        {/* Deep Dive 1: Mithila Painting (International Master Tradition) */}
        <DeepDiveMithila
          art={madhubaniArt}
          language={language}
          onSelectDistrict={onSelectDistrict}
          onOpenDetails={() => {
            setSelectedArtForDetail(madhubaniArt);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Deep Dive 2: Manjusha Art (Snake Scrolls of Anga - Distinct Identity) */}
        <DeepDiveManjusha
          art={manjushaArt}
          language={language}
          onSelectDistrict={onSelectDistrict}
          onOpenDetails={() => {
            setSelectedArtForDetail(manjushaArt);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Feature 3: Sujani Embroidery (Tirhut Recycled Quilting) */}
        <FeatureSujani
          art={sujaniArt}
          language={language}
          onSelectDistrict={onSelectDistrict}
          onOpenDetails={() => {
            setSelectedArtForDetail(sujaniArt);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Feature 4: Sikki Grass Craft (Golden Reed Coiling) */}
        <FeatureSikki
          art={sikkiArt}
          language={language}
          onSelectDistrict={onSelectDistrict}
          onOpenDetails={() => {
            setSelectedArtForDetail(sikkiArt);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Feature 5: Bhagalpuri Tussar Silk (Silk City Pit Looms) */}
        <FeatureBhagalpuriSilk
          art={silkArt}
          language={language}
          onSelectDistrict={onSelectDistrict}
          onOpenDetails={() => {
            setSelectedArtForDetail(silkArt);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>

      {/* 4. Process Storytelling: How Art Is Made */}
      <ArtProcess
        arts={ARTS_AND_CRAFTS}
        language={language}
      />

      {/* 5. Materials Library: Materials of Bihar */}
      <MaterialsLibrary
        language={language}
      />

      {/* 6. Geographic Connections: Art Across Bihar */}
      <ArtsMap
        language={language}
        onSelectDistrict={onSelectDistrict}
      />

      {/* 7. Living Masters & Practitioners */}
      <ArtistsSection
        language={language}
        onSelectDistrict={onSelectDistrict}
      />

      {/* 8. Living Heritage: Traditions That Are Still Alive */}
      <div id="living-heritage">
        <LivingHeritage
          language={language}
          onScrollToSection={handleScrollToSection}
        />
      </div>
    </div>
  );
};
