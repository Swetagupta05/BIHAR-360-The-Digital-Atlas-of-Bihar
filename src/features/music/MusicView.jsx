import React, { useState } from 'react';
import { MUSIC_TRACKS, MUSIC_COLLECTIONS } from '../../data/music';
import { MusicHero } from '../../components/music/MusicHero';
import { SoundOfBihar } from '../../components/music/SoundOfBihar';
import { RegionalSoundscape } from '../../components/music/RegionalSoundscape';
import { MusicCollectionsSection } from '../../components/music/MusicCollectionsSection';
import { MusicDetailModal } from '../../components/music/MusicDetailModal';

export const MusicView = ({
  language,
  onNavigateTab,
  onSelectDistrictById
}) => {
  const [selectedTrackForDetail, setSelectedTrackForDetail] = useState(null);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Music Hero */}
      <MusicHero
        language={language}
        onExploreCollections={() => scrollToSection('music-collections-section')}
        onExploreRegional={() => scrollToSection('regional-soundscape-section')}
      />

      {/* 2. Sound of Bihar — Meaningful Documented Traditions */}
      <SoundOfBihar
        tracks={MUSIC_TRACKS}
        language={language}
        onSelectTrackDetail={setSelectedTrackForDetail}
        onNavigateTab={onNavigateTab}
        onSelectDistrictById={onSelectDistrictById}
      />

      {/* 3. Regional Soundscape — Connecting Music to Bihar's Geography */}
      <RegionalSoundscape
        tracks={MUSIC_TRACKS}
        language={language}
        onSelectTrackDetail={setSelectedTrackForDetail}
        onSelectDistrictById={onSelectDistrictById}
      />

      {/* 4. Curated Playlists / Collections */}
      <MusicCollectionsSection
        collections={MUSIC_COLLECTIONS}
        tracks={MUSIC_TRACKS}
        language={language}
        onSelectTrackDetail={setSelectedTrackForDetail}
      />

      {/* 5. Music Track Detail Modal */}
      {selectedTrackForDetail && (
        <MusicDetailModal
          track={selectedTrackForDetail}
          onClose={() => setSelectedTrackForDetail(null)}
          language={language}
          onNavigateTab={onNavigateTab}
          onSelectDistrictById={onSelectDistrictById}
        />
      )}
    </div>
  );
};
