import React from 'react';
import { Utensils, ArrowRight, Award } from 'lucide-react';

interface TasteBiharSectionProps {
  onNavigateCuisine: () => void;
}

export const TasteBiharSection: React.FC<TasteBiharSectionProps> = ({
  onNavigateCuisine
}) => {
  const foods = [
    {
      name: 'Litti Chokha',
      hindiName: 'लिट्टी चोखा',
      origin: 'Bhojpur & Magadh',
      image: '/assets/images/litti_chokha_bihar_1789937732927.jpg',
      badge: 'Signature Dish',
      description: 'Hand-shaped whole-wheat globes filled with spiced roasted sattu, baked over smoldering cow-dung embers, cracked open, and dipped into warm desi ghee.'
    },
    {
      name: 'Sacred Thekua',
      hindiName: 'पवित्र ठेकुआ',
      origin: 'All Bihar (Chhath Prasad)',
      image: '/assets/images/bihari_thekua_prasad_1789938008063.jpg',
      badge: 'Chhath Mahaparva Prasad',
      description: 'Crisp, fragrant cookies sculpted from coarse whole-wheat flour, dark jaggery, cardamom, and coconut chips, pressed on carved wooden molds.'
    },
    {
      name: 'Mithila Makhana',
      hindiName: 'मिथिला मखाना',
      origin: 'Darbhanga & Madhubani',
      image: '/assets/images/mithila_makhana_kheer_1789938020193.jpg',
      badge: 'GI Tagged Heritage',
      description: 'Aquatic fox nuts cultivated in the deep perennial lotus wetlands of Mithila, roasted and popped into delicate culinary pearls.'
    },
    {
      name: 'Silao Khaja',
      hindiName: 'सिलाव का खाजा',
      origin: 'Nalanda (Silao)',
      image: '/assets/images/silao_khaja_bihar_1789937916729.jpg',
      badge: 'GI Tagged (52 Layers)',
      description: 'Multi-layered, whisper-crisp golden pastry prepared in Silao since the Buddhist era, layered with pure ghee and dipped in clear sugar syrup.'
    },
    {
      name: 'Gaya Tilkut',
      hindiName: 'गया का तिलकुट',
      origin: 'Gaya (Ramna Road)',
      image: '/assets/images/gaya_tilkut_sweet_1789938032533.jpg',
      badge: 'Winter Artisan Sweet',
      description: 'Hand-pounded roasted white sesame seeds and melted winter sugarcane jaggery beaten rhythmically into feather-light, brittle discs.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[#C85A32] text-xs uppercase tracking-widest font-bold mb-2.5">
            <Utensils className="w-3.5 h-3.5" />
            <span>Gastronomic Wisdom & Regional Terroir</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-hindi-title text-[#14171A] dark:text-[#F5F1E8] leading-tight mb-2">
            स्वाद से पहचानिए बिहार
          </h2>
          
          <p className="text-xl sm:text-2xl font-serif text-[#C85A32] italic">
            Taste Bihar
          </p>
        </div>

        <button
          onClick={onNavigateCuisine}
          id="taste-view-all-btn"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] dark:text-[#F5F1E8] hover:text-[#C85A32] transition-colors self-start md:self-auto group"
        >
          <span>Explore all Bihari culinary traditions</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Visual Food Showcase (5 curated cards with rich photography) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {foods.map((food, idx) => (
          <div
            key={idx}
            onClick={onNavigateCuisine}
            className="group rounded-3xl overflow-hidden bg-white dark:bg-[#1A1D20] border border-[#EADBCE]/80 dark:border-[#2E343B] flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Food Image */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#1E2124]">
              <img
                src={food.image}
                alt={food.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#14171A]/85 text-[#E0BA6A] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs">
                  {food.badge}
                </span>
              </div>
            </div>

            {/* Food Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8C5B3E] dark:text-[#E0A882] font-mono block">
                  {food.origin}
                </span>
                <h3 className="text-base font-serif font-bold text-[#14171A] dark:text-[#F5F1E8] group-hover:text-[#C85A32] transition-colors mt-0.5">
                  {food.name}
                </h3>
                <h4 className="text-xs font-hindi-text text-[#C85A32] font-semibold">
                  {food.hindiName}
                </h4>
                <p className="text-xs text-[#4B525A] dark:text-[#C8BFB4] font-light leading-relaxed mt-2 line-clamp-3">
                  {food.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#EADBCE]/50 dark:border-[#2E343B] flex items-center justify-between text-[11px] text-[#C85A32] font-semibold">
                <span>View recipe & roots</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
