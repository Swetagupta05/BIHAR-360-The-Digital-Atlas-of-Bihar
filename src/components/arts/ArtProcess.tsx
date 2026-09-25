import React, { useState } from 'react';
import { ArtCraft } from '../../types';
import { Palette, Compass, ArrowRight, ArrowLeft, Check, Sparkles, Wrench } from 'lucide-react';

interface ArtProcessProps {
  arts: ArtCraft[];
  language: 'en' | 'hi';
}

export const ArtProcess: React.FC<ArtProcessProps> = ({ arts, language }) => {
  // Only arts with documented process steps
  const documentedArts = arts.filter(
    (a) => a.processSteps && a.processSteps.length > 0
  );

  const [selectedArtId, setSelectedArtId] = useState<string>(
    documentedArts[0]?.id || 'madhubani-painting'
  );
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const currentArt =
    documentedArts.find((a) => a.id === selectedArtId) || documentedArts[0];
  const steps = currentArt?.processSteps || [];
  const currentStep = steps[activeStepIdx] || steps[0];

  const handleSelectArt = (id: string) => {
    setSelectedArtId(id);
    setActiveStepIdx(0);
  };

  return (
    <section id="process-storytelling" className="space-y-6 pt-4">
      {/* Editorial Section Header */}
      <div className="border-b border-[#EADBCE] dark:border-[#383D45] pb-4">
        <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-1">
          <Wrench className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'निर्माण प्रक्रिया एवं शिल्प विज्ञान' : 'Documented Craft Methodology'}</span>
        </div>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F3EFEA]">
          {language === 'hi' ? 'कला कैसे बनती है: माटी से कृति तक' : 'How Art Is Made: The Hands Behind the Craft'}
        </h2>
        <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70 mt-1 max-w-2xl">
          {language === 'hi'
            ? 'केवल तैयार कलाकृति ही नहीं, बल्कि कच्ची सामग्री, परंपरागत औजार, हाथ की गति और सदियों पुरानी तकनीकों का चरणबद्ध अध्ययन।'
            : 'Explore the verified step-by-step transformation: from raw wetland reeds, silkworm cocoons, and plant pigments to the finished heritage masterpiece.'}
        </p>
      </div>

      {/* Art Selector Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        {documentedArts.map((art) => {
          const isSelected = art.id === selectedArtId;
          return (
            <button
              key={art.id}
              onClick={() => handleSelectArt(art.id)}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap font-medium transition-all ${
                isSelected
                  ? 'bg-[#C85A32] text-white shadow-xs font-semibold'
                  : 'bg-[#FBF9F5] dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] border border-[#EADBCE] dark:border-[#383D45] hover:bg-[#F4EFE6]'
              }`}
            >
              <span>{art.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Process Stepper Card */}
      {currentArt && steps.length > 0 && (
        <div className="bg-[#FAF7F2] dark:bg-[#202428] rounded-3xl border border-[#EADBCE] dark:border-[#33383F] p-6 sm:p-10 shadow-sm space-y-8">
          {/* Header of Active Art */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EADBCE] dark:border-[#33383F]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32]">
                {currentArt.category} • {currentArt.originRegion}
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-white mt-0.5">
                {currentArt.name} ({currentArt.hindiName})
              </h3>
            </div>

            <div className="text-xs text-[#2D3238]/70 dark:text-[#EADBCE]/70">
              {language === 'hi'
                ? `चरण ${activeStepIdx + 1} / ${steps.length}`
                : `Step ${activeStepIdx + 1} of ${steps.length}`}
            </div>
          </div>

          {/* Stepper Progression Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {steps.map((st, idx) => {
              const isCurrent = activeStepIdx === idx;
              const isPast = activeStepIdx > idx;

              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    isCurrent
                      ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                      : isPast
                      ? 'bg-amber-50 dark:bg-amber-950/20 text-[#1E2124] dark:text-[#EADBCE] border-amber-200 dark:border-amber-900/40'
                      : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] border-[#EADBCE] dark:border-[#383D45]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isCurrent ? 'text-amber-100' : 'text-[#C85A32]'}`}>
                      {st.phase}
                    </span>
                    {isPast && <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />}
                  </div>
                  <div className="text-xs font-serif font-bold line-clamp-1">
                    {st.step}. {st.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Detail Presentation */}
          <div className="bg-white dark:bg-[#25292E] rounded-2xl border border-[#EADBCE] dark:border-[#383D45] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-bold uppercase tracking-wider">
                  Phase {currentStep.step}: {currentStep.phase}
                </span>
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-white pt-1">
                  {currentStep.title}
                </h4>
                {currentStep.hindiTitle && (
                  <p className="font-serif italic text-sm text-[#C85A32]">
                    {currentStep.hindiTitle}
                  </p>
                )}
              </div>
            </div>

            {/* Step Description */}
            <p className="text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
              {currentStep.description}
            </p>

            {/* Tool / Material Note */}
            {currentStep.toolOrMaterial && (
              <div className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#1E2226] border border-[#EADBCE] dark:border-[#33383F] flex items-start gap-3 text-xs">
                <Wrench className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1E2124] dark:text-white block font-serif">
                    {language === 'hi' ? 'प्रयुक्त औजार एवं सामग्री:' : 'Tool or Material in Use:'}
                  </strong>
                  <span className="text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                    {currentStep.toolOrMaterial}
                  </span>
                </div>
              </div>
            )}

            {/* Step Stepper Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#EADBCE]/60 dark:border-[#33383F]">
              <button
                disabled={activeStepIdx === 0}
                onClick={() => setActiveStepIdx((prev) => Math.max(0, prev - 1))}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeStepIdx === 0
                    ? 'opacity-40 cursor-not-allowed bg-transparent text-[#2D3238]/40 dark:text-[#EADBCE]/40'
                    : 'bg-[#F4EFE6] dark:bg-[#33383F] text-[#2D3238] dark:text-white hover:bg-[#EADBCE]'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'पिछला चरण' : 'Previous Step'}</span>
              </button>

              <div className="text-xs text-[#2D3238]/60 dark:text-[#EADBCE]/60">
                {activeStepIdx + 1} / {steps.length}
              </div>

              <button
                disabled={activeStepIdx === steps.length - 1}
                onClick={() => setActiveStepIdx((prev) => Math.min(steps.length - 1, prev + 1))}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeStepIdx === steps.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-transparent text-[#2D3238]/40 dark:text-[#EADBCE]/40'
                    : 'bg-[#C85A32] text-white hover:bg-[#B34D29] shadow-xs'
                }`}
              >
                <span>{language === 'hi' ? 'अगला चरण' : 'Next Step'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
