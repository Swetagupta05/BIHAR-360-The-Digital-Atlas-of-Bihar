import React from 'react';
import {
  Clock,
  MapPin,
  Users,
  ShieldCheck,
  ArrowRight,
  Landmark,
  FileText,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { HistoricalEra, HistoricalEvent } from '../../types';

interface TimelineChapterProps {
  era: HistoricalEra;
  index: number;
  language: 'en' | 'hi';
  onSelectEvent: (event: HistoricalEvent) => void;
  onSelectDistrictById?: (id: string) => void;
  onSelectPersonality?: (personalityId: string) => void;
  onSelectHeritageSite?: (siteId: string) => void;
}

export const TimelineChapter: React.FC<TimelineChapterProps> = ({
  era,
  index,
  language,
  onSelectEvent,
  onSelectDistrictById,
  onSelectPersonality,
  onSelectHeritageSite
}) => {
  const isEven = index % 2 === 0;

  return (
    <article
      id={`era-${era.id}`}
      className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] p-6 sm:p-10 lg:p-12 shadow-xs space-y-8 transition-colors"
    >
      {/* Chapter Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#F0E8DD] dark:border-[#2E343B] pb-6">
        <div className="space-y-2 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 text-[#C85A32] dark:text-[#E06C43] font-bold">
              {era.period}
            </span>
            <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93]">
              {era.dateLabel}
            </span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? era.hindiTitle : era.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
            {language === 'hi' ? era.hindiSummary : era.summary}
          </p>

          <div className="pt-1 text-[11px] text-[#8C8276] dark:text-[#A89F93]">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Historical Geography: </strong>
            <span>{era.historicalGeography}</span>
          </div>
        </div>

        {/* Surviving Landmarks Pill Box */}
        <div className="lg:w-80 shrink-0 p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2 text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
            <Landmark className="w-4 h-4 text-[#C85A32]" />
            <span>Surviving Material Remains</span>
          </div>
          <ul className="space-y-1 text-[11px] text-[#5A524A] dark:text-[#A89F93] list-disc list-inside">
            {era.survivingLandmarks.map((lm, idx) => (
              <li key={idx} className="leading-snug">
                {lm}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Events Stream (Alternating Asymmetric Composition) */}
      <div className="space-y-6">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
          Key Historical Turning Points in this Era
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {era.events.map((event, evIdx) => (
            <div
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className="group cursor-pointer rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#1B1E23] p-6 hover:border-[#C85A32] dark:hover:border-[#C85A32] transition-all hover:shadow-md flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#C85A32] dark:text-[#E06C43]">
                    {event.dateLabel}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-[#252A30] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B]">
                    {event.evidenceType}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors leading-snug">
                    {language === 'hi' ? event.hindiTitle : event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#8C8276] dark:text-[#A89F93]">
                    <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] line-clamp-3 leading-relaxed">
                  {event.description}
                </p>

                {/* Key Actors */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {event.keyActors.map((actor, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-[#252A30] text-[10px] text-[#5A524A] dark:text-[#A89F93] border border-[#EADBCE] dark:border-[#2E343B]"
                    >
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom What Remains & View Details */}
              <div className="pt-3 border-t border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between text-xs text-[#C85A32] font-semibold">
                <span className="truncate max-w-[240px] text-[11px] font-normal text-[#8C8276] dark:text-[#A89F93]">
                  {event.whatRemainsToday}
                </span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                  <span>Explore Evidence</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
