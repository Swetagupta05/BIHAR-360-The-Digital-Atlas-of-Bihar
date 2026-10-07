import React from 'react';
import { Search, Sparkles, Award, Bookmark, Sun, Moon, Menu, X } from 'lucide-react';
import { LanguageDropdown } from './LanguageDropdown';

export const NavActions = ({
  t,
  theme,
  toggleTheme,
  language,
  setLanguage,
  onOpenSearch,
  onOpenQuiz,
  onOpenBookmarks,
  bookmarkCount,
  onOpenGuide,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
      {/* AI Bihar Guide Trigger — compact on mobile >=360px, full label on xl desktop */}
      {onOpenGuide && (
        <button
          type="button"
          onClick={onOpenGuide}
          title={t.askBihar}
          aria-label={t.askBihar}
          className="hidden min-[360px]:inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 h-10 sm:h-9 rounded-full text-xs font-semibold bg-gradient-to-r from-[#8B263E] to-[#C85A32] text-white hover:opacity-95 shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-[#C85A32]/40 cursor-pointer flex-shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200 flex-shrink-0" />
          <span className="hidden xl:inline whitespace-nowrap">{t.askBihar}</span>
        </button>
      )}

      {/* Primary Discovery Action: Search Trigger (Always visible in header) */}
      <button
        type="button"
        onClick={onOpenSearch}
        title={t.search}
        aria-label={t.search}
        className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-[#EADBCE] dark:border-[#2E343B] text-[#5C6470] hover:text-[#14171A] hover:bg-[#EADBCE]/50 dark:text-[#9EA8B3] dark:hover:text-[#F5F1E8] dark:hover:bg-[#252A30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A32]/40 cursor-pointer flex-shrink-0"
      >
        <Search className="w-4 h-4" />
      </button>

      {/* Quiz Trigger — Desktop xl+ in header, inside MobileNav on smaller screens */}
      <button
        type="button"
        onClick={onOpenQuiz}
        title={t.quiz}
        aria-label={t.quiz}
        className="hidden xl:inline-flex w-9 h-9 items-center justify-center rounded-full border border-[#EADBCE] dark:border-[#2E343B] text-[#5C6470] hover:text-[#14171A] hover:bg-[#EADBCE]/50 dark:text-[#9EA8B3] dark:hover:text-[#F5F1E8] dark:hover:bg-[#252A30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A32]/40 cursor-pointer flex-shrink-0"
      >
        <Award className="w-4 h-4" />
      </button>

      {/* Bookmarks Drawer Trigger — Tablet/Desktop sm+ in header, inside MobileNav on mobile */}
      <button
        type="button"
        onClick={onOpenBookmarks}
        title={t.bookmarks}
        aria-label={t.bookmarks}
        className="hidden sm:inline-flex relative w-9 h-9 items-center justify-center rounded-full border border-[#EADBCE] dark:border-[#2E343B] text-[#5C6470] hover:text-[#14171A] hover:bg-[#EADBCE]/50 dark:text-[#9EA8B3] dark:hover:text-[#F5F1E8] dark:hover:bg-[#252A30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A32]/40 cursor-pointer flex-shrink-0"
      >
        <Bookmark className="w-4 h-4" />
        {bookmarkCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#C85A32] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
            {bookmarkCount}
          </span>
        )}
      </button>

      {/* Theme Toggle — Tablet/Desktop sm+ in header, inside MobileNav on mobile */}
      <button
        type="button"
        onClick={toggleTheme}
        title={theme === 'dark' ? t.themeLight : t.themeDark}
        aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
        className="hidden sm:inline-flex w-9 h-9 items-center justify-center rounded-full border border-[#EADBCE] dark:border-[#2E343B] text-[#5C6470] hover:text-[#14171A] hover:bg-[#EADBCE]/50 dark:text-[#9EA8B3] dark:hover:text-[#F5F1E8] dark:hover:bg-[#252A30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A32]/40 cursor-pointer flex-shrink-0"
      >
        {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-700" />}
      </button>

      {/* Desktop Language Selector Dropdown — Desktop lg+ in header, inside MobileNav on <lg */}
      <div className="hidden lg:block flex-shrink-0">
        <LanguageDropdown language={language} setLanguage={setLanguage} />
      </div>

      {/* Mobile & Tablet Hamburger Button — Always visible and reachable on <lg */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation-menu"
        className="lg:hidden w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-[#EADBCE] dark:border-[#2E343B] bg-[#F4EFE6]/70 dark:bg-[#1E2227] text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#EADBCE]/60 dark:hover:bg-[#252A30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A32]/40 cursor-pointer flex-shrink-0"
        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>
    </div>
  );
};
