import React from 'react';
import { ShieldCheck, Sun, CloudRain, Plane, Train, Car, Compass, Heart, AlertCircle, CheckCircle } from 'lucide-react';

interface TravelAdvisorySectionProps {
  language: 'en' | 'hi';
}

export const TravelAdvisorySection: React.FC<TravelAdvisorySectionProps> = ({ language }) => {
  return (
    <div id="traveler-field-guide-section" className="rounded-3xl bg-[#F4EFE6] dark:bg-[#1A1D22] border border-[#EADBCE] dark:border-[#2E343B] p-6 sm:p-10 space-y-8 mb-16">
      {/* Section Header */}
      <div className="border-b border-[#EADBCE] dark:border-[#2E343B] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E6550]/15 dark:bg-[#3E6550]/30 text-[#2A4737] dark:text-[#88C4A0] text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'यात्री परामर्श एवं आचार संहिता' : 'Traveler’s Field Guide & Ethics'}</span>
        </div>

        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F5F1E8]">
          {language === 'hi' ? 'बिहार में जिम्मेदार एवं प्रामाणिक यात्रा' : 'Responsible Exploration & Field Guidelines'}
        </h3>
        <p className="text-xs sm:text-sm text-[#5C554E] dark:text-[#A89F93] mt-1 max-w-3xl">
          {language === 'hi'
            ? 'बिहार की धरोहर केवल देखने की वस्तु नहीं है; यह लाखों लोगों की आस्था, आजीविका और सांस्कृतिक पहचान है। सुखद और सुरक्षित यात्रा के लिए इन व्यावहारिक परामर्शों का ध्यान रखें।'
            : 'Bihar’s heritage is not a static museum exhibit—it is the active living space of agrarian communities, pilgrims, and master artisans. These verified guidelines ensure a culturally sensitive, rewarding journey.'}
        </p>
      </div>

      {/* Grid: 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. Seasons & Weather */}
        <div className="rounded-2xl bg-white dark:bg-[#1E2227] p-5 border border-[#EADBCE] dark:border-[#2E343B] space-y-3">
          <div className="w-9 h-9 rounded-xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center font-bold">
            <Sun className="w-4 h-4" />
          </div>
          <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
            {language === 'hi' ? 'मौसम एवं श्रेष्ठ समय' : 'Seasonal Realities'}
          </h4>
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">October to March:</strong> Golden travel window with crisp mornings, pleasant afternoons (18–25°C), and winter culinary harvests (Tilkut, Khaja).
          </p>
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">April to June:</strong> High heat (38–44°C); plan outdoor explorations exclusively in early morning hours.
          </p>
        </div>

        {/* 2. Transit & Connectivity */}
        <div className="rounded-2xl bg-white dark:bg-[#1E2227] p-5 border border-[#EADBCE] dark:border-[#2E343B] space-y-3">
          <div className="w-9 h-9 rounded-xl bg-[#2C5D75]/10 text-[#2C5D75] flex items-center justify-center font-bold">
            <Train className="w-4 h-4" />
          </div>
          <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
            {language === 'hi' ? 'परिवहन एवं मार्ग' : 'Transit Networks'}
          </h4>
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Airports:</strong> Patna (PAT), Gaya (GAY), and Darbhanga (DIB) provide non-stop connections from major metropolitan cities.
          </p>
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Railways:</strong> Grand Chord line connects Sasaram & Gaya to Delhi & Kolkata within 10–12 hours on Vande Bharat and Rajdhani express trains.
          </p>
        </div>

        {/* 3. Cultural Etiquette */}
        <div className="rounded-2xl bg-white dark:bg-[#1E2227] p-5 border border-[#EADBCE] dark:border-[#2E343B] space-y-3">
          <div className="w-9 h-9 rounded-xl bg-[#3E6550]/10 text-[#3E6550] flex items-center justify-center font-bold">
            <Heart className="w-4 h-4" />
          </div>
          <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
            {language === 'hi' ? 'आस्था एवं परंपरा' : 'Cultural Etiquette'}
          </h4>
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Sacred Shrines:</strong> Remove footwear before entering Mahabodhi, Vishnupad, and Jal Mandir. Modest dress covering shoulders and knees is mandatory.
          </p>
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Chhath Puja Ghats:</strong> Do not touch or step over bamboo baskets (daura) prepared for the Sun god.
          </p>
        </div>

        {/* 4. Ethical Patronage */}
        <div className="rounded-2xl bg-white dark:bg-[#1E2227] p-5 border border-[#EADBCE] dark:border-[#2E343B] space-y-3">
          <div className="w-9 h-9 rounded-xl bg-[#7D4E38]/10 text-[#7D4E38] flex items-center justify-center font-bold">
            <Compass className="w-4 h-4" />
          </div>
          <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-[#F5F1E8]">
            {language === 'hi' ? 'दस्तकारों का सम्मान' : 'Ethical Patronage'}
          </h4>
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Direct Support:</strong> Buy Mithila paintings in Jitwarpur and Sujani quilts in Bhusra directly from women artists without middleman exploitation.
          </p>
          <p className="text-xs text-[#5C554E] dark:text-[#A89F93] leading-relaxed">
            <strong className="text-[#1E2124] dark:text-[#F5F1E8]">Eco-Sanctuaries:</strong> Motorized motorboats are strictly prohibited in the Vikramshila Gangetic Dolphin Sanctuary.
          </p>
        </div>
      </div>
    </div>
  );
};
