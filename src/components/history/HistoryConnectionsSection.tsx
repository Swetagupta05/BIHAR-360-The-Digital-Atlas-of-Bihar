import React, { useState } from 'react';
import { Compass, Users, Landmark, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HistoryConnectionsSectionProps {
  language: 'en' | 'hi';
  onSelectDistrictById?: (id: string) => void;
  onSelectPersonality?: (personalityId: string) => void;
  onSelectHeritageSite?: (siteId: string) => void;
}

interface HistoricalConnectionItem {
  id: string;
  category: 'person' | 'place' | 'heritage';
  title: string;
  hindiTitle: string;
  eraContext: string;
  significance: string;
  hindiSignificance: string;
  targetId: string;
  iconType: string;
}

const HISTORICAL_CONNECTIONS: HistoricalConnectionItem[] = [
  {
    id: 'ashoka-pataliputra',
    category: 'person',
    title: 'Emperor Ashoka',
    hindiTitle: 'सम्राट अशोक',
    eraContext: 'Mauryan Empire (c. 268 – 232 BCE)',
    significance:
      'Governed the subcontinental Mauryan empire from Pataliputra; renounced violent conquest after Kalinga and inscribed moral Dhamma edicts on monolithic polished pillars across Vaishali and Champaran.',
    hindiSignificance:
      'पाटलिपुत्र से अखिल भारतीय साम्राज्य का शासन; कलिंग युद्धोपरांत धम्म-विजय का वरण और वैशाली व चंपारण में अखंड पाषाण स्तंभों पर अभिलेख उत्कीर्णन।',
    targetId: 'samrat-ashoka',
    iconType: '👑'
  },
  {
    id: 'aryabhata-pataliputra',
    category: 'person',
    title: 'Aryabhata I',
    hindiTitle: 'आर्यभट्ट प्रथम',
    eraContext: 'Classical Gupta Era (476 – 550 CE)',
    significance:
      'Pioneered Indian mathematical trigonometry and heliocentric planetary models at Kusumpura (Patna) and Taregana, authoring the Aryabhatiya in 499 CE.',
    hindiSignificance:
      'कुसुमपुर (पटना) और तारेगना में त्रिकोणमिति, पाई के मान और पृथ्वी के घूर्णन का वैज्ञानिक प्रतिपादन; 499 ई. में आर्यभटीय की रचना।',
    targetId: 'aryabhata',
    iconType: '🔭'
  },
  {
    id: 'sher-shah-sasaram',
    category: 'person',
    title: 'Sher Shah Suri',
    hindiTitle: 'शेरशाह सूरी',
    eraContext: 'Sur Empire (1540 – 1545 CE)',
    significance:
      'Reformed northern Indian civil administration from Sasaram, introduced the silver Rupiya (ancestor of the modern Rupee), and built the Grand Trunk Road highway.',
    hindiSignificance:
      'सासाराम से संपूर्ण उत्तर भारत के प्रशासन का पुनर्गठन, चांदी के मानक "रुपिया" की शुरुआत, और सड़क-ए-आज़म का निर्माण।',
    targetId: 'sher-shah-suri',
    iconType: '⚔️'
  },
  {
    id: 'kunwar-singh-shahabad',
    category: 'person',
    title: 'Veer Kunwar Singh',
    hindiTitle: 'वीर कुंवर सिंह',
    eraContext: '1857 Uprising (1777 – 1858 CE)',
    significance:
      'Led the armed 1857 resistance against British colonial forces across Bhojpur, Rohtas, and central India at the age of 80 through brilliant guerrilla tactics.',
    hindiSignificance:
      '80 वर्ष की आयु में 1857 के प्रथम स्वतंत्रता संग्राम में जगदीशपुर व शाहाबाद से ब्रिटिश सेना के विरुद्ध छापामार युद्ध का अप्रतिम नेतृत्व।',
    targetId: 'veer-kunwar-singh',
    iconType: '🐎'
  },
  {
    id: 'rajendra-prasad-siwan',
    category: 'person',
    title: 'Dr. Rajendra Prasad',
    hindiTitle: 'डॉ. राजेंद्र प्रसाद',
    eraContext: 'Freedom Movement & Republic (1884 – 1963 CE)',
    significance:
      'Key organizer of the 1917 Champaran Satyagraha, President of the Constituent Assembly that created the Constitution, and first President of independent India.',
    hindiSignificance:
      '1917 चंपारण सत्याग्रह के प्रमुख सूत्रधार, संविधान सभा के अध्यक्ष, और स्वतंत्र भारत के प्रथम राष्ट्रपति।',
    targetId: 'rajendra-prasad',
    iconType: '📜'
  },
  {
    id: 'nalanda-mahavihara-place',
    category: 'heritage',
    title: 'Nalanda Mahavihara Ruins',
    hindiTitle: 'नालंदा महाविहार के पुरातात्विक अवशेष',
    eraContext: '5th – 12th Century CE',
    significance:
      'UNESCO World Heritage residential monastic university excavated across 23 hectares, showcasing ancient drainage systems, meditation cells, and stupa architecture.',
    hindiSignificance:
      'यूनेस्को विश्व धरोहर स्थल; 5वीं से 12वीं सदी तक एशिया का प्रमुख अंतरराष्ट्रीय ज्ञान केंद्र, जहाँ प्राचीन जल-प्रणाली व मठों के अवशेष विद्यमान हैं।',
    targetId: 'nalanda-ruins',
    iconType: '🏛️'
  },
  {
    id: 'mahabodhi-gaya-place',
    category: 'heritage',
    title: 'Mahabodhi Temple Complex',
    hindiTitle: 'महाबोधि मंदिर परिसर, बोधगया',
    eraContext: '3rd Century BCE – Present',
    significance:
      'UNESCO World Heritage Site commemorating Siddhartha Gautama’s Enlightenment, preserving Ashoka’s 3rd-century BCE stone Vajrasana and the sacred Bodhi Tree.',
    hindiSignificance:
      'यूनेस्को विश्व धरोहर; तथागत बुद्ध के संबोधि स्थल पर सम्राट अशोक द्वारा स्थापित वज्रासन और पावन बोधिवृक्ष का संरक्षण।',
    targetId: 'mahabodhi-temple',
    iconType: '🪷'
  },
  {
    id: 'vaishali-pillar-place',
    category: 'heritage',
    title: 'Kolhua Lion Pillar & Stupa',
    hindiTitle: 'कोल्हुआ का अशोक स्तंभ एवं स्तूप',
    eraContext: '3rd Century BCE',
    significance:
      'A completely intact monolithic polished sandstone pillar crowned by a bell capital and seated lion, marking Ashoka’s imperial highway through the ancient Vajji capital.',
    hindiSignificance:
      'वैशाली में मौर्यकालीन चुनार बलुआ पत्थर का पूर्णतः सुरक्षित सिंह स्तंभ, जो प्राचीन वज्जि महासंघ के मार्ग को चिन्हित करता है।',
    targetId: 'vaishali-ashokan-pillar',
    iconType: '🦁'
  }
];

export const HistoryConnectionsSection: React.FC<HistoryConnectionsSectionProps> = ({
  language,
  onSelectDistrictById,
  onSelectPersonality,
  onSelectHeritageSite
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'person' | 'heritage'>('all');

  const filteredItems = HISTORICAL_CONNECTIONS.filter(
    item => filterCategory === 'all' || item.category === filterCategory
  );

  const handleAction = (item: HistoricalConnectionItem) => {
    if (item.category === 'person' && onSelectPersonality) {
      onSelectPersonality(item.targetId);
    } else if (item.category === 'heritage' && onSelectHeritageSite) {
      onSelectHeritageSite(item.targetId);
    }
  };

  return (
    <section id="history-connections-section" className="space-y-8 mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#C85A32]/30 text-[#C85A32] dark:text-[#E06C43] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'इतिहास के सूत्र' : 'Historical Intersections'}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
            {language === 'hi'
              ? 'इतिहास × विभूतियाँ × धरोहर'
              : 'History ↔ People ↔ Heritage Matrix'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'प्रत्येक ऐतिहासिक मोड़ किसी जीवित व्यक्तित्व या भौतिक धरोहर से जुड़ा है। जानिए कौन-सा स्मारक या व्यक्तित्व किस कालखंड का जीवंत प्रमाण है।'
              : 'Every major historical turning point in Bihar connects directly to a verified personality or surviving architectural monument in our atlas.'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="inline-flex rounded-xl bg-[#F5EFE6] dark:bg-[#252A30] p-1 border border-[#EADBCE] dark:border-[#2E343B]">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterCategory === 'all'
                ? 'bg-white dark:bg-[#16191D] text-[#C85A32] shadow-xs'
                : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
            }`}
          >
            All Connections
          </button>
          <button
            onClick={() => setFilterCategory('person')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterCategory === 'person'
                ? 'bg-white dark:bg-[#16191D] text-[#C85A32] shadow-xs'
                : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
            }`}
          >
            Historical Figures
          </button>
          <button
            onClick={() => setFilterCategory('heritage')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterCategory === 'heritage'
                ? 'bg-white dark:bg-[#16191D] text-[#C85A32] shadow-xs'
                : 'text-[#5A524A] dark:text-[#C8BFB4] hover:text-[#1E2124]'
            }`}
          >
            Monuments & Sites
          </button>
        </div>
      </div>

      {/* Grid of Connections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => handleAction(item)}
            className="group cursor-pointer rounded-2xl border border-[#EADBCE] dark:border-[#2E343B] bg-white dark:bg-[#16191D] p-5 hover:border-[#C85A32] dark:hover:border-[#C85A32] transition-all hover:shadow-md flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{item.iconType}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#F5EFE6] dark:bg-[#252A30] text-[#8C8276] dark:text-[#A89F93]">
                  {item.category === 'person' ? 'Personality' : 'Heritage Site'}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                  {language === 'hi' ? item.hindiTitle : item.title}
                </h3>
                <span className="text-[10px] font-mono text-[#C85A32] block mt-0.5">
                  {item.eraContext}
                </span>
              </div>

              <p className="text-[11px] text-[#5A524A] dark:text-[#C8BFB4] leading-relaxed line-clamp-3">
                {language === 'hi' ? item.hindiSignificance : item.significance}
              </p>
            </div>

            <div className="pt-2 border-t border-[#F0E8DD] dark:border-[#2E343B] flex items-center justify-between text-[11px] text-[#C85A32] font-semibold">
              <span>{item.category === 'person' ? 'View Biography' : 'View Monument'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
