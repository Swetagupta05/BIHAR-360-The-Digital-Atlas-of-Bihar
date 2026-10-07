import React from 'react';
import { ArtCraft } from '../../types';
import { Sparkles, MapPin, Feather, Award, Eye } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface FeatureBhagalpuriSilkProps {
  art: ArtCraft;
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
  onOpenDetails: () => void;
}

export const FeatureBhagalpuriSilk: React.FC<FeatureBhagalpuriSilkProps> = ({
  art,
  language,
  onSelectDistrict,
  onOpenDetails,
}) => {
  return (
    <section className="bg-[#FAF7F2] dark:bg-[#1E2226] border border-[#EADBCE] dark:border-[#33383F] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EADBCE] dark:border-[#33383F]">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/10 dark:bg-amber-900/30 border border-amber-600/30 text-amber-900 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Feather className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'रेशमी नगरी की दो सौ साल पुरानी बुनकरी' : 'Two Centuries of Silk City Heritage'}</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#F3EFEA] tracking-tight">
            {language === 'hi' ? 'भागलपुरी तसर सिल्क बुनकरी' : 'Bhagalpuri Tussar Silk Weaving'}
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-amber-900 dark:text-amber-400">
            {language === 'hi'
              ? 'जंगली अर्जुन-आसन के पेड़ों से करघे तक: प्राकृतिक स्वर्णिम तसर का वैभव'
              : 'The "Queen of Wild Silks"—breathable, porous, and handwoven on pit looms.'}
          </p>

          <p className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80 leading-relaxed">
            {language === 'hi'
              ? 'भागलपुर केवल रेशम का बाजार नहीं है; यह गंगा किनारे बसा वह ऐतिहासिक नगर है जहां चंपानगर और नाथनगर के बुनकर पिछले दो सौ वर्षों से करघों पर जंगली कोसा के धागों को सांस लेती हुई पोशाकों में बदलते हैं। ध्यान रहे कि हर रेशम तसर नहीं होता; असली भागलपुरी तसर अपने खुरदुरे रेशे, प्राकृतिक सुनहरे भूरे रंग और तापमान-अनुकूल बनावट से पहचाना जाता है।'
              : 'Known globally as the "Silk City", Bhagalpur’s heritage rests on authentic wild Tussar (Kosa) sericulture. Spun from wild caterpillars feeding on forest trees in Banka and Bhagalpur, this wild silk is characterized by natural slubs, high porosity, and a golden-honey luster that insulates in winter and cools in summer.'}
          </p>
        </div>

        {/* Geographic & GI Tag Block */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-3 shrink-0">
          <div className="p-3.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs space-y-1 w-full sm:w-auto">
            <div className="text-[10px] font-bold uppercase text-amber-900 dark:text-amber-400 tracking-wider">
              {language === 'hi' ? 'भौगोलिक क्षेत्र' : 'Geographic Hearth'}
            </div>
            <div className="font-serif font-bold text-sm text-[#1E2124] dark:text-white">
              Bhagalpur & Banka (Anga Region)
            </div>
            {onSelectDistrict && (
              <button
                onClick={() => onSelectDistrict('bhagalpur')}
                className="text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1 text-[11px] font-semibold pt-1"
              >
                <MapPin className="w-3 h-3" />
                <span>{language === 'hi' ? 'भागलपुर जिला डोशियर देखें →' : 'Explore Bhagalpur Dossier →'}</span>
              </button>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-xs font-semibold">
            <span>★ GI Application No. 193 Registered</span>
          </div>
        </div>
      </div>

      {/* 2-Column Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#EADBCE] dark:border-[#383D45] aspect-4/3 shadow-sm group">
          <img
            src={VERIFIED_IMAGES.bhagalpuriSilk}
            alt="Authentic Bhagalpuri Tussar silk woven fabric"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
            <span className="font-serif font-bold text-sm block">Authentic Wild Tussar Weave</span>
            <span className="text-amber-200 text-[11px]">Breathable Katia & Ghicha yarns handwoven in Nathnagar.</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1E2124] dark:text-white">
              {language === 'hi'
                ? 'जंगली कोकून से लेकर गड्ढा-करघे (पिट लूम) की खट-खट तक'
                : 'From Wild Forest Cocoons to the Rhythmic Pit Looms'}
            </h4>
            <p>
              Unlike cultivated white mulberry silk, wild Tussar cocoons have tough mineral-encrusted shells. Reeled by hand without chemical bleaching, the yarn preserves its porous internal structure. The weavers seated inside cool earthen pit looms coordinate treadles and fly-shuttles to create Katia, Ghicha, and Matka fabrics prized worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-amber-800 dark:text-amber-400 block font-serif">
                कतीया (Katia):
              </strong>
              <p className="text-[11px] text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                Textured yarn hand-spun from outer cocoon layers, giving a rich rustic linen feel.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-amber-800 dark:text-amber-400 block font-serif">
                घीचा (Ghicha):
              </strong>
              <p className="text-[11px] text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                Slubby, uneven thread pulled by hand, lending extraordinary organic depth to fabrics.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-amber-800 dark:text-amber-400 block font-serif">
                मटका (Matka):
              </strong>
              <p className="text-[11px] text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                Heavy spun wild silk with a supple drape, favored for luxury sherwanis and jackets.
              </p>
            </div>
          </div>

          {/* Living Cooperatives note */}
          <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] flex items-center justify-between gap-4">
            <div className="text-xs">
              <strong className="text-[#1E2124] dark:text-white block font-serif">
                Nathnagar & Champanagar Weavers Cooperatives
              </strong>
              <span className="text-[#2D3238]/70 dark:text-[#EADBCE]/70 text-[11px]">
                Over 25,000 pit looms preserve unbroken ancestral weaving lineages.
              </span>
            </div>
            <button
              onClick={onOpenDetails}
              className="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#C85A32] text-white font-semibold text-xs hover:bg-[#B34D29] transition-all flex items-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'विस्तार से देखें' : 'View Details'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
