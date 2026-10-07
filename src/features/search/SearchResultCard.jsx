import React from 'react';
import {
  MapPin,
  Landmark,
  Compass,
  History,
  Utensils,
  Users,
  Calendar,
  Palette,
  BookOpen,
  Music,
  Sparkles,
  Tag,
  ArrowRight,
  CornerDownRight
} from 'lucide-react';

export const getBadgeStyle = (type) => {
  switch (type) {
    case 'district':
      return {
        bg: 'bg-[#C85A32]/10 dark:bg-[#C85A32]/20',
        text: 'text-[#C85A32] dark:text-[#E06C43]',
        border: 'border-[#C85A32]/30',
        icon: MapPin
      };
    case 'heritage':
      return {
        bg: 'bg-[#2C5D75]/10 dark:bg-[#2C5D75]/20',
        text: 'text-[#2C5D75] dark:text-[#5BA7CA]',
        border: 'border-[#2C5D75]/30',
        icon: Landmark
      };
    case 'place':
      return {
        bg: 'bg-[#3E6550]/10 dark:bg-[#3E6550]/20',
        text: 'text-[#3E6550] dark:text-[#64B98E]',
        border: 'border-[#3E6550]/30',
        icon: Compass
      };
    case 'history':
      return {
        bg: 'bg-[#9A5B1E]/10 dark:bg-[#9A5B1E]/20',
        text: 'text-[#9A5B1E] dark:text-[#E09B52]',
        border: 'border-[#9A5B1E]/30',
        icon: History
      };
    case 'food':
      return {
        bg: 'bg-[#B84A1A]/10 dark:bg-[#B84A1A]/20',
        text: 'text-[#B84A1A] dark:text-[#F07A48]',
        border: 'border-[#B84A1A]/30',
        icon: Utensils
      };
    case 'person':
      return {
        bg: 'bg-[#246D73]/10 dark:bg-[#246D73]/20',
        text: 'text-[#246D73] dark:text-[#52BFC9]',
        border: 'border-[#246D73]/30',
        icon: Users
      };
    case 'festival':
      return {
        bg: 'bg-[#B36B00]/10 dark:bg-[#B36B00]/20',
        text: 'text-[#B36B00] dark:text-[#FFB347]',
        border: 'border-[#B36B00]/30',
        icon: Calendar
      };
    case 'art':
      return {
        bg: 'bg-[#7D3C68]/10 dark:bg-[#7D3C68]/20',
        text: 'text-[#7D3C68] dark:text-[#D17DB4]',
        border: 'border-[#7D3C68]/30',
        icon: Palette
      };
    case 'language':
      return {
        bg: 'bg-[#6C584C]/10 dark:bg-[#6C584C]/20',
        text: 'text-[#6C584C] dark:text-[#CBB5A1]',
        border: 'border-[#6C584C]/30',
        icon: BookOpen
      };
    case 'music':
      return {
        bg: 'bg-[#4F46E5]/10 dark:bg-[#4F46E5]/20',
        text: 'text-[#4F46E5] dark:text-[#818CF8]',
        border: 'border-[#4F46E5]/30',
        icon: Music
      };
    case 'journey':
      return {
        bg: 'bg-[#6D4C8C]/10 dark:bg-[#6D4C8C]/20',
        text: 'text-[#6D4C8C] dark:text-[#B98CD9]',
        border: 'border-[#6D4C8C]/30',
        icon: Sparkles
      };
    default:
      return {
        bg: 'bg-neutral-500/10',
        text: 'text-neutral-500',
        border: 'border-neutral-500/30',
        icon: Tag
      };
  }
};

