import React from 'react';
import {
  MapPin,
  Landmark,
  Utensils,
  Calendar,
  BookOpen,
  Palette,
  Music,
  Compass,
  History,
  Sparkles,
  ExternalLink,
  Users
} from 'lucide-react';
import { GroundingSource, KnowledgeEntityType } from '../../ai/types';

interface BiharGuideSourceCardProps {
  source: GroundingSource;
  onExplore: (source: GroundingSource) => void;
}

const TYPE_CONFIG: Record<
  KnowledgeEntityType,
  { label: string; icon: React.ElementType; colorClass: string }
> = {
  district: {
    label: 'District',
    icon: MapPin,
    colorClass: 'text-[#C85A32] bg-[#C85A32]/10 border-[#C85A32]/25'
  },
  place: {
    label: 'Place',
    icon: Compass,
    colorClass: 'text-[#2A6F97] bg-[#2A6F97]/10 border-[#2A6F97]/25'
  },
  heritage: {
    label: 'Heritage',
    icon: Landmark,
    colorClass: 'text-[#8C5B3E] bg-[#8C5B3E]/10 border-[#8C5B3E]/25'
  },
  person: {
    label: 'Personality',
    icon: Users,
    colorClass: 'text-[#4A5D4E] bg-[#4A5D4E]/10 border-[#4A5D4E]/25'
  },
  festival: {
    label: 'Festival',
    icon: Calendar,
    colorClass: 'text-[#B45309] bg-[#B45309]/10 border-[#B45309]/25'
  },
  food: {
    label: 'Cuisine',
    icon: Utensils,
    colorClass: 'text-[#9A3412] bg-[#9A3412]/10 border-[#9A3412]/25'
  },
  language: {
    label: 'Language',
    icon: BookOpen,
    colorClass: 'text-[#047857] bg-[#047857]/10 border-[#047857]/25'
  },
  art: {
    label: 'Folk Art',
    icon: Palette,
    colorClass: 'text-[#7C3AED] bg-[#7C3AED]/10 border-[#7C3AED]/25'
  },
  music: {
    label: 'Music',
    icon: Music,
    colorClass: 'text-[#BE185D] bg-[#BE185D]/10 border-[#BE185D]/25'
  },
  journey: {
    label: 'Journey',
    icon: Compass,
    colorClass: 'text-[#0F766E] bg-[#0F766E]/10 border-[#0F766E]/25'
  },
  history_era: {
    label: 'History Era',
    icon: History,
    colorClass: 'text-[#374151] bg-[#374151]/10 border-[#374151]/25'
  },
  history_event: {
    label: 'History Event',
    icon: History,
    colorClass: 'text-[#374151] bg-[#374151]/10 border-[#374151]/25'
  }
};

export const BiharGuideSourceCard: React.FC<BiharGuideSourceCardProps> = ({
  source,
  onExplore
}) => {
  const config = TYPE_CONFIG[source.type] || {
    label: 'Atlas',
    icon: Sparkles,
    colorClass: 'text-[#C85A32] bg-[#C85A32]/10 border-[#C85A32]/25'
  };

  const Icon = config.icon;

  return (
    <button
      onClick={() => onExplore(source)}
      className="group shrink-0 inline-flex flex-col text-left p-2.5 rounded-xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1E2227] hover:border-[#C85A32]/50 hover:bg-[#FBF9F5] dark:hover:bg-[#252A30] transition-all hover:scale-[1.02] shadow-2xs max-w-[210px] w-auto cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#C85A32]"
      title={`Open ${source.title} in Bihar 360 (${config.label})`}
      aria-label={`Open ${source.title} (${config.label}) in atlas`}
    >
      <div className="flex items-center justify-between gap-2 w-full mb-1">
        <span
          className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-semibold border ${config.colorClass}`}
        >
          <Icon className="w-2.5 h-2.5" />
          <span>{config.label}</span>
        </span>
        <ExternalLink className="w-3 h-3 text-[#A7A196] dark:text-[#6E7784] group-hover:text-[#C85A32] transition-colors" />
      </div>

      <div className="font-medium text-xs text-[#14171A] dark:text-[#F5F1E8] truncate w-full group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors">
        {source.title}
      </div>

      {source.district && (
        <span className="text-[10px] text-[#71767C] dark:text-[#948B80] truncate w-full mt-0.5">
          {source.district}
        </span>
      )}

      {source.snippet && (
        <p className="text-[10px] text-[#4B525A] dark:text-[#948B80] line-clamp-1 mt-1 leading-snug">
          {source.snippet}
        </p>
      )}
    </button>
  );
};
