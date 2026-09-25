import React from 'react';
import { Search, Bookmark, Compass, Award, Menu, X, ChevronDown, Sparkles, Palette, Utensils, Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarkCount: number;
  onOpenQuiz: () => void;
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenBookmarks,
  bookmarkCount,
  onOpenQuiz,
  language,
  setLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 dark:bg-[#0F1113]/95 backdrop-blur-md border-b border-[#EADBCE] dark:border-[#2E343B] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#A54420] text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              B
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xl tracking-tight text-[#14171A] dark:text-[#F5F1E8]">
                  BIHAR 360
                </span>
                <span className="text-[9px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 text-[#C85A32] dark:text-[#E06C43]">
                  Atlas
                </span>
              </div>
              <p className="text-[11px] font-hindi-text text-[#8C5B3E] dark:text-[#D4A373] hidden sm:block">
                हर ज़िले की अपनी कहानी है
              </p>
            </div>
          </button>

          {/* Clean Primary Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {/* 1. Explore (Home) */}
            <button
              id="nav-link-home"
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'home'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113] shadow-sm'
                  : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227] hover:text-[#14171A] dark:hover:text-white'
              }`}
            >
              Explore
            </button>

            {/* 2. Districts */}
            <button
              id="nav-link-districts"
              onClick={() => setActiveTab('districts')}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'districts'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113] shadow-sm'
                  : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227] hover:text-[#14171A] dark:hover:text-white'
              }`}
            >
              Districts (38)
            </button>

            {/* 3. Stories (Heritage & History) */}
            <button
              id="nav-link-heritage"
              onClick={() => setActiveTab('heritage')}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'heritage' || activeTab === 'personalities'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113] shadow-sm'
                  : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227] hover:text-[#14171A] dark:hover:text-white'
              }`}
            >
              Stories & History
            </button>

            {/* 4. Culture Dropdown/Group (Arts, Cuisine, Festivals) */}
            <div className="relative group">
              <button
                className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                  ['arts', 'cuisine', 'festivals'].includes(activeTab)
                    ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113] shadow-sm'
                    : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227] hover:text-[#14171A] dark:hover:text-white'
                }`}
              >
                <span>Culture & Living Arts</span>
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-[#1A1D22] rounded-2xl shadow-xl border border-[#EADBCE] dark:border-[#2E343B] p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <button
                  onClick={() => setActiveTab('arts')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'arts'
                      ? 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] font-semibold'
                      : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30]'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Folk Arts & Crafts</span>
                </button>
                <button
                  onClick={() => setActiveTab('cuisine')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'cuisine'
                      ? 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] font-semibold'
                      : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30]'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Cuisine & Gastronomy</span>
                </button>
                <button
                  onClick={() => setActiveTab('festivals')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'festivals'
                      ? 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] font-semibold'
                      : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Festivals & Traditions</span>
                </button>
                <button
                  onClick={() => setActiveTab('personalities')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'personalities'
                      ? 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] font-semibold'
                      : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Notable Personalities</span>
                </button>
              </div>
            </div>

            {/* 5. Places (Landscapes, Circuits & Map) */}
            <div className="relative group">
              <button
                onClick={() => setActiveTab('places')}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                  ['places', 'circuits', 'map'].includes(activeTab)
                    ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113] shadow-sm'
                    : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227] hover:text-[#14171A] dark:hover:text-white'
                }`}
              >
                <span>Places & Nature</span>
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-[#1A1D22] rounded-2xl shadow-xl border border-[#EADBCE] dark:border-[#2E343B] p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <button
                  onClick={() => setActiveTab('places')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'places'
                      ? 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] font-semibold'
                      : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30]'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Landscapes & Places</span>
                </button>
                <button
                  onClick={() => setActiveTab('circuits')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'circuits'
                      ? 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] font-semibold'
                      : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Travel Circuits</span>
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'map'
                      ? 'bg-[#F5EFE6] dark:bg-[#252A30] text-[#C85A32] dark:text-[#E06C43] font-semibold'
                      : 'text-[#2D3238] dark:text-[#C8BFB4] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30]'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Interactive Map</span>
                </button>
              </div>
            </div>
          </nav>

          {/* Utility Actions: Search, Quiz, Bookmarks, Theme Toggle, Language */}
          <div className="flex items-center gap-2">
            {/* Search Trigger */}
            <button
              id="search-open-btn"
              onClick={onOpenSearch}
              aria-label="Search districts, places, food"
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#EADBCE] dark:border-[#2E343B] bg-[#F5EFE6]/70 dark:bg-[#1A1D22] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30] text-xs text-[#2D3238] dark:text-[#C8BFB4] transition-all hover:border-[#C85A32]/40"
            >
              <Search className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
              <span className="hidden lg:inline font-medium">Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[9px] bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] rounded text-[#4B525A] dark:text-[#948B80] font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Quiz Button */}
            <button
              id="quiz-open-btn"
              onClick={onOpenQuiz}
              title="Test your Bihar knowledge"
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#3E6550]/10 dark:bg-[#3E6550]/25 hover:bg-[#3E6550]/20 text-[#2A4737] dark:text-[#5CA47F] text-xs font-semibold transition-colors"
            >
              <Award className="w-3.5 h-3.5 text-[#3E6550] dark:text-[#5CA47F]" />
              <span className="hidden sm:inline">Quiz</span>
            </button>

            {/* Bookmarks Drawer Trigger */}
            <button
              id="bookmarks-open-btn"
              onClick={onOpenBookmarks}
              title="View saved districts"
              className="relative p-2 rounded-full border border-[#EADBCE] dark:border-[#2E343B] bg-[#F5EFE6]/70 dark:bg-[#1A1D22] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30] text-[#2D3238] dark:text-[#C8BFB4] hover:text-[#C85A32] dark:hover:text-[#E06C43] transition-colors"
              aria-label="Saved Bookmarks"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C85A32] dark:bg-[#E06C43] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* GLOBAL THEME TOGGLE (Sun / Moon) */}
            <button
              id="global-theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light mode (☀️)' : 'Switch to dark mode (🌙)'}
              className="p-2 rounded-full border border-[#EADBCE] dark:border-[#2E343B] bg-[#F5EFE6]/70 dark:bg-[#1A1D22] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30] text-[#2D3238] dark:text-[#C8BFB4] hover:text-[#C85A32] dark:hover:text-[#E06C43] transition-all hover:scale-105"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#E5BE6C] transition-transform duration-200 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[#2C5D75] transition-transform duration-200 -rotate-12 hover:rotate-0" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center rounded-full border border-[#EADBCE] dark:border-[#2E343B] bg-[#F5EFE6]/70 dark:bg-[#1A1D22] p-0.5 text-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-[#252A30] text-[#14171A] dark:text-white shadow-xs'
                    : 'text-[#2D3238]/70 dark:text-[#C8BFB4]/70 hover:text-[#14171A] dark:hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded-full text-[11px] font-hindi-text transition-all ${
                  language === 'hi'
                    ? 'bg-white dark:bg-[#252A30] text-[#14171A] dark:text-white shadow-xs'
                    : 'text-[#2D3238]/70 dark:text-[#C8BFB4]/70 hover:text-[#14171A] dark:hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-full hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#EADBCE] dark:border-[#2E343B] py-4 space-y-1 bg-[#FBF9F5] dark:bg-[#0F1113] animate-in fade-in slide-in-from-top-2 duration-150">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'home'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Explore Bihar (Home)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('districts');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'districts'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>All 38 Districts</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('heritage');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'heritage'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Stories & Monuments</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('arts');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'arts'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Folk Arts & Crafts</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('cuisine');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'cuisine'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Cuisine & Flavors</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('festivals');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'festivals'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Festivals & Chhath</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('personalities');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'personalities'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Notable People</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('places');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'places'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Places & Landscapes</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('circuits');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'circuits'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Travel Circuits</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('map');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                activeTab === 'map'
                  ? 'bg-[#14171A] text-white dark:bg-[#F5F1E8] dark:text-[#0F1113]'
                  : 'text-[#14171A] dark:text-[#F5F1E8] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
              }`}
            >
              <span>Interactive Map</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
