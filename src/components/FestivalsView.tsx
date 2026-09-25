import React from 'react';
import { FESTIVALS_DATA } from '../data/festivals';
import { ALL_DISTRICTS } from '../data/districts';
import { Festival, FestivalSeason, FestivalTradition, District } from '../types';
import { FestivalHero } from './festivals/FestivalHero';
import { ChhathStory } from './festivals/ChhathStory';
import { FestivalFilters } from './festivals/FestivalFilters';
import { FeaturedFestival } from './festivals/FeaturedFestival';
import { LivingTraditions } from './festivals/LivingTraditions';
import { FestivalCalendar } from './festivals/FestivalCalendar';
import { FestivalDetailModal } from './festivals/FestivalDetailModal';
import { Sparkles, Calendar, BookOpen, Heart, ArrowUp } from 'lucide-react';

interface FestivalsViewProps {
  language: 'en' | 'hi';
  onSelectDistrict?: (district: District) => void;
  onSelectTab?: (tab: string) => void;
}

export const FestivalsView: React.FC<FestivalsViewProps> = ({
  language,
  onSelectDistrict,
  onSelectTab
}) => {
  // State for filtering
  const [selectedSeason, setSelectedSeason] = React.useState<FestivalSeason | 'all'>('all');
  const [selectedTradition, setSelectedTradition] = React.useState<FestivalTradition>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  // Selected festival for full story reading modal
  const [selectedFestival, setSelectedFestival] = React.useState<Festival | null>(null);

  // Localized dialect view preference
  const [dialectContext, setDialectContext] = React.useState<'standard' | 'bho' | 'mai' | 'mag'>('standard');

  // Bookmarks persistence
  const [bookmarkedFestivalIds, setBookmarkedFestivalIds] = React.useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bihar360_festival_bookmarks');
      return saved ? JSON.parse(saved) : ['chhath-puja', 'sama-chakeva'];
    } catch {
      return ['chhath-puja', 'sama-chakeva'];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem('bihar360_festival_bookmarks', JSON.stringify(bookmarkedFestivalIds));
    } catch {
      // ignore
    }
  }, [bookmarkedFestivalIds]);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedFestivalIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Find Chhath festival for the dedicated showcase
  const chhathFestival = FESTIVALS_DATA.find(f => f.id === 'chhath-puja') || FESTIVALS_DATA[0];

  // Helper to open district dossier if handler exists
  const handleOpenDistrict = (districtId: string) => {
    if (!onSelectDistrict) return;
    const matched = ALL_DISTRICTS.find(d => d.id === districtId || d.slug === districtId);
    if (matched) {
      onSelectDistrict(matched);
    }
  };

  // Filter festivals based on season, tradition, and search
  const filteredFestivals = React.useMemo(() => {
    return FESTIVALS_DATA.filter(fest => {
      // Season filter
      if (selectedSeason !== 'all' && fest.season !== selectedSeason) {
        return false;
      }

      // Tradition filter
      if (selectedTradition !== 'all') {
        if (selectedTradition === 'chhath' && fest.traditionCategory !== 'chhath') return false;
        if (selectedTradition === 'folk' && fest.traditionCategory !== 'folk') return false;
        if (selectedTradition === 'hindu' && fest.traditionCategory !== 'hindu') return false;
        if (selectedTradition === 'sikh' && fest.traditionCategory !== 'sikh') return false;
        if (selectedTradition === 'buddhist' && fest.traditionCategory !== 'buddhist') return false;
        if (selectedTradition === 'sufi' && fest.traditionCategory !== 'sufi') return false;
        if (selectedTradition === 'harvest' && fest.traditionCategory !== 'harvest') return false;
        if (selectedTradition === 'regional' && fest.traditionCategory !== 'regional') return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = fest.name.toLowerCase().includes(q) || fest.hindiName.includes(q);
        const matchesDesc = (fest.overview || '').toLowerCase().includes(q) || (fest.description || '').toLowerCase().includes(q);
        const matchesFood = (fest.specialFoods || []).some(f => f.toLowerCase().includes(q));
        const matchesDistricts = (fest.associatedDistricts || []).some(d => d.toLowerCase().includes(q));
        const matchesRituals = (fest.rituals || []).some(r => r.toLowerCase().includes(q));
        return matchesName || matchesDesc || matchesFood || matchesDistricts || matchesRituals;
      }

      return true;
    });
  }, [selectedSeason, selectedTradition, searchQuery]);

  // Smooth scroll helpers
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Editorial Hero requested by prompt */}
      <FestivalHero
        language={language}
        onExploreChhath={() => scrollToSection('chhath-story-section')}
        onExploreLivingTraditions={() => scrollToSection('living-traditions-section')}
        onExploreCalendar={() => scrollToSection('annual-calendar-section')}
      />

      {/* 2. Dedicated Immersive Chhath Experience */}
      <ChhathStory
        festival={chhathFestival}
        language={language}
        onOpenDetail={() => setSelectedFestival(chhathFestival)}
        onExploreFood={() => onSelectTab?.('cuisine')}
        onExploreDistrict={handleOpenDistrict}
      />

      {/* 3. Living Traditions ("जहाँ परंपरा आज भी जीवित है") */}
      <LivingTraditions
        language={language}
        onExploreFoodTab={() => onSelectTab?.('cuisine')}
        onExploreArtsTab={() => onSelectTab?.('arts')}
      />

      {/* 4. Editorial Discovery System & Filter Navigation */}
      <section id="discovery-section" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93]">
                Editorial Archive & Discovery
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
              {language === 'hi' ? 'परंपराओं का अन्वेषण करें' : 'Explore Living Traditions'}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4]">
              Filter by seasonal transition or cultural tradition, or search across rituals and prasad.
            </p>
          </div>

          {/* Contextual dialect preview buttons */}
          <div className="flex items-center gap-1 bg-[#F4EFE6] dark:bg-[#16191D] p-1 rounded-xl border border-[#EADBCE] dark:border-[#2E343B] text-xs">
            <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] px-2 hidden sm:inline">
              Dialect Focus:
            </span>
            <button
              onClick={() => setDialectContext('standard')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                dialectContext === 'standard'
                  ? 'bg-white dark:bg-[#252A30] text-[#1E2124] dark:text-[#F5F1E8] shadow-xs font-semibold'
                  : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124] dark:hover:text-white'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setDialectContext('bho')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                dialectContext === 'bho'
                  ? 'bg-white dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] shadow-xs font-semibold'
                  : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124] dark:hover:text-white'
              }`}
              title="Highlight Bhojpuri expressions"
            >
              भोजपुरी
            </button>
            <button
              onClick={() => setDialectContext('mai')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                dialectContext === 'mai'
                  ? 'bg-white dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] shadow-xs font-semibold'
                  : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124] dark:hover:text-white'
              }`}
              title="Highlight Maithili expressions"
            >
              मैथिली
            </button>
          </div>
        </div>

        {/* Filter Controls Component */}
        <FestivalFilters
          selectedSeason={selectedSeason}
          onSelectSeason={setSelectedSeason}
          selectedTradition={selectedTradition}
          onSelectTradition={setSelectedTradition}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          language={language}
          totalCount={FESTIVALS_DATA.length}
          filteredCount={filteredFestivals.length}
        />

        {/* Featured Traditions Editorial Stream */}
        {filteredFestivals.length > 0 ? (
          <div className="space-y-8">
            {filteredFestivals.map((festival, idx) => {
              // Alternating editorial layout variant for dynamic visual storytelling
              const variant = idx % 2 === 0 ? 'left' : 'right';

              return (
                <FeaturedFestival
                  key={festival.id}
                  festival={festival}
                  language={language}
                  isBookmarked={bookmarkedFestivalIds.includes(festival.id)}
                  onToggleBookmark={() => handleToggleBookmark(festival.id)}
                  onOpenDetail={() => setSelectedFestival(festival)}
                  onExploreDistrict={handleOpenDistrict}
                  onExploreFood={() => onSelectTab?.('cuisine')}
                  variant={variant}
                />
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-[#FBF9F5] dark:bg-[#16191D] border border-dashed border-[#EADBCE] dark:border-[#2E343B] space-y-3">
            <Calendar className="w-8 h-8 text-[#8C8276] dark:text-[#948B80] mx-auto opacity-50" />
            <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8]">
              No Traditions Match Your Current Filter
            </h3>
            <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] max-w-md mx-auto">
              Try resetting the season or tradition filter to view all verified festivals of Bihar.
            </p>
            <button
              onClick={() => {
                setSelectedSeason('all');
                setSelectedTradition('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#C85A32] hover:bg-[#A54420] text-white text-xs font-semibold transition-colors"
            >
              Show All Traditions
            </button>
          </div>
        )}
      </section>

      {/* 5. Annual Visual Calendar of Bihar */}
      <FestivalCalendar
        festivals={FESTIVALS_DATA}
        language={language}
        onSelectFestival={fest => setSelectedFestival(fest)}
      />

      {/* 6. Immersive Full Story Detail Modal */}
      <FestivalDetailModal
        festival={selectedFestival}
        onClose={() => setSelectedFestival(null)}
        language={language}
        isBookmarked={selectedFestival ? bookmarkedFestivalIds.includes(selectedFestival.id) : false}
        onToggleBookmark={() => {
          if (selectedFestival) handleToggleBookmark(selectedFestival.id);
        }}
        onExploreDistrict={handleOpenDistrict}
        onExploreFood={() => onSelectTab?.('cuisine')}
      />
    </div>
  );
};
