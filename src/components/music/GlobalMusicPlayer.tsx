import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  Music,
  ListMusic,
  MapPin,
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';
import { useMusicPlayer } from '../../context/MusicPlayerContext';

interface GlobalMusicPlayerProps {
  onNavigateTab?: (tab: string) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const GlobalMusicPlayer: React.FC<GlobalMusicPlayerProps> = ({
  onNavigateTab,
  onSelectDistrictById
}) => {
  const {
    currentTrack,
    isPlaying,
    isPlayerVisible,
    isExpanded,
    volume,
    isMuted,
    currentTime,
    duration,
    playlist,
    activeTrackIndex,
    togglePlay,
    nextTrack,
    prevTrack,
    seekTo,
    setVolume,
    toggleMute,
    toggleExpand,
    setIsExpanded,
    closePlayer,
    playTrack
  } = useMusicPlayer();

  const [showPlaylistDrawer, setShowPlaylistDrawer] = useState(false);

  if (!isPlayerVisible || !currentTrack) return null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* 1. EXPANDED MODAL VIEW */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#EADBCE] dark:border-[#2E343B] bg-white/50 dark:bg-[#1E2227]/50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                  Now Listening • {currentTrack.regionDisplay}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPlaylistDrawer(!showPlaylistDrawer)}
                  className={`p-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors border ${
                    showPlaylistDrawer
                      ? 'bg-[#C85A32] text-white border-[#C85A32]'
                      : 'bg-white dark:bg-[#1E2227] text-[#4A453E] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
                  }`}
                  title="Toggle Playlist"
                >
                  <ListMusic className="w-4 h-4" />
                  <span className="hidden sm:inline">Tracklist</span>
                </button>
                <button
                  onClick={toggleExpand}
                  className="p-2 rounded-xl bg-white dark:bg-[#1E2227] text-[#4A453E] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] hover:text-[#1E2124] dark:hover:text-white transition-colors"
                  title="Minimize Player"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={closePlayer}
                  className="p-2 rounded-xl bg-white dark:bg-[#1E2227] text-[#4A453E] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] hover:text-red-500 transition-colors"
                  title="Close Player"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Story & Audio Controls */}
            <div className="overflow-y-auto p-6 space-y-6 flex-1">
              {/* Visual Cover + Titles */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-[#1E2124] border border-[#EADBCE] dark:border-[#2E343B] shadow-md flex-shrink-0">
                  <img
                    src={currentTrack.coverImage || '/assets/images/chhath_puja_bihar_1789937759874.jpg'}
                    alt={currentTrack.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white/90">
                    {currentTrack.language}
                  </span>
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <span className="px-2.5 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-xs font-mono font-semibold uppercase tracking-wider inline-block">
                    {currentTrack.tradition}
                  </span>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                    {currentTrack.title}
                  </h3>

                  <p className="font-serif text-base text-[#C85A32] dark:text-[#E06C43]">
                    {currentTrack.hindiTitle}
                  </p>

                  <p className="text-xs sm:text-sm font-medium text-[#5A524A] dark:text-[#C8BFB4]">
                    Performer: <strong className="text-[#1E2124] dark:text-[#F5F1E8]">{currentTrack.performer}</strong>
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-[#8C8276] dark:text-[#A89F93]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                      <span>{currentTrack.regionDisplay}</span>
                    </span>
                    <span>•</span>
                    <span className="capitalize">{currentTrack.traditionType.replace('_', ' ')}</span>
                  </div>
                </div>
              </div>

              {/* Live Progress Bar */}
              <div className="space-y-1.5 pt-2">
                <div
                  className="relative w-full h-2 rounded-full bg-[#EADBCE] dark:bg-[#2E343B] cursor-pointer overflow-hidden group"
                  onClick={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const percent = clickX / rect.width;
                    seekTo(percent * duration);
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#C85A32] to-[#E06C43] rounded-full transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8C8276] dark:text-[#A89F93]">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Main Player Transport Controls */}
              <div className="flex items-center justify-between py-2 border-y border-[#F0E8DD] dark:border-[#2E343B]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-xl text-[#5A524A] dark:text-[#C8BFB4] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-red-500" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={e => setVolume(Number(e.target.value))}
                    className="w-20 sm:w-28 accent-[#C85A32] cursor-pointer"
                    aria-label="Volume"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTrack}
                    className="p-2.5 rounded-full bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-[#1E2124] dark:text-[#F5F1E8] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] transition-colors"
                    aria-label="Previous track"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-[#C85A32] hover:bg-[#B04C27] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={nextTrack}
                    className="p-2.5 rounded-full bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-[#1E2124] dark:text-[#F5F1E8] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] transition-colors"
                    aria-label="Next track"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-[11px] font-mono text-[#8C8276] dark:text-[#A89F93]">
                  {activeTrackIndex + 1} / {playlist.length}
                </div>
              </div>

              {/* Cultural Context & Instruments */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                    Cultural Significance
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                    {currentTrack.culturalContext}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                    {currentTrack.description}
                  </p>
                </div>

                {/* Instruments */}
                {currentTrack.instruments && currentTrack.instruments.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                      Traditional Instruments
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {currentTrack.instruments.map((inst, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                        >
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cross-Link Integration */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B]">
                  {currentTrack.festivalId && onNavigateTab && (
                    <button
                      onClick={() => {
                        setIsExpanded(false);
                        onNavigateTab('festivals');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explore Associated Festival</span>
                    </button>
                  )}

                  {currentTrack.personalityId && onNavigateTab && (
                    <button
                      onClick={() => {
                        setIsExpanded(false);
                        onNavigateTab('personalities');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Learn about the Performer / Composer</span>
                    </button>
                  )}

                  {currentTrack.districtId && onSelectDistrictById && (
                    <button
                      onClick={() => {
                        setIsExpanded(false);
                        onSelectDistrictById(currentTrack.districtId!);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#4A453E] dark:text-[#C8BFB4] hover:underline flex items-center gap-1"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Explore {currentTrack.districtName} Dossier</span>
                    </button>
                  )}
                </div>

                {/* Source Attribution */}
                <div className="text-[11px] text-[#8C8276] dark:text-[#948B80] pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B]">
                  <strong>Source Authority:</strong> {currentTrack.source}
                </div>
              </div>
            </div>

            {/* Playlist Drawer inside Expanded View */}
            {showPlaylistDrawer && (
              <div className="p-4 bg-[#F4EFE6] dark:bg-[#1A1D22] border-t border-[#EADBCE] dark:border-[#2E343B] max-h-48 overflow-y-auto space-y-1">
                <div className="text-xs font-mono font-bold uppercase text-[#8C8276] dark:text-[#A89F93] pb-1">
                  Playlist Queue ({playlist.length} tracks)
                </div>
                {playlist.map((track, i) => {
                  const isCurrent = track.id === currentTrack.id;
                  return (
                    <button
                      key={track.id}
                      onClick={() => playTrack(track)}
                      className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                        isCurrent
                          ? 'bg-[#C85A32] text-white font-semibold'
                          : 'hover:bg-white dark:hover:bg-[#252A30] text-[#1E2124] dark:text-[#F5F1E8]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-5 text-center font-mono text-[10px]">
                          {isCurrent && isPlaying ? '▶' : i + 1}
                        </span>
                        <span className="truncate">{track.title}</span>
                      </div>
                      <span className="text-[10px] font-mono opacity-80 flex-shrink-0 ml-2">
                        {track.durationMinutes}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. PERSISTENT FLOATING BOTTOM PLAYER (Always Available Across All Tabs) */}
      <div
        className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-40 sm:w-[440px] bg-[#FBF9F5]/95 dark:bg-[#16191D]/95 backdrop-blur-md border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl shadow-xl transition-all duration-300"
        role="region"
        aria-label="Bihar 360 Audio Player"
      >
        {/* Top Progress indicator line */}
        <div
          className="h-1 bg-[#EADBCE] dark:bg-[#2E343B] rounded-t-2xl cursor-pointer overflow-hidden"
          onClick={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            seekTo(percent * duration);
          }}
          title="Click to seek"
        >
          <div
            className="h-full bg-[#C85A32] transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="p-3 flex items-center justify-between gap-3">
          {/* Track Thumbnail & Title */}
          <div
            className="flex items-center gap-3 overflow-hidden cursor-pointer flex-1"
            onClick={toggleExpand}
            title="Click to expand story and details"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#1E2124] flex-shrink-0 border border-[#EADBCE] dark:border-[#2E343B]">
              <img
                src={currentTrack.coverImage || '/assets/images/chhath_puja_bihar_1789937759874.jpg'}
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
              )}
            </div>

            <div className="overflow-hidden">
              <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1E2124] dark:text-[#F5F1E8] truncate">
                {currentTrack.title}
              </h4>
              <p className="text-[11px] text-[#5A524A] dark:text-[#C8BFB4] truncate">
                {currentTrack.performer} • {currentTrack.regionDisplay}
              </p>
            </div>
          </div>

          {/* Quick Play Controls */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={prevTrack}
              className="p-1.5 rounded-lg text-[#5A524A] dark:text-[#C8BFB4] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] transition-colors"
              aria-label="Previous track"
            >
              <SkipBack className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-[#C85A32] hover:bg-[#B04C27] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={nextTrack}
              className="p-1.5 rounded-lg text-[#5A524A] dark:text-[#C8BFB4] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] transition-colors"
              aria-label="Next track"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={toggleExpand}
              className="p-1.5 rounded-lg text-[#5A524A] dark:text-[#C8BFB4] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] transition-colors"
              title="Expand Details"
              aria-label="Expand player details"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={closePlayer}
              className="p-1.5 rounded-lg text-[#8C8276] dark:text-[#948B80] hover:text-red-500 hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] transition-colors"
              title="Close Player"
              aria-label="Close player"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
