import React from 'react';
import {
  Sparkles,
  MapPin,
  Compass,
  Landmark,
  History,
  Users,
  Calendar,
  Utensils,
  Palette,
  BookOpen,
  Music
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'all', labelEn: 'All Stories', labelHi: 'सभी कहानियाँ', icon: Sparkles, colorClass: 'text-[#C85A32]' },
  { id: 'district', labelEn: 'Districts (38)', labelHi: 'ज़िले (38)', icon: MapPin, colorClass: 'text-[#C85A32]' },
  { id: 'place', labelEn: 'Places & Rivers', labelHi: 'स्थल एवं नदियाँ', icon: Compass, colorClass: 'text-[#3E6550]' },
  { id: 'heritage', labelEn: 'Heritage Sites', labelHi: 'स्मारक एवं धरोहर', icon: Landmark, colorClass: 'text-[#2C5D75]' },
  { id: 'history', labelEn: 'History & Eras', labelHi: 'इतिहास एवं युग', icon: History, colorClass: 'text-[#9A5B1E]' },
  { id: 'person', labelEn: 'Personalities', labelHi: 'विभूतियाँ', icon: Users, colorClass: 'text-[#246D73]' },
  { id: 'festival', labelEn: 'Festivals', labelHi: 'पर्व एवं उत्सव', icon: Calendar, colorClass: 'text-[#B36B00]' },
  { id: 'food', labelEn: 'Cuisine', labelHi: 'व्यंजन व स्वाद', icon: Utensils, colorClass: 'text-[#B84A1A]' },
  { id: 'art', labelEn: 'Folk Arts', labelHi: 'लोक कला व शिल्प', icon: Palette, colorClass: 'text-[#7D3C68]' },
  { id: 'language', labelEn: 'Languages', labelHi: 'भाषा व साहित्य', icon: BookOpen, colorClass: 'text-[#6C584C]' },
  { id: 'music', labelEn: 'Music & Sound', labelHi: 'संगीत व धुनें', icon: Music, colorClass: 'text-[#4F46E5]' },
  { id: 'journey', labelEn: 'Journeys', labelHi: 'कथात्मक यात्राएँ', icon: Sparkles, colorClass: 'text-[#6D4C8C]' },
];

export const SearchCategoryFilters = ({ activeFilter, onSelectFilter, language }) => {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 px-4 scrollbar-none">
      {CATEGORIES.map(cat => {
        const Icon = cat.icon;
        const isActive = activeFilter === cat.id;
        const label = language === 'hi' ? cat.labelHi : cat.labelEn;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectFilter(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              isActive
                ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113] shadow-xs font-semibold'
                : 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#4B525A] dark:text-[#C8BFB4] hover:bg-[#EADBCE] dark:hover:bg-[#2E343B]'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-current' : cat.colorClass}`} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
