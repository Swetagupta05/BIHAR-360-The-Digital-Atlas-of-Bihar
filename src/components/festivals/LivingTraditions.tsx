import React from 'react';
import { Music, Palette, Utensils, Users, Waves, Package, ArrowRight, Sparkles } from 'lucide-react';
import { VERIFIED_IMAGES } from '../../data/media';

interface LivingTraditionsProps {
  language: 'en' | 'hi';
  onExploreFoodTab?: () => void;
  onExploreArtsTab?: () => void;
}

export const LivingTraditions: React.FC<LivingTraditionsProps> = ({
  language,
  onExploreFoodTab,
  onExploreArtsTab
}) => {
  const traditions = [
    {
      id: 'folk-songs',
      titleEn: 'Oral Memory & Folk Songs',
      titleHi: 'लोकगीत एवं मौखिक परंपरा',
      subtitle: 'From Sharda Sinha to Village Courtyards',
      icon: Music,
      image: VERIFIED_IMAGES.chhathPuja,
      description:
        'In Bihar, festivals live in women’s voices. No festival requires an orchestra; rather, songs like Sohar (celebrating birth), Samdaun (farewell ballads), and Chhathi Maiya geet are passed down matrilineally across centuries, preserving dialect nuances and emotional memory without written scripts.',
      highlight: 'Sung in natural unison without amplification at dawn along riverbanks.'
    },
    {
      id: 'ritual-art',
      titleEn: 'Ritual Floor & Wall Art (Aripan & Kohbar)',
      titleHi: 'अरिपन एवं कोहबर (मांगलिक लोककला)',
      subtitle: 'Sanctifying the Sacred Ground',
      icon: Palette,
      image: VERIFIED_IMAGES.madhubani,
      description:
        'Before any ritual begins in Mithila and Bhojpur, the earth itself is consecrated. Women draw Aripan floor motifs using ground raw rice paste (Pithar) and vermilion, depicting lotus flowers, fish, and cosmic chakras. During weddings and Vivah Panchami, the Kohbar room is painted with protective flora and fauna.',
      highlight: 'Every line is drawn using bare fingers or bamboo twigs.',
      action: onExploreArtsTab ? { label: 'Explore Madhubani Art in Arts Section', onClick: onExploreArtsTab } : undefined
    },
    {
      id: 'seasonal-food',
      titleEn: 'Sacred Seasonal Food Heritage',
      titleHi: 'ऋतु अनुकूल पावन प्रसाद',
      subtitle: 'Thekua, Tilkut & Earthen-Pot Rasiya',
      icon: Utensils,
      image: VERIFIED_IMAGES.thekua,
      description:
        'Bihari festival food is an ancient lesson in nutritional climatology. Crisp jaggery Thekua provides sustaining energy during fasting; winter Gaya Tilkut warms the body with sesame oil; and earthenware Rasiya cooks gently over mango wood embers without artificial flavoring.',
      highlight: 'Strictly zero-preservative, seasonal, and cooked in pure cow ghee or earthen vessels.',
      action: onExploreFoodTab ? { label: 'Explore Festival Delicacies in Food Section', onClick: onExploreFoodTab } : undefined
    },
    {
      id: 'bamboo-crafts',
      titleEn: 'Eco-Crafts: Bamboo Daura & Soop',
      titleHi: 'बांस के दौरा एवं सूप',
      subtitle: 'Biodegradable Rural Craftsmanship',
      icon: Package,
      image: VERIFIED_IMAGES.sikkiCraft,
      description:
        'Bihar’s festivals mandate completely biodegradable ritual containers. Woven bamboo winnowing baskets (Soop) and deep round baskets (Daura) are woven by rural artisans weeks before Chhath, ensuring an organic economic cycle that sustains rural craft families.',
      highlight: 'Zero plastic—every single vessel returns naturally to the soil.'
    },
    {
      id: 'sacred-ghats',
      titleEn: 'Sacred Water Bodies & River Ghats',
      titleHi: 'पवित्र नदी तट एवं पोखरि',
      subtitle: 'Ganga, Gandak, Falgu & Village Pokhar',
      icon: Waves,
      image: VERIFIED_IMAGES.sonepurMela,
      description:
        'Water is the ultimate sanctifier in Bihar. From the expansive sandy confluences of Sonepur to the subterranean sands of Gaya’s Falgu and Mithila’s thousands of village ponds, the riverbank transforms into an open-air temple where all citizens stand together as equals.',
      highlight: 'Living aquatic ecosystems celebrated as divine mother entities.'
    },
    {
      id: 'rural-melas',
      titleEn: 'Rural Melas & Community Carnivals',
      titleHi: 'ग्रामीण मेले एवं जन समागम',
      subtitle: 'Where Pastoral Life Celebrates Together',
      icon: Users,
      image: VERIFIED_IMAGES.pitrapaksha,
      description:
        'Melas in Bihar are the heartbeat of social cohesion. The month-long Sonepur cattle fair, the Gaya Pitrapaksha congregation, and local winter haats bring together farmers, artisans, performers, and travelers in an open-sky marketplace of culture, cattle trading, and folk theater.',
      highlight: 'Living continuity of Mauryan-era trade routes and pastoral gatherings.'
    }
  ];

  return (
    <section
      id="living-traditions-section"
      className="space-y-8 rounded-3xl border border-[#EADBCE] dark:border-[#2E343B] bg-[#FBF9F5] dark:bg-[#16191D] p-6 sm:p-10 lg:p-12 shadow-xs"
    >
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
          <span>{language === 'hi' ? 'दैनिक जीवन से जुड़ाव' : 'Cultural Fabric of Bihar'}</span>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
          {language === 'hi' ? 'जहाँ परंपरा आज भी जीवित है' : 'Where Tradition is Still Alive'}
        </h2>

        <p className="text-sm sm:text-base text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
          {language === 'hi'
            ? 'बिहार में पर्व केवल साल में एक दिन मनाने के लिए नहीं आते। वे यहाँ की मिट्टी, संगीत, लोककला, रसोई, नदी तटों और पारिवारिक रिश्तों के ताने-बाने में सांस लेते हैं।'
            : 'In Bihar, festivals do not exist in isolation from daily life. They shape how homes are swept, what pots are fired on potters’ wheels, which bamboo shoots are woven, and what songs mothers teach their children under the night sky.'}
        </p>
      </div>

      {/* Grid of 6 Living Traditions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {traditions.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#1E2227] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative h-44 w-full bg-[#1E2124] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 dark:bg-[#1E2227]/90 backdrop-blur-xs flex items-center justify-center text-[#C85A32] dark:text-[#E06C43]">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-200 block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif font-bold text-base text-white">
                    {language === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B] space-y-2">
                  <div className="text-[11px] text-[#C85A32] dark:text-[#E06C43] font-semibold flex items-start gap-1.5">
                    <span className="text-sm leading-none">•</span>
                    <span>{item.highlight}</span>
                  </div>

                  {item.action && (
                    <button
                      onClick={item.action.onClick}
                      className="w-full py-1.5 px-2 rounded-lg bg-[#FBF9F5] dark:bg-[#252A30] border border-[#EADBCE] dark:border-[#2E343B] hover:border-[#C85A32] dark:hover:border-[#E06C43] text-[11px] font-semibold text-[#C85A32] dark:text-[#E06C43] transition-colors flex items-center justify-center gap-1"
                    >
                      <span>{item.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
