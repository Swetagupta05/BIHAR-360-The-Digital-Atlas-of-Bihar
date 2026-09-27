import React, { useState } from 'react';
import { Play, Pause, Music, Sparkles, MapPin, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { MusicTrack, MusicCategory } from '../../types';
import { useMusicPlayer } from '../../context/MusicPlayerContext';

interface SoundOfBiharProps {
  tracks: MusicTrack[];
  language: 'en' | 'hi';
  onSelectTrackDetail: (track: MusicTrack) => void;
  onNavigateTab?: (tab: string) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const SoundOfBihar: React.FC<SoundOfBiharProps> = ({
  tracks,
  language,
  onSelectTrackDetail,
  onNavigateTab,
  onSelectDistrictById
}) => {
  const { playTrack, currentTrack, isPlaying, togglePlay } = useMusicPlayer();
  const [selectedCategory, setSelectedCategory] = useState<MusicCategory | 'all'>('all');

  const categories: Array<{ id: MusicCategory | 'all'; labelEn: string; labelHi: string; count: number }> = [
    { id: 'all', labelEn: 'All Traditions', labelHi: 'सभी स्वर परंपराएं', count: tracks.length },
    { id: 'festival', labelEn: 'Festival Songs', labelHi: 'पर्व-त्योहारों के गीत', count: tracks.filter(t => t.category === 'festival').length },
    { id: 'folk', labelEn: 'Folk Songs & Ballads', labelHi: 'लोकगीत एवं गाथाएं', count: tracks.filter(t => t.category === 'folk').length },
    { id: 'lifecycle', labelEn: 'Wedding & Life-Cycle', labelHi: 'संस्कार एवं विदाई गीत', count: tracks.filter(t => t.category === 'lifecycle').length },
    { id: 'devotional', labelEn: 'Devotional & Mystical', labelHi: 'भक्ति एवं आध्यात्मिक', count: tracks.filter(t => t.category === 'devotional').length },
    { id: 'classical', labelEn: 'Classical & Court', labelHi: 'शास्त्रीय एवं दरबारी', count: tracks.filter(t => t.category === 'classical').length },
    { id: 'theatre', labelEn: 'Folk Theatre / Bidesiya', labelHi: 'लोकनाट्य / बिदेसिया', count: tracks.filter(t => t.category === 'theatre').length },
    { id: 'contemporary', labelEn: 'Contemporary Voices', labelHi: 'समकालीन लोक स्वर', count: tracks.filter(t => t.category === 'contemporary').length }
  ];

  const filteredTracks = selectedCategory === 'all'
    ? tracks
    : tracks.filter(t => t.category === selectedCategory);

  const handleTrackCardPlay = (track: MusicTrack) => {
    if (currentTrack?.id === track.id) {
      togglePlay();
    } else {
      playTrack(track, filteredTracks);
    }
  };

  return (
    <section id="sound-of-bihar-section" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Music className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
            <span>{language === 'hi' ? 'स्वर परंपराएं' : 'Living Musical Traditions'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'बिहार के स्वर: परंपरा से आधुनिकता तक' : 'Sound of Bihar'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'ऋतुओं के चक्र, जीवन संस्कारों, लोकनाट्य और भक्ति परंपराओं में रचे-बसे प्रामाणिक रिकॉर्डिंग्स का सांस्कृतिक संग्रह।'
              : 'Organized around verified cultural lineages: seasonal festival hymns, poignant migration theatre, life-cycle verses, and ancient court dhrupad.'}
          </p>
        </div>

        <div className="text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
          Showing <strong className="text-[#C85A32] dark:text-[#E06C43]">{filteredTracks.length}</strong> verified recordings
        </div>
      </div>

      {/* Editorial Category Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map(cat => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 focus:outline-hidden ${
                isSelected
                  ? 'bg-[#1E2124] dark:bg-[#F5F1E8] text-white dark:text-[#0F1113] font-semibold shadow-xs'
                  : 'bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#4A453E] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B]'
              }`}
            >
              <span>{language === 'hi' ? cat.labelHi : cat.labelEn}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected
                    ? 'bg-white/20 dark:bg-black/20 text-white dark:text-[#0F1113]'
                    : 'bg-[#F4EFE6] dark:bg-[#252A30] text-[#8C8276] dark:text-[#A89F93]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Verified Music Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTracks.map(track => {
          const isThisTrackPlaying = currentTrack?.id === track.id && isPlaying;
          const isThisTrackActive = currentTrack?.id === track.id;

          return (
            <article
              key={track.id}
              className={`p-5 rounded-3xl border transition-all flex flex-col justify-between space-y-4 ${
                isThisTrackActive
                  ? 'bg-white dark:bg-[#1E2227] border-[#C85A32] shadow-md ring-1 ring-[#C85A32]/30'
                  : 'bg-white dark:bg-[#1E2227] border-[#EADBCE] dark:border-[#2E343B] hover:shadow-md hover:border-[#C85A32]/50'
              }`}
            >
              {/* Top Row: Thumbnail + Titles + Play Action */}
              <div className="flex items-start gap-4">
                {/* Visual Thumbnail */}
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#1E2124] border border-[#EADBCE] dark:border-[#2E343B] flex-shrink-0 cursor-pointer group"
                  onClick={() => handleTrackCardPlay(track)}
                >
                  <img
                    src={track.coverImage || '/assets/images/chhath_puja_bihar_1789937759874.jpg'}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <button
                      className="w-9 h-9 rounded-full bg-[#C85A32] hover:bg-[#B04C27] text-white flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110"
                      aria-label={isThisTrackPlaying ? 'Pause' : 'Play'}
                    >
                      {isThisTrackPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Metadata Column */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] font-semibold">
                      {track.tradition}
                    </span>
                    <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93]">
                      {track.durationMinutes}
                    </span>
                  </div>

                  <h3
                    className="font-serif font-bold text-base sm:text-lg text-[#1E2124] dark:text-[#F5F1E8] truncate hover:text-[#C85A32] dark:hover:text-[#E06C43] cursor-pointer"
                    onClick={() => onSelectTrackDetail(track)}
                  >
                    {track.title}
                  </h3>

                  <p className="font-serif text-xs text-[#8C8276] dark:text-[#A89F93] truncate">
                    {track.hindiTitle}
                  </p>

                  <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] font-medium">
                    Performer: <strong className="text-[#1E2124] dark:text-[#F5F1E8]">{track.performer}</strong>
                  </p>
                </div>
              </div>

              {/* Cultural Context Brief */}
              <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed line-clamp-2">
                {track.culturalContext}
              </p>

              {/* Instruments & Geographic Connection */}
              <div className="space-y-2 pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B]">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="flex items-center gap-1 text-[#8C8276] dark:text-[#A89F93] font-mono text-[11px]">
                    <MapPin className="w-3 h-3 text-[#C85A32] dark:text-[#E06C43]" />
                    <span>{track.regionDisplay}</span>
                  </span>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F4EFE6] dark:bg-[#1E2227] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B]">
                    Language: {track.language}
                  </span>
                </div>

                {/* Instruments */}
                <div className="flex flex-wrap items-center gap-1">
                  {track.instruments.slice(0, 3).map((inst, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FBF9F5] dark:bg-[#252A30] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B]"
                    >
                      {inst}
                    </span>
                  ))}
                  {track.instruments.length > 3 && (
                    <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93]">
                      +{track.instruments.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B]">
                <button
                  onClick={() => handleTrackCardPlay(track)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    isThisTrackPlaying
                      ? 'bg-[#C85A32] text-white shadow-xs'
                      : 'bg-[#1E2124] dark:bg-[#F5F1E8] text-white dark:text-[#0F1113] hover:bg-[#C85A32] dark:hover:bg-[#C85A32] dark:hover:text-white'
                  }`}
                >
                  {isThisTrackPlaying ? (
                    <>
                      <Pause className="w-3 h-3 fill-current" />
                      <span>Playing</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span>Listen to Recording</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onSelectTrackDetail(track)}
                  className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1"
                >
                  <span>Cultural Story</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
