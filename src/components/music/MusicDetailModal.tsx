import React, { useEffect } from 'react';
import { X, Play, Pause, MapPin, Music, Sparkles, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { MusicTrack } from '../../types';
import { useMusicPlayer } from '../../context/MusicPlayerContext';

interface MusicDetailModalProps {
  track: MusicTrack | null;
  onClose: () => void;
  language: 'en' | 'hi';
  onNavigateTab?: (tab: string) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const MusicDetailModal: React.FC<MusicDetailModalProps> = ({
  track,
  onClose,
  language,
  onNavigateTab,
  onSelectDistrictById
}) => {
  const { playTrack, currentTrack, isPlaying, togglePlay } = useMusicPlayer();

  useEffect(() => {
    if (!track) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [track, onClose]);

  if (!track) return null;

  const isThisTrackPlaying = currentTrack?.id === track.id && isPlaying;

  const handlePlayNow = () => {
    if (currentTrack?.id === track.id) {
      togglePlay();
    } else {
      playTrack(track);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={track.title}
        className="relative w-full max-w-2xl bg-[#FBF9F5] dark:bg-[#16191D] text-[#1E2124] dark:text-[#F5F1E8] rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Sticky Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#EADBCE] dark:border-[#2E343B] bg-white/50 dark:bg-[#1E2227]/50 backdrop-blur-xs gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32] flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] truncate">
              Bihar 360 Sound Archive • {track.regionDisplay}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#1E2124] dark:text-[#F5F1E8] border border-[#EADBCE] dark:border-[#2E343B] transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Close track story"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Story Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-5 sm:space-y-6 flex-1">
          {/* Visual Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-[#1E2124] border border-[#EADBCE] dark:border-[#2E343B] shadow-md flex-shrink-0">
              <img
                src={track.coverImage || '/assets/images/chhath_puja_bihar_1789937759874.webp'}
                alt={track.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-xs text-[10px] font-mono text-white/90">
                {track.language}
              </span>
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1 min-w-0">
              <span className="px-2.5 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-xs font-mono font-semibold uppercase tracking-wider inline-block">
                {track.tradition}
              </span>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
                {track.title}
              </h2>

              <p className="font-serif text-lg text-[#C85A32] dark:text-[#E06C43]">
                {track.hindiTitle}
              </p>

              <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4]">
                Performer: <strong className="text-[#1E2124] dark:text-[#F5F1E8]">{track.performer}</strong>
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-[#8C8276] dark:text-[#A89F93] font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>{track.regionDisplay}</span>
                </span>
                <span>•</span>
                <span>{track.durationMinutes}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B]">
            <div>
              <span className="text-xs font-mono uppercase text-[#8C8276] dark:text-[#A89F93] block">
                Official YouTube Audio Stream
              </span>
              <span className="text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]">
                {track.traditionType.replace('_', ' ').toUpperCase()}
              </span>
            </div>

            <button
              onClick={handlePlayNow}
              className="px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B04C27] text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              {isThisTrackPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Pause Playback</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                  <span>Play in Audio Player</span>
                </>
              )}
            </button>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] border-b border-[#F0E8DD] dark:border-[#2E343B] pb-2">
              Cultural & Ethnographic Context
            </h3>
            <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
              {track.culturalContext}
            </p>
            <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
              {track.description}
            </p>
          </div>

          {/* Instruments */}
          {track.instruments && track.instruments.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                Traditional Acoustic Instruments
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {track.instruments.map((inst, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Cross-Link Integration */}
          <div className="space-y-2 pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B]">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Related Bihar 360 Explorations
            </h4>
            <div className="flex flex-wrap gap-2">
              {track.festivalId && onNavigateTab && (
                <button
                  onClick={() => {
                    onClose();
                    onNavigateTab('festivals');
                  }}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Explore Associated Festival</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}

              {track.personalityId && onNavigateTab && (
                <button
                  onClick={() => {
                    onClose();
                    onNavigateTab('personalities');
                  }}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1.5"
                >
                  <span>Explore Performer / Maestro Biography</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}

              {track.districtId && onSelectDistrictById && (
                <button
                  onClick={() => {
                    onClose();
                    onSelectDistrictById(track.districtId!);
                  }}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#4A453E] dark:text-[#C8BFB4] hover:underline flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Explore {track.districtName} District Dossier</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Verifiable Source Box */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#5A524A] dark:text-[#C8BFB4] space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Verifiable Music & Archival Source</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              <strong>Source Authority:</strong> {track.source}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F4EFE6] dark:bg-[#16191D] border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
          <span className="text-xs text-[#7A7065] dark:text-[#A89F93] font-mono">
            BIHAR 360 • Intangible Audio Heritage Archive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1E2124] dark:bg-[#252A30] hover:bg-[#C85A32] dark:hover:bg-[#C85A32] text-white text-xs font-semibold transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
