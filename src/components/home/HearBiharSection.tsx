import React from 'react';
import { Volume2, VolumeX, Play, Pause, Music2, Radio, Sparkles, ArrowRight } from 'lucide-react';

interface HearBiharSectionProps {
  onNavigateTraditions: () => void;
}

export const HearBiharSection: React.FC<HearBiharSectionProps> = ({
  onNavigateTraditions
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = React.useState(0);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const oscillatorsRef = React.useRef<OscillatorNode[]>([]);
  const gainNodeRef = React.useRef<GainNode | null>(null);

  const soundscapes = [
    {
      id: 'maithili-chhath',
      title: 'Maithili Chhath Arghya & Vidyapati Hymns',
      hindiTitle: 'मैथिली छठ अर्घ्य एवं विद्यापति के पद',
      region: 'Mithila (Darbhanga & Madhubani)',
      language: 'Maithili',
      description: 'Soulful morning chants echoing across mist-covered pond ghats at sunrise, layered with bells and rustic harmonium.',
      baseFreq: 136.1 // Indian meditative drone frequency (Om / Sadja)
    },
    {
      id: 'bhojpuri-bidesiya',
      title: 'Bhojpuri Bidesiya & Biraha Ballads',
      hindiTitle: 'भोजपुरी बिदेसिया व लोक गाथाएं',
      region: 'Bhojpur & Saran (Chapra)',
      language: 'Bhojpuri',
      description: 'Poignant folk ballads pioneered by Bhikhari Thakur depicting migration, labor, and the longing of village courtyards.',
      baseFreq: 146.8
    },
    {
      id: 'magahi-falgu',
      title: 'Magahi River Songs along the Falgu & Son',
      hindiTitle: 'मगही लोकगीत एवं फल्गु तट के स्वर',
      region: 'Magadh (Gaya & Patna)',
      language: 'Magahi',
      description: 'Ancient agrarian rhythmic refrains sung during harvest cycles and evening Ganga Aarti gatherings.',
      baseFreq: 164.8
    },
    {
      id: 'anga-manjusha',
      title: 'Angika Behula-Bishahari Gatha',
      hindiTitle: 'अंगिका बिहुला-विषहरी लोकगाथा',
      region: 'Anga (Bhagalpur & Munger)',
      language: 'Angika',
      description: 'Celebrated oral narrative chants recited during monsoon festivals honoring the serpent goddess and marital devotion.',
      baseFreq: 174.6
    }
  ];

  // Stop any playing sound synthesizer
  const stopAudio = () => {
    try {
      oscillatorsRef.current.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore already stopped
        }
      });
      oscillatorsRef.current = [];
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.1);
      }
    } catch {
      // ignore
    }
    setIsPlaying(false);
  };

  // Start synthesizing warm acoustic folk drone using Web Audio API
  const startAudio = (freq: number) => {
    stopAudio();
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Create rich Indian classical Tanpura / Flute overtone harmonics (Sa - Pa - Sa')
      const harmonics = [1, 1.5, 2, 2.98]; // Fundamental + Perfect Fifth + Octave + Upper resonance
      const newOscs: OscillatorNode[] = [];

      harmonics.forEach((multiplier, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = i === 0 ? 'triangle' : i === 1 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq * multiplier, ctx.currentTime);

        // Subtle gentle acoustic vibrato / detuning
        if (i > 0) {
          osc.detune.setValueAtTime((i - 1.5) * 4, ctx.currentTime);
        }

        oscGain.gain.setValueAtTime(0.25 / (i + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        newOscs.push(osc);
      });

      oscillatorsRef.current = newOscs;
      setIsPlaying(true);
    } catch (err) {
      console.warn('Audio synthesis note:', err);
    }
  };

  const handleTogglePlay = (index: number) => {
    if (isPlaying && activeTrackIndex === index) {
      stopAudio();
    } else {
      setActiveTrackIndex(index);
      startAudio(soundscapes[index].baseFreq);
    }
  };

  React.useEffect(() => {
    return () => {
      stopAudio();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  const currentTrack = soundscapes[activeTrackIndex];

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
              <Radio className="w-3.5 h-3.5" />
              <span>Acoustic Landscape & Regional Languages</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-hindi-title text-white leading-tight mb-2">
              सुनिए बिहार को
            </h2>
            
            <p className="text-xl sm:text-2xl font-serif text-[#E0BA6A] italic">
              Hear Bihar
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
                  Acoustic Soundscape
                </span>
                
                {isPlaying && (
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
                  Now Selected: {currentTrack.language} Tradition
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                  {currentTrack.title}
                </h3>
                <h4 className="text-sm font-hindi-text text-[#E0BA6A]">
                  {currentTrack.hindiTitle}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#EADBCE]/80 font-light leading-relaxed pt-2">
                {currentTrack.description}
              </p>
            </div>

            {/* Playback Control Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => handleTogglePlay(activeTrackIndex)}
                id="hear-bihar-play-toggle-btn"
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium text-xs sm:text-sm transition-all shadow-lg ${
                  isPlaying 
                    ? 'bg-[#C85A32] text-white hover:bg-[#A54420]' 
                    : 'bg-[#E0BA6A] text-[#14171A] hover:bg-white'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? 'Pause Ambient Tone' : 'Experience Acoustic Tone'}</span>
              </button>

              <button
                onClick={onNavigateTraditions}
                className="text-xs text-[#EADBCE]/70 hover:text-white transition-colors flex items-center gap-1 font-medium"
              >
                <span>Listen to Bihar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Regional Soundscape Library Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {soundscapes.map((track, idx) => {
              const isSelected = activeTrackIndex === idx;
              const isThisPlaying = isPlaying && isSelected;

              return (
                <div
                  key={track.id}
                  onClick={() => handleTogglePlay(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1E2124] border-[#E0BA6A]/50 shadow-md'
                      : 'bg-[#1E2124]/60 border-white/10 hover:border-white/20 hover:bg-[#1E2124]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-[#EADBCE]">
                        {track.language}
                      </span>
                      <button 
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                          isThisPlaying ? 'bg-[#C85A32] text-white' : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                        aria-label={isThisPlaying ? 'Pause soundscape' : 'Play soundscape'}
                      >
                        {isThisPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
                      </button>
                    </div>

                    <h4 className="text-sm font-serif font-bold text-white">
                      {track.title}
                    </h4>

                    <div className="text-xs font-hindi-text text-[#E0BA6A]">
                      {track.hindiTitle}
                    </div>

                    <p className="text-[11px] text-[#EADBCE]/75 font-light line-clamp-2">
                      {track.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-[#EADBCE]/60">
                    <span>{track.region}</span>
                    <span className="text-[#E0BA6A] font-medium">{isThisPlaying ? 'Playing' : 'Tap to hear'}</span>
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
