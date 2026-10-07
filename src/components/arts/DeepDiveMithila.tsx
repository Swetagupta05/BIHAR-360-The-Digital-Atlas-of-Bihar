import React, { useState } from 'react';
import { ArtCraft } from '../../types';
import { Palette, Brush, Sparkles, MapPin, Feather, Check, Award, Eye } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface DeepDiveMithilaProps {
  art: ArtCraft;
  language: 'en' | 'hi';
  onSelectDistrict?: (districtId: string) => void;
  onOpenDetails: () => void;
}

export const DeepDiveMithila: React.FC<DeepDiveMithilaProps> = ({
  art,
  language,
  onSelectDistrict,
  onOpenDetails,
}) => {
  const [activeTab, setActiveTab] = useState<'tradition' | 'styles' | 'motifs' | 'materials' | 'technique' | 'living'>('tradition');
  const [activeStyleIdx, setActiveStyleIdx] = useState<number>(0);

  const styles = art.fiveStyles || [];
  const motifs = art.motifs || [];

  return (
    <section className="bg-[#FAF7F2] dark:bg-[#1E2226] border border-[#EADBCE] dark:border-[#33383F] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EADBCE] dark:border-[#33383F]">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>{language === 'hi' ? 'विशेष अध्ययन: मिथिला की अमर भित्ति कला' : 'Dedicated Deep Dive: Mithila Painting'}</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E2124] dark:text-[#F3EFEA] tracking-tight">
            {language === 'hi' ? 'मधुबनी / मिथिला चित्रकला' : 'Madhubani & Mithila Painting'}
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C85A32]">
            {language === 'hi'
              ? 'आंगन की गीली माटी से लेकर वैश्विक संग्रहालयों तक की सनातन यात्रा'
              : 'Painting stories onto earthen walls, handmade paper, and tussar silk.'}
          </p>

          <p className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80 leading-relaxed">
            {language === 'hi'
              ? 'मिथिला चित्रकला कोई एकरस या सपाट विधा नहीं है; यह विभिन्न सामाजिक परंपराओं, तांत्रिक दर्शन, और मातृसत्तात्मक ज्ञान का बहुआयामी संसार है। इसमें भर्नी, कचनी, तांत्रिक, गोदना और कोहबर जैसी पृथक एवं समृद्ध शैलियां समाहित हैं।'
              : 'Mithila painting is neither monolithic nor decorative; it is a complex cosmological archive. Practiced traditionally on freshly plastered cow-dung walls during domestic rituals, it encompasses distinct stylistic traditions that range from sacred Tantric geometric cosmograms to tattoo-inspired Godna motifs.'}
          </p>
        </div>

        {/* Geographic & GI Tag Block */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-3 shrink-0">
          <div className="p-3.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs space-y-1 w-full sm:w-auto">
            <div className="text-[10px] font-bold uppercase text-[#C85A32] tracking-wider">
              {language === 'hi' ? 'भौगोलिक केंद्र' : 'Geographic Hearth'}
            </div>
            <div className="font-serif font-bold text-sm text-[#1E2124] dark:text-white">
              Mithila (Madhubani, Darbhanga, Sitamarhi)
            </div>
            {onSelectDistrict && (
              <button
                onClick={() => onSelectDistrict('madhubani')}
                className="text-[#C85A32] hover:underline flex items-center gap-1 text-[11px] font-semibold pt-1"
              >
                <MapPin className="w-3 h-3" />
                <span>{language === 'hi' ? 'मधुबनी जिला डोशियर देखें →' : 'Explore Madhubani Dossier →'}</span>
              </button>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-xs font-semibold">
            <span>★ GI Application No. 83 Certified</span>
          </div>
        </div>
      </div>

      {/* Visual Sequence Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#EADBCE]/60 dark:border-[#33383F] scrollbar-none text-xs font-semibold uppercase tracking-wider">
        <span className="text-[#2D3238]/60 dark:text-[#EADBCE]/60 text-[11px] mr-2">Sequence:</span>
        <button
          onClick={() => setActiveTab('tradition')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'tradition'
              ? 'bg-[#C85A32] text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          1. {language === 'hi' ? 'परंपरा एवं इतिहास' : 'Tradition & Evolution'}
        </button>

        <button
          onClick={() => setActiveTab('styles')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'styles'
              ? 'bg-[#C85A32] text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          2. {language === 'hi' ? 'पांच विशिष्ट शैलियां' : '5 Distinct Styles'}
        </button>

        <button
          onClick={() => setActiveTab('motifs')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'motifs'
              ? 'bg-[#C85A32] text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          3. {language === 'hi' ? 'प्रतीक एवं अर्थ' : 'Motifs & Symbolism'}
        </button>

        <button
          onClick={() => setActiveTab('materials')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'materials'
              ? 'bg-[#C85A32] text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          4. {language === 'hi' ? 'प्राकृतिक सामग्री व कलम' : 'Materials & Tools'}
        </button>

        <button
          onClick={() => setActiveTab('living')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'living'
              ? 'bg-[#C85A32] text-white shadow-xs'
              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
          }`}
        >
          5. {language === 'hi' ? 'जीवंत अभ्यास व शिल्पी' : 'Living Masters'}
        </button>
      </div>

      {/* Tab 1: TRADITION & EVOLUTION */}
      {activeTab === 'tradition' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
            <h4 className="font-serif font-bold text-xl text-[#1E2124] dark:text-white">
              {language === 'hi'
                ? 'राजा जनक के काल से 1934 के भूकंप और कागज पर अवतरण'
                : 'From the Court of Janaka to the 1934 Earthquake & Paper Canvas'}
            </h4>
            <p>
              {language === 'hi'
                ? 'मिथिला की लोक-मान्यता के अनुसार, राजा जनक ने अपनी पुत्री सीता के भगवान राम के साथ विवाह के अवसर पर संपूर्ण मिथिला के ग्रामीणों को अपने घरों की दीवारों को सजाने का आदेश दिया था। सदियों तक यह कला घर के दो पवित्र स्थानों तक सीमित रही: ‘गोसाईं घर’ (कुलदेवता का कक्ष) और ‘कोहबर घर’ (नवविवाहितों का मंगल कक्ष)।'
                : 'Oral tradition traces the art to the marriage of Princess Sita to Prince Rama in Videha. For centuries, this sacred visual language was created on freshly plastered mud and cow-dung walls across two domestic spaces: the Gosain Ghar (prayer sanctuary) and the Kohbar Ghar (the sanctum for newlyweds).'}
            </p>
            <p>
              {language === 'hi'
                ? '1934 के विनाशकारी बिहार भूकंप के बाद ब्रिटिश अधिकारी विलियम जी. आर्चर ने टूटे हुए मकानों के भीतरी कक्षों में इन विस्मयकारी भित्ति चित्रों को देखा। 1966-67 के भीषण सूखे के समय पुपुल जयकर और हस्तशिल्प बोर्ड ने भुखमरी से जूझते कलाकारों को कागज पर चित्र बनाने के लिए प्रेरित किया, जिसने इस कला को अंतरराष्ट्रीय ख्याति दिलाई।'
                : 'In 1934, following the devastating Bihar earthquake, British colonial officer William G. Archer discovered these remarkable domestic murals exposed in damaged homes. In the late 1960s, during severe regional drought, Pupul Jayakar and the All India Handicrafts Board encouraged local women to transfer their wall murals onto handmade paper, launching a global artistic revolution.'}
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-[#C85A32] block">
                {language === 'hi' ? 'अरिपन (भूमि आलेखन):' : 'Aripan (Floor Ritual Geometry):'}
              </strong>
              <p className="text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                {language === 'hi'
                  ? 'पीसे हुए चावल के घोल (पिठार) और सिंदूर से आंगन की दहलीज पर उकेरे जाने वाले पवित्र ज्यामितीय मंडल, जो गृहस्थ जीवन में सकारात्मक ऊर्जा का संचार करते हैं।'
                  : 'Ephemeral floor drawings rendered with ground rice paste (pithar) and vermillion on thresholds during fasts and festivals, serving as protective geometrical mandalas.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#EADBCE] dark:border-[#383D45] aspect-4/3 shadow-sm">
            <img
              src={VERIFIED_IMAGES.madhubani}
              alt="Authentic traditional Madhubani line painting"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
              <span className="font-bold block text-sm">Authentic Mithila Mural Geometry</span>
              <span className="text-[#EADBCE]/80 text-[11px]">Double contour lines drawn with cotton-wrapped bamboo twigs.</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 5 DISTINCT STYLES */}
      {activeTab === 'styles' && (
        <div className="space-y-6">
          <div className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80 max-w-3xl">
            {language === 'hi'
              ? 'मिथिला चित्रकला में एक ही शैली नहीं है। यह पांच प्रमुख धाराओं में विभक्त है, जिनमें से प्रत्येक की रेखा, रंग, विषय और सामाजिक पृष्ठभूमि अद्वितीय है:'
              : 'Mithila painting is deeply pluralistic. It comprises five documented stylistic schools, each with its own visual geometry, linework density, and cosmological focus:'}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {styles.map((style, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStyleIdx(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeStyleIdx === idx
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                    : 'bg-white dark:bg-[#25292E] text-[#1E2124] dark:text-[#EADBCE] border-[#EADBCE] dark:border-[#383D45] hover:bg-[#F4EFE6]'
                }`}
              >
                <div className="text-xs font-bold font-serif">{style.name}</div>
                <div className={`text-[10px] mt-0.5 line-clamp-1 ${activeStyleIdx === idx ? 'text-amber-100' : 'text-[#2D3238]/60 dark:text-[#EADBCE]/60'}`}>
                  {style.context || 'Traditional School'}
                </div>
              </button>
            ))}
          </div>

          {styles[activeStyleIdx] && (
            <div className="p-6 rounded-2xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-xl text-[#1E2124] dark:text-white flex items-center gap-2">
                  <Brush className="w-5 h-5 text-[#C85A32]" />
                  <span>{styles[activeStyleIdx].name} Style</span>
                </h4>
                <span className="px-2.5 py-1 rounded bg-[#C85A32]/10 text-[#C85A32] text-xs font-bold uppercase">
                  Mithila Canon
                </span>
              </div>
              <p className="text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
                {styles[activeStyleIdx].description}
              </p>
              {styles[activeStyleIdx].context && (
                <div className="pt-2 text-xs text-[#2D3238]/70 dark:text-[#EADBCE]/70 border-t border-[#EADBCE]/60 dark:border-[#33383F]">
                  <strong className="text-[#1E2124] dark:text-white mr-1">Traditional Setting:</strong>
                  {styles[activeStyleIdx].context}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: MOTIFS & VISUAL LANGUAGE */}
      {activeTab === 'motifs' && (
        <div className="space-y-4">
          <div className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80">
            {language === 'hi'
              ? 'मिथिला चित्रकला का प्रत्येक रूपांकन केवल सजावटी नहीं है, बल्कि प्रकृति, उर्वरता और ब्रह्मांडीय संतुलन का प्रतीक है:'
              : 'In Mithila painting, negative space is abhorred, and every depicted creature or plant carries specific metaphysical symbolism:'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {motifs.map((motif, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-2"
              >
                <div className="flex items-start justify-between">
                  <h5 className="font-serif font-bold text-base text-[#1E2124] dark:text-white">
                    {motif.name}
                  </h5>
                  {motif.hindiName && (
                    <span className="text-xs font-serif text-[#C85A32]">{motif.hindiName}</span>
                  )}
                </div>
                <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
                  {motif.symbolism}
                </p>
                {motif.visualContext && (
                  <div className="pt-2 text-[11px] text-[#2D3238]/70 dark:text-[#EADBCE]/70 border-t border-[#EADBCE]/50 dark:border-[#33383F]">
                    <strong className="text-[#C85A32]">Context:</strong> {motif.visualContext}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: MATERIALS & TECHNIQUE */}
      {activeTab === 'materials' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-3">
              <h4 className="font-serif font-bold text-lg text-[#1E2124] dark:text-white flex items-center gap-2">
                <Palette className="w-5 h-5 text-[#C85A32]" />
                <span>{language === 'hi' ? 'प्राकृतिक वानस्पतिक रंग' : 'Natural Plant & Mineral Pigments'}</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-black mt-1.5 shrink-0" />
                  <span><strong>Kajal (Black):</strong> Lampblack collected on earthen lids over mustard-oil lamps, mixed with babool gum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span><strong>Haldi (Yellow):</strong> Freshly ground turmeric root mixed with banyan milk or gum arabic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Neel (Blue):</strong> Naturally fermented wild indigo plant leaves.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                  <span><strong>Kusum / Palash (Red):</strong> Boiled flowers of the Flame of the Forest (Butea monosperma).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span><strong>Green:</strong> Crushed Bilva (wood apple) leaves, aparajita flowers, or bean vine sap.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-3">
              <h4 className="font-serif font-bold text-lg text-[#1E2124] dark:text-white flex items-center gap-2">
                <Brush className="w-5 h-5 text-[#C85A32]" />
                <span>{language === 'hi' ? 'बांस की कलम एवं दोहरा रेखांकन' : 'The Bamboo Kalam & Double Contours'}</span>
              </h4>
              <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
                Traditional artists never use synthetic brushes for outlines. A green bamboo reed is whittled into a fine pointed nib, wrapped in raw untreated cotton thread to form an ink reservoir. The artist draws freehand without ruler or eraser.
              </p>
              <div className="p-3 bg-[#FAF7F2] dark:bg-[#1E2226] rounded-xl border border-[#EADBCE] dark:border-[#33383F] text-xs">
                <strong className="text-[#C85A32] block mb-0.5">The Double Contour Rule:</strong>
                All primary figures (gods, brides, fish, trees) are drawn with two parallel lines. The narrow gap between these outlines is filled with micro-dots or cross-hatching to impart sacred energy.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: LIVING MASTERS & CONTEMPORARY PRACTICE */}
      {activeTab === 'living' && (
        <div className="space-y-6">
          <div className="text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80">
            {language === 'hi'
              ? 'मिथिला की महिला कलाकारों ने इस कला को अपने आंगनों से निकालकर अंतरराष्ट्रीय मंचों पर स्थापित किया:'
              : 'The women of Mithila carried this art from domestic mud walls to national honors and global museums:'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {art.masterArtisans.map((artisan, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs space-y-1.5"
              >
                <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Master Artist</span>
                </div>
                <div className="font-serif font-bold text-sm text-[#1E2124] dark:text-white">
                  {artisan}
                </div>
                <p className="text-[11px] text-[#2D3238]/70 dark:text-[#EADBCE]/70">
                  National Crafts Museum & Lalit Kala Akademi Honoree
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-[#25231F] border border-amber-200 dark:border-amber-800/40 text-xs text-[#2D3238] dark:text-[#EADBCE] leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <strong className="text-amber-950 dark:text-amber-200 block text-sm mb-1 font-serif">
                {language === 'hi' ? 'जीवंत कलाकार गांव: जितवारपुर एवं रांटी' : 'Living Artisan Villages: Jitwarpur & Ranti'}
              </strong>
              <p>
                In Madhubani district, Jitwarpur and Ranti are active open-air village academies where almost every home has women painting daily in courtyards.
              </p>
            </div>
            <button
              onClick={onOpenDetails}
              className="shrink-0 px-4 py-2 rounded-xl bg-[#C85A32] text-white font-semibold text-xs hover:bg-[#B34D29] transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'पूर्ण मिथिला गाथा पढ़ें' : 'View Full Dossier'}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
