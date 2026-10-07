import React, { useState } from 'react';
import { BIHAR_LANDSCAPE_SYSTEMS } from '../../data/places';
import { Waves, Mountain, Sprout, Home, Trees, Droplets, Landmark, ArrowRight, Compass } from 'lucide-react';

interface LandscapeSystemFlowProps {
  language: 'en' | 'hi';
}

const STEP_ICONS = [Waves, Mountain, Sprout, Home, Trees, Droplets, Landmark];

export const LandscapeSystemFlow: React.FC<LandscapeSystemFlowProps> = ({ language }) => {
  const [activeStepId, setActiveStepId] = useState<string>('rivers');

  const activeStep = BIHAR_LANDSCAPE_SYSTEMS.find(s => s.id === activeStepId) || BIHAR_LANDSCAPE_SYSTEMS[0];
  const ActiveIcon = STEP_ICONS[activeStep.stepNumber - 1] || Waves;

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'भौगोलिक व्यवस्था' : 'Geographic Storytelling'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi' ? 'एक परिदृश्य के रूप में बिहार' : 'Bihar as a Living Landscape'}
          </h2>
        </div>
        <p className="text-xs text-[#2D3238]/70 dark:text-[#C8BFB4]/70 max-w-sm sm:text-right">
          How geography shaped life: from silt-bearing rivers and alluvial soils to settlements, forests, and imperial capitals.
        </p>
      </div>

      {/* Visual Relationship Pipeline Navigation */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
          {BIHAR_LANDSCAPE_SYSTEMS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];
            const isSelected = activeStepId === step.id;

            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStepId(step.id)}
                  className={`flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all border ${
                    isSelected
                      ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm scale-102'
                      : 'bg-[#FBF9F5] dark:bg-[#16191D] hover:bg-[#F4EFE6] dark:hover:bg-[#1E2227] text-[#2D3238] dark:text-[#C8BFB4] border-[#EADBCE] dark:border-[#2E343B]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#C85A32] dark:text-[#E06C43]'}`} />
                  <span>{step.title.split(' ')[0]}</span>
                </button>
                {idx < BIHAR_LANDSCAPE_SYSTEMS.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-[#8C8276]/50 dark:text-[#948B80]/50 hidden lg:block" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Landscape Step Curatorial Display */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-5 transition-all shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EADBCE] dark:border-[#2E343B] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C85A32]/10 dark:bg-[#C85A32]/20 flex items-center justify-center text-[#C85A32] dark:text-[#E06C43]">
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43]">
                Phase {activeStep.stepNumber} of 7 • Ecological Continuum
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                {language === 'hi' ? activeStep.hindiTitle : activeStep.title}
              </h3>
            </div>
          </div>

          <span className="text-xs font-serif italic text-[#2D3238]/70 dark:text-[#C8BFB4]/70">
            "{activeStep.tagline}"
          </span>
        </div>

        {/* Narrative & Insights */}
        <p className="text-sm sm:text-base leading-relaxed text-[#2D3238] dark:text-[#C8BFB4] font-serif">
          {activeStep.narrative}
        </p>

        {/* Key Landscape Features & Districts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Key Geographic Elements */}
          <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] block">
              Key Geographic Features
            </span>
            <ul className="space-y-1.5 text-xs text-[#2D3238] dark:text-[#C8BFB4]">
              {activeStep.keyElements.map((el, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] dark:bg-[#E06C43]" />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* District Manifestations */}
          <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] block">
              Prominent District Manifestations
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {activeStep.districtExamples.map((dist, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-xl bg-white dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                >
                  {dist}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
