import React, { Suspense, lazy, useMemo, useRef, useEffect, useState, useLayoutEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SymbolsBanner } from './components/layout/SymbolsBanner';
import { HomePage } from './pages/HomePage';
import { SectionLoadingState } from './components/common/SectionLoadingState';
import { LazyErrorBoundary } from './components/common/LazyErrorBoundary';
import { ALL_DISTRICTS } from './data/districts';
import { District } from './types';
import { MusicPlayerProvider, useMusicPlayer } from './context/MusicPlayerContext';
import { resolveTranslationLanguage } from './data/interfaceLanguages';

// Page-level code splitting via dynamic imports (React.lazy)
const DistrictsGrid = lazy(() => import('./features/districts/DistrictsGrid').then(m => ({ default: m.DistrictsGrid })));
const InteractiveMap = lazy(() => import('./features/map/InteractiveMap').then(m => ({ default: m.InteractiveMap })));
const HeritageView = lazy(() => import('./features/heritage/HeritageView').then(m => ({ default: m.HeritageView })));
const CuisineView = lazy(() => import('./features/cuisine/CuisineView').then(m => ({ default: m.CuisineView })));
const ArtsView = lazy(() => import('./features/arts/ArtsView').then(m => ({ default: m.ArtsView })));
const FestivalsView = lazy(() => import('./features/festivals/FestivalsView').then(m => ({ default: m.FestivalsView })));
const PersonalitiesView = lazy(() => import('./features/people/PersonalitiesView').then(m => ({ default: m.PersonalitiesView })));
const PlacesView = lazy(() => import('./features/places/PlacesView').then(m => ({ default: m.PlacesView })));
const ItinerariesView = lazy(() => import('./features/journeys/ItinerariesView').then(m => ({ default: m.ItinerariesView })));
const MusicView = lazy(() => import('./features/music/MusicView').then(m => ({ default: m.MusicView })));
const LanguagesView = lazy(() => import('./features/languages/LanguagesView').then(m => ({ default: m.LanguagesView })));
const HistoryView = lazy(() => import('./features/history/HistoryView').then(m => ({ default: m.HistoryView })));
const DistrictDossierView = lazy(() => import('./components/dossier/DistrictDossierView').then(m => ({ default: m.DistrictDossierView })));

// On-demand lazy-loaded modals and utilities
const DistrictModal = lazy(() => import('./components/modals/DistrictModal').then(m => ({ default: m.DistrictModal })));
const SearchModal = lazy(() => import('./features/search/SearchModal').then(m => ({ default: m.SearchModal })));
const BookmarksDrawer = lazy(() => import('./components/modals/BookmarksDrawer').then(m => ({ default: m.BookmarksDrawer })));
const QuizModal = lazy(() => import('./components/modals/QuizModal').then(m => ({ default: m.QuizModal })));
const BiharGuide = lazy(() => import('./components/ai/BiharGuide').then(m => ({ default: m.BiharGuide })));
const GlobalMusicPlayer = lazy(() => import('./components/music/GlobalMusicPlayer').then(m => ({ default: m.GlobalMusicPlayer })));

