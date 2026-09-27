import React, { useState } from 'react';
import { MusicTrack } from '../types';
import { MUSIC_TRACKS, MUSIC_COLLECTIONS } from '../data/music';
import { MusicHero } from './music/MusicHero';
import { SoundOfBihar } from './music/SoundOfBihar';
import { RegionalSoundscape } from './music/RegionalSoundscape';
import { MusicCollectionsSection } from './music/MusicCollectionsSection';
import { MusicDetailModal } from './music/MusicDetailModal';

interface MusicViewProps {
  language: 'en' | 'hi';
  onNavigateTab?: (tab: string) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const MusicView: React.FC<MusicViewProps> = ({
  language,
  onNavigateTab,
  onSelectDistrictById
}) => {
  const [selectedTrackForDetail, setSelectedTrackForDetail] = useState<MusicTrack | null>(null);

  const scrollToSection = (sectionId: string) => {
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
      <MusicDetailModal
        track={selectedTrackForDetail}
        onClose={() => setSelectedTrackForDetail(null)}
        language={language}
        onNavigateTab={onNavigateTab}
        onSelectDistrictById={onSelectDistrictById}
      />
    </div>
  );
};
