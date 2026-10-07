import React, { useState } from 'react';
import { MapPin, Globe, Compass, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { LanguageProfile, Region } from '../../types';

interface LanguageRegionSectionProps {
  languages: LanguageProfile[];
  language: 'en' | 'hi';
  onSelectLanguage: (lang: LanguageProfile) => void;
  onSelectDistrictById?: (id: string) => void;
}

interface RegionInfo {
  id: Region;
  name: string;
  hindiName: string;
  linguisticContext: string;
  hindiLinguisticContext: string;
  documentedVarieties: string[];
}

const REGION_DATA: RegionInfo[] = [
  {
    id: 'Mithila',
    name: 'Mithila',
    hindiName: 'मिथिला',
    linguisticContext:
      'Heartland of classical and folk Maithili literature, historically written in Tirhuta / Mithilakshar script. Contemporary public life also uses Standard Hindi and Urdu.',
    hindiLinguisticContext:
      'शास्त्रीय एवं लोक मैथिली का ऐतिहासिक केंद्र, पारंपरिक रूप से तिरहुता लिपि में रचित। वर्तमान में मानक हिंदी और उर्दू भी व्यापक रूप से प्रयुक्त।',
    documentedVarieties: ['Maithili', 'Hindi', 'Urdu']
  },
  {
    id: 'Bhojpur',
    name: 'Bhojpur',
    hindiName: 'भोजपुर',
    linguisticContext:
      'Home to vibrant Bhojpuri oral epics, Biraha ballads, and Bhikhari Thakur’s theatrical tradition. Historically documented in Kaithi script.',
    hindiLinguisticContext:
      'भोजपुरी लोक-गाथाओं, बिरहा गीतों और भिखारी ठाकुर के रंगमंच की मातृभूमि। ऐतिहासिक रूप से कैथी लिपि में लिपिबद्ध।',
    documentedVarieties: ['Bhojpuri', 'Hindi', 'Urdu']
  },
  {
    id: 'Magadh',
    name: 'Magadh & Patna',
    hindiName: 'मगध एवं पटना',
    linguisticContext:
      'Ancient cradle of Magadhi Prakrit, historic Azimabad (Patna), and central Gangetic plains. Preserves Magahi folk storytelling, Lorikayan epics, rich Urdu mushaira archives, and contemporary administrative Hindi.',
    hindiLinguisticContext:
      'प्राचीन मागधी प्राकृत की पावन धरा, ऐतिहासिक अज़ीमाबाद (पटना) और केंद्रीय अंचल। लोरिकायन महाकाव्य, मगही लोककथाओं, उर्दू मुशायरा परंपरा और मानक हिंदी का संगम।',
    documentedVarieties: ['Magahi', 'Hindi', 'Urdu', 'Bhojpuri']
  },
  {
    id: 'Anga',
    name: 'Anga',
    hindiName: 'अंग प्रदेश',
    linguisticContext:
      'Associated with the Angika language, celebrated for the Behula-Bishahari folklore and Manjusha artistic traditions across the eastern Gangetic bend.',
    hindiLinguisticContext:
      'अंगिका भाषा का क्षेत्र, जो बिहुला-विषहरी लोक-आख्यान और मंजूषा कला परंपरा से गहराई से जुड़ा हुआ है।',
    documentedVarieties: ['Angika', 'Hindi', 'Urdu']
  },
  {
    id: 'Tirhut',
    name: 'Tirhut',
    hindiName: 'तिरहुत',
    linguisticContext:
      'Linguistically diverse western-central plain where Bajjika and Bhojpuri intersect with Maithili, Hindi, and Urdu across distinct rural pockets.',
    hindiLinguisticContext:
      'भाषाई विविधता से समृद्ध अंचल जहाँ बज्जिका, भोजपुरी, मैथिली और हिंदी का सहज सांस्कृतिक संगम देखने को मिलता है।',
    documentedVarieties: ['Bajjika', 'Bhojpuri', 'Maithili', 'Hindi', 'Urdu']
  },
  {
    id: 'Saran',
    name: 'Saran',
    hindiName: 'सारण',
    linguisticContext:
      'Flanked by the Ganga, Gandak, and Ghaghara rivers; a heartland of Bhojpuri folk music, Mahendra Misir’s Purvi songs, and seasonal Kajari.',
    hindiLinguisticContext:
      'गंगा, गंडक और घाघरा के संगम पर स्थित; भोजपुरी लोक-संगीत, महेंद्र मिसिर की पूर्वी और कजरी का प्रमुख केंद्र।',
    documentedVarieties: ['Bhojpuri', 'Hindi', 'Urdu']
  },
  {
    id: 'Kosi',
    name: 'Kosi',
    hindiName: 'कोशी',
    linguisticContext:
      'The shifting river plains where northern Maithili dialects intertwine with Angika and Surjapuri speech idioms in riverine farming communities.',
    hindiLinguisticContext:
      'कोशी नदी का कछार जहाँ उत्तरी मैथिली, अंगिका और स्थानीय बोलियों का लोक-प्रवाह जनजीवन में रचा-बसा है।',
    documentedVarieties: ['Maithili', 'Angika', 'Hindi', 'Urdu']
  },
  {
    id: 'Purnia',
    name: 'Purnia & Seemanchal',
    hindiName: 'पूर्णिया एवं सीमांचल',
    linguisticContext:
      'Eastern borderland characterized by high linguistic pluralism: Surjapuri, Maithili, Urdu, Bengali influences, and Hindi flourish side-by-side.',
    hindiLinguisticContext:
      'सीमावर्ती अंचल जहाँ सुरजापुरी, मैथिली, उर्दू, बांग्ला प्रभाव और मानक हिंदी परस्पर सौहार्द से बोली जाती हैं।',
    documentedVarieties: ['Surjapuri', 'Maithili', 'Urdu', 'Hindi']
  }
];

export const LanguageRegionSection: React.FC<LanguageRegionSectionProps> = ({
  languages,
  language,
  onSelectLanguage,
  onSelectDistrictById
}) => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('Mithila');
  const [activeLangFilter, setActiveLangFilter] = useState<string | null>(null);

  const currentRegionInfo =
    REGION_DATA.find(r => r.id === selectedRegion) || REGION_DATA[0];

  // Associated languages for current region
  const associatedLanguages = languages.filter(l =>
    l.primaryRegions.includes(selectedRegion)
  );

  return (
    <section id="language-region-section" className="space-y-8 mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'भूगोल एवं स्वर' : 'Interactive Language × Region'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi'
              ? 'क्षेत्र और वाणी का पारस्परिक संबंध'
              : 'Mapping Voice to Cultural Landscapes'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'बिहार में भाषाएं कठोर सीमाओं में नहीं बंधी हैं। एक ही ज़िले में कई भाषाएं और बोलियां सहजता से बोली जाती हैं।'
              : 'Languages and speech varieties in Bihar do not follow rigid administrative fences. Explore how cultural zones nurture distinct yet overlapping voices.'}
          </p>
        </div>

        {/* Nuance badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F5EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] text-[#5A524A] dark:text-[#A89F93]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Linguistically Pluralistic Across All Districts</span>
        </div>
      </div>

      {/* Region Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {REGION_DATA.map(reg => {
          const isSelected = selectedRegion === reg.id;
          return (
            <button
              key={reg.id}
              onClick={() => {
                setSelectedRegion(reg.id);
                setActiveLangFilter(null);
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#C85A32] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1E2227] text-[#5A524A] dark:text-[#C8BFB4] border border-[#EADBCE] dark:border-[#2E343B] hover:bg-[#F5EFE6] dark:hover:bg-[#252A30]'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#C85A32]'}`} />
              <span>{language === 'hi' ? reg.hindiName : reg.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Region × Language Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Card: Selected Region Overview */}
        <div className="lg:col-span-5 rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] font-bold block">
              {language === 'hi' ? 'चयनित सांस्कृतिक अंचल' : 'Selected Cultural Zone'}
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
              {language === 'hi' ? currentRegionInfo.hindiName : currentRegionInfo.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
              {language === 'hi'
                ? currentRegionInfo.hindiLinguisticContext
                : currentRegionInfo.linguisticContext}
            </p>
          </div>

          {/* Documented varieties tag list */}
          <div className="pt-4 border-t border-[#F0E8DD] dark:border-[#2E343B] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8276] dark:text-[#A89F93] block">
              {language === 'hi' ? 'इस अंचल में प्रलेखित भाषाएं एवं बोलियां' : 'Documented Voices in this Region'}
            </span>
            <div className="flex flex-wrap gap-2">
              {currentRegionInfo.documentedVarieties.map(v => (
                <span
                  key={v}
                  className="px-2.5 py-1 rounded-lg bg-[#F5EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] text-xs font-medium text-[#1E2124] dark:text-[#F5F1E8]"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Cautionary Linguistic Note */}
          <div className="p-3.5 rounded-2xl bg-[#FBF9F5] dark:bg-[#1B1E22] border border-[#EADBCE] dark:border-[#2E343B] text-[11px] text-[#5A524A] dark:text-[#A89F93] space-y-1">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8] block font-semibold">
              {language === 'hi' ? 'महत्वपूर्ण भाषाई तथ्य' : 'Academic Context'}
            </strong>
            <p className="leading-relaxed">
              {language === 'hi'
                ? 'प्रशासनिक सीमाओं के पार भाषाएं एक-दूसरे में स्वाभाविक रूप से घुलमिल जाती हैं। किसी एक ज़िले को एकल-भाषी नहीं माना जा सकता।'
                : 'Linguistic boundaries are porous transitions, not sharp walls. Speakers comfortably transition between local speech, literary idioms, and state media.'}
            </p>
          </div>
        </div>

        {/* Right Cards: Associated Language Profiles */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0E8DD] dark:border-[#2E343B]">
            <h4 className="font-serif font-bold text-base sm:text-lg text-[#1E2124] dark:text-[#F5F1E8]">
              {language === 'hi'
                ? `${currentRegionInfo.hindiName} से जुड़े प्रमुख भाषाई प्रोफाइल`
                : `Documented Language Profiles in ${currentRegionInfo.name}`}
            </h4>
            <span className="text-xs text-[#8C8276] dark:text-[#A89F93] font-mono">
              {associatedLanguages.length} {associatedLanguages.length === 1 ? 'Profile' : 'Profiles'}
            </span>
          </div>

          {associatedLanguages.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border border-dashed border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#8C8276]">
              {language === 'hi'
                ? 'इस अंचल के लिए प्राथमिक भाषा प्रोफाइल लोड हो रहे हैं...'
                : 'Regional profiles connected via statewide and shared literary usage.'}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {associatedLanguages.map(lang => (
                <div
                  key={lang.id}
                  onClick={() => onSelectLanguage(lang)}
                  className="group cursor-pointer rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1E2227] p-5 hover:border-[#C85A32] dark:hover:border-[#C85A32] transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#C85A32]/10 text-[#C85A32] dark:text-[#E06C43] font-semibold">
                        {lang.category}
                      </span>
                      <span className="text-xs font-serif text-[#8C8276] dark:text-[#A89F93]">
                        {lang.traditionalScripts[0]}
                      </span>
                    </div>

                    <h5 className="font-serif font-bold text-lg text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                      {lang.name}
                    </h5>
                    <p className="text-xs text-[#C85A32] dark:text-[#E06C43] font-hindi-text font-medium">
                      {lang.localName}
                    </p>

                    <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] line-clamp-3 leading-relaxed">
                      {lang.overview}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#F0E8DD] dark:border-[#2E343B] flex items-center justify-between text-xs text-[#C85A32] font-semibold">
                    <span>{language === 'hi' ? 'विस्तृत प्रोफाइल' : 'View Full Profile'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
