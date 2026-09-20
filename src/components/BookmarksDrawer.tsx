import React from 'react';
import { District } from '../types';
import { Bookmark, X, ArrowRight, Trash2, MapPin } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div
        className="bg-[#FBF9F5] border-l border-[#EADBCE] w-full max-w-md h-full shadow-2xl flex flex-col justify-between relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#EADBCE] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#C85A32] fill-current" />
            <h3 className="font-serif font-bold text-lg text-[#1E2124]">
              {language === 'hi' ? 'सहेजे गए जिले' : 'Saved Districts'}
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-bold">
              {bookmarkedDistricts.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#F4EFE6] text-[#2D3238] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {bookmarkedDistricts.length === 0 ? (
            <div className="py-16 text-center text-xs text-[#2D3238]/60 space-y-2">
              <Bookmark className="w-10 h-10 text-[#EADBCE] mx-auto mb-2" />
              <p className="font-serif font-bold text-sm text-[#1E2124]">No Saved Districts Yet</p>
              <p>Click the bookmark icon on any district card or dossier to save it for offline review.</p>
            </div>
          ) : (
            bookmarkedDistricts.map(district => (
              <div
                key={district.id}
                className="p-3.5 rounded-xl bg-white border border-[#EADBCE] hover:border-[#C85A32]/40 transition-colors shadow-xs flex items-center justify-between gap-3 group"
              >
                <div
                  onClick={() => {
                    onSelectDistrict(district);
                    onClose();
                  }}
                  className="cursor-pointer flex-1"
                >
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif font-bold text-sm text-[#1E2124] group-hover:text-[#C85A32] transition-colors">
                      {district.name}
                    </h4>
                    <span className="text-xs text-[#2D3238]/60">({district.hindiName})</span>
                  </div>
                  <p className="text-[11px] text-[#2D3238]/70 mt-0.5">
                    HQ: {district.headquarters} • {district.region}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onRemoveBookmark(district)}
                    className="p-2 rounded-lg text-[#2D3238]/40 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onSelectDistrict(district);
                      onClose();
                    }}
                    className="p-2 rounded-lg text-[#C85A32] hover:bg-[#F4EFE6] transition-colors"
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
        <div className="p-4 border-t border-[#EADBCE] bg-[#F4EFE6] text-[11px] text-[#2D3238]/70 text-center">
          Persisted securely in your local browser session.
        </div>
      </div>
    </div>
  );
};
