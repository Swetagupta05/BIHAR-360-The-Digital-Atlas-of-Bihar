import React from 'react';
import { uiTranslations } from '../../data/translations';

export const SymbolsBanner = ({ language = 'en' }) => {
  const t = uiTranslations[language].symbols;

  const symbols = [
    {
      label: t.treeLabel,
      value: t.treeValue,
      icon: '🌳',
    },
    {
      label: t.birdLabel,
      value: t.birdValue,
      icon: '🐦',
    },
    {
      label: t.animalLabel,
      value: t.animalValue,
      icon: '🐂',
    },
    {
      label: t.flowerLabel,
      value: t.flowerValue,
      icon: '🌼',
    },
    {
      label: t.fishLabel,
      value: t.fishValue,
      icon: '🐟',
    },
  ];

  return (
    <section className="bg-[#F4ECE1] dark:bg-[#16191D] border-t border-[#EADBCE] dark:border-[#2E343B] py-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#8B263E] dark:text-[#E892A2] bg-[#8B263E]/10 dark:bg-[#8B263E]/20 px-2.5 py-1 rounded">
              {t.title}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {symbols.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/70 dark:bg-[#1F242A]/80 border border-[#EADBCE] dark:border-[#2E343B] shadow-xs"
              >
                <span className="text-xl" role="img" aria-label={item.label}>
                  {item.icon}
                </span>
                <div>
                  <div className="text-[10px] font-semibold text-[#6F7782] dark:text-[#88929A] uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="text-xs font-serif font-bold text-[#14171A] dark:text-[#F5F1E8]">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
