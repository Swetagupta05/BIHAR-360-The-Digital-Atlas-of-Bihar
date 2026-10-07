import React from 'react';
import {
  Award,
  Bookmark,
  Sparkles,
  Search,
  Sun,
  Moon,
  Compass,
  MapPin,
  Map,
  History,
  Landmark,
  Utensils,
  Calendar,
  Palette,
  Music,
  Radio,
  BookOpen,
  Users,
  X
} from 'lucide-react';
import { LanguageDropdown } from './LanguageDropdown';

export const MobileNav = ({
  activeTab,
  setActiveTab,
  setMobileMenuOpen,
  t,
  theme,
  toggleTheme,
  language,
  setLanguage,
  onOpenSearch,
  onOpenQuiz,
  onOpenBookmarks,
  bookmarkCount = 0,
  onOpenGuide
}) => {
  const handleNav = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const getNavButtonClass = (isActive) =>
    `w-full min-h-[44px] flex items-center gap-2.5 text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
      isActive
        ? 'bg-[#C85A32]/12 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold border border-[#C85A32]/30'
        : 'text-[#2D3139] dark:text-[#D4CDC3] bg-[#F4EFE6]/50 dark:bg-[#16191D] hover:bg-[#EADBCE]/40 dark:hover:bg-[#252A30] border border-[#EADBCE]/60 dark:border-[#2E343B]'
    }`;

  return (
    <div
      className="fixed inset-x-0 top-16 sm:top-18 bottom-0 z-40 bg-black/45 backdrop-blur-xs lg:hidden"
      onClick={() => setMobileMenuOpen(false)}
    >
      <nav
        id="mobile-navigation-menu"
        aria-label="Mobile Navigation"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FBF9F5] dark:bg-[#0F1113] border-b border-[#EADBCE] dark:border-[#2E343B] px-4 pt-3.5 pb-6 space-y-4 max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-4.5rem)] overflow-y-auto shadow-2xl"
      >
        {/* 1. Primary Discovery Search Bar */}
        {onOpenSearch && (
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full min-h-[44px] flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1A1D20] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#5C6470] dark:text-[#9EA8B3] shadow-2xs hover:border-[#C85A32] transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2 truncate">
              <Search className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate font-medium">
                {language === 'hi'
                  ? 'ज़िले, स्थल, व्यंजन, इतिहास खोजें...'
                  : 'Search districts, places, food, history...'}
              </span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F4EFE6] dark:bg-[#252A30] text-[#8C5B3E] dark:text-[#E0A882] flex-shrink-0">
              {t.search}
            </span>
          </button>
        )}

        {/* 2. Quick Actions & Utilities (2x2 Ergonomic Grid) */}
        <div className="grid grid-cols-2 gap-2 pb-3.5 border-b border-[#EADBCE]/70 dark:border-[#2E343B]">
          {onOpenGuide && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#8B263E] to-[#C85A32] text-white shadow-2xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200 flex-shrink-0" />
              <span className="truncate">{t.askBihar}</span>
            </button>
          )}

          {onOpenBookmarks && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookmarks();
              }}
              className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-[#F4EFE6] dark:bg-[#1A1D20] text-[#2D3139] dark:text-[#E4DFD5] border border-[#EADBCE] dark:border-[#2E343B] cursor-pointer"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">
                {t.bookmarks} {bookmarkCount > 0 ? `(${bookmarkCount})` : ''}
              </span>
            </button>
          )}

          {onOpenQuiz && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-[#F4EFE6] dark:bg-[#1A1D20] text-[#2D3139] dark:text-[#E4DFD5] border border-[#EADBCE] dark:border-[#2E343B] cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">{t.quiz}</span>
            </button>
          )}

          {toggleTheme && (
            <button
              type="button"
              onClick={toggleTheme}
              className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-[#F4EFE6] dark:bg-[#1A1D20] text-[#2D3139] dark:text-[#E4DFD5] border border-[#EADBCE] dark:border-[#2E343B] cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{t.themeLight || 'Light Theme'}</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-sky-700 flex-shrink-0" />
                  <span className="truncate">{t.themeDark || 'Dark Theme'}</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* 3. Mobile Interface Language Selector */}
        <div className="pb-3.5 border-b border-[#EADBCE]/70 dark:border-[#2E343B] space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6470] dark:text-[#9EA8B3] block px-1">
            {language === 'hi' ? 'इंटरफ़ेस भाषा (Interface Language)' : 'Interface Language'}
          </span>
          <LanguageDropdown language={language} setLanguage={setLanguage} isMobile={true} />
        </div>

        {/* 4. Primary Atlas Destinations */}
        <div className="space-y-1.5">
          <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-[#5C6470] dark:text-[#88929A]">
            {language === 'hi' ? 'मुख्य एटलस' : 'Core Atlas'}
          </p>
          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleNav('home')}
              aria-current={activeTab === 'home' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'home')}
            >
              <Compass className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">{t.explore}</span>
            </button>

            <button
              type="button"
              onClick={() => handleNav('districts')}
              aria-current={activeTab === 'districts' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'districts')}
            >
              <MapPin className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">
                {t.districts} ({t.allDistrictsCount})
              </span>
            </button>
          </div>
        </div>

        {/* 5. History & Heritage Group */}
        <div className="pt-2 border-t border-[#EADBCE]/50 dark:border-[#2E343B] space-y-1.5">
          <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-[#5C6470] dark:text-[#88929A]">
            {t.historyHeritage}
          </p>
          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleNav('history')}
              aria-current={activeTab === 'history' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'history')}
            >
              <History className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
              <span className="truncate">{t.history}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('heritage')}
              aria-current={activeTab === 'heritage' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'heritage')}
            >
              <Landmark className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">{t.heritage}</span>
            </button>
          </div>
        </div>

        {/* 6. Culture & Traditions Group */}
        <div className="pt-2 border-t border-[#EADBCE]/50 dark:border-[#2E343B] space-y-1.5">
          <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-[#5C6470] dark:text-[#88929A]">
            {t.cultureTraditions}
          </p>
          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleNav('cuisine')}
              aria-current={activeTab === 'cuisine' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'cuisine')}
            >
              <Utensils className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">{t.cuisine}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('festivals')}
              aria-current={activeTab === 'festivals' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'festivals')}
            >
              <Calendar className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
              <span className="truncate">{t.festivals}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('arts')}
              aria-current={activeTab === 'arts' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'arts')}
            >
              <Palette className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">{t.arts}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('music')}
              aria-current={activeTab === 'music' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'music')}
            >
              <Music className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
              <span className="truncate">{t.music}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('languages')}
              aria-current={activeTab === 'languages' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'languages')}
            >
              <Radio className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">{t.languages}</span>
            </button>
          </div>
        </div>

        {/* 7. Places, People & Journeys Group */}
        <div className="pt-2 border-t border-[#EADBCE]/50 dark:border-[#2E343B] space-y-1.5">
          <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-[#5C6470] dark:text-[#88929A]">
            {t.placesNature}
          </p>
          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleNav('places')}
              aria-current={activeTab === 'places' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'places')}
            >
              <Compass className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">{t.places}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('itineraries')}
              aria-current={activeTab === 'itineraries' || activeTab === 'circuits' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'itineraries' || activeTab === 'circuits')}
            >
              <BookOpen className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
              <span className="truncate">{t.journeys}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('personalities')}
              aria-current={activeTab === 'personalities' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'personalities')}
            >
              <Users className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
              <span className="truncate">{t.personalities}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('map')}
              aria-current={activeTab === 'map' ? 'page' : undefined}
              className={getNavButtonClass(activeTab === 'map')}
            >
              <Map className="w-4 h-4 text-[#2C5D75] flex-shrink-0" />
              <span className="truncate">{t.map}</span>
            </button>
          </div>
        </div>

        {/* 8. Explicit Close Menu Action */}
        <div className="pt-3 border-t border-[#EADBCE]/60 dark:border-[#2E343B]">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D20] hover:bg-[#EADBCE]/60 dark:hover:bg-[#252A30] text-xs font-semibold text-[#5C6470] dark:text-[#9EA8B3] border border-[#EADBCE] dark:border-[#2E343B] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>{language === 'hi' ? 'मेनू बंद करें' : 'Close Navigation Menu'}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
