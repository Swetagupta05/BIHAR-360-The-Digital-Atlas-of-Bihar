import React, { useState } from 'react';
import { ArtCraft } from '../../types';
import { Sparkles, MapPin, Feather, Award, Eye, Compass, ArrowRight } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface FeatureSikkiProps {
  art: ArtCraft;
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
  onOpenDetails: () => void;
}

export const FeatureSikki: React.FC<FeatureSikkiProps> = ({
  art,
  language,
  onSelectDistrict,
  onOpenDetails,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      stage: 'RAW MATERIAL',
      hindiStage: 'कच्ची सामग्री',
      title: 'Wild River Reed (Chrysopogon zizanioides)',
      hindiTitle: 'सुनहरी जंगली सीकी घास',
      desc: 'Harvested by rural women in autumn from wet river shallows and ponds across Mithila. Naturally pest-resistant and fragrant with a brilliant golden luster.',
      detail: 'Munj grass is harvested alongside to serve as the structural inner core.'
    },
    {
      stage: 'CRAFT PROCESS',
      hindiStage: 'शिल्प प्रक्रिया',
      title: 'Splitting Reeds & The Takua Needle',
      hindiTitle: 'चीराई एवं लोहे का तकवा',
      desc: 'Artisans split each golden reed using their teeth. The Takua (a sharp cold-iron awl without an eye) pierces the tough munj coil; the wet, pliable sikki is wrapped around it, interlocking rows without needles or synthetic glue.',
      detail: 'Reeds are steeped in natural or azo dyes for scarlet, green, and sapphire geometric accents.'
    },
    {
      stage: 'FINISHED OBJECT',
      hindiStage: 'तैयार वस्तु',
      title: 'Ceremonial Pauti, Dauti & Sculptures',
      hindiTitle: 'पौती, दौती एवं जीवंत मूर्तियां',
      desc: 'Lightweight, durable, 100% biodegradable vessels. Traditional lidded boxes (Pauti) held bridal vermillion and betel nuts; open trays (Dauti) hold ritual fruits during Chhath Puja.',
      detail: 'Modern artisans craft contemporary pendant lampshades, coasters, and sculptural animal idols.'
    }
  ];

  return (
    <section className="bg-[#FAF7F2] dark:bg-[#1E2226] border border-[#EADBCE] dark:border-[#33383F] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EADBCE] dark:border-[#33383F]">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/10 dark:bg-amber-900/30 border border-amber-600/30 text-amber-800 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'उत्तर बिहार का सुनहरी घास शिल्प' : 'The Golden Grass Heritage of North Bihar'}</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#F3EFEA] tracking-tight">
            {language === 'hi' ? 'सिक्की घास शिल्प (सुनहरी घास)' : 'Sikki Grass Craft of Bihar'}
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-amber-800 dark:text-amber-400">
            {language === 'hi'
              ? 'दांतों से चीरी गई सुनहरी नदी-घास और लोहे के तकवे से बुनी गई कला'
              : 'Wild golden wetland reeds coiled into sculptured, zero-plastic heirloom vessels.'}
          </p>

          <p className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80 leading-relaxed">
            {language === 'hi'
              ? 'मिथिला के कछार और गंडक-कोसी बेसिन के दलदलों में उगने वाली सीकी घास को सदियों से दुल्हन के दहेज की परीक्षा का प्रतीक माना जाता था। लड़की अपने मायके से जो ‘पौती’ और ‘दौती’ बनाकर लाती थी, उससे उसके धैर्य और शिल्प-कौशल का सम्मान होता था।'
              : 'Growing wild in the waterlogged meadows of North Bihar, Sikki was historically entwined with Mithila weddings. A bride’s creative diligence was celebrated through the intricate lidded containers (Pauti and Dauti) she crafted with her own hands to store bridal vermillion, jewelry, and sacred betel nuts.'}
          </p>
        </div>

        {/* Geographic & GI Tag Block */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-3 shrink-0">
          <div className="p-3.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs space-y-1 w-full sm:w-auto">
            <div className="text-[10px] font-bold uppercase text-amber-800 dark:text-amber-400 tracking-wider">
              {language === 'hi' ? 'भौगोलिक क्षेत्र' : 'Geographic Hearth'}
            </div>
            <div className="font-serif font-bold text-sm text-[#1E2124] dark:text-white">
              Mithila & Tirhut (Madhubani, Darbhanga, Sitamarhi)
            </div>
            {onSelectDistrict && (
              <button
                onClick={() => onSelectDistrict('madhubani')}
                className="text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1 text-[11px] font-semibold pt-1"
              >
                <MapPin className="w-3 h-3" />
                <span>{language === 'hi' ? 'मधुबनी जिला डोशियर देखें →' : 'Explore Madhubani Dossier →'}</span>
              </button>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-xs font-semibold">
            <span>★ GI Application No. 191 Registered</span>
          </div>
        </div>
      </div>

      {/* Visual Sequence: RAW MATERIAL -> CRAFT PROCESS -> FINISHED OBJECT */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#C85A32]" />
            <span>{language === 'hi' ? 'शिल्प का प्रवाह: माटी से निर्मिति तक' : 'Visual Craft Progression'}</span>
          </h4>
          <span className="text-xs text-[#2D3238]/60 dark:text-[#EADBCE]/60">
            {language === 'hi' ? 'चरण चुनें' : 'Select stage to explore'}
          </span>
        </div>

        {/* 3 Step Stepper Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {workflowSteps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                    : 'bg-white dark:bg-[#25292E] text-[#1E2124] dark:text-[#EADBCE] border-[#EADBCE] dark:border-[#383D45] hover:bg-[#F4EFE6]'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isCurrent ? 'text-amber-200' : 'text-[#C85A32]'}`}>
                  {step.stage}
                </div>
                <div className="font-serif font-bold text-sm line-clamp-1">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Detail Box for Selected Step */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#EADBCE] dark:border-[#383D45] aspect-4/3 shadow-sm">
            <img
              src={VERIFIED_IMAGES.sikkiCraft}
              alt="Authentic traditional Sikki grass craft basket"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
              <span className="font-bold block text-sm">Authentic Sikki Coiling</span>
              <span className="text-amber-200 text-[11px]">Natural golden sheen with Takua-interlocked rows.</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
            <div className="inline-block px-3 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-[11px] font-bold uppercase tracking-wider">
              {workflowSteps[activeStep].stage} ({workflowSteps[activeStep].hindiStage})
            </div>

            <h4 className="font-serif font-bold text-xl text-[#1E2124] dark:text-white">
              {workflowSteps[activeStep].title}
            </h4>

            <p className="leading-relaxed">
              {workflowSteps[activeStep].desc}
            </p>

            <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-[#C85A32] block">
                {language === 'hi' ? 'शिल्प का सूक्ष्म रहस्य:' : 'Artisanal Nuance:'}
              </strong>
              <p className="text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                {workflowSteps[activeStep].detail}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-[11px] text-[#2D3238]/70 dark:text-[#EADBCE]/70">
                Bindeshwari Devi (National Award Winner) • 100% Biodegradable Craft
              </div>
              <button
                onClick={onOpenDetails}
                className="px-4 py-2 rounded-xl bg-[#C85A32] text-white font-semibold text-xs hover:bg-[#B34D29] transition-all flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'विस्तृत गाथा पढ़ें' : 'View Full Dossier'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
