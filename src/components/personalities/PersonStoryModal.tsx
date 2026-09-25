import React, { useEffect } from 'react';
import { Personality } from '../../types';
import { X, Quote, MapPin, Calendar, BookOpen, Award, Sparkles, Feather, Clock, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

interface PersonStoryModalProps {
  person: Personality | null;
  onClose: () => void;
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
}

export const PersonStoryModal: React.FC<PersonStoryModalProps> = ({
  person,
  onClose,
  language,
  onSelectDistrict
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (person) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [person, onClose]);

  if (!person) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-personality-name"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] rounded-2xl shadow-2xl overflow-hidden transition-all text-[#1E2124] dark:text-[#F5F1E8]"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-[#2D3238] flex-shrink-0">
          <img
            src={person.image || '/assets/images/patna_golghar_granary_1789937770039.jpg'}
            alt={person.name}
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-[#16191D]/70 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white/90 hover:text-white hover:bg-black/80 transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Identity badges and Title */}
          <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32] text-white text-[10px] font-bold uppercase tracking-wider">
                {person.field}
              </span>
              {person.eraPeriod && (
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-[10px] font-medium">
                  {person.eraPeriod}
                </span>
              )}
              {person.isWomanVoice && (
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/30 text-amber-200 border border-amber-400/30 text-[10px] font-semibold">
                  {language === 'hi' ? 'नारी शक्ति एवं विद्वत्ता' : 'Women’s Voices of Bihar'}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <h2 id="modal-personality-name" className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {person.name}
              </h2>
              {person.hindiName && (
                <span className="text-sm sm:text-base font-serif text-[#EADBCE]/90 font-medium">
                  {person.hindiName}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#C8BFB4] font-medium">
              {person.title} {person.era && `• ${person.era}`}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto">
          {/* Quote if available */}
          {person.quotes && person.quotes.length > 0 && (
            <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#1E2227] border-l-4 border-[#C85A32] dark:border-[#E06C43] text-sm italic text-[#2D3238] dark:text-[#E2D9CE] flex items-start gap-3 shadow-xs">
              <Quote className="w-5 h-5 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0 mt-0.5" />
              <div>
                <p className="leading-relaxed">"{person.quotes[0]}"</p>
                {person.quotes[1] && (
                  <p className="mt-2 pt-2 border-t border-[#EADBCE] dark:border-[#2E343B] text-xs">
                    "{person.quotes[1]}"
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Biography Narrative */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
              {language === 'hi' ? 'जीवन वृत्त एवं भूमिका' : 'Story & Legacy'}
            </h3>
            <p className="text-sm leading-relaxed text-[#2D3238] dark:text-[#C8BFB4]">
              {person.biography}
            </p>
          </div>

          {/* Key Achievements / Milestones */}
          {person.majorAchievements && person.majorAchievements.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                {language === 'hi' ? 'प्रमुख उपलब्धियां एवं योगदान' : 'Key Milestones & Contributions'}
              </h3>
              <ul className="space-y-2">
                {person.majorAchievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D3238] dark:text-[#C8BFB4]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C85A32] dark:bg-[#E06C43] mt-1.5 flex-shrink-0" />
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Works / Creations */}
          {person.keyWorks && person.keyWorks.length > 0 && (
            <div className="space-y-2 pt-2">
              <h3 className="font-serif font-bold text-sm text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                {language === 'hi' ? 'प्रमुख कृतियां / ऐतिहासिक कार्य' : 'Key Works & Enduring Creations'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {person.keyWorks.map((work, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#2D3238] dark:text-[#C8BFB4]"
                  >
                    {work}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Dual Column: Historical Connection & Linguistic Tradition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {person.historicalConnection && (
              <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#C85A32] dark:text-[#E06C43]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{person.historicalConnection.event}</span>
                </div>
                <div className="text-[11px] font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
                  Period: {person.historicalConnection.period}
                </div>
                <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                  {person.historicalConnection.significance}
                </p>
              </div>
            )}

            {person.languageAssociation && (
              <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#C85A32] dark:text-[#E06C43]">
                  <Feather className="w-3.5 h-3.5" />
                  <span>Language: {person.languageAssociation.language}</span>
                </div>
                <div className="text-[11px] font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
                  Tradition: {person.languageAssociation.keyWorkOrTradition}
                </div>
                <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed">
                  {person.languageAssociation.contribution}
                </p>
              </div>
            )}
          </div>

          {/* Authoritative Historical & Institutional Sources */}
          {person.sources && person.sources.length > 0 && (
            <div className="p-3.5 rounded-xl bg-[#F4EFE6]/60 dark:bg-[#1A1D22]/60 border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8C8276] dark:text-[#948B80]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                <span>{language === 'hi' ? 'प्रमाणित ऐतिहासिक एवं संस्थागत स्रोत' : 'Authoritative & Institutional Sources'}</span>
              </div>
              <ul className="space-y-1">
                {person.sources.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#2D3238]/80 dark:text-[#C8BFB4]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]/60 dark:bg-[#E06C43]/60 mt-1.5 flex-shrink-0" />
                    <span>{src}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* People ↔ Place Relationship & Dossier Link */}
          {person.districtOrigin && (
            <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E2124] dark:text-[#F5F1E8]">
                  <MapPin className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
                  <span>Associated District: <span className="capitalize">{person.districtOrigin.replace('-', ' ')}</span></span>
                </div>
                {person.whyPlaceMatters && (
                  <p className="text-xs text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed max-w-xl">
                    {person.whyPlaceMatters}
                  </p>
                )}
              </div>

              {onSelectDistrict && (
                <button
                  onClick={() => {
                    onClose();
                    onSelectDistrict(person.districtOrigin!);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C85A32] hover:bg-[#B04A25] text-white text-xs font-semibold tracking-wide transition-colors whitespace-nowrap shadow-xs"
                >
                  <span>Explore District Dossier</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#EADBCE] dark:border-[#2E343B] bg-[#F4EFE6]/70 dark:bg-[#1A1D22] flex items-center justify-between text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70">
          <span>Bihar 360 • Editorial Heritage Archive</span>
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
