import React from 'react';
import { Palette, ArrowRight, Sparkles } from 'lucide-react';

interface LivingArtsSectionProps {
  onNavigateArts: () => void;
}

export const LivingArtsSection: React.FC<LivingArtsSectionProps> = ({
  onNavigateArts
}) => {
  const arts = [
    {
      name: 'Mithila / Madhubani Painting',
      hindiName: 'मिथिला (मधुबनी) चित्रकला',
      region: 'Madhubani & Darbhanga (Mithila)',
      image: '/assets/images/madhubani_mithila_painting_1789937745005.jpg',
      badge: 'GI Tag #31',
      description: 'Drawn freehand using twigs, matchsticks, and natural pigments from soot, flowers, and leaves. Features bold line-work (Kachni) and lush color fields (Bharni) depicting cosmology, fertility, and nature.'
    },
    {
      name: 'Manjusha Scroll Painting',
      hindiName: 'मंजूषा अंग चित्रकला',
      region: 'Bhagalpur (Anga Region)',
      image: '/assets/images/manjusha_art_bihar_1789937931195.jpg',
      badge: 'Anga Folk Narrative',
      description: 'India’s only sequential comic-strip style folk art executed in strictly three sacred colors: Pink, Green, and Yellow. Tells the epic folklore of Behula-Bishahari with snake and aquatic motifs.'
    },
    {
      name: 'Sujani Narrative Embroidery',
      hindiName: 'सुजनी कशीदाकारी',
      region: 'Muzaffarpur & Sitamarhi',
      image: '/assets/images/sujani_embroidery_bihar_1789937939588.jpg',
      badge: 'GI Tag #74',
      description: 'Layered antique cloth stitched with colored running threads into vibrant embroidered tapestries that document women’s lives, dreams, and domestic folk narratives.'
    },
    {
      name: 'Sikki Golden Grass Craft',
      hindiName: 'सिक्की घास शिल्पकला',
      region: 'North Bihar Wetlands',
      image: '/assets/images/sikki_grass_craft_bihar_1789938076910.jpg',
      badge: 'Indigenous Wetland Art',
      description: 'Wild riparian golden reeds harvested from marshlands, dyed with lacquer pigments, and hand-coiled into lightweight storage vessels and ritual boxes.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
            <Palette className="w-3.5 h-3.5" />
            <span>Living Traditions & Indigenous Crafts</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hindi-title text-[#14171A] dark:text-[#F5F1E8] leading-tight mb-2">
            बिहार की जीवित कला
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#C85A32] italic">
            Living Arts of Bihar
          </p>
        </div>

        <button
          onClick={onNavigateArts}
          id="arts-view-all-btn"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors self-start md:self-auto group"
        >
          <span>Discover Bihar’s folk arts</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Featured Masterpiece: Mithila Painting (Large Visual + Story) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5EFE6] dark:bg-[#1A1D20] rounded-3xl p-6 sm:p-10 border border-[#EADBCE]/80 dark:border-[#2E343B] shadow-xs mb-8 transition-colors">
        <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md bg-[#1E2124] relative h-72 sm:h-96">
          <img
            src="/assets/images/madhubani_mithila_painting_1789937745005.jpg"
            alt="Mithila Madhubani handmade artwork"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle decorative geometric border overlay accent */}
          <div className="absolute inset-0 pointer-events-none border-8 border-white/20" />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-[10px] font-bold uppercase tracking-wider">
              GI Tag #31 Heritage
            </span>
            <span className="text-xs text-[#8C5B3E] dark:text-[#E0A882] font-mono">Mithila Cultural Sphere</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#14171A] dark:text-[#F5F1E8]">
            Mithila (Madhubani) Painting
          </h3>

          <h4 className="text-base font-hindi-text text-[#A54420] dark:text-[#E06C43]">
            मिथिला चित्रकला — दीवारों से वैश्विक कैनवास तक
          </h4>

          <p className="text-xs sm:text-sm text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed">
            Originally created by women on the freshly plastered mud walls of bridal chambers (Kohbar) using crushed rice paste, lamp soot, and natural plant dyes. Every motif—fish for fertility, peacocks for beauty, lotus for purity—carries philosophical meaning.
          </p>

          <div className="pt-2">
            <button
              onClick={onNavigateArts}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#C85A32] hover:text-[#A54420] transition-colors"
            >
              <span>Explore techniques & styles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3 Supporting Folk Traditions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {arts.slice(1).map((art, idx) => (
          <div
            key={idx}
            onClick={onNavigateArts}
            className="group rounded-3xl bg-white dark:bg-[#1A1D20] border border-[#EADBCE]/80 dark:border-[#2E343B] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-48 w-full overflow-hidden bg-[#1E2124]">
              <img
                src={art.image}
                alt={art.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#14171A]/80 text-[#E0BA6A] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs">
                  {art.badge}
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <span className="text-[10px] text-[#8C5B3E] dark:text-[#E0A882] font-mono uppercase block">
                  {art.region}
                </span>
                <h4 className="text-base font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors mt-0.5">
                  {art.name}
                </h4>
                <div className="text-xs font-hindi-text text-[#C85A32]">
                  {art.hindiName}
                </div>
                <p className="text-xs text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed mt-2 line-clamp-3">
                  {art.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EADBCE]/60 dark:border-[#2E343B] flex items-center justify-between text-xs text-[#C85A32] font-semibold">
                <span>View art form</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
