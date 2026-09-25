import React from 'react';
import { District } from '../types';
import { Bookmark, X, ArrowRight, Trash2 } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedDistricts: District[];
  onRemoveBookmark: (district: District) => void;
  onSelectDistrict: (district: District) => void;
  language: 'en' | 'hi';
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedDistricts,
  onRemoveBookmark,
  onSelectDistrict,
  language
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 dark:bg-black/75 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div
        className="bg-[#FBF9F5] dark:bg-[#16191D] border-l border-[#EADBCE] dark:border-[#2E343B] w-full max-w-md h-full shadow-2xl flex flex-col justify-between relative text-[#1E2124] dark:text-[#F5F1E8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between bg-white dark:bg-[#1A1D22]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#C85A32] dark:text-[#E06C43] fill-current" />
            <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8]">
              {language === 'hi' ? 'सहेजे गए जिले' : 'Saved Districts'}
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E06C43] text-xs font-bold">
              {bookmarkedDistricts.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#F4EFE6] dark:hover:bg-[#252A30] text-[#2D3238] dark:text-[#C8BFB4] transition-colors"
            aria-label="Close bookmarks drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {bookmarkedDistricts.length === 0 ? (
            <div className="py-16 text-center text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 space-y-2">
              <Bookmark className="w-10 h-10 text-[#EADBCE] dark:text-[#2E343B] mx-auto mb-2" />
              <p className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8]">No Saved Districts Yet</p>
              <p>Click the bookmark icon on any district card or dossier to save it for offline review.</p>
            </div>
          ) : (
            bookmarkedDistricts.map(district => (
              <div
                key={district.id}
                className="p-3.5 rounded-xl bg-white dark:bg-[#1F2329] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32]/40 dark:hover:border-[#E06C43]/40 transition-colors shadow-xs flex items-center justify-between gap-3 group"
              >
                <div
                  onClick={() => {
                    onSelectDistrict(district);
                    onClose();
                  }}
                  className="cursor-pointer flex-1"
                >
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] dark:group-hover:text-[#E06C43] transition-colors">
                      {district.name}
                    </h4>
                    <span className="text-xs text-[#2D3238]/60 dark:text-[#C8BFB4]/60">({district.hindiName})</span>
                  </div>
                  <p className="text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 mt-0.5">
                    HQ: {district.headquarters} • {district.region}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onRemoveBookmark(district)}
                    className="p-2 rounded-lg text-[#2D3238]/40 dark:text-[#C8BFB4]/50 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onSelectDistrict(district);
                      onClose();
                    }}
                    className="p-2 rounded-lg text-[#C85A32] dark:text-[#E06C43] hover:bg-[#F4EFE6] dark:hover:bg-[#282E36] transition-colors"
                    title="Open Dossier"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#EADBCE] dark:border-[#2E343B] bg-[#F4EFE6] dark:bg-[#121417] text-[11px] text-[#2D3238]/70 dark:text-[#C8BFB4]/70 text-center">
          Persisted securely in your local browser session.
        </div>
      </div>
    </div>
  );
};
