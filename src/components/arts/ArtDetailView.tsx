import React, { useState } from 'react';
import { ArtCraft } from '../../types';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  MapPin,
  Sparkles,
  Feather,
  Wrench,
  Check,
  Award,
  Layers,
  Info,
  Calendar,
} from 'lucide-react';

interface ArtDetailViewProps {
  art: ArtCraft;
  language: 'en' | 'hi';
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onSelectDistrict?: (districtId: string) => void;
}

export const ArtDetailView: React.FC<ArtDetailViewProps> = ({
  art,
  language,
  onBack,
  isBookmarked,
  onToggleBookmark,
  onSelectDistrict,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'motifs' | 'materials' | 'community'>('overview');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${art.name} — Bihar 360`,
        text: art.tagline || art.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const steps = art.processSteps || [];
  const motifs = art.motifs || [];

  return (
    <article className="min-h-screen bg-[#FBF9F5] dark:bg-[#1A1D20] text-[#1E2124] dark:text-[#EADBCE] pb-24">
      {/* Top Floating Action Bar */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 dark:bg-[#1A1D20]/90 backdrop-blur-md border-b border-[#EADBCE] dark:border-[#33383F] px-4 sm:px-8 py-3.5 flex items-center justify-between transition-colors">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs font-semibold hover:bg-[#F4EFE6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#C85A32]" />
          <span>{language === 'hi' ? 'शिल्प संग्रह पर लौटें' : 'Back to Crafts Archive'}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleBookmark}
            title={isBookmarked ? 'Remove Bookmark' : 'Save Art'}
            className={`p-2 rounded-xl border text-xs font-medium transition-all ${
              isBookmarked
                ? 'bg-[#C85A32] text-white border-[#C85A32]'
                : 'bg-white dark:bg-[#25292E] border-[#EADBCE] dark:border-[#383D45] hover:bg-[#F4EFE6]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-white dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs hover:bg-[#F4EFE6] transition-colors"
            title="Share Art Experience"
          >
            <Share2 className="w-4 h-4" />
          </button>
          {copied && (
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 space-y-10">
        {/* Editorial Hero Header */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] text-xs font-bold uppercase tracking-wider">
              {art.category} • {art.originRegion}
            </span>

            {art.giTag && (
              <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-bold tracking-wide">
                ★ Geographical Indication (GI) Certified
              </span>
            )}
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#1E2124] dark:text-white leading-tight">
            {art.name}
          </h1>

          <div className="font-serif italic text-xl sm:text-2xl text-[#C85A32]">
            {art.hindiName}
          </div>

          {art.tagline && (
            <p className="font-serif italic text-base sm:text-lg text-[#2D3238]/80 dark:text-[#EADBCE]/80 border-l-3 border-[#C85A32] pl-4 py-1">
              "{art.tagline}"
            </p>
          )}
        </section>

        {/* Hero Image / Gallery Section */}
        <section className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-[#EADBCE] dark:border-[#33383F] aspect-16/9 sm:aspect-21/9 max-h-[480px] shadow-sm">
            <img
              src={selectedGalleryImg || art.image}
              alt={art.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-serif font-bold text-base block">{art.name}</span>
                <span className="text-[#EADBCE]/80 text-xs">Authentic verified visual documentation.</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-black/50 border border-white/20 text-[11px] backdrop-blur-xs font-mono">
                {art.originRegion}
              </span>
            </div>
          </div>

          {/* Curated Gallery Thumbnails */}
          {art.gallery && art.gallery.length > 0 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedGalleryImg(art.image)}
                className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                  (!selectedGalleryImg || selectedGalleryImg === art.image)
                    ? 'border-[#C85A32] scale-103'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={art.image} alt="Primary" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </button>

              {art.gallery.map((imgUrl, gIdx) => (
                <button
                  key={gIdx}
                  onClick={() => setSelectedGalleryImg(imgUrl)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedGalleryImg === imgUrl
                      ? 'border-[#C85A32] scale-103'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Gallery ${gIdx}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Tabbed In-Depth Explorer */}
        <div className="border-b border-[#EADBCE] dark:border-[#383D45] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-semibold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
            }`}
          >
            {language === 'hi' ? '1. ऐतिहासिक अवलोकन' : '1. Overview & History'}
          </button>

          {steps.length > 0 && (
            <button
              onClick={() => setActiveTab('process')}
              className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'process'
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
              }`}
            >
              {language === 'hi' ? '2. निर्माण प्रक्रिया' : '2. Craft Process'}
            </button>
          )}

          {motifs.length > 0 && (
            <button
              onClick={() => setActiveTab('motifs')}
              className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'motifs'
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
              }`}
            >
              {language === 'hi' ? '3. रूपांकन व प्रतीक' : '3. Motifs & Symbolism'}
            </button>
          )}

          <button
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'materials'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
            }`}
          >
            {language === 'hi' ? '4. सामग्री एवं तकनीक' : '4. Materials & Tools'}
          </button>

          <button
            onClick={() => setActiveTab('community')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'community'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white dark:bg-[#25292E] text-[#2D3238] dark:text-[#EADBCE] hover:bg-[#F4EFE6]'
            }`}
          >
            {language === 'hi' ? '5. समुदाय एवं आज का स्वरूप' : '5. Living Community'}
          </button>
        </div>

        {/* Tab 1: OVERVIEW & HISTORY */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6 text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-3">
                <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-white">
                  {language === 'hi' ? 'कला का परिचय' : 'Cultural Narrative'}
                </h3>
                <p>{art.description}</p>
              </div>

              {art.history && (
                <div className="p-6 rounded-3xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-3">
                  <h3 className="font-serif font-bold text-xl text-[#1E2124] dark:text-white">
                    {language === 'hi' ? 'ऐतिहासिक एवं सांस्कृतिक उद्गम' : 'Historical Origins'}
                  </h3>
                  <p>{art.history}</p>
                </div>
              )}
            </div>

            {/* Sidebar Meta Box */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-[#FAF7F2] dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-4 text-xs">
                <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-white uppercase tracking-wider pb-2 border-b border-[#EADBCE] dark:border-[#383D45]">
                  {language === 'hi' ? 'संक्षिप्त विवरण' : 'At A Glance'}
                </h4>

                <div className="space-y-1">
                  <strong className="text-[#C85A32] block font-bold uppercase tracking-wider text-[10px]">
                    {language === 'hi' ? 'सांस्कृतिक अंचल:' : 'Cultural Region:'}
                  </strong>
                  <span className="text-[#1E2124] dark:text-white font-medium">{art.originRegion}</span>
                </div>

                <div className="space-y-1">
                  <strong className="text-[#C85A32] block font-bold uppercase tracking-wider text-[10px]">
                    {language === 'hi' ? 'शिल्प श्रेणी:' : 'Craft Category:'}
                  </strong>
                  <span className="text-[#1E2124] dark:text-white font-medium">{art.category}</span>
                </div>

                {art.giTag && (
                  <div className="space-y-1">
                    <strong className="text-amber-800 dark:text-amber-400 block font-bold uppercase tracking-wider text-[10px]">
                      GI Tag Status:
                    </strong>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                      Certified GI Protection
                    </span>
                  </div>
                )}

                {art.districtId && onSelectDistrict && (
                  <div className="pt-2 border-t border-[#EADBCE] dark:border-[#383D45]">
                    <button
                      onClick={() => onSelectDistrict(art.districtId!)}
                      className="w-full py-2.5 rounded-xl bg-[#1E2124] hover:bg-[#C85A32] text-white font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'उद्गम जिला डोशियर खोलें →' : 'Explore Origin District →'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: PROCESS */}
        {activeTab === 'process' && steps.length > 0 && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-2">
              <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-white">
                {language === 'hi' ? 'चरणबद्ध निर्माण प्रक्रिया' : 'Step-by-Step Craft Methodology'}
              </h3>
              <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70">
                {language === 'hi'
                  ? 'प्राकृतिक सामग्री के संकलन से लेकर अंतिम परिष्करण तक की परंपरागत प्रक्रिया।'
                  : 'Documented procedural phases practiced by ancestral artisans.'}
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((st) => (
                <div
                  key={st.step}
                  className="p-6 rounded-2xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {st.step}
                      </span>
                      <h4 className="font-serif font-bold text-lg text-[#1E2124] dark:text-white">
                        {st.title}
                      </h4>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-[11px] font-bold uppercase tracking-wider self-start sm:self-auto">
                      Phase: {st.phase}
                    </span>
                  </div>

                  {st.hindiTitle && (
                    <div className="font-serif italic text-xs text-[#C85A32] pl-9">
                      {st.hindiTitle}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed pl-9">
                    {st.description}
                  </p>

                  {st.toolOrMaterial && (
                    <div className="ml-9 p-3 rounded-xl bg-[#FAF7F2] dark:bg-[#1E2226] border border-[#EADBCE] dark:border-[#33383F] text-xs text-[#2D3238]/80 dark:text-[#EADBCE]/80">
                      <strong className="text-[#C85A32] mr-1">Required Tool or Medium:</strong>
                      {st.toolOrMaterial}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: MOTIFS */}
        {activeTab === 'motifs' && motifs.length > 0 && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-2">
              <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-white">
                {language === 'hi' ? 'पारंपरिक रूपांकन एवं उनका प्रतीक-अर्थ' : 'Iconography, Motifs & Spiritual Meaning'}
              </h3>
              <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70">
                {language === 'hi'
                  ? 'प्रत्येक रेखा, वक्र और आकृति में प्रकृति और दर्शन का गहरा संदेश समाहित है।'
                  : 'Every sacred motif encodes indigenous philosophy, agrarian blessing, and cosmic harmony.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {motifs.map((motif, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-serif font-bold text-base text-[#1E2124] dark:text-white">
                      {motif.name}
                    </h4>
                    {motif.hindiName && (
                      <span className="font-serif italic text-xs text-[#C85A32]">
                        {motif.hindiName}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
                    {motif.symbolism}
                  </p>
                  {motif.visualContext && (
                    <div className="pt-2 text-[11px] text-[#2D3238]/70 dark:text-[#EADBCE]/70 border-t border-[#EADBCE]/50 dark:border-[#33383F]">
                      <strong className="text-[#C85A32]">Context:</strong> {motif.visualContext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: MATERIALS & TOOLS */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-4">
              <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-white">
                {language === 'hi' ? 'प्राकृतिक सामग्रियां एवं औजार' : 'Materials & Artisan Tools'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {art.materials.map((m, mIdx) => (
                  <span
                    key={mIdx}
                    className="px-3.5 py-1.5 rounded-xl bg-[#FAF7F2] dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs font-semibold text-[#1E2124] dark:text-white"
                  >
                    • {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-3">
              <h4 className="font-serif font-bold text-lg text-[#1E2124] dark:text-white">
                {language === 'hi' ? 'विशेष शिल्पकला तकनीक' : 'Master Technique'}
              </h4>
              <p className="text-xs sm:text-sm text-[#2D3238] dark:text-[#E0D8CE] leading-relaxed">
                {art.techniques}
              </p>
            </div>
          </div>
        )}

        {/* Tab 5: LIVING COMMUNITY */}
        {activeTab === 'community' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#202428] border border-[#EADBCE] dark:border-[#33383F] space-y-4">
              <h3 className="font-serif font-bold text-2xl text-[#1E2124] dark:text-white">
                {language === 'hi' ? 'मास्टर शिल्पी एवं परंपरा के संरक्षक' : 'Master Artisans & Custodians'}
              </h3>
              <p className="text-xs sm:text-sm text-[#2D3238]/70 dark:text-[#EADBCE]/70">
                {language === 'hi'
                  ? 'वे प्रमुख कलाकार जिन्होंने इस कला को विश्व पटल पर स्थापित किया:'
                  : 'Documented master craftspersons associated with this tradition:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {art.masterArtisans.map((ma, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF7F2] dark:bg-[#25292E] border border-[#EADBCE] dark:border-[#383D45] text-xs space-y-0.5"
                  >
                    <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold text-[10px] uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5" />
                      <span>Artisan Master</span>
                    </div>
                    <div className="font-serif font-bold text-sm text-[#1E2124] dark:text-white">
                      {ma}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {art.contemporaryRevival && (
              <div className="p-6 rounded-3xl bg-amber-50 dark:bg-[#25231F] border border-amber-200 dark:border-amber-800/40 text-xs sm:text-sm text-[#2D3238] dark:text-[#EADBCE] space-y-2 leading-relaxed">
                <strong className="text-amber-950 dark:text-amber-200 block text-base font-serif">
                  {language === 'hi' ? 'आज का स्वरूप एवं समकालीन अभ्यास' : 'Contemporary Practice & Revival'}
                </strong>
                <p>{art.contemporaryRevival}</p>
              </div>
            )}
          </div>
        )}
      </main>
    </article>
  );
};
