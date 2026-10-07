import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  X,
  RotateCcw,
  Compass,
  ArrowLeft,
  ShieldCheck,
  Landmark,
  MessageSquare
} from 'lucide-react';
import { askBiharGuide } from '../../ai/service';
import { GroundingSource, SuggestedExploration } from '../../ai/types';
import { BiharGuideInput } from './BiharGuideInput';
import { BiharGuideMessage, GuideMessageData } from './BiharGuideMessage';
import { BiharGuideEmptyState } from './BiharGuideEmptyState';

export interface BiharGuideProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDistrictById: (districtId: string) => void;
  onNavigateTab: (tab: string) => void;
  initialQuery?: string;
  openerElement?: HTMLElement | null;
}

export const BiharGuide: React.FC<BiharGuideProps> = ({
  isOpen,
  onClose,
  onSelectDistrictById,
  onNavigateTab,
  initialQuery,
  openerElement
}) => {
  const [messages, setMessages] = useState<GuideMessageData[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastQuery, setLastQuery] = useState<string>('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus management: restore focus to the opener element on close
  useEffect(() => {
    return () => {
      if (openerElement && typeof openerElement.focus === 'function') {
        openerElement.focus();
      }
    };
  }, [openerElement]);

  // Handle initial query if passed
  useEffect(() => {
    if (isOpen && initialQuery && initialQuery.trim()) {
      handleSendQuery(initialQuery.trim());
    }
  }, [isOpen, initialQuery]);

  // Auto-scroll to bottom of conversation
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Primary Query Dispatcher
  const handleSendQuery = async (queryText: string) => {
    if (!queryText.trim() || isLoading) return;

    const userMessageId = `user-${Date.now()}`;
    const userMsg: GuideMessageData = {
      id: userMessageId,
      role: 'user',
      content: queryText.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setLastQuery(queryText.trim());
    setIsLoading(true);

    try {
      // Direct call to deterministic grounded service
      const response = await askBiharGuide(queryText.trim());

      const assistantMsg: GuideMessageData = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.answer,
        citations: response.citations,
        suggestedExplorations: response.suggestedExplorations,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch {
      const errorMsg: GuideMessageData = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content:
          "Something interrupted this story. We couldn't retrieve the verified facts from the atlas at this moment.",
        isError: true,
        onRetry: () => handleSendQuery(queryText.trim()),
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear conversation state
  const handleClear = () => {
    setMessages([]);
    setInputText('');
    setLastQuery('');
  };

  // Re-run last query
  const handleRetryLast = () => {
    if (lastQuery) {
      handleSendQuery(lastQuery);
    }
  };

  // Reusable Explore Router: maps entity type or target to Bihar 360 view
  const handleExploreSource = (source: GroundingSource) => {
    // If it points directly to a district
    if (source.type === 'district' && source.entityId) {
      onSelectDistrictById(source.entityId);
      onClose();
      return;
    }

    if (source.district) {
      onSelectDistrictById(source.district);
      onClose();
      return;
    }

    // Direct tab routing with fallback
    const targetTab = source.tab || 'home';
    onNavigateTab(targetTab);
    onClose();
  };

  const handleExploreSuggestion = (exp: SuggestedExploration) => {
    if (exp.districtId) {
      onSelectDistrictById(exp.districtId);
      onClose();
      return;
    }

    if (exp.tab) {
      onNavigateTab(exp.tab);
      onClose();
      return;
    }

    if (exp.category === 'district' && exp.targetId) {
      onSelectDistrictById(exp.targetId);
      onClose();
      return;
    }

    onNavigateTab('home');
    onClose();
  };

  // Lock background scroll while guide modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
    >
      {/* Modal Shell */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col w-full h-dvh sm:h-[90vh] sm:max-h-[850px] sm:max-w-3xl sm:rounded-3xl bg-[#FBF9F5] dark:bg-[#121518] border-0 sm:border border-[#EADBCE] dark:border-[#2E343B] shadow-2xl overflow-hidden"
      >
        {/* Header Bar */}
        <header className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-[#EADBCE] dark:border-[#262B32] bg-white/90 dark:bg-[#181C20]/90 backdrop-blur-xs shrink-0 z-10 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#A54420] text-white flex items-center justify-center font-serif font-bold text-sm shadow-2xs flex-shrink-0">
              B
            </div>
            <div className="min-w-0">
              <h1
                id="guide-modal-title"
                className="font-serif font-bold text-sm sm:text-base text-[#14171A] dark:text-[#F5F1E8] flex items-center gap-2"
              >
                <span className="truncate">Ask Bihar</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-sans font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                  Grounded Atlas
                </span>
              </h1>
              <p className="text-[11px] text-[#71767C] dark:text-[#948B80] leading-tight mt-0.5 truncate">
                Explore Bihar through its stories, places, traditions, and people
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
            {messages.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                title="Clear conversation"
                aria-label="Clear conversation history"
                className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl text-[#71767C] hover:text-[#14171A] dark:text-[#948B80] dark:hover:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#20252B] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              title="Close Guide (Esc)"
              aria-label="Close Ask Bihar Guide"
              className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl text-[#71767C] hover:text-[#14171A] dark:text-[#948B80] dark:hover:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#20252B] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Conversation Stream */}
        <div
          className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 scrollbar-thin space-y-2"
          tabIndex={0}
          aria-live="polite"
        >
          {messages.length === 0 ? (
            <BiharGuideEmptyState
              onSelectSuggestion={handleSendQuery}
              disabled={isLoading}
            />
          ) : (
            <div className="space-y-4">
              {messages.map(msg => (
                <BiharGuideMessage
                  key={msg.id}
                  message={msg}
                  onExploreSource={handleExploreSource}
                  onExploreSuggestion={handleExploreSuggestion}
                />
              ))}

              {/* Editorial Loading State */}
              {isLoading && (
                <div
                  role="status"
                  aria-label="Exploring Bihar 360"
                  className="flex items-center gap-3 p-4 rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-white/70 dark:bg-[#181C20]/70 text-[#C85A32] dark:text-[#E06C43] animate-pulse"
                >
                  <Sparkles className="w-4 h-4 animate-spin text-[#C85A32]" />
                  <div className="text-xs sm:text-sm font-medium font-serif italic text-[#8C5B3E] dark:text-[#D4A373]">
                    Finding the threads in Bihar 360…
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Dock */}
        <footer className="p-3 sm:p-4 border-t border-[#EADBCE] dark:border-[#262B32] bg-white/95 dark:bg-[#181C20]/95 backdrop-blur-xs shrink-0">
          <BiharGuideInput
            value={inputText}
            onChange={setInputText}
            onSubmit={handleSendQuery}
            onClear={() => setInputText('')}
            isLoading={isLoading}
            placeholder="Ask about Bihar — a place, person, food, story..."
            autoFocus={true}
          />
          <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-[#71767C] dark:text-[#948B80]">
            <span>Press Enter to ask • Shift+Enter for new line</span>
            <span className="font-mono">Bihar 360 Knowledge Atlas</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
