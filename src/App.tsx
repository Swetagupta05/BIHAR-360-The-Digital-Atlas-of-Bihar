import React from 'react';
import { Navbar } from './components/Navbar';
import { DistrictsGrid } from './components/DistrictsGrid';
import { InteractiveMap } from './components/InteractiveMap';
import { HeritageView } from './components/HeritageView';
import { CuisineView } from './components/CuisineView';
import { ArtsView } from './components/ArtsView';
import { FestivalsView } from './components/FestivalsView';
import { PersonalitiesView } from './components/PersonalitiesView';
import { PlacesView } from './components/PlacesView';
import { ItinerariesView } from './components/ItinerariesView';
import { DistrictModal } from './components/DistrictModal';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { QuizModal } from './components/QuizModal';
import { ALL_DISTRICTS } from './data/districts';
import { District } from './types';
import { ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { HomePage } from './components/HomePage';
import { DistrictDossierView } from './components/dossier/DistrictDossierView';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<string>('home');
  const [selectedDistrict, setSelectedDistrict] = React.useState<District | null>(null);
  const [dossierDistrict, setDossierDistrict] = React.useState<District | null>(null);
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
        setDossierDistrict(matched);
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
        if (dossierDistrict) {
          handleCloseDossier();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dossierDistrict]);

  const handleToggleBookmark = (district: District) => {
    setBookmarkedIds(prev =>
      prev.includes(district.id)
        ? prev.filter(id => id !== district.id)
        : [...prev, district.id]
    );
  };

  const handleOpenDossier = (district: District) => {
    setDossierDistrict(district);
    setSelectedDistrict(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('district', district.slug);
      window.history.pushState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  const handleOpenDossierById = (districtId: string) => {
    const district = ALL_DISTRICTS.find(d => d.id === districtId || d.slug === districtId);
    if (district) {
      handleOpenDossier(district);
    }
  };

  const handleCloseDossier = () => {
    setDossierDistrict(null);
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('district')) {
        url.searchParams.delete('district');
        window.history.replaceState({}, '', url.pathname);
      }
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setDossierDistrict(null);
    setSelectedDistrict(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('district')) {
        url.searchParams.delete('district');
        window.history.replaceState({}, '', url.pathname);
      }
    } catch {
      // ignore
    }
  };

  const bookmarkedDistricts = ALL_DISTRICTS.filter(d => bookmarkedIds.includes(d.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] dark:bg-[#0F1113] text-[#1E2124] dark:text-[#F5F1E8] selection:bg-[#C85A32]/20 transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarkCount={bookmarkedIds.length}
        onOpenQuiz={() => setIsQuizOpen(true)}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content Area */}
      {dossierDistrict ? (
        <main className="flex-1 w-full">
          <DistrictDossierView
            district={dossierDistrict}
            onBack={handleCloseDossier}
            onSelectDistrict={handleOpenDossier}
            isBookmarked={bookmarkedIds.includes(dossierDistrict.id)}
            onToggleBookmark={handleToggleBookmark}
            language={language}
            onLanguageToggle={() => setLanguage(l => l === 'en' ? 'hi' : 'en')}
          />
        </main>
      ) : activeTab === 'home' ? (
        <main className="flex-1 w-full">
          <HomePage
            onNavigateTab={handleTabChange}
            onSelectDistrict={handleOpenDossier}
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
              onSelectDistrict={handleOpenDossier}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              language={language}
            />
          )}

          {activeTab === 'map' && (
            <InteractiveMap
              onSelectDistrict={handleOpenDossier}
              selectedDistrict={selectedDistrict}
              language={language}
            />
          )}

          {activeTab === 'heritage' && (
            <HeritageView
              language={language}
              onSelectDistrict={handleOpenDossier}
            />
          )}

          {activeTab === 'cuisine' && (
            <CuisineView language={language} />
          )}

          {activeTab === 'arts' && (
            <ArtsView
              language={language}
              onSelectDistrict={handleOpenDossierById}
            />
          )}

          {activeTab === 'festivals' && (
            <FestivalsView
              language={language}
              onSelectDistrict={handleOpenDossier}
              onSelectTab={setActiveTab}
            />
          )}

          {activeTab === 'personalities' && (
            <PersonalitiesView
              language={language}
              onSelectDistrict={handleOpenDossierById}
            />
          )}

          {activeTab === 'places' && (
            <PlacesView
              language={language}
              onSelectDistrict={handleOpenDossierById}
              onNavigateTab={handleTabChange}
              onSelectPerson={() => setActiveTab('personalities')}
            />
          )}

          {activeTab === 'circuits' && (
            <ItinerariesView language={language} />
          )}
        </main>
      )}

      {/* State Symbols & Emblems Banner */}
      <section className="bg-[#F4EFE6] dark:bg-[#16191D] border-y border-[#EADBCE] dark:border-[#2E343B] py-6 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#2D3238] dark:text-[#C8BFB4]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32] dark:bg-[#E06C43]"></span>
              <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Official State Symbols of Bihar:</strong>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 font-medium">
              <span>🌿 <strong className="text-[#1E2124] dark:text-[#F5F1E8]">State Tree:</strong> Peepal (Ficus religiosa)</span>
              <span>🐦 <strong className="text-[#1E2124] dark:text-[#F5F1E8]">State Bird:</strong> Gauraiya (House Sparrow)</span>
              <span>🐂 <strong className="text-[#1E2124] dark:text-[#F5F1E8]">State Animal:</strong> Gaur (Mithun)</span>
              <span>🌼 <strong className="text-[#1E2124] dark:text-[#F5F1E8]">State Flower:</strong> Genda (Marigold)</span>
              <span>🐟 <strong className="text-[#1E2124] dark:text-[#F5F1E8]">State Fish:</strong> Mangur (Clarias batrachus)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E2124] dark:bg-[#0A0C0E] text-white border-t border-[#2D3238] dark:border-[#1E2227] py-10 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-[#EADBCE]/80 dark:text-[#C8BFB4]/80">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#C85A32] dark:bg-[#E06C43] text-white font-serif font-bold text-base flex items-center justify-center">
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
            <ul className="grid grid-cols-2 gap-1 text-[11px] text-[#EADBCE]/70 dark:text-[#C8BFB4]/70">
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
            <ul className="space-y-1 text-[11px] text-[#EADBCE]/70 dark:text-[#C8BFB4]/70">
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
            <p className="text-[10px] text-white/50 dark:text-white/40 mt-4">
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
          onOpenDossier={handleOpenDossier}
        />
      )}

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDistrict={(d) => {
          setIsSearchOpen(false);
          handleOpenDossier(d);
        }}
        onNavigateTab={(tab) => {
          handleTabChange(tab);
          setIsSearchOpen(false);
        }}
        language={language}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedDistricts={bookmarkedDistricts}
        onRemoveBookmark={handleToggleBookmark}
        onSelectDistrict={(d) => {
          setIsBookmarksOpen(false);
          handleOpenDossier(d);
        }}
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