// Host wrapper to avoid loading the player chunk until music playback is activated
const GlobalMusicPlayerHost: React.FC<{
  onNavigateTab: (tab: string) => void;
  onSelectDistrictById: (id: string) => void;
}> = ({ onNavigateTab, onSelectDistrictById }) => {
  const { isPlayerVisible, currentTrack } = useMusicPlayer();
  if (!isPlayerVisible || !currentTrack) return null;
  return (
    <LazyErrorBoundary fallbackTitle="Audio Player Notice" fallbackHindi="ऑडियो प्लेयर लोड करने में त्रुटि">
      <Suspense fallback={null}>
        <GlobalMusicPlayer
          onNavigateTab={onNavigateTab}
          onSelectDistrictById={onSelectDistrictById}
        />
      </Suspense>
    </LazyErrorBoundary>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [dossierDistrict, setDossierDistrict] = useState<District | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [guideInitialQuery, setGuideInitialQuery] = useState<string | undefined>(undefined);
  const [guideOpenerRef, setGuideOpenerRef] = useState<HTMLElement | null>(null);
  const [language, setLanguage] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('bihar360_language');
      if (saved) return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const effectiveLang = resolveTranslationLanguage(language);

  // Keep ref up to date for keyboard listeners to avoid stale closure
  const dossierDistrictRef = useRef(dossierDistrict);
  useLayoutEffect(() => {
    dossierDistrictRef.current = dossierDistrict;
  }, [dossierDistrict]);

  // Save language preference to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bihar360_language', language);
    } catch {
      // ignore
    }
  }, [language]);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bihar360_bookmarks');
      return saved ? JSON.parse(saved) : ['patna', 'nalanda', 'gaya', 'madhubani'];
    } catch {
      return ['patna', 'nalanda', 'gaya', 'madhubani'];
    }
  });

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bihar360_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore
    }
  }, [bookmarkedIds]);

  // URL query parameter check for direct link sharing & browser back/forward navigation
  useEffect(() => {
    const syncStateFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const districtSlug = params.get('district');
      if (districtSlug) {
        const matched = ALL_DISTRICTS.find(d => d.slug === districtSlug || d.id === districtSlug);
        setDossierDistrict(matched || null);
      } else {
        setDossierDistrict(null);
      }

      const tabParam = params.get('tab');
      if (tabParam) {
        const normalizedTab = tabParam === 'itineraries' ? 'circuits' : tabParam === 'people' ? 'personalities' : tabParam;
        setActiveTab(normalizedTab);
      } else {
        setActiveTab('home');
      }
    };

    syncStateFromUrl();
    window.addEventListener('popstate', syncStateFromUrl);
    return () => window.removeEventListener('popstate', syncStateFromUrl);
  }, []);

  const handleCloseDossier = () => {
    setDossierDistrict(null);
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('district')) {
        url.searchParams.delete('district');
        window.history.pushState({ tab: activeTab }, '', url.toString());
      }
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global keyboard shortcuts with ref pattern to prevent stale closure re-registrations
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsBookmarksOpen(false);
        setIsQuizOpen(false);
        setIsGuideOpen(false);
        setSelectedDistrict(null);
        if (dossierDistrictRef.current) {
          handleCloseDossier();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenGuide = (initialQuery?: string, openerEl?: HTMLElement | null) => {
    setGuideInitialQuery(initialQuery);
    setGuideOpenerRef(openerEl || (document.activeElement as HTMLElement));
    setIsGuideOpen(true);
  };

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
      window.history.pushState({ district: district.slug, tab: activeTab }, '', url.toString());
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

  const handleTabChange = (rawTab: string) => {
    const tab = rawTab === 'itineraries' ? 'circuits' : rawTab === 'people' ? 'personalities' : rawTab;
    setActiveTab(tab);
    setDossierDistrict(null);
    setSelectedDistrict(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('district')) {
        url.searchParams.delete('district');
      }
      if (tab !== 'home') {
        url.searchParams.set('tab', tab);
      } else {
        url.searchParams.delete('tab');
      }
      window.history.pushState({ tab }, '', url.toString());
    } catch {
      // ignore
    }
  };

  // Memoized bookmarked districts array to avoid recalculation on unrelated renders
  const bookmarkedDistricts = useMemo(
    () => ALL_DISTRICTS.filter(d => bookmarkedIds.includes(d.id)),
    [bookmarkedIds]
  );

  return (
    <MusicPlayerProvider>
      <div className="min-h-screen flex flex-col bg-[#FBF9F5] dark:bg-[#0F1113] text-[#1E2124] dark:text-[#F5F1E8] selection:bg-[#C85A32]/20 transition-colors duration-200">
        {/* Skip to Main Content Accessibility Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-[#C85A32] focus:text-white focus:font-semibold focus:text-xs focus:shadow-lg"
        >
          {effectiveLang === 'hi' ? 'मुख्य सामग्री पर जाएँ' : 'Skip to main content'}
        </a>

        {/* Navigation Header */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenBookmarks={() => setIsBookmarksOpen(true)}
          bookmarkCount={bookmarkedIds.length}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenGuide={() => handleOpenGuide()}
          language={language}
          setLanguage={setLanguage}
        />

        {/* Main Content Area */}
        {dossierDistrict ? (
          <main id="main-content" className="flex-1 w-full">
            <LazyErrorBoundary
              fallbackTitle="Unable to load this district dossier."
              fallbackHindi="ज़िला विवरण लोड करने में व्यवधान आ गया।"
              fallbackMessage="A network interruption occurred while loading this dossier. Check your connection and retry."
              onRetry={() => {
                const current = dossierDistrict;
                setDossierDistrict(null);
                setTimeout(() => setDossierDistrict(current), 50);
              }}
            >
              <Suspense fallback={<SectionLoadingState message="Opening district dossier…" hindiMessage="ज़िला विवरण लोड किया जा रहा है…" />}>
                <DistrictDossierView
                  district={dossierDistrict}
                  onBack={handleCloseDossier}
                  onSelectDistrict={handleOpenDossier}
                  isBookmarked={bookmarkedIds.includes(dossierDistrict.id)}
                  onToggleBookmark={handleToggleBookmark}
                  language={effectiveLang}
                  onLanguageToggle={() => setLanguage(l => l === 'en' ? 'hi' : 'en')}
                />
              </Suspense>
            </LazyErrorBoundary>
          </main>
        ) : activeTab === 'home' ? (
          <main id="main-content" className="flex-1 w-full">
            <HomePage
              onNavigateTab={handleTabChange}
              onSelectDistrict={handleOpenDossier}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onOpenQuiz={() => setIsQuizOpen(true)}
              onOpenGuide={() => handleOpenGuide()}
              language={effectiveLang}
            />
          </main>
        ) : (
          <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <LazyErrorBoundary
              fallbackTitle="Something interrupted this section."
              fallbackHindi="कथा में कोई व्यवधान आ गया।"
              fallbackMessage="A network interruption prevented this section from loading. Check your connection and tap below to retry."
              onRetry={() => {
                const current = activeTab;
                setActiveTab('home');
                setTimeout(() => setActiveTab(current), 50);
              }}
            >
              <Suspense fallback={<SectionLoadingState />}>
                {activeTab === 'districts' && (
                  <DistrictsGrid
                    onSelectDistrict={handleOpenDossier}
                    bookmarkedIds={bookmarkedIds}
                    onToggleBookmark={handleToggleBookmark}
                    language={effectiveLang}
                  />
                )}

                {activeTab === 'map' && (
                  <InteractiveMap
                    onSelectDistrict={handleOpenDossier}
                    selectedDistrict={selectedDistrict}
                    language={effectiveLang}
                  />
                )}

                {activeTab === 'history' && (
                  <HistoryView
                    language={effectiveLang}
                    onNavigateTab={handleTabChange}
                    onSelectDistrictById={handleOpenDossierById}
                    onSelectPersonality={() => handleTabChange('personalities')}
                    onSelectHeritageSite={() => handleTabChange('heritage')}
                  />
                )}

                {activeTab === 'heritage' && (
                  <HeritageView
                    language={effectiveLang}
                    onSelectDistrict={handleOpenDossier}
                  />
                )}

                {activeTab === 'cuisine' && (
                  <CuisineView
                    language={effectiveLang}
                    onNavigateTab={handleTabChange}
                    onSelectDistrictById={handleOpenDossierById}
                  />
                )}

                {activeTab === 'arts' && (
                  <ArtsView
                    language={effectiveLang}
                    onSelectDistrict={handleOpenDossierById}
                  />
                )}

                {activeTab === 'festivals' && (
                  <FestivalsView
                    language={effectiveLang}
                    onSelectDistrict={handleOpenDossier}
                    onSelectTab={handleTabChange}
                  />
                )}

                {activeTab === 'personalities' && (
                  <PersonalitiesView
                    language={effectiveLang}
                    onSelectDistrict={handleOpenDossierById}
                  />
                )}

                {activeTab === 'places' && (
                  <PlacesView
                    language={effectiveLang}
                    onSelectDistrict={handleOpenDossierById}
                    onNavigateTab={handleTabChange}
                    onSelectPerson={() => handleTabChange('personalities')}
                  />
                )}

                {(activeTab === 'circuits' || activeTab === 'itineraries') && (
                  <ItinerariesView
                    language={effectiveLang}
                    onSelectDistrictById={handleOpenDossierById}
                    onNavigateTab={handleTabChange}
                  />
                )}

                {activeTab === 'music' && (
                  <MusicView
                    language={effectiveLang}
                    onNavigateTab={handleTabChange}
                    onSelectDistrictById={handleOpenDossierById}
                  />
                )}

                {activeTab === 'languages' && (
                  <LanguagesView
                    language={language}
                    onNavigateTab={handleTabChange}
                    onSelectDistrictById={handleOpenDossierById}
                    onSelectPersonality={() => handleTabChange('personalities')}
                  />
                )}
              </Suspense>
            </LazyErrorBoundary>
          </main>
        )}

        {/* State Symbols & Emblems Banner */}
        <SymbolsBanner language={language} />

        {/* Footer */}
        <Footer language={language} />

        {/* Modals and Drawers - on-demand lazy mounted with error boundary */}
        {selectedDistrict && (
          <LazyErrorBoundary>
            <Suspense fallback={null}>
              <DistrictModal
                district={selectedDistrict}
                onClose={() => setSelectedDistrict(null)}
                isBookmarked={bookmarkedIds.includes(selectedDistrict.id)}
                onToggleBookmark={handleToggleBookmark}
                language={effectiveLang}
                onOpenDossier={handleOpenDossier}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}

        {isSearchOpen && (
          <LazyErrorBoundary>
            <Suspense fallback={null}>
              <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                onSelectDistrict={(d: District) => {
                  setIsSearchOpen(false);
                  handleOpenDossier(d);
                }}
                onNavigateTab={(tab: string) => {
                  handleTabChange(tab);
                  setIsSearchOpen(false);
                }}
                onOpenGuide={(q?: string) => {
                  setIsSearchOpen(false);
                  handleOpenGuide(q);
                }}
                language={language}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}

        {isBookmarksOpen && (
          <LazyErrorBoundary>
            <Suspense fallback={null}>
              <BookmarksDrawer
                isOpen={isBookmarksOpen}
                onClose={() => setIsBookmarksOpen(false)}
                bookmarkedDistricts={bookmarkedDistricts}
                onRemoveBookmark={handleToggleBookmark}
                onSelectDistrict={(d) => {
                  setIsBookmarksOpen(false);
                  handleOpenDossier(d);
                }}
                language={effectiveLang}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}

        {isQuizOpen && (
          <LazyErrorBoundary>
            <Suspense fallback={null}>
              <QuizModal
                onClose={() => setIsQuizOpen(false)}
                language={effectiveLang}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}

        {isGuideOpen && (
          <LazyErrorBoundary fallbackTitle="Bihar Guide Notice" fallbackHindi="मार्गदर्शिका लोड करने में त्रुटि">
            <Suspense fallback={null}>
              <BiharGuide
                isOpen={isGuideOpen}
                onClose={() => {
                  setIsGuideOpen(false);
                  setGuideInitialQuery(undefined);
                }}
                onSelectDistrictById={(dId) => {
                  handleOpenDossierById(dId);
                }}
                onNavigateTab={(tab) => {
                  handleTabChange(tab);
                }}
                initialQuery={guideInitialQuery}
                openerElement={guideOpenerRef}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}

        {/* Canonical Persistent Global Music Player */}
        <GlobalMusicPlayerHost
          onNavigateTab={handleTabChange}
          onSelectDistrictById={handleOpenDossierById}
        />
      </div>
    </MusicPlayerProvider>
  );
}