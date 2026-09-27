import React from 'react';
import { Sparkles, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Dish } from '../../types';

interface FoodFestivalSectionProps {
  dishes: Dish[];
  language: 'en' | 'hi';
  onSelectDish: (dish: Dish) => void;
  onNavigateTab?: (tab: string) => void;
}

export const FoodFestivalSection: React.FC<FoodFestivalSectionProps> = ({
  dishes,
  language,
  onSelectDish,
  onNavigateTab
}) => {
  const festivalLinks = [
    {
      id: 'chhath-puja',
      festivalName: 'Chhath Puja Mahaparva',
      hindiName: 'छठ महापर्व',
      month: 'Kartik (October / November)',
      ritualFocus: 'Veneration of Surya & Chhathi Maiya',
      sacredFoods: 'Thekua, Rasiya (jaggery kheer), newly harvested sugarcane, and seasonal fruits.',
      narrative:
        'The absolute standard of ritual cleanliness (Pavitrata). Cooked on consecrated clay stoves using mango wood firewood, the vrati prepares the jaggery-wheat Thekua and golden Rasiya without speaking, offering the first fruits of the soil directly to the rising and setting sun.',
      dishIds: ['thekua']
    },
    {
      id: 'makar-sankranti',
      festivalName: 'Makar Sankranti',
      hindiName: 'मकर संक्रांति',
      month: 'Paush / Magh (January 14)',
      ritualFocus: 'Solar Transit into Uttarayan & Paddy Harvest',
      sacredFoods: 'Dahi-Chura, Gaya Tilkut, Tilwa, Til Ladoo, and evening Khichdi with Chaar Yaar.',
      narrative:
        'A festival celebrated entirely through food and solar reverence. Families break the morning chill with bowls of freshly beaten Katarani Chura submerged in clay-pot set curd, sweetened with crushed dark jaggery and brittle sesame Tilkut, concluding the day with warm, ghee-tempered Khichdi.',
      dishIds: ['dahi-chura', 'gaya-tilkut', 'bihari-khichdi']
    },
    {
      id: 'poush-sankranti',
      festivalName: 'Poush Sankranti & Winter Solstice',
      hindiName: 'पूस संक्रांति',
      month: 'Paush (December / January)',
      ritualFocus: 'Winter Grain Harvest & Steaming Tradition',
      sacredFoods: 'Dal Pitha (steamed rice dumplings stuffed with spiced chana dal) and Meetha Pitha.',
      narrative:
        'Celebrated across rural homes as the winter grain crop is stored. Freshly milled rice flour is hand-shaped into half-moon dumplings, stuffed with soaked spiced Bengal gram, and steamed over boiling water—a seasonal, oil-free culinary preparation marking the winter harvest.',
      dishIds: ['dal-pitha']
    },
    {
      id: 'holi',
      festivalName: 'Holi / Phagua',
      hindiName: 'होली / फगुआ',
      month: 'Phalguna (March)',
      ritualFocus: 'Spring Equinox & Communal Reconciliation',
      sacredFoods: 'Warm Malpua, Dahi Vada, Kathal ki Sabzi, and celebratory family feasts.',
      narrative:
        'As clouds of herbal gulal and classical Phagua melodies fill village courtyards, cast-iron skillets bubble with pure desi ghee to fry batches of banana-fennel Malpua. Exchanged between neighboring homes as a gesture of enduring brotherhood.',
      dishIds: ['malpua-bihar']
    },
    {
      id: 'kojagara-puja',
      festivalName: 'Kojagara Lakshmi Puja',
      hindiName: 'कोजागरा (मिथिला)',
      month: 'Ashwin Purnima (October)',
      ritualFocus: 'Autumn Full Moon & Prosperity',
      sacredFoods: 'Mithila Makhana Kheer, Paan (betel leaves), and freshwater fish.',
      narrative:
        'In Mithila, the autumn full moon night is observed with community assemblies, dice games, and the ceremonial distribution of toasted Makhana, betel leaves, and sweet makhana kheer, welcoming Goddess Lakshmi into brightly lit courtyards.',
      dishIds: ['makhana-kheer']
    }
  ];

  return (
    <section id="food-festivals-section" className="space-y-6 mb-16">
      {/* Header */}
      <div className="space-y-2 border-b border-[#EADBCE] dark:border-[#2E343B] pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43]" />
          <span>{language === 'hi' ? 'पर्व और नैवेद्य' : 'Sacred Culinary Calendars'}</span>
        </div>

        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#1E2124] dark:text-[#F5F1E8] tracking-tight">
          {language === 'hi' ? 'पर्व और भोजन का पवित्र संबंध' : 'Food × Festivals'}
        </h2>

        <p className="text-xs sm:text-sm text-[#5A524A] dark:text-[#C8BFB4] max-w-3xl leading-relaxed">
          {language === 'hi'
            ? '“कुछ व्यंजन केवल खाए नहीं जाते; वे किसी अनुष्ठान, ऋतु, स्मृति या मिलन का अभिन्न अंग होते हैं।” जानिए बिहार के प्रमुख त्योहारों और उनके पावन नैवेद्यों का संबंध।'
            : '“Some foods are not simply eaten. They belong to a ritual, season, memory, or gathering.” Explore the deep intertwinement between Bihar’s festivals and its traditional ceremonial foods.'}
        </p>
      </div>

      {/* Festival Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivalLinks.map(fest => {
          const associatedDishes = dishes.filter(d => fest.dishIds.includes(d.id));

          return (
            <div
              key={fest.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#1E2227] border border-[#EADBCE] dark:border-[#2E343B] hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C8276] dark:text-[#A89F93]">
                  <span className="uppercase tracking-wider text-[#C85A32] dark:text-[#E06C43] font-semibold">
                    {fest.month}
                  </span>
                  <span>{fest.ritualFocus}</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-[#F5F1E8]">
                  {language === 'hi' ? fest.hindiName : fest.festivalName}
                </h3>

                <p className="text-xs text-[#4A453E] dark:text-[#C8BFB4] leading-relaxed">
                  {fest.narrative}
                </p>

                <div className="p-3 rounded-2xl bg-[#FBF9F5] dark:bg-[#16191D] border border-[#EADBCE] dark:border-[#2E343B] text-xs">
                  <strong className="text-[#1E2124] dark:text-[#F5F1E8] font-mono uppercase text-[10px] block mb-0.5">
                    Sacred Foods of the Ritual:
                  </strong>
                  <span className="text-[#5A524A] dark:text-[#C8BFB4]">{fest.sacredFoods}</span>
                </div>
              </div>

              {/* Associated Dish Links & Festival Navigation */}
              <div className="pt-3 border-t border-[#F0E8DD] dark:border-[#2E343B] space-y-2">
                <div className="space-y-1">
                  {associatedDishes.map(dish => (
                    <button
                      key={dish.id}
                      onClick={() => onSelectDish(dish)}
                      className="w-full text-left p-2 rounded-xl bg-[#F4EFE6]/60 dark:bg-[#252A30] hover:bg-[#F4EFE6] dark:hover:bg-[#2E343B] text-xs flex items-center justify-between transition-colors"
                    >
                      <span className="truncate text-[#1E2124] dark:text-[#F5F1E8] font-medium">
                        Read Story: {dish.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C85A32] dark:text-[#E06C43] flex-shrink-0" />
                    </button>
                  ))}
                </div>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('festivals')}
                    className="w-full py-2 text-center text-xs font-semibold text-[#C85A32] dark:text-[#E06C43] hover:underline flex items-center justify-center gap-1"
                  >
                    <span>Explore Festival in Bihar 360</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
