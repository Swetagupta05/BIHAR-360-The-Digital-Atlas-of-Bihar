import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  X,
  Clock,
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ALL_DISTRICTS } from '../../data/districts';
import {
  searchDiscoveryIndex,
  SEARCH_SUGGESTIONS,
  THEMATIC_STARTING_POINTS,
  DISCOVERY_INDEX
} from '../../data/discovery';
import { CATEGORIES, SearchCategoryFilters } from './SearchCategoryFilters';
import { SearchResultCard } from './SearchResultCard';
import { SearchEmptyState } from './SearchEmptyState';

const RECENT_SEARCHES_KEY = 'bihar360_recent_searches_v2';

export const SearchModal = ({
  isOpen,
  onClose,
  onSelectDistrict,
  onNavigateTab,
  onOpenGuide,
  language
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (stored) {
        setRecentSearches(JSON.parse(stored).slice(0, 6));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveRecentSearch = (term) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    try {
      const updated = [trimmed, ...recentSearches.filter(s => s.toLowerCase() !== trimmed.toLowerCase())].slice(0, 6);
      setRecentSearches(updated);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const removeRecentSearch = (term, e) => {
    e.stopPropagation();
    const updated = recentSearches.filter(s => s !== term);
    setRecentSearches(updated);
    try {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const clearAllRecentSearches = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // ignore
    }
  };

  // Focus input on open & reset state
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setActiveFilter('all');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Compute search state (memoized)
  const searchState = useMemo(() => {
    return searchDiscoveryIndex(query, activeFilter, 50);
  }, [query, activeFilter]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeFilter]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev =>
          searchState.results.length > 0 ? (prev + 1) % searchState.results.length : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev =>
          searchState.results.length > 0
            ? (prev - 1 + searchState.results.length) % searchState.results.length
            : 0
        );
      } else if (e.key === 'Enter') {
        if (searchState.results.length > 0 && searchState.results[selectedIndex]) {
          e.preventDefault();
          handleNavigateRecord(searchState.results[selectedIndex].record);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, searchState.results, selectedIndex]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector('[data-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  // Navigation dispatcher for a discovery record
  const handleNavigateRecord = (record) => {
    saveRecentSearch(query.trim() || record.title);
    onClose();

    if (record.type === 'district') {
      const dist = ALL_DISTRICTS.find(d => d.id === record.sourceId || d.slug === record.sourceId);
      if (dist) {
        onSelectDistrict(dist);
        return;
      }
    }

    if (record.route.tab === 'districts' && record.route.districtId) {
      const dist = ALL_DISTRICTS.find(d => d.id === record.route.districtId);
      if (dist) {
        onSelectDistrict(dist);
        return;
      }
    }

    // Default tab navigation
    onNavigateTab(record.route.tab);
  };

  // Handle clicking a connection chip
  const handleConnectionClick = (conn, e) => {
    e.stopPropagation();
    saveRecentSearch(conn.label);

    if (conn.targetType === 'district' || conn.districtId) {
      const distId = conn.targetId?.startsWith('hq-') ? conn.districtId : (conn.targetId || conn.districtId);
      const dist = ALL_DISTRICTS.find(d => d.id === distId || d.slug === distId);
      if (dist) {
        onClose();
        onSelectDistrict(dist);
        return;
      }
    }

    const typeToTab = {
      district: 'districts',
      place: 'places',
      heritage: 'heritage',
      history: 'history',
      person: 'personalities',
      festival: 'festivals',
      food: 'cuisine',
      art: 'arts',
      language: 'languages',
      music: 'music',
      journey: 'circuits'
    };

    const targetTab = typeToTab[conn.targetType] || 'home';
    onClose();
    onNavigateTab(targetTab);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 dark:bg-black/80 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 pt-10 sm:pt-14 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF9F5] dark:bg-[#14171A] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl w-full max-w-4xl max-h-[88vh] flex flex-col overflow-hidden shadow-2xl relative text-[#1E2124] dark:text-[#F5F1E8]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Discover Bihar Search"
      >
        {/* Editorial Top Hero Bar */}
        <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-[#EADBCE]/80 dark:border-[#2E343B] bg-[#F7F3EB] dark:bg-[#181C20] flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-serif font-bold text-base sm:text-xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
                {language === 'hi' ? 'बिहार को खोजिए' : 'Discover Bihar'}
              </h2>
              <span className="hidden min-[400px]:inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] font-semibold">
                Cultural Atlas Engine
              </span>
            </div>
            <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mt-0.5 line-clamp-1">
              {language === 'hi'
                ? 'बिहार को खोजिए, उसकी कहानियों के साथ — 38 ज़िले, 200+ सत्यापित प्रविष्टियाँ'
                : 'Search places, people, stories, traditions, food, languages and journeys'}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#2D3238]/60 dark:text-[#C8BFB4]/60 bg-white/70 dark:bg-[#20252C] px-2 py-1 rounded-md border border-[#EADBCE] dark:border-[#2E343B]">
              <span>ESC to close</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#EADBCE]/60 dark:hover:bg-[#252A30] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 transition-colors cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Input Box */}
        <div className="p-3.5 sm:p-4 border-b border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1A1D22] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={language === 'hi' ? 'बिहार 360 में खोजें' : 'Search Bihar 360 cultural atlas'}
            placeholder={
              language === 'hi'
                ? 'खोजें: नालंदा, लिट्टी चोखा, बुद्ध, शेरशाह, मिथिला, छठ, मैथिली, रोहतास...'
                : 'Search: Nalanda, Mithila art, Chhath, Sher Shah, Silao Khaja, Maithili, Rohtas...'
            }
            className="w-full text-sm sm:text-lg bg-transparent text-[#1E2124] dark:text-[#F5F1E8] focus:outline-none placeholder:text-[#2D3238]/40 dark:placeholder:text-[#C8BFB4]/40 font-medium"
            autoComplete="off"
            spellCheck="false"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1.5 text-xs text-[#2D3238]/50 hover:text-[#1E2124] dark:text-[#C8BFB4]/50 dark:hover:text-white cursor-pointer"
              title="Clear search"
              aria-label="Clear search query"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Thematic Category Tabs Strip */}
        <div className="border-b border-[#EADBCE] dark:border-[#2E343B] bg-[#F7F3EB]/70 dark:bg-[#16191D] py-2">
          <SearchCategoryFilters
            activeFilter={activeFilter}
            onSelectFilter={setActiveFilter}
            language={language}
          />
        </div>

        {/* Main Content Area (Scrollable) */}
        <div
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4"
        >
          {/* ZERO QUERY STATE: Portals & Suggestions */}
          {!query.trim() && (
            <div className="space-y-6 py-2">
              {/* Recent Searches (if available) */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D3238]/60 dark:text-[#C8BFB4]/60 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
                      {language === 'hi' ? 'हालिया खोजें' : 'Recent Searches'}
                    </span>
                    <button
                      onClick={clearAllRecentSearches}
                      className="text-[11px] text-[#C85A32] hover:underline"
                    >
                      {language === 'hi' ? 'सभी हटाएं' : 'Clear all'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, i) => (
                      <span
                        key={i}
                        onClick={() => setQuery(term)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#1E2228] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#1E2124] dark:text-[#F5F1E8] hover:border-[#C85A32] cursor-pointer transition-all shadow-xs group"
                      >
                        <span>{term}</span>
                        <button
                          onClick={(e) => removeRecentSearch(term, e)}
                          className="text-[#2D3238]/40 hover:text-[#C85A32] dark:text-[#C8BFB4]/40"
                          title="Remove"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Discovery Prompts */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D3238]/60 dark:text-[#C8BFB4]/60 mb-2.5 block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                  {language === 'hi' ? 'लोकप्रिय अन्वेषण' : 'Popular Explorations'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {SEARCH_SUGGESTIONS.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(s.query)}
                      className="px-3 py-1.5 rounded-full bg-white dark:bg-[#1E2228] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30] text-xs font-medium transition-all text-[#1E2124] dark:text-[#F5F1E8] shadow-xs flex items-center gap-1.5"
                    >
                      <span className="font-semibold">{s.label}</span>
                      <span className="text-[10px] text-[#C85A32] font-hindi-text">({s.hindi})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Thematic Portals / Starting Points */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D3238]/60 dark:text-[#C8BFB4]/60 mb-3 block">
                  {language === 'hi' ? 'कथात्मक प्रवेश द्वार' : 'Editorial Thematic Portals'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {THEMATIC_STARTING_POINTS.map((portal, pIdx) => (
                    <div
                      key={pIdx}
                      onClick={() => {
                        onClose();
                        onNavigateTab(portal.tab);
                      }}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#1E2228] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/60 hover:bg-[#F5EFE6]/60 dark:hover:bg-[#252A30] cursor-pointer transition-all duration-150 flex flex-col justify-between group shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                            {portal.tab}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C85A32] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <h4 className="font-serif font-bold text-xs text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors leading-snug">
                          {language === 'hi' ? portal.hindiTitle : portal.title}
                        </h4>
                        <p className="text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mt-1 line-clamp-2 leading-relaxed">
                          {portal.description}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-[#EADBCE]/50 dark:border-[#2E343B]/50 flex items-center justify-between text-[10px] text-[#C85A32] font-medium">
                        <span>Explore Story</span>
                        <span>→</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ACTIVE QUERY RESULTS */}
          {query.trim() && (
            <div className="space-y-4">
              {/* Summary line + Typo Suggestion */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 pb-1 border-b border-[#EADBCE]/60 dark:border-[#2E343B]/60">
                <span>
                  {language === 'hi'
                    ? `"${query}" के लिए ${searchState.totalMatches} परिणाम मिले`
                    : `Found ${searchState.totalMatches} connected ${searchState.totalMatches === 1 ? 'story' : 'stories'} for "${query}"`}
                </span>

                {searchState.didYouMean && (
                  <div className="flex items-center gap-1.5 text-xs text-[#C85A32] dark:text-[#E06C43] bg-[#C85A32]/10 dark:bg-[#C85A32]/20 px-2.5 py-1 rounded-full">
                    <span>{language === 'hi' ? 'क्या आपका मतलब था:' : 'Did you mean:'}</span>
                    <button
                      onClick={() => setQuery(searchState.didYouMean)}
                      className="font-bold underline hover:no-underline"
                    >
                      {searchState.didYouMean}
                    </button>
                    <span>?</span>
                  </div>
                )}
              </div>

              {/* Zero Matches State */}
              {searchState.results.length === 0 ? (
                <SearchEmptyState
                  query={query}
                  setQuery={setQuery}
                  onClose={onClose}
                  onOpenGuide={onOpenGuide}
                  onNavigateTab={onNavigateTab}
                  language={language}
                />
              ) : (
                /* Results List */
                <div className="space-y-3">
                  {searchState.results.map((res, index) => (
                    <SearchResultCard
                      key={res.record.id}
                      res={res}
                      isSelected={selectedIndex === index}
                      onSelect={handleNavigateRecord}
                      onHover={() => setSelectedIndex(index)}
                      onConnectionClick={handleConnectionClick}
                      language={language}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Hint Bar */}
        <div className="p-3 bg-[#F4EFE6] dark:bg-[#121417] border-t border-[#EADBCE] dark:border-[#2E343B] flex flex-wrap items-center justify-between text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
              <strong>200+ Verified Records</strong>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">38 Districts, 28 Landscapes, 37 Eras & Events, 16 Cuisines, 10 Journeys</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px]">
            <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B]">
              ↑↓ Navigate
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B]">
              ↵ Select
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B]">
              ESC Close
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};
