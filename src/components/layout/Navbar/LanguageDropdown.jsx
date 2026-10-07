import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { INTERFACE_LANGUAGES, getInterfaceLanguage } from '../../../data/interfaceLanguages';

export const LanguageDropdown = ({ language, setLanguage, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const listboxRef = useRef(null);

  const currentLang = getInterfaceLanguage(language);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Handle keyboard events (Escape, ArrowDown, ArrowUp, Enter, Space)
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
        const currentIndex = INTERFACE_LANGUAGES.findIndex((l) => l.code === currentLang.code);
        setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
      }
      return;
    }

    if (e.key === 'Escape' || e.key === 'Tab') {
      setIsOpen(false);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev < INTERFACE_LANGUAGES.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : INTERFACE_LANGUAGES.length - 1));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < INTERFACE_LANGUAGES.length) {
        setLanguage(INTERFACE_LANGUAGES[focusedIndex].code);
        setIsOpen(false);
      }
    }
  };

  // Keep focused item visible inside the scrollable listbox
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listboxRef.current) {
      const items = listboxRef.current.querySelectorAll('[role="option"]');
      if (items[focusedIndex]) {
        items[focusedIndex].scrollIntoView({ block: 'nearest' });
      }
    }
  }, [focusedIndex, isOpen]);

  return (
    <div className={`relative ${isMobile ? 'w-full' : ''}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Interface Language: ${currentLang.name} (${currentLang.nativeName})`}
        className={`inline-flex items-center justify-between gap-1.5 px-3 py-2 sm:py-1.5 rounded-xl sm:rounded-full text-xs font-medium tracking-tight transition-all duration-150 border focus:outline-none focus:ring-2 focus:ring-[#C85A32]/40 cursor-pointer ${
          isMobile
            ? 'w-full min-h-[44px] bg-white dark:bg-[#1A1D20] text-[#14171A] dark:text-[#F5F1E8] border-[#EADBCE] dark:border-[#2E343B] shadow-xs'
            : 'min-h-9 bg-[#F4EFE6]/80 dark:bg-[#1A1D20]/80 hover:bg-[#EADBCE]/60 dark:hover:bg-[#282D33] text-[#2D3139] dark:text-[#E4DFD5] border-[#EADBCE] dark:border-[#2E343B]'
        }`}
      >
        <span className="flex items-center gap-1.5 truncate">
          <Globe className="w-3.5 h-3.5 text-[#C85A32] flex-shrink-0" />
          <span className="font-semibold">{currentLang.nativeName}</span>
          <span className={`text-[10px] text-[#5C6470] dark:text-[#9EA8B3] ${isMobile ? 'inline' : 'hidden xl:inline'}`}>
            ({currentLang.name})
          </span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#5C6470] dark:text-[#9EA8B3] transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={listboxRef}
          role="listbox"
          aria-label="Interface Languages"
          tabIndex={-1}
          className={`absolute z-50 mt-1.5 py-1.5 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] shadow-xl overflow-y-auto max-h-72 animate-in fade-in duration-100 ${
            isMobile ? 'left-0 right-0 w-full' : 'right-0 w-64'
          }`}
        >
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5C6470] dark:text-[#9EA8B3] border-b border-[#EADBCE]/60 dark:border-[#2E343B]/60 mb-1">
            Interface Language
          </div>

          {INTERFACE_LANGUAGES.map((item, index) => {
            const isSelected = item.code === currentLang.code;
            const isFocused = index === focusedIndex;

            return (
              <div
                key={item.code}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLanguage(item.code);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setFocusedIndex(index)}
                className={`flex items-center justify-between px-3.5 py-2 text-xs cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E07A52] font-semibold'
                    : isFocused
                    ? 'bg-[#EADBCE]/50 dark:bg-[#252A30] text-[#14171A] dark:text-[#F5F1E8]'
                    : 'text-[#2D3139] dark:text-[#D4CDC3]'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium leading-tight">{item.nativeName}</span>
                  <span className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                    {item.name} {!item.translationAvailable && '• (English/Hindi Fallback)'}
                  </span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-[#C85A32] flex-shrink-0" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
