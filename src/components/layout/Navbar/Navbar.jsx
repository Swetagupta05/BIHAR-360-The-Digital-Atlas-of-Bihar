import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { uiTranslations } from '../../../data/translations';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { NavActions } from './NavActions';

export const Navbar = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenBookmarks,
  bookmarkCount,
  onOpenQuiz,
  onOpenGuide,
  language,
  setLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const t = uiTranslations[language].nav;

  // Lock body scroll when mobile menu is open and close on Escape or desktop resize
  React.useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 dark:bg-[#0F1113]/95 backdrop-blur-md border-b border-[#EADBCE] dark:border-[#2E343B] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-3 lg:gap-4 min-w-0">
          {/* Brand Logo & Editorial Title — flex-shrink allowed so it never pushes right controls off-screen */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group min-w-0 flex-shrink cursor-pointer"
            id="brand-logo-btn"
            aria-label="BIHAR 360 Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#C85A32] to-[#A54420] text-white">
              <img
                src="/logo.png"
                alt="BIHAR 360"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.monogram-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <span className="monogram-fallback hidden font-serif font-bold text-lg text-white">
                B
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className="font-serif font-bold text-base min-[360px]:text-lg sm:text-xl tracking-tight text-[#14171A] dark:text-[#F5F1E8] whitespace-nowrap truncate">
                  BIHAR 360
                </span>
                <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#8B263E]/10 text-[#8B263E] dark:bg-[#8B263E]/20 dark:text-[#E892A2] border border-[#8B263E]/20 whitespace-nowrap flex-shrink-0">
                  {language === 'hi' ? 'डिजिटल एटलस' : 'Atlas'}
                </span>
              </div>
              <p className="hidden min-[360px]:block text-[10px] sm:text-xs text-[#5C6470] dark:text-[#88929A] font-medium tracking-wide truncate max-w-[135px] min-[400px]:max-w-[175px] sm:max-w-[220px] lg:max-w-[170px] xl:max-w-none">
                {t.brandSubtitle}
              </p>
            </div>
          </button>

          {/* Desktop Compact Pill Navigation */}
          <DesktopNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            t={t}
            language={language}
          />

          {/* Right Utilities (Prioritized for Mobile, Full on Desktop) */}
          <NavActions
            t={t}
            theme={theme}
            toggleTheme={toggleTheme}
            language={language}
            setLanguage={setLanguage}
            onOpenSearch={onOpenSearch}
            onOpenQuiz={onOpenQuiz}
            onOpenBookmarks={onOpenBookmarks}
            bookmarkCount={bookmarkCount}
            onOpenGuide={onOpenGuide}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <MobileNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setMobileMenuOpen={setMobileMenuOpen}
          t={t}
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          setLanguage={setLanguage}
          onOpenSearch={onOpenSearch}
          onOpenQuiz={onOpenQuiz}
          onOpenBookmarks={onOpenBookmarks}
          bookmarkCount={bookmarkCount}
          onOpenGuide={onOpenGuide}
        />
      )}
    </header>
  );
};
