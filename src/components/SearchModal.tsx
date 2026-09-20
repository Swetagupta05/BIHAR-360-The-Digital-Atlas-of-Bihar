import React from 'react';
import { ALL_DISTRICTS } from '../data/districts';
import { HERITAGE_SITES } from '../data/heritage';
import { CUISINE_ITEMS } from '../data/cuisine';
import { NOTABLE_PERSONALITIES } from '../data/personalities';
import { ARTS_AND_CRAFTS } from '../data/arts';
import { Search, MapPin, Landmark, Utensils, Users, Palette, X, ArrowRight } from 'lucide-react';
import { District } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDistrict: (district: District) => void;
  onNavigateTab: (tab: string) => void;
  language: 'en' | 'hi';
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDistrict,
  onNavigateTab,
  language
}) => {
  const [query, setQuery] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Search Results
  const matchedDistricts = query.trim()
    ? ALL_DISTRICTS.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.hindiName.includes(query) ||
        d.headquarters.toLowerCase().includes(query.toLowerCase()) ||
        d.famousFor.some(f => f.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 4)
    : [];

  const matchedHeritage = query.trim()
    ? HERITAGE_SITES.filter(h =>
        h.name.toLowerCase().includes(query.toLowerCase()) ||
        h.hindiName.includes(query) ||
        h.location.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3)
    : [];

  const matchedCuisine = query.trim()
    ? CUISINE_ITEMS.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.hindiName.includes(query)
      ).slice(0, 3)
    : [];

  const matchedPersons = query.trim()
    ? NOTABLE_PERSONALITIES.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.hindiName.includes(query)
      ).slice(0, 3)
    : [];

  const totalResults = matchedDistricts.length + matchedHeritage.length + matchedCuisine.length + matchedPersons.length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-20 animate-in fade-in duration-150">
      <div
        className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#EADBCE] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#C85A32] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'hi' ? 'खोजें: नालंदा, लिट्टी चोखा, बुद्ध, मधुबनी, रोहतास...' : 'Search: Nalanda, Litti Chokha, Buddha, Madhubani, Rohtas...'}
            className="w-full text-base bg-transparent text-[#1E2124] focus:outline-none placeholder:text-[#2D3238]/40"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#F4EFE6] text-[#2D3238]/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#2D3238]/60 space-y-2">
              <p>Type anything to search across all 38 districts, heritage monuments, regional cuisine, and personalities.</p>
              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="px-2 py-1 rounded bg-[#EADBCE]/50 text-[#1E2124] text-[11px] font-medium cursor-pointer hover:bg-[#EADBCE]" onClick={() => setQuery('Nalanda')}>Nalanda</span>
                <span className="px-2 py-1 rounded bg-[#EADBCE]/50 text-[#1E2124] text-[11px] font-medium cursor-pointer hover:bg-[#EADBCE]" onClick={() => setQuery('Litti')}>Litti Chokha</span>
                <span className="px-2 py-1 rounded bg-[#EADBCE]/50 text-[#1E2124] text-[11px] font-medium cursor-pointer hover:bg-[#EADBCE]" onClick={() => setQuery('Buddha')}>Buddha</span>
                <span className="px-2 py-1 rounded bg-[#EADBCE]/50 text-[#1E2124] text-[11px] font-medium cursor-pointer hover:bg-[#EADBCE]" onClick={() => setQuery('Mithila')}>Mithila</span>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-xs text-[#2D3238]/60">
              No matching records found for "{query}".
            </div>
          ) : (
            <div className="space-y-4">
              {/* Districts */}
              {matchedDistricts.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/60 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                    Districts ({matchedDistricts.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchedDistricts.map(d => (
                      <button
                        key={d.id}
                        onClick={() => {
                          onSelectDistrict(d);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#F4EFE6] border border-[#EADBCE] text-xs transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <strong className="font-serif text-[#1E2124] block">{d.name} ({d.hindiName})</strong>
                          <span className="text-[#2D3238]/70 text-[11px]">HQ: {d.headquarters} • {d.region} Region</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#C85A32] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Heritage Sites */}
              {matchedHeritage.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/60 mb-2 flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-[#2C5D75]" />
                    Monuments & Heritage ({matchedHeritage.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchedHeritage.map(h => (
                      <button
                        key={h.id}
                        onClick={() => {
                          onNavigateTab('heritage');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#F4EFE6] border border-[#EADBCE] text-xs transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <strong className="font-serif text-[#1E2124] block">{h.name} ({h.hindiName})</strong>
                          <span className="text-[#2D3238]/70 text-[11px]">{h.location} • {h.period}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#2C5D75] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cuisine */}
              {matchedCuisine.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/60 mb-2 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#3E6550]" />
                    Authentic Cuisine ({matchedCuisine.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchedCuisine.map(c => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onNavigateTab('cuisine');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#F4EFE6] border border-[#EADBCE] text-xs transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <strong className="font-serif text-[#1E2124] block">{c.name} ({c.hindiName})</strong>
                          <span className="text-[#2D3238]/70 text-[11px]">{c.category}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#3E6550] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Personalities */}
              {matchedPersons.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#2D3238]/60 mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-700" />
                    Icons & Luminaries ({matchedPersons.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchedPersons.map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onNavigateTab('personalities');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#F4EFE6] border border-[#EADBCE] text-xs transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <strong className="font-serif text-[#1E2124] block">{p.name} ({p.hindiName})</strong>
                          <span className="text-[#2D3238]/70 text-[11px]">{p.field} • {p.era}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
