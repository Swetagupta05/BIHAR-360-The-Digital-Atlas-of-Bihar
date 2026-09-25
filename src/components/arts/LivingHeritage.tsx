import React from 'react';
import { Sparkles, Building2, Users, Leaf, Palette, ArrowRight } from 'lucide-react';

interface LivingHeritageProps {
  language: 'en' | 'hi';
  onScrollToSection: (sectionId: string) => void;
}

export const LivingHeritage: React.FC<LivingHeritageProps> = ({ language, onScrollToSection }) => {
  const livingPillars = [
    {
      title: 'Living Artisan Villages (Jitwarpur & Ranti)',
      hindiTitle: 'कलाकार गांव: जितवारपुर एवं रांटी',
      icon: Users,
      badge: 'Grassroots Academies',
      description:
        'In the Madhubani heartland, Jitwarpur and Ranti are open-air cultural sanctuaries. Here, nearly every domestic courtyard functions as an informal studio where three generations of women sit together, passing painting techniques directly from mother to daughter without formal tuition.',
      contemporaryContext:
        'Over 80% of household incomes in these villages derive directly from hand-painted paper, sarees, and commissioned murals.'
    },
    {
      title: 'Upendra Maharathi Shilp Anusandhan Sansthan (Patna)',
      hindiTitle: 'उपेंद्र महारथी शिल्प अनुसंधान संस्थान',
      icon: Building2,
      badge: 'State Craft Institute',
      description:
        'Established by the Department of Industries, this premier research and development institute in Patna trains hundreds of youth annually in Tikuli, Manjusha, Madhubani, Sikki, and terracotta, ensuring ancient iconographic rules are preserved while improving tool ergonomics.',
      contemporaryContext:
        'Responsible for revitalizing Tikuli art and documenting indigenous plant dyes.'
    },
    {
      title: 'Women’s Livelihood Collectives (Bhusra & Tirhut)',
      hindiTitle: 'महिला स्वयं सहायता समूह एवं सहकारिता',
      icon: Users,
      badge: 'Social Empowerment',
      description:
        'In Muzaffarpur and Sitamarhi, cooperatives like the Mahila Vikas Samiti have transformed domestic quilting into a global fair-trade engine. Over 600 rural women maintain financial sovereignty through collaborative Sujani embroidery projects.',
      contemporaryContext:
        'Direct bank transfers and cooperative ownership ensure zero middleman exploitation.'
    },
    {
      title: 'Civic Canvases: Railway Stations & Metro Murals',
      hindiTitle: 'सार्वजनिक स्थलों पर लोक-चित्रकारी',
      icon: Palette,
      badge: 'Public Architecture',
      description:
        'In 2017, over 200 local women artists painted the entire exterior and platforms of Madhubani Railway Station without charging wages, transforming a transit hub into a national monument of public art. Similar initiatives now adorn Patna Junction and the Bihar Museum.',
      contemporaryContext:
        'Fosters civic pride and introduces millions of everyday commuters to traditional iconography.'
    },
    {
      title: 'Zero-Waste & Biodegradable Living',
      hindiTitle: 'पर्यावरण-अनुकूल शून्य-अपशिष्ट शिल्प',
      icon: Leaf,
      badge: 'Ecological Design',
      description:
        'Long before "sustainable design" became a modern catchphrase, Bihar’s artisans practiced total circular ecology. Sikki grass products, natural plant-dye inks, and recycled cotton quilts return safely to the earth without producing non-biodegradable waste.',
      contemporaryContext:
        'Leading Indian architects now commission Sikki acoustic panels and woven wall installations.'
    }
  ];

  return (
    <section className="space-y-6 pt-4">
      {/* Header */}
      <div className="border-b border-[#EADBCE] dark:border-[#383D45] pb-4">
        <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'जीवंत विरासत' : 'Living Heritage'}</span>
        </div>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F3EFEA]">
          {language === 'hi' ? 'परंपरा जो आज भी जीवित है' : 'Traditions That Are Still Alive'}
        </h2>
        <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70 mt-1 max-w-2xl">
          {language === 'hi'
            ? 'बिहार की कलाएं किसी बंद कांच की अलमारी का मूक अवशेष नहीं हैं; वे आज भी गांवों के आंगनों, सार्वजनिक स्टेशनों, महिला सहकारिताओं और आधुनिक परिधानों में सांस ले रही हैं।'
            : 'These traditions are not extinct museum relics. They pulse in rural courtyards, transit corridors, women-led cooperatives, and sustainable contemporary designs.'}
        </p>
      </div>

      {/* Grid of Living Heritage Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {livingPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#FAF7F2] dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] flex flex-col justify-between space-y-4 shadow-2xs hover:border-[#C85A32] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-[10px] font-bold uppercase tracking-wider text-[#C85A32]">
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1E2124] dark:text-white">
                    {pillar.title}
                  </h3>
                  <div className="font-serif italic text-xs text-[#C85A32]">
                    {pillar.hindiTitle}
                  </div>
                </div>

                <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EADBCE]/60 dark:border-[#33383F] text-[11px] text-[#2D3238]/70 dark:text-[#EADBCE]/70">
                <strong className="text-[#1E2124] dark:text-white mr-1 block sm:inline">
                  Contemporary Footprint:
                </strong>
                {pillar.contemporaryContext}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
