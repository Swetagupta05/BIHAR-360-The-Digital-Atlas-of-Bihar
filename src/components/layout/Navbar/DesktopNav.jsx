import React from 'react';
import { NavDropdown } from './NavDropdown';
import { History, Landmark, Utensils, Calendar, Palette, Music, Radio, Compass, BookOpen, MapPin, Users } from 'lucide-react';

export const DesktopNav = ({ activeTab, setActiveTab, t, language }) => {
  return (
    <nav className="hidden lg:flex items-center" aria-label="Main Navigation">
      <div className="bg-[#F4EFE6]/70 dark:bg-[#16191D]/80 border border-[#EADBCE] dark:border-[#2E343B] rounded-full p-1 flex items-center gap-1 shadow-2xs backdrop-blur-xs">
        {/* Explore (Home) */}
        <button
          type="button"
          onClick={() => setActiveTab('home')}
          aria-current={activeTab === 'home' ? 'page' : undefined}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-150 border ${
            activeTab === 'home'
              ? 'bg-white dark:bg-[#252A30] text-[#C85A32] dark:text-[#E07A52] border-[#EADBCE]/80 dark:border-[#38404A] shadow-xs'
              : 'border-transparent text-[#5C6470] dark:text-[#9EA8B3] hover:text-[#14171A] dark:hover:text-[#F5F1E8] hover:bg-[#EADBCE]/40 dark:hover:bg-[#252A30]/50'
          }`}
        >
          {t.explore}
        </button>

        {/* Districts Grid */}
        <button
          type="button"
          onClick={() => setActiveTab('districts')}
          aria-current={activeTab === 'districts' ? 'page' : undefined}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-150 border ${
            activeTab === 'districts'
              ? 'bg-white dark:bg-[#252A30] text-[#C85A32] dark:text-[#E07A52] border-[#EADBCE]/80 dark:border-[#38404A] shadow-xs'
              : 'border-transparent text-[#5C6470] dark:text-[#9EA8B3] hover:text-[#14171A] dark:hover:text-[#F5F1E8] hover:bg-[#EADBCE]/40 dark:hover:bg-[#252A30]/50'
          }`}
        >
          {t.districts}
        </button>

        {/* History & Heritage Dropdown */}
        <NavDropdown
          label={t.historyHeritage}
          isActive={['history', 'heritage'].includes(activeTab)}
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('history')}
            aria-current={activeTab === 'history' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'history'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <History className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.history}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'मगध से आधुनिक काल तक' : 'Magadha to Modern Era'}
              </div>
            </div>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('heritage')}
            aria-current={activeTab === 'heritage' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'heritage'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <Landmark className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.heritage}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'नालंदा, महाबोधि और स्मारक' : 'Nalanda, Mahabodhi & monuments'}
              </div>
            </div>
          </button>
        </NavDropdown>

        {/* Culture & Traditions Dropdown */}
        <NavDropdown
          label={t.cultureTraditions}
          isActive={['cuisine', 'festivals', 'arts', 'music', 'languages'].includes(activeTab)}
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('cuisine')}
            aria-current={activeTab === 'cuisine' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'cuisine'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <Utensils className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.cuisine}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'लिट्टी चोखा, सत्तू, खाजा' : 'Litti Chokha, Sattu, Khaja'}
              </div>
            </div>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('festivals')}
            aria-current={activeTab === 'festivals' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'festivals'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.festivals}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'छठ महापर्व, सोनपुर मेला' : 'Chhath Puja, Sonepur Mela'}
              </div>
            </div>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('arts')}
            aria-current={activeTab === 'arts' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'arts'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <Palette className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.arts}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'मधुबनी, मंजूषा, सुजनी' : 'Madhubani, Manjusha, Sujani'}
              </div>
            </div>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('music')}
            aria-current={activeTab === 'music' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'music'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <Music className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.music}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'ध्रुपद, चैती, कजरी, बिस्मिल्लाह' : 'Dhrupad, Chaiti, Bismillah'}
              </div>
            </div>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('languages')}
            aria-current={activeTab === 'languages' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'languages'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <Radio className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.languages}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'मैथिली, मगही, भोजपुरी' : 'Maithili, Magahi, Bhojpuri'}
              </div>
            </div>
          </button>
        </NavDropdown>

        {/* Places & Nature Dropdown */}
        <NavDropdown
          label={t.placesNature}
          isActive={['places', 'itineraries', 'circuits', 'personalities', 'map'].includes(activeTab)}
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('places')}
            aria-current={activeTab === 'places' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'places'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.places}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'वाल्मीकि वन, ककोलत, नदियाँ' : 'Valmiki, Kakolat, Rivers'}
              </div>
            </div>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('itineraries')}
            aria-current={activeTab === 'itineraries' || activeTab === 'circuits' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'itineraries' || activeTab === 'circuits'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.journeys}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'बौद्ध परिपथ, सूफी परिपथ' : 'Buddhist, Sufi circuits'}
              </div>
            </div>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('personalities')}
            aria-current={activeTab === 'personalities' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'personalities'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <Users className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.personalities}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? 'चाणक्य, आर्यभट्ट, दिनकर' : 'Chanakya, Aryabhata, Dinkar'}
              </div>
            </div>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => setActiveTab('map')}
            aria-current={activeTab === 'map' ? 'page' : undefined}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors rounded-xl my-0.5 ${
              activeTab === 'map'
                ? 'bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E07A52] font-semibold'
                : 'text-[#2D3139] hover:bg-[#EADBCE]/40 dark:text-[#D4CDC3] dark:hover:bg-[#252A30]'
            }`}
          >
            <MapPin className="w-4 h-4 text-[#8B263E] flex-shrink-0" />
            <div>
              <div className="font-medium leading-tight">{t.map}</div>
              <div className="text-[10px] text-[#5C6470] dark:text-[#88929A]">
                {language === 'hi' ? '38 ज़िलों का डिजिटल मानचित्र' : '38 Districts interactive map'}
              </div>
            </div>
          </button>
        </NavDropdown>
      </div>
    </nav>
  );
};
