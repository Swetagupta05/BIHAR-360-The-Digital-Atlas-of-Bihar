import React from 'react';

export const SectionLoadingState = ({
  message = 'Opening this story…',
  hindiMessage = 'बिहार को लोड किया जा रहा है…'
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[50vh] w-full flex flex-col items-center justify-center p-8 animate-in fade-in duration-200"
    >
      <div className="flex flex-col items-center max-w-sm text-center">
        {/* Minimal terracotta glowing pulse indicator */}
        <div className="relative flex items-center justify-center w-12 h-12 mb-4">
          <div className="absolute w-8 h-8 rounded-full bg-[#C85A32]/20 dark:bg-[#C85A32]/30 animate-ping" />
          <div className="w-4 h-4 rounded-full bg-[#C85A32] shadow-sm" />
        </div>

        {/* Editorial loading text */}
        <p className="font-serif font-medium text-base text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
          {message}
        </p>
        <p className="font-hindi-text text-xs text-[#8C5B3E] dark:text-[#D4A373] mt-1">
          {hindiMessage}
        </p>

        {/* Accessible hidden text */}
        <span className="sr-only">Loading content, please wait.</span>
      </div>
    </div>
  );
};
