import React from 'react';
import { Layers, Calendar, Clock, ChevronRight } from 'lucide-react';
import { HistoricalEra } from '../../types';

interface EraNavigatorProps {
  eras: HistoricalEra[];
  selectedEraId: string | null;
  onSelectEra: (eraId: string) => void;
  language: 'en' | 'hi';
}

export const EraNavigator: React.FC<EraNavigatorProps> = ({
  eras,
  selectedEraId,
  onSelectEra,
  language
}) => {
  return (
    <div id="eras-navigator-section" className="sticky top-16 sm:top-18 z-30 bg-[#FBF9F5]/95 dark:bg-[#0F1113]/95 backdrop-blur-md py-3 sm:py-4 border-y border-[#EADBCE] dark:border-[#2E343B] mb-8 sm:mb-12 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 mb-2.5 sm:mb-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-[#1E2124] dark:text-[#F5F1E8] min-w-0">
            <Layers className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
            <span className="truncate">{language === 'hi' ? 'ऐतिहासिक युगों की यात्रा' : 'Chronological Era Navigator'}</span>
            <span className="text-[10px] font-mono text-[#8C8276] dark:text-[#A89F93] flex-shrink-0">
              ({eras.length} Eras)
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs flex-shrink-0">
            <button
              type="button"
              onClick={() => onSelectEra('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedEraId === 'all' || !selectedEraId
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-white dark:bg-[#1E2227] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] hover:bg-[#F5EFE6]'
              }`}
            >
              {language === 'hi' ? 'सभी युग' : 'All Eras'}
            </button>
          </div>
        </div>

        {/* Scrollable Pills Carousel */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {eras.map(era => {
            const isSelected = selectedEraId === era.id;
            return (
              <button
                key={era.id}
                onClick={() => onSelectEra(era.id)}
                className={`px-4 py-2 rounded-2xl text-left transition-all shrink-0 border flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#C85A32] bg-[#FBF9F5] dark:bg-[#1E2227] shadow-sm ring-1 ring-[#C85A32]'
                    : 'border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] hover:bg-[#F5EFE6] dark:hover:bg-[#1E2227]'
                }`}
              >
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-[#C85A32] dark:text-[#E06C43]">
                  <Clock className="w-3 h-3" />
                  <span>{era.period}</span>
                </div>
                <div className="text-xs font-serif font-bold text-[#1E2124] dark:text-[#F5F1E8] whitespace-nowrap mt-0.5">
                  {language === 'hi' ? era.hindiTitle : era.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
