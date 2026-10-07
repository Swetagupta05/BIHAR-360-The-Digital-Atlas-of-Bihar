import React, { useState } from 'react';
import { MapPin, Music, Play, ArrowRight, Sparkles } from 'lucide-react';
import { MusicTrack } from '../../types';
import { useMusicPlayer } from '../../context/MusicPlayerContext';

interface RegionalSoundscapeProps {
  tracks: MusicTrack[];
  language: 'en' | 'hi';
  onSelectTrackDetail: (track: MusicTrack) => void;
  onSelectDistrictById?: (id: string) => void;
}

export const RegionalSoundscape: React.FC<RegionalSoundscapeProps> = ({
  tracks,
  language,
  onSelectTrackDetail,
  onSelectDistrictById
}) => {
  const { playTrack, currentTrack, isPlaying } = useMusicPlayer();
  const [selectedRegionId, setSelectedRegionId] = useState<string>('mithila');

  const regions = [
    {
      id: 'mithila',
      nameEn: 'Mithila & Tirhut',
      nameHi: 'मिथिला एवं तिरहुत',
      districts: 'Darbhanga, Madhubani, Samastipur',
      primaryLanguage: 'Maithili',
      keyTraditions: 'Darbhanga Dhrupad, Vidyapati Nachari, Samdaun (Farewell), Kohbar',
      instruments: 'Pakhawaj, Rudra Veena, Harmonium, Manjira',
      character:
        'Lyrical, microtonal, and deeply matriarchal. Songs are passed down across generations of women in open courtyards without formal notation, while courtly Dhrupad was nurtured under the Khandavala Maharajas of Darbhanga.',
      trackIds: ['vidyapati-nachari-bhairavi', 'darbhanga-dhrupad-darbari', 'samdaun-doli-uthalo']
    },
    {
      id: 'bhojpur',
      nameEn: 'Bhojpur & Saran',
      nameHi: 'भोजपुर एवं सारण',
      districts: 'Saran (Chapra), Bhojpur (Ara), Buxar (Dumraon)',
      primaryLanguage: 'Bhojpuri',
      keyTraditions: 'Bidesiya (Migration Ballads), Dumraon Shehnai, Kajari (Monsoon), Biraha',
      instruments: 'Shehnai, Duggi, Sarangi, Jhal, Dholak',
      character:
        'Expansive, poignant, and theatrical. Songs mirror the social realities of migration, agrarian labor along the Ganga and Gandak, and the royal reed artistry pioneered by the ancestors of Ustad Bismillah Khan in Dumraon.',
      trackIds: ['bhikhari-thakur-bidesiya', 'dumraon-shehnai-bhairavi', 'bhojpuri-kajari-barsan', 'kelwa-ke-paat-par']
    },
    {
      id: 'magadh',
      nameEn: 'Magadh & Gaya',
      nameHi: 'मगध एवं गया',
      districts: 'Gaya, Patna, Nalanda, Jehanabad',
      primaryLanguage: 'Magahi & Hindustani',
      keyTraditions: 'Sohar (Birth), Falgu Nirgun, Sufi Qawwali of Maner, Takht Patna Gurbani',
      instruments: 'Thali (Bronze plate), Ektara, Harmonium, Dholak',
      character:
        'Philosophical contemplation meeting rich syncretic spirituality. From ascetic verses contemplating impermanence on Gaya’s riverbanks to 700 years of Sufi ecstasy in Maner Sharif and classical Sikh Gurbani in old Patna City.',
      trackIds: ['magahi-sohar-janam', 'sufi-qawwali-maner-sharif', 'takht-patna-sahib-gurbani', 'magahi-falgu-nirgun']
    },
    {
      id: 'anga',
      nameEn: 'Anga & Eastern Plains',
      nameHi: 'अंग प्रदेश (भागलपुर व बांका)',
      districts: 'Bhagalpur, Munger, Banka',
      primaryLanguage: 'Angika',
      keyTraditions: 'Behula-Bishahari Gatha, Manjusha Epic Songs, Ganga Boat Chants',
      instruments: 'Dhak, Kansi, Bansuri, Manjira',
      character:
        'Epic narrative traditions accompanying the GI-tagged Manjusha folk art, celebrating the mythological saga of Behula sailing the Ganga to defy mortality and cosmic snakes.',
      trackIds: ['anga-manjusha-behula']
    },
    {
      id: 'plateau',
      nameEn: 'Southern Plateau & Hills',
      nameHi: 'दक्षिण पठार एवं वन्य क्षेत्र',
      districts: 'Rohtas, Kaimur, Jamui',
      primaryLanguage: 'Bhojpuri & Regional Dialects',
      keyTraditions: 'Karam Parva Mandar Rhythm, Jawa Germination Songs, Circular Folk Dances',
      instruments: 'Mandar (Clay cylinder drum), Nagara, Bansuri',
      character:
        'Ecological nature-worship celebrating the sacred Karam tree branch, seed germination, and community circle dancing driven by the deep earth resonance of the Mandar drum.',
      trackIds: ['karam-mandar-geet']
    }
  ];

  const activeRegion = regions.find(r => r.id === selectedRegionId) || regions[0];
  const regionTracks = tracks.filter(t => activeRegion.trackIds.includes(t.id));

  return (
    <section id="regional-soundscape-section" className="space-y-8 rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 shadow-xs">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
          <span>{language === 'hi' ? 'भौगोलिक एवं भाषाई स्वर' : 'Geographic Soundscapes'}</span>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
          {language === 'hi' ? 'माटी और भाषा के अनुसार संगीत' : 'Regional Soundscapes of Bihar'}
        </h2>

        <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
          {language === 'hi'
            ? 'बिहार की संगीत परंपराएं इसकी नदियों, बोलियों और सांस्कृतिक अंचलों से गहराई से जुड़ी हैं। जानिए मिथिला, भोजपुर, मगध, अंग और दक्षिण पठार के विशिष्ट स्वर और वाद्य।'
            : 'Bihar’s musical identity is profoundly tied to its rivers, dialects, and landscape. Explore how tonal cadence, instruments, and themes transition across Mithila, Bhojpur, Magadh, Anga, and the southern plateau.'}
        </p>
      </div>

      {/* Region Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {regions.map(r => {
          const isSelected = r.id === selectedRegionId;
          return (
            <button
              key={r.id}
              onClick={() => setSelectedRegionId(r.id)}
              className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-white dark:bg-[#1E2227] border-[#C85A32] shadow-sm ring-1 ring-[#C85A32]/40'
                  : 'bg-white/60 dark:bg-[#1E2227]/60 border-[#EADBCE] dark:border-[#2E343B] hover:bg-white dark:hover:bg-[#1E2227]'
              }`}
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] uppercase block truncate">
                  {r.primaryLanguage}
                </span>
                <h3 className="font-serif font-bold text-xs sm:text-sm text-[#1E2124] dark:text-[#F5F1E8]">
                  {language === 'hi' ? r.nameHi : r.nameEn}
                </h3>
              </div>
              <span className={`text-[10px] font-mono pt-2 ${isSelected ? 'text-[#C85A32] dark:text-[#E06C43] font-semibold' : 'text-[#8C8276] dark:text-[#948B80]'}`}>
                {r.trackIds.length} recordings →
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Region Detailed Dossier */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Region Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#C85A32] dark:text-[#E06C43] font-semibold">
                Territorial Sound Profile
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
                {language === 'hi' ? activeRegion.nameHi : activeRegion.nameEn}
              </h3>
              <p className="text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
                Districts: {activeRegion.districts}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
              {activeRegion.character}
            </p>

            <div className="space-y-2 pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B] text-xs">
              <div>
                <strong className="text-[#1E2124] dark:text-[#F5F1E8] font-mono uppercase text-[10px] block">
                  Key Documented Traditions:
                </strong>
                <span className="text-[#5A524A] dark:text-[#C8BFB4]">{activeRegion.keyTraditions}</span>
              </div>
              <div>
                <strong className="text-[#1E2124] dark:text-[#F5F1E8] font-mono uppercase text-[10px] block">
                  Signature Instruments:
                </strong>
                <span className="text-[#5A524A] dark:text-[#C8BFB4]">{activeRegion.instruments}</span>
              </div>
            </div>
          </div>

          {/* Right Region Playlist Stream */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-[#8C8276] dark:text-[#A89F93] pb-1">
              Verified Recordings from this Cultural Zone:
            </div>

            <div className="space-y-3">
              {regionTracks.map(track => {
                const isThisTrackPlaying = currentTrack?.id === track.id && isPlaying;

                return (
                  <div
                    key={track.id}
                    className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/40 transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      <button
                        onClick={() => playTrack(track, regionTracks)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 shadow-xs ${
                          isThisTrackPlaying
                            ? 'bg-[#C85A32] text-white'
                            : 'bg-white dark:bg-[#252A30] text-[#1E2124] dark:text-[#F5F1E8] border border-[#EADBCE] dark:border-[#2E343B]'
                        }`}
                        aria-label={isThisTrackPlaying ? 'Pause' : 'Play'}
                      >
                        {isThisTrackPlaying ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                        ) : (
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        )}
                      </button>

                      <div className="min-w-0">
                        <h4
                          onClick={() => onSelectTrackDetail(track)}
                          className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] truncate hover:text-[#C85A32] cursor-pointer"
                        >
                          {track.title}
                        </h4>
                        <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] truncate">
                          {track.performer} • {track.tradition}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[11px] font-mono text-[#8C8276] dark:text-[#A89F93] hidden sm:inline">
                        {track.durationMinutes}
                      </span>
                      <button
                        onClick={() => onSelectTrackDetail(track)}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:bg-[#C85A32]/10 transition-colors"
                      >
                        Context
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
