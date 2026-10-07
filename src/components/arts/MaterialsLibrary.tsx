import React, { useState } from 'react';
import { CRAFT_MATERIALS } from '../../data/arts';
import { CraftMaterial } from '../../types';
import { Sparkles, MapPin, Feather, Check, Filter } from 'lucide-react';

interface MaterialsLibraryProps {
  language: 'en' | 'hi';
}

export const MaterialsLibrary: React.FC<MaterialsLibraryProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMaterial, setActiveMaterial] = useState<CraftMaterial>(CRAFT_MATERIALS[0]);

  const categories = [
    { id: 'all', label: language === 'hi' ? 'सभी सामग्रियां' : 'All Materials' },
    { id: 'Mineral & Plant Pigment', label: language === 'hi' ? 'प्राकृतिक वानस्पतिक रंग' : 'Natural Pigments' },
    { id: 'Raw Textile & Cocoon', label: language === 'hi' ? 'रेशम कोकून एवं सूत' : 'Silks & Cocoons' },
    { id: 'Natural Fiber', label: language === 'hi' ? 'प्राकृतिक घास व रेशा' : 'Natural Fibers' },
    { id: 'Traditional Tool', label: language === 'hi' ? 'परंपरागत औजार' : 'Traditional Tools' },
  ];

  const filteredMaterials = CRAFT_MATERIALS.filter((m) =>
    selectedCategory === 'all' ? true : m.category === selectedCategory
  );

  return (
    <section id="materials-archive" className="space-y-6 pt-4">
      {/* Section Header */}
      <div className="border-b border-[#EADBCE] dark:border-[#383D45] pb-4">
        <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'बिहार की माटी और सामग्री' : 'Museum Archive'}</span>
        </div>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F3EFEA]">
          {language === 'hi' ? 'बिहार की प्राकृतिक सामग्रियां' : 'Materials of Bihar'}
        </h2>
        <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70 mt-1 max-w-2xl">
          {language === 'hi'
            ? 'सरसों के दीये का काजल, जंगली अर्जुन के पेड़ों का तसर कोकून, नदी किनारे की सुनहरी सीकी घास और पुरखों की पुरानी साड़ियों के महीन धागे।'
            : 'A museum catalog of the organic materials, hand-forged tools, and plant pigments gathered from Bihar’s rivers, forests, and domestic hearths.'}
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                isSelected
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-[#F4EFE6] dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#EADBCE]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Archive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of Materials */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
          {filteredMaterials.map((mat) => {
            const isSelected = mat.id === activeMaterial.id;
            return (
              <button
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm'
                    : 'bg-[#FBF9F5] dark:bg-[#202428] text-[#1E2124] dark:text-[#EADBCE] border-[#EADBCE] dark:border-[#33383F] hover:bg-[#F4EFE6]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-amber-200' : 'text-[#C85A32]'}`}>
                    {mat.category}
                  </span>
                  <span className={`text-[10px] ${isSelected ? 'text-amber-100' : 'text-[#2D3238]/60 dark:text-[#EADBCE]/60'}`}>
                    {mat.usedInArts[0]}
                  </span>
                </div>
                <div className="font-serif font-bold text-sm mt-1">{mat.name}</div>
                <div className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-amber-100' : 'text-[#2D3238]/70 dark:text-[#EADBCE]/70'}`}>
                  {mat.hindiName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Material Specimen Display */}
        <div className="lg:col-span-7 bg-[#FAF7F2] dark:bg-[#202428] rounded-3xl border border-[#EADBCE] dark:border-[#33383F] p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-1 pb-4 border-b border-[#EADBCE] dark:border-[#33383F]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              {activeMaterial.category} • Botanical & Mineral Specimen
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-white">
              {activeMaterial.name}
            </h3>
            <p className="font-serif italic text-sm text-[#C85A32]">
              {activeMaterial.hindiName}
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
            <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-white">
              {language === 'hi' ? 'प्रकृति एवं वर्णन' : 'Characteristics & Origins'}
            </h4>
            <p>{activeMaterial.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-[#C85A32] block">
                {language === 'hi' ? 'उद्गम एवं प्राप्ति:' : 'Ecological Source:'}
              </strong>
              <p className="text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                {activeMaterial.origin}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
              <strong className="text-xs font-bold text-[#C85A32] block">
                {language === 'hi' ? 'स्पर्श एवं बनावट:' : 'Sensory Texture:'}
              </strong>
              <p className="text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                {activeMaterial.sensoryTexture}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] space-y-1">
            <strong className="text-xs font-bold text-[#C85A32] block">
              {language === 'hi' ? 'संग्रह एवं निष्कर्षण प्रक्रिया:' : 'Extraction & Traditional Preparation:'}
            </strong>
            <p className="text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80 leading-relaxed">
              {activeMaterial.extractionProcess}
            </p>
          </div>

          <div className="pt-2 text-xs flex flex-wrap items-center gap-2">
            <span className="text-[#2D3238]/70 dark:text-[#EADBCE]/70 font-semibold">
              {language === 'hi' ? 'प्रयुक्त होने वाली कलाएं:' : 'Associated Traditions:'}
            </span>
            {activeMaterial.usedInArts.map((art, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] font-semibold text-[11px]"
              >
                {art}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
