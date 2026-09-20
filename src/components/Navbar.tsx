import React from 'react';
import { Search, Bookmark, Compass, Award, Menu, X, ChevronDown, Sparkles, MapPin, BookOpen, Palette, Utensils, Calendar } from 'lucide-react';

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

  // Simplified editorial navigation structure
  const primaryNavItems = [
    { id: 'home', label: 'Explore', sublabel: 'होमपेज' },
    { id: 'districts', label: 'Districts', sublabel: '38 ज़िले' },
    { id: 'heritage', label: 'Stories', sublabel: 'इतिहास' },
    { id: 'culture-hub', label: 'Culture', sublabel: 'संस्कृति', isGroup: true },
    { id: 'places-hub', label: 'Places', sublabel: 'स्थल', isGroup: true }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/92 backdrop-blur-md border-b border-[#EADBCE]">
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
                <span className="font-serif font-bold text-xl tracking-tight text-[#14171A]">
                  BIHAR 360
                </span>
                <span className="text-[9px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#C85A32]/10 text-[#C85A32]">
                  Atlas
                </span>
              </div>
              <p className="text-[11px] font-hindi-text text-[#8C5B3E] hidden sm:block">
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
                  ? 'bg-[#14171A] text-white shadow-sm'
                  : 'text-[#2D3238] hover:bg-[#F5EFE6] hover:text-[#14171A]'
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
                  ? 'bg-[#14171A] text-white shadow-sm'
                  : 'text-[#2D3238] hover:bg-[#F5EFE6] hover:text-[#14171A]'
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
                  ? 'bg-[#14171A] text-white shadow-sm'
                  : 'text-[#2D3238] hover:bg-[#F5EFE6] hover:text-[#14171A]'
              }`}
            >
              Stories & History
            </button>

            {/* 4. Culture Dropdown/Group (Arts, Cuisine, Festivals) */}
            <div className="relative group">
              <button
                className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                  ['arts', 'cuisine', 'festivals'].includes(activeTab)
                    ? 'bg-[#14171A] text-white shadow-sm'
                    : 'text-[#2D3238] hover:bg-[#F5EFE6] hover:text-[#14171A]'
                }`}
              >
                <span>Culture & Living Arts</span>
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-2xl shadow-xl border border-[#EADBCE] p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <button
                  onClick={() => setActiveTab('arts')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 ${
                    activeTab === 'arts' ? 'bg-[#F5EFE6] text-[#C85A32] font-semibold' : 'text-[#2D3238] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Folk Arts & Crafts</span>
                </button>
                <button
                  onClick={() => setActiveTab('cuisine')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 ${
                    activeTab === 'cuisine' ? 'bg-[#F5EFE6] text-[#C85A32] font-semibold' : 'text-[#2D3238] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Cuisine & Gastronomy</span>
                </button>
                <button
                  onClick={() => setActiveTab('festivals')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 ${
                    activeTab === 'festivals' ? 'bg-[#F5EFE6] text-[#C85A32] font-semibold' : 'text-[#2D3238] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Festivals & Traditions</span>
                </button>
                <button
                  onClick={() => setActiveTab('personalities')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 ${
                    activeTab === 'personalities' ? 'bg-[#F5EFE6] text-[#C85A32] font-semibold' : 'text-[#2D3238] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Notable Personalities</span>
                </button>
              </div>
            </div>

            {/* 5. Places (Circuits & Map) */}
            <div className="relative group">
              <button
                className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                  ['circuits', 'map'].includes(activeTab)
                    ? 'bg-[#14171A] text-white shadow-sm'
                    : 'text-[#2D3238] hover:bg-[#F5EFE6] hover:text-[#14171A]'
                }`}
              >
                <span>Places</span>
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-2xl shadow-xl border border-[#EADBCE] p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                <button
                  onClick={() => setActiveTab('circuits')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 ${
                    activeTab === 'circuits' ? 'bg-[#F5EFE6] text-[#C85A32] font-semibold' : 'text-[#2D3238] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Travel Circuits</span>
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 ${
                    activeTab === 'map' ? 'bg-[#F5EFE6] text-[#C85A32] font-semibold' : 'text-[#2D3238] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Interactive Map</span>
                </button>
              </div>
            </div>
          </nav>

          {/* Utility Actions: Search, Quiz, Bookmarks */}
          <div className="flex items-center gap-2">
            {/* Search Trigger */}
            <button
              id="search-open-btn"
              onClick={onOpenSearch}
              aria-label="Search districts, places, food"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#EADBCE] bg-[#F5EFE6]/70 hover:bg-[#F5EFE6] text-xs text-[#2D3238] transition-all hover:border-[#C85A32]/40"
            >
              <Search className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="hidden lg:inline font-medium">Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[9px] bg-white border border-[#EADBCE] rounded text-[#4B525A] font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Quiz Button */}
            <button
              id="quiz-open-btn"
              onClick={onOpenQuiz}
              title="Test your Bihar knowledge"
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#3E6550]/10 hover:bg-[#3E6550]/20 text-[#2A4737] text-xs font-semibold transition-colors"
            >
              <Award className="w-3.5 h-3.5 text-[#3E6550]" />
              <span className="hidden sm:inline">Quiz</span>
            </button>

            {/* Bookmarks Drawer Trigger */}
            <button
              id="bookmarks-open-btn"
              onClick={onOpenBookmarks}
              title="View saved districts"
              className="relative p-2 rounded-full border border-[#EADBCE] bg-[#F5EFE6]/70 hover:bg-[#F5EFE6] text-[#2D3238] hover:text-[#C85A32] transition-colors"
              aria-label="Saved Bookmarks"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C85A32] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-full hover:bg-[#F5EFE6] text-[#2D3238]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#EADBCE] py-4 space-y-1 bg-[#FBF9F5] animate-in fade-in slide-in-from-top-2 duration-150">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'home' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>Explore Bihar (Home)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('districts');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'districts' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>All 38 Districts</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('heritage');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'heritage' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>Heritage & History</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('cuisine');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'cuisine' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>Cuisine & Food</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('arts');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'arts' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>Folk Arts & Crafts</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('festivals');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'festivals' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>Festivals & Chhath</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('personalities');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'personalities' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>Notable People</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('circuits');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'circuits' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>Travel Circuits</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('map');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'map' ? 'bg-[#14171A] text-white' : 'text-[#14171A] hover:bg-[#F5EFE6]'
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
