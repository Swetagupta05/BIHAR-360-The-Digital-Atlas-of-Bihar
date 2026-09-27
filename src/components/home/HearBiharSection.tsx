import React from 'react';
import { Play, Pause, Music2, Radio, ArrowRight, MapPin } from 'lucide-react';
import { useMusicPlayer } from '../../context/MusicPlayerContext';
import { MUSIC_TRACKS } from '../../data/music';

interface HearBiharSectionProps {
  onNavigateTraditions: () => void;
}

export const HearBiharSection: React.FC<HearBiharSectionProps> = ({
  onNavigateTraditions
}) => {
  const { playTrack, currentTrack, isPlaying, togglePlay } = useMusicPlayer();

  // Curate 4 quintessential regional soundscapes for the home showcase
  const showcaseTrackIds = [
    'kelwa-ke-paat-par', // Bhojpuri / Pan-Bihar Chhath
    'vidyapati-nachari-bhairavi', // Mithila Maithili
    'magahi-sohar-janam', // Magadh Magahi
    'anga-manjusha-behula' // Anga Angika
  ];

  const showcaseTracks = showcaseTrackIds
    .map(id => MUSIC_TRACKS.find(t => t.id === id))
    .filter(Boolean) as typeof MUSIC_TRACKS;

  const [selectedTrackIndex, setSelectedTrackIndex] = React.useState(0);
  const activeFeaturedTrack = showcaseTracks[selectedTrackIndex] || showcaseTracks[0];

  const handleTogglePlay = (index: number) => {
    setSelectedTrackIndex(index);
    const targetTrack = showcaseTracks[index];
    if (currentTrack?.id === targetTrack.id) {
      togglePlay();
    } else {
      playTrack(targetTrack, MUSIC_TRACKS);
    }
  };

  const isFeaturedPlaying = currentTrack?.id === activeFeaturedTrack?.id && isPlaying;

  return (
    <section className="py-20 sm:py-28 bg-[#14171A] text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#C85A32]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-[#2C5D75]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#E0BA6A] text-xs uppercase tracking-widest font-bold mb-2.5">
              <Radio className="w-3.5 h-3.5 text-[#E06C43] animate-pulse" />
              <span>Acoustic Landscape & Regional Languages</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-hindi-title text-white leading-tight mb-2">
              सुनिए बिहार को
            </h2>

            <p className="text-xl sm:text-2xl font-serif text-[#E0BA6A] italic">
              Listen to Bihar
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#EADBCE]/80 max-w-md font-light leading-relaxed">
            The vocal resonance of four sister languages—Maithili, Bhojpuri, Magahi, and Angika—sung into temple courtyards, harvest fields, and sacred riverbanks.
          </p>
        </div>

        {/* Player Showcase & Soundscape Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Interactive Ambient Player Terminal (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#1E2124] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E0BA6A] text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1.5">
                  <Music2 className="w-3 h-3 text-[#E0BA6A]" />
                  Verified Audio Heritage
                </span>

                {isFeaturedPlaying && (
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-3 bg-[#E0BA6A] animate-pulse" />
                    <span className="w-1 h-5 bg-[#C85A32] animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-[#E0BA6A] animate-pulse delay-150" />
                    <span className="w-1 h-4 bg-[#3E6550] animate-pulse delay-100" />
                  </div>
                )}
              </div>

              <div>
                <span className="text-xs text-[#EADBCE]/60 block font-mono mb-1">
                  Selected: {activeFeaturedTrack.language} Tradition • {activeFeaturedTrack.regionDisplay}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                  {activeFeaturedTrack.title}
                </h3>
                <h4 className="text-sm font-hindi-text text-[#E0BA6A]">
                  {activeFeaturedTrack.hindiTitle}
                </h4>
                <p className="text-xs text-[#EADBCE]/70 pt-1 font-mono">
                  Performer: {activeFeaturedTrack.performer}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#EADBCE]/80 font-light leading-relaxed pt-2">
                {activeFeaturedTrack.culturalContext}
              </p>

              {/* Instruments */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {activeFeaturedTrack.instruments.map((inst, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-[#EADBCE]"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            {/* Playback Control Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => handleTogglePlay(selectedTrackIndex)}
                id="hear-bihar-play-toggle-btn"
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium text-xs sm:text-sm transition-all shadow-lg ${
                  isFeaturedPlaying
                    ? 'bg-[#C85A32] text-white hover:bg-[#A54420]'
                    : 'bg-[#E0BA6A] text-[#14171A] hover:bg-white'
                }`}
              >
                {isFeaturedPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
                <span>{isFeaturedPlaying ? 'Pause Audio' : 'Listen to Recording'}</span>
              </button>

              <button
                onClick={onNavigateTraditions}
                className="text-xs text-[#EADBCE]/80 hover:text-white transition-colors flex items-center gap-1 font-medium"
              >
                <span>Explore Full Music Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Regional Soundscape Library Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {showcaseTracks.map((track, idx) => {
              const isSelected = selectedTrackIndex === idx;
              const isThisPlaying = currentTrack?.id === track.id && isPlaying;

              return (
                <div
                  key={track.id}
                  onClick={() => handleTogglePlay(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#252A30] border-[#E0BA6A]/60 shadow-lg'
                      : 'bg-[#1E2124]/70 border-white/10 hover:border-white/20 hover:bg-[#1E2124]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#E0BA6A]">
                        {track.language}
                      </span>
                      <span className="text-[10px] font-mono text-[#EADBCE]/60">
                        {track.durationMinutes}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-white line-clamp-1">
                      {track.title}
                    </h4>
                    <p className="font-hindi-text text-xs text-[#EADBCE]/70 line-clamp-1">
                      {track.hindiTitle}
                    </p>

                    <p className="text-[11px] text-[#EADBCE]/60 line-clamp-2 leading-relaxed">
                      {track.culturalContext}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                          isThisPlaying ? 'bg-[#C85A32] text-white' : 'bg-white/10 text-white'
                        }`}
                      >
                        {isThisPlaying ? (
                          <Pause className="w-3 h-3 fill-current" />
                        ) : (
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        )}
                      </div>
                      <span className="font-mono text-[11px] text-[#EADBCE]/80">
                        {isThisPlaying ? 'Playing' : 'Listen'}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-[#EADBCE]/50 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-[#E0BA6A]" />
                      <span>{track.regionDisplay.split(' ')[0]}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
