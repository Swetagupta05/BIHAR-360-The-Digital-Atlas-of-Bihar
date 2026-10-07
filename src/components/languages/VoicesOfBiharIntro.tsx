import React from 'react';
import { Compass, Sparkles, Feather, Layers, ShieldCheck, Heart } from 'lucide-react';

interface VoicesOfBiharIntroProps {
  language: 'en' | 'hi';
}

export const VoicesOfBiharIntro: React.FC<VoicesOfBiharIntroProps> = ({ language }) => {
  return (
    <section className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 shadow-xs mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Narrative */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'भाषाई विवेक' : 'Linguistic Diversity & Nuance'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight leading-tight">
            {language === 'hi'
              ? 'शब्द, स्मृति और समुदाय का जीवंत सेतु'
              : 'The Voices of Bihar: Beyond Simple Borders'}
          </h2>

          <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
            {language === 'hi'
              ? 'बिहार का भाषाई परिदृश्य किसी प्रशासनिक मानचित्र की तरह बंटा हुआ नहीं है; यहाँ भाषाएं नदियों और सांस्कृतिक अंचलों की तरह एक-दूसरे में प्रवाहित होती हैं। पश्चिम में भोजपुरी का ओजस्वी प्रवाह, मध्य में मगही की सहज आत्मीयता, उत्तर में मैथिली की समृद्ध शास्त्रीय व लोक-धरोहर, और पूर्व में अंगिका के वाचिक आख्यान मिलकर एक बहुआयामी सांस्कृतिक धड़कन रचते हैं।'
              : 'Bihar’s linguistic landscape does not follow rigid administrative boundaries. Rather than isolated dialects, its speech varieties flow into one another like its rivers. Across western Bihar, Bhojpuri carries the energy of agrarian labor and theatrical storytelling. In the central plains, Magahi preserves centuries of oral ballads. In the north, Maithili boasts an unbroken literary tradition recognized in the Constitution of India, while Anga in the east resonates with the oral epics of Behula-Bishahari.'}
          </p>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
            {language === 'hi'
              ? 'इसके साथ ही, सदियों से पटना (अज़ीमाबाद) और बिहार के नगरों में उर्दू की गजल, मर्सिया और मुशायरा परंपरा पुष्पित-पल्लवित रही, जिसे 1980 में राज्य की दूसरी आधिकारिक भाषा के रूप में मान्यता मिली। मानक हिंदी यहाँ के प्रशासन, पत्रकारिता और राष्ट्रकवि दिनकर व रेणु जैसे युगदृष्टा साहित्यकारों की अभिव्यक्ति का आधार बनी।'
              : 'Simultaneously, cities like Patna (historic Azimabad) fostered centuries of Urdu literary refinement, leading Bihar to become the first state in India to designate Urdu as an official language in 1980. Meanwhile, Standard Hindi serves as the primary official medium, nurtured by towering figures like Ramdhari Singh Dinkar and Phanishwar Nath Renu.'}
          </p>

          {/* Academic & Cultural Accuracy Note */}
          <div className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1.5 text-xs text-[#5A524A] dark:text-[#C8BFB4]">
            <div className="flex items-center gap-1.5 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
              <ShieldCheck className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
              <span>A Note on Linguistic Classification</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Linguists (including George Grierson and Suniti Kumar Chatterji) categorize the indigenous idioms of Bihar under the Eastern Indo-Aryan (Bihari) branch, distinct from Western Hindi. However, in popular and census parlance, many speakers comfortably navigate multiple registers—speaking their mother tongue at home, using Hindustani in the bazaar, and writing in Standard Hindi or English.
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Visual Journey */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] shadow-md bg-white dark:bg-[#1E2227] p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] font-bold block">
                The Living Chain of Expression
              </span>
              <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8]">
                How Voice Becomes Identity
              </h3>
            </div>

            {/* Arc Steps */}
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#C85A32]/10 dark:bg-[#C85A32]/20 text-[#C85A32] dark:text-[#E06C43] font-mono font-bold flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1E2124] dark:text-[#F5F1E8]">Language & Mother Tongue</h4>
                  <p className="text-[#5A524A] dark:text-[#A89F93] mt-0.5">
                    The intimate home idiom through which a child first perceives the river, hearth, and sky.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#C85A32]/10 dark:bg-[#C85A32]/20 text-[#C85A32] dark:text-[#E06C43] font-mono font-bold flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1E2124] dark:text-[#F5F1E8]">Oral Tradition & Folk Song</h4>
                  <p className="text-[#5A524A] dark:text-[#A89F93] mt-0.5">
                    Sohar at birth, Samdaun at weddings, Kajari in the rain, and Chhath hymns at the river ghats.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#C85A32]/10 dark:bg-[#C85A32]/20 text-[#C85A32] dark:text-[#E06C43] font-mono font-bold flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1E2124] dark:text-[#F5F1E8]">Literature & Drama</h4>
                  <p className="text-[#5A524A] dark:text-[#A89F93] mt-0.5">
                    From 14th-century Vidyapati lyrics and Jyotirishwar’s prose to Bhikhari Thakur’s rural theater and Renu’s regional fiction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#C85A32]/10 dark:bg-[#C85A32]/20 text-[#C85A32] dark:text-[#E06C43] font-mono font-bold flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1E2124] dark:text-[#F5F1E8]">Script & Living Memory</h4>
                  <p className="text-[#5A524A] dark:text-[#A89F93] mt-0.5">
                    Preserved through Tirhuta manuscripts, Kaithi land registers, Persian court codices, and modern Devanagari.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F0E8DD] dark:border-[#2E343B]">
              <span className="text-[11px] font-serif italic text-[#8C8276] dark:text-[#A89F93] block text-center">
                “भाषा केवल विचार के साधन नय, बल्कि जीवनक आत्मा थिक।”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
