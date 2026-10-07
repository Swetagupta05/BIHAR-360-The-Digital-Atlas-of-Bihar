import React from 'react';
import { District } from '../../types';
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
  React.useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/50 dark:bg-black/75 backdrop-blur-xs flex justify-end animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="bookmarks-drawer-title"
        className="bg-[#FBF9F5] dark:bg-[#16191D] border-l border-[#EADBCE] dark:border-[#2E343B] w-full max-w-md h-full shadow-2xl flex flex-col justify-between relative text-[#1E2124] dark:text-[#F5F1E8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between bg-white dark:bg-[#1A1D22]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#C85A32] fill-current" />
            <h3 id="bookmarks-drawer-title" className="font-serif font-bold text-lg">
              {language === 'hi' ? 'सहेजे गए ज़िले' : 'Saved Districts'}
            </h3>
            <span className="px-2 py-0.5 rounded-full text-xs bg-[#EADBCE] dark:bg-[#2E343B] text-[#2D3238] dark:text-[#F5F1E8] font-bold">
              {bookmarkedDistricts.length}
            </span>
          </div>
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close saved districts drawer"
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#2D3238]/70 dark:text-[#C8BFB4]/70 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bookmarked List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {bookmarkedDistricts.length === 0 ? (
            <div className="text-center py-16 text-[#2D3238]/60 dark:text-[#C8BFB4]/60 space-y-3">
              <Bookmark className="w-10 h-10 mx-auto text-[#C85A32]/40" />
              <p className="text-sm">
                {language === 'hi'
                  ? 'आपने अभी तक कोई ज़िला सहेज कर नहीं रखा है।'
                  : 'You have not bookmarked any districts yet.'}
              </p>
              <p className="text-xs">
                {language === 'hi'
                  ? 'ज़िला कार्ड पर बुकमार्क आइकन दबाकर अपनी अध्ययन सूची बनाएँ।'
                  : 'Click the bookmark icon on any district card to build your reading list.'}
              </p>
            </div>
          ) : (
            bookmarkedDistricts.map(district => (
              <div 
                key={district.id}
                className="p-3.5 rounded-xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1E2227] hover:shadow-xs transition-shadow flex items-center justify-between gap-3 group"
              >
                <button 
                  type="button"
                  className="flex-1 text-left cursor-pointer min-w-0"
                  onClick={() => {
                    onSelectDistrict(district);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                      {district.name}
                    </h4>
                    <span className="text-xs text-[#C85A32]">
                      ({district.hindiName})
                    </span>
                  </div>
                  <div className="text-[11px] text-[#2D3238]/60 dark:text-[#C8BFB4]/60 flex items-center gap-2 mt-0.5 truncate">
                    <span>{district.region}</span>
                    <span>•</span>
                    <span>HQ: {district.headquarters}</span>
                  </div>
                </button>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => onRemoveBookmark(district)}
                    className="p-2 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
                    title={`Remove ${district.name} from bookmarks`}
                    aria-label={`Remove ${district.name} from bookmarks`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectDistrict(district);
                      onClose();
                    }}
                    className="p-2 text-[#C85A32] hover:bg-[#C85A32]/10 rounded-lg transition-colors cursor-pointer"
                    title={`Open ${district.name} Dossier`}
                    aria-label={`Open ${district.name} Dossier`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#EADBCE] dark:border-[#2E343B] bg-[#F4EFE6] dark:bg-[#1A1D22] text-xs text-[#2D3238]/60 dark:text-[#C8BFB4]/60 text-center">
          Bookmarks are automatically stored in your browser session.
        </div>
      </div>
    </div>
  );
};
