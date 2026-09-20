import React from 'react';
import { Navbar } from './components/Navbar';
import { DistrictsGrid } from './components/DistrictsGrid';
import { InteractiveMap } from './components/InteractiveMap';
import { HeritageView } from './components/HeritageView';
import { CuisineView } from './components/CuisineView';
import { ArtsView } from './components/ArtsView';
import { FestivalsView } from './components/FestivalsView';
import { PersonalitiesView } from './components/PersonalitiesView';
import { ItinerariesView } from './components/ItinerariesView';
import { DistrictModal } from './components/DistrictModal';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { QuizModal } from './components/QuizModal';
import { ALL_DISTRICTS } from './data/districts';
import { District } from './types';
import { ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { HomePage } from './components/HomePage';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<string>('home');
  const [selectedDistrict, setSelectedDistrict] = React.useState<District | null>(null);
  const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = React.useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = React.useState<boolean>(false);
  const [language, setLanguage] = React.useState<'en' | 'hi'>('en');
  const [bookmarkedIds, setBookmarkedIds] = React.useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bihar360_bookmarks');
      return saved ? JSON.parse(saved) : ['patna', 'nalanda', 'gaya', 'madhubani'];
    } catch {
      return ['patna', 'nalanda', 'gaya', 'madhubani'];
    }
  });

  // Save bookmarks to localStorage
  React.useEffect(() => {
    try {
      localStorage.setItem('bihar360_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore
    }
  }, [bookmarkedIds]);

  // URL query parameter check for direct link sharing
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const districtSlug = params.get('district');
    if (districtSlug) {
      const matched = ALL_DISTRICTS.find(d => d.slug === districtSlug || d.id === districtSlug);
      if (matched) {
        setSelectedDistrict(matched);
      }
    }
  }, []);

  // Global keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsBookmarksOpen(false);
        setIsQuizOpen(false);
        setSelectedDistrict(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleBookmark = (district: District) => {
    setBookmarkedIds(prev =>
      prev.includes(district.id)
        ? prev.filter(id => id !== district.id)
        : [...prev, district.id]
    );
  };

  const bookmarkedDistricts = ALL_DISTRICTS.filter(d => bookmarkedIds.includes(d.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E2124] selection:bg-[#C85A32]/20">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarkCount={bookmarkedIds.length}
        onOpenQuiz={() => setIsQuizOpen(true)}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content Area */}
      {activeTab === 'home' ? (
        <main className="flex-1 w-full">
          <HomePage
            onNavigateTab={setActiveTab}
            onSelectDistrict={setSelectedDistrict}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onOpenQuiz={() => setIsQuizOpen(true)}
            language={language}
          />
        </main>
      ) : (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {activeTab === 'districts' && (
            <DistrictsGrid
              onSelectDistrict={setSelectedDistrict}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              language={language}
            />
          )}

          {activeTab === 'map' && (
            <InteractiveMap
              onSelectDistrict={setSelectedDistrict}
              selectedDistrict={selectedDistrict}
              language={language}
            />
          )}

          {activeTab === 'heritage' && (
            <HeritageView language={language} />
          )}

          {activeTab === 'cuisine' && (
            <CuisineView language={language} />
          )}

          {activeTab === 'arts' && (
            <ArtsView language={language} />
          )}

          {activeTab === 'festivals' && (
            <FestivalsView language={language} />
          )}

          {activeTab === 'personalities' && (
            <PersonalitiesView language={language} />
          )}

          {activeTab === 'circuits' && (
            <ItinerariesView language={language} />
          )}
        </main>
      )}

      {/* State Symbols & Emblems Banner */}
      <section className="bg-[#F4EFE6] border-y border-[#EADBCE] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#2D3238]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]"></span>
              <strong className="text-[#1E2124]">Official State Symbols of Bihar:</strong>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 font-medium">
              <span>🌿 <strong>State Tree:</strong> Peepal (Ficus religiosa)</span>
              <span>🐦 <strong>State Bird:</strong> Gauraiya (House Sparrow)</span>
              <span>🐂 <strong>State Animal:</strong> Gaur (Mithun)</span>
              <span>🌼 <strong>State Flower:</strong> Genda (Marigold)</span>
              <span>🐟 <strong>State Fish:</strong> Mangur (Clarias batrachus)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E2124] text-white border-t border-[#2D3238] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-[#EADBCE]/80">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#C85A32] text-white font-serif font-bold text-base flex items-center justify-center">
                B
              </div>
              <span className="font-serif font-bold text-lg text-white">BIHAR 360</span>
            </div>
            <p className="leading-relaxed">
              The Digital Atlas of Bihar. Documenting ancient civilizations, 38 administrative districts, sacred pilgrimage circuits, living folk arts, and gastronomic heritage with precision.
            </p>
          </div>

          {/* Col 2: Divisions of Bihar */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-3">9 Administrative Divisions</h4>
            <ul className="grid grid-cols-2 gap-1 text-[11px]">
              <li>• Patna Division</li>
              <li>• Tirhut Division</li>
              <li>• Saran Division</li>
              <li>• Darbhanga Division</li>
              <li>• Kosi Division</li>
              <li>• Purnia Division</li>
              <li>• Bhagalpur Division</li>
              <li>• Munger Division</li>
              <li>• Magadh Division</li>
            </ul>
          </div>

          {/* Col 3: Cultural Pillars */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-3">Living Traditions</h4>
            <ul className="space-y-1 text-[11px]">
              <li>• Chhath Mahaparva (Vedic Sun Worship)</li>
              <li>• Madhubani & Manjusha Painting</li>
              <li>• Silao Khaja & Gaya Tilkut</li>
              <li>• Sonepur Cattle Fair & Rajgir Mahotsav</li>
              <li>• Nalanda & Mahabodhi UNESCO Sites</li>
            </ul>
          </div>

          {/* Col 4: Authoritative Sources */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Attribution & Reference</span>
            </h4>
            <p className="leading-relaxed text-[11px]">
              Data curated from official publications of the Archaeological Survey of India (ASI), Census of India 2011, Bihar State Tourism Development Corporation (BSTDC), and District Gazetteers.
            </p>
            <p className="text-[10px] text-white/50 mt-4">
              © {new Date().getFullYear()} BIHAR 360. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals and Drawers */}
      {selectedDistrict && (
        <DistrictModal
          district={selectedDistrict}
          onClose={() => setSelectedDistrict(null)}
          isBookmarked={bookmarkedIds.includes(selectedDistrict.id)}
          onToggleBookmark={handleToggleBookmark}
          language={language}
        />
      )}

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDistrict={setSelectedDistrict}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          setIsSearchOpen(false);
        }}
        language={language}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedDistricts={bookmarkedDistricts}
        onRemoveBookmark={handleToggleBookmark}
        onSelectDistrict={setSelectedDistrict}
        language={language}
      />

      {isQuizOpen && (
        <QuizModal
          onClose={() => setIsQuizOpen(false)}
          language={language}
        />
      )}
    </div>
  );
}
