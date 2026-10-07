import React, { useEffect, useState } from 'react';
import {
  X,
  Clock,
  MapPin,
  Calendar,
  Compass,
  Bookmark,
  Share2,
  Utensils,
  Music,
  Play,
  Volume2,
  Check,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { CuratedJourney, JourneyStop } from '../../types';
import { useMusicPlayer } from '../../context/MusicPlayerContext';
import { MUSIC_TRACKS } from '../../data/music';

interface JourneyDetailModalProps {
  journey: CuratedJourney;
  language: 'en' | 'hi';
  onClose: () => void;
  onSelectDistrictById?: (id: string) => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (journey: CuratedJourney) => void;
}

export const JourneyDetailModal: React.FC<JourneyDetailModalProps> = ({
  journey,
  language,
  onClose,
  onSelectDistrictById,
  isBookmarked = false,
  onToggleBookmark
}) => {
  const { playTrack, currentTrack, isPlaying } = useMusicPlayer();
  const [copied, setCopied] = useState(false);
  const [activeStopTab, setActiveStopTab] = useState<number>(1);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCopySummary = () => {
    const textToCopy = `${journey.title} (${journey.hindiTitle})\n${journey.tagline}\nDuration: ${journey.durationDays} Days / ${journey.durationDays - 1} Nights\nKey Districts: ${journey.districtNames.join(', ')}\nStops: ${journey.stops.map(s => `${s.placeName} (${s.districtName})`).join(' → ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePlayMusic = (trackId: string) => {
    const track = MUSIC_TRACKS.find(t => t.id === trackId);
    if (track) {
      playTrack(track);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex justify-center items-start p-2 sm:p-4 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={journey.title}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#FBF9F5] dark:bg-[#16191D] rounded-3xl shadow-2xl border border-[#EADBCE] dark:border-[#2E343B] overflow-hidden my-auto flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Header with Visual */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-[#1E2124] shrink-0">
          <img
            src={journey.heroImage}
            alt={journey.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-black/40 to-black/30" />

          {/* Top action controls */}
          <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 z-10">
            <span
              className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase text-white shadow-md backdrop-blur-md truncate max-w-[60%]"
              style={{ backgroundColor: journey.themeColor }}
            >
              {journey.themeLabel}
            </span>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {onToggleBookmark && (
                <button
                  type="button"
                  onClick={() => onToggleBookmark(journey)}
                  className={`p-2.5 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full backdrop-blur-md transition-all cursor-pointer ${
                    isBookmarked
                      ? 'bg-[#C85A32] text-white shadow-md'
                      : 'bg-black/50 hover:bg-black/70 text-white'
                  }`}
                  title={isBookmarked ? 'Remove Bookmark' : 'Save Journey'}
                  aria-label={isBookmarked ? 'Remove Bookmark' : 'Save Journey'}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              )}

              <button
                type="button"
                onClick={handleCopySummary}
                className="p-2.5 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer"
                title="Copy Route Summary"
                aria-label="Copy Route Summary"
              >
                {copied ? <Check className="w-4 h-4 text-[#88C4A0]" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2.5 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer"
                title="Close (Esc)"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Title & Specs inside Banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1.5 sm:space-y-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs font-semibold text-[#EADBCE]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#E06C43]" />
                <span>{journey.durationDays} Days / {journey.durationDays - 1} Nights</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-[#E06C43]" />
                <span>{journey.totalStops} Major Stops</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#88C4A0]" />
                <span>Best: {journey.bestSeason}</span>
              </span>
            </div>

            <h2 className="font-serif font-bold text-xl min-[380px]:text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              {language === 'hi' ? journey.hindiTitle : journey.title}
            </h2>

            <p className="font-serif italic text-xs sm:text-lg text-[#EADBCE] font-light line-clamp-2">
              {language === 'hi' ? journey.hindiTagline : journey.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-8 sm:space-y-10 flex-1">
          {/* 1. Narrative Section: The Story Behind the Route */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-[#EADBCE] dark:border-[#2E343B]">
            <div className="md:col-span-2 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'यात्रा की अंतर्कथा' : 'The Story Behind the Journey'}</span>
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                {language === 'hi' ? 'इस परिपथ का ऐतिहासिक एवं सांस्कृतिक महत्व' : 'Why Follow This Route?'}
              </h3>
              <p className="text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                {journey.storyNarrative}
              </p>
            </div>

            <div className="bg-[#F4EFE6] dark:bg-[#1E2227] rounded-2xl p-5 border border-[#EADBCE] dark:border-[#2E343B] space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block mb-1">
                  {language === 'hi' ? 'संबंधित जिले' : 'Connected Districts'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {journey.districts.map((dId, idx) => (
                    <button
                      key={dId}
                      onClick={() => {
                        if (onSelectDistrictById) {
                          onClose();
                          onSelectDistrictById(dId);
                        }
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-[#252A30] text-[#1E2124] dark:text-[#F5F1E8] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <MapPin className="w-3 h-3 text-[#C85A32]" />
                      <span>{journey.districtNames[idx]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#EADBCE] dark:border-[#2E343B] text-[11px] text-[#5C554E] dark:text-[#A89F93] space-y-1">
                <div><strong className="text-[#1E2124] dark:text-[#F5F1E8]">Pace:</strong> {journey.pace}</div>
                <div><strong className="text-[#1E2124] dark:text-[#F5F1E8]">Regions:</strong> {journey.regions.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* 2. Interactive Day-by-Day Expedition Stops */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                  {language === 'hi' ? 'विस्तृत यात्रा कार्यक्रम' : 'Expedition Itinerary'}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                  {language === 'hi' ? 'दिन-प्रतिदिन के मुख्य पड़ाव' : 'Day-by-Day Route & Stops'}
                </h3>
              </div>

              {/* Stop Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {journey.stops.map(stop => (
                  <button
                    key={stop.stopNumber}
                    onClick={() => setActiveStopTab(stop.stopNumber)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activeStopTab === stop.stopNumber
                        ? 'bg-[#C85A32] text-white shadow-xs'
                        : 'bg-white dark:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B]'
                    }`}
                  >
                    Day {stop.dayNumber}: {stop.districtName}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Stop Highlight Card */}
            {journey.stops
              .filter(s => s.stopNumber === activeStopTab)
              .map(stop => (
                <div
                  key={stop.stopNumber}
                  className="rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] p-6 sm:p-8 space-y-6 shadow-xs animate-fade-in"
                >
                  {/* Stop Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32] text-white text-[10px] font-bold uppercase">
                          Day {stop.dayNumber} • Stop {stop.stopNumber}
                        </span>
                        <button
                          onClick={() => {
                            if (onSelectDistrictById) {
                              onClose();
                              onSelectDistrictById(stop.districtId);
                            }
                          }}
                          className="px-2.5 py-0.5 rounded-full bg-[#2C5D75]/10 dark:bg-[#2C5D75]/30 text-[#2C5D75] dark:text-[#7EB5D6] text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <MapPin className="w-3 h-3" />
                          <span>{stop.districtName} District</span>
                        </button>
                      </div>

                      <h4 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
                        {stop.placeName}
                      </h4>
                      {stop.hindiPlaceName && (
                        <p className="text-xs sm:text-sm text-[#C85A32] dark:text-[#E06C43] font-semibold">
                          {stop.hindiPlaceName}
                        </p>
                      )}
                    </div>

                    <div className="text-right text-xs text-[#8C8276] dark:text-[#A89F93] space-y-1 sm:shrink-0">
                      <div><strong className="text-[#1E2124] dark:text-[#F5F1E8]">Language:</strong> {stop.languageSpoken}</div>
                      <div><strong className="text-[#1E2124] dark:text-[#F5F1E8]">Transit:</strong> {stop.travelTransit}</div>
                    </div>
                  </div>

                  {/* Stop Narrative */}
                  <div className="space-y-2">
                    <h5 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
                      {stop.headline}
                    </h5>
                    <p className="text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                      {stop.narrative}
                    </p>
                  </div>

                  {/* What to Experience */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3E6550] dark:text-[#88C4A0]">
                      {language === 'hi' ? 'क्या देखें एवं अनुभव करें' : 'Key Sights & Experiences'}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2D3238] dark:text-[#C8BFB4]">
                      {stop.whatToExperience.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-[#FBF9F5] dark:bg-[#16191D] p-3 rounded-xl border border-[#EADBCE] dark:border-[#2E343B]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sensory & Practical Grid: Food, Music, and Advisory */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    {/* Food connection */}
                    {stop.culinaryHighlight && (
                      <div className="p-4 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#C85A32] dark:text-[#E06C43]">
                          <Utensils className="w-3.5 h-3.5" />
                          <span>Taste Here</span>
                        </div>
                        <div className="font-semibold text-xs text-[#1E2124] dark:text-[#F5F1E8]">
                          {stop.culinaryHighlight.dishName}
                        </div>
                        <p className="text-[11px] text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
                          {stop.culinaryHighlight.description}
                        </p>
                      </div>
                    )}

                    {/* Music connection */}
                    {stop.musicRecommendation && (
                      <div className="p-4 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#2C5D75] dark:text-[#7EB5D6]">
                            <Music className="w-3.5 h-3.5" />
                            <span>Soundtrack to Listen</span>
                          </div>
                          <div className="font-semibold text-xs text-[#1E2124] dark:text-[#F5F1E8] mt-1">
                            {stop.musicRecommendation.title}
                          </div>
                          <p className="text-[10px] text-[#8C8276] dark:text-[#A89F93]">
                            {stop.musicRecommendation.genre}
                          </p>
                        </div>

                        <button
                          onClick={() => handlePlayMusic(stop.musicRecommendation!.trackId)}
                          className="w-full mt-2 py-1.5 px-3 rounded-lg bg-[#2C5D75] hover:bg-[#1F4457] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Play Audio Track</span>
                        </button>
                      </div>
                    )}

                    {/* Practical Tip */}
                    <div className="p-4 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5 sm:col-span-2 lg:col-span-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#3E6550] dark:text-[#88C4A0]">
                        <Info className="w-3.5 h-3.5" />
                        <span>Field Practical Tip</span>
                      </div>
                      <p className="text-[11px] text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
                        {stop.practicalTips}
                      </p>
                      {stop.historicalContext && (
                        <p className="text-[10px] text-[#8C8276] dark:text-[#A89F93] pt-1 border-t border-[#EADBCE] dark:border-[#2E343B]">
                          <strong>Historical Layer:</strong> {stop.historicalContext}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* 3. Cultural Matrix: Culinary, Crafts, Eras */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F4EFE6] dark:bg-[#1A1D22] p-6 rounded-2xl border border-[#EADBCE] dark:border-[#2E343B]">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                <span>Culinary Traditions</span>
              </span>
              <ul className="text-xs space-y-1 text-[#2D3238] dark:text-[#C8BFB4]">
                {journey.culinaryTraditions.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C85A32]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2C5D75] dark:text-[#7EB5D6] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Crafts & Handlooms</span>
              </span>
              <ul className="text-xs space-y-1 text-[#2D3238] dark:text-[#C8BFB4]">
                {journey.craftTraditions.map((craft, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#2C5D75]" />
                    <span>{craft}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3E6550] dark:text-[#88C4A0] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Connected Eras</span>
              </span>
              <ul className="text-xs space-y-1 text-[#2D3238] dark:text-[#C8BFB4]">
                {journey.connectedEras.map((era, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#3E6550]" />
                    <span>{era}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Travel Advisories & Sources Footer */}
          <div className="space-y-4 pt-4 border-t border-[#EADBCE] dark:border-[#2E343B]">
            <div className="space-y-2">
              <h5 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3E6550] dark:text-[#88C4A0]" />
                <span>Responsible Travel Advisories</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C554E] dark:text-[#A89F93]">
                {journey.travelAdvisories.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#FBF9F5] dark:bg-[#16191D] p-3 rounded-xl border border-[#EADBCE] dark:border-[#2E343B]">
                    <Check className="w-3.5 h-3.5 text-[#3E6550] shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-[#8C8276] dark:text-[#7A7369] pt-2">
              <strong className="text-[#5C554E] dark:text-[#A89F93]">Primary Historical & Field Sources:</strong>{' '}
              {journey.sources.join(' • ')}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#F4EFE6] dark:bg-[#1A1D22] border-t border-[#EADBCE] dark:border-[#2E343B] p-4 sm:px-8 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5C554E] dark:text-[#A89F93]">
            <span>{journey.stops.length} Stops</span>
            <span>•</span>
            <span>{journey.durationDays} Days</span>
            <span>•</span>
            <span>{journey.pace}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopySummary}
              className="px-4 py-2 rounded-xl bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-bold text-[#1E2124] dark:text-[#F5F1E8] hover:border-[#C85A32] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#88C4A0]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Share Itinerary'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#C85A32] hover:bg-[#B44D28] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
