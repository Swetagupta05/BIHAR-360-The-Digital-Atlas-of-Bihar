import React from 'react';
import { ArrowRight, History, Calendar } from 'lucide-react';

interface HistoryTimelineSectionProps {
  onNavigateHistory: () => void;
}

export const HistoryTimelineSection: React.FC<HistoryTimelineSectionProps> = ({
  onNavigateHistory
}) => {
  const epochs = [
    {
      era: '6th Century BCE',
      title: 'Vedic Republics & The Licchavi',
      hindiTitle: 'वैशाली एवं विश्व का प्रथम गणतंत्र',
      description: 'Vaishali establishes the world’s first recorded democratic assembly (Sansthagara) under the Licchavis.'
    },
    {
      era: '528 BCE',
      title: 'The Great Awakening: Buddha & Mahavira',
      hindiTitle: 'बोधगया में बुद्धत्व एवं महावीर का अहिंसा संदेश',
      description: 'Siddhartha Gautama attains supreme Enlightenment under the Bodhi Tree in Gaya; Lord Mahavira codifies Ahimsa.'
    },
    {
      era: '322 – 185 BCE',
      title: 'The Maurya Empire & Ashoka’s Dhamma',
      hindiTitle: 'मौर्य साम्राज्य एवं पाटलिपुत्र की आभा',
      description: 'Chandragupta and Chanakya govern India from Pataliputra; Emperor Ashoka renounces war and erects edicts of compassion.'
    },
    {
      era: '5th – 12th Century CE',
      title: 'Nalanda & Vikramshila Golden Age',
      hindiTitle: 'नालंदा व विक्रमशिला का विश्व ज्ञान केंद्र',
      description: 'Global epicenters of philosophy, logic, medicine, and mathematics that drew scholars across Asia for seven centuries.'
    },
    {
      era: '16th Century CE',
      title: 'Medieval Reforms & Sher Shah Suri',
      hindiTitle: 'शेरशाह सूरी एवं सासाराम की वास्तुकला',
      description: 'Reformed currency with the silver Rupiya, laid the Grand Trunk Road, and raised the colossal floating octagonal mausoleum.'
    },
    {
      era: '1917 – 1974 CE',
      title: 'Champaran to the Total Revolution',
      hindiTitle: 'चंपारण सत्याग्रह से जेपी आंदोलन तक',
      description: 'Mahatma Gandhi tests Satyagraha on Champaran soil in 1917; Jayaprakash Narayan launches the fight for democracy in 1974.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6] dark:bg-[#141619] border-y border-[#EADBCE]/70 dark:border-[#2E343B] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
              <History className="w-3.5 h-3.5" />
              <span>Epochs of Civilizational Thought</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-hindi-title text-[#14171A] dark:text-[#F5F1E8] leading-tight mb-2">
              बिहार — समय के पार
            </h2>
            <p className="text-xl sm:text-2xl font-serif text-[#C85A32] italic">
              Bihar Through Time
            </p>
          </div>

          <button
            onClick={onNavigateHistory}
            id="history-view-all-btn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors self-start md:self-auto group"
          >
            <span>Explore Bihar’s full history</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2-Column Editorial Showcase: Visual on left, Interactive Vertical Timeline on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-[#EADBCE] dark:border-[#2E343B] bg-[#1E2124]">
            <img
              src="/assets/images/mahabodhi_temple_gaya_1789937719331.jpg"
              alt="Mahabodhi Temple shikhara at Bodh Gaya where the Buddha sat under the sacred Bodhi tree"
              referrerPolicy="no-referrer"
              className="w-full h-[460px] sm:h-[540px] object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#E0BA6A] text-[#14171A] text-[10px] font-bold uppercase tracking-wider">
                Sanctuary of Awakening
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Mahabodhi Temple Complex
              </h3>
              <p className="text-xs sm:text-sm text-[#EADBCE]/90 font-light leading-relaxed">
                UNESCO World Heritage site enclosing the sacred Bodhi Tree and the Diamond Throne (Vajrasana) placed by Emperor Ashoka in the 3rd century BCE.
              </p>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-6 relative pl-6 sm:pl-8 border-l-2 border-[#C85A32]/30">
            {epochs.map((epoch, index) => (
              <div 
                key={index} 
                className="relative group transition-all duration-200"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#F5EFE6] dark:bg-[#141619] border-2 border-[#C85A32] group-hover:scale-125 group-hover:bg-[#C85A32] transition-all" />

                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-xs font-mono font-bold text-[#C85A32] uppercase tracking-wider">
                      {epoch.era}
                    </span>
                    <span className="text-xs text-[#8C5B3E] dark:text-[#E0A882] font-medium hidden sm:inline">•</span>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors">
                      {epoch.title}
                    </h4>
                  </div>
                  
                  <div className="text-xs font-hindi-text text-[#8C5B3E] dark:text-[#E0A882]">
                    {epoch.hindiTitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed pt-0.5">
                    {epoch.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <button
                onClick={onNavigateHistory}
                className="px-6 py-2.5 rounded-full bg-[#1E2124] dark:bg-[#2C3138] hover:bg-black dark:hover:bg-[#3D454F] text-white text-xs font-semibold tracking-wide transition-all shadow-md flex items-center gap-2"
              >
                <span>Explore Bihar’s history →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
