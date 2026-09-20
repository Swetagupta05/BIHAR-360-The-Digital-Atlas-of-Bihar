import React from 'react';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

interface PlacesSectionProps {
  onNavigatePlaces: () => void;
}

export const PlacesSection: React.FC<PlacesSectionProps> = ({
  onNavigatePlaces
}) => {
  const destinations = [
    {
      name: 'Nalanda Mahavihara',
      hindiName: 'नालंदा महाविहार',
      location: 'Nalanda District',
      image: '/assets/images/nalanda_university_ruins_1789937702654.jpg',
      tag: 'UNESCO World Heritage',
      description: 'The baked-brick silence of the ancient world’s greatest residential university, where ten thousand monks once questioned the stars.'
    },
    {
      name: 'Mahabodhi Temple & Bodhi Tree',
      hindiName: 'महाबोधि मंदिर व बोधिवृक्ष',
      location: 'Bodh Gaya, Gaya',
      image: '/assets/images/mahabodhi_temple_gaya_1789937719331.jpg',
      tag: 'Cradle of Enlightenment',
      description: 'The sacred pipal tree and sandstone diamond throne where human consciousness found the Middle Path 2,500 years ago.'
    },
    {
      name: 'Ashokan Pillar of Kolhua',
      hindiName: 'कोल्हुआ का अशोक स्तंभ',
      location: 'Vaishali District',
      image: '/assets/images/ashokan_pillar_vaishali_1789937849903.jpg',
      tag: 'First Republic of the World',
      description: 'A monolithic polished chunar sandstone column crowned with a solitary lion gazing towards the Buddha’s final journey.'
    },
    {
      name: 'Tomb of Sher Shah Suri',
      hindiName: 'शेरशाह सूरी का मकबरा',
      location: 'Sasaram, Rohtas',
      image: '/assets/images/sher_shah_suri_tomb_1789937780605.jpg',
      tag: 'Indo-Islamic Masterpiece',
      description: 'A majestic octagonal sandstone mausoleum rising like a stone lotus in the center of an artificial square lake.'
    },
    {
      name: 'Valmiki National Park & Tiger Reserve',
      hindiName: 'वाल्मीकि राष्ट्रीय उद्यान',
      location: 'West Champaran',
      image: '/assets/images/valmiki_forest_champaran_1789938522457.jpg',
      tag: 'Sub-Himalayan Wilderness',
      description: 'Primeval sal canopy, snow-fed Gandak waters, and Bengal tiger trails nestled against the misty Himalayan borderlands.'
    },
    {
      name: 'Barabar Rock-Cut Caves',
      hindiName: 'बराबर की प्राचीन गुफाएं',
      location: 'Jehanabad District',
      image: '/assets/images/barabar_caves_bihar_1789937792685.jpg',
      tag: '3rd Century BCE Monolithic Architecture',
      description: 'The world’s oldest surviving rock-cut cave sanctuaries, hewn from sheer granite boulders with glass-like acoustic interiors.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Sacred Sanctuaries & Ancient Geometry</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hindi-title text-[#14171A] leading-tight mb-2">
            जहाँ बिहार आपको ले जाता है
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#C85A32] italic">
            Places That Stay With You
          </p>
        </div>

        <button
          onClick={onNavigatePlaces}
          id="places-view-all-btn"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] hover:text-[#C85A32] transition-colors self-start md:self-auto group"
        >
          <span>Explore all pilgrimage & travel circuits</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Destinations Grid (3x2 large imagery cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((place, idx) => (
          <div
            key={idx}
            onClick={onNavigatePlaces}
            className="group rounded-3xl overflow-hidden bg-[#1E2124] border border-[#EADBCE]/60 flex flex-col justify-end min-h-[380px] p-6 sm:p-7 relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent" />

            <div className="relative z-10 text-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[#EADBCE] text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  {place.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#EADBCE]/80 font-mono">
                  <MapPin className="w-3 h-3 text-[#E0BA6A]" />
                  {place.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#E0BA6A] transition-colors">
                {place.name}
              </h3>

              <div className="text-xs font-hindi-text text-[#E0BA6A]">
                {place.hindiName}
              </div>

              <p className="text-xs sm:text-sm text-[#EADBCE]/90 font-light leading-relaxed line-clamp-2">
                {place.description}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#E0BA6A] font-semibold group-hover:translate-x-1 transition-transform">
                <span>View historical details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
