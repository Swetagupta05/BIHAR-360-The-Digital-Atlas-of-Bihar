import React from 'react';
import { Utensils, Sparkles, Compass, MapPin, Calendar, Wheat } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface FoodHeroProps {
  language: 'en' | 'hi';
  onExploreRegions: () => void;
  onExploreSignatures: () => void;
}

export const FoodHero: React.FC<FoodHeroProps> = ({
  language,
  onExploreRegions,
  onExploreSignatures
}) => {
  return (
    <section className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#2E343B] bg-[#14171A] text-white shadow-xl mb-12">
      {/* Background authentic visual */}
      <div className="absolute inset-0">
        <img
          src={VERIFIED_IMAGES.littiChokha}
          alt="Traditional Bihari Litti Chokha slow-roasted over wood embers with pure desi ghee"
          className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-4xl space-y-6">
        {/* Editorial Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 text-[#F4A261] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
          <Utensils className="w-3.5 h-3.5 text-[#E76F51]" />
          <span>
            {language === 'hi'
              ? 'बिहार की पाक धरोहर एवं खानपान संस्कृति'
              : 'Culinary Heritage & Living Food Culture'}
          </span>
        </div>

        {/* Primary Editorial Headline */}
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1]">
          {language === 'hi' ? 'स्वाद से पहचानिए बिहार' : 'Taste Bihar'}
        </h1>

        {/* Supporting Line */}
        <p className="font-serif text-xl sm:text-2xl text-[#F4A261] font-light leading-snug max-w-2xl">
          {language === 'hi'
            ? 'पर्व-त्योहारों की रसोई से लेकर दैनिक थाली तक — बिहार का भोजन माटी, ऋतु और समुदाय की स्मृतियों को संजोए हुए है।'
            : 'From festival kitchens to everyday meals, Bihar’s food carries the memory of place, season, and community.'}
        </p>

        {/* Narrative Context */}
        <p className="text-sm sm:text-base text-[#D4C8BC] leading-relaxed max-w-2xl font-sans">
          {language === 'hi'
            ? 'धधकते उपलों पर सिंकती सत्तू-भरी लिट्टी और सोंधी चोखा, छठ महापर्व पर पवित्र मिट्टी के चूल्हे पर बना ठेकुआ, गया की गलियों में भारी मूसल से कुटा हुआ तिलकुट, और मिथिला के पोखरों से निकली ताजी मछली व मखाना खीर — यहाँ हर निवाला केवल स्वाद नहीं, बल्कि कृषि चक्र और सामूहिक उत्सव की जीवित परंपरा है।'
            : 'Slow-roasted over cow-dung embers with golden desi ghee, beaten into paper-thin crispy Tilkut in the lanes of Gaya, stamped onto carved wooden molds for Chhath Puja, or simmered in earthenware pots under Bettiah sal trees — food in Bihar is deeply tied to the fertile silts of the Ganga, the rhythm of solar solstices, and centuries of domestic care.'}
        </p>

        {/* Action Anchor Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={onExploreSignatures}
            className="px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#B04C27] text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2.5 focus:outline-hidden"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{language === 'hi' ? 'विशिष्ट व्यंजन देखें' : 'Explore Signature Dishes'}</span>
          </button>

          <button
            onClick={onExploreRegions}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#F7F2EC] border border-white/20 font-medium text-xs sm:text-sm transition-all backdrop-blur-xs flex items-center gap-2 focus:outline-hidden"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>{language === 'hi' ? 'क्षेत्रीय रसोई परंपराएं' : 'Regional Kitchens'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
