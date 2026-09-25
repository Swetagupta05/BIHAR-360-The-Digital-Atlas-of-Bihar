import React, { useState, useMemo } from 'react';
import { ArtCraft } from '../../types';
import { Search, Filter, Sparkles, MapPin, Feather, Bookmark, Check } from 'lucide-react';

interface ArtsDiscoveryProps {
  arts: ArtCraft[];
  language: 'en' | 'hi';
  onSelectArt: (art: ArtCraft) => void;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (art: ArtCraft) => void;
  onSelectDistrict?: (districtId: string) => void;
}

export const ArtsDiscovery: React.FC<ArtsDiscoveryProps> = ({
  arts,
  language,
  onSelectArt,
  isBookmarked,
  onToggleBookmark,
  onSelectDistrict,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'hi' ? 'सभी परंपराएं' : 'All Traditions' },
    { id: 'painting', label: language === 'hi' ? 'चित्रकला एवं लोक भित्ति' : 'Painting & Murals' },
    { id: 'textile', label: language === 'hi' ? 'वस्त्र, रेशम एवं कशीदाकारी' : 'Textiles & Embroidery' },
    { id: 'fibre', label: language === 'hi' ? 'प्राकृतिक घास एवं रेशा' : 'Natural Fibre Craft' },
    { id: 'miniature', label: language === 'hi' ? 'लघु तामचीनी एवं काष्ठ' : 'Miniature Enamel & Wood' },
  ];

  const regions = [
    { id: 'all', label: language === 'hi' ? 'सभी अंचल' : 'All Regions' },
    { id: 'Mithila', label: 'Mithila (मिथिला)' },
    { id: 'Anga', label: 'Anga (अंग प्रदेश)' },
    { id: 'Tirhut', label: 'Tirhut (तिरहुत)' },
    { id: 'Magadh', label: 'Magadh (मगध)' },
  ];

  const materials = [
    { id: 'all', label: language === 'hi' ? 'सभी सामग्रियां' : 'All Materials' },
    { id: 'pigment', label: language === 'hi' ? 'प्राकृतिक वानस्पतिक रंग' : 'Natural Plant Dyes' },
    { id: 'silk', label: language === 'hi' ? 'जंगली तसर कोकून' : 'Wild Tussar Cocoons' },
    { id: 'reed', label: language === 'hi' ? 'सिक्की एवं मूंज घास' : 'Sikki & Munj Reeds' },
    { id: 'cotton', label: language === 'hi' ? 'पुरानी सूती साड़ियां' : 'Vintage Layered Cotton' },
  ];

  const filteredArts = useMemo(() => {
    return arts.filter((art) => {
      // Search
      const matchesSearch =
        !searchQuery ||
        art.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.hindiName.includes(searchQuery) ||
        art.originRegion.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
        art.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category
      const matchesCategory =
        selectedCategory === 'all' || art.categoryType === selectedCategory;

      // Region
      const matchesRegion =
        selectedRegion === 'all' || art.originRegion.toLowerCase().includes(selectedRegion.toLowerCase());

      // Material
      let matchesMaterial = true;
      if (selectedMaterial === 'pigment') {
        matchesMaterial = art.materials.some((m) =>
          /pigment|lampblack|turmeric|indigo|रंग/i.test(m)
        );
      } else if (selectedMaterial === 'silk') {
        matchesMaterial = art.materials.some((m) => /silk|tussar|रेशम/i.test(m));
      } else if (selectedMaterial === 'reed') {
        matchesMaterial = art.materials.some((m) => /sikki|munj|घास/i.test(m));
      } else if (selectedMaterial === 'cotton') {
        matchesMaterial = art.materials.some((m) => /cotton|sari|सूती/i.test(m));
      }

      return matchesSearch && matchesCategory && matchesRegion && matchesMaterial;
    });
  }, [arts, searchQuery, selectedCategory, selectedRegion, selectedMaterial]);

  return (
    <section id="arts-discovery" className="space-y-6 pt-4">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EADBCE] dark:border-[#383D45] pb-4">
        <div>
          <div className="flex items-center gap-2 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-1">
            <Feather className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'अन्वेषण एवं संग्रह' : 'Curated Craft Archive'}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-[#F3EFEA]">
            {language === 'hi' ? 'हस्तशिल्प की खोज' : 'Art Traditions of Bihar'}
          </h2>
          <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70 mt-1 max-w-2xl">
            {language === 'hi'
              ? 'अंचल, सामग्री और कला-रूप के आधार पर बिहार की प्राचीन एवं समकालीन हस्तकलाओं का अन्वेषण करें।'
              : 'Discover Bihar’s artistic heritage filtered by medium, indigenous material, and geographic homeland.'}
          </p>
        </div>

        {/* Quiet Search Box */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2D3238]/50 dark:text-[#EADBCE]/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'कला, सामग्री या अंचल खोजें...'
                : 'Search art, material, or motif...'
            }
            className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-[#FBF9F5] dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-[#1E2124] dark:text-white placeholder-[#2D3238]/50 focus:outline-none focus:border-[#C85A32] transition-colors"
          />
        </div>
      </div>

      {/* Quiet, Museum-Like Filter Bar */}
      <div className="space-y-3">
        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[#2D3238]/60 dark:text-[#EADBCE]/60 text-[11px] font-semibold uppercase tracking-wider mr-1 shrink-0">
            {language === 'hi' ? 'कला-रूप:' : 'Form:'}
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                  isSelected
                    ? 'bg-[#C85A32] text-white shadow-xs'
                    : 'bg-[#F4EFE6] dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#EADBCE]/60 dark:hover:bg-[#383D45]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sub-Filters: Region and Material */}
        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
          {/* Region selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#2D3238]/60 dark:text-[#EADBCE]/60 text-[11px] font-semibold uppercase tracking-wider">
              {language === 'hi' ? 'अंचल:' : 'Region:'}
            </span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-[#FBF9F5] dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-[#1E2124] dark:text-white rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-[#C85A32]"
            >
              {regions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Material selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#2D3238]/60 dark:text-[#EADBCE]/60 text-[11px] font-semibold uppercase tracking-wider">
              {language === 'hi' ? 'प्राकृतिक सामग्री:' : 'Material:'}
            </span>
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              className="bg-[#FBF9F5] dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-[#1E2124] dark:text-white rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-[#C85A32]"
            >
              {materials.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          {(selectedCategory !== 'all' ||
            selectedRegion !== 'all' ||
            selectedMaterial !== 'all' ||
            searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedRegion('all');
                setSelectedMaterial('all');
                setSearchQuery('');
              }}
              className="text-[#C85A32] hover:underline text-xs ml-auto font-medium"
            >
              {language === 'hi' ? 'सभी फिल्टर हटाएं' : 'Reset filters'}
            </button>
          )}
        </div>
      </div>

      {/* Featured Editorial Stories (Asymmetrical Layout) */}
      {filteredArts.length === 0 ? (
        <div className="p-12 text-center bg-[#FBF9F5] dark:bg-[#25292E] rounded-2xl border border-[#EADBCE] dark:border-[#383D45] text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70">
          <p>{language === 'hi' ? 'इस फिल्टर के साथ कोई कला नहीं मिली।' : 'No art traditions match your current filters.'}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredArts.map((art, idx) => {
            const isEven = idx % 2 === 0;
            const bookmarked = isBookmarked(art.id);

            return (
              <article
                key={art.id}
                className="bg-[#FBF9F5] dark:bg-[#202428] rounded-2xl border border-[#EADBCE] dark:border-[#33383F] overflow-hidden shadow-xs hover:shadow-md transition-all group"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left Column: Image & Media Presentation */}
                  <div className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] overflow-hidden ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    {art.image ? (
                      <img
                        src={art.image}
                        alt={`${art.name} authentic tradition`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1E2124] to-[#2D3238] flex flex-col items-center justify-center p-6 text-center text-[#EADBCE]">
                        <Feather className="w-10 h-10 text-[#C85A32] mb-2 opacity-80" />
                        <h4 className="font-serif font-bold text-lg text-white">{art.name}</h4>
                        <p className="text-xs text-[#EADBCE]/70 mt-1">{art.hindiName}</p>
                        <span className="mt-3 px-2.5 py-1 rounded bg-white/10 text-[10px] uppercase tracking-wider font-semibold border border-white/20">
                          Patna City Heritage
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay & Verified Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/85 text-emerald-200 border border-emerald-500/40 text-[10px] font-semibold tracking-wide backdrop-blur-xs flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>{language === 'hi' ? 'प्रमाणित धरोहर' : 'Authentic Tradition'}</span>
                      </span>

                      {art.giTag && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-950/85 text-amber-200 border border-amber-500/50 text-[10px] font-bold tracking-wide backdrop-blur-xs">
                          ★ GI Tag Certified
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] font-medium text-[#F4A261] tracking-wider uppercase">
                        {art.category}
                      </div>
                      <div className="font-serif text-lg font-bold drop-shadow-sm">
                        {art.originRegion}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Editorial Depth & Process Insight */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E2124] dark:text-white leading-tight">
                            {art.name}
                          </h3>
                          <div className="font-serif italic text-sm sm:text-base text-[#C85A32] mt-0.5">
                            {art.hindiName}
                          </div>
                        </div>

                        {/* Bookmark Button */}
                        <button
                          onClick={() => onToggleBookmark(art)}
                          title={bookmarked ? 'Remove Bookmark' : 'Save to Bookmarks'}
                          className={`p-2.5 rounded-xl border transition-all ${
                            bookmarked
                              ? 'bg-[#C85A32] text-white border-[#C85A32]'
                              : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] border-[#EADBCE] dark:border-[#383D45] hover:bg-[#F4EFE6]'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      {art.tagline && (
                        <p className="font-serif italic text-xs sm:text-sm text-[#2D3238]/80 dark:text-[#EADBCE]/80 border-l-2 border-[#C85A32] pl-3 py-0.5">
                          "{art.tagline}"
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed line-clamp-3">
                        {art.description}
                      </p>

                      {/* Material & Technique Badges */}
                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-t border-[#EADBCE]/70 dark:border-[#33383F]">
                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-[#C85A32] uppercase tracking-wider block">
                            {language === 'hi' ? 'मुख्य सामग्रियां:' : 'Primary Materials:'}
                          </span>
                          <p className="text-[#2D3238]/80 dark:text-[#EADBCE]/80 text-[11px] line-clamp-2">
                            {art.materials.slice(0, 3).join(' • ')}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-[#C85A32] uppercase tracking-wider block">
                            {language === 'hi' ? 'रचना तकनीक:' : 'Key Technique:'}
                          </span>
                          <p className="text-[#2D3238]/80 dark:text-[#EADBCE]/80 text-[11px] line-clamp-2">
                            {art.techniques.slice(0, 110)}...
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#EADBCE] dark:border-[#33383F]">
                      {art.districtId && onSelectDistrict && (
                        <button
                          onClick={() => onSelectDistrict(art.districtId)}
                          className="inline-flex items-center gap-1.5 text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80 hover:text-[#C85A32] font-medium transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                          <span>{language === 'hi' ? 'जिला विवरण देखें →' : 'Explore Origin District →'}</span>
                        </button>
                      )}

                      <button
                        onClick={() => onSelectArt(art)}
                        className="ml-auto px-4 py-2 rounded-xl bg-[#1E2124] hover:bg-[#C85A32] text-white text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 shadow-xs"
                      >
                        <span>{language === 'hi' ? 'पूरी कहानी एवं प्रक्रिया पढ़ें' : 'Read Story & Craft Process'}</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
