import React from 'react';
import { Sun, Waves, Moon, Sparkles, Music, MapPin, Heart, Shield, Utensils, ArrowRight } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';
import { Festival } from '../../types';

interface ChhathStoryProps {
  festival: Festival;
  language: 'en' | 'hi';
  onOpenDetail: () => void;
  onExploreFood?: () => void;
  onExploreDistrict?: (districtId: string) => void;
}

export const ChhathStory: React.FC<ChhathStoryProps> = ({
  festival,
  language,
  onOpenDetail,
  onExploreFood,
  onExploreDistrict
}) => {
  const [activePhase, setActivePhase] = React.useState<number>(0);

  const phases = [
    {
      day: 'DAY 1',
      titleEn: 'Nahay-Khay',
      titleHi: 'नहाय-खाय (संयम एवं शुद्धि)',
      subtitle: 'Purification of Mind, Body & Home',
      icon: Waves,
      ritualSummary:
        'Devotees begin with a sanctified bath in the holy Ganga or sacred waters. The entire house is meticulously washed. A strictly sattvic meal of Kaddu-Bhat (tender bottle gourd cooked with rock salt and desi cow ghee, paired with Arwa rice) is prepared in earthen or bronze cookware. The vrati eats once, meditating on solar purity.',
      foodFocus: 'Kaddu-Bhat & Chana Dal',
      significance: 'Detoxification and voluntary mental preparation before the demanding 36-hour fast.'
    },
    {
      day: 'DAY 2',
      titleEn: 'Kharna / Lohanda',
      titleHi: 'खरना (अंतःकरण की साधना)',
      subtitle: 'The 36-Hour Waterless Fast Commences',
      icon: Moon,
      ritualSummary:
        'A full day of nirjala (waterless) fasting. As twilight descends, the vrati prepares Rasiya (coarse rice boiled with creamy milk and organic sugarcane jaggery) over a traditional earthen chulha using dried mango wood. After silent oblations to Surya in a closed sanctum, the vrati eats the prasad with ghee rotis. From this sunset moment, not a single drop of water will pass their lips for 36 hours.',
      foodFocus: 'Rasiya (Gur Kheer) & Ghee Roti',
      significance: 'Extreme penance and disciplined control over all physical senses.'
    },
    {
      day: 'DAY 3',
      titleEn: 'Sandhya Arghya',
      titleHi: 'संध्या अर्घ्य (डूबते सूर्य की उपासना)',
      subtitle: 'Worship of the Setting Sun (Astaachalgami Surya)',
      icon: Sun,
      ritualSummary:
        'In the golden late afternoon, barefoot processions stream toward riverbanks and ponds. Men carry woven bamboo Dauras on their heads while women sing timeless folk geet. Devotees stand chest-deep in flowing water holding brass or bamboo soops filled with Thekua, sugarcane stalks, and coconuts, offering reverence to the setting sun (Astaachalgami Surya).',
      foodFocus: 'Thekua, Sugarcane, Seasonal Harvest',
      significance: 'Gratitude to the receding sun, recognizing that the setting sun will rise again tomorrow.'
    },
    {
      day: 'DAY 4',
      titleEn: 'Usha Arghya & Parana',
      titleHi: 'उषा अर्घ्य एवं पारण (उदयकालीन सूर्य)',
      subtitle: 'Dawn Light, Gratitude & Community Feast',
      icon: Sparkles,
      ritualSummary:
        'Long before dawn, thousands assemble under the morning stars at the misty water edge. As the red crest of the rising sun (Usha) breaks over the river horizon, offerings of raw milk and holy river water are made amidst conch blasts and prayers. Devotees break their 36-hour fast with ginger and prasad, and the sanctified Thekua is shared with all passersby.',
      foodFocus: 'Parana with Ginger, Raw Milk & Thekua',
      significance: 'Celebration of renewal, cosmic energy, and universal egalitarian brotherhood.'
    }
  ];

  const currentPhase = phases[activePhase];
  const CurrentIcon = currentPhase.icon;

  return (
    <section
      id="chhath-story-section"
      className="rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 lg:p-12 shadow-sm space-y-10"
    >
      {/* Header Editorial Tag & Title */}
      <div className="max-w-4xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Sun className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
          <span>{language === 'hi' ? 'विशेष सांस्कृतिक आख्यान' : 'Dedicated Cultural Archive'}</span>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight leading-tight">
          छठ — आस्था, अनुशासन और सूर्य की उपासना
        </h2>

        <p className="font-serif text-lg sm:text-xl text-[#C85A32] dark:text-[#E06C43] italic">
          "The Supreme Mahaparva of Bihar: Where millions worship the setting sun before the rising sun."
        </p>

        <p className="text-sm sm:text-base text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed max-w-3xl">
          {language === 'hi'
            ? 'छठ पूजा केवल एक पर्व नहीं, बल्कि प्रकृति, स्वच्छता, सामाजिक समानता और आत्म-अनुशासन का महायज्ञ है। इसमें न किसी पुरोहित की मध्यस्थता होती है, न किसी मूर्ति की। भक्त सीधे बहते जल में खड़े होकर प्रत्यक्ष देव सूर्य और उषा को अर्घ्य समर्पित करते हैं।'
            : 'Chhath Puja is not mediated by priests, temples, or elaborate rituals. It is an unvarnished encounter between human beings and raw nature. Devotees step into living rivers, carrying offerings woven from local bamboo and sweetened with seasonal sugarcane, expressing pure gratitude for life itself.'}
        </p>
      </div>

      {/* Hero Visual Documentary Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Atmospheric Image with Caption */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl overflow-hidden shadow-md aspect-16/10 border border-[#EADBCE] dark:border-[#2E343B]">
            <img
              src={VERIFIED_IMAGES.chhathPuja}
              alt="Devotees standing waist deep in Ganga river at sunset for Chhath Puja"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="text-[11px] font-mono tracking-wider uppercase bg-emerald-800/90 text-white px-2 py-0.5 rounded-full inline-block mb-1">
                ✓ Authentic Ghat Photography
              </span>
              <p className="text-xs sm:text-sm font-medium text-white/95">
                Sacred Sandhya Arghya at the Ganga Ghats — Millions united in quiet reverence without caste or division.
              </p>
            </div>
          </div>

          {/* Authentic Cultural Quote */}
          <blockquote className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#1E2227] border-l-4 border-[#C85A32] dark:border-[#E06C43] text-xs sm:text-sm text-[#4A453E] dark:text-[#C8BFB4] italic">
            "{festival.atmosphereQuote || 'In the pre-dawn mist along the Ganga, there is neither priest nor caste—only human devotion offering gratitude to the cosmic sun.'}"
          </blockquote>
        </div>

        {/* Right: The Core Tenets of Chhath */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8] border-b border-[#EADBCE] dark:border-[#2E343B] pb-2">
            {language === 'hi' ? 'छठ की चार मूल भावनाएं' : 'Four Pillars of Chhath'}
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
              <strong className="text-[#C85A32] dark:text-[#E06C43] font-semibold flex items-center gap-1.5">
                <Sun className="w-4 h-4" />
                1. Equal Worship of Setting & Rising Sun
              </strong>
              <p className="text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
                Most spiritual traditions honor only what is rising and ascendant. Chhath venerates the setting sun first, reminding humanity to honor decline, old age, and the cyclical nature of existence.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
              <strong className="text-[#C85A32] dark:text-[#E06C43] font-semibold flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                2. Direct Worship without Intermediaries
              </strong>
              <p className="text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
                The rituals are performed directly by the vrati and family members standing in the water, offering prayers directly to the cosmic sun without requiring priestly intermediaries on the ghats.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
              <strong className="text-[#C85A32] dark:text-[#E06C43] font-semibold flex items-center gap-1.5">
                <Waves className="w-4 h-4" />
                3. Total Environmental Reverence
              </strong>
              <p className="text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
                All offerings use biodegradable materials: bamboo soops, earthen stoves, seasonal wild tubers, whole sugarcane stalks, and turmeric plants. No plastic or artificial items are permitted.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-1">
              <strong className="text-[#C85A32] dark:text-[#E06C43] font-semibold flex items-center gap-1.5">
                <Heart className="w-4 h-4" />
                4. Collective Seva (Barefoot Community Service)
              </strong>
              <p className="text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
                City dwellers and villagers alike sweep approach roads barefoot, light pathways, and offer free milk and water to devotees carrying the sacred Daura.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Timeline for the 4-Day Ritual Sequence */}
      <div className="space-y-6 pt-4 border-t border-[#EADBCE] dark:border-[#2E343B]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] font-semibold font-mono">
              The 4-Day Sacred Cycle
            </span>
            <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-[#F5F1E8] mt-0.5">
              The Ritual Journey: From Purification to Dawn Light
            </h3>
          </div>
          <span className="text-xs text-[#7A7065] dark:text-[#A89F93]">
            Click any phase to explore rituals, cuisine, and spiritual meaning
          </span>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {phases.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activePhase === idx;

            return (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden focus:outline-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-[#1E2227] border-[#C85A32] dark:border-[#E06C43] shadow-md ring-2 ring-[#C85A32]/20'
                    : 'bg-[#F4EFE6]/70 dark:bg-[#1A1D22] hover:bg-white dark:hover:bg-[#252A30] border-[#EADBCE] dark:border-[#2E343B]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isSelected
                        ? 'bg-[#C85A32] text-white'
                        : 'bg-[#EADBCE] dark:bg-[#252A30] text-[#5A524A] dark:text-[#C8BFB4]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#8C8276] dark:text-[#A89F93] uppercase">
                    {item.day}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-sm sm:text-base text-[#1E2124] dark:text-[#F5F1E8]">
                  {language === 'hi' ? item.titleHi : item.titleEn}
                </h4>
                <p className="text-[11px] text-[#7A7065] dark:text-[#A89F93] mt-1 line-clamp-1">
                  {item.subtitle}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C85A32]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Focus Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0E8DD] dark:border-[#2E343B] pb-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-[#C85A32] dark:text-[#E06C43] flex items-center justify-center font-bold">
                <CurrentIcon className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#C85A32] dark:text-[#E06C43] font-semibold">
                  {currentPhase.day}
                </span>
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#1E2124] dark:text-[#F5F1E8]">
                  {language === 'hi' ? currentPhase.titleHi : currentPhase.titleEn}
                </h4>
              </div>
            </div>

            <div className="text-xs bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] px-3 py-1.5 rounded-lg text-[#5A524A] dark:text-[#C8BFB4]">
              <strong>Primary Sacred Food:</strong> {currentPhase.foodFocus}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-4">
              <div>
                <h5 className="text-xs uppercase tracking-wider font-semibold text-[#8C8276] dark:text-[#A89F93] mb-1">
                  How the Day is Observed:
                </h5>
                <p className="text-sm sm:text-base text-[#2D3238] dark:text-[#C8BFB4] leading-relaxed font-sans">
                  {currentPhase.ritualSummary}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#5A524A] dark:text-[#C8BFB4]">
                <strong className="text-[#C85A32] dark:text-[#E06C43] block mb-0.5">Spiritual Significance:</strong>
                {currentPhase.significance}
              </div>
            </div>

            {/* Side Card: Thekua and Offerings connection */}
            <div className="md:col-span-4 p-4 rounded-xl bg-[#F8F4EE] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] space-y-3">
              <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#1E2124] dark:text-[#F5F1E8]">
                <Utensils className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
                <span>Prasad & Sacred Items</span>
              </div>

              <div className="relative rounded-lg overflow-hidden h-28 border border-[#EADBCE] dark:border-[#2E343B]">
                <img
                  src={VERIFIED_IMAGES.thekua}
                  alt="Traditional Bihari Thekua prasad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-[11px] text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
                Thekua, made from wheat flour, ghee, and jaggery pressed onto wooden moulds, is made under absolute hygiene and never tasted beforehand.
              </p>

              {onExploreFood && (
                <button
                  onClick={onExploreFood}
                  className="w-full py-1.5 px-2 rounded-lg bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32] dark:hover:border-[#E06C43] text-[11px] font-semibold text-[#C85A32] dark:text-[#E06C43] transition-colors flex items-center justify-center gap-1"
                >
                  <span>Explore Thekua in Food Section</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Living Folk Songs & Oral Memory of Chhath */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#1E2124] text-white border border-[#2D3238] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <Music className="w-5 h-5 text-[#F4A261]" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              {language === 'hi' ? 'छठ के अमर लोकगीत' : 'The Timeless Songs of Chhath'}
            </h3>
          </div>
          <span className="text-xs text-[#EADBCE] font-mono">
            Oral tradition passed through women for centuries
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-xs sm:text-sm text-[#D4C8BC] leading-relaxed">
              No festival in India is as inextricably tied to its music as Chhath. During Kartik, every village lane, river ghat, and train station across Bihar resonates with songs popularized by the legendary Padma Bhushan <strong>Sharda Sinha</strong> and sung collectively by neighborhood women.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#F4A261] font-mono block">
                Iconic Folk Verse
              </span>
              <p className="font-serif text-sm sm:text-base text-amber-100 leading-relaxed italic">
                "काँच ही बाँस के बहँगिया, बहँगी लचकत जाए...<br />
                बाट जे पूछेला बटोहिया, बहँगी केकरा के जाए?<br />
                तू त आन्हर हउवे रे बटोहिया, बहँगी छठ माई के जाए..."
              </p>
              <p className="text-[11px] text-[#A59D93] pt-1 border-t border-white/10">
                A dialogue between a passing traveler and the devotee carrying the bamboo basket for Chhathi Maiya.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#F4A261] font-mono block">
                Sunrise Invocation Verse
              </span>
              <p className="font-serif text-sm sm:text-base text-amber-100 leading-relaxed italic">
                "केलवा के पात पर उगेलन सुरुजमल झांके-झुके...<br />
                हे सुरुजमल, अब त अरघ के बेर भइले, बाहर निकलू..."
              </p>
              <p className="text-[11px] text-[#A59D93] pt-1 border-t border-white/10">
                Sung pre-dawn while standing in chilly river water, imploring the sun god to rise from beneath the horizon.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/40 text-xs text-amber-200">
              <strong>Living Heritage Note:</strong> These songs require no classical training—women sing in unamplified natural harmony, their voices carrying across the morning mist along rivers and water bodies at dawn.
            </div>
          </div>
        </div>
      </div>

      {/* Sacred Shrines Associated with Chhath */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C85A32] dark:text-[#E06C43]" />
            <span>Sacred Shrines & River Ghats of Chhath</span>
          </h3>
          <span className="text-xs text-[#7A7065] dark:text-[#A89F93] hidden sm:inline">
            Ancient stone sun temples and perennial riverbanks
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
            <span className="text-[11px] font-mono uppercase text-[#C85A32] dark:text-[#E06C43] font-semibold">
              Aurangabad District
            </span>
            <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
              Deo Sun Temple (देव सूर्य मंदिर)
            </h4>
            <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
              An ancient stone temple unique in northern India for facing West. Hundreds of thousands gather around the Surya Kunda tank during Chhath.
            </p>
            {onExploreDistrict && (
              <button
                onClick={() => onExploreDistrict('aurangabad')}
                className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1 pt-1"
              >
                <span>View Aurangabad Dossier</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
            <span className="text-[11px] font-mono uppercase text-[#C85A32] dark:text-[#E06C43] font-semibold">
              Nalanda District
            </span>
            <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
              Baragaon Sun Temple (बड़ागांव)
            </h4>
            <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
              Situated near the ancient Nalanda ruins with the vast Surajpur lake, revered since the Gupta era for solar offerings.
            </p>
            {onExploreDistrict && (
              <button
                onClick={() => onExploreDistrict('nalanda')}
                className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1 pt-1"
              >
                <span>View Nalanda Dossier</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] space-y-2">
            <span className="text-[11px] font-mono uppercase text-[#C85A32] dark:text-[#E06C43] font-semibold">
              Patna District
            </span>
            <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
              Collectorate & Digha Ganga Ghats
            </h4>
            <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed">
              The capital's iconic riverfront spanning miles, transformed into an illuminated sanctuary of millions of earthen diyas.
            </p>
            {onExploreDistrict && (
              <button
                onClick={() => onExploreDistrict('patna')}
                className="text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center gap-1 pt-1"
              >
                <span>View Patna Dossier</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#F4EFE6] dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B]">
        <div className="space-y-0.5 text-center sm:text-left">
          <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
            Explore Detailed Chhath Dossier & Sources
          </h4>
          <p className="text-xs text-[#5A524A] dark:text-[#C8BFB4]">
            Read the complete historical, Rigvedic, and sociological documentation.
          </p>
        </div>

        <button
          onClick={onOpenDetail}
          className="px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B04C27] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center gap-2 focus:outline-hidden"
        >
          <span>Open Chhath Cultural Archive</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
