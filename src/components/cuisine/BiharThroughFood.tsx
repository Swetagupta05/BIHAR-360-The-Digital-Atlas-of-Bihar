import React from 'react';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface BiharThroughFoodProps {
  language: 'en' | 'hi';
}

export const BiharThroughFood: React.FC<BiharThroughFoodProps> = ({ language }) => {
  return (
    <section className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 shadow-xs mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Short Editorial Narrative */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'पाक भूगोल' : 'Culinary Geography'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight leading-tight">
            {language === 'hi'
              ? 'नदियों, ऋतुओं और माटी से उपजा स्वाद'
              : 'Bihar Through Food: Soil, River, & Hearth'}
          </h2>

          <p className="text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
            {language === 'hi'
              ? 'बिहार का खानपान एकरस नहीं है; यह यहाँ की विविध भौगोलिक धाराओं के साथ बदलता है। सोन और गंगा के दोआब में भोजपुर का भोजन भुने हुए सत्तू और काष्ठ-अंगारों पर आधारित है, जबकि उत्तर बिहार के मिथिला में आर्द्रभूमि (पोखर) का मखाना, ताजी मछली और सरसों की बारीक महक जीवन का केंद्र है।'
              : 'Bihar’s culinary tapestry is not a singular monolithic kitchen; it mirrors its great river valleys, micro-climates, and agricultural harvests. Across the fertile western plains of Bhojpur along the Son and Ganga, roasted sattu and wood-charred dough sustained agrarian labor through scorching summers. To the north in Mithila, perennial village ponds yielded delicate lotus seeds (makhana) and fresh river fish steeped in pungent mustard broths.'}
          </p>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#A89F93] leading-relaxed">
            {language === 'hi'
              ? 'मगध के प्राचीन व्यापारिक मार्गों ने शीरे, तिल और बारीक परतों वाली मिठाइयों को जन्म दिया, तो चंपारण के तराई वनों ने मिट्टी की हांडी में धीमी आंच पर पकने वाले व्यंजनों को संवारा। यहाँ भोजन केवल स्वाद का विषय नहीं है—यह मौसम का परिवर्तन, सामुदायिक उत्सव और घरेलू स्नेह का सबसे सहज माध्यम है।'
              : 'Meanwhile, the historical pilgrim and courtly highways of Magadh nurtured centuries of master confectionary art—from the delicately layered crispy Silao Khaja to the hand-pounded sesame Tilkut of Gaya. Each preparation is an archive of its local soil, seasonal temperature, and domestic memory.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8C8276] dark:text-[#948B80]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
              Pure Unrefined Jaggery & Sattu
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Wetland Lotus Foxnuts (GI Tagged)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              Winter Sesame & Cold-Pressed Mustard
            </span>
          </div>
        </div>

        {/* Right Column: Visual Composition with Verified Photography */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] shadow-md bg-[#1E2124]">
            <img
              src={VERIFIED_IMAGES.thekua}
              alt="Authentic handcrafted Thekua Prasad of Chhath Puja"
              className="w-full h-72 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-2 py-0.5 rounded-md bg-[#C85A32] text-[10px] font-mono uppercase font-semibold text-white">
                Living Tradition
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg mt-1 text-white">
                Handcrafted Thekua Prasad
              </h3>
              <p className="text-[11px] text-[#EADBCE] opacity-90 line-clamp-2">
                Pressed upon traditional carved wooden stencils (Saancha) using newly harvested wheat and dark winter sugarcane jaggery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