export const SearchResultCard = ({
  res,
  isSelected,
  onSelect,
  onHover,
  onConnectionClick,
  language
}) => {
  const record = res.record;
  const badge = getBadgeStyle(record.type);
  const BadgeIcon = badge.icon;

  return (
    <div
      data-selected={isSelected}
      onClick={() => onSelect(record)}
      onMouseEnter={onHover}
      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row gap-3 sm:gap-4 group ${
        isSelected
          ? 'bg-[#F4EFE6] dark:bg-[#1E232A] border-[#C85A32] shadow-md'
          : 'bg-white dark:bg-[#191D23] border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/60 hover:bg-[#FDFBF7] dark:hover:bg-[#1E232A]'
      }`}
    >
      {/* Thumbnail / Visual Emblem */}
      <div className="w-full sm:w-28 sm:h-24 h-36 flex-shrink-0 rounded-lg overflow-hidden bg-[#EADBCE]/40 dark:bg-[#252A30] relative border border-[#EADBCE]/60 dark:border-[#2E343B]">
        {record.image ? (
          <img
            src={record.image}
            alt={record.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center">
            <BadgeIcon className={`w-7 h-7 mb-1 ${badge.text}`} />
            <span className="text-[9px] font-mono uppercase text-[#2D3238]/60 dark:text-[#C8BFB4]/60">
              {record.type}
            </span>
          </div>
        )}

        {/* Mobile type pill overlay */}
        <div className="sm:hidden absolute top-2 left-2">
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border shadow-xs ${badge.bg} ${badge.text} ${badge.border}`}
          >
            <BadgeIcon className="w-3 h-3" />
            <span>{language === 'hi' ? record.hindiTypeLabel : record.typeLabel}</span>
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          {/* Header line: Type badge + Region/District Context */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="hidden sm:flex items-center gap-1.5">
              <span
                className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.bg} ${badge.text} ${badge.border}`}
              >
                <BadgeIcon className="w-3 h-3" />
                <span>{language === 'hi' ? record.hindiTypeLabel : record.typeLabel}</span>
              </span>
              {record.districtName && (
                <span className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60 font-medium">
                  • {record.districtName} {record.region ? `(${record.region})` : ''}
                </span>
              )}
            </div>

            <span className="text-[10px] font-mono text-[#2D3238]/50 dark:text-[#C8BFB4]/50 hidden sm:inline-block">
              {res.matchReason}
            </span>
          </div>

          {/* Title & Hindi Title */}
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors leading-snug">
            {record.title}
            {record.hindiTitle && (
              <span className="font-hindi-text font-normal text-sm sm:text-base text-[#8C5B3E] dark:text-[#D4A373] ml-2">
                ({record.hindiTitle})
              </span>
            )}
          </h3>

          {/* Subtitle / Period / Context */}
          <p className="text-xs font-medium text-[#2D3238]/80 dark:text-[#C8BFB4]/80 mt-0.5">
            {record.subtitle}
          </p>

          {/* Description snippet */}
          <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mt-1.5 line-clamp-2 leading-relaxed">
            {record.description}
          </p>
        </div>

        {/* Connected Entities Strip */}
        {record.connections && record.connections.length > 0 && (
          <div className="mt-3 pt-2 border-t border-[#EADBCE]/50 dark:border-[#2E343B]/50 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/50 dark:text-[#C8BFB4]/50 mr-1 flex items-center gap-1">
              <CornerDownRight className="w-3 h-3" />
              {language === 'hi' ? 'जुड़े हुए संदर्भ:' : 'Connected:'}
            </span>
            {record.connections.slice(0, 4).map((conn, cIdx) => (
              <button
                key={cIdx}
                onClick={(e) => onConnectionClick(conn, e)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#F4EFE6]/80 dark:bg-[#252A30] hover:bg-[#C85A32] hover:text-white dark:hover:bg-[#C85A32] text-[10px] font-medium text-[#2D3238]/80 dark:text-[#C8BFB4]/80 transition-colors border border-[#EADBCE]/60 dark:border-[#2E343B]"
                title={`Go to ${conn.label}`}
              >
                <span>{conn.label}</span>
              </button>
            ))}
            {record.connections.length > 4 && (
              <span className="text-[10px] text-[#2D3238]/50 dark:text-[#C8BFB4]/50 font-mono">
                +{record.connections.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Direct Explore CTA arrow */}
      <div className="hidden sm:flex flex-col items-end justify-center pl-2 flex-shrink-0">
        <button
          className="p-2 rounded-full bg-[#EADBCE]/30 dark:bg-[#252A30] group-hover:bg-[#C85A32] group-hover:text-white text-[#C85A32] dark:text-[#E06C43] transition-colors"
          aria-label={`Explore ${record.title}`}
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
