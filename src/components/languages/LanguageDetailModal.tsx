import React, { useEffect, useState } from 'react';
import {
  X,
  BookOpen,
  ScrollText,
  Music,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  Play,
  ArrowRight,
  ExternalLink,
  Languages
} from 'lucide-react';
import { LanguageProfile } from '../../types';
import { MUSIC_TRACKS } from '../../data/music';
import { useMusicPlayer } from '../../context/MusicPlayerContext';

interface LanguageDetailModalProps {
  languageProfile: LanguageProfile | null;
  onClose: () => void;
  language: 'en' | 'hi';
  onNavigateTab?: (tab: string) => void;
  onSelectDistrictById?: (id: string) => void;
  onSelectPersonality?: (personalityId: string) => void;
}

export const LanguageDetailModal: React.FC<LanguageDetailModalProps> = ({
  languageProfile,
  onClose,
  language,
  onNavigateTab,
  onSelectDistrictById,
  onSelectPersonality
}) => {
  const { playTrack } = useMusicPlayer();
  const [topicLang, setTopicLang] = useState<'en' | 'hi' | 'native'>('native');

  useEffect(() => {
    if (!languageProfile) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [languageProfile, onClose]);

  if (!languageProfile) return null;

  const connectedMusicTracks = MUSIC_TRACKS.filter(t =>
    languageProfile.musicTrackIds.includes(t.id)
  );

  const getTranslatedPassage = () => {
    const passage = languageProfile.sampleLiteraryPassage;
    if (!passage) return null;
    if (topicLang === 'en') return passage.translations.en;
    if (topicLang === 'hi') return passage.translations.hi;
    // Native language fallback
    if (languageProfile.id === 'maithili' && passage.translations.mai) return passage.translations.mai;
    if (languageProfile.id === 'bhojpuri' && passage.translations.bho) return passage.translations.bho;
    if (languageProfile.id === 'magahi' && passage.translations.mag) return passage.translations.mag;
    if (languageProfile.id === 'angika' && passage.translations.an) return passage.translations.an;
    if (languageProfile.id === 'urdu' && passage.translations.ur) return passage.translations.ur;
    return passage.originalText;
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Documentary profile of ${languageProfile.name}`}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FBF9F5] dark:bg-[#16191D] text-[#1E2124] dark:text-[#F5F1E8] rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EADBCE] dark:border-[#2E343B] bg-white/50 dark:bg-[#1E2227]/50 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Linguistic Archive • {languageProfile.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white dark:bg-[#1E2227] hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#1E2124] dark:text-[#F5F1E8] border border-[#EADBCE] dark:border-[#2E343B] transition-colors"
            aria-label="Close documentary profile"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Story Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Header Title & Status */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-xs font-mono font-semibold uppercase">
                {languageProfile.officialStatus}
              </span>
              <span className="text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
                {languageProfile.classification}
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
                {languageProfile.name}
              </h2>
              <span className="font-serif text-xl sm:text-2xl text-[#C85A32] dark:text-[#E06C43]">
                {languageProfile.localName}
              </span>
            </div>

            <p className="text-xs text-[#5A524A] dark:text-[#A89F93] leading-relaxed italic">
              {languageProfile.scholarlyClassificationNote}
            </p>
          </div>

          {/* Overview Narrative */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] font-bold block">
              Overview & Cultural Character:
            </span>
            <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
              {languageProfile.overview}
            </p>
          </div>

          {/* Regional & District Connections */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Primary Cultural Regions & Documented Districts</span>
            </div>

            <p className="text-[11px] text-[#8C8276] dark:text-[#A89F93] italic">
              Note: Districts are linguistically diverse; these represent areas where the language is widely documented.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {languageProfile.associatedDistricts.map(distId => (
                <button
                  key={distId}
                  onClick={() => {
                    if (onSelectDistrictById) {
                      onClose();
                      onSelectDistrictById(distId);
                    }
                  }}
                  className="px-3 py-1 rounded-xl bg-white dark:bg-[#1E2227] hover:border-[#C85A32] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8] transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="capitalize">{distId.replace('-', ' ')}</span>
                  <ArrowRight className="w-2.5 h-2.5 text-[#8C8276] group-hover:text-[#C85A32] transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Traditional Scripts Section */}
          <div className="p-5 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] font-bold block">
                Traditional Scripts & Modern Usage:
              </span>
              <span className="text-[10px] font-mono text-[#C85A32] dark:text-[#E06C43]">
                Language ≠ Script
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {languageProfile.traditionalScripts.map((sc, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8]"
                >
                  {sc}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#5A524A] dark:text-[#A89F93] pt-1 leading-relaxed">
              Primary medium today: <strong>{languageProfile.primaryScript}</strong>.
            </p>
          </div>

          {/* TOPIC-LEVEL LOCALIZATION DEMO / SAMPLE PASSAGE */}
          {languageProfile.sampleLiteraryPassage && (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F0E8DD] dark:border-[#2E343B]">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[#C85A32] dark:text-[#E06C43] text-xs font-mono font-bold uppercase tracking-wider">
                    <Languages className="w-3.5 h-3.5" />
                    <span>Topic-Level Localized Passage</span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1E2124] dark:text-[#F5F1E8]">
                    {languageProfile.sampleLiteraryPassage.workTitle}
                  </h4>
                  <p className="text-[11px] text-[#8C8276] dark:text-[#A89F93]">
                    By {languageProfile.sampleLiteraryPassage.author}
                  </p>
                </div>

                {/* Topic-Level Language Switcher (Only converts this specific passage) */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-[#F4EFE6] dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] self-start sm:self-auto">
                  <button
                    onClick={() => setTopicLang('native')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      topicLang === 'native'
                        ? 'bg-[#C85A32] text-white shadow-xs'
                        : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
                    }`}
                  >
                    Original ({languageProfile.name.split(' ')[0]})
                  </button>
                  <button
                    onClick={() => setTopicLang('hi')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      topicLang === 'hi'
                        ? 'bg-[#C85A32] text-white shadow-xs'
                        : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
                    }`}
                  >
                    हिंदी
                  </button>
                  <button
                    onClick={() => setTopicLang('en')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      topicLang === 'en'
                        ? 'bg-[#C85A32] text-white shadow-xs'
                        : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Dynamic Localized Stanza */}
              <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B]">
                <p className="font-serif text-base sm:text-lg text-[#1E2124] dark:text-[#F5F1E8] leading-relaxed italic">
                  "{getTranslatedPassage()}"
                </p>
              </div>

              <p className="text-xs text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                {languageProfile.sampleLiteraryPassage.commentary}
              </p>
            </div>
          )}

          {/* Literary Tradition */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
              Literary History & Milestones
            </h4>
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B]">
              <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                {languageProfile.literaryTradition}
              </p>
            </div>
          </div>

          {/* Notable Figures */}
          {languageProfile.notableFigures.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                Notable Literary & Cultural Figures
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {languageProfile.notableFigures.map((fig, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#8C8276] dark:text-[#A89F93]">
                        <span>{fig.period}</span>
                        <span className="text-[#C85A32] dark:text-[#E06C43] truncate max-w-[120px]">
                          {fig.role.split('&')[0]}
                        </span>
                      </div>
                      <h5 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
                        {fig.name}
                      </h5>
                      <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed mt-1">
                        {fig.contribution}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B] flex items-center justify-between text-[11px]">
                      <span className="font-mono text-[#8C8276] dark:text-[#A89F93] truncate max-w-[170px]">
                        Works: {fig.notableWorks.join(', ')}
                      </span>
                      {fig.personalityId && onSelectPersonality && (
                        <button
                          onClick={() => {
                            onClose();
                            onSelectPersonality(fig.personalityId!);
                          }}
                          className="text-[#C85A32] dark:text-[#E06C43] font-semibold hover:underline flex items-center gap-0.5 flex-shrink-0"
                        >
                          <span>Dossier</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Living Oral Traditions */}
          {languageProfile.oralTraditions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                Living Oral Traditions & Song Genres
              </h4>
              <div className="space-y-3">
                {languageProfile.oralTraditions.map((oral, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-[10px] font-mono font-bold uppercase">
                          {oral.genre}
                        </span>
                        <h5 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8]">
                          {oral.title}
                        </h5>
                      </div>
                      <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
                        {oral.culturalContext}
                      </p>
                    </div>

                    {oral.musicTrackId && (
                      <button
                        onClick={() => {
                          const track = MUSIC_TRACKS.find(t => t.id === oral.musicTrackId);
                          if (track) playTrack(track);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-[#C85A32] hover:bg-[#B04C27] text-white text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto flex-shrink-0 shadow-xs"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Listen</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Connected Music Tracks */}
          {connectedMusicTracks.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                  Connected Authentic Recordings ({connectedMusicTracks.length})
                </h4>
                {onNavigateTab && (
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateTab('music');
                    }}
                    className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1"
                  >
                    <span>Open Music Archive</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {connectedMusicTracks.map(track => (
                  <div
                    key={track.id}
                    onClick={() => playTrack(track)}
                    className="p-3.5 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/60 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] uppercase block truncate">
                        {track.tradition} • {track.language}
                      </span>
                      <h5 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] truncate group-hover:text-[#C85A32] transition-colors">
                        {track.title}
                      </h5>
                      <p className="text-[11px] text-[#5A524A] dark:text-[#C8BFB4] truncate">
                        {track.performer}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#C85A32]/10 group-hover:bg-[#C85A32] text-[#C85A32] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Census & Sociolinguistic Documentation Note */}
          <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-1 text-xs">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8] font-mono uppercase text-[10px] block">
              Census & Demographic Record:
            </strong>
            <p className="text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
              {languageProfile.censusNote}
            </p>
          </div>

          {/* Sources Attribution */}
          {languageProfile.sources.length > 0 && (
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#5A524A] dark:text-[#C8BFB4] space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Documented Sources</span>
              </div>
              <ul className="list-disc list-inside text-[11px] space-y-0.5 text-[#8C8276] dark:text-[#A89F93]">
                {languageProfile.sources.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F4EFE6] dark:bg-[#16191D] border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between">
          <span className="text-xs text-[#7A7065] dark:text-[#A89F93] font-mono">
            BIHAR 360 • Languages & Voices Archive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1E2124] dark:bg-[#252A30] hover:bg-[#C85A32] dark:hover:bg-[#C85A32] text-white text-xs font-semibold transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
