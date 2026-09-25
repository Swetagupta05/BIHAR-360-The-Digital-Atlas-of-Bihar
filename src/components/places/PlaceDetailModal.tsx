import React, { useEffect } from 'react';
import { LandscapePlace } from '../../types';
import { NOTABLE_PERSONALITIES } from '../../data/personalities';
import { X, MapPin, Compass, Sparkles, BookOpen, Trees, Bird, Eye, ExternalLink, ShieldCheck, User } from 'lucide-react';

interface PlaceDetailModalProps {
  place: LandscapePlace | null;
  onClose: () => void;
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
  onSelectPerson?: (personId: string) => void;
}

export const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({
  place,
  onClose,
  language,
  onSelectDistrict,
  onSelectPerson
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (place) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [place, onClose]);

  if (!place) return null;

  // Resolve associated personalities if present
  const associatedPeople = (place.associatedPeopleIds || [])
    .map(id => NOTABLE_PERSONALITIES.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="place-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-3xl shadow-2xl overflow-hidden transition-all text-[#1E2124] dark:text-[#F5F1E8]"
        onClick={e => e.stopPropagation()}
      >
        {/* Large Visual Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#2D3238] flex-shrink-0">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-[#16191D]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white/90 hover:text-white hover:bg-black/90 transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Place Identity Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              {place.category}
            </span>
            {place.conservationStatus && (
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#EADBCE] text-xs font-medium border border-white/20">
                {place.conservationStatus.split('•')[0]}
              </span>
            )}
            {place.sacredTradition && (
              <span className="px-3 py-1 rounded-full bg-amber-500/30 text-amber-200 border border-amber-400/30 text-xs font-semibold">
                {place.sacredTradition} Tradition
              </span>
            )}
          </div>

          {/* Place Title & District overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5 text-white">
            <div className="flex items-center gap-2 text-xs text-[#EADBCE] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{place.districtName} District, Bihar</span>
              <span>•</span>
              <span>{place.coordinates.lat.toFixed(4)}° N, {place.coordinates.lng.toFixed(4)}° E</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <h2 id="place-modal-title" className="font-serif font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                {place.name}
              </h2>
              {place.hindiName && (
                <span className="text-base sm:text-lg font-serif text-[#EADBCE]/90 font-medium">
                  {place.hindiName}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#C8BFB4] font-medium max-w-2xl">
              {place.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Editorial Content */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto">
          {/* Introductory Overview */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base leading-relaxed text-[#2D3238] dark:text-[#E2D9CE] font-serif">
              {place.intro}
            </p>
          </div>

          {/* Landscape & Ecological Context */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
              <Compass className="w-4 h-4" />
              <span>{language === 'hi' ? 'भौगोलिक एवं पारिस्थितिक चरित्र' : 'Landscape & Terrain Character'}</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
              {place.landscapeType}
            </div>
            <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
              {place.whyItMatters}
            </p>
          </div>

          {/* Historical Narrative (If applicable) */}
          {place.historyNarrative && (
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                {language === 'hi' ? 'इतिहास के पन्नों में' : 'What Happened Here'}
              </h3>
              <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                {place.historyNarrative}
              </p>
            </div>
          )}

          {/* Wildlife & Biodiversity (If applicable) */}
          {place.wildlifeAndEcology && (
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                <Bird className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                {language === 'hi' ? 'वन्यजीव एवं जैव विविधता' : 'Wildlife & Ecological Highlights'}
              </h3>
              <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                {place.wildlifeAndEcology}
              </p>
            </div>
          )}

          {/* Culture & Traditions (If applicable) */}
          {place.cultureAndTraditions && (
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                {language === 'hi' ? 'सांस्कृतिक एवं जीवंत परंपराएं' : 'Living Culture & Rituals'}
              </h3>
              <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                {place.cultureAndTraditions}
              </p>
            </div>
          )}

          {/* Things to See in this Landscape */}
          {place.thingsToSee && place.thingsToSee.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                {language === 'hi' ? 'स्थान पर क्या देखें' : 'Things to Experience'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2D3238] dark:text-[#C8BFB4]">
                {place.thingsToSee.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#F4EFE6] dark:bg-[#1E2227] p-2.5 rounded-xl border border-[#EADBCE] dark:border-[#2E343B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Associated People from Step 8 (People ↔ Places) */}
          {associatedPeople.length > 0 && (
            <div className="space-y-2 pt-1">
              <h3 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                <User className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                {language === 'hi' ? 'संबद्ध ऐतिहासिक व्यक्तित्व' : 'People Behind This Landscape'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {associatedPeople.map(person => (
                  <div
                    key={person!.id}
                    onClick={() => {
                      if (onSelectPerson) {
                        onClose();
                        onSelectPerson(person!.id);
                      }
                    }}
                    className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] flex items-center justify-between cursor-pointer hover:border-[#C85A32]/50 transition-colors"
                  >
                    <div>
                      <div className="font-serif font-bold text-xs text-[#1E2124] dark:text-[#F5F1E8]">
                        {person!.name}
                      </div>
                      <div className="text-[11px] text-[#C85A32] dark:text-[#E06C43] font-medium">
                        {person!.hindiName} • {person!.field}
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#C85A32] dark:text-[#E06C43]">
                      View Profile →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Place ↔ District Connection */}
          <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E2124] dark:text-[#F5F1E8]">
                <MapPin className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                <span>District Connection: <strong className="capitalize">{place.districtName}</strong></span>
              </div>
              <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4]">
                Explore demographics, administrative divisions, crafts, cuisine, and all places within {place.districtName} district.
              </p>
            </div>

            {onSelectDistrict && (
              <button
                onClick={() => {
                  onClose();
                  onSelectDistrict(place.districtId);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C85A32] hover:bg-[#B04A25] text-white text-xs font-semibold tracking-wide transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Explore {place.districtName} Dossier</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sources Attribution */}
          {place.sources && place.sources.length > 0 && (
            <div className="p-3.5 rounded-xl bg-[#F4EFE6]/60 dark:bg-[#1A1D22]/60 border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#948B80]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                <span>{language === 'hi' ? 'प्रमाणित स्रोत एवं अभिलेख' : 'Authoritative & Institutional Sources'}</span>
              </div>
              <ul className="space-y-1">
                {place.sources.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#2D3238]/80 dark:text-[#C8BFB4]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]/60 dark:bg-[#E06C43]/60 mt-1.5 flex-shrink-0" />
                    <span>{src}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#EADBCE] dark:border-[#2E343B] bg-[#F4EFE6]/70 dark:bg-[#1A1D22] flex items-center justify-between text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70">
          <span>BIHAR 360 • Landscapes & Natural Heritage</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white dark:bg-[#252A30] hover:bg-[#FBF9F5] dark:hover:bg-[#2C323A] border border-[#EADBCE] dark:border-[#2E343B] text-[#1E2124] dark:text-[#F5F1E8] font-medium transition-colors"
          >
            {language === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
