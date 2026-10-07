import React, { useState } from 'react';
import {
  Compass,
  User,
  Sparkles,
  ExternalLink,
  ChevronRight,
  MapPin,
  Landmark,
  Utensils,
  Music,
  Calendar,
  BookOpen,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { GroundingSource, SuggestedExploration, KnowledgeEntityType } from '../../ai/types';
import { BiharGuideSourceCard } from './BiharGuideSourceCard';

export interface GuideMessageData {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: GroundingSource[];
  suggestedExplorations?: SuggestedExploration[];
  timestamp?: number;
  isError?: boolean;
  onRetry?: () => void;
}

interface BiharGuideMessageProps {
  message: GuideMessageData;
  onExploreSource: (source: GroundingSource) => void;
  onExploreSuggestion: (exp: SuggestedExploration) => void;
}

const ACTION_ICONS: Record<string, React.ElementType> = {
  districts: MapPin,
  heritage: Landmark,
  places: Compass,
  cuisine: Utensils,
  festivals: Calendar,
  music: Music,
  arts: Sparkles,
  languages: BookOpen,
  circuits: Sparkles,
  history: Compass
};

export const BiharGuideMessage: React.FC<BiharGuideMessageProps> = ({
  message,
  onExploreSource,
  onExploreSuggestion
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (message.role === 'user') {
    return (
      <div className="flex justify-end my-3">
        <div className="max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-tr-xs px-4 py-2.5 bg-[#C85A32] text-white shadow-2xs">
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            {message.content}
          </p>
        </div>
      </div>
    );
  }

  // Format assistant response text: parse headers, bullets, and body paragraphs
  const renderFormattedContent = (rawText: string) => {
    const lines = rawText.split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = (keyPrefix: string) => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ');
        elements.push(
          <p
            key={`${keyPrefix}-p`}
            className="text-xs sm:text-sm text-[#2D3238] dark:text-[#E2DDD5] leading-relaxed mb-3"
          >
            {formatInlineText(text)}
          </p>
        );
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (!trimmed) {
        flushParagraph(`line-${index}`);
        return;
      }

      // H3 (### Header)
      if (trimmed.startsWith('### ')) {
        flushParagraph(`h3-pre-${index}`);
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-sm sm:text-base font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] mt-3 mb-1.5 flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
            <span>{trimmed.replace('### ', '')}</span>
          </h3>
        );
        return;
      }

      // H4 (#### Header) or Section Title
      if (trimmed.startsWith('#### ')) {
        flushParagraph(`h4-pre-${index}`);
        elements.push(
          <h4
            key={`h4-${index}`}
            className="text-xs sm:text-sm font-semibold text-[#8C5B3E] dark:text-[#D4A373] uppercase tracking-wider mt-3 mb-1"
          >
            {trimmed.replace('#### ', '')}
          </h4>
        );
        return;
      }

      // Section bold headers like **Verified Atlas Highlights:** or **Cross-Sectional Connections...**
      if (trimmed.startsWith('**') && trimmed.endsWith(':**')) {
        flushParagraph(`sec-pre-${index}`);
        elements.push(
          <div
            key={`sec-title-${index}`}
            className="text-xs font-semibold text-[#8C5B3E] dark:text-[#D4A373] uppercase tracking-wider mt-4 mb-2 flex items-center gap-1.5 border-b border-[#EADBCE]/50 dark:border-[#2E343B]/50 pb-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>{trimmed.replace(/\*\*/g, '')}</span>
          </div>
        );
        return;
      }

      // Bullet points
      if (trimmed.startsWith('• ') || trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        flushParagraph(`bullet-pre-${index}`);
        const bulletText = trimmed.replace(/^[•*-]\s+/, '');
        elements.push(
          <div
            key={`bullet-${index}`}
            className="flex items-start gap-2 text-xs sm:text-sm text-[#2D3238] dark:text-[#DCD5CB] mb-1.5 pl-1 leading-relaxed"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] dark:bg-[#E06C43] shrink-0 mt-2" />
            <div className="flex-1">{formatInlineText(bulletText)}</div>
          </div>
        );
        return;
      }

      currentParagraph.push(trimmed);
    });

    flushParagraph('final');
    return elements;
  };

  // Inline formatting for **bold** and *italic*
  const formatInlineText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-[#14171A] dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} className="italic text-[#4B525A] dark:text-[#B5ACA0]">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  return (
    <div className="my-4 space-y-3">
      {/* Editorial Assistant Persona Card */}
      <div className="p-4 sm:p-5 rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-white/90 dark:bg-[#16191D]/90 shadow-2xs backdrop-blur-xs">
        {/* Header Ribbon */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#EADBCE]/60 dark:border-[#2E343B]/60">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#C85A32] text-white flex items-center justify-center font-serif font-bold text-xs shadow-2xs">
              B
            </div>
            <div>
              <span className="text-xs font-serif font-bold text-[#14171A] dark:text-[#F5F1E8]">
                AI Bihar Guide
              </span>
              <span className="text-[10px] text-[#8C5B3E] dark:text-[#D4A373] ml-2 font-mono">
                Verified Grounding
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleCopy}
              title="Copy answer to clipboard"
              aria-label="Copy answer to clipboard"
              className="p-1.5 rounded-lg text-[#71767C] hover:text-[#14171A] dark:text-[#948B80] dark:hover:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#20252B] transition-colors"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Structured Body */}
        <div className="prose-content">
          {renderFormattedContent(message.content)}
        </div>

        {/* Retry Button if Error */}
        {message.isError && message.onRetry && (
          <div className="mt-4 pt-3 border-t border-[#EADBCE]/60 dark:border-[#2E343B]/60 flex items-center justify-between">
            <span className="text-xs text-rose-600 dark:text-rose-400">
              Something interrupted this query.
            </span>
            <button
              onClick={message.onRetry}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#C85A32] text-white hover:bg-[#A54420] transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Recommended Atlas Explorations (Action Buttons) */}
        {message.suggestedExplorations && message.suggestedExplorations.length > 0 && (
          <div className="mt-5 pt-4 border-t border-[#EADBCE]/60 dark:border-[#2E343B]/60">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#8C5B3E] dark:text-[#D4A373] mb-2.5">
              <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Continue Exploring the Atlas</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {message.suggestedExplorations.map((exp, idx) => {
                const ActionIcon = ACTION_ICONS[exp.tab] || Compass;
                return (
                  <button
                    key={`exp-${idx}`}
                    onClick={() => onExploreSuggestion(exp)}
                    className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#1E2227] hover:bg-[#F5EFE6] dark:hover:bg-[#282F37] text-[#14171A] dark:text-[#F5F1E8] hover:border-[#C85A32]/50 transition-all hover:translate-y-[-1px] shadow-2xs"
                    title={exp.reason}
                  >
                    <ActionIcon className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                    <span className="truncate max-w-[200px]">{exp.title}</span>
                    <ArrowRight className="w-3 h-3 text-[#A7A196] dark:text-[#6E7784] group-hover:text-[#C85A32] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Grounding Source Cards */}
        {message.citations && message.citations.length > 0 && (
          <div className="mt-5 pt-4 border-t border-[#EADBCE]/60 dark:border-[#2E343B]/60">
            <div className="flex items-center justify-between text-[11px] text-[#8C5B3E] dark:text-[#D4A373] font-medium tracking-wide mb-2.5">
              <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-[#C85A32]" />
                From BIHAR 360 Atlas Knowledge
              </span>
              <span className="text-[10px] text-[#71767C] dark:text-[#948B80]">
                {message.citations.length} verified sources
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {message.citations.map((source, sIdx) => (
                <BiharGuideSourceCard
                  key={`src-${sIdx}-${source.entityId}`}
                  source={source}
                  onExplore={onExploreSource}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
