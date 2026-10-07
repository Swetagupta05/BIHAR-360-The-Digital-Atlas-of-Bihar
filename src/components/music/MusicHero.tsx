import React from 'react';
import { Volume2, Play, Sparkles, MapPin, Radio, Music } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';
import { useMusicPlayer } from '../../context/MusicPlayerContext';
import { MUSIC_TRACKS } from '../../data/music';

interface MusicHeroProps {
  language: 'en' | 'hi';
  onExploreCollections: () => void;
  onExploreRegional: () => void;
}

export const MusicHero: React.FC<MusicHeroProps> = ({
  language,
  onExploreCollections,
  onExploreRegional
}) => {
  const { playTrack, currentTrack, isPlaying } = useMusicPlayer();

  const handleStartListening = () => {
    // Play the quintessential Chhath anthem if nothing is playing
    const starter = MUSIC_TRACKS[0];
    playTrack(starter, MUSIC_TRACKS);
  };

  return (
    <section className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] bg-[#1E2124] text-white shadow-lg mb-10">
      {/* Background authentic visual */}
      <div className="absolute inset-0">
        <img
          src={VERIFIED_IMAGES.chhathPuja}
          alt="Singing folk traditions of Bihar along river ghats"
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-4xl space-y-6">
        {/* Cultural Tagline Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 text-[#F4A261] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
          <Radio className="w-3.5 h-3.5 text-[#E76F51] animate-pulse" />
          <span>
            {language === 'hi'
              ? 'बिहार की लोक एवं शास्त्रीय स्वर धरोहर'
              : 'Oral Heritage & Soundscapes of Bihar'}
          </span>
        </div>

        {/* Primary Editorial Title */}
        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
          {language === 'hi' ? 'सुनिए बिहार को' : 'Listen to Bihar'}
        </h1>

        {/* Editorial Subtitle */}
        <p className="font-serif text-xl sm:text-2xl text-[#F4A261] font-light leading-snug">
          {language === 'hi'
            ? 'स्वर, ताल और स्मृतियां — पीढ़ियों से बहती जीवित परंपरा।'
            : 'Songs, rhythms and voices carried across generations.'}
        </p>

        {/* Narrative Context */}
        <p className="text-sm sm:text-base text-[#D4C8BC] leading-relaxed max-w-2xl font-sans">
          {language === 'hi'
            ? 'गंगा की धुंधली भोर में गूंजते छठ के लोकगीत, मिथिला के दालानों में विद्यापति की नचारी और समदौन की विदाई, सारण में भिखारी ठाकुर के बिदेसिया के मार्मिक बोल, और दरभंगा राज के दरबारों से निकली गंभीर ध्रुपद परंपरा — बिहार का संगीत केवल सुना नहीं जाता, यह यहाँ के जीवन, विरह और ऋतुओं का स्पंदन है।'
            : 'From the unamplified dawn choruses echoing across misted river ghats during Chhath, to Vidyapati’s mystical Nachari in Mithila courtyards, Bhikhari Thakur’s poignant migration ballads in Saran, and the ancient microtonal Dhrupad nurtured under royal patronage in Darbhanga — sound in Bihar is not mere entertainment; it is memory, seasonal rhythm, and living history.'}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={handleStartListening}
            className="px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#B04C27] text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2.5 focus:outline-hidden"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>
              {isPlaying && currentTrack
                ? `Playing: ${currentTrack.title.slice(0, 24)}...`
                : language === 'hi'
                ? 'स्वर यात्रा आरंभ करें'
                : 'Begin Sound Journey'}
            </span>
          </button>

          <button
            onClick={onExploreCollections}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#F7F2EC] border border-white/20 font-medium text-xs sm:text-sm transition-all backdrop-blur-xs flex items-center gap-2 focus:outline-hidden"
          >
            <Music className="w-4 h-4 text-[#F4A261]" />
            <span>{language === 'hi' ? 'संग्रह एवं प्लेलिस्ट' : 'Curated Collections'}</span>
          </button>

          <button
            onClick={onExploreRegional}
            className="px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 text-[#EADBCE] border border-white/10 font-medium text-xs sm:text-sm transition-all flex items-center gap-2 focus:outline-hidden"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>{language === 'hi' ? 'क्षेत्रीय स्वर धाराएं' : 'Regional Soundscapes'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
