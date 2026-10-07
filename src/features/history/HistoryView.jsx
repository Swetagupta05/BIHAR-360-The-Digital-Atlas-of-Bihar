import React, { useState } from 'react';
import { HISTORICAL_ERAS } from '../../data/history';
import { HistoryHero } from '../../components/history/HistoryHero';
import { HistoricalOrientation } from '../../components/history/HistoricalOrientation';
import { EraNavigator } from '../../components/history/EraNavigator';
import { TimelineChapter } from '../../components/history/TimelineChapter';
import { HistoryConnectionsSection } from '../../components/history/HistoryConnectionsSection';
import { EventDetailModal } from '../../components/history/EventDetailModal';
import { ShieldCheck } from 'lucide-react';

export const HistoryView = ({
  language = 'en',
  onSelectDistrictById,
  onSelectPersonality,
  onSelectHeritageSite,
  onNavigateTab
}) => {
  const [selectedEraId, setSelectedEraId] = useState('all');
  const [activeEvent, setActiveEvent] = useState(null);

  const displayedEras =
    selectedEraId === 'all'
      ? HISTORICAL_ERAS
      : HISTORICAL_ERAS.filter(era => era.id === selectedEraId);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEraFilter = (eraId) => {
    setSelectedEraId(eraId);
    if (eraId !== 'all') {
      const el = document.getElementById(`era-${eraId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="pb-12 animate-fade-in">
      {/* 1. Hero Section */}
      <HistoryHero
        language={language}
        onExploreTimeline={() => scrollToSection('timeline-chapters-container')}
        onExploreEras={() => scrollToSection('eras-navigator-section')}
        onExploreConnections={() => scrollToSection('history-connections-section')}
      />

      {/* 2. Historical Orientation: Civilizational Flow vs Modern Borders */}
      <HistoricalOrientation language={language} />

      {/* 3. Sticky Era Navigator */}
      <EraNavigator
        eras={HISTORICAL_ERAS}
        selectedEraId={selectedEraId}
        onSelectEra={handleSelectEraFilter}
        language={language}
      />

      {/* 4. Timeline Chapters */}
      <div id="timeline-chapters-container" className="space-y-12 mb-16">
        {displayedEras.map((era, index) => (
          <TimelineChapter
            key={era.id}
            era={era}
            index={index}
            language={language}
            onSelectEvent={setActiveEvent}
            onSelectDistrictById={onSelectDistrictById}
            onSelectPersonality={onSelectPersonality}
            onSelectHeritageSite={onSelectHeritageSite}
          />
        ))}
      </div>

      {/* 5. History ↔ People ↔ Heritage Matrix */}
      <HistoryConnectionsSection
        language={language}
        onSelectDistrictById={onSelectDistrictById}
        onSelectPersonality={onSelectPersonality}
        onSelectHeritageSite={onSelectHeritageSite}
      />

      {/* 6. Historiographical Methodology & Citation Footer */}
      <section className="mt-16 pt-8 border-t border-[#EADBCE] dark:border-[#2E343B] text-xs text-[#8C8276] dark:text-[#A89F93]">
        <div className="rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] p-6 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-[#1E2124] dark:text-[#F5F1E8]">
            <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
            <span>Historiographical Standards & Archaeological Verification</span>
          </div>

          <p className="leading-relaxed">
            The Historical Timeline of Bihar 360 is grounded strictly in authenticated primary sources, epigraphy, and peer-reviewed archaeological reports:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="space-y-1">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block">
                Archaeological Reports
              </span>
              <p className="text-[11px] leading-relaxed">
                Archaeological Survey of India (ASI) memoirs; K.P. Jayaswal Research Institute excavations at Vaishali, Kumrahar, and Antichak; UNESCO World Heritage evaluation dossiers for Bodh Gaya and Nalanda.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block">
                Epigraphy & Inscriptions
              </span>
              <p className="text-[11px] leading-relaxed">
                <em>Corpus Inscriptionum Indicarum</em> (Inscriptions of Asoka, Vol. I); Barabar Cave Prakrit dedications; Mundeshwari stone inscription of c. 635 CE.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block">
                Primary Chronicles
              </span>
              <p className="text-[11px] leading-relaxed">
                Megasthenes’ <em>Indica</em> fragments; Xuanzang’s <em>Datang Xiyu Ji</em>; Abbas Khan Sarwani’s <em>Tarikh-i-Sher Shahi</em>; Abul Fazl’s <em>Ain-i-Akbari</em>.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-[#1E2124] dark:text-[#F5F1E8] block">
                Archival Records
              </span>
              <p className="text-[11px] leading-relaxed">
                National Archives of India; Bihar State Archives (1857 Mutiny Dispatches, 1912 Proclamation, 1917 Champaran depositions, 1942 Secretariat Firing Inquiry).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Event Detail Modal */}
      {activeEvent && (
        <EventDetailModal
          event={activeEvent}
          onClose={() => setActiveEvent(null)}
          language={language}
          onSelectDistrictById={onSelectDistrictById}
          onSelectPersonality={onSelectPersonality}
          onSelectHeritageSite={onSelectHeritageSite}
        />
      )}
    </div>
  );
};
