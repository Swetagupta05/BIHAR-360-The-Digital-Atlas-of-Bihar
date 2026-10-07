import React, { useEffect } from 'react';
import {
  X,
  Clock,
  MapPin,
  Users,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Landmark,
  FileText,
  Search
} from 'lucide-react';
import { HistoricalEvent } from '../../types';

interface EventDetailModalProps {
  event: HistoricalEvent | null;
  onClose: () => void;
  language: 'en' | 'hi';
  onSelectDistrictById?: (id: string) => void;
  onSelectPersonality?: (personalityId: string) => void;
  onSelectHeritageSite?: (siteId: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  language,
  onSelectDistrictById,
  onSelectPersonality,
  onSelectHeritageSite
}) => {
  useEffect(() => {
    if (!event) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={event.title}
        className="relative w-full max-w-3xl rounded-3xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] text-[#1E2124] dark:text-[#F5F1E8] shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-5 sm:p-8 bg-gradient-to-br from-[#F5EFE6] to-[#EADBCE]/50 dark:from-[#1E2227] dark:to-[#16191D] border-b border-[#EADBCE] dark:border-[#2E343B] relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close detail modal"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-white/80 dark:bg-[#252A30] hover:bg-[#C85A32] hover:text-white dark:hover:bg-[#C85A32] text-[#5A524A] dark:text-[#C8BFB4] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 max-w-2xl pr-10 sm:pr-12">
            {/* Meta Tags Row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C85A32] text-white text-[11px] font-mono font-semibold tracking-wide">
                <Clock className="w-3.5 h-3.5" />
                <span>{event.dateLabel}</span>
              </span>

              <span className="px-2.5 py-1 rounded-full bg-white/80 dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] font-mono text-[#5A524A] dark:text-[#C8BFB4]">
                {event.evidenceType}
              </span>

              <span className="px-2.5 py-1 rounded-full bg-white/80 dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] font-mono text-[#C85A32]">
                {event.historicalRegion}
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] leading-tight">
              {language === 'hi' ? event.hindiTitle : event.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-[#5A524A] dark:text-[#A89F93]">
              <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Key Historical Actors */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
              {language === 'hi' ? 'प्रमुख ऐतिहासिक व्यक्तित्व' : 'Key Historical Actors & Figures'}
            </span>
            <div className="flex flex-wrap gap-2">
              {event.keyActors.map((actor, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#F5EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8]"
                >
                  {actor}
                </span>
              ))}
            </div>
          </div>

          {/* Historical Narrative */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] font-bold block">
              {language === 'hi' ? 'ऐतिहासिक घटना एवं संदर्भ' : 'Historical Analysis & Context'}
            </span>
            <p className="text-xs sm:text-sm text-[#3E3A34] dark:text-[#D4C8BC] leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Evidence Grid: Surviving Material & What Remains Today */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-xs text-[#1E2124] dark:text-[#F5F1E8]">
                <FileText className="w-4 h-4 text-[#C85A32]" />
                <span>Primary Documented Evidence</span>
              </div>
              <p className="text-xs text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                {event.survivingEvidence}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-xs text-[#1E2124] dark:text-[#F5F1E8]">
                <Landmark className="w-4 h-4 text-[#C85A32]" />
                <span>What Remains in Bihar Today</span>
              </div>
              <p className="text-xs text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                {event.whatRemainsToday}
              </p>
            </div>
          </div>

          {/* Contextual Links Row */}
          <div className="pt-4 border-t border-[#F0E8DD] dark:border-[#2E343B] flex flex-wrap items-center gap-3">
            {event.districtId && onSelectDistrictById && (
              <button
                onClick={() => {
                  onSelectDistrictById(event.districtId!);
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5EFE6] dark:bg-[#252A30] text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>View District Dossier</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}

            {event.personalityId && onSelectPersonality && (
              <button
                onClick={() => {
                  onSelectPersonality(event.personalityId!);
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5EFE6] dark:bg-[#252A30] text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors"
              >
                <Users className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Explore Historical Figure</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}

            {event.heritageSiteId && onSelectHeritageSite && (
              <button
                onClick={() => {
                  onSelectHeritageSite(event.heritageSiteId!);
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5EFE6] dark:bg-[#252A30] text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors"
              >
                <Landmark className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>View Heritage Monument</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Sourcing & Academic References */}
          <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#141619] border border-[#EADBCE] dark:border-[#2E343B] space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
              <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
              <span>Documented Sourcing & Archaeological Records</span>
            </div>
            <ul className="space-y-1 text-[11px] text-[#5A524A] dark:text-[#A89F93] list-disc list-inside">
              {event.sources.map((src, idx) => (
                <li key={idx} className="leading-relaxed">
                  {src}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
