import React, { useState } from 'react';
import { ArtCraft } from '../../types';
import { Sparkles, MapPin, Feather, Award, Eye, Info } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface DeepDiveManjushaProps {
  art: ArtCraft;
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
  onOpenDetails: () => void;
}

export const DeepDiveManjusha: React.FC<DeepDiveManjushaProps> = ({
  art,
  language,
  onSelectDistrict,
  onOpenDetails,
}) => {
  const [activeTab, setActiveTab] = useState<'folklore' | 'tricolor' | 'motifs' | 'revival'>('folklore');

  return (
    <section className="bg-[#FAF7F2] dark:bg-[#1E2226] border border-[#EADBCE] dark:border-[#33383F] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
      {/* Visual Contrast Header - Highlighting Distinct Anga Identity */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EADBCE] dark:border-[#33383F]">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/10 dark:bg-emerald-900/30 border border-emerald-600/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Feather className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'अंग प्रदेश की प्राचीन सर्प चित्रकला' : 'Ancient Snake Scroll Art of Anga'}</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#F3EFEA] tracking-tight">
            {language === 'hi' ? 'मंजूषा कला (अंगिका कथा चित्रकला)' : 'Manjusha Art (Angika Scroll Heritage)'}
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-emerald-800 dark:text-emerald-400">
            {language === 'hi'
              ? 'तीन पावन रंगों और सर्पाकार लहरिना में अंकित बिहुला-विषहरी की अमर गाथा'
              : 'India’s only sequential comic-strip folk art, executed strictly in three sacred colors.'}
          </p>

          <p className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80 leading-relaxed">
            {language === 'hi'
              ? 'मंजूषा कला को कभी भी मधुबनी चित्रकला के साथ भ्रमित नहीं किया जाना चाहिए। यह भागलपुर (प्राचीन चंपानगर) के अंग प्रदेश की स्वतंत्र और अनूठी विधा है, जो आठ स्तंभों वाली मंदिर-पेटिकाओं (मंजूषा) पर विषहरी देवी के पूजन हेतु रची जाती है।'
              : 'Manjusha art is culturally and visually distinct from Mithila painting. Born along the riverbanks of Bhagalpur (ancient Champanagar) in the Anga region, it is an architectural scroll art created for the worship of serpent goddess Mansa Bishahari during monsoon.'}
          </p>
        </div>

        {/* Geographic Connection */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-3 shrink-0">
          <div className="p-3.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs space-y-1 w-full sm:w-auto">
            <div className="text-[10px] font-bold uppercase text-emerald-800 dark:text-emerald-400 tracking-wider">
              {language === 'hi' ? 'भौगोलिक उद्गम' : 'Geographic Hearth'}
            </div>
            <div className="font-serif font-bold text-sm text-[#1E2124] dark:text-white">
              Bhagalpur & Banka (Anga Region)
            </div>
            {onSelectDistrict && (
              <button
                onClick={() => onSelectDistrict('bhagalpur')}
                className="text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1 text-[11px] font-semibold pt-1"
              >
                <MapPin className="w-3 h-3" />
                <span>{language === 'hi' ? 'भागलपुर जिला डोशियर देखें →' : 'Explore Bhagalpur Dossier →'}</span>
              </button>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-xs font-semibold">
            <span>★ GI Application No. 374 Registered</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#EADBCE]/60 dark:border-[#33383F] scrollbar-none text-xs font-semibold uppercase tracking-wider">
        <button
          onClick={() => setActiveTab('folklore')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'folklore'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          {language === 'hi' ? '1. बिहुला-विषहरी लोकगाथा' : '1. Folklore of Behula-Bishahari'}
        </button>

        <button
          onClick={() => setActiveTab('tricolor')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'tricolor'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          {language === 'hi' ? '2. तीन पावन रंग' : '2. The Strict Tri-Color Code'}
        </button>

        <button
          onClick={() => setActiveTab('motifs')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'motifs'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          {language === 'hi' ? '3. लहरिना व सर्प बॉर्डर' : '3. Motifs & Borders'}
        </button>

        <button
          onClick={() => setActiveTab('revival')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'revival'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          {language === 'hi' ? '4. चक्रवर्ती देवी व पुनरुद्धार' : '4. Revival & Living Practice'}
        </button>
      </div>

      {/* Tab 1: FOLKLORE */}
      {activeTab === 'folklore' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
            <h4 className="font-serif font-bold text-xl text-[#1E2124] dark:text-white">
              {language === 'hi'
                ? 'गंगा की धारा पर केले के तने की नाव और सती बिहुला का संकल्प'
                : 'A Plantain Raft on the Ganga: The Triumph of Human Will'}
            </h4>
            <p>
              {language === 'hi'
                ? 'मंजूषा कला अंग क्षेत्र की सबसे प्रसिद्ध लोकगाथा बिहुला और बाला लखिंदर पर आधारित है। जब नागपंचमी के श्राप से लखिंदर को सर्पदंश हुआ, तो बिहुला ने हार नहीं मानी। वह अपने पति के मृत शरीर को केले के तने से बनी नाव पर रखकर गंगा की लहरों पर बहती हुई इंद्र की अमरावती सभा तक पहुंची और अपने सतीत्व और नृत्य के बल पर पति के प्राण वापस ले आई।'
                : 'The visual narrative chronicles the legendary Angika epic of Behula and Bala Lakhindar. When Lakhindar was bitten by a serpent on his wedding night, Behula refused to mourn in despair. Instead, placing her husband’s body on a raft of plantain trunks, she navigated the perilous Ganga to the court of Indra, triumphing over divine judgment through steadfast courage.'}
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-emerald-800 dark:text-emerald-400 block">
                {language === 'hi' ? 'मंजूषा मंजूषा पेटिका क्या है?' : 'The Architecture of the Manjusha Box:'}
              </strong>
              <p className="text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                {language === 'hi'
                  ? '‘मंजूषा’ का शाब्दिक अर्थ होता है ‘पेटिका’ या मंदिर। यह बांस और शोला की लकड़ी से बनी आठ खंभों वाली चौकोर रचना होती है, जिसके चारों ओर बिहुला-विषहरी की कथा चित्रित की जाती है।'
                  : 'Manjusha literally means a sacred box or miniature temple. Constructed by the Malakar (pith-workers) and Kumbhakar (potters) with eight bamboo pillars, these painted boxes accompany the devotee’s offerings during the annual monsoon Bishahari Puja.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#EADBCE] dark:border-[#383D45] aspect-4/3 shadow-sm">
            <img
              src={VERIFIED_IMAGES.manjusha}
              alt="Authentic Manjusha three-color scroll art"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
              <span className="font-bold block text-sm">Authentic Manjusha Scroll</span>
              <span className="text-emerald-300 text-[11px]">Strict Pink, Green & Yellow palette with side-profile iconography.</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: TRI-COLOR CODE */}
      {activeTab === 'tricolor' && (
        <div className="space-y-6">
          <div className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80 max-w-3xl">
            {language === 'hi'
              ? 'मंजूषा कला में रंगों का चयन पूर्णतया अनुष्ठानिक और कठोर है। इसमें केवल तीन रंगों का प्रयोग होता है, जिनका गहरा दार्शनिक महत्व है:'
              : 'Unlike other folk arts that employ vast spectrums, traditional Manjusha strictly forbids black, blue, or violet. Only three sacred colors are permitted:'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800/40 space-y-2">
              <div className="w-8 h-8 rounded-full bg-pink-500 border border-pink-600" />
              <h5 className="font-serif font-bold text-base text-pink-950 dark:text-pink-200">
                गुलाबी (Pink / Rose)
              </h5>
              <p className="text-xs text-pink-900/80 dark:text-pink-300 leading-relaxed">
                Symbolizes devotion, steadfast female love, auspiciousness, and the unyielding moral courage of Behula during her trial.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 border border-emerald-700" />
              <h5 className="font-serif font-bold text-base text-emerald-950 dark:text-emerald-200">
                हरा (Green / Harit)
              </h5>
              <p className="text-xs text-emerald-900/80 dark:text-emerald-300 leading-relaxed">
                Symbolizes nature, poison, vitality, the sacred plants of the Ganga basin, and the coils of the five serpent daughters of Shiva.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 space-y-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 border border-amber-500" />
              <h5 className="font-serif font-bold text-base text-amber-950 dark:text-amber-200">
                पीला (Yellow / Haridra)
              </h5>
              <p className="text-xs text-amber-900/80 dark:text-amber-300 leading-relaxed">
                Symbolizes divine power, supreme intellect, purity, turmeric blessings, and the light of consciousness that banishes darkness.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: MOTIFS & BORDERS */}
      {activeTab === 'motifs' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-2">
            <h5 className="font-serif font-bold text-base text-[#1E2124] dark:text-white">
              लहरिना (Laharina - Serpent Wave)
            </h5>
            <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
              Continuous wave patterns in green and pink that frame every single Manjusha scroll, symbolizing river currents and the slithering movement of serpent deities.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-2">
            <h5 className="font-serif font-bold text-base text-[#1E2124] dark:text-white">
              मोखा (Mokha - Fish Scales)
            </h5>
            <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
              Geometric diamond grid patterns derived from the scales of river fish, acting as protective division bands between sequential narrative scenes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-2">
            <h5 className="font-serif font-bold text-base text-[#1E2124] dark:text-white">
              पुतली-विहीन बादामी आंखें (Pupil-less Eyes)
            </h5>
            <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
              Human and celestial characters are drawn in side-profile (X-ray view) with large almond eyes deliberately left without black pupils, giving them a trance-like mythological gaze.
            </p>
          </div>
        </div>
      )}

      {/* Tab 4: REVIVAL & CONTEMPORARY PRACTICE */}
      {activeTab === 'revival' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-3">
            <h4 className="font-serif font-bold text-lg text-[#1E2124] dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
              <span>Chakravarty Devi & Manoj Pandit: The Revival Guardians</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
              By the late 1980s, Manjusha art had almost vanished from public consciousness, kept alive only by a handful of elderly village women in Bhagalpur. Master artisan Chakravarty Devi, with support from the Department of Industries, established training workshops that rescued the iconographic rules from extinction.
            </p>
            <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
              Today, artists like Manoj Pandit and Ulupi Jha have taken Manjusha onto GI-certified Bhagalpuri tussar silk sarees, stoles, and ceramic dinnerware, showcasing Anga’s distinctive narrative scrolls across national craft bazaars.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onOpenDetails}
              className="px-4 py-2 rounded-xl bg-emerald-800 text-white font-semibold text-xs hover:bg-emerald-700 transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'मंजूषा की संपूर्ण विस्तृत गाथा पढ़ें' : 'View Full Manjusha Dossier'}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
