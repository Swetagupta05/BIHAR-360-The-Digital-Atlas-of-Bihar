import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Utensils,
  Music,
  Share2,
  Check,
  RotateCcw,
  Layers,
  ArrowRight,
  ShieldCheck,
  Bookmark
} from 'lucide-react';
import { GATEWAY_HUBS } from '../../data/itineraries';
import { useMusicPlayer } from '../../context/MusicPlayerContext';
import { MUSIC_TRACKS } from '../../data/music';

interface CustomJourneyBuilderProps {
  language: 'en' | 'hi';
  onSelectDistrictById?: (id: string) => void;
}

export const CustomJourneyBuilder: React.FC<CustomJourneyBuilderProps> = ({
  language,
  onSelectDistrictById
}) => {
  const { playTrack } = useMusicPlayer();

  // State
  const [selectedThemes, setSelectedThemes] = useState<string[]>(['spiritual', 'history']);
  const [duration, setDuration] = useState<number>(4);
  const [startHub, setStartHub] = useState<string>('patna');
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(['Patna', 'Nalanda', 'Gaya', 'Vaishali']);
  const [copied, setCopied] = useState(false);
  const [savedLocally, setSavedLocally] = useState(false);

  const availableThemes = [
    { id: 'spiritual', label: 'Spiritual & Sacred Trails', hindiLabel: 'अध्यात्म एवं तीर्थ' },
    { id: 'history', label: 'Ancient Empires & Forts', hindiLabel: 'साम्राज्य एवं ऐतिहासिक दुर्ग' },
    { id: 'food', label: 'Flavours & Culinary Heritage', hindiLabel: 'स्वाद एवं खानपान' },
    { id: 'arts', label: 'Living Crafts & Handlooms', hindiLabel: 'हस्तशिल्प एवं हथकरघा' },
    { id: 'nature', label: 'Rivers, Wetlands & Wildlife', hindiLabel: 'नदियाँ, आद्रभूमि एवं वन्यजीव' },
    { id: 'freedom', label: 'Freedom Movement & Gandhi', hindiLabel: 'स्वतंत्रता आंदोलन एवं गाँधी' }
  ];

  const durationOptions = [
    { days: 3, label: '3 Days', subtitle: 'Weekend Highlights' },
    { days: 4, label: '4 Days', subtitle: 'Classic Route' },
    { days: 6, label: '6 Days', subtitle: 'Grand Cultural Circuit' }
  ];

  const districtPicks = [
    { name: 'Patna', region: 'Magadh', food: 'Litti Chokha', trackId: 'takht-patna-sahib-gurbani', dialect: 'Magahi' },
    { name: 'Nalanda', region: 'Magadh', food: 'Silao Khaja', trackId: 'classical-court', dialect: 'Magahi' },
    { name: 'Gaya', region: 'Magadh', food: 'Gaya Tilkut', trackId: 'magahi-falgu-nirgun', dialect: 'Magahi' },
    { name: 'Vaishali', region: 'Tirhut', food: 'Chana Ghugni', trackId: 'bhikhari-thakur-bidesiya', dialect: 'Bajjika' },
    { name: 'Madhubani', region: 'Mithila', food: 'Makhana Kheer', trackId: 'samdaun-doli-uthalo', dialect: 'Maithili' },
    { name: 'Darbhanga', region: 'Mithila', food: 'Machh-Bhaat', trackId: 'darbhanga-dhrupad-darbari', dialect: 'Maithili' },
    { name: 'Bhagalpur', region: 'Anga', food: 'Katarni Chura-Dahi', trackId: 'anga-manjusha-behula', dialect: 'Angika' },
    { name: 'Rohtas', region: 'Bhojpur', food: 'Sattu Paratha', trackId: 'dumraon-shehnai-bhairavi', dialect: 'Bhojpuri' },
    { name: 'East Champaran', region: 'Tirhut', food: 'Ahuna Mutton', trackId: 'bhojpuri-kajari-barsan', dialect: 'Bhojpuri' },
    { name: 'Begusarai', region: 'Mithila', food: 'Fresh Water Singhara', trackId: 'folk-voices', dialect: 'Maithili' }
  ];

  const toggleTheme = (themeId: string) => {
    setSelectedThemes(prev =>
      prev.includes(themeId)
        ? prev.length > 1
          ? prev.filter(t => t !== themeId)
          : prev
        : [...prev, themeId]
    );
  };

  const toggleDistrict = (districtName: string) => {
    setSelectedDistricts(prev =>
      prev.includes(districtName)
        ? prev.length > 2
          ? prev.filter(d => d !== districtName)
          : prev
        : prev.length < duration
        ? [...prev, districtName]
        : [...prev.slice(1), districtName]
    );
  };

  const handleCopyItinerary = () => {
    const hub = GATEWAY_HUBS.find(h => h.id === startHub);
    const summary = `My Custom Bihar 360 Journey\nDuration: ${duration} Days\nGateway Hub: ${hub?.name}\nThemes: ${selectedThemes.join(', ')}\nRoute: ${selectedDistricts.join(' → ')}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveLocally = () => {
    const customJourney = {
      title: `Custom ${duration}-Day Journey (${selectedDistricts.join('-')})`,
      duration,
      startHub,
      themes: selectedThemes,
      districts: selectedDistricts,
      createdAt: Date.now()
    };
    try {
      localStorage.setItem('bihar360_custom_journey', JSON.stringify(customJourney));
      setSavedLocally(true);
      setTimeout(() => setSavedLocally(false), 3000);
    } catch {
      // Ignore if localStorage unavailable
    }
  };

  return (
    <div id="build-custom-journey-section" className="rounded-3xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] p-6 sm:p-10 space-y-8 shadow-xs mb-16">
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'यात्रा रचना स्टूडियो' : 'Interactive Itinerary Studio'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8]">
            {language === 'hi' ? 'अपनी यात्रा स्वयं बनाएँ' : 'Build Your Own Journey Through Bihar'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#A89F93] mt-1 max-w-2xl">
            {language === 'hi'
              ? 'अपनी रुचि, समय और पसंदीदा पड़ावों को चुनें। यह टूल आपके लिए एक सुसंगत सांस्कृतिक मार्ग, स्थानीय व्यंजन और संगीत की सूची तैयार करेगा।'
              : 'Select your personal cultural interests, duration, and starting hub. The digital atlas automatically generates a bespoke route linking places, cuisine, dialect, and music.'}
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedThemes(['spiritual', 'history']);
            setDuration(4);
            setStartHub('patna');
            setSelectedDistricts(['Patna', 'Nalanda', 'Gaya', 'Vaishali']);
          }}
          className="text-xs font-semibold text-[#8C8276] hover:text-[#C85A32] dark:hover:text-[#E06C43] flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'रीसेट करें' : 'Reset to Default'}</span>
        </button>
      </div>

      {/* Step 1: Select Story Themes */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-wider text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#C85A32] text-white text-[10px] flex items-center justify-center font-bold">1</span>
          <span>{language === 'hi' ? 'कथा विषय चुनें (Select Themes)' : 'Select Cultural Themes of Interest'}</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {availableThemes.map(th => {
            const isSelected = selectedThemes.includes(th.id);
            return (
              <button
                key={th.id}
                onClick={() => toggleTheme(th.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#14171A] border-[#14171A] dark:border-[#F5F1E8] shadow-sm'
                    : 'bg-white dark:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/40'
                }`}
              >
                <span className="text-xs font-bold leading-tight mb-1">
                  {language === 'hi' ? th.hindiLabel : th.label}
                </span>
                <span className={`text-[10px] ${isSelected ? 'text-[#E06C43]' : 'text-[#8C8276]'}`}>
                  {isSelected ? '✓ Selected' : '+ Add'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Duration & Starting Hub */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Duration selection */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#C85A32] text-white text-[10px] flex items-center justify-center font-bold">2</span>
            <span>{language === 'hi' ? 'यात्रा अवधि (Duration)' : 'Select Duration'}</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {durationOptions.map(opt => (
              <button
                key={opt.days}
                onClick={() => setDuration(opt.days)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  duration === opt.days
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                    : 'bg-white dark:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
                }`}
              >
                <div className="text-sm font-bold">{opt.label}</div>
                <div className="text-[10px] opacity-80">{opt.subtitle}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Starting Hub selection */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#C85A32] text-white text-[10px] flex items-center justify-center font-bold">3</span>
            <span>{language === 'hi' ? 'आरंभिक केंद्र (Gateway Hub)' : 'Select Arrival Gateway'}</span>
          </label>
          <select
            value={startHub}
            onChange={e => setStartHub(e.target.value)}
            className="w-full bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8] p-3 rounded-2xl focus:outline-none focus:border-[#C85A32]"
          >
            {GATEWAY_HUBS.map(hub => (
              <option key={hub.id} value={hub.id}>
                {language === 'hi' ? hub.hindiName : hub.name} — {hub.tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Step 4: Choose Districts to Include */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#C85A32] text-white text-[10px] flex items-center justify-center font-bold">4</span>
            <span>{language === 'hi' ? 'पड़ाव जिले चुनें (Choose up to ' + duration + ' stops)' : `Choose Districts (${selectedDistricts.length} / ${duration} selected)`}</span>
          </label>
          <span className="text-[11px] text-[#8C8276]">Click to add or swap</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {districtPicks.map(d => {
            const isChosen = selectedDistricts.includes(d.name);
            return (
              <button
                key={d.name}
                onClick={() => toggleDistrict(d.name)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isChosen
                    ? 'bg-[#2C5D75] text-white border-[#2C5D75] shadow-xs'
                    : 'bg-white dark:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B] hover:border-[#2C5D75]/40'
                }`}
              >
                <div>
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>{d.name}</span>
                    {isChosen && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div className="text-[10px] opacity-75">{d.region}</div>
                </div>

                <div className="text-[10px] mt-2 pt-1 border-t border-white/20 dark:border-white/10 opacity-90 truncate">
                  🍴 {d.food}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Generated Bespoke Itinerary Preview */}
      <div className="rounded-2xl bg-white dark:bg-[#1E2227] border-2 border-[#C85A32]/30 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
              Bespoke Journey Route
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
              Your {duration}-Day Cultural Expedition
            </h3>
            <p className="text-xs text-[#5C554E] dark:text-[#A89F93] mt-0.5">
              Gateway: <strong>{GATEWAY_HUBS.find(h => h.id === startHub)?.name}</strong> • Connected stops: {selectedDistricts.join(' → ')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveLocally}
              className="px-3.5 py-2 rounded-xl bg-[#F4EFE6] dark:bg-[#252A30] hover:bg-[#EADBCE] text-[#1E2124] dark:text-[#F5F1E8] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{savedLocally ? 'Saved to Browser!' : 'Save Journey'}</span>
            </button>

            <button
              onClick={handleCopyItinerary}
              className="px-3.5 py-2 rounded-xl bg-[#C85A32] hover:bg-[#B44D28] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Route'}</span>
            </button>
          </div>
        </div>

        {/* Sequential Day-by-Day Timeline */}
        <div className="space-y-4">
          {selectedDistricts.map((districtName, idx) => {
            const info = districtPicks.find(p => p.name === districtName);
            const track = MUSIC_TRACKS.find(t => t.id === info?.trackId);

            return (
              <div
                key={districtName}
                className="p-4 sm:p-5 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#14171A] dark:bg-[#F5F1E8] text-white dark:text-[#14171A] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
                        Day {idx + 1}: {districtName}
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EADBCE] dark:bg-[#252A30] font-semibold text-[#5C554E] dark:text-[#A89F93]">
                        {info?.region} Region
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#5C554E] dark:text-[#A89F93] mt-1.5">
                      <span className="flex items-center gap-1 text-[#C85A32] dark:text-[#E06C43] font-medium">
                        <Utensils className="w-3 h-3" />
                        <span>Taste: <strong>{info?.food}</strong></span>
                      </span>
                      <span>•</span>
                      <span>Spoken Dialect: <strong>{info?.dialect}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Soundtrack Recommendation */}
                {track && (
                  <button
                    onClick={() => playTrack(track)}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] font-bold text-[#2C5D75] dark:text-[#7EB5D6] hover:border-[#2C5D75] flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto shrink-0"
                  >
                    <Music className="w-3.5 h-3.5" />
                    <span>Play Soundtrack ({track.title})</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
