import React from 'react';
import { Compass, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface ClosingCtaSectionProps {
  onStartExploring: () => void;
  onOpenQuiz: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaSectionProps> = ({
  onStartExploring,
  onOpenQuiz
}) => {
  return (
    <section className="py-24 sm:py-32 bg-[#14171A] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#C85A32]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E0BA6A] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Living Memory of Civilizations</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
          Bihar is not a place on a map. <br className="hidden sm:inline" />
          <span className="text-[#E0BA6A] font-hindi-title font-normal block sm:inline mt-2 sm:mt-0">
            यह एक जीवित अनुभव है।
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-[#EADBCE]/85 font-light leading-relaxed">
          Embark on a digital pilgrimage across ancient republics, monastic universities, sacred rivers, vibrant courtyards, and thirty-eight living identities.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartExploring}
            id="closing-cta-explore-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C85A32] hover:bg-[#A54420] text-white font-medium text-sm transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group"
          >
            <Compass className="w-4 h-4 text-[#E0BA6A]" />
            <span>Begin District Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenQuiz}
            id="closing-cta-quiz-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-[#E0BA6A]" />
            <span>Test Your Bihar Knowledge</span>
          </button>
        </div>
      </div>
    </section>
  );
};
