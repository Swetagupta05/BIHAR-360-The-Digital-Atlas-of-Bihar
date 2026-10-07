import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export const NavDropdown = ({ label, isActive, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-150 border ${
          isActive
            ? 'bg-white dark:bg-[#252A30] text-[#C85A32] dark:text-[#E07A52] border-[#EADBCE]/80 dark:border-[#38404A] shadow-xs'
            : 'border-transparent text-[#5C6470] dark:text-[#9EA8B3] hover:text-[#14171A] dark:hover:text-[#F5F1E8] hover:bg-[#EADBCE]/40 dark:hover:bg-[#252A30]/50'
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 opacity-70 ${
            isOpen ? 'rotate-180' : 'group-hover:rotate-180'
          }`}
        />
      </button>

      <div
        role="menu"
        onClick={() => setIsOpen(false)}
        className={`absolute top-full left-0 min-w-56 p-1.5 mt-1.5 bg-[#FBF9F5] dark:bg-[#16191D] rounded-2xl shadow-xl border border-[#EADBCE] dark:border-[#2E343B] transition-all duration-150 z-50 ${
          isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
