import React, { useRef, useEffect } from 'react';
import { ArrowUp, X, Sparkles } from 'lucide-react';

interface BiharGuideInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (query: string) => void;
  onClear: () => void;
  isLoading: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}

export const BiharGuideInput: React.FC<BiharGuideInputProps> = ({
  value,
  onChange,
  onSubmit,
  onClear,
  isLoading,
  placeholder = 'Ask about Bihar — a place, person, food, story...',
  autoFocus = true
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  // Autosize textarea up to a reasonable max height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isLoading) {
        onSubmit(value.trim());
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isLoading) {
      onSubmit(value.trim());
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="relative flex items-end gap-2 p-2 rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1A1D22] shadow-xs focus-within:border-[#C85A32] focus-within:ring-2 focus-within:ring-[#C85A32]/20 transition-all"
    >
      <div className="flex-1 flex items-center min-h-[40px] pl-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          placeholder={placeholder}
          aria-label="Ask the AI Bihar Guide"
          className="w-full resize-none bg-transparent text-xs sm:text-sm text-[#14171A] dark:text-[#F5F1E8] placeholder-[#71767C] dark:placeholder-[#948B80] focus:outline-none py-1.5 leading-relaxed max-h-[120px] overflow-y-auto"
        />
      </div>

      <div className="flex items-center gap-1 shrink-0 pb-0.5">
        {value.trim() && !isLoading && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear input text"
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#71767C] hover:text-[#14171A] dark:text-[#948B80] dark:hover:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#252A30] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          type="submit"
          disabled={!value.trim() || isLoading}
          aria-label="Send question"
          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
            value.trim() && !isLoading
              ? 'bg-[#C85A32] text-white hover:bg-[#A54420] shadow-2xs hover:scale-105 cursor-pointer'
              : 'bg-[#EADBCE]/50 dark:bg-[#2E343B] text-[#A7A196] dark:text-[#6E7784] cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <Sparkles className="w-4 h-4 animate-spin text-[#C85A32]" />
          ) : (
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          )}
        </button>
      </div>
    </form>
  );
};
