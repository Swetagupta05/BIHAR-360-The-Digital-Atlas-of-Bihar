import React from 'react';
import { Compass, ShieldCheck, MapPin, BookOpen, Layers, HelpCircle } from 'lucide-react';

interface HistoricalOrientationProps {
  language: 'en' | 'hi';
}

export const HistoricalOrientation: React.FC<HistoricalOrientationProps> = ({ language }) => {
  return (
    <section className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 shadow-xs mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Conceptual Overview */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'ऐतिहासिक परिप्रेक्ष्य' : 'Historical Orientation & Methodology'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight leading-tight">
            {language === 'hi'
              ? 'सभ्यताओं का संगम: आधुनिक सीमाओं से परे का इतिहास'
              : 'Understanding the Land: Beyond Modern Borders'}
          </h2>

          <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
            {language === 'hi'
              ? 'आधुनिक "बिहार" की 38 ज़िलों वाली प्रशासनिक सीमा 1912 और 1936 के औपनिवेशिक पुनर्गठन तथा 2000 के पुनर्गठन से बनी है। प्राचीन और मध्यकालीन युगों में, यह भूभाग एक समान राजनीतिक इकाई नहीं था, बल्कि भिन्न-भिन्न स्वायत्त सांस्कृतिक और राजनीतिक अंचलों का संगम था।'
              : 'The modern administrative entity called "Bihar"—comprising 38 districts across 94,163 square kilometers—was created through colonial administrative separations in 1912 and 1936, with its present boundary established in 2000. In antiquity, this geographical corridor was not a single unitary kingdom, but a dynamic constellation of distinct polities and cultural territories.'}
          </p>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
            {language === 'hi'
              ? 'गंगा के दक्षिण में मगध का साम्राज्यवादी केंद्र फला-फूला; उत्तर में तिरहुत के मैदानों में वज्जि महासंघ ने संस्थागार (संसदीय परिषद) द्वारा संचालित प्रथम गणतंत्र की रचना की; पूर्व में अंग ने चंपा के समुद्री व्यापारिक मार्गों को साधा; और उत्तर-पूर्व में विदेह ने उपनिषदीय दार्शनिक विमर्श को जन्म दिया।'
              : 'South of the Ganga, imperial Magadha centralized territorial power from Rajgir and Pataliputra; to the north, the Vajji Confederacy in Vaishali pioneered deliberative republican assembly (Sansthagara); to the east, Anga commanded maritime trade along the lower Ganga; while Videha (Mithila) fostered profound Upanishadic debates on consciousness and metaphysics.'}
          </p>

          {/* Academic Distinction Note */}
          <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2 text-xs text-[#5A524A] dark:text-[#C8BFB4]">
            <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
              <ShieldCheck className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
              <span>How We Treat Historical Evidence</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              We strictly separate <strong>Archaeological Evidence</strong> (excavated stratigraphy, carbon-dated bone tools at Chirand, brick ruins at Nalanda), <strong>Epigraphic Inscriptions</strong> (Ashoka’s Brahmi edicts, Barabar cave dedications), <strong>Archival Documents</strong> (Treaty of Allahabad, 1912 notifications), and <strong>Living Oral Memory</strong>. Folklore is respected as cultural tradition, but never fabricated as empirical archaeology.
            </p>
          </div>
        </div>

        {/* Right Column: Historical Geography Breakdown Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] shadow-md bg-white dark:bg-[#1E2227] p-6 sm:p-8 space-y-6">
            <div className="space-y-1 border-b border-[#F0E8DD] dark:border-[#2E343B] pb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] font-bold block">
                Historical Polities of the Gangetic Plain
              </span>
              <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8]">
                Ancient Core Geographies
              </h3>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B]">
                <div className="flex items-center justify-between font-semibold text-[#1E2124] dark:text-[#F5F1E8] mb-1">
                  <span>Magadha (मगध)</span>
                  <span className="text-[10px] font-mono text-[#C85A32]">South of the Ganga</span>
                </div>
                <p className="text-[11px] text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                  Centuries of imperial governance centered at Girivraja (Rajgir) and Pataliputra (Patna), extending across modern Patna, Nalanda, Gaya, Jehanabad, and Nawada.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B]">
                <div className="flex items-center justify-between font-semibold text-[#1E2124] dark:text-[#F5F1E8] mb-1">
                  <span>Vajji / Licchavi (वज्जि संघ)</span>
                  <span className="text-[10px] font-mono text-[#C85A32]">North of the Ganga</span>
                </div>
                <p className="text-[11px] text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                  An eight-clan confederacy centered at Vaishali (Basarh), governing by consensual council debate rather than dynastic monarchy.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B]">
                <div className="flex items-center justify-between font-semibold text-[#1E2124] dark:text-[#F5F1E8] mb-1">
                  <span>Anga (अंग देश)</span>
                  <span className="text-[10px] font-mono text-[#C85A32]">Eastern Plains</span>
                </div>
                <p className="text-[11px] text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                  Centered at Champa near Bhagalpur; early commercial hub connecting overland Gangetic trade with riverine maritime vessels.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B]">
                <div className="flex items-center justify-between font-semibold text-[#1E2124] dark:text-[#F5F1E8] mb-1">
                  <span>Videha / Mithila (विदेह)</span>
                  <span className="text-[10px] font-mono text-[#C85A32]">North-Eastern Plain</span>
                </div>
                <p className="text-[11px] text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
                  Famed court of King Janaka and sage Yajnavalkya; long-standing cradle of Sanskrit philosophical schools (Nyaya) and Maithili literature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
