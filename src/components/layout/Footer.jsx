import React from 'react';
import { uiTranslations } from '../../data/translations';

export const Footer = ({ language = 'en' }) => {
  const t = uiTranslations[language].footer;

  return (
    <footer className="bg-[#14171A] text-[#A2ABB5] border-t border-[#2E343B] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#A54420] text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                B
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-[#F5F1E8]">
                BIHAR 360
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#88929A]">
              {t.brandDesc}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#6F7782]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
              <span>{language === 'hi' ? '३८ जिले • ९ प्रमंडल' : '38 Districts • 9 Administrative Divisions'}</span>
            </div>
          </div>

          {/* 9 Divisions Col */}
          <div>
            <h4 className="font-serif font-bold text-[#F5F1E8] text-sm uppercase tracking-wider mb-4 border-b border-[#2E343B] pb-2">
              {t.divisionsTitle}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#88929A]">
              {t.divisions.map((div, i) => (
                <span key={i} className="hover:text-[#F5F1E8] transition-colors cursor-default">
                  {div}
                </span>
              ))}
            </div>
          </div>

          {/* Cultural Heritage Col */}
          <div>
            <h4 className="font-serif font-bold text-[#F5F1E8] text-sm uppercase tracking-wider mb-4 border-b border-[#2E343B] pb-2">
              {t.traditionsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#88929A]">
              {t.traditions.map((trad, i) => (
                <li key={i} className="flex items-center gap-1.5 hover:text-[#F5F1E8] transition-colors cursor-default">
                  <span className="w-1 h-1 rounded-full bg-[#C85A32]" />
                  <span>{trad}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Canonical Reference & Citation Col */}
          <div>
            <h4 className="font-serif font-bold text-[#F5F1E8] text-sm uppercase tracking-wider mb-4 border-b border-[#2E343B] pb-2">
              {t.referenceTitle}
            </h4>
            <p className="text-xs text-[#88929A] leading-relaxed mb-4">
              {t.referenceDesc}
            </p>
            <div className="p-3 rounded-lg bg-[#1E2328] border border-[#2E343B] text-[11px] text-[#A2ABB5] space-y-1">
              <div className="font-semibold text-[#F5F1E8]">
                {language === 'hi' ? 'सत्यापित डिजिटल आर्काइव' : 'Verified Digital Archive'}
              </div>
              <div>
                {language === 'hi' ? 'एएसआई, जीआई रजिस्ट्री और बिहार गजेटियर' : 'ASI, GI Registry, Bihar State Gazetteers'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2E343B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6F7782] gap-4">
          <div>{t.copyright}</div>
          <div className="flex items-center gap-1">
            <span>{language === 'hi' ? 'बिहार की अमूल्य धरोहर को समर्पित' : 'Dedicated to preserving Bihar’s immortal heritage'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
